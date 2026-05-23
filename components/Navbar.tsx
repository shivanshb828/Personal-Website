import Link from 'next/link'

const links = [
  { href: '/writing', label: 'Writing' },
  { href: '/projects', label: 'Projects' },
  { href: '/research', label: 'Research' },
  { href: '/stack', label: 'Stack' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="border-b border-[#1f1f1f]">
      <nav className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-widest uppercase text-[#efefef] hover:text-[#aaaaaa] transition-colors"
        >
          SB
        </Link>
        <div className="flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[0.7rem] tracking-widest uppercase text-[#555555] hover:text-[#efefef] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
