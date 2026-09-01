import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdfs-with-clients",
  h1: "Jak sdílet PDF s klienty (profesionálně a soukromě)",
  description:
    "Stručný postup pro posílání PDF klientům – správná velikost pro e-mail, volba hesla, branding souboru, potvrzení doručení – bez nahrávání čehokoli na servery třetích stran.",
  updated: "2026-05-29",
  intro: [
    "To, jak posíláš PDF klientovi, vypovídá překvapivě hodně o tom, jak pracuješ. 40MB příloha, která se vrátí, obecný název souboru jako „Dokument (1).pdf“, nebo soubor, který se otevře s chybně napsaným jménem klienta v záhlaví okna – to jsou drobné detaily, a všechny utkví v paměti.",
    "Profesionální předání klientovi stojí hlavně na hrstce zvyků: dej souboru správnou velikost, pojmenuj ho jako skutečný výstup, drž konzistentní branding, chraň heslem, jen když je to na místě, a potvrď doručení. Nic z toho nezabere dlouho, jakmile se to stane rutinou; dohromady to souboru dodá pocit dokončenosti.",
    "Tenhle návod je přesně takový stručný postup – co udělat před stisknutím odeslat a které bezplatné nástroje zvládnou každý krok, aniž by cokoli citlivého nahrály na server třetí strany.",
  ],
  steps: [
    {
      title: "Pojmenuj soubor pro klienta, ne pro sebe",
      body: "JmenoKlienta_NazevProjektu_Nabidka_2026-05-29.pdf je jednoznačné. „finalni_v3_upraveno.pdf“ je přiznání. Příjemce by měl soubor poznat ve své složce se staženými soubory i o měsíc později.",
    },
    {
      title: "Sjednoť metadata názvu dokumentu",
      body: "Titulky záložek PDF často ukazují původní název souboru nebo zbytek z Wordu. Znovu exportuj ze zdrojové aplikace s nastaveným titulkem v metadatech, nebo ho nastav v editoru PDF. Malý detail, profesionální dojem.",
    },
    {
      title: "Komprimuj podle schránky klienta",
      body: "Některé klientské portály mají strop 5 MB; většina e-mailových systémů 25. Zkomprimovat PDF v prohlížeči dostane typický výstup pohodlně pod obě hranice. Udělej to jako poslední krok, ne první.",
    },
    {
      title: "Chraň heslem jen tehdy, když na tom skutečně záleží",
      body: "Hesla používej na skutečně citlivý materiál – finanční detaily, osobní údaje, návrhy smluv. Samotnou nabídku heslem nechraň; tření převáží nad přínosem pro bezpečnost.",
    },
    {
      title: "Pošli průvodní zprávu se seznamem obsahu",
      body: "Jedna krátká věta: „V příloze: nabídka (12 stránek), podmínky (3 stránky), ceník (1 stránka).“ Klient ví, co otevírá, aniž by musel soubor nejdřív projít.",
    },
    {
      title: "Ověř doručení zpětnou vazbou",
      body: "Buď v průvodní zprávě napiš „dej vědět, jestli to dorazilo v pořádku“, nebo se den poté ozvi znovu. Soubory občas skončí ve filtru spamu, obzvlášť přílohy s heslem.",
    },
  ],
  tips: [
    "Vodoznakuj návrhy (NÁVRH, INTERNÍ), ale nikdy finální verzi. Finální verze by žádný štítek potřebovat neměla.",
    "Pokud poznáš, jakou konvenci klient sám používá, přizpůsob se jí – řada firemních klientů má vlastní standard pojmenování dokumentů, který můžeš prostě zrcadlit.",
    "Vyhni se posílání víc než tří příloh. Sluč to, co k sobě patří; zbytek pošli případně dodatečně.",
    "Pokud potřebuješ podpis zpátky, podepiš svou část jako první a předvyplň pole podpisu pro druhou stranu. Je to drobná laskavost, která se vrátí rychleji.",
    "Než pošleš, otestuj soubor na jiném prohlížeči – ten tvůj může zobrazovat rozvržení, které jiní nevidí stejně.",
  ],
  mobileNote:
    "Klienti stále víc čtou výstupy nejdřív na telefonu. Aplikace PDF Editor ti umožní PDF z mobilu prohlédnout, zkomprimovat, podepsat a znovu sdílet, takže revize klienta na poslední chvíli nemusí čekat, až se vrátíš do kanceláře.",
  faq: [
    {
      q: "Jaká je nejčastější chyba při posílání PDF klientům?",
      a: "Název souboru. „Dokument (1).pdf“ klientovi říká, že ti to bylo jedno. Popisný název s projektem a datem udělá soubor dohledatelným později.",
    },
    {
      q: "Mám chránit heslem všechno, co posílám?",
      a: "Ne. Hesla si nech na skutečně citlivý obsah. Rutinní výstupy je nepotřebují a přehnané používání naučí klienty je ignorovat nebo ztrácet.",
    },
    {
      q: "Jak velký může soubor být?",
      a: "E-mail má strop 25 MB; řada klientských portálů 5. Komprimuj všechno nad 5 MB, pokud nevíš jistě, že klient přijímá i větší. Menší je vždycky bezpečnější.",
    },
    {
      q: "Mám posílat víc samostatných PDF, nebo je sloučit?",
      a: "Sluč, když k sobě patří (nabídka + podmínky + ceník). Nech odděleně, když jde o skutečně různé výstupy. Tři přílohy jsou praktická hranice, než se věci začnou ztrácet.",
    },
    {
      q: "Je v pořádku používat online PDF nástroje pro práci s klienty?",
      a: "Jen pokud běží lokálně v tvém prohlížeči. Nahrání citlivého klientského dokumentu na server třetí strany je skutečné riziko. Nástroje v prohlížeči, které zpracovávají soubor přímo v zařízení, se tomu úplně vyhnou.",
    },
  ],
  related: [
    { label: "PDF pro firmy – smlouvy a postupy", path: "/pdf-for-business" },
    { label: "Zkomprimovat PDF – zmenši pro klientské portály", path: "/compress-pdf" },
    { label: "Jak připravit PDF pro firemní použití", path: "/guides/how-to-prepare-pdf-for-business-use" },
    { label: "Jak vytvořit PDF soubory připravené pro klienta", path: "/guides/how-to-create-client-ready-pdf-files" },
  ],
  parentHub: { label: "PDF pro firmy – smlouvy a postupy", path: "/pdf-for-business" },
};

export default content;
