// Single source of truth for site content. Edit here; pages read from this file.

export const site = {
  name: 'Shivansh Bansal',
  url: 'https://www.shivanshbansal.com',
  description: 'CS + Bioinformatics at UCLA. Building at the intersection of biology, machine learning, hardware, and AI safety.',
  lastUpdated: 'November 4th, 2026',
}

export const contact = {
  emails: ['shivanshb@ucla.edu'],
  links: [
    { label: 'GitHub', href: 'https://github.com/shivanshb828', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivansh~bansal', icon: 'linkedin' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=pU6Fo0AAAAAJ', icon: 'scholar' },
    { label: 'X / Twitter', href: 'https://twitter.com/shivanshb2008', icon: 'x' },
  ],
} as const

export type Link = { label: string; href: string }

// ---------------------------------------------------------------------------
// Experience — rendered as a draggable graph; each node opens a panel of roles.
// ---------------------------------------------------------------------------

export type Role = {
  org: string
  orgHref?: string
  title: string
  dates: string
  description?: string
  links?: Link[]
}

export type ExperienceNode = {
  id: string
  label: string
  // Starting position as a fraction of the graph's width/height.
  x: number
  y: number
  roles: Role[]
}

export const experience: ExperienceNode[] = [
  {
    id: 'building',
    label: 'Building',
    x: 0.5,
    y: 0.14,
    roles: [
      {
        org: 'Hypnos',
        title: 'Smart sleep mask · In progress',
        dates: 'Ongoing',
        description:
          'A wearable mask that blocks light, then wakes you gently with light, vibration and temperature cues instead of an alarm. The first prototype is built: Arduino compute, circadian-tuned LEDs, haptic motors and heating, with a KiCad and SolidWorks redesign under way. Now adding two-channel EEG/EOG sensing on an ESP32 and ADS1292R, so the mask can learn when and how to wake each person.',
      },
      {
        org: 'Continuity',
        orgHref: 'https://continuity.bio/',
        title: 'Machine Learning Engineer · Internship',
        dates: 'Mar 2026 — Sep 2026',
        description:
          'Built CondAptNet, a 45.5M-parameter model that predicts how tightly a DNA aptamer binds a protein, and how that shifts with pH, salt, temperature and Mg²⁺. It pairs a custom nucleotide encoder with LoRA-tuned ESM-2 for Continuity’s biosensors.',
        links: [{ label: 'Code', href: 'https://github.com/shivanshb828/CondAptNet' }],
      },
      {
        org: 'Flair Labs (YC S22)',
        title: 'Applied AI Engineer · Internship',
        dates: 'Jun 2026 — Aug 2026',
        description:
          'Led a three-person team building the voice and SMS agents behind a lead-capture and loan-origination pipeline for national mortgage lenders, with compliance gating for regulated outreach.',
      },
      {
        org: 'United Nations',
        title: 'Data Researcher',
        dates: 'Sep 2023 — Mar 2026',
        description:
          'Built and deployed GEIMS, a system that tracks educational inequality across 60+ countries by joining UNESCO, World Bank and national census data.',
        links: [
          { label: 'Live', href: 'https://unesco-geims.org/' },
          { label: 'Code', href: 'https://github.com/shivanshb828/geims' },
        ],
      },
    ],
  },
  {
    id: 'research',
    label: 'Research',
    x: 0.17,
    y: 0.84,
    roles: [
      {
        org: 'Olfactory Receptors & Cancer',
        orgHref: 'https://www.researchsquare.com/article/rs-6950845/v1',
        title: 'First author · Research Square preprint',
        dates: 'Mar 2024 — Jan 2026',
        description:
          'A multi-stage machine learning and virtual screening pipeline that narrowed 1.4 million compounds to four candidates against olfactory receptors expressed in prostate cancer. The top candidates were validated with dual-luciferase assays at Stanford.',
        links: [
          { label: 'Paper', href: 'https://www.researchsquare.com/article/rs-6950845/v1' },
          { label: 'Code', href: 'https://github.com/shivanshb828/olfdrugdiscovery-2' },
        ],
      },
      {
        org: 'International Science and Engineering Fair',
        title: '2nd Place, Computational Biology & Bioinformatics · Regeneron / Society for Science',
        dates: 'May 2025',
      },
      {
        org: 'ISMB 2025',
        title: 'Presenter · Intelligent Systems for Molecular Biology, Liverpool',
        dates: 'Jul 2025',
      },
      {
        org: 'Stanford Drug Discovery Symposium',
        title: 'Presenter · 9th annual',
        dates: 'Apr 2025',
      },
      {
        org: 'RECOMB 2025',
        title: 'Presenter · 29th Research in Computational Molecular Biology',
        dates: 'Apr 2025',
      },
    ],
  },
  {
    id: 'safety',
    label: 'AI Safety',
    x: 0.83,
    y: 0.84,
    roles: [
      {
        org: 'Benchmarking LLM Scientific Judgment',
        title: 'Independent research',
        dates: 'Jul 2026 — Sep 2026',
        description:
          'Can frontier models tell when two bioactivity measurements are safe to pool? A preregistered benchmark from 5,300 paired ChEMBL measurements, with values hidden from the model. Claude Opus 4.6 and GPT-5.6 Sol both scored below a structure-only baseline, and both merged more incomparable pairs once shown assay descriptions. Includes contamination probes and leakage gates.',
        links: [
          { label: 'Code', href: 'https://github.com/shivanshb828/bio-benchmark-pilot' },
          { label: 'Findings', href: 'https://github.com/shivanshb828/bio-benchmark-pilot/blob/main/results/FINDINGS.md' },
        ],
      },
      {
        org: 'BlueDot Impact',
        title: 'Technical AI Safety course',
        dates: 'Nov 2026',
        links: [{ label: 'Certificate', href: 'https://bluedot.org/certification?id=recKaIM7RbHNHntXR' }],
      },
      {
        org: 'Bruin AI Safety',
        title: 'Member · UCLA',
        dates: '',
        description: 'Part of the club’s AI safety reading group.',
      },
    ],
  },
]

// Edges between experience nodes (by id).
export const experienceEdges: [string, string][] = [
  ['building', 'research'],
  ['building', 'safety'],
  ['research', 'safety'],
]

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export type Project = {
  name: string
  date: string
  award?: string
  description: string
  links: Link[]
}

export const projects: Project[] = [
  {
    name: 'MissionPCB',
    date: 'Sep 2026',
    description:
      'Generates PCB layouts from mission constraints and checks them before anything is built. An LLM turns requirements into structured constraints, and a deterministic engine checks thermal limits, RF keep-outs, mechanical fit and noise. On a 29-part ECG chest patch, the naive layout fails 10 checks and the solver’s layout passes them all.',
    links: [{ label: 'Code', href: 'https://github.com/shivanshb828/astra-hack' }],
  },
  {
    name: 'StrataLearn',
    date: 'Jul 2026',
    award: '1st Overall + Best Use of Fireworks AI · Daytona HackSprint w/ Braintrust',
    description:
      'A land-cover classifier that improves without retraining. After each batch of satellite tiles it studies its own mistakes and writes plain-English heuristics into a class-hierarchy graph. Lessons learned for “vegetation” then carry over to shrub and grass.',
    links: [{ label: 'Code', href: 'https://github.com/shivanshb828/daytona-hack' }],
  },
  {
    name: 'Helix',
    date: 'Jul 2026',
    award: '1st Place ×2 (Best Use of Zero.xyz, Best Use of Pomerium) · Loop Engineering Hackathon, Cursor × AWS',
    description:
      'An ML agent that trains a heart-disease classifier with no human in the loop. It plans, trains, checks itself against published UCI benchmarks, then diagnoses what went wrong and fixes it. A fix might mean pulling more data, buying enrichment through Zero.xyz, or switching model class, all behind Pomerium spend limits.',
    links: [{ label: 'Code', href: 'https://github.com/shivanshb828/Machine-Learning-Loop' }],
  },
  {
    name: 'Discordance',
    date: 'Jul 2026',
    award: '2nd Place · Rewiring Biology Hackathon, Owkin × AWS',
    description:
      'A knowledge graph of olfactory receptors in cancer, served as MCP tools for Owkin K Pro. When sources disagree, it flags the contradiction instead of blending them into one hedged answer. It weights evidence by strength and asks the researcher when it can’t settle a conflict.',
    links: [{ label: 'Code', href: 'https://github.com/shivanshb828/discordance' }],
  },
  {
    name: 'TriageDesk',
    date: 'Jul 2026',
    award: '2nd Place · “Can Your Agent-Written Code Survive Production?” by Reboot.dev',
    description:
      'Hospital triage and on-call coordination built on Reboot. Bed assignment is race-safe, dose logging is idempotent, and on-call pages survive crashes. Nurses drive it by voice through an MCP app.',
    links: [{ label: 'Code', href: 'https://github.com/shivanshb828/reboot-hack' }],
  },
  {
    name: 'Donna',
    date: 'Jun 2026',
    award: 'Top 8 · Dell × NVIDIA Local AI Hackathon',
    description:
      'A fully local voice AI for legal client intake. It answers calls over Twilio, runs phased intake by voice, books consultations and emails a summary to the lawyer, all on a Dell GB10 with no cloud.',
    links: [{ label: 'Code', href: 'https://github.com/shivanshb828/donna-personal-assistant' }],
  },
  {
    name: 'SmartCart',
    date: 'Jun 2026',
    description:
      'A procurement agent for small businesses, built at the Cursor hackathon at a16z. Give it a plain-English supply list and it picks products on Walmart by price and deals, finds working promo codes, and fills the cart for your approval.',
    links: [{ label: 'Code', href: 'https://github.com/shivanshb828/purchase-automation-agent' }],
  },
  {
    name: 'Snoopy',
    date: 'May 2026',
    award: '2nd Place ($23,000) · Notion Developer Platform Hackathon',
    description:
      'A phone agent for dry cleaners and other owner-run shops. Customers call to place or check orders, and owners call for a rundown of the day. Every change syncs to Notion in real time.',
    links: [{ label: 'Code', href: 'https://github.com/shivanshb828/dry-cleaning-voice-agent' }],
  },
  {
    name: 'Morty',
    date: 'May 2026',
    award: '1st Place · SF Voice AI Meetup Hackathon, AssemblyAI',
    description:
      'A voice agent for nail salons. Customers call to book, change or cancel appointments and check prices. Owners manage the schedule by voice, and the agent places reminder calls the day before each appointment.',
    links: [{ label: 'Code', href: 'https://github.com/shivanshb828/assemblyai-voice-agent' }],
  },
]

// Hackathon placements not already attached to a project above.
export const otherHackathons: string[] = [
  '1st Place — OpenAI Codex Community Hackathon',
  '1st Place — AI-Native Hackathon, UC Berkeley IEEE (Best Use of Retell AI)',
  '1st Place — AI Revenue Hackathon, AGI House (Best Consumer Product)',
  'Top 8 — America’s Next Top Model, Vercel',
]
