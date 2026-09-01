import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-file-size-for-email",
  h1: "Jak zmenšit velikost PDF pro e-mail",
  description:
    "Dostaň PDF pod limity příloh v Gmailu a Outlooku. Skutečné limity, proč je naskenované dokumenty snadno překročí a jak soubor zmenšit, aby se dal odeslat.",
  updated: "2026-05-23",
  intro: [
    "Limity pro e-mailové přílohy se roky moc nemění, ale dokumenty, které přikládáme, jsou čím dál objemnější. Gmail tě zastaví na 25 MB. Outlook táhne čáru kolem 20 MB. Server příjemce může mít strop ještě nižší. Takže přiložíš naskenovanou smlouvu nebo report plný fotek, klikneš na odeslat, a e-mail se vrátí – nebo ještě hůř, potichu selže.",
    "Tento návod je o tom, jak dostat PDF na velikost, při které se skutečně dá poslat. Používá bezplatný nástroj Zkomprimovat PDF, který běží v tvém prohlížeči a nic se nikam nenahrává, a probírá praktická rozhodnutí: jakou úroveň komprese, kdy komprimovat a kdy raději rozdělit, a co dělat, když ani komprese nestačí.",
    "Dobrá zpráva je, že soubory, které se nejčastěji vrátí – skeny a PDF plná obrázků – jsou přesně ty, které se komprimují nejvíc.",
  ],
  steps: [
    {
      title: "Zkontrolovat, o kolik jsi nad limitem",
      body: "Poznač si velikost souboru a svůj cíl. Gmail má strop 25 MB, Outlook kolem 20 MB, některé firemní servery míň. Znalost rozdílu ti řekne, jak agresivně postupovat.",
    },
    {
      title: "Otevřít nástroj Zkomprimovat PDF",
      body: "Přejdi na nástroj Zkomprimovat PDF v prohlížeči. Soubor zpracuje na tvém zařízení – nic se nikam nenahrává, což je důležité u dokumentů, které posíláš e-mailem.",
    },
    {
      title: "Přidat PDF a zvolit úroveň",
      body: "Začni s Doporučenou. Vyváží velikost a kvalitu a pro většinu souborů stačí. Na Silnou přejdi jen tehdy, pokud jsi pořád nad limitem.",
    },
    {
      title: "Zkomprimovat a přečíst novou velikost",
      body: "Spusť to a zkontroluj čísla před a po. Naskenované dokumenty se často vejdou hluboko pod 25 MB na jeden zátah.",
    },
    {
      title: "Pokud je pořád moc velký, rozdělit ho",
      body: "Když se jeden dokument nedá zmenšit dost, použij nástroj Rozdělit PDF a pošli ho jako dva nebo tři menší soubory – často praktičtější než dál drtit kvalitu.",
    },
    {
      title: "Přiložit a odeslat",
      body: "Přilož komprimovaný (nebo rozdělený) soubor. Nejdřív ho jednou otevři a ověř, že se na zvolené úrovni pořád čte čistě.",
    },
  ],
  tips: [
    "Doporučená úroveň projde většinou e-mailových limitů a kvality zůstane víc než dost. Silnou si nech na soubory, které jsou po prvním pokusu pořád nad limitem.",
    "Skeny a PDF plná fotek se zmenší nejvíc; čistě textový dokument je už malý, takže pokud je obří, hledej příčinu ve vložených obrázcích nebo písmech.",
    "Pokud samotná komprese nestačí, rozdělení dokumentu je lepší než ho degradovat do nečitelnosti – dvě čitelné poloviny jsou lepší než jeden hrubý celek.",
    "Komprese stránky zploští na obrázky, takže odeslaná kopie nebude mít vybíratelný text. Pokud příjemce potřebuje text kopírovat, pošli originál jinou cestou a komprimovaný náhled e-mailem.",
    "Když je i komprimovaný soubor pořád velký, poctivá odpověď je sdílený odkaz na cloud – viz návod na posílání velkých PDF souborů.",
  ],
  mobileNote:
    "Vrácené přílohy se nejčastěji stanou, když posíláš dokument z telefonu mezi jinými věcmi. Aplikace PDF Editor komprimuje offline a sdílí rovnou do tvé poštovní aplikace, takže se z příliš velkého skenu stane odeslatelný soubor, aniž bys opustil doručenou poštu.",
  faq: [
    {
      q: "Jaký je skutečný limit pro e-mailovou přílohu?",
      a: "Gmail má strop 25 MB, Outlook kolem 20 MB a některé firemní poštovní servery ještě míň. Miř pohodlně pod limit příjemce, ne jen svůj vlastní.",
    },
    {
      q: "Proč je moje PDF na e-mail moc velké?",
      a: "Skoro vždy za to můžou naskenované stránky nebo vložené fotky. Každá naskenovaná stránka je v podstatě obrázek ve vysokém rozlišení a hrstka jich rychle přesáhne 25 MB.",
    },
    {
      q: "Jakou úroveň komprese mám na e-mail použít?",
      a: "Začni s Doporučenou – projde většinou limitů a dokument zůstane čitelný. Na Silnou přejdi, jen pokud jsi po prvním pokusu pořád nad limitem.",
    },
    {
      q: "Nahrává se můj soubor při kompresi někam?",
      a: "Ne. Nástroj Zkomprimovat PDF běží v tvém prohlížeči na tvém zařízení, takže dokument zůstává v soukromí i ve chvíli, kdy ho připravuješ k odeslání.",
    },
    {
      q: "Co když komprese pořád nestačí?",
      a: "Rozděl PDF na menší soubory, nebo místo přílohy sdílej odkaz na cloud. Obojí je lepší než komprimovat dokument, dokud se nestane nečitelným.",
    },
  ],
  related: [
    { label: "Zkomprimovat PDF — zmenši pro e-mail", path: "/compress-pdf" },
    {
      label: "Jak poslat velké PDF soubory",
      path: "/guides/how-to-send-large-pdf-files",
    },
    {
      label: "Jak zkomprimovat PDF online bez nahrávání",
      path: "/guides/how-to-compress-pdf-online",
    },
    {
      label: "Jak rozdělit PDF na samostatné soubory",
      path: "/guides/how-to-split-pdf-files",
    },
  ],
  parentHub: { label: "Zkomprimovat PDF", path: "/compress-pdf" },
};

export default content;
