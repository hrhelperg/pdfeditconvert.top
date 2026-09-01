import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-is-read-only",
  h1: "Proč je formulář PDF jen pro čtení (a co s tím)",
  description:
    "Formulář se otevře uzamčený a šedý? Proč jsou formuláře nastavené jen pro čtení, jak rozeznat záměrné zabezpečení od chyby prohlížeče a poctivé možnosti, jak ho přesto vyplnit.",
  updated: "2026-06-01",
  intro: [
    "Formulář PDF jen pro čtení se v pohodě otevře, ale odmítá každý pokus ho vyplnit – zešedlá pole, ikona zámku, možná hláška „chráněno“ nebo „zabezpečeno“ v záhlaví. Na rozdíl od neinteraktivního formuláře (který prostě nemá žádná pole) nebo problému s ukládáním (kde odpovědi nezůstanou), má formulář jen pro čtení pole, která existují, ale jsou záměrně vypnutá. Něco nebo někdo ho uzamkl.",
    "Existuje pár poctivých důvodů, proč se to děje, a záleží na nich, protože mění, co bys měl udělat. Autor formuláře ho možná zabezpečil úmyslně. Formulář může být certifikovaný nebo už podepsaný, takže by ho změna porušila. Nebo tvůj prohlížeč formulář otevírá v režimu jen pro čtení, který jde vypnout. Rozeznat záměrnou ochranu od chyby prohlížeče je klíčový první krok.",
    "Tenhle návod vysvětlí příčiny, jak zjistit, o kterou z nich jde, a legitimní způsoby, jak formulář jen pro čtení přesto dokončit – bez pokusu prolomit zabezpečení dokumentu, který ti nepatří.",
  ],
  steps: [
    {
      title: "Hledej hlášku o ochraně nebo zabezpečení",
      body: "Podívej se do záhlaví a vlastností dokumentu na slova jako „zabezpečeno“, „chráněno“, nebo na ikonu zámku. Signalizuje to záměrné zabezpečení nasazené autorem – stav jen pro čtení je záměrný.",
    },
    {
      title: "Vylouč režim jen pro čtení v prohlížeči",
      body: "Některé aplikace otevírají soubory v režimu jen pro čtení nebo „chráněném zobrazení“ ve výchozím nastavení. Hledej výzvu „povolit úpravy“ nebo přepínač jen pro čtení a vyzkoušej specializovanou aplikaci na PDF ještě předtím, než usoudíš, že je uzamčený samotný soubor.",
    },
    {
      title: "Zvaž, jestli není certifikovaný nebo podepsaný",
      body: "Pokud je formulář už digitálně podepsaný nebo certifikovaný, úprava by ten podpis znehodnotila, a proto ho prohlížeče uzamknou. To je správné chování – podepsaný formulář bys obecně neměl měnit.",
    },
    {
      title: "Dokonči ho přidáním textu navrch",
      body: "I když jsou pole uzamčená, často pořád jde umístit vlastní text a zaškrtnutí na stránku, jako by šlo o neinteraktivní formulář, a pak exportovat – legitimní způsob, jak vyplnit formulář jen pro čtení.",
    },
    {
      title: "Vyžádej si od odesílatele odemčenou verzi",
      body: "Pokud opravdu potřebuješ interaktivní pole, nejčistší cesta je vyžádat si od toho, kdo formulář poslal, verzi, která dovolí vstup. Nesnaž se obejít zabezpečení dokumentu, který ti nepatří.",
    },
  ],
  tips: [
    "Nejdřív rozhodni: záměrné zabezpečení, nebo chyba prohlížeče? Hledej ikonu zámku nebo hlášku „zabezpečeno“ oproti výzvě „povolit úpravy“.",
    "Umístění textu navrch na stránku funguje na většině formulářů jen pro čtení a bývá nejrychlejší legitimní cestou k dokončení.",
    "Nesnaž se sejmout ochranu z formuláře, který ti nepatří – pokud potřebuješ odemčená pole, zeptej se odesílatele.",
    "Certifikovaný nebo podepsaný formulář je uzamčený z dobrého důvodu; jeho úprava by porušila podpis, který nese.",
    "„Chráněné zobrazení“ u některých prohlížečů je jen výchozí nastavení – přepnutí na plnohodnotnou aplikaci na PDF nebo povolení úprav může úplně stačit.",
  ],
  mobileNote:
    "Na telefonu se formulář jen pro čtení obvykle pořád dá dokončit v aplikaci PDF Editor umístěním textu a zaškrtnutí na stránku, i když jsou jeho pole uzamčená. Funguje to v zařízení, takže tvé údaje zůstávají v soukromí – a nezasahuje to do zabezpečení formuláře, jen na něj položí tvé odpovědi.",
  faq: [
    {
      q: "Proč je můj formulář PDF jen pro čtení?",
      a: "Buď ho autor záměrně zabezpečil, je certifikovaný nebo už podepsaný (takže by ho úprava porušila), nebo ho tvůj prohlížeč otevřel v režimu jen pro čtení. Podle ikony zámku nebo hlášky „zabezpečeno“ poznáš záměrnou ochranu od nastavení prohlížeče.",
    },
    {
      q: "Jak vyplním formulář PDF jen pro čtení?",
      a: "Často jde umístit vlastní text a zaškrtnutí na stránku, jako by byla neinteraktivní, a pak exportovat – i když jsou pole uzamčená. Pokud potřebuješ interaktivní pole, požádej odesílatele o odemčenou kopii.",
    },
    {
      q: "Je jen pro čtení to samé jako neschopnost psát?",
      a: "Je to jedna z příčin neschopnosti psát. Formulář může psaní odmítat i proto, že je neinteraktivní, nebo je otevřený ve špatném prohlížeči. Jen pro čtení konkrétně znamená, že pole existují, ale jsou záměrně vypnutá.",
    },
    {
      q: "Můžu ochranu jen pro čtení odstranit?",
      a: "Pokud je formulář tvůj a ochranu jsi nastavil sám, můžeš ji ve schopném editoru změnit. Pokud patří někomu jinému, nesnaž se jeho zabezpečení obejít – místo toho si vyžádej odemčenou verzi.",
    },
    {
      q: "Proč je úprava podepsaného formuláře zablokovaná?",
      a: "Úprava by znehodnotila digitální podpis nebo certifikaci, kterou formulář nese, a proto ho prohlížeče uzamknou. Je to zamýšlené chování, které udržuje podepsané dokumenty důvěryhodné.",
    },
  ],
  related: [
    {
      label: "Proč nemůžu psát do formuláře PDF?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    { label: "Formulář PDF nefunguje", path: "/guides/pdf-form-not-working" },
    {
      label: "Proč se formulář PDF neukládá",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "Jak chránit PDF soubor heslem",
      path: "/guides/how-to-protect-pdf-file",
    },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
