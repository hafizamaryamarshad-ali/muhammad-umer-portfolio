import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight, Bot, FileText, GitBranch, Zap } from 'lucide-react';
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
    approach: 'A controlled data movement workflow that validates, transforms, and routes records between systems.',
    workflow: ['Source data', 'Validation', 'Transformation', 'System update'],
    tags: ['Python', 'APIs', 'Automation'],
  },
  {
    number: '02',
    title: 'AI Document Processing Workflow',
    problem: 'Useful information is locked in documents and must be prepared manually for downstream processes.',
    approach: 'A document pipeline that extracts required information and prepares dependable structured output.',
    workflow: ['Upload', 'Extraction', 'Validation', 'Structured output'],
    tags: ['Python', 'OCR', 'AI'],
  },
] as const;

export default function HomePage() {
  return (
    <SiteShell activePath="/">
      <section className="hp-hero">
        <Reveal className="hp-hero-copy">
          <div className="hp-hero-topline"><span>AI AUTOMATION ENGINEER</span><span>MU / PORTFOLIO</span></div>
          <p className="hp-eyebrow"><i /> AI AUTOMATION ENGINEER</p>
          <h1>Muhammad Umer <em>AI Automation Engineer.</em></h1>
          <p className="hp-hero-intro">I build practical automation systems that connect APIs, AI services, and business tools—turning repetitive processes into reliable workflows.</p>
          <div className="hp-hero-actions">
            <a className="button button-primary" href="/work">View My Work <ArrowRight size={17} /></a>
            <a className="button button-secondary" href="/contact">Let&apos;s Work Together <ArrowUpRight size={16} /></a>
          </div>
          <div className="hp-credibility" aria-label="Technical focus"><span>Python</span><i /><span>AI Automation</span><i /><span>APIs</span><i /><span>Workflow Automation</span></div>
        </Reveal>

        <Reveal className="hp-portrait-composition" delay={0.08}>
          <div className="hp-portrait-register"><span>01 / PROFILE</span><span>ENGINEERING PRACTICE</span></div>
          <ProfilePanel compact />
          <div className="hp-floating-note hp-floating-note-one"><Zap size={14} /><span>LESS FRICTION</span></div>
          <div className="hp-floating-note hp-floating-note-two"><GitBranch size={14} /><span>CONNECTED SYSTEMS</span></div>
          <span className="hp-portrait-side">PYTHON · AI · APIs · AUTOMATION</span>
        </Reveal>
      </section>

      <section className="hp-build-section" id="what-i-build">
        <Reveal className="hp-section-intro"><div><span className="hp-section-index">01 / CAPABILITIES</span><p className="section-kicker">What I build</p><h2>Automation engineered around the way work actually moves.</h2></div><p>From a single repetitive task to a multi-system workflow, every build starts with the process—not the technology.</p></Reveal>
        <Reveal className="hp-signal-rail">
          <article><Bot size={18} /><div><span>01</span><h3>AI where it helps</h3><p>Useful intelligence, grounded in the process.</p></div></article>
          <article><FileText size={18} /><div><span>02</span><h3>Work made visible</h3><p>Clear handoffs, states, and outcomes.</p></div></article>
          <article><Zap size={18} /><div><span>03</span><h3>Built to move</h3><p>Reliable systems that connect the tools you use.</p></div></article>
        </Reveal>
        <Reveal className="hp-capability-matrix">
          {capabilities.map(([number, title, text, flow]) => (
            <article className="hp-capability" key={title}>
              <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><Flow steps={flow} />
            </article>
          ))}
        </Reveal>
      </section>

      <section className="hp-work-section" id="selected-work">
        <Reveal className="hp-section-intro hp-section-intro-light"><div><span className="hp-section-index">02 / SELECTED WORK</span><p className="section-kicker">Automation case files</p><h2>Practical systems, shown in context.</h2></div><p>Selected work framed around the problem, the technical approach, and the workflow it is designed to improve.</p></Reveal>
        <div className="hp-work-grid">
          {featuredProjects.map((project, index) => (
            <Reveal className="hp-work-card" key={project.title} delay={index * 0.06}>
              <header><span>CASE / {project.number}</span><span>{project.tags.slice(0, 3).join(' · ')}</span></header>
              <div className="hp-work-body"><h3>{project.title}</h3><p>{project.problem}</p></div>
              <div className="hp-work-flow"><span>System flow</span><Flow steps={project.workflow} animated /></div>
              <footer><div><span>Technical approach</span><p>{project.approach}</p></div><a href="/work">View Case Study <ArrowUpRight size={16} /></a></footer>
            </Reveal>
          ))}
        </div>
        <Reveal className="hp-work-link"><a href="/work">Explore all selected work <ArrowRight size={17} /></a></Reveal>
      </section>

      <section className="hp-about-section" id="about-preview">
        <Reveal className="hp-about-register"><span>03</span><i /><small>ABOUT / MUHAMMAD UMER</small></Reveal>
        <Reveal className="hp-about-copy">
          <p className="section-kicker">The engineer behind the system</p>
          <h2>I turn process friction into software that people can rely on.</h2>
          <div className="hp-about-columns"><p>My work sits where Python, AI, APIs, automation, and business operations meet. I begin by understanding how the work happens today.</p><p>Then I build the system behind the outcome—clear enough to operate, test, maintain, and improve as requirements evolve.</p></div>
          <a className="text-link" href="/about">More about Muhammad Umer <ArrowRight size={16} /></a>
        </Reveal>
      </section>

      <section className="hp-process-section" id="process-preview">
        <Reveal className="hp-process-heading"><span className="hp-section-index">04 / PROCESS</span><div><p className="section-kicker">From friction to working system</p><h2>Discover. Design. Build. Deploy.</h2></div></Reveal>
        <Reveal className="hp-process-rail">
          {process.map(([number, title, text], index) => <article key={title}><div className="hp-process-node"><span>{number}</span><i />{index < process.length - 1 && <b />}</div><h3>{title}</h3><p>{text}</p></article>)}
        </Reveal>
      </section>

      <section className="hp-final-cta" id="contact-cta">
        <Reveal><span className="hp-section-index">05 / START A CONVERSATION</span><p className="section-kicker">Ready when the process is</p><h2>Have a repetitive process that should be automated?</h2><p>Let&apos;s turn it into a reliable system.</p><a className="button hp-cta-button" href="/contact">Let&apos;s Work Together <ArrowUpRight size={17} /></a></Reveal>
      </section>
    </SiteShell>
  );
}
