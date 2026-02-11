"use client"

import { Star, Quote } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const testimonials = [
  {
    name: "Erik Hansen",
    company: "Sentrum Rørlegger AS",
    location: "Oslo",
    quote:
      "ZWEB leverte en fantastisk nettside til oss. Profesjonell, rask og til en veldig god pris. Anbefales på det varmeste!",
    rating: 5,
  },
  {
    name: "Maria Olsen",
    company: "Klipp & Stil Frisør",
    location: "Bergen",
    quote:
      "Utrolig fornøyd med nettsiden vår. Den ser moderne ut og kundene våre finner oss nå enkelt på Google.",
    rating: 5,
  },
  {
    name: "Thomas Berg",
    company: "Lyspunkt Elektro",
    location: "Trondheim",
    quote:
      "Alt inkludert-pakken er perfekt for oss. Slipper å tenke på hosting og vedlikehold. Topp service!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
              Kundeomtaler
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Hva våre kunder sier
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Vi er stolte av å ha hjulpet hundrevis av norske bedrifter med å
              etablere en profesjonell tilstedeværelse på nett.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Testimonials Grid */}
        <AnimateOnScroll stagger>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative bg-card p-6 rounded-xl border border-border border-l-4 border-l-accent/60 hover:shadow-lg transition-all duration-300"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-accent/15 absolute top-4 right-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-accent/15 rounded-full flex items-center justify-center ring-2 ring-accent/20">
                    <span className="text-sm font-semibold text-accent">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.company}, {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
