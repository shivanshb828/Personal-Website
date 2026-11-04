import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import { contact, research } from '@/lib/site'

export const metadata: Metadata = { title: 'Research' }

const scholar = contact.links.find((l) => l.icon === 'scholar')!

export default function ResearchPage() {
  return (
    <PageShell title="Research">
      <p>
        I&apos;m interested in machine learning for drug discovery, and in whether frontier models can be trusted with
        the judgment calls that come before the modeling.
      </p>

      <ul className="mt-8 border-t border-dashed border-rule">
        {research.map((p) => (
          <li key={p.title} className="border-b border-dashed border-rule py-8">
            <p className="text-[15px] font-medium leading-snug">{p.title}</p>
            <p className="mt-2 text-[13px] text-ink-muted">{p.meta}</p>
            <p className="mt-4">{p.description}</p>
            {p.presented && (
              <p className="mt-4 text-[13px] text-ink-muted">Presented at {p.presented}</p>
            )}
            <p className="mt-4 flex gap-4 text-[13px]">
              {p.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label} ↗
                </a>
              ))}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-[13px]">
        <a href={scholar.href} target="_blank" rel="noopener noreferrer">
          Google Scholar ↗
        </a>
      </p>
    </PageShell>
  )
}
