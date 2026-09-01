import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-jpg",
  h1: "Jak převést PDF do JPG – export stránek jako obrázků",
  description:
    "Exportuj stránky PDF jako obrázky JPG přímo v prohlížeči. Kdy je JPG lepší volba než PNG, jak měřítko ovlivňuje kvalitu a kdy je náhled obrázku lepší než PDF.",
  updated: "2026-05-23",
  intro: [
    "Někdy je PDF špatný obal. Chceš vložit jednu stránku do zprávy na Slacku, kde se zobrazí náhled přímo v textu, vložit graf do prezentace, nebo nahrát stránku někam, kde se přijímají jen obrázky. Pro to všechno potřebuješ stránky jako JPG, ne jako PDF.",
    "Tento návod používá bezplatný nástroj PDF do obrázků, který vykreslí každou stránku PDF jako obrázek ke stažení, celé přímo v prohlížeči a nic se nikam nenahrává. JPG je jeden ze dvou nabízených formátů a je správnou volbou, když je velikost souboru důležitější než dokonale ostrý text.",
    "Projdeme si, jak zvolit měřítko (které řídí ostrost), kdy JPG předčí PNG, a omezení, které stojí za to mít na paměti: JPG stránky je plochý obrázek, ne dokument.",
  ],
  steps: [
    {
      title: "Otevřít nástroj PDF do obrázků",
      body: "Přejdi na nástroj PDF do obrázků v prohlížeči. Stránky vykresluje lokálně na tvém zařízení – žádné nahrávání, žádný účet.",
    },
    {
      title: "Přidat PDF",
      body: "Přetáhni jedno PDF do plochy pro přidání souboru nebo klikni pro jeho výběr. Nástroj přečte každou stránku, aby ji mohl exportovat jako obrázek.",
    },
    {
      title: "Zvolit formát JPG",
      body: "Vyber JPG. Vytváří menší soubory než PNG a je správnou volbou pro fotky, snímky celé obrazovky a všude tam, kde je velikost souboru důležitější než dokonale ostrý text.",
    },
    {
      title: "Nastavit měřítko",
      body: "Měřítko určuje, v kolika pixelech se každá stránka vykreslí. 2× je ostré na většině obrazovek; pro menší soubory sniž na 1,5×, nebo jdi na 3×, když potřebuješ velmi ostrý výsledek a velikost ti nevadí.",
    },
    {
      title: "Exportovat stránky",
      body: "Spusť převod. Každá stránka se stáhne jako vlastní soubor JPG, připravený k vložení do zprávy, prezentace nebo formuláře pro nahrání.",
    },
    {
      title: "Vybrat stránku, kterou potřebuješ",
      body: "Pokud jsi chtěl jen jednu stránku, ponech si ten JPG a ostatní smaž. U dlouhého PDF ti jeho rozdělení předem ušetří třídění řady obrázků.",
    },
  ],
  tips: [
    "JPG zvol, když je stránka plná fotek nebo optimalizuješ na velikost; PNG zvol, když je stránka hlavně text nebo čárová grafika, která musí zůstat ostrá.",
    "Vyšší měřítko znamená ostřejší obrázky a větší soubory. 3× nemá smysl, pokud se obrázek bude zobrazovat jen v malé velikosti.",
    "JPG stránky nemá textovou vrstvu – slova nejde vyhledat, vybrat ani zkopírovat. Pokud text ještě budeš potřebovat, ponech si původní PDF.",
    "Velmi rozsáhlá PDF ve vysokém měřítku můžou vyčerpat paměť prohlížeče. Pokud si nástroj neví rady, sniž měřítko na 1,5× nebo PDF nejdřív rozděl.",
    "PDF chráněná heslem se v prohlížeči nedají vykreslit. Heslo nejdřív odstraň, nebo použij aplikaci PDF Editor.",
  ],
  mobileNote:
    "Na telefonu jde export stránky jako obrázku často o sdílení: náhledy obrázků se zobrazí přímo v konverzaci, zatímco příloha PDF tam jen leží jako ikona. Aplikace PDF Editor vykreslí a exportuje stránky okamžitě s hardwarovou akcelerací a rovnou je předá do nabídky sdílení.",
  faq: [
    {
      q: "JPG nebo PNG – co mám exportovat?",
      a: "JPG pro menší soubory a stránky plné fotek; PNG, když je stránka hlavně text nebo diagramy, které musí zůstat ostré. Komprese JPG rozmazává jemné hrany, což je vidět na písmu.",
    },
    {
      q: "Dostanu jeden obrázek na stránku?",
      a: "Ano. Každá stránka PDF se vykreslí a stáhne jako samostatný soubor JPG. Pokud potřebuješ jen jednu stránku, ponech si ten soubor a ostatní zahoď.",
    },
    {
      q: "Nahrává se moje PDF někam?",
      a: "Ne. Vykreslování probíhá celé v prohlížeči, takže soubor z tvého zařízení nikdy neodejde.",
    },
    {
      q: "Půjde v JPG později vyhledávat text?",
      a: "Ne. Převedená stránka je plochý obrázek bez textové vrstvy. Pokud chceš prohledávatelný text, ponech si původní PDF.",
    },
    {
      q: "Co dělá nastavení měřítka?",
      a: "Určuje, kolik pixelů obrázku se vykreslí na jeden bod PDF. 2× vypadá ostře na většině displejů; 3× je velmi ostré, ale vytváří velké soubory.",
    },
  ],
  related: [
    {
      label: "PDF do obrázků — exportuj stránky přímo v prohlížeči",
      path: "/pdf-to-images",
    },
    { label: "Obrázek do PDF — opačný postup", path: "/image-to-pdf" },
    {
      label: "Jak převést PDF do PNG",
      path: "/guides/how-to-convert-pdf-to-png",
    },
    {
      label: "Jak rozdělit PDF na samostatné soubory",
      path: "/guides/how-to-split-pdf-files",
    },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
