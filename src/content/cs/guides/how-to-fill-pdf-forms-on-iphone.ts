import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-iphone",
  h1: "Jak vyplnit formuláře PDF na iPhonu (Files, Markup a aplikace)",
  description:
    "Vyplň interaktivní i neinteraktivní formuláře PDF na iPhonu – pomocí aplikace Files a nástroje Markup, nebo specializované PDF aplikace. Postup specifický pro iOS, cesta přes nabídku sdílení a kde Markup nestačí.",
  updated: "2026-06-01",
  intro: [
    "iPhone si s formuláři PDF poradí opravdu dobře, jakmile znáš obě cesty, které iOS nabízí. Vestavěná cesta používá aplikaci Files a nástroj Markup, který v nouzi vyplní neinteraktivní formuláře a přidá podpis. Schopnější cestou je specializovaná aplikace na PDF, která rozpozná interaktivní pole, umí do nich pořádně psát a vyexportuje čistou vyplněnou kopii – vyplatí se ve chvíli, kdy je formulář delší než pár řádků.",
    "Zaklínadlem jsou detaily specifické pro iOS: formulář otevřený z náhledu v Mailu často jeho pole vůbec nezobrazí, mezi aplikacemi formulář přesouváš přes nabídku sdílení a Markup zachází se vším jako s neinteraktivní stránkou, i když skutečná pole existují. Znalost těchto zvláštností promění vyplňování formuláře na iPhonu v třicetivteřinovou záležitost.",
    "Tenhle návod pokrývá obě cesty – nativní přístup přes Files a Markup s jeho upřímnými limity a aplikaci PDF Editor pro interaktivní formuláře – ať si pro formulář před sebou vybereš tu správnou.",
  ],
  steps: [
    {
      title: "Dostaň formulář z náhledu v Mailu",
      body: "Pokud formulář dorazil e-mailem, nejdřív ho klepnutím ulož do Files, nebo ho otevři přes nabídku sdílení v pořádné aplikaci na PDF. Rychlý náhled v Mailu pole formuláře často ignoruje, a proto se zdá, že do nich nejde psát.",
    },
    {
      title: "Vyzkoušej Files a Markup na neinteraktivní formuláře",
      body: "Otevři PDF ve Files a klepni na pero Markup. Kamkoli na stránku přidáš textová pole i podpis – hodí se to na neinteraktivní formuláře a rychlé vyplnění, i když Markup neumí klepnout do skutečných interaktivních polí.",
    },
    {
      title: "Na interaktivní pole použij aplikaci na PDF",
      body: "U formulářů se skutečnými poli otevři soubor v aplikaci PDF Editor. Rozpozná pole, takže klepneš a píšeš, zaškrtneš políčka a čistě se přesouváš mezi poli.",
    },
    {
      title: "Neinteraktivní formuláře vyřeš umístěním textu",
      body: "Když formulář nemá pole, použij textový nástroj aplikace a umísti odpovědi přesně na každý řádek. Přibliž si zobrazení sevřením prstů, ať text sedne přesně, ne aby plaval nad řádkem.",
    },
    {
      title: "Podepiš a exportuj přes nabídku sdílení",
      body: "Přidej svůj podpis do prostoru na podpis, pak vyexportuj vyplněnou kopii a pošli ji rovnou z nabídky sdílení – do Mailu, Zpráv, nebo zpátky tomu, kdo ti formulář poslal.",
    },
  ],
  tips: [
    "Pokud na iPhonu nejde do formuláře psát, skoro vždycky jsi v náhledu Mailu – nejdřív ulož do Files, nebo otevři v aplikaci na PDF.",
    "Markup je skvělý na rychlý podpis nebo neinteraktivní formulář, ale skutečná interaktivní pole nevyplní tak jako specializovaná aplikace.",
    "Před umístěním textu na neinteraktivní formulář si přibliž zobrazení; palce jsou nepřesné a přiblížený text sedne na řádek.",
    "Prázdný originál si nech ve Files, ať příště vyplníš čerstvou kopii místo úprav té staré.",
    "iOS zvládá HEIC i PDF dobře, ale chování formuláře se pořád liší podle aplikace – nejkonzistentnější je specializovaná aplikace na PDF.",
  ],
  mobileNote:
    "Aplikace PDF Editor pro iPhone rozpozná interaktivní pole tam, kde existují, a tam, kde ne, ti dovolí umístit text a zaškrtnutí na neinteraktivní formulář, pak podepsat a exportovat – vše v zařízení, takže se osobní údaje z formuláře nikam nenahrávají. Je to cesta, která se vyhne slepým uličkám náhledu v Mailu.",
  faq: [
    {
      q: "Proč nemůžu psát do formuláře PDF na iPhonu?",
      a: "Nejspíš se na něj díváš v náhledu Mailu, který pole formuláře ignoruje. Ulož soubor do Files nebo ho otevři ve specializované aplikaci na PDF a pole se aktivují. Neinteraktivní formuláře potřebují místo toho text umístěný navrch.",
    },
    {
      q: "Dá se formulář PDF vyplnit vestavěným nástrojem Markup?",
      a: "Ano, na neinteraktivní formuláře a rychlé vyplnění – Markup přidá text i podpis kamkoli na stránku. Se skutečným formulářem ale zachází jako s obrázkem, takže neklepne do interaktivních polí. Na ty použij aplikaci na PDF.",
    },
    {
      q: "Jak vyplním naskenovaný formulář na iPhonu?",
      a: "Naskenovaný formulář je neinteraktivní, takže si na stránku umísti vlastní text a zaškrtnutí pomocí Markupu nebo aplikace PDF Editor a pak exportuj. Žádná pole, do kterých by šlo psát, tam nejsou.",
    },
    {
      q: "Je vyplňování formuláře na iPhonu soukromé?",
      a: "S aplikací PDF Editor se formulář vyplňuje přímo v zařízení, takže se zadané údaje nikam neposílají. Markup je taky lokální. Webové nástroje na vyplňování mohou soubor nahrát na server.",
    },
    {
      q: "Jak pošlu vyplněný formulář zpátky?",
      a: "Vyexportuj vyplněnou kopii a použij nabídku sdílení v iOS k odeslání přes Mail, Zprávy nebo jinou aplikaci. Pokud chceš odpovědi uzamčené, nejdřív ji zafixuj.",
    },
  ],
  related: [
    {
      label: "Jak vyplnit formulář PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Jak vyplnit formuláře PDF na Androidu",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "Jak podepsat PDF na iPhonu",
      path: "/guides/how-to-sign-pdf-on-iphone",
    },
    {
      label: "Nejlepší aplikace na formuláře PDF pro iPhone",
      path: "/guides/best-pdf-form-app-for-iphone",
    },
    { label: "Pracovní postup s formuláři PDF na mobilu", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
