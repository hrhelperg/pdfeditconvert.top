import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-scanned-pdf",
  h1: "Kdy použít naskenované PDF (a kdy ne)",
  description:
    "Naskenované PDF řeší konkrétní problém – převod papíru do digitální podoby. Zároveň jsou větší, hůř prohledávatelná a hůř se upravují. Kdy se ten kompromis vyplatí.",
  updated: "2026-05-29",
  intro: [
    "Naskenované PDF řeší jeden konkrétní problém: proměnit papír v digitální soubor, který se dá sdílet, archivovat a prohlížet na jakémkoli zařízení. V tomhle jsou dobrá. Jsou ale taky větší než ekvivalentní psaná PDF, bez OCR neprohledávatelná, hůř se upravují a často mají nižší rozlišení než zdroj. Skenovat dokument, který už existuje digitálně, je skoro vždy špatný krok.",
    "Správné pravidlo je krátké. Skenuj papír, který nemá digitální zdroj. Neskenuj nic, co už máš jako dokument Wordu, screenshot nebo export do PDF. Pokušení vytisknout a pak naskenovat, aby se dokument „uzamkl“, je pochopitelné, ale obvykle zbytečné – přímý export do PDF udělá totéž líp.",
    "Tenhle návod projde, kdy skenovat a kdy ne. Většina toho je intuitivní, jakmile se to vysloví; problém je, že pokušení skenovat bývá silnější než skutečná potřeba.",
  ],
  steps: [
    {
      title: "Naskenované PDF používej, když je jediný zdroj papír",
      body: "Staré smlouvy, ručně psané poznámky, papírové účtenky, zaslané dokumenty, ručně podepsané formuláře. Cokoli, co existuje fyzicky a musí se stát digitálním. Naskenovat do PDF na telefonu nebo na plochém skeneru vytvoří čisté PDF.",
    },
    {
      title: "Neskenuj dokumenty, které máš digitálně",
      body: "Pokud máš dokument Wordu, zdrojové PDF nebo export, použij je. Vytisknout a pak naskenovat ztratí věrnost, zvětší soubor a odstraní prohledávatelnost. Žádný přínos to nemá.",
    },
    {
      title: "Neskenuj kvůli „uzamčení“ dokumentu",
      body: "Nový export ze zdroje do PDF obsah uzamkne. Skenování zabezpečení nepřidává; jen odstraní prohledávatelnost a kvalitu textu, aniž by soubor ztížilo pozměnit.",
    },
    {
      title: "Použij OCR, pokud skenuješ a potřebuješ prohledávatelnost",
      body: "OCR převede naskenované obrázky textu na prohledávatelný podkladový text. Bez toho jsou naskenovaná PDF obrázky slov – čitelná, ale neprohledávatelná.",
    },
    {
      title: "Před sdílením skeny zkomprimuj",
      body: "Naskenovaná PDF bývají ta největší, na jaká běžně narazíš. Zkomprimovat PDF v prohlížeči je dramaticky zmenší bez zjevné ztráty kvality, zvlášť u čistě textových dokumentů.",
    },
    {
      title: "Skenuj ve správném rozlišení",
      body: "200–300 DPI pro dokumenty, které se budou číst na obrazovce. 300 DPI pro cokoli, co by se mohlo tisknout. 600 DPI má kvalitu fotky a u textu zbytečně plýtvá místem.",
    },
  ],
  tips: [
    "Většina momentů „musím to naskenovat“ se ukáže jako „mám to digitálně a zapomněl jsem na to“. Nejdřív hledej zdroj.",
    "Přímý export do PDF je ve všem měřitelném čistší než naskenovaný výtisk: ostřejší, menší, prohledávatelný, upravitelný.",
    "Skeny z telefonu teď u běžných dokumentů díky detekci hran a úpravě kontrastu dosahují kvality plochého skeneru.",
    "Skeny po OCR jsou prohledávatelné, ale ne dokonalé jako text. Ber výstup OCR jako přibližný, ne jako autoritativní.",
    "Neskenuj čerstvý soubor, aby „vypadal oficiálně“. Formát je stejný; nikoho nezajímá, jestli byl naskenovaný nebo exportovaný.",
  ],
  mobileNote:
    "Telefony jsou pro běžné skenování ten správný nástroj – fotoaparát máš u sebe, detekce hran dává čisté výsledky a výsledné PDF je hned použitelné. Skenovací postup v aplikaci PDF Editor je na tohle stavěný, s vícestránkovým zachycením a úklidem přímo na zařízení.",
  faq: [
    {
      q: "Mám naskenovat dokument, který mám jako soubor Wordu?",
      a: "Ne. Exportuj ho přímo do PDF. Skenování ztrácí rozlišení, zvětšuje soubor a odstraňuje prohledávatelnost.",
    },
    {
      q: "Je naskenované PDF „oficiálnější“ než exportované?",
      a: "Ne. Obojí je PDF. Oficiálnost pramení z podpisů a obsahu, ne z toho, jestli vznikl skenováním.",
    },
    {
      q: "Kdy skenování skutečně pomůže?",
      a: "Když je zdroj papír. Zaslané smlouvy, ručně psané poznámky, papírové formuláře s rukopisem. Skenování je jediný způsob, jak tohle digitalizovat.",
    },
    {
      q: "Mám na každý sken pouštět OCR?",
      a: "Ano, pokud to tvůj nástroj podporuje. Prohledávatelné skeny jsou dlouhodobě mnohem užitečnější a OCR nemění viditelný vzhled.",
    },
    {
      q: "Jak velké má naskenované PDF být?",
      a: "Pár set kilobajtů až pár megabajtů u typických dokumentů. Skeny o dost větší než to se vyplatí zkomprimovat.",
    },
  ],
  related: [
    { label: "Skenovat do PDF — skenování fotoaparátem telefonu", path: "/scan-to-pdf" },
    { label: "Jak naskenovat dokumenty do PDF telefonem", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Jak zlepšit kvalitu naskenovaného PDF", path: "/guides/how-to-fix-scanned-pdf-quality" },
    { label: "Upravitelné PDF vs PDF jako obrázek", path: "/guides/editable-pdf-vs-flat-pdf" },
  ],
  parentHub: { label: "Skenovat do PDF — skenování fotoaparátem telefonu", path: "/scan-to-pdf" },
};

export default content;
