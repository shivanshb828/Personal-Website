import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects — Shivansh Bansal',
}

const projects = [
  {
    name: '[Project Name 1]',
    description:
      '[A short description of what this project does, why you built it, and what makes it interesting. 2–3 sentences is ideal.]',
    year: '2024',
    links: [
      { label: 'GitHub', href: 'https://github.com/[your-github]/[repo]' },
      { label: 'Live', href: 'https://[project-url].com' },
    ],
  },
  {
    name: '[Project Name 2]',
    description:
      '[A short description of what this project does, why you built it, and what makes it interesting. 2–3 sentences is ideal.]',
    year: '2024',
    links: [{ label: 'GitHub', href: 'https://github.com/[your-github]/[repo]' }],
  },
  {
    name: '[Project Name 3]',
    description:
      '[A short description of what this project does, why you built it, and what makes it interesting. 2–3 sentences is ideal.]',
    year: '2023',
    links: [
      { label: 'GitHub', href: 'https://github.com/[your-github]/[repo]' },
      { label: 'Demo', href: 'https://[demo-url].com' },
    ],
  },
]

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="font-mono text-xs tracking-widest uppercase text-[#999999] mb-12">
        Projects
      </h1>
      <ul className="space-y-0">
        {projects.map((project, i) => (
          <li key={i} className="border-t border-[#f0f0f0] py-8">
            <div className="flex items-baseline justify-between">
              <h2 className="text-xl">{project.name}</h2>
              <span className="font-mono text-xs text-[#aaaaaa] ml-6 shrink-0">
                {project.year}
              </span>
            </div>
            <p className="text-[#555555] mt-2 leading-[1.8] text-[0.9375rem]">
              {project.description}
            </p>
            <div className="flex gap-5 mt-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-[0.65rem] uppercase tracking-widest text-[#aaaaaa] hover:text-[#111111] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [{link.label}]
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
