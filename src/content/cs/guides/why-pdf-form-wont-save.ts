import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-wont-save",
  h1: "Proč se formulář PDF neukládá (a jak to opravit)",
  description:
    "Vyplnil jsi formulář a při dalším otevření odpovědi zmizí? Proč některé prohlížeče umí data z polí jen vytisknout, ne uložit, a spolehlivé způsoby, jak zajistit, že odpovědi zůstanou.",
  updated: "2026-06-01",
  intro: [
    "Strávíš deset minut vyplňováním formuláře, uložíš ho, později znovu otevřeš a každé pole je zase prázdné. Je to k vzteku a není to tvoje chyba – je to tím, že hodnoty polí formuláře žijí v samostatné vrstvě od stránky a ne každý nástroj tuhle vrstvu při ukládání skutečně zapíše zpátky do souboru. Některé umí formulář jen vytisknout, nikdy neuloží tvůj vstup.",
    "Existují dvě spolehlivá řešení: použij nástroj, který data formuláře skutečně ukládá, nebo formulář zafixuj, ať se tvé odpovědi stanou trvalým obsahem stránky, který nic nemůže upustit. Volba záleží na tom, jestli budeš odpovědi ještě později upravovat. Ať tak či tak, problém s mizejícími odpověďmi je úplně řešitelný.",
    "Tenhle návod vysvětlí, proč ukládání selhává, jak ověříš, jestli je problémem tvůj nástroj, a dva spolehlivé způsoby, jak zajistit, že vyplněné odpovědi zůstanou.",
  ],
  steps: [
    {
      title: "Potvrď, že se odpovědi opravdu neukládají",
      body: "Vyplň pole, ulož, soubor úplně zavři a znovu otevři. Pokud je odpověď pryč, hodnoty polí se nezapisují – jde o problém s ukládáním, ne o něco, co jsi udělal špatně.",
    },
    {
      title: "Použij Uložit nebo Exportovat, nikdy jen Tisk",
      body: "Zvol Uložit nebo Exportovat, ať se hodnoty polí zapíšou do PDF. Cesta jen přes Tisk (běžná u jednoduchých prohlížeček) vyprodukuje výstup, ale nikdy neuloží upravitelné odpovědi – klasická příčina mizejících dat.",
    },
    {
      title: "Přepni na nástroj, který umí formuláře",
      body: "Pokud tvá současná aplikace jen tiskne, přesuň formulář do specializované aplikace na PDF nebo nástroje v prohlížeči, který data formuláře ukládá. Znovu otevři uložený soubor a ověř, že odpovědi vydržely.",
    },
    {
      title: "Zafixuj, ať jsou odpovědi trvalé",
      body: "Pokud jsi s úpravami hotový, formulář zafixuj. Zafixování slije hodnoty se stránkou, takže nezbyde samostatná vrstva, kterou by šlo upustit, a odpovědi přežijí všude.",
    },
    {
      title: "Ulož jako novou kopii",
      body: "Exportuj do nového názvu souboru, ať si podržíš čistý prázdný originál i uloženou vyplněnou verzi vedle sebe – a nikdy omylem nepřepíšeš hlavní verzi prázdným formulářem.",
    },
  ],
  tips: [
    "Pokud odpovědi mizí, tvůj nástroj jen tiskne, ne ukládá vrstvu polí – přepni na takový, který data formuláře zapisuje.",
    "Zafixování je nejjistější oprava: jakmile je formulář zafixovaný, nezbyde žádná vrstva polí, kterou by šlo ztratit.",
    "Uložený formulář si vždycky znovu otevři, než se na něj spolehneš; test zavřít-a-znovu-otevřít odhalí problém okamžitě.",
    "Prázdný originál si drž zvlášť, ať tě zafixování vyplněné kopie nikdy nepřipraví o znovupoužitelnou šablonu.",
    "Na telefonech zkratka „tisk do PDF“ obvykle formulář zafixuje – to je v pořádku, pokud jsi hotový, ale formulář tím upravitelný nezůstane.",
  ],
  mobileNote:
    "Aplikace PDF Editor zapisuje vyplněné odpovědi přímo do souboru a v okamžiku, kdy jsi hotový, umí vyexportovat zafixovanou kopii, takže nic nezmizí ani po znovuotevření, ani na straně příjemce. Ukládá přímo v zařízení, takže zadané údaje zůstávají v soukromí.",
  faq: [
    {
      q: "Proč se mi formulář PDF pořád ukládá prázdný?",
      a: "Protože tvůj prohlížeč formulář tiskne, místo aby ukládal jeho hodnoty polí. Odpovědi žijí v samostatné vrstvě polí; pokud se nezapíše do souboru, znovuotevření ukáže prázdná pole. Použij nástroj, který data formuláře ukládá, nebo formulář zafixuj.",
    },
    {
      q: "Jak zajistím, aby mi odpovědi ve formuláři zůstaly?",
      a: "Ulož nebo exportuj nástrojem, který umí formuláře, ať se hodnoty polí zapíšou do souboru, a pak znovu otevři pro potvrzení. Pro trvalý výsledek formulář zafixuj, ať se odpovědi slijí se stránkou.",
    },
    {
      q: "Co udělá zafixování pro ukládání?",
      a: "Slije tvé vyplněné hodnoty přímo do stránky a nezbyde žádná samostatná vrstva polí, kterou by šlo upustit. Po zafixování se odpovědi spolehlivě uloží a zobrazí v jakémkoli prohlížeči.",
    },
    {
      q: "Mám přepsat originál, nebo uložit kopii?",
      a: "Ulož kopii pod novým názvem. Tím si podržíš čistou prázdnou hlavní verzi oddělenou od vyplněné, takže nikdy neztratíš znovupoužitelnou šablonu ani omylem nepošleš prázdný formulář.",
    },
    {
      q: "Je tohle to samé jako formulář jen pro čtení?",
      a: "Ne. Problém s neukládáním znamená, že tvůj nástroj neukládá data polí. Formulář jen pro čtení aktivně blokuje úpravy. Pokud psát můžeš, ale odpovědi ti nezůstanou, jde o problém s ukládáním, ne o zabezpečení.",
    },
  ],
  related: [
    {
      label: "Jak uložit vyplněný formulář PDF",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    { label: "Formulář PDF nefunguje", path: "/guides/pdf-form-not-working" },
    {
      label: "Proč je formulář PDF jen pro čtení",
      path: "/guides/why-pdf-form-is-read-only",
    },
    { label: "Jak fungují formuláře PDF", path: "/guides/how-pdf-forms-work" },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
