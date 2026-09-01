import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-tools-without-upload",
  h1: "Nejlepší PDF nástroje bez nahrávání (soubory zůstanou v zařízení)",
  description:
    "Když nechceš, aby PDF opustilo tvé zařízení, tohle jsou nástroje, které pracují lokálně. Komprese, slučování, převody – a soubory přitom zůstávají v počítači.",
  updated: "2026-05-29",
  intro: [
    "Existuje chvíle, kdy se chystáš zkomprimovat, sloučit nebo převést PDF a zaváháš. Soubor je citlivý – smlouva, bankovní výpis, naskenovaný doklad – a první tři výsledky vyhledávání chtějí, abys ho nahrál na jejich server. Riziko v každém jednotlivém případě působí malé, ale za rok běžné práce s dokumenty se sčítá.",
    "PDF nástroje bez nahrávání tohle riziko odstraní architekturou. Zpracování probíhá přímo na tvém zařízení – v záložce prohlížeče nebo v mobilní aplikaci – a soubor se nikdy nedostane na server třetí strany. Vlastnost soukromí je automatická, nezávisí na uvedených zásadách uchovávání.",
    "Tenhle návod uvádí výběr nástrojů bez nahrávání pro běžné úlohy s PDF. Sklon je k nástrojům v prohlížeči, protože fungují bez instalace čehokoli; mobilní aplikace doplňují situace, kde je telefon lepší zařízení pro danou práci.",
  ],
  steps: [
    {
      title: "Komprimuj bez nahrávání: Zkomprimovat PDF v prohlížeči",
      body: "Otevři stránku, přetáhni PDF, vyber úroveň komprese, stáhni. Kompresní algoritmus běží ve tvém prohlížeči; soubor se čte lokálně, zpracuje v paměti a zapíše zpátky jako nové stažení.",
    },
    {
      title: "Sluč bez nahrávání: Sloučit PDF v prohlížeči",
      body: "Přetáhni víc PDF, seřaď přetažením, stáhni spojený soubor. Slučování proběhne lokálně – tvoje soubory se spojí v paměti prohlížeče, nikdy se neposílají na server.",
    },
    {
      title: "Rozděl a extrahuj bez nahrávání",
      body: "Rozdělit PDF a Extrahovat stránky z PDF zvládnou operace na úrovni stránek přímo v prohlížeči. Zadej stránky, stáhni výsledek. Užitečné, když potřebuješ poslat jen konkrétní stránky citlivého dokumentu.",
    },
    {
      title: "Převáděj bez nahrávání",
      body: "PDF do Wordu, Word do PDF, Obrázek do PDF, PDF do obrázků – všechno běží v prohlížeči. Převod proběhne lokálně; převedený soubor se zapíše zpátky do tvých stažených.",
    },
    {
      title: "Podepisuj bez nahrávání",
      body: "Podepsat PDF nebo aplikace PDF Editor zachytí podpis přímo na tvém zařízení. Podepsaný soubor zůstává lokální, dokud se sám nerozhodneš ho sdílet. Žádná platforma na podepisování není zapojená.",
    },
    {
      title: "Ověř nenahrávání pomocí vývojářských nástrojů prohlížeče",
      body: "Otevři vývojářské nástroje, panel Síť, přetáhni tam soubor. Skutečný nástroj bez nahrávání neukáže žádný velký odchozí POST. Pokud ho uvidíš, nástroj i přes svoje označení nahrává.",
    },
  ],
  tips: [
    "Nástroje bez nahrávání fungují offline, jakmile se stránka jednou načte. Vyzkoušej si to – po načtení stránky vypni WiFi. Skutečně lokální nástroje pořád fungují.",
    "Citlivé soubory (finanční, právní, zdravotní) by měly jako výchozí volbu mít nástroje bez nahrávání. Snížení rizika je reálné, i kdyby bylo v jednom konkrétním případě malé.",
    "Nevěř tvrzením „neukládáme tvůj soubor“ od nahrávajících nástrojů bez ověření. Architektura je silnější než zásady.",
    "Mobilní aplikace, které zpracovávají lokálně, bývají na telefonech typickým výběrem bez nahrávání. Aplikace PDF Editor tomuhle vzoru na iOS i Androidu odpovídá.",
    "Nástroje v prohlížeči bez nahrávání se ověřují automaticky, protože jejich zpracování je vidět ve vývojářských nástrojích. Použij to při hodnocení nových nástrojů.",
  ],
  mobileNote:
    "Aplikace PDF Editor je iOS/Android obdoba vzoru bez nahrávání v prohlížeči – všechno zpracování probíhá přímo na zařízení, žádné nahrávání, žádný účet. Užitečné, když je telefon přirozeným zařízením pro daný postup (podepisování, skenování, rychlé úpravy).",
  faq: [
    {
      q: "Proč záleží na nenahrávání?",
      a: "Protože nahrávání vytváří kopie tvého souboru na serverech, které nemáš pod kontrolou. I se silnými zásadami se narušení serverů stávají. Nástroje bez nahrávání riziko odstraní architekturou.",
    },
    {
      q: "Dokážou nástroje bez nahrávání opravdu zkomprimovat velká PDF?",
      a: "Ano. Moderní prohlížeče pohodlně zvládnou stovky megabajtů. Zpracování odbaví WebAssembly téměř nativní rychlostí.",
    },
    {
      q: "Jak potvrdím, že nástroj nenahrává?",
      a: "Vývojářské nástroje prohlížeče, panel Síť, přetáhni tam soubor. Žádný velký odchozí požadavek = žádné nahrávání. Ověření je přímé a viditelné.",
    },
    {
      q: "Jsou nástroje bez nahrávání zdarma?",
      a: "Většinou ano. Ekonomika nástrojů bez nahrávání je jiná než u nástrojů založených na serveru – minimální náklady na hosting – takže mohou zůstat zdarma bez zpeněžování tvých dat.",
    },
    {
      q: "Co když postup nahrání vyžaduje?",
      a: "Některé specializované úlohy (přesné OCR na dlouhých souborech) pořád potřebují zpracování na serveru. Pro ty vyber placené nástroje s výslovnými závazky ohledně uchovávání a nejdřív soubor chraň heslem.",
    },
  ],
  related: [
    { label: "PDF nástroje — v prohlížeči, bez nahrávání", path: "/pdf-tools" },
    { label: "Nejlepší bezplatné PDF nástroje", path: "/guides/best-free-pdf-tools" },
    { label: "Bezplatné PDF nástroje v prohlížeči", path: "/guides/free-browser-based-pdf-tools" },
    { label: "Jak se vyhnout nahrávání citlivých dokumentů", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "PDF nástroje — bezplatně, v prohlížeči", path: "/pdf-tools" },
};

export default content;
