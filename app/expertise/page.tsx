import type { Metadata } from 'next';
import { ExpertiseGrid, Flow, PageHeader, Reveal, SiteShell, StackGrid } from '@/components/portfolio-shell';

export const metadata: Metadata = { title: 'Automation Expertise | Muhammad Umer', description: 'AI automation, Python development, workflow automation, API integrations, AI/API systems, backend engineering, and web applications.' };

export default function ExpertisePage() {
  return <SiteShell activePath="/expertise">
    <PageHeader kicker="Automation expertise" title="Engineering the work between systems." intro="A focused technical practice spanning Python, AI, APIs, workflow automation, and the applications teams use to operate them." />
    <Reveal className="section systems-map"><div className="map-copy"><p className="section-kicker">System architecture</p><h2>One workflow. Multiple technical layers.</h2><p>The value sits in how each layer is connected, validated, and made dependable.</p></div><div className="map-surface"><Flow steps={['Business trigger', 'Python service', 'AI / API', 'Validation', 'Action']} animated /><div className="map-notes"><span>Controlled input</span><span>Explicit logic</span><span>Observable output</span></div></div></Reveal>
    <Reveal className="section expertise-section"><ExpertiseGrid /></Reveal>
    <section className="stack-band"><Reveal className="section"><div className="section-heading"><div><p className="section-kicker">Technical stack</p><h2>Organized by system role.</h2></div><p>Selected technologies grouped by the role they play in a complete automation system.</p></div><StackGrid /></Reveal></section>
  </SiteShell>;
}
