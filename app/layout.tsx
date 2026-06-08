import type { Metadata } from 'next'
import { Libre_Baskerville, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Windmills Camp Grounds | Tanay Windmills Viewpoint',
  description: 'Bring-your-own-tent camping, day tours, moto camping, car camping, bonfire nights, and orchard views at Tanay Windmills Viewpoint.',
  keywords: ['Tanay camping', 'Windmills Camp Grounds', 'Tanay Windmills Viewpoint', 'BYOT camping', 'moto camping', 'Rizal campsite'],
  openGraph: {
    title: 'Windmills Camp Grounds | Tanay Windmills Viewpoint',
    description: 'Close enough to Metro Manila, far enough to feel like a real camp escape.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#3d5a3d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${inter.variable} bg-background`} data-scroll-behavior="smooth">
      <body className="font-serif antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
