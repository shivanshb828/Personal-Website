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
    <header>
      <nav className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
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
        <Link
          href="/"
          className="font-mono text-xs tracking-widest uppercase text-[#555555] hover:text-[#efefef] transition-colors"
        >
          Shivansh Bansal
        </Link>
      </nav>
    </header>
  )
}
