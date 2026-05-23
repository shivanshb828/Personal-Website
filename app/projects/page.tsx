import type { Metadata } from 'next'
import ScrollCarousel from '@/components/ScrollCarousel'

export const metadata: Metadata = {
  title: 'Projects — Shivansh Bansal',
}

const papers = [
  {
    title: 'Allosteric Regulation of Ectopically Expressed Olfactory Receptors in Tumor Cells: Ligand-Receptor Topology and Machine Learning-Assisted Drug Discovery',
    venue: 'Research Square (RECOMB, ISMB, SDDS), [2025]',
    year: '2025',
    link: 'https://www.researchsquare.com/article/rs-6950845/v1',
  },
  
]

const projects = [
  {
    name: '[Project Name 1]',
    description: '[A short description of what this project does and why you built it.]',
    year: '2024',
    links: [
      { label: 'GitHub', href: 'https://github.com/[your-github]/[repo]' },
      { label: 'Live', href: 'https://[project-url].com' },
    ],
  },
  {
    name: '[Project Name 2]',
    description: '[A short description of what this project does and why you built it.]',
    year: '2024',
    links: [{ label: 'GitHub', href: 'https://github.com/[your-github]/[repo]' }],
  },
  {
    name: '[Project Name 3]',
    description: '[A short description of what this project does and why you built it.]',
    year: '2023',
    links: [
      { label: 'GitHub', href: 'https://github.com/[your-github]/[repo]' },
      { label: 'Demo', href: 'https://[demo-url].com' },
    ],
  },
  {
    name: '[Project Name 4]',
    description: '[A short description of what this project does and why you built it.]',
    year: '2023',
    links: [{ label: 'GitHub', href: 'https://github.com/[your-github]/[repo]' }],
  },
]

export default function ProjectsPage() {
  return (
    <div className="space-y-20">
      <h1 className="text-5xl font-normal leading-tight">Projects</h1>

      {/* Research section */}
      <section>
        <div className="flex items-end justify-between mb-3">
          <div>
            <h2 className="text-2xl font-normal leading-tight">Research</h2>
            <p className="font-mono text-[0.75rem] text-[#555555] mt-1 italic">
              [Interested in machine learning, hardware optimization, and the life sciences. My research focuses on developing novel algorithms and models that can advance our understanding of complex biological systems and improve healthcare outcomes.]
            </p>
          </div>
          <a
            href="https://scholar.google.com/[your-profile]"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.65rem] uppercase tracking-widest border border-[#2a2a2a] text-[#666666] hover:border-[#555555] hover:text-[#efefef] transition-colors px-3 py-2 shrink-0"
          >
            Google Scholar [coming soon] ↗
          </a>
        </div>

        <div className="border-t border-[#1a1a1a] pt-6">
          <ScrollCarousel count={papers.length} countLabel="papers">
            {papers.map((paper, i) => (
              <a
                key={i}
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-none w-[260px] border border-[#1a1a1a] bg-[#0e0e0e] hover:border-[#2a2a2a] transition-colors p-5 flex flex-col justify-between min-h-[180px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[0.55rem] uppercase tracking-widest text-[#444444]">
                      Research
                    </span>
                    <span className="font-mono text-[0.55rem] text-[#333333]">{paper.year}</span>
                  </div>
                  <p className="text-[0.9375rem] leading-snug group-hover:underline underline-offset-[3px]">
                    {paper.title}
                  </p>
                </div>
                <p className="font-mono text-[0.6rem] uppercase tracking-widest text-[#444444] mt-4">
                  {paper.venue}
                </p>
              </a>
            ))}
          </ScrollCarousel>
        </div>
      </section>

      {/* Technical projects section */}
      <section>
        <div className="mb-3">
          <h2 className="text-2xl font-normal leading-tight">Technical Projects</h2>
          <p className="font-mono text-[0.75rem] text-[#555555] mt-1 italic">
            Tools, experiments, and open-source contributions.
          </p>
        </div>

        <div className="border-t border-[#1a1a1a] pt-6">
          <ScrollCarousel count={projects.length} countLabel="projects">
            {projects.map((project, i) => (
              <div
                key={i}
                className="flex-none w-[260px] border border-[#1a1a1a] bg-[#0e0e0e] p-5 flex flex-col justify-between min-h-[200px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[0.55rem] uppercase tracking-widest text-[#444444]">
                      Technical
                    </span>
                    <span className="font-mono text-[0.55rem] text-[#333333]">{project.year}</span>
                  </div>
                  <p className="text-[0.9375rem] leading-snug font-normal">{project.name}</p>
                  <p className="text-[0.8125rem] text-[#555555] leading-relaxed mt-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[0.6rem] uppercase tracking-widest text-[#444444] hover:text-[#efefef] transition-colors"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </ScrollCarousel>
        </div>
      </section>
    </div>
  )
}
