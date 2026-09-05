'use client';

import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Braces,
  Code2,
  DatabaseZap,
  FileInput,
  GitBranch,
  Menu,
  Moon,
  PlugZap,
  Send,
  Sun,
  Workflow,
  X,
} from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const capabilities = [
  { icon: Workflow, title: 'AI Automation', text: 'AI-powered workflows and intelligent systems designed to reduce repetitive manual work.' },
  { icon: Braces, title: 'Python Automation', text: 'Custom Python scripts, backend services, browser automation, data processing, and business logic.' },
  { icon: PlugZap, title: 'API Integrations', text: 'Connect CRMs, applications, databases, AI services, email systems, and other business tools through APIs.' },
  { icon: Bot, title: 'AI Agents', text: 'Practical AI agents designed to handle specific business tasks, information processing, and workflow actions.' },
  { icon: FileInput, title: 'Document & Data Automation', text: 'Automated extraction, transformation, validation, and processing of structured and unstructured data.' },
  { icon: Code2, title: 'Web & App Development', text: 'Custom web applications and tools that provide usable interfaces around automated workflows.' },
];

const projects = [
  {
    number: '01',
    title: 'Automated Business Data Entry',
    description: 'Designed an automation workflow for moving information between business systems, reducing repetitive manual data-entry tasks and improving consistency.',
    tags: ['Python', 'APIs', 'Automation', 'Data Processing'],
    problem: 'Business information often needs to be copied between tools by hand, creating avoidable repetition and inconsistent records.',
    approach: 'Map the source and destination fields, define validation rules, and identify where human review is still valuable.',
    automation: 'A Python-led workflow receives records, validates and transforms the data, then sends it to the appropriate system through APIs.',
  },
  {
    number: '02',
    title: 'AI Document Processing Workflow',
    description: 'Built a workflow concept for extracting useful information from documents, processing the data, and preparing structured output for downstream business processes.',
    tags: ['Python', 'OCR', 'AI', 'Data Extraction', 'APIs'],
    problem: 'Useful information is often locked inside varied document formats and must be manually re-entered before it can be used.',
    approach: 'Define the required fields, extraction path, confidence checks, and a consistent structured output.',
    automation: 'Documents move through OCR and AI-assisted extraction, followed by validation and API-ready formatting.',
  },
  {
    number: '03',
    title: 'CRM & Workflow Integration',
    description: 'Created an integration-focused workflow connecting business applications through APIs so information can move between systems without repeated manual intervention.',
    tags: ['Python', 'REST APIs', 'Webhooks', 'Automation'],
    problem: 'Disconnected business tools create duplicate updates and make it difficult to keep information aligned.',
    approach: 'Identify the system of record, map event triggers, and define safe synchronization behavior.',
    automation: 'Webhooks trigger a Python integration layer that validates incoming data and coordinates changes across APIs.',
  },
  {
    number: '04',
    title: 'Automated Web Workflow',
    description: 'Built browser-based automation for repetitive web processes, including controlled interaction, data collection, validation, and workflow execution.',
    tags: ['Python', 'Playwright', 'Browser Automation', 'Data Processing'],
    problem: 'Some repetitive workflows rely on web interfaces that do not provide a suitable direct integration.',
    approach: 'Break the process into observable steps, define page-state checks, and plan for timeouts and unexpected responses.',
    automation: 'A Playwright-based flow performs controlled interactions, collects required data, validates each step, and reports exceptions.',
  },
];

const stack = [
  ['Languages', ['Python', 'JavaScript', 'Dart']],
  ['AI & Automation', ['AI APIs', 'LLMs', 'AI Agents', 'Workflow Automation', 'Prompt Engineering']],
  ['Backend & APIs', ['REST APIs', 'FastAPI', 'Firebase', 'Webhooks', 'Authentication']],
  ['Web & App', ['Next.js', 'React', 'Flutter']],
  ['Automation', ['Playwright', 'Browser Automation', 'Data Processing', 'API Automation']],
  ['Tools', ['Git', 'GitHub', 'VS Code', 'Canva']],
];

const process = [
  ['Understand', 'Identify the repetitive task, bottleneck, business requirement, and desired outcome.'],
  ['Design', 'Map the workflow, integrations, data flow, automation logic, and failure points.'],
  ['Build', 'Develop the automation using the right combination of Python, APIs, AI, and application logic.'],
  ['Test', 'Test normal flows, edge cases, failures, unexpected inputs, and integration issues.'],
  ['Deploy', 'Put the system into a usable production workflow.'],
  ['Improve', 'Troubleshoot, monitor, and refine the system as requirements evolve.'],
];

const experience = [
  'Endpoint',
  'Endpointech',
  'Southwest Urgent Care',
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formNote, setFormNote] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(saved ? saved === 'dark' : prefersDark);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormNote('This form is ready for a contact service to be connected. No message has been sent.');
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className={`site-nav ${scrolled ? 'nav-scrolled' : ''}`} aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Muhammad Umer, home" onClick={closeMenu}>
          <span>MU</span>
          Muhammad Umer
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className="theme-toggle" type="button" onClick={() => setDark((value) => !value)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
          {['Work', 'Capabilities', 'Process', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}<ArrowDownRight size={17} /></a>
          ))}
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> AI Automation Engineer</p>
          <h1>I Build AI Systems That Eliminate Repetitive Work.</h1>
          <p className="hero-intro">I build practical automation systems using Python, APIs, AI models, web technologies, and workflow integrations — focused on solving real operational problems rather than adding AI for the sake of AI.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View My Work <ArrowDownRight size={17} /></a>
            <a className="button button-secondary" href="#contact">Let&apos;s Build Something</a>
          </div>
          <p className="tool-line">Python <i /> APIs <i /> AI Agents <i /> Workflow Automation <i /> Integrations</p>
        </div>

        <div className="system-map" aria-label="Diagram of an intelligent automation workflow">
          <div className="map-header"><span>Automation system</span><span className="status"><i /> Ready</span></div>
          <div className="map-canvas">
            <svg className="connectors" viewBox="0 0 560 420" aria-hidden="true">
              <path d="M106 93 C190 93 180 210 263 210" />
              <path d="M106 325 C190 325 180 210 263 210" />
              <path d="M321 210 C390 210 385 93 460 93" />
              <path d="M321 210 C390 210 385 325 460 325" />
            </svg>
            <div className="map-node node-a"><span>01</span><strong>Business data</strong><small>Input</small></div>
            <div className="map-node node-b"><span>02</span><strong>API event</strong><small>Trigger</small></div>
            <div className="core-node"><span>AI + PY</span><strong>Process</strong></div>
            <div className="map-node node-c"><span>03</span><strong>Validation</strong><small>Control</small></div>
            <div className="map-node node-d"><span>04</span><strong>Action</strong><small>Output</small></div>
          </div>
          <div className="map-footer"><span>Understand</span><i /><span>Connect</span><i /><span>Automate</span><i /><span>Improve</span></div>
        </div>
      </section>

      <section className="section intro-section reveal">
        <div className="section-kicker">Approach</div>
        <div className="intro-grid">
          <h2>I Build Systems,<br />Not Just Scripts.</h2>
          <div className="body-copy">
            <p>I enjoy taking repetitive or inefficient business processes and turning them into reliable software systems.</p>
            <p>My work combines Python development, APIs, automation, AI capabilities, web applications, and third-party integrations to create workflows that actually solve operational problems.</p>
            <p>I care about the full lifecycle of an automation: understanding the problem, designing the workflow, building it, testing edge cases, deploying it, and improving it when real-world conditions change.</p>
          </div>
        </div>
        <div className="principle-grid">
          {[
            ['01', 'Solve the Real Problem', 'Start with the business problem, not the technology.'],
            ['02', 'Automate Intelligently', 'Use automation and AI where they genuinely improve the workflow.'],
            ['03', 'Build for Reliability', 'Test workflows, handle edge cases, and build systems that can actually be used.'],
          ].map(([number, title, text]) => (
            <article className="principle" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section reveal" id="capabilities">
        <div className="section-heading"><div><p className="section-kicker">Capabilities</p><h2>What I Build</h2></div><p>Purpose-built automation across the systems where work actually happens.</p></div>
        <div className="capability-grid">
          {capabilities.map(({ icon: Icon, title, text }, index) => (
            <article className="capability-card" key={title}>
              <div className="card-top"><Icon size={20} /><span>{String(index + 1).padStart(2, '0')}</span></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section reveal" id="work">
        <div className="section-heading"><div><p className="section-kicker">Selected work</p><h2>Practical Systems,<br />Clearly Explained.</h2></div><p>A selection of practical automation and software projects focused on reducing manual work and improving business processes.</p></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              <Dialog>
                <DialogTrigger className="case-trigger">View Case Study <ArrowUpRight size={16} /></DialogTrigger>
                <DialogContent className="case-dialog">
                  <DialogHeader>
                    <span className="dialog-number">Project {project.number}</span>
                    <DialogTitle className="dialog-title">{project.title}</DialogTitle>
                    <DialogDescription className="dialog-description">{project.description}</DialogDescription>
                  </DialogHeader>
                  <div className="case-steps">
                    <div><span>01</span><h4>Problem</h4><p>{project.problem}</p></div>
                    <div><span>02</span><h4>Approach</h4><p>{project.approach}</p></div>
                    <div><span>03</span><h4>Automation</h4><p>{project.automation}</p></div>
                    <div><span>04</span><h4>Result</h4><p>Designed to reduce repetitive manual work and improve workflow consistency.</p></div>
                  </div>
                </DialogContent>
              </Dialog>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section reveal" aria-labelledby="experience-heading">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Client work</p>
            <h2 id="experience-heading">Professional<br />Experience</h2>
          </div>
          <p>Selected companies and teams I&apos;ve worked with across automation, software, and technical projects.</p>
        </div>
        <div className="experience-list">
          {experience.map((company, index) => (
            <article className="experience-item" key={company}>
              <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{company}</h3>
                <p>Role and project details to be added.</p>
              </div>
              <span className="experience-status">Professional work</span>
            </article>
          ))}
        </div>
        <p className="experience-note">Specific roles, dates, and project details will be included when available.</p>
      </section>

      <section className="section stack-section reveal">
        <div className="section-heading"><div><p className="section-kicker">Technical stack</p><h2>Tools I Work With</h2></div><p>A focused toolkit for building integrations, backend logic, intelligent workflows, and usable applications.</p></div>
        <div className="stack-grid">
          {stack.map(([category, items]) => (
            <article className="stack-group" key={category as string}><h3>{category}</h3><div>{(items as string[]).map((item) => <span key={item}>{item}</span>)}</div></article>
          ))}
        </div>
      </section>

      <section className="process-section reveal" id="process">
        <div className="section process-inner">
          <div className="process-intro"><p className="section-kicker">How I work</p><h2>From Repetitive Task to Reliable System.</h2><p>I don&apos;t just write code. I build and maintain working systems.</p></div>
          <div className="timeline">
            {process.map(([title, text], index) => (
              <article className="timeline-step" key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section automation-section reveal">
        <p className="section-kicker">Why automation</p>
        <h2>Busywork Is Expensive.<br />Good Automation Gives Time Back.</h2>
        <div className="impact-grid">
          <article><span>01</span><GitBranch /><h3>Repetitive</h3><p>Stop spending valuable hours performing the same task again and again.</p></article>
          <article><span>02</span><PlugZap /><h3>Connected</h3><p>Make disconnected tools work together through APIs and automation.</p></article>
          <article><span>03</span><DatabaseZap /><h3>Scalable</h3><p>Build workflows that can handle more work without simply adding more manual effort.</p></article>
        </div>
      </section>

      <section className="section about-section reveal" id="about">
        <div className="about-mark" aria-hidden="true">MU</div>
        <div className="about-copy"><p className="section-kicker">About me</p><h2>A Developer Focused on Practical Automation</h2>
          <p>I&apos;m Muhammad Umer, a developer focused on Python, automation, APIs, AI-powered workflows, and practical software solutions.</p>
          <p>My approach is straightforward: understand how a process works, identify where time and effort are being wasted, then build a reliable system that removes unnecessary manual work.</p>
          <p>I enjoy working independently, learning unfamiliar systems quickly, and turning ambiguous problems into working technical solutions.</p>
        </div>
      </section>

      <section className="section strengths-section reveal">
        {[
          ['Python & Automation', 'Build practical automation logic and backend workflows.'],
          ['APIs & Integrations', 'Connect systems and move information reliably between tools.'],
          ['AI & Intelligent Workflows', 'Use AI where it provides a practical advantage inside real workflows.'],
          ['Independent Problem Solving', 'Research unfamiliar systems, troubleshoot issues, and move from problem to working solution independently.'],
        ].map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}
      </section>

      <section className="contact-section" id="contact">
        <div className="section contact-inner reveal">
          <div className="contact-copy"><p className="section-kicker">Contact</p><h2>Have a Repetitive Process Worth Automating?</h2><p>Let&apos;s turn manual work into a reliable system.</p>
            <div className="contact-links" aria-label="Contact links">
              {['Email', 'GitHub', 'LinkedIn'].map((label) => <span key={label}><strong>{label}</strong><small>Link to be added</small></span>)}
            </div>
          </div>
          <form className="contact-form" onSubmit={submitForm}>
            <div className="form-row"><label>Name<input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label></div>
            <label>Message<textarea name="message" required rows={5} placeholder="Tell me about the process you want to improve." /></label>
            <button className="button button-primary submit-button" type="submit">Send Message <Send size={16} /></button>
            {formNote && <p className="form-note" role="status">{formNote}</p>}
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div><strong>Muhammad Umer</strong><span>AI Automation Engineer</span></div>
        <p>Python <i /> AI <i /> Automation <i /> APIs</p>
        <small>© 2026 Muhammad Umer. All rights reserved.</small>
      </footer>
    </main>
  );
}
