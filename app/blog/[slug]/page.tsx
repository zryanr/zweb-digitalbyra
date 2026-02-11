import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { getArticleBySlug, getAllArticles } from "@/lib/blog"
import { BlogArticleContent } from "@/components/blog-article-content"
import { BlogArticleCard } from "@/components/blog-article-card"
import { BlogCTA } from "@/components/blog-cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { SITE_URL, SITE_NAME } from "@/lib/constants"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.updatedDate,
      locale: "nb_NO",
      siteName: SITE_NAME,
      url: `${SITE_URL}/blog/${slug}`,
    },
  }
}

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }))
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const formattedDate = new Date(article.date).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const relatedArticles = article.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter(Boolean)

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.description,
          datePublished: article.date,
          dateModified: article.updatedDate || article.date,
          author: {
            "@type": "Organization",
            name: article.author.name,
          },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: {
              "@type": "ImageObject",
              url: `${SITE_URL}/icon.svg`,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/blog/${slug}`,
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Hjem",
              item: SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blogg",
              item: `${SITE_URL}/blog`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: article.title,
              item: `${SITE_URL}/blog/${slug}`,
            },
          ],
        }}
      />
      <Header />
      <main className="pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:text-accent transition-colors">
              Hjem
            </a>
            <span className="mx-2">/</span>
            <a href="/blog" className="hover:text-accent transition-colors">
              Blogg
            </a>
            <span className="mx-2">/</span>
            <span className="text-foreground line-clamp-1">{article.title}</span>
          </nav>

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Tilbake til blogg
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-4">
              {article.category}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              {article.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {article.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {article.author.name}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readingTime} lesetid
              </span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className="bg-secondary/50 rounded-xl p-5 mb-10 border border-border">
            <p className="font-semibold text-foreground text-sm mb-3">
              Innhold
            </p>
            <ul className="space-y-1.5">
              {article.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Article Content */}
          <BlogArticleContent sections={article.sections} />

          {/* CTA */}
          <BlogCTA />
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Relaterte artikler
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map(
                (related) =>
                  related && (
                    <BlogArticleCard key={related.slug} article={related} />
                  )
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
