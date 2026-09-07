import type { Metadata } from 'next';
import { CaseStudyList, PageHeader, Reveal, SiteShell } from '@/components/portfolio-shell';

export const metadata: Metadata = {
  title: 'Automation Projects | Muhammad Umer',
  description: 'Automation projects built with Python, AI, APIs, integrations, and browser tools.',
};

export default function ProjectsPage() {
  return <SiteShell activePath="/projects">
    <PageHeader kicker="Projects" title="Automation built for real work." intro="Each project shows the problem, what I built, the tools I used, and the result it was designed to deliver." />
    <Reveal className="section work-cases projects-work-cases"><CaseStudyList /></Reveal>
  </SiteShell>;
}
