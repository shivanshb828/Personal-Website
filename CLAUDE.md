Build me a personal website using Next.js 14 (App Router) and Tailwind CSS, inspired by rishabjaink.com — minimal, text-heavy, editorial feel.

Pages: Home, Writing, Projects, Research, Stack, Contact

Design:
- Fonts: EB Garamond (body) + DM Mono (nav, labels, metadata) via next/font or Google Fonts
- Monochrome color palette — let typography carry the weight
- Nav: "SV" monogram on left, links on right
- No UI libraries, Tailwind only

Features:
- MDX-powered writing (local .mdx files, support essay/note/research tags)
- Homepage: intro paragraph, recent writing list, projects teaser, subscribe input, footer
- Projects page: list with name, description, year, links
- Research page: list of papers with title, venue, year, link
- Stack page: categorized gear/tools list (prose style, not a table)
- Contact page: minimal with email + social links
- Vercel-ready (vercel.json or just works out of the box)

Scaffold the full project with:
- 2-3 sample MDX posts
- Placeholder content in [brackets] where I need to fill in my info
- Clean component structure (Navbar, Footer as shared components)