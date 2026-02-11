import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function BlogCTA() {
  return (
    <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 sm:p-8 my-10">
      <h3 className="text-xl font-semibold text-foreground mb-2">
        Klar for en profesjonell nettside?
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Vi hjelper din bedrift med en moderne, SEO-optimalisert nettside. Start
        med en gratis, uforpliktende samtale — uten bindingstid.
      </p>
      <Button
        asChild
        className="bg-accent text-accent-foreground hover:bg-accent/90"
      >
        <Link href="/kontakt" className="flex items-center gap-2">
          Gratis samtale
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  )
}
