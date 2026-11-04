import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import { otherHackathons, projects } from '@/lib/site'

export const metadata: Metadata = { title: 'Projects' }

export default function ProjectsPage() {
  return (
    <PageShell title="Projects">
      <p>Things I&apos;ve built, most of them at hackathons with friends.</p>

      <ul className="mt-8 border-t border-dashed border-rule">
        {projects.map((p) => (
          <li key={p.name} className="border-b border-dashed border-rule py-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="text-[15px] font-medium">{p.name}</p>
              <p className="text-[12px] text-ink-muted">{p.date}</p>
            </div>
            {p.award && <p className="mt-1.5 text-[13px] text-ink-muted">{p.award}</p>}
            <p className="mt-3">{p.description}</p>
            <p className="mt-3 flex gap-4 text-[13px]">
              {p.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label} ↗
                </a>
              ))}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="mt-14 text-[13px] uppercase tracking-wide text-ink-muted">Other hackathons</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6">
        {otherHackathons.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </PageShell>
  )
}
