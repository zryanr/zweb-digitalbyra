import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { JsonLd } from "@/components/json-ld"
import { SITE_URL, SITE_NAME, BUSINESS_INFO } from "@/lib/constants"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ZWEB Digitalbyrå | Profesjonelle nettsider for norske bedrifter",
    template: "%s | ZWEB Digitalbyrå",
  },
  description:
    "Vi lager moderne, profesjonelle nettsider for norske bedrifter. Alt inkludert fra kun 999 kr/mnd. Gratis uforpliktende samtale. Webdesign byrå i Norge.",
  keywords: [
    "nettside for bedrifter",
    "webdesign norge",
    "profesjonell nettside",
    "nettside pris",
    "hjemmeside bedrift",
    "webdesign byrå",
    "digitalbyrå norge",
    "lage nettside for firma",
    "billig nettside bedrift",
    "SEO-optimalisering",
    "nettside for småbedrifter",
  ],
  openGraph: {
    title: "ZWEB Digitalbyrå | Profesjonelle nettsider for norske bedrifter",
    description:
      "Moderne nettsider for norske bedrifter fra 999 kr/mnd. Alt inkludert — design, hosting, domene, SEO og support.",
    locale: "nb_NO",
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "ZWEB Digitalbyrå | Profesjonelle nettsider",
    description: "Moderne nettsider for norske bedrifter fra 999 kr/mnd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no">
      <body className={`${inter.variable} font-sans antialiased`}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: BUSINESS_INFO.name,
            url: BUSINESS_INFO.url,
            logo: `${SITE_URL}/icon.svg`,
            contactPoint: {
              "@type": "ContactPoint",
              telephone: BUSINESS_INFO.phone,
              contactType: "customer service",
              availableLanguage: "Norwegian",
            },
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: BUSINESS_INFO.name,
            description:
              "Vi lager moderne, profesjonelle nettsider for norske bedrifter. Alt inkludert fra kun 999 kr/mnd.",
            telephone: BUSINESS_INFO.phone,
            email: BUSINESS_INFO.email,
            url: BUSINESS_INFO.url,
            priceRange: "999-6999 NOK",
            address: {
              "@type": "PostalAddress",
              addressCountry: BUSINESS_INFO.country,
            },
            areaServed: {
              "@type": "Country",
              name: "Norway",
            },
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_NAME,
            url: SITE_URL,
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
