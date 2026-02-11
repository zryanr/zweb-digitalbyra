"use client"

import { Users, Clock, Award, ShieldCheck } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useAnimateOnScroll()

  useEffect(() => {
    if (!isVisible) return
    let current = 0
    const step = Math.max(1, Math.floor(target / 30))
    const interval = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(current)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [isVisible, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  {
    icon: Users,
    value: <CountUp target={100} suffix="+" />,
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
    value: <CountUp target={100} suffix="%" />,
    label: "Norsk selskap",
  },
]

export function TrustIndicators() {
  const { ref, isVisible } = useAnimateOnScroll()

  return (
    <section
      ref={ref}
      className="py-12 border-y border-border bg-card"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid grid-cols-2 lg:grid-cols-4 gap-8",
            isVisible && "stagger-children"
          )}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
