import type { Metadata } from "next"
import { getAllArticles } from "@/lib/blog"
import { BlogArticleCard } from "@/components/blog-article-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { SITE_URL, SITE_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Blogg — Guider om nettsider, SEO og webdesign",
  description:
    "Les våre artikler og guider om nettsider for bedrifter, SEO-optimalisering, webdesign og digitale løsninger for norske bedrifter.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blogg | ZWEB Digitalbyrå",
    description:
      "Guider og artikler om nettsider, SEO og webdesign for norske bedrifter.",
    locale: "nb_NO",
    type: "website",
    siteName: SITE_NAME,
    url: `${SITE_URL}/blog`,
  },
}

export default function BlogPage() {
  const articles = getAllArticles()

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
            <a href="/" className="hover:text-accent transition-colors">
              Hjem
            </a>
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

          {/* Articles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <BlogArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {articles.length === 0 && (
            <p className="text-muted-foreground text-center py-12">
              Ingen artikler ennå. Kom tilbake snart!
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
