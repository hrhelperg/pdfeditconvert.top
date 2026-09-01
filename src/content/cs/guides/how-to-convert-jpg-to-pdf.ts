import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-jpg-to-pdf",
  h1: "Jak převést JPG do PDF – bezplatný převod obrázků",
  description:
    "Spoj jednu nebo více fotek JPG do jednoho PDF přímo v prohlížeči. Ideální pro účtenky, doklady a vyfotografované dokumenty – s upřímnými poznámkami ke kvalitě a formátu HEIC na iPhonu.",
  updated: "2026-05-23",
  intro: [
    "JPG je formát, který dostaneš od fotoaparátu a většiny webů, takže je nejčastějším výchozím bodem pro „proměň to v PDF“. Důvod k převodu bývá skoro pořád stejný: jeden JPG se jako dokument posílá nešikovně. Víc JPG je ještě horší – pět samostatných fotek účtenek v e-mailu je něco, co si účetní v duchu vyprosí. Jedno PDF, stránky v pořadí, to je to, co lidé ve skutečnosti chtějí dostat.",
    "Tento návod používá bezplatný nástroj Obrázek do PDF, který spojí soubory JPG do jednoho PDF přímo v prohlížeči – nic se nikam nenahrává. Hodí se pro účtenky, fotky dokladů, snímky obrazovky a fotky papírových dokumentů, které potřebuješ spojit dohromady a poslat.",
    "JPG je ztrátový formát fotek, takže se vyplatí vědět, co se přenese čistě a co ne, než se na něj spolehneš u něčeho, co musí zůstat čitelné.",
  ],
  steps: [
    {
      title: "Otevřít nástroj Obrázek do PDF",
      body: "Přejdi na nástroj Obrázek do PDF v prohlížeči. Přijímá JPG, PNG i WebP a běží celý na tvém zařízení – žádné nahrávání, žádný účet.",
    },
    {
      title: "Přidat soubory JPG",
      body: "Přetáhni fotky do plochy pro přidání souboru nebo klikni pro jejich výběr. Přidej jich, kolik potřebuješ; z každého obrázku vznikne jedna stránka PDF.",
    },
    {
      title: "Seřadit je ve správném pořadí",
      body: "Šipkami nahoru a dolů u každého řádku seřaď stránky. U vícestránkového dokumentu je tohle nejdůležitější krok – druhá strana smlouvy by neměla skončit před tou první.",
    },
    {
      title: "Vytvořit PDF",
      body: "Klikni na Create PDF. Každý obrázek se umístí na vlastní stránku podle velikosti fotky a spojený soubor se vygeneruje lokálně.",
    },
    {
      title: "Stáhnout a přejmenovat",
      body: "PDF se stáhne automaticky. Před odesláním mu dej výstižný název – „Uctenky-Brezen.pdf“ v cizí schránce zapůsobí lépe než „IMG_4821.pdf“.",
    },
    {
      title: "Zkomprimovat, pokud jde do e-mailu",
      body: "PDF postavené na fotkách rychle nabírá na velikosti. Pokud soubor přesahuje běžný limit 25 MB pro přílohy, prožeň ho ještě nástrojem Zkomprimovat PDF.",
    },
  ],
  tips: [
    "Každou fotku před převodem ořízni a narovnej. Nástroj přizpůsobí stránku obrázku, takže křivá fotka znamená křivou stránku.",
    "U fotek dokumentů je dobré, rovnoměrné osvětlení lepší než jakýkoli filtr. Vyhni se stínům vlastní ruky nebo telefonu padajícím na stránku.",
    "JPG dobře komprimuje fotky, ale rozmazává jemný text a ostré hrany. Pro snímky obrazovky nebo cokoli s ostrým písmem drží text čistší PNG – viz návod na převod PNG do PDF.",
    "Fotky z iPhonu se často ukládají jako HEIC, ne JPG. Nástroj v prohlížeči potřebuje JPG, PNG nebo WebP, takže buď přepni fotoaparát v Nastavení na „Nejvíce kompatibilní“, nebo použij aplikaci PDF Editor, která HEIC čte přímo.",
    "Fotka dokumentu není prohledávatelný sken – chybí jí textová vrstva, takže slova nejde vyhledat ani zkopírovat. Pokud na tom záleží, použij postup se skenováním.",
  ],
  mobileNote:
    "Většina JPG vzniká na telefonu, a přesně tam aplikace PDF Editor exceluje: vytáhne fotky přímo z fotoalba (včetně HEIC), promění je v PDF a umí naskenovat i nové stránky s rozpoznáním okrajů – bez zajížďky přes počítač.",
  faq: [
    {
      q: "Můžu spojit víc JPG do jednoho PDF?",
      a: "Ano – to je hlavní účel. Přidej všechny obrázky, přetáhni je do pořadí a stanou se z nich po sobě jdoucí stránky jednoho PDF.",
    },
    {
      q: "Nahrávají se moje fotky někam?",
      a: "Ne. Převod probíhá v prohlížeči na tvém vlastním zařízení. Obrázky z něj nikdy neodejdou, což je důležité pro doklady a osobní dokumenty.",
    },
    {
      q: "Fotky z iPhonu se nenačtou – proč?",
      a: "Pravděpodobně jde o soubory HEIC, které nástroj v prohlížeči nečte. Změň formát fotoaparátu na „Nejvíce kompatibilní“ v Nastavení → Fotoaparát → Formáty, nebo použij aplikaci PDF Editor, která HEIC zvládá.",
    },
    {
      q: "Bude PDF prohledávatelné?",
      a: "Ne. Převedená fotka je obrázek bez textové vrstvy, takže slova nejde vyhledat ani vybrat. Pro prohledávatelný dokument naskenuj s rozpoznáním textu pomocí aplikace PDF Editor.",
    },
    {
      q: "Proč je moje PDF tak velké?",
      a: "Fotky z telefonu ve vysokém rozlišení jsou velké a několik jich rychle naroste. Prožeň výsledek nástrojem Zkomprimovat PDF, aby se vešel pod limity pro e-mail a nahrávání.",
    },
  ],
  related: [
    { label: "Obrázek do PDF — spoj JPG přímo v prohlížeči", path: "/image-to-pdf" },
    { label: "Zkomprimovat PDF — zmenši výsledek pro e-mail", path: "/compress-pdf" },
    {
      label: "Jak převést PNG do PDF",
      path: "/guides/how-to-convert-png-to-pdf",
    },
    {
      label: "Jak převést fotky do PDF na iPhonu",
      path: "/guides/how-to-convert-photos-to-pdf-on-iphone",
    },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
