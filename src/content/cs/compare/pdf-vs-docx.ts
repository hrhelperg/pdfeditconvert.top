import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-docx",
  h1: "PDF nebo DOCX — srovnání funkce po funkci",
  description:
    "Porovnejte PDF a DOCX z hlediska editovatelnosti, věrnosti, podepisování, zabezpečení a sdílení. Vyberte správný formát pro daný úkol.",
  intro: [
    "PDF a DOCX jsou dva formáty, ve kterých nakonec skončí většina dokumentů. Oba mají svůj účel – a výběr toho správného pro daný úkol ti ušetří většinu potíží s formátováním a sdílením, které si lidé s dokumenty obecně spojují.",
    "Tohle srovnání je praktické, ne akademické. Každý řádek odráží to, jak se oba formáty chovají v reálných pracovních postupech, ne jak jsou popsané ve standardizačních dokumentech. Soustředíme se na věci, kterých si všimneš během prvního měsíce intenzivního používání jednoho z formátů.",
    "Ve zkratce: PDF vyhrává, když je dokument hotový, musí vypadat pro čtenáře identicky nebo obsahuje podpis. DOCX vyhrává, když je dokument ještě pracovní verzí, revizuje ho víc lidí najednou, nebo chceš obsah použít i jinde. Většina dokumentů projde v různých fázích svého života oběma formáty.",
  ],
  leftLabel: "PDF",
  rightLabel: "DOCX",
  rows: [
    { feature: "Rozvržení na pixel přesné", left: "ano", right: "ne" },
    { feature: "Snadná úprava textu", left: "Omezeně", right: "ano" },
    { feature: "Univerzální zobrazení", left: "ano", right: "ne" },
    { feature: "Sledování změn a komentáře", left: "Omezeně", right: "ano" },
    { feature: "Ochrana heslem (AES-256)", left: "ano", right: "ano" },
    { feature: "Spolehlivé zobrazení i po 10 letech", left: "ano", right: "ne" },
    { feature: "Zobrazení na mobilu bez další aplikace", left: "ano", right: "ne" },
    { feature: "Pole formuláře", left: "ano", right: "Omezeně" },
    { feature: "Vestavěná podpora podpisu", left: "ano", right: "Doplněk" },
  ],
  whenLeft: [
    "Dokument je finální a neměl by se dál upravovat",
    "Potřebuješ, aby vypadal identicky na každém zařízení",
    "Příjemce možná nemá Microsoft Word",
    "Dokument bude archivovaný celé roky",
    "Potřebuješ tisknutelný formát připravený na podpis",
  ],
  whenRight: [
    "Dokument se ještě tvoří",
    "Revizuje ho nebo na něm spolupracuje víc lidí",
    "Sledování změn a komentáře jsou důležité",
    "Potřebuješ obsah použít jinde nebo mu změnit styl",
    "Dokument se stane šablonou",
  ],
  faq: [
    {
      q: "Můžu převádět mezi PDF a DOCX?",
      a: "Ano. Dobré nástroje pro PDF převádí oběma směry s vysokou věrností u dokumentů s textovou vrstvou.",
    },
    {
      q: "Který formát je bezpečnější?",
      a: "Oba podporují šifrování AES-256. Bezpečnost neurčuje samotný formát, ale heslo a způsob, jakým ho sdílíš.",
    },
    {
      q: "Přežijí konverzi moje písma?",
      a: "Většinou ano. Pokud písmo není v cílovém zařízení dostupné, nahradí se podobným. Aby bylo nahrazování minimální, drž se běžných písem (Calibri, Inter, Helvetica).",
    },
  ],
  related: [
    { label: "Návod: PDF, nebo DOCX", path: "/guides/pdf-vs-docx" },
    { label: "Konvertor PDF", path: "/pdf-converter" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
};

export default content;
