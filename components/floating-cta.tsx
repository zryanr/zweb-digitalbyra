"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, MessageSquare, X } from "lucide-react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      {isExpanded ? (
        <div className="bg-card rounded-2xl shadow-2xl border border-border p-4 space-y-3 animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Ta kontakt</span>
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="p-1 hover:bg-secondary rounded"
              aria-label="Lukk"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
          
          <a
            href="tel:+4794112356"
            className="flex items-center gap-3 p-3 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
          >
            <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Ring oss</p>
              <p className="text-xs text-muted-foreground">94 11 23 56</p>
            </div>
          </a>
          
          <Link
            href="/kontakt"
            onClick={() => setIsExpanded(false)}
            className="flex items-center gap-3 p-3 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-colors"
          >
            <div className="w-10 h-10 bg-accent-foreground/20 rounded-full flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Gratis samtale</p>
              <p className="text-xs text-accent-foreground/70">Uforpliktende</p>
            </div>
          </Link>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className="w-14 h-14 bg-accent text-accent-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-accent/90 transition-colors animate-in slide-in-from-bottom-2 duration-200"
          aria-label="Kontakt oss"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
