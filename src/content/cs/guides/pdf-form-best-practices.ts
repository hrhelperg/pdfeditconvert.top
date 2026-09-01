import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-best-practices",
  h1: "Osvědčené postupy pro formuláře PDF (formuláře, které lidé dokončí)",
  description:
    "Navrhni formuláře, které lidé skutečně dokončí: jasné popisky, dostatek prostoru, smysluplná pole, zřetelný prostor na podpis a krok se zafixováním. Praktická pravidla pro tvůrce i odesílatele.",
  updated: "2026-06-01",
  intro: [
    "Úkolem formuláře je nechat se přesně vyplnit a vrátit bez tření. Většina formulářů, které selžou, selže z nudných, opravitelných důvodů: natěsnaná pole, nejednoznačné popisky, žádné místo na psaní, nebo rozvržení, které se rozsype ve chvíli, kdy ho někdo otevře na telefonu. Dobrý návrh formuláře není o tom vypadat chytře – je o odstranění každého drobného důvodu, proč by to člověk mohl vzdát nebo udělat špatně.",
    "Tyhle osvědčené postupy platí bez ohledu na to, jestli stavíš interaktivní formuláře, nebo neinteraktivní šablony, a bez ohledu na to, jestli jsi firma sbírající vstupní údaje, nebo kdokoli, kdo posílá formulář k vyplnění. Pokrývají i odesílací stranu: jak formulář rozeslat tak, aby zůstal vyplnitelný a vrátil se použitelný. Nic z toho není složité; je to hlavně disciplína.",
    "Ber tohle jako referenci, na kterou odkazují ostatní návody o formulářích. Pokud si osvojíš jen hrstku z tohohle, vyber jasné popisky, velkorysé rozestupy a zafixování při vracení – tahle trojice zabrání většině trápení s formuláři.",
  ],
  steps: [
    {
      title: "Popiš každé pole jednoznačně",
      body: "Každé pole by mělo být jasné v tom, co do něj patří, včetně formátu tam, kde na tom záleží (styl data, jeden znak na políčko). Nejednoznačné popisky vyprodukují špatné odpovědi, které pak musíš dohánět.",
    },
    {
      title: "Dej odpovědím skutečný prostor",
      body: "Poddimenzovaná pole jsou nejčastější stížnost na formuláře. Nech víc místa, než si myslíš, že potřebuješ, obzvlášť u jmen, adres a volných textových odpovědí, ať nic není natěsnané ani oříznuté.",
    },
    {
      title: "Ptej se jen na to, co potřebuješ",
      body: "Každé pole navíc snižuje míru dokončení a přidává data, se kterými se pak musíš vypořádat. Ořízni cokoli, co v tuhle chvíli není skutečně nutné. Kratší formuláře se vracejí rychleji a kompletnější.",
    },
    {
      title: "Udělej prostor na podpis nepřehlédnutelný",
      body: "Pokud je podpis potřeba, dej mu jasný, dobře umístěný prostor a vedle něj pole na datum. Lidé přehlédnou podpis víc než jakékoli jiné pole; nepřehlédnutelný prostor zabrání vrácení formuláře.",
    },
    {
      title: "Rozesílej a přijímej správně",
      body: "Prázdné formuláře posílej nezafixované, ať pole přežijí, doporuč spolehlivou aplikaci na PDF a vyžaduj zpátky zafixované kopie, ať se odpovědi uzamknou a všude zobrazí stejně.",
    },
  ],
  tips: [
    "Vyplň si vlastní formulář jednou na telefonu ještě před odesláním – okamžitě odhalíš každé natěsnané pole a nejasný popisek.",
    "Jasné popisky, velkorysé rozestupy a zafixování při vracení jsou tři návyky, které zabrání většině problémů s formuláři.",
    "Prázdný formulář, který rozesíláš, nezafixovávej; zafixování odstraní pole, která příjemci potřebují.",
    "Formáty polí přizpůsob tomu, co s daty uděláš – konzistentní formáty data a čísel ušetří pozdější čištění.",
    "Drž si reálná očekávání: vzhled formuláře se mezi prohlížeči může lišit, takže je neinteraktivní šablona nebo zafixované vracení celkově nejspolehlivější.",
  ],
  mobileNote:
    "Protože většina lidí vyplňuje formuláře na telefonu, otestuj ten svůj v aplikaci PDF Editor na telefonu ještě před odesláním: ověř, že jsou pole klepatelná nebo že má neinteraktivní šablona dost místa na text zadaný palcem, že je prostor na podpis dosažitelný a že zafixovaný export vypadá správně.",
  faq: [
    {
      q: "Co dělá formulář PDF snadno vyplnitelným?",
      a: "Jasné, jednoznačné popisky; velkorysý prostor pro každou odpověď; jen pole, která skutečně potřebuješ; a nepřehlédnutelný prostor na podpis. Pak si ho sám otestuj na telefonu, protože tam ho dokončí většina lidí.",
    },
    {
      q: "Mám formuláře posílat jako interaktivní, nebo neinteraktivní?",
      a: "Interaktivní je úhlednější tam, kde ho umíš dobře postavit, ale čistá neinteraktivní šablona funguje v každém prohlížeči. Ať zvolíš cokoli, na jasných popiscích a skutečném prostoru záleží víc než na typu pole.",
    },
    {
      q: "Proč bych neměl zafixovat prázdný formulář před odesláním?",
      a: "Zafixování slije vrstvu polí se stránkou a odstraní interaktivní pole. Příjemci by pak neměli do čeho psát. Zafixuj až vyplněné formuláře při vracení.",
    },
    {
      q: "Jak zabráním tomu, aby lidé zapomínali na podpis?",
      a: "Dej podpisu jasný, dobře umístěný prostor s polem na datum vedle. Chybějící podpis je nejčastější důvod, proč se formuláře vracejí, a nepřehlédnutelný prostor většinu z toho vyřeší.",
    },
    {
      q: "Kolik polí je už moc?",
      a: "Každé pole, které v tuhle chvíli není potřeba, je moc – každé z nich snižuje míru dokončení. Ptej se teď na minimum a zbytek sesbírej později, pokud ho opravdu potřebuješ.",
    },
  ],
  related: [
    {
      label: "Jak vytvořit vyplnitelné PDF",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "Jak vyplnit formulář PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Jak sdílet formulář PDF",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Problémy s formátováním formuláře PDF",
      path: "/guides/pdf-form-formatting-issues",
    },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
