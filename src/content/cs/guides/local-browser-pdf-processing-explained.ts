import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "local-browser-pdf-processing-explained",
  h1: "Jak funguje lokální zpracování PDF v prohlížeči",
  description:
    "Jak může PDF nástroj běžet v prohlížeči, aniž by tvůj soubor kamkoli posílal. Technologie, kompromisy a jak si ověřit, že nástroj je opravdu lokální.",
  updated: "2026-05-29",
  intro: [
    "Lidi překvapuje, že záložka prohlížeče dokáže zkomprimovat PDF, sloučit dva soubory nebo vytáhnout stránky z dvousetstránkového dokumentu – a to všechno bez nahrání čehokoli na server. Prohlížeč působí jako okno do internetu, ne jako místo, kde se odehrává náročná práce. Moderní prohlížeče ale zvládnou spustit spoustu kódu přímo na tvém počítači a zpracování PDF se ukazuje jako přesně ten typ práce, který se tam hodí.",
    "Technologie za lokálními PDF nástroji v prohlížeči je JavaScript a WebAssembly běžící přímo v tvém prohlížeči, pracující rovnou se souborem, který zadáš. Soubor přečte JavaScript, přemění ho v paměti tvého prohlížeče a zapíše zpátky do nového souboru, který si stáhneš – bez jakéhokoli síťového volání, které by neslo obsah tvého souboru.",
    "Tenhle návod vysvětluje, jak to skutečně funguje, proč je to bezpečné ve výchozím stavu, jaká jsou omezení (nějaká skutečná existují) a jak si ověřit, že nástroj, o kterém uvažuješ, je opravdu lokální. Nic exotického; technologie je vyzrálá.",
  ],
  steps: [
    {
      title: "Pochop základní tok",
      body: "Přetáhneš soubor na stránku. JavaScript ho přečte do paměti prohlížeče. Kód v JavaScriptu nebo WebAssembly ho přemění (zkomprimuje, sloučí, rozdělí). Výsledek se zapíše zpátky do nového souboru, který si stáhneš. Žádné nahrávání, žádný kontakt se serverem kvůli samotnému souboru.",
    },
    {
      title: "Věz, co to dělá soukromým",
      body: "Server dodá JavaScriptový kód (samotný nástroj), ale nikdy nevidí data, se kterými kód pracuje. Stejná záložka prohlížeče, která nástroj stáhne, ho pak spustí lokálně na tvém souboru. Architektura odděluje doručení kódu od zpracování dat.",
    },
    {
      title: "Ověř to pomocí vývojářských nástrojů prohlížeče",
      body: "Otevři vývojářské nástroje, panel Síť, přetáhni tam svůj soubor. Skutečně lokální nástroj neukáže žádný velký odchozí požadavek při přidání souboru. Nahrávající nástroj pošle soubor jako víceMB POST požadavek. Rozdíl je vidět.",
    },
    {
      title: "Uznej si upřímně omezení",
      body: "Lokální zpracování je omezené pamětí a procesorem tvého prohlížeče. Velmi velké soubory (stovky stránek, gigabajty) můžou uvíznout; pokročilé operace (plnohodnotné OCR na dlouhých dokumentech) občas potřebují pomoc serveru. Nástroje v prohlížeči jsou nejlepší pro běžnou práci.",
    },
    {
      title: "Zkontroluj, že žádná telemetrie neuniká data",
      body: "Některé nástroje logují analytické události s metadaty (počet stránek, velikost souboru). To je něco jiného než únik obsahu – a analytika je vidět ve stejném panelu Síť. Rozlišuj obsah od metadat.",
    },
    {
      title: "Ber prohlížeč jako hranici důvěry",
      body: "Jakmile je tvůj soubor v záložce prohlížeče, pořád je na tvém zařízení. Nástroje na tomto webu tuhle vlastnost využívají: pracují přímo v záložce a tvůj soubor nikdy neposílají ven, takže soukromí přichází samo od sebe.",
    },
  ],
  tips: [
    "WebAssembly odbaví náročnou část zpracování PDF v moderních prohlížečích – rychlost je téměř nativní, a proto lokální PDF nástroje výkonově dohnaly desktopové aplikace.",
    "Zavření záložky prohlížeče vymaže soubor z paměti. Lokální nástroje po sobě nenechávají žádnou kopii.",
    "Lokální nástroje fungují offline, jakmile se stránka jednou načte – užitečné potvrzení, že se soubor nikam nenahrává.",
    "Tvrzení o soukromí by měla jít ověřit. Vývojářské nástroje jsou to ověření; nemusíš marketingovému textu věřit na slovo.",
    "„V prohlížeči“ neznamená totéž co „bez serveru“. Některé nástroje popsané jako „v prohlížeči“ tvůj soubor pořád nahrávají – jen rozhraní je v prohlížeči. Zkontroluj síťový provoz.",
  ],
  mobileNote:
    "Mobilní prohlížeče spouští stejné lokální nástroje v JavaScriptu a WebAssembly jako desktopové prohlížeče. Aplikace PDF Editor používá podobnou architekturu: veškeré zpracování probíhá přímo na zařízení, bez nahrávání, takže uživatelé iPhonu i Androidu mají stejné záruky ohledně soukromí.",
  faq: [
    {
      q: "Jak probíhá zpracování PDF v prohlížeči?",
      a: "JavaScript a WebAssembly přečtou tvůj soubor do paměti záložky prohlížeče, přemění ho a výsledek zapíšou zpátky do stažení. Server dodá kód, ale soubor nikdy neuvidí.",
    },
    {
      q: "Je lokální zpracování v prohlížeči opravdu soukromé?",
      a: "Ano, díky architektuře. Soubor záložku neopustí. Jediný způsob, jak by lokální nástroj mohl uniknout, by byla chyba nebo skryté nahrávání – což by ukázaly vývojářské nástroje.",
    },
    {
      q: "Jak velký soubor to zvládne?",
      a: "Moderní prohlížeče pohodlně zvládnou PDF až do velikosti pár set megabajtů. Nad to už můžeš narazit na limity paměti podle zařízení.",
    },
    {
      q: "Funguje tohle offline?",
      a: "Ano, jakmile se stránka jednou načte. Zpracování probíhá lokálně; síť není potřeba. To je užitečný test, že je nástroj opravdu lokální.",
    },
    {
      q: "Proč nefunguje takhle každý PDF nástroj?",
      a: "Některé operace (skutečné OCR na dlouhých dokumentech, určité typy komprese) jsou pořád rychlejší na serveru. Mnoho nástrojů také závisí na obchodním modelu založeném na straně serveru. Nástroje v prohlížeči se pro většinu běžných úloh staly životaschopnou alternativou.",
    },
  ],
  related: [
    { label: "PDF nástroje — v prohlížeči, bez nahrávání", path: "/pdf-tools" },
    { label: "PDF nástroje v prohlížeči vs nástroje s nahráváním", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Výhody zpracování dokumentů v prohlížeči", path: "/guides/browser-based-document-processing-benefits" },
    { label: "Jsou online PDF nástroje bezpečné?", path: "/guides/are-online-pdf-tools-safe" },
  ],
  parentHub: { label: "PDF nástroje — bezplatně, v prohlížeči", path: "/pdf-tools" },
};

export default content;
