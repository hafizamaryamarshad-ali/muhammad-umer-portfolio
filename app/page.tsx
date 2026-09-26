import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight, GitBranch, Zap } from 'lucide-react';
import {
  Flow,
  ProfilePanel,
  Reveal,
  SiteShell,
} from '@/components/portfolio-shell';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Muhammad Umer | AI Automation Engineer',
  description:
    'Muhammad Umer builds practical AI automation systems with Python, APIs, and dependable business workflows.',
};

const capabilities = [
  [
    '01',
    'Business Process Automation',
    'Automate repetitive operational processes, eliminate manual data entry, and move information between systems automatically.',
    ['Process', 'Automate', 'Outcome'],
  ],
  [
    '02',
    'AI Agents',
    'Build AI agents that research, classify, extract information, generate content, make decisions, and take actions across business systems.',
    ['Input', 'Reason', 'Action'],
  ],
  [
    '03',
    'Browser & System Automation',
    "I automate web applications and legacy systems using browser automation when APIs aren't available, including complex authenticated workflows and data-entry processes.",
    ['Browser', 'Automate', 'Complete'],
  ],
  [
    '04',
    'EHR Automation',
    "Automate complex healthcare systems, including workflows where usable APIs aren't available.",
    ['EHR', 'Automate', 'Complete'],
  ],
  [
    '05',
    'System Integrations',
    'Connect CRMs, SaaS platforms, APIs, databases, and internal tools into reliable end-to-end workflows.',
    ['Systems', 'Connect', 'Sync'],
  ],
] as const;

const featuredProjects = projects
  .filter(project => project.healthcare)
  .slice(0, 4)
  .map((project, index) => [
    String(index + 1).padStart(2, '0'),
    project.title,
    project.outcome,
    `/projects#${project.slug}`,
    project.demoUrl,
  ] as const);

const audiences = [
  [
    'Healthcare Organizations',
    'Clinics, medical practices, and healthcare companies looking to streamline patient intake, scheduling, EHR workflows, data entry, and other administrative processes.',
  ],
  [
    'Businesses With Repetitive Operations',
    'Teams spending hours copying data between systems, handling repetitive administrative tasks, or managing workflows that should be automated.',
  ],
  [
    'Companies Building AI Products',
    'Businesses that need AI agents, workflow automation, API integrations, browser automation, or reliable backend systems to bring AI-powered products and features to life.',
  ],
  [
    'AI & SaaS Product Teams',
    'Startups and software companies that need AI agents, LLM integrations, backend automation, browser-based workflows, or automation features added to their products.',
  ],
] as const;

export default function HomePage() {
  return (
    <SiteShell activePath="/">
      <section className="hp-hero">
        <Reveal className="hp-hero-copy">
          <h1>
            Muhammad Umer <em>AI Automation Engineer.</em>
          </h1>
          <p className="hp-hero-intro">
            <em>
              I build production automation systems that eliminate repetitive
              business work.
            </em>
            <br />
            <strong>
              Healthcare Automation · Browser Automation · AI Agents · API
              Integrations · Workflow Systems
            </strong>
          </p>
          <div className="hp-hero-actions">
            <a className="button button-primary" href="/projects">
              View Projects <ArrowRight size={17} />
            </a>
            <a className="button button-secondary" href="/contact">
              Let&apos;s Work Together <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>

        <Reveal className="hp-portrait-composition" delay={0.08}>
          <ProfilePanel compact />
          <div className="hp-floating-note hp-floating-note-one">
            <Zap size={14} />
            <span>LESS FRICTION</span>
          </div>
          <div className="hp-floating-note hp-floating-note-two">
            <GitBranch size={14} />
            <span>CONNECTED SYSTEMS</span>
          </div>
        </Reveal>
      </section>

      <section className="hp-build-section" id="what-i-build">
        <Reveal className="hp-section-intro">
          <div>
            <p className="section-kicker">What I build</p>
            <h2>Practical tools that make work faster and easier.</h2>
          </div>
          <p>
            I can automate one slow task or connect several tools into a clear
            workflow.
          </p>
        </Reveal>
        <Reveal className="hp-capability-matrix">
          {capabilities.map(([number, title, text, flow]) => (
            <article className="hp-capability" key={title}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <Flow steps={flow} />
            </article>
          ))}
        </Reveal>
      </section>

      <section className="hp-featured-projects" id="featured-projects">
        <Reveal className="hp-featured-heading">
          <p className="section-kicker">Featured Projects</p>
          <h2>Automation built around real business outcomes.</h2>
        </Reveal>

        <Reveal className="hp-featured-grid">
          {featuredProjects.map(([number, title, outcome, href, demoUrl]) => (
            <article className="hp-featured-card" key={number}>
              <span className="hp-featured-number">{number}</span>
              {demoUrl && (
                <a className="hp-featured-demo" href={demoUrl} target="_blank" rel="noreferrer" aria-label={`See demo of ${title} on YouTube`}>
                  See Demo <ArrowUpRight size={16} />
                </a>
              )}
              <div>
                <h3>{title}</h3>
                <p>{outcome}</p>
              </div>
              <a href={href} aria-label={`Learn more about ${title}`}>
                Learn more <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </Reveal>

        <Reveal className="hp-featured-footer">
          <p>See more of the systems and workflows I&apos;ve built.</p>
          <a className="text-link" href="/projects">
            Explore all projects <ArrowRight size={16} />
          </a>
        </Reveal>
      </section>

      <section className="hp-audiences-section" id="who-i-work-with">
        <Reveal className="hp-section-intro hp-audiences-heading">
          <div>
            <p className="section-kicker">Who I Work With</p>
            <h2>Built for teams ready to work smarter.</h2>
          </div>
          <p>
            I work with teams that want to reduce repetitive work, connect
            disconnected systems, and build smarter workflows with automation
            and AI.
          </p>
        </Reveal>

        <Reveal className="hp-audiences-list">
          {audiences.map(([title, description], index) => (
            <article className="hp-audience-row" key={title}>
              <div className="hp-audience-index" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <i />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="hp-final-cta" id="contact-cta">
        <Reveal>
          <p className="section-kicker">Start a conversation</p>
          <h2>Have a repetitive task that takes too much time?</h2>
          <p>Let&apos;s find a simpler way to handle it.</p>
          <a className="button hp-cta-button" href="/contact">
            Let&apos;s Work Together <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </section>
    </SiteShell>
  );
}
