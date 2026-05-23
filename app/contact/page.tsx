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
    <div>
      <h1 className="text-5xl font-normal leading-tight mb-6">Contact</h1>
      <p className="text-lg leading-[1.8] mb-16 max-w-lg">
        [A short, welcoming line about how you like to hear from people — what kind of conversations you enjoy, what you&apos;re open to connecting about.]
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
