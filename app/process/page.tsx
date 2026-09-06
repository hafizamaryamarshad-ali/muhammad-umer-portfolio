import type { Metadata } from 'next';
import { PageHeader, ProcessTimeline, Reveal, SiteShell } from '@/components/portfolio-shell';

export const metadata: Metadata = { title: 'Automation Engineering Process | Muhammad Umer', description: 'Muhammad Umer’s process for discovering, mapping, building, testing, deploying, and maintaining automation systems.' };

export default function ProcessPage() {
  return <SiteShell activePath="/process">
    <PageHeader kicker="How I build automation" title="From manual process to production system." intro="Good automation begins with the real workflow and ends with a system that is observable, testable, maintainable, and ready for change." />
    <Reveal className="section process-layout"><aside><p className="section-kicker">Engineering approach</p><h2>Clarity before complexity.</h2><p>I start with how work moves today: what triggers it, where information comes from, what decisions are required, and where the process breaks down.</p><p>The technical design follows that map—not the other way around.</p><div className="blueprint-key"><span><i /> Input</span><span><i /> Logic</span><span><i /> Output</span></div></aside><ProcessTimeline /></Reveal>
    <section className="dark-band"><Reveal className="section process-principles"><div><h3>Observable</h3><p>Failures and checkpoints should be visible.</p></div><div><h3>Testable</h3><p>Inputs, decisions, and outputs should be verifiable.</p></div><div><h3>Maintainable</h3><p>The system should remain understandable as requirements evolve.</p></div></Reveal></section>
  </SiteShell>;
}
