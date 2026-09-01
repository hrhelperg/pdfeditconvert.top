import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "privacy-first-document-workflows",
  h1: "Pracovní postupy s dokumenty s důrazem na soukromí (od začátku do konce bez nahrávání)",
  description:
    "Celý pracovní postup s dokumenty – pořízení, úprava, podpis, odeslání, archivace – který drží soubory na tvých zařízeních a mimo servery třetích stran. Reálná podoba a konkrétní nástroje.",
  updated: "2026-05-29",
  intro: [
    "Většina pracovních postupů s dokumenty někde uniká. Naskenuješ citlivý papír jednou aplikací, nahraješ ho ke kompresi na nějaký web, pošleš ho e-mailem přes nástroj třetí strany na „vylepšení“ a skončíš se třemi nebo čtyřmi servery, které mají kopii něčeho, co jsi považoval za svoje. Každý krok je pohodlný; kumulativní cena za soukromí je velká a neviditelná.",
    "Pracovní postup s důrazem na soukromí neodmítá moderní nástroje – vybírá si ty, které tvoje soubory nikam nepřesouvají. Pořízení se odehraje ve tvém fotoaparátu. Komprese a úpravy proběhnou v prohlížeči. Podepisování proběhne v aplikaci na telefonu. Přenos jde kanálem, kterému důvěřuješ. Dokument nikdy neleží na serveru cizího člověka.",
    "Tenhle návod popisuje tuhle podobu od začátku do konce, nástroje, které se hodí na každý krok, a místa, kde lokální zpracování skutečně nepokrývá potřebu (je jich méně, než si většina lidí myslí). Je to reálný pracovní postup s důrazem na soukromí, ne ten absolutistický.",
  ],
  steps: [
    {
      title: "Pořízení: skenuj lokálně telefonem",
      body: "Naskenovat do PDF na telefonu spouští fotoaparát a detekci stránky přímo na zařízení. Žádné nahrání, žádné cloudové zpracování. PDF, které vznikne, začíná i zůstává lokální, dokud se nerozhodneš ho sdílet.",
    },
    {
      title: "Uprav a uklid v záložce prohlížeče",
      body: "Zkomprimovat PDF, Změnit pořadí stránek PDF, Extrahovat stránky z PDF, Otočit PDF, Přidat vodoznak do PDF – všechny běží v prohlížeči. Soubor čte JavaScript na tvém počítači; server obsah nikdy neuvidí.",
    },
    {
      title: "Podepisuj skutečným podpisem, lokálně",
      body: "Podepsat PDF nebo aplikace PDF Editor zachytí nakreslený podpis přímo na tvém zařízení a vloží ho do souboru. Dokument nevidí žádná platforma na podepisování třetí strany.",
    },
    {
      title: "Sdílej přes důvěryhodný kanál",
      body: "AirDrop, Signal, šifrovaný e-mail, end-to-end šifrované zprávy. Kanál přenos zašifruje; příjemce dostane soubor, aniž by prošel prostředníkem, který by ho mohl přečíst.",
    },
    {
      title: "Archivuj na šifrovaném úložišti",
      body: "Lokální disk s plným šifrováním, nebo cloudová záloha se zero-knowledge šifrováním. Neukládej citlivá PDF v obyčejném cloudovém úložišti – to znamená server čtoucí tvoje soubory.",
    },
    {
      title: "Prováděj audit a mazání podle plánu",
      body: "Čtvrtletně projdi citlivá PDF. Smaž, co už nepotřebuješ. Každý uchovaný citlivý soubor je malé pokračující riziko; zmenšení inventáře snižuje expozici.",
    },
  ],
  tips: [
    "Pořízení, úprava a podepisování se všechno dají zvládnout na jediném zařízení. Čím míň přeskoků mezi zařízeními, tím menší plocha úniku.",
    "Ověř si, že nástroj označený jako „v prohlížeči“ skutečně běží lokálně, než mu začneš důvěřovat. Panel Síť ve vývojářských nástrojích je nejrychlejší kontrola.",
    "Citlivá PDF šifruj hesly i tehdy, když je sdílíš přes šifrované kanály. Obrana do hloubky.",
    "U citlivého materiálu se vyhni službám typu „pošli odkaz“. Odkaz je jen ukazatel na server; soubor leží na cizím disku.",
    "Netiskni citlivá PDF, pokud to opravdu nemusíš. Tiskové fronty i papír jsou další kopie, které musíš sledovat.",
  ],
  mobileNote:
    "Pracovní postup s důrazem na soukromí je na telefonu jednodušší, než si lidé myslí. Aplikace PDF Editor zvládá pořízení, úpravu, podepisování a sdílení lokálně na iOS i Androidu, takže citlivý dokument může putovat od papíru k příjemci, aniž by se kdy dotkl serveru třetí strany.",
  faq: [
    {
      q: "Dá se skutečný pracovní postup opravdu udržet lokální?",
      a: "Ve většině kroků ano. Pořízení, komprese, úprava, podpis i běžný přenos se obejdou bez nahrávání. Některé operace (OCR ve vysoké kvalitě, pokročilé začernění) občas potřebují pomoc serveru; pokud je potřebuješ, vybírej tyhle nástroje pečlivě.",
    },
    {
      q: "Není tohle celé přehnaně paranoidní?",
      a: "Ne u citlivého materiálu. Postup „nahraj všude“ fungoval, dokud byly dokumenty méně citlivé a narušení vzácnější. Obojí se změnilo. Jakmile se to stane zvykem, pracovní postup s důrazem na soukromí zabere stejně času.",
    },
    {
      q: "Jak poznám, že nástroj v prohlížeči je opravdu lokální?",
      a: "Otevři vývojářské nástroje, panel Síť, přidej soubor. Pokud nevidíš velké odchozí nahrávání, zpracovává se lokálně. Nástroje na tomto webu tomuhle vzoru odpovídají.",
    },
    {
      q: "Co se zálohami?",
      a: "Cloudová záloha se zero-knowledge šifrováním (poskytovatel tvoje soubory nemůže číst) je v pořádku. Obyčejná cloudová záloha citlivých PDF soukromá není – poskytovatel může číst všechno.",
    },
    {
      q: "Kde se postup láme?",
      a: "Na dvou místech: když postup vyžaduje konkrétní placenou platformu (regulovaná odvětví) a když příjemce na své straně používá postup s nahráváním. Soukromí závisí na obou stranách.",
    },
  ],
  related: [
    { label: "PDF nástroje — v prohlížeči, bez nahrávání", path: "/pdf-tools" },
    { label: "PDF nástroje s důrazem na soukromí", path: "/guides/privacy-first-pdf-tools" },
    { label: "Jak funguje lokální zpracování PDF v prohlížeči", path: "/guides/local-browser-pdf-processing-explained" },
    { label: "Výhody zpracování dokumentů v prohlížeči", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "PDF nástroje — bezplatně, v prohlížeči", path: "/pdf-tools" },
};

export default content;
