import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-split-pdf-files",
  h1: "Jak rozdělit PDF na samostatné soubory (zdarma)",
  description:
    "Rozděl jedno velké PDF na menší soubory podle rozsahu stránek přímo v prohlížeči. Kdy rozdělit a kdy raději extrahovat stránky a jak přitom zachovat originál v bezpečí.",
  updated: "2026-05-23",
  intro: [
    "Rozdělení PDF je na místě, když se jeden soubor snaží být zároveň víc dokumenty: naskenovaný balík, který je vlastně smlouva plus přílohy, dvousetstránkový report, ze kterého potřebuješ jen jednu kapitolu, nebo sloučená dávka, která se má poslat zpátky jako jednotlivé soubory. Místo aby ses posílal celek a nechal lidi hledat svou část, ho rozdělíš.",
    "Tento návod používá bezplatný nástroj Rozdělit PDF, který rozdělí PDF podle rozsahu stránek přímo v tvém prohlížeči – nic se nikam nenahrává. Je to rychlý a soukromý způsob, jak z jednoho souboru udělat menší kousky, které skutečně potřebuješ poslat nebo uložit.",
    "Vyjasníme si i častý zdroj zmatku: rozdíl mezi rozdělením PDF a extrahováním stránek, protože správný nástroj závisí na tom, co má být výsledkem.",
  ],
  steps: [
    {
      title: "Otevřít nástroj Rozdělit PDF",
      body: "Přejdi na nástroj Rozdělit PDF v prohlížeči. Běží na tvém zařízení – žádné nahrávání, žádný účet.",
    },
    {
      title: "Přidat PDF",
      body: "Přetáhni soubor do plochy pro přidání souboru nebo klikni pro jeho výběr. Nástroj přečte počet stránek, abys mohl rozdělit podle rozsahu.",
    },
    {
      title: "Rozhodnout, kde dokument rozdělit",
      body: "Podívej se na čísla stránek a urči hranice – například stránky 1–10 jsou smlouva, 11–24 příloha. Rozsahy si naplánuj předtím, než rozdělíš.",
    },
    {
      title: "Zadat rozsah stránek k rozdělení",
      body: "Urči rozsah, který chceš jako samostatný soubor. Zopakuj pro každou část, kterou potřebuješ oddělit.",
    },
    {
      title: "Stáhnout jednotlivé části",
      body: "Nástroj vytvoří nové PDF pro zvolený rozsah. Každou ulož pod jasným, konkrétním názvem odpovídajícím dané části.",
    },
    {
      title: "Ponechat originál nedotčený",
      body: "Rozdělení zdroj neupravuje – původní PDF zůstává v celku na tvém zařízení. Ponech si ho, dokud nezkontroluješ, že každé rozdělení dopadlo správně.",
    },
  ],
  tips: [
    "Rozděl, když chceš víc samostatných dokumentů; extrahuj, když chceš vytáhnout pár stránek do jednoho nového souboru. Zní podobně, ale výsledek je jiný.",
    "Hranice stránek si poznač předem. Rozdělení dlouhého reportu jde mnohem rychleji, když už víš, že metodika začíná na stránce 31.",
    "Každý rozdělený soubor pojmenuj podle obsahu, ne podle rozsahu – „Priloha-B.pdf“ je pro příjemce užitečnější než „stranky-25-40.pdf“.",
    "Rozdělení velkého PDF předem zrychlí i další operace: komprese nebo převod patnáctistránkové části je snazší než zápolení s celým třistastránkovým souborem.",
    "PDF chráněná heslem se v prohlížeči nedají zpracovat. Heslo nejdřív odstraň, nebo použij aplikaci PDF Editor, která chráněné soubory podporuje.",
  ],
  mobileNote:
    "Na telefonu jde při rozdělování často o to poslat správný kousek správné osobě odkudkoli zrovna jsi. Aplikace PDF Editor rozděluje, extrahuje a sdílí na pár klepnutí a funguje offline – užitečné, když jsi na místě a potřebuješ poslat zpátky jen podepsané stránky.",
  faq: [
    {
      q: "Jaký je rozdíl mezi rozdělením a extrahováním?",
      a: "Rozdělení rozláme jedno PDF na víc samostatných souborů podle rozsahu. Extrahování vytáhne vybrané stránky do jednoho nového souboru. Rozdělení použij pro rozdělení dokumentu, extrahování pro sesbírání konkrétních stránek.",
    },
    {
      q: "Změní rozdělení můj původní soubor?",
      a: "Ne. Zdrojové PDF zůstává nedotčené – nástroj vytvoří nové soubory pro zvolené rozsahy. Originál si ponech, dokud výsledky nezkontroluješ.",
    },
    {
      q: "Nahrává se moje PDF někam?",
      a: "Ne. Rozdělení probíhá v prohlížeči na tvém zařízení, takže soubor z něj nikdy neodejde – bezpečné pro smlouvy i důvěrné reporty.",
    },
    {
      q: "Na kolik částí můžu PDF rozdělit?",
      a: "Na tolik, kolik potřebuješ – jen zopakuj výběr rozsahu pro každou část. Velmi rozsáhlá PDF můžou zatížit paměť prohlížeče, v takovém případě je lepší volbou aplikace PDF Editor.",
    },
    {
      q: "Můžu rozdělit PDF chráněné heslem?",
      a: "V prohlížeči ne. Heslo nejdřív odstraň, nebo použij mobilní aplikaci PDF Editor, která umí chráněné soubory otevřít.",
    },
  ],
  related: [
    { label: "Rozdělit PDF — rozděl soubor přímo v prohlížeči", path: "/split-pdf" },
    {
      label: "Extrahovat stránky z PDF — vytáhni stránky do nového souboru",
      path: "/extract-pdf-pages",
    },
    {
      label: "Jak extrahovat stránky z PDF",
      path: "/guides/how-to-extract-pages-from-pdf",
    },
    { label: "Jak sloučit PDF soubory", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Rozdělit PDF", path: "/split-pdf" },
};

export default content;
