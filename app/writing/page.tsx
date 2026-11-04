import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageShell from '@/components/PageShell'
import { formatDate, getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = { title: 'Writing' }

export default function WritingPage() {
  const posts = getAllPosts()
  if (posts.length === 0) notFound()

  return (
    <PageShell title="Writing">
      <ul className="space-y-6">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/writing/${p.slug}`}>{p.title}</Link>
            <p className="mt-1 text-[13px] text-ink-muted">Last updated {formatDate(p.date)}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  )
}
