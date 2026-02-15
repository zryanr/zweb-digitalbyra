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
  applicationName: SITE_NAME,
  title: {
    default: "ZWEB Digitalbyrå | Profesjonelle nettsider for norske bedrifter",
    template: "%s | ZWEB Digitalbyrå",
  },
  description:
    "Vi bygger nettsider som gir flere henvendelser for norske bedrifter: webdesign, WordPress, Webflow, nettbutikk, SEO og drift/vedlikehold.",
  keywords: [
    "nettside for bedrifter",
    "webdesign norge",
    "profesjonell nettside",
    "nettside pris",
    "hjemmeside bedrift",
    "webdesign byrå",
    "digitalbyrå norge",
    "lage nettside for firma",
    "wordpress byrå",
    "webflow byrå",
    "nettbutikk byrå",
    "SEO-optimalisering",
    "drift og vedlikehold nettside",
    "nettside for småbedrifter",
  ],
  category: "business",
  openGraph: {
    title: "ZWEB Digitalbyrå | Profesjonelle nettsider for norske bedrifter",
    description:
      "Webdesign, WordPress, Webflow, nettbutikk og SEO for norske bedrifter som vil ha flere henvendelser.",
    locale: "nb_NO",
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "ZWEB Digitalbyrå - Nettsider for norske bedrifter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZWEB Digitalbyrå | Profesjonelle nettsider",
    description: "Moderne nettsider for norske bedrifter fra 999 kr/mnd",
    images: [`${SITE_URL}/twitter-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: {
      "nb-NO": "/",
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nb">
      <body className={`${inter.variable} font-sans antialiased`}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: BUSINESS_INFO.name,
            legalName: BUSINESS_INFO.legalName,
            url: BUSINESS_INFO.url,
            logo: `${SITE_URL}/icon.svg`,
            foundingDate: BUSINESS_INFO.foundingDate,
            sameAs: BUSINESS_INFO.sameAs,
            identifier: {
              "@type": "PropertyValue",
              propertyID: "orgnr",
              value: BUSINESS_INFO.orgNr,
            },
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
            "@type": "LocalBusiness",
            name: BUSINESS_INFO.name,
            description:
              "Vi lager moderne, profesjonelle nettsider for norske bedrifter. Alt inkludert fra kun 999 kr/mnd.",
            telephone: BUSINESS_INFO.phone,
            email: BUSINESS_INFO.email,
            url: BUSINESS_INFO.url,
            priceRange: "999-6999 NOK",
            sameAs: BUSINESS_INFO.sameAs,
            identifier: {
              "@type": "PropertyValue",
              propertyID: "orgnr",
              value: BUSINESS_INFO.orgNr,
            },
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
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE_URL}/blog?query={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
