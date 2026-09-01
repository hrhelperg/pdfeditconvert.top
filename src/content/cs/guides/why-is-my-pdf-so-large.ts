import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-so-large",
  h1: "Proč je moje PDF tak velké? Příčiny a řešení",
  description:
    "Skutečné důvody, proč PDF nabobtná do obřích rozměrů – skeny, vložené fotky, písma a další – a správné řešení pro každý z nich, s bezplatnými nástroji v prohlížeči.",
  updated: "2026-05-23",
  intro: [
    "Desetistránkový dokument nemá co dělat na 60 MB, a přesto PDF pořád nabobtnávají. Než sáhneš po kompresoru, vyplatí se pochopit, proč soubor tak zvětšel – protože správná oprava závisí na příčině a špatná oprava dokáže rozdrtit dokument, který to vůbec nepotřeboval.",
    "Tento návod je krátká diagnóza. Projde obvyklé viníky nafouklého PDF, jak poznat, se kterým máš co do činění, a nejúčinnější reakci na každý z nich. Většina oprav používá bezplatné nástroje přímo na tomto webu, které všechny běží na tvém zařízení a nic se nikam nenahrává.",
    "Na konci budeš vědět, jestli tvůj soubor potřebuje kompresi, odstranění stránek, nebo prostě nový export ze zdroje – a přestaneš dokumenty komprimovat ze zvyku, i když to není potřeba.",
  ],
  steps: [
    {
      title: "Nejdřív podezírat naskenované stránky",
      body: "Skeny jsou příčina číslo jedna. Každá naskenovaná stránka je obrázek v plném rozlišení, takže pár z nich snadno předčí textový dokument. Pokud tvé PDF pochází ze skeneru nebo fotoaparátu telefonu, tohle je téměř jistě důvod.",
    },
    {
      title: "Zkontrolovat vložené fotky a grafiku",
      body: "Fotky, snímky obrazovky a grafy ve vysokém rozlišení vložené do dokumentu si nesou svá plná pixelová data. Report s tuctem velkých obrázků může být obrovský, i když je text krátký.",
    },
    {
      title: "Zvážit vložená písma a designové prvky",
      body: "Dokumenty, které vkládají víc celých rodin písem, nebo byly exportované z náročného designového softwaru, nesou navíc váhu v písmech a vektorových prvcích, kterou obsah viditelně nepotřebuje.",
    },
    {
      title: "Hledat pozůstalý nebo skrytý obsah",
      body: "Duplicitní stránky z ledabylého sloučení, prázdné vložené listy ze skeneru nebo historie revizí dokážou soubor vycpat. Odstranění nepotřebných stránek bývá někdy nejjednodušší cesta ke zmenšení.",
    },
    {
      title: "Použít odpovídající opravu",
      body: "Na skeny a fotky zkomprimuj nástrojem Zkomprimovat PDF. Na balast odstraň stránky nástrojem Extrahovat stránky z PDF. Na textový dokument, který je záhadně obrovský, ho znovu exportuj ze zdrojové aplikace.",
    },
    {
      title: "Znovu zkontrolovat velikost",
      body: "Ověř, že soubor dosáhl potřebné velikosti. Pokud je po kompresi souboru plného skenů pořád velký, dalším krokem je silnější úroveň nebo rozdělení dokumentu.",
    },
  ],
  tips: [
    "Přizpůsob opravu příčině: komprese pomůže souborům plným obrázků; u čistě textového PDF, které je velké z jiného důvodu, skoro nic nezmění.",
    "Čistě textový dokument, který je překvapivě velký, má obvykle vložená písma nebo skryté objekty – nový export ze zdrojové aplikace ho často zmenší čistěji než komprese.",
    "Skenování na 600 DPI, když by stačilo 200–300, je běžná a snadno odstranitelná příčina obřích souborů. U dokumentů, které budeš sdílet, sniž rozlišení skenu už u zdroje.",
    "Odstranění nepotřebných stránek dokáže zmenšit velikost, aniž by se dotklo kvality – vyplatí se to zkontrolovat ještě před kompresí.",
    "Nekomprimuj automaticky. Pokud je soubor už rozumně velký, komprese ho jen zbytečně zhorší bez skutečného přínosu.",
  ],
  mobileNote:
    "Skeny z telefonu jsou klasický viník – obrázky ve vysokém rozlišení uložené jako PDF. Aplikace PDF Editor ti umožní skenovat rovnou v rozumné kvalitě a komprimovat offline, takže dokumenty nenabobtnají už od začátku a snadno se zmenší, i když k tomu dojde.",
  faq: [
    {
      q: "Co nejčastěji dělá PDF velkým?",
      a: "Naskenované stránky a vložené fotky. Každá z nich je obrázek v plném rozlišení, takže hrstka z nich mnohonásobně předčí dlouhý textový dokument.",
    },
    {
      q: "Proč je moje čistě textové PDF pořád velké?",
      a: "Pravděpodobně vložená písma, skryté objekty nebo obsah zbylý po úpravách a sloučeních. Nový export ze zdrojové aplikace nebo odstranění nepotřebných stránek často pomůže víc než komprese.",
    },
    {
      q: "Zmenší komprese vždy můj soubor?",
      a: "Ne. Komprese cílí na obrazová data, takže se PDF plná skenů a fotek hodně zmenší, zatímco čistě textové nebo vektorové soubory se sotva změní. Pokud je textový soubor obří, příčina je jinde.",
    },
    {
      q: "Zmenší velikost odstranění stránek?",
      a: "Ano, zvlášť pokud jsou odstraněné stránky skeny nebo obrázky. Odstranění balastu nástrojem Extrahovat stránky z PDF dokáže zmenšit velikost, aniž by ovlivnilo kvalitu toho, co zůstane.",
    },
    {
      q: "Jak zabráním tomu, aby byly skeny tak velké?",
      a: "U dokumentů, které budeš sdílet, skenuj na 200–300 DPI místo 600, a soubory začnou mnohem menší. Aplikace PDF Editor ti umožní ovládat kvalitu skenu předem.",
    },
  ],
  related: [
    { label: "Zkomprimovat PDF — zmenši soubory plné obrázků", path: "/compress-pdf" },
    { label: "Extrahovat stránky z PDF — odstraň balast", path: "/extract-pdf-pages" },
    {
      label: "Jak zkomprimovat naskenované PDF",
      path: "/guides/how-to-compress-scanned-pdf",
    },
    {
      label: "Nejlepší nastavení komprese PDF",
      path: "/guides/best-pdf-compression-settings",
    },
  ],
  parentHub: { label: "Zkomprimovat PDF", path: "/compress-pdf" },
};

export default content;
