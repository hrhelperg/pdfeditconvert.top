import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-small-business",
  h1: "Pracovní postupy s PDF pro malé firmy (nabídky, smlouvy, evidence)",
  description:
    "Jak malá firma řídí tok dokumentů v PDF – nabídka ven, smlouva zpátky, evidence archivovaná – bez nákupu balíčku předplatných.",
  updated: "2026-05-29",
  intro: [
    "Malá firma zpracuje víc PDF, než by majitel čekal. Odcházejí nabídky, vracejí se podepsané smlouvy, odesílají se faktury, archivují se výpisy, hromadí se daňové doklady. Každá z těchto věcí je malý kousek práce a každá dokáže sežrat čas, pokud pracovní postup není promyšlený.",
    "Drahé balíčky na PDF se vyplatí, když máš vlastní právní oddělení. Pro pětičlennou firmu s pár desítkami dokumentů týdně zvládnou stejnou práci bezplatné nástroje v prohlížeči a jasná konvence – bez další položky v předplatném. Trik je napsat si postup jednou a pak se ho držet.",
    "Tenhle návod popisuje postup pro čtyři typy dokumentů, na kterých malé firmy s PDF stojí nejvíc: nabídky, smlouvy, faktury a evidenci. Každá část je krátká, konkrétní a nic z toho nestojí peníze.",
  ],
  steps: [
    {
      title: "Nabídky: šablona Wordu → Word do PDF → odeslání na značku",
      body: "Postav nabídku ze šablony Wordu, doplň údaje o klientovi a jednotlivé položky, exportuj do PDF pomocí nástroje Word do PDF. Titulní stránku označ svou značkou, soubor pojmenuj JménoKlienta_Nabidka_RRRR-MM-DD.pdf a odešli.",
    },
    {
      title: "Smlouvy: PDF → Podepsat PDF → uzamknout → protipodpis",
      body: "Dolaď text ve zdroji, exportuj do PDF, podepiš pomocí nástroje Podepsat PDF, pokud to tvůj nástroj umožňuje, uzamkni ho a pošli k protipodpisu. Ulož si kopii s jedním podpisem i finální, oboustranně podepsanou verzi.",
    },
    {
      title: "Faktury: sekvenční číslování, vodoznak po zaplacení",
      body: "FAK-2026-001, FAK-2026-002. Sleduj je v tabulce. Jakmile platba dorazí, vodoznak ZAPLACENO orazí soubor pomocí nástroje Přidat vodoznak do PDF a soubor se přesune ze /neuhrazene/ do /zaplacene/.",
    },
    {
      title: "Evidence: přijmi, zkomprimuj, archivuj podle roku",
      body: "Bankovní výpisy, faktury od dodavatelů, účtenky za výdaje. Přijmi je jako PDF, zkomprimuj kvůli archivaci a ulož podle roku do /Evidence/2026/. Uchovávej minimálně sedm let.",
    },
    {
      title: "Používej sdílenou strukturu složek",
      body: "Složky nejvyšší úrovně pro /Klienti/, /Evidence/, /Interni/, /Sablony/, /Archiv/. Maximálně dvě úrovně vnoření. Celý tým používá stejné rozvržení.",
    },
    {
      title: "Provádej měsíční kontrolu",
      body: "Jednou za měsíc projdi složku neuhrazených faktur /neuhrazene/ a aktivní projekty klientů. Nad 30 dní upomeň, nad 90 dní eskaluj. Složka sama je tvůj seznam úkolů.",
    },
  ],
  tips: [
    "Nevymýšlej šablonu pokaždé znovu. Vytvoř jednu šablonu pro nabídku, smlouvu a fakturu a používej je opakovaně.",
    "Podepisuj skutečným podpisem, ne napsaným jménem. Nakreslený podpis obstojí lépe při sporech.",
    "Komprimuj každý dokument ve chvíli odeslání – odchozí soubory by měly být vždy menší než interní originály.",
    "Nezasílej klientům živé soubory Wordu. Jakmile je jednou v PDF, verze je uzamčená.",
    "Prováděj čtvrtletní úklid archivu. Uzavřené projekty patří do /Archiv/, aktivní složky zůstávají krátké a přehledné.",
  ],
  mobileNote:
    "Majitelé malých firem odbaví polovinu práce s PDF na telefonu – podepíšou smlouvu mezi schůzkami, odešlou fakturu přímo ze zakázky, zaevidují účtenku během dne. Aplikace PDF Editor zvládá všechny čtyři typy dokumentů z mobilu, offline, takže práce nečeká na čas u počítače.",
  faq: [
    {
      q: "Potřebuju na fakturaci účetní software?",
      a: "Při nízkém objemu ne. Šablona Wordu, sledovací tabulka a systém složek fungují bez problémů pro desítky faktur měsíčně. Software se vyplatí, až budeš růst.",
    },
    {
      q: "Jak sleduju, které smlouvy jsou ještě neuzavřené?",
      a: "Struktura složek: /Klienti/Aktivni/[Jméno]/smlouvy/odeslane/ a .../podepsane/. Stav složky je zároveň stav smlouvy. Žádná tabulka navíc není potřeba.",
    },
    {
      q: "Co zálohy?",
      a: "Synchronizuj složku dokumentů aspoň na jeden cloudový disk (Dropbox, iCloud, Google Drive). Pro roky s daňovými doklady si drž i periodickou externí zálohu.",
    },
    {
      q: "Mám používat jednu šablonu na typ dokumentu?",
      a: "Ano. Jednotné šablony dělají dokumenty rozpoznatelné a snižují práci s každým z nich. Přizpůsobuj obsah, ne strukturu.",
    },
    {
      q: "Kdy začne dávat smysl placený balíček na PDF?",
      a: "Když potřebuješ automatické směrování, hromadný elektronický podpis nebo doložitelnou auditní stopu – obvykle zhruba od 20 zaměstnanců nebo u regulovaných postupů.",
    },
  ],
  related: [
    { label: "PDF pro firmy — smlouvy a pracovní postupy", path: "/pdf-for-business" },
    { label: "Podepsat PDF — elektronický podpis", path: "/sign-pdf" },
    { label: "Jak spravovat faktury jako PDF", path: "/guides/how-to-manage-invoices-as-pdf" },
    { label: "Nejlepší bezplatné PDF nástroje pro malé firmy", path: "/guides/best-pdf-tools-for-small-business" },
  ],
  parentHub: { label: "PDF pro firmy — smlouvy a pracovní postupy", path: "/pdf-for-business" },
};

export default content;
