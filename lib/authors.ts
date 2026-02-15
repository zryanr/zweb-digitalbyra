export type AuthorProfile = {
  slug: string
  name: string
  role: string
  bio: string
  expertise: string[]
  image?: string
  imageAlt?: string
  sameAs: string[]
  updatedDate: string
}

const authorSameAs =
  process.env.NEXT_PUBLIC_AUTHOR_SAME_AS
    ?.split(",")
    .map((item) => item.trim())
    .filter(Boolean) || []

export const authors: AuthorProfile[] = [
  {
    slug: "zryan-rzgar",
    name: "Zryan Rzgar",
    role: "Fullstack-utvikler med 7 års erfaring, sivilingeniør innen datavitenskap",
    bio: "Zryan Rzgar skriver og kvalitetssikrer innhold om webdesign, SEO, konvertering og teknisk drift for norske bedrifter. Han har 7 års erfaring som fullstack-utvikler, og er sivilingeniør innen datavitenskap.",
    expertise: [
      "Webdesign for bedrifter",
      "Teknisk SEO",
      "Fullstack utvikling",
      "Informasjonsarkitektur",
      "Konverteringsoptimalisering",
      "Drift og vedlikehold av nettsider",
    ],
    // Bytt til f.eks. /authors/zryan-rzgar.jpg når du har lastet opp portrettbilde.
    image: "/placeholder-user.jpg",
    imageAlt: "Profilbilde av Zryan Rzgar",
    sameAs: authorSameAs,
    updatedDate: "2026-02-15",
  },
]

export function getAuthorBySlug(slug: string): AuthorProfile | undefined {
  return authors.find((author) => author.slug === slug)
}
