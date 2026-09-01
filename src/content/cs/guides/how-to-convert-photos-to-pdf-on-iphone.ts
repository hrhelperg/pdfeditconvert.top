import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-iphone",
  h1: "Jak převést fotky do PDF na iPhonu (řešení formátu HEIC)",
  description:
    "Proměň fotky z iPhonu v jedno PDF – včetně řešení nástrahy formátu HEIC, která leckoho zaskočí. Postup v prohlížeči i rychlejší cesta přímo v aplikaci.",
  updated: "2026-05-23",
  intro: [
    "Proměnit fotky v PDF na iPhonu je něco, po čem lidé sahají neustále – vyfocená smlouva, hromada účtenek na vyúčtování výdajů, obě strany dokladu pro formulář. Úloha je jednoduchá, ale je tu jedna specifická nástraha iPhonu, která za většinou frustrace stojí: iPhone standardně ukládá fotky jako HEIC, ne JPG, a řada nástrojů HEIC neumí přečíst.",
    "Tento návod ukazuje dvě spolehlivé cesty. První používá bezplatný nástroj Obrázek do PDF v Safari, který funguje, jakmile jsou fotky v podporovaném formátu. Druhá používá aplikaci PDF Editor, která čte HEIC přímo z fotoalba a celý tanec kolem formátu úplně přeskočí.",
    "Vyber si tu, která se hodí do dané chvíle – ale nejdřív se seznam s detailem kolem HEIC, protože právě on dokáže z třicetivteřinové úlohy udělat matoucí problém.",
  ],
  steps: [
    {
      title: "Rozhodnout se pro formát fotek",
      body: "Otevři Nastavení → Fotoaparát → Formáty. „Vysoká účinnost“ ukládá HEIC; „Nejvíce kompatibilní“ ukládá JPG. Přepnutím na Nejvíce kompatibilní budou nové fotky fungovat všude, i v nástrojích v prohlížeči.",
    },
    {
      title: "Podle potřeby převést existující fotky HEIC",
      body: "Máš už fotky nafocené v HEIC? Buď je znovu exportuj jako JPG (otevři ve Fotkách, sdílej, zvol možnost, která vytvoří JPG), nebo rovnou přeskoč na postup s aplikací níže, která HEIC čte přímo.",
    },
    {
      title: "Otevřít nástroj Obrázek do PDF v Safari",
      body: "Přejdi na nástroj Obrázek do PDF. Přijímá JPG, PNG i WebP a běží celý na tvém zařízení – nic se nikam nenahrává.",
    },
    {
      title: "Přidat fotky a seřadit je",
      body: "Klepnutím vyber fotky z fotoalba, pak je pomocí šipek seřaď. Na pořadí stránek záleží u vícestránkových dokumentů, jako je dvoustránková smlouva.",
    },
    {
      title: "Vytvořit a uložit PDF",
      body: "Klepni na Create PDF. Jakmile se stáhne, použij ikonu sdílení a ulož ho do aplikace Soubory, nebo ho rovnou pošli dál.",
    },
    {
      title: "Nebo použít aplikaci PDF Editor pro HEIC a skenování",
      body: "Aplikace čte fotky HEIC přímo z fotoalba, promění je v PDF a umí navíc zachytit nové stránky s rozpoznáním okrajů – žádný převod formátu není potřeba.",
    },
  ],
  tips: [
    "Nejčastější příčinou toho, že se „fotky nepřevedou“ na iPhonu, je HEIC. Přepni na Nejvíce kompatibilní, nebo použij aplikaci, a problém zmizí.",
    "Každou fotku ořízni v aplikaci Fotky ještě před převodem – stránka se přizpůsobí velikosti obrázku, takže odstranění pozadí dá uhlazenější dokument.",
    "U účtenek a dokladů foť na tmavém, rovném podkladu při rovnoměrném světle. Odlesky a stíny se hůř opravují, než jim předejít.",
    "Fotka převedená na PDF není prohledávatelný sken. Pokud potřebuješ text vyhledávat, použij funkci skenování v aplikaci, která umí text rozpoznat.",
    "Pokud je hotové PDF na e-mail moc velké, prožeň ho nástrojem Zkomprimovat PDF – fotky z telefonu dělají objemné stránky.",
  ],
  mobileNote:
    "Celý tenhle postup se odehrává na telefonu, a přesně na to je aplikace PDF Editor stavěná: HEIC rovnou z fotoalba, převod v zařízení bez jakéhokoli nahrávání, plus skenování a podepisování na jednom místě. Pro cokoli, co děláš víckrát, je to rychlejší cesta.",
  faq: [
    {
      q: "Proč se moje fotky z iPhonu nenačtou do převodníku?",
      a: "Jsou uložené jako HEIC, který většina nástrojů v prohlížeči nečte. U nových fotek přepni na „Nejvíce kompatibilní“ v Nastavení → Fotoaparát → Formáty, nebo použij aplikaci PDF Editor, která HEIC čte přímo.",
    },
    {
      q: "Můžu spojit víc fotek do jednoho PDF?",
      a: "Ano. Přidej je všechny, přetáhni je do pořadí a z každé fotky se stane stránka jednoho PDF.",
    },
    {
      q: "Nahrávají se moje fotky na server?",
      a: "Ne. Nástroj v prohlížeči zpracovává vše na tvém zařízení, stejně jako aplikace. Fotky zůstávají v soukromí – důležité pro doklady a osobní dokumenty.",
    },
    {
      q: "Bude PDF prohledávatelné?",
      a: "Z obyčejné fotky ne – chybí jí textová vrstva. Použij funkci skenování v aplikaci PDF Editor, která vytvoří dokument s rozpoznaným, prohledávatelným textem.",
    },
    {
      q: "PDF je na e-mail moc velké – co s tím?",
      a: "Fotky z iPhonu ve vysokém rozlišení dělají velké stránky. Prožeň soubor nástrojem Zkomprimovat PDF, aby se vešel pod limit pro přílohy.",
    },
  ],
  related: [
    {
      label: "Obrázek do PDF — převeď fotky přímo v prohlížeči",
      path: "/image-to-pdf",
    },
    {
      label: "Sken do PDF — zachyť papír fotoaparátem",
      path: "/scan-to-pdf",
    },
    {
      label: "Jak převést fotky do PDF na Androidu",
      path: "/guides/how-to-convert-photos-to-pdf-on-android",
    },
    {
      label: "Jak převést JPG do PDF",
      path: "/guides/how-to-convert-jpg-to-pdf",
    },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
