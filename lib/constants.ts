function normalizeSiteUrl(value: string): string {
  const withProtocol =
    value.startsWith("http://") || value.startsWith("https://")
      ? value
      : `https://${value}`

  return withProtocol.replace(/\/$/, "")
}

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  "https://v0-zweb-digitalbyra-website.vercel.app"

const orgSameAs =
  process.env.NEXT_PUBLIC_ORG_SAME_AS
    ?.split(",")
    .map((item) => item.trim())
    .filter(Boolean) || []

export const SITE_URL = normalizeSiteUrl(rawSiteUrl)
export const SITE_NAME = "ZWEB Digitalbyrå"
export const SITE_DESCRIPTION =
  "Vi lager moderne, profesjonelle nettsider for norske bedrifter. Alt inkludert fra kun 999 kr/mnd. Gratis uforpliktende samtale."

export const BUSINESS_INFO = {
  name: "ZWEB Digitalbyrå",
  legalName: "ZWEB",
  orgNr: "924 592 575",
  phone: "+4794112356",
  phoneDisplay: "94 11 23 56",
  email: "hei@zweb.no",
  url: SITE_URL,
  locale: "nb_NO",
  country: "NO",
  countryName: "Norge",
  foundingDate: process.env.NEXT_PUBLIC_FOUNDING_DATE || "2020-01-01",
  sameAs: orgSameAs,
} as const
