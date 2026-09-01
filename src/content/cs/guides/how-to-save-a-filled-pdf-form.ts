import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-save-a-filled-pdf-form",
  h1: "Jak uložit vyplněný formulář PDF, aby odpovědi zůstaly",
  description:
    "Vyplníš formulář a odpovědi ti pak zmizí? Jak spolehlivě uložit vyplněná data formuláře, proč to některé prohlížeče neumí a kdy formulář před odesláním zafixovat.",
  updated: "2026-06-01",
  intro: [
    "Málokterý moment s PDF je otravnější, než když vyplníš dlouhý formulář, zavřeš ho, znovu otevřeš a zjistíš, že jsou všechna pole zase prázdná. Práce nezmizela proto, že bys udělal něco špatně – je to proto, že odpovědi žijí ve vrstvě polí formuláře a ne každý nástroj tuhle vrstvu při ukládání skutečně zapíše zpátky do souboru.",
    "Spolehlivé uložení vyplněného formuláře stojí na dvou věcech: použij nástroj, který hodnoty polí ukládá (ne jen takový, co je vytiskne), a rozhodni se, jestli chceš formulář ponechat upravitelný, nebo ho zafixovat, aby se odpovědi staly trvalými. Když tohle zvládneš, odpovědi zůstanou pokaždé, na jakémkoli zařízení, které soubor později otevře.",
    "Tenhle návod přesně vysvětlí, jak vyplněné odpovědi uložit, proč je některé prohlížeče potichu ztrácejí a kdy je zafixování před odesláním formuláře správný krok.",
  ],
  steps: [
    {
      title: "Nejdřív formulář kompletně vyplň",
      body: "Zadej každou odpověď, zaškrtni políčka a přidej případný podpis ještě před uložením. Ukládat po částech je v pořádku, ale závěrečný průchod předem znamená, že ukládáš hotový soubor, ne rozdělanou práci.",
    },
    {
      title: "Použij Uložit nebo Exportovat, ne jen Tisk",
      body: "Zvol Uložit nebo Exportovat, ať se hodnoty polí zapíšou do PDF. Některé jednoduché prohlížečky nabízejí jen Tisk, který vytvoří papír nebo neinteraktivní kopii, ale nikdy neuloží upravitelné odpovědi – klasická příčina zmizelých dat.",
    },
    {
      title: "Ulož jako novou kopii",
      body: "Exportuj do nového názvu souboru, třeba „prihlaska-vyplnena.pdf“, místo přepsání prázdného originálu. Budeš mít vedle sebe čistý originál i uloženou vyplněnou verzi.",
    },
    {
      title: "Rozhodni se, jestli zafixovat",
      body: "Pokud ještě budeš odpovědi měnit, nech formulář jako interaktivní. Pokud ho posíláš definitivně, zafixuj ho, ať se hodnoty sloučí se stránkou a nedají se smazat ani upravit.",
    },
    {
      title: "Znovu otevři a ověř, že se odpovědi udržely",
      body: "Před odesláním uložený soubor zavři a znovu otevři. Pokud tam odpovědi pořád jsou, hodnoty polí se zapsaly správně. Pokud zmizely, nástroj jen tiskl – přepni na takový, který ukládá data formuláře.",
    },
  ],
  tips: [
    "Pokud odpovědi pořád mizí, nástroj nezapisuje vrstvu polí. Použij editor, který umí formuláře a hodnoty polí skutečně ukládá.",
    "Zafixování je nejspolehlivější způsob, jak zaručit, že se odpovědi zobrazí všude – jakmile je formulář zafixovaný, nezbyde žádná vrstva polí, kterou by šlo ztratit.",
    "Prázdný originál si drž zvlášť; zafixování vyplněné kopie by tě nemělo připravit o znovupoužitelnou šablonu.",
    "Na telefonu obvykle „sdílet“ nebo „exportovat“ data uloží; zkratka tisku do PDF formulář může zafixovat, což je v pořádku, pokud už úpravy nechystáš.",
    "Pojmenovávej soubory jasně – prázdný, koncept, finální – ať omylem nikdy neodešleš prázdný formulář.",
  ],
  mobileNote:
    "Aplikace PDF Editor ukládá vyplněné odpovědi přímo do souboru a v okamžiku, kdy jsi připravený formulář odeslat, umí vyexportovat zafixovanou kopii, takže se příjemci nic nesmaže. Celé se to odehrává v zařízení, takže se zadané údaje nikam nenahrávají.",
  faq: [
    {
      q: "Proč mi po uložení zmizí odpovědi ve formuláři PDF?",
      a: "Protože nástroj formulář vytiskl místo toho, aby uložil hodnoty polí. Odpovědi žijí v samostatné vrstvě; pokud se nezapíše zpátky do souboru, po znovuotevření uvidíš zase prázdná pole. Použij nástroj, který data formuláře ukládá.",
    },
    {
      q: "Mám formulář před odesláním zafixovat?",
      a: "Pokud jsi s úpravami hotový, ano. Zafixování slije tvé odpovědi se stránkou, takže se nedají smazat a ve všech prohlížečích se zobrazí stejně. Nezafixovanou kopii si ponech jen tehdy, pokud ji ještě možná budeš upravovat.",
    },
    {
      q: "Jak si udržím formulář upravitelný, a přitom uložím odpovědi?",
      a: "Ulož nebo exportuj jako interaktivní PDF bez zafixování. Nástroj, který umí formuláře, uloží hodnoty polí, takže je můžeš později znovu otevřít a změnit.",
    },
    {
      q: "Je uložení vyplněného formuláře soukromé?",
      a: "Záleží na nástroji. Aplikace PDF Editor a lokální nástroje v prohlížeči ukládají přímo v zařízení, takže se zadané osobní údaje nikam neposílají. Nástroje pracující s nahráváním zpracovávají tvůj soubor na serveru.",
    },
    {
      q: "Dá se uložit neinteraktivní formulář, který jsem vyplnil textem navrch?",
      a: "Ano. Neinteraktivní formuláře nemají žádnou vrstvu polí, takže je tvůj přidaný text po exportu prostě součástí stránky a vždy se spolehlivě uloží a zobrazí.",
    },
  ],
  related: [
    {
      label: "Jak vyplnit formulář PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    { label: "Jak fungují formuláře PDF", path: "/guides/how-pdf-forms-work" },
    {
      label: "Proč se formulář PDF neukládá",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "Jak odeslat vyplněný formulář PDF",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
