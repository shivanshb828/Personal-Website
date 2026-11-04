// Single source of truth for site content. Edit here; pages read from this file.

export const site = {
  name: 'Shivansh Bansal',
  url: 'https://www.shivanshbansal.com',
  description: 'CS + Bioinformatics at UCLA. Machine learning, biology, and hardware.',
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
    id: 'ml',
    label: 'Machine Learning',
    x: 0.5,
    y: 0.14,
    roles: [
      {
        org: 'Continuity',
        orgHref: 'https://continuity.bio/',
        title: 'Machine Learning Engineer · Internship',
        dates: 'Mar 2026 — Sep 2026',
        description:
          'Built CondAptNet, a 45.5M-parameter model that predicts how tightly a DNA aptamer binds a protein, and how that shifts with pH, salt, temperature and Mg²⁺. It pairs a custom nucleotide encoder with LoRA-tuned ESM-2 for Continuity’s biosensors.',
        links: [{ label: 'Code', href: 'https://github.com/shivanshb828/CondAptNet' }],
      },
    ],
  },
  {
    id: 'ai',
    label: 'Applied AI',
    x: 0.18,
    y: 0.5,
    roles: [
      {
        org: 'Flair Labs (YC S22)',
        title: 'Applied AI Engineer · Internship',
        dates: 'Jun 2026 — Aug 2026',
        description:
          'Led a three-person team building the voice and SMS agents behind a lead-capture and loan-origination pipeline for national mortgage lenders, with compliance gating for regulated outreach.',
      },
    ],
  },
  {
    id: 'venture',
    label: 'Venture',
    x: 0.82,
    y: 0.5,
    roles: [
      {
        org: 'Bruin Ventures',
        title: 'Associate Analyst',
        dates: 'Oct 2026 — present',
      },
    ],
  },
  {
    id: 'policy',
    label: 'Education & Policy',
    x: 0.5,
    y: 0.86,
    roles: [
      {
        org: 'United Nations',
        title: 'Data Researcher',
        dates: 'Sep 2023 — Mar 2026',
        description:
          'Built GEIMS, a monitoring system for educational inequality across 60+ countries, joining UNESCO, World Bank and national census data.',
        links: [
          { label: 'Live', href: 'https://unesco-geims.org/' },
          { label: 'Code', href: 'https://github.com/shivanshb828/geims' },
        ],
      },
      {
        org: 'Project Catalyst',
        title: 'Executive Director · Volunteer',
        dates: '',
        description:
          'Founded a STEM education initiative that has reached 10,000+ students across three continents with hands-on engineering and biotech curricula.',
      },
    ],
  },
]

// Edges between experience nodes (by id).
export const experienceEdges: [string, string][] = [
  ['ml', 'ai'],
  ['ml', 'venture'],
  ['ai', 'policy'],
  ['venture', 'policy'],
]

// ---------------------------------------------------------------------------
// Research
// ---------------------------------------------------------------------------

export type Paper = {
  title: string
  meta: string
  description: string
  presented?: string
  links: Link[]
}

export const research: Paper[] = [
  {
    title: 'Can LLMs tell when bioactivity data can be pooled?',
    meta: 'Independent research · Jul — Sep 2026',
    description:
      'A preregistered benchmark built from 5,300 paired ChEMBL measurements. With the measured values hidden, Claude Opus 4.6 and GPT-5.6 Sol judged whether 168 assay pairs were commensurable. Both scored below a structure-only random-forest baseline, and both merged more incomparable pairs once they were shown assay descriptions.',
    links: [
      { label: 'Code', href: 'https://github.com/shivanshb828/bio-benchmark-pilot' },
      { label: 'Findings', href: 'https://github.com/shivanshb828/bio-benchmark-pilot/blob/main/results/FINDINGS.md' },
    ],
  },
  {
    title:
      'Allosteric Regulation of Ectopically Expressed Olfactory Receptors in Tumor Cells: Ligand-Receptor Topology and Machine Learning-Assisted Drug Discovery',
    meta: 'First author · Research Square preprint · 2025',
    description:
      'A multi-stage machine learning and virtual screening pipeline that narrowed 1.4 million compounds to four candidates against olfactory receptors expressed in prostate cancer. The top candidates were then validated with dual-luciferase assays at Stanford.',
    presented: 'RECOMB 2025 · ISMB 2025 · 9th Stanford Drug Discovery Symposium',
    links: [
      { label: 'Paper', href: 'https://www.researchsquare.com/article/rs-6950845/v1' },
      { label: 'Code', href: 'https://github.com/shivanshb828/olfdrugdiscovery-2' },
    ],
  },
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
    date: '2026',
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
