import Link from 'next/link'
import { getRecentPosts } from '@/lib/mdx'

function fmtDate(iso: string) {
  const [year, month] = iso.split('-')
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  return `${months[parseInt(month) - 1]} ${year}`
}

export default function HomePage() {
  const posts = getRecentPosts(3)

  return (
    <div className="space-y-20">
      <section className="pt-6">
        <h1 className="text-5xl leading-[1.1] font-normal">Shivansh Bansal</h1>
        <p className="font-mono text-xs tracking-widest text-[#666666] mt-4 uppercase">
          Machine Learning Engineer (Applied AI) — San Francisco, CA
        </p>
        <p className="text-lg leading-[1.8] mt-8 max-w-lg">
          [A brief intro about what you do — researcher, builder, writer. Where you&apos;re based. What you&apos;re working on.]
        </p>
        <p className="text-lg leading-[1.8] mt-4 max-w-lg text-[#888888]">
          [A second sentence or two about your interests, research areas, or what this site is for.]
        </p>
      </section>

      <section>
        <h2 className="font-mono text-[0.65rem] tracking-widest text-[#777777] mb-6">
          / writing
        </h2>
        <ul className="space-y-5">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/writing/${post.slug}`}
                className="group flex items-baseline justify-between"
              >
                <span className="text-[1.0625rem] group-hover:underline underline-offset-[3px] leading-snug">
                  {post.title}
                </span>
                <span className="font-mono text-xs text-[#666666] ml-6 shrink-0">
                  {fmtDate(post.date)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/writing"
          className="font-mono text-[0.65rem] tracking-widest text-[#666666] hover:text-[#efefef] transition-colors mt-7 inline-block"
        >
          all writing →
        </Link>
      </section>

      <section>
        <h2 className="font-mono text-[0.65rem] tracking-widest text-[#777777] mb-6">
          / projects
        </h2>
        <p className="text-[1.0625rem] leading-[1.8] text-[#999999] max-w-lg">
          [Brief 1–2 sentence teaser about what you&apos;re building. Something that gives a sense of your interests and what you care about making.]
        </p>
        <Link
          href="/projects"
          className="font-mono text-[0.65rem] tracking-widest text-[#666666] hover:text-[#efefef] transition-colors mt-5 inline-block"
        >
          all projects →
        </Link>
      </section>

      <section>
        <h2 className="font-mono text-[0.65rem] tracking-widest text-[#777777] mb-4">
          / subscribe
        </h2>
        <p className="font-mono text-xs text-[#666666] mb-4">
          New essays, occasionally.
        </p>
        <form className="flex gap-0 max-w-sm">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 border-b border-[#2d2d2d] bg-transparent px-0 py-2 text-sm font-mono text-[#efefef] placeholder-[#3a3a3a] focus:outline-none focus:border-[#555555] transition-colors"
          />
          <button
            type="submit"
            className="font-mono text-xs tracking-widest uppercase text-[#666666] hover:text-[#efefef] transition-colors ml-6 shrink-0"
          >
            Subscribe →
          </button>
        </form>
      </section>
    </div>
  )
}
