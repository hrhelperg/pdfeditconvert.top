import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-formatting-issues",
  h1: "Problémy s formátováním formuláře PDF (zarovnání a přetečení)",
  description:
    "Pole nejsou zarovnaná, odpovědi přetékají, formulář vypadá na cizí obrazovce jinak? Problémy s rozvržením formuláře, které se liší podle prohlížeče, a jak dosáhnout stejného výsledku všude.",
  updated: "2026-06-01",
  intro: [
    "Formulář může na tvé obrazovce vypadat dokonale a na cizí dorazit vypadající špatně – pole posunutá mimo řádky, odpovědi přetékající ze svých políček, zaškrtávací pole nezarovnaná, celé rozvržení nenápadně posunuté. Protože pole formuláře kreslí každý prohlížeč zvlášť, místo aby byla pevně zapsaná do stránky, jejich přesný vzhled se může lišit, a to je kořen většiny stížností na formátování formulářů.",
    "Tohle se liší od obecných problémů s formátováním PDF, které se obvykle vrací k okrajům a rozestupům zdrojového dokumentu. Problémy s formátováním formuláře se týkají vrstvy polí: jak pole sedí vzhledem ke stránce, jak se do nich vejdou odpovědi a jak konzistentně se to vykresluje napříč různými aplikacemi. Odpovídajícím způsobem jsou tomu přizpůsobené i opravy.",
    "Tenhle návod pokrývá běžné problémy s rozvržením formuláře, proč se dějí a jediné nejspolehlivější řešení – zafixování – díky kterému formulář vypadá všude stejně.",
  ],
  steps: [
    {
      title: "Potvrď, že jde o rozdíl mezi prohlížeči",
      body: "Otevři formulář ve dvou různých aplikacích na PDF. Pokud se rozvržení mezi nimi posune, je problémem vykreslování polí, ne soubor – každý prohlížeč kreslí pole mírně jinak.",
    },
    {
      title: "Oprav odpovědi přetékající ze svých polí",
      body: "Pokud text přeteče přes okraj pole, je pole moc malé nebo odpověď moc dlouhá. U formuláře, který ovládáš, pole zvětši; při vyplňování drž odpovědi ve viditelném prostoru nebo se spolehni na automatickou velikost.",
    },
    {
      title: "Přerovnej pole posunutá mimo řádky",
      body: "Pole plovoucí nad nebo pod svými popisky obvykle znamenají, že pozice polí neodpovídají stránce pod nimi. Pokud je formulář tvůj, pole přemísti; pokud ne, umístění textu navrch může být spolehlivější než boj s nezarovnaným polem.",
    },
    {
      title: "Zafixuj kvůli konzistentnímu výsledku",
      body: "Zafixování slije pole se stránkou a ustálí jejich pozici i vzhled. Po zafixování vypadá formulář identicky v každém prohlížeči – nejspolehlivější lék na rozvržení, které se liší.",
    },
    {
      title: "Dej přednost neinteraktivní šabloně, když je konzistence klíčová",
      body: "Pokud musí formulář vypadat pro každého stejně, dobře navržená neinteraktivní šablona (bez vrstvy interaktivních polí) se rozdílům ve vykreslování mezi prohlížeči úplně vyhne.",
    },
  ],
  tips: [
    "Otevři formulář ve dvou aplikacích a potvrď, jestli je problém s rozvržením vykreslování prohlížeče, ne poškozený soubor.",
    "Zafixování je nejspolehlivější oprava – uzamkne pozici a vzhled polí do stránky pro každý prohlížeč.",
    "Při vyplňování formuláře s nezarovnanými poli umístění textu navrch často sedne přesněji než boj s polem.",
    "Pokud stavíš formulář, který musí vypadat všude identicky, neinteraktivní šablona se rozdílům ve vykreslování mezi prohlížeči vyhne.",
    "Vzhled formuláře se mezi prohlížeči PDF liší záměrně, takže „na jejich obrazovce to vypadá špatně“ je obvykle vykreslování, ne poškození.",
  ],
  mobileNote:
    "Aplikace PDF Editor ti dovolí zafixovat vyplněný formulář, ať je jeho rozvržení ustálené ještě před odesláním, takže se na obrazovce příjemce neposune. U formulářů s nepohodlnými poli můžeš taky umístit text přesně na stránku a zafixovat – konzistentní výsledek na jakémkoli zařízení.",
  faq: [
    {
      q: "Proč můj formulář PDF vypadá na cizí obrazovce jinak?",
      a: "Pole formuláře kreslí každý prohlížeč zvlášť, takže se jejich pozice a vzhled mezi aplikacemi mohou lišit. Zafixování formuláře slije pole se stránkou, ať vypadá všude identicky.",
    },
    {
      q: "Proč mi odpovědi přetékají z políček pole?",
      a: "Pole je na odpověď moc malé, nebo je odpověď moc dlouhá. U formuláře, který ovládáš, pole zvětši, při vyplňování drž odpovědi ve viditelném prostoru, nebo se spolehni na automatickou velikost, která je zmenší tak, aby se vešly.",
    },
    {
      q: "Jak opravím pole, která sedí mimo své řádky?",
      a: "Pozice polí neodpovídají stránce pod nimi. Pokud je formulář tvůj, pole přemísti; pokud ne, umístění vlastního textu přímo na stránku může být spolehlivější než nezarovnané pole.",
    },
    {
      q: "Jaký je nejspolehlivější způsob, jak udržet rozvržení formuláře konzistentní?",
      a: "Zafixuj ho. Zafixování ustálí vzhled polí do stránky, takže se vykreslí stejně v jakémkoli prohlížeči. U formulářů, které stavíš sám, se neinteraktivní šablona tomuhle problému vyhne od začátku.",
    },
    {
      q: "Čím se to liší od obecných problémů s formátováním PDF?",
      a: "Tohle je o vrstvě polí – zarovnání, přetékání, vykreslování v prohlížeči. Obecné problémy s formátováním PDF obvykle pramení z okrajů a rozestupů zdrojového dokumentu, ne z jeho polí formuláře.",
    },
  ],
  related: [
    {
      label: "Jak vyřešit problémy s formátováním PDF",
      path: "/guides/how-to-fix-pdf-formatting-problems",
    },
    {
      label: "Problémy s písmem ve formuláři PDF",
      path: "/guides/pdf-form-font-problems",
    },
    {
      label: "Problémy s kompatibilitou formuláře PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "Osvědčené postupy pro formuláře PDF", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
