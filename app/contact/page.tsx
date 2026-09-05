import type { Metadata } from 'next';
import { ContactPanel, Reveal, SiteShell } from '@/components/portfolio-shell';

export const metadata: Metadata = { title: 'Contact Muhammad Umer | AI Automation Engineer', description: 'Start a conversation with Muhammad Umer about AI automation, Python workflows, API integrations, and repetitive business processes.' };

export default function ContactPage() {
  return <SiteShell activePath="/contact">
    <header className="contact-hero"><Reveal><div className="page-index"><span>CONTACT / 05</span><span>MU — AUTOMATION ENGINEERING</span></div><p className="section-kicker">Contact</p><h1>Let&apos;s turn repetitive work into a <em>working system.</em></h1><p>Start with what happens today. The right technical direction follows from understanding the real workflow.</p></Reveal><div className="contact-orbit" aria-hidden="true"><span>TRIGGER</span><i /><span>LOGIC</span><i /><span>ACTION</span></div></header>
    <section className="contact-band contact-page-band"><Reveal className="section"><ContactPanel /></Reveal></section>
  </SiteShell>;
}
