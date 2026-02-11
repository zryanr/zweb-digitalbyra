import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

type Breadcrumb = {
  label: string
  href?: string
}

type MarketingLayoutProps = {
  breadcrumbs: Breadcrumb[]
  eyebrow?: string
  title: string
  description: string
  children: ReactNode
  ctaTitle?: string
  ctaDescription?: string
  ctaPrimaryHref?: string
  ctaPrimaryLabel?: string
  ctaSecondaryHref?: string
  ctaSecondaryLabel?: string
}

export function MarketingLayout({
  breadcrumbs,
  eyebrow,
  title,
  description,
  children,
  ctaTitle = "Klar for neste steg?",
  ctaDescription = "Book en uforpliktende samtale, så finner vi riktig løsning for din bedrift.",
  ctaPrimaryHref = "/kontakt",
  ctaPrimaryLabel = "Book gratis samtale",
  ctaSecondaryHref = "/priser",
  ctaSecondaryLabel = "Se priser",
}: MarketingLayoutProps) {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted-foreground mb-8">
            {breadcrumbs.map((crumb, index) => (
              <span key={`${crumb.label}-${index}`}>
                {index > 0 ? <span className="mx-2">/</span> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-accent transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          <header className="max-w-3xl mb-12">
            {eyebrow ? (
              <p className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </header>

          <div className="space-y-12">{children}</div>

          <section className="mt-16 rounded-2xl border border-border bg-secondary/30 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-3 text-balance">
              {ctaTitle}
            </h2>
            <p className="text-muted-foreground mb-6">{ctaDescription}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={ctaPrimaryHref} className="inline-flex items-center gap-2">
                  {ctaPrimaryLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={ctaSecondaryHref}>{ctaSecondaryLabel}</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
