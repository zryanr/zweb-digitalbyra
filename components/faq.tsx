"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { faqs, faqCategories, type FAQCategory } from "@/lib/faq-data"
import { cn } from "@/lib/utils"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [activeCategory, setActiveCategory] = useState<FAQCategory | "alle">(
    "alle"
  )

  const filteredFaqs =
    activeCategory === "alle"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
              Ofte stilte spørsmål
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Spørsmål om nettsider for bedrifter?
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4 max-w-xl mx-auto">
              Her finner du svar på de vanligste spørsmålene vi får om nettsider,
              priser, prosess og vedlikehold.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Category Tabs */}
        <AnimateOnScroll delay={100}>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button
              type="button"
              onClick={() => {
                setActiveCategory("alle")
                setOpenIndex(0)
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === "alle"
                  ? "bg-accent text-accent-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/30"
              )}
            >
              Alle
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id)
                  setOpenIndex(0)
                }}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/30"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* FAQ Items */}
        <AnimateOnScroll>
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={faq.question}
                  className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-200 hover:border-accent/20"
                >
                  <button
                    type="button"
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-foreground pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-200 ease-in-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
