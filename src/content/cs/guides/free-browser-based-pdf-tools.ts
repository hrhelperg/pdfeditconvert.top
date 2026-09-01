import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "free-browser-based-pdf-tools",
  h1: "Bezplatné PDF nástroje v prohlížeči (bez instalace, bez nahrávání)",
  description:
    "PDF nástroje, které běží celé přímo v prohlížeči – bez instalace, bez účtu, bez nahrávání na server. Co je k dispozici, co pokrývají a jak si ověřit, že běží opravdu lokálně.",
  updated: "2026-05-29",
  intro: [
    "Nástroje na PDF v prohlížeči proměnily to, co znamená „online“. Starý model byl: nahraj soubor, server ho zpracuje, stáhni si výsledek. Nový model je: navštiv stránku, prohlížeč soubor zpracuje lokálně, stáhneš si výsledek. Na rozdílu záleží – rychlost, soukromí a taky fakt, že nástroj může zůstat opravdu zdarma.",
    "Nástroje v prohlížeči nejsou marketingové tvrzení; jsou to architektura. Zpracování probíhá v JavaScriptu nebo WebAssembly na tvém počítači, v záložce prohlížeče. Do práce s tvým souborem není zapojený žádný server. Soukromí i to, že jsou zdarma, plyne z architektury, ne z uvedených zásad.",
    "Tenhle návod projde, co je dnes v nástrojích na PDF v prohlížeči k dispozici, jaké úlohy zvládnou dobře, které ještě nepokryjí a jak si ověřit, že je nástroj opravdu lokální, než mu začneš důvěřovat.",
  ],
  steps: [
    {
      title: "Znej, co je k dispozici ve formě v prohlížeči",
      body: "Komprese, slučování, rozdělování, extrakce stránek, přeřazení stránek, otočení, vodoznak, obrázek do PDF, PDF do obrázků, Word do PDF, PDF do Wordu, podepisování. Sada nástrojů v prohlížeči pokrývá většinu každodenní práce s PDF.",
    },
    {
      title: "Ověř, že je nástroj opravdu lokální",
      body: "Vývojářské nástroje prohlížeče, panel Síť, přetáhni tam soubor. Skutečný nástroj v prohlížeči neukáže žádný velký odchozí požadavek při přidání souboru. Kontrola zabere pár vteřin.",
    },
    {
      title: "Použij Zkomprimovat PDF na zmenšení velikosti",
      body: "Přetáhni PDF, vyber úroveň komprese, stáhni. Celá operace proběhne v tvém prohlížeči. Soubory plné skenů se dramaticky zmenší; čistě textové soubory se skoro nezmění.",
    },
    {
      title: "Použij Sloučit PDF na spojení souborů",
      body: "Přetáhni víc PDF, přeřaď přetažením, stáhni sloučený soubor. Slučování proběhne lokálně; spojený soubor vzniká přímo v paměti tvého prohlížeče.",
    },
    {
      title: "Použij Obrázek do PDF a PDF do obrázků na převody mezi obrázkem a dokumentem",
      body: "Obrázek do PDF spojí JPG, PNG a WebP do jednoho PDF. PDF do obrázků vytáhne každou stránku jako PNG nebo JPG. Oba běží lokálně.",
    },
    {
      title: "Použij aplikaci PDF Editor pro postupy zaměřené na mobil",
      body: "Některé postupy (podepisování, skenování, úprava přímo na telefonu) fungují lépe ve vyhrazené mobilní aplikaci než v prohlížeči. Aplikace PDF Editor je iOS/Android doplněk sady nástrojů v prohlížeči – stejná úroveň soukromí, jen víc sedí mobilnímu použití.",
    },
  ],
  tips: [
    "Nástroje v prohlížeči fungují offline, jakmile se stránka jednou načte. Užitečné potvrzení, že jsou opravdu lokální.",
    "Náročné operace na velmi velkých souborech mohou na pár vteřin vytížit procesor záložky – to je normální, ne zaseknutí.",
    "Vícestránkové operace v moderních prohlížečích streamují – nemusíš čekat, až se celý soubor nahraje, protože se nic nenahrává.",
    "Ulož si URL adresu nástroje – nástroje v prohlížeči fungují bez účtů, takže adresa je tvá náhrada za záložku.",
    "Nevěř označení „v prohlížeči“ bez kontroly ve vývojářských nástrojích. Některé nástroje mají rozhraní v prohlížeči, ale soubor pořád nahrávají.",
  ],
  mobileNote:
    "Mobilní prohlížeče spouštějí nástroje v prohlížeči taky. Aplikace PDF Editor používá stejnou architekturu v nativním obalu, se stejným zpracováním přímo na zařízení – uživatelé iPhonu i Androidu dostávají stejnou zdarma a bez nahrávání garantovanou zkušenost.",
  faq: [
    {
      q: "Jaké úlohy s PDF můžou běžet v prohlížeči?",
      a: "Komprese, slučování, rozdělování, extrakce stránek, přeřazení, otočení, vodoznak, převod obrázek↔PDF, Word↔PDF, podepisování. Většina každodenní práce s PDF se do toho vejde.",
    },
    {
      q: "Co ještě v prohlížeči nefunguje?",
      a: "Přesné OCR na dlouhých dokumentech, pokročilé začernění a některé specializované předtiskové postupy pořád těží ze zpracování na serveru.",
    },
    {
      q: "Jak poznám, že je nástroj opravdu v prohlížeči?",
      a: "Vývojářské nástroje prohlížeče, panel Síť. Přetáhni tam soubor. Pokud nevidíš velký odchozí požadavek, zpracovává se lokálně. Pokud vidíš víceMB POST, nahrává.",
    },
    {
      q: "Je zpracování v prohlížeči pomalejší než na serveru?",
      a: "U většiny úloh srovnatelné. Moderní prohlížeče a WebAssembly jsou rychlé. Velmi velké soubory mohou lokálně trvat déle, ale ušetříš čas na nahrání a stažení.",
    },
    {
      q: "Proč jsou nástroje v prohlížeči obvykle zdarma?",
      a: "Protože náročná práce probíhá na tvém zařízení, ne na serverech nástroje. Náklady na hosting jsou minimální; nástroj tak může zůstat zdarma bez tlaku na předplatné.",
    },
  ],
  related: [
    { label: "PDF nástroje — úplný seznam nástrojů v prohlížeči", path: "/pdf-tools" },
    { label: "Nejlepší bezplatné PDF nástroje", path: "/guides/best-free-pdf-tools" },
    { label: "Nejlepší PDF nástroje bez nahrávání", path: "/guides/best-pdf-tools-without-upload" },
    { label: "Výhody zpracování dokumentů v prohlížeči", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "PDF nástroje — bezplatně, v prohlížeči", path: "/pdf-tools" },
};

export default content;
