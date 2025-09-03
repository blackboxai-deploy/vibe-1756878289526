import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Universal Admin Panel',
  description: 'Universal admin panel for various hosting providers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}