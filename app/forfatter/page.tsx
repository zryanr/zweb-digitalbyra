import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { authors } from "@/lib/authors"
import { buildBreadcrumbList, buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Forfattere og fagprofiler | ZWEB",
  description:
    "Møt fagprofilene bak innholdet vårt om nettsider, SEO og konvertering.",
  path: "/forfatter",
  keywords: ["forfattere", "fagprofil", "seo redaksjon"],
})

export default function AuthorIndexPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Hjem", path: "/" },
          { name: "Forfattere", path: "/forfatter" },
        ])}
      />
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Forfattere
          </h1>
          <div className="grid sm:grid-cols-2 gap-6">
            {authors.map((author) => (
              <article key={author.slug} className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-1">{author.name}</h2>
                <p className="text-sm text-accent mb-3">{author.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {author.bio}
                </p>
                <Link
                  href={`/forfatter/${author.slug}`}
                  className="text-sm font-medium text-accent hover:underline"
                >
                  Se profil
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
