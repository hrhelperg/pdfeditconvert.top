import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-invoices-as-pdf",
  h1: "Jak spravovat faktury jako PDF (vystavit, sledovat, archivovat)",
  description:
    "Postup pro fakturaci v PDF, který nepotřebuje účetní software: vytvoření, číslování, odeslání, sledování a archivace – jen s bezplatnými nástroji v prohlížeči a přehledným systémem složek.",
  updated: "2026-05-29",
  intro: [
    "Většina malých firem ve skutečnosti nepotřebuje účetní software na faktury. Potřebuje čistý způsob, jak vytvořit PDF, konzistentně ho očíslovat, odeslat, sledovat, kdy se zaplatí, a archivovat pro daňové přiznání. Práce je mechanická, nástroje jsou jednoduché; chaos vzniká jen tehdy, když se vynechá konvence.",
    "Postup fakturace má čtyři části: vystavení (odkud PDF pochází), sledování (kam si zapisuješ, co bylo odesláno), platba (kdy dorazí) a archiv (kde žijí zaplacené kopie). Každá část je krátká a žádná z nich nevyžaduje předplatné, pokud o něj nestojíš.",
    "Tenhle návod projde postup tak, jak ho může skutečně provozovat freelancer nebo malý tým – s PDF generovaným ze šablony Word, číslováním, které máš pod kontrolou, a archivem, který přežije daňovou kontrolu. Není to jediná možná cesta; je to ta, která se nerozbije.",
  ],
  steps: [
    {
      title: "Fakturu vytvoř ve Wordu nebo Pages ze šablony",
      body: "Šablona faktury ve Wordu ti dá osvědčené rozvržení se zástupnými symboly pro klienta, datum, položky a celkovou částku. Vyplň proměnné a exportuj do PDF nástrojem Word do PDF. Vyhni se úpravě konečné částky kdekoli jinde než ve zdroji.",
    },
    {
      title: "Používej postupné číslování faktur",
      body: "FA-2026-001, FA-2026-002 a tak dál. Resetuj ročně. Čísla musí být jedinečná a bez mezer – daňové úřady si všímají chybějících čísel. Veď si průběžný seznam v tabulce nebo textovém souboru.",
    },
    {
      title: "Ulož s předvídatelným názvem souboru",
      body: "JmenoKlienta_Faktura_FA-2026-001_2026-05-29.pdf. Číslo faktury v názvu souboru odpovídá číslu na dokumentu. Klientská složka usnadní dohledání podle jednotlivých klientů.",
    },
    {
      title: "Odešli a hned zaznamenej",
      body: "Pošli PDF e-mailem s krátkou průvodní zprávou a hned zaznamenej odeslání do svého sledovacího přehledu. Datum odeslání, číslo faktury, částka, datum splatnosti. Chvíle, kdy to nezaznamenáš, je přesně ta chvíle, kdy na to zapomeneš.",
    },
    {
      title: "Jakmile platba dorazí, otiskni vodoznak ZAPLACENO",
      body: "Přidat vodoznak do PDF otiskne na soubor ZAPLACENO s datem. Zaplacená kopie jde do /faktury/zaplacene/; nezaplacená zůstává v /faktury/neuhrazene/. Vizuální stav předčí řádek v tabulce.",
    },
    {
      title: "Archivuj podle roku",
      body: "Na konci roku přesuň /faktury/zaplacene/ do /Archiv/Faktury/2026/. Uchovávej minimálně sedm let (podle jurisdikce se to liší). Archiv by měl být srozumitelný sám o sobě i za pět let, až zapomeneš původní logiku třídění.",
    },
  ],
  tips: [
    "Nikdy neuprav odeslanou fakturu. Pokud je částka špatně, vystav dobropis nebo novou fakturu – auditní stopa musí zůstat neporušená.",
    "Sesoulaď číslo faktury v názvu souboru, na dokumentu a v řádku svého sledovacího přehledu. Tři místa, která říkají totéž.",
    "PDF/A je archivační formát, který některé daňové úřady preferují. Pokud podléháš takové jurisdikci, celoroční sadu znovu exportuj do PDF/A.",
    "Faktury před archivací zkomprimuj – jsou to jen texty, ale archivy se v čase kupí. Komprimované kopie v průběhu let ušetří skutečné místo na disku.",
    "Faktury nechraň heslem, pokud to klient výslovně nevyžaduje. Zbytečné tření na dokumentu, který obsahuje jen čísla a jména.",
  ],
  mobileNote:
    "Faktury stále víc vznikají přímo na telefonu – rychlé odeslání z kavárny hned po dokončení zakázky. Aplikace PDF Editor ti umožní vyplnit šablonu, otisknout číslo faktury a poslat PDF e-mailem z mobilu, s kopií uloženou lokálně pro tvoje záznamy.",
  faq: [
    {
      q: "Potřebuju fakturační software?",
      a: "Při nízkém objemu ne. Šablona Word, sledovací přehled a systém složek zvládnou desítky faktur měsíčně bez problémů. Software se vyplatí, když potřebuješ opakovanou fakturaci, víc měn nebo velký počet klientů.",
    },
    {
      q: "Jaký formát čísla faktury bych měl použít?",
      a: "Postupný, bez mezer, ideálně s rokem na začátku. FA-2026-001 je čitelné na první pohled a dobře obstojí i při daňové kontrole.",
    },
    {
      q: "Jak dlouho bych měl faktury uchovávat?",
      a: "Podle jurisdikce se to liší; sedm let je bezpečná výchozí hodnota. Skutečný požadavek si ověř podle pravidel své země.",
    },
    {
      q: "Mám posílat faktury jako Word, nebo jako PDF?",
      a: "Vždycky PDF. PDF uzamkne formát i částku; dokument Word láká i dobře míněné klienty, aby něco „opravili“.",
    },
    {
      q: "Co faktury s DPH nebo jinou daní z prodeje?",
      a: "Některé jurisdikce vyžadují konkrétní rozvržení, postupné číslování a archivaci v původním formátu. Dodržuj místní pravidla; popsaný postup je zvládne bez problémů.",
    },
  ],
  related: [
    { label: "PDF pro firmy – smlouvy a postupy", path: "/pdf-for-business" },
    { label: "Word do PDF – čisté exporty faktur", path: "/word-to-pdf" },
    { label: "Přidat vodoznak do PDF – otiskni ZAPLACENO na uzavřené faktury", path: "/add-watermark-to-pdf" },
    { label: "Pracovní postupy s PDF pro malé firmy", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "PDF pro firmy – smlouvy a postupy", path: "/pdf-for-business" },
};

export default content;
