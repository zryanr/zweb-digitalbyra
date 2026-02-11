import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustIndicators } from "@/components/trust-indicators"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { CTABanner } from "@/components/cta-banner"
import { ContactForm } from "@/components/contact-form"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { JsonLd } from "@/components/json-ld"
import { SITE_URL, BUSINESS_INFO } from "@/lib/constants"
import { faqs } from "@/lib/faq-data"

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Alt inkludert nettside",
          provider: {
            "@type": "Organization",
            name: BUSINESS_INFO.name,
          },
          description:
            "Profesjonell nettside med hosting, domene, SSL, support og vedlikehold inkludert",
          url: SITE_URL,
          offers: {
            "@type": "Offer",
            price: "999",
            priceCurrency: "NOK",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "999",
              priceCurrency: "NOK",
              unitCode: "MON",
              referenceQuantity: {
                "@type": "QuantitativeValue",
                value: "1",
                unitCode: "MON",
              },
            },
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Engangskjøp nettside",
          provider: {
            "@type": "Organization",
            name: BUSINESS_INFO.name,
          },
          description:
            "Profesjonell nettside som engangskjøp med design, mobilvennlig layout og SEO grunnoppsett",
          url: SITE_URL,
          offers: {
            "@type": "Offer",
            price: "6999",
            priceCurrency: "NOK",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <Services />
        <Pricing />
        <Process />
        <Testimonials />
        <CTABanner />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
