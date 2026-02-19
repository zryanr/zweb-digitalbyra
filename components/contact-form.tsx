"use client"

import React from "react"

import { useState } from "react"
import { submitContactForm } from "@/lib/contact-client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react"

type ContactFormProps = {
  integrated?: boolean
}

export function ContactForm({ integrated = false }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const result = await submitContactForm({
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      package: String(formData.get("package") || ""),
      message: String(formData.get("message") || ""),
    })

    setIsSubmitting(false)

    if (!result.ok) {
      setSubmitError(result.error)
      return
    }

    form.reset()
    setIsSubmitted(true)
  }

  const sectionClassName = integrated
    ? "py-20 lg:py-28"
    : "py-20 lg:py-28 bg-primary text-primary-foreground"

  const gridClassName = integrated
    ? "grid lg:grid-cols-2 rounded-3xl border border-border/80 bg-gradient-to-br from-secondary/50 via-background to-secondary/20 overflow-hidden"
    : "grid lg:grid-cols-2 gap-12 lg:gap-16"

  const infoColumnClassName = integrated
    ? "space-y-8 p-6 sm:p-8 lg:p-10"
    : "space-y-8"

  const introCopyClassName = integrated
    ? "text-muted-foreground leading-relaxed"
    : "text-primary-foreground/80 leading-relaxed"

  const infoRowClassName = integrated
    ? "flex items-center gap-4 rounded-xl border border-border/70 bg-background/80 p-4"
    : "flex items-center gap-4"

  const infoIconClassName = integrated
    ? "w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-foreground"
    : "w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center"

  const infoLabelClassName = integrated
    ? "text-sm text-muted-foreground"
    : "text-sm text-primary-foreground/60"

  const trustContainerClassName = integrated
    ? "pt-6 border-t border-border/80"
    : "pt-6 border-t border-primary-foreground/10"

  const trustLabelClassName = integrated
    ? "text-sm text-muted-foreground mb-3"
    : "text-sm text-primary-foreground/60 mb-3"

  const trustIconClassName = integrated
    ? "w-4 h-4 text-primary"
    : "w-4 h-4 text-accent"

  const formColumnClassName = integrated
    ? "bg-background/70 p-6 sm:p-8 lg:p-10 lg:border-l lg:border-border/80"
    : "bg-card text-card-foreground p-6 sm:p-8 rounded-2xl"

  const successIconContainerClassName = integrated
    ? "w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"
    : "w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6"

  const successIconClassName = integrated
    ? "w-8 h-8 text-primary"
    : "w-8 h-8 text-accent"

  const formClassName = integrated
    ? "space-y-6 rounded-2xl border border-border/70 bg-background p-6 sm:p-7 shadow-sm"
    : "space-y-6"

  const submitButtonClassName = integrated
    ? "w-full bg-primary text-primary-foreground hover:bg-primary/90"
    : "w-full bg-accent text-accent-foreground hover:bg-accent/90"

  return (
    <section id="kontakt" className={sectionClassName}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={gridClassName}>
          {/* Left side - Info */}
          <div className={infoColumnClassName}>
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
                Ta kontakt
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
                Klar for en uforpliktende gjennomgang?
              </h2>
              <p className={introCopyClassName}>
                Fyll ut skjemaet, så tar vi kontakt med en konkret anbefaling for
                nettside, SEO og neste steg basert på behovet i bedriften din.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className={infoRowClassName}>
                <div className={infoIconClassName}>
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className={infoLabelClassName}>Ring oss</p>
                  <a href="tel:+4794112356" className="font-medium hover:text-accent transition-colors">
                    94 11 23 56
                  </a>
                </div>
              </div>

              <div className={infoRowClassName}>
                <div className={infoIconClassName}>
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className={infoLabelClassName}>E-post</p>
                  <a href="mailto:hei@zweb.no" className="font-medium hover:text-accent transition-colors">
                    hei@zweb.no
                  </a>
                </div>
              </div>

              <div className={infoRowClassName}>
                <div className={infoIconClassName}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className={infoLabelClassName}>Lokasjon</p>
                  <p className="font-medium">Norge</p>
                </div>
              </div>
            </div>

            {/* Trust signals */}
            <div className={trustContainerClassName}>
              <p className={trustLabelClassName}>Hvorfor velge ZWEB?</p>
              <div className="space-y-2">
                {[
                  "100 % norsk selskap",
                  "Over 100 fornøyde kunder",
                  "Ingen bindingstid på abonnement",
                  "Rask responstid",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className={trustIconClassName} />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className={formColumnClassName}>
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className={successIconContainerClassName}>
                  <CheckCircle2 className={successIconClassName} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Takk for din henvendelse!</h3>
                <p className="text-muted-foreground">
                  Vi tar kontakt med deg så snart som mulig.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={formClassName}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    Uforpliktende samtale
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Vi svarer vanligvis innen 24 timer
                  </p>
                </div>
                {submitError ? (
                  <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    {submitError}
                  </div>
                ) : null}

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
                    <option value="alt-inkludert">Alt inkludert – 999 kr/mnd (anbefalt)</option>
                    <option value="engangskjop">Engangskjøp – 6 999 kr</option>
                    <option value="usikker">Usikker – trenger rådgivning</option>
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
                  className={submitButtonClassName}
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
