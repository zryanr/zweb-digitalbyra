import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { getArticleBySlug, getAllArticles } from "@/lib/blog"
import { getAuthorBySlug } from "@/lib/authors"
import { BlogArticleContent } from "@/components/blog-article-content"
import { BlogArticleCard } from "@/components/blog-article-card"
import { BlogCTA } from "@/components/blog-cta"
import { PageFaq } from "@/components/page-faq"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { SITE_URL, SITE_NAME } from "@/lib/constants"
import { absoluteUrl, buildPageMetadata } from "@/lib/seo"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  const base = buildPageMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${slug}`,
    keywords: article.keywords,
    type: "article",
  })

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.updatedDate || article.date,
      authors: [article.author.name],
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
  const authorProfile = getAuthorBySlug(article.authorSlug)
  const authorImage = authorProfile?.image || "/placeholder-user.jpg"
  const authorImageAlt = authorProfile?.imageAlt || `Profilbilde av ${article.author.name}`
  const wordCount = article.sections
    .map((section) => section.content)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${SITE_URL}/blog/${slug}#blogposting`,
          headline: article.title,
          name: article.title,
          description: article.description,
          datePublished: article.date,
          dateModified: article.updatedDate || article.date,
          inLanguage: "nb-NO",
          isAccessibleForFree: true,
          articleSection: article.category,
          wordCount,
          keywords: article.keywords.join(", "),
          about: article.keywords.map((keyword) => ({
            "@type": "Thing",
            name: keyword,
          })),
          mentions: article.sources.map((source) => ({
            "@type": "CreativeWork",
            name: source.title,
            url: source.url,
          })),
          author: {
            "@type": "Person",
            name: article.author.name,
            url: `${SITE_URL}/forfatter/${article.authorSlug}`,
            jobTitle: article.author.role,
            image: absoluteUrl(authorImage),
            affiliation: {
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL,
            },
          },
          publisher: {
            "@type": "Organization",
            "@id": `${SITE_URL}#organization`,
            name: SITE_NAME,
            url: SITE_URL,
            logo: {
              "@type": "ImageObject",
              url: `${SITE_URL}/icon.svg`,
            },
          },
          isPartOf: {
            "@type": "Blog",
            "@id": `${SITE_URL}/blog#blog`,
            name: "ZWEB Digitalbyrå Blogg",
            url: `${SITE_URL}/blog`,
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/blog/${slug}`,
          },
          citation: article.sources.map((source) => source.url),
        }}
      />
      {article.faqs?.length ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: article.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }}
        />
      ) : null}
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
            <Link href="/" className="hover:text-accent transition-colors">
              Hjem
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-accent transition-colors">
              Blogg
            </Link>
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
                <Image
                  src={authorImage}
                  alt={authorImageAlt}
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full object-cover border border-border bg-secondary/40"
                />
                <span className="inline-flex flex-col leading-tight">
                  <Link
                    href={`/forfatter/${article.authorSlug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {article.author.name}
                  </Link>
                  <span className="text-xs text-muted-foreground/90">
                    {article.author.role}
                  </span>
                </span>
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

          {article.internalLinks?.length ? (
            <section className="mt-10 rounded-xl border border-border bg-secondary/30 p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Relaterte sider
              </h2>
              <ul className="space-y-2">
                {article.internalLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-accent hover:underline leading-relaxed"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="mt-10 rounded-xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Kilder</h2>
            <ul className="space-y-2">
              {article.sources.map((source) => (
                <li key={source.url} className="text-sm text-muted-foreground leading-relaxed">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {source.title}
                  </a>
                  {source.publisher ? ` (${source.publisher})` : ""}
                  {source.publishedDate ? ` - oppdatert ${source.publishedDate}` : ""}
                </li>
              ))}
            </ul>
          </section>

          {article.faqs?.length ? <PageFaq items={article.faqs} /> : null}

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
