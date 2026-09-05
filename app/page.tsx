export default function HomePage() {

  return (
    <div className="space-y-20">
      <section className="pt-6">
        <h1 className="text-5xl leading-[1.1] font-normal">Shivansh Bansal</h1>
        <p className="font-mono text-sm tracking-widest text-[#777777] mt-4 uppercase">
          Machine Learning Engineer (Applied AI) — San Francisco, CA
        </p>
        <p className="font-mono text-sm tracking-widest text-[#aaaaaa] mt-1 uppercase">
          CS + Bioinformatics, UCLA
        </p>
        <p className="text-lg leading-[1.8] mt-8 max-w-lg">
          Most recently, I'm building ML frameworks at <a href="https://continuity.bio" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[#aaaaaa] hover:decoration-[#111111] transition-colors">Continuity Technologies</a>. Previously, I was interning at Flair Labs (YC S22), working on AI Agents to automate lead capture and loan origination.
        </p>
        <p className="text-lg leading-[1.8] mt-4 max-w-lg text-[#555555]">
          I'm interested in frontier AI research, and especially its applications to healthcare and hardware. I like to talk about theory, but simultaneously build intelligent products for everyday life.
        </p>
        <div className="flex items-center gap-5 mt-8">
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com/in/shivansh~bansal' },
            { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=shivanshbansal' },
            { label: 'Twitter', href: 'https://twitter.com/shivanshb2008' },
            { label: 'GitHub', href: 'https://github.com/shivanshb828' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] tracking-widest text-[#888888] hover:text-[#111111] transition-colors"
            >
              [{link.label}]
            </a>
          ))}
        </div>
      </section>

    </div>
  )
}
