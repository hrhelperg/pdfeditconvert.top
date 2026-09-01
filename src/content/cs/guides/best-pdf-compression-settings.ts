import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-compression-settings",
  h1: "Nejlepší nastavení komprese PDF – průvodce rozhodováním",
  description:
    "Jakou úroveň komprese zvolit pro e-mail, tisk, archivaci nebo web? Praktický přehled, který spáruje nastavení s účelem, včetně upřímných kompromisů.",
  updated: "2026-05-23",
  intro: [
    "Neexistuje jediné „nejlepší“ nastavení komprese – existuje jen nejlepší nastavení pro to, co s daným souborem chceš právě udělat. Úroveň ideální pro odeslání účtenky e-mailem by zničila dokument mířící do tiskárny. Místo kouzelného čísla proto potřebuješ rychlý způsob, jak spárovat nastavení s účelem.",
    "Tenhle návod je přesně taková rozhodovací tabulka. Spáruje úrovně z bezplatného nástroje Zkomprimovat PDF – Nízká, Doporučená a Silná – se situacemi, ve kterých má každá z nich smysl, a vysvětlí kompromis za každou volbou. Nástroj běží přímo v tvém prohlížeči a nic nenahrává na server, a ukazuje úsporu velikosti, takže si volbu rovnou ověříš.",
    "Přečti si ho jednou a přestaneš hádat – budeš vědět, kterou úroveň sáhnout, hned jak zjistíš, k čemu dokument je.",
  ],
  steps: [
    {
      title: "Pro e-mailové přílohy: Doporučená",
      body: "Výchozí kompromis. U většiny souborů se vejdeš pod limit 25 MB u Gmailu a asi 20 MB u Outlooku a dokument zůstane pohodlně čitelný na obrazovce.",
    },
    {
      title: "Pro nahrávací portály s přísnými limity: Silná",
      body: "Úřední a personální portály mívají strop jen pár megabajtů. Silná úroveň tě tam dostane. Skeny ji snesou dobře, u navržených dokumentů zkontroluj, že zůstanou přijatelné.",
    },
    {
      title: "Pro tisk nebo formální záznamy: Nízká",
      body: "Když soubor půjde do tiskárny nebo bude sloužit jako kvalitní záznam, použij Nízkou úroveň, aby zůstalo co nejvíc detailů. Komprimuj vůbec jen tehdy, když to soubor skutečně potřebuje.",
    },
    {
      title: "Pro dlouhodobou archivaci: minimální nebo žádná",
      body: "Archiv by měl upřednostnit věrnost před velikostí. Komprimuj jen lehce, pokud vůbec, a ponech si nekomprimovaný master – kopii můžeš kdykoli zmenšit později, ale ztracený detail už nevrátíš.",
    },
    {
      title: "Pro web a čtení jen na obrazovce: Doporučená až Silná",
      body: "Dokumenty, které se budou číst jen na obrazovce, snesou razantnější kompresi. Kloň se k Silné, když jde o rychle se načítající soubor ke stažení z webu a na kvalitě tisku nezáleží.",
    },
    {
      title: "Ověř si to podle velikosti před a po",
      body: "Ať zvolíš cokoli, nástroj ukáže dosaženou úsporu. Pokud lehčí úroveň už splňuje tvůj cíl, zůstaň u ní – za přehnanou kompresi žádná odměna nečeká.",
    },
  ],
  tips: [
    "Nejdřív účel, pak nastavení. Rozhodni, co se se souborem bude dít, a teprve pak vyber úroveň – ne naopak.",
    "Skeny snesou razantnější nastavení než navržené dokumenty. Stejná Silná úroveň, která je v pořádku u naskenovaného formuláře, může u brožury plné fotek změknout příliš.",
    "Každá úroveň převede stránky na obrázky a odstraní vybratelný text. Pokud dokument musí zůstat prohledávatelný, tohle ovlivní volbu stejně jako velikost.",
    "PDF plná textu a vektorové prvky se při jakémkoli nastavení zmenší jen málo – je v nich málo obrazových dat ke komprimaci, takže od Silné úrovně nečekej zázraky.",
    "Pro cokoli důležitého si ponech nekomprimovaný master. Komprese je jednosměrná; master ti umožní kdykoli později odvodit jakoukoli potřebnou velikost.",
  ],
  mobileNote:
    "Aplikace PDF Editor usnadňuje spárovat nastavení s účelem i na cestách: komprimuj offline, prohlédni si výsledek a uprav úroveň před sdílením. Zvládá i chráněné soubory a vše drží v zařízení.",
  faq: [
    {
      q: "Jaké je vůbec nejlepší nastavení komprese?",
      a: "Žádné jediné neexistuje – závisí to na účelu. Doporučená se hodí pro e-mail, Silná pro přísné limity portálů a soubory jen pro obrazovku, Nízká (nebo žádná komprese) pro tisk a archivaci.",
    },
    {
      q: "Které nastavení je nejlepší pro odeslání PDF e-mailem?",
      a: "Doporučená. U většiny souborů se vejdeš pod běžné e-mailové limity 20–25 MB a dokument zůstane čitelný. Na Silnou přejdi jen tehdy, když jsi pořád nad limitem.",
    },
    {
      q: "Co mám použít pro dokument, který budu tisknout?",
      a: "Nízkou úroveň, nebo žádnou kompresi. Tisk potřebuje detail, takže zachovej kvalitu a soubor zmenši jen tehdy, když je opravdu příliš velký na zpracování.",
    },
    {
      q: "Odstraní razantnější nastavení prohledávatelný text?",
      a: "Všechny úrovně překreslí stránky jako obrázky, což odstraní vybratelný text. Pokud dokument musí zůstat prohledávatelný, ponech si originál bez ohledu na zvolenou úroveň.",
    },
    {
      q: "Proč Silná úroveň moje textové PDF moc nezmenšila?",
      a: "Komprese cílí na obrazová data. PDF tvořené jen textem nebo vektory nemá skoro co komprimovat, takže i Silná úroveň přinese jen malou úsporu. Pokud je ten soubor velký, důvod je jinde.",
    },
  ],
  related: [
    { label: "Zkomprimovat PDF – vyber si úroveň", path: "/compress-pdf" },
    { label: "Jak zkomprimovat PDF bez velké ztráty kvality", path: "/guides/compress-pdf-without-losing-too-much-quality" },
    { label: "Jak zkomprimovat naskenované PDF", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Jak zmenšit PDF před nahráním na portál", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "Zkomprimovat PDF", path: "/compress-pdf" },
};

export default content;
