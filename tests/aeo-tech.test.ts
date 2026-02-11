import { existsSync } from "node:fs"
import { describe, expect, it } from "vitest"
import sitemap from "../app/sitemap"
import { landingPages } from "../lib/landing-pages"
import { authors } from "../lib/authors"

describe("AEO technical contracts", () => {
  it("keeps sitemap lastModified aligned with landing-page content dates", () => {
    const map = sitemap()
    for (const page of landingPages) {
      const entry = map.find((item) => item.url.endsWith(page.path))
      expect(entry, `Manglende sitemap entry for ${page.path}`).toBeTruthy()
      expect(entry?.lastModified).toBeInstanceOf(Date)
      expect((entry?.lastModified as Date).toISOString().startsWith(page.updatedDate)).toBe(true)
    }
  })

  it("includes author index and author profiles in sitemap", () => {
    const map = sitemap()
    expect(map.some((item) => item.url.endsWith("/forfatter"))).toBe(true)
    for (const author of authors) {
      expect(
        map.some((item) => item.url.endsWith(`/forfatter/${author.slug}`)),
        `Mangler forfatter i sitemap: ${author.slug}`
      ).toBe(true)
    }
  })

  it("ships llms.txt in public assets", () => {
    expect(existsSync("public/llms.txt")).toBe(true)
  })
})
