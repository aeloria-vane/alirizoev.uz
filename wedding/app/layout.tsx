import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Pinyon_Script } from 'next/font/google'
import MotionProvider from '@/components/MotionProvider'
import MusicPlayer from '@/components/MusicPlayer'
import EntrySplash from '@/components/EntrySplash'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const pinyon = Pinyon_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pinyon',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Bobozarif & Nigina · Save the Date',
  description:
    'Save the Date · 5 июня 2026 года, Grand Sultan. Семьи Алиризаевых и Меликовых будут счастливы разделить с Вами этот особенный день.',
  openGraph: {
    title: 'Bobozarif & Nigina · Save the Date',
    description:
      'Семьи Алиризаевых и Меликовых будут счастливы разделить с Вами этот особенный день.',
    type: 'website',
    locale: 'ru_RU',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Bobozarif & Nigina · Save the Date',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bobozarif & Nigina · Save the Date',
    description: 'Семьи Алиризаевых и Меликовых будут счастливы видеть Вас.',
    images: ['/api/og'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FBF8F3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${inter.variable} ${pinyon.variable}`}>
      <body className="font-body antialiased">
        <MotionProvider>
          {children}
          <EntrySplash />
        </MotionProvider>
        <MusicPlayer />
      </body>
    </html>
  )
}
