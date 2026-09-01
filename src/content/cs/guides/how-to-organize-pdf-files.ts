import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-pdf-files",
  h1: "Jak organizovat PDF soubory – praktický pracovní postup",
  description:
    "Ukliď si v nepřehledných PDF: slouč související soubory, změň pořadí stránek, zbav se balastu a pojmenuj věci pořádně. Opakovatelný postup s bezplatnými nástroji v prohlížeči.",
  updated: "2026-05-23",
  intro: [
    "„Zorganizuj mi PDF“ obvykle znamená jednu ze dvou věcí: ukliď jeden nepřehledný dokument, nebo dej dohromady složku plnou souvisejících souborů do něčeho smysluplného. Obojí se scvrkne na stejnou hrstku kroků – spoj to, co k sobě patří, dostaň stránky do správného pořadí, odstraň, co tam nepatří, a všechno pojmenuj tak, abys to později našel.",
    "Tento návod popisuje opakovatelný postup postavený na bezplatných nástrojích v prohlížeči, z nichž každý běží na tvém zařízení a nic se nikam nenahrává. Žádný z jednotlivých kroků není složitý; hodnota je v tom, udělat je ve správném pořadí, abys práci nedělal dvakrát.",
    "Ber to spíš jako rutinu, kterou aplikuješ na jakoukoli hromadu dokumentů – daňovou složku, papírování k projektu, hromadu skenů – a promění chaos v něco, co bys klidně předal dál.",
  ],
  steps: [
    {
      title: "Udělat si přehled o tom, co máš",
      body: "Vypiš si soubory a co každý obsahuje. Ještě než se čehokoli dotkneš, rozhodni, jak má vypadat výsledek – jeden spojený dokument, nebo víc čistých souborů.",
    },
    {
      title: "Spojit soubory, které k sobě patří",
      body: "Použij nástroj Sloučit PDF a spoj související dokumenty do jednoho, v pořadí, které chceš. Smlouva a její přílohy, report a jeho dodatek – jeden soubor pro každý celek.",
    },
    {
      title: "Opravit pořadí stránek",
      body: "Spusť nástroj Změnit pořadí stránek PDF na čemkoli, co vyšlo mimo pořadí – obrácené skeny, sekce na špatném místě – dokud se každý dokument nečte správně.",
    },
    {
      title: "Odstranit balast",
      body: "Zbav se prázdných stránek, titulních listů a duplicit tím, že si nástrojem Extrahovat stránky z PDF ponecháš jen stránky, o které stojíš.",
    },
    {
      title: "Narovnat stránky na bok",
      body: "Použij nástroj Otočit PDF na stránky, které se naskenovaly na šířku nebo vzhůru nohama, aby se celý dokument četl rovně.",
    },
    {
      title: "Pojmenovat a uložit jednotně",
      body: "Dej každému souboru výstižný název s datem – „Faktura-Acme-2026-05.pdf“ – a ulož ho do smysluplné složky. Konzistentní názvy jsou to, co dělá sbírku po měsících prohledávatelnou.",
    },
  ],
  tips: [
    "Postupuj v pořadí: sloučit, přeskládat, odstranit, otočit, pojmenovat. Pojmenování před sloučením znamená přejmenovávat znovu; přeskládání před odstraněním plýtvá úsilím na stránky, které stejně vyhodíš.",
    "Zvol si jednu konvenci pojmenování a drž se jí. „Typ-Kdo-Datum“ (Faktura-Acme-2026-05) se řadí a hledá mnohem lépe než názvy narychlo.",
    "Originály si drž v samostatné složce, dokud nepotvrdíš, že jsou uklizené verze v pořádku. Úklid je vratný, jen když jsi zdroj nepřepsal.",
    "Komprimuj až úplně na konci, pokud soubory míří do e-mailu nebo na portál – nemá smysl komprimovat dokument, který ještě budeš přestavovat.",
    "Paměť prohlížeče má limity u velmi rozsáhlých úloh. Pro stovky stránek nebo souborů zvládá náročnější práci pohodlněji aplikace PDF Editor.",
  ],
  mobileNote:
    "Spousta nepořádku v dokumentech začíná na telefonu – skeny, snímky obrazovky, e-mailové přílohy. Aplikace PDF Editor ti umožní slučovat, přeskládávat, ořezávat a přejmenovávat na jednom místě, offline, takže věci udržuješ v pořádku průběžně místo řešení hromady později.",
  faq: [
    {
      q: "Jaké je správné pořadí pro organizaci nepřehledného PDF?",
      a: "Nejdřív slouč související soubory, pak přeskládej stránky, pak odstraň balast, pak oprav otočení a nakonec pojmenuj a ulož. Práce v tomto pořadí ti ušetří opakování kroků.",
    },
    {
      q: "Jsou tyhle nástroje soukromé?",
      a: "Ano. Nástroje pro slučování, přeskládávání, extrahování i otáčení běží v prohlížeči na tvém zařízení – nic se nikam nenahrává, což je důležité u osobního nebo finančního papírování.",
    },
    {
      q: "Jak mám pojmenovávat soubory PDF?",
      a: "Použij konzistentní, výstižný vzor s datem, třeba „Typ-Kdo-Datum.pdf“. Konzistence je to, co dělá složku později prohledávatelnou a řaditelnou.",
    },
    {
      q: "Můžu organizovat velkou dávku najednou?",
      a: "Nástroje v prohlížeči zvládnou běžné objemy dobře, ale velmi rozsáhlé dávky mohou zatížit paměť. Aplikace PDF Editor je stavěná na větší úlohy a funguje offline.",
    },
    {
      q: "Mám komprimovat při organizaci?",
      a: "Komprimuj až nakonec, jakmile je dokument hotový, a jen pokud se potřebuje vejít do limitu pro e-mail nebo nahrání. Komprese uprostřed procesu se stejně zruší pozdějšími úpravami.",
    },
  ],
  related: [
    { label: "Všechny bezplatné nástroje pro PDF", path: "/pdf-tools" },
    { label: "Sloučit PDF — spoj soubory", path: "/merge-pdf" },
    {
      label: "Jak změnit pořadí stránek v PDF",
      path: "/guides/how-to-reorder-pdf-pages",
    },
    {
      label: "Jak odstranit nechtěné stránky z PDF",
      path: "/guides/how-to-remove-unwanted-pages-from-pdf",
    },
  ],
  parentHub: { label: "Všechny bezplatné nástroje pro PDF", path: "/pdf-tools" },
};

export default content;
