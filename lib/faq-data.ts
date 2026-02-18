export type FAQCategory = "generelt" | "priser" | "prosess" | "teknisk" | "vedlikehold"

export type FAQItem = {
  question: string
  answer: string
  category: FAQCategory
}

export const faqCategories: { id: FAQCategory; label: string }[] = [
  { id: "generelt", label: "Generelt" },
  { id: "priser", label: "Priser og pakker" },
  { id: "prosess", label: "Prosess og levering" },
  { id: "teknisk", label: "Teknisk" },
  { id: "vedlikehold", label: "Vedlikehold og support" },
]

export const faqs: FAQItem[] = [
  // === GENERELT ===
  {
    category: "generelt",
    question: "Trenger bedriften min en nettside?",
    answer:
      "Ja, i 2026 er en nettside helt avgjørende for norske bedrifter. Over 90 % av forbrukere søker på nett før de velger en lokal tjeneste. En profesjonell nettside gir bedriften din troverdighet, synlighet på Google og fungerer som et salgsverktøy som jobber for deg 24 timer i døgnet. Uten nettside går du glipp av potensielle kunder som søker etter akkurat det du tilbyr.",
  },
  {
    category: "generelt",
    question: "Hva gjør en god nettside for bedrift?",
    answer:
      "En god bedriftsnettside har profesjonelt design, er mobilvennlig, laster raskt (under 3 sekunder), er SEO-optimalisert og har tydelige handlingsknapper. Den formidler tydelig hva bedriften tilbyr, bygger tillit gjennom kundeomtaler og referanser, og gjør det enkelt for besøkende å ta kontakt eller kjøpe tjenester.",
  },
  {
    category: "generelt",
    question: "Hvorfor velge ZWEB Digitalbyrå?",
    answer:
      "ZWEB er et 100 % norsk digitalbyrå med over 100 fornøyde kunder. Vi tilbyr konkurransedyktige priser fra 999 kr/mnd med alt inkludert, rask levering på 1-2 uker, ingen bindingstid og personlig norsk kundestøtte. Vi fokuserer på kvalitet, resultater og en prosess som er så enkel som mulig for deg.",
  },

  // === PRISER OG PAKKER ===
  {
    category: "priser",
    question: "Hva koster en nettside i Norge?",
    answer:
      "En profesjonell nettside for bedrift koster typisk mellom 6 999 kr som engangskjøp og 999 kr/mnd for en alt-inkludert-løsning. Hos ZWEB Digitalbyrå får du en komplett nettside fra 999 kr/mnd uten skjulte kostnader — inkludert hosting, domene, SSL, support og vedlikehold. Prisen avhenger av antall sider, funksjonalitet og designkompleksitet.",
  },
  {
    category: "priser",
    question: "Hva er forskjellen på engangskjøp og alt inkludert?",
    answer:
      "Med engangskjøp betaler du én gang for nettsiden, men må selv sørge for hosting, domene og vedlikehold. Med alt inkludert-pakken betaler du en fast månedspris som dekker alt: hosting, domene, SSL, support og løpende vedlikehold. De fleste velger alt inkludert fordi det er enklere og mer kostnadseffektivt over tid.",
  },
  {
    category: "priser",
    question: "Hva inkluderer prisen på 999 kr/mnd?",
    answer:
      "Alt inkludert-pakken på 999 kr/mnd dekker: profesjonelt skreddersydd design, inntil 7 sider, mobilvennlig nettside, kontaktskjema, komplett SEO-optimalisering, Google Analytics, webhotell, domene, SSL-sertifikat, løpende support og vedlikehold, månedlige oppdateringer samt backup og sikkerhet. Du slipper å tenke på det tekniske.",
  },

  // === PROSESS OG LEVERING ===
  {
    category: "prosess",
    question: "Hvor lang tid tar det å lage en nettside?",
    answer:
      "En profesjonell bedriftsnettside tar typisk 1–3 uker å ferdigstille. For alt inkludert-pakken leverer vi vanligvis innen 1–2 uker. Engangskjøp tar typisk 2–3 uker. Leveringstiden avhenger av prosjektets kompleksitet og hvor raskt du gir tilbakemelding underveis.",
  },
  {
    category: "prosess",
    question: "Hvordan er prosessen for å lage en nettside?",
    answer:
      "Prosessen starter med en gratis, uforpliktende samtale der vi kartlegger behovene og målene dine. Deretter designer og utvikler vi nettsiden. Du får se resultatet og gi tilbakemeldinger, og vi gjør justeringer til du er helt fornøyd. Til slutt lanserer vi nettsiden. Du trenger ingen teknisk kunnskap - vi tar oss av alt.",
  },
  {
    category: "prosess",
    question: "Hva skjer hvis jeg vil avslutte abonnementet?",
    answer:
      "Det er ingen bindingstid på våre tjenester. Du kan avslutte abonnementet når som helst uten ekstra kostnader. Ved oppsigelse beholder du designet, men du må selv sørge for ny hosting og vedlikehold av nettsiden.",
  },

  // === TEKNISK ===
  {
    category: "teknisk",
    question: "Er nettsidene mobilvennlige?",
    answer:
      "Ja, alle nettsidene våre er fullt responsive og fungerer godt på mobil, nettbrett og datamaskin. Responsivt design betyr at nettsiden automatisk tilpasser seg skjermstørrelsen. Dette er viktig både for brukeropplevelsen og for å rangere godt på Google, som prioriterer mobilvennlige nettsider i søkeresultatene.",
  },
  {
    category: "teknisk",
    question: "Hva er responsivt design?",
    answer:
      "Responsivt design betyr at nettsiden automatisk tilpasser seg ulike skjermstørrelser - mobil, nettbrett og datamaskin. I stedet for å lage separate versjoner, tilpasser en responsiv nettside utforming, bilder og tekst dynamisk. Over 60 % av norske nettsøkere bruker mobil, så dette er avgjørende for en god brukeropplevelse.",
  },
  {
    category: "teknisk",
    question: "Hva menes med SEO-optimalisering?",
    answer:
      "SEO (søkemotoroptimalisering) handler om å gjøre nettsiden synlig i Google-søk. Vi sørger for riktig teknisk struktur, raske lastetider, metatagger, strukturerte data og innhold optimalisert for relevante søkeord. Målet er at potensielle kunder finner bedriften din når de søker etter dine tjenester på nett.",
  },
  {
    category: "teknisk",
    question: "Hva om jeg allerede har et domene?",
    answer:
      "Ikke noe problem. Vi hjelper deg med å koble det eksisterende domenet ditt til den nye nettsiden. Har du ikke domene fra før, ordner vi det uten ekstra kostnad med alt inkludert-pakken.",
  },
  {
    category: "teknisk",
    question: "WordPress eller Shopify — hva er best for min bedrift?",
    answer:
      "Valget avhenger av behovet ditt. WordPress passer best for innholdsrike nettsider og blogger med mye tekst. Shopify er designet spesifikt for nettbutikker og e-handel. For norske bedrifter som trenger en profesjonell presentasjonsside, anbefaler vi ofte skreddersydde løsninger som gir bedre ytelse, sikkerhet og SEO enn standardplattformer.",
  },

  // === VEDLIKEHOLD OG SUPPORT ===
  {
    category: "vedlikehold",
    question: "Kan jeg gjøre endringer på nettsiden selv?",
    answer:
      "Ja! Vi leverer nettsiden med et brukervennlig administrasjonspanel hvor du enkelt kan oppdatere tekst, bilder og innhold. For større endringer hjelper vårt supportteam deg gjerne — det er inkludert i alt inkludert-pakken.",
  },
  {
    category: "vedlikehold",
    question: "Hva inkluderer nettside-vedlikehold?",
    answer:
      "Nettside-vedlikehold inkluderer tekniske oppdateringer, sikkerhetspatching, backup, ytelsesovervåking, innholdsoppdateringer og support. Med vårt alt inkludert-abonnement er alt dette dekket. Uten vedlikehold risikerer du sikkerhetsproblemer, treg nettside og tapt rangering på Google.",
  },
  {
    category: "vedlikehold",
    question: "Tilbyr dere lokal SEO for bedrifter?",
    answer:
      "Ja, vi tilbyr lokal SEO-optimalisering som hjelper bedriften din å bli synlig i lokale Google-søk og på Google Maps. Dette inkluderer optimalisering av Google Bedriftsprofil, lokale søkeord og strukturerte data som forteller Google hvor bedriften din holder til og hva den tilbyr.",
  },
  {
    category: "vedlikehold",
    question: "Hva er fordelene med SSL-sertifikat?",
    answer:
      "Et SSL-sertifikat krypterer data mellom besøkende og nettsiden din, vist med hengelåsikonet og «https» i nettleseren. Det beskytter sensitiv informasjon, bygger tillit hos besøkende, og er en rangeringsfaktor på Google. Alle våre nettsider leveres med SSL-sertifikat inkludert.",
  },
]
