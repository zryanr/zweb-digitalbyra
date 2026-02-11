import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { getAuthorBySlug, authors } from "@/lib/authors"
import { getAllArticles } from "@/lib/blog"
import { SITE_NAME, SITE_URL } from "@/lib/constants"
import { buildBreadcrumbList, buildPageMetadata } from "@/lib/seo"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author) return {}

  return buildPageMetadata({
    title: `${author.name} | Forfatterprofil`,
    description: author.bio,
    path: `/forfatter/${slug}`,
    keywords: [author.name, ...author.expertise],
  })
}

export function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }))
}

export default async function AuthorProfilePage({ params }: Props) {
  const { slug } = await params
  const author = getAuthorBySlug(slug)

  if (!author) notFound()

  const authoredArticles = getAllArticles().filter(
    (article) => article.authorSlug === author.slug
  )

  return (
    <>
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Hjem", path: "/" },
          { name: "Forfattere", path: "/forfatter" },
          { name: author.name, path: `/forfatter/${author.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: author.name,
          description: author.bio,
          jobTitle: author.role,
          url: `${SITE_URL}/forfatter/${author.slug}`,
          worksFor: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          knowsAbout: author.expertise,
          sameAs: author.sameAs,
        }}
      />
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Hjem
            </Link>
            <span className="mx-2">/</span>
            <Link href="/forfatter" className="hover:text-accent transition-colors">
              Forfattere
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{author.name}</span>
          </nav>

          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              {author.name}
            </h1>
            <p className="text-accent font-medium mb-4">{author.role}</p>
            <p className="text-muted-foreground leading-relaxed">{author.bio}</p>
          </header>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Fagområder</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {author.expertise.map((item) => (
                <li key={item} className="text-muted-foreground leading-relaxed list-disc ml-5">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Publiserte artikler</h2>
            <div className="space-y-4">
              {authoredArticles.map((article) => (
                <article key={article.slug} className="rounded-lg border border-border p-4 bg-card">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-foreground font-semibold hover:text-accent transition-colors"
                  >
                    {article.title}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">
                    Oppdatert {new Date(article.updatedDate).toLocaleDateString("nb-NO")}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
