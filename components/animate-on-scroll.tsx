"use client"

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  animation?: "fade-in-up" | "fade-in" | "slide-in-left"
  className?: string
  delay?: number
  stagger?: boolean
}

export function AnimateOnScroll({
  children,
  animation = "fade-in-up",
  className,
  delay = 0,
  stagger = false,
}: Props) {
  const { ref, isVisible } = useAnimateOnScroll()

  const animationClass = {
    "fade-in-up": "animate-fade-in-up",
    "fade-in": "animate-fade-in",
    "slide-in-left": "animate-slide-in-left",
  }[animation]

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && animationClass,
        stagger && isVisible && "stagger-children",
        className
      )}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
