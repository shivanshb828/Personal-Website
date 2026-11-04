import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

export interface PostMeta {
  slug: string
  title: string
  date: string
  description?: string
}

export interface Post extends PostMeta {
  content: string
}

function mdxFiles(): string[] {
  if (!fs.existsSync(contentDir)) return []
  return fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'))
}

function read(slug: string): Post {
  const raw = fs.readFileSync(path.join(contentDir, `${slug}.mdx`), 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ''),
    description: data.description ? String(data.description) : undefined,
    content,
  }
}

export function getAllPosts(): PostMeta[] {
  return mdxFiles()
    .map((f) => {
      const { content: _content, ...meta } = read(f.replace(/\.mdx$/, ''))
      return meta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): Post | null {
  return getAllSlugs().includes(slug) ? read(slug) : null
}

export function getAllSlugs(): string[] {
  return mdxFiles().map((f) => f.replace(/\.mdx$/, ''))
}

export function formatDate(date: string): string {
  const d = new Date(date + 'T00:00:00')
  if (isNaN(d.getTime())) return date
  const day = d.getDate()
  const suffix = day % 10 === 1 && day !== 11 ? 'st' : day % 10 === 2 && day !== 12 ? 'nd' : day % 10 === 3 && day !== 13 ? 'rd' : 'th'
  return `${d.toLocaleString('en-US', { month: 'long' })} ${day}${suffix}, ${d.getFullYear()}`
}
