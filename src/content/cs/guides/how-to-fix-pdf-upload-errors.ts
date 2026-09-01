import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-upload-errors",
  h1: "Jak vyřešit chyby při nahrávání PDF (příliš velké, odmítnuté, zaseklé)",
  description:
    "Portály odmítají PDF z pár typických důvodů: velikost souboru, počet stránek, přísnost formátu nebo nestabilní nahrávání. Jak zjistit, který z nich tě potkal, a dostat soubor přijatý napodruhé.",
  updated: "2026-05-29",
  intro: [
    "Nahrávací portály jsou přísnější než e-mail. Řada z nich odmítne cokoli nad 5 MB, některé nad 2 MB, některé odmítají vícestránkové soubory a jiné potichu selžou na čemkoli, co není dokonale konformní PDF/A. Chybové hlášky, které zobrazují, bývají málokdy konkrétní – „soubor je moc velký“, „neplatný formát“, „nahrávání selhalo“ – a většina znamená něco jiného, než co říká.",
    "Skutečné příčiny jsou obvykle jedna ze čtyř: soubor je nad limitem portálu, vnitřní formát souboru není standardní, spojení selhalo uprostřed nahrávání, nebo portál očekává konkrétní variantu PDF (PDF/A, jedna stránka, nižší verze). Každá má jiné řešení a to správné závisí na tom, o kterou jde.",
    "Tenhle návod projde diagnózy podle příznaku a ukáže, jak každou vyřešit přímo v prohlížeči. Většina neúspěšných nahrávání se povede napodruhé, jakmile vyřešíš skutečnou příčinu.",
  ],
  steps: [
    {
      title: "Přečti si chybovou hlášku doslova",
      body: "„Soubor přesahuje limit velikosti“ znamená kompresi. „Neplatný soubor“ znamená formát. „Nahrávání selhalo“ obvykle znamená síť. Ber slova jako první důkaz, i když jsou strohá.",
    },
    {
      title: "Pokud je problémem velikost, komprimuj agresivně",
      body: "Zkomprimovat PDF v prohlížeči zmenší soubory výrazně, obzvlášť ty plné skenů. Zkus nejdřív nejsilnější kompresi; pokud kvalita klesne příliš, vrať se o úroveň zpátky. Některé portály mají strop 2 MB – většina kompresí dostane typický dokument hluboko pod tuhle hranici.",
    },
    {
      title: "Pokud je potřeba, rozděl velké vícestránkové PDF",
      body: "Pokud portál přijímá víc menších souborů, ale odmítá jeden velký, nástroj Rozdělit PDF nebo Extrahovat stránky z PDF ti umožní rozbít soubor na části. Části v názvu souboru zřetelně očísluj, aby je příjemce dokázal zase spojit.",
    },
    {
      title: "Pokud je formát odmítnutý, znovu exportuj do standardního PDF",
      body: "Některé portály přijímají jen soubory uložené jako PDF 1.4 nebo PDF/A. Nejjednodušší oprava je otevřít soubor v jakémkoli prohlížeči a použít tisk do PDF – výsledná kopie je jednoduchá, standardní a obvykle přijatá.",
    },
    {
      title: "Zkontroluj počet stránek a rozměry",
      body: "Úřední a vzdělávací portály někdy omezují počet stránek nebo velikost papíru. Pokud portál uvádí požadavky, drž se jich: jen Letter nebo A4, žádné předimenzované stránky, žádná průhledná pozadí. Extrahovat stránky z PDF odstraní cokoli, co je přesahuje.",
    },
    {
      title: "Zkus to znovu na stabilním připojení",
      body: "Wi-Fi, které vypadne uprostřed nahrávání, vypadá stejně jako odmítnutí. Než usoudíš, že problémem je samotný soubor, přepni síť nebo to zkus na jiném připojení.",
    },
  ],
  tips: [
    "Nejdřív komprimuj, pak dělej rozdělení. Zkomprimovaný jediný soubor se často vejde do limitu; pokud pořád ne, rozděl komprimovanou kopii.",
    "Při nahrávání na portály se vyhni šifrování nebo ochraně heslem – řada z nich blokuje zabezpečené soubory, i kdyby jinak přijala samotný obsah.",
    "Dávej pozor na skryté limity znaků v názvech souborů. Některé portály odmítají názvy s mezerami, diakritikou nebo interpunkcí.",
    "Pokud portál přijímá JPG, ale odmítá PDF, můžeš exportovat stránky PDF do obrázků nástrojem PDF do obrázků a nahrát ty – užitečné pro požadavky jen na obrázek, jako je odeslání dokladu totožnosti.",
    "Vždycky si potvrď, že se úspěšné nahrání skutečně dokončilo (některé portály selžou potichu). Obnov stránku s potvrzením a hledej skutečné potvrzení, ne jen nepřítomnost chyby.",
  ],
  mobileNote:
    "Nahrávání z telefonu selhává častěji než z notebooku prostě proto, že spojení vypadává častěji. Aplikace PDF Editor komprimuje a rozděluje soubory offline, takže samotný krok nahrávání je krátký – menší soubor se nahraje rychleji a přežije nestabilní síť.",
  faq: [
    {
      q: "Na jakou velikost limituje většina portálů?",
      a: "Běžné stropy jsou 2 MB, 5 MB a 10 MB. Úřední a akademické portály bývají nejpřísnější; komerční jsou benevolentnější. Pokud to portál neuvádí rovnou, zkontroluj sekci nápovědy.",
    },
    {
      q: "Vyřeší komprese vždycky odmítnutí kvůli velikosti?",
      a: "Obvykle ano, obzvlášť u souborů plných skenů. 30MB sken se často bez problémů zkomprimuje pod 5 MB. Čistě textová PDF, která jsou už malá, se dál příliš nezmenší.",
    },
    {
      q: "Proč portál odmítá můj soubor jako „neplatný“?",
      a: "Buď soubor ve skutečnosti není PDF (některá stažení mají špatný název), nebo používá funkce PDF, které analyzátor portálu nepodporuje. Opětovný export přes tisk do PDF vytvoří základní kopii, kterou skoro vždycky přijmou.",
    },
    {
      q: "Můžu obejít limit velikosti zabalením do ZIP?",
      a: "Skoro nikdy. Portály, které omezují PDF, obvykle omezují i celkovou velikost nahrání a ZIP archivy odmítají úplně. Správná cesta je zkomprimovat samotné PDF.",
    },
    {
      q: "Co když portál chce konkrétně PDF/A?",
      a: "PDF/A je archivační varianta. Microsoft Word a Google Docs do ní umí exportovat přímo. Jinak soubor otevři, použij tisk do PDF a zkontroluj možnosti exportu, jestli je tam nastavení kompatibilní s A.",
    },
  ],
  related: [
    { label: "Zkomprimovat PDF – zmenši, ať se vejdeš do limitu portálu", path: "/compress-pdf" },
    { label: "Rozdělit PDF – rozbij velké soubory na přijímané části", path: "/split-pdf" },
    { label: "Jak zmenšit PDF před nahráním na portál", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
    { label: "Jak zmenšit velikost PDF pro e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "Zkomprimovat PDF – zmenši velikost v prohlížeči", path: "/compress-pdf" },
};

export default content;
