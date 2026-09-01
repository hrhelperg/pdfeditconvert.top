import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-type-in-a-pdf-form",
  h1: "Proč nemůžu psát do formuláře PDF? Příčiny a řešení",
  description:
    "Klikneš na pole a nic se nestane. Tři obvyklé příčiny – neinteraktivní formulář, špatný prohlížeč, nebo uzamčený soubor – a přesně co udělat s každou z nich.",
  updated: "2026-06-01",
  intro: [
    "Otevřeš formulář, klikneš tam, kam má přijít tvé jméno, a… nic. Žádný kurzor, žádné pole, žádná možnost psát. Působí to, jako by byl formulář rozbitý, ale skoro nikdy tomu tak není. Neschopnost psát má jednu ze tří konkrétních příčin, z nichž každá má jasné řešení, jakmile ji pojmenuješ.",
    "Ta první a nejčastější je, že je formulář neinteraktivní – nejsou v něm žádná interaktivní pole, do kterých by šlo psát, jen obrázek formuláře. Druhá je, že ho otvíráš v prohlížeči, který pole formulářů pořádně nezvládá. Třetí je, že je formulář uzamčený nebo jen pro čtení a záměrně blokuje vstup. Rozlišit je zabere pár rychlých kontrol.",
    "Tenhle návod projde všechny tři příčiny popořadě, ukáže, jak potvrdíš, o kterou jde, a pro každou dá praktické řešení, ať se ti odpovědi dostanou na stránku.",
  ],
  steps: [
    {
      title: "Ověř, jestli formulář vůbec má pole",
      body: "Klepni na několik různých prázdných míst. Pokud se ani u jednoho neobjeví kurzor nebo zvýraznění nikde na stránce, je formulář téměř jistě neinteraktivní – žádná pole na psaní tam nejsou, buď záměrně, nebo protože byl naskenovaný.",
    },
    {
      title: "Pokud je neinteraktivní, přidej text navrch",
      body: "Do neinteraktivního formuláře se psát nedá, ale textovým nástrojem editoru PDF si můžeš na stránku umístit vlastní text a zaškrtnutí. Je to zamýšlený způsob, jak dokončit naskenovaný nebo formulář bez polí.",
    },
    {
      title: "Vylouč problém s prohlížečem",
      body: "Některé prohlížeče a jednoduché náhledy formulář zobrazí, ale jeho pole ignorují. Otevři stejný soubor v samostatné aplikaci na PDF. Pokud pole najednou fungují, byl problémem původní prohlížeč.",
    },
    {
      title: "Zkontroluj, jestli není formulář uzamčený nebo jen pro čtení",
      body: "Pokud pole existují, ale odmítají vstup úplně všude, je formulář možná zabezpečený nebo označený jako jen pro čtení. Hledej ikonu zámku nebo hlášku o ochraně. Formulář jen pro čtení blokuje psaní záměrně.",
    },
    {
      title: "Obejdi uzamčený formulář",
      body: "U formuláře jen pro čtení často pořád jde umístit text navrch, jako by byl neinteraktivní, nebo si od odesílatele vyžádat odemčenou verzi. Nesnaž se prolomit zabezpečení formuláře, který ti nepatří.",
    },
  ],
  tips: [
    "Nejrychlejší diagnóza: zkus stejný soubor v pořádné aplikaci na PDF. Okamžitě to odliší „neinteraktivní formulář“ od „špatného prohlížeče“.",
    "Přidání textu navrch funguje skoro na jakémkoli formuláři, neinteraktivním i uzamčeném, a bývá nejrychlejší cestou k dokončené stránce.",
    "Formulář, který jde v počítači vyplnit v pohodě, ale ne v náhledu e-mailu na telefonu, je problém prohlížeče – otevři ho radši ve skutečné aplikaci na PDF.",
    "Pokud odmítá psaní jen pár polí, mohou být tahle konkrétní pole vypočítávaná nebo uzamčená, zatímco zbytek zůstává otevřený.",
    "Vzhled i chování formuláře se může mezi prohlížeči PDF lišit, takže „tady to nefunguje“ málokdy znamená „nefunguje to nikde“.",
  ],
  mobileNote:
    "Na telefonu aplikace PDF Editor píše do interaktivních polí tam, kde existují, a tam, kde ne, ti dovolí umístit text přímo na neinteraktivní nebo uzamčený formulář – takže formulář, který v náhledu e-mailu odmítal psaní, se stane vyplnitelným. Funguje to v zařízení, nic se nenahrává.",
  faq: [
    {
      q: "Proč nemůžu psát do svého formuláře PDF?",
      a: "Obvykle jde o jeden ze tří důvodů: formulář je neinteraktivní bez polí, tvůj prohlížeč pole formulářů nepodporuje, nebo je formulář uzamčený či jen pro čtení. Zjisti, o který jde, a pak buď přidej text navrch, přepni prohlížeč, nebo si vyžádej odemčenou kopii.",
    },
    {
      q: "Jak píšu do neinteraktivního formuláře PDF?",
      a: "Do polí psát nemůžeš, protože žádná neexistují. Místo toho použij editor PDF a umísti text a zaškrtnutí přímo na stránku tam, kam každá odpověď patří, pak soubor exportuj.",
    },
    {
      q: "Proč formulář funguje na počítači, ale ne na telefonu?",
      a: "Telefon ho pravděpodobně zobrazuje v aplikaci, která ignoruje pole formuláře. Otevři soubor v samostatné aplikaci na PDF a pole by se měla aktivovat.",
    },
    {
      q: "Co znamená formulář PDF jen pro čtení?",
      a: "Je to formulář, který autor zabezpečil tak, aby se pole nedala upravovat ani do nich psát. Často pořád jde umístit text navrch, nebo si od odesílatele vyžádat verzi, která vstup dovolí.",
    },
    {
      q: "Může být formulář jen částečně vyplnitelný psaním?",
      a: "Ano. Některá pole mohou být uzamčená nebo automaticky počítaná, zatímco jiná vstup přijímají. Vyplň otevřená pole a do těch nedostupných doplň text ručně.",
    },
  ],
  related: [
    {
      label: "Jak vyplnit formulář PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Proč je formulář PDF jen pro čtení",
      path: "/guides/why-pdf-form-is-read-only",
    },
    {
      label: "Chybí pole ve formuláři PDF",
      path: "/guides/pdf-form-fields-missing",
    },
    { label: "Formulář PDF nefunguje", path: "/guides/pdf-form-not-working" },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
