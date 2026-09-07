import type { Metadata } from 'next';
import { ContactPanel, Reveal, SiteShell } from '@/components/portfolio-shell';

export const metadata: Metadata = { title: 'Contact Muhammad Umer | AI Automation Engineer', description: 'Contact Muhammad Umer about automation, Python, API integrations, and repetitive business tasks.' };

export default function ContactPage() {
  return <SiteShell activePath="/contact">
    <header className="contact-hero"><Reveal><p className="section-kicker">Contact</p><h1>Let&apos;s make repetitive work <em>easier.</em></h1><p>Tell me what takes too much time today. We can start with the task and find a practical next step.</p></Reveal><div className="contact-orbit" aria-hidden="true"><span>TASK</span><i /><span>PLAN</span><i /><span>RESULT</span></div></header>
    <section className="contact-band contact-page-band"><Reveal className="section"><ContactPanel /></Reveal></section>
  </SiteShell>;
}
