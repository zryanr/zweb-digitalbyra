import type { Metadata } from "next"
import { SITE_NAME, SITE_URL } from "@/lib/constants"

export type MetadataInput = {
  title: string
  description: string
  path?: string
  keywords?: string[]
  type?: "website" | "article"
}

export function absoluteUrl(path = "/"): string {
  if (!path) return SITE_URL
  if (path.startsWith("http://") || path.startsWith("https://")) return path
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords,
  type = "website",
}: MetadataInput): Metadata {
  const url = absoluteUrl(path)
  const resolvedTitle = title.includes("|") ? { absolute: title } : title

  return {
    title: resolvedTitle,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      type,
      locale: "nb_NO",
      siteName: SITE_NAME,
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
      title,
      description,
      images: [`${SITE_URL}/twitter-image`],
    },
  }
}

export function buildBreadcrumbList(
  items: Array<{ name: string; path: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
