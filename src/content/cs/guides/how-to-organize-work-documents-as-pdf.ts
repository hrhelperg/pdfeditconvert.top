import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-work-documents-as-pdf",
  h1: "Jak organizovat pracovní dokumenty jako PDF (složky, názvy, verze)",
  description:
    "Praktická konvence pojmenování a složek pro pracovní PDF – nabídky, zadání, výstupy, archivy – která zamezí zmatku ve verzích a umožní komukoli rychle cokoli najít.",
  updated: "2026-05-29",
  intro: [
    "Problém s pracovními PDF obvykle nebývá v samotných PDF. Je to ta stopa: třicet souborů s podobnými názvy ve složce stažených souborů, verze, které si neodpovídají, „finální“ verze, které finální nejsou, návrhy k nerozeznání od výstupů. Formát je v pořádku; rozpadá se konvence kolem formátu.",
    "Funkční konvence je krátká – struktura složek, vzor pojmenování a zvyk, kam patří finální verze. Jakmile je zavedená, najít „smlouvu, kterou jsme poslali v březnu“ zabere deset vteřin místo deseti minut, a konflikty verzí se skoro přestanou dít.",
    "Tenhle návod popisuje konvenci, kterou jsme viděli malé týmy přijmout a udržet. Není to jediná fungující konvence; je to jedna dost pevná na to, aby přežila nabitý kvartál, aniž by se rozpadla.",
  ],
  steps: [
    {
      title: "Zvol si jednou provždy uspořádání nejvyšší úrovně složek",
      body: "Klienti/NazevZakazky/, Interni/, Sablony/, Archiv/. Čtyři složky pokryjí většinu. Zpočátku nezanoř víc než dvě úrovně hluboko – hloubka tě ztratí.",
    },
    {
      title: "Standardizuj vzor pojmenování souborů",
      body: "JmenoKlienta_TypDokumentu_vN_RRRR-MM-DD.pdf se čte čistě v jakémkoli prohlížeči souborů. Datum na konci, aby se soubory řadily chronologicky; verze rovnou v názvu, aby šla ta nejnovější poznat na první pohled.",
    },
    {
      title: "Odděl /navrhy a /finalni uvnitř každého projektu",
      body: "Návrhy jdou do podsložky /navrhy projektu; finální verze se přejmenují na FINALNI a přesunou do /finalni nebo /vystupy. Složka /finalni by měla obsahovat jen odeslané verze.",
    },
    {
      title: "Nástrojem Sloučit PDF konsoliduj při předání",
      body: "Když je výstup vlastně tři PDF (nabídka + podmínky + ceník), sluč je do jednoho pro doručení a zdrojové soubory si nech v projektové složce. Příjemce dostane jeden čistý soubor.",
    },
    {
      title: "Komprimuj a přejmenuj až při doručení",
      body: "Zkomprimovat PDF pro odchozí kopii; nekomprimovaný zdroj si nech. Doručený soubor jde do /finalni/, zdroj zůstává v /navrhy/. Jsou to dva různé artefakty.",
    },
    {
      title: "Dokončené projekty archivuj podle plánu",
      body: "Uzavřené projekty přesouvej do /Archiv/ čtvrtletně. Aktivní složky zůstanou přehledné; archiv je prohledatelný, když potřebuješ něco najít později.",
    },
  ],
  tips: [
    "Vyhýbej se mezerám v názvech souborů, pokud můžeš – podtržítka nebo pomlčky se snáz zpracovávají v URL, přeposlaných e-mailech a příkazovém řádku.",
    "Formát data RRRR-MM-DD se řadí chronologicky v jakémkoli nástroji. 29.5.26 ne.",
    "Do názvu souboru FINÁLNÍ nedávej čísla verzí. FINÁLNÍ je FINÁLNÍ. Pokud se pak něco změní, je to FINALNI-2 – a to je znamení, že se postup někde pokazil.",
    "Neboj se přejmenovat. Jasný název souboru stojí za minutu práce, obzvlášť před odesláním.",
    "U velkých projektů si drž jednořádkový indexový soubor (README.txt), který vyjmenuje, co je v každé podsložce. Pomůže to tobě samotnému, až se za půl roku vrátíš.",
  ],
  mobileNote:
    "Na telefonu je organizace těžší, protože úprava názvů souborů je nešikovná. Aplikace PDF Editor ti umožní PDF z mobilu přejmenovat, označit štítkem a založit, takže se soubory, které dorazí na telefon, nehromadí bez názvu ve složce Stažené.",
  faq: [
    {
      q: "Jaký je nejlepší formát názvu souboru?",
      a: "JmenoKlienta_TypDokumentu_vN_RRRR-MM-DD.pdf. Datum na konci řadí chronologicky; verze v názvu odlišuje návrhy; klient a typ dokumentu dělají soubor samopopisným.",
    },
    {
      q: "Mám používat složky, nebo štítky?",
      a: "Složky. Systémy se štítky existují, ale rozpadají se napříč zařízeními a aplikacemi. Složky fungují všude.",
    },
    {
      q: "Co mám dělat se starými návrhy?",
      a: "Drž je v /navrhy/ uvnitř projektové složky, dokud se projekt neuzavře, pak archivuj celek najednou. Nemaž je – možná budeš potřebovat obnovit údaj z předchozího návrhu.",
    },
    {
      q: "Potřebuje FINÁLNÍ soubor číslo verze?",
      a: "Ne. Jakmile je soubor FINÁLNÍ, je to referenční verze. Pokud se pak něco změní, jsi už v novém jednání, které dostane vlastní FINÁLNÍ verzi.",
    },
    {
      q: "Jak řeším soubory od klientů s nekonzistentním pojmenováním?",
      a: "Přejmenuj při přijetí podle své konvence. Minuta strávená přejmenováním ušetří čas, který bys jinak ztratil pozdějším hledáním.",
    },
  ],
  related: [
    { label: "PDF nástroje – kompletní seznam v prohlížeči", path: "/pdf-tools" },
    { label: "Sloučit PDF – spoj výstupy při předání", path: "/merge-pdf" },
    { label: "Jak organizovat PDF soubory", path: "/guides/how-to-organize-pdf-files" },
    { label: "Pracovní postupy s PDF pro malé firmy", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "PDF nástroje – bezplatné, v prohlížeči", path: "/pdf-tools" },
};

export default content;
