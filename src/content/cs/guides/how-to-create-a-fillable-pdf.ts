import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-a-fillable-pdf",
  h1: "Jak vytvořit vyplnitelné PDF – poctivé možnosti a jejich limity",
  description:
    "Co je skutečně potřeba k tomu, aby lidé mohli PDF vyplnit – interaktivní pole, nebo jednoduchá neinteraktivní šablona – a který přístup se hodí k nástrojům, které máš po ruce.",
  updated: "2026-06-01",
  intro: [
    "Existují dva poctivé způsoby, jak vytvořit PDF, které lidé vyplní, a hodně se liší náročností i výsledkem. Vypilovaná cesta je opravdový interaktivní formulář: PDF se skutečnými poli – textovými poli, zaškrtávacími políčky, rozbalovacími nabídkami – do kterých příjemci klepnou a píšou. Jednodušší cesta je neinteraktivní šablona: čisté PDF s dostatkem prostoru, jasnými čárami a popisky, které lidé vyplní přidáním textu navrch.",
    "Stojí za to říct rovnou: postavit opravdová interaktivní pole formuláře obvykle vyžaduje specializovaný software na tvorbu formulářů, a i tak se výsledek může v různých prohlížečích PDF chovat jinak. Neinteraktivní šablona se naproti tomu dá vytvořit skoro v jakémkoli nástroji na dokumenty a spolehlivě funguje všude – za cenu toho, že příjemci musí při umísťování odpovědí odvést trochu víc práce.",
    "Tenhle návod pokrývá oba přístupy, kdy dává smysl který, a jak navrhnout kterýkoli z nich tak, aby se hotový formulář snadno vyplňoval. Nebude předstírat, že nástroj v prohlížeči dokáže vykouzlit složitá interaktivní pole, která nemá – místo toho tě nasměruje na metodu, která sedí tomu, co skutečně máš.",
  ],
  steps: [
    {
      title: "Začni s čistým, dostatečně prostorným rozvržením",
      body: "Navrhni formulář nejdřív v nástroji na dokumenty: jasné popisky, velkorysý prostor na odpovědi, zřetelná zaškrtávací pole a řádek na podpis. Na dobrém rozestupu záleží u interaktivní i neinteraktivní verze.",
    },
    {
      title: "Rozhodni se: interaktivní pole, nebo neinteraktivní šablona",
      body: "Pokud budou příjemci formulář vyplňovat často a chceš úhledný zážitek klepni-a-piš, směřuj k interaktivním polím. Pokud potřebuješ něco rychlého, co funguje v jakémkoli prohlížeči, je neinteraktivní šablona pragmatická volba.",
    },
    {
      title: "U neinteraktivní šablony exportuj do PDF",
      body: "Vyexportuj svůj navržený dokument rovnou do PDF. Čáry a popisky se stanou stránkou; příjemci na ně přidají text pomocí jakéhokoli editoru PDF. Tohle funguje skoro z jakéhokoli nástroje, který už používáš.",
    },
    {
      title: "Na interaktivní pole použij software na tvorbu formulářů",
      body: "Vytvoření skutečných textových polí, zaškrtávacích políček a rozbalovacích nabídek vyžaduje software, který je na to postavený. Přidej každé pole nad rozvržení, jasně ho pojmenuj a nastav jeho typ. Počítej s tím, že výsledek budeš muset otestovat ve víc než jednom prohlížeči.",
    },
    {
      title: "Formulář před odesláním otestuj",
      body: "Otevři formulář tak, jak ho otevřou příjemci – na telefonu i na počítači. Vyplň ho sám celý od začátku do konce. Než ho rozešleš, oprav každé pole, které je moc malé, špatně popsané, nebo neleží na svém řádku.",
    },
  ],
  tips: [
    "Čistá neinteraktivní šablona, která se všude spolehlivě vyplní, často předčí honosný interaktivní formulář, který se v některých prohlížečích rozbije.",
    "Nechej víc prostoru na odpovědi, než si myslíš, že potřebuješ – natěsnaná pole jsou nejčastější stížnost lidí na formuláře.",
    "Interaktivní pole pojmenovávej smysluplně; pomůže to jak vyplňování, tak případnému pozdějšímu zpracování odpovědí.",
    "Vyhýbej se pokročilým dynamickým funkcím formuláře, pokud si nejsi jistý, že je software tvých příjemců podporuje – některé prohlížeče PDF je nezvládají.",
    "Ať zvolíš kteroukoli cestu, vyplň formulář nejdřív sám – odhalíš tak neohrabaná místa, která žádná kontrola návrhu neodhalí.",
  ],
  mobileNote:
    "Příjemci mohou tvůj formulář dokončit na telefonu v aplikaci PDF Editor, ať je interaktivní, nebo neinteraktivní – klepe do skutečných polí a lidem dovolí umístit text na neinteraktivní šablony. Pokud stavíš neinteraktivní šablonu, otestuj ji v aplikaci na telefonu, ať se ujistíš, že jsou prostory na odpovědi dost velké pro palce.",
  faq: [
    {
      q: "Můžu vytvořit vyplnitelné PDF zdarma?",
      a: "Neinteraktivní vyplnitelnou šablonu si můžeš zdarma udělat skoro v jakémkoli nástroji na dokumenty exportem do PDF – příjemci přidají text navrch. Skutečná interaktivní pole obvykle vyžadují specializovaný software na tvorbu formulářů.",
    },
    {
      q: "Jaký je rozdíl mezi interaktivním a neinteraktivním vyplnitelným PDF?",
      a: "Interaktivní PDF má skutečná pole, do kterých lidé klepnou a píšou. Neinteraktivní šablona je čistá stránka, kam lidé umístí vlastní text. Interaktivní je úhlednější; neinteraktivní se snáz vytváří a funguje v každém prohlížeči.",
    },
    {
      q: "Fungují interaktivní formuláře PDF všude?",
      a: "Ne vždy. Standardní pole jsou široce podporovaná, ale vzhled formuláře i pokročilé funkce se mezi prohlížeči PDF mohou lišit a dynamické formuláře se v některých aplikacích nemusí otevřít vůbec. Otestuj to, než se na ně spolehneš.",
    },
    {
      q: "Který přístup si mám vybrat?",
      a: "Pokud se bude formulář hodně opakovaně používat a chceš vypilovaný zážitek, investuj do interaktivních polí. Pokud to potřebuješ rychle a spolehlivě, je bezpečnější sázkou dobře navržená neinteraktivní šablona.",
    },
    {
      q: "Jak udělám neinteraktivní šablonu snadno vyplnitelnou?",
      a: "Použij jasné popisky, dostatek prázdného prostoru, viditelné čáry nebo pole pro každou odpověď a zřetelný prostor na podpis. Pak si ji jednou sám vyplň, ať se ujistíš, že má všechno dost místa.",
    },
  ],
  related: [
    { label: "Co je formulář PDF?", path: "/guides/what-is-a-pdf-form" },
    { label: "Jak fungují formuláře PDF", path: "/guides/how-pdf-forms-work" },
    { label: "Osvědčené postupy pro formuláře PDF", path: "/guides/pdf-form-best-practices" },
    {
      label: "Jak sdílet formulář PDF",
      path: "/guides/how-to-share-a-pdf-form",
    },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
