# shivanshbansal.com

Personal website of Shivansh Bansal — ML engineer, researcher, and builder.

Built with Next.js 14, Tailwind CSS, and MDX. Deployed on Vercel.

## Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS — no UI libraries |
| Content | MDX via `next-mdx-remote` |
| Fonts | EB Garamond (body) · DM Mono (labels/metadata) |
| Deployment | Vercel (auto-deploys on push to `main`) |

## Project structure

```
app/
  page.tsx          # Homepage
  writing/          # Writing list + individual post pages
  projects/         # Research papers + technical projects (carousel)
  stack/            # Tools and gear
  contact/          # Social links
  layout.tsx        # Root layout, fonts, nav, footer
  icon.svg          # Favicon (DNA double helix)

components/
  Navbar.tsx        # Top nav — links left, name right
  Footer.tsx        # Minimal footer
  ScrollCarousel.tsx # Drag-to-scroll card carousel

content/
  *.mdx             # Blog posts (frontmatter: title, date, tag, description)

lib/
  mdx.ts            # MDX file loader (getAllPosts, getPost, getAllSlugs)
```

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a blog post

Create a new `.mdx` file in `content/`:

```mdx
---
title: Your Post Title
date: 2025-05-23
tag: essay        # essay | note | research
description: One-line summary shown in the post list.
---

Your content here...
```

The post appears automatically in the writing list — no config needed.

## Adding a project or paper

Edit the `projects` or `papers` arrays in [app/projects/page.tsx](app/projects/page.tsx). Descriptions support inline JSX (for links, etc.).

## License

MIT
