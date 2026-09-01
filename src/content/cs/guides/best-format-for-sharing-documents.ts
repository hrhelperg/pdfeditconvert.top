import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-format-for-sharing-documents",
  h1: "Nejlepší formát pro sdílení dokumentů (PDF, DOCX, obrázky ve srovnání)",
  description:
    "Kdy je PDF ten správný formát ke sdílení, kdy ne, a jak si reálné alternativy (DOCX, obrázky, HTML, Markdown) skutečně stojí v běžných situacích.",
  updated: "2026-05-29",
  intro: [
    "Neexistuje jeden nejlepší formát pro sdílení dokumentů – existuje nejlepší formát pro každý typ situace se sdílením. PDF je správně většinu času, ale ne vždy. DOCX je správně pro dokumenty, které se budou upravovat. Obrázky jsou správně pro jednotlivé vizuály. HTML je správně pro web. Markdown je správně pro obyčejný text s lehkou strukturou. Každý vyniká v jedné věci a v ostatních je nešikovný.",
    "Správný způsob rozhodování je přemýšlet, co s tím souborem příjemce udělá. Přečte a založí? PDF. Upraví? DOCX. Prohlíží na webu? HTML. Ocituje v chatu? Markdown. Podívá se na jednotlivý obrázek? PNG nebo JPG. Protlačit každé sdílení přes PDF je pohodlné, ale způsobuje tření, když příjemce chtěl upravovat.",
    "Tenhle návod projde rozhodování scénář po scénáři. Cílem je poslat formát, který příjemce skutečně použije, ne ten, který se tobě nejsnáz vyrábí.",
  ],
  steps: [
    {
      title: "Pokud si to budou číst a zakládat, pošli PDF",
      body: "Uzamčené rozvržení, stejné na každém zařízení, podepsatelné, archivovatelné. PDF je výchozí volba pro sdílené dokumenty a většinou tou správnou.",
    },
    {
      title: "Pokud to budou upravovat, pošli DOCX nebo Google Docs",
      body: "Skutečná úprava probíhá v DOCX nebo Docs. Poslání PDF, když příjemce bude upravovat, ho donutí to přeměnit zpátky – dostane jen přibližnou verzi toho, co jsi poslal.",
    },
    {
      title: "Pokud si to budou prohlížet na webu, pošli odkaz nebo HTML",
      body: "Webové stránky se zobrazí v prohlížeči bez potřeby stahování. Pro obsah zamýšlený jako webově nativní HTML porazí PDF.",
    },
    {
      title: "Pokud jde o obyčejný text s lehkou strukturou, pošli Markdown",
      body: "Poznámky, technický obsah, lehká dokumentace. Markdown je čitelný jako text v jakémkoli kontextu a tam, kde je podporovaný, se pěkně vykreslí.",
    },
    {
      title: "Pokud jde o jednotlivý obrázek, pošli PNG nebo JPG",
      body: "Jednotlivý obrázek, žádný podkladový text, žádné stránky ke správě. PNG pro ostrý/průhledný obsah, JPG pro fotky. PDF zbytečně obaluje jednotlivé obrázky.",
    },
    {
      title: "Ve chvíli nejistoty sáhni po PDF",
      body: "Když nedokážeš odhadnout, co příjemce se souborem udělá, je PDF nejbezpečnější výchozí volba. Přečte ho kdokoli, po odeslání se nemění a v případě potřeby se dá převést na jiné formáty.",
    },
  ],
  tips: [
    "Zeptej se příjemce, jestli bude potřebovat upravovat. Odpověď mění, jaký formát je správný.",
    "Neposílej PDF i DOCX zároveň, pokud si o to nikdo neřekl. Signalizuje to nerozhodnost.",
    "Vícestránkový obsah v jiném formátu než PDF je obvykle špatně.",
    "Interní nástroje (chat, wiki, dokumentační platformy) mívají nativní formáty, které v tom kontextu porazí PDF. Neexportuj reflexivně do PDF pro interní sdílení.",
    "Když si formátem nejsi jistý, pošli PDF – příjemci ho v případě potřeby dokážou převést sami.",
  ],
  mobileNote:
    "Telefony dnes přijímají většinu sdílených dokumentů a PDF funguje na malých obrazovkách nejlépe, protože rozvržení je uzamčené. Aplikace PDF Editor čte, podepisuje a sdílí PDF na iOS i Androidu bez překvapení, jak bude soubor na kterém zařízení vypadat.",
  faq: [
    {
      q: "Je PDF opravdu ta nejlepší výchozí volba?",
      a: "Pro sdílení hotových dokumentů ano. Pro rozpracované návrhy je lepší DOCX. Pro jednotlivé obrázky PNG nebo JPG. Vyber podle toho, co s tím příjemce udělá.",
    },
    {
      q: "Kdy je DOCX lepší než PDF?",
      a: "Když bude příjemce dokument upravovat. PDF se upravuje těžko; DOCX snadno. Nenuť ho k převodu.",
    },
    {
      q: "Mám poslat obojí?",
      a: "Jen pokud si o to výslovně řekli. Posílání dvou formátů signalizuje, že si nejsi jistý, který příjemce chce, a musí si vybrat sám.",
    },
    {
      q: "Co odkazy na cloudové dokumenty?",
      a: "Užitečné pro dokumenty ke spolupráci (Docs, Sheets). Pro jednosměrné sdílení hotových dokumentů jsou stažení jednodušší než správa oprávnění k odkazu.",
    },
    {
      q: "Záleží na zařízení příjemce?",
      a: "Do jisté míry – starší zařízení nemusí otevřít novější funkce DOCX. PDF je nejuniverzálněji kompatibilní formát.",
    },
  ],
  related: [
    { label: "PDF nástroje — úplný seznam nástrojů v prohlížeči", path: "/pdf-tools" },
    { label: "PDF vs DOCX — srovnání funkce po funkci", path: "/guides/pdf-vs-docx" },
    { label: "PDF vs Google Docs", path: "/guides/pdf-vs-google-docs" },
    { label: "PDF vs obrázky pro sdílení dokumentů", path: "/guides/pdf-vs-images-for-sharing-documents" },
  ],
  parentHub: { label: "PDF nástroje — bezplatně, v prohlížeči", path: "/pdf-tools" },
};

export default content;
