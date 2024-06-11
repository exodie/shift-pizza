import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import './globals.css'
import { cn } from '~/lib/utils'
import { siteConfig } from '~/shared/configs'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
