import Link from 'next/link'
import { getRecentPosts } from '@/lib/mdx'

export default function HomePage() {
  const posts = getRecentPosts(3)

  return (
    <div className="space-y-16">
      <section>
        <p className="text-lg leading-[1.8]">
          I&apos;m Shivansh Bansal. [A brief intro about what you do — researcher, builder, writer. Where you&apos;re based. What you&apos;re working on.]
        </p>
        <p className="text-lg leading-[1.8] mt-4 text-[#888888]">
          [A second sentence or two about your interests, research areas, or what this site is for.]
        </p>
      </section>

      <section>
        <h2 className="font-mono text-xs tracking-widest uppercase text-[#555555] mb-5">
          Recent Writing
        </h2>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/writing/${post.slug}`}
                className="group flex items-baseline justify-between"
              >
                <span className="text-[1.0625rem] group-hover:underline underline-offset-[3px] leading-snug">
                  {post.title}
                </span>
                <span className="font-mono text-xs text-[#444444] ml-6 shrink-0">
                  {post.date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/writing"
          className="font-mono text-xs tracking-widest uppercase text-[#444444] hover:text-[#efefef] transition-colors mt-6 inline-block"
        >
          All writing →
        </Link>
      </section>

      <section>
        <h2 className="font-mono text-xs tracking-widest uppercase text-[#555555] mb-5">
          Projects
        </h2>
        <p className="text-[1.0625rem] leading-[1.8] text-[#888888]">
          [Brief 1–2 sentence teaser about what you&apos;re building. Something that gives a sense of your interests and what you care about making.]
        </p>
        <Link
          href="/projects"
          className="font-mono text-xs tracking-widest uppercase text-[#444444] hover:text-[#efefef] transition-colors mt-4 inline-block"
        >
          See all projects →
        </Link>
      </section>

      <section className="border border-[#1f1f1f] p-6">
        <h2 className="font-mono text-xs tracking-widest uppercase text-[#555555] mb-1">
          Subscribe
        </h2>
        <p className="text-sm text-[#555555] mb-4 font-mono">
          Get new essays in your inbox.
        </p>
        <form className="flex gap-0">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 border border-[#2d2d2d] bg-transparent px-3 py-2 text-sm font-mono text-[#efefef] placeholder-[#444444] focus:outline-none focus:border-[#555555] transition-colors"
          />
          <button
            type="submit"
            className="bg-[#efefef] text-[#0a0a0a] font-mono text-xs tracking-widest uppercase px-5 py-2 hover:bg-white transition-colors shrink-0"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  )
}
