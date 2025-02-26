import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Modern Next.js Application',
  description: 'A modern Next.js application with TypeScript and Tailwind CSS',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="min-h-screen bg-white">
        <Navbar />
        <main className="px-4 py-8 max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
