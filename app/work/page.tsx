import type { Metadata } from 'next';
import { CaseStudyList, PageHeader, Reveal, SiteShell } from '@/components/portfolio-shell';

export const metadata: Metadata = { title: 'Selected Automation Work | Muhammad Umer', description: 'Automation case studies covering Python, AI-assisted document processing, API integrations, CRM workflows, and browser automation.' };

export default function WorkPage() {
  return <SiteShell activePath="/work">
    <PageHeader kicker="Selected automation work" title="Automation, documented in context." intro="Each case file follows the same engineering lens: problem, approach, system flow, technology, and intended outcome—without invented claims or metrics." />
    <Reveal className="section work-cases"><CaseStudyList /></Reveal>
  </SiteShell>;
}
