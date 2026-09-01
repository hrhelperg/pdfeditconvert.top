import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "fix-pdf-form-errors",
  h1: "Oprav chyby ve formuláři PDF – rychlá první pomoc",
  description:
    "Univerzální první pomoc pro formulář PDF, který zlobí: zkus jiný prohlížeč, stáhni soubor znovu, aktualizuj aplikaci, přidej text navrch, zafixuj. Projdi tyto kroky, než se pustíš do konkrétní příčiny.",
  updated: "2026-06-01",
  intro: [
    "Když formulář zlobí a ty ho chceš prostě mít hotový, existuje krátká sekvence oprav, která vyřeší většinu problémů bez ohledu na přesnou příčinu. Tohle je kontrolní seznam první pomoci – věci, které vyzkoušet v pořadí, ještě než začneš diagnostikovat konkrétní problém. Většina chyb formulářů spadne pod jeden z těchhle pěti kroků a projít jimi zabere pár minut.",
    "Ber to jako doplněk k diagnostice přesného příznaku. Pokud chceš radši přesně určit, jestli jde o chybějící pole, problém s ukládáním, nebo uzamčení jen pro čtení, nasměruje tě tam třídicí návod. Ale často je nejrychlejší cesta prostě projít tyhle univerzální kroky, a formulář se začne chovat.",
    "Každý krok cílí na širokou třídu problému – neshody prohlížeče, neúplné soubory, zastaralý software, uzamčené nebo neinteraktivní formuláře a nekonzistentní ukládání. Projdi je shora dolů a zastav se, jakmile formulář funguje.",
  ],
  steps: [
    {
      title: "Otevři ho ve specializované aplikaci na PDF",
      body: "Jediná oprava s nejvyšším přínosem. Náhledy v e-mailu, karty v prohlížeči a základní prohlížečky způsobují většinu chyb formulářů tím, že ignorují vrstvu polí. Plnohodnotná aplikace na PDF sama vyřeší velkou část problémů.",
    },
    {
      title: "Stáhni si čerstvou kopii znovu",
      body: "Částečné nebo přerušené stažení může způsobit chybějící pole, prázdné stránky nebo chyby „poškozený soubor“. Stáhni formulář znovu ze zdroje a znovu otevři kompletní kopii, než usoudíš, že jde o hlubší problém.",
    },
    {
      title: "Aktualizuj svůj software na PDF",
      body: "Zastaralý prohlížeč nemusí vykreslit novější funkce formuláře. Aktualizace na aktuální verzi, nebo přechod na dobře udržovanou aplikaci na PDF, vyřeší chyby ve stylu kompatibility, které ve skutečnosti nejsou o souboru.",
    },
    {
      title: "Přidej svůj text navrch",
      body: "Pokud je formulář neinteraktivní, uzamčený, nebo prostě nespolupracuje, umísti vlastní text a zaškrtnutí přímo na stránku editorem PDF. Tohle univerzální řešení dokončí skoro jakýkoli formulář bez ohledu na skutečnou příčinu.",
    },
    {
      title: "Ulož správně a zafixuj",
      body: "Aby odpovědi nemizely, ulož nástrojem, který zapisuje data polí, a pak vyplněný formulář zafixuj. Zafixování uzamkne tvé odpovědi do stránky, ať se všude spolehlivě zobrazí, vytisknou i odešlou.",
    },
  ],
  tips: [
    "Projdi kroky v pořadí a zastav se, jakmile to zafunguje – většina formulářů se spraví hned na prvním nebo druhém kroku.",
    "Otevření souboru v pořádné aplikaci na PDF je jednotlivý krok s nejvyšším přínosem u skoro jakékoli chyby formuláře.",
    "Přidání textu navrch je univerzální únikový východ, když formulář nespolupracuje a ty ho prostě potřebuješ mít hotový.",
    "Zafixování na konci předchází nejčastějším problémům po dokončení: zmizelým odpovědím a prázdným výtiskům.",
    "Pokud nic z tohohle nezabere, formulář možná používá nepodporované funkce – podívej se do návodu o kompatibilitě, nebo požádej vydavatele o standardní verzi.",
  ],
  mobileNote:
    "Na telefonu je tenhle kontrolní seznam rychlý: otevři formulář v aplikaci PDF Editor místo náhledu v e-mailu, vyplň pole nebo přidej text navrch, pak zafixuj a exportuj. Samotné tyhle kroky vyřeší většinu chyb mobilních formulářů, vše v zařízení bez nahrávání.",
  faq: [
    {
      q: "Jaký je nejrychlejší způsob, jak opravit formulář PDF, který zlobí?",
      a: "Otevři ho ve specializované aplikaci na PDF místo náhledu v e-mailu nebo prohlížeči. Tohle vyřeší největší podíl chyb formulářů, které bývají obvykle neshodou prohlížeče, ne vadou souboru.",
    },
    {
      q: "Formulář ani po přepnutí aplikace pořád nefunguje – co dál?",
      a: "Stáhni si čerstvou kopii znovu, aktualizuj svůj software na PDF, a pokud je pořád tvrdohlavý, přidej text přímo navrch na stránku. Tenhle ruční přístup dokončí skoro jakýkoli formulář bez ohledu na příčinu.",
    },
    {
      q: "Jak zabráním tomu, aby mi mizely odpovědi?",
      a: "Ulož nástrojem, který zapisuje data polí formuláře, a pak vyplněný formulář zafixuj. Zafixování slije tvé odpovědi se stránkou, ať se neztratí při znovuotevření, tisku nebo odesílání.",
    },
    {
      q: "Mám použít tenhle kontrolní seznam, nebo diagnostikovat konkrétní problém?",
      a: "Funguje obojí. Tenhle kontrolní seznam rychle spraví většinu chyb bez diagnostiky. Pokud chceš radši přesně určit příčinu – chybějící pole, neukládá se, jen pro čtení – začni místo toho tříděním problémů s formulářem.",
    },
    {
      q: "Co když mi nic z tohohle nepomůže?",
      a: "Formulář možná používá pokročilé funkce, které tvůj software nezvládne. Podívej se do návodu o kompatibilitě, nebo požádej toho, kdo ho poslal, o standardní PDF nebo neinteraktivní tisknutelnou verzi, kterou zvládneš dokončit.",
    },
  ],
  related: [
    { label: "Formulář PDF nefunguje", path: "/guides/pdf-form-not-working" },
    {
      label: "Chybí pole ve formuláři PDF",
      path: "/guides/pdf-form-fields-missing",
    },
    {
      label: "Problémy s kompatibilitou formuláře PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    {
      label: "Proč se formulář PDF neukládá",
      path: "/guides/why-pdf-form-wont-save",
    },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
