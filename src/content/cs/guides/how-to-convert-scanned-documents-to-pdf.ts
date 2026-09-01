import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-scanned-documents-to-pdf",
  h1: "Jak převést naskenované dokumenty do PDF",
  description:
    "Máš už obrázky ze skeneru nebo vyfocené papíry? Spoj je v prohlížeči do jednoho PDF – a zjisti, co dělá OCR a proč ho naskenované dokumenty potřebují, aby v nich šlo vyhledávat.",
  updated: "2026-05-23",
  intro: [
    "Existuje důležitý rozdíl mezi skenováním dokumentu a převodem toho, co už naskenované máš. Pokud máš čerstvou hromadu papírů, potřebuješ postup skenování. Ale často už obrázky máš – stolní skener vysypal do složky sadu JPEGů, kolega poslal e-mailem fotky podepsaného formuláře, nebo je fotoalbum na telefonu plné fotek papírování. Úkolem teď je spojit je do jednoho přehledného PDF.",
    "Tento návod se věnuje přesně tomu: spojení obrázků skenů, které už máš, do jednoho PDF pomocí bezplatného nástroje Obrázek do PDF, který běží v prohlížeči a nic se nikam nenahrává. Vysvětlí i to, co lidé nejčastěji pochopí špatně – že převedený sken je obrázek textu, ne prohledávatelný text, a co dělat, pokud potřebuješ slova zpátky.",
    "Pokud ještě potřebuješ papír nejdřív zachytit, podívej se na samostatný návod na skenování; tenhle počítá s tím, že obrázky už existují.",
  ],
  steps: [
    {
      title: "Shromáždit obrázky skenů",
      body: "Soubory JPG nebo PNG ze skeneru, e-mailu nebo fotoalba shromáždi na jedno místo, abys je mohl přidat najednou.",
    },
    {
      title: "Otevřít nástroj Obrázek do PDF",
      body: "Přejdi na nástroj Obrázek do PDF v prohlížeči. Přijímá JPG, PNG i WebP a vše zpracovává na tvém zařízení – žádné nahrávání, žádný účet.",
    },
    {
      title: "Přidat obrázky v pořadí dokumentu",
      body: "Přetáhni skeny do plochy pro přidání souboru. Pomocí šipek nastav stránky do správného pořadí – první stránka formuláře před druhou.",
    },
    {
      title: "Vytvořit PDF",
      body: "Klikni na Create PDF. Z každého skenu se stane stránka a nástroj je lokálně spojí do jednoho dokumentu.",
    },
    {
      title: "Zkomprimovat, pokud je soubor velký",
      body: "Skeny jsou náročné na obrázky a PDF může vyjít velké. Prožeň ho nástrojem Zkomprimovat PDF, aby se vešel pod limity pro e-mail nebo nahrávání – naskenovaný obsah se zmenší hodně a bez velké viditelné ztráty.",
    },
    {
      title: "Podle potřeby přidat prohledávatelný text",
      body: "Převedený sken je obrázek, takže se v něm nedá vyhledávat text. Aby byl prohledávatelný, spusť rozpoznávání textu (OCR) v aplikaci PDF Editor, které nad sken přidá neviditelnou textovou vrstvu.",
    },
  ],
  tips: [
    "Každý sken před spojením narovnej a ořízni – nakřivo naskenovaná stránka zůstane nakřivo i v PDF.",
    "Jednotné rozlišení napříč stránkami dá uhlazenější dokument. Divoce nesourodé velikosti obrázků vytvoří stránky, které v měřítku poskakují.",
    "Nástroje v prohlížeči umí skeny spojit, ale neumí přečíst text uvnitř nich. Pokud potřebuješ slova vyhledávat nebo kopírovat, jde o úlohu pro OCR, kterou zvládne aplikace PDF Editor.",
    "U všeho s razítky, zvýrazněním nebo podpisy si ponech barevný sken; na odstíny šedi přepni jen tam, kde barva nic nepřidává, protože zmenší soubor.",
    "Pojmenuj soubor podle obsahu a data. „Najemni-smlouva-podepsana-2026-05.pdf“ se později hledá mnohem snáz než řetězec čísel ze skeneru.",
  ],
  mobileNote:
    "Pokud jsou „skeny“ ve skutečnosti fotky v telefonu, aplikace PDF Editor je zkratka: promění obrázky z fotoalba v PDF, umí zachytit nové stránky s rozpoznáním okrajů a spustit rozpoznávání textu, takže výsledek je prohledávatelný – vše bez jakéhokoli nahrávání.",
  faq: [
    {
      q: "Jaký je rozdíl mezi tímhle a skenováním?",
      a: "Skenování zachytí papír do obrázků úplně poprvé. Tento návod počítá s tím, že obrázky skenů už máš a potřebuješ je jen spojit do jednoho PDF. Pokud ještě musíš papír zachytit, použij postup skenování.",
    },
    {
      q: "Bude text v mém naskenovaném PDF prohledávatelný?",
      a: "Ze samotného převodu ne – sken je obrázek, takže chybí textová vrstva. Spusť OCR (rozpoznávání textu) v aplikaci PDF Editor a přidej nad sken prohledávatelnou vrstvu.",
    },
    {
      q: "Nahrávají se moje skeny někam?",
      a: "Ne. Nástroj Obrázek do PDF zpracovává soubory v prohlížeči na tvém zařízení, takže citlivé dokumenty zůstávají v soukromí.",
    },
    {
      q: "Proč je moje naskenované PDF tak velké?",
      a: "Skeny jsou v podstatě fotky a několik stránek ve vysokém rozlišení se rychle sečte. Zkomprimuj PDF – skeny plné obrázků se obvykle hodně zmenší s malou viditelnou ztrátou kvality.",
    },
    {
      q: "Můžu opravit stránku, která se naskenovala na bok?",
      a: "Ano. Po spojení použij nástroj Otočit PDF a otoč dotčené stránky do svislé polohy, nebo oprav orientaci zdrojového obrázku ještě před převodem.",
    },
  ],
  related: [
    {
      label: "Obrázek do PDF — spoj skeny přímo v prohlížeči",
      path: "/image-to-pdf",
    },
    {
      label: "Sken do PDF — zachyť papír fotoaparátem",
      path: "/scan-to-pdf",
    },
    {
      label: "Jak naskenovat dokumenty do PDF telefonem",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
    {
      label: "Jak zkomprimovat naskenované PDF",
      path: "/guides/how-to-compress-scanned-pdf",
    },
  ],
  parentHub: { label: "Sken do PDF", path: "/scan-to-pdf" },
};

export default content;
