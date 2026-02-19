import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MarketingLayout } from "@/components/marketing-layout"
import { PageFaq } from "@/components/page-faq"
import { ContactForm } from "@/components/contact-form"
import { Pricing } from "@/components/pricing"
import { JsonLd } from "@/components/json-ld"
import { BUSINESS_INFO } from "@/lib/constants"
import { getLandingPageByPath, landingPages } from "@/lib/landing-pages"
import { buildBreadcrumbList, buildPageMetadata } from "@/lib/seo"

type Props = {
  params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const path = `/${slug.join("/")}`
  const page = getLandingPageByPath(path)

  if (!page) return {}

  return buildPageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
    keywords: page.keywords,
    type: "website",
  })
}

export function generateStaticParams() {
  return landingPages.map((page) => ({
    slug: page.path.replace(/^\//, "").split("/"),
  }))
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params
  const path = `/${slug.join("/")}`
  const page = getLandingPageByPath(path)

  if (!page) notFound()

  return (
    <>
      <JsonLd data={buildBreadcrumbList(page.breadcrumbs.map((item) => ({ name: item.label, path: item.href || page.path })))} />

      {page.schemaType === "Service" && page.serviceName ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.serviceName,
            description: page.description,
            provider: {
              "@type": "Organization",
              name: BUSINESS_INFO.name,
              url: BUSINESS_INFO.url,
            },
            areaServed: {
              "@type": "Country",
              name: "Norge",
            },
            offers: page.servicePriceFrom
              ? {
                  "@type": "Offer",
                  price: page.servicePriceFrom,
                  priceCurrency: "NOK",
                }
              : undefined,
          }}
        />
      ) : null}

      {page.faqs?.length ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faqs.map((faq) => ({
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

      <MarketingLayout
        breadcrumbs={page.breadcrumbs}
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        ctaTitle={page.ctaTitle}
        ctaDescription={page.ctaDescription}
        ctaPrimaryHref={page.ctaPrimaryHref}
        ctaPrimaryLabel={page.ctaPrimaryLabel}
        ctaSecondaryHref={page.ctaSecondaryHref}
        ctaSecondaryLabel={page.ctaSecondaryLabel}
      >
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl font-bold text-foreground mb-4 text-balance">
              {section.heading}
            </h2>
            <div className="space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            {section.bullets?.length ? (
              <ul className="mt-4 space-y-2">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="text-muted-foreground leading-relaxed list-disc ml-5">
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        {page.path === "/priser" ? <Pricing /> : null}
        {page.path === "/kontakt" ? <ContactForm integrated /> : null}
        {page.faqs?.length ? <PageFaq items={page.faqs} /> : null}
      </MarketingLayout>
    </>
  )
}
