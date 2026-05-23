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

export default function PostPage({ params }: { params: { slug: string } }) {
  let post
  try {
    post = getPost(params.slug)
  } catch {
    notFound()
  }

  return (
    <article>
      <header className="mb-12">
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#bbbbbb]">
          {post.tag}
        </span>
        <h1 className="text-3xl leading-tight mt-2">{post.title}</h1>
        <time className="font-mono text-xs text-[#aaaaaa] mt-3 block">
          {post.date}
        </time>
      </header>
      <div className="prose prose-stone max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}
