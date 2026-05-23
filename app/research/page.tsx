import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research — Shivansh Bansal',
}

const papers = [
  {
    title: '[Paper Title 1]',
    venue: '[Conference or Journal], [Year]',
    year: '2024',
    link: 'https://arxiv.org/abs/[paper-id]',
  },
  {
    title: '[Paper Title 2]',
    venue: '[Conference or Journal], [Year]',
    year: '2024',
    link: 'https://arxiv.org/abs/[paper-id]',
  },
  {
    title: '[Paper Title 3]',
    venue: '[Conference or Journal], [Year]',
    year: '2023',
    link: 'https://arxiv.org/abs/[paper-id]',
  },
]

export default function ResearchPage() {
  return (
    <div>
      <h1 className="font-mono text-xs tracking-widest uppercase text-[#555555] mb-4">
        Research
      </h1>
      <p className="text-[#777777] leading-[1.8] mb-12 text-[0.9375rem]">
        [A brief description of your research interests and the areas you work in.]
      </p>
      <ul className="space-y-0">
        {papers.map((paper, i) => (
          <li key={i} className="border-t border-[#1f1f1f] py-7">
            <a
              href={paper.link}
              className="text-[1.0625rem] hover:underline underline-offset-[3px] leading-snug block"
              target="_blank"
              rel="noopener noreferrer"
            >
              {paper.title}
            </a>
            <div className="flex items-center gap-4 mt-2">
              <span className="font-mono text-xs text-[#555555]">
                {paper.venue}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
