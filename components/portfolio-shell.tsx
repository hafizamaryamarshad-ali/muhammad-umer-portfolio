'use client';

import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Check, Code2, Menu, MessageCircle, Moon, Send, Sun, X } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FormEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { budgetOptions, contactLimits, contactMethods, validateContact } from '@/lib/contact';
import { projects } from '@/lib/projects';

export const navItems = [['Home', '/'], ['Experience', '/experience'], ['Projects', '/projects'], ['Contact', '/contact']] as const;

export { projects };

export const processSteps = [
  ['Understand', 'Learn how the task works today and where time is being lost.'],
  ['Map', 'List the inputs, decisions, tools, and expected result.'],
  ['Build', 'Create the automation and connect the systems it needs.'],
  ['Test', 'Check normal cases, errors, and unexpected inputs.'],
  ['Improve', 'Watch how it performs and update it when the work changes.'],
] as const;

type Experience = {
  mark: string;
  company: string;
  role: string;
  employment: string;
  duration: string;
  location: string;
  description: string;
  url: string;
};

export const experiences: Experience[] = [
  {
    mark: 'ET',
    company: 'Endpointech',
    role: 'Automation Engineer',
    employment: '',
    duration: '2022 – Present',
    location: 'New York, United States',
    description: 'Worked on AI SaaS products, including WhisperMe Interview Assistant and an AI Auto Apply Agent.',
    url: 'https://www.linkedin.com/company/82534194/',
  },
  {
    mark: 'SW',
    company: 'Southwest Urgent Care & Family Practice',
    role: 'Automation Engineer',
    employment: 'Part-time',
    duration: 'Jun 2024 – Present',
    location: 'Houston, Texas, United States · Remote',
    description: 'Automated clinical workflows to reduce manual work and automated EMR data entry operations.',
    url: 'https://www.linkedin.com/company/9458234/',
  },
  {
    mark: 'BL',
    company: 'Blue Level Consulting Ltd',
    role: '',
    employment: 'Freelance',
    duration: '2023 – 2026',
    location: 'Nigeria',
    description: 'Built job application bots for different job platforms.',
    url: '',
  },
  {
    mark: 'fi',
    company: 'Fiverr',
    role: 'Automation Engineer',
    employment: 'Freelance',
    duration: 'Dec 2022 – Jan 2025',
    location: 'Remote',
    description: 'Automated business workflows and repetitive data entry tasks.',
    url: '',
  },
  {
    mark: 'DH',
    company: 'Dream Home Estates',
    role: '',
    employment: 'Freelance',
    duration: '2023 – 2024',
    location: 'California, United States',
    description: 'Automated real estate workflows.',
    url: '',
  },
];

export function Flow({ steps, animated = false }: { steps: readonly string[]; animated?: boolean }) {
  return (
    <div className={`flow-line ${animated ? 'flow-animated' : ''}`} aria-label={steps.join(' to ')}>
      {steps.map((step, index) => (
        <span className="flow-step" key={step}>
          <b><i />{step}</b>
          {index < steps.length - 1 && <ArrowRight className="flow-connector" aria-hidden="true" />}
        </span>
      ))}
    </div>
  );
}

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .1 }}
      transition={{ duration: .48, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SiteShell({ activePath, children }: { activePath: string; children: ReactNode }) {
  const [dark, setDark] = useState(false);
  const [themeReady, setThemeReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setDark(localStorage.getItem('theme') === 'dark');
    setThemeReady(true);

    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!themeReady) return;

    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark, themeReady]);

  return (
    <main className={`page page-${activePath === '/' ? 'home' : activePath.slice(1)}`}>
      <nav className={`site-nav ${scrolled ? 'nav-scrolled' : ''}`} aria-label="Primary navigation">
        <a className="wordmark" href="/" onClick={() => setMenuOpen(false)}>
          <span>MU</span>
          <span className="wordmark-copy">
            <strong>Muhammad Umer</strong>
            <small>AI Automation Engineer</small>
          </span>
        </a>

        <div className="nav-links">
          {navItems.map(([label, href]) => (
            <a
              className={activePath === href ? 'active' : ''}
              aria-current={activePath === href ? 'page' : undefined}
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}

          <a className="nav-cta" href="/contact">
            Let&apos;s Talk <ArrowUpRight size={14} />
          </a>

          <button
            className="theme-toggle"
            type="button"
            onClick={() => setDark(v => !v)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(v => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
          {navItems.map(([label, href]) => (
            <a
              className={activePath === href ? 'active' : ''}
              aria-current={activePath === href ? 'page' : undefined}
              href={href}
              key={href}
              onClick={() => setMenuOpen(false)}
            >
              <span>{label}</span>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      </nav>

      {children}

      <footer className="site-footer">
        <div className="footer-lead">
          <span className="footer-mark">MU</span>
          <div>
            <strong>Muhammad Umer</strong>
            <small>AI Automation Engineer</small>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>

        <div className="footer-meta">
          <div className="footer-ctas">
            <a
              href="https://www.linkedin.com/in/itsmuhammadumer/"
              target="_blank"
              rel="noreferrer"
              aria-label="Connect with Muhammad Umer on LinkedIn"
            >
              <BriefcaseBusiness size={14} /> LinkedIn
            </a>

            <a
              href="https://wa.me/923000335194"
              target="_blank"
              rel="noreferrer"
              aria-label="Message Muhammad Umer on WhatsApp"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>

            <a
              href="https://github.com/am-muhammadumer"
              target="_blank"
              rel="noreferrer"
              aria-label="View Muhammad Umer's GitHub profile"
            >
              <Code2 size={14} /> GitHub
            </a>
          </div>

          <span>Python · AI · APIs · Automation</span>
          <small>© 2026 Muhammad Umer</small>
        </div>
      </footer>
    </main>
  );
}

export function PageHeader({ kicker, title, intro }: { kicker: string; title: string; intro: string }) {
  return (
    <header className="page-header">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .48 }}
      >
        <p className="section-kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="page-intro">{intro}</p>
      </motion.div>
    </header>
  );
}

export function ProfilePanel({ compact = false, editorial = false }: { compact?: boolean; editorial?: boolean }) {
  return (
    <div className={`profile-panel ${compact ? 'compact' : ''} ${editorial ? 'editorial' : ''}`}>
      <div className="profile-grid" aria-hidden="true" />
      <img src="/images/muhammad-umer-profile.png" alt="Muhammad Umer, AI Automation Engineer" />
    </div>
  );
}

export function CaseStudyList({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const timer = window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' }));
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="case-study-list">
      {items.map(project => (
        <motion.article
          className="engineering-case"
          id={project.slug}
          key={project.number}
          whileHover={{ y: -3 }}
          transition={{ duration: .2 }}
        >
          <header>
            <h3>{project.title}</h3>
            <div className="case-header-meta">
              <span className="case-industry">{project.industry}</span>
              {project.demoUrl && (
                <a className="case-live-link" href={project.demoUrl} target="_blank" rel="noreferrer">
                  See Demo <ArrowUpRight size={15} />
                </a>
              )}
              {project.liveUrl && (
                <a className="case-live-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Visit Website <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </header>

          {project.media && (
            <div className="case-media">
              <video controls preload="metadata">
                <source src={project.media} />
              </video>
            </div>
          )}

          <div className="case-core">
            <div className="case-problem">
              <h4>Problem</h4>
              <p>{project.problem}</p>
            </div>

            <div className="case-outcome">
              <h4>Outcome</h4>
              <p>{project.outcome}</p>
            </div>
          </div>

          <div className="case-workflow">
            <span>Automation flow</span>
            <Flow steps={project.workflow} animated />
          </div>

        </motion.article>
      ))}
    </div>
  );
}

export function ProcessTimeline({ compact = false }: { compact?: boolean }) {
  const items = compact ? processSteps.slice(0, 3) : processSteps;

  return (
    <div className={`timeline ${compact ? 'compact' : ''}`}>
      {items.map(([title, text], index) => (
        <article className="timeline-step" key={title}>
          <div className="timeline-number">
            {String(index + 1).padStart(2, '0')}<i />
          </div>

          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>

          <Check size={16} aria-hidden="true" />
        </article>
      ))}
    </div>
  );
}

export function ExperienceList() {
  return (
    <div className="experience-list">
      {experiences.map((item, index) => (
        <article className="experience-item" key={item.company}>
          <header className="experience-card-header">
            <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
            <div className="experience-heading">
              <span
                className={`experience-mark ${item.company === 'Fiverr' ? 'fiverr-mark' : ''}`}
                aria-hidden="true"
              >
                {item.mark}
              </span>

              <div>
                <h3>{item.company}</h3>

                {item.role && (
                  <strong>
                    {item.role}
                    {item.employment && ` · ${item.employment}`}
                  </strong>
                )}
              </div>
            </div>

            {item.url && (
              <a
                className="experience-link"
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${item.company} on LinkedIn`}
              >
                Company page <ArrowUpRight size={16} />
              </a>
            )}
          </header>

          <div className="experience-card-details">
            {item.duration && <div><span>Timeline</span><p>{item.duration}</p></div>}
            {item.location && <div><span>Location</span><p>{item.location}</p></div>}
            {item.description && <div className="experience-summary"><span>Work</span><p>{item.description}</p></div>}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ContactPanel() {
  const [formNote, setFormNote] = useState('');
  const [sending, setSending] = useState(false);
  const sendingRef = useRef(false);

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sendingRef.current) return;

    const form = event.currentTarget;
    const result = validateContact(Object.fromEntries(new FormData(form)));
    if (!result.ok) {
      setFormNote(result.message);
      return;
    }

    sendingRef.current = true;
    setSending(true);
    setFormNote('Sending your message…');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
        signal: AbortSignal.timeout(30_000),
      });
      const body = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;

      if (response.status === 201 && body?.success) {
        form.reset();
        setFormNote('Thank you. Your message has been sent, and I will get back to you soon.');
      } else {
        setFormNote(body?.message ?? 'Your message could not be sent. Please try again later.');
      }
    } catch (error) {
      setFormNote(error instanceof DOMException && error.name === 'TimeoutError'
        ? 'The request took too long. Please try again.'
        : 'Your message could not be sent. Please check your connection and try again.');
    } finally {
      sendingRef.current = false;
      setSending(false);
    }
  };

  return (
    <div className="contact-panel">
      <div className="contact-copy">
        <div className="contact-links" aria-label="Social and contact links">
          <a href="https://www.linkedin.com/in/itsmuhammadumer/" target="_blank" rel="noreferrer">
            <BriefcaseBusiness size={18} aria-hidden="true" />
            <span><strong>LinkedIn</strong><small>Professional profile</small></span>
          </a>
          <a href="https://wa.me/923000335194" target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            <span><strong>WhatsApp</strong><small>Start a conversation</small></span>
          </a>
          <a href="https://github.com/am-muhammadumer" target="_blank" rel="noreferrer">
            <Code2 size={18} aria-hidden="true" />
            <span><strong>GitHub</strong><small>View GitHub profile</small></span>
          </a>
        </div>

        <div className="contact-flow">
          <span>What happens next</span>
          <Flow steps={['Your task', 'A clear plan', 'Next step']} />
        </div>
      </div>

      <form className="contact-form" onSubmit={submitForm}>
        <div className="form-row">
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required maxLength={contactLimits.name} placeholder="Your name" />
          </label>

          <label>
            Email
            <input name="email" type="email" autoComplete="email" required maxLength={contactLimits.email} placeholder="you@example.com" />
          </label>
        </div>

        <div className="form-row">
          <label>
            Company
            <input name="company" type="text" autoComplete="organization" required maxLength={contactLimits.company} placeholder="Your company" />
          </label>

          <label>
            Phone (optional)
            <input name="phone" type="tel" autoComplete="tel" maxLength={contactLimits.phone} placeholder="+92-300-1234567" />
          </label>
        </div>

        <div className="form-row">
          <label>
            Estimated budget
            <select name="estimated_budget" required defaultValue="">
              <option value="" disabled>Choose a range</option>
              {budgetOptions.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>

          <label>
            Preferred contact
            <select name="preferred_contact_method" required defaultValue="">
              <option value="" disabled>Choose a method</option>
              {contactMethods.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
        </div>

        <label>
          Timeline (optional)
          <input name="timeline" type="text" maxLength={contactLimits.timeline} placeholder="e.g. 2-3 months" />
        </label>

        <label>
          Task
          <textarea
            name="project_description"
            required
            maxLength={contactLimits.project_description}
            rows={6}
            placeholder="What task takes too much time today?"
          />
        </label>

        <button className="button button-primary" type="submit" disabled={sending} aria-busy={sending}>
          {sending ? 'Sending…' : 'Start a Conversation'} <Send size={16} />
        </button>

        {formNote && <p className="form-note" role="status">{formNote}</p>}
      </form>
    </div>
  );
}
