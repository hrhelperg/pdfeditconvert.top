import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-android",
  h1: "Jak podepsat PDF na Androidu (průvodce 2026)",
  description:
    "Podepiš PDF na Androidu, kde neexistuje jednotný vestavěný nástroj na podepisování. Spolehlivá cesta přes aplikaci, různé možnosti podle výrobce telefonu a právní základy.",
  updated: "2026-05-23",
  intro: [
    "Android nemá jediný, univerzální způsob, jak podepsat PDF, tak jako má iOS Markup. To, co dostaneš, závisí na tvém telefonu a aplikacích, které zrovna máš – některé prohlížečky souborů od výrobců a náhled Google Drive umí na stránku načmárat podpis, jiné ne, a zážitek se liší mezi Samsungem, Pixelem a zbytkem trhu. Právě tahle nejednotnost je důvod, proč na Androidu dává smysl specializovaný nástroj na podepisování.",
    "Tenhle návod se soustředí na cestu, která funguje stejně na každém telefonu s Androidem: aplikaci PDF Editor, která uloží podpis k opakovanému použití, rozpozná pole pro podpis a dokument drží přímo v zařízení. Zmiňuje i ty nesourodější vestavěné možnosti, abys věděl, co od nich čekat.",
    "Elektronický podpis je pro běžné obchodní dokumenty přijímán ve většině jurisdikcí, takže podepisování na tvém Androidu obvykle stačí k tomu, abys poslal smlouvu zpátky, řádně podepsanou, během pár minut.",
  ],
  steps: [
    {
      title: "Nejdřív si ujasni vestavěné možnosti",
      body: "Některé prohlížečky pro Android a nástroj na značení v Google Drive umí přidat kresbu od ruky, ale dostupnost a kvalita se liší podle telefonu a většina si neporadí s poli pro podpis, daty ani opakovaně použitelným podpisem.",
    },
    {
      title: "Otevři PDF v aplikaci PDF Editor",
      body: "Importuj dokument ze správce souborů, Gmailu, Drive nebo z jakékoli nabídky sdílení. Aplikace se chová stejně bez ohledu na to, jaký telefon s Androidem používáš.",
    },
    {
      title: "Zvol typ podpisu",
      body: "Vyber vlastnoruční podpis, napsaný podpis nebo iniciály. Aplikace automaticky rozpozná existující pole pro podpis, pokud bylo PDF navrženo k podepisování.",
    },
    {
      title: "Vytvoř svůj podpis jednou",
      body: "Nakresli ho poprvé prstem nebo S Pen; zůstane uložený v zařízení pro každý budoucí dokument. Poté podepisování zabere jen pár klepnutí.",
    },
    {
      title: "Umísti ho a podle potřeby přidej datum",
      body: "Přetáhni podpis na správné místo a změň velikost. Přidej datum nebo iniciály tam, kde je dokument vyžaduje.",
    },
    {
      title: "Exportuj podepsanou kopii",
      body: "Ulož jako nový soubor, aby zůstal zachovaný nepodepsaný originál, pak ho sdílej přes Gmail, Drive, WhatsApp nebo jakoukoli jinou aplikaci. Podepsané PDF je připravené k odeslání.",
    },
  ],
  tips: [
    "S Pen (u modelů Samsung Note a Ultra) vytvoří znatelně čistší podpis než prst – vyplatí se ho použít u smluv pro klienty.",
    "Protože se vestavěné možnosti Androidu tak výrazně liší podle značky, specializovaná aplikace je spolehlivá volba, pokud podepisuješ dokumenty pravidelně nebo měníš telefony.",
    "Nepodepsaný originál si nech vedle podepsané kopie pro případ, že by protistrana chtěla čistou verzi nebo bys musel podepsat znovu.",
    "Ke zvlášť citlivým podepsaným dokumentům přidej před sdílením heslo – ochrana je samostatný krok od podepisování.",
    "Elektronický podpis pokrývá běžné obchodní dokumenty ve většině míst; vysoce hodnotné nebo regulované dohody mohou potřebovat formálnější kvalifikovaný podpis.",
  ],
  mobileNote:
    "Na Androidu ti aplikace PDF Editor dává tu konzistentní zkušenost s podepisováním, kterou samotné platformě chybí: uložený podpis, rozpoznání polí a dokument, který nikdy neopustí tvé zařízení. Smlouva může dorazit, být podepsána a odejít zpátky, aniž by se kdy dotkla serveru.",
  faq: [
    {
      q: "Má Android vestavěný nástroj na podepisování PDF?",
      a: "Ne univerzální. Některé prohlížečky od výrobců a Google Drive umí přidat kresbu od ruky, ale liší se to podle telefonu a většina si neporadí s poli pro podpis ani opakovaně použitelným podpisem. Specializovaná aplikace dává konzistentní zkušenost.",
    },
    {
      q: "Můžu svůj podpis použít znovu na dalších dokumentech?",
      a: "Ano, s aplikací PDF Editor. Nakreslíš ho jednou, zůstane uložený v zařízení a každý další dokument podepíšeš na pár klepnutí.",
    },
    {
      q: "Je podepisování na Androidu právně platné?",
      a: "Pro běžné obchodní smlouvy ve většině jurisdikcí ano. Vysoce hodnotné nebo regulované dokumenty mohou vyžadovat formálnější kvalifikovaný podpis – ověř si pravidla pro svou situaci.",
    },
    {
      q: "Nahrává se můj dokument, když ho podepisuji?",
      a: "S aplikací PDF Editor ne. Tvůj podpis i dokument zůstávají v zařízení, což je důležité u důvěrných dohod.",
    },
    {
      q: "Čím se to liší na iPhonu?",
      a: "iPhone má vestavěný nástroj Markup pro jednorázové podpisy. Podívej se na samostatný návod, jak podepsat PDF na iPhonu, kde najdeš tuhle cestu.",
    },
  ],
  related: [
    { label: "Podepsat PDF – elektronický podpis na mobilu", path: "/sign-pdf" },
    { label: "Jak podepsat PDF na iPhonu", path: "/guides/how-to-sign-pdf-on-iphone" },
    { label: "Jak podepsat PDF na telefonu", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "Jak upravit PDF na Androidu", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "Podepsat PDF", path: "/sign-pdf" },
};

export default content;
