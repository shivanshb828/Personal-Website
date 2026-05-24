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
  {name: 'Conditional Aptamer-Protein Interaction Network',
    description: 'A novel deep learning architecture for predicting DNA aptamer binding to arbitrary protein targets, built for Continuity\'s real-time physiological biosensing platform.',
    year: '2026',
    links: [
      { label: 'GitHub', href: 'http://github.com/shivanshb828/CondAptNet' },
    ],
  },
  
  {
    name: 'Snoopy AI',
    description: 'An AI phone agent built for small owner-operated businesses (like dry cleaners or salons). It answers calls 24/7, handles orders and customer inquiries in real time, and syncs everything to the owner\'s Notion workspace.',
    year: '2026',
    links: [
      { label: 'GitHub', href: 'https://github.com/shivanshb828/snoopyAI' },
    ],
  },
  
  {
    name: 'Global Education Inequality Monitoring System',
    description: 'GEIMS is an AI-powered, real-time monitoring platform that tracks and visualizes global education inequality across countries and regions',
    year: '2025',
    links: [
      { label: 'GitHub', href: 'http://github.com/shivanshb828/geims' },
      { label: 'Live', href: 'https://unesco-geims.org/' },
    ],

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
              Interested in machine learning, hardware optimization, and the life sciences.
            </p>
          </div>
          <a
            href="https://scholar.google.com/[your-profile]"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.65rem] uppercase tracking-widest border border-[#2a2a2a] text-[#666666] hover:border-[#555555] hover:text-[#efefef] transition-colors px-3 py-2 shrink-0"
          >
            Google Scholar ↗
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
            Experiments, hackathon projects, and other fun stuff I've built.
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
