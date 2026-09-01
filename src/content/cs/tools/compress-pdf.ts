import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "compress-pdf",
  hero: {
    eyebrow: "Zkomprimovat PDF",
    h1: "Zmenši PDF – přímo v prohlížeči.",
    highlight: "přímo v prohlížeči",
    lead: "Zmenši PDF, aby se vešel do limitu e-mailové přílohy i nahrávacích formulářů. Vyber úroveň komprese, podívej se, o kolik se soubor zmenšil, a stáhni výsledek – tvůj soubor neopustí tvé zařízení.",
  },
  privacyNote:
    "Tvůj soubor se zpracovává lokálně v prohlížeči a neodesílá se na naše servery. Nic neopouští tvé zařízení.",
  howTo: {
    heading: "Jak zkomprimovat PDF",
    steps: [
      { title: "Přidat soubor", body: "Přetáhni PDF do stránky, nebo klikni a vyber ho ze svého zařízení." },
      { title: "Vybrat úroveň komprese", body: "Nízká zachová nejvíc detailů; Doporučená vyváží velikost a kvalitu; Silná dá nejmenší soubor." },
      { title: "Zkomprimovat", body: "Klikni na Zkomprimovat PDF. Stránky se lokálně, přímo v prohlížeči, znovu vykreslí a zakódují." },
      { title: "Stáhnout výsledek", body: "Uvidíš velikost před kompresí a po ní i procento zmenšení, pak stáhni menší soubor." },
    ],
  },
  useCases: {
    heading: "Kdy komprese pomůže nejvíc",
    items: [
      { title: "Limity velikosti e-mailu", body: "Vejdi se s naskenovanou smlouvou nebo brožurou pod limit přílohy 10 MB nebo 25 MB." },
      { title: "Formuláře a nahrávací portály", body: "Portály úřadů a personálních oddělení často odmítají soubory nad pár megabajtů – tohle to vyřeší." },
      { title: "Naskenované dokumenty", body: "Skeny z telefonu bývají obrovské. PDF plné obrázků se se silnou kompresí zmenší dramaticky." },
      { title: "Úložiště a sdílení", body: "Udržuj archivy malé a nech odkazy stahovat se příjemci rychleji." },
    ],
  },
  limitations: {
    heading: "Poctivá omezení",
    items: [
      { title: "Text se stane obrázkem", body: "Komprese znovu vykreslí každou stránku jako obrázek, takže text ve výsledku už není vybratelný ani prohledávatelný. Pokud to potřebuješ, ponech si originál." },
      { title: "Čistě textová PDF se zmenší málo", body: "Pokud je PDF už převážně text nebo vektorová grafika, není moc co komprimovat – v takovém případě necháme tvůj originál beze změny, místo abychom ti vrátili větší soubor." },
      { title: "Velmi velká nebo uzamčená PDF", body: "Prohlížečům dojde paměť dávno předtím, než nativním aplikacím. PDF chráněná heslem se v prohlížeči zpracovat nedají – použij mobilní aplikaci PDF Editor." },
    ],
  },
  related: [
    { label: "Sloučit PDF", path: "/merge-pdf" },
    { label: "Rozdělit PDF", path: "/split-pdf" },
    { label: "Extrahovat stránky PDF", path: "/extract-pdf-pages" },
    { label: "Všechny bezplatné nástroje pro PDF", path: "/pdf-tools" },
    { label: "Návod: jak zkomprimovat PDF", path: "/guides/how-to-compress-pdf" },
  ],
  faq: [
    { q: "Odesílá se můj soubor na server?", a: "Ne. Komprese běží celá v tvém prohlížeči a využívá procesor tvého zařízení. Tvůj soubor tvé zařízení nikdy neopustí." },
    { q: "O kolik se moje PDF zmenší?", a: "Záleží na obsahu. Naskenovaná PDF a PDF plná obrázků se často zmenší o 50–90 %. Čistě textová PDF se nemusí zmenšit vůbec – v tom případě necháme tvůj originál." },
    { q: "Zhorší se kvalita?", a: "Ano, trochu – jde o ztrátovou kompresi. Nižší úrovně zachovají víc detailů. Nikdy netvrdíme „žádná ztráta kvality“ – vyber úroveň, která ti pro daný účel vyhovuje." },
    { q: "Proč po kompresi není text vybratelný?", a: "Aby se v prohlížeči dosáhlo skutečné úspory místa, každá stránka se převede na obrázek. Pokud potřebuješ vybratelný text, ponech si originál nebo použij mírnější úroveň." },
    { q: "Můžu komprimovat PDF chráněné heslem?", a: "V prohlížeči ne. Nejdřív odstraň heslo, nebo použij mobilní aplikaci PDF Editor, která chráněné soubory podporuje." },
  ],
  appCta: {
    heading: "Potřebuješ nástroje pro PDF i na cestách?",
    sub: "PDF Editor pro iPhone a Android komprimuje, podepisuje a sdílí PDF přímo z telefonu.",
  },
};

export default content;
