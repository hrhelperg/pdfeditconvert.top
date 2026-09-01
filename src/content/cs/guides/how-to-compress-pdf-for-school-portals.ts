import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-for-school-portals",
  h1: "Jak zkomprimovat PDF pro školní portály (přísné limity)",
  description:
    "Nahrávací portály škol a univerzit omezují velikost PDF ještě přísněji než e-mail. Jak zkomprimovat úkoly, aby se vešly, aniž bys zničil čitelnost, kterou hodnotitel kontroluje.",
  updated: "2026-05-29",
  intro: [
    "Školní portály patří mezi nejpřísnější nahrávače PDF v běžném provozu. Zatímco e-mail občas snese 25 MB, portál pro předmět má často strop na 5 MB – a systémy základních a středních škol občas i na 2 MB. Přidej pár naskenovaných stránek ručně psané práce k napsanému úkolu a najednou jsi nad limitem, dvě minuty před termínem.",
    "Komprese je správná odpověď, ale příliš agresivní komprese ztíží čtení práce – a přesně to tě stojí body. Trik je komprimovat chytře: tvrdě na částech plných skenů, které tvoří většinu velikosti souboru, jemně na napsaných částech, které se stejně moc nezmenší, a jen tolik, kolik je potřeba, aby ses vešel pod strop portálu.",
    "Tenhle návod tě provede reálným postupem – co komprimovat, co nechat na pokoji a co dělat, když se ani při maximální kompresi soubor nevejde.",
  ],
  steps: [
    {
      title: "Nejdřív zkontroluj uvedený limit portálu",
      body: "Většina portálů strop uvádí; spousta studentů se tam nikdy nepodívá. Znalost čísla mění strategii: limit 2 MB je těsný, limit 25 MB je velkorysý. Miř na 80 % stropu, ať máš rezervu.",
    },
    {
      title: "Zjisti, co dělá soubor velkým",
      body: "Naskenované ručně psané stránky bývají obvyklým viníkem. Každá naskenovaná stránka je obrázek v plném rozlišení. Dvacetistránkový napsaný úkol je malý; ten samý s pěti naskenovanými stránkami se může ztrojnásobit.",
    },
    {
      title: "Zkomprimuj pomocí nástroje Zkomprimovat PDF",
      body: "Zkomprimovat PDF v prohlížeči zmenší soubor přímo na tvém zařízení. Nejdřív zkus silnou kompresi – moderní kompresory drží ručně psanou práci čitelnou i při silném nastavení.",
    },
    {
      title: "Po kompresi zkontroluj čitelnost",
      body: "Otevři zkomprimovaný soubor a přibliž místo, které bude hodnotitel číst. Pokud text nebo diagramy vypadají příliš měkce, vrať se ke střední kompresi a zkus to znovu. Čitelnost vyhrává nad malou velikostí.",
    },
    {
      title: "Pokud jsi pořád nad limitem, odstraň nepoužité stránky",
      body: "Extrahovat stránky z PDF ponechá jen stránky, které potřebuješ. Prázdná zadní strana, duplicitní sada úloh, zástupná stránka – zbav se jich a velikost souboru klesne s nimi.",
    },
    {
      title: "Pokud pořád nad limitem, rozděl do víc nahrání",
      body: "Některé portály přijímají víc souborů. Rozdělit PDF nebo Extrahovat stránky z PDF vytvoří části pod stropem. Pojmenuj je jasně (Ukol3_Cast1.pdf, Ukol3_Cast2.pdf).",
    },
  ],
  tips: [
    "Skenuj ve stupních šedi, ne barevně, ještě před tím, než vůbec začneš komprimovat. Volba před skenováním ušetří víc, než dokáže jakákoli komprese po skenu.",
    "Přeskenování při nižším DPI (200 místo 600) zmenší soubor 5–10× beze změny čitelnosti u ručně psané práce.",
    "Nekomprimuj dvakrát. Opakovaná komprese násobí ztrátu kvality. Drž si nezkomprimovaný master a komprimuj až pro odevzdání.",
    "Nezabaluj PDF do ZIPu, aby bylo „menší“. Většina portálů ZIP archivy rovnou odmítá; pokud je přijmou, často je rozbalí se stejným efektivním limitem.",
    "Pokud portál zkomprimovaný soubor odmítne jako neplatný, znovu ho exportuj přes tisk do PDF – to ho zploští na základní PDF, které přijme každý portál.",
  ],
  mobileNote:
    "Nahrávání z telefonu na školní portály je dnes běžné a telefon je zároveň místo, odkud obvykle pocházejí ty na skeny náročné části úkolu. Aplikace PDF Editor komprimuje skeny přímo na zařízení ještě před nahráním, takže je soubor připravený pro portál dřív, než narazí na nestabilní mobilní připojení.",
  faq: [
    {
      q: "Jakou velikost většina školních portálů přijímá?",
      a: "Běžné limity jsou 2 MB (některé základní a střední školy), 5 MB (mnoho středoškolských a vysokoškolských portálů) a 10–25 MB (velkorysejší vysokoškolské portály). Zkontroluj konkrétní předmět.",
    },
    {
      q: "Udělá agresivní komprese text nečitelným?",
      a: "Někdy. Silná komprese u už tak nízkého rozlišení skenu může znaky rozpixelovat. Zkus nejdřív silnou; pokud text zezmatní, ustup na střední.",
    },
    {
      q: "Mám mazat prázdné stránky?",
      a: "Ano. Extrahovat stránky z PDF nebo Rozdělit PDF je odstraní. Prázdné stránky zabírají reálný prostor a nejsou součástí práce.",
    },
    {
      q: "Můžu odevzdat místo toho ZIP?",
      a: "Většina školních portálů ZIP archivy nepřijímá. Ty, které ano, stejně uplatňují limity velikosti a mohou ZIP posuzovat jako jeden soubor se stejným stropem.",
    },
    {
      q: "Co když je zkomprimovaný soubor pořád příliš velký?",
      a: "Odstraň nepoužité stránky, přeskenuj ve stupních šedi nebo černobíle při nižším DPI, nebo rozděl do víc nahrání, pokud to portál umožňuje. Některé úkoly možná musí fyzicky zmenšit rozsah.",
    },
  ],
  related: [
    { label: "Zkomprimovat PDF — zmenšit v prohlížeči", path: "/compress-pdf" },
    { label: "Rozdělit PDF — rozděl na přijímané části", path: "/split-pdf" },
    { label: "Jak odevzdat domácí úkol jako PDF", path: "/guides/how-to-submit-homework-as-pdf" },
    { label: "Jak zmenšit PDF před nahráním na portál", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "Zkomprimovat PDF — zmenšení v prohlížeči", path: "/compress-pdf" },
};

export default content;
