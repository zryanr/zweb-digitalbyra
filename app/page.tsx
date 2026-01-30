import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustIndicators } from "@/components/trust-indicators"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { CTABanner } from "@/components/cta-banner"
import { ContactForm } from "@/components/contact-form"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <Services />
        <Pricing />
        <Process />
        <Testimonials />
        <CTABanner />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
