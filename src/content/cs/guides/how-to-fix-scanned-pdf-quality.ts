import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-scanned-pdf-quality",
  h1: "Jak zlepšit kvalitu naskenovaného PDF (doostřit, narovnat, opravit barvy)",
  description:
    "Naskenovaná PDF selhávají předvídatelně: našikmo, vybledlý kontrast, tečkované pozadí, obří soubory. Úpravy před skenováním i nástroje po naskenování, které je skutečně vyčistí.",
  updated: "2026-05-29",
  intro: [
    "Špatný sken zničí jinak jednoduchý dokument. Křivé řádky, vybledlý kontrast, prosvítající prachové tečky, obří velikost souboru – a obsah uvnitř se špatně čte nebo se nedá dál komprimovat. Otravné na tom je, že většina těchhle problémů pochází z nastavení, ne ze samotného PDF, a vyhnout se jim při snímání je mnohem jednodušší než je opravovat dodatečně.",
    "Když už máš špatný sken k opravě, reálné možnosti jsou: narovnat, co je křivé, oříznout, co je špatně zarámované, zmenšit rozlišení toho, co je předimenzované, a smířit se s tím, že rozlišení ztracené při snímání se nevrátí. Některé nástroje na zpracování obrázků slibují „zaostření“; v praxi jen udělají věci jinak vypadající, ne lepší.",
    "Tenhle návod odděluje prevenci (naskenuj to napoprvé pořádně) od záchrany (co dělat se souborem, který už máš). Prevence je důležitější.",
  ],
  steps: [
    {
      title: "Předejdi zkosení správným vkládáním stránek",
      body: "Skenery s automatickým podavačem se zkosí, když stránky nejsou v zásobníku srovnané. Skeny telefonem se zkosí, když nakloníš fotoaparát. Oběma se dá vyhnout: srovnej stránku, drž telefon rovnoběžně s papírem, a sken vyjde rovný.",
    },
    {
      title: "Nastav rozlišení skenu na 200–300 DPI pro dokumenty",
      body: "600 DPI je fotografická kvalita a u napsané stránky vytvoří obří soubory bez jakéhokoli přínosu. 150 DPI je moc málo – text zjemní. Rozsah 200–300 je optimální bod pro dokumenty, které budeš sdílet, archivovat nebo tisknout.",
    },
    {
      title: "Pro text volej odstíny šedi nebo černobílou místo barev",
      body: "Barevný režim u textového dokumentu ztrojnásobí velikost souboru a vnese šum, který se špatně komprimuje. Odstíny šedi nebo černobílá vytvoří ostřejší, menší a čistší skeny pro cokoli, co není fotka nebo barevná grafika.",
    },
    {
      title: "Použij automatický kontrast a automatické oříznutí, pokud jsou dostupné",
      body: "Většina skenovacích aplikací zahrnuje automatický kontrast a rozpoznání okrajů. Oboje udělá skutečný rozdíl: kontrast odstraní šedý opar, rozpoznání okrajů ořízne na stránku, takže okraje zůstanou čisté.",
    },
    {
      title: "Existující skeny komprimuj opatrně",
      body: "Pokud je naskenované PDF už obří, Zkomprimovat PDF v prohlížeči ho dokáže dramaticky zmenšit. U textu nejdi na extrémní nastavení – může zpixelovat znaky. Bezpečná volba je silná, ale ne extrémní komprese.",
    },
    {
      title: "Zešikmené stránky otoč nástrojem Otočit PDF",
      body: "Pokud je na bok nebo obráceně jen pár stránek, Otočit PDF je narovná na místě. Nedokáže opravit mírné úhlové zkosení, ale zvládne rotace o 90/180/270 stupňů, které způsobuje většina chyb podavače.",
    },
  ],
  tips: [
    "U skenů telefonem víc záleží na jasném, rovnoměrném světle než na kvalitě fotoaparátu. Dobře nasvícený sken telefonem předčí výstup ze špatně osvětleného kancelářského skeneru.",
    "Neskenuj do vysokého DPI a barvy jen proto, abys to pak tvrdě komprimoval. Skenuj rovnou se správným nastavením; soubor bude menší, ostřejší a rychlejší na zpracování.",
    "Pozadí, které prosvítá (text z druhé strany tenkého papíru), je problém papíru, ne skenu. Za stránku vlož list tmavého papíru.",
    "Nové naskenování bývá skoro vždycky rychlejší než oprava. Pokud papír pořád máš, oprav sken hned při snímání místo zpracování obrázku dodatečně.",
    "Aplikace pro skenování telefonem, které slibují „vylepšení“, často přidají falešné zaostření, které při bližším pohledu vypadá hůř. Čistý základní sken předčí zpracovaný, ale špatný.",
  ],
  mobileNote:
    "Skeny telefonem se pokazí předvídatelně – úhel, světlo i zaostření jsou plně v rukou uživatele. Skenovací postup v aplikaci PDF Editor používá rozpoznání okrajů a ladění kontrastu v reálném čase, takže se každé zachycení hned napoprvé přiblíží výsledku ze stolního skeneru.",
  faq: [
    {
      q: "Proč je moje naskenované PDF tak vybledlé?",
      a: "Kontrast byl při snímání nastavený příliš nízko. Naskenuj to znovu se zapnutým automatickým kontrastem, nebo s ručně upravenou jasem a kontrastem. Dodatečné zpracování pomůže jen okrajově.",
    },
    {
      q: "Můžu doostřit rozmazaný sken?",
      a: "Jen navenek. Skutečný detail ztracený při snímání se nedá obnovit. Filtry na zaostření mění hrany, ale nepřidávají informaci.",
    },
    {
      q: "Jaké rozlišení skenu bych měl použít?",
      a: "200–300 DPI pro dokumenty. 300, pokud budeš tisknout. Cokoli vyššího je na textu zbytečné a jen nafoukne soubor.",
    },
    {
      q: "Mám skenovat barevně, nebo v odstínech šedi?",
      a: "Odstíny šedi nebo černobílá pro text. Barvu jen pro fotky a barevnou grafiku. Odstíny šedi jsou ostřejší a mnohem menší.",
    },
    {
      q: "Proč jsou moje skeny obří co do velikosti souboru?",
      a: "Obvykle kvůli příliš vysokému DPI spolu s barevným režimem. Oboje sniž hned při snímání, nebo zkomprimuj existující soubor. Naskenovaná PDF profitují z komprese nejvíc.",
    },
  ],
  related: [
    { label: "Skenovat do PDF – čisté snímky s rozpoznáním okrajů", path: "/scan-to-pdf" },
    { label: "Zkomprimovat PDF – zmenši velké skeny", path: "/compress-pdf" },
    { label: "Jak zkomprimovat naskenované PDF", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Proč je moje PDF rozmazané?", path: "/guides/why-is-my-pdf-blurry" },
  ],
  parentHub: { label: "Skenovat do PDF – skenování fotoaparátem telefonu", path: "/scan-to-pdf" },
};

export default content;
