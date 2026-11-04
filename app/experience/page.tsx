import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import ExperienceGraph from '@/components/ExperienceGraph'
import { experience, experienceEdges } from '@/lib/site'

export const metadata: Metadata = { title: 'Experience' }

export default function ExperiencePage() {
  return (
    <PageShell title="Experience">
      <ExperienceGraph nodes={experience} edges={experienceEdges} />
    </PageShell>
  )
}
