"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Info */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
                Ta kontakt
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
                Klar for en uforpliktende samtale?
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                Fyll ut skjemaet, så tar vi kontakt for en gratis og uforpliktende 
                samtale om hvordan vi kan hjelpe din bedrift.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Ring oss</p>
                  <a href="tel:+4794112356" className="font-medium hover:text-accent transition-colors">
                    94 11 23 56
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">E-post</p>
                  <a href="mailto:hei@zweb.no" className="font-medium hover:text-accent transition-colors">
                    hei@zweb.no
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Lokasjon</p>
                  <p className="font-medium">Norge</p>
                </div>
              </div>
            </div>

            {/* Trust signals */}
            <div className="pt-6 border-t border-primary-foreground/10">
              <p className="text-sm text-primary-foreground/60 mb-3">Hvorfor velge ZWEB?</p>
              <div className="space-y-2">
                {[
                  "100% norsk selskap",
                  "Over 100 fornøyde kunder",
                  "Ingen bindingstid på engangskjøp",
                  "Rask responstid",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-card text-card-foreground p-6 sm:p-8 rounded-2xl">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Takk for din henvendelse!</h3>
                <p className="text-muted-foreground">
                  Vi tar kontakt med deg så snart som mulig.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    Ikke forpliktende samtale
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Vi svarer vanligvis innen 24 timer
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Navn *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Ditt navn"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Bedrift</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Bedriftsnavn"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-post *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="din@epost.no"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+47 123 45 678"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="package">Hvilken pakke er du interessert i?</Label>
                  <select
                    id="package"
                    name="package"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                  >
                    <option value="">Velg pakke</option>
                    <option value="alt-inkludert">Alt inkludert - 999 kr/mnd (Anbefalt)</option>
                    <option value="engangskjop">Engangskjøp - 6 999 kr</option>
                    <option value="usikker">Usikker - trenger rådgivning</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Fortell oss om prosjektet ditt</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Hva slags nettside trenger du? Hva er viktig for din bedrift?"
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sender...
                    </>
                  ) : (
                    "Send forespørsel"
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Ved å sende inn dette skjemaet godtar du at vi kontakter deg 
                  angående din forespørsel.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
