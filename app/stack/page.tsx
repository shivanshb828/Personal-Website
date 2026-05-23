import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stack — Shivansh Bansal',
}

type Item = { name: string; note: string; href?: string }

const sections: { label: string; tagline?: string; items: Item[] }[] = [
  {
    label: 'Daily Stack',
    tagline: 'Everything here earns its place.',
    items: [
      { name: 'Cursor', note: 'AI-native IDE. Tab-completions that actually work. I don\'t think about it anymore.', href: 'https://cursor.com' },
      { name: 'VS Code', note: 'Side-by-side with Cursor for extensions it hasn\'t caught up on yet.', href: 'https://code.visualstudio.com' },
      { name: 'Warp', note: 'Terminal with natural language command suggestions. Saved me on flags I use twice a year.', href: 'https://warp.dev' },
      { name: 'Raycast', note: 'Replaced Spotlight entirely. Launcher, clipboard history, and custom scripts in one shortcut.', href: 'https://raycast.com' },
      { name: 'Notion', note: 'Project wikis, research notes, anything that needs structure and sharing.', href: 'https://notion.so' },
      { name: 'Obsidian', note: 'Local-first thinking. Fast, offline, plain text, and not going anywhere.', href: 'https://obsidian.md' },
      { name: 'Claude API', note: 'Default for inference and most LLM work. Hard to argue with the context window.', href: 'https://anthropic.com' },
    ],
  },
  {
    label: 'Currently Trying',
    tagline: 'Things I\'m experimenting with but haven\'t fully committed to.',
    items: [
      { name: 'Linear', note: 'Moving bigger projects here from Notion. Early impressions are very good.', href: 'https://linear.app' },
      { name: 'Perplexity', note: 'Research queries where I want citations, not vibes.', href: 'https://perplexity.ai' },
      { name: 'Granola', note: 'AI meeting notes that actually capture what was said, not just a transcript.', href: 'https://granola.so' },
      { name: 'Wispr Flow', note: 'Speech-to-text that works system-wide. Cuts writing time on long docs significantly.', href: 'https://wispr.ai' },
    ],
  },
  {
    label: 'ML & AI',
    tagline: 'Core toolchain for most of what I build.',
    items: [
      { name: 'PyTorch', note: 'Default framework. Rewards understanding what\'s actually happening under the hood.', href: 'https://pytorch.org' },
      { name: 'Hugging Face Transformers', note: 'Model hub and pipelines. Rarely write model code from scratch anymore.', href: 'https://huggingface.co' },
      { name: 'Weights & Biases', note: 'Experiment tracking. Ran 50 experiments without it once — never again.', href: 'https://wandb.ai' },
      { name: 'LangChain', note: 'Fast LLM pipeline prototyping. Replace with raw API calls before anything goes to production.', href: 'https://langchain.com' },
      { name: 'FastAPI', note: 'Serve a model in 30 lines. Go-to for endpoints.', href: 'https://fastapi.tiangolo.com' },
      { name: 'Lambda Labs / Vast.ai', note: 'Rent GPU compute instead of buying. Cheaper and more flexible than owning hardware that depreciates.' },
    ],
  },
  {
    label: 'Bio ML',
    tagline: 'Research-specific tools. Underrated stack for the intersection of ML and life sciences.',
    items: [
      { name: 'RDKit', note: 'Molecular fingerprinting, SMILES parsing, descriptor generation. Best cheminformatics library by a wide margin.', href: 'https://rdkit.org' },
      { name: 'BioPython', note: 'Sequence analysis and database interfacing (NCBI, UniProt). Saves hours on data wrangling.', href: 'https://biopython.org' },
      { name: 'DeepChem', note: 'ML models that understand molecular graphs out of the box. Great for baselines.', href: 'https://deepchem.io' },
      { name: 'AlphaFold / ESMFold', note: 'Protein structure prediction. Changed what\'s possible in structural biology research.', href: 'https://alphafold.ebi.ac.uk' },
      { name: 'AutoDock Vina', note: 'Docking simulations. Core to my work on ligand-receptor topology and drug discovery.', href: 'https://vina.scripps.edu' },
      { name: 'Mol*', note: 'Browser-based molecular visualization. Reach for this before firing up PyMOL.', href: 'https://molstar.org' },
      { name: 'PDB & PubChem', note: 'Open databases I have open all day, every day.', href: 'https://www.rcsb.org' },
    ],
  },
  {
    label: 'Embedded & Hardware',
    tagline: 'What I run code on.',
    items: [
      { name: 'MacBook Pro M2 Pro (14-inch)', note: 'Handles everything short of serious training runs. Battery life is genuinely good.' },
      { name: 'Raspberry Pi 4', note: 'Edge inference prototyping and anything physical. Keeps a permanent spot on my desk.', href: 'https://raspberrypi.com' },
      { name: 'Arduino Uno', note: 'Lower-level hardware interfacing when the Pi is overkill. Great for sensors and actuators.', href: 'https://arduino.cc' },
      { name: 'NVIDIA Jetson Nano', note: 'Runs lightweight models at the edge without a cloud round-trip. Useful for latency-sensitive demos.', href: 'https://developer.nvidia.com/embedded/jetson-nano' },
    ],
  },
  {
    label: 'Reading',
    tagline: 'How I consume information without drowning in it.',
    items: [
      { name: 'ArXiv (cs.LG, cs.AI, q-bio.QM)', note: 'Daily digest. Filter aggressively or drown.', href: 'https://arxiv.org' },
      { name: 'Papers With Code', note: 'Reproduction baselines before I build on top of anything. Saves a lot of wasted effort.', href: 'https://paperswithcode.com' },
      { name: 'Readwise Reader', note: 'Long-form reading that surfaces highlights back at the right time.', href: 'https://readwise.io/read' },
      { name: 'Twitter / X', note: 'Real-time ML discourse. Signal-to-noise ratio is genuinely terrible. The signal is still worth it.' },
    ],
  },
  {
    label: 'This Site',
    items: [
      { name: 'Next.js 14 (App Router)', note: 'Framework and routing.', href: 'https://nextjs.org' },
      { name: 'Tailwind CSS', note: 'Styling — no UI libraries.', href: 'https://tailwindcss.com' },
      { name: 'MDX', note: 'Writing in markdown with React components.' },
      { name: 'Vercel', note: 'Deployment. Auto-deploys on every push.', href: 'https://vercel.com' },
      { name: 'EB Garamond + DM Mono', note: 'Body and metadata typography respectively.' },
    ],
  },
]

export default function StackPage() {
  return (
    <div>
      <h1 className="text-5xl font-normal leading-tight mb-4">Stack</h1>
      <p className="text-[#555555] text-[0.9375rem] leading-[1.8] mb-16 max-w-lg">
        I spend too much time optimizing this. Here&apos;s what I actually use.
      </p>

      <div className="space-y-0">
        {sections.map((section) => (
          <div
            key={section.label}
            className="border-t border-[#1a1a1a] py-8 grid grid-cols-[160px_1fr] gap-8"
          >
            <div className="pt-1">
              <h2 className="font-mono text-[0.65rem] uppercase tracking-widest text-[#777777]">
                {section.label}
              </h2>
              {section.tagline && (
                <p className="font-mono text-[0.6rem] text-[#444444] mt-2 leading-relaxed italic">
                  {section.tagline}
                </p>
              )}
            </div>

            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li key={i} className="text-[0.9375rem] leading-relaxed">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#cccccc] underline underline-offset-[3px] decoration-[#333333] hover:text-[#efefef] hover:decoration-[#666666] transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span className="text-[#cccccc]">{item.name}</span>
                  )}
                  <span className="text-[#555555]"> — {item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
