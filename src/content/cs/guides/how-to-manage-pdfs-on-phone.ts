import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-pdfs-on-phone",
  h1: "Jak spravovat PDF v telefonu",
  description:
    "Nedovol, aby se PDF v telefonu proměnila v chaos: přejmenuj je, roztřiď do složek, synchronizuj do cloudu a uvolni úložiště. Praktická rutina údržby.",
  updated: "2026-05-23",
  intro: [
    "PDF se na telefonu hromadí rychleji než kdekoli jinde. E-mailové přílohy, skeny, stažené soubory, převedené fotky – kupí se ve složce Stažené nebo v aplikaci Soubory pod názvy jako „Dokument(3).pdf“, dokud nenajdeš ten pravý zrovna ve chvíli, kdy ho potřebuješ. Správa souborů není nic zábavného, ale deset minut rutiny ušetří hodinu zoufalého hledání později.",
    "Tenhle návod je praktická rutina údržby pro PDF v tvém iPhonu nebo telefonu s Androidem: jak je pojmenovat, aby se daly najít, jak je roztřídit do smysluplných složek, jak synchronizovat ty důležité a jak se zbavit žroutů úložiště. Opírá se o aplikaci Soubory v telefonu a o aplikaci PDF Editor pro samotnou práci s dokumenty.",
    "Cílem je telefon, ve kterém sáhneš na jakýkoli dokument během pár vteřin a kde úložiště tiše nemizí v zapomenutých 40MB skenech.",
  ],
  steps: [
    {
      title: "Přejmenuj soubory hned, jak dorazí",
      body: "Ve chvíli, kdy PDF uložíš, dej mu skutečný název – „Najemni-smlouva-podepsana-2026-05.pdf“, ne „scan_0007.pdf“. Popisný název je to, co soubor udělá dohledatelným za pár týdnů.",
    },
    {
      title: "Založ si pár smysluplných složek",
      body: "V aplikaci Soubory vytvoř složky odpovídající tomu, jak přemýšlíš – Účtenky, Smlouvy, Formuláře, Práce. Hrstka jasných složek předčí jednu obří hromadu.",
    },
    {
      title: "Ty důležité synchronizuj do cloudu",
      body: "Dokumenty, o které si nemůžeš dovolit přijít, přesuň do iCloud Drive, Google Drive nebo OneDrive, aby přežily ztrátu nebo výměnu telefonu – a otevřely se i na tvých dalších zařízeních.",
    },
    {
      title: "Ostříhej a uspořádej samotné dokumenty",
      body: "Aplikací PDF Editor sluč související soubory, odstraň prázdné stránky a oprav nakřivo naskenované soubory, aby byl každý uložený dokument čistý, ne surový výpis.",
    },
    {
      title: "Zkomprimuj žrouty úložiště",
      body: "Velké skeny žerou místo. Ty, které si necháváš, ale nepotřebuješ v plném rozlišení, zkomprimuj, a úložiště se přestane tajemně plnit.",
    },
    {
      title: "Zbav se toho, co už nepotřebuješ",
      body: "Smaž duplikáty a jednorázové soubory, které jsi už odeslal. Občas vyprázdni složku Nedávno odstraněné, aby se uvolněné místo skutečně vrátilo.",
    },
  ],
  tips: [
    "Přejmenuj hned při příchodu, ne „až později“. Později nikdy nepřijde a výsledkem je složka plná „Dokument(n).pdf“.",
    "Zvol si jeden vzor pojmenování – „Typ-Kdo-Datum“ funguje dobře – a soubory se ti řadí a najdou samy.",
    "Synchronizuj cokoli, o co bys nerad přišel. Telefon se ztratí mnohem snáz než cloudový účet a synchronizované soubory se otevřou i na tvém notebooku.",
    "Komprimace ponechaných, ale zřídka otevíraných skenů uvolní víc místa, než kdy dokáže mazání malých souborů.",
    "Rychlý měsíční úklid předčí roční archeologický výkop. Deset minut pravidelně brání tomu, aby se hromada proměnila v projekt.",
  ],
  mobileNote:
    "Aplikace PDF Editor je dokumentová stránka správy PDF v telefonu: sloučení, ostříhání, otočení, komprese a přejmenování na jednom místě, offline, než soubor zařadíš. Spáruj ji s aplikací Soubory pro složky a cloudovou synchronizaci, a hromada zůstane pod kontrolou.",
  faq: [
    {
      q: "Kde v telefonu PDF žijí?",
      a: "Na iPhonu v aplikaci Soubory (často ve Staženém nebo v iCloud Drive); na Androidu obvykle ve Staženém přes aplikaci Soubory. Vytvoření složek v obou případech je udrží uspořádané.",
    },
    {
      q: "Jak mám pojmenovávat svoje soubory PDF?",
      a: "Použij konzistentní, popisný vzor s datem, třeba „Typ-Kdo-Datum.pdf“. Dělat to hned, jak soubory dorazí, je to, co je udrží dohledatelné později.",
    },
    {
      q: "Jak zabráním tomu, aby mi PDF žrala úložiště?",
      a: "Zkomprimuj velké skeny, které si necháváš, smaž duplikáty a už odeslané jednorázové soubory a vyprázdni složku Nedávno odstraněné, aby se místo skutečně uvolnilo.",
    },
    {
      q: "Mám PDF držet v cloudu, nebo v zařízení?",
      a: "Ty důležité drž v cloudu, aby přežily ztrátu telefonu a synchronizovaly se na tvá další zařízení. Úložiště jen v zařízení je v pořádku pro dočasné soubory, které brzy smažeš.",
    },
    {
      q: "Můžu uspořádat samotné dokumenty, ne jen soubory?",
      a: "Ano. Aplikace PDF Editor slučuje, ostříhává a opravuje dokumenty, takže to, co ukládáš, je čisté – kompletní postup najdeš v návodu, jak organizovat PDF soubory.",
    },
  ],
  related: [
    { label: "Všechny bezplatné PDF nástroje", path: "/pdf-tools" },
    { label: "Jak organizovat PDF soubory", path: "/guides/how-to-organize-pdf-files" },
    { label: "Jak zmenšit PDF na iPhonu", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
    { label: "Jak sdílet PDF z telefonu", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Editor PDF", path: "/pdf-editor" },
};

export default content;
