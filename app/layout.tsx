import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Munees Raja | Full-Stack Developer',
    template: '%s | Munees Raja'
  },
  description: 'Full-Stack Developer specializing in AI-powered solutions, automation, and scalable applications. 4+ years of experience in React.js and Node.js.',
  keywords: [
    'Munees Raja',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'AI Solutions',
    'Web Development',
    'Software Engineer',
    'JavaScript',
    'TypeScript',
    'Next.js'
  ],
  authors: [{ name: 'Munees Raja' }],
  creator: 'Munees Raja',
  publisher: 'Munees Raja',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-munees.vercel.app',
    title: 'Munees Raja | Full-Stack Developer',
    description: 'Full-Stack Developer specializing in AI-powered solutions, automation, and scalable applications.',
    siteName: 'Munees Raja Portfolio',
    images: [
      {
        url: '/images/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Munees Raja - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Munees Raja | Full-Stack Developer',
    description: 'Full-Stack Developer specializing in AI-powered solutions, automation, and scalable applications.',
    images: ['/images/og-image.png'], 
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'manifest',
        url: '/favicon/site.webmanifest',
      },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'technology',
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}