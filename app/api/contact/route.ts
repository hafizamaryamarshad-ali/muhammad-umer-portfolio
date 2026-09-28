import { validateContact } from '@/lib/contact';

const BACKEND_TIMEOUT_MS = 25_000;

const reply = (status: number, message: string, headers?: HeadersInit) =>
  Response.json({ success: status === 201, message }, { status, headers });

const backendMessage = async (response: Response) => {
  try {
    const body = (await response.json()) as { message?: unknown; error?: unknown };
    const message = body.message ?? body.error;
    return typeof message === 'string' && message.trim() ? message : null;
  } catch {
    return null;
  }
};

export async function POST(request: Request) {
  const baseUrl = process.env.CONTACT_API_URL?.trim();
  if (!baseUrl) return reply(503, 'The contact service is not available right now. Please try again later.');

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return reply(400, 'Invalid request.');
  }

  const result = validateContact(payload);
  if (!result.ok) return reply(400, result.message);

  let response: Response;
  try {
    response = await fetch(`${baseUrl.replace(/\/+$/, '')}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(result.data),
      signal: AbortSignal.timeout(BACKEND_TIMEOUT_MS),
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === 'TimeoutError') {
      return reply(504, 'The contact service took too long to respond. Please try again.');
    }
    return reply(502, 'The contact service could not be reached. Please try again later.');
  }

  if (response.status === 201) {
    return reply(201, (await backendMessage(response)) ?? 'Contact submission received');
  }

  if (response.status === 429) {
    const retryAfter = response.headers.get('Retry-After');
    return reply(429, 'Too many messages were sent. Please wait a minute and try again.', retryAfter ? { 'Retry-After': retryAfter } : undefined);
  }

  if (response.status === 400 || response.status === 422) {
    return reply(400, (await backendMessage(response)) ?? 'Please check the form and try again.');
  }

  return reply(502, 'Your message could not be sent. Please try again later.');
}
