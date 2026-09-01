import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-pdf-application-forms",
  h1: "Jak spravovat přihláškové formuláře PDF (sběr a posouzení)",
  description:
    "Dostáváš přihlášky jako PDF? Jak je sbírat, procházet, porovnávat a archivovat, aniž bys ztratil přehled – jednoduchý systém pro práci s hromadou vyplněných formulářů.",
  updated: "2026-06-01",
  intro: [
    "Poslat formulář je ta snadná část; spravovat záplavu vyplněných je místo, kde to začne být nepřehledné. Pokud sbíráš přihlášky jako PDF – od uchazečů o práci, dodavatelů, účastníků programu, členů – rychle skončíš se složkou plnou souborů pojmenovaných „formular (3).pdf“ a bez jasného způsobu, jak je projít nebo porovnat. Řešením je odlehčený systém používaný konzistentně, ne databáze.",
    "Dobrá správa přihláškových formulářů stojí na třech věcech: přijímat každé podání v použitelném, konzistentním formátu; umět je procházet a porovnávat, aniž bys otevíral dvacet souborů najednou; a archivovat je tak, aby ses ke kterémukoli později dostal. Nic z toho nepotřebuje speciální software – stačí konvence pojmenování, struktura složek a pár návyků s PDF.",
    "Tenhle návod rozloží tenhle systém pro přijímací stranu formulářů, protějšek k posílání vstupních nebo přihláškových formulářů ven. Počítá se stálým pomalým přítokem nebo pravidelnou dávkou – reálným objemem, se kterým se skutečně potýká většina malých provozů.",
  ],
  steps: [
    {
      title: "Trvej na jednotném formátu při vrácení",
      body: "Požádej uchazeče, ať posílají zafixovaná PDF, ne fotky nebo upravitelné soubory. Jednotný formát znamená, že se každé podání čte stejně a nic nedorazí napůl vyplněné nebo pozměnitelné.",
    },
    {
      title: "Přejmenuj hned při doručení",
      body: "Každý soubor přejmenuj ve chvíli, kdy dorazí – jméno uchazeče, datum, případně referenci. „prijmeni-jmeno-2026-06.pdf“ vždycky předčí „sken_final.pdf“ a udělá ze složky něco, co jde okamžitě přehledně projet.",
    },
    {
      title: "Seskup do dávek k posouzení",
      body: "Přihlášky z jednoho kola dej do jedné složky. Pro porovnání můžeš dávku sloučit do jednoho PDF a listovat jím, nebo je nechat oddělené a procházet podle názvu souboru.",
    },
    {
      title: "Sleduj stav jednoduše",
      body: "Struktura podsložek – přijato, do užšího výběru, zamítnuto – nebo krátká poznámka v názvu každého souboru udrží stav viditelný bez nástroje. Soubory přesouvej, jak se stav mění.",
    },
    {
      title: "Archivuj uzavřená kola",
      body: "Když se kolo uzavře, přesuň jeho složku do archivu a prázdnou hlavní verzi přihlášky drž zvlášť. Zůstane ti tak čistý záznam i znovupoužitelná šablona pro příště.",
    },
  ],
  tips: [
    "Přejmenování při doručení je nejcennější návyk – zabrání chaosu typu „formular (3).pdf“ dřív, než vůbec začne.",
    "Sloučení dávky přihlášek do jednoho PDF udělá porovnání vedle sebe mnohem rychlejší než žonglování s mnoha soubory.",
    "Vyžaduj zafixovaná podání, ať se odpovědi neposunou a každý soubor se čte konzistentně.",
    "Jednoduchá struktura složek přijato/užší výběr/zamítnuto sleduje stav bez jakéhokoli dalšího softwaru.",
    "Údaje uchazečů drž mimo veřejné nástroje a dodržuj pravidla pro vedení záznamů nebo uchovávání dat, která se na tebe vztahují.",
  ],
  mobileNote:
    "Uchazeči mohou tvůj formulář dokončit a vrátit z telefonu pomocí aplikace PDF Editor a poslat zafixovanou kopii, která se konzistentně archivuje. Na své straně můžeš podání procházet a dávku sloučit k porovnání taky na telefonu – šikovné, když přihlášky dorazí zrovna ve chvíli, kdy nejsi u stolu.",
  faq: [
    {
      q: "Jak udržím pořádek ve vyplněných přihláškových formulářích?",
      a: "Každý soubor při doručení přejmenuj podle jména uchazeče a data, seskup každé kolo do jedné složky, sleduj stav podsložkami a uzavřená kola archivuj. Stačí konvence pojmenování plus složky – žádná databáze není potřeba.",
    },
    {
      q: "Jak rychle porovnám hodně přihlášek?",
      a: "Slouč PDF z jednoho kola do jednoho souboru a listuj jím, nebo je nech oddělené a procházej podle konzistentních názvů souborů. Obojí předčí otevírání dvaceti souborů zvlášť.",
    },
    {
      q: "V jakém formátu by mi měli uchazeči posílat formuláře?",
      a: "Jako zafixovaná PDF. Čtou se konzistentně, nedají se pozměnit ani smazat a čistě se archivují. Odrazuj od fotek výtisků a upravitelných souborů, které dorazí nekonzistentně.",
    },
    {
      q: "Potřebuji speciální software na správu přihláškových formulářů?",
      a: "Ne. Konzistentní konvence pojmenování, rozumná struktura složek a základní nástroje PDF na slučování a procházení pokryjí reálný objem, se kterým se potýká většina malých provozů.",
    },
    {
      q: "Jak dlouho mám vyplněné formuláře uchovávat?",
      a: "To závisí na tvých vlastních potřebách vedení záznamů a pravidlech, která se na tebe vztahují – požadavky se liší. Uzavřená kola archivuj tam, kde je zase najdeš, a osobní údaje likviduj podle svých zásad.",
    },
  ],
  related: [
    {
      label: "Jak posílat vstupní formuláře pro klienty",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Pracovní postupy pro sběr dokumentů pomocí PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "Formuláře PDF pro malé firmy",
      path: "/guides/pdf-forms-for-small-business",
    },
    { label: "Jak sloučit PDF soubory", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
