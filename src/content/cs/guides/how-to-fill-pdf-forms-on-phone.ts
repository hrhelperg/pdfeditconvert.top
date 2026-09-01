import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-phone",
  h1: "Jak vyplnit formuláře PDF na telefonu",
  description:
    "Vyplň formuláře PDF na iPhonu i Androidu, ať už mají skutečná pole formuláře, nebo jde o neinteraktivní sken. Klepni a piš, přidej textová pole a podepiš na jednom místě.",
  updated: "2026-05-23",
  intro: [
    "Formuláře PDF existují ve dvou variantách a to, kterou máš před sebou, určuje, jak ho vyplníš. Některé jsou interaktivní – klepneš na pole a píšeš, do úhledných rámečků, které tvůrce formuláře rovnou vložil. Jiné jsou neinteraktivní: naskenovaný nebo vytištěný a pak zpět do PDF převedený formulář bez jediného pole, kam si musíš text položit sám. Oba typy se na telefonu dají vyplnit bez problémů – jen potřebují mírně odlišný postup.",
    "Tenhle návod pokrývá vyplňování obou typů na iPhonu i Androidu pomocí aplikace PDF Editor, která rozpozná interaktivní pole tam, kde existují, a jinde ti umožní umístit text a zaškrtnutí kamkoli. Řada formulářů navíc potřebuje podpis, který stejná aplikace zvládne v rámci jednoho postupu.",
    "Výsledkem je vyplněný formulář, který můžeš rovnou poslat zpátky – žádný tisk, žádné skenování, žádné hledání funkční tiskárny v tu nejhorší možnou chvíli.",
  ],
  steps: [
    {
      title: "Otevři formulář v aplikaci PDF Editor",
      body: "Importuj PDF ze Souborů, Mailu, Drive nebo z jakékoli nabídky sdílení. Aplikace zkontroluje, jestli má formulář interaktivní pole.",
    },
    {
      title: "Pokud má pole, klepni a piš",
      body: "Interaktivní formuláře ti dovolí klepnout přímo do každého pole a psát. Mezi poli přecházej klepáním nebo posouváním a zaškrtávací pole zaškrtni klepnutím.",
    },
    {
      title: "Pokud je neinteraktivní, přidej vlastní text",
      body: "U naskenovaného nebo bezpolového formuláře použij nástroj na text a umísti text tam, kam patří každá odpověď. Nastav velikost a polohu tak, aby úhledně seděl na řádku.",
    },
    {
      title: "Vyřeš zaškrtávací pole a data",
      body: "Umísti zaškrtnutí nebo křížek na zaškrtávací pole a přidej datum tam, kde je vyžadováno. U neinteraktivních formulářů jde jednoduše o textové nebo značkové objekty, které umísťuješ sám.",
    },
    {
      title: "Podepiš, pokud to formulář vyžaduje",
      body: "Nástrojem Podepsat přidej svůj uložený podpis do prostoru pro podpis – stejný postup, ať už je formulář interaktivní, nebo ne.",
    },
    {
      title: "Exportuj a odešli",
      body: "Ulož vyplněnou kopii jako nový soubor a pošli ji zpátky e-mailem nebo přes jakoukoli aplikaci. Ponech si prázdný originál pro případ, že bys ho musel vyplnit znovu.",
    },
  ],
  tips: [
    "Nejdřív zkontroluj, jestli jsou pole interaktivní – klepni tam, kam patří odpověď. Pokud se objeví kurzor, piš; pokud se nic nestane, jde o neinteraktivní formulář a text přidáváš ty sám navrch.",
    "U neinteraktivních formulářů si před umístěním textu přibliž pohled, ať přesně sedne na řádek, místo aby se vznášel nad ním nebo pod ním.",
    "Prázdnou kopii formulářů, které vyplňuješ opakovaně, si ulož. Vyplnit čerstvý originál je čistší než upravovat odpovědi z minula.",
    "Vyplň a podepiš v jedné relaci, ať nemusíš exportovat, znovu otvírat a všechno přeumisťovat – aplikace to udrží na jeden zátah.",
    "Před odesláním zkontroluj povinná pole. Formulář vrácený kvůli chybějícímu datu stojí víc času, než by stála sama kontrola.",
  ],
  mobileNote:
    "Vyplňování formulářů patří mezi PDF úkoly, které se na telefon skutečně hodí nejlíp – formulář dorazí e-mailem a stejnou cestou se vrátí. Aplikace PDF Editor vyplní interaktivní i neinteraktivní formuláře, přidá tvůj podpis a exportuje hotovou kopii, vše přímo v zařízení bez jakéhokoli nahrávání.",
  faq: [
    {
      q: "Jak poznám, jestli je formulář PDF interaktivní?",
      a: "Klepni tam, kam by měla patřit odpověď. Pokud se objeví textový kurzor a můžeš psát, má interaktivní pole. Pokud se nic nestane, jde o neinteraktivní formulář a text přidáváš navrch sám.",
    },
    {
      q: "Můžu vyplnit naskenovaný formulář bez polí?",
      a: "Ano. Nástrojem na text umísti odpovědi přímo na stránku a přidej zaškrtnutí, kde je potřeba. Aplikace je bere jako objekty, které umísťuješ sám.",
    },
    {
      q: "Můžu formulář podepsat ve stejné aplikaci?",
      a: "Ano. Nástroj Podepsat přidá tvůj uložený podpis ve stejné relaci, takže vyplníš i podepíšeš bez přepínání aplikací.",
    },
    {
      q: "Nahrává se vyplněný formulář někam?",
      a: "Ne. Aplikace PDF Editor vyplňuje formuláře přímo v zařízení, takže osobní údaje na nich zůstávají v soukromí.",
    },
    {
      q: "Můžu znovu použít formulář, který vyplňuji často?",
      a: "Ponech si prázdný originál a pokaždé vyplň čerstvou kopii. Je to čistší než upravovat dřív dokončenou verzi.",
    },
  ],
  related: [
    { label: "Editor PDF – uprav a vyplň z telefonu", path: "/pdf-editor" },
    { label: "Jak podepsat PDF na telefonu", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "Jak psát poznámky do PDF na mobilu", path: "/guides/how-to-annotate-pdf-on-mobile" },
    { label: "Jak upravit PDF na iPhonu", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "Editor PDF", path: "/pdf-editor" },
};

export default content;
