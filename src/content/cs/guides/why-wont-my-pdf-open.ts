import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-wont-my-pdf-open",
  h1: "Proč se mi neotevře PDF? Příčiny a praktická řešení",
  description:
    "PDF, které se odmítá otevřít, má skoro vždy jednu z pěti příčin. Jak rozpoznat poškozené stažení, zámek heslem, chybu prohlížeče nebo zastaralý soubor – a co na každou z nich zabírá.",
  updated: "2026-05-29",
  intro: [
    "Dvakrát klikneš na PDF a nic se nestane. Nebo prohlížeč vyhodí chybu, zamrzne, nebo vyskočí okno na heslo, které jsi nečekal. PDF by prostě měla fungovat, a většinou fungují – takže když se to jednou nepovede, vyplatí se znát krátký seznam možných příčin.",
    "Za tvrdohlavým PDF stojí ve skutečnosti jen hrstka příčin: stahování se nedokončilo, soubor je chráněný heslem, prohlížeč neodpovídá verzi PDF, soubor vznikl vadným exportem, nebo jde o formát, který jen vypadá jako PDF. Každá z nich má konkrétní, opakovatelné řešení.",
    "Tenhle návod projde diagnózy jednu po druhé v pořadí, ve kterém se vyplatí je kontrolovat, se správným nástrojem na každou. Většina řešení spočívá v rozpoznání, o který problém jde, ne v naučení se nějakého pokročilého triku.",
  ],
  steps: [
    {
      title: "Nejdřív soubor stáhni znovu",
      body: "Přerušené stažení je zdaleka nejčastější důvod, proč se PDF neotevře. Nové stažení to vyřeší během vteřin. Pokud selže i tak, ale velikost souboru odpovídá zdroji a zdroj ho sám otevře, přerušené stažení jsi vyloučil.",
    },
    {
      title: "Zkontroluj, jestli je chráněné heslem",
      body: "Některé prohlížeče místo výzvy k heslu vyhodí obecnou chybu. Pokud soubor přišel z banky, od zaměstnavatele nebo od právní firmy, počítej s tím, že heslo má. Zná ho ten, kdo ti ho poslal.",
    },
    {
      title: "Zkus jiný prohlížeč PDF",
      body: "Prohlížeče, Náhled na macOS, Adobe Acrobat i mobilní čtečky interpretují PDF mírně odlišně. Soubor, který jeden prohlížeč odmítá, se v jiném často otevře bez problémů. Pokud funguje v záložce prohlížeče, ale ne v desktopové aplikaci, jde o neshodu verzí prohlížeče, ne o rozbitý soubor.",
    },
    {
      title: "Zkontroluj skutečný typ souboru",
      body: "Soubory z e-mailu nebo chatu někdy nesou příponu .pdf, ale ve skutečnosti jde o .docx, .html, obrázek nebo ZIP archiv. Otevření v obyčejném textovém editoru odhalí prvních pár bajtů. Skutečné PDF začíná %PDF-. Cokoli jiného znamená přejmenovat, nebo si vyžádat soubor znovu.",
    },
    {
      title: "Oprav přes zpětný export",
      body: "Pokud je soubor technicky v pořádku, ale poškozený nenápadným způsobem, otevření v prohlížeči, který ho ještě umí zobrazit, a jeho tisk do PDF nebo opětovný export často vytvoří čistou kopii. Některé zdeformované objekty se přepíšou a nový soubor se otevře všude.",
    },
    {
      title: "Zmenši jeho velikost, pokud je limitem paměť",
      body: "Na starších telefonech se velmi velká, skeny plná PDF nemusí otevřít vůbec. Zkomprimovat PDF v prohlížeči soubor rovnou zmenší; komprimovaná kopie se otevře tam, kde se originál neotevřel.",
    },
  ],
  tips: [
    "Porovnej velikost staženého souboru s tím, co uvedl odesílatel. Neshoda přímo ukazuje na přerušené stažení.",
    "Pokud prohlížeč PDF otevře, ale desktopová aplikace ne, nastav si pro teď otevírání v prohlížeči jako výchozí – nic tím neztratíš a jdeš dál.",
    "Soubor, který se otevře na telefonu, ale selže na notebooku (nebo naopak), je obvykle problém verze prohlížeče, ne poškozený soubor. Vyber prohlížeč, který funguje.",
    "Když e-mailové přílohy PDF opakovaně selhávají, zkus je stáhnout přes webmailové rozhraní místo desktopového klienta – klienti někdy velké přílohy ořežou.",
    "Před opravnými zpětnými exporty si ulož originály. Špatný opětovný export může ztratit pole formuláře nebo anotace, které originál měl.",
  ],
  mobileNote:
    "Na telefonu bývá nejčastějším viníkem částečné stažení přes nestabilní mobilní data. Aplikace PDF Editor ukládá soubory lokálně a umožní ti znovu stáhnout a otevřít velká PDF, aniž bys byl závislý na cache prohlížeče, kde k přerušení nejčastěji dochází.",
  faq: [
    {
      q: "Proč moje PDF hlásí, že je poškozené, když odesílatel tvrdí, že je v pořádku?",
      a: "Skoro vždy jde o částečné stažení. Stáhni soubor znovu; zkontroluj, jestli velikost v bajtech odpovídá tomu, co sdílel odesílatel. Pokud se nová kopie otevře, byla ta původní neúplná.",
    },
    {
      q: "Můj prohlížeč žádá heslo, které nemám. Co teď?",
      a: "Sdílet ho může jen původní odesílatel. Neexistuje bezpečný způsob, jak skutečné heslo PDF obejít ze strany příjemce, a nástrojům, které to slibují, je lepší se vyhnout.",
    },
    {
      q: "Proč se to otevře v Chrome, ale ne v Acrobatu?",
      a: "Starší desktopové prohlížeče nemusí podporovat novější funkce PDF. Buď dál používej prohlížeč, který funguje, nebo soubor znovu exportuj přes tisk do PDF, čímž vznikne kompatibilní kopie.",
    },
    {
      q: "Existuje nástroj, který PDF prostě „opraví“?",
      a: "Někdy – proběhnutí souboru opětovným exportem (otevřít, tisk do PDF, uložit) vyčistí drobné strukturální problémy. Ale vážně poškozená PDF bývají obvykle nenávratná.",
    },
    {
      q: "Pomáhá komprese u souborů, které se neotevřou?",
      a: "Jen pokud je příčinou paměť: obří, skeny plná PDF na starších telefonech někdy selžou. Zkomprimovat PDF je zmenší natolik, aby se dala načíst. Strukturálně rozbitý soubor tím neopravíš.",
    },
  ],
  related: [
    { label: "Zkomprimovat PDF – zmenši velké soubory, které se neotevřou", path: "/compress-pdf" },
    { label: "PDF nástroje – kompletní přehled řešení v prohlížeči", path: "/pdf-tools" },
    { label: "Jak opravit poškozené PDF", path: "/guides/how-to-fix-a-corrupted-pdf" },
    { label: "Jak vyřešit problémy s formátováním PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
  ],
  parentHub: { label: "PDF nástroje – bezplatné, v prohlížeči", path: "/pdf-tools" },
};

export default content;
