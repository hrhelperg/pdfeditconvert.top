import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-a-completed-pdf-form",
  h1: "Jak odeslat vyplněný formulář PDF (zafixovat a doručit)",
  description:
    "Formulář máš vyplněný – teď ho vrať čistě. Jak ho zafixovat, aby se odpovědi nedaly změnit, jak ho správně přiložit a jak si potvrdit, že dorazil bez ztráty dat.",
  updated: "2026-06-01",
  intro: [
    "Vyplnění formuláře je jen polovina práce; dostat ho zpátky k odesílateli nedotčený je ta druhá polovina. Tohle je zpáteční cesta – vyplnil jsi formulář, který ti někdo poslal, a teď ho potřebuješ doručit tak, aby tvé odpovědi dorazily přesně tak, jak jsi je zadal, nemohly se omylem smazat a dorazily ve formátu, který příjemce skutečně otevře.",
    "Dvě věci se tady běžně pokazí: odpovědi po cestě zmizí (protože se data polí neuložila nebo nezafixovala) a soubor dorazí jako nešikovná fotka obrazovky. Oběma se dá předejít pár rozmyšlenými kroky ještě předtím, než stiskneš odeslat. Zafixovaná příloha PDF je skoro vždycky ta správná odpověď.",
    "Tenhle návod pokrývá přípravu vyplněného formuláře, výběr způsobu odeslání a drobná ověření, díky kterým ušetříš kolo e-mailů typu „formulář se mi vrátil prázdný“.",
  ],
  steps: [
    {
      title: "Proveď závěrečnou kontrolu každé odpovědi",
      body: "Projeď celý formulář ještě jednou a hledej prázdná povinná pole, datum a svůj podpis. Odhalit chybějící políčko teď je mnohem levnější než potom, co se ti formulář vrátí zpátky.",
    },
    {
      title: "Ulož vyplněnou kopii správně",
      body: "Exportuj nebo ulož tak, aby se hodnoty polí zapsaly do souboru. Pokud odpovědi nepřežijí zavření a znovuotevření, nástroj jen tiskl – přepni na takový, který ukládá data formuláře.",
    },
    {
      title: "Zafixuj, aby se odpovědi uzamkly",
      body: "Hotový formulář před odesláním zafixuj. Tím se tvé odpovědi slijí se stránkou, takže je prohlížeč příjemce nemůže upravit ani smazat, a všude se zobrazí stejně.",
    },
    {
      title: "Přilož PDF přímo",
      body: "Pošli zafixované PDF jako běžnou přílohu e-mailu, nebo ho nahraj na portál, který odesílatel uvedl. Nepřidávej snímek obrazovky nebo fotku formuláře, pokud výslovně nejde přesně o to.",
    },
    {
      title: "Potvrď odeslání a ponech si kopii",
      body: "Poznamenej si, že jsi formulář odeslal, a ponech si vlastní kopii hotového souboru. Pokud jde na portál, sleduj potvrzení na obrazovce nebo v e-mailu, že nahrání proběhlo úspěšně.",
    },
  ],
  tips: [
    "Zafixování je zdaleka nejlepší návyk pro vracení formulářů – zaručí, že se tvé odpovědi příjemci skutečně zobrazí.",
    "Pojmenuj soubor smysluplně, třeba „novak-zadost-vyplnena.pdf“, ať ho příjemce může založit bez přejmenování.",
    "Pokud portál soubor odmítne kvůli velikosti, radši ho zkomprimuj, než abys znovu vyplňoval odpovědi – obsah zůstane netknutý.",
    "Ponech si vlastní vyplněnou kopii; pokud vznikne spor nebo se bude něco doplňovat, budeš chtít přesně tu verzi, kterou jsi poslal.",
    "Požadavky úřadů a firem se liší, takže se řiď konkrétními pokyny k odeslání od odesílatele víc než těmito obecnými kroky.",
  ],
  mobileNote:
    "Na telefonu aplikace PDF Editor vyexportuje zafixovanou vyplněnou kopii, kterou pošleš rovnou z nabídky sdílení – e-mailem, na portál, nebo zprávou – s odpověďmi natrvalo uzamčenými na stránce. Funguje to v zařízení, takže osobní údaje z formuláře zůstávají při odesílání v soukromí.",
  faq: [
    {
      q: "Jak zajistím, aby mi při odeslání formuláře nezmizely odpovědi?",
      a: "Ulož tak, aby se hodnoty polí zapsaly do souboru, a formulář před odesláním zafixuj. Zafixování slije tvé odpovědi se stránkou, takže se nedají smazat a v žádném prohlížeči se nezobrazí jinak.",
    },
    {
      q: "Mám vyplněný formulář před odesláním e-mailem zafixovat?",
      a: "Ano, skoro vždycky. Jakmile jsi s úpravami hotový, zafixování odpovědi uzamkne a zabrání prohlížeči příjemce, aby je smazal nebo pozměnil.",
    },
    {
      q: "Je v pořádku poslat fotku vyplněného formuláře?",
      a: "Jen pokud je to výslovně to, o co si někdo řekl. Zafixované PDF je čistší, čitelnější a snáz se archivuje. Fotky obrazovek nebo výtisků často dorazí zkosené nebo v nízké kvalitě.",
    },
    {
      q: "Co když portál na nahrávání můj formulář odmítne?",
      a: "Obvykle jde o limit velikosti nebo formátu. Zkomprimuj PDF nebo zkontroluj přijímané formáty – vyplňovat znovu nemusíš. Obsah po kompresi zůstane stejný.",
    },
    {
      q: "Mám si ponechat kopii toho, co jsem odeslal?",
      a: "Ano. Ponech si vlastní vyplněnou kopii pro případ doplňujících otázek nebo žádosti o opětovné odeslání, ať můžeš poslat přesně tu verzi, kterou jsi odevzdal.",
    },
  ],
  related: [
    {
      label: "Jak uložit vyplněný formulář PDF",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "Jak vyplnit formulář PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Jak sdílet formulář PDF",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Chyby při odeslání formuláře PDF",
      path: "/guides/pdf-form-submission-errors",
    },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
