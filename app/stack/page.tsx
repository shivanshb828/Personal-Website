import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stack — Shivansh Bansal',
}

const categories = [
  {
    label: 'Hardware',
    content:
      'MacBook Pro M2 Pro (14-inch). Handles day-to-day development and lighter training runs without issue — the battery life alone makes it worth it. For anything that needs serious GPU time I rent compute: Lambda Labs for longer jobs, Vast.ai when I need something spun up in five minutes. On the embedded side I experiment with Raspberry Pi 4s — useful for prototyping edge inference, small sensors, and anything physical. Arduino for lower-level hardware interfacing when the Pi is overkill. The Jetson Nano sits on my desk for running lightweight models at the edge without the cloud round-trip.',
  },
  {
    label: 'Editor & Terminal',
    content:
      'Cursor is my primary editor — the tab-completions and inline edits are genuinely good once your muscle memory adjusts, and the multi-file context is useful for larger refactors. I keep VS Code open alongside it for anything that needs a niche extension or where I want a cleaner mental separation. Warp for the terminal; the natural language command bar has saved me more than once on syntax I only use quarterly. Zsh with a minimal Oh My Zsh setup — nothing fancy.',
  },
  {
    label: 'Languages & Frameworks',
    content:
      'Python for everything ML-related — the ecosystem is unmatched even if the language itself has rough edges. PyTorch as the primary framework; it rewards understanding what\'s happening under the hood. FastAPI for serving models and building lightweight backends. TypeScript for frontend work, and Next.js when a project needs a full-stack layer quickly. I reach for the latter often.',
  },
  {
    label: 'ML & AI',
    content:
      'PyTorch and Hugging Face Transformers are the defaults. Weights & Biases for experiment tracking — once you\'ve run a few hundred experiments with it you can\'t go back to print statements and guesswork. LangChain for rapid LLM pipeline prototyping; I tend to replace it with raw API calls for anything going to production where I need predictability. Claude API for most inference work.',
  },
  {
    label: 'Bio ML',
    content:
      'RDKit for cheminformatics work — molecular fingerprinting, SMILES parsing, and descriptor generation are all first-class. BioPython for sequence analysis and interfacing with databases like UniProt and NCBI. DeepChem when I need ML models that understand molecular graphs out of the box. AlphaFold and ESMFold for structure prediction; Mol* in the browser for visualization when I don\'t want to fire up PyMOL. AutoDock Vina for docking experiments — relevant to my work on ligand-receptor topology and olfactory receptor modeling. The PDB and PubChem are open all day.',
  },
  {
    label: 'Productivity',
    content:
      'Notion for project wikis, research notes, and anything that needs structure and sharing. Obsidian for thinking out loud — the local-first, plain-text approach means it\'s fast, always available, and not going anywhere. I use both without trying to unify them into a single system; the friction of switching is what keeps them useful. Raycast has replaced Spotlight entirely: launcher, clipboard history, window management, and custom scripts in one keystroke.',
  },
  {
    label: 'Reading & Learning',
    content:
      'ArXiv daily digest filtered to cs.LG, cs.AI, and q-bio.QM. Papers With Code for implementation references — especially useful for reproducing baselines before building on top of them. Twitter / X for real-time ML discourse; the signal-to-noise is genuinely bad but the signal matters enough to stay. Longer reads in Readwise Reader, which surfaces highlights back at the right time.',
  },
  {
    label: 'This Site',
    content:
      'Built with Next.js 14 (App Router), Tailwind CSS, and MDX. Deployed on Vercel. Typography: EB Garamond for body text, DM Mono for labels and metadata.',
  },
]

export default function StackPage() {
  return (
    <div>
      <h1 className="text-5xl font-normal leading-tight mb-4">Stack</h1>
      <p className="text-[#555555] text-[0.9375rem] leading-[1.8] mb-16 max-w-lg">
        Tools I use daily. Opinions included.
      </p>
      <div className="space-y-0">
        {categories.map((cat) => (
          <div key={cat.label} className="border-t border-[#1a1a1a] py-8 grid grid-cols-[140px_1fr] gap-8">
            <h2 className="font-mono text-[0.65rem] uppercase tracking-widest text-[#666666] pt-1">
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
