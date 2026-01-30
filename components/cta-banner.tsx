import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTABanner() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-accent text-accent-foreground rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-balance">
            Klar til å ta bedriften din til neste nivå?
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Start med en gratis og uforpliktende samtale. Vi hjelper deg å finne 
            den beste løsningen for din bedrift.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8">
              <Link href="#kontakt" className="flex items-center gap-2">
                Gratis samtale
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <a
              href="tel:+4794112356"
              className="flex items-center gap-2 text-accent-foreground/90 hover:text-accent-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">94 11 23 56</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
