import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-private-pdf-tools",
  h1: "Nejlepší soukromé PDF nástroje (když na důvěrnosti opravdu záleží)",
  description:
    "Pro smlouvy, finanční záznamy a další citlivá PDF jsou tohle nástroje, které respektují soukromí už svou konstrukcí – ne jen prohlášením v zásadách.",
  updated: "2026-05-29",
  intro: [
    "Slovo „soukromý“ se u PDF nástrojů používá podobně jako „přírodní“ u potravin – velkoryse a často nepřesně. Řada nástrojů si soukromí přisvojuje ve svém textu, zatímco každý soubor nahraje na svůj server a tam ho zpracuje. Soukromí je pak založené na zásadách: „tvůj soubor neuchováváme déle než hodinu“. To je lepší než nic, ale záleží na tom, jestli zásady vydrží, což záleží na tom, jestli vydrží firma – a to pro skutečně citlivý materiál není silná záruka.",
    "Soukromé PDF nástroje – ty opravdu soukromé – jsou soukromé svou konstrukcí. Tvůj soubor se k jejich serveru vůbec nedostane. Zpracování probíhá v tvém prohlížeči nebo v lokální aplikaci na telefonu. Soukromí není zásada; je to strukturální vlastnost. To je standard, podle kterého má smysl nástroje posuzovat, když na souboru záleží.",
    "Tenhle návod uvádí soukromý výběr pro běžné úlohy s PDF. Architektura je laťka; zbytek se od ní odvíjí.",
  ],
  steps: [
    {
      title: "Pro kompresi citlivých souborů: Zkomprimovat PDF v prohlížeči",
      body: "Zkomprimovat PDF v prohlížeči zmenší soubor lokálně. Citlivé bankovní výpisy, naskenované doklady a smlouvy se zkomprimují, aniž by kdy opustily tvoje zařízení. Ověř přes vývojářské nástroje – žádný odchozí POST při přidání souboru.",
    },
    {
      title: "Pro slučování citlivých souborů: Sloučit PDF v prohlížeči",
      body: "Sloučit PDF spojí smlouvy, přílohy nebo podepsané balíky lokálně. Sloučený soubor vzniká v paměti prohlížeče; jednotlivé části zůstávají po celou dobu na tvém počítači.",
    },
    {
      title: "Pro extrakci konkrétních stránek ke sdílení: Extrahovat stránky z PDF",
      body: "Pokud potřebuješ poslat jen konkrétní stránky citlivého dokumentu, Extrahovat stránky z PDF vyrobí nové PDF jen s nimi – lokálně, v tvém prohlížeči.",
    },
    {
      title: "Pro odstranění stránek ve stylu začernění: Extrahovat nebo Přeřadit",
      body: "Skutečné začernění textu je specializovaná úloha; pokud odstraňuješ celé stránky nebo je nahrazuješ, nástroje na úrovni stránek v prohlížeči tuhle práci odvedou, aniž by obsah vystavily jakémukoli serveru.",
    },
    {
      title: "Pro podepisování smluv: Podepsat PDF nebo aplikace PDF Editor",
      body: "Podepsat PDF v prohlížeči nebo aplikace PDF Editor na telefonu drží smlouvu na tvém zařízení po celou dobu podepisování. Dokument nevidí žádná platforma na elektronické podepisování.",
    },
    {
      title: "Pro soukromé archivy: šifrované lokální úložiště",
      body: "Po zpracování archivuj citlivá PDF na šifrovaném úložišti – FileVault, BitLocker, šifrované externí disky, nebo cloudová záloha se zero-knowledge šifrováním. Lokální zpracování nic nezmění, pokud je archivní úložiště v čitelném textu.",
    },
  ],
  tips: [
    "Soukromí architekturou vyhrává nad soukromím podle zásad. Architektura se dá ověřit; zásady závisí na důvěře.",
    "Panel Síť ve vývojářských nástrojích je ten ověřovací krok. Pokud si to nedokážeš ověřit, nevěř tomu.",
    "Neakceptuj registraci u skutečně soukromých nástrojů – účet je datový bod, který by nástroj jinak neměl.",
    "Soukromé mobilní nástroje by měly fungovat offline. Pokud „soukromá“ aplikace vyžaduje neustálé připojení k síti, ptej se proč.",
    "Kombinuj soukromé nástroje se soukromými kanály. Lokální zpracování a pak poslání výsledku nešifrovaným e-mailem popírá celý smysl.",
  ],
  mobileNote:
    "Na mobilu je aplikace PDF Editor tou soukromou volbou – veškeré zpracování probíhá přímo na zařízení, žádné nahrávání, žádný účet. Užitečné pro smlouvy a citlivé skeny, kde je telefon přirozeným zařízením, ale soubor by neměl projít přes cizí server.",
  faq: [
    {
      q: "Co dělá PDF nástroj skutečně soukromým?",
      a: "Architektura – soubor se nedostane na server nástroje. Uváděné zásady uchovávání jsou slabší, protože závisí na tom, jestli firma svým závazkům dostojí.",
    },
    {
      q: "Jsou placené „soukromé“ nástroje lepší než bezplatné soukromé?",
      a: "Ne nutně. Bezplatné nástroje, které běží v tvém prohlížeči, mají stejné architektonické soukromí jako placené nástroje bez nahrávání. Placené nástroje vyhrávají u pokročilých funkcí (regulované postupy, e-discovery), ne u základního soukromí.",
    },
    {
      q: "Můžu si soukromí ověřit sám?",
      a: "Ano – vývojářské nástroje prohlížeče, panel Síť. Přidej soubor, sleduj odchozí požadavky. Žádné viditelné nahrání znamená, že se žádné nahrání neuskutečnilo.",
    },
    {
      q: "Co end-to-end šifrování?",
      a: "Užitečné pro sdílení, nepomůže při zpracování. Pokud nástroj potřebuje přečíst tvůj soubor, aby ho zpracoval, šifrování při přenosu na tom nic nemění – server obsah stejně vidí.",
    },
    {
      q: "Jaký je nejsilnější postoj k soukromí pro citlivá PDF?",
      a: "Zpracovávej lokálně nástroji v prohlížeči nebo v lokální aplikaci. Archivuj na šifrovaném úložišti. Sdílej přes end-to-end šifrované kanály. Každá vrstva pokrývá jinou plochu útoku.",
    },
  ],
  related: [
    { label: "Zabezpečení PDF — heslo a šifrování", path: "/pdf-security" },
    { label: "PDF nástroje — v prohlížeči, bez nahrávání", path: "/pdf-tools" },
    { label: "PDF nástroje s důrazem na soukromí", path: "/guides/privacy-first-pdf-tools" },
    { label: "Jak chránit citlivé PDF soubory", path: "/guides/how-to-protect-sensitive-pdf-files" },
  ],
  parentHub: { label: "PDF nástroje — bezplatně, v prohlížeči", path: "/pdf-tools" },
};

export default content;
