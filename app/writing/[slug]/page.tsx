import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import BackLink from '@/components/BackLink'
import { formatDate, getAllSlugs, getPost } from '@/lib/mdx'

export const dynamicParams = false

export function generateStaticParams() {
  // Next needs at least one entry for a static dynamic route; an unknown slug just 404s.
  const slugs = getAllSlugs()
  return (slugs.length ? slugs : ['_']).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug)
  return post ? { title: post.title, description: post.description } : {}
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen pb-24 pt-16">
      <BackLink />
      <p className="text-[13px] text-ink-muted">{formatDate(post.date)}</p>
      <h1 className="mt-2 text-2xl font-medium tracking-tight">{post.title}</h1>
      {post.description && <p className="mt-2 text-ink-muted">{post.description}</p>}
      <article className="prose mt-10">
        <MDXRemote source={post.content} />
      </article>
    </div>
  )
}
