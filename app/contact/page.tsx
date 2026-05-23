import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Shivansh Bansal',
}

const socials = [
  {
    label: 'Email',
    display: '[your-email@domain.com]',
    href: 'mailto:[your-email@domain.com]',
  },
  {
    label: 'GitHub',
    display: '[your-github]',
    href: 'https://github.com/[your-github]',
    external: true,
  },
  {
    label: 'Twitter',
    display: '@[your-twitter]',
    href: 'https://twitter.com/[your-twitter]',
    external: true,
  },
  {
    label: 'LinkedIn',
    display: '[your-linkedin]',
    href: 'https://linkedin.com/in/[your-linkedin]',
    external: true,
  },
]

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <h1 className="font-mono text-xs tracking-widest uppercase text-[#999999]">
        Contact
      </h1>

      <p className="text-lg leading-[1.8]">
        [A short, welcoming line about how you like to hear from people — what kind of conversations you enjoy, what you&apos;re open to connecting about.]
      </p>

      <div className="space-y-4 border-t border-[#f0f0f0] pt-8">
        {socials.map((social) => (
          <div key={social.label} className="flex items-center gap-0">
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#aaaaaa] w-24 shrink-0">
              {social.label}
            </span>
            <a
              href={social.href}
              className="text-[0.9375rem] hover:underline underline-offset-[3px] text-[#333333]"
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
