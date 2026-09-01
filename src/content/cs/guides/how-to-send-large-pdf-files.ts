import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-large-pdf-files",
  h1: "Jak odeslat velké PDF soubory (5 spolehlivých způsobů)",
  description:
    "Pět spolehlivých způsobů, jak poslat PDF, které je na e-mail příliš velké – komprese, rozdělení, odkaz na cloud a další – a jak si mezi nimi vybrat.",
  updated: "2026-05-23",
  intro: [
    "E-mail je místo, kde velká PDF nejčastěji narazí. Limity jsou skutečné a nekompromisní – 25 MB u Gmailu, kolem 20 MB u Outlooku, u příjemce často ještě míň – a dokument plný skenů je snadno překročí. Řešení není jeden trik; je to znalost hrstky spolehlivých možností a toho, která se hodí na tvůj soubor a tvého příjemce.",
    "Tenhle návod probírá praktické cesty zhruba v pořadí, v jakém by je většina lidí měla zkoušet: zmenšit, rozdělit, nebo poslat odkaz. Dvě z nich používají bezplatné nástroje v prohlížeči, které běží přímo na tvém zařízení a nic nenahrávají; třetí je o volbě způsobu sdílení, který respektuje citlivost dokumentu.",
    "Cílem je soubor, který dorazí neporušený a čitelný, aniž bys mu zničil kvalitu nebo ho omylem přesdílel přes službu, které nedůvěřuješ.",
  ],
  steps: [
    {
      title: "Nejdřív zkus kompresi",
      body: "Pošli soubor přes nástroj Zkomprimovat PDF. Skeny a PDF plná obrázků se často vejdou pod e-mailové limity na jeden zátah, což je nejjednodušší možná oprava.",
    },
    {
      title: "Pokud je pořád moc velké, rozděl ho",
      body: "Pošli dokument jako dva nebo tři menší soubory pomocí nástroje Rozdělit PDF. Dvě čitelné poloviny jsou lepší než jeden soubor rozmačkaný kompresí do kaše.",
    },
    {
      title: "U opravdu velkých souborů sdílej odkaz na cloud",
      body: "Nahraj soubor do cloudového úložiště, které ovládáš, a pošli odkaz. Tím e-mailové limity úplně obejdeš a přístup můžeš později kdykoli zrušit – ale u citlivých dokumentů volit službu, které důvěřuješ.",
    },
    {
      title: "Zkontroluj limit příjemce, ne jen svůj",
      body: "Tvůj poskytovatel ti třeba dovolí poslat 25 MB, zatímco ten na druhé straně odmítá cokoli nad 10 MB. V nejistotě miř nízko nebo použij odkaz.",
    },
    {
      title: "Ověř, že to, co posíláš, má správnou velikost a je v pořádku",
      body: "Ať zvolíš jakoukoli cestu, otevři si finální soubor jako první – správné stránky, čitelná kvalita, nic, co by tam být nemělo.",
    },
  ],
  tips: [
    "Postupuj v pořadí: komprese, pak rozdělení, pak odkaz. Každý krok stojí víc úsilí než ten předchozí, takže přestaň, jakmile se soubor dá odeslat.",
    "Odkaz na cloud je obvykle nejpoctivější odpověď pro opravdu obří soubory – u důvěrných dokumentů ale volit službu, které důvěřuješ, a přístup zrušit, jakmile ho už nikdo nepotřebuje.",
    "Komprese převede stránky na obrázky a odstraní vybratelný text. Pokud příjemce potřebuje text kopírovat, pošli originál přes odkaz místo silně komprimované přílohy.",
    "Rozdělení podél přirozených hranic (kapitoly, oddíly, podepsané versus nepodepsané) je pro příjemce užitečnější než rozdělení na libovolné stránce.",
    "Neposílej citlivé dokumenty na bezplatnou službu pro „velké soubory“ od neznámé třetí strany, o které jsi nikdy neslyšel, jen abys obešel limit velikosti – vyměníš tím drobnou nepříjemnost za skutečné riziko pro soukromí.",
  ],
  mobileNote:
    "Když je předimenzovaný soubor v telefonu, aplikace PDF Editor ho offline zkomprimuje a rozdělí a výsledek předá rovnou tvé e-mailové nebo zprávové aplikaci – velký sken tak pošleš odkudkoli, aniž bys ho nejdřív musel nahrát na neznámou službu.",
  faq: [
    {
      q: "Jaký je nejjednodušší způsob, jak poslat příliš velké PDF?",
      a: "Nejdřív ho zkomprimuj. Skeny a PDF plná obrázků se často vejdou pod e-mailové limity na jeden zátah, čímž se úplně vyhneš rozdělování nebo odkazům.",
    },
    {
      q: "Kdy mám rozdělit místo komprimace?",
      a: "Když samotná komprese soubor dost nezmenší, aniž by zničila kvalitu. Dva nebo tři čitelné soubory jsou lepší než jeden zdegradovaný.",
    },
    {
      q: "Jsou odkazy na cloud bezpečné pro citlivé dokumenty?",
      a: "Mohou být, pokud použiješ službu, které důvěřuješ, a přístup po dokončení zrušíš. Vyhýbej se neznámým bezplatným službám pro „velké soubory“ u čehokoli důvěrného.",
    },
    {
      q: "Jak zjistím, že to příjemce vůbec dokáže přijmout?",
      a: "Jeho limit může být nižší než tvůj. Pokud si nejsi jistý, zkomprimuj hodně pod 10 MB nebo pošli odkaz, místo abys riskoval tiché odmítnutí.",
    },
    {
      q: "Poškodí komprese kvůli odeslání dokument?",
      a: "Je ztrátová a odstraní vybratelný text. U dokumentů, kde záleží na kvalitě nebo prohledávatelnosti textu, sdílej originál přes odkaz místo toho, abys ho namačkal do přílohy.",
    },
  ],
  related: [
    { label: "Zkomprimovat PDF – zmenši ho k odeslání", path: "/compress-pdf" },
    { label: "Rozdělit PDF – pošli ho po částech", path: "/split-pdf" },
    { label: "Jak zmenšit velikost PDF pro e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Jak sdílet PDF z telefonu", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Zkomprimovat PDF", path: "/compress-pdf" },
};

export default content;
