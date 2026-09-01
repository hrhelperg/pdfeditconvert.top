import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "secure-pdf-workflows-for-business",
  h1: "Zabezpečené pracovní postupy s PDF pro firmy (bez enterprise řešení)",
  description:
    "Malá firma nepotřebuje trezor na PDF s certifikací SOC 2, aby fungovala bezpečně. Reálný základ – šifrované úložiště, podepsané přenosy, lokální zpracování – který odpovídá skutečnému riziku.",
  updated: "2026-05-29",
  intro: [
    "Podnikové balíčky pro zabezpečení PDF – trezory s auditem SOC2, automatizované uchovávání, připravenost na e-discovery – existují pro firmy, kterým přes rameno kouká regulátor. Pro pětičlennou konzultantskou firmu nebo třicetičlennou agenturu je to zbytečný přepych. Skutečné riziko je přízemnější: zaměstnanec nahraje smlouvu klienta do bezplatného nástroje na „kompresi“, který si soubor ponechá, sdílený disk nemá šifrování, podepsané PDF se pošle e-mailem bez ochrany přes veřejnou Wi-Fi.",
    "Rozumný základ pro běžnou malou firmu řeší přesně tahle skutečná rizika, aniž bys kupoval podnikové vybavení. Šifrované úložiště, podepsané přenosy, lokální zpracování citlivého materiálu a hrstka zvyků, na kterých se tým shodne. Nic z toho není drahé; některé z toho je jen výměna výchozích nástrojů.",
    "Tenhle návod popisuje ten základ. Vezmi si, co sedí tvojí firmě; přeskoč, co se nehodí. Cílem je rozumná obrana, ne divadlo.",
  ],
  steps: [
    {
      title: "Plné šifrování disku na každém firemním zařízení",
      body: "macOS FileVault, Windows BitLocker, Linux LUKS. Povinné na notebookách, užitečné na stolních počítačích. Ztracené nebo ukradené zařízení bez šifrování je okamžitý únik dat; se šifrováním je to jen ztráta hardwaru.",
    },
    {
      title: "Citlivý materiál klientů zpracovávej lokálně",
      body: "Zkomprimovat PDF, Sloučit PDF, Extrahovat stránky z PDF a další nástroje tohoto webu v prohlížeči zpracovávají lokálně – data klienta neprocházejí přes třetí stranu. Zaveď tohle jako výchozí zvyk celého týmu.",
    },
    {
      title: "Podepisuj smlouvy skutečným nástrojem na elektronický podpis",
      body: "Podepsat PDF nebo aplikace PDF Editor pro běžné smlouvy. Pro regulované transakce použij prověřenou komerční platformu na podepisování. Ať tak či tak, nakreslený podpis obstojí lépe než napsané jméno.",
    },
    {
      title: "Pro citlivé přenosy používej šifrované kanály",
      body: "Signal nebo end-to-end šifrovaný e-mail pro citlivý materiál. Běžný e-mail pro běžné dokumenty. Zvol kanál podle citlivosti.",
    },
    {
      title: "Nastav zásady hesel pro citlivá PDF",
      body: "Důvěrný materiál klienta dostane heslo v PDF. Sdílej heslo jiným kanálem než soubor. Kde je to proveditelné, používej pro každého klienta jedinečná hesla.",
    },
    {
      title: "Prováděj audit a mazání podle plánu",
      body: "Čtvrtletně projdi /Klienti/Archiv/. Smaž, co regulátor nevyžaduje a klient už nepotřebuje. Každý uchovaný citlivý soubor je pokračující riziko; zmenšení inventáře snižuje expozici.",
    },
  ],
  tips: [
    "Bezpečnostní základ zdokumentuj písemně. Jednostránková zásada, kterou si všichni přečetli, obstojí lépe než nevyřčená norma.",
    "Šifruj USB disky i externí zálohovací disky. Jsou to nejsnáz ztratitelná zařízení.",
    "Neplať za bezpečnostní software za uživatele, když bezplatné nástroje pokryjí základ. Rozpočet si nech na skutečné mezery.",
    "Proškol tým na phishing – většina narušení u malých firem nepřijde ze slabosti nástrojů, přijde z úspěšného phishingového e-mailu.",
    "Měj plán pro incidenty, i kdyby byl jen na jeden odstavec. „Pokud přijdeme o notebook se soubory klienta, informujeme dotčené klienty do 48 hodin“ na začátek stačí.",
  ],
  mobileNote:
    "Malé firmy teď na telefonech odbaví významnou část práce s dokumenty. Aplikace PDF Editor zvládá podepisování, kompresi, převod a sdílení lokálně na iOS i Androidu, takže mobilní část firemní práce nezavádí do řetězce nový server třetí strany.",
  faq: [
    {
      q: "Potřebují malé firmy skutečně bezpečnostní základ?",
      a: "Ano. Většina narušení postihne malé firmy, ne velké korporace. Základ je krátký a levný; jeho absence je to skutečné riziko.",
    },
    {
      q: "Je zpracování v prohlížeči dost bezpečné pro práci s klienty?",
      a: "Pro běžnou práci s klienty ano. Soubor neopustí tvoje zařízení; to je silnější než nástroj na straně serveru se zásadami uchovávání. Pro regulované transakce (finanční, zdravotnické) mohou platit konkrétní požadavky na shodu.",
    },
    {
      q: "Máme používat podnikové podepisování pro každou smlouvu?",
      a: "Ne. Běžné smlouvy zvládne Podepsat PDF nebo aplikace PDF Editor. Komerční platformy pro podepisování si nech na vysoce hodnotné nebo regulované transakce.",
    },
    {
      q: "Jak zvládneme bezpečnostní incident?",
      a: "Naplánuj to předem: proces oznámení, seznam dotčených klientů, případné regulatorní hlášení. Neimprovizuj.",
    },
    {
      q: "Jaká je nejčastější bezpečnostní mezera u malých firem?",
      a: "Nekonzistentní šifrování zařízení a ledabylé používání bezplatných PDF nástrojů s nahráváním pro citlivý materiál klienta. Obojí se dá levně opravit.",
    },
  ],
  related: [
    { label: "Zabezpečení PDF — heslo a šifrování", path: "/pdf-security" },
    { label: "Jak chránit citlivé PDF soubory", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Jak sdílet PDF soubory soukromě", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Pracovní postupy s PDF pro malé firmy", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Zabezpečení PDF — heslo a šifrování", path: "/pdf-security" },
};

export default content;
