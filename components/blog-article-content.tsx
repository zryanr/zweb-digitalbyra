import type { ArticleSection } from "@/lib/blog"

export function BlogArticleContent({
  sections,
}: {
  sections: ArticleSection[]
}) {
  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            {section.heading}
          </h2>
          <div className="space-y-4">
            {section.content.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
