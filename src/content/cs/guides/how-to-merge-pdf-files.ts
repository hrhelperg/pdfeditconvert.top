import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-merge-pdf-files",
  h1: "Jak sloučit PDF soubory na telefonu nebo počítači",
  description:
    "Spoj více PDF do jednoho dokumentu. Mobilní postup krok za krokem s aplikací PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Slučování PDF je jedna z nejčastějších operací, kterou potřebuje malá firma nebo student. Ať už jde o naskenované účtenky pro účetní, výzkumné práce svázané k odevzdání, nebo nabídku spojenou s doprovodnými dokumenty, jeden přehledný soubor je lepší než žonglování s pěti přílohami.",
    "Tento návod ukazuje, jak sloučit PDF na telefonu v aplikaci PDF Editor pro iPhone nebo Android. Postup je na obou platformách stejný: přidáš soubory, přetáhneš je do požadovaného pořadí a exportuješ jedno spojené PDF. Celá operace trvá obvykle méně než minutu.",
    "Pokud chceš slučovat na počítači, principy platí i pro většinu moderních nástrojů na PDF. Mobilní postup je tu hlavní téma proto, že právě tam probíhá většina reálného slučování – mezi schůzkami, u zákazníka nebo na cestách.",
  ],
  steps: [
    {
      title: "Otevřít aplikaci PDF Editor",
      body: "Spusť aplikaci a klepni na dlaždici Sloučit na domovské obrazovce. Pro začátek není potřeba žádný účet.",
    },
    {
      title: "Přidat soubory, které chceš spojit",
      body: "Klepni na tlačítko +. Přidej každé PDF ze Souborů, iCloud Drive, Google Drive, OneDrive nebo sdílením z jiné aplikace. Zdroje můžeš libovolně kombinovat.",
    },
    {
      title: "Změnit pořadí ve frontě",
      body: "Podrž libovolnou položku ve frontě a přetáhni ji na správné místo. Pořadí ve frontě odpovídá pořadí ve výsledném souboru. Před sloučením si pořadí ještě jednou zkontroluj.",
    },
    {
      title: "Otočit stránky na šířku",
      body: "Pokud byly některé zdrojové soubory naskenované na bok, klepni u dané položky na ikonu otočení, aby sloučený dokument dával smysl.",
    },
    {
      title: "(Volitelně) Přidat titulní stránku",
      body: "Klepnutím na Přidat titulní stránku vložíš jednoduchou úvodní stránku s datem a jedním řádkem nadpisu. Hodí se, když sloučený dokument putuje ke klientovi.",
    },
    {
      title: "Klepnout na Sloučit",
      body: "Aplikace spojí všechny soubory do jednoho PDF a zobrazí výsledek ke kontrole. Slučování probíhá v zařízení, takže soukromé zůstanou i zdroje chráněné heslem.",
    },
    {
      title: "Zkontrolovat sloučený soubor",
      body: "Projeď dokument a ověř, že jsou stránky ve správném pořadí a orientaci. Pro rychlou kontrolu použij náhled stránek.",
    },
    {
      title: "Uložit nebo sdílet",
      body: "Ulož do Souborů, synchronizuj do cloudového úložiště nebo sdílej přímo e-mailem, přes AirDrop nebo jakoukoli komunikační aplikaci. Zvol výstižný název souboru – „Smlouva-s-Prilohou-2026-05.pdf“ je v cizí schránce užitečnější než „Dokument(3).pdf“.",
    },
  ],
  tips: [
    "Přidej titulní stránku, když sloučený dokument putuje k externímu příjemci – balík díky ní působí záměrně, ne narychlo poskládaně.",
    "Stránky naskenované na bok otočíš před sloučením, ne až po něm – oprava orientace později znamená znovu exportovat celý soubor.",
    "Pokud se sloučené PDF bude posílat e-mailem, použij navíc nástroj Komprese, aby se výsledek vešel pod běžný limit 25 MB pro přílohy.",
    "Sloučené úseky si označ záložkami v náhledu stránek, aby se příjemce mohl dostat rovnou k relevantní části delšího dokumentu.",
    "Původní zdrojové soubory ponech, dokud nezkontroluješ, že sloučení dopadlo dobře – originály ze stejné relace nikdy nemaž.",
  ],
  mobileNote:
    "Mobilní slučování se hodí obzvlášť tehdy, když je potřeba spojit skeny s digitálními PDF – aplikace zvládá obojí v jedné frontě a nový sken můžeš pořídit rovnou na místě a přidat ho do sloučení. Na počítači je to nepohodlná operace, na telefonu jde o jedno klepnutí.",
  faq: [
    {
      q: "Existuje maximální počet souborů, které mohu sloučit?",
      a: "Pevný limit neexistuje. Velmi rozsáhlé dávky (50+ souborů) trvají na starších telefonech déle, ale aplikace zvládá reálné slučování bez problémů. Pokud narazíš na výkonnostní problémy, rozděl úlohu na dvě slučování a výsledky spoj.",
    },
    {
      q: "Můžu sloučit dokument Word s PDF?",
      a: "Ano, nepřímo. Dokument Word nejdřív převeď na PDF pomocí dlaždice Převést a výsledek pak přidej do fronty ke slučování spolu s ostatními PDF.",
    },
    {
      q: "Co se stane se zdrojovými soubory chráněnými heslem?",
      a: "Heslo zadej, když si ho aplikace vyžádá. Dešifrování proběhne lokálně; sloučený výstup můžeš nechat bez ochrany nebo ho znovu zabezpečit heslem podle vlastní volby.",
    },
    {
      q: "Změní se po sloučení původní formátování?",
      a: "Ne. Každá zdrojová stránka zůstane zachována přesně tak, jak byla. Mění se jen pořadí stránek a kolem nich vznikne jeden nový PDF soubor.",
    },
    {
      q: "Můžu sloučení vrátit zpět?",
      a: "Ano. Funkce Rozdělit PDF rozloží jakékoli PDF – sloučené i původní – zpět na jednotlivé stránky nebo rozsahy. Originály se během slučování nikdy neupravují.",
    },
  ],
  related: [
    { label: "Sloučit PDF — zdarma, přímo v prohlížeči", path: "/merge-pdf" },
    {
      label: "Rozdělit PDF — extrahuj stránky v prohlížeči",
      path: "/split-pdf",
    },
    { label: "Všechny bezplatné nástroje pro PDF", path: "/pdf-tools" },
    {
      label: "Jak zkomprimovat PDF po sloučení",
      path: "/guides/how-to-compress-pdf",
    },
  ],
  parentHub: { label: "Sloučit PDF", path: "/merge-pdf" },
};

export default content;
