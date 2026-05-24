import Link from 'next/link'

export default function HomePage() {

  return (
    <div className="space-y-20">
      <section className="pt-6">
        <h1 className="text-5xl leading-[1.1] font-normal">Shivansh Bansal</h1>
        <p className="font-mono text-xs tracking-widest text-[#666666] mt-4 uppercase">
          Machine Learning Engineer (Applied AI) — San Francisco, CA
        </p>
        <p className="text-lg leading-[1.8] mt-8 max-w-lg">
          I am currently studying CS + Computational Biology at UCLA. Most recently, I won 2nd Place and $23,000 at the Notion Developer Platform Hackathon!
        </p>
        <p className="text-lg leading-[1.8] mt-4 max-w-lg text-[#888888]">
          I'm interested in frontier AI research, and especially its applications to healthcare and hardware. I like to talk about theory, but simultaneously build AI-native products for everyday life.
        </p>
        <div className="flex items-center gap-5 mt-8">
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com/in/shivanshbansal' },
            { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=shivanshbansal' },
            { label: 'Twitter', href: 'https://twitter.com/shivanshb828' },
            { label: 'GitHub', href: 'https://github.com/shivanshb828' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] tracking-widest text-[#555555] hover:text-[#efefef] transition-colors"
            >
              [{link.label}]
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-mono text-[0.65rem] tracking-widest text-[#777777] mb-6">
          / writing
        </h2>
        <p className="font-mono text-xs text-[#666666] tracking-widest uppercase">Coming soon...</p>
      </section>

      <section>
        <h2 className="font-mono text-[0.65rem] tracking-widest text-[#777777] mb-6">
          / projects
        </h2>
        <p className="text-[1.0625rem] leading-[1.8] text-[#999999] max-w-lg">
          Researching the application of machine learning for drug and aptamer discovery, while also building productivity tools like AI Voice Agents.  
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
