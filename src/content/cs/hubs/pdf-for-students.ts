import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-students",
  hero: {
    eyebrow: "PDF pro studenty",
    h1: "PDF nástroje, které sedí tomu, jak studenti doopravdy studují.",
    highlight: "doopravdy",
    lead: "Okomentuj slidy z přednášek, zvýrazni čtecí materiály, spoj vědecké články, naskenuj stránky z učebnice a podepiš formuláře – z telefonu nebo tabletu, který už máš.",
    primaryCta: { label: "Otevřít aplikaci", href: SITE.app.appStore },
  },
  problem: {
    heading: "Proč jsou PDF pro studenty pořád středem všeho",
    paragraphs: [
      "Vyučující zveřejňují slidy jako PDF. Studijní materiály přichází jako PDF. Zadání úkolů jsou PDF. Sylaby jsou PDF. Výchozí prohlížeč v telefonu ale nedovolí je zvýrazňovat, komentovat nebo pořádně organizovat – a alternativa, ke které se většina studentů uchýlí, je dělat screenshoty stránek do Poznámek, čímž se ztratí prohledávatelnost, struktura i možnost vrátit se ke zdroji.",
      "Pořádný mobilní editor PDF dovoluje studentům zacházet se čtecími materiály jako s učebnicí – zvýraznění, poznámky na okraji, záložky – ale s možností prohledávání i sdílení. Stejné okomentované materiály se otevřou na každém zařízení, takže práce, kterou jsi udělal v autobuse, tě čeká i po usednutí v knihovně.",
      "V kombinaci se stylusem na tabletu může tento postup nahradit většinu fyzického psaní poznámek u studijních materiálů. Cenou je jen cena aplikace (základní funkce zdarma) a čas strávený jednorázovým nastavením.",
    ],
  },
  features: {
    heading: "Navrženo pro studium",
    items: [
      {
        icon: "Highlighter",
        title: "Zvýrazňuj a komentuj",
        body: "Žluté zvýraznění, poznámky od ruky, komentáře, podtržení – přesně to, co bys dělal na papíře, ale prohledávatelné.",
      },
      {
        icon: "Bookmark",
        title: "Záložky a osnova",
        body: "Označ si kapitoly nebo části, ke kterým se chceš vrátit. Při psaní seminárky mezi nimi přeskakuj jedním ťuknutím.",
      },
      {
        icon: "Combine",
        title: "Spoj čtecí materiály",
        body: "Spoj týdenní články do jednoho dokumentu pro offline čtení ve vlaku, letadle nebo cestou do školy.",
      },
      {
        icon: "ScanLine",
        title: "Naskenuj stránky z učebnice",
        body: "Zachyť stránky z tištěných knih do prohledávatelných PDF. Užitečné pro citace v seminárkách, když máš jen tištěný výtisk.",
      },
      {
        icon: "FileSignature",
        title: "Podepiš formuláře okamžitě",
        body: "Žádosti o stipendia, prezenční listiny, potvrzení o zápisu – podepiš a vrať zpátky bez tisknutí.",
      },
      {
        icon: "Layers",
        title: "Organizuj podle předmětu",
        body: "Seskup dokumenty podle předmětu. Přesouvej je v průběhu semestru, aniž bys přišel o poznámky.",
      },
    ],
  },
  steps: {
    heading: "Jednoduchý studijní postup",
    items: [
      {
        title: "Nasbírej týdenní čtení",
        body: "Stáhni nebo nasdílej každé PDF do PDF Editoru z portálu univerzity, Canvasu, Moodlu nebo e-mailu.",
      },
      {
        title: "Spoj je do jednoho souboru na týden",
        body: "Pomocí nástroje Sloučit je spoj do souboru „3. týden – Mikroekonomie.pdf“ pro offline použití.",
      },
      {
        title: "Komentuj za čtení",
        body: "Zvýrazni důležité pasáže, přidej poznámky na okraj, vlož komentář tam, kde máš doplňující otázky. Poznámky se ukládají přímo na místě.",
      },
      {
        title: "Použij zvýraznění při psaní seminárek",
        body: "Při citování zdrojů se přes panel záložek vracej ke zvýrazněným pasážím. Text pod zvýrazněním jde označit a zkopírovat.",
      },
      {
        title: "Naskenuj a spoj ručně psané poznámky",
        body: "Pokud sis dělal poznámky na papír, naskenuj je do stejné knihovny PDF Editoru, ať máš vše na jednom prohledávatelném místě.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Studuj kdekoli",
    body: "Přednáška, knihovna, vlak, kavárna – místo, kde student čte, jen málokdy bývá psací stůl. Editor PDF navržený primárně pro telefon znamená, že máš stejnou okomentovanou kopii v ruce, ať jsi kdekoli. Hodina, kterou bys jinak ztratil čekáním na autobus, se změní na produktivní čas na čtení.",
  },
  faq: [
    {
      q: "Je aplikace pro studenty zdarma?",
      a: "Ano. Základní komentování, slučování, skenování a podepisování jsou zdarma bez denního limitu. Některé funkce Pro (dávkové OCR, pokročilé šifrování) jsou placené, ale bezplatná verze pokryje vše, co student obvykle potřebuje.",
    },
    {
      q: "Synchronizují se moje zvýraznění mezi zařízeními?",
      a: "Pokud soubor uložíš na iCloud Drive, Google Drive nebo jiné cloudové úložiště, úpravy se synchronizují všude, kde se stejný soubor otevře. Soubory uložené jen lokálně zůstávají na zařízení, kde byly upraveny.",
    },
    {
      q: "Můžu legálně naskenovat stránku z knihy?",
      a: "Pro osobní studium ano, ve většině jurisdikcí (pravidla fair use obvykle povolují krátké úryvky pro studijní účely). Pozor na distribuci naskenovaných kopií – to je jiná otázka a často to není dovolené.",
    },
    {
      q: "Funguje aplikace dobře na iPadu a Android tabletech?",
      a: "Ano. Tablety se stylusem (Apple Pencil, S Pen) dělají komentování mnohem bližší papíru než telefony ovládané jen prstem. Pokud máš tablet, používej ho na čtecí sezení.",
    },
    {
      q: "Můžu exportovat okomentované poznámky?",
      a: "Ano. Okomentované PDF můžeš sdílet tak, jak je (s vloženými poznámkami), nebo ho zafixovat do finální podoby PDF. Můžeš také extrahovat jen zvýrazněný text pro citace.",
    },
  ],
  related: [
    {
      label: "Jak sdílet studijní poznámky jako PDF",
      path: "/guides/how-to-share-study-notes-as-pdf",
    },
    {
      label: "Nejlepší aplikace PDF pro studenty",
      path: "/guides/best-pdf-app-for-students",
    },
    { label: "Skenovat do PDF", path: "/scan-to-pdf" },
  ],
  appCta: {
    heading: "Studuj s pořádnou sadou nástrojů pro PDF.",
    sub: "Zdarma na iOS a Androidu. Poznámky se synchronizují přes iCloud nebo Drive.",
  },
};

export default content;
