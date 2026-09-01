import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "merge-pdf",
  hero: {
    eyebrow: "Sloučit PDF",
    h1: "Spoj PDF do jednoho dokumentu – přímo v prohlížeči.",
    highlight: "přímo v prohlížeči",
    lead: "Přidej dva nebo víc souborů PDF a spoj je do jednoho dokumentu. Před sloučením změň pořadí – tvé soubory zůstávají na tvém zařízení.",
  },
  privacyNote:
    "Tvé soubory se zpracovávají lokálně v prohlížeči a neodesílají se na naše servery. Nic neopouští tvé zařízení.",
  howTo: {
    heading: "Jak sloučit PDF",
    steps: [
      { title: "Přidat soubory", body: "Přetáhni dva nebo víc PDF do stránky, nebo klikni a vyber je ze svého zařízení." },
      { title: "Změnit pořadí (podle potřeby)", body: "Šipkami u každého řádku srovnej stránky do správného pořadí ještě před sloučením." },
      { title: "Sloučit", body: "Klikni na Sloučit PDF. Tvé soubory se spojí lokálně, přímo v prohlížeči." },
      { title: "Stáhnout výsledek", body: "Spojené PDF se stáhne automaticky. Po uložení ho přejmenuj." },
    ],
  },
  useCases: {
    heading: "Kdy je sloučení správná volba",
    items: [
      { title: "Poslat jeden soubor místo pěti", body: "Klienti, účetní i právníci dají přednost jednomu dokumentu před řadou příloh." },
      { title: "Spojit nabídku, smlouvu a fakturu", body: "Vytvoř jeden přehledný soubor z dokumentů vytvořených v různých nástrojích." },
      { title: "Spojit naskenované stránky", body: "Spoj skeny pasu, občanky nebo smlouvy pořízené po stránkách do jednoho dokumentu, který portál přijme." },
      { title: "Sestavit zprávu", body: "Spoj titulní stránku, hlavní PDF a přílohy do jednoho výsledného dokumentu." },
    ],
  },
  limitations: {
    heading: "Omezení",
    items: [
      { title: "PDF chráněná heslem", body: "Uzamčené soubory se v prohlížeči sloučit nedají. Nejdřív je odemkni v původní aplikaci, nebo použij mobilní aplikaci PDF Editor." },
      { title: "Velmi velké balíky souborů", body: "Prohlížečům dojde paměť dávno předtím, než nativním aplikacím. Pro 50 a víc souborů nebo obří skeny použij aplikaci PDF Editor." },
      { title: "Záložky a pole formulářů", body: "Některé vložené prvky (pole formulářů, poznámky) mohou při sloučení ztratit svou interaktivitu. Mobilní aplikace je zachová lépe." },
    ],
  },
  related: [
    { label: "Rozdělit PDF – opačný směr", path: "/split-pdf" },
    { label: "Otočit stránky PDF", path: "/rotate-pdf" },
    { label: "Komprimovat PDF", path: "/compress-pdf" },
    { label: "Změnit pořadí stránek PDF", path: "/reorder-pdf-pages" },
    { label: "Všechny bezplatné nástroje pro PDF", path: "/pdf-tools" },
    { label: "Návod: jak sloučit PDF soubory", path: "/guides/how-to-merge-pdf-files" },
  ],
  faq: [
    { q: "Odesílají se mé soubory na server?", a: "Ne. Sloučení probíhá celé v tvém prohlížeči. Tvé soubory tvé zařízení nikdy neopustí." },
    { q: "Existuje limit na počet PDF, které můžu sloučit?", a: "Pevný limit není, ale doporučujeme držet se pod 30 souborů nebo zhruba 500 MB celkem, aby prohlížeč zůstal responzivní." },
    { q: "Můžu sloučit PDF chráněná heslem?", a: "V prohlížeči ne. Nejdřív odstraň heslo, nebo použij mobilní aplikaci PDF Editor, která chráněné soubory podporuje." },
    { q: "Změní se původní formátování?", a: "Ne. Každá zdrojová stránka se zachová přesně. Mění se jen pořadí stránek a dokument, který je obaluje." },
    { q: "Můžu ho později zase rozdělit?", a: "Ano. Nástrojem Rozdělit PDF můžeš kterýkoli sloučený soubor znovu rozdělit na stránky nebo rozsahy." },
  ],
  appCta: {
    heading: "Potřebuješ nástroje pro PDF i na cestách?",
    sub: "PDF Editor pro iPhone a Android slučuje, podepisuje a skenuje PDF přímo z telefonu.",
  },
};

export default content;
