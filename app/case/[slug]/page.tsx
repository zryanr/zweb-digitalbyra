import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MarketingLayout } from "@/components/marketing-layout"
import { JsonLd } from "@/components/json-ld"
import { BUSINESS_INFO } from "@/lib/constants"
import { getAllCases, getCaseBySlug } from "@/lib/cases"
import { buildBreadcrumbList, buildPageMetadata } from "@/lib/seo"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseBySlug(slug)
  if (!caseStudy) return {}

  const base = buildPageMetadata({
    title: `${caseStudy.company}: ${caseStudy.title} | ZWEB case`,
    description: caseStudy.summary,
    path: `/case/${caseStudy.slug}`,
    keywords: [
      `${caseStudy.industry.toLowerCase()} case`,
      "nettside case",
      "seo resultater",
    ],
    type: "article",
  })

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: caseStudy.publishedDate,
      modifiedTime: caseStudy.updatedDate,
      authors: ["Zryan Rzgar"],
    },
  }
}

export function generateStaticParams() {
  return getAllCases().map((item) => ({ slug: item.slug }))
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params
  const caseStudy = getCaseBySlug(slug)

  if (!caseStudy) notFound()

  return (
    <>
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Hjem", path: "/" },
          { name: "Case", path: "/case" },
          { name: caseStudy.company, path: `/case/${caseStudy.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          genre: "Case Study",
          datePublished: caseStudy.publishedDate,
          dateModified: caseStudy.updatedDate,
          inLanguage: "nb-NO",
          headline: caseStudy.title,
          name: caseStudy.title,
          description: caseStudy.summary,
          about: [
            caseStudy.industry,
            caseStudy.location,
            `${caseStudy.platform} prosjekt`,
          ],
          keywords: [
            "case study",
            "webdesign resultater",
            caseStudy.industry,
            caseStudy.location,
          ].join(", "),
          author: {
            "@type": "Person",
            name: "Zryan Rzgar",
            jobTitle:
              "Mastergrad i datavitenskap, fullstack-utvikler med 7 års erfaring",
            url: `${BUSINESS_INFO.url}/forfatter/zryan-rzgar`,
            affiliation: {
              "@type": "Organization",
              name: BUSINESS_INFO.name,
              url: BUSINESS_INFO.url,
            },
          },
          contributor: {
            "@type": "Organization",
            name: BUSINESS_INFO.name,
            url: BUSINESS_INFO.url,
          },
          publisher: {
            "@type": "Organization",
            name: BUSINESS_INFO.name,
            url: BUSINESS_INFO.url,
          },
          citation: caseStudy.sources.map((source) => source.url),
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BUSINESS_INFO.url}/case/${caseStudy.slug}`,
          },
        }}
      />
      <MarketingLayout
        breadcrumbs={[
          { label: "Hjem", href: "/" },
          { label: "Case", href: "/case" },
          { label: caseStudy.company },
        ]}
        eyebrow={`${caseStudy.industry} • ${caseStudy.location}`}
        title={caseStudy.title}
        description={caseStudy.summary}
        ctaTitle="Vil du ha tilsvarende effekt?"
        ctaDescription="Vi kan gjøre en rask vurdering av nettsiden din og peke ut de viktigste vekstgrepene."
        ctaPrimaryHref="/kontakt"
        ctaPrimaryLabel="Bestill vurdering"
        ctaSecondaryHref="/priser"
        ctaSecondaryLabel="Se pakker"
      >
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Utfordring</h2>
          <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Tiltak</h2>
          <ul className="space-y-2">
            {caseStudy.approach.map((item) => (
              <li key={item} className="text-muted-foreground leading-relaxed list-disc ml-5">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Resultater</h2>
          <ul className="space-y-2">
            {caseStudy.results.map((result) => (
              <li key={result} className="text-muted-foreground leading-relaxed list-disc ml-5">
                {result}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Plattform: {caseStudy.platform} • Leveringstid: {caseStudy.timeline}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Kilder</h2>
          <ul className="space-y-2">
            {caseStudy.sources.map((source) => (
              <li key={source.url} className="text-muted-foreground leading-relaxed">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </MarketingLayout>
    </>
  )
}
