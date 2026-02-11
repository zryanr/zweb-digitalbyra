export type PageFaqItem = {
  question: string
  answer: string
}

export function PageFaq({ items }: { items: PageFaqItem[] }) {
  if (!items.length) return null

  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-6">Vanlige spørsmål</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-border bg-card p-5"
          >
            <summary className="cursor-pointer list-none text-foreground font-medium">
              {item.question}
            </summary>
            <p className="mt-3 text-muted-foreground leading-relaxed">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
