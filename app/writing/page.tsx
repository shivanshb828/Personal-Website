import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Writing — Shivansh Bansal',
}

function fmtDate(iso: string) {
  const [year, month] = iso.split('-')
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  return `${months[parseInt(month) - 1]} ${year}`
}

export default function WritingPage() {
  const posts = getAllPosts()

  return (
    <div>
      <h1 className="text-5xl font-normal leading-tight mb-16">Writing</h1>
      <ul className="space-y-0">
        {posts.map((post) => (
          <li key={post.slug} className="border-t border-[#1a1a1a] py-7">
            <Link href={`/writing/${post.slug}`} className="group block">
              <div className="flex items-baseline justify-between gap-6">
                <span className="text-lg group-hover:underline underline-offset-[3px] leading-snug">
                  {post.title}
                </span>
                <span className="font-mono text-xs text-[#3a3a3a] shrink-0">
                  {fmtDate(post.date)}
                </span>
              </div>
              {post.description && (
                <p className="text-[#666666] text-[0.9rem] mt-2 leading-relaxed">
                  {post.description}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
