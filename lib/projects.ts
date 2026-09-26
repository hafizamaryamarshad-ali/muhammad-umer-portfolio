import projectInventory from '@/lib/projects-data.json';

type InventoryProject = (typeof projectInventory.projects)[number];

const rehobothProject: InventoryProject & { liveUrl: string } = {
  name: 'Rehoboth Cyrus',
  industries: ['Recruitment', 'HR Tech'],
  problem: 'Job-search teams needed a clearer way to reuse candidate information and manage repetitive application work across disconnected tools.',
  automation_flow: 'Create candidate profile → review AI-assisted answers → run the supported workflow → track application progress',
  technologies: ['AI Assistance', 'Workflow Automation', 'Web Application'],
  business_effect: 'Reduces repetitive application administration while keeping important decisions human-reviewed.',
  liveUrl: 'https://rehobothcyrus.com/',
};

const whisperMe = projectInventory.projects.find(project => project.name === 'WhisperMe');
const remainingProjects = projectInventory.projects.filter(project => project.name !== 'WhisperMe');
const hiddenProjects = new Set(['NHS Supporting Statement Writer', 'Invoice OCR Experiments']);
const healthcarePriority = [
  'Clinic Automation (Practice Fusion + Availity)',
  'Alleva Healthcare Operations POC',
  'Jerrican NHS Jobs Automation',
  'Fredej Anesthesia PDF-to-Word',
];
const healthcareRank = (name: string) => {
  const rank = healthcarePriority.indexOf(name);
  return rank === -1 ? healthcarePriority.length : rank;
};
const isHealthcare = (project: InventoryProject) => project.industries.includes('Healthcare');
const visibleProjects = ([whisperMe, rehobothProject, ...remainingProjects].filter(Boolean) as Array<InventoryProject & { liveUrl?: string }>)
  .filter(project => !hiddenProjects.has(project.name));
const orderedProjects = [
  ...visibleProjects.filter(isHealthcare).sort((a, b) => healthcareRank(a.name) - healthcareRank(b.name)),
  ...visibleProjects.filter(project => !isHealthcare(project)),
];

const slugify = (value: string) => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const workflowSteps = (flow: string) => flow
  .split('→')
  .map(step => step.trim().replace(/\s+/g, ' ').split(' ').slice(0, 4).join(' '))
  .filter(Boolean)
  .slice(0, 5);

export const projects = orderedProjects.map((project, index) => {
  const title = project.name === 'Clinic Automation (Practice Fusion + Availity)'
    ? 'Patient Intake & EHR Automation'
    : project.name;

  return {
    number: String(index + 1).padStart(2, '0'),
    title,
    slug: slugify(title),
    healthcare: isHealthcare(project),
    industry: project.industries.join(' · '),
    problem: project.problem,
    outcome: project.business_effect,
    workflow: workflowSteps(project.automation_flow),
    tags: project.technologies,
    liveUrl: project.name === 'WhisperMe' ? 'https://whisperme.ai/' : project.liveUrl,
    demoUrl: project.name === 'Clinic Automation (Practice Fusion + Availity)'
      ? 'https://youtu.be/fUA13F1Kqfw'
      : undefined,
    media: null as string | null,
  };
});
