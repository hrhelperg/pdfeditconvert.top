import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflow-for-university-students",
  h1: "Pracovní postup s PDF pro vysokoškoláky (poznámky, úkoly, odevzdávání)",
  description:
    "Semestrální rytmus s PDF, který přežije i zkouškové: naskenované poznámky z přednášek, odevzdané úkoly, sdílené studijní materiály. Bezplatně a přímo v prohlížeči.",
  updated: "2026-05-29",
  intro: [
    "Vysokoškolský semestr vyrobí stovky PDF. Snímky přednášek, naskenované ručně psané poznámky, sady úloh, hotové úkoly, doplňkovou četbu, studijní balíky na zkoušky. Většina studentů to řeší tak, že to všechno naskládá do složky stažených souborů a pak se v tom hrabe. Ve třetím týdnu to funguje; v desátém se to rozpadá; o zkouškovém je to horší, než kdyby nic z toho neměli.",
    "Semestrální rytmus s PDF je krátký a snadno se udrží. Týdenní balíky poznámek na kurz, jednotně pojmenované odevzdávané úkoly, sestavené studijní balíky před zkouškami, archivy na konci semestru. Nic z toho nepotřebuje drahé nástroje ani aplikace, které ještě nemáš, a většinu to zvládneš z telefonu.",
    "Tenhle návod popisuje ten rytmus – co dělat každý týden, co dělat u každého úkolu, co dělat v půlce semestru a o zkouškovém. Předpokládá, že cílem je najít jakýkoli dokument za pět vteřin, ne vybudovat dokonalý osobní systém znalostí.",
  ],
  steps: [
    {
      title: "Týdně: zachyť a slouč materiál z přednášek",
      body: "Na konci každého týdne za daný kurz: sesbírej napsané poznámky, snímky v PDF, fotky tabule a naskenované ručně psané stránky. Sloučit PDF je spojí do Tyden3_Balik_RRRR-MM-DD.pdf v /Kurzy/[Kurz]/prednasky/.",
    },
    {
      title: "U každého úkolu: vyrob, pojmenuj, odevzdej, archivuj",
      body: "Word do PDF pro napsanou práci, Naskenovat do PDF pro ručně psané stránky, Sloučit PDF pro spojení, Zkomprimovat PDF, pokud má portál strop. Odevzdej a kopii si nech v /Kurzy/[Kurz]/ukoly/odevzdane/.",
    },
    {
      title: "V půlce semestru: udělej úklid",
      body: "Kolem sedmého týdne projdi složky kurzů. Zahoď duplicity, oprav špatně pojmenované soubory, archivuj, co je hotové. Dvacet minut v půlce semestru ušetří hodiny o zkouškovém.",
    },
    {
      title: "Před zkouškou: sestav studijní balík",
      body: "Spoj relevantní týdenní balíky do jednoho Kurz_Zaverecny_Studijni_Balik.pdf. Přidej titulní stránku s tématy. Zkomprimuj pro pohodlné použití na tabletu nebo telefonu při opakování.",
    },
    {
      title: "Piš poznámky do studijního balíku na tabletu nebo telefonu",
      body: "Poznámky do PDF na tabletu fungují některým studentům lépe než papír. Používej zvýrazňování, komentáře a podtrhávání; zápisky přetrvají pro pozdější opakování.",
    },
    {
      title: "Konec semestru: archivuj kurz",
      body: "Přesuň /Kurzy/[Kurz]/ do /Archiv/[Rok]/[Kurz]/. V archivu všechno zkomprimuj. Aktivní složka zůstane čistá pro další semestr.",
    },
  ],
  tips: [
    "Neslučuj napříč kurzy nebo napříč týdny. Nejmenší užitečná jednotka je jedno PDF na týden na kurz.",
    "Odevzdávej přesně podle konvence pojmenování, kterou vyžaduje daný předmět. „Prijmeni_Jmeno_Ukol3.pdf“ je standard – dodrž ho přesně.",
    "Studijní balíky opatřuj poznámkami digitálně. Prohledávatelná okomentovaná PDF jsou pro opakování lepší než papír – konkrétní téma najdeš rychle.",
    "Komprimuj jen při odevzdání a při archivaci. Během aktivního používání optimalizuj pro čitelnost.",
    "Synchronizuj složku Kurzy na jeden cloudový disk. Přístup z telefonu na notebook je o zkouškovém cennější než místo na disku.",
  ],
  mobileNote:
    "Většina studentova dne s PDF se odehraje na telefonu – naskenovat ručně psanou stránku, vyfotit snímek, odevzdat úkol. Aplikace PDF Editor zvládá celý řetězec (sken, sloučení, komprese, podpis, sdílení) offline na iOS i Androidu, takže pracovní postup nezávisí na přístupu k notebooku.",
  faq: [
    {
      q: "Kolik času tenhle rytmus zabere?",
      a: "Deset minut týdně na kurz pro týdenní balík. Dvě minuty na úkol. Dvacet minut v půlce semestru. Kumulovaná úspora o zkouškovém jsou hodiny.",
    },
    {
      q: "Co když mám hodně kurzů?",
      a: "Rytmus škáluje – stejná konvence platí pro každý kurz. Dva paralelní kurzy zdvojí čas; struktura zůstává.",
    },
    {
      q: "Vyplatí se ještě uchovávat papír?",
      a: "Originální ručně psané poznámky ano, jako záloha. Jakmile jsou naskenované a v týdenním balíku, papír slouží už jen jako reference.",
    },
    {
      q: "Mám na skeny pouštět OCR kvůli vyhledávání?",
      a: "Pokud to tvůj nástroj umí, tak ano. Prohledávatelný studijní materiál u zkoušky je mnohem cennější než neprohledávatelný.",
    },
    {
      q: "Co s doporučenou četbou?",
      a: "Samostatná složka /cetba/ na kurz. Neslučuj četbu do balíků z přednášek; roste zvlášť a slouží jinému účelu.",
    },
  ],
  related: [
    { label: "PDF pro studenty — poznámky a studijní materiály", path: "/pdf-for-students" },
    { label: "Nejlepší bezplatné PDF nástroje pro studenty", path: "/guides/best-pdf-tools-for-students" },
    { label: "Jak organizovat studijní materiály jako PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Jak odevzdat domácí úkol jako PDF", path: "/guides/how-to-submit-homework-as-pdf" },
  ],
  parentHub: { label: "PDF pro studenty — poznámky a studijní materiály", path: "/pdf-for-students" },
};

export default content;
