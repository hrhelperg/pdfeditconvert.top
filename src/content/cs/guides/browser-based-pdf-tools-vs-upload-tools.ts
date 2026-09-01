import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "browser-based-pdf-tools-vs-upload-tools",
  h1: "PDF nástroje v prohlížeči vs nástroje s nahráváním na server",
  description:
    "Ne všechny „online“ PDF nástroje jsou stejné. Rozdíl mezi nástroji, které běží přímo v prohlížeči, a těmi, které tvůj soubor nahrají na server – a jak je od sebe poznat.",
  updated: "2026-05-23",
  intro: [
    "Dva PDF nástroje mohou vypadat identicky – stejná webová stránka, stejné okénko pro přetažení souboru, stejné tlačítko na stažení – a přitom s tvým souborem dělat něco úplně jiného. Jeden ho zpracuje přímo v tvém prohlížeči, na tvém vlastním zařízení. Druhý ho nahraje na server, práci udělá tam a výsledek pošle zpátky. Zvenčí to často nepoznáš, ale u čehokoli citlivého je ten rozdíl to jediné, na čem záleží.",
    "Tenhle návod vysvětluje ten rozdíl, proč záleží a jak poznat, který typ zrovna používáš. Nástroje na tomhle webu jsou prvního typu: běží v tvém prohlížeči a tvůj soubor nikdy neopustí tvé zařízení. Spousta oblíbených „online PDF“ služeb je druhého typu, i když to nedávají najevo.",
    "Nejde o to, že by nástroje s nahráváním byly k ničemu – jde o to, abys věděl, komu svůj dokument svěřuješ, a vybral si vědomě.",
  ],
  steps: [
    {
      title: "Věz, co „přímo v prohlížeči“ opravdu znamená",
      body: "Skutečný nástroj v prohlížeči zpracovává soubor přímo na stránce, s pomocí procesoru tvého zařízení. Tvůj soubor se čte lokálně a nikdy se nikam neposílá – práce se odehrává tam, kde soubor už je.",
    },
    {
      title: "Věz, co dělá nástroj s nahráváním",
      body: "Nástroj s nahráváním pošle tvůj soubor na vzdálený server, zpracuje ho tam a vrátí výsledek zpátky. Tvůj dokument na chvíli žije na cizí infrastruktuře, podléhající jejich pravidlům pro uchovávání dat a ochranu soukromí.",
    },
    {
      title: "Dávej pozor na prozrazující znaky",
      body: "Nástroj s nahráváním obvykle zobrazuje ukazatel průběhu, který závisí na rychlosti tvého internetu, offline může selhat a často zmiňuje soubory „smazané po hodině“ – fráze, která dává smysl, jen pokud tvůj soubor vůbec měli.",
    },
    {
      title: "Vyzkoušej ho offline",
      body: "Nástroj načti, pak si vypni připojení a zkus ho použít. Skutečný nástroj v prohlížeči funguje dál; nástroj s nahráváním nemůže, protože nemá kam soubor poslat.",
    },
    {
      title: "Přizpůsob volbu dokumentu",
      body: "Pro veřejné, necitlivé soubory je v pořádku obojí. U smluv, dokladů totožnosti, výpisů a klientské práce zvol nástroj v prohlížeči, aby dokument nikdy neopustil tvé zařízení.",
    },
    {
      title: "Pro citlivé úkoly používej nástroje přímo v zařízení",
      body: "Nástroje na tomhle webu – sloučení, rozdělení, komprese, převod, otočení a další – běží v tvém prohlížeči. Sáhni po nich, když na soukromí skutečně záleží.",
    },
  ],
  tips: [
    "„Online“ ti neřekne, jestli se soubor nahrává. Skutečná otázka zní, kde probíhá zpracování – v tvém zařízení, nebo na jejich serveru.",
    "Offline test je nejspolehlivější kontrola: nástroj v prohlížeči funguje i s vypnutým připojením, nástroj s nahráváním ne.",
    "„Tvé soubory po hodině mažeme“ je uklidňující jen tehdy, pokud jsi vůbec chtěl, aby se nahrály. Nástroj, který nikdy nic nenahrává, nemá co mazat.",
    "Rychlost je vodítko: nástroje v prohlížeči nečekají na nahrání ani stažení, takže velké soubory bývají lokálně rychlejší než cesta tam a zpátky na server.",
    "Nástroje s nahráváním nejsou zlo – pro veřejný leták jsou v pořádku. Jen jim bez rozmyslu nesvěřuj smlouvu nebo doklad totožnosti.",
  ],
  mobileNote:
    "Na mobilu nástroj s nahráváním navíc spotřebovává tvá data a zadrhává na slabém signálu. Aplikace PDF Editor zpracovává vše přímo v zařízení a funguje úplně offline – takže citlivý dokument můžeš sloučit nebo zkomprimovat ve vlaku bez signálu, aniž by cokoli opustilo tvůj telefon.",
  faq: [
    {
      q: "Jsou všechny online PDF nástroje stejné?",
      a: "Ne. Některé zpracují tvůj soubor v prohlížeči, přímo v tvém zařízení; jiné ho nahrají na server. Mohou vypadat identicky, takže je snadné ten rozdíl přehlédnout – ale určuje, jestli tvůj dokument opustí tvé zařízení, nebo ne.",
    },
    {
      q: "Jak poznám, jestli nástroj nahrává můj soubor?",
      a: "Vyzkoušej ho offline. Nástroj v prohlížeči funguje dál i s vypnutým připojením; nástroj s nahráváním ne, protože nemá kam soubor poslat. Nástroje s nahráváním navíc mívají ukazatele průběhu závislé na síti.",
    },
    {
      q: "Jsou nástroje na tomhle webu založené na prohlížeči?",
      a: "Ano. Sloučení, rozdělení, komprese, převod, otočení a další běží v tvém prohlížeči s pomocí procesoru tvého zařízení. Tvoje soubory se nikdy nenahrávají.",
    },
    {
      q: "Je někdy v pořádku použít nástroj s nahráváním?",
      a: "Pro veřejné, necitlivé dokumenty ano. Opatrnost platí u smluv, dokladů totožnosti, finančních výpisů a klientské práce, kde nástroj v prohlížeči udrží soubor v tvém zařízení.",
    },
    {
      q: "Proč jsou nástroje v prohlížeči někdy rychlejší?",
      a: "Není tam žádné čekání na nahrání ani stažení. Soubor je už v tvém zařízení, takže u velkých dokumentů lokální zpracování často předčí cestu tam a zpátky na server.",
    },
  ],
  related: [
    { label: "Všechny bezplatné PDF nástroje – v prohlížeči, bez nahrávání", path: "/pdf-tools" },
    { label: "PDF nástroje s důrazem na soukromí", path: "/guides/privacy-first-pdf-tools" },
    { label: "Aplikace PDF nebo online nástroje", path: "/compare/pdf-app-vs-online-pdf-tools" },
    { label: "Jak zkomprimovat PDF online bez nahrávání", path: "/guides/how-to-compress-pdf-online" },
  ],
  parentHub: { label: "Všechny bezplatné PDF nástroje", path: "/pdf-tools" },
};

export default content;
