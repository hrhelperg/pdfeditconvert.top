import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-client-intake-forms",
  h1: "Jak posílat vstupní formuláře pro klienty (čistě a soukromě)",
  description:
    "Získej údaje o novém klientovi na jeden zátah. Jak poslat vstupní formulář PDF tak, aby se snadno vyplňoval, vrátil se kompletní a informace o klientovi zůstaly v soukromí.",
  updated: "2026-06-01",
  intro: [
    "Vstupní formulář je pro řadu klientů první skutečná interakce s tím, jak pracuješ, takže se vyplatí ho udělat pořádně. Když se to povede, jeden formulář PDF na příjem klienta na jeden zátah sesbírá všechno, co potřebuješ ke startu – kontaktní údaje, specifika projektu, preference – bez kolečka „můžeš mi ještě poslat…“. Když se to nepovede, formulář se vrací napůl vyplněný a nasadí to nedbalý tón.",
    "Mechanika je jednoduchá, ale záleží na detailech: formulář musí jít snadno vyplnit na telefonu (kde ho většina klientů otevře), musí se vrátit kompletní a v použitelném formátu, a protože nese osobní údaje, neměl by po cestě procházet náhodným veřejným webem.",
    "Tenhle návod projde přípravu vstupního formuláře, jeho odeslání tak, aby ho klienti skutečně dokázali vyplnit, a čisté sbírání odpovědí – praktickou verzi, ne teoretickou.",
  ],
  steps: [
    {
      title: "Postav vstupní formulář, který se ptá jen na to, co potřebuješ",
      body: "Každé pole navíc snižuje šanci na dokončení. Ptej se na to, co skutečně potřebuješ ke startu, seskup to logicky a nech skutečný prostor na odpovědi. Drž si prázdnou hlavní verzi, kterou znovu použiješ pro každého nového klienta.",
    },
    {
      title: "Pošli prázdný formulář, ne zafixovaný",
      body: "Přilož vyplnitelné PDF přímo, nebo ho sdílej přes úložiště, které klient používá. Prázdnou verzi nezafixovávej – tím bys odstranil pole. Přidej jednořádkovou poznámku, jak formulář vyplnit a vrátit.",
    },
    {
      title: "Udělej vyplňování na telefonu bezproblémové",
      body: "Řekni klientům, že formulář mohou dokončit v aplikaci na PDF – klepnutím na pole nebo přidáním textu na neinteraktivní formulář – podepsat, pokud je potřeba, a vyexportovat. Většina to udělá na telefonu, tak jim tuhle cestu uhlaď.",
    },
    {
      title: "Vyžádej si zpátky zafixovanou kopii",
      body: "Požádej o uložené nebo zafixované PDF místo fotky. Zafixované formuláře se čtou konzistentně, nedají se smazat a rovnou zapadnou do klientské složky.",
    },
    {
      title: "Založ ho a potvrď přijetí",
      body: "Vrácený formulář přejmenuj podle klienta a data, ulož ho k záznamům toho klienta a pošli krátké potvrzení. Pokud se formulář vrátí s prázdnými povinnými poli, jednou se ozvi znovu.",
    },
  ],
  tips: [
    "Kratší vstupní formuláře se dokončují – ořízni každé pole, které na startu není skutečně potřeba.",
    "Protože vstupní formuláře nesou osobní údaje, dávej přednost přímým přílohám nebo soukromému úložišti před veřejnými službami na „vyplnění online“.",
    "Znovupoužitelná prázdná hlavní verze znamená, že každý nový klient dostane čistý, identický formulář bez zbylých údajů po předchozím.",
    "V poznámce doporuč konkrétní aplikaci na PDF, ať klienti na telefonu neuvíznou v náhledu e-mailu, kam se nedá psát.",
    "Drž se konzistentního způsobu pojmenování souborů, ať vstupní formulář konkrétního klienta vždycky snadno najdeš.",
  ],
  mobileNote:
    "Klienti mohou tvůj vstupní formulář dokončit na telefonu v aplikaci PDF Editor – vyplní pole nebo přidají text na neinteraktivní formulář, podepíšou a vyexportují zafixovanou kopii rovnou k odeslání zpátky. Funguje to v zařízení, takže se jimi zadané osobní údaje po cestě k tobě nikam nenahrávají.",
  faq: [
    {
      q: "Jak pošlu vstupní formulář pro klienta jako PDF?",
      a: "Přilož vyplnitelné PDF přímo k e-mailu nebo ho sdílej přes úložiště, které klient používá, bez zafixování prázdné verze. Přidej krátkou poznámku o vyplnění v aplikaci na PDF a vrácení vyplněné kopie.",
    },
    {
      q: "Proč se mi vstupní formulář vrací prázdný nebo napůl vyplněný?",
      a: "Klienti ho často otevírají v náhledu e-mailu, který ignoruje pole, nebo se formulář ptá na moc věcí. Doporuč aplikaci na PDF, ořízni zbytečná pole a vyžádej si zpátky zafixovanou kopii.",
    },
    {
      q: "Jak udržím údaje o klientovi v soukromí při sběru vstupních formulářů?",
      a: "Formulář posílej a přijímej jako přímou přílohu nebo přes soukromé úložiště místo veřejného webu na vyplňování. Aplikace PDF Editor vyplňuje přímo v zařízení, takže se klientovy údaje nikam nenahrávají.",
    },
    {
      q: "Mají být vstupní formuláře interaktivní, nebo neinteraktivní?",
      a: "Interaktivní je úhlednější, pokud ho dokážeš vytvořit, ale čistá neinteraktivní šablona funguje všude. Obojí je v pořádku, dokud jsou pole jasně popsaná a mají dost prostoru.",
    },
    {
      q: "Jak udržím pořádek ve vrácených vstupních formulářích?",
      a: "Každý přejmenuj podle klienta a data, ulož ho k záznamům toho klienta a prázdnou hlavní verzi drž zvlášť, ať každý nový klient dostane čerstvou kopii.",
    },
  ],
  related: [
    {
      label: "Formuláře PDF pro malé firmy",
      path: "/guides/pdf-forms-for-small-business",
    },
    {
      label: "Pracovní postupy pro sběr dokumentů pomocí PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "Jak sdílet formulář PDF",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Jak sdílet PDF s klienty",
      path: "/guides/how-to-share-pdfs-with-clients",
    },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
