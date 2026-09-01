import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-fields-missing",
  h1: "Chybí pole ve formuláři PDF? Proč a jak je obnovit",
  description:
    "Otevřel jsi formulář a pole tam nejsou? Proč interaktivní pole v některých prohlížečích mizí, jak je obnovit a co dělat, když žádná ve skutečnosti nikdy nebyla.",
  updated: "2026-06-01",
  intro: [
    "Otevřeš formulář, čekáš políčka, do kterých se dá psát, a není tam nic – jen stránka vypadající neinteraktivně, nebo pole zobrazená jako prázdné obrysy, se kterými nejde nic dělat. Chybějící pole formuláře děsí, ale obvykle jsou neškodná: pole jsou pořád v souboru, tvůj prohlížeč je jen nevykresluje. Občas formulář nikdy žádná pole neměl a byl vždycky určený k ručnímu vyplnění.",
    "Dva scénáře pokrývají skoro každý případ. V prvním je formulář interaktivní, ale otevřel jsi ho někde, kde se vrstva polí ignoruje – náhled v prohlížeči, prohlížečka e-mailu, jednoduchá čtečka PDF stylu obrázku. Ve druhém je formulář opravdu neinteraktivní, takže žádná pole nenajdeš a vyplníš ho umístěním textu navrch.",
    "Tenhle návod ti pomůže oba scénáře od sebe rozeznat a dostat pole zpátky tam, kde existují – aniž bys předpokládal, že je soubor poškozený, protože skoro nikdy není.",
  ],
  steps: [
    {
      title: "Nejdřív vylouč problém s prohlížečem",
      body: "Otevři stejný soubor ve specializované aplikaci na PDF místo karty prohlížeče nebo náhledu e-mailu. Pokud se pole objeví znovu, byla tam vždycky – předchozí prohlížeč prostě nevykresloval vrstvu polí.",
    },
    {
      title: "Zkontroluj, jestli pole vůbec někdy existovala",
      body: "Pokud žádná schopná aplikace pole nikde na stránce neukáže, je formulář neinteraktivní – byl naskenovaný nebo exportovaný bez vrstvy polí. Nic nechybí; prostě nikdy nebyl interaktivní.",
    },
    {
      title: "Aktualizuj nebo přepni svou aplikaci na PDF",
      body: "Zastaralá nebo minimalistická prohlížečka může vykreslit stránku, ale pole přeskočit. Aktuální, plnohodnotná aplikace na PDF je nejspolehlivější způsob, jak interaktivní pole zobrazit a použít.",
    },
    {
      title: "Stáhni soubor znovu, pokud vypadá neúplný",
      body: "Částečné nebo přerušené stažení může obsah upustit. Stáhni formulář znovu ze zdroje a znovu ho otevři – čerstvá, kompletní kopie někdy obnoví pole, která vypadala chybějící.",
    },
    {
      title: "Vyplň neinteraktivní formulář přidáním textu",
      body: "Pokud formulář opravdu nemá žádná pole, dokonči ho neinteraktivním způsobem: umísti text a zaškrtnutí na stránku editorem PDF, pak exportuj. Pole k dokončení nepotřebuješ.",
    },
  ],
  tips: [
    "Než usoudíš, že je soubor poškozený, přepni prohlížeče – jiná aplikace je nejrychlejší test, jestli pole skutečně existují.",
    "Náhledy v prohlížeči a prohlížečky e-mailu jsou obvyklí viníci „mizejících“ polí; skutečná aplikace na PDF vyřeší většinu případů.",
    "Pokud se pole zobrazují jako prázdné obrysy, na které nejde kliknout, jde často o prohlížeč, který je vykreslí, ale neaktivuje – přepni aplikaci.",
    "Opravdu neinteraktivnímu formuláři nic nechybí – umístění textu navrch je zamýšlený způsob, jak ho vyplnit.",
    "Pokročilé dynamické formuláře občas odhalí pole jen ve specifickém softwaru; pokud je to tenhle případ, formulář může potřebovat právě ten program nebo jiný formát.",
  ],
  mobileNote:
    "Na telefonu jsou chybějící pole obvykle jen náhled, který je nevykreslí. Otevři formulář v aplikaci PDF Editor: aktivuje interaktivní pole tam, kde existují, a tam, kde ne, ti dovolí umístit text na stránku – takže formulář, který v e-mailu vypadal bez polí, se stane vyplnitelným.",
  faq: [
    {
      q: "Proč mi ve formuláři PDF chybí pole?",
      a: "Nejčastěji tvůj prohlížeč nevykresluje vrstvu polí – běžné u náhledů v prohlížeči a e-mailových prohlížeček. Otevři soubor ve specializované aplikaci na PDF a pole se obvykle objeví znovu. Pokud je neukáže žádná aplikace, je formulář prostě neinteraktivní.",
    },
    {
      q: "Přišel jsem o pole, nebo tam nikdy žádná nebyla?",
      a: "Otevři ho ve schopné aplikaci na PDF. Pokud se pole objeví, byla tam vždycky a starý prohlížeč je skrýval. Pokud se neobjeví nikde, je formulář neinteraktivní a nikdy neměl vrstvu polí.",
    },
    {
      q: "Může poškozené stažení způsobit chybějící pole?",
      a: "Občas. Částečné stažení může upustit obsah. Stáhni formulář znovu ze zdroje a znovu ho otevři, než usoudíš, že jsou pole opravdu pryč.",
    },
    {
      q: "Jak vyplním formulář, který nemá žádná pole?",
      a: "Umísti vlastní text a zaškrtnutí přímo na stránku editorem PDF, pak exportuj. Neinteraktivní formuláře se vyplňují právě takhle – pole nejsou potřeba.",
    },
    {
      q: "Proč se pole zobrazují jako obrysy, na které nejde kliknout?",
      a: "Tvůj prohlížeč kreslí rámečky polí, ale neaktivuje je. Přepni na plnohodnotnou aplikaci na PDF, která pole zobrazí i aktivuje.",
    },
  ],
  related: [
    { label: "Formulář PDF nefunguje", path: "/guides/pdf-form-not-working" },
    {
      label: "Proč nemůžu psát do formuláře PDF?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    {
      label: "Problémy s kompatibilitou formuláře PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "Co je formulář PDF?", path: "/guides/what-is-a-pdf-form" },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
