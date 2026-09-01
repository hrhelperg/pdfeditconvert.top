import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-flat-pdf",
  h1: "Upravitelné PDF vs PDF jako obrázek – v čem je skutečný rozdíl",
  description:
    "Některá PDF mají skutečný vybratelný text a upravitelnou strukturu, jiná jsou jen obrázky stránek bez textové vrstvy. Jak poznat, které máš, a kdy je vhodné které.",
  updated: "2026-05-29",
  intro: [
    "Dva soubory mohou být oba PDF a chovat se úplně jinak. Jeden ti dovolí vybrat text, kopírovat citace, hledat slova a upravovat obsah. Druhý vypadá na obrazovce identicky, ale je v podstatě obrázek dokumentu – text je součástí obrázku, ne oddělený od něj. První je upravitelné PDF; druhé je PDF jako obrázek (někdy se mu říká naskenované nebo obrázkové PDF).",
    "Vědět, který typ máš, je důležité, protože nástroje na práci s každým z nich jsou jiné. Upravitelná PDF reagují na editory PDF, konverzní nástroje a vyhledávání. PDF jako obrázek potřebuje OCR, aby se stalo prohledávatelným, a jeho úprava znamená buď OCR a pak úpravu, nebo úplnou náhradu obrázku. Snažit se použít nástroje pro upravitelné PDF na PDF jako obrázek většinou přinese jen frustraci.",
    "Tenhle návod vysvětlí rozdíl, projde test, který ti to řekne za dvě vteřiny, a ukáže, kdy je vhodný který typ. Někdy je PDF jako obrázek záměr – jindy je to jen nehoda toho, jak soubor vznikl.",
  ],
  steps: [
    {
      title: "Dvouvteřinový test: zkus vybrat text",
      body: "Otevři PDF, klikni a táhni přes nějaký text. Pokud se text vybere (zvýrazní se, dá se zkopírovat), jde o upravitelné PDF. Pokud kurzor kreslí výběrový rámeček, ale žádný text se nezvýrazní, je to PDF jako obrázek – „text“ jsou obrazová data.",
    },
    {
      title: "Upravitelné PDF: text je vybratelný, prohledávatelný, kopírovatelný",
      body: "Přímé exporty z Wordu, Pages, Docs nebo návrhových nástrojů vyrábějí upravitelná PDF. Text je strukturovaná data uvnitř souboru; vyhledávání i kopírování a vkládání fungují; editory PDF ho dokážou měnit.",
    },
    {
      title: "PDF jako obrázek: obrázek stránky, žádný podkladový text",
      body: "Naskenované dokumenty jsou nejčastější PDF jako obrázek. Text existuje jen jako pixely; žádná podkladová znaková data neexistují. Vyhledávání nevrátí nic; kopírování a vkládání taky nic nevrátí.",
    },
    {
      title: "OCR promění PDF jako obrázek na prohledávatelné (ale ne dokonale upravitelné)",
      body: "OCR analyzuje obrázek stránky a přidá textovou vrstvu pod pixely. Vyhledávání začne fungovat; kopírování a vkládání vrátí přibližný text. Úprava pořád vyžaduje ruční nahrazení obrázkových prvků.",
    },
    {
      title: "Kdy je PDF jako obrázek záměr: uzamčení, obrazová věrnost",
      body: "Některé postupy PDF záměrně zploští – soubor se pak snadno neupraví, podpisy a razítka nenaruší podkladový text. PDF do obrázků a pak Obrázek do PDF udělá kolečko zpět s kopií jako obrázek.",
    },
    {
      title: "Kdy je upravitelné PDF záměr: každý jiný postup",
      body: "Pro sdílení, podepisování, úpravu, archivaci, opětovné použití – upravitelné PDF je správná volba. Neploš, pokud to výslovně nepotřebuješ.",
    },
  ],
  tips: [
    "Pokud nejde vybrat text v PDF, které jsi sám vyrobil, exportní nastavení vynechalo textovou vrstvu. Znovu exportuj se zapnutou volbou „zachovat text“.",
    "Naskenovaná PDF ze starších skenerů bývají obvykle PDF jako obrázek. Pusť na ně OCR hned při skenování, nebo dodatečně nástrojem, aby byla dlouhodobě k něčemu.",
    "PDF jako obrázek jsou větší než odpovídající upravitelná PDF – obrazová data zaberou víc místa než znaková.",
    "Neploš PDF kvůli „uzamčení“ – správná omezení úprav fungují lépe a zachovávají prohledávatelnost.",
    "Některá „upravitelná“ PDF exportují každý znak jako drobný tvar místo textu. Výběr vypadá v pořádku, ale kopírování a vkládání vrátí nesmysl. Tohle je nejhorší případ pro úpravu.",
  ],
  mobileNote:
    "Na mobilu vypadají PDF jako obrázek a upravitelná PDF v čtečce identicky. Aplikace PDF Editor rozdíl ukáže v režimu úprav – vidíš, které soubory mají skutečný text a které jsou jen obrázek, a podle toho je nasměruješ na OCR, nebo rovnou na úpravu.",
  faq: [
    {
      q: "Jak na první pohled poznám, který typ mám?",
      a: "Zkus vybrat text. Pokud výběr funguje a kopírování vrátí čistý text, je upravitelné. Pokud ne, jde o PDF jako obrázek.",
    },
    {
      q: "Jsou naskenovaná PDF vždy PDF jako obrázek?",
      a: "Přímo ze skeneru ano. Řada skenovacích aplikací teď automaticky pouští OCR a vytvoří prohledávatelné PDF jako obrázek – text je pořád vykreslený jako obrázek, ale pod ním je přidaná prohledávatelná vrstva.",
    },
    {
      q: "Můžu upravit PDF jako obrázek?",
      a: "Jen manipulací s obrázkem (otočení, oříznutí, přidání textu navrch). Skutečná úprava textu vyžaduje nejdřív OCR, a i pak je výstup přibližný.",
    },
    {
      q: "Proč bych chtěl PDF jako obrázek?",
      a: "Kvůli zabránění úpravám textu, kvůli uzamčení podpisů a razítek tak, aby se nedaly přesunout, nebo kvůli doručení obrazově dokonalé verze. Vzácné, ale reálné případy použití.",
    },
    {
      q: "Záleží formát souboru na tom, který typ dostanu?",
      a: "Ano – přímé exporty z textových editorů vytvoří upravitelná PDF; naskenované a pak uložené soubory vytvoří PDF jako obrázek. Zdroj určuje typ.",
    },
  ],
  related: [
    { label: "Editor PDF — úprava textu a obrázků na mobilu", path: "/pdf-editor" },
    { label: "Proč nemůžu upravit PDF?", path: "/guides/why-cant-i-edit-a-pdf" },
    { label: "PDF do Wordu — obnov upravitelný text", path: "/pdf-to-word" },
    { label: "Kdy použít naskenované PDF", path: "/guides/when-to-use-scanned-pdf" },
  ],
  parentHub: { label: "Editor PDF — úprava textu, obrázků a stránek", path: "/pdf-editor" },
};

export default content;
