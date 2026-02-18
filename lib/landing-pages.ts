export type LandingPageSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type LandingPageFaq = {
  question: string
  answer: string
}

export type LandingPage = {
  path: string
  updatedDate: string
  title: string
  description: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  eyebrow?: string
  breadcrumbs: Array<{ label: string; href?: string }>
  sections: LandingPageSection[]
  faqs?: LandingPageFaq[]
  ctaTitle?: string
  ctaDescription?: string
  ctaPrimaryHref?: string
  ctaPrimaryLabel?: string
  ctaSecondaryHref?: string
  ctaSecondaryLabel?: string
  schemaType?: "Service" | "WebPage"
  serviceName?: string
  servicePriceFrom?: string
}

type RawLandingPage = Omit<LandingPage, "updatedDate"> & { updatedDate?: string }

const DEFAULT_PAGE_UPDATED_DATE = "2026-02-11"

function isCommercialPath(path: string): boolean {
  if (path === "/personvern" || path === "/vilkar") return false
  if (path.startsWith("/guider/")) return false
  return true
}

function createDefaultFaqs(page: RawLandingPage): LandingPageFaq[] {
  const serviceName = page.serviceName || page.title

  return [
    {
      question: `Hva er inkludert i ${serviceName.toLowerCase()}?`,
      answer:
        "Leveransen inkluderer strategi, design, teknisk oppsett og publisering. Eksakt omfang avhenger av pakken du velger.",
    },
    {
      question: "Hvor raskt kan vi starte prosjektet?",
      answer:
        "De fleste prosjekter kan starte innen få arbeidsdager etter avklart omfang og oppstartsmøte.",
    },
    {
      question: "Kan dere hjelpe med SEO og innhold samtidig?",
      answer:
        "Ja. Vi bygger inn teknisk SEO og hjelper med innhold som støtter både synlighet og konvertering.",
    },
  ]
}

const rawLandingPages: RawLandingPage[] = [
  {
    path: "/nettside-for-bedrift",
    title: "Nettside for bedrift som skaffer henvendelser",
    description:
      "Vi bygger raske, moderne og SEO-klare nettsider for små og mellomstore bedrifter i Norge.",
    metaTitle: "Nettside for bedrift i Norge | ZWEB Digitalbyrå",
    metaDescription:
      "Få en profesjonell nettside for bedrift med tydelig budskap, høy ytelse og fokus på flere henvendelser.",
    keywords: [
      "nettside for bedrift",
      "hjemmeside bedrift",
      "lage nettside firma",
      "nettside småbedrift",
    ],
    eyebrow: "Hovedtjeneste",
    breadcrumbs: [
      { label: "Hjem", href: "/" },
      { label: "Nettside for bedrift" },
    ],
    sections: [
      {
        heading: "Bygget for salg, ikke bare utseende",
        paragraphs: [
          "En profesjonell nettside må gjøre mer enn å se bra ut. Den må hjelpe potensielle kunder å forstå hva du tilbyr, hvorfor de skal velge deg, og hvordan de tar kontakt.",
          "Vi bygger nettsider med tydelig struktur, sterke handlingsknapper og innhold som svarer på spørsmål kundene faktisk har før de kjøper.",
        ],
      },
      {
        heading: "Dette får du",
        paragraphs: [
          "Leveransen inkluderer strategi, design, teknisk oppsett, SEO-grunnmur og publisering. Vi tilpasser innholdet til bedriften din og markedet du opererer i.",
        ],
        bullets: [
          "Tydelig sidearkitektur for tjenester og konvertering",
          "Mobilvennlig design og rask lastetid",
          "Metadata, schema og internlenking på plass",
          "Kontaktflyt som er enkel å bruke på mobil og datamaskin",
        ],
      },
      {
        heading: "Passer for små og mellomstore bedrifter",
        paragraphs: [
          "Løsningen passer bedrifter som vil ha en nettside som faktisk bidrar til vekst. Du får en løsning som er enkel å videreutvikle med nye sider, case og innhold etter lansering.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hvor lang tid tar det å få en ny nettside?",
        answer:
          "De fleste prosjekter leveres på 2–6 uker avhengig av omfang og hvor raskt innhold blir godkjent.",
      },
      {
        question: "Kan dere hjelpe med tekst og struktur?",
        answer:
          "Ja. Vi hjelper med budskap, sideoppsett og tekst som støtter både SEO og konvertering.",
      },
      {
        question: "Er SEO inkludert?",
        answer:
          "Ja, teknisk SEO og grunnleggende innholdsoptimalisering er en del av leveransen.",
      },
    ],
    schemaType: "Service",
    serviceName: "Nettside for bedrift",
    servicePriceFrom: "999",
  },
  {
    path: "/webdesign-byra",
    title: "Webdesignbyrå som leverer målbare resultater",
    description:
      "Få et webdesignbyrå som kombinerer strategi, design og SEO for å skape flere henvendelser.",
    metaTitle: "Webdesignbyrå for SMB i Norge | ZWEB",
    metaDescription:
      "Vi er et webdesignbyrå for bedrifter som vil ha en nettside med tydelig budskap, høy tillit og flere henvendelser.",
    keywords: ["webdesign byrå", "webbyrå norge", "digitalbyrå nettsider"],
    eyebrow: "Byråtjenester",
    breadcrumbs: [
      { label: "Hjem", href: "/" },
      { label: "Webdesign byrå" },
    ],
    sections: [
      {
        heading: "Hvorfor velge byrå fremfor enkel mal",
        paragraphs: [
          "Et godt byrå gjør mer enn design. Vi hjelper med mål, prioritering, innhold og måling slik at nettsiden fungerer som en reell salgs- og tillitskanal.",
          "Du får en løsning som bygger merkevare og konvertering samtidig.",
        ],
      },
      {
        heading: "Arbeidsmodell",
        paragraphs: [
          "Prosjektet deles i klare faser med faste leveranser. Du får full innsikt i fremdrift, valg og prioriteringer.",
        ],
        bullets: [
          "Kickoff med mål, målgruppe og konkurransebilde",
          "Design og struktur med fokus på brukerflyt",
          "Utvikling, kvalitetssikring og SEO-kontroll før lansering",
          "Oppfølging etter lansering med forbedringsplan",
        ],
      },
      {
        heading: "Resultatfokus",
        paragraphs: [
          "Vi jobber mot konkrete KPI-er: henvendelser, konverteringsrate og synlighet i søk. Dette gir bedre beslutninger enn å kun måle sidevisninger.",
        ],
      },
    ],
    schemaType: "Service",
    serviceName: "Webdesign byrå",
    servicePriceFrom: "6999",
  },
  {
    path: "/wordpress-nettside",
    title: "WordPress nettside med full kontroll og fleksibilitet",
    description:
      "Vi bygger WordPress-nettsider for bedrifter som trenger skalerbarhet, eierskap og SEO-klar struktur.",
    metaTitle: "WordPress nettside for bedrifter | ZWEB",
    metaDescription:
      "Få en WordPress nettside med moderne design, høy ytelse og struktur for vekst.",
    keywords: ["wordpress nettside", "wordpress byrå norge", "wordpress bedrift"],
    eyebrow: "Plattform",
    breadcrumbs: [
      { label: "Hjem", href: "/" },
      { label: "WordPress nettside" },
    ],
    sections: [
      {
        heading: "Når WordPress er riktig valg",
        paragraphs: [
          "WordPress passer godt når du ønsker fleksibilitet, mange integrasjoner og en løsning som kan vokse med bedriften over tid.",
          "Med riktig oppsett får du både høy ytelse og enkel publisering for teamet ditt.",
        ],
      },
      {
        heading: "Hva vi leverer i WordPress-prosjekter",
        paragraphs: [
          "Vi bygger en ren, vedlikeholdbar løsning uten unødvendig teknisk gjeld.",
        ],
        bullets: [
          "Skreddersydd design og blokker tilpasset merkevaren",
          "SEO-oppsett med metadata, schema og internlenker",
          "Sikkerhet, backup og oppdateringsrutiner",
          "Opplæring for redaktører i bedriften",
        ],
      },
      {
        heading: "Drift etter lansering",
        paragraphs: [
          "Vi tilbyr løpende vedlikehold så nettsiden holder seg rask, sikker og oppdatert gjennom hele året.",
        ],
      },
    ],
    schemaType: "Service",
    serviceName: "WordPress nettside",
    servicePriceFrom: "999",
  },
  {
    path: "/webflow-nettside",
    title: "Webflow nettside for rask vekst",
    description:
      "Webflow-løsninger for bedrifter som vil ha moderne design, høy hastighet og enkel redigering.",
    metaTitle: "Webflow nettside for bedrifter | ZWEB",
    metaDescription:
      "Vi bygger Webflow-nettsider som kombinerer designfrihet, rask ytelse og strukturert SEO.",
    keywords: ["webflow byrå norge", "webflow nettside", "webflow bedrift"],
    eyebrow: "Plattform",
    breadcrumbs: [
      { label: "Hjem", href: "/" },
      { label: "Webflow nettside" },
    ],
    sections: [
      {
        heading: "Rask produksjon med tydelig visuell profil",
        paragraphs: [
          "Webflow er et godt valg når du trenger rask time-to-market og en nettside som markedsavdelingen kan jobbe aktivt med.",
          "Vi bygger strukturert slik at siden kan skaleres med nye sider og kampanjer.",
        ],
      },
      {
        heading: "Leveranse",
        paragraphs: ["Du får en ferdig produksjonsklar løsning med tydelig redigeringsstruktur."],
        bullets: [
          "Designsystem og komponenter i Webflow",
          "SEO-oppsett med metadata og teknisk hygiene",
          "CMS-struktur for artikler og caser",
          "Konverteringsfokusert sidearkitektur",
        ],
      },
      {
        heading: "For hvem?",
        paragraphs: [
          "Passer spesielt for SMB som prioriterer fart, enkel innholdsdrift og et moderne visuelt uttrykk.",
        ],
      },
    ],
    schemaType: "Service",
    serviceName: "Webflow nettside",
    servicePriceFrom: "999",
  },
  {
    path: "/nettbutikk",
    title: "Nettbutikk som faktisk selger",
    description:
      "Vi bygger nettbutikker med fokus på konvertering, tydelig produktstruktur og stabil drift.",
    metaTitle: "Nettbutikk byrå i Norge | Shopify og WooCommerce",
    metaDescription:
      "Få nettbutikk med fokus på salg, konvertering og skalerbar drift. Vi bygger løsninger i Shopify og WooCommerce.",
    keywords: ["nettbutikk byrå", "shopify byrå norge", "woocommerce nettbutikk"],
    eyebrow: "E-handel",
    breadcrumbs: [
      { label: "Hjem", href: "/" },
      { label: "Nettbutikk" },
    ],
    sections: [
      {
        heading: "Fra produktvisning til kjøp",
        paragraphs: [
          "En nettbutikk må gjøre mer enn å vise produkter. Den må gjøre kjøpsprosessen enkel, trygg og friksjonsfri for kunden.",
        ],
      },
      {
        heading: "Hva vi prioriterer først",
        paragraphs: ["Vi starter med de grepene som påvirker omsetning direkte."],
        bullets: [
          "Tydelig kategoristruktur og filtrering",
          "Produktmaler med tillitsskapende elementer",
          "Rask kjøpsflyt og mobiloptimalisering",
          "SEO for kategori- og produktsider",
        ],
      },
      {
        heading: "Skalerbar drift",
        paragraphs: [
          "Vi setter opp en løsning som tåler vekst med kampanjer, nye produkter og løpende optimalisering.",
        ],
      },
    ],
    schemaType: "Service",
    serviceName: "Nettbutikk",
    servicePriceFrom: "2999",
  },
  {
    path: "/seo-for-nettsider",
    title: "SEO for nettsider fra plan til lansering",
    description:
      "Vi bygger synlighet fra dag én med teknisk SEO, innholdsstruktur og internlenking som støtter salgsmål.",
    metaTitle: "SEO for nettsider og små bedrifter | ZWEB",
    metaDescription:
      "Teknisk SEO, sidearkitektur og innholdsstrategi for bedrifter som vil rangere og konvertere bedre.",
    keywords: ["seo for nettsider", "seo små bedrifter", "teknisk seo"],
    eyebrow: "Synlighet",
    breadcrumbs: [
      { label: "Hjem", href: "/" },
      { label: "SEO for nettsider" },
    ],
    sections: [
      {
        heading: "SEO som en del av leveransen, ikke tillegg",
        paragraphs: [
          "Vi bygger SEO inn i struktur, metadata og innhold fra start. Det gir raskere effekt og færre kostbare endringer etter lansering.",
        ],
      },
      {
        heading: "SEO-grunnmur vi implementerer",
        paragraphs: ["Dette settes opp på alle prosjekter."],
        bullets: [
          "Riktig sidehierarki og URL-struktur",
          "Tittel, meta description, canonical og schema",
          "Internlenking mellom pilar-, støtte- og konverteringssider",
          "Sitemap, robots og teknisk kvalitetssikring",
        ],
      },
      {
        heading: "Videre SEO-arbeid",
        paragraphs: [
          "Etter lansering følger vi opp med innholdsplan, forbedringer av eksisterende sider og løpende måling av resultater.",
        ],
      },
    ],
    schemaType: "Service",
    serviceName: "SEO for nettsider",
    servicePriceFrom: "999",
  },
  {
    path: "/drift-og-vedlikehold",
    title: "Drift og vedlikehold av nettside uten teknisk stress",
    description:
      "Fast driftspakke for bedrifter som vil ha oppdatert, sikker og rask nettside hele året.",
    metaTitle: "Drift og vedlikehold av nettside | ZWEB",
    metaDescription:
      "Hosting, oppdateringer, backup, sikkerhet og support i én vedlikeholdspakke for bedrifter.",
    keywords: ["drift nettside", "vedlikehold wordpress", "support nettside"],
    eyebrow: "Etter lansering",
    breadcrumbs: [
      { label: "Hjem", href: "/" },
      { label: "Drift og vedlikehold" },
    ],
    sections: [
      {
        heading: "Nettsiden må vedlikeholdes for å levere over tid",
        paragraphs: [
          "Etter lansering trenger nettsiden oppdateringer, sikkerhet og teknisk oppfølging for å holde kvaliteten oppe.",
        ],
      },
      {
        heading: "Hva som inngår i driftspakken",
        paragraphs: ["Vi tar ansvar for den tekniske helsen på nettsiden din."],
        bullets: [
          "Løpende oppdateringer og sikkerhetspatching",
          "Backup og gjenoppretting",
          "Ytelseskontroll og feilovervåking",
          "Månedlig support for mindre endringer",
        ],
      },
      {
        heading: "Forutsigbar kostnad",
        paragraphs: [
          "Du får en fast månedlig pris og tydelig avgrensning av hva som er inkludert.",
        ],
      },
    ],
    schemaType: "Service",
    serviceName: "Drift og vedlikehold",
    servicePriceFrom: "999",
  },
  {
    path: "/priser",
    title: "Nettsidepriser for bedrifter",
    description:
      "Se hva som er inkludert i våre pakker, og hva som passer best for din bedrift.",
    metaTitle: "Nettsidepriser | Pakker for norske bedrifter",
    metaDescription:
      "Transparente nettsidepriser med tydelige pakker, inkluderte tjenester og rask oppstart.",
    keywords: ["nettside pris", "hva koster nettside", "webdesign pris norge"],
    eyebrow: "Priser",
    breadcrumbs: [{ label: "Hjem", href: "/" }, { label: "Priser" }],
    sections: [
      {
        heading: "To enkle prismodeller",
        paragraphs: [
          "Velg mellom engangskjøp eller abonnement med drift og oppfølging inkludert. Begge modellene er laget for små og mellomstore bedrifter.",
        ],
        bullets: [
          "Engangskjøp fra 6 999 kr",
          "Alt inkludert fra 999 kr/mnd",
          "Ingen skjulte kostnader",
          "Rask leveranse og tydelig omfang",
        ],
      },
      {
        heading: "Hvilken pakke passer deg?",
        paragraphs: [
          "Engangskjøp passer deg som vil eie alt selv og håndtere drift internt. Abonnement passer deg som vil ha forutsigbar kostnad og slippe teknisk oppfølging.",
        ],
      },
      {
        heading: "Neste steg",
        paragraphs: [
          "Ta kontakt, så estimerer vi anbefalt omfang basert på målgruppe, tjenester og ønsket tid til lansering.",
        ],
      },
    ],
    ctaPrimaryHref: "/kontakt",
    ctaPrimaryLabel: "Få prisforslag",
    ctaSecondaryHref: "/case",
    ctaSecondaryLabel: "Se resultater",
    schemaType: "WebPage",
  },
  {
    path: "/kontakt",
    title: "Kontakt oss for en uforpliktende samtale",
    description:
      "Fortell oss hva du trenger, så får du konkrete råd og anbefalt neste steg.",
    metaTitle: "Kontakt ZWEB Digitalbyrå",
    metaDescription:
      "Bestill en gratis og uforpliktende samtale om ny nettside, SEO eller drift.",
    keywords: ["kontakt webbyrå", "bestill nettside", "gratis samtale webdesign"],
    breadcrumbs: [{ label: "Hjem", href: "/" }, { label: "Kontakt" }],
    sections: [
      {
        heading: "Slik jobber vi",
        paragraphs: [
          "Etter første kontakt gjennomfører vi en kort behovsavklaring. Du får anbefalt omfang, realistisk tidslinje og prisestimat.",
          "Hvis vi er en god match, setter vi opp prosjektplan og oppstartsdato.",
        ],
      },
      {
        heading: "Hva du bør forberede",
        paragraphs: ["Du trenger ikke en perfekt prosjektbeskrivelse, men disse punktene hjelper."],
        bullets: [
          "Hva siden skal oppnå",
          "Hvem målgruppen er",
          "Hvilke tjenester/produkter som er viktigst",
          "Om du ønsker WordPress, Webflow eller nettbutikk",
        ],
      },
    ],
    ctaTitle: "Send forespørsel",
    ctaDescription:
      "Bruk kontaktskjemaet under for raskest mulig respons. Vi svarer vanligvis innen 24 timer.",
    ctaPrimaryHref: "#kontakt",
    ctaPrimaryLabel: "Gå til kontaktskjema",
    ctaSecondaryHref: "/priser",
    ctaSecondaryLabel: "Se priser først",
    schemaType: "WebPage",
  },
  {
    path: "/bransjer/handverker",
    title: "Nettside for håndverkere som vil ha flere oppdrag",
    description:
      "Bransjetilpasset nettside for håndverkere med lokal SEO, tydelig kontaktflyt og høy tillit.",
    metaTitle: "Nettside for håndverkere | Få flere lokale oppdrag",
    metaDescription:
      "Vi bygger håndverker-nettsider med lokal synlighet, sterke tillitssignaler og flere henvendelser.",
    keywords: ["nettside for håndverker", "håndverker nettside", "lokal seo håndverker"],
    eyebrow: "Bransje",
    breadcrumbs: [
      { label: "Hjem", href: "/" },
      { label: "Bransjer", href: "/nettside-for-bedrift" },
      { label: "Håndverker" },
    ],
    sections: [
      {
        heading: "Flere oppdrag fra lokal søk",
        paragraphs: [
          "Håndverksbedrifter trenger synlighet i områdene de faktisk jobber i. Vi bygger sider som er laget for lokale søk og raske henvendelser.",
        ],
      },
      {
        heading: "Hva vi fokuserer på",
        paragraphs: ["Løsningen bygges for at kunde raskt skal ta kontakt."],
        bullets: [
          "Tjenestesider per fagområde",
          "Lokal SEO-struktur med tydelige områder",
          "Sterke referanser og bevisseksjoner",
          "Mobil kontaktflyt med ring- og tilbuds-CTA",
        ],
      },
    ],
    schemaType: "Service",
    serviceName: "Nettside for håndverker",
    servicePriceFrom: "999",
  },
  {
    path: "/bransjer/advokat",
    title: "Nettside for advokatfirma med tydelig tillitsprofil",
    description:
      "Vi bygger nettsider for advokater med klar tjenestestruktur, faglig tyngde og høy konvertering.",
    metaTitle: "Nettside for advokatfirma | ZWEB",
    metaDescription:
      "Profesjonell nettside for advokater med tydelige fagområder, tillitssignaler og bedre henvendelsesflyt.",
    keywords: ["nettside for advokat", "advokat nettside", "webdesign advokatfirma"],
    eyebrow: "Bransje",
    breadcrumbs: [
      { label: "Hjem", href: "/" },
      { label: "Bransjer", href: "/nettside-for-bedrift" },
      { label: "Advokat" },
    ],
    sections: [
      {
        heading: "Bygg tillit før første møte",
        paragraphs: [
          "For advokatfirmaer er troverdighet avgjørende. Vi bygger nettsider som kommuniserer kompetanse tydelig og gjør det enkelt å bestille konsultasjon.",
        ],
      },
      {
        heading: "Typisk struktur",
        paragraphs: ["Vi anbefaler en sidearkitektur som svarer på klientens viktigste spørsmål."],
        bullets: [
          "Egne sider per fagområde",
          "FAQ for juridiske førstespørsmål",
          "Profilside for team og kompetanse",
          "Lavfriksjons booking- og kontaktflyt",
        ],
      },
    ],
    schemaType: "Service",
    serviceName: "Nettside for advokatfirma",
    servicePriceFrom: "999",
  },
  {
    path: "/lokalt/oslo-webdesign",
    title: "Webdesign i Oslo for små og mellomstore bedrifter",
    description:
      "Lokal webdesign-partner for bedrifter i Oslo som vil ha bedre synlighet og flere henvendelser.",
    metaTitle: "Webdesign Oslo | Nettside for bedrifter",
    metaDescription:
      "Vi hjelper bedrifter i Oslo med nettsider som kombinerer design, SEO og konvertering.",
    keywords: ["webdesign oslo", "nettside oslo", "webbyrå oslo"],
    eyebrow: "Lokal synlighet",
    breadcrumbs: [
      { label: "Hjem", href: "/" },
      { label: "Lokalt", href: "/nettside-for-bedrift" },
      { label: "Oslo" },
    ],
    sections: [
      {
        heading: "Nettsider tilpasset konkurransen i Oslo",
        paragraphs: [
          "I Oslo er konkurransen høy i mange bransjer. Vi bygger nettsider med tydelig posisjonering og lokal SEO som gjør deg synlig der kundene søker.",
        ],
      },
      {
        heading: "Fokusområder",
        paragraphs: [],
        bullets: [
          "Lokale landingssider med tydelige tjenester",
          "Innhold rettet mot kjøpsnære søk",
          "Konverteringsoptimalisering for mobiltrafikk",
        ],
      },
    ],
    schemaType: "Service",
    serviceName: "Webdesign Oslo",
    servicePriceFrom: "999",
  },
  {
    path: "/lokalt/bergen-webdesign",
    title: "Webdesign i Bergen for bedrifter som vil vokse",
    description:
      "Vi bygger moderne nettsider for bedrifter i Bergen med fokus på synlighet og henvendelser.",
    metaTitle: "Webdesign Bergen | Nettside for bedrift",
    metaDescription:
      "Lokal webdesign i Bergen med tydelig budskap, SEO-grunnmur og konverteringsfokus.",
    keywords: ["webdesign bergen", "nettside bergen", "webbyrå bergen"],
    eyebrow: "Lokal synlighet",
    breadcrumbs: [
      { label: "Hjem", href: "/" },
      { label: "Lokalt", href: "/nettside-for-bedrift" },
      { label: "Bergen" },
    ],
    sections: [
      {
        heading: "Lokal relevans gir flere henvendelser",
        paragraphs: [
          "For mange bedrifter i Bergen er lokale søk den viktigste kilden til nye kunder. Vi bygger struktur som gjør det enklere å rangere på relevante søk i regionen.",
        ],
      },
      {
        heading: "Dette leverer vi",
        paragraphs: [],
        bullets: [
          "SEO-optimaliserte tjenestesider",
          "Rask nettside med tydelig kontaktflyt",
          "Innhold som styrker tillit hos nye kunder",
        ],
      },
    ],
    schemaType: "Service",
    serviceName: "Webdesign Bergen",
    servicePriceFrom: "999",
  },
  {
    path: "/lokalt/trondheim-webdesign",
    updatedDate: "2026-02-18",
    title: "Webdesign i Trondheim med fokus på resultater",
    description:
      "Nettsider for bedrifter i Trondheim som vil bli synlige i søk og konvertere bedre.",
    metaTitle: "Webdesign Trondheim | Nettside og SEO",
    metaDescription:
      "Vi lager nettsider for bedrifter i Trondheim med fokus på konvertering, fart og lokal SEO.",
    keywords: ["webdesign trondheim", "nettside trondheim", "webbyrå trondheim"],
    eyebrow: "Lokal synlighet",
    breadcrumbs: [
      { label: "Hjem", href: "/" },
      { label: "Lokalt", href: "/nettside-for-bedrift" },
      { label: "Trondheim" },
    ],
    sections: [
      {
        heading: "Nettside i Trondheim som skaffer lokale henvendelser",
        paragraphs: [
          "Driver du en lokal bedrift i Trondheim, må nettsiden hjelpe deg å få flere relevante henvendelser, ikke bare se bra ut.",
          "Når en kunde søker etter for eksempel rørlegger Trondheim, elektriker Trondheim eller tannlege Trondheim, må siden din raskt vise hva du tilbyr, hvorfor kunden bør velge deg, og hvordan de tar kontakt.",
        ],
      },
      {
        heading: "Dette trenger en lokal bedrift på nettsiden",
        paragraphs: [
          "De fleste besøkende bestemmer seg på få sekunder. Hvis tjenestene er uklare eller kontaktinformasjonen er vanskelig å finne, går de videre til neste aktør.",
        ],
        bullets: [
          "Tydelig oversikt over tjenester, priser og geografisk område",
          "Tjenestesider bygget rundt det kundene faktisk søker etter",
          "Synlig telefonnummer og enkel kontaktflyt på mobil",
          "Tydelige CTA-er over folden og etter nøkkelseksjoner",
          "Teknisk SEO med riktig metadata, struktur og hastighet",
          "Måling av henvendelser og løpende forbedring",
        ],
      },
      {
        heading: "Eksempel: nettside for en rørlegger i Trondheim",
        paragraphs: [
          "For en rørlegger handler nettsiden om å bli valgt raskt når behovet oppstår. Kunden vil se at du dekker riktig område, hvilke oppdrag du tar, og hvordan de får hjelp nå.",
          "Med riktig struktur kan du rangere på kjøpsnære søk og gjøre det enkelt for kunden å kontakte deg direkte fra mobil.",
        ],
        bullets: [
          "Tjenestesider som akutt rørlegger, bad og rehabilitering",
          "Lokale signaler for Trondheim og nærliggende områder",
          "Tillitsskapende elementer som referanser og tydelig prosess",
          "Kontaktknapper og CTA-er plassert der kunden faktisk tar beslutning",
        ],
      },
      {
        heading: "Nettsiden skal gjøre det enkelt å velge deg",
        paragraphs: [
          "En god lokal nettside fjerner tvil. Kunden skal raskt forstå hva du leverer, hva som skjer etter kontakt, og hvorfor du er et trygt valg.",
          "Vi bygger innhold som er skrevet for kundene dine, med klart språk og konkrete neste steg i stedet for generelle og uklare formuleringer.",
        ],
      },
      {
        heading: "Synlighet og konvertering forbedres over tid",
        paragraphs: [
          "Etter lansering følger vi med på hvilke søk som gir henvendelser og hvilke sider som skaper kontakt. Da kan vi forbedre det som faktisk gir flere kunder.",
          "Målet er at nettsiden din i Trondheim skal bli en stabil kanal for nye oppdrag, ikke en statisk brosjyre.",
        ],
      },
    ],
    faqs: [
      {
        question: "Passer dette for små lokale bedrifter i Trondheim?",
        answer:
          "Ja. Løsningen passer spesielt godt for lokale bedrifter som rørlegger, elektriker, tannlege, håndverker og andre tjenestebedrifter som vil ha flere henvendelser fra nærområdet.",
      },
      {
        question: "Må vi skrive alt innholdet selv?",
        answer:
          "Nei. Vi hjelper med struktur, tekst og innhold slik at nettsiden forklarer tjenestene tydelig for kundene dine og samtidig fungerer godt i søk.",
      },
      {
        question: "Kan dere forbedre en eksisterende nettside i stedet for å starte på nytt?",
        answer:
          "Ja. Vi starter med en vurdering av teknisk kvalitet, innhold og konvertering for å se hva som bør beholdes. Deretter prioriterer vi de grepene som gir mest effekt først.",
      },
      {
        question: "Når kan vi forvente flere henvendelser fra nettsiden?",
        answer:
          "Noen bedrifter ser tidlige forbedringer raskt, men tydelig vekst kommer vanligvis gradvis over tid. Hvor raskt det går avhenger av konkurranse, utgangspunkt og hvor godt innholdet treffer kundebehovet.",
      },
      {
        question: "Hva bør vi måle for å vite om nettsiden fungerer?",
        answer:
          "Vi følger blant annet med på kvalifiserte henvendelser, konverteringsrate, utvikling i lokale søk og hvilke sider som bidrar mest til nye kundedialoger.",
      },
    ],
    ctaTitle: "Trenger du en nettside som gir kunder i Trondheim?",
    ctaDescription:
      "Book en uforpliktende prat, så får du konkrete forslag til hva som bør være på plass for din bedrift.",
    ctaPrimaryLabel: "Få gratis gjennomgang",
    ctaSecondaryLabel: "Se priser og pakker",
    schemaType: "Service",
    serviceName: "Webdesign Trondheim",
    servicePriceFrom: "999",
  },
  {
    path: "/guider/nettside-pris",
    title: "Guide: Hva koster en nettside for bedrifter?",
    description:
      "Lær hva som påvirker nettsidepris, og hvordan du sammenligner tilbud på en smart måte.",
    metaTitle: "Nettside pris guide for bedrifter | ZWEB",
    metaDescription:
      "Praktisk guide til nettsidepris: kostnadsdrivere, sammenligning av tilbud og valg av riktig prismodell.",
    keywords: ["nettside pris guide", "hva koster nettside", "webdesign pris"],
    eyebrow: "Hovedguide",
    breadcrumbs: [
      { label: "Hjem", href: "/" },
      { label: "Guider", href: "/blog" },
      { label: "Nettside pris" },
    ],
    sections: [
      {
        heading: "Pris handler om omfang, ikke bare design",
        paragraphs: [
          "Nettsidekostnad påvirkes av innhold, funksjon, SEO og hvor mye support du trenger etter lansering.",
          "Sammenlign alltid total kostnad over 12–36 måneder før du velger modell.",
        ],
      },
      {
        heading: "Slik sammenligner du tilbud",
        paragraphs: [],
        bullets: [
          "Hva er inkludert og ekskludert?",
          "Hvem eier kode og innhold?",
          "Hva koster drift og vedlikehold?",
          "Hvordan måles resultat etter lansering?",
        ],
      },
      {
        heading: "Anbefalt neste steg",
        paragraphs: [
          "Bruk guiden som sjekkliste i møte med leverandører, og be om tydelig omfang før signering.",
        ],
      },
    ],
    ctaPrimaryHref: "/priser",
    ctaPrimaryLabel: "Sammenlign våre pakker",
    ctaSecondaryHref: "/kontakt",
    ctaSecondaryLabel: "Få rådgivning",
    schemaType: "WebPage",
  },
  {
    path: "/guider/wordpress-vs-webflow",
    title: "Guide: WordPress vs Webflow for små bedrifter",
    description:
      "Praktisk sammenligning av WordPress og Webflow med fokus på pris, drift, SEO og fleksibilitet.",
    metaTitle: "WordPress vs Webflow guide | ZWEB",
    metaDescription:
      "Lær forskjellen mellom WordPress og Webflow, og velg riktig plattform for bedriften din.",
    keywords: ["wordpress vs webflow", "webflow eller wordpress", "plattformsammenligning"],
    eyebrow: "Hovedguide",
    breadcrumbs: [
      { label: "Hjem", href: "/" },
      { label: "Guider", href: "/blog" },
      { label: "WordPress vs Webflow" },
    ],
    sections: [
      {
        heading: "Start med behov, ikke preferanse",
        paragraphs: [
          "Plattformvalg bør styres av mål, redigeringsbehov og fremtidig utvikling, ikke hva som er mest populært akkurat nå.",
        ],
      },
      {
        heading: "Rask beslutningsmodell",
        paragraphs: [],
        bullets: [
          "Velg WordPress ved høy fleksibilitet og mange integrasjoner",
          "Velg Webflow ved behov for rask markedsproduksjon",
          "Vurder total kostnad over 24–36 måneder",
          "Sikre at SEO-grunnmur er inkludert uansett plattform",
        ],
      },
      {
        heading: "Få konkret anbefaling",
        paragraphs: [
          "Vi hjelper deg velge plattform basert på forretningsmål, ikke teknisk synsing.",
        ],
      },
    ],
    ctaPrimaryHref: "/kontakt",
    ctaPrimaryLabel: "Få plattformanbefaling",
    ctaSecondaryHref: "/wordpress-nettside",
    ctaSecondaryLabel: "Se WordPress-tjeneste",
    schemaType: "WebPage",
  },
  {
    path: "/guider/seo-for-lansering",
    title: "Guide: SEO-sjekkliste før lansering av nettside",
    description:
      "Steg-for-steg sjekkliste for teknisk SEO, innhold og måling før du publiserer ny nettside.",
    metaTitle: "SEO sjekkliste før lansering | ZWEB",
    metaDescription:
      "Bruk denne sjekklisten for å sikre at ny nettside er teknisk og innholdsmessig klar for synlighet i Google.",
    keywords: ["seo sjekkliste", "seo før lansering", "teknisk seo nettside"],
    eyebrow: "Hovedguide",
    breadcrumbs: [
      { label: "Hjem", href: "/" },
      { label: "Guider", href: "/blog" },
      { label: "SEO før lansering" },
    ],
    sections: [
      {
        heading: "Unngå dyre SEO-feil ved lansering",
        paragraphs: [
          "Med riktig sjekk før lansering sparer du tid, penger og tapt synlighet etter publisering.",
        ],
      },
      {
        heading: "Pre-launch kontrollpunkter",
        paragraphs: [],
        bullets: [
          "Canonical og metadata per side",
          "Robots, sitemap og statuskoder",
          "Internlenker mellom pilar- og konverteringssider",
          "Schema for tjenestesider, FAQ og brødsmuler",
        ],
      },
      {
        heading: "Etter lansering",
        paragraphs: [
          "Planlegg de første 90 dagene med måling, innholdsforbedringer og tekniske justeringer.",
        ],
      },
    ],
    ctaPrimaryHref: "/seo-for-nettsider",
    ctaPrimaryLabel: "Se SEO-tjenesten",
    ctaSecondaryHref: "/kontakt",
    ctaSecondaryLabel: "Bestill gjennomgang",
    schemaType: "WebPage",
  },
  {
    path: "/personvern",
    title: "Personvernerklæring",
    description: "Informasjon om hvordan vi behandler personopplysninger.",
    metaTitle: "Personvernerklæring | ZWEB",
    metaDescription:
      "Les hvordan ZWEB Digitalbyrå samler inn, bruker og lagrer personopplysninger.",
    keywords: ["personvern", "personvernerklæring", "gdpr"],
    breadcrumbs: [{ label: "Hjem", href: "/" }, { label: "Personvern" }],
    sections: [
      {
        heading: "Behandlingsansvarlig",
        paragraphs: [
          "ZWEB Digitalbyrå er behandlingsansvarlig for personopplysninger som samles inn via nettsiden.",
          "Kontakt: hei@zweb.no.",
        ],
      },
      {
        heading: "Hvilke opplysninger vi samler inn",
        paragraphs: [
          "Når du bruker kontaktskjema, kan vi samle inn navn, e-post, telefonnummer, bedriftsnavn og meldingsinnhold.",
          "Opplysningene brukes kun til å besvare henvendelsen din og følge opp forespurt dialog.",
        ],
      },
      {
        heading: "Dine rettigheter",
        paragraphs: [
          "Du har rett til innsyn, retting og sletting av personopplysninger vi har lagret om deg.",
          "Kontakt oss på e-post dersom du ønsker å utøve disse rettighetene.",
        ],
      },
    ],
    ctaTitle: "Spørsmål om personvern?",
    ctaDescription: "Ta kontakt hvis du ønsker mer informasjon om vår databehandling.",
    ctaPrimaryHref: "/kontakt",
    ctaPrimaryLabel: "Kontakt oss",
    ctaSecondaryHref: "/",
    ctaSecondaryLabel: "Til forsiden",
    schemaType: "WebPage",
  },
  {
    path: "/vilkar",
    title: "Vilkår og betingelser",
    description: "Generelle vilkår for bruk av nettstedet og kjøp av tjenester fra ZWEB Digitalbyrå.",
    metaTitle: "Vilkår og betingelser | ZWEB Digitalbyrå",
    metaDescription:
      "Les våre vilkår og betingelser: avtaleinngåelse, leveranse, betaling, ansvar, rettigheter og tvisteløsning.",
    keywords: ["vilkår", "bruksvilkår", "betingelser"],
    breadcrumbs: [{ label: "Hjem", href: "/" }, { label: "Vilkår" }],
    sections: [
      {
        heading: "1. Om vilkårene",
        paragraphs: [
          "Disse vilkårene gjelder for bruk av nettstedet og for kjøp av tjenester fra ZWEB Digitalbyrå, med mindre annet er avtalt skriftlig.",
          "Dersom det er motstrid mellom disse vilkårene og en signert avtale, gjelder den signerte avtalen foran.",
        ],
      },
      {
        heading: "2. Definisjoner",
        paragraphs: [
          "I denne malen betyr «leverandør» ZWEB Digitalbyrå, «kunde» den juridiske eller fysiske personen som bestiller tjenester, og «leveranse» det som er spesifisert i tilbud eller avtale.",
        ],
        bullets: [
          "«Partene»: kunden og leverandøren samlet",
          "«Arbeidsdager»: mandag til fredag, unntatt helligdager",
          "«Endringsbestilling»: skriftlig bestilling av arbeid utenfor avtalt omfang",
        ],
      },
      {
        heading: "3. Tilbud, avtaleinngåelse og levering",
        paragraphs: [
          "Tilbud fra leverandøren er gyldig i den perioden som fremgår av tilbudet. Avtale anses inngått når kunden har akseptert tilbudet skriftlig.",
          "Leveringstid er estimat med mindre annet er avtalt. Leverandøren er ikke ansvarlig for forsinkelser som skyldes manglende leveranser, godkjenninger eller medvirkning fra kunden.",
        ],
      },
      {
        heading: "4. Pris, fakturering og betaling",
        paragraphs: [
          "Pris og betalingsbetingelser fremgår av tilbud eller avtale. Alle priser oppgis normalt ekskl. mva., med mindre annet er opplyst.",
          "Ved forsinket betaling kan leverandøren kreve forsinkelsesrente og gebyr etter gjeldende lovgivning.",
        ],
      },
      {
        heading: "5. Kundens ansvar",
        paragraphs: [
          "Kunden skal levere nødvendig innhold, tilgang og beslutninger innen avtalte frister. Kunden er ansvarlig for at innsendt innhold ikke krenker tredjeparts rettigheter.",
        ],
        bullets: [
          "Kunden er ansvarlig for korrekthet i tekst, bilder og annet materiale",
          "Kunden skal gi tilbakemelding innen avtalte frister",
          "Forsinkelser fra kundens side kan medføre justert leveringstid og merkostnader",
        ],
      },
      {
        heading: "6. Immaterielle rettigheter",
        paragraphs: [
          "Rettigheter til ferdig leveranse overføres til kunden når fullt oppgjør er mottatt, med mindre annet følger av avtalen.",
          "Leverandøren beholder eierskap til egne metoder, maler, kodebiblioteker og verktøy som er brukt i leveransen.",
        ],
      },
      {
        heading: "7. Personvern og databehandlerforhold",
        paragraphs: [
          "Partene skal behandle personopplysninger i tråd med gjeldende personvernlovgivning. Dersom leverandøren behandler personopplysninger på vegne av kunden, skal det inngås databehandleravtale ved behov.",
          "Se egen side for mer informasjon om personvern: /personvern.",
        ],
      },
      {
        heading: "8. Ansvarsbegrensning",
        paragraphs: [
          "Leverandøren er ikke ansvarlig for indirekte tap, herunder tapt fortjeneste, tapte data eller avbrudd i virksomhet, med mindre annet følger av ufravikelig lov.",
          "Samlet ansvar er begrenset til det beløpet kunden har betalt for den aktuelle leveransen de siste 12 månedene, med mindre annet er avtalt skriftlig.",
        ],
      },
      {
        heading: "9. Oppsigelse, endringer og force majeure",
        paragraphs: [
          "Løpende avtaler kan sies opp i henhold til oppsigelsestid angitt i avtalen. Endringer i avtalt omfang skal avtales skriftlig før arbeidet utføres.",
          "Partene er ikke ansvarlige for manglende oppfyllelse som skyldes forhold utenfor rimelig kontroll (force majeure).",
        ],
      },
      {
        heading: "10. Lovvalg og tvisteløsning",
        paragraphs: [
          "Avtaleforholdet reguleres av norsk rett. Tvister skal søkes løst i minnelighet. Dersom dette ikke lykkes, kan tvisten bringes inn for ordinære domstoler med verneting i Norge.",
          "Denne siden er en generell mal. Endelige vilkår fastsettes i skriftlig avtale mellom partene.",
        ],
      },
    ],
    ctaTitle: "Trenger du avklaringer?",
    ctaDescription: "Ta kontakt dersom du ønsker et konkret avtaleutkast tilpasset leveransen din.",
    ctaPrimaryHref: "/kontakt",
    ctaPrimaryLabel: "Kontakt oss",
    ctaSecondaryHref: "/",
    ctaSecondaryLabel: "Til forsiden",
    schemaType: "WebPage",
  },
]

export const landingPages: LandingPage[] = rawLandingPages.map((page) => ({
  ...page,
  updatedDate: page.updatedDate || DEFAULT_PAGE_UPDATED_DATE,
  faqs:
    page.faqs && page.faqs.length >= 3
      ? page.faqs
      : isCommercialPath(page.path)
        ? createDefaultFaqs(page)
        : page.faqs,
}))

export function getLandingPageByPath(path: string): LandingPage | undefined {
  return landingPages.find((page) => page.path === path)
}
