import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-business",
  hero: {
    eyebrow: "PDF pro firmy",
    h1: "Pracovní postupy s PDF pro malé týmy.",
    highlight: "malé týmy",
    lead: "Smlouvy, faktury, nabídky, podepsané dohody, naskenované účtenky – všechny dokumenty, na kterých malá firma běží, zvládnuté z telefonu bez licencí na jednotlivá místa nebo firemního SaaS.",
    primaryCta: { label: "Otevřít aplikaci", href: SITE.app.appStore },
  },
  problem: {
    heading: "Proč malé týmy pořád bojují s PDF",
    paragraphs: [
      "Malé firmy žijí v PDF. Nabídky odchází jako PDF, smlouvy se vrací podepsané jako PDF, faktury jsou PDF, účtenky se skenují do PDF, dohody o mlčenlivosti jsou PDF. A přesto jsou nástroje, které s nimi pracují, buď cenově nastavené pro velké podniky, nebo webové a nespolehlivé.",
      "Podnikový software pro PDF počítá s tím, že máš IT oddělení a proces schvalování nákupů. Bezplatné webové nástroje zase počítají s tím, že ti nevadí nahrávat smlouvy klientů na server třetí strany. Žádný z těchto modelů nesedí pětičlenné agentuře, freelancerovi ani malému online byznysu, který potřebuje dokumenty zpracovat rychle a bez byrokracie.",
      "Nativní sada PDF nástrojů navržená především pro telefon sedí malým týmům lépe. Žádné licence k řešení, žádné fronty na nahrávání ke koordinaci, žádný měsíční poplatek za nástroj, který používáš párkrát týdně. Každý člen týmu si nainstaluje aplikaci na telefon a je produktivní hned první den.",
    ],
  },
  features: {
    heading: "Operace, na kterých malým týmům opravdu záleží",
    items: [
      {
        icon: "FileSignature",
        title: "Nabídka → smlouva → podpis",
        body: "Pošli nabídku v PDF, přijmi podepsané potvrzení, výsledek ulož. Celý cyklus se vejde do telefonu.",
      },
      {
        icon: "Receipt",
        title: "Skenování účtenek přímo u pokladny",
        body: "Naskenuj papírové účtenky hned ve chvíli, kdy je dostaneš. Automatické pojmenování a OCR je připraví rovnou pro účetní software.",
      },
      {
        icon: "ShieldCheck",
        title: "Chraň citlivé dokumenty",
        body: "Před sdílením navenek ochraň heslem smlouvy, PDF se mzdami i kopie dohod o mlčenlivosti. AES-256, přímo v zařízení.",
      },
      {
        icon: "Combine",
        title: "Spojuj a děl výstupy",
        body: "Spoj nabídku s jejím rozsahem prací; rozděl dlouhý export podle klientů. Obojí zvládneš na tři ťuknutí.",
      },
      {
        icon: "Wand",
        title: "Rychlé úpravy bez notebooku",
        body: "Oprav překlep v nabídce, uprav datum na faktuře, vyměň logo na letáku – všechno z telefonu.",
      },
      {
        icon: "Globe",
        title: "Funguje s cloudem, který už používáš",
        body: "Drive, iCloud, OneDrive, Dropbox – aplikace čte a zapisuje tam, kde už tým soubory ukládá.",
      },
    ],
  },
  steps: {
    heading: "Typický pracovní postup malé firmy",
    items: [
      {
        title: "Přijmi poptávku",
        body: "Klient si vyžádá nabídku. Připravíš ji ve fakturačním nástroji a exportuješ do PDF.",
      },
      {
        title: "Podepiš a orazítkuj datem",
        body: "Otevři PDF v PDF Editoru, podepiš uloženým podpisem a přidej razítko s datem.",
      },
      {
        title: "Pošli e-mailem nebo přes zprávy",
        body: "Sdílej podepsanou nabídku přímo z aplikace přes nabídku sdílení e-mailem nebo přes zprávový nástroj tvého týmu.",
      },
      {
        title: "Přijmi protipodepsanou verzi",
        body: "Když ti ji klient vrátí, otevři soubor, archivuj ho do cloudu a chraň heslem, pokud obsahuje citlivé podmínky.",
      },
      {
        title: "Vygeneruj fakturu a spoj ji se smlouvou",
        body: "Vyexportuj fakturu z účetního nástroje a pomocí funkce Sloučit spoj fakturu a podepsanou smlouvu do jednoho přehledného archivačního PDF.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Vedení firmy z telefonu",
    body: "Velká část dokumentové agendy malé firmy se odehrává mezi jinými věcmi – u klienta, v taxíku, mezi vyzvednutím dětí ze školy. Díky tomu, že je vše nativně v telefonu, pracovní postup nezávisí na tom, jestli sedíš u stolu. Smlouvy, které dřív čekaly na večer u notebooku, teď odchází tu samou hodinu, kdy o ně klient požádal.",
  },
  faq: [
    {
      q: "Je aplikace vhodná pro tým o 5–20 lidech?",
      a: "Ano, pro jednotlivé uživatele v malém týmu – každý si ji nainstaluje na svůj telefon. Neexistuje centrální administrátorská konzole; je to nástroj pro jednotlivá zařízení. Pro větší organizace může být vhodnější podnikový systém pro správu dokumentů.",
    },
    {
      q: "Můžu ji použít pro právně závazné smlouvy?",
      a: "Většina jurisdikcí uznává podepsaná PDF u standardních obchodních smluv. Nařízení eIDAS Evropské unie i americký zákon ESIGN elektronické podpisy uznávají. U dohod s vysokou hodnotou, regulovaných nebo přeshraničních se vyplatí ověřit místní pravidla a zvážit kvalifikovaný elektronický podpis.",
    },
    {
      q: "Propojuje se s účetními nástroji?",
      a: "PDF Editor vytváří standardní PDF, která přijme každý účetní nástroj (Xero, QuickBooks, FreeAgent, Pleo atd.). Žádná speciální integrace není potřeba – stačí uložit PDF do cloudového úložiště a účetní nástroj si ho sám najde.",
    },
    {
      q: "Jak udržím soubory klientů v soukromí?",
      a: "Všechny operace probíhají přímo v zařízení. Soubory opouští telefon jen tehdy, když je aktivně sdílíš. Na obzvlášť citlivé dokumenty před sdílením navenek nastav ochranu heslem.",
    },
    {
      q: "Co audit trail (záznam o změnách)?",
      a: "Podepsaná PDF obsahují metadata podpisu (časové razítko, jméno podepisujícího). Pro regulovaná odvětví, která vyžadují kompletní audit trail, doplň specializovanou platformu pro elektronický podpis – PDF Editor je určený pro běžné obchodní smlouvy, ne pro regulované postupy.",
    },
  ],
  related: [
    { label: "Zabezpečení a šifrování PDF", path: "/pdf-security" },
    {
      label: "Bezpečné pracovní postupy PDF pro firmy",
      path: "/guides/secure-pdf-workflows-for-business",
    },
    { label: "Podepiš PDF z telefonu", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Řeš operace s dokumenty přímo z telefonu.",
    sub: "Zdarma pro běžné firemní použití. Žádné licence na jednotlivá místa.",
  },
};

export default content;
