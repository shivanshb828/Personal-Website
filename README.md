# shivanshbansal.com

Personal website of Shivansh Bansal. Next.js 14 (App Router) + Tailwind, deployed on Vercel.

## Editing content

Nearly everything lives in **`lib/site.ts`**:

- `experience`: nodes in the draggable graph on `/experience` and the roles each one opens
- `experienceEdges`: which nodes are connected
- `research`: papers and research projects on `/research`
- `projects` / `otherHackathons`: `/projects`
- `contact`: email and social links in the home page's "About me" panel
- `site.lastUpdated`: the date shown at the bottom of the home page

The intro paragraphs and the "About me" text are in `app/page.tsx`.

## Writing

Drop an `.mdx` file into `content/`:

```mdx
---
title: Your Post Title
date: 2026-11-04
description: Optional one-line subtitle.
---

Your content here...
```

`/writing` and the "write" link on the home page only appear once at least one post exists.

## Running locally

```bash
npm install
npm run dev
```
