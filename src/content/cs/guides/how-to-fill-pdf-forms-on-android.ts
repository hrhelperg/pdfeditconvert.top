import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-android",
  h1: "Jak vyplnit formuláře PDF na Androidu (na jakémkoli telefonu)",
  description:
    "Vyplň interaktivní i neinteraktivní formuláře PDF na Androidu. Proč vestavěná prohlížečka často neumí psát do polí, spolehlivá cesta přes aplikaci a jak se rozdíly mezi výrobci telefonů projeví na formulářích.",
  updated: "2026-06-01",
  intro: [
    "Android nemá jeden jednotný vestavěný nástroj na vyplňování formulářů PDF, a to je kořen většiny zmatku. Výchozí prohlížečka PDF na řadě telefonů – často uvnitř Google Drive nebo Files – formulář v pohodě zobrazí, ale ne vždy ti dovolí psát do jeho polí. Lidé si pak myslí, že je formulář rozbitý, přitom jen potřebují aplikaci, která pole formulářů zvládá pořádně.",
    "Spolehlivá cesta na jakémkoli telefonu s Androidem je specializovaná aplikace na PDF, která rozpozná interaktivní pole a dovolí ti umístit text na neinteraktivní formuláře. Protože se hardware i software Androidu mezi výrobci hodně liší, přesné vestavěné možnosti se telefon od telefonu mění – pořádná aplikace na PDF se ale chová všude stejně, a přesně to u formulářů potřebuješ.",
    "Tenhle návod vysvětlí, proč výchozí prohlížečka nestačí, ukáže spolehlivý postup s aplikací a projde detaily specifické pro Android – sdílení přes systémovou nabídku sdílení, vytažení formulářů z Gmailu a Drive – díky kterým vyplňování formulářů jde rychle.",
  ],
  steps: [
    {
      title: "Dostaň formulář ze základní prohlížečky",
      body: "Pokud tě formulář otevřený z Gmailu nebo Drive nenechá psát, znamená to, že prohlížečka jeho pole ignoruje. Stáhni soubor a místo toho ho otevři ve specializované aplikaci na PDF – tam se pole probudí k životu.",
    },
    {
      title: "Otevři ho v aplikaci PDF Editor",
      body: "Naimportuj PDF z Files, Drive, nebo přes nabídku sdílení. Aplikace zkontroluje interaktivní pole a zpřístupní je klepnutím, ať můžeš psát, zaškrtávat políčka a používat rozbalovací nabídky.",
    },
    {
      title: "Neinteraktivní formuláře vyplň přidáním textu",
      body: "Pokud formulář nemá žádná pole, umísti odpovědi textovým nástrojem přímo na každý řádek. Nejdřív si přibliž zobrazení, ať text sedne přesně – klávesnice na Androidu a malá pole vyžadují trochu opatrnosti.",
    },
    {
      title: "Přidej zaškrtnutí, data a podpis",
      body: "Zaškrtni interaktivní políčka nebo u neinteraktivních umísti zaškrtnutí, zadej data ve formátu, který formulář ukazuje, a přidej podpis do prostoru na podpis nástrojem na podepisování.",
    },
    {
      title: "Vyexportuj a pošli zpátky",
      body: "Ulož vyplněnou kopii a pošli ji přes nabídku sdílení Androidu – Gmail, Drive, WhatsApp, cokoli. Pokud chceš mít odpovědi uzamčené a nesmazatelné, nejdřív formulář zafixuj.",
    },
  ],
  tips: [
    "Pokud na Androidu nejde do formuláře psát, obvykle za to může základní prohlížečka – otevři soubor v pořádné aplikaci na PDF.",
    "Protože jednotliví výrobci Androidu dodávají různý software, nespoléhej na to, že vestavěný nástroj na vyplňování bude přítomný; specializovaná aplikace je konzistentní volba.",
    "Před umístěním textu na neinteraktivní formulář si přibliž zobrazení, ať se odpověď vejde přesně do malého pole.",
    "Prázdný formulář si drž ve známé složce, ať vyplňuješ čistou kopii místo úpravy staré.",
    "Chování formuláře se liší podle aplikace i zařízení, takže zafixovaný export je nejjistější způsob, jak zaručit, že se odpovědi zobrazí příjemci.",
  ],
  mobileNote:
    "Aplikace PDF Editor pro Android rozpozná interaktivní pole a dovolí ti umístit text na neinteraktivní formuláře, pak podepsat a exportovat – funguje stejně bez ohledu na výrobce telefonu. Vše se odehrává v zařízení, takže se informace zadané do formuláře nikam nenahrávají.",
  faq: [
    {
      q: "Proč nemůžu psát do formuláře PDF na Androidu?",
      a: "Výchozí prohlížečka – často z Google Drive nebo náhled ve Files – pole formuláře často ignoruje. Stáhni formulář a otevři ho ve specializované aplikaci na PDF, aby se pole stala psatelnými. Neinteraktivní formuláře potřebují text umístěný navrch.",
    },
    {
      q: "Má Android vestavěný nástroj na vyplňování formulářů PDF?",
      a: "Ne jednotný. To, co je k dispozici, závisí na výrobci telefonu a jeho softwaru. Pro konzistentní výsledky na jakémkoli zařízení s Androidem použij specializovanou aplikaci na PDF.",
    },
    {
      q: "Jak vyplním naskenovaný formulář na Androidu?",
      a: "Naskenovaný formulář je neinteraktivní, takže si na stránku editorem PDF přidej vlastní text a zaškrtnutí a pak exportuj. Žádná pole, do kterých by šlo klepnout, tam nejsou.",
    },
    {
      q: "Je vyplňování formuláře PDF na Androidu soukromé?",
      a: "S aplikací PDF Editor probíhá vyplňování v zařízení, takže se tvé údaje nikam neposílají. Nástroje v prohlížeči, které soubor nahrávají, ho místo toho zpracují na serveru.",
    },
    {
      q: "Jak pošlu vyplněný formulář zpátky?",
      a: "Vyexportuj vyplněnou kopii a pošli ji přes nabídku sdílení Androidu e-mailem, přes Drive nebo aplikaci na zprávy. Nejdřív ji zafixuj, ať jsou odpovědi uzamčené.",
    },
  ],
  related: [
    {
      label: "Jak vyplnit formulář PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Jak vyplnit formuláře PDF na iPhonu",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Jak podepsat PDF na Androidu",
      path: "/guides/how-to-sign-pdf-on-android",
    },
    {
      label: "Nejlepší aplikace na formuláře PDF pro Android",
      path: "/guides/best-pdf-form-app-for-android",
    },
    { label: "Pracovní postup s formuláři PDF na mobilu", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
