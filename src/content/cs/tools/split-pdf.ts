import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "split-pdf",
  hero: {
    eyebrow: "Rozdělit PDF",
    h1: "Extrahuj stránky z PDF – soukromě, přímo v prohlížeči.",
    highlight: "přímo v prohlížeči",
    lead: "Přidej PDF a vyber rozsah stránek, které chceš exportovat. Použij rozsahy jako 1-3,5,8-10 – tvůj soubor zůstává na tvém zařízení.",
  },
  privacyNote:
    "Tvůj soubor se zpracovává lokálně v prohlížeči a neodesílá se na naše servery. Nic neopouští tvé zařízení.",
  howTo: {
    heading: "Jak rozdělit PDF",
    steps: [
      { title: "Přidat soubor", body: "Přetáhni jedno PDF do stránky, nebo klikni a vyber ho." },
      { title: "Zadat rozsah stránek", body: "Napiš stránky a rozsahy oddělené čárkami. Příklad: 1-3,5,8-10." },
      { title: "Rozdělit", body: "Klikni na Extrahovat stránky. Lokálně sestavíme nové PDF jen s těmito stránkami." },
      { title: "Stáhnout výsledek", body: "Nové PDF se stáhne automaticky. Po uložení ho přejmenuj." },
    ],
  },
  useCases: {
    heading: "Kdy je rozdělení správná volba",
    items: [
      { title: "Poslat jen relevantní stránky", body: "Sdílej jen tu klauzuli smlouvy, na které záleží, ne celý dokument." },
      { title: "Rozdělit naskenovaný balík", body: "Rozlož sken s více dokumenty zpátky na jednotlivé soubory." },
      { title: "Vytáhnout jednu stránku ze zprávy", body: "Extrahuj jeden graf nebo tabulku a zbytek souboru nezveřejňuj." },
      { title: "Vytvořit čistší přílohu", body: "Před odesláním e-mailem odstraň titulní stránky, prázdné stránky nebo přílohy." },
    ],
  },
  limitations: {
    heading: "Omezení",
    items: [
      { title: "PDF chráněná heslem", body: "Uzamčené soubory se v prohlížeči rozdělit nedají. Nejdřív je odemkni, nebo použij aplikaci PDF Editor." },
      { title: "Velmi velké soubory", body: "Prohlížečům může dojít paměť u dokumentů nad pár set megabajtů." },
      { title: "Bez výstupu po jednotlivých rozsazích", body: "Tento nástroj exportuje jedno spojené PDF s vybranými stránkami. Pro víc výstupních souborů ho spusť dvakrát." },
    ],
  },
  related: [
    { label: "Sloučit PDF – opačný směr", path: "/merge-pdf" },
    { label: "Otočit stránky PDF", path: "/rotate-pdf" },
    { label: "PDF do obrázků", path: "/pdf-to-images" },
    { label: "Komprimovat PDF", path: "/compress-pdf" },
    { label: "Extrahovat stránky PDF", path: "/extract-pdf-pages" },
    { label: "Změnit pořadí stránek PDF", path: "/reorder-pdf-pages" },
    { label: "Všechny bezplatné nástroje pro PDF", path: "/pdf-tools" },
  ],
  faq: [
    { q: "Odesílají se mé soubory na server?", a: "Ne. Rozdělení probíhá celé v tvém prohlížeči; tvůj soubor tvé zařízení nikdy neopustí." },
    { q: "Jaká je syntaxe rozsahu stránek?", a: "Stránky a rozsahy oddělené čárkami. Příklad: 1-3,5,8-10 zachová stránky 1, 2, 3, 5, 8, 9 a 10." },
    { q: "Můžu rozdělit PDF chráněné heslem?", a: "V prohlížeči ne. Nejdřív odstraň heslo, nebo použij mobilní aplikaci PDF Editor." },
    { q: "Zachová výsledek původní kvalitu?", a: "Ano – stránky se kopírují bajt po bajtu. Žádné nové vykreslování, žádná ztráta kvality." },
  ],
  appCta: {
    heading: "Potřebuješ rozdělit PDF na cestách?",
    sub: "PDF Editor pro iPhone a Android rozděluje a slučuje PDF přímo z telefonu.",
  },
};

export default content;
