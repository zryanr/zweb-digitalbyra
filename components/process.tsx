const steps = [
  {
    number: "01",
    title: "Gratis samtale",
    description:
      "Vi starter med en uforpliktende samtale for å forstå dine behov, mål og ønsker for nettsiden.",
  },
  {
    number: "02",
    title: "Design og utvikling",
    description:
      "Vårt team designer og utvikler din nettside med fokus på brukeropplevelse, hastighet og SEO.",
  },
  {
    number: "03",
    title: "Gjennomgang",
    description:
      "Du får se nettsiden og kan gi tilbakemeldinger. Vi gjør justeringer til du er 100% fornøyd.",
  },
  {
    number: "04",
    title: "Lansering",
    description:
      "Nettsiden lanseres og blir synlig for verden. Vi sørger for en smidig overgang.",
  },
]

export function Process() {
  return (
    <section id="prosess" className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
            Vår prosess
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Fra idé til ferdig nettside
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            En enkel og oversiktlig prosess som sikrer at du får akkurat det du ønsker.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10">
                {/* Step number */}
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
