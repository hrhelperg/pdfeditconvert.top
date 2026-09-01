import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-before-sharing",
  h1: "Jak připravit PDF před sdílením (checklist)",
  description:
    "Kontrolní seznam před odesláním PDF: odstraň přebytečné stránky, oprav orientaci, zmenši velikost a označ návrhy. Pošli čistý, správně velký a promyšlený dokument.",
  updated: "2026-05-23",
  intro: [
    "Minuta před odesláním je nejlevnější chvíle na odhalení problému s PDF. Jakmile je soubor v cizí schránce, prázdná stránka, otočený sken, 40MB velikost nebo interní poznámka, kterou jsi zapomněl odstranit, je problém i toho druhého – a tvoje starost se za to omluvit. Krátký, promyšlený krok před odesláním tomu skoro vždy předejde.",
    "Tento návod je právě takový krok: praktický kontrolní seznam, který zabere pár minut a používá bezplatné nástroje v prohlížeči, z nichž každý běží na tvém zařízení a nic se nikam nenahrává. Je zaměřený na dokumenty, které skutečně putují k jiným lidem – nabídky, smlouvy, přihlášky, reporty.",
    "Nejde tu o vyleštění pro samotné vyleštění. Jde o to, aby příjemce otevřel tvůj soubor a našel přesně to, co čekal, v přijatelné velikosti a bez ničeho navíc.",
  ],
  steps: [
    {
      title: "Ověřit, že jde o správnou, finální verzi",
      body: "Otevři soubor a zkontroluj, že jde o nejnovější, plně upravenou verzi. PDF je snímek – oprava překlepu po odeslání znamená posílat znovu.",
    },
    {
      title: "Odstranit vše, co by nemělo jít ven",
      body: "Zbav se prázdných stránek, titulních listů, interních poznámek a stránek určených pro někoho jiného tím, že si nástrojem Extrahovat stránky z PDF ponecháš jen to, co tam patří.",
    },
    {
      title: "Opravit orientaci a pořadí",
      body: "Použij nástroj Otočit PDF na stránky na bok a nástroj Změnit pořadí stránek PDF na cokoli mimo pořadí, aby se dokument četl čistě od začátku do konce.",
    },
    {
      title: "Dostat velikost pod limit",
      body: "Pokud je soubor objemný – skeny a fotky to způsobují – prožeň ho nástrojem Zkomprimovat PDF, aby se vešel do běžných limitů 10–25 MB pro e-mail a portály.",
    },
    {
      title: "Označit stav, pokud jde o návrh",
      body: "Pokud sdílíš návrh k revizi, přidej vodoznak NÁVRH nástrojem Přidat vodoznak do PDF, aby si ho nikdo nespletl s podepsanou verzí.",
    },
    {
      title: "Jasně pojmenovat a odeslat",
      body: "Dej mu výstižný název s datem, aby byl v příjemcově schránce zřetelný a snadno se pak dohledal, a pak ho přilož nebo nahraj.",
    },
  ],
  tips: [
    "Nejčastější přehlédnutá věc před odesláním je stránka, která tam nemá být – prázdná, duplicitní, nebo se záznamy pro někoho jiného. Projdi dokument stránku po stránce.",
    "Přizpůsob velikost kanálu: e-mail má strop kolem 25 MB, řada nahrávacích portálů mnohem méně. Komprese souboru plného skenů je obvykle to, co pomůže.",
    "Vodoznak NÁVRH nebo DŮVĚRNÉ nastaví očekávání a zabrání tomu, aby se pracovní verze považovala za finální – levná pojistka na cokoli ještě nepodepsaného.",
    "Jasný název souboru je součástí přípravy dokumentu. Je to první, co příjemce uvidí, a to, co budeš později hledat ty sám.",
    "U čehokoli opravdu citlivého zvaž i heslo – příprava není jen o úhlednosti, je i o tom nesdílet víc, než je potřeba.",
  ],
  mobileNote:
    "Posílání dokumentů rovnou z telefonu je přesně místo, kde se rychlá příprava vyplatí. Aplikace PDF Editor ti umožní ořezat stránky, otočit, zkomprimovat, přidat vodoznak a přejmenovat na jednom místě ještě předtím, než soubor odejde – offline, bez jakéhokoli nahrávání.",
  faq: [
    {
      q: "Co bych měl zkontrolovat před odesláním PDF?",
      a: "Že jde o finální verzi, bez zbloudilých nebo citlivých stránek, se správnou orientací a pořadím, dost malou pro daný kanál, označenou jako návrh, pokud jím je, a jasně pojmenovanou. Dvouminutový průchod pokryje všechno.",
    },
    {
      q: "Jak se ujistím, že nesdílím špatné stránky?",
      a: "Ponech si jen stránky, které tam patří, nástrojem Extrahovat stránky z PDF, a výsledek projdi stránku po stránce. Interní poznámky a údaje jiných příjemců se často schovávají na stránkách, které nemusíš posílat.",
    },
    {
      q: "Proč tolik záleží na velikosti souboru?",
      a: "E-mailové služby odmítají přílohy přes zhruba 25 MB a řada nahrávacích portálů má strop mnohem níž. PDF plné skenů to snadno přesáhne, takže komprese zabrání odmítnutí nebo neúspěšnému nahrání.",
    },
    {
      q: "Jsou tyhle přípravné nástroje soukromé?",
      a: "Ano. Nástroje pro extrahování, otáčení, přeskládávání, kompresi i vodoznak běží v prohlížeči na tvém zařízení – nic se nikam nenahrává.",
    },
    {
      q: "Mělo by být heslem chráněné každé sdílené PDF?",
      a: "Ne – jen ta opravdu citlivá. Heslo přidává příjemci tření navíc, takže ho vyhraď pro dokumenty, jejichž obsah skutečně potřebuje ochranu.",
    },
  ],
  related: [
    { label: "Zkomprimovat PDF — zmenši pro e-mail", path: "/compress-pdf" },
    {
      label: "Přidat vodoznak do PDF — označ návrhy",
      path: "/add-watermark-to-pdf",
    },
    {
      label: "Jak zmenšit velikost PDF pro e-mail",
      path: "/guides/how-to-reduce-pdf-file-size-for-email",
    },
    {
      label: "Jak sdílet PDF z telefonu",
      path: "/guides/how-to-share-pdf-from-phone",
    },
  ],
  parentHub: { label: "Všechny bezplatné nástroje pro PDF", path: "/pdf-tools" },
};

export default content;
