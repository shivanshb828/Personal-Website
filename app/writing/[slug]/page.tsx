import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllSlugs, getPost } from '@/lib/mdx'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  try {
    const post = getPost(params.slug)
    return {
      title: `${post.title} — Shivansh Bansal`,
      description: post.description,
    }
  } catch {
    return { title: 'Writing — Shivansh Bansal' }
  }
}

function fmtDate(iso: string) {
  const [year, month] = iso.split('-')
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  return `${months[parseInt(month) - 1]} ${year}`
}

export default function PostPage({ params }: { params: { slug: string } }) {
  let post
  try {
    post = getPost(params.slug)
  } catch {
    notFound()
  }

  return (
    <article>
      <header className="mb-14">
        <h1 className="text-4xl font-normal leading-tight">{post.title}</h1>
        <div className="flex items-center gap-5 mt-5">
          <time className="font-mono text-xs text-[#aaaaaa]">{fmtDate(post.date)}</time>
          <span className="font-mono text-xs text-[#d5d5d5]">·</span>
          <span className="font-mono text-xs text-[#d5d5d5] uppercase tracking-widest">{post.tag}</span>
        </div>
      </header>
      <div className="prose prose-stone max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}
