import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-google-docs",
  h1: "PDF vs Google Docs – kdy použít který (úpravy, sdílení, uzamčení)",
  description:
    "Google Docs je na spolupráci, PDF na doručení výsledku. Reálný návod, kdy použít který, a jak mezi nimi čistě převádět ve správnou chvíli.",
  updated: "2026-05-29",
  intro: [
    "Google Docs a PDF si spolu vlastně vůbec nekonkurují – hodí se pro jiné fáze života dokumentu. Docs je na psaní, spolupráci, revize a komentáře; PDF je na doručení, uzamčení, podpis a archivaci. Přesně tam, kde se je snažíš použít mimo jejich silnou stránku, vzniká tření.",
    "Typický dokument projde oběma: napíšeš ho v Docs, protože právě tam probíhá spolupráce, pak ho exportuješ jako PDF, jakmile je verze finální a odchází mimo pracovní tým. Cesta opačným směrem – dostat PDF a importovat ho do Docs kvůli úpravám – funguje, ale vždy ztratí kus věrnosti, takže je to spíš záložní řešení než rutina.",
    "Tenhle návod projde reálné rozhodnutí, kdy použít který podle fáze, plus mechaniku převodu oběma směry. Vyber správný formát ve správnou chvíli a tření většinou zmizí.",
  ],
  steps: [
    {
      title: "Používej Google Docs, dokud se dokument teprve píše",
      body: "Úpravy víc autorů najednou, živé kurzory, historie verzí, komentáře. Docs tohle všechno zvládá čistě a PDF nic z toho neumí. Psaní i revize patří do Docs.",
    },
    {
      title: "Přepni na PDF, jakmile je dokument finální nebo jde ven",
      body: "Jakmile dokument putuje ke klientovi, regulátorovi, dodavateli nebo do archivu, PDF uzamkne rozvržení i obsah. Dokument v Docs zůstává jako upravitelný zdroj; PDF je výstup.",
    },
    {
      title: "Exportuj z Docs do PDF čistě",
      body: "Soubor → Stáhnout → dokument PDF. Vlož písma přes nastavení exportu, pokud to jde. Výsledné PDF zachová nadpisy, tabulky, obrázky i formátování.",
    },
    {
      title: "Když musíš, převeď PDF na upravitelné",
      body: "PDF do Wordu v prohlížeči vytáhne text z PDF. Výstup je přibližný – rozvržení trpí, tabulky se mohou rozpadnout. Ber to jako záchrannou cestu, ne jako běžný pracovní postup.",
    },
    {
      title: "Nepodepisuj ani nearchivuj v Google Docs",
      body: "Docs nemá skutečnou podporu podpisu a historie verzí je vázaná na tvůj účet Google. Podepsané dokumenty a archivy patří do PDF, uložené lokálně nebo v promyšleném trezoru.",
    },
    {
      title: "Přizpůsob formát souboru příjemci",
      body: "Klienti čekají PDF. Editoři čekají Word nebo Docs. Interní týmy možná preferují Docs kvůli spolupráci. Pošli formát, který příjemce skutečně použije.",
    },
  ],
  tips: [
    "Nesdílej klientovi odkaz na Google Docs – nemusí mít účet Google, oprávnění ke sdílení tě mohou překvapit a dokument se může dál měnit i po jeho otevření.",
    "Při převodu Docs do PDF zkontroluj stránkování – co v Docs vypadalo jako jedna stránka, se v PDF někdy přelije do dvou.",
    "Neotvírej PDF, které jsi dostal, „v Docs“, pokud nepotřebuješ zásadní úpravy. Převod ztrácí formátování; původní PDF je čistší pro čtení i sdílení.",
    "Historii verzí v Docs používej pro společné psaní. PDF je snímek stavu ve chvíli doručení.",
    "Během psaní ber jako zdroj pravdy Docs; po doručení jím ber PDF.",
  ],
  mobileNote:
    "Telefony odbaví většinu práce s PDF v pozdní fázi, i když psaní probíhá na počítači. Aplikace PDF Editor zvládá kompresi na poslední chvíli, podpis a sdílení finálního PDF na iOS i Androidu – hodí se přesně na moment mezi „Docs je hotový“ a „klient má soubor“.",
  faq: [
    {
      q: "Můžu si nechat všechno jen v Google Docs?",
      a: "Pro interní spolupráci ano. Pro doručení navenek ne – klienti čekají PDF a oprávnění ke sdílení v Docs mohou nechtěně uniknout přístup dál, než jsi zamýšlel.",
    },
    {
      q: "Jak dobře funguje převod PDF do Docs?",
      a: "Přijatelně pro záchranu textu, špatně pro rozvržení. Text obvykle projde; tabulky, sloupce a přesné formátování trpí. Používej ho jen, když potřebuješ znovu upravit PDF, ke kterému nemáš zdroj.",
    },
    {
      q: "Mám podepisovat v Google Docs, nebo v PDF?",
      a: "V PDF. Skutečné elektronické podpisy se k PDF připojují čistě; Docs nemá nativní podporu podpisu srovnatelnou s nástroji na podepisování PDF.",
    },
    {
      q: "Co Google Docs jako archiv?",
      a: "Možné, ale rizikové – účty se mění, Docs se dá smazat a formát závisí na službě Google. PDF je lepší archivní formát.",
    },
    {
      q: "Můžu jít tam a zpátky Docs → PDF → Docs?",
      a: "Možné, ale se ztrátami. Každý převod ztrácí věrnost. Nech si originál v Docs jako upravitelný zdroj a k převodu tam a zpátky sáhni jen v nutném případě.",
    },
  ],
  related: [
    { label: "Konvertor PDF — Word, JPG, PNG a zpět", path: "/pdf-converter" },
    { label: "PDF do Wordu — převod pro náročné úpravy", path: "/pdf-to-word" },
    { label: "PDF vs DOCX — srovnání funkce po funkci", path: "/guides/pdf-vs-docx" },
    { label: "PDF vs DOCX pro firmy", path: "/guides/pdf-vs-docx-for-business" },
  ],
  parentHub: { label: "Konvertor PDF — Word, JPG, PNG a zpět", path: "/pdf-converter" },
};

export default content;
