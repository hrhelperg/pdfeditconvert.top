import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-jpg",
  h1: "PDF nebo JPG — kdy použít který formát",
  description:
    "PDF nebo JPG: kdy skenovat, kdy fotografovat. Srovnání kvality, velikosti souboru, OCR a vhodnosti pro práci s dokumenty.",
  intro: [
    "JPG je formát pro fotky. PDF je formát pro dokumenty. Navzdory tomuto jednoduchému rozdělení lidé běžně posílají JPG smluv i PDF s jedním obrázkem – obě volby fungují, ale nejsou ideální.",
    "K tomuto nesprávnému použití dochází proto, že telefony mají jako výchozí formát pro všechno od rodinných fotek po naskenované účtenky nastavený JPG, zatímco počítače mají jako výchozí formát pro každý tisknutelný dokument nastavené PDF. Aniž by nad tím lidé přemýšleli, skončí s JPG účtenek v galerii a s PDF plnými obrázků, která zahlcují stažené soubory.",
    "Tohle srovnání ti pomůže vybrat správný formát pro dokumenty, které doopravdy posíláš: účtenky, doklady totožnosti, smlouvy, screenshoty, fotky produktů a hraniční případy, kde správná odpověď není zřejmá na první pohled.",
  ],
  leftLabel: "PDF",
  rightLabel: "JPG",
  rows: [
    { feature: "Podpora více stránek", left: "ano", right: "ne" },
    { feature: "Prohledávatelný text (s OCR)", left: "ano", right: "ne" },
    { feature: "Ostrost při libovolném přiblížení", left: "ano", right: "ne" },
    { feature: "Malá velikost souboru u fotek", left: "Omezeně", right: "ano" },
    { feature: "Zobrazitelné kdekoli", left: "ano", right: "ano" },
    { feature: "Ochrana heslem", left: "ano", right: "ne" },
    { feature: "Dodatečná úprava", left: "ano", right: "Omezeně" },
    { feature: "Nejlepší pro účtenky a smlouvy", left: "ano", right: "ne" },
    { feature: "Nejlepší pro fotky produktů", left: "ne", right: "ano" },
  ],
  whenLeft: [
    "Obsahem je dokument (účtenka, smlouva, doklad totožnosti, formulář)",
    "Výstup může potřebovat víc stránek",
    "Chceš prohledávatelný text (OCR)",
    "Příjemcem je účetní nebo firemní systém",
    "Možná budeš později potřebovat přidat podpis",
  ],
  whenRight: [
    "Obsahem je fotografie",
    "Na velikosti souboru záleží víc než na věrnosti",
    "Jde o jeden obrázek, víc stránek není potřeba",
    "Sdílíš přes zprávové aplikace, které preferují obrázky",
    "Publikování na sociálních sítích",
  ],
  faq: [
    {
      q: "Můžu převést JPG do PDF?",
      a: "Ano. PDF Editor (a většina nástrojů pro PDF) zabalí JPG do PDF a přitom zachová kvalitu obrázku.",
    },
    {
      q: "Funguje OCR na JPG fotce dokumentu?",
      a: "Lepší je nejdřív převést do PDF a teprve pak spustit OCR – výsledkem je prohledávatelný text uvnitř pořádného formátu pro dokumenty.",
    },
    {
      q: "Proč účetní preferují PDF?",
      a: "Jejich účetní nástroje indexují PDF a JPG ignorují. Účtenky v PDF se kategorizují automaticky; JPG jen leží ve složce.",
    },
  ],
  related: [
    { label: "Konvertor PDF", path: "/pdf-converter" },
    { label: "Skenovat do PDF", path: "/scan-to-pdf" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
};

export default content;
