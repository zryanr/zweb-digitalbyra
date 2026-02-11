export type CaseStudy = {
  slug: string
  company: string
  industry: string
  location: string
  publishedDate: string
  updatedDate: string
  title: string
  summary: string
  challenge: string
  approach: string[]
  results: string[]
  timeline: string
  platform: "WordPress" | "Webflow" | "Shopify"
  sources: Array<{
    title: string
    url: string
  }>
}

export const cases: CaseStudy[] = [
  {
    slug: "byggpartner-oslo",
    company: "Byggpartner Oslo",
    industry: "Håndverker",
    location: "Oslo",
    publishedDate: "2026-01-18",
    updatedDate: "2026-02-11",
    title: "Ny nettside ga 2,3x flere kvalifiserte henvendelser",
    summary:
      "Byggpartner Oslo trengte en modernisering av nettsiden for å vinne flere oppdrag i Oslo-området.",
    challenge:
      "Eksisterende nettside var treg, utdatert og rangert svakt for lokale søk som 'tømrer Oslo'.",
    approach: [
      "Bygget ny sidearkitektur med egne tjenestesider for tømrer, rehabilitering og tilbygg.",
      "Optimaliserte innhold for lokale søk i Oslo bydelene der de faktisk leverer.",
      "Laget tydeligere kontaktflyt med mobil sticky CTA og raskt tilbudsskjema.",
    ],
    results: [
      "2,3x flere kvalifiserte henvendelser innen 90 dager.",
      "Økning fra 4 til 12 topp-10 rangeringer for lokale søk.",
      "40% høyere konverteringsrate på mobiltrafikk.",
    ],
    timeline: "4 uker",
    platform: "WordPress",
    sources: [
      {
        title: "Google Search Central: Local SEO fundamentals",
        url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      },
      {
        title: "web.dev: Core Web Vitals",
        url: "https://web.dev/articles/vitals",
      },
    ],
  },
  {
    slug: "nordic-advokatkontor",
    company: "Nordic Advokatkontor",
    industry: "Advokat",
    location: "Bergen",
    publishedDate: "2026-01-24",
    updatedDate: "2026-02-11",
    title: "Ny tillitsprofil løftet antall konsultasjonsbookinger",
    summary:
      "Advokatkontoret ønsket en mer profesjonell nettside med tydeligere fagområder og bedre lead-flyt.",
    challenge:
      "Kunder forsto ikke forskjellen mellom tjenestene, og få tok kontakt via nettsiden.",
    approach: [
      "Utviklet ny struktur med dedikerte sider for familierett, arbeidsrett og kontraktsrett.",
      "Implementerte FAQ-seksjoner med juridiske spørsmål potensielle klienter stiller tidlig.",
      "Bygget case- og kompetansebevis med klare CTA-er til konsultasjon.",
    ],
    results: [
      "67% økning i bookings via kontaktskjema første 3 måneder.",
      "Topp 5 rangering på flere søk relatert til 'advokat Bergen'.",
      "28% lavere avvisningsrate på tjenestesider.",
    ],
    timeline: "5 uker",
    platform: "Webflow",
    sources: [
      {
        title: "Google Search Central Documentation",
        url: "https://developers.google.com/search/docs",
      },
      {
        title: "Schema.org: LegalService",
        url: "https://schema.org/LegalService",
      },
    ],
  },
  {
    slug: "fjordmat-nettbutikk",
    company: "Fjordmat AS",
    industry: "Nettbutikk",
    location: "Trondheim",
    publishedDate: "2026-01-30",
    updatedDate: "2026-02-11",
    title: "Nettbutikk med bedre konvertering og raskere checkout",
    summary:
      "Fjordmat trengte ny nettbutikk med høyere konvertering og mer stabil drift.",
    challenge:
      "Høy frafallsrate i checkout og svak organisk synlighet på produktkategorier.",
    approach: [
      "Lanserte ny Shopify-baserte nettbutikk med forenklet checkout-flyt.",
      "Bygget kategorisider med SEO-tekst og internlenking mellom produkter og guider.",
      "La inn tydelige trust-elementer og frakt-/returinfo nær kjøpsknapp.",
    ],
    results: [
      "22% økning i konverteringsrate etter lansering.",
      "31% høyere organisk trafikk til kategorisider på 4 måneder.",
      "18% høyere gjennomsnittlig ordreverdi.",
    ],
    timeline: "6 uker",
    platform: "Shopify",
    sources: [
      {
        title: "Google Search Central: Ecommerce SEO guidance",
        url: "https://developers.google.com/search/docs/specialty/ecommerce",
      },
      {
        title: "web.dev: Optimize Core Web Vitals",
        url: "https://web.dev/articles/optimize-vitals",
      },
    ],
  },
]

export function getAllCases(): CaseStudy[] {
  return cases
}

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((item) => item.slug === slug)
}
