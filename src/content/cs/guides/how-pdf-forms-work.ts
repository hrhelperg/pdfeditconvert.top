import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-pdf-forms-work",
  h1: "Jak fungují formuláře PDF – pole, AcroForms a neinteraktivní skeny",
  description:
    "Formulář PDF je uvnitř buď sada interaktivních polí položených na stránce, nebo neinteraktivní obrázek bez jediného pole. Jak je každý z nich postavený a proč na tom záleží při vyplňování.",
  updated: "2026-06-01",
  intro: [
    "Pomůže, když pochopíš, co se uvnitř formuláře PDF vlastně odehrává – vysvětluje to skoro každou zvláštnost, na kterou při práci s ním narazíš. Stránka PDF má pevné rozvržení – text, čáry a obrázky umístěné na přesných souřadnicích. Formulář nad tohle rozvržení přidává samostatnou vrstvu: interaktivní pole, kde každé je malé políčko, které ví, že je textovým polem, zaškrtávacím políčkem, rozbalovací nabídkou nebo prostorem na podpis.",
    "Když formulář tuhle vrstvu polí má, prohlížeč PDF vykreslí upravitelná políčka přesně tam, kam je umístil tvůrce. Ty píšeš a prohlížeč tvůj vstup uloží do pole, místo aby ho vypálil přímo do stránky. Právě tohle oddělení je důvod, proč se vyplněné odpovědi občas dají smazat, upravit, nebo se neuloží – žijí ve vrstvě polí, ne přímo na stránce, dokud je nezafixuješ.",
    "Neinteraktivní formuláře vrstvu polí úplně přeskočí. Jsou to jen obrázky stránky, takže tam není nic interaktivního, do čeho by šlo psát; vlastní textové objekty si přidáváš navrch. Tenhle návod projde, jak jsou postavené oba typy, co dělá zafixování a proč se stejný formulář může v různých aplikacích chovat jinak.",
  ],
  steps: [
    {
      title: "Vrstva stránky: pevná a konečná",
      body: "Každé PDF má vrstvu stránky s textem a grafikou uzamčenými na přesných pozicích. Právě díky tomu vypadá PDF všude stejně. U neinteraktivního formuláře žijí řádky s otázkami a popisky celé jen tady.",
    },
    {
      title: "Vrstva polí: interaktivní navrch",
      body: "Interaktivní formuláře přidávají nad stránku vrstvu polí formuláře – textová pole, zaškrtávací pole, přepínače, rozbalovací nabídky, pole na podpis. Každé pole má název a typ, kterému prohlížeč rozumí.",
    },
    {
      title: "Vyplňování: vstup se ukládá do polí",
      body: "Když píšeš do interaktivního pole, tvá odpověď se drží v tomto poli, ne slitá se stránkou. Proto ji jde smazat a přepsat a proto ji jiný prohlížeč může zobrazit trochu jinak.",
    },
    {
      title: "Ukládání: udržení hodnot polí",
      body: "Uložení vyplněného formuláře zapíše hodnoty polí přímo do souboru. Některé jednoduché prohlížečky umožňují jen tisk, ne uložení dat – to je klasický důvod, proč vyplněné odpovědi zmizí, když soubor znovu otevřeš.",
    },
    {
      title: "Zafixování: sloučení polí se stránkou",
      body: "Zafixování zatlačí hodnoty polí dolů do vrstvy stránky a promění je v trvalý obsah stránky. Po zafixování se odpovědi nedají upravit ani smazat – hodí se to těsně předtím, než formulář pošleš zpátky.",
    },
  ],
  tips: [
    "Představ si interaktivní formulář jako průhlednou fólii s upravitelnými políčky položenou na vytištěné stránce. Zafixování tuhle fólii natrvalo přilepí.",
    "Protože hodnoty polí jsou oddělené od stránky, stejný formulář může v různých prohlížečích vypadat trochu jinak – písma a velikost polí nejsou vždy totožné.",
    "Pokud odpovědi pořád mizí, vrstva polí se neukládá. Použij nástroj, který hodnoty polí zapisuje do souboru, nebo formulář před zavřením zafixuj.",
    "Některé pokročilé formuláře (často zvané XFA nebo dynamické formuláře) mají složitější strukturu, kterou řada prohlížečů plně nepodporuje – právě ty se nejčastěji chovají nevyzpytatelně.",
    "Neinteraktivní formuláře nemají žádnou vrstvu polí, takže nikdy neztratí data tak jako interaktivní – tvůj přidaný text prostě zůstane na stránce.",
  ],
  mobileNote:
    "Aplikace PDF Editor při otevření formuláře přečte jeho vrstvu polí, takže jsou interaktivní pole hned klepatelná. U neinteraktivních formulářů bez vrstvy polí ti dovolí přidat text a značky přímo na stránku a pak exportovat – a výsledek můžeš před odesláním zafixovat, aby byly odpovědi bezpečně uzamčené.",
  faq: [
    {
      q: "Z čeho se skládají pole formuláře PDF?",
      a: "Jde o vrstvu interaktivních objektů – textová pole, zaškrtávací pole, přepínače, rozbalovací nabídky a pole na podpis – položených na pevném rozvržení stránky, každé s názvem a typem, který prohlížeč rozpozná.",
    },
    {
      q: "Proč mi vyplněné odpovědi občas zmizí?",
      a: "Hodnoty polí se ukládají odděleně od stránky. Pokud tvůj prohlížeč umí jen tisknout, a ne ukládat data, nebo formulář neuložíš správně, vrstva polí se do souboru nezapíše a odpovědi se ztratí.",
    },
    {
      q: "Co znamená zafixovat formulář PDF?",
      a: "Zafixování sloučí hodnoty polí přímo se stránkou a udělá z nich trvalý obsah. Formulář se pak už nedá upravovat, ale odpovědi se všude zobrazí a vytisknou stejně.",
    },
    {
      q: "Co je AcroForm?",
      a: "AcroForm je standardní, široce podporovaný typ interaktivního formuláře PDF. Existuje ještě složitější dynamický typ (XFA), se kterým si řada prohlížečů poradí špatně – proto některé formuláře fungují jen ve specifickém softwaru.",
    },
    {
      q: "Proč vypadá stejný formulář ve dvou aplikacích jinak?",
      a: "Protože si vrstvu polí vykresluje každý prohlížeč sám. Vzhled formuláře se může mezi prohlížeči PDF lišit, hlavně u písma polí a jejich velikosti. Zafixování před sdílením zabrání překvapením.",
    },
  ],
  related: [
    { label: "Co je formulář PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Jak uložit vyplněný formulář PDF",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "Problémy s kompatibilitou formuláře PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "PDF Editor – vyplňování na mobilu", path: "/pdf-editor" },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
