import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-consultants",
  h1: "Pracovní postupy s PDF pro konzultanty (nabídky, reporty, faktury)",
  description:
    "Rytmus konzultanta s PDF: nabídky, které uzavřou obchod, reporty, které se dobře čtou na telefonu, faktury odeslané během pár vteřin. Nástroje v prohlížeči, díky kterým to zůstane jednoduché.",
  updated: "2026-05-29",
  intro: [
    "Konzultantská práce stojí na třech dokumentech: nabídce, která získá zakázku, reportu, který ji doručí, a faktuře, jež uzavře kruh. Všechno ostatní – úvodní prezentace, poznámky z rozhovorů, průběžné aktualizace – je buď rozpracovaná verze jednoho z těchto tří, nebo pracovní materiál, který zakázku nikdy neopustí.",
    "Každý z těch tří má svoje vlastní zvyky ohledně PDF. Nabídka musí působit obsažně, aniž by byla těžkopádná; report se musí dobře číst na telefonu, kde ho většina klientů otevře poprvé; faktura musí odejít v den, kdy se práce dokončí. Nástroje na zvládnutí všech tří jsou převážně zdarma a pracovní postup se mezi jednotlivými zakázkami nemění.",
    "Tenhle návod popisuje ten rytmus – co každý dokument potřebuje, co dělá každý nástroj a kam mizí čas. Zpřesnění rytmu napříč rokem zakázek ušetří reálné hodiny.",
  ],
  steps: [
    {
      title: "Nabídka: stručná, na značku, rychlá",
      body: "Postav ji ve Wordu ze své šablony. Drž se pod 12 stránek – klienti spíš prolétnou očima, než studují. Export přes Word do PDF. Titulní strana, popis problému, přístup, výstupy, harmonogram, cena, podmínky. Zkomprimuj pod 5 MB. Odešli ještě týž den.",
    },
    {
      title: "Smlouva o zakázce: podepsané a uzamčené PDF",
      body: "Jakmile je nabídka schválená, pošli podepsanou smlouvu o zakázce pomocí nástroje Podepsat PDF. Klient ji protipodepíše a vrátí. Obě podepsané kopie ulož do /Klienti/[Jméno]/smlouvy/.",
    },
    {
      title: "Průběžné aktualizace: týdenní stav v PDF",
      body: "Krátké PDF (jedna stránka) posílané každý týden. Stav, blokující body, potřebná rozhodnutí. Bereme to jako cvičení, které tě nutí myslet jasně, ne jako samostatný výstup.",
    },
    {
      title: "Finální report: strukturovaný pro rychlé prolétnutí",
      body: "Shrnutí pro vedení na první stránce. Metodika a detaily vzadu. Očísluj každou stránku. Vlož písma. Použij velikost textu čitelnou na mobilu. Většina klientů čte na telefonu dřív než na notebooku.",
    },
    {
      title: "Faktura: ještě týž den po uzavření",
      body: "Faktura ze šablony, sekvenční číslo, Word do PDF, odeslaná do 24 hodin od uzavření zakázky. Pozdní faktura se skoro vždy promění v pozdní platbu.",
    },
    {
      title: "Archivuj zakázku",
      body: "Po zaplacení přesuň celou složku klienta do /Archiv/[Rok]/[Klient]/. Aktivní složka zůstává útlá, archiv je prohledatelný pro budoucí case studies a reference.",
    },
  ],
  tips: [
    "Nepřizpůsobuj šablonu pokaždé znovu. Přizpůsobuj obsah, strukturu drž pořád stejnou – klienti tě pak napříč zakázkami poznají.",
    "Sleduj každou odeslanou nabídku v tabulce s datem, klientem, částkou a výsledkem. Míra úspěšnosti ti řekne, jestli je čas nabídku doladit.",
    "Reporty, které se dobře čtou na mobilu, mají větší písmo a kratší odstavce než reporty stavěné pro tisk. Optimalizuj pro zařízení, na kterém klient čte jako první.",
    "Vodoznakem NÁVRH označuj rozpracované verze během zakázky, nikdy tu finální. Právě jeho absence dává dokumentu punc definitivnosti.",
    "Veď si složku /pripadove-studie/ s anonymizovanými příklady z minulých zakázek. V budoucích nabídkách jsou nejsilnějším důkazem.",
  ],
  mobileNote:
    "Konzultanti tráví hodně času na cestách. Aplikace PDF Editor zvládne z telefonu kompresi nabídky na poslední chvíli, podpis smlouvy o zakázce i odeslání faktury – hodí se, když se zakázka uzavírá ve vlaku a faktura musí odejít ještě do konce dne.",
  faq: [
    {
      q: "Jak dlouhá by měla být nabídka?",
      a: "U většiny zakázek pod 12 stránek. Klienti text prolétnou očima. Čím kratší nabídka, tím víc se skutečně přečte.",
    },
    {
      q: "Potřebuju podepsanou smlouvu o zakázce?",
      a: "Ano. Nabídka je obchodní dokument, smlouva o zakázce je skutečná smlouva. Bez ní práci nezačínej.",
    },
    {
      q: "Jak často mám posílat průběžné aktualizace?",
      a: "Týdně je výchozí volba. Denně u krátkých, intenzivních zakázek. Měsíčně u dlouhých a pomalejších. Na formátu záleží míň než na pravidelnosti.",
    },
    {
      q: "Mají být reporty graficky zpracované?",
      a: "Natolik, aby působily profesionálně, ne natolik, aby tě zpomalovaly. Čistá typografická šablona stárne lépe než přeplácaná.",
    },
    {
      q: "Kdy má odejít faktura?",
      a: "Ve stejný den, kdy se zakázka uzavře. Každý den zpoždění má tendenci posunout platbu na druhé straně o víc než jeden den.",
    },
  ],
  related: [
    { label: "PDF pro firmy — smlouvy a pracovní postupy", path: "/pdf-for-business" },
    { label: "Word do PDF — exporty pro nabídky a reporty", path: "/word-to-pdf" },
    { label: "Nejlepší pracovní postup s PDF pro freelancery", path: "/guides/best-pdf-workflow-for-freelancers" },
    { label: "Jak posílat smlouvy jako PDF", path: "/guides/how-to-send-contracts-as-pdf" },
  ],
  parentHub: { label: "PDF pro firmy — smlouvy a pracovní postupy", path: "/pdf-for-business" },
};

export default content;
