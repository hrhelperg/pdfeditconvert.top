import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-annotate-pdf-on-mobile",
  h1: "Jak psát poznámky do PDF na mobilu",
  description:
    "Zvýrazňuj, komentuj a kresli do PDF z telefonu nebo tabletu. Nástroje pro poznámky, na kterých skutečně záleží, a jak udržet zápisky čitelné.",
  updated: "2026-05-23",
  intro: [
    "Anotace PDF je způsob, jak z dokumentu, který jen čteš, uděláš dokument, na který reaguješ – zvýrazníš klauzuli, na které záleží, necháš kolegovi komentář, zakroužkuješ číslo, které nesedí. Na telefonu nebo tabletu, prstem nebo stylusem, to bývá přirozenější než u stolu, protože stránku značíš stejně, jako bys značil papír.",
    "Tenhle návod probírá nástroje pro anotace, které se na mobilu vyplatí znát, s pomocí aplikace PDF Editor: zvýraznění, komentáře, kresba od ruky a tvary. Běží na iPhonu i Androidu, funguje offline a dokument drží v zařízení.",
    "Cílem není zalít stránku inkoustem – je to zanechat poznámky, které si další čtenář (často ty sám, později) skutečně přečte a použije.",
  ],
  steps: [
    {
      title: "Otevři PDF v aplikaci PDF Editor",
      body: "Importuj dokument ze Souborů, Mailu, Drive nebo z jakékoli nabídky sdílení. Nástroje pro anotace najdeš v panelu nástrojů pro úpravy.",
    },
    {
      title: "Zvýrazni klíčové pasáže",
      body: "Vyber zvýrazňovač, zvol barvu a přejeď prstem po textu, který chceš označit. Barvy používej s rozmyslem – jedna barva pro jeden typ poznámky se čte mnohem líp než duha.",
    },
    {
      title: "Přidej komentáře pro kontext",
      body: "Vlož lísteček s komentářem tam, kde zvýraznění potřebuje vysvětlení. Komentáře drží tvou úvahu u správného místa, aniž by zaplnily samotnou stránku.",
    },
    {
      title: "Kresli a kroužkuj od ruky",
      body: "Nástrojem pero zakroužkuj číslo, podtrhni řádek nebo načrtni opravu. Stylus dává čistší tah než prst, pokud ho máš.",
    },
    {
      title: "Přidej tvary nebo šipky, kde pomůžou",
      body: "Šipka mířící na problém nebo rámeček kolem oddílu sdělí víc než slova, a rychleji. Používej je střídmě, aby vynikly.",
    },
    {
      title: "Ulož a sdílej okomentovanou kopii",
      body: "Exportuj kopii se svými anotacemi a pošli ji zpátky. Ponech si čistý originál, pokud později budeš potřebovat neoznačenou verzi.",
    },
  ],
  tips: [
    "Přiřaď barvám význam – třeba žlutá pro otázky, zelená pro schválení – a tvoje poznámky se stanou přehledné k rychlému projetí místo pouhé ozdoby.",
    "Stylus (Apple Pencil nebo S Pen) proměňuje anotace od ruky. Pokud ho máš, odmítnutí dlaně a citlivost na tlak z toho udělají pocit jako psát na papír.",
    "Komentáře jsou lepší než mačkat poznámky do okraje. Po klepnutí se rozbalí a stránka zůstane čitelná.",
    "Nepřeháněj to s anotacemi. Stránka zalitá inkoustem je stejně k ničemu jako stránka bez jediné značky – zvýrazňuj to, na čem záleží, ne všechno.",
    "Ponech si neoznačenou verzi originálu. Anotace se skvěle hodí pro revizi, ale další posuzovatel může chtít čistou kopii, do které si zapíše vlastní.",
  ],
  mobileNote:
    "Anotace je místo, kde telefon nebo tablet opravdu předčí stůl: stránku značíš přímo, stejně jako bys to dělal na papíře. Aplikace PDF Editor podporuje zvýraznění, komentáře, kresbu i tvary včetně podpory stylusu, vše offline a přímo v zařízení – tvoje poznámky neopustí tvoje ruce.",
  faq: [
    {
      q: "Čím všechno můžu na mobilu anotovat PDF?",
      a: "Zvýrazněním, komentáři na lístečku, kresbou od ruky perem a tvary jako šipky a rámečky. Aplikace PDF Editor nabízí všechno tohle na iPhonu i Androidu.",
    },
    {
      q: "Potřebuju stylus?",
      a: "Ne, na zvýraznění a základní značky stačí prst. Ale stylus dělá kresbu od ruky mnohem čistší, s odmítnutím dlaně a citlivostí na tlak na podporovaných tabletech.",
    },
    {
      q: "Zůstanou moje anotace, když soubor pošlu dál?",
      a: "Ano. Exportované anotace jsou součástí PDF a zobrazí se každému, kdo ho otevře. Pokud budeš potřebovat neoznačenou kopii, ulož si čistý originál zvlášť.",
    },
    {
      q: "Nahrávají se moje anotace někam?",
      a: "Ne. Aplikace PDF Editor anotuje přímo v zařízení, takže tvoje poznámky i dokument zůstávají v soukromí.",
    },
    {
      q: "Můžu anotace později odstranit?",
      a: "Ano, v aplikaci můžeš vlastní anotace před exportem upravit nebo smazat. Ponechaný originál ti navíc umožní kdykoli začít znovu od začátku.",
    },
  ],
  related: [
    { label: "Editor PDF – anotuj z telefonu", path: "/pdf-editor" },
    { label: "Jak vyplnit formuláře PDF na telefonu", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "Jak upravit PDF na iPhonu", path: "/guides/how-to-edit-pdf-on-iphone" },
    { label: "Nejlepší bezplatné PDF nástroje pro studenty", path: "/guides/best-pdf-tools-for-students" },
  ],
  parentHub: { label: "Editor PDF", path: "/pdf-editor" },
};

export default content;
