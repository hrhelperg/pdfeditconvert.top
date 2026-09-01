import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-submission-errors",
  h1: "Chyby při odeslání formuláře PDF (když tlačítko Odeslat selže)",
  description:
    "Tlačítko Odeslat ve formuláři selže nebo nic neudělá? Proč vestavěná tlačítka pro odeslání závisí na serveru vydavatele, co jednotlivé chyby znamenají a spolehlivý ruční způsob, jak formulář přesto poslat.",
  updated: "2026-06-01",
  intro: [
    "Některé formuláře PDF mají vestavěné tlačítko Odeslat – stiskneš ho a formulář se má sám někam poslat. Když to funguje, je to pohodlné; když ne, je to matoucí, protože tlačítko prostě selže, vyhodí nesrozumitelnou chybu, nebo se zdá, že vůbec nic neudělá. Důvod je, že tlačítko Odeslat neposílá formulář samo o sobě: snaží se předat data na cíl, který nastavil vydavatel formuláře, a právě tohle spojení bývá ta část, co se rozbije.",
    "Tahle tlačítka Odeslat obvykle pošlou data formuláře na webovou adresu nebo e-mail, který má pod kontrolou ten, kdo formulář vytvořil. Pokud je server mimo provoz, adresa se změnila, nebo tvůj prohlížeč akci z bezpečnostních důvodů zablokuje, odeslání selže – a nic z toho nedokážeš opravit ze své strany. Dobrá zpráva je, že skoro vždy existuje spolehlivá ruční záloha.",
    "Tenhle návod vysvětlí, co tlačítka Odeslat vlastně dělají, co znamenají běžná selhání a jak dostat vyplněný formulář k cíli, když tlačítko nespolupracuje. Liší se to od chyb při nahrávání na webovém portálu, což je jiný problém.",
  ],
  steps: [
    {
      title: "Pochop, co Odeslat dělá",
      body: "Tlačítko Odeslat pošle data polí na cíl – webovou adresu nebo e-mail – který nastavil vydavatel. Není samostatné; závisí na tom, jestli ten cíl pořád funguje a jestli tvůj prohlížeč akci povolí.",
    },
    {
      title: "Přečti si chybu jako stopu",
      body: "Zpráva o serveru, síti nebo blokované akci ukazuje na cíl nebo bezpečnostní omezení, ne na tvůj soubor. „Nic se nestalo“ často znamená, že tvůj prohlížeč odeslání potichu zablokoval z bezpečnostních důvodů.",
    },
    {
      title: "Vyzkoušej plnohodnotnou aplikaci na PDF",
      body: "Základní prohlížečky a prohlížeče akce odeslání často blokují nebo ignorují. Otevření vyplněného formuláře ve specializované aplikaci na PDF někdy tlačítku umožní fungovat tak, jak bylo zamýšlené.",
    },
    {
      title: "Přejdi na ruční odeslání",
      body: "Pokud tlačítko pořád selhává, vyplněný formulář ulož a zafixuj a pak ho pošli ručně – e-mailem na adresu uvedenou ve formuláři, nebo nahráním na portál vydavatele. Tohle rozbité tlačítko Odeslat úplně obejde.",
    },
    {
      title: "Potvrď odeslání a ponech si kopii",
      body: "Když posíláš ručně, ponech si svou zafixovanou kopii a sleduj potvrzení. Pokud měl formulář dorazit do konkrétní schránky nebo na portál, pokyny vydavatele ti řeknou kam.",
    },
  ],
  tips: [
    "Selhávající tlačítko Odeslat je obvykle problém cíle vydavatele, ne tvého souboru – ruční odeslání je spolehlivá záloha.",
    "Před ručním odesláním odpovědi ulož a zafixuj, ať příjemce dostane uzamčenou, kompletní kopii.",
    "„Nic se nestalo“ u tlačítka Odeslat často znamená, že tvůj prohlížeč akci z bezpečnostních důvodů zablokoval; specializovaná aplikace ji může povolit.",
    "Chyby při odeslání se liší od chyb při nahrávání na portál – pokud nahráváš soubor na web, jde o samostatnou opravu.",
    "Zkontroluj formulář, jestli neobsahuje kontaktní e-mail nebo pokyny; vydavatelé často mají ruční cestu přesně pro tuhle situaci.",
  ],
  mobileNote:
    "Pokud tlačítko Odeslat u formuláře na telefonu selže, aplikace PDF Editor ti dovolí vyplněný formulář zafixovat a poslat ho ručně z nabídky sdílení – e-mailem nebo nahráním na portál – takže tě rozbitá akce odeslání nikdy nezablokuje s odpověďmi v ruce. Vše funguje v zařízení.",
  faq: [
    {
      q: "Proč mi nefunguje tlačítko Odeslat ve formuláři PDF?",
      a: "Tlačítko posílá tvá data na cíl, který nastavil vydavatel – server nebo e-mail. Pokud je mimo provoz, změněný, nebo tvůj prohlížeč akci z bezpečnostních důvodů zablokuje, selže to. To je mimo tvou kontrolu; formulář pošli místo toho ručně.",
    },
    {
      q: "Co znamená, když Odeslat nic neudělá?",
      a: "Tvůj prohlížeč nejspíš odeslání potichu zablokoval z bezpečnostních důvodů. Zkus plnohodnotnou aplikaci na PDF, nebo tlačítko přeskoč a pošli vyplněný formulář ručně.",
    },
    {
      q: "Jak formulář odešlu, když je tlačítko rozbité?",
      a: "Vyplněný formulář ulož a zafixuj, pak ho pošli ručním způsobem: e-mailem na adresu uvedenou ve formuláři, nebo nahráním na portál vydavatele. Tohle akci odeslání úplně obejde.",
    },
    {
      q: "Je chyba při odeslání to samé jako chyba při nahrávání?",
      a: "Ne. Chyba při odeslání je selhání vestavěného tlačítka Odeslat formuláře. Chyba při nahrávání je odmítnutí souboru webem, který nahráváš. Mají různé příčiny i řešení.",
    },
    {
      q: "Mohla se data formuláře odeslat i přesto, že se mi zobrazila chyba?",
      a: "Možná ne – pokud jsi viděl chybu, předpokládej, že to nedorazilo. Odešli formulář ručně, ponech si vlastní kopii a sleduj potvrzení, ať víš, že se dostal k cíli.",
    },
  ],
  related: [
    {
      label: "Jak odeslat vyplněný formulář PDF",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "Jak vyřešit chyby při nahrávání PDF",
      path: "/guides/how-to-fix-pdf-upload-errors",
    },
    { label: "Formulář PDF nefunguje", path: "/guides/pdf-form-not-working" },
    {
      label: "Problémy s kompatibilitou formuláře PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
