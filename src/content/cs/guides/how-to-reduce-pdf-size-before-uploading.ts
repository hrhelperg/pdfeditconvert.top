import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-size-before-uploading",
  h1: "Jak zmenšit PDF před nahráním na portál",
  description:
    "Nahrávací portály odmítají velké soubory ještě přísněji než e-mail. Jak dostat PDF pod přísné limity portálu, aniž bys přišel o čitelnost, kterou kontrolují.",
  updated: "2026-05-23",
  intro: [
    "Nahrávací portály jsou přísnější než e-mail. Úřední formulář, systém pro podání žádosti o práci, daňový nebo personální portál často omezí PDF na 2, 4 nebo 5 MB a cokoli většího odmítne se stručnou chybou a bez druhé šance. A co hůř, obvykle jde o naskenované dokumenty – přesně o soubory, které bývají příliš velké nejčastěji.",
    "Tenhle návod je o tom, jak tyhle limity zdolat pomocí bezplatného nástroje Zkomprimovat PDF, který běží v tvém prohlížeči a nic nenahrává na server. Háček u portálů je v tom, že dokument musí navíc zůstat čitelný – odmítnuté nahrání i nečitelný soubor jsou stejně velký neúspěch – takže jde o balancování.",
    "Projdeme si, jak trefit konkrétní cílovou velikost, co dělat, když je limit portálu brutálně nízký, a jak udržet dokument dost čitelný na to, aby prošel kontrolou, ať čeká na druhé straně jakákoli.",
  ],
  steps: [
    {
      title: "Zjisti přesný limit portálu",
      body: "Přečti si drobné písmo u pole pro nahrání. Portály uvádějí pevný strop – často 2–5 MB – a odmítnou cokoli nad ním. Tohle číslo je tvůj cíl.",
    },
    {
      title: "Otevři nástroj Zkomprimovat PDF",
      body: "Přejdi na nástroj Zkomprimovat PDF. Zpracovává soubor přímo v tvém zařízení, což je důležité, protože dokumenty pro portály bývají osobní nebo úřední.",
    },
    {
      title: "Komprimuj směrem k limitu",
      body: "Začni Doporučenou úrovní; pro přísný strop přejdi na Silnou. Nástroj ukáže výslednou velikost, takže hned vidíš, jestli jsi limit zdolal.",
    },
    {
      title: "Ověř, že je pořád čitelný",
      body: "Otevři komprimovaný soubor. Portály odmítají příliš velké soubory a posuzovatelé odmítají ty nečitelné – dokument musí vyhovět oběma. Zkontroluj, že se text pohodlně čte.",
    },
    {
      title: "Pokud se do limitu nevejdeš, uber stránky",
      body: "Pokud samotná komprese nestačí na velmi nízký limit, odstraň nepotřebné stránky nástrojem Extrahovat stránky z PDF, nebo nahraj potřebné části zvlášť, pokud to portál dovoluje.",
    },
    {
      title: "Nahraj soubor se správnou velikostí",
      body: "Odešli komprimovanou verzi. Ponech si originál v plné kvalitě pro případ, že by portál později požádal o zřetelnější kopii.",
    },
  ],
  tips: [
    "Přesný limit zjisti ještě před kompresí. Komprimovat naslepo je zbytečná práce; uvedený limit 4 MB ti přesně řekne, jak moc tlačit.",
    "Portály chtějí dvojí splnění: dost malý na nahrání a dost čitelný na přečtení. Silná komprese, která promění formulář v kaši, propadne u kontroly, i kdyby se nahrání povedlo.",
    "Naskenované dokumenty k žádosti se komprimují dramaticky, takže i limit 2 MB je většinou dosažitelný – jsou to skoro celé obrazová data.",
    "Pokud je limit u vícestránkového skenu nemožně nízký, odstranění prázdných nebo nepodstatných stránek zmenší velikost, aniž by se dotklo kvality.",
    "Ponech si originál. Posuzovatel, který nerozezná detail, může požádat o zřetelnější kopii, a ty budeš mít soubor v plné kvalitě po ruce.",
  ],
  mobileNote:
    "Spousta nahrávání na portály se odehrává z telefonu – vyfotíš dokument a rovnou ho odešleš. Aplikace PDF Editor komprimuje offline a umožní ti před nahráním zkontrolovat čitelnost, takže neodešleš soubor, který je moc velký nebo moc rozmazaný na to, aby prošel.",
  faq: [
    {
      q: "Proč nahrávací portály odmítají moje PDF, i když ho e-mail přijme?",
      a: "Portály nastavují mnohem přísnější limity – často 2–5 MB oproti zhruba 25 MB u e-mailu – a přísně je vynucují. Soubor, který v pohodě projde e-mailem, může být pro portál snadno moc velký.",
    },
    {
      q: "Jak trefím konkrétní cílovou velikost?",
      a: "Komprimuj a sleduj výslednou velikost, postupně zvyšuj úroveň, dokud se nevejdeš pod limit. Nástroj ukazuje čísla před a po, takže můžeš mířit přesně.",
    },
    {
      q: "Co když ani Silná komprese nestačí?",
      a: "Odstraň nepotřebné stránky nástrojem Extrahovat stránky z PDF, nebo nahraj potřebné části zvlášť, pokud to portál dovoluje. Tím zmenšíš velikost, aniž bys dál degradoval zbylé stránky.",
    },
    {
      q: "Nahrává se můj dokument na server, když ho komprimuji?",
      a: "Ne. Nástroj Zkomprimovat PDF běží v tvém prohlížeči, přímo na tvém zařízení – což je důležité, protože dokumenty pro portály bývají osobní nebo úřední.",
    },
    {
      q: "Může silná komprese způsobit, že portál soubor odmítne jako nečitelný?",
      a: "Může. Portály potřebují soubor dost malý na nahrání a dost čitelný na přečtení. Po kompresi zkontroluj čitelnost a ponech si originál pro případ dalšího požadavku.",
    },
  ],
  related: [
    { label: "Zkomprimovat PDF – trefit limit portálu", path: "/compress-pdf" },
    { label: "Extrahovat stránky z PDF – uber stránky a ušetři místo", path: "/extract-pdf-pages" },
    { label: "Nejlepší nastavení komprese PDF", path: "/guides/best-pdf-compression-settings" },
    { label: "Jak zmenšit velikost PDF pro e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "Zkomprimovat PDF", path: "/compress-pdf" },
};

export default content;
