export default function HomePage() {

  return (
    <div className="space-y-12">
      <section className="pt-6">
        <h1 className="text-5xl leading-[1.1] font-normal">Shivansh Bansal</h1>
        <p className="font-mono text-sm tracking-widest text-[#777777] mt-4 uppercase">
          Machine Learning Engineer (Applied AI) — San Francisco, CA
        </p>
        <p className="font-mono text-sm tracking-widest text-[#aaaaaa] mt-1 uppercase">
          CS + Bioinformatics, UCLA
        </p>
        <p className="text-lg leading-[1.8] mt-8 text-[#555555]">
          Building intelligent products at the intersection of healthcare and hardware.
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

      <section>
        <h2 className="font-mono text-[0.65rem] tracking-widest text-[#666666] mb-8 uppercase">
          / experience
        </h2>
        <div className="relative border-l border-[#e0e0e0] ml-1 space-y-10">
          {[
            {
              company: 'Continuity Technologies',
              href: 'https://continuity.bio',
              role: 'Machine Learning Engineer',
              description: 'Building ML frameworks for biological data.',
            },
            {
              company: 'Flair Labs (YC S22)',
              href: null,
              role: 'AI Research Engineer',
              description: 'Worked on AI Agents to automate lead capture and loan origination.',
            },
          ].map((item) => (
            <div key={item.company} className="relative pl-8">
              <span className="absolute -left-[5px] top-[6px] w-2.5 h-2.5 rounded-full border-2 border-[#bbbbbb] bg-white" />
              <p className="font-mono text-[0.7rem] tracking-widest uppercase text-[#888888] mb-1">
                {item.role}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-normal text-[#111111] underline underline-offset-2 decoration-[#cccccc] hover:decoration-[#111111] transition-colors"
                >
                  {item.company}
                </a>
              ) : (
                <p className="text-base font-normal text-[#111111]">{item.company}</p>
              )}
              <p className="text-[0.9375rem] leading-[1.7] text-[#555555] mt-1 max-w-md">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
