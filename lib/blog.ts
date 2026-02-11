import { getAuthorBySlug } from "./authors"

export type ArticleSection = {
  id: string
  heading: string
  content: string
}

export type ArticleFaq = {
  question: string
  answer: string
}

export type ArticleInternalLink = {
  href: string
  label: string
}

export type ArticleSource = {
  title: string
  url: string
  publisher?: string
  publishedDate?: string
}

export type BlogArticle = {
  slug: string
  title: string
  description: string
  keywords: string[]
  date: string
  updatedDate: string
  authorSlug: string
  author: {
    name: string
    role: string
  }
  readingTime: string
  category: string
  sections: ArticleSection[]
  relatedSlugs: string[]
  faqs?: ArticleFaq[]
  internalLinks?: ArticleInternalLink[]
  sources: ArticleSource[]
}

type RawBlogArticle = Omit<BlogArticle, "updatedDate" | "authorSlug" | "sources"> & {
  updatedDate?: string
  authorSlug?: string
  sources?: ArticleSource[]
}

const DEFAULT_AUTHOR_SLUG = "zweb-redaksjonen"

const DEFAULT_ARTICLE_SOURCES: ArticleSource[] = [
  {
    title: "Google Search Central Documentation",
    url: "https://developers.google.com/search/docs",
    publisher: "Google",
  },
  {
    title: "Schema.org Documentation",
    url: "https://schema.org",
    publisher: "Schema.org",
  },
]

const rawArticles: RawBlogArticle[] = [
  {
    slug: "hva-koster-en-nettside",
    title: "Hva Koster en Nettside i 2026? Komplett Prisguide for Norske Bedrifter",
    description:
      "Finn ut hva en nettside koster i Norge i 2026. Komplett prisguide med oversikt over engangskjøp, abonnement og hva som påvirker totalprisen.",
    keywords: [
      "hva koster en nettside",
      "nettside pris",
      "webdesign pris norge",
      "nettside bedrift pris",
      "engangskjøp nettside",
      "abonnement nettside",
    ],
    date: "2026-02-10",
    updatedDate: "2026-02-11",
    author: { name: "ZWEB Digitalbyrå", role: "Redaksjonen" },
    readingTime: "9 min",
    category: "Guider",
    relatedSlugs: [
      "engangskjop-vs-abonnement-nettside",
      "slik-velger-du-webbyra",
      "seo-for-smabedrifter-for-lansering",
    ],
    sections: [
      {
        id: "intro",
        heading: "Hvorfor prisen på nettsider varierer så mye",
        content: `Mange bedriftseiere opplever at de får helt ulike pristilbud på tilsynelatende samme leveranse. Forklaringen er at "nettside" kan bety alt fra en enkel presentasjonsside til en komplett salgsplattform med innholdsstrategi, SEO-oppsett og videre drift.

Når du sammenligner tilbud, må du derfor se på hva som faktisk er inkludert: strategi, design, tekst, teknisk oppsett, måling og oppfølging. To tilbud med lik pris kan ha veldig ulik verdi hvis det ene mangler det som faktisk skaper leads.`
      },
      {
        id: "prisnivaer",
        heading: "Typiske prisnivåer i Norge",
        content: `I SMB-markedet ser vi ofte disse nivåene: enkel firmaside i lavere sjikt, profesjonell bedriftsnettside i mellomsegmentet og mer avanserte løsninger i øvre sjikt. Hva som er "riktig" nivå avhenger av mål, konkurranse og hvor aktiv nettsiden skal være som salgsverktøy.

Bedrifter som skal konkurrere i tøffe lokale søk, eller som trenger tydelig differensiering, bør normalt budsjettere for mer enn en ren minimumsløsning. En billig start blir fort dyr hvis strukturen må bygges om etter noen måneder.`
      },
      {
        id: "kostnadsdrivere",
        heading: "Hva driver kostnaden opp eller ned",
        content: `De største kostnadsdriverne er omfang, kompleksitet, innholdsbehov, integrasjoner og forventet oppfølging etter lansering. Skreddersøm tar mer tid enn malbaserte løsninger, men gir ofte bedre treff på merkevare og brukerbehov.

I tillegg påvirker beslutningshastighet prosjektkostnaden. Når brief, ansvar og godkjenninger er tydelige, går prosjektet raskere og mer effektivt. Når alt er uklart, bruker begge parter tid på omarbeiding.`
      },
      {
        id: "engang-vs-abonnement",
        heading: "Engangskjøp vs abonnement",
        content: `Engangskjøp passer bedrifter som ønsker å investere upfront og håndtere drift selv. Abonnement passer bedrifter som vil ha forutsigbar månedlig kostnad med support, vedlikehold og teknisk trygghet inkludert.

Det viktigste er å regne total kostnad over 24–36 måneder. Da ser du om en "lav" inngangspris faktisk blir dyrere over tid når drift, endringer og support kommer i tillegg.`
      },
      {
        id: "vanlige-feil",
        heading: "Vanlige feil når bedrifter vurderer pris",
        content: `Den vanligste feilen er å velge leverandør på laveste pris uten å vurdere hva som mangler i leveransen. En annen feil er å underbudsjettere innhold, SEO og oppfølging, som ofte er de delene som faktisk gir effekt.

Still alltid spørsmålet: Hva må være på plass for at nettsiden skal gi flere henvendelser? Når svaret er tydelig, blir det mye enklere å velge riktig nivå.`
      },
      {
        id: "oppsummering",
        heading: "Slik tar du et bedre prisvalg",
        content: `Be om tydelig scope, avklar ansvar og sammenlign totaløkonomi fremfor kun oppstartssum. Da reduserer du risiko for budsjettsprekker og får en løsning som gir mer verdi over tid.

Er du usikker på hvilket nivå som passer, kan du starte med en prioriteringsworkshop og bygge i faser. Da investerer du først i det som gir størst effekt.`
      },
    ],
    faqs: [
      {
        question: "Hva er en realistisk startpris for en profesjonell nettside?",
        answer:
          "For mange SMB-er starter profesjonelle leveranser ofte i mellomsegmentet, avhengig av innhold, funksjoner og SEO-behov.",
      },
      {
        question: "Er abonnement dyrere enn engangskjøp?",
        answer:
          "Ikke nødvendigvis. Det avhenger av hva som er inkludert og total kostnad over tid.",
      },
      {
        question: "Bør SEO være inkludert fra start?",
        answer:
          "Ja. Uten SEO-grunnmur risikerer du ekstra kostnader og svakere synlighet etter lansering.",
      },
      {
        question: "Hvor mange sider trenger en SMB i startfasen?",
        answer:
          "Ofte holder 5–10 strategisk viktige sider hvis struktur og budskap er godt planlagt.",
      },
      {
        question: "Hva er viktigst ved sammenligning av tilbud?",
        answer:
          "Tydelig omfang, ansvar, leveranser etter lansering og forventet effekt.",
      },
    ],
    internalLinks: [
      { href: "/priser", label: "Se våre nettsidepakker" },
      { href: "/nettside-for-bedrift", label: "Hva som bør være inkludert i en profesjonell nettside" },
      { href: "/kontakt", label: "Book gratis samtale" },
      { href: "/drift-og-vedlikehold", label: "Les om drift og vedlikehold" },
    ],
  },
  {
    slug: "trenger-bedriften-din-nettside",
    title: "7 Grunner til at Bedriften Din Trenger en Nettside i 2026",
    description:
      "Lurer du på om bedriften din trenger en nettside? Her er syv konkrete grunner til at en profesjonell nettside er avgjørende i 2026.",
    keywords: [
      "trenger bedriften min en nettside",
      "nettside for bedrift",
      "hjemmeside bedrift",
      "hvorfor nettside bedrift",
    ],
    date: "2026-02-08",
    updatedDate: "2026-02-11",
    author: { name: "ZWEB Digitalbyrå", role: "Redaksjonen" },
    readingTime: "7 min",
    category: "Tips",
    relatedSlugs: ["hva-koster-en-nettside", "slik-velger-du-webbyra"],
    sections: [
      {
        id: "grunnlag",
        heading: "Kunden sjekker deg digitalt før de tar kontakt",
        content: `For de fleste bransjer er nettsiden første kontaktpunkt. Selv kunder som får anbefalinger søker deg opp før de ringer. Hvis nettsiden er svak, mister du tillit før dialogen starter.

En profesjonell side gjør det enkelt å forstå tilbudet ditt, se referanser og ta kontakt raskt. Det er ofte forskjellen mellom "interessert" og "glemt".`
      },
      {
        id: "tillit",
        heading: "Nettsiden bygger troverdighet",
        content: `Bedrifter uten tydelig digital profil blir ofte oppfattet som mindre etablerte. En god nettside med klare tjenester, ekte kundecaser og tydelig kontaktinformasjon reduserer usikkerhet hos potensielle kunder.

Dette er særlig viktig i bransjer der kunden opplever risiko, som håndverk, juridiske tjenester eller høyere investeringer.`
      },
      {
        id: "tilgjengelig",
        heading: "Du er tilgjengelig 24/7",
        content: `En nettside jobber når du ikke gjør det. Potensielle kunder kan lese om tjenester, priser og prosess uten å vente på svar i åpningstid.

Når kontaktflyten er god, kan nettsiden kvalifisere leads automatisk og spare tid for begge parter.`
      },
      {
        id: "eierskap",
        heading: "Du eier kanalen selv",
        content: `Sosiale medier er nyttige, men du eier ikke rekkevidden. Algoritmeendringer kan påvirke synligheten din over natten. Nettsiden er derimot en kanal du kontrollerer fullt ut.

Med SEO-struktur og jevn innholdsproduksjon bygger du synlighet som varer lenger enn en enkelt annonsekampanje.`
      },
      {
        id: "maaling",
        heading: "Du kan måle hva som faktisk virker",
        content: `På nettsiden kan du måle hvilke sider som gir henvendelser, hvilke søk som driver trafikk og hva som hindrer konvertering.

Denne innsikten gjør markedsarbeidet mer lønnsomt. I stedet for å gjette, forbedrer du basert på data.`
      },
      {
        id: "oppsummering",
        heading: "En nettside er infrastruktur for vekst",
        content: `Nettsiden bør ses som en langsiktig vekstkanal, ikke et engangsprosjekt. Når struktur, innhold og måling er riktig, gir den løpende verdi.

Det handler ikke om å "ha en nettside", men om å ha en nettside som faktisk skaper henvendelser.`
      },
    ],
    internalLinks: [
      { href: "/nettside-for-bedrift", label: "Se vår hovedtjeneste" },
      { href: "/case", label: "Se dokumenterte resultater" },
      { href: "/kontakt", label: "Book gratis samtale" },
    ],
  },
  {
    slug: "seo-for-sma-bedrifter",
    title: "SEO for Små Bedrifter: Den Komplette Guiden (2026)",
    description:
      "Lær hvordan små bedrifter i Norge kan bli synlige på Google med teknisk SEO, lokal SEO og innholdsstrategi.",
    keywords: [
      "SEO for små bedrifter",
      "lokal SEO",
      "teknisk SEO",
      "google synlighet bedrift",
    ],
    date: "2026-02-05",
    updatedDate: "2026-02-11",
    author: { name: "ZWEB Digitalbyrå", role: "Redaksjonen" },
    readingTime: "10 min",
    category: "SEO",
    relatedSlugs: [
      "seo-for-smabedrifter-for-lansering",
      "hva-koster-en-nettside",
      "nettside-for-handverker-flere-oppdrag",
    ],
    sections: [
      {
        id: "hva-er-seo",
        heading: "Hvorfor SEO er viktig for små bedrifter",
        content: `SEO handler om å bli synlig når potensielle kunder aktivt leter etter tjenestene dine. For små bedrifter er dette ofte den mest lønnsomme kanalen fordi trafikken kommer med tydelig intensjon.

I stedet for å betale for hvert klikk, bygger du en stabil strøm av relevante besøkende over tid.`
      },
      {
        id: "teknisk-grunnmur",
        heading: "Teknisk SEO må være på plass først",
        content: `Uten teknisk grunnmur får selv godt innhold svak effekt. Du trenger riktige statuskoder, metadata, canonical, sitemap og tydelig internlenking.

I tillegg må nettsiden være mobilvennlig og rask. Dårlig ytelse gir både dårligere brukeropplevelse og svakere rangering over tid.`
      },
      {
        id: "lokal-seo",
        heading: "Lokal SEO gir raskest effekt for mange SMB-er",
        content: `Hvis du leverer lokalt, bør innhold og struktur gjenspeile det. Bruk tydelige tjenestesider, lokale referanser og konsekvent bedriftsinformasjon.

Målet er å være relevant i de områdene du faktisk selger i, ikke å dekke hele landet med generisk innhold.`
      },
      {
        id: "innhold",
        heading: "Innhold som svarer på spørsmål før kjøp",
        content: `Lag artikler og guider rundt spørsmål kundene stiller: pris, sammenligning, valg av leverandør og vanlige feil. Dette bygger både synlighet og tillit.

Koble alltid informasjonsinnhold til money pages med tydelige interne lenker og CTA.`
      },
      {
        id: "maaling",
        heading: "Mål og forbedre hver måned",
        content: `Følg utvikling i synlighet, klikkrate og henvendelser. Bruk data til å oppdatere de sidene som allerede får trafikk, fremfor å alltid lage nye sider.

Små forbedringer på viktige sider gir ofte større effekt enn mange nye sider uten tydelig formål.`
      },
      {
        id: "avslutning",
        heading: "SEO er en prosess, ikke et punktprosjekt",
        content: `Den beste strategien er å lansere med et solid fundament og deretter forbedre jevnlig. Da bygger du varig synlighet som støtter salgsmålene dine.

Start med struktur og kvalitet. Skalering kommer etterpå.`
      },
    ],
    internalLinks: [
      { href: "/seo-for-nettsider", label: "Se SEO-tjenesten vår" },
      { href: "/guider/seo-for-lansering", label: "Bruk SEO-sjekklisten før lansering" },
      { href: "/kontakt", label: "Bestill SEO-gjennomgang" },
    ],
  },
  {
    slug: "wordpress-vs-webflow-for-smabedrifter",
    title: "WordPress vs Webflow for Småbedrifter: Hva Bør Du Velge i 2026?",
    description:
      "En praktisk sammenligning av WordPress og Webflow for norske småbedrifter: pris, SEO, drift og fleksibilitet.",
    keywords: [
      "wordpress vs webflow",
      "webflow eller wordpress",
      "wordpress byrå",
      "webflow byrå",
    ],
    date: "2026-02-11",
    author: { name: "ZWEB Digitalbyrå", role: "Redaksjonen" },
    readingTime: "11 min",
    category: "Sammenligning",
    relatedSlugs: [
      "hva-koster-en-nettside",
      "slik-velger-du-webbyra",
      "engangskjop-vs-abonnement-nettside",
    ],
    sections: [
      {
        id: "plattformvalg",
        heading: "Plattformvalg påvirker mer enn du tror",
        content: `Valget mellom WordPress og Webflow påvirker ikke bare hvordan nettsiden bygges, men også hvordan den driftes og videreutvikles. For småbedrifter med begrensede ressurser kan feil valg gi unødvendig friksjon i hverdagen.

Riktig valg handler derfor om mål, teamkapasitet og planlagt vekst, ikke om hvilken plattform som er mest "populær" akkurat nå.`
      },
      {
        id: "wordpress",
        heading: "WordPress: fleksibilitet og kontroll",
        content: `WordPress passer godt når du trenger høy fleksibilitet og mange integrasjoner. Plattformen har stort økosystem og gjør det mulig å bygge alt fra enkle firmaside-løsninger til avanserte nettsteder.

Ulempen er at kvaliteten avhenger mer av hvordan løsningen settes opp. Dårlig plugin-strategi eller svak vedlikeholdsrutine kan gi sikkerhets- og ytelsesproblemer.`
      },
      {
        id: "webflow",
        heading: "Webflow: fart og redigeringsvennlighet",
        content: `Webflow er attraktivt for bedrifter som vil ha høy designkvalitet og rask produksjon. Mange opplever også at innholdsredigering er enklere for ikke-tekniske brukere.

Samtidig har Webflow noen begrensninger i mer avanserte use cases. Derfor bør du vurdere langsiktige behov før du bestemmer deg.`
      },
      {
        id: "seo-ytelse",
        heading: "SEO og ytelse: begge kan fungere svært godt",
        content: `Både WordPress og Webflow kan levere sterk SEO hvis strukturen er riktig. Plattform i seg selv gir ikke topprangering; det gjør kvaliteten på innhold, teknisk oppsett og autoritet.

Det viktigste er å sikre metadata, internlenking, schema og god mobilytelse fra start.`
      },
      {
        id: "totalokonomi",
        heading: "Se på totaløkonomi over tid",
        content: `Mange sammenligner bare oppstartspris. Bedre beslutning får du ved å se på total kostnad over 24–36 måneder, inkludert drift, support og endringsbehov.

En plattform kan virke billig ved oppstart, men bli dyr hvis teamet ditt trenger mye ekstern hjelp for små oppdateringer.`
      },
      {
        id: "valgmodell",
        heading: "En enkel beslutningsmodell",
        content: `Velg WordPress når fleksibilitet og integrasjoner er høy prioritet. Velg Webflow når du vil ha rask markedsføringstakt med enklere redigering.

Hvis du er usikker, be leverandøren anbefale plattform basert på konkrete mål og dokumenterte trade-offs.`
      },
    ],
    faqs: [
      {
        question: "Er WordPress bedre for SEO enn Webflow?",
        answer:
          "Begge kan være svært gode. Kvaliteten på implementeringen er viktigere enn plattformnavnet.",
      },
      {
        question: "Hva er enklest å redigere for ikke-tekniske brukere?",
        answer:
          "Mange opplever Webflow som mer intuitivt visuelt, men riktig satt opp WordPress kan også fungere godt.",
      },
      {
        question: "Hva er billigst over tid?",
        answer:
          "Det avhenger av drift, endringsbehov og intern kapasitet. Se på total kostnad over flere år.",
      },
      {
        question: "Kan vi bytte plattform senere?",
        answer:
          "Ja, men migrering har kostnad. Derfor er det smart å velge riktig plattform tidlig.",
      },
      {
        question: "Hvilken plattform passer SMB best?",
        answer:
          "Begge kan passe. Velg ut fra forretningsmål og arbeidsflyt, ikke trend.",
      },
    ],
    internalLinks: [
      { href: "/wordpress-nettside", label: "Se WordPress-løsning for bedrifter" },
      { href: "/webflow-nettside", label: "Se Webflow-løsning for bedrifter" },
      { href: "/priser", label: "Sammenlign pakker" },
      { href: "/kontakt", label: "Få plattformanbefaling" },
    ],
  },
  {
    slug: "slik-velger-du-webbyra",
    title: "Slik Velger Du Webbyrå: 10 Kriterier Norske Bedrifter Bør Bruke",
    description:
      "Praktisk guide for å velge riktig webbyrå med fokus på kvalitet, risiko, prosess og resultater.",
    keywords: [
      "hvordan velge webbyrå",
      "webbyrå vs freelancer",
      "velge digitalbyrå",
      "bestille nettside",
    ],
    date: "2026-02-11",
    author: { name: "ZWEB Digitalbyrå", role: "Redaksjonen" },
    readingTime: "11 min",
    category: "Kjøpsguide",
    relatedSlugs: [
      "hva-koster-en-nettside",
      "wordpress-vs-webflow-for-smabedrifter",
      "typiske-feil-ved-bestilling-av-nettside",
    ],
    sections: [
      {
        id: "hvorfor-vanskelig",
        heading: "Hvorfor byråvalg ofte blir feil",
        content: `Mange bedrifter velger byrå basert på lavest pris eller fineste designutkast. Problemet er at nettsideprosjekter sjelden feiler på design alene. De feiler på uklar strategi, svak prosess og manglende avklaringer.

Når du velger partner, må du derfor vurdere hvordan de jobber, ikke bare hva de viser i porteføljen.`
      },
      {
        id: "forarbeid",
        heading: "Definer mål før du henter tilbud",
        content: `Første steg er å avklare hva nettsiden skal oppnå: flere leads, bedre booking, høyere tillit eller bedre synlighet. Uten tydelige mål blir tilbud vanskelige å sammenligne og prosjektet får uklar retning.

Et godt briefgrunnlag reduserer både risiko og tidsbruk.`
      },
      {
        id: "kriterier",
        heading: "10 kriterier som gir bedre beslutning",
        content: `Vurder byrå på forretningsforståelse, metode, teknisk kvalitet, SEO-kompetanse, kommunikasjon, prisgjennomsiktighet og plan for oppfølging etter lansering.

Bruk en enkel scoremodell for å sammenligne kandidater objektivt. Da blir beslutningen mindre styrt av salgspitch.`
      },
      {
        id: "tilbud",
        heading: "Slik leser du tilbud riktig",
        content: `Et godt tilbud beskriver tydelig hva som er inkludert, hva som ikke er inkludert, hvem som har ansvar og hvordan endringer håndteres. Uten disse punktene øker risikoen for misforståelser og budsjettsprekker.

Spør alltid om total kostnad første 12 måneder, ikke bare prosjektpris.`
      },
      {
        id: "rodflagg",
        heading: "Rødflagg du bør styre unna",
        content: `Vær forsiktig med leverandører som lover garanterte topprangeringer, unngår konkrete avklaringer eller ikke kan vise dokumenterte resultater.

Dersom kommunikasjonen er treg og uklar allerede i salgsfasen, blir den sjelden bedre i prosjektfasen.`
      },
      {
        id: "avslutning",
        heading: "Velg partner, ikke bare leverandør",
        content: `Riktig webbyrå er en partner som forstår forretningen din og prioriterer det som skaper effekt først. Det gir bedre resultat og mindre friksjon i hele prosjektet.

Bruk kriterier, ikke magefølelse. Da øker sannsynligheten for en løsning som faktisk leverer verdi.`
      },
    ],
    internalLinks: [
      { href: "/webdesign-byra", label: "Se hvordan vi jobber som byrå" },
      { href: "/case", label: "Se case med målbare resultater" },
      { href: "/priser", label: "Sammenlign pakker" },
      { href: "/kontakt", label: "Book uforpliktende rådgivning" },
    ],
  },
  {
    slug: "nettside-for-handverker-flere-oppdrag",
    title: "Nettside for Håndverker: Slik Får Du Flere Oppdrag fra Google",
    description:
      "Praktisk guide for håndverkere som vil ha flere lokale henvendelser gjennom bedre nettside og lokal SEO.",
    keywords: [
      "nettside for håndverker",
      "lokal seo håndverker",
      "rørlegger nettside",
      "tømrer nettside",
    ],
    date: "2026-02-11",
    author: { name: "ZWEB Digitalbyrå", role: "Redaksjonen" },
    readingTime: "10 min",
    category: "Bransje",
    relatedSlugs: [
      "seo-for-sma-bedrifter",
      "hva-koster-en-nettside",
      "typiske-feil-ved-bestilling-av-nettside",
    ],
    sections: [
      {
        id: "hvorfor-taper",
        heading: "Hvorfor mange håndverkere taper leads på nettet",
        content: `Håndverksbedrifter mister ofte henvendelser fordi nettsiden er uklar, treg eller vanskelig å bruke på mobil. Kunden finner kanskje bedriften, men får ikke raskt svar på de viktigste spørsmålene.

For lokale tjenester er hastighet, tydelighet og kontaktflyt avgjørende for om kunden velger deg eller konkurrenten.`
      },
      {
        id: "hva-ma-med",
        heading: "Hva en håndverker-nettside må inneholde",
        content: `Forsiden bør tydelig kommunisere fagområde, geografi og neste steg. I tillegg bør du ha egne sider for de viktigste tjenestene, referanser fra ekte oppdrag og enkel kontakt.

Jo enklere det er å forstå hva du tilbyr og hvordan man kontakter deg, desto høyere blir konverteringsraten.`
      },
      {
        id: "lokal-seo",
        heading: "Lokal SEO som gir effekt",
        content: `For håndverkere er lokal SEO ofte viktigere enn bred nasjonal synlighet. Bygg innhold og struktur rundt de områdene du faktisk leverer i.

Bruk konkrete tjenestesider, tydelige områdereferanser og internlenker mellom relaterte tjenester.`
      },
      {
        id: "tillit",
        heading: "Tillitsbevis som får kunden til å ringe",
        content: `Bruk bilder fra reelle oppdrag, kundeuttalelser, sertifiseringer og tydelig kontaktinformasjon. Dette senker terskelen for å ta kontakt og gjør deg tryggere å velge.

Kunder velger sjelden kun på pris. De velger leverandøren som virker mest troverdig og relevant.`
      },
      {
        id: "maaling",
        heading: "Slik forbedrer du nettsiden månedlig",
        content: `Mål telefonklikk, skjema-innsendelser og hvilke tjenester som får mest trafikk. Oppdater sidene som allerede får besøk før du lager mange nye sider.

Små, kontinuerlige forbedringer gir ofte større effekt enn store redesign hvert tredje år.`
      },
      {
        id: "oppsummering",
        heading: "Bygg nettsiden som en salgskanal",
        content: `En håndverker-nettside bør være laget for rask beslutning: forstå tilbudet, se bevis, ta kontakt. Når dette fungerer, blir nettsiden en stabil kilde til nye oppdrag.

Start med enkel struktur, lokal relevans og tydelige CTA-er. Derfra kan du skalere innhold og synlighet.`
      },
    ],
    internalLinks: [
      { href: "/bransjer/handverker", label: "Se vår løsning for håndverkere" },
      { href: "/seo-for-nettsider", label: "Les om lokal SEO-oppsett" },
      { href: "/priser", label: "Se prisnivå" },
      { href: "/kontakt", label: "Book gratis behovsvurdering" },
    ],
  },
  {
    slug: "seo-for-smabedrifter-for-lansering",
    title: "SEO for Små Bedrifter: Dette Må Være På Plass Før Du Lanserer",
    description:
      "Sjekkliste for SEO før lansering av ny nettside: teknikk, innhold, schema, internlenker og måling.",
    keywords: [
      "seo sjekkliste før lansering",
      "teknisk seo",
      "canonical sitemap robots",
      "seo små bedrifter",
    ],
    date: "2026-02-11",
    author: { name: "ZWEB Digitalbyrå", role: "Redaksjonen" },
    readingTime: "10 min",
    category: "SEO",
    relatedSlugs: [
      "seo-for-sma-bedrifter",
      "hva-koster-en-nettside",
      "typiske-feil-ved-bestilling-av-nettside",
    ],
    sections: [
      {
        id: "hvorfor-prelaunch",
        heading: "Hvorfor SEO må inn før lansering",
        content: `Mange team sier "vi tar SEO etter lansering". Det virker effektivt i øyeblikket, men blir ofte dyrere senere fordi struktur og innhold må bygges om.

Når SEO planlegges tidlig, får du en sidearkitektur som både søkemotorer og potensielle kunder forstår fra dag én.`
      },
      {
        id: "teknisk-minimum",
        heading: "Teknisk minimum før go-live",
        content: `Før publisering må canonical, metadata, robots og sitemap være riktig satt mot primærdomenet. I tillegg bør du kontrollere statuskoder, interne lenker og mobilytelse.

Små feil her kan bremse indeksering betydelig, selv om innholdet ellers er bra.`
      },
      {
        id: "innhold-struktur",
        heading: "Innholdsstruktur som støtter søkeintensjon",
        content: `Sørg for egne sider for sentrale tjenester, ikke bare én generell tjenesteside. Kombiner dette med kjøpsnære guider som svarer på pris, sammenligning og leverandørvalg.

Koble innholdet med tydelige interne lenker til money pages.`
      },
      {
        id: "schema",
        heading: "Schema og internlenker",
        content: `Bruk riktig schema per sidetype: Service på tjenestesider, FAQPage der FAQ vises, Article på bloggposter og BreadcrumbList på dype sider.

Dette gjør det enklere for søkemotorer å forstå kontekst og relasjoner på nettstedet.`
      },
      {
        id: "maal-dag1",
        heading: "Måling fra dag 1",
        content: `Sett opp sporing av kontaktskjema, telefonklikk og sentrale CTA-er før lansering. Uten måling blir forbedringsarbeid tilfeldig.

Med enkel, tydelig måling kan du prioritere de forbedringene som gir raskest effekt.`
      },
      {
        id: "lanseringsplan",
        heading: "7-dagers plan etter publisering",
        content: `Første uke etter lansering bør brukes til kontroll av metadata, lenker, schema og faktisk konverteringsflyt. Tidlig kvalitetssikring forebygger at små feil blir store problemer.

Deretter kan du starte innholds- og optimaliseringsløp med bedre trygghet.`
      },
    ],
    internalLinks: [
      { href: "/seo-for-nettsider", label: "Se SEO-tjenesten vår" },
      { href: "/guider/seo-for-lansering", label: "Bruk vår SEO-guide" },
      { href: "/kontakt", label: "Bestill pre-launch SEO-sjekk" },
    ],
  },
  {
    slug: "typiske-feil-ved-bestilling-av-nettside",
    title: "12 Typiske Feil Bedriftseiere Gjør Når De Bestiller Nettside",
    description:
      "Unngå de vanligste feilene ved bestilling av nettside: mål, scope, pris, SEO, drift og måling.",
    keywords: [
      "feil ved bestilling av nettside",
      "bestille nettside tips",
      "webbyrå feil",
      "prosjekt nettside",
    ],
    date: "2026-02-11",
    author: { name: "ZWEB Digitalbyrå", role: "Redaksjonen" },
    readingTime: "11 min",
    category: "Kjøpsguide",
    relatedSlugs: [
      "slik-velger-du-webbyra",
      "hva-koster-en-nettside",
      "engangskjop-vs-abonnement-nettside",
    ],
    sections: [
      {
        id: "intro-feil",
        heading: "Hvorfor gode prosjekter sporer av",
        content: `De fleste nettsideprosjekter starter med gode intensjoner, men mister retning når mål og ansvar er uklare. Da blir beslutninger tilfeldige, tidslinjen glipper og kostnader øker.

Den gode nyheten er at de fleste feilene er forutsigbare og enkle å forebygge.`
      },
      {
        id: "mal-scope",
        heading: "Feil 1–4: mål, scope og ansvar",
        content: `Vanlige feil er uklare mål, for bredt omfang fra dag én, prisfokus uten verdi-vurdering og manglende avklaring av hvem som gjør hva.

Løsningen er tydelig brief, faseinndeling og konkret ansvarsmatrise før utvikling starter.`
      },
      {
        id: "innhold-plattform",
        heading: "Feil 5–8: innhold, plattform og konvertering",
        content: `Mange undervurderer innhold, velger plattform ut fra trend og glemmer konverteringslogikk. En nettside uten klart budskap og tydelig CTA blir ofte en digital brosjyre.

Velg plattform etter behov og bygg siden for handling, ikke bare visuell presentasjon.`
      },
      {
        id: "seo-drift",
        heading: "Feil 9–12: SEO, måling og drift",
        content: `SEO som ettertanke, manglende måling og fravær av driftsplan er klassiske tapere. Nettsiden må behandles som et produkt i utvikling, ikke et ferdig engangsprosjekt.

Uten oppfølging mister du gradvis både synlighet og konvertering.`
      },
      {
        id: "modell",
        heading: "En enkel modell som reduserer risiko",
        content: `Start med klare mål, bygg minimumsløsning med riktig fundament og forbedre basert på data. Denne modellen gir bedre kontroll på både kostnad og effekt.

Fasebasert levering gjør det enklere å ta gode prioriteringer underveis.`
      },
      {
        id: "avslutning",
        heading: "Unngå dyre lærdommer",
        content: `De dyreste feilene handler sjelden om designdetaljer. De handler om uklare forventninger og svak prosjektstyring.

Med riktig prosess kan du få en nettside som både leveres godt og skaper reell verdi for bedriften.`
      },
    ],
    internalLinks: [
      { href: "/webdesign-byra", label: "Se vår arbeidsmodell" },
      { href: "/drift-og-vedlikehold", label: "Les om drift og vedlikehold" },
      { href: "/priser", label: "Sammenlign prispakker" },
      { href: "/kontakt", label: "Få råd før bestilling" },
    ],
  },
  {
    slug: "engangskjop-vs-abonnement-nettside",
    title: "Engangskjøp vs Abonnement: Hva Lønner Seg Når Du Skal Bestille Nettside?",
    description:
      "Sammenligning av engangskjøp og abonnement for nettsider med fokus på total kostnad, risiko og fleksibilitet.",
    keywords: [
      "engangskjøp nettside",
      "abonnement nettside",
      "hva lønner seg nettside",
      "nettside total kostnad",
    ],
    date: "2026-02-11",
    author: { name: "ZWEB Digitalbyrå", role: "Redaksjonen" },
    readingTime: "9 min",
    category: "Sammenligning",
    relatedSlugs: [
      "hva-koster-en-nettside",
      "typiske-feil-ved-bestilling-av-nettside",
      "slik-velger-du-webbyra",
    ],
    sections: [
      {
        id: "modeller",
        heading: "To modeller med ulike styrker",
        content: `Engangskjøp gir høyere oppstartskostnad, men mer kontroll og eierskap fra første dag. Abonnement gir lavere terskel og forutsigbar månedlig kostnad.

Ingen modell er best for alle. Valget bør styres av ressurser, risikotoleranse og ønsket drift.`
      },
      {
        id: "fordeler-engang",
        heading: "Når engangskjøp er smartest",
        content: `Har du intern kapasitet til vedlikehold og ønsker full teknisk kontroll, kan engangskjøp være effektivt. Det passer også bedrifter som vil investere upfront for å minimere løpende forpliktelser.

Viktig forutsetning er at du har plan for support og oppdateringer.`
      },
      {
        id: "fordeler-abonnement",
        heading: "Når abonnement er smartest",
        content: `Abonnement passer bedrifter som vil ha lav oppstartsterskel og slippe teknisk drift. Du får ofte support, oppdateringer og sikkerhet inkludert.

For mange SMB-er gir dette bedre forutsigbarhet og mindre risiko i hverdagen.`
      },
      {
        id: "tco",
        heading: "Regn total cost of ownership",
        content: `Sammenlign alltid total kostnad over minst 24 måneder. Ta med hosting, support, oppdateringer og forventede endringer, ikke bare listepris.

Da ser du hvilken modell som faktisk er mest lønnsom for din situasjon.`
      },
      {
        id: "fallgruver",
        heading: "Vanlige fallgruver",
        content: `Med engangskjøp er vanlig feil å undervurdere driftskostnader. Med abonnement er vanlig feil å ikke lese vilkår for binding og hva som faktisk er inkludert.

Be alltid om tydelig oversikt over inkluderte leveranser og tilleggstakster.`
      },
      {
        id: "oppsummering",
        heading: "Velg modell ut fra kapasitet og mål",
        content: `Hvis du vil minimere teknisk belastning, er abonnement ofte tryggest. Hvis du har interne ressurser og vil eie alt selv, kan engangskjøp være riktig.

Det viktigste er at modellen støtter vekstmålene dine over tid.`
      },
    ],
    internalLinks: [
      { href: "/priser", label: "Se våre prismodeller" },
      { href: "/drift-og-vedlikehold", label: "Hva driftspakken inkluderer" },
      { href: "/kontakt", label: "Få anbefalt modell for din bedrift" },
    ],
  },
  {
    slug: "nettside-for-advokatfirma",
    title: "Nettside for Advokatfirma: Slik Bygger Du Tillit og Får Flere Klienthenvendelser",
    description:
      "Guide for advokatfirmaer som vil bygge tydelig tillit, bedre struktur og flere kvalifiserte henvendelser via nettsiden.",
    keywords: [
      "nettside for advokat",
      "advokat nettside",
      "advokatfirma markedsføring",
      "webdesign advokat",
    ],
    date: "2026-02-11",
    author: { name: "ZWEB Digitalbyrå", role: "Redaksjonen" },
    readingTime: "9 min",
    category: "Bransje",
    relatedSlugs: [
      "slik-velger-du-webbyra",
      "seo-for-smabedrifter-for-lansering",
      "typiske-feil-ved-bestilling-av-nettside",
    ],
    sections: [
      {
        id: "tillit-krav",
        heading: "Advokatnettsider har høyere tillitskrav",
        content: `Potensielle klienter vurderer ikke bare kompetanse, men også trygghet og tydelighet. Nettsiden må derfor kommunisere faglig tyngde uten å bli utilgjengelig.

En klar struktur med forståelig språk gjør terskelen lavere for å ta kontakt.`
      },
      {
        id: "struktur",
        heading: "Slik bør du strukturere innholdet",
        content: `Bygg egne sider for hvert fagområde, tydelig prosess for første kontakt og FAQ som svarer på vanlige spørsmål tidlig i beslutningsløpet.

Dette gjør det enklere for klienten å finne relevant informasjon og velge neste steg.`
      },
      {
        id: "profiler",
        heading: "Teamprofiler og faglig dokumentasjon",
        content: `Vis hvem som jobber i firmaet, kompetanseområder og relevant erfaring. Dette skaper nærhet og trygghet i en ellers krevende beslutning.

Kombiner faglig tyngde med lett forståelige forklaringer av hvordan dere jobber.`
      },
      {
        id: "konvertering",
        heading: "Kontaktflyt som reduserer usikkerhet",
        content: `Bruk tydelige CTA-er for konsultasjon, telefon og skjema. Forklar hva som skjer etter første henvendelse og hvor raskt klienten får svar.

Forutsigbarhet i kontaktprosessen øker konverteringsraten.`
      },
      {
        id: "seo",
        heading: "SEO for juridiske tjenester",
        content: `Bygg innhold rundt klientens spørsmål og lokale søk. Kombiner fagområdesider med artikler som forklarer vanlige problemstillinger i et forståelig språk.

Dette øker både synlighet og relevans i søkeresultatene.`
      },
      {
        id: "oppsummering",
        heading: "Profesjonell digital førstelinje",
        content: `For advokatfirmaer er nettsiden en digital førstelinje for tillit. Når struktur, innhold og kontaktflyt fungerer sammen, blir nettsiden en reell kanal for nye klienter.

Prioriter tydelighet, trygghet og relevans i alle deler av løsningen.`
      },
    ],
    internalLinks: [
      { href: "/bransjer/advokat", label: "Se vår advokat-løsning" },
      { href: "/nettside-for-bedrift", label: "Les om vår hovedtjeneste" },
      { href: "/kontakt", label: "Book rådgivning" },
    ],
  },
]

export const articles: BlogArticle[] = rawArticles.map((article) => {
  const author = getAuthorBySlug(article.authorSlug || DEFAULT_AUTHOR_SLUG)
  const authorSlug = author?.slug || DEFAULT_AUTHOR_SLUG

  return {
    ...article,
    updatedDate: article.updatedDate || article.date,
    authorSlug,
    author: {
      name: author?.name || article.author.name,
      role: author?.role || article.author.role,
    },
    sources:
      article.sources && article.sources.length >= 2
        ? article.sources
        : DEFAULT_ARTICLE_SOURCES,
  }
})

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getAllArticles(): BlogArticle[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getArticlesByCategory(category: string): BlogArticle[] {
  return getAllArticles().filter((a) => a.category === category)
}
