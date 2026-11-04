import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { site } from '@/lib/site'

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website',
  },
  twitter: { card: 'summary', title: site.name, description: site.description },
}

const sideGutter = { width: 'max(0px, calc((100vw - min(100vw, 44rem)) / 2))' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plexMono.variable} h-full`}>
      <body className="min-h-full">
        <div className="dot-grid pointer-events-none fixed inset-y-0 left-0 z-0" style={sideGutter} aria-hidden="true" />
        <div className="dot-grid pointer-events-none fixed inset-y-0 right-0 z-0" style={sideGutter} aria-hidden="true" />
        <main className="relative z-10 mx-auto w-full max-w-layout px-6 md:px-8">{children}</main>
      </body>
    </html>
  )
}
