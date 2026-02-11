import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function Hero() {
  const benefits = [
    "Profesjonelt design",
    "SEO-optimalisert",
    "Mobilvennlig",
    "Rask leveringstid",
  ]

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-accent uppercase tracking-wide">
                Norges mest prisgunstige nettsider
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
                Profesjonelle nettsider for din bedrift
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Vi skaper moderne, raske og brukervennlige nettsider som gir din bedrift 
                det profesjonelle inntrykket den fortjener. Alt inkludert fra kun 999 kr/mnd.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                <Link href="#kontakt" className="flex items-center gap-2">
                  Uforpliktende samtale
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 bg-transparent">
                <Link href="#priser">Se våre priser</Link>
              </Button>
            </div>

            {/* Trust badge */}
            <p className="text-xs text-muted-foreground">
              Org.nr: 924 592 575 • Norsk digitalbyrå
            </p>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
              {/* Browser mockup */}
              <div className="bg-secondary/50 px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-block bg-background rounded px-3 py-1 text-xs text-muted-foreground">
                    dinbedrift.no
                  </div>
                </div>
              </div>
              
              {/* Website preview content */}
              <div className="p-6 space-y-4">
                <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  Nettside-eksempel
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Velkommen til dinbedrift.no
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  En moderne nettside med tydelig budskap, sterke handlingsknapper og innhold som bygger tillit.
                </p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-md bg-secondary px-2 py-2 text-muted-foreground">SEO 98</div>
                  <div className="rounded-md bg-secondary px-2 py-2 text-muted-foreground">Mobil A+</div>
                  <div className="rounded-md bg-secondary px-2 py-2 text-muted-foreground">&lt;1s lastetid</div>
                </div>
                <div className="flex gap-3 pt-4">
                  <div className="rounded bg-primary px-4 py-2 text-xs font-medium text-primary-foreground">
                    Bestill møte
                  </div>
                  <div className="rounded border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground">
                    Se tjenester
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-6">
                  <div className="rounded bg-secondary p-3 text-xs text-muted-foreground">Tjenester</div>
                  <div className="rounded bg-secondary p-3 text-xs text-muted-foreground">Referanser</div>
                  <div className="rounded bg-secondary p-3 text-xs text-muted-foreground">Kontakt</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">100+ fornøyde kunder</p>
                  <p className="text-xs text-muted-foreground">i hele Norge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
