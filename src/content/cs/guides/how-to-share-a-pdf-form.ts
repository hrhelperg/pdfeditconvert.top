import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-a-pdf-form",
  h1: "Jak sdílet formulář PDF, aby ho ostatní mohli vyplnit",
  description:
    "Poslat prázdný formulář k vyplnění je něco jiného než poslat hotový dokument. Jak formulář sdílet tak, aby ho příjemci skutečně mohli vyplnit, a jak pak sesbírat výsledky.",
  updated: "2026-06-01",
  intro: [
    "Sdílet formulář PDF zní jako triviálka – přilož ho, odešli – ale je rozdíl mezi rozeslat prázdný formulář k vyplnění a poslat dokument k přečtení. Když sdílíš formulář, potřebuješ, aby ho příjemci uměli vyplnit na jakémkoli zařízení, které zrovna mají, a potřebuješ, aby se ti jejich vyplněné kopie vrátily ve stavu, se kterým se dá reálně pracovat.",
    "Běžně se pokazí dvě věci. Formulář dorazí způsobem, který jeho pole odstraní nebo skryje, takže příjemci nemůžou psát. Nebo se odpovědi vrátí nekonzistentně – některé zafixované, jiné upravitelné, další jako fotky vytištěné stránky. Trocha péče při odesílání oběma problémům předejde a sběr odpovědí výrazně zpříjemní.",
    "Tenhle návod pokrývá, jak sdílet prázdný formulář, aby zůstal vyplnitelný, jak dát příjemcům jasné pokyny a jak naložit s vyplněnými kopiemi, jak se vracejí – bez toho, abys cokoli posílal přes nahrávání na server třetí strany, pokud je obsah citlivý.",
  ],
  steps: [
    {
      title: "Než formulář pošleš, ověř, že je prázdná verze vyplnitelná",
      body: "Otevři si formulář a sám ho zkontroluj. Pokud je interaktivní, ujisti se, že jsou pole aktivní; pokud je neinteraktivní, ujisti se, že je pro odpovědi dost místa. Prázdný formulář nikdy nezafixovávej – tím bys odstranil pole, která příjemci potřebují.",
    },
    {
      title: "Pošli přímo soubor, ne odkaz na konvertor",
      body: "Přilož PDF přímo k e-mailu nebo zprávě, nebo ho sdílej přes úložiště, které příjemce už používá. Citlivý formulář nepouštěj přes veřejné nástroje na nahrávání, když stačí obyčejná příloha.",
    },
    {
      title: "Vysvětli příjemcům, jak formulář vyplnit",
      body: "Pomůže jedna věta: „Klepni na pole a piš, nebo pokud se pole nezobrazují, přidej text navrch, a pak vyexportuj vyplněnou kopii.“ Uživatele na telefonu nasměruj na pořádnou aplikaci na PDF, ne na náhled v e-mailu.",
    },
    {
      title: "Vyžádej si vyplněné kopie v použitelné podobě",
      body: "Požádej lidi, aby posílali uložené nebo zafixované PDF, ne fotku vytištěné stránky. Zafixované kopie se zobrazují konzistentně a snáz se archivují i čtou.",
    },
    {
      title: "Sesbírej a uspořádej odpovědi",
      body: "Jak se kopie vracejí, přejmenuj je podle respondenta a data, ať se ti nesplynou dohromady. Prázdnou hlavní verzi si drž zvlášť, ať máš vždy po ruce čistou šablonu k dalšímu odeslání.",
    },
  ],
  tips: [
    "Prázdný formulář, který rozesíláš, nikdy nezafixovávej – zafixování odstraní pole a příjemcům nezůstane nic, co by mohli vyplnit.",
    "Pokud ti lidé pořád posílají fotky vytištěných stránek, tvé pokyny potřebují víc jasnosti ohledně vyplňování na obrazovce a exportu.",
    "U citlivých formulářů dávej přednost přímým přílohám nebo soukromému úložišti před veřejnými weby na „vyplnění online“.",
    "Dej souboru jasný název jako „vstupni-formular-prazdny.pdf“, ať příjemci poznají hlavní verzi od své vyplněné kopie.",
    "Chování formuláře se může mezi prohlížeči lišit, takže doporučení konkrétní spolehlivé aplikace předejde většině zpráv typu „nejde mi tam psát“.",
  ],
  mobileNote:
    "Příjemci na telefonu tvůj formulář vyplní v aplikaci PDF Editor – aktivuje interaktivní pole a lidem dovolí přidat text na neinteraktivní formuláře – a pak vyexportují vyplněnou kopii rovnou k odeslání zpátky. Doporučení v tvé zprávě ušetří potíže lidem, kteří by jinak uvízli v náhledu e-mailu, který pole ignoruje.",
  faq: [
    {
      q: "Jak sdílet formulář PDF, aby ho lidé mohli vyplnit?",
      a: "Pošli vyplnitelné PDF jako přímou přílohu nebo přes sdílené úložiště a nezafixovávej ho předem. Řekni příjemcům, ať ho otevřou v pořádné aplikaci na PDF, vyplní pole nebo přidají text a pak vyexportují vyplněnou kopii.",
    },
    {
      q: "Proč moji příjemci nemůžou do poslaného formuláře psát?",
      a: "Často ho otvírají v náhledu e-mailu nebo prohlížečce, která ignoruje pole formuláře, nebo je formulář neinteraktivní. Doporuč specializovanou aplikaci na PDF a upozorni, že mohou přidat text navrch, pokud se žádná pole neobjeví.",
    },
    {
      q: "Mám formulář sdílet přes online službu na vyplňování?",
      a: "U běžných formulářů to může být praktické, ale u čehokoli citlivého drží přímá příloha nebo soukromé úložiště obsah mimo servery třetích stran. Volbu kanálu přizpůsob citlivosti.",
    },
    {
      q: "Jak by se mi měly vyplněné formuláře vracet?",
      a: "Vyžádej si uložené nebo zafixované PDF, ne fotku vytištěné stránky. Zafixované kopie vypadají všude stejně a mnohem snáz se archivují a zpracovávají.",
    },
    {
      q: "Jak si udržím pořádek v odpovědích?",
      a: "Každý vrácený soubor přejmenuj podle respondenta a data, ulož je do jedné složky a prázdnou hlavní verzi drž zvlášť, ať můžeš kdykoli znovu poslat čistou šablonu.",
    },
  ],
  related: [
    {
      label: "Jak odeslat vyplněný formulář PDF",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "Jak posílat vstupní formuláře pro klienty",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Pracovní postupy pro sběr dokumentů pomocí PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "Jak sdílet PDF s klienty",
      path: "/guides/how-to-share-pdfs-with-clients",
    },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
