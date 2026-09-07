import type { Metadata } from 'next';
import { CaseStudyList, PageHeader, Reveal, SiteShell } from '@/components/portfolio-shell';

export const metadata: Metadata = {
  title: 'Automation Projects | Muhammad Umer',
  description: 'Automation projects built with Python, AI, APIs, integrations, and browser tools.',
};

export default function ProjectsPage() {
  return <SiteShell activePath="/projects">
    <PageHeader kicker="Projects" title="Automation built for real work." intro="Each project shows the problem, what I built, the tools I used, and the result it was designed to deliver." />
    <Reveal className="section process-layout projects-layout">
      <aside><p className="section-kicker">Project guide</p><h2>Problem. Build. Result.</h2><p>Every project starts with a real task that takes too much time or causes repeated work.</p><p>The solution is chosen to fit that task.</p><div className="blueprint-key"><span><i /> Problem</span><span><i /> Build</span><span><i /> Result</span></div></aside>
      <CaseStudyList />
    </Reveal>
  </SiteShell>;
}
