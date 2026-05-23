import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

export type PostTag = 'essay' | 'note' | 'research'

export interface PostMeta {
  slug: string
  title: string
  date: string
  tag: PostTag
  description?: string
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'))
  return files
    .map((filename) => {
      const slug = filename.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(contentDir, filename), 'utf-8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        tag: (data.tag ?? 'essay') as PostTag,
        description: data.description as string | undefined,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getRecentPosts(count: number): PostMeta[] {
  return getAllPosts().slice(0, count)
}

export function getPost(slug: string): Post {
  const filepath = path.join(contentDir, `${slug}.mdx`)
  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    tag: (data.tag ?? 'essay') as PostTag,
    description: data.description as string | undefined,
    content,
  }
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))
}
