import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'ZWEB Digitalbyrå | Profesjonelle nettsider for norske bedrifter',
  description: 'Vi lager moderne, profesjonelle nettsider for norske bedrifter. Alt inkludert fra kun 999 kr/mnd. Gratis uforpliktende samtale.',
  keywords: 'nettside, webdesign, digitalbyrå, norge, bedrift, hjemmeside, webhotell',
  openGraph: {
    title: 'ZWEB Digitalbyrå | Profesjonelle nettsider',
    description: 'Moderne nettsider for norske bedrifter fra 999 kr/mnd',
    locale: 'nb_NO',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
