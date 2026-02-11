import type { Metadata } from "next"
import Link from "next/link"
import { getAllArticles } from "@/lib/blog"
import { BlogArticleCard } from "@/components/blog-article-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { SITE_URL, SITE_NAME } from "@/lib/constants"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Blogg — Guider om nettsider, SEO og webdesign",
  description:
    "Les våre artikler og guider om nettsider for bedrifter, SEO-optimalisering, webdesign og digitale løsninger for norske bedrifter.",
  path: "/blog",
  keywords: [
    "blogg nettside",
    "seo guide",
    "webdesign tips",
    "nettside pris",
    "wordpress vs webflow",
  ],
})

type BlogPageProps = {
  searchParams: Promise<{ query?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const query = (await searchParams).query?.trim().toLowerCase() || ""
  const allArticles = getAllArticles()
  const articles = query
    ? allArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.description.toLowerCase().includes(query) ||
          article.keywords.some((keyword) => keyword.toLowerCase().includes(query))
      )
    : allArticles

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "ZWEB Digitalbyrå Blogg",
          description:
            "Guider og artikler om nettsider, SEO og webdesign for norske bedrifter",
          url: `${SITE_URL}/blog`,
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
        }}
      />
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Hjem
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Blogg</span>
          </nav>

          {/* Header */}
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Blogg
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tips, guider og innsikt om nettsider for bedrifter,
              SEO-optimalisering og webdesign. Alt du trenger for å ta gode valg
              for din bedrifts digitale tilstedeværelse.
            </p>
          </div>

          <form action="/blog" method="get" className="max-w-xl mb-8">
            <label htmlFor="query" className="sr-only">
              Søk i artikler
            </label>
            <div className="flex gap-3">
              <input
                id="query"
                name="query"
                defaultValue={query}
                placeholder="Søk etter pris, webflow, SEO, webbyrå ..."
                className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm"
              />
              <button
                type="submit"
                className="h-11 rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground hover:bg-accent/90"
              >
                Søk
              </button>
            </div>
          </form>

          <section className="grid md:grid-cols-3 gap-4 mb-12">
            <Link
              href="/guider/nettside-pris"
              className="rounded-xl border border-border p-5 hover:border-accent/40 transition-colors"
            >
              <p className="text-xs uppercase tracking-wide text-accent font-medium mb-2">
                Pillar guide
              </p>
              <h2 className="text-lg font-semibold text-foreground mb-1">
                Nettside pris
              </h2>
              <p className="text-sm text-muted-foreground">
                Hvordan vurdere pris og tilbud smart.
              </p>
            </Link>
            <Link
              href="/guider/wordpress-vs-webflow"
              className="rounded-xl border border-border p-5 hover:border-accent/40 transition-colors"
            >
              <p className="text-xs uppercase tracking-wide text-accent font-medium mb-2">
                Pillar guide
              </p>
              <h2 className="text-lg font-semibold text-foreground mb-1">
                WordPress vs Webflow
              </h2>
              <p className="text-sm text-muted-foreground">
                Velg riktig plattform for bedriften.
              </p>
            </Link>
            <Link
              href="/guider/seo-for-lansering"
              className="rounded-xl border border-border p-5 hover:border-accent/40 transition-colors"
            >
              <p className="text-xs uppercase tracking-wide text-accent font-medium mb-2">
                Pillar guide
              </p>
              <h2 className="text-lg font-semibold text-foreground mb-1">
                SEO før lansering
              </h2>
              <p className="text-sm text-muted-foreground">
                Sjekkliste før du går live.
              </p>
            </Link>
          </section>

          {/* Articles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <BlogArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {articles.length === 0 && (
            <p className="text-muted-foreground text-center py-12">
              Ingen artikler matcher søket ditt. Prøv et annet søkeord.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
