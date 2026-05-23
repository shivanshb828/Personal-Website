import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stack — Shivansh Bansal',
}

const categories = [
  {
    label: 'Hardware',
    content:
      '[MacBook Pro / laptop model]. [Any other hardware worth mentioning — monitors, mechanical keyboards, audio setup. Keep it conversational, not a spec sheet.]',
  },
  {
    label: 'Editor & Terminal',
    content:
      '[Your primary editor — VS Code, Neovim, Cursor, etc.]. [Terminal setup, shell configuration]. [Anything about your dev environment worth noting.]',
  },
  {
    label: 'Languages & Frameworks',
    content:
      '[Primary languages and frameworks you reach for most]. [Opinions or preferences — what you like about them, what you reach for and why.]',
  },
  {
    label: 'Productivity',
    content:
      '[Note-taking tools — Notion, Obsidian, plain text, etc.]. [Task management]. [How you think about staying organized without over-organizing.]',
  },
  {
    label: 'Reading & Learning',
    content:
      '[How you consume information — RSS readers, newsletters, books, papers]. [Anything about your reading habits or learning process worth sharing.]',
  },
  {
    label: 'This Site',
    content:
      'Built with Next.js 14 (App Router), Tailwind CSS, and MDX. Hosted on Vercel. Typography: EB Garamond for body, DM Mono for labels and metadata.',
  },
]

export default function StackPage() {
  return (
    <div>
      <h1 className="font-mono text-xs tracking-widest uppercase text-[#555555] mb-12">
        Stack
      </h1>
      <div className="space-y-0">
        {categories.map((cat) => (
          <div key={cat.label} className="border-t border-[#1f1f1f] py-8">
            <h2 className="font-mono text-[0.65rem] uppercase tracking-widest text-[#444444] mb-3">
              {cat.label}
            </h2>
            <p className="leading-[1.8] text-[#aaaaaa] text-[0.9375rem]">
              {cat.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
