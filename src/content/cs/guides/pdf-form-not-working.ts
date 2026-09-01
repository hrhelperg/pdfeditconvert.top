import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-working",
  h1: "Formulář PDF nefunguje? Rychlá diagnostika a řešení",
  description:
    "Formulář PDF, který zlobí, má obvykle jednu z několika typických příčin. Rychlá diagnostika, jak zjistit, o kterou jde – chybějící pole, nejde psát, neukládá se, jen pro čtení – a kde to opravit.",
  updated: "2026-06-01",
  intro: [
    "„Můj formulář PDF nefunguje“ pokrývá spoustu různých problémů a řešení závisí čistě na tom, o který z nich vlastně jde. Formulář ti nedovolí psát, pole zmizela, odpovědi se neukládají, otevře se jen pro čtení, nebo se prostě chová divně. Každý z toho má konkrétní příčinu a konkrétní řešení – trik je nejdřív pojmenovat příznak.",
    "Tahle stránka je třídění. Místo jedné obří univerzální opravy ti pomůže během pár vteřin určit, se kterým problémem se potýkáš, a pak tě nasměruje na návod, který ho řeší. Většina problémů s formuláři vůbec není chyba souboru; jde o neshodu mezi formulářem a prohlížečem, ve kterém ho otevíráš, nebo o záměrné nastavení jako ochrana proti úpravám.",
    "Projdi si rychlé kontroly níže. Ukážou ti, jestli se potýkáš s neinteraktivním formulářem, problémem prohlížeče, problémem s ukládáním, bezpečnostním nastavením, nebo problémem s kompatibilitou – a kam jít dál.",
  ],
  steps: [
    {
      title: "Vidíš vůbec nějaká pole?",
      body: "Pokud pole formuláře chybí nebo stránka vypadá neúplně, jde o problém s chybějícími poli – obvykle prohlížeč, který nevykreslí vrstvu polí. Řešení najdeš v návodu o chybějících polích.",
    },
    {
      title: "Pole tam jsou, ale nejde ti psát?",
      body: "Pokud klepneš na pole a nic se nestane, formulář může být neinteraktivní, otevřený ve špatném prohlížeči, nebo jen pro čtení. Návod „nejde mi psát“ projde, jak je od sebe rozeznat.",
    },
    {
      title: "Odpovědi po uložení zmizí?",
      body: "Pokud formulář vyplníš, uložíš, znovu otevřeš a je zase prázdný, hodnoty polí se nezapisují do souboru. Návod „neukládá se“ pokrývá spolehlivé ukládání dat formuláře.",
    },
    {
      title: "Formulář se otevře jen pro čtení nebo uzamčený?",
      body: "Pokud je všechno zešedlé nebo vidíš hlášku o ochraně, je formulář zabezpečený proti úpravám. Návod o formuláři jen pro čtení vysvětlí tvé možnosti, aniž bys prolamoval zabezpečení, které bys neměl.",
    },
    {
      title: "Funguje v jedné aplikaci, ale ne v jiné?",
      body: "Pokud se formulář chová v jednom programu normálně a v jiném se rozbije, jde o problém s kompatibilitou – možná pokročilý typ formuláře. Podívej se do návodu o kompatibilitě, nebo vyzkoušej souhrnný kontrolní seznam oprav.",
    },
  ],
  tips: [
    "Pojmenuj příznak dřív, než začneš zkoušet opravy – správné řešení závisí čistě na tom, který problém máš.",
    "Nejrychlejší jeden test u mnoha problémů: otevři stejný soubor ve specializované aplikaci na PDF. Okamžitě to odliší „rozbitý formulář“ od „špatného prohlížeče“.",
    "Formulář, který zlobí, je málokdy opravdu rozbitý; většina příčin jsou neshody prohlížeče nebo záměrná nastavení.",
    "Pokud to prostě potřebuješ mít hotové, umístění textu navrch na stránku funguje skoro na jakémkoli formuláři bez ohledu na příčinu.",
    "Vzhled i chování formuláře se může mezi prohlížeči PDF lišit, takže „tady to nefunguje“ málokdy znamená „nefunguje to nikde“.",
  ],
  mobileNote:
    "Řada hlášení typu „formulář nefunguje“ je prostě náhled e-mailu nebo základní prohlížečka, která ignoruje pole. Otevření souboru v aplikaci PDF Editor aktivuje interaktivní pole tam, kde existují, a tam, kde ne, ti dovolí umístit text na neinteraktivní nebo uzamčený formulář – v zařízení, bez nahrávání.",
  faq: [
    {
      q: "Proč mi nefunguje formulář PDF?",
      a: "Skoro vždycky jde o jednu z pár věcí: formulář je neinteraktivní bez polí, tvůj prohlížeč pole nevykresluje, odpovědi se neukládají, formulář je jen pro čtení, nebo používá funkce, které tvá aplikace nepodporuje. Urči příznak a použij odpovídající řešení.",
    },
    {
      q: "Co mám zkusit jako první?",
      a: "Otevři stejný soubor ve specializované aplikaci na PDF místo náhledu e-mailu nebo prohlížeče. Tenhle jediný krok vyřeší velkou část problémů „formulář nefunguje“, které jsou ve skutečnosti neshodou prohlížeče.",
    },
    {
      q: "Jak poznám, jestli je rozbitý formulář, nebo jen moje aplikace?",
      a: "Vyzkoušej ho v jiné, schopné aplikaci na PDF. Pokud tam funguje, byl problémem tvůj původní prohlížeč. Pokud selže všude, může jít o pokročilý typ formuláře nebo skutečně poškozený soubor.",
    },
    {
      q: "Potřebuju ho jen vyplnit – jaké je univerzální řešení?",
      a: "Umísti vlastní text a zaškrtnutí navrch na stránku pomocí editoru PDF. Tohle funguje na neinteraktivních, uzamčených i formulářích bez polí stejně, bez ohledu na skutečnou příčinu.",
    },
    {
      q: "Kam jít pro můj konkrétní problém?",
      a: "Podle kontrol výše urči svůj příznak – chybějící pole, nejde psát, neukládá se, jen pro čtení, nebo kompatibilita – a řiď se odkazovaným návodem pro daný problém, nebo souhrnným kontrolním seznamem oprav.",
    },
  ],
  related: [
    {
      label: "Chybí pole ve formuláři PDF",
      path: "/guides/pdf-form-fields-missing",
    },
    {
      label: "Proč nemůžu psát do formuláře PDF?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    {
      label: "Proč se formulář PDF neukládá",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "Problémy s kompatibilitou formuláře PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "Oprav chyby ve formuláři PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
