import { Globe, Paintbrush, Search, Smartphone, Zap, HeadphonesIcon } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Nettside for bedrift",
    description: "Profesjonelle og moderne nettsider tilpasset din bedrifts behov og merkevare.",
  },
  {
    icon: Paintbrush,
    title: "Moderne design",
    description: "Skreddersydd visuelt design som reflekterer din bedrifts identitet og verdier.",
  },
  {
    icon: Search,
    title: "SEO-optimalisering",
    description: "Vi sørger for at din nettside blir funnet på Google og andre søkemotorer.",
  },
  {
    icon: Smartphone,
    title: "Mobilvennlig",
    description: "Responsivt design som fungerer perfekt på alle enheter og skjermstørrelser.",
  },
  {
    icon: Zap,
    title: "Rask ytelse",
    description: "Optimalisert kode som sikrer lynrask lasting og god brukeropplevelse.",
  },
  {
    icon: HeadphonesIcon,
    title: "Løpende support",
    description: "Dedikert kundestøtte og kontinuerlig vedlikehold av din nettside.",
  },
]

export function Services() {
  return (
    <section id="tjenester" className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
            Våre tjenester
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Alt du trenger for en profesjonell nettside
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Vi leverer komplette nettsideløsninger med fokus på kvalitet, design og resultater. 
            Din bedrift fortjener det beste.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card p-6 rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
