import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-remove-unwanted-pages-from-pdf",
  h1: "Jak odstranit nechtěné stránky z PDF",
  description:
    "Zbav se prázdných stránek, titulních listů nebo nepotřebných částí PDF přímo v prohlížeči – necháš jen stránky, které chceš. Čisté soubory, soukromý proces.",
  updated: "2026-05-23",
  intro: [
    "Řada PDF dorazí se stránkami, o které nestojíš: titulní list faxu, prázdná stránka, kterou tam přihodil skener, dodatek s obchodními podmínkami, o který nikdo nežádal, nebo zdvojené stránky z ledabylého sloučení. Poslání dokumentu s tímhle balastem vypadá nedbale a občas prozradí i informace, které bys radši nesdílel.",
    "Nejčistší způsob, jak stránky v prohlížeči odstranit, je ponechat si ty, o které stojíš. Tento návod používá bezplatný nástroj Extrahovat stránky z PDF: místo mazání nechtěných stránek jednu po druhé vyjmenuješ stránky, které si chceš ponechat, a všechno ostatní v novém souboru prostě chybí. Běží celý na tvém zařízení – nic se nikam nenahrává.",
    "Výsledkem je přehledné PDF jen se stránkami, které tam patří, a tvůj originál zůstává nedotčený pro případ, že by ses spletl v čísle stránky.",
  ],
  steps: [
    {
      title: "Určit stránky k odstranění",
      body: "Otevři PDF a poznač si, které stránky jsou nechtěné – prázdná stránka 2, titulní list, duplicita na konci. Pak si urči, které stránky si chceš ponechat.",
    },
    {
      title: "Otevřít nástroj Extrahovat stránky z PDF",
      body: "Přejdi na nástroj Extrahovat stránky z PDF v prohlížeči. Běží na tvém zařízení bez nahrávání a bez účtu.",
    },
    {
      title: "Přidat PDF",
      body: "Přetáhni soubor do plochy pro přidání souboru nebo klikni pro jeho výběr. Nástroj načte počet stránek, abys mohl postupovat přesně.",
    },
    {
      title: "Vyjmenovat stránky, které chceš ponechat",
      body: "Zadej stránky a rozsahy k ponechání – například 1, 3–7, 9. Nechtěné stránky nevyjmenuješ, takže se ve výsledku neobjeví.",
    },
    {
      title: "Vytvořit vyčištěné PDF",
      body: "Spusť extrahování. Nástroj sestaví nový soubor jen s ponechanými stránkami, v pořadí.",
    },
    {
      title: "Zkontrolovat a uložit",
      body: "Otevři nové PDF, ověř, že nechtěné stránky zmizely a nic důležitého s nimi neodešlo, pak ho ulož pod jasným názvem.",
    },
  ],
  tips: [
    "Odstranění stránek pomocí ponechání zbytku je spolehlivá metoda v prohlížeči – popisuješ, co chceš, ne co smazat, čímž se vyhneš chybě o jednu stránku.",
    "Dávej pozor na prázdné stránky ze skenerů. Podavač dokumentů často vloží prázdnou stránku mezi oboustranné originály; právě na tyhle stránky se nejsnáz zapomíná.",
    "Odstranění stránky je zároveň krok pro soukromí. Interní poznámky, ceny, které jsi nechtěl sdílet, nebo údaje předchozího příjemce se můžou schovávat na stránkách, které nemusíš posílat.",
    "Čísla stránek si ověř podle samotného dokumentu. Titulní stránka dokáže posunout počet, takže „stránka 5“ v tvé hlavě je v souboru stránka 6.",
    "Ponech si originál. Pokud omylem vypustíš stránku, kterou jsi potřeboval, nedotčený zdroj je hned po ruce k opakování.",
  ],
  mobileNote:
    "Ořezání zbloudilé stránky před přeposláním dokumentu z telefonu zabere pár klepnutí v aplikaci PDF Editor, která stránky maže přímo a funguje offline – takže titulní list nebo prázdná stránka se do kopie, kterou pošleš, vůbec nedostane.",
  faq: [
    {
      q: "Jak smažu stránky pomocí nástroje v prohlížeči?",
      a: "Ponech si stránky, o které stojíš, pomocí nástroje Extrahovat stránky z PDF. Vyjmenováním jen stránek k ponechání zůstanou nechtěné mimo nový soubor – čistý způsob, jak stránky odstranit bez samotného kroku mazání.",
    },
    {
      q: "Změní se můj původní soubor?",
      a: "Ne. Nástroj vytvoří nové PDF a zdroj nechá nedotčený, takže chybu snadno vrátíš tím, že začneš znovu.",
    },
    {
      q: "Nahrává se soubor někam?",
      a: "Ne. Vše probíhá v prohlížeči na tvém zařízení, což je důležité, když stránky, které odstraňuješ, obsahují citlivé informace.",
    },
    {
      q: "Můžu odstranit i stránky, které nejdou za sebou?",
      a: "Ano. Ponech si směs jednotlivých stránek a rozsahů, třeba 1, 4, 8–10, a každá stránka, kterou nevyjmenuješ, se vypustí.",
    },
    {
      q: "Co když chci stránky mazat přímo?",
      a: "Mobilní aplikace PDF Editor ti umožní klepnutím konkrétní stránky rovnou smazat, což někomu přijde intuitivnější než přístup přes ponechání toho, co chceš.",
    },
  ],
  related: [
    {
      label: "Extrahovat stránky z PDF — ponech si jen to, co chceš",
      path: "/extract-pdf-pages",
    },
    { label: "Rozdělit PDF — rozděl soubor podle rozsahu", path: "/split-pdf" },
    {
      label: "Jak extrahovat stránky z PDF",
      path: "/guides/how-to-extract-pages-from-pdf",
    },
    {
      label: "Jak organizovat PDF soubory",
      path: "/guides/how-to-organize-pdf-files",
    },
  ],
  parentHub: { label: "Extrahovat stránky z PDF", path: "/extract-pdf-pages" },
};

export default content;
