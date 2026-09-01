import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-png",
  h1: "PDF vs PNG – vícestránkové dokumenty vs jednotlivé ostré obrázky",
  description:
    "Pro vícestránkové dokumenty vyhrává PDF, pro jednotlivé ostré obrázky s průhledným pozadím zase PNG. Jasná pravidla a převod mezi oběma formáty.",
  updated: "2026-05-29",
  intro: [
    "PDF i PNG jsou skvělé v tom, na co jsou, a jsou na jinou věc. PDF drží vícestránkové dokumenty s vybratelným textem, vloženými písmy, podpisy a strukturou. PNG drží jednotlivé bitmapové obrázky s bezeztrátovou kompresí a podporou průhlednosti. Každý je špatný nástroj na úlohu toho druhého a zmatek většinou vzniká z toho, že lidé používají PNG na poslání něčeho, co je ve skutečnosti dokument.",
    "PNG vyniká, když potřebuješ ostrý, přesný, jednotlivý obrázek – logo s průhledným pozadím, screenshot, diagram, graf. Data jsou pixely; žádný podkladový text neexistuje. PDF vyniká, když potřebuješ stránky, písma, výběr textu nebo jakoukoli vícekrokovou strukturu.",
    "Tenhle návod dává jasná pravidla, kdy použít který formát, převod mezi nimi oběma směry a případy, kdy je volba skutečně na tvém úsudku.",
  ],
  steps: [
    {
      title: "Používej PDF na cokoli vícestránkového",
      body: "Jakýkoli dokument se dvěma nebo víc stránkami by měl být PDF, ne sekvence PNG. PDF drží stránky pohromadě, zachovává pořadí a předává jeden soubor, který si příjemce přečte postupně.",
    },
    {
      title: "Používej PNG na jednotlivé ostré obrázky s průhledností",
      body: "Loga na průhledném pozadí, diagramy, screenshoty – PNG je správný formát. Bezeztrátová komprese udrží text a čáry ostré; alfa kanál podporuje průhlednost.",
    },
    {
      title: "Nepoužívej PNG na fotografický obsah",
      body: "Fotky jsou v PNG velké a bezeztrátová komprese jim k ničemu není. JPG zvládne fotky s podobnou vizuální kvalitou za zlomek velikosti.",
    },
    {
      title: "Převeď PDF do PNG, když chceš vytáhnout stránky jako obrázky",
      body: "PDF do obrázků exportuje každou stránku PDF jako PNG ve vysokém rozlišení. Užitečné, když potřebuješ stránku jako jednotlivý obrázek pro prezentaci, webovou stránku nebo návrhový nástroj.",
    },
    {
      title: "Převeď PNG do PDF, když chceš zabalit screenshoty do dokumentu",
      body: "PNG do PDF nebo Obrázek do PDF spojí PNG screenshoty do jednoho PDF. Užitečné, když jsi pořídil hodně screenshotů a chceš je sdílet jako jeden seřazený soubor.",
    },
    {
      title: "U jednotlivých stránek plných textu je pořád lepší PDF",
      body: "I jednotlivá stránka s textovým obsahem má z PDF víc než z PNG – text zůstává vybratelný, velikost souboru je menší a příjemce z něj může kopírovat.",
    },
  ],
  tips: [
    "PNG screenshotu je v pořádku; PNG vícestránkového dokumentu je špatně. Vícestránkové patří do PDF.",
    "Pokud tvůj PNG obsahuje fotky, přepni na JPG – stejná vizuální kvalita, mnohem menší soubor.",
    "Převod PNG → PDF zachová obrázek v plném rozlišení; žádná ztráta kvality.",
    "Převod PDF → PNG ti umožní nastavit rozlišení. Vyšší je ostřejší, ale větší; měřítko 2× bývá správná rovnováha.",
    "Neexportuj do PNG dokument, který máš jako PDF, pokud výslovně nepotřebuješ obrázkový formát. PDF je užitečnější.",
  ],
  mobileNote:
    "Telefony často zachytí obsah jako PNG screenshoty, i když by to mělo být PDF. Aplikace PDF Editor spojí PNG screenshoty do jednoho PDF přímo na zařízení – užitečné, když chceš víc snímků sdílet jako jeden seřazený soubor místo roztroušené sady.",
  faq: [
    {
      q: "Kdy mám použít PNG místo PDF?",
      a: "Když potřebuješ jednotlivý, ostrý obrázek, zvlášť s průhledností. Loga, diagramy, screenshoty, grafy, které jdou do jiných dokumentů.",
    },
    {
      q: "Je PDF, nebo PNG menší pro jednu stránku?",
      a: "Záleží na obsahu. Textově bohatá jednotlivá stránka: vyhrává PDF. Obrázkem bohatá jednotlivá stránka: podobně, nebo PNG mírně větší kvůli bezeztrátovosti.",
    },
    {
      q: "Můžu upravovat PNG uvnitř PDF?",
      a: "Ano – PDF drží PNG a obrázek můžeš upravovat nástroji na úpravu PDF. Užitečné pro vkládání loga nebo screenshotu do dokumentu.",
    },
    {
      q: "Proč PNG nepodporuje víc stránek?",
      a: "PNG je v podstatě obrázkový formát. Vícestránkové formáty dokumentů (PDF, TIFF) jsou navržené přesně pro tenhle účel. PNG ne.",
    },
    {
      q: "Co když mám hodně PNG na sdílení?",
      a: "Obrázek do PDF je spojí do jednoho seřazeného PDF. Příjemci dostanou jeden soubor místo složky s přílohami.",
    },
  ],
  related: [
    { label: "PDF do obrázků — export stránek jako PNG nebo JPG", path: "/pdf-to-images" },
    { label: "Obrázek do PDF — spoj PNG do jednoho PDF", path: "/image-to-pdf" },
    { label: "Jak převést PNG do PDF", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "Jak převést PDF do PNG", path: "/guides/how-to-convert-pdf-to-png" },
  ],
  parentHub: { label: "PDF do obrázků — export stránek jako PNG nebo JPG", path: "/pdf-to-images" },
};

export default content;
