import { Users, Clock, Award, ShieldCheck } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "100+",
    label: "Fornøyde kunder",
  },
  {
    icon: Clock,
    value: "1-2 uker",
    label: "Gjennomsnittlig levering",
  },
  {
    icon: Award,
    value: "5/5",
    label: "Kundetilfredshet",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Norsk selskap",
  },
]

export function TrustIndicators() {
  return (
    <section className="py-12 border-y border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
