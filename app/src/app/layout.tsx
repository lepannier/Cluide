import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AmbientBackground from '@/components/AmbientBackground'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cluide',
  description: 'Dein digitaler Helfer auf dem Weg zur psychiatrischen oder psychosomatischen Klinik.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body>
        <AmbientBackground />
        {children}
      </body>
    </html>
  )
}
