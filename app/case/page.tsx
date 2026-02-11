import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { MarketingLayout } from "@/components/marketing-layout"
import { JsonLd } from "@/components/json-ld"
import { getAllCases } from "@/lib/cases"
import { buildBreadcrumbList, buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Case og resultater fra prosjektene våre | ZWEB",
  description:
    "Se hvordan vi hjelper norske bedrifter med nettsider, SEO og konverteringsforbedringer.",
  path: "/case",
  keywords: ["webdesign case", "nettside referanser", "resultater nettside"],
})

export default function CaseIndexPage() {
  const caseStudies = getAllCases()

  return (
    <>
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Hjem", path: "/" },
          { name: "Case", path: "/case" },
        ])}
      />
      <MarketingLayout
        breadcrumbs={[
          { label: "Hjem", href: "/" },
          { label: "Case" },
        ]}
        eyebrow="Resultater"
        title="Case fra norske bedrifter"
        description="Eksempler på hvordan vi bygger nettsider som gir mer synlighet, bedre konvertering og flere henvendelser."
        ctaTitle="Vil du ha lignende resultater?"
        ctaDescription="Book en uforpliktende samtale, så viser vi hva som er mest lønnsomt å prioritere først."
      >
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="rounded-xl border border-border bg-card p-6 hover:border-accent/40 transition-colors"
            >
              <p className="text-xs uppercase tracking-wide text-accent font-medium mb-2">
                {study.industry} • {study.location}
              </p>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                {study.company}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {study.summary}
              </p>
              <ul className="space-y-1 mb-5">
                {study.results.slice(0, 2).map((result) => (
                  <li key={result} className="text-sm text-muted-foreground leading-relaxed list-disc ml-5">
                    {result}
                  </li>
                ))}
              </ul>
              <Link
                href={`/case/${study.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2 transition-all"
              >
                Les case
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </section>
      </MarketingLayout>
    </>
  )
}
