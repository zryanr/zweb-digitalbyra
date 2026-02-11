export type AuthorProfile = {
  slug: string
  name: string
  role: string
  bio: string
  expertise: string[]
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
    slug: "zweb-redaksjonen",
    name: "ZWEB Redaksjonen",
    role: "Fagredaksjon for nettsider og SEO",
    bio: "Redaksjonen i ZWEB skriver og kvalitetssikrer innhold om webdesign, SEO, konvertering og drift for norske bedrifter. Innholdet bygger på praktisk prosjektarbeid og dokumenterte leveransemønstre.",
    expertise: [
      "Webdesign for SMB",
      "Teknisk SEO",
      "Informasjonsarkitektur",
      "Konverteringsoptimalisering",
      "Drift og vedlikehold av nettsider",
    ],
    sameAs: authorSameAs,
    updatedDate: "2026-02-11",
  },
]

export function getAuthorBySlug(slug: string): AuthorProfile | undefined {
  return authors.find((author) => author.slug === slug)
}
