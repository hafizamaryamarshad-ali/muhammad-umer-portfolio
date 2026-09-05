import type { Metadata } from 'next';
import { ExperienceList, ProfilePanel, QualityGrid, Reveal, SiteShell } from '@/components/portfolio-shell';

export const metadata: Metadata = { title: 'About Muhammad Umer | AI Automation Engineer', description: 'Learn about Muhammad Umer’s practical engineering approach and professional experience across automation, software, and technical projects.' };

export default function AboutPage() {
  return <SiteShell activePath="/about">
    <header className="about-hero"><Reveal className="about-title"><div className="page-index"><span>PROFILE / 01</span><span>MU — AUTOMATION ENGINEERING</span></div><p className="section-kicker">About Muhammad Umer</p><h1>Engineering practical systems around <em>real work.</em></h1><p>I work where Python, AI, APIs, automation, and business operations meet.</p></Reveal><Reveal className="about-portrait" delay={.08}><ProfilePanel editorial /><span className="vertical-note">INDEPENDENT · PRACTICAL · SYSTEMS-FOCUSED</span></Reveal></header>
    <Reveal className="section about-story"><div className="story-marker"><span>01</span><i /></div><div className="prose-block"><p className="section-kicker">Professional introduction</p><h2>Build the system behind the outcome.</h2><p>My focus is understanding how a process works, finding where manual effort or disconnected tools create friction, and building a dependable system around that reality.</p><p>I work independently, learn unfamiliar systems quickly, and carry automation from workflow mapping through testing, deployment, troubleshooting, and improvement.</p><p>The goal is practical: predictable work should move reliably, while people stay focused on decisions that genuinely require them.</p></div></Reveal>
    <section className="experience-band"><Reveal className="section experience-section"><div className="section-heading"><div><p className="section-kicker">Professional experience</p><h2>Selected companies & teams.</h2></div><p>Presented factually and concisely without unverified roles, dates, or responsibilities.</p></div><ExperienceList /></Reveal></section>
    <Reveal className="section principles-section"><div className="section-heading"><div><p className="section-kicker">Engineering principles</p><h2>How the work is carried.</h2></div></div><QualityGrid /></Reveal>
  </SiteShell>;
}
