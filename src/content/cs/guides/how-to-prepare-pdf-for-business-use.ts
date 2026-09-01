import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-for-business-use",
  h1: "Jak připravit PDF pro firemní použití (checklist úprav)",
  description:
    "Než PDF opustí firmu: odstraň návrhy, zkontroluj číslování stránek, oprav orientaci, vlož písma a zmenši soubor. Kontrolní seznam před odesláním dokumentů, které reprezentují tvou firmu.",
  updated: "2026-05-29",
  intro: [
    "PDF, které opustí tvou firmu, je malý vyslanec. Nese tvé jméno, tvůj branding, tvoje typografické volby a – až příliš často – původní název souboru jako „Dokument bez názvu (4).pdf“ od toho, kdo ho minulý týden jako první otevřel. Rozdíl mezi amatérským a profesionálním PDF bývá málokdy dramatický, ale skoro vždycky je vidět na první pohled.",
    "Připravit PDF pro firemní použití není jedna transformace; je to krátký kontrolní seznam. Odstraň návrhy, nastav správné číslování stránek, oprav orientaci, potvrď vložená písma, čistě označ, rozumně komprimuj, nastav užitečný název souboru. Každý krok zabere pár vteřin, celé to zabere minutu a dokument pak vypadá, jako bys to udělal záměrně.",
    "Tenhle návod projde kontrolní seznam v pořadí, které nejdřív zachytí nejvíc problémů – tak, jak bys to dělal pro skutečný výstup v běžné úterní odpoledne.",
  ],
  steps: [
    {
      title: "Odstraň nepoužité nebo návrhové stránky",
      body: "Extrahovat stránky z PDF ti nechá jen ty stránky, které skutečně chceš poslat. Titulní listy, co byly zástupné, prázdné poděkovací stránky, staré přílohy – to všechno by mělo z finální verze zmizet.",
    },
    {
      title: "Ověř pořadí a číslování stránek",
      body: "Změnit pořadí stránek v PDF, pokud po sloučení nebo revizi něco skončilo mimo pořadí. Zkontroluj, že viditelná čísla stránek odpovídají pořadí – čtenáři si neshodujícího se číslování všimnou rychle.",
    },
    {
      title: "Oprav orientaci",
      body: "Široké stránky (tabulky, grafy) patří na šířku; všechno ostatní na výšku. Otočit PDF narovná skeny nebo importy, které přišly na bok. Dokument se smíšenou orientací působí rozbitě, i když rozbitý není.",
    },
    {
      title: "Ujisti se, že jsou vložená písma",
      body: "Písma, která nejsou vložená, se na straně čtenáře nahradí, někdy špatně. Znovu exportuj ze zdroje se zapnutým „vložit všechna písma“, nebo použij tisk do PDF, čímž se vykreslení zafixuje.",
    },
    {
      title: "Nastav název souboru v metadatech",
      body: "Text zobrazený v záložkách prohlížeče a v záhlaví čtečky se často liší od názvu souboru. Nastav oboje záměrně – klienti si všimnou, když záložka „Nabídka“ ukazuje „Bez názvu.docx“.",
    },
    {
      title: "Zkomprimuj a pojmenuj pro doručení",
      body: "Zkomprimovat PDF dostane soubor pod typické limity e-mailu a portálů. Přejmenuj na JmenoKlienta_TypDokumentu_RRRR-MM-DD.pdf, aby příjemce soubor poznal ve své složce se staženými soubory i o rok později.",
    },
  ],
  tips: [
    "Než odešleš, projdi dokument jednou při přiblížení 100 %. Oko zachytí překvapení, která rychlé posouvání přehlédne.",
    "Přidej vodoznak k návrhům, ale nikdy k finálním verzím – nepřítomnost vodoznaku je sama o sobě signál, že jde o finální verzi.",
    "Odstraň stará metadata. Aplikace PDF Editor i opětovný export ti umožní nahradit autora, firmu a historii úprav, která by mohla uniknout z návrhů.",
    "Pokud má dokument pole formuláře určená k vyplnění, otestuj je na zařízení, kterému je posíláš. Řada polí funguje v Acrobatu, ale ne v prohlížečích.",
    "Naposledy zkontroluj náhled tisku. Pokud se tiskne špatně u tebe, narazí na stejný problém i příjemce.",
  ],
  mobileNote:
    "Poslední leštění – narovnání nakřivo naskenované stránky, odstranění zabloudivší stránky návrhu, opětovná komprese kvůli limitu e-mailu – se odehrává na telefonu častěji, než si lidé přiznají. Aplikace PDF Editor tohle všechno zvládne offline, takže výstup odejde čistý i z Wi-Fi v kavárně.",
  faq: [
    {
      q: "Který krok se přeskakuje nejčastěji?",
      a: "Nastavení metadat. Název souboru a titulek dokumentu, které se zobrazují v záložkách a hlavičkách čteček, bývají často zbytek z fáze návrhu. Oprav oboje před odesláním.",
    },
    {
      q: "Jak moc záleží na kompresi?",
      a: "Hodně, když je příjemce na přísném portálu nebo pomalém připojení. Míň u běžného interního sdílení. Jako výchozí volbu komprimuj – skoro nikdy to neuškodí.",
    },
    {
      q: "Musím vkládat písma do každého PDF?",
      a: "U všeho, co jde ke klientovi, ano. U interních návrhů, kde má každý nainstalovaná stejná písma, je to méně kritické. Cena vkládání je malá.",
    },
    {
      q: "Mám vždycky uvádět čísla stránek?",
      a: "U vícestránkových výstupů ano. U jednostránkových dokumentů ne. Čísla stránek pomáhají čtenáři orientovat se a potvrdit úplnost.",
    },
    {
      q: "Existuje nástroj, který zvládne tohle všechno na jeden zátah?",
      a: "Ne, a je to záměr – každý krok je vědomá volba, ne automatizovaná transformace. Nástroje v prohlížeči na tomhle webu ti umožní udělat každý krok během pár vteřin, aniž by je schovaly do černé skříňky.",
    },
  ],
  related: [
    { label: "PDF pro firmy – smlouvy a postupy", path: "/pdf-for-business" },
    { label: "Extrahovat stránky z PDF – doladit finální výstupy", path: "/extract-pdf-pages" },
    { label: "Jak sdílet PDF s klienty", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Jak připravit PDF před sdílením", path: "/guides/how-to-prepare-pdf-before-sharing" },
  ],
  parentHub: { label: "PDF pro firmy – smlouvy a postupy", path: "/pdf-for-business" },
};

export default content;
