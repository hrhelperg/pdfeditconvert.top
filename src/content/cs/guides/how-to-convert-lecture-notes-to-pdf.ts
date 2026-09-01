import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-lecture-notes-to-pdf",
  h1: "Jak převést poznámky z přednášek do PDF (Word, fotky, prezentace)",
  description:
    "Poznámky z přednášek přicházejí v každém možném formátu – dokument Wordu, prezentace, snímek obrazovky, fotka tabule. Jak z každého z nich udělat jedno čitelné PDF beze ztráty struktury.",
  updated: "2026-05-29",
  intro: [
    "Do konce týdne mohou být poznámky z jedné jediné přednášky v pěti různých formátech: dokument Wordu, který jsi psal během přednášky, PowerPoint, který sdílel vyučující, fotka tabule, snímky obrazovky z nahrané nahrávky a pár ručně psaných stránek z chvíle, kdy ti došla baterka v notebooku.",
    "Všechno tohle může – a mělo by – skončit v jednom PDF na téma nebo na týden. PDF si rozumně poradí s každým formátem, čte se na jakémkoli zařízení a neztrácí se tak, jak se ztrácejí roztroušené soubory. Trik je vyrobit PDF, aniž bys ztratil strukturu jednotlivých zdrojů.",
    "Tenhle návod tě provede cestou převodu pro každý formát a pak strategií slučování, která dá dohromady jeden souvislý soubor. Cílem jsou studijní materiály, které opravdu použiješ u zkoušky.",
  ],
  steps: [
    {
      title: "Poznámky z Wordu převeď pomocí Word do PDF",
      body: "Napsané poznámky v dokumentu Wordu → Word do PDF v prohlížeči. Zachová nadpisy, formátování i vložené snímky obrazovky. Exportuj v plné velikosti dokumentu; komprimuj až později.",
    },
    {
      title: "Prezentace exportuj jako PDF",
      body: "PowerPoint i Keynote se dají exportovat přímo do PDF. Použij exportní menu, ne screenshoty. Verze v PDF udrží text vybratelný a ostrý při jakémkoli přiblížení.",
    },
    {
      title: "Fotky a screenshoty převeď pomocí Obrázek do PDF",
      body: "Fotky tabule, snímky obrazovky z nahrávek → Obrázek do PDF je spojí do jednoho PDF. Nastav pořadí před importem; přeřazování po importu je víc práce.",
    },
    {
      title: "Naskenuj ručně psané stránky",
      body: "Naskenovat do PDF na telefonu se stupni šedi a detekcí hran vytvoří čisté vícestránkové skeny. Ostřejší a menší než náhodné fotky.",
    },
    {
      title: "Slouč do jednoho PDF na téma",
      body: "Sloučit PDF spojí všechny formáty do jednoho seřazeného souboru. Na pořadí záleží: buď chronologie podle dne přednášky, nebo logická struktura (úvodní snímky → poznámky z přednášky → fotky tabule → shrnutí). Vyber jedno a drž se ho.",
    },
    {
      title: "Přidej titulní stránku a obsah",
      body: "Napsaná titulní stránka (kurz, týden, téma) dělá soubor srozumitelný i za půl roku. U delších sloučených PDF (nad 30 stránek) přidej jednostránkový obsah.",
    },
  ],
  tips: [
    "Nefoť snímky prezentace mobilem. Použij export do PDF z prezentace – je ostřejší a text zůstává vybratelný pro vyhledávání.",
    "Fotografuj tabuli čtvercově, ne z úhlu. Automatická korekce dokáže opravit mírné zkosení, ale čtvercová fotka je vždy čistší.",
    "Pokud má nahrávka klíčové momenty, vyfoť konkrétní snímky obrazovky místo celého videa. PDF pak zůstane zvládnutelné.",
    "Neslučuj napříč týdny. Jedno PDF na týden udrží soubory přehledné; jedno PDF na semestr je nečitelné.",
    "Finální sloučené PDF komprimuj až po konci semestru. Během semestru si nech čitelnou kopii pro aktivní studium.",
  ],
  mobileNote:
    "Polovina převodu poznámek z přednášek se odehrává na telefonu – fotíš tabuli, skenuješ ručně psanou stránku, fotíš snímky prezentace. Aplikace PDF Editor zvládne řetězec převodu a slučování na mobilu a vyrobí čisté PDF na týden, ještě než soubor telefon vůbec opustí.",
  faq: [
    {
      q: "Mám nechat poznámky v původním formátu, nebo je převést?",
      a: "Obojí. Upravitelné originály si nech pro revizi; PDF kopii vyrob pro každé téma kvůli studiu. PDF zdroj nenahrazuje – je to studijní artefakt navíc.",
    },
    {
      q: "Jaký je nejlepší způsob slučování?",
      a: "Sloučit PDF v prohlížeči. Nastav pořadí před sloučením; přeřadit to jde i potom, ale je to pomalejší.",
    },
    {
      q: "Mám na ručně psané skeny pouštět OCR?",
      a: "Pokud to tvůj nástroj umí, tak ano – prohledávatelné ručně psané poznámky se u zkoušky víc hodí. OCR na rukopisu je nedokonalé; ber prohledávatelný text jako přibližný.",
    },
    {
      q: "Jak velké mají být týdenní PDF s poznámkami?",
      a: "Takové, jaké přirozeně vzniknou za daný týden. Komprimuj až na konci semestru kvůli archivu; během semestru upřednostni čitelnost před velikostí.",
    },
    {
      q: "Dá se tohle všechno zvládnout na telefonu?",
      a: "Ano. Aplikace PDF Editor zvládne každý formát a slučování přímo na zařízení. Hodí se, když nechceš, aby poznámky čekaly na čas u notebooku.",
    },
  ],
  related: [
    { label: "Konvertor PDF — Word, JPG, PNG a další formáty", path: "/pdf-converter" },
    { label: "Obrázek do PDF — fotky tabule a snímky obrazovky", path: "/image-to-pdf" },
    { label: "Jak naskenovat ručně psané poznámky do PDF", path: "/guides/how-to-scan-notes-to-pdf" },
    { label: "Jak organizovat studijní materiály jako PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
  ],
  parentHub: { label: "Konvertor PDF — Word, JPG, PNG a zpět", path: "/pdf-converter" },
};

export default content;
