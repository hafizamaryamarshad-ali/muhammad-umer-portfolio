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

const process = [
  ['01', 'Discover', 'Understand the process and where work slows down.'],
  ['02', 'Design', 'Map triggers, decisions, integrations, and outputs.'],
  ['03', 'Build', 'Connect the right combination of Python, AI, and APIs.'],
  ['04', 'Deploy', 'Test, release, observe, and maintain the system.'],
] as const;

const featuredProjects = [
  {
    number: '01',
    title: 'Automated Business Data Entry',
    problem: 'Information must be copied between business systems, creating repetitive work and inconsistent records.',
    workflow: ['Source data', 'Validation', 'Transformation', 'System update'],
    tags: ['Python', 'APIs', 'Automation'],
  },
  {
    number: '02',
    title: 'AI Document Processing Workflow',
    problem: 'Useful information is locked in documents and must be prepared manually for downstream processes.',
    workflow: ['Upload', 'Extraction', 'Validation', 'Structured output'],
    tags: ['Python', 'OCR', 'AI'],
  },
] as const;

export default function HomePage() {
  return (
    <SiteShell activePath="/">
      <section className="hp-hero">
        <Reveal className="hp-hero-copy">
          <h1>Muhammad Umer <em>AI Automation Engineer.</em></h1>
          <p className="hp-hero-intro">I build practical automation systems that connect APIs, AI services, and business tools—turning repetitive processes into reliable workflows.</p>
          <div className="hp-hero-actions">
            <a className="button button-primary" href="/work">View My Work <ArrowRight size={17} /></a>
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
        <Reveal className="hp-section-intro"><div><p className="section-kicker">What I build</p><h2>Automation engineered around the way work actually moves.</h2></div><p>From a single repetitive task to a multi-system workflow, every build starts with the process—not the technology.</p></Reveal>
        <Reveal className="hp-capability-matrix">
          {capabilities.map(([number, title, text, flow]) => (
            <article className="hp-capability" key={title}>
              <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><Flow steps={flow} />
            </article>
          ))}
        </Reveal>
      </section>

      <section className="hp-work-section" id="selected-work">
        <Reveal className="hp-section-intro hp-section-intro-light"><div><p className="section-kicker">Automation case files</p><h2>Practical systems, shown in context.</h2></div><p>Selected work framed around the problem, the technical approach, and the workflow it is designed to improve.</p></Reveal>
        <div className="hp-work-grid">
          {featuredProjects.map((project, index) => (
            <Reveal className="hp-work-card" key={project.title} delay={index * 0.06}>
              <header><span>{project.tags.slice(0, 3).join(' · ')}</span></header>
              <div className="hp-work-body"><h3>{project.title}</h3><p>{project.problem}</p></div>
              <div className="hp-work-flow"><span>System flow</span><Flow steps={project.workflow} animated /></div>
              <footer><a href="/work">View Case Study <ArrowUpRight size={16} /></a></footer>
            </Reveal>
          ))}
        </div>
        <Reveal className="hp-work-link"><a href="/work">Explore all selected work <ArrowRight size={17} /></a></Reveal>
      </section>

      <section className="hp-about-section" id="about-preview">
        <Reveal className="hp-about-copy">
          <p className="section-kicker">The engineer behind the system</p>
          <h2>I turn process friction into software that people can rely on.</h2>
          <a className="text-link" href="/about">More about Muhammad Umer <ArrowRight size={16} /></a>
        </Reveal>
      </section>

      <section className="hp-process-section" id="process-preview">
        <Reveal className="hp-process-heading"><span aria-hidden="true" /><div><p className="section-kicker">From friction to working system</p><h2>Discover. Design. Build. Deploy.</h2></div></Reveal>
        <Reveal className="hp-process-rail">
          {process.map(([number, title, text], index) => <article key={title}><div className="hp-process-node"><span>{number}</span><i />{index < process.length - 1 && <b />}</div><h3>{title}</h3><p>{text}</p></article>)}
        </Reveal>
      </section>

      <section className="hp-final-cta" id="contact-cta">
        <Reveal><p className="section-kicker">Ready when the process is</p><h2>Have a repetitive process that should be automated?</h2><p>Let&apos;s turn it into a reliable system.</p><a className="button hp-cta-button" href="/contact">Let&apos;s Work Together <ArrowUpRight size={17} /></a></Reveal>
      </section>
    </SiteShell>
  );
}
