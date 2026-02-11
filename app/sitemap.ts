import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/constants"
import { getAllArticles } from "@/lib/blog"
import { getAllCases } from "@/lib/cases"
import { landingPages } from "@/lib/landing-pages"
import { authors } from "@/lib/authors"

function parseIsoDate(value: string): Date {
  return new Date(`${value}T00:00:00.000Z`)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const allArticles = getAllArticles()
  const allCases = getAllCases()
  const latestArticleDate =
    allArticles
      .map((article) => article.updatedDate)
      .sort()
      .at(-1) || "2026-02-11"
  const latestCaseDate =
    allCases
      .map((caseStudy) => caseStudy.updatedDate)
      .sort()
      .at(-1) || "2026-02-11"

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: parseIsoDate("2026-02-11"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: parseIsoDate(latestArticleDate),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/case`,
      lastModified: parseIsoDate(latestCaseDate),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/forfatter`,
      lastModified: parseIsoDate("2026-02-11"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]

  const landingPageUrls: MetadataRoute.Sitemap = landingPages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: parseIsoDate(page.updatedDate),
    changeFrequency: "monthly",
    priority: page.path === "/priser" || page.path === "/kontakt" ? 0.9 : 0.75,
  }))

  const casePages: MetadataRoute.Sitemap = allCases.map((item) => ({
    url: `${SITE_URL}/case/${item.slug}`,
    lastModified: parseIsoDate(item.updatedDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = allArticles.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.updatedDate || article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const authorPages: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${SITE_URL}/forfatter/${author.slug}`,
    lastModified: parseIsoDate(author.updatedDate),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  return [
    ...staticPages,
    ...landingPageUrls,
    ...casePages,
    ...blogPages,
    ...authorPages,
  ]
}
