export const budgetOptions = ['$1k-$5k', '$5k-$10k', '$10k-$15k', '$15k-$20k'] as const;
export const contactMethods = ['Email', 'WhatsApp'] as const;

export const contactLimits = {
  name: 100,
  email: 254,
  company: 150,
  project_description: 5000,
  phone: 30,
  timeline: 100,
} as const;

export type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  estimated_budget: (typeof budgetOptions)[number];
  project_description: string;
  preferred_contact_method: (typeof contactMethods)[number];
  phone?: string;
  timeline?: string;
};

type ValidationResult = { ok: true; data: ContactSubmission } | { ok: false; message: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[\d\s()-]{7,30}$/;

const text = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

// Shared by the contact form and the /api/contact route so both enforce the same rules.
export function validateContact(input: unknown): ValidationResult {
  const source = (input && typeof input === 'object' ? input : {}) as Record<string, unknown>;
  const name = text(source.name);
  const email = text(source.email);
  const company = text(source.company);
  const budget = text(source.estimated_budget);
  const description = text(source.project_description);
  const method = text(source.preferred_contact_method);
  const phone = text(source.phone);
  const timeline = text(source.timeline);

  if (!name) return { ok: false, message: 'Please enter your name.' };
  if (!email) return { ok: false, message: 'Please enter your email address.' };
  if (!emailPattern.test(email)) return { ok: false, message: 'Please enter a valid email address.' };
  if (!company) return { ok: false, message: 'Please enter your company name.' };
  if (!budgetOptions.includes(budget as ContactSubmission['estimated_budget'])) return { ok: false, message: 'Please choose an estimated budget.' };
  if (!contactMethods.includes(method as ContactSubmission['preferred_contact_method'])) return { ok: false, message: 'Please choose a preferred contact method.' };
  if (!description) return { ok: false, message: 'Please describe the task you want to automate.' };
  if (phone && !phonePattern.test(phone)) return { ok: false, message: 'Please enter a valid phone number.' };

  const lengths = { name, email, company, project_description: description, phone, timeline };
  for (const [field, value] of Object.entries(lengths)) {
    if (value.length > contactLimits[field as keyof typeof contactLimits]) {
      return { ok: false, message: `Please shorten the ${field.replace('_', ' ')} field.` };
    }
  }

  return {
    ok: true,
    data: {
      name,
      email,
      company,
      estimated_budget: budget as ContactSubmission['estimated_budget'],
      project_description: description,
      preferred_contact_method: method as ContactSubmission['preferred_contact_method'],
      ...(phone && { phone }),
      ...(timeline && { timeline }),
    },
  };
}
