import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "mobile-pdf-form-workflow",
  h1: "Pracovní postup s formuláři PDF na mobilu (od přijetí po odeslání)",
  description:
    "Opakovatelná rutina pro formuláře, kterou zvládneš celou na telefonu: přijetí, otevření ve správné aplikaci, vyplnění, podpis, zafixování, odeslání. Kompletní postup, na který nepotřebuješ počítač.",
  updated: "2026-06-01",
  intro: [
    "Formuláře patří mezi úlohy s PDF, které jsou opravdu stavěné na telefon. Dorazí e-mailem, vyplníš je v ruce a stejnou cestou se vrátí zpátky – bez počítače v jediném kroku. Trik není v žádném konkrétním nástroji; je v tom mít opakovatelnou rutinu, díky které každý formulář, interaktivní nebo neinteraktivní, projde stejnou cestou od schránky po odeslání.",
    "Tenhle návod rozloží tenhle postup od začátku do konce. Záměrně jde pokaždé o stejných pět kroků: dostat formulář do schopné aplikace, vyplnit ho, podepsat, zafixovat, odeslat. Jakmile se z toho stane automatismus, formulář, který dřív znamenal „počkám, až budu u stolu“, se promění v dvouminutovou záležitost mezi ostatními věcmi.",
    "Funguje to na oba typy formulářů. Interaktivní klepneš a napíšeš do nich; na neinteraktivní skeny dopisuješ navrch. Postup se nemění – přizpůsobí se jen krok s vyplňováním.",
  ],
  steps: [
    {
      title: "Přijmi a zachyť formulář",
      body: "Když formulář dorazí e-mailem nebo zprávou, ulož ho někam, kde ho máš pod kontrolou – do Files nebo úložiště telefonu – místo práce uvnitř náhledu, který může pole formuláře ignorovat.",
    },
    {
      title: "Otevři ho ve schopné aplikaci na formuláře",
      body: "Otevři uložený soubor v aplikaci PDF Editor. Rozpozná interaktivní pole, pokud jsou přítomná, a dovolí ti přidat text na neinteraktivní formuláře, pokud nejsou. Tenhle jediný krok tě zbaví většiny slepých uliček typu „nejde mi psát“.",
    },
    {
      title: "Vyplň podle typu formuláře",
      body: "Klepni a piš do interaktivních polí, nebo umísti text a zaškrtnutí na neinteraktivní formulář. Kvůli přesnosti si přibliž zobrazení, postupuj shora dolů a nepřeskakuj povinná pole.",
    },
    {
      title: "Podepiš ve stejné relaci",
      body: "Přidej svůj uložený podpis do prostoru na podpis, aniž bys přepínal aplikace. Uděláš-li to na jeden zátah, nemusíš exportovat, znovu otevírat a všechno znovu umísťovat.",
    },
    {
      title: "Zafixuj a pošli",
      body: "Zafixuj vyplněný formulář, ať se odpovědi uzamknou, a pak ho pošli z nabídky sdílení – e-mailem, na portál, nebo zprávou. Prázdný originál si ponech na příště.",
    },
  ],
  tips: [
    "Celý smysl je v opakovatelnosti: stejných pět kroků u každého formuláře, ať se z toho přestane stávat rozhodování a stane se to zvykem.",
    "Formuláře ulož mimo náhledy v e-mailu ještě před vyplňováním – právě tenhle jeden krok předchází nejčastější frustraci s formuláři na mobilu.",
    "Vyplň a podepiš v jedné relaci, ať se vyhneš opětovnému importu a přerovnávání odpovědí.",
    "Zafixuj před odesláním, ať příjemce vidí tvé odpovědi přesně tak, jak jsi je zadal.",
    "Drž si složku „formuláře“ s prázdnými hlavními verzemi, ať je opětovné vyplnění vždy čerstvá, čistá kopie.",
  ],
  mobileNote:
    "Aplikace PDF Editor je stavěná přesně na tenhle koloběh: rozpoznat pole, vyplnit, podepsat, zafixovat, exportovat – vše v zařízení, nic se nikam nenahrává. Protože každý krok žije v jedné aplikaci, celý postup od přijetí po odeslání proběhne, aniž bys jedinkrát sáhl po notebooku.",
  faq: [
    {
      q: "Dá se formulář PDF opravdu celý dokončit na telefonu?",
      a: "Ano. Formuláře dorazí e-mailem a stejnou cestou se vrací, a schopná aplikace na PDF zvládne vyplnění, podpis, zafixování i export – celý postup tak nepotřebuje počítač.",
    },
    {
      q: "Mění se postup pro neinteraktivní a interaktivní formuláře?",
      a: "Mění se jen krok s vyplňováním. Do interaktivních formulářů klepneš a píšeš; na neinteraktivní umístíš text navrch. Přijetí, podpis, zafixování a odeslání jsou u obou totožné.",
    },
    {
      q: "Proč otevírat formuláře v samostatné aplikaci místo e-mailu?",
      a: "Náhledy v e-mailu a jednoduché prohlížečky často ignorují pole formuláře, takže se zdá, že psaní není možné. Otevření uloženého souboru ve specializované aplikaci na PDF pole aktivuje a téhle slepé uličce se vyhne.",
    },
    {
      q: "Proč zafixovat před odesláním?",
      a: "Zafixování slije tvé odpovědi se stránkou, takže je prohlížeč příjemce nemůže smazat ani upravit, a všude se zobrazí konzistentně.",
    },
    {
      q: "Je pracovní postup s formuláři na mobilu soukromý?",
      a: "S aplikací PDF Editor probíhá každý krok v zařízení, takže se zadané osobní údaje nikam nenahrávají. Při odesílání citlivých formulářů použij oficiální kanál příjemce.",
    },
  ],
  related: [
    {
      label: "Jak vyplnit formuláře PDF na iPhonu",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Jak vyplnit formuláře PDF na Androidu",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "Jak odeslat vyplněný formulář PDF",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "Jak podepsat PDF na telefonu",
      path: "/guides/how-to-sign-pdf-on-phone",
    },
    { label: "PDF Editor – vyplnit a podepsat", path: "/pdf-editor" },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
