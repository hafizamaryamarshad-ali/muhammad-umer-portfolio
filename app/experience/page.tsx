import type { Metadata } from 'next';
import { Code2 } from 'lucide-react';
import { ExperienceList, Reveal, SiteShell } from '@/components/portfolio-shell';

export const metadata: Metadata = {
  title: 'Experience | Muhammad Umer',
  description: 'Muhammad Umer’s professional experience in automation, Python, and practical software work.',
};

export default function ExperiencePage() {
  return <SiteShell activePath="/experience">
    <Reveal className="section process-layout experience-layout">
      <aside>
        <p className="section-kicker">Companies and roles</p>
        <h2>Where I have worked.</h2>
        <p>I have built automation for healthcare, job applications, and everyday business tasks.</p>
        <div className="blueprint-key"><span><i /> Work</span><span><i /> Systems</span><span><i /> Results</span></div>
      </aside>
      <div className="experience-rail">
        <ExperienceList />
        <a
          className="experience-github"
          href="https://github.com/hafizamaryamarshad-ali/muhammad-umer-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <Code2 size={17} aria-hidden="true" />
          View GitHub
        </a>
      </div>
    </Reveal>
    <section className="dark-band"><Reveal className="section process-principles"><div><h3>Visible</h3><p>Important steps and failures are easy to see.</p></div><div><h3>Tested</h3><p>Inputs and results are checked before release.</p></div><div><h3>Easy to maintain</h3><p>The system stays clear when the work changes.</p></div></Reveal></section>
  </SiteShell>;
}
