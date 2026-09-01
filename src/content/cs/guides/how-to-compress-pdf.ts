import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf",
  h1: "Jak zkomprimovat PDF (bez ztráty kvality)",
  description:
    "Zmenši velikost PDF pro e-mail nebo nahrání bez ztráty kvality. Návod vhodný pro mobil s aplikací PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Každá e-mailová služba má pořád limit na velikost přílohy. Gmail má strop 25 MB. Outlook naráží na limit kolem 20 MB. Slack a většina komunikačních aplikací přestává přijímat soubory zhruba na 25 MB. Reálná PDF – nabídky s fotkami, naskenované smlouvy, reporty s grafy – tyto limity běžně překračují.",
    "Existují dva způsoby, jak PDF zmenšit. Ten špatný je tisk do PDF s nižší kvalitou, který trvale zhorší text i podpisy. Ten správný je nová komprese obrázků a překódování písem uvnitř souboru, díky čemuž zůstane text ostrý a velikost klesne o 60–90 %.",
    "Tento návod ukazuje ten správný způsob v aplikaci PDF Editor na iPhonu i Androidu. Kroky jsou na obou platformách stejné. Výsledkem bude soubor dost malý na odeslání, který přitom při jakémkoli přiblížení vypadá úplně stejně jako originál.",
  ],
  steps: [
    {
      title: "Otevřít aplikaci PDF Editor",
      body: "Spusť aplikaci z domovské obrazovky. Klepni na dlaždici Komprese na hlavní obrazovce.",
    },
    {
      title: "Přidat PDF",
      body: "Klepni na Přidat soubor. Vyber ze Souborů / iCloud (iPhone) nebo přes výběr souborů (Android). PDF můžeš do PDF Editor přidat i sdílením z jiné aplikace.",
    },
    {
      title: "Vybrat úroveň komprese",
      body: "Tři přednastavené úrovně pokryjí téměř každý případ. Vyvážená se hodí pro většinu souborů. Malá je vhodná pro soubory, které pošleš e-mailem nebo nahraješ. Vysoká se hodí, když výsledek potřebuješ připravený k tisku.",
    },
    {
      title: "Zobrazit náhled komprimovaného výsledku",
      body: "Klepni na Náhled. Aplikace zobrazí vedle sebe velikost původního a komprimovaného souboru, plus náhledy prvních stránek. Přibliž si je a zkontroluj ostrost textu.",
    },
    {
      title: "Porovnat s originálem",
      body: "Přepínej mezi původními a komprimovanými stránkami. Pokud něco vypadá zhoršeně (u Vyvážené úrovně vzácné), zkus jinou úroveň.",
    },
    {
      title: "Uložit nebo sdílet",
      body: "Ulož komprimovaný soubor pod novým názvem (aby originál zůstal nedotčený), nebo ho rovnou sdílej e-mailem, přes Drive nebo jakoukoli komunikační aplikaci.",
    },
  ],
  tips: [
    "Pokud v souboru převažují naskenované stránky, úroveň Malá dokáže dosáhnout zmenšení přes 90 % bez viditelné ztráty kvality.",
    "U PDF plných hlavně textu je zmenšení menší (10–30 %) – takový soubor je už sám o sobě efektivní.",
    "Rozdělení velkého PDF před kompresí zrychlí operaci na starších telefonech a dá ti víc možností při odesílání.",
    "Originál si vždy ponech, dokud nezkontroluješ, že komprimovaný soubor vypadá dobře – jakmile je soubor zkomprimovaný, původní kvalita je pryč.",
    "Komprimovaná PDF zachovávají prohledávatelný text i podpisy. Komprese cílí na obrázky a tabulky písem, ne na obsahovou vrstvu.",
  ],
  mobileNote:
    "Komprese probíhá celá v zařízení. Citlivou smlouvu tak můžeš zkomprimovat i na letu s zapnutým režimem letadlo a z telefonu neopustí jediný bajt.",
  faq: [
    {
      q: "O kolik se mé PDF zmenší?",
      a: "PDF s hodně obrázky nebo naskenované obvykle zmenší o 60–90 %. PDF s hodně textem se zmenší méně, často o 10–30 %. Aplikace zobrazí přesnou velikost před i po.",
    },
    {
      q: "Rozmažou se obrázky?",
      a: "Vyvážená a Vysoká úroveň zachovávají obrázky ostré při běžném přiblížení. Malá úroveň používá silnější kompresi obrázků – pro e-mail v pořádku, ale při velkém přiblížení si všimneš mírného rozostření.",
    },
    {
      q: "Můžu zkomprimovat PDF chráněné heslem?",
      a: "Ano, jakmile zadáš heslo. Aplikace zajistí dešifrování, zkomprimuje obsah a při ukládání může ochranu znovu nastavit.",
    },
    {
      q: "Jaký je rozdíl mezi kompresí a zabalením do ZIP?",
      a: "ZIP archiv PDF jen zabalí do dalšího kontejneru, ale málokdy ho zmenší – PDF už interní kompresi používá. Skutečná komprese PDF přepíše vnitřní obrázky a písma souboru, což je jediný způsob, jak dosáhnout reálné úspory místa.",
    },
    {
      q: "Můžu komprimovat víc PDF najednou?",
      a: "Ano. Přidej v jedné relaci víc souborů a aplikace je zpracuje jeden po druhém se stejnou úrovní komprese pro každý z nich.",
    },
  ],
  related: [
    { label: "Komprese PDF — kompletní přehled", path: "/compress-pdf" },
    { label: "PDF Converter", path: "/pdf-converter" },
    {
      label: "Jak sloučit PDF soubory",
      path: "/guides/how-to-merge-pdf-files",
    },
  ],
  parentHub: { label: "Komprese PDF", path: "/compress-pdf" },
};

export default content;
