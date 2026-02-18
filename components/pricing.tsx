"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const pricingPlans = [
  {
    name: "Alt inkludert",
    description: "Anbefalt for de fleste bedrifter",
    price: "999",
    period: "per måned",
    features: [
      "Profesjonelt skreddersydd design",
      "Inntil 7 sider",
      "Mobilvennlig nettside",
      "Kontaktskjema",
      "Komplett SEO-optimalisering",
      "Google Analytics",
      "Webhotell inkludert",
      "Domene inkludert",
      "SSL-sertifikat inkludert",
      "Løpende support og vedlikehold",
      "Månedlige oppdateringer",
      "Backup og sikkerhet",
      "Leveringstid: 1-2 uker",
    ],
    notIncluded: [],
    recommended: true,
    cta: "Kom i gang",
  },
  {
    name: "Engangskjøp",
    description: "For deg som ønsker full kontroll selv",
    price: "6 999",
    period: "engangspris",
    features: [
      "Profesjonelt design",
      "Inntil 5 sider",
      "Mobilvennlig nettside",
      "Kontaktskjema",
      "SEO-grunnoppsett",
      "Google Analytics",
      "Leveringstid: 2-3 uker",
    ],
    notIncluded: [
      "Webhotell og domene",
      "Løpende support",
      "Oppdateringer og vedlikehold",
      "SSL-sertifikat",
    ],
    recommended: false,
    cta: "Velg engangskjøp",
  },
]

export function Pricing() {
  return (
    <section id="priser" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
              Enkle og transparente priser
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Nettsidepriser - velg pakken som passer bedriften din
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ingen skjulte kostnader. Du vet alltid hva du betaler for.
              Prisene er ekskl. mva.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Pricing Cards */}
        <AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-card rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                  plan.recommended
                    ? "border-accent shadow-xl scale-105"
                    : "border-border hover:border-accent/20"
                }`}
              >
                {/* Recommended badge */}
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 animate-pulse-badge">
                      <Star className="w-4 h-4 fill-current" />
                      Anbefalt
                    </div>
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground"> kr</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.period}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 opacity-50"
                    >
                      <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-0.5 bg-muted-foreground rounded" />
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className={`w-full ${
                    plan.recommended
                      ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                  size="lg"
                >
                  <Link href="/kontakt">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Additional info */}
        <AnimateOnScroll delay={200}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Usikker på hva du trenger?{" "}
              <Link
                href="/kontakt"
                className="text-accent hover:underline font-medium"
              >
                Ta kontakt for en gratis, uforpliktende samtale
              </Link>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
