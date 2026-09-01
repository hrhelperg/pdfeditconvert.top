import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-sensitive-pdf-files",
  h1: "Jak chránit citlivé PDF soubory (úložiště, sdílení, životní cyklus)",
  description:
    "Citlivá PDF potřebují ochranu ve třech bodech: při uložení, při sdílení a poté, co s nimi příjemce skončí. Praktický postup, který pokryje všechny tři.",
  updated: "2026-05-29",
  intro: [
    "Citlivá PDF – smlouvy, finanční záznamy, doklady totožnosti, zdravotnická dokumentace – potřebují ochranu ve třech odlišných bodech svého života: zatímco leží na tvém zařízení nebo disku (úložiště), zatímco putují mezi tebou a příjemcem (sdílení) a poté, co je příjemce použil (životní cyklus). Většina lidí se soustředí na sdílení a ty zbylé dva ignoruje.",
    "Rozumný pracovní postup pokryje všechny tři. Úložiště znamená šifrované disky nebo soubory chráněné heslem na místech, kterým nedůvěřuješ. Sdílení znamená výběr kanálu, který neuniká, ne jen nahrání na cokoli, co se objeví jako první ve vyhledávání. Životní cyklus znamená přemýšlet o tom, co se se souborem stane potom – jak z tvé strany, tak ze strany příjemce.",
    "Tenhle návod projde všechny tři. Nejde o firemní úroveň zabezpečení – je to reálný základ pro jednotlivce nebo malý tým, který občas pracuje s citlivým materiálem a nechce kvůli tomu nasazovat celý balík na úrovni SOC2.",
  ],
  steps: [
    {
      title: "Úložiště: drž citlivá PDF na šifrovaném úložišti",
      body: "macOS FileVault, Windows BitLocker, plné šifrování disku na Linuxu, telefony. Tohle pokrývá tvůj lokální disk. Pro externí disky používej šifrované formáty. Zálohy by měly být šifrované také – synchronizuj do cloudových služeb, které podporují šifrování se zero-knowledge, nebo soubor nejdřív zašifruj sám.",
    },
    {
      title: "Chraň jednotlivá citlivá PDF heslem",
      body: "Ochrana PDF heslem přidá druhou vrstvu. Soubor je v bezpečí, i kdyby šifrování disku selhalo nebo se kopie souboru dostala k někomu při přenosu. Používej silná, jedinečná hesla; sdílej je jiným kanálem než samotný soubor.",
    },
    {
      title: "Sdílení: vyber správný kanál podle citlivosti",
      body: "Běžný e-mail je v pořádku pro málo citlivé soubory. End-to-end šifrované zprávy (Signal, zabezpečený e-mail) pro střední citlivost. Pro vysokou citlivost placené služby s výslovnými závazky ohledně nakládání s daty. Vyhni se nahrávání citlivých PDF do bezplatných nástrojů třetích stran.",
    },
    {
      title: "Zpracuj lokálně ještě před odesláním",
      body: "Pokud potřebuješ citlivé PDF před odesláním zkomprimovat, začernit nebo přeskládat, používej nástroje v prohlížeči, které zpracovávají lokálně – tvůj soubor neprojde cizím serverem. Zkomprimovat PDF, Extrahovat stránky z PDF, Změnit pořadí stránek PDF – všechny běží na tvém zařízení.",
    },
    {
      title: "Životní cyklus: přemýšlej o uchovávání a mazání",
      body: "Citlivá PDF si drž jen tak dlouho, jak je potřebuješ. Totéž by měl dělat příjemce. Zvaž požádat příjemce, aby potvrdil smazání poté, co soubor použil – zejména u dokladů totožnosti určených jen k jednorázovému použití.",
    },
    {
      title: "Před odesláním odstraň metadata",
      body: "PDF často nesou jméno autora, původní název souboru, historii úprav. Nový export z čistého zdroje většinu z toho odstraní. Aplikace PDF Editor a další nástroje ti navíc umožní metadata vyloženě vyčistit.",
    },
  ],
  tips: [
    "Neposílej heslo ve stejné zprávě jako soubor chráněný heslem. Soubor pošli jedním kanálem, heslo jiným.",
    "Se skeny dokladů totožnosti zacházej jako s jednorázovými. Jakmile je má příjemce, požádej ho o smazání, pokud nemá regulatorní důvod je uchovávat.",
    "Nepoužívej stejné heslo pro víc citlivých PDF. Pokud jedno unikne, ostatní zůstanou chráněná.",
    "Vyhni se veřejné Wi-Fi při posílání citlivých souborů. Použij hotspot nebo počkej na důvěryhodnou síť.",
    "Jednou za rok proveď audit citlivých PDF. Většinu z nich už nepotřebuješ – bezpečně je smaž a zmenši tak plochu rizika.",
  ],
  mobileNote:
    "Telefony dnes drží a odesílají spoustu citlivých PDF (podepsané smlouvy, skeny dokladů). Aplikace PDF Editor je zpracovává lokálně přímo na zařízení – komprese, podepisování, ochrana heslem – takže citlivý materiál nikdy nemusí opustit telefon, aby se připravil k odeslání.",
  faq: [
    {
      q: "Je ochrana PDF heslem opravdu silná?",
      a: "Moderní šifrování AES u PDF je silné. Slabým místem bývá samotné heslo – slabé heslo je jediná snadná cesta dovnitř. Používej dlouhá, jedinečná hesla.",
    },
    {
      q: "Mám citlivá PDF vždy šifrovat?",
      a: "Ano, jak v klidu, tak při přenosu. Šifrování disku chrání v klidu; hesla PDF nebo šifrované kanály chrání při přenosu.",
    },
    {
      q: "Co cloudové úložiště pro citlivá PDF?",
      a: "Přijatelné se šifrováním typu zero-knowledge (poskytovatel nemůže tvoje soubory číst) nebo s šifrováním na straně klienta (šifruješ ještě před nahráním). Obyčejné cloudové úložiště je přijatelné pro běžné soubory, ne pro vysoce citlivé.",
    },
    {
      q: "Jak začerním citlivé části PDF?",
      a: "Skutečné začernění znamená vykreslit text jako obrázek a nahradit ho. Aplikace PDF Editor tohle podporuje. Pouhé černé obdélníky navrch text nezačerní – původní text zůstává extrahovatelný.",
    },
    {
      q: "Můžu PDF bezpečně smazat?",
      a: "Na SSD discích je bezpečné mazání méně přímočaré než na klasických discích. Přesuň soubor na šifrované úložiště, pak ho smaž a nech disk TRIMem vyčistit sektory. Pro velmi vysokou citlivost je od začátku správným přístupem plné šifrování disku.",
    },
  ],
  related: [
    { label: "Zabezpečení PDF — ochrana PDF heslem", path: "/pdf-security" },
    { label: "Jak chránit PDF soubor heslem", path: "/guides/how-to-protect-pdf-file" },
    { label: "Jak sdílet PDF soubory soukromě", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Jak se vyhnout nahrávání citlivých dokumentů", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "Zabezpečení PDF — heslo a šifrování", path: "/pdf-security" },
};

export default content;
