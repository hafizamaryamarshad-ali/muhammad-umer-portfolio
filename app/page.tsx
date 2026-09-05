'use client';

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  CheckCircle2,
  Code2,
  DatabaseZap,
  FileInput,
  Menu,
  Moon,
  PlugZap,
  Send,
  ShieldCheck,
  Sun,
  Workflow,
  Wrench,
  X,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FormEvent, useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const navigation = [
  ['Home', 'top'],
  ['About', 'about'],
  ['Work', 'work'],
  ['Experience', 'experience'],
  ['Stack', 'stack'],
  ['Contact', 'contact'],
];

const automationAreas = [
  { icon: Workflow, title: 'Business Processes', text: 'Replace repetitive manual tasks with automated workflows that follow clear business rules.', flow: ['Trigger', 'Logic', 'Action'] },
  { icon: FileInput, title: 'Data & Document Processing', text: 'Extract, transform, validate, and route structured or unstructured information automatically.', flow: ['Input', 'Extract', 'Validate'] },
  { icon: PlugZap, title: 'API Integrations', text: 'Connect CRMs, business applications, databases, and external services through dependable APIs.', flow: ['Event', 'API', 'Sync'] },
  { icon: Bot, title: 'AI Workflows', text: 'Use LLMs and AI services where they add practical judgment or information processing.', flow: ['Context', 'AI', 'Decision'] },
  { icon: Braces, title: 'Browser Automation', text: 'Automate controlled browser tasks when a suitable direct integration is unavailable.', flow: ['Page', 'Logic', 'Action'] },
  { icon: Code2, title: 'Internal Tools', text: 'Build focused interfaces around automation so teams can operate workflows consistently.', flow: ['User', 'Tool', 'Workflow'] },
];

const projects = [
  {
    number: '01',
    title: 'Automated Business Data Entry',
    problem: 'Information must be copied between business systems, creating repetitive work and inconsistent records.',
    solution: 'A controlled data movement workflow that validates, transforms, and routes records between systems.',
    technical: 'Python, APIs, automation logic, field mapping, and data validation.',
    workflow: ['Source data', 'Validation', 'Transformation', 'System update'],
    result: 'Designed to reduce repetitive manual entry and improve workflow consistency.',
    tags: ['Python', 'APIs', 'Automation', 'Data Processing'],
  },
  {
    number: '02',
    title: 'AI Document Processing Workflow',
    problem: 'Useful information is locked in documents and must be prepared manually for downstream processes.',
    solution: 'A document pipeline that extracts required information and prepares dependable structured output.',
    technical: 'Python, OCR, AI-assisted extraction, confidence checks, and API-ready formatting.',
    workflow: ['Upload', 'Extraction', 'Validation', 'Structured output'],
    result: 'Designed to make document information easier to process, verify, and reuse.',
    tags: ['Python', 'OCR', 'AI', 'Data Extraction', 'APIs'],
  },
  {
    number: '03',
    title: 'CRM & Workflow Integration',
    problem: 'Disconnected tools require repeated updates and make it difficult to keep business information aligned.',
    solution: 'An event-driven integration that coordinates changes between applications without duplicate manual work.',
    technical: 'REST APIs, webhooks, Python transformation logic, authentication, and error handling.',
    workflow: ['Trigger', 'API', 'Data processing', 'CRM update', 'Notification'],
    result: 'Designed to move information reliably between systems and reduce fragmented processes.',
    tags: ['Python', 'REST APIs', 'Webhooks', 'Automation'],
  },
  {
    number: '04',
    title: 'Automated Web Workflow',
    problem: 'A repetitive web process must be completed through an interface that does not expose a suitable API.',
    solution: 'A browser automation flow with controlled interaction, observable checkpoints, and exception handling.',
    technical: 'Python, Playwright, page-state checks, validation, and structured data collection.',
    workflow: ['Browser input', 'Automation logic', 'Validation', 'Action'],
    result: 'Designed to execute repeatable browser tasks while making failures visible and recoverable.',
    tags: ['Python', 'Playwright', 'Browser Automation', 'Data Processing'],
  },
];

const stack = [
  ['Programming', ['Python', 'JavaScript', 'Dart']],
  ['AI & Automation', ['AI APIs', 'LLMs', 'AI Agents', 'Workflow Automation', 'Prompt Engineering']],
  ['APIs & Backend', ['REST APIs', 'FastAPI', 'Webhooks', 'Authentication', 'Firebase']],
  ['Web & App Development', ['Next.js', 'React', 'Flutter']],
  ['Automation & Data', ['Playwright', 'Browser Automation', 'Data Processing', 'API Automation']],
  ['Development Tools', ['Git', 'GitHub', 'VS Code']],
];

const process = [
  ['Understand', 'Understand the existing manual workflow, business problem, and required outcome.'],
  ['Map', 'Break the workflow into triggers, inputs, logic, decisions, failure points, and outputs.'],
  ['Build', 'Develop with the right combination of Python, APIs, AI services, browser automation, and integrations.'],
  ['Test', 'Test edge cases, failures, data handling, authentication, and workflow reliability.'],
  ['Deploy', 'Put the system into the environment where the work needs to happen.'],
  ['Improve', 'Monitor, troubleshoot, optimize, and refine the workflow as requirements evolve.'],
];

const experience = ['Endpoint', 'Endpointech', 'Southwest Urgent Care'];

function Flow({ steps, dark = false }: { steps: string[]; dark?: boolean }) {
  return (
    <div className={`flow-line ${dark ? 'flow-dark' : ''}`} aria-label={steps.join(' to ')}>
      {steps.map((step, index) => (
        <span className="flow-step" key={step}>
          <b>{step}</b>
          {index < steps.length - 1 && <ArrowRight aria-hidden="true" />}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formNote, setFormNote] = useState('');
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    setDark(saved ? saved === 'dark' : false);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.14 },
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
      };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormNote('This form is ready for a contact service to be connected. No message has been sent.');
  };

  return (
    <main>
      <nav className={`site-nav ${scrolled ? 'nav-scrolled' : ''}`} aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Muhammad Umer, home" onClick={() => setMenuOpen(false)}>
          <span>MU</span>
          <span className="wordmark-copy"><strong>Muhammad Umer</strong><small>AI Automation Engineer</small></span>
        </a>
        <div className="nav-links">
          {navigation.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
          <a className="nav-cta" href="#contact">Let&apos;s Talk <ArrowUpRight size={14} /></a>
          <button className="theme-toggle" type="button" onClick={() => setDark((value) => !value)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
          {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowDownRight size={17} /></a>)}
          <a href="#contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>Let&apos;s Talk <ArrowUpRight size={17} /></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
          <p className="eyebrow"><span /> Muhammad Umer · AI Automation Engineer</p>
          <h1>I Build AI Systems That Eliminate Repetitive Work.</h1>
          <p className="hero-intro">I design and build practical automation systems that connect AI, APIs, business tools, and workflows to turn repetitive manual work into reliable processes.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View My Work <ArrowDownRight size={17} /></a>
            <a className="button button-secondary" href="#contact">Let&apos;s Work Together <ArrowUpRight size={16} /></a>
          </div>
          <p className="hero-positioning">Python Developer <i /> AI Automation <i /> API Integrations <i /> Workflow Automation</p>
        </motion.div>

        <motion.div className="system-map system-map-pro" initial={reduceMotion ? false : { opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .65, delay: .08 }} aria-label="Diagram showing an automation system from trigger to result">
          <div className="map-header"><span>Workflow / production path</span><span className="status"><i /> System ready</span></div>
          <div className="system-sequence">
            {[
              ['01', 'Trigger', 'Business event'],
              ['02', 'Logic', 'Python rules'],
              ['03', 'AI / API', 'Processing'],
              ['04', 'Action', 'Tool update'],
              ['05', 'Result', 'Reliable output'],
            ].map(([number, label, detail], index) => (
              <motion.div className="sequence-node" key={label} initial={reduceMotion ? false : { opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .25 + index * .09 }}>
                <span>{number}</span><div><strong>{label}</strong><small>{detail}</small></div>
                {index < 4 && <ArrowDownRight aria-hidden="true" />}
              </motion.div>
            ))}
          </div>
          <div className="map-footer"><span>Observable</span><i /><span>Testable</span><i /><span>Maintainable</span></div>
        </motion.div>
      </section>

      <motion.section className="section intro-section" id="about" {...reveal}>
        <p className="section-kicker">Engineering approach</p>
        <div className="intro-grid">
          <h2>I Build Systems,<br />Not Just Scripts.</h2>
          <div className="body-copy">
            <p>My work sits at the intersection of <strong>Python, AI, APIs, automation, and business workflows.</strong></p>
            <p>I start by understanding how work moves today: what triggers it, where information comes from, what decisions are required, and where the process breaks down.</p>
            <p>Then I design a system that can handle the predictable work reliably — including validation, edge cases, deployment, and the changes that arrive after a workflow meets the real world.</p>
          </div>
        </div>
        <div className="system-principle">
          <span>Business problem</span><ArrowRight /><span>Workflow map</span><ArrowRight /><span>Technical system</span><ArrowRight /><span>Practical outcome</span>
        </div>
      </motion.section>

      <motion.section className="section automate-section" {...reveal}>
        <div className="section-heading">
          <div><p className="section-kicker">Automation scope</p><h2>What I Automate</h2></div>
          <p>Focused systems for repetitive work, fragmented tools, and information that needs to move reliably.</p>
        </div>
        <div className="automation-grid">
          {automationAreas.map(({ icon: Icon, title, text, flow }, index) => (
            <motion.article className="automation-card" key={title} whileHover={reduceMotion ? {} : { y: -4 }} transition={{ duration: .2 }}>
              <div className="card-top"><Icon size={19} /><span>{String(index + 1).padStart(2, '0')}</span></div>
              <h3>{title}</h3><p>{text}</p><Flow steps={flow} />
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="section work-section" id="work" {...reveal}>
        <div className="section-heading">
          <div><p className="section-kicker">Case studies</p><h2>Selected<br />Automation Work</h2></div>
          <p>Technical work framed around the process problem, the system design, and the qualitative outcome.</p>
        </div>
        <div className="case-study-list">
          {projects.map((project) => (
            <article className="engineering-case" key={project.number}>
              <header><span>{project.number} / 04</span><h3>{project.title}</h3></header>
              <div className="case-analysis">
                <div><h4>Problem</h4><p>{project.problem}</p></div>
                <div><h4>Solution</h4><p>{project.solution}</p></div>
                <div><h4>Technical approach</h4><p>{project.technical}</p></div>
              </div>
              <div className="case-workflow"><span>Workflow</span><Flow steps={project.workflow} /></div>
              <div className="case-result">
                <div><span>Result</span><p>{project.result}</p></div>
                <Dialog>
                  <DialogTrigger className="case-trigger">Technical summary <ArrowUpRight size={16} /></DialogTrigger>
                  <DialogContent className="case-dialog">
                    <DialogHeader>
                      <span className="dialog-number">Automation case {project.number}</span>
                      <DialogTitle className="dialog-title">{project.title}</DialogTitle>
                      <DialogDescription className="dialog-description">{project.solution}</DialogDescription>
                    </DialogHeader>
                    <div className="case-steps">
                      <div><span>01</span><h4>Problem</h4><p>{project.problem}</p></div>
                      <div><span>02</span><h4>Solution</h4><p>{project.solution}</p></div>
                      <div><span>03</span><h4>Technical approach</h4><p>{project.technical}</p></div>
                      <div><span>04</span><h4>Result</h4><p>{project.result}</p></div>
                    </div>
                    <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </DialogContent>
                </Dialog>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section className="section experience-section" id="experience" {...reveal}>
        <div className="section-heading">
          <div><p className="section-kicker">Client work</p><h2>Professional<br />Experience</h2></div>
          <p>Selected companies and teams I&apos;ve worked with across automation, software, and technical projects.</p>
        </div>
        <div className="experience-list">
          {experience.map((company, index) => (
            <article className="experience-item" key={company}>
              <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{company}</h3><p>Role and project details to be added.</p></div>
              <span className="experience-status">Professional work</span>
            </article>
          ))}
        </div>
        <p className="experience-note">Specific roles, dates, and project details will be included when available.</p>
      </motion.section>

      <section className="process-section" id="process">
        <motion.div className="section process-inner" {...reveal}>
          <div className="process-intro"><p className="section-kicker">How I build automation</p><h2>From Manual Process to Production System.</h2><p>Each stage moves the workflow closer to something observable, reliable, and ready for real use.</p></div>
          <div className="timeline">
            {process.map(([title, text], index) => (
              <article className="timeline-step" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <div className="timeline-rail" aria-hidden="true" />
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.section className="section stack-section" id="stack" {...reveal}>
        <div className="section-heading">
          <div><p className="section-kicker">Technical stack</p><h2>Tools for Building<br />Working Systems</h2></div>
          <p>A focused stack for automation logic, integration work, AI processing, testing, and delivery.</p>
        </div>
        <div className="stack-grid">
          {stack.map(([category, items], index) => (
            <article className="stack-group" key={category as string}>
              <span className="stack-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{category}</h3>
              <div>{(items as string[]).map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section className="why-section" {...reveal}>
        <div className="section why-inner">
          <div>
            <p className="section-kicker">Why automation?</p>
            <h2>Automation Isn&apos;t About Doing More. It&apos;s About Removing What Shouldn&apos;t Be Manual.</h2>
          </div>
          <div className="why-content">
            <p>Repetitive work creates wasted time, inconsistent processes, avoidable human errors, fragmented systems, and slow response times.</p>
            <ul>{['Wasted time', 'Inconsistent processes', 'Avoidable errors', 'Fragmented systems', 'Slow responses'].map((item) => <li key={item}><span />{item}</li>)}</ul>
            <blockquote>Build systems that handle predictable work automatically, while people focus on decisions that actually require them.</blockquote>
          </div>
        </div>
      </motion.section>

      <motion.section className="section about-detail" {...reveal}>
        <div className="about-mark" aria-hidden="true">MU</div>
        <div className="about-copy"><p className="section-kicker">About Muhammad Umer</p><h2>Practical Engineering for Business Workflows</h2>
          <p>I work where Python, AI, APIs, automation, and business operations meet.</p>
          <p>My focus is understanding how a process works, finding the points where manual effort or disconnected tools create friction, and building a system that removes that friction without hiding complexity behind a demo.</p>
          <p>I work independently, learn unfamiliar systems quickly, and carry automation from workflow mapping through testing, deployment, troubleshooting, and improvement.</p>
        </div>
      </motion.section>

      <motion.section className="section real-work-section" {...reveal}>
        <div className="real-work-heading"><p className="section-kicker">Built for real work</p><h2>Good Automation Holds Up After the Demo.</h2></div>
        <div className="real-work-grid">
          <article><Wrench /><span>01</span><h3>Practical</h3><p>Build for actual workflows and business problems.</p></article>
          <article><ShieldCheck /><span>02</span><h3>Reliable</h3><p>Test systems before they become part of a production process.</p></article>
          <article><CheckCircle2 /><span>03</span><h3>Maintainable</h3><p>Create automation that can be understood, monitored, and improved.</p></article>
        </div>
      </motion.section>

      <section className="contact-section" id="contact">
        <motion.div className="section contact-inner" {...reveal}>
          <div className="contact-copy"><p className="section-kicker">Start a conversation</p><h2>Have a Repetitive Workflow Worth Automating?</h2><p>Tell me what your current process looks like. I&apos;ll help identify where automation can remove the manual work.</p>
            <div className="contact-links" aria-label="Contact links">
              {['Email', 'GitHub', 'LinkedIn'].map((label) => <span key={label}><strong>{label}</strong><small>Link to be added</small></span>)}
            </div>
          </div>
          <form className="contact-form" onSubmit={submitForm}>
            <div className="form-row"><label>Name<input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label></div>
            <label>Workflow<textarea name="message" required rows={5} placeholder="What happens today, and where does the manual work slow things down?" /></label>
            <button className="button button-primary submit-button" type="submit">Start a Conversation <Send size={16} /></button>
            {formNote && <p className="form-note" role="status">{formNote}</p>}
          </form>
        </motion.div>
      </section>

      <footer className="site-footer">
        <div><strong>Muhammad Umer</strong><span>AI Automation Engineer</span></div>
        <p>Python <i /> AI <i /> Automation <i /> APIs</p>
        <small>© 2026 Muhammad Umer. All rights reserved.</small>
      </footer>
    </main>
  );
}
