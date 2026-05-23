import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Shivansh Bansal',
}

const socials = [
  {
    label: 'Email',
    display: 'shivanshb@ucla.edu',
    href: 'mailto:[shivanshb@ucla.edu]',
  },
  {
    label: 'GitHub',
    display: 'shivanshb828',
    href: 'https://github.com/shivanshb828',
    external: true,
  },
  {
    label: 'Twitter',
    display: '@shivanshb2008',
    href: 'https://twitter.com/shivanshb2008',
    external: true,
  },
  {
    label: 'LinkedIn',
    display: 'shivansh~bansal',
    href: 'https://linkedin.com/in/shivansh~bansal',
    external: true,
  },
]

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-5xl font-normal leading-tight mb-6">Contact</h1>
      <p className="text-lg leading-[1.8] mb-16 max-w-lg">
        Hey there! I'm always open to connecting and having a conversation about any cool ideas or research you've been working on, potential collaborations, or just to say hi. Feel free to reach out to me through any of the channels below. I look forward to hearing from you!
      </p>

      <div className="space-y-0">
        {socials.map((social) => (
          <div key={social.label} className="border-t border-[#1a1a1a] py-5 grid grid-cols-[140px_1fr] gap-8 items-center">
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#444444]">
              {social.label}
            </span>
            <a
              href={social.href}
              className="text-[0.9375rem] text-[#aaaaaa] hover:text-[#efefef] hover:underline underline-offset-[3px] transition-colors"
              {...(social.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {social.display}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
