import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-forms",
  hero: {
    eyebrow: "Formuláře PDF",
    h1: "Vyplňuj, podepisuj a spravuj PDF formuláře odkudkoli.",
    highlight: "PDF formuláře",
    lead: "Daňová přiznání, žádosti, vstupní dotazníky, souhlasy – většina z nich přichází jako PDF. Zjisti, jak PDF formuláře doopravdy fungují, jak vyplnit ty interaktivní i neinteraktivní a jak vyřešit časté problémy, a to bez vytištění jediné stránky.",
    primaryCta: { label: "Otevřít aplikaci", href: SITE.app.appStore },
  },
  problem: {
    heading: "Proč PDF formuláře dělají lidem potíže",
    paragraphs: [
      "PDF formulář vypadá jako jedna věc, ale často jsou to dvě. Některé jsou interaktivní – autor do nich přidal skutečná pole, na která můžeš ťuknout a psát do nich. Jiné jsou neinteraktivní: naskenovaný nebo vytištěný a pak zpátky uložený formulář bez jakýchkoli polí, kam si musíš text položit sám. Oba typy se chovají úplně jinak a většina frustrace kolem formulářů plyne z toho, že člověk neví, jaký typ má zrovna před sebou.",
      "K tomu se formuláře chovají způsoby, jaké běžná PDF neznají. Pole zmizí ve špatném prohlížeči, napsané odpovědi se odmítají uložit, formulář se otevře jen pro čtení, nebo se vyplněné hodnoty neobjeví při tisku. Nic z toho neznamená, že je formulář rozbitý – jde o předvídatelné problémy s předvídatelným řešením, jakmile pochopíš, co se děje pod povrchem.",
      "Tenhle hub shromažďuje všechno na jednom místě: základy toho, jak formuláře fungují, postup krok za krokem pro jejich vyplnění na počítači i na telefonu, firemní postupy pro sběr informací od klientů a sadu řešení problémů pro chvíle, kdy formulář nespolupracuje. Vzhled a chování formulářů se může mezi jednotlivými prohlížeči PDF lišit, takže návody zůstávají upřímné v tom, co funguje všude a co závisí na nástroji, ve kterém soubor otevíráš.",
    ],
  },
  features: {
    heading: "Co všechno s PDF formuláři zvládneš",
    items: [
      {
        icon: "FileText",
        title: "Vyplň interaktivní pole",
        body: "Ťukni na skutečné pole formuláře a piš. Přecházej mezi poli, zaškrtávej pole a vybírej z rozbalovacích nabídek tam, kde je autor přidal.",
      },
      {
        icon: "TextCursorInput",
        title: "Vyplň neinteraktivní formuláře",
        body: "Žádná pole? Umísti vlastní text a zaškrtnutí kamkoli na stránku – přesně tam, kam patří každá odpověď na naskenovaném nebo vytištěném formuláři.",
      },
      {
        icon: "PenLine",
        title: "Podepiš, kde je potřeba",
        body: "Přidej napsaný nebo vlastnoruční podpis do pole pro podpis, ať už je interaktivní, nebo jde jen o čáru na neinteraktivním formuláři.",
      },
      {
        icon: "Save",
        title: "Ulož vyplněnou kopii",
        body: "Exportuj hotovou verzi, kterou můžeš rovnou poslat zpátky, a prázdný originál si ponech pro příště.",
      },
      {
        icon: "Lock",
        title: "Zafixuj před odesláním",
        body: "Uzamkni odpovědi natrvalo do stránky, aby je prohlížeč příjemce nemohl změnit nebo omylem smazat.",
      },
      {
        icon: "Smartphone",
        title: "Zvládni všechno z telefonu",
        body: "Formuláře přichází e-mailem a stejnou cestou se i vrací – vyplňování a podepisování z telefonu patří mezi ty PDF úkoly, které jsou opravdu mobilní.",
      },
    ],
  },
  steps: {
    heading: "Vyplnění PDF formuláře od začátku do konce",
    items: [
      {
        title: "Otevři formulář a zkontroluj typ",
        body: "Otevři PDF a ťukni tam, kam má přijít odpověď. Pokud se objeví kurzor, má interaktivní pole. Pokud se nic nestane, jde o neinteraktivní formulář a text přidáš sám.",
      },
      {
        title: "Vyplň pole",
        body: "U interaktivních formulářů ťukej a piš, mezi poli přecházej tabulátorem. U neinteraktivních použij textový nástroj a umísti odpovědi přesně na každý řádek.",
      },
      {
        title: "Vyřeš zaškrtávací pole, data a podpisy",
        body: "Zaškrtni pole nebo umísti fajfku, přidej datum tam, kde je vyžadováno, a pro každé pole podpisu použij nástroj Podepsat.",
      },
      {
        title: "Zkontroluj každé povinné pole",
        body: "Projdi formulář znovu a hledej prázdná místa. Formulář vrácený kvůli jednomu chybějícímu datu stojí víc času, než by stála samotná kontrola.",
      },
      {
        title: "Ulož, zafixuj a odešli",
        body: "Exportuj vyplněnou kopii, zafixuj ji, aby byly odpovědi uzamčené, a pošli ji zpátky e-mailem nebo nahráním. Prázdný originál si ponech.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Formuláře z telefonu",
    body: "Formulář přistane v poště zrovna ve chvíli, kdy nejsi u stolu. S telefonem ho můžeš otevřít, vyplnit pole nebo přidat text do neinteraktivního skenu, podepsat a poslat zpátky ještě dřív, než najdeš, kam si sednout – bez tiskárny, bez skeneru, bez čekání, až budeš doma. Aplikace PDF Editor rozpozná interaktivní pole tam, kde existují, jinde ti dovolí umístit text a zaškrtnutí kamkoli, a osobní údaje z formuláře drží ve tvém zařízení.",
  },
  faq: [
    {
      q: "Jaký je rozdíl mezi interaktivním a neinteraktivním PDF formulářem?",
      a: "Interaktivní formulář má pole, která do něj autor vložil – ťukneš na jedno a objeví se kurzor, abys mohl psát. Neinteraktivní formulář je v podstatě obrázek stránky, do kterého se jen dopisuje, protože v něm žádná pole nejsou. Vyplnit se dají oba, jen potřebují mírně odlišné zacházení.",
    },
    {
      q: "Musím PDF formulář vytisknout, abych ho vyplnil?",
      a: "Skoro nikdy. Interaktivní i neinteraktivní formuláře se dají vyplnit digitálně – piš do polí nebo umísti text na stránku, pak podepiš a exportuj. Tisknout se vyplatí jen tehdy, když příjemce výslovně vyžaduje vlastnoruční podpis na papíře.",
    },
    {
      q: "Proč nejde v některých PDF formulářích psát?",
      a: "Obvykle je to jedna ze tří věcí: formulář je neinteraktivní (nemá pole, do kterých by šlo psát), tvůj prohlížeč nepodporuje pole formulářů, nebo je formulář jen pro čtení či zabezpečený. Návody na řešení problémů v tomto hubu projdou každou z těchto příčin.",
    },
    {
      q: "Bude formulář, který vyplním, vypadat stejně u příjemce?",
      a: "Většinou ano, ale ne vždy – vzhled formuláře se může mezi prohlížeči PDF lišit. Zafixování vyplněného formuláře před odesláním uzamkne odpovědi do stránky, takže se zobrazí stejně, ať se otevře kdekoli.",
    },
    {
      q: "Je vyplňování formuláře online soukromé?",
      a: "Záleží na nástroji. Aplikace PDF Editor vyplňuje formuláře přímo ve tvém zařízení, takže osobní údaje, které zadáš, se nikam nenahrávají. I nástroje v prohlížeči, které běží lokálně, drží soubor na tvém počítači.",
    },
  ],
  related: [
    { label: "Co je PDF formulář?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Jak vyplnit PDF formulář",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Jak vytvořit vyplnitelné PDF",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "PDF formulář nefunguje? Začni tady",
      path: "/guides/pdf-form-not-working",
    },
    { label: "PDF Editor — vyplň a podepiš na mobilu", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Vyplňuj a podepisuj PDF formuláře z telefonu.",
    sub: "Zdarma na iOS a Androidu. Nic se nikam nenahrává.",
  },
};

export default content;
