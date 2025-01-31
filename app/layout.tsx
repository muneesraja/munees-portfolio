import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'John Doe - Full-Stack Developer & Automation Specialist',
  description: 'Crafting AI-powered solutions with React.js | 4+ years of scaling applications',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.com',
    title: 'John Doe - Full-Stack Developer',
    description: 'Crafting AI-powered solutions with React.js',
    siteName: 'John Doe Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
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