import type { Metadata } from 'next';
import { ExperienceList, PageHeader, ProcessTimeline, Reveal, SiteShell } from '@/components/portfolio-shell';

export const metadata: Metadata = {
  title: 'Experience | Muhammad Umer',
  description: 'Muhammad Umer’s professional experience in automation, Python, and practical software work.',
};

export default function ExperiencePage() {
  return <SiteShell activePath="/experience">
    <PageHeader kicker="Professional background" title="Work focused on practical automation." intro="I have built automation for healthcare, job applications, and everyday business tasks." />
    <Reveal className="section experience-section">
      <div className="section-heading"><div><p className="section-kicker">Companies and roles</p><h2>Where I have worked.</h2></div></div>
      <ExperienceList />
    </Reveal>
    <Reveal className="section process-layout experience-approach">
      <aside><p className="section-kicker">Engineering approach</p><h2>A clear way to build.</h2><p>I first understand the task, the tools involved, and where the work slows down.</p><p>Then I build the simplest reliable solution for that process.</p><div className="blueprint-key"><span><i /> Input</span><span><i /> Work</span><span><i /> Result</span></div></aside>
      <ProcessTimeline />
    </Reveal>
    <section className="dark-band"><Reveal className="section process-principles"><div><h3>Visible</h3><p>Important steps and failures are easy to see.</p></div><div><h3>Tested</h3><p>Inputs and results are checked before release.</p></div><div><h3>Easy to maintain</h3><p>The system stays clear when the work changes.</p></div></Reveal></section>
  </SiteShell>;
}
