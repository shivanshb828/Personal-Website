import type { Metadata } from 'next'
import { EB_Garamond, DM_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shivansh Bansal',
  description: '[Your tagline — researcher, builder, writer.]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${dmMono.variable}`}>
      <body className="bg-[#0a0a0a] text-[#efefef] font-serif">
        <Navbar />
        <main className="max-w-2xl mx-auto px-6 py-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
