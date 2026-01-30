import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">ZWEB</span>
              <span className="text-sm ml-2 text-background/60">Digitalbyrå</span>
            </Link>
            <p className="text-background/70 leading-relaxed max-w-sm mb-4">
              Vi skaper profesjonelle nettsider for norske bedrifter. 
              Moderne design, rask levering og konkurransedyktige priser.
            </p>
            <p className="text-sm text-background/50">
              Org.nr: 924 592 575
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Snarveier</h4>
            <ul className="space-y-2">
              {[
                { href: "#tjenester", label: "Tjenester" },
                { href: "#priser", label: "Priser" },
                { href: "#prosess", label: "Prosess" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="tel:+4794112356" className="hover:text-background transition-colors">
                  94 11 23 56
                </a>
              </li>
              <li>
                <a href="mailto:hei@zweb.no" className="hover:text-background transition-colors">
                  hei@zweb.no
                </a>
              </li>
              <li>Norge</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} ZWEB Digitalbyrå. Alle rettigheter reservert.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link href="/personvern" className="hover:text-background transition-colors">
              Personvern
            </Link>
            <Link href="/vilkar" className="hover:text-background transition-colors">
              Vilkår
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
