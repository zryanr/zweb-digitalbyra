import Link from "next/link"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import type { BlogArticle } from "@/lib/blog"

export function BlogArticleCard({ article }: { article: BlogArticle }) {
  const formattedDate = new Date(article.date).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block bg-card rounded-xl border border-border p-6 hover:border-accent/30 hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
    >
      {/* Category badge */}
      <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-4">
        {article.category}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
        {article.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
        {article.description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          {formattedDate}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          {article.readingTime} lesetid
        </span>
      </div>

      {/* Read more */}
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
        Les artikkelen
        <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  )
}
