import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-notes-to-pdf",
  h1: "Jak naskenovat ručně psané poznámky do PDF (čisté, prohledávatelné)",
  description:
    "Proměň stránky ručně psaných poznámek z přednášek ve vícestránkové PDF pomocí fotoaparátu telefonu. Nastavení, díky kterým sken vyjde čitelný už napoprvé.",
  updated: "2026-05-29",
  intro: [
    "Ručně psané poznámky z přednášek jsou pořád nejrychlejší způsob, jak si zapsat hodinu, a většina studentů je nechává na papíře, místo aby je digitalizovala – protože skeny obvykle dopadnou špatně. Nakřivo vyfocené stránky, vybledlé šedé skeny, přebujelá velikost souboru a čas, který zabere přefocení těch nepovedených. Sečti to za semestr a to je důvod, proč poznámky zůstávají v sešitě.",
    "Čisté skeny z telefonu jsou hlavně o technice a nastavení, ne o aplikaci. Rovnoměrné světlo, čtvercové zarovnání, zapnutý kontrast, stupně šedi místo barev a detekce hran, pokud to tvůj nástroj umí. Dobře pořízená stránka pak vypadá spíš jako z plochého skeneru než jako obyčejná fotka.",
    "Tenhle návod tě provede technikou od začátku do konce – podmínkami v místnosti, díky kterým skeny vyjdou dobře, postupem pro jednotlivou stránku, vícestránkovým postupem a tím, co s PDF dělat, až ho máš hotové. Počítá s tím, že máš telefon a chceš čisté, vícestránkové PDF bez kupování skeneru.",
  ],
  steps: [
    {
      title: "Polož stránku na kontrastní podklad",
      body: "Linkovaný papír na tmavou desku stolu. Obyčejnou bílou stránku na tmavou látku. Cokoli, co udělá okraj stránky pro fotoaparát a automatické oříznutí zřetelným. Vyhni se odlescům; rovnoměrné světlo je lepší než jasné světlo.",
    },
    {
      title: "Drž telefon rovnoběžně se stránkou",
      body: "Fotoaparát by měl být přímo nad stránkou, ne nakloněný. Naklonění způsobí lichoběžníkové zkreslení, které automatická korekce dokáže opravit, ale nikdy tak dobře jako čtvercový záběr.",
    },
    {
      title: "Použij skenovací aplikaci s detekcí hran",
      body: "Naskenovat do PDF nebo skenovací postup v aplikaci PDF Editor detekuje okraj stránky a automaticky oříznou. Náhodné fotky telefonem tohle nedělají; skenovací aplikace dá výsledek podobný plochému skeneru.",
    },
    {
      title: "Přepni na stupně šedi nebo černobílý režim",
      body: "Barevné skeny černého inkoustu na bílém papíře jsou větší, zašuměnější a měkčí. Stupně šedi dají ostřejší, menší a čitelnější skeny. Černobílý režim je ještě menší, ale později méně flexibilní.",
    },
    {
      title: "Zachyť každou stránku, pak slouč",
      body: "Vícestránkové skenovací postupy zachytí stránku po stránce a automaticky je spojí do jednoho PDF. Pokud jsi skenoval zvlášť, Sloučit PDF je spojí ve správném pořadí.",
    },
    {
      title: "V rámci úklidu ořízni, otoč a přeřaď",
      body: "Změň pořadí stránek PDF, pokud se nějaká stránka zachytila mimo pořadí. Otoč PDF u záběrů na bok. Věnuj úklidu minutu; budoucí ty poděkuje tomu dnešnímu.",
    },
  ],
  tips: [
    "Udělej všechny skeny, než začneš s úklidem – neustálé přepínání režimů zabíjí plynulost.",
    "Pokud je světlo nerovnoměrné, kus bílého papíru podržený nad stránkou jako odražeč dramaticky zlepší kontrast.",
    "Neořezávej příliš natěsno. Malý okraj kolem hrany stránky dělá dokument méně amatérským.",
    "Zkomprimuj finální PDF před archivací. Poznámky plné skenů jsou velké; zkomprimované verze se pak snáz sdílejí.",
    "Před sloučením přidej titulní stránku (napsanou, s názvem předmětu a datem). Sbírka se pak v tvém archivu sama vysvětlí.",
  ],
  mobileNote:
    "Skenování poznámek je jedna z věcí, ve které telefon pro běžné použití opravdu předčí plochý skener. Skenovací postup v aplikaci PDF Editor běží celý na telefonu – zachycení, detekce hran, kontrast, vícestránkové sloučení – a vytvoří čisté PDF bez cesty přes jakýkoli server.",
  faq: [
    {
      q: "Budou naskenované ručně psané poznámky prohledávatelné?",
      a: "Jen pokud na nich nástroj spustí OCR – převede obrázek rukopisu na prohledávatelný text. OCR u rukopisu je méně spolehlivé než u tištěného textu; kvalita závisí na rukopisu i na skenu.",
    },
    {
      q: "Jaké nastavení fotoaparátu je pro skeny poznámek nejlepší?",
      a: "Použij skenovací aplikaci s režimem stupňů šedi nebo černobílým režimem a automatickým kontrastem. Nespoléhej na standardní fotoaparát – jeho fotky jsou větší, méně kontrastní a hůř čitelné.",
    },
    {
      q: "Kolik stránek na jedno skenovací sezení?",
      a: "Kolik jsi toho napsal na jedno posezení. Skenovat týdně nebo po každé přednášce je jednodušší, než nechat se nahromadit celý semestr.",
    },
    {
      q: "Mám skenovat barevně?",
      a: "Jen pokud poznámky používají barvu (zvýrazňovače, diagramy). Jinak jsou stupně šedi nebo černobílá ostřejší a menší.",
    },
    {
      q: "Co když je stránka pomačkaná nebo skvrnitá?",
      a: "Automatický kontrast dokáže uklidit většinu stárnutí papíru. Silné pomačkání většinou prosvítá; zvaž přefocení, nebo to přijmi jako materiál jen pro vlastní studium.",
    },
  ],
  related: [
    { label: "Skenovat do PDF — skenování fotoaparátem telefonu s detekcí hran", path: "/scan-to-pdf" },
    { label: "Sloučit PDF — spoj vícestránkové skeny", path: "/merge-pdf" },
    { label: "Jak naskenovat dokumenty do PDF telefonem", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Pracovní postup s PDF pro vysokoškoláky", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "Skenovat do PDF — skenování fotoaparátem telefonu", path: "/scan-to-pdf" },
};

export default content;
