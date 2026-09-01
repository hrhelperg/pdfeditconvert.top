import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-online",
  h1: "Jak zkomprimovat PDF online bez nahrávání",
  description:
    "Zmenši PDF přímo v prohlížeči – bez nahrávání na server, bez účtu. Jak se komprese na zařízení liší od typických online nástrojů a jaký je kompromis v kvalitě.",
  updated: "2026-05-23",
  intro: [
    "„Zkomprimovat PDF online“ obvykle vyvolá povědomou, trochu nepříjemnou představu: nahraj soubor na cizí server, počkej, stáhni výsledek a doufej, že dokument, který jsi právě odevzdal, nebyl nic, na čem by ti záleželo. Existuje lepší verze tohoto postupu – taková, která běží přímo v záložce prohlížeče, takže soubor z tvého zařízení vůbec neodejde.",
    "Tento návod používá bezplatný nástroj Zkomprimovat PDF, který svou práci odvede lokálně pomocí procesoru tvého vlastního zařízení. Je „online“ v tom smyslu, že se k němu dostaneš přes webovou stránku, ale tvé PDF se nikam neposílá. Tenhle rozdíl je nejdůležitější právě u dokumentů, které lidé skutečně komprimují: naskenované smlouvy, výpisy, přihlášky.",
    "Projdeme si jednotlivé kroky, na rovinu vysvětlíme kompromis v kvalitě a upozorníme na typy souborů, u kterých komprese v prohlížeči exceluje nebo naopak naráží na limit.",
  ],
  steps: [
    {
      title: "Otevřít nástroj Zkomprimovat PDF",
      body: "Přejdi na nástroj Zkomprimovat PDF v prohlížeči. Načte se na stránce a soubor zpracuje na tvém zařízení – žádné nahrávání, žádná registrace.",
    },
    {
      title: "Přidat PDF",
      body: "Přetáhni soubor do plochy pro přidání souboru nebo klikni pro jeho výběr. Nic se nikam neposílá; soubor se čte lokálně.",
    },
    {
      title: "Vybrat úroveň komprese",
      body: "Nízká zachová nejvíc detailů, Doporučená vyváží velikost a kvalitu, Silná je nejmenší. Pro e-mail a nahrávání bývá obvykle ideální Doporučená.",
    },
    {
      title: "Zkomprimovat",
      body: "Spusť to. Nástroj lokálně znovu vykreslí a překóduje stránky, pak zobrazí velikost před a po a procento úspory.",
    },
    {
      title: "Zkontrolovat, že výsledek vypadá přijatelně",
      body: "Otevři komprimovaný soubor a podívej se na stránky. Skeny by měly zůstat čitelné; pokud úroveň vypadá příliš hrubě, vrať se o krok zpátky na jemnější.",
    },
    {
      title: "Stáhnout menší soubor",
      body: "Ulož ho jako nový soubor, aby zůstal tvůj originál nedotčený. Komprimovaná kopie je připravená k přiložení nebo nahrání.",
    },
  ],
  tips: [
    "„Online“ tady neznamená „nahrané“. Soubor se zpracovává v tvém prohlížeči na tvém zařízení, což je bezpečnější způsob, jak komprimovat cokoli citlivého.",
    "Komprese je ztrátová – žádný poctivý nástroj netvrdí opak. Nižší úrovně zachovají víc detailů; vyber tu, která pro tvůj účel pořád vypadá přijatelně.",
    "Aby nástroj v prohlížeči dosáhl skutečné úspory, stránky zploští na obrázky, takže text ve výstupu už není vybíratelný ani prohledávatelný. Pokud to potřebuješ, ponech si originál.",
    "Čistě textová nebo vektorová PDF se zmenší jen málo, protože v nich je málo obrazových dat ke kompresi – největší úspory přináší skeny a soubory plné fotek.",
    "PDF chráněná heslem se v prohlížeči nedají zpracovat. Heslo nejdřív odstraň, nebo použij aplikaci PDF Editor, která chráněné soubory podporuje.",
  ],
  mobileNote:
    "Komprese citlivého dokumentu na cestách je přesně místo, kde se zpracování v zařízení vyplatí. Aplikace PDF Editor komprimuje celá offline – smlouvu dokážeš zmenšit i v režimu letadlo a z telefonu neodejde jediný bajt – a zvládá i soubory chráněné heslem.",
  faq: [
    {
      q: "Nahrává se moje PDF opravdu na server?",
      a: "Ne. I když se k němu dostaneš přes webovou stránku, nástroj Zkomprimovat PDF běží v tvém prohlížeči a soubor zpracuje na tvém zařízení. Nic se nikam neposílá, což ho dělá bezpečným pro důvěrné dokumenty.",
    },
    {
      q: "O kolik se můj soubor zmenší?",
      a: "Záleží na obsahu. Naskenovaná a obrázky nabitá PDF se často zmenší o 50–90 %; čistě textová PDF se sotva změní. Nástroj zobrazí přesnou velikost před a po.",
    },
    {
      q: "Klesne kvalita?",
      a: "Ano, do jisté míry – jde o ztrátovou kompresi a nepředstíráme opak. Nižší úrovně zachovají víc detailů. Vyber úroveň, která vypadá přijatelně pro to, jak se dokument bude používat.",
    },
    {
      q: "Proč nejde po kompresi vybrat text?",
      a: "Aby se v prohlížeči dosáhlo skutečné úspory místa, každá stránka se zploští na obrázek, čímž zmizí vybíratelná textová vrstva. Pokud potřebuješ prohledávatelný text, ponech si originál nebo zvol jemnější přístup.",
    },
    {
      q: "Můžu takhle komprimovat chráněné PDF?",
      a: "V prohlížeči ne. Heslo nejdřív odstraň, nebo použij mobilní aplikaci PDF Editor, která umí chráněné soubory otevřít i zkomprimovat.",
    },
  ],
  related: [
    { label: "Zkomprimovat PDF — zmenši přímo v prohlížeči", path: "/compress-pdf" },
    {
      label: "Jak zkomprimovat PDF bez ztráty kvality",
      path: "/guides/how-to-compress-pdf",
    },
    {
      label: "Jak zmenšit velikost PDF pro e-mail",
      path: "/guides/how-to-reduce-pdf-file-size-for-email",
    },
    {
      label: "Nástroje na PDF s důrazem na soukromí",
      path: "/guides/privacy-first-pdf-tools",
    },
  ],
  parentHub: { label: "Zkomprimovat PDF", path: "/compress-pdf" },
};

export default content;
