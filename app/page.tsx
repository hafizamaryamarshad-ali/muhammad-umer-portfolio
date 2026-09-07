import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight, GitBranch, Zap } from 'lucide-react';
import { Flow, ProfilePanel, Reveal, SiteShell } from '@/components/portfolio-shell';

export const metadata: Metadata = {
  title: 'Muhammad Umer | AI Automation Engineer',
  description: 'Muhammad Umer builds practical AI automation systems with Python, APIs, and dependable business workflows.',
};

const capabilities = [
  ['01', 'AI Automation', 'AI-assisted processing for language, documents, classification, and practical decision support.', ['Context', 'AI / API', 'Decision']],
  ['02', 'Workflow Automation', 'Clear, observable systems that move repetitive business processes from trigger to action.', ['Trigger', 'Logic', 'Action']],
  ['03', 'API Integrations', 'Reliable connections between business applications, services, CRMs, and data sources.', ['Event', 'API', 'Sync']],
  ['04', 'Python Development', 'Focused automation logic, processing pipelines, integrations, and backend services.', ['Input', 'Python', 'Output']],
] as const;

export default function HomePage() {
  return (
    <SiteShell activePath="/">
      <section className="hp-hero">
        <Reveal className="hp-hero-copy">
          <h1>Muhammad Umer <em>AI Automation Engineer.</em></h1>
          <p className="hp-hero-intro">I build automation that removes repetitive work. I use Python, AI, and APIs to connect tools and make everyday processes easier to run.</p>
          <div className="hp-hero-actions">
            <a className="button button-primary" href="/projects">View Projects <ArrowRight size={17} /></a>
            <a className="button button-secondary" href="/contact">Let&apos;s Work Together <ArrowUpRight size={16} /></a>
          </div>
        </Reveal>

        <Reveal className="hp-portrait-composition" delay={0.08}>
          <ProfilePanel compact />
          <div className="hp-floating-note hp-floating-note-one"><Zap size={14} /><span>LESS FRICTION</span></div>
          <div className="hp-floating-note hp-floating-note-two"><GitBranch size={14} /><span>CONNECTED SYSTEMS</span></div>
        </Reveal>
      </section>

      <section className="hp-build-section" id="what-i-build">
        <Reveal className="hp-section-intro"><div><p className="section-kicker">What I build</p><h2>Practical tools that make work faster and easier.</h2></div><p>I can automate one slow task or connect several tools into a clear workflow.</p></Reveal>
        <Reveal className="hp-capability-matrix">
          {capabilities.map(([number, title, text, flow]) => (
            <article className="hp-capability" key={title}>
              <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><Flow steps={flow} />
            </article>
          ))}
        </Reveal>
      </section>

      <section className="hp-about-section" id="about-preview">
        <Reveal className="hp-about-copy">
          <p className="section-kicker">How I work</p>
          <h2>I start with the task, find the slow parts, and build a tool that makes the work easier.</h2>
          <a className="text-link" href="/experience">See my experience <ArrowRight size={16} /></a>
        </Reveal>
      </section>

      <section className="hp-final-cta" id="contact-cta">
        <Reveal><p className="section-kicker">Start a conversation</p><h2>Have a repetitive task that takes too much time?</h2><p>Let&apos;s find a simpler way to handle it.</p><a className="button hp-cta-button" href="/contact">Let&apos;s Work Together <ArrowUpRight size={17} /></a></Reveal>
      </section>
    </SiteShell>
  );
}
