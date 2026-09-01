import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-iphone",
  h1: "Jak zmenšit PDF na iPhonu",
  description:
    "Zmenši PDF na iPhonu pomocí nástroje v prohlížeči nebo aplikace PDF Editor. Proč jsou skeny z iPhonu tak velké a jak je dostat pod limity pro odesílání.",
  updated: "2026-05-23",
  intro: [
    "iPhony tvoří nádherné, obrovské soubory. Stejný vysoce rozlišený fotoaparát a skener, díky kterým dokumenty vypadají ostře, dělá zároveň PDF objemná – pár naskenovaných stránek dokáže přesáhnout limit pro e-mail dřív, než přidáš cokoli dalšího. Takže „zmenši mi tohle PDF na iPhonu“ je velmi běžná, velmi konkrétní potřeba.",
    "Tento návod ukazuje dvě spolehlivé cesty, které obě fungují na iPhonu. První je bezplatný nástroj Zkomprimovat PDF v Safari, který běží na tvém zařízení a nic se nikam nenahrává. Druhá je aplikace PDF Editor, která komprimuje offline a zvládá i soubory chráněné heslem, se kterými si prohlížeč neporadí.",
    "Ať zvolíš kteroukoli, cíl je stejný: soubor dost malý na e-mail nebo nahrání, který se přitom čte čistě – aniž bys dokument musel poslat na cizí server, aby se to podařilo.",
  ],
  steps: [
    {
      title: "Najít PDF v Souborech",
      body: "Vyhledej dokument v aplikaci Soubory nebo kdekoli jinde, kde žije – sken, který jsi pořídil, uloženou přílohu, převedenou sadu fotek.",
    },
    {
      title: "Otevřít nástroj Zkomprimovat PDF v Safari",
      body: "Přejdi na nástroj Zkomprimovat PDF. Běží v prohlížeči na tvém iPhonu a soubor zpracuje na zařízení – nic se nikam nenahrává.",
    },
    {
      title: "Přidat PDF a zvolit úroveň",
      body: "Klepnutím vyber soubor, pak zvol úroveň. Doporučená se hodí pro většinu případů; Silnou zvol, jen pokud ho potřebuješ ještě menší.",
    },
    {
      title: "Zkomprimovat a zkontrolovat velikost",
      body: "Spusť to a přečti si velikost před a po. Skeny z iPhonu na jeden zátah obvykle hodně zmenší, protože jsou plné obrázkových dat.",
    },
    {
      title: "Uložit zpátky do Souborů nebo sdílet",
      body: "Ikonou sdílení ulož menší PDF do Souborů nebo ho rovnou pošli dál. Originál si ponech, dokud neověříš, že se výsledek čte dobře.",
    },
    {
      title: "Pro chráněné soubory použít aplikaci",
      body: "Prohlížeč neumí komprimovat PDF chráněná heslem. Aplikace PDF Editor to zvládá offline a je rychlejší i pro soubory, které komprimuješ často.",
    },
  ],
  tips: [
    "Skeny z iPhonu jsou velké, protože jsou to obrázky ve vysokém rozlišení. Právě proto se ale i skvěle komprimují – úspora je u těchhle souborů největší.",
    "Focení dokumentů ve formátu „Nejvíce kompatibilní“ (Nastavení → Fotoaparát → Formáty) vytváří JPG, které se komprimují a sdílí snáz než HEIC.",
    "Komprese stránky zploští na obrázky, takže menší kopie nebude mít vybíratelný text. Pokud z ní potřebuješ vyhledávat nebo kopírovat, ponech si originál.",
    "Paměť prohlížeče na telefonu je omezenější než na notebooku. Pro velmi rozsáhlá PDF je spolehlivější cestou aplikace PDF Editor.",
    "Komprimovaný soubor vždy ulož pod novým názvem, aby zůstal ostrý originál na zařízení nedotčený.",
  ],
  mobileNote:
    "Tohle je úloha primárně pro telefon a aplikace PDF Editor je na ni stavěná: komprese offline, žádné nahrávání, podpora chráněných souborů a přímé předání do Mailu, Zpráv nebo nabídky sdílení. U dokumentů, které zmenšuješ pravidelně, je pokaždé rychlejší než prohlížeč.",
  faq: [
    {
      q: "Proč jsou moje PDF z iPhonu tak velká?",
      a: "Skeny a fotky z iPhonu jsou obrázky ve vysokém rozlišení a PDF sestavené z několika z nich je v podstatě hromada velkých obrázků. Proto přesahují limity pro e-mail – a proto se tak účinně komprimují.",
    },
    {
      q: "Můžu zkomprimovat PDF na iPhonu bez aplikace?",
      a: "Ano. Nástroj Zkomprimovat PDF běží v Safari a soubor zpracuje na tvém zařízení, takže PDF zmenšíš bez instalace čehokoli.",
    },
    {
      q: "Nahrává se můj dokument, když použiju nástroj v prohlížeči?",
      a: "Ne. Zpracovává se lokálně na tvém iPhonu. Nic se neposílá na server, což je důležité u osobních nebo finančních dokumentů.",
    },
    {
      q: "Zůstane text i pak vybíratelný?",
      a: "Ne. Komprese stránky znovu vykreslí jako obrázky, čímž zmizí vybíratelná textová vrstva. Pokud potřebuješ prohledávatelný text, ponech si originál.",
    },
    {
      q: "Co PDF chráněná heslem?",
      a: "Ta prohlížeč zpracovat neumí. Použij aplikaci PDF Editor, která chráněné soubory otevře i zkomprimuje offline.",
    },
  ],
  related: [
    { label: "Zkomprimovat PDF — zmenši přímo v prohlížeči", path: "/compress-pdf" },
    {
      label: "Jak zmenšit PDF na Androidu",
      path: "/guides/how-to-make-pdf-smaller-on-android",
    },
    {
      label: "Jak zmenšit velikost PDF pro e-mail",
      path: "/guides/how-to-reduce-pdf-file-size-for-email",
    },
    {
      label: "Jak upravit PDF na iPhonu",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
  ],
  parentHub: { label: "Zkomprimovat PDF", path: "/compress-pdf" },
};

export default content;
