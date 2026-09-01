import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-jpg-for-documents",
  h1: "PDF vs JPG pro dokumenty – přestaň posílat fotky",
  description:
    "Proč je fotka dokumentu ve formátu JPG špatná volba k odeslání, kdy je správně PDF a jak fotku převést na pořádný dokument.",
  updated: "2026-05-23",
  intro: [
    "Někdo tě požádá o dokument a nejrychlejší je ho vyfotit a poslat JPG. Působí to efektivně. Právě proto ale druhá strana nakonec mhouří oči nad nakřivo vyfoceným obrázkem plným odlesků, neumí ho pořádně vytisknout, prohledat ani založit spolu s ostatními soubory. Pro skutečný dokument je fotka JPG skoro vždycky špatný formát – a PDF je skoro vždycky ten správný.",
    "Tenhle návod vysvětluje ten rozdíl tam, kde na něm skutečně záleží: u dokumentů. Není to neutrální srovnávací tabulka funkcí – je to argument pro to, abys tu fotku před odesláním převedl do PDF, a rychlý způsob, jak to udělat pomocí bezplatného nástroje Obrázek do PDF, který běží přímo v tvém zařízení a nic nenahrává.",
    "Pokud jsi někdy dostal pět JPG, které měly být jedno úhledné PDF, tenhle návod je ten, co pošleš zpátky.",
  ],
  steps: [
    {
      title: "Pochop, co fotka JPG ztratí",
      body: "Vyfocený dokument je jediný obrázek: žádné víc stránek v jednom souboru, žádný prohledávatelný text, často nakřivo a nerovnoměrně nasvícený. Je to snímek dokumentu, ne dokument.",
    },
    {
      title: "Zjisti, co PDF dokumentu dá",
      body: "PDF drží víc stránek v jednom souboru, tiskne se v předvídatelné velikosti, otevře se všude stejně a přirozeně sedí vedle ostatních dokumentů. Je to formát, ve kterém zbytek světa dokumenty zakládá a archivuje.",
    },
    {
      title: "Rozhodni se podle účelu",
      body: "Pokud ho příjemce bude číst, tisknout, zakládat nebo kombinovat s jinými dokumenty, pošli PDF. Osamocené JPG je v pořádku jen tehdy, když je samotný obrázek smyslem sdělení – fotka, ne papírování.",
    },
    {
      title: "Převeď fotku do PDF",
      body: "Otevři nástroj Obrázek do PDF, přidej svoje JPG, seřaď je a vytvoř jedno PDF. Několik vyfocených stránek se promění v jeden dokument místo rozházené hromádky obrázků.",
    },
    {
      title: "Ať to vypadá jako dokument",
      body: "Fotky nejdřív oříznu a narovnej, aby stránky seděly do čtverce. Pro cokoli důležitého pořádný sken s rozpoznáním okrajů předčí obyčejnou fotku.",
    },
    {
      title: "Dej tomu správnou velikost a odešli",
      body: "Pokud fotky stránek PDF zatížily, zkomprimuj ho, a pak pošli jeden čistý soubor, který příjemce doopravdy využije.",
    },
  ],
  tips: [
    "Prozrazující signál, že jsi měl poslat PDF: příjemce tě požádá, ať to „pošleš jako pořádný dokument“, nebo ho nedokáže čistě vytisknout.",
    "Víc stránek je rozhodující argument. Dvě JPG dvoustránkového formuláře jsou nepořádek; jedno PDF je dokument.",
    "JPG textu není prohledávatelné. PDF vzniklé ze skutečného textu ano, a i naskenovaná PDF lze rozpoznáním textu udělat prohledávatelnými.",
    "JPG je správná volba, když je obrázek sám obsahem – fotka produktu, snímek obrazovky, který sdílíš jako obrázek. Je to špatně, když je obsahem dokument.",
    "Převod špatnou fotku nespraví. Stránku před převodem pořádně narovnej a nasviť, nebo ji rovnou naskenuj správně.",
  ],
  mobileNote:
    "Protože provinilé JPG skoro vždycky vzniká jako fotka z telefonu, i oprava patří na telefon. Aplikace PDF Editor promění fotky z fotogalerie v PDF, nebo stránku rovnou pořádně naskenuje s rozpoznáním okrajů a textu – takže to, co pošleš, je dokument, ne rychlý snímek.",
  faq: [
    {
      q: "Proč bych neměl prostě poslat JPG dokumentu?",
      a: "Fotka JPG je jediný, často nakřivo vyfocený obrázek bez prohledávatelného textu, bez podpory víc stránek a s nepředvídatelnou velikostí tisku. U dokumentu to znamená práci navíc pro příjemce. PDF se tomuhle všemu vyhne.",
    },
    {
      q: "Kdy je JPG skutečně správná volba?",
      a: "Když je samotný obrázek obsahem – fotografie, snímek obrazovky, který sdílíš jako obrázek. JPG je špatně konkrétně tehdy, když je obsahem dokument, který má někdo přečíst, vytisknout nebo založit.",
    },
    {
      q: "Jak proměním fotku v dokument PDF?",
      a: "Použij nástroj Obrázek do PDF: přidej svoje JPG, seřaď je a vytvoř jedno PDF. Pro nejlepší výsledek fotky nejdřív narovnej, nebo stránku rovnou pořádně naskenuj.",
    },
    {
      q: "Bude převedené PDF prohledávatelné?",
      a: "Ne z obyčejné fotky – pořád je to obrázek. Pro prohledávatelný text naskenuj dokument s rozpoznáním textu pomocí aplikace PDF Editor místo pouhého vyfocení.",
    },
    {
      q: "Existuje neutrální srovnání funkcí obou formátů?",
      a: "Ano. Pro přímé srovnání PDF a JPG podle kvality, velikosti a použití se podívej na stránku srovnání PDF a JPG.",
    },
  ],
  related: [
    { label: "Obrázek do PDF – proměň fotky v dokument", path: "/image-to-pdf" },
    { label: "PDF nebo JPG – srovnání funkcí", path: "/compare/pdf-vs-jpg" },
    { label: "Jak převést JPG do PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Jak vytvořit PDF z fotoaparátu", path: "/guides/how-to-create-pdf-from-camera" },
  ],
  parentHub: { label: "Konvertor PDF", path: "/pdf-converter" },
};

export default content;
