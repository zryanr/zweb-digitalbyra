export type ArticleSection = {
  id: string
  heading: string
  content: string
}

export type BlogArticle = {
  slug: string
  title: string
  description: string
  keywords: string[]
  date: string
  updatedDate?: string
  author: {
    name: string
    role: string
  }
  readingTime: string
  category: string
  sections: ArticleSection[]
  relatedSlugs: string[]
}

export const articles: BlogArticle[] = [
  // --- ARTICLE 1: Hva koster en nettside ---
  {
    slug: "hva-koster-en-nettside",
    title: "Hva Koster en Nettside i 2026? Komplett Prisguide for Norske Bedrifter",
    description:
      "Finn ut hva en nettside koster i Norge i 2026. Komplett prisguide med oversikt over engangskjøp, abonnement, og hva som påvirker prisen for din bedrift.",
    keywords: [
      "hva koster en nettside",
      "nettside pris",
      "nettside bedrift pris",
      "billig nettside bedrift",
      "nettside pris 2026",
      "webdesign pris norge",
    ],
    date: "2026-02-10",
    author: { name: "ZWEB Digitalbyrå", role: "Redaksjonen" },
    readingTime: "8 min",
    category: "Guider",
    relatedSlugs: ["trenger-bedriften-din-nettside", "seo-for-sma-bedrifter"],
    sections: [
      {
        id: "introduksjon",
        heading: "Hva koster en nettside for bedrifter i Norge?",
        content: `En av de vanligste spørsmålene vi får fra norske bedriftseiere er: «Hva koster det egentlig å få laget en nettside?» Svaret varierer, men i 2026 kan du forvente å betale alt fra noen hundrelapper i måneden til over 100 000 kr — avhengig av hva du trenger.

I denne guiden gir vi deg en komplett oversikt over hva en nettside koster, hva som påvirker prisen, og hvordan du finner den beste løsningen for din bedrift uten å betale for mye.`,
      },
      {
        id: "prisnivaer",
        heading: "Prisnivåer for nettsider i Norge (2026)",
        content: `Her er en oversikt over de vanligste prisnivåene for nettsider i Norge:

Budsjettvennlig (0–5 000 kr): Gjør-det-selv-løsninger med verktøy som Wix eller Webnode. Du får en enkel nettside, men begrenset design og funksjonalitet. Passer for helt nye bedrifter med svært begrenset budsjett.

Mellomsjiktet (5 000–15 000 kr): Profesjonelt designet nettside med 3–7 sider, mobilvennlig design, kontaktskjema og grunnleggende SEO. Dette er det vanligste valget for små norske bedrifter.

Premium (15 000–50 000 kr): Skreddersydd design med avansert funksjonalitet, nettbutikk-integrering, bookingsystemer eller andre spesialløsninger.

Enterprise (50 000 kr+): Store, komplekse nettsider med egenutviklet funksjonalitet, avansert e-handel, integrasjoner mot forretningssystemer og dedikert support.`,
      },
      {
        id: "faktorer",
        heading: "Hva påvirker prisen på en nettside?",
        content: `Flere faktorer avgjør hva nettsiden din vil koste:

Antall sider: En enkel 3-siders nettside koster mindre enn en med 15+ sider med unikt innhold.

Design: Bruk av ferdig mal er billigere enn skreddersydd design. Et unikt design som reflekterer merkevaren din koster mer, men skiller deg ut fra konkurrentene.

Funksjonalitet: Kontaktskjema er standard, men bookingsystem, nettbutikk, chat-funksjon eller integrasjoner med andre systemer øker prisen.

SEO-optimalisering: Grunnleggende SEO bør være inkludert, men avansert søkemotoroptimalisering med innholdsstrategi og lokal SEO koster ekstra.

Innholdsproduksjon: Trenger du hjelp med tekst, bilder og video? Profesjonelt innhold koster, men er en investering som betaler seg.

Vedlikehold: Hosting, domene, SSL-sertifikat, oppdateringer og support er løpende kostnader mange glemmer å ta med i regnestykket.`,
      },
      {
        id: "engangskjop-vs-abonnement",
        heading: "Engangskjøp vs. abonnement — hva lønner seg?",
        content: `Det finnes hovedsakelig to betalingsmodeller for nettsider:

Engangskjøp betyr at du betaler en fast sum for hele nettsiden. Du eier alt, men må selv betale for hosting (typisk 500–2 000 kr/mnd), domene (100–500 kr/år), SSL-sertifikat og vedlikehold. Over tid kan dette bli dyrere enn mange tror.

Abonnement (alt inkludert) betyr at du betaler en fast månedspris som dekker alt: design, hosting, domene, SSL, vedlikehold og support. Hos ZWEB koster dette 999 kr/mnd uten bindingstid. For de fleste små bedrifter er dette den enkleste og mest forutsigbare løsningen.

Regnestykket: Med engangskjøp hos ZWEB (6 999 kr) pluss hosting og vedlikehold (ca. 500 kr/mnd), betaler du omtrent 12 999 kr det første året. Med alt inkludert-pakken betaler du 11 988 kr det første året — og slipper alt teknisk styr.`,
      },
      {
        id: "zweb-priser",
        heading: "ZWEB Digitalbyrå: Våre priser",
        content: `Hos ZWEB tilbyr vi to enkle og transparente prismodeller:

Engangskjøp til 6 999 kr inkluderer profesjonelt design, inntil 5 sider, mobilvennlig nettside, kontaktskjema, SEO grunnoppsett, Google Analytics og levering på 2–3 uker.

Alt inkludert til 999 kr/mnd inkluderer alt fra engangskjøpet, pluss: inntil 7 sider, komplett SEO-optimalisering, webhotell, domene, SSL-sertifikat, løpende support og vedlikehold, månedlige oppdateringer, backup og sikkerhet, og raskere levering på 1–2 uker.

Ingen skjulte kostnader, ingen bindingstid. Du vet alltid hva du betaler for.`,
      },
      {
        id: "tips",
        heading: "Tips for å få mest mulig for pengene",
        content: `Ha klart hva du trenger før du starter — en tydelig kravliste sparer tid og penger for begge parter.

Prioriter mobilvennlig design — over 60% av besøkende kommer fra mobil i Norge.

Ikke kutt på SEO — en pen nettside ingen finner er bortkastede penger. Sørg for at SEO-optimalisering er inkludert.

Tenk langsiktig — den billigste løsningen nå kan bli den dyreste over tid hvis du stadig må bytte plattform eller betale for feilretting.

Velg en norsk leverandør — du får bedre kommunikasjon, raskere support og en leverandør som forstår det norske markedet.`,
      },
      {
        id: "oppsummering",
        heading: "Oppsummering",
        content: `En profesjonell nettside for norske bedrifter koster typisk mellom 5 000 og 50 000 kr, avhengig av omfang og funksjonalitet. For de fleste små bedrifter er en løsning i mellomsjiktet (5 000–15 000 kr) tilstrekkelig.

Hos ZWEB Digitalbyrå får du en komplett, profesjonell nettside fra 999 kr/mnd — med alt inkludert og uten bindingstid. Er du usikker på hva du trenger? Ta kontakt for en gratis, uforpliktende samtale, så hjelper vi deg å finne den beste løsningen for din bedrift.`,
      },
    ],
  },

  // --- ARTICLE 2: Trenger bedriften din en nettside ---
  {
    slug: "trenger-bedriften-din-nettside",
    title: "7 Grunner til at Bedriften Din Trenger en Nettside i 2026",
    description:
      "Lurer du på om bedriften din trenger en nettside? Her er 7 gode grunner til at en profesjonell nettside er avgjørende for norske bedrifter i 2026.",
    keywords: [
      "trenger bedriften min en nettside",
      "nettside for bedrift",
      "hjemmeside bedrift",
      "hvorfor nettside bedrift",
      "nettside for småbedrifter",
    ],
    date: "2026-02-08",
    author: { name: "ZWEB Digitalbyrå", role: "Redaksjonen" },
    readingTime: "6 min",
    category: "Tips",
    relatedSlugs: ["hva-koster-en-nettside", "seo-for-sma-bedrifter"],
    sections: [
      {
        id: "introduksjon",
        heading: "Trenger bedriften din virkelig en nettside?",
        content: `Kort svar: ja. I 2026 er en nettside ikke lenger et «nice to have» — det er en nødvendighet for bedrifter som ønsker å vokse. Selv om du har en aktiv Facebook-side eller Instagram-profil, erstatter ikke sosiale medier en profesjonell nettside.

Men ikke ta bare vårt ord for det. Her er syv konkrete grunner til at bedriften din trenger en nettside — med tall og fakta som underbygger det.`,
      },
      {
        id: "grunn-1",
        heading: "1. Kundene dine søker på nett først",
        content: `Over 97% av forbrukere bruker internett for å finne lokale bedrifter og tjenester. Når noen trenger en rørlegger, frisør, elektriker eller regnskapsfører, er Google det første stedet de ser. Uten en nettside er du usynlig for disse potensielle kundene.

En profesjonell nettside med god SEO sørger for at du dukker opp når folk i ditt område søker etter det du tilbyr.`,
      },
      {
        id: "grunn-2",
        heading: "2. Troverdighet og profesjonalitet",
        content: `Visste du at 75% av forbrukere vurderer en bedrifts troverdighet basert på nettsiden? En moderne, profesjonell nettside sender et klart signal: dette er en seriøs bedrift du kan stole på.

Motsatt kan mangel på nettside — eller en utdatert en — skape tvil. I en tid der konkurransen er hard, kan det være forskjellen mellom å vinne eller tape en kunde.`,
      },
      {
        id: "grunn-3",
        heading: "3. Tilgjengelig 24/7, 365 dager i året",
        content: `En nettside jobber for deg døgnet rundt, hele året. Mens du sover, kan potensielle kunder finne informasjon om tjenestene dine, lese kundeomtaler, se priser og sende en henvendelse gjennom kontaktskjemaet.

Tenk på nettsiden som din mest pålitelige selger — den er aldri syk, tar aldri ferie, og er alltid klar til å hjelpe nye kunder.`,
      },
      {
        id: "grunn-4",
        heading: "4. Du eier plattformen — ikke algoritmen",
        content: `Sosiale medier er flott, men du eier ikke plattformen. Facebook og Instagram kan endre algoritmen over natten, og plutselig ser bare en brøkdel av følgerne dine innholdet ditt. Betalte annonser blir stadig dyrere.

En nettside er din egen eiendom. Du bestemmer innholdet, designet og opplevelsen. Kombinert med SEO gir nettsiden deg en stabil kilde til besøkende som ikke er avhengig av algoritmer eller annonsebudsjett.`,
      },
      {
        id: "grunn-5",
        heading: "5. Lokal synlighet med Google Bedriftsprofil",
        content: `Visste du at en nettside forsterker effekten av Google Bedriftsprofil (tidligere Google My Business)? Når du kobler nettsiden til bedriftsprofilen din, øker sjansen for å dukke opp i det lokale «kartpakken» — de tre øverste resultatene med kart som vises for lokale søk.

For håndverkere, butikker, restauranter og andre lokale bedrifter kan dette utgjøre forskjellen mellom 5 og 50 nye henvendelser i måneden.`,
      },
      {
        id: "grunn-6",
        heading: "6. Konkurransefortrinn",
        content: `Mange små norske bedrifter har fortsatt ikke en nettside, eller har en utdatert side fra 2015. Ved å investere i en moderne, profesjonell nettside nå, får du et tydelig konkurransefortrinn.

Kunder som sammenligner deg med en konkurrent uten nettside (eller med en dårlig en) vil oftest velge bedriften som fremstår mest profesjonell og troverdig. I mange bransjer er nettsiden det første og viktigste inntrykket kunden får.`,
      },
      {
        id: "grunn-7",
        heading: "7. Målbare resultater",
        content: `Med verktøy som Google Analytics kan du måle nøyaktig hvor mange som besøker nettsiden din, hvor de kommer fra, hvilke sider de ser på, og om de tar kontakt. Dette gir deg verdifull innsikt i kundenes atferd og hjelper deg å ta bedre beslutninger for markedsføringen din.

Prøv å måle effekten av et visittkort eller en flygeblad med samme presisjon — det lar seg ikke gjøre.`,
      },
      {
        id: "oppsummering",
        heading: "Klar for å komme i gang?",
        content: `En profesjonell nettside er en av de viktigste investeringene en bedrift kan gjøre i 2026. Den bygger troverdighet, tiltrekker nye kunder, og gir deg en plattform du eier og kontrollerer fullt ut.

Hos ZWEB Digitalbyrå lager vi profesjonelle nettsider for norske bedrifter fra 999 kr/mnd — med alt inkludert. Ingen bindingstid, ingen skjulte kostnader. Start med en gratis, uforpliktende samtale for å finne ut hva som passer for din bedrift.`,
      },
    ],
  },

  // --- ARTICLE 3: SEO for små bedrifter ---
  {
    slug: "seo-for-sma-bedrifter",
    title: "SEO for Små Bedrifter: Den Komplette Guiden (2026)",
    description:
      "Lær hvordan små bedrifter i Norge kan bli synlige på Google med SEO. Komplett guide til søkemotoroptimalisering, lokal SEO og praktiske tips.",
    keywords: [
      "SEO for små bedrifter",
      "søkemotoroptimalisering",
      "lokal SEO",
      "SEO guide norge",
      "SEO-optimalisering",
      "google synlighet bedrift",
    ],
    date: "2026-02-05",
    author: { name: "ZWEB Digitalbyrå", role: "Redaksjonen" },
    readingTime: "10 min",
    category: "SEO",
    relatedSlugs: ["hva-koster-en-nettside", "trenger-bedriften-din-nettside"],
    sections: [
      {
        id: "introduksjon",
        heading: "Hva er SEO og hvorfor er det viktig for din bedrift?",
        content: `SEO — søkemotoroptimalisering — er prosessen med å gjøre nettsiden din synlig i Google-søk. For små bedrifter i Norge er SEO en av de mest kostnadseffektive markedsføringsstrategiene som finnes.

Tenk deg at noen i ditt nærområde søker etter «rørlegger Oslo» eller «frisør Bergen». Hvis bedriften din dukker opp blant de øverste resultatene, får du gratis, målrettet trafikk fra folk som aktivt leter etter det du tilbyr. Det er kunder som allerede er klare til å kjøpe.

I denne guiden forklarer vi alt du trenger å vite om SEO for små bedrifter — fra grunnleggende prinsipper til praktiske tips du kan bruke i dag.`,
      },
      {
        id: "hvordan-fungerer-seo",
        heading: "Hvordan fungerer søkemotorer?",
        content: `Google bruker komplekse algoritmer for å avgjøre hvilke nettsider som skal vises øverst i søkeresultatene. Forenklet ser Google på tre hovedfaktorer:

Relevans: Matcher innholdet på nettsiden det brukeren søker etter? Google analyserer tekst, overskrifter, bilder og strukturerte data for å forstå hva siden handler om.

Autoritet: Er nettsiden pålitelig? Google måler dette blant annet gjennom lenker fra andre nettsider, kundeomtaler og hvor lenge nettsiden har eksistert.

Brukeropplevelse: Er nettsiden rask, mobilvennlig og enkel å bruke? Google belønner nettsider som gir en god opplevelse.`,
      },
      {
        id: "lokal-seo",
        heading: "Lokal SEO: Bli synlig i ditt nærområde",
        content: `For de fleste små norske bedrifter er lokal SEO det viktigste å fokusere på. Lokal SEO handler om å bli synlig når folk i ditt område søker etter dine tjenester.

Google Bedriftsprofil (tidligere Google My Business) er grunnmuren i lokal SEO. Sørg for at profilen er fullstendig utfylt med korrekt navn, adresse, telefonnummer, åpningstider, bilder og beskrivelse. Bedrifter med komplett profil får opptil 70% flere besøk.

NAP-konsistens betyr at bedriftens navn, adresse og telefonnummer er identisk overalt — på nettsiden, Google Bedriftsprofil, Gule Sider, Proff.no og alle andre steder bedriften er nevnt.

Kundeomtaler på Google er en av de viktigste rangeringsfaktorene for lokal SEO. Be fornøyde kunder om å legge igjen en anmeldelse.

Lokale søkeord bør inkluderes naturlig på nettsiden. I stedet for bare «rørlegger», bruk «rørlegger i Oslo» eller «rørleggertjenester Grünerløkka».`,
      },
      {
        id: "teknisk-seo",
        heading: "Teknisk SEO: Det usynlige fundamentet",
        content: `Teknisk SEO handler om å sørge for at Google kan finne, lese og forstå nettsiden din. Her er de viktigste elementene:

Hastighet: Nettsiden bør laste på under 3 sekunder. Over 50% av besøkende forlater en side som tar for lang tid å laste. Bruk verktøy som Google PageSpeed Insights for å teste.

Mobilvennlighet: Google bruker «mobile-first indexing», som betyr at mobilversjonen av nettsiden er den viktigste for rangering. Sørg for at nettsiden fungerer perfekt på mobil.

SSL-sertifikat: Et SSL-sertifikat (https) er en rangeringsfaktor på Google og bygger tillit hos besøkende. Alle seriøse nettsider bør ha dette.

Strukturerte data: JSON-LD-markering hjelper Google å forstå innholdet på nettsiden — for eksempel at det er en lokal bedrift med spesifikke tjenester og priser.

Sitemap og robots.txt: Disse filene hjelper Google med å finne og indeksere alle sidene på nettsiden din effektivt.`,
      },
      {
        id: "innhold-seo",
        heading: "Innhold som rangerer: Skriv for mennesker og Google",
        content: `Godt innhold er kjernen i all SEO. Her er noen prinsipper for å skrive innhold som rangerer:

Svar på spørsmål kundene dine stiller. Bruk verktøy som Google Autosuggest og «Folk spør også»-boksen for å finne relevante spørsmål. Skriv artikler som gir tydelige, verdifulle svar.

Bruk søkeord naturlig. Plasser viktige søkeord i overskrifter (H1, H2), meta-beskrivelser, første avsnitt og bildetekster. Men skriv alltid for mennesker først — Google belønner naturlig, nyttig innhold.

Oppdater innholdet jevnlig. Google foretrekker ferske, oppdaterte nettsider. En nettside som ikke har blitt oppdatert på to år sender et signal om at bedriften kanskje ikke er aktiv.

Lengde og dybde: Detaljert, grundig innhold rangerer bedre enn overfladiske tekster. Mål på minst 800–1 500 ord for viktige sider.`,
      },
      {
        id: "seo-feil",
        heading: "Vanlige SEO-feil små bedrifter gjør",
        content: `Ignorerer lokal SEO: Mange små bedrifter fokuserer på å rangere nasjonalt, mens det største potensialet ligger i lokale søk. Start lokalt — det er lettere å rangere og gir mer relevante kunder.

Velger feil søkeord: Å prøve å rangere for brede termer som «rørlegger» er nesten umulig for en liten bedrift. Fokuser på spesifikke, lokale søkeord med lavere konkurranse.

Glemmer meta-beskrivelser: Meta-beskrivelsen er teksten som vises under tittelen i Google-søk. En god meta-beskrivelse øker klikkraten og bør inneholde en tydelig oppfordring.

Ingen strategi for innhold: En nettside uten jevnlig oppdatert innhold stagnerer i søkeresultatene. Planlegg en enkel innholdsstrategi med regelmessige oppdateringer.

Treg nettside: En nettside som bruker mer enn 3 sekunder på å laste mister over halvparten av besøkende. Optimaliser bilder, bruk hurtig hosting, og minimer unødvendig kode.`,
      },
      {
        id: "kom-i-gang",
        heading: "Kom i gang med SEO for din bedrift",
        content: `SEO trenger ikke være komplisert eller dyrt. Start med disse stegene:

Opprett og optimaliser Google Bedriftsprofil — dette er gratis og gir umiddelbar synlighet for lokale søk.

Sørg for at nettsiden er mobilvennlig og rask — dette er grunnleggende krav som påvirker både rangering og brukeropplevelse.

Identifiser 5–10 viktige søkeord for din bedrift og sørg for at de brukes naturlig på nettsiden.

Be fornøyde kunder om Google-anmeldelser — dette er en av de sterkeste signalene for lokal SEO.

Publiser nyttig innhold jevnlig — en blogg med tips, guider og svar på vanlige spørsmål bygger autoritet over tid.

Hos ZWEB Digitalbyrå leverer vi alle nettsider med komplett SEO-optimalisering som standard. Vi sørger for teknisk SEO, lokale søkeord, strukturerte data og rask ytelse — slik at du kan fokusere på det du gjør best: å drive bedriften din.`,
      },
    ],
  },
]

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
