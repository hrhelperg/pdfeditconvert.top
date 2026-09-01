import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "do-online-pdf-tools-store-files",
  h1: "Ukládají si online PDF nástroje tvé soubory? Co zkontrolovat",
  description:
    "Některé online PDF nástroje smažou nahrané soubory okamžitě, jiné je drží hodiny a některé napořád. Jak rychle přečíst zásady ochrany osobních údajů a na co se zaměřit.",
  updated: "2026-05-29",
  intro: [
    "Když tě bezplatný PDF nástroj požádá, abys nahrál soubor, upřímná otázka zní: co se s tím souborem stane potom? Odpověď se dost liší. Některé nástroje nahraný soubor smažou hned po dokončení konverze. Některé ho drží hodinu „pro tvoje pohodlí“. Některé ho uchovávají déle s nejasnou formulací o „zlepšování služby“. Některé ho použijí k trénování modelů, o kterých ani nevíš.",
    "Zásady ochrany osobních údajů ti to řeknou, jenže bývají dlouhé, často vágní a někdy zastaralé. Cílené přečtení zabere minutu a dá ti přesně to, co skutečně potřebuješ vědět. A u souborů dost citlivých na to, aby na uchovávání záleželo, je bezpečnější tah vybrat nástroj, který vůbec nic nenahrává.",
    "Tenhle návod projde rychlé čtení zásad ochrany osobních údajů, vysvětlí vzorce, na které se dívat, a ukáže bezpečnější alternativu ve chvíli, kdy je problém samotné nahrání.",
  ],
  steps: [
    {
      title: "Najdi zásady a přeskoč rovnou k uchovávání",
      body: "Zásady ochrany osobních údajů bývají odkazované v patičce. Na stránce hledej (Ctrl-F) slova „uchovává“, „smaže“, „ukládá“, „úložiště“. Tahle slova tě dovedou přímo k sekci o uchovávání.",
    },
    {
      title: "Přečti si skutečná čísla o uchovávání",
      body: "„Soubory se mažou do jedné hodiny“ je konkrétní a uklidňující. „Soubory mažeme, když už je nepotřebujeme“ je vágní a může znamenat cokoli. Na závazcích s čísly záleží; na úmyslech ne.",
    },
    {
      title: "Zkontroluj, co se ukládá kromě samotného souboru",
      body: "Metadata (název souboru, velikost, typ, IP adresa) se obvykle uchovávají déle než samotný obsah souboru. Pro většinu použití je uchovávání metadat přijatelné; pro vysoce citlivou práci je i to varovný signál.",
    },
    {
      title: "Hledej doložky o trénovacích datech",
      body: "Některé bezplatné nástroje si vyhrazují právo použít nahrané soubory na zlepšení služby nebo trénink modelů. Hledej „zlepšit“, „trénink“, „analytika“. Pokud to najdeš, ber to jako silnější varovný signál pro citlivý obsah.",
    },
    {
      title: "Zkontroluj sekci o sdílení s třetími stranami",
      body: "I když si nástroj tvůj soubor neponechá, může ho sdílet s hostingovými poskytovateli, subdodavateli nebo poskytovateli analytiky. Každý z nich je další strana s přístupem. Hledej „poskytovatelé služeb“, „subdodavatelé“, „třetí strany“.",
    },
    {
      title: "U čehokoli citlivého sáhni po výchozí lokálním zpracování",
      body: "Pokud nástroj běží v tvém prohlížeči bez nahrávání (ověř přes vývojářské nástroje), uchovávání není otázkou – není co uchovávat. Použij tuhle cestu, kdykoli na uložení souboru záleží.",
    },
  ],
  tips: [
    "Zdarma + vágní uchovávání + nejasné třetí strany = u citlivých souborů se vyhni. Tahle kombinace je nejrizikovější.",
    "Ani čisté zásady uchovávání nejsou záruka. Narušení serveru se stávají. Jediná bezriziková možnost je nenahrávat.",
    "S nahranými soubory zacházej jako se zkompromitovanými pro jakýkoli účel, který nedokážeš auditovat. Pokud bys soubor nezveřejnil, dvakrát si rozmysli, jestli ho nahrát.",
    "Pokud musíš nahrát, nejdřív soubor chraň heslem. Nástroj pak uvidí zašifrovaný blob; šifrování obsah chrání.",
    "Nevěř tvrzením „neukládáme“ bez ověření – formulace v zásadách a skutečné chování se můžou rozcházet.",
  ],
  mobileNote:
    "Mobilní aplikace mívají samostatné zásady ochrany osobních údajů v App Storu nebo v nastavení. Aplikace PDF Editor zpracovává lokálně a tvoje soubory vůbec nenahrává, takže otázka uchovávání se na ni nevztahuje. Pro mobilní práci s citlivým materiálem je čistě lokální řešení tou nejjednodušší výchozí volbou.",
  faq: [
    {
      q: "Jak dlouho si většina online PDF nástrojů soubory drží?",
      a: "Hodně se to liší: od minut po napořád. Velké komerční nástroje obvykle mažou do hodiny; menší a bezplatné nástroje jsou nekonzistentní. Přečti si zásady každého zvlášť.",
    },
    {
      q: "Je krátká doba uchovávání dost bezpečná?",
      a: "Záleží na souboru. U běžných dokumentů je hodina v pořádku. U skutečně citlivého materiálu je jakékoli uchovávání reálné okno rizika.",
    },
    {
      q: "Co smazané soubory – jsou opravdu pryč?",
      a: "Obvykle ano z aktivního úložiště, ale zálohy a repliky si kopie mohou podržet déle. Skutečně bezpečné mazání je technicky složitější, než to zní.",
    },
    {
      q: "Uchovávají bezplatné nástroje vždy déle než placené?",
      a: "Tendence, ne pravidlo. Některé bezplatné nástroje mají čisté uchovávání; některé placené mají překvapivé doložky. Přečti si obojí.",
    },
    {
      q: "Jaká je nejbezpečnější cesta pro citlivé PDF?",
      a: "Nástroje v prohlížeči, které zpracovávají lokálně (bez nahrávání). Pokud musíš nahrát, nejdřív chraň heslem a vyber nástroj s výslovnými závazky ohledně mazání.",
    },
  ],
  related: [
    { label: "PDF nástroje — v prohlížeči, bez nahrávání", path: "/pdf-tools" },
    { label: "Jsou online PDF nástroje bezpečné?", path: "/guides/are-online-pdf-tools-safe" },
    { label: "PDF nástroje v prohlížeči vs nástroje s nahráváním", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Jak se vyhnout nahrávání citlivých dokumentů", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "PDF nástroje — bezplatně, v prohlížeči", path: "/pdf-tools" },
};

export default content;
