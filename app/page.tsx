import Link from 'next/link'
import AboutDropdown from '@/components/AboutDropdown'
import Icon from '@/components/Icons'
import { contact, site } from '@/lib/site'
import { getAllPosts } from '@/lib/mdx'

export default function HomePage() {
  const hasWriting = getAllPosts().length > 0

  return (
    <div className="min-h-screen pb-24 pt-24">
      <h1 className="text-4xl font-medium tracking-tight">{site.name}</h1>

      <p className="mt-10">
        I&apos;m studying Computer Science and Bioinformatics at UCLA. I like building where biology, machine
        learning, and hardware meet.
      </p>
      <p className="mt-4">
        I&apos;m currently focused on two questions: how to get machine learning to do real science, and how to tell
        when we can trust it. On the second, I&apos;m looking to join more AI safety research labs.
      </p>
      <p className="mt-4">
        I have experience across <Link href="/experience#building">building</Link>,{' '}
        <Link href="/experience#research">research</Link>, and <Link href="/experience#safety">AI safety</Link>, from
        biosensor models and voice agents to cancer drug targets and evaluations of frontier models.
      </p>
      <p className="mt-4">
        Most weekends I&apos;m at a <Link href="/projects">hackathon</Link>.
        {hasWriting && (
          <>
            {' '}
            I also <Link href="/writing">write</Link>.
          </>
        )}
      </p>

      <AboutDropdown>
        <p>
          I grew up in Dublin, California. I got into computational biology in high school, and it has pulled me
          toward everything around it since: the models, the hardware they run on, and whether we can trust them.
        </p>
        <p className="mt-4">
          At UCLA I&apos;m an Associate Analyst at Bruin Ventures, the university&apos;s premier venture capital and
          startup club, where I help source clients, work on deals, and learn the startup cycle from the inside.
          I&apos;m also part of CruX. I previously:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            Founded Project Catalyst, a STEM education nonprofit, in high school. It has reached 10,000+ students
            across three continents with hands-on engineering and biotech curricula.
          </li>
          <li>
            Won 11 hackathon prizes for everything from voice agents to self-improving ML agents (see{' '}
            <Link href="/projects">projects</Link>)
          </li>
          <li>Reached the Gold Division of the USA Computing Olympiad</li>
        </ul>
        <p className="mt-4">
          I think biology is becoming an engineering discipline, and machine learning is a big part of why. I want to
          build the tools that make that happen, from the models down to the hardware, and make sure they&apos;re
          trustworthy before a lab, a clinic, or a patient depends on them. Along the way I&apos;m drawn to
          nanotechnology, medical engineering, and drug delivery.
        </p>

        <div className="mt-10 border-t border-dashed border-rule pt-6">
          <p className="text-[13px] uppercase tracking-wide text-ink-muted">Contact</p>
          <ul className="mt-4 space-y-3 text-[13px]">
            {contact.emails.map((e) => (
              <li key={e}>
                <a href={`mailto:${e}`} className="!no-underline hover:!underline">
                  {e}
                </a>
              </li>
            ))}
            {contact.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 !no-underline hover:opacity-70"
                >
                  <Icon name={l.icon} />
                  <span>{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </AboutDropdown>

      <p className="mt-16 text-ink-muted">Last updated {site.lastUpdated}</p>
    </div>
  )
}
