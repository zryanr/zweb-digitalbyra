"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Hva er forskjellen på engangskjøp og alt inkludert?",
    answer:
      "Med engangskjøp betaler du én gang for nettsiden, men må selv sørge for hosting, domene og vedlikehold. Med alt inkludert-pakken betaler du en fast månedspris som dekker alt: hosting, domene, SSL, support og løpende vedlikehold. De fleste velger alt inkludert fordi det er enklere og mer kostnadseffektivt over tid.",
  },
  {
    question: "Hvor lang tid tar det å lage en nettside?",
    answer:
      "For alt inkludert-pakken leverer vi vanligvis innen 1-2 uker. Engangskjøp tar typisk 2-3 uker. Leveringstiden avhenger av prosjektets kompleksitet og hvor raskt du gir tilbakemelding underveis.",
  },
  {
    question: "Hva skjer hvis jeg vil avslutte abonnementet?",
    answer:
      "Det er ingen bindingstid på våre tjenester. Du kan avslutte abonnementet når som helst. Ved oppsigelse beholder du designet, men du må selv sørge for ny hosting og vedlikehold.",
  },
  {
    question: "Kan jeg gjøre endringer på nettsiden selv?",
    answer:
      "Ja! Vi leverer nettsiden med et brukervennlig administrasjonspanel hvor du enkelt kan oppdatere tekst, bilder og innhold. For større endringer hjelper vårt supportteam deg gjerne.",
  },
  {
    question: "Hva om jeg allerede har et domene?",
    answer:
      "Ingen problem! Vi hjelper deg med å koble ditt eksisterende domene til den nye nettsiden. Har du ikke domene, fikser vi det for deg.",
  },
  {
    question: "Er nettsidene mobilvennlige?",
    answer:
      "Absolutt! Alle våre nettsider er 100% responsive og fungerer perfekt på mobil, nettbrett og desktop. Dette er viktig både for brukeropplevelsen og for å rangere godt på Google.",
  },
  {
    question: "Hva menes med SEO-optimalisering?",
    answer:
      "SEO (søkemotoroptimalisering) handler om å gjøre nettsiden synlig på Google. Vi sørger for riktig struktur, raske lastetider, metatagger og annet som hjelper din nettside å bli funnet av potensielle kunder.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
            Ofte stilte spørsmål
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Har du spørsmål?
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                type="button"
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
