import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-scanned-pdf",
  h1: "Jak zkomprimovat naskenované PDF (velká úspora)",
  description:
    "Naskenovaná PDF se zmenšují nejsnáz a bývají největšími viníky velikosti. Jak je výrazně zkomprimovat a co se přitom stane s prohledávatelným textem.",
  updated: "2026-05-23",
  intro: [
    "Naskenovaná PDF jsou těžká váha světa dokumentů. Každá stránka je obrázek v plném rozlišení, takže krátká naskenovaná smlouva dokáže vážit víc než stostránkový textový report. Druhá strana mince je dobrá zpráva: protože jsou skeny skoro celé tvořené obrazovými daty, komprimují se dramatičtěji než jakýkoli jiný typ PDF – často o 70 % i víc.",
    "Tento návod se zaměřuje konkrétně na kompresi skenů pomocí bezplatného nástroje Zkomprimovat PDF, který běží v tvém prohlížeči a nic se nikam nenahrává. Skeny jsou přesně ten případ, kde komprese v prohlížeči exceluje a kde je úspora velikosti nejvíc znát.",
    "Probereme i jednu věc, na kterou si u naskenovaných dokumentů dát pozor – prohledávatelný text –, abys omylem nepřišel o textovou vrstvu, na jejímž vytvoření sis dal práci.",
  ],
  steps: [
    {
      title: "Otevřít nástroj Zkomprimovat PDF",
      body: "Přejdi na nástroj Zkomprimovat PDF v prohlížeči. Soubor zpracuje na tvém zařízení, takže i naskenovaná smlouva zůstane v soukromí.",
    },
    {
      title: "Přidat naskenované PDF",
      body: "Přetáhni sken do plochy pro přidání souboru nebo klikni pro jeho výběr. Nástroj ho přečte lokálně – nic se nikam nenahrává.",
    },
    {
      title: "Zvolit úroveň – tady si můžeš dovolit silnější",
      body: "Skeny snáší silnou kompresi dobře, protože jsou to obrázky, ne ostrý vektorový text. Doporučená obvykle stačí; Silná může u běžných dokumentů pořád vypadat naprosto čitelně.",
    },
    {
      title: "Zkomprimovat a zkontrolovat čitelnost",
      body: "Spusť to a otevři výsledek. Klíčový test u skenu je čitelnost – dá se text pohodlně přečíst? Pokud ano i na silné úrovni, vezmi si tu větší úsporu.",
    },
    {
      title: "Dát pozor na prohledávatelnou textovou vrstvu",
      body: "Pokud byl tvůj sken zpracovaný přes OCR, aby byl prohledávatelný, komprese v prohlížeči stránky znovu vykreslí jako obrázky a tuhle vrstvu odstraní. Prohledávatelný originál si ponech, pokud ho potřebuješ.",
    },
    {
      title: "Uložit menší kopii",
      body: "Ulož pod novým názvem. Naskenované soubory se běžně na jeden zátah vejdou hluboko pod limity pro e-mail a nahrávání.",
    },
  ],
  tips: [
    "Skeny se komprimují nejlépe ze všech PDF – pokud je dokument obří proto, že je naskenovaný, máš na velikost štěstí.",
    "Protože jsou skeny obrázky, obvykle si můžeš dovolit silnější úroveň, než by sis troufl u navrženého dokumentu, a přitom ho udržet čitelný.",
    "Pokud měl tvůj sken prohledávatelnou textovou vrstvu z OCR, komprese v prohlížeči ji odstraní. Rozpoznávání textu pak spusť znovu, nebo si prohledávatelný originál ponech zvlášť.",
    "Skenování v nižším rozlišení (200–300 DPI) už u zdroje vytvoří menší soubory od začátku, takže později nemusíš komprimovat tak silně.",
    "Barevné skeny jsou větší než v odstínech šedi. Pokud barva dokumentu nic nepřidává, skenování v odstínech šedi ho zmenší ještě dřív, než komprese vůbec začne.",
  ],
  mobileNote:
    "Skeny obvykle vznikají na telefonu a aplikace PDF Editor drží celý koloběh v zařízení: naskenuj v rozumné kvalitě, zkomprimuj offline a – na rozdíl od nástrojů v prohlížeči – spusť rozpoznávání textu, aby menší soubor zůstal prohledávatelný. Bez nahrávání v jakémkoli kroku.",
  faq: [
    {
      q: "O kolik se dá naskenované PDF zmenšit?",
      a: "Často o 70 % i víc. Skeny jsou skoro celé tvořené obrazovými daty, což je přesně to, na co komprese cílí, takže se zmenší mnohem víc než textová PDF.",
    },
    {
      q: "Zůstane sken po silné kompresi čitelný?",
      a: "U běžných dokumentů obvykle ano – skeny snáší silnou kompresi, protože jsou to obrázky, ne ostrý vektorový text. Výsledek si vždy otevři a čitelnost ověř.",
    },
    {
      q: "Odstraní komprese ze skenu prohledávatelný text?",
      a: "Pokud byl sken zpracovaný přes OCR, aby byl prohledávatelný, komprese v prohlížeči stránky znovu vykreslí jako obrázky a tuhle vrstvu odstraní. Prohledávatelný originál si ponech, nebo rozpoznávání textu spusť znovu.",
    },
    {
      q: "Nahrává se můj naskenovaný dokument někam?",
      a: "Ne. Nástroj Zkomprimovat PDF běží v tvém prohlížeči na tvém zařízení, takže citlivé skeny jako smlouvy a výpisy zůstávají v soukromí.",
    },
    {
      q: "Můžu zkomprimovat sken chráněný heslem?",
      a: "V prohlížeči ne. Heslo nejdřív odstraň, nebo použij mobilní aplikaci PDF Editor, která chráněné soubory komprimuje offline.",
    },
  ],
  related: [
    {
      label: "Zkomprimovat PDF — zmenši skeny přímo v prohlížeči",
      path: "/compress-pdf",
    },
    {
      label: "Jak převést naskenované dokumenty do PDF",
      path: "/guides/how-to-convert-scanned-documents-to-pdf",
    },
    { label: "Proč je moje PDF tak velké?", path: "/guides/why-is-my-pdf-so-large" },
    {
      label: "Jak naskenovat dokumenty do PDF telefonem",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
  ],
  parentHub: { label: "Zkomprimovat PDF", path: "/compress-pdf" },
};

export default content;
