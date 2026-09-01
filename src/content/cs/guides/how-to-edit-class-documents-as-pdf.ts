import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-class-documents-as-pdf",
  h1: "Jak upravovat školní dokumenty jako PDF (poznámky, zvýraznění, podpis)",
  description:
    "Podklady z výuky, zadání úloh a souhlasy od rodičů často přicházejí jako PDF. Jak do nich zapisovat, vyplnit je a vrátit zpět bez tisku – vše na telefonu nebo notebooku.",
  updated: "2026-05-29",
  intro: [
    "Školní dokumenty teď přichází jako PDF víc než v jakémkoli jiném formátu. Podklady k okomentování, zadání úloh k vyplnění, souhlasy od rodičů k podpisu a vrácení, sylaby k prostudování. Láká to všechno vytisknout, ručně vyplnit a naskenovat zpátky. To funguje, ale je to pomalé a výsledek vypadá hůř, než kdybys PDF upravil přímo.",
    "Moderní úprava PDF zvládá dobře všechny čtyři případy: zvýrazňování a poznámky pro čtení, vyplňování formuláře pro zadání úloh a formuláře, podpisy pro souhlasy a strukturální úpravy, když potřebuješ přidat stránku. Většinu z toho zvládneš v záložce prohlížeče nebo v mobilní aplikaci, aniž bys platil za software.",
    "Tenhle návod projde každý případ – jaký je pro něj správný nástroj, co dělá a nedělá a jak vrátit čistou vyplněnou kopii. Počítá s tím, že nechceš nic tisknout, pokud to není nutné.",
  ],
  steps: [
    {
      title: "Pro čtení a poznámky: zvýrazni a okomentuj",
      body: "Většina čteček PDF (i aplikace PDF Editor) podporuje zvýrazňování, podtrhávání a komentáře na lepicích poznámkách. Použij je pro aktivní čtení – poznámky zůstanou u souboru a přežijí sdílení.",
    },
    {
      title: "Pro skutečná pole formuláře: klepni a vyplň",
      body: "PDF navržená jako formulář mají skutečná interaktivní pole. Klepni do každého, napiš, přejdi na další. Výstup vypadá stejně jako vytištěná a ručně vyplněná práce.",
    },
    {
      title: "Pro neinteraktivní PDF (bez polí formuláře): přidej textová pole",
      body: "Naskenovaný podklad bez skutečných polí potřebuje, abys přes prázdná místa navrstvil textová pole. Aplikace PDF Editor to podporuje; výsledek vypadá upraveněji než ručně psané odpovědi na výtisku.",
    },
    {
      title: "Pro podpisy: Podepsat PDF",
      body: "Podepsat PDF ti umožní nakreslit nebo napsat podpis přímo na formulář. Pro souhlasy a formuláře od rodičů je nakreslený podpis správná volba.",
    },
    {
      title: "Pro přidání stránek: sloučení",
      body: "Pokud je tvá odpověď delší, než na kolik má podklad prázdné místo, Sloučit PDF ti umožní připojit další stránky. Drž je ve správném pořadí; původní stránky zůstanou nedotčené.",
    },
    {
      title: "Ulož jako nový soubor, ne přes originál",
      body: "Vyplněnou verzi ulož pod novým názvem (Podklad3_Hotovo_Prijmeni.pdf). Prázdný originál zůstane netknutý pro případ, že bys ho potřeboval znovu vyplnit nebo sdílet se spolužákem.",
    },
  ],
  tips: [
    "Nejdřív si PDF ověř, jestli má skutečná pole formuláře. Pokud klepnutí na prázdný řádek otevře psací kurzor, jde o skutečný formulář. Pokud se nic nestane, potřebuješ vrstvu textových polí.",
    "Používej jednotnou velikost textu pro vyplněné odpovědi – ideálně podle velikosti textu dokumentu, pokud ji poznáš.",
    "Netiskni kvůli vyplnění, pokud to není nezbytně nutné. Zpětně naskenovaná verze je vždy hůř čitelná než digitální vyplnění.",
    "Ulož před podepsáním. Podpis obvykle zafixuje části souboru; verze před podpisem je ta upravitelná kopie.",
    "Vyplněné formuláře potvrď exportem do PDF – některé nástroje ukládají vyplnitelný stav zvlášť a exportované PDF ti odpovědi natrvalo uzamkne.",
  ],
  mobileNote:
    "Řada školních dokumentů přijde na telefon a stejnou cestou se musí vrátit zpátky. Aplikace PDF Editor zvládá poznámky, vyplnění formuláře, podpis i sloučení na iOS i Androidu, takže podklad nemusí čekat na čas u notebooku, aby se vrátil hotový.",
  faq: [
    {
      q: "Můžu upravovat PDF v prohlížeči?",
      a: "V omezených případech ano – vyplňování formulářů a poznámky fungují v mnoha prohlížečích. Pro úpravy textu a strukturální změny toho víc zvládne skutečný editor (v prohlížeči nebo v aplikaci).",
    },
    {
      q: "Proč nemá podklad skutečná pole formuláře?",
      a: "Buď je vyučující exportoval bez jejich zapnutí, nebo je soubor sken. Použij vrstvu textových polí přes prázdné řádky.",
    },
    {
      q: "Jsou podepsaná PDF přijímaná pro školní formuláře?",
      a: "Čím dál víc ano. Některé úřední formuláře (konkrétně podepsané souhlasy v některých jurisdikcích) mohou pořád vyžadovat vlastnoruční podpis inkoustem – zkontroluj pokyny formuláře.",
    },
    {
      q: "Mám vždy ukládat jako nový soubor?",
      a: "Pro školní práci ano. Zachování prázdného originálu ti dovolí to zopakovat nebo sdílet bez opětovného stahování.",
    },
    {
      q: "Jak přidám stránku do PDF, které vyplňuju?",
      a: "Dodatečný obsah napiš jako samostatné PDF a pak ho pomocí Sloučit PDF spoj s originálem. Připojenou stránku umísti tam, kam logicky patří.",
    },
  ],
  related: [
    { label: "Editor PDF — úprava textu a obrázků na mobilu", path: "/pdf-editor" },
    { label: "Podepsat PDF — přidej elektronický podpis", path: "/sign-pdf" },
    { label: "Jak vyplnit formuláře PDF na telefonu", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "Jak psát poznámky do PDF na mobilu", path: "/guides/how-to-annotate-pdf-on-mobile" },
  ],
  parentHub: { label: "Editor PDF — úprava textu, obrázků a stránek", path: "/pdf-editor" },
};

export default content;
