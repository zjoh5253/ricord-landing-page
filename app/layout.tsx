import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ricord.ai - AI Meeting Transcription & Task Automation',
  description: 'AI-powered meeting intelligence that records, transcribes, and automatically creates tasks in your workflow tools.',
  keywords: ['AI meeting transcription', 'task automation', 'meeting intelligence', 'productivity tools', 'workflow automation'],
  authors: [{ name: 'Ricord.ai' }],
  openGraph: {
    title: 'Ricord.ai - AI Meeting Transcription & Task Automation',
    description: 'AI-powered meeting intelligence that records, transcribes, and automatically creates tasks in your workflow tools.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Ricord.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ricord.ai - AI Meeting Transcription & Task Automation',
    description: 'AI-powered meeting intelligence that records, transcribes, and automatically creates tasks in your workflow tools.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
