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
        I&apos;m studying Computer Science with a minor in Bioinformatics at UCLA. I like building where machine
        learning meets biology, and more and more, hardware.
      </p>
      <p className="mt-4">
        Right now I&apos;m an Associate Analyst at Bruin Ventures.
      </p>
      <p className="mt-4">
        I have <Link href="/experience#experience-graph">experience</Link> across biological ML, applied AI, venture,
        and education policy. I do <Link href="/research">research</Link> on drug discovery and on whether frontier
        models can make the judgment calls scientists make.
      </p>
      <p className="mt-4">
        I spend a lot of weekends at hackathons, and some of those <Link href="/projects">projects</Link> have done
        well.
        {hasWriting && (
          <>
            {' '}
            I also <Link href="/writing">write</Link>.
          </>
        )}
      </p>

      <AboutDropdown>
        <p>
          I grew up in Dublin, California, where I spent most of high school on research and science fairs. At UCLA
          I&apos;m involved with Bruin AI Safety and CruX.
        </p>
        <p className="mt-4">A few things from along the way:</p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            2nd Place in Computational Biology &amp; Bioinformatics at ISEF 2025 (Regeneron / Society for Science), for
            work on olfactory receptors in cancer
          </li>
          <li>USA Computing Olympiad, Gold Division</li>
          <li>Completed BlueDot Impact&apos;s Technical AI Safety course</li>
        </ul>
        <p className="mt-4">
          Beyond what&apos;s here, I&apos;m drawn to hardware design, nanotechnology, medical engineering, and drug
          delivery.
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
