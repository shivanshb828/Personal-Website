import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Writing — Shivansh Bansal',
}

export default function WritingPage() {
  const posts = getAllPosts()

  return (
    <div>
      <h1 className="font-mono text-xs tracking-widest uppercase text-[#555555] mb-12">
        Writing
      </h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-t border-[#1f1f1f] pt-6">
            <Link href={`/writing/${post.slug}`} className="group block">
              <div className="flex items-baseline justify-between">
                <span className="text-lg group-hover:underline underline-offset-[3px] leading-snug">
                  {post.title}
                </span>
                <span className="font-mono text-xs text-[#444444] ml-6 shrink-0">
                  {post.date}
                </span>
              </div>
              {post.description && (
                <p className="text-[#666666] text-[0.9375rem] mt-1 leading-relaxed">
                  {post.description}
                </p>
              )}
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#3a3a3a] mt-2 inline-block">
                {post.tag}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
