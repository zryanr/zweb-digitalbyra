import { describe, expect, it } from "vitest"
import { landingPages } from "../lib/landing-pages"
import { articles } from "../lib/blog"
import { authors, getAuthorBySlug } from "../lib/authors"

describe("AEO content contracts", () => {
  it("ensures each commercial landing page has at least three FAQs", () => {
    const commercialPages = landingPages.filter((page) =>
      page.path.startsWith("/nettside-for-bedrift") ||
      page.path.startsWith("/webdesign-byra") ||
      page.path.startsWith("/wordpress-nettside") ||
      page.path.startsWith("/webflow-nettside") ||
      page.path.startsWith("/nettbutikk") ||
      page.path.startsWith("/seo-for-nettsider") ||
      page.path.startsWith("/drift-og-vedlikehold") ||
      page.path.startsWith("/priser") ||
      page.path.startsWith("/kontakt") ||
      page.path.startsWith("/bransjer/") ||
      page.path.startsWith("/lokalt/")
    )

    for (const page of commercialPages) {
      expect(page.faqs?.length || 0, `${page.path} mangler FAQ`).toBeGreaterThanOrEqual(3)
    }
  })

  it("ensures each blog article has at least two sources", () => {
    for (const article of articles) {
      expect(article.sources?.length || 0, `${article.slug} mangler kilder`).toBeGreaterThanOrEqual(2)
    }
  })

  it("ensures each article author points to an author profile", () => {
    expect(authors.length).toBeGreaterThan(0)
    for (const article of articles) {
      expect(article.authorSlug, `${article.slug} mangler authorSlug`).toBeTruthy()
      const author = getAuthorBySlug(article.authorSlug)
      expect(author, `Ukjent forfatter på ${article.slug}`).toBeTruthy()
    }
  })
})
