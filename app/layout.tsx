import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Blog',
  description: 'A modern blog platform built with Next.js',
  openGraph: {
    title: 'Modern Blog',
    description: 'A modern blog platform built with Next.js',
    url: 'https://modern-blog.com',
    siteName: 'Modern Blog',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
        width: 1200,
        height: 630,
        alt: 'Modern Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Blog',
    description: 'A modern blog platform built with Next.js',
    images: ['https://images.unsplash.com/photo-1499750310107-5fef28a66643'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}