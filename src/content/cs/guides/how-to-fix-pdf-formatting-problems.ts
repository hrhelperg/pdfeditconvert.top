import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-formatting-problems",
  h1: "Jak vyřešit problémy s formátováním PDF (zalamování, okraje, mezery)",
  description:
    "Když rozvržení PDF vypadá rozbité – přeteklý text, posunuté okraje, pomíchané mezery – řešení obvykle leží ve zdrojovém dokumentu, ne v PDF. Nejčistší postup, jak dosáhnout hezky vypadajícího exportu.",
  updated: "2026-05-29",
  intro: [
    "Špatné formátování PDF se skoro vždycky dá vystopovat zpátky k okamžiku exportu. Samotné PDF nic nepřeuspořádá – zamkne stránku přesně tak, jak vypadala v okamžiku uložení. Takže pokud jsou mezery špatně, okraje posunuté nebo se tabulka rozlomila mezi stránkami, zdrojový soubor už tenhle výsledek produkoval.",
    "Řešením je skoro vždycky vrátit se ke zdroji – Word, Pages, Google Docs, grafický nástroj – upravit rozvržení a znovu exportovat. To je frustrující, když zdroj není tvůj, ale je to nejčistší cesta. Alternativy – převod do Wordu, přímá úprava PDF, nebo „oprava“ jiným prohlížečem – každá z nich ztratí něco, co originál měl.",
    "Tenhle návod projde běžné příznaky formátování a reálné řešení pro každý z nich, včetně postupů, které hned napoprvé vytvoří čistá PDF.",
  ],
  steps: [
    {
      title: "Zjisti, jestli jde o problém obsahu, nebo vykreslení",
      body: "Otevři PDF ve dvou různých prohlížečích. Pokud oba ukážou stejné rozbité rozvržení, zdrojem problému je soubor. Pokud jeden ho zobrazí správně, jde o problém prohlížeče, ne formátování.",
    },
    {
      title: "Oprav rozvržení ve zdrojovém dokumentu, ne v PDF",
      body: "Otevři soubor Word, Pages nebo Docs, oprav okraje, mezery nebo tabulku, pak znovu exportuj do PDF. Opravený zdroj vytvoří přímo opravené PDF. Úprava PDF kvůli záplatování rozvržení jde proti formátu.",
    },
    {
      title: "Znovu exportuj s výslovně zadanou velikostí papíru",
      body: "Nastavení automatického přizpůsobení často přinášejí překvapení. Ve zdrojové aplikaci nastav velikost papíru (Letter nebo A4), okraje (2,5 cm) a orientaci výslovně, než exportuješ.",
    },
    {
      title: "Do Wordu převáděj jen pro rozsáhlé přepisy textu",
      body: "PDF do Wordu v prohlížeči vytáhne text k opětovné úpravě. Převod ztratí část rozvržení – ber to jako cenu za návrat úpravy textu. Po vyčištění znovu exportuj do PDF kvůli sdílení.",
    },
    {
      title: "Na strukturální opravy použij nástroje na úrovni stránek",
      body: "Pokud jsou špatně jen některé stránky – přeházený sken, duplicitní titulní stránka, vložka na bok – Změnit pořadí stránek v PDF, Extrahovat stránky z PDF a Otočit PDF opraví strukturu, aniž by se dotkly formátování textu.",
    },
    {
      title: "Před sdílením znovu exportuj do PDF",
      body: "Jakmile je rozvržení ve zdroji opravené, exportuj znovu od začátku, místo abys znovu ukládal existující PDF. Nejčistší export přichází přímo z aplikace, která dokument vytvořila.",
    },
  ],
  tips: [
    "Náhled tisku ve Wordu nebo Pages ukáže stejné chování zalomení stránek, jaké bude mít PDF. Špatná zalomení oprav před exportem, ne po něm.",
    "Tabulky, které se rozlamují nešikovně, jsou problém formátování odstavců ve zdroji, ne problém PDF. Použij „udržet s dalším“, aby se hlavička tabulky držela svého obsahu.",
    "Neotvírej PDF ve Wordu kvůli úpravám – Word ho převede, často špatně. Použij originální zdroj, pokud ho máš, nebo PDF do Wordu jen tehdy, když ho nemáš.",
    "Vložený obsah z webu s sebou často nese skryté formátování. Před exportem ho odstraň (vlož jako čistý text), abys předešel překvapivým okrajům a barvám v PDF.",
    "Pokud máš jen PDF a nemůžeš se vrátit ke zdroji, počítej s tím, že úklid rozvržení bude jen částečný. Upřednostni změny, kterých si čtenář všimne nejdřív.",
  ],
  mobileNote:
    "Problémy s formátováním PDF na mobilu často pocházejí z dokumentů vytvořených na desktopu a exportovaných se špatným cílovým papírem. Aplikace PDF Editor ti umožní otáčet, přeuspořádat a ořezávat stránky z telefonu – užitečné pro úklid strukturálních problémů i tehdy, když zdroj opravit nemůžeš.",
  faq: [
    {
      q: "Proč moje PDF vypadá jinak než verze ve Wordu?",
      a: "Obvykle kvůli písmům, velikosti papíru nebo nastavení tiskové oblasti při exportu. Opětovný export s výslovnou velikostí papíru a vloženými písmy vytvoří PDF, které odpovídá zdroji.",
    },
    {
      q: "Můžu upravit text v PDF a opravit mezery?",
      a: "Můžeš upravit jednotlivé znaky a slova, ale přeuspořádat celé odstavce je těžké, protože PDF zachází s textem jako s umístěnými bloky. Pokud to jde, oprav to ve zdroji.",
    },
    {
      q: "Proč moje PDF převedené do Wordu vypadá rozbitě?",
      a: "PDF kóduje rozvržení, ne tok textu. Převod je vrátí zpátky do toku, ale strukturální vodítka jsou pryč. U převedeného souboru počítej se skutečným úklidem.",
    },
    {
      q: "Proč se mi tabulky nešikovně lámou mezi stránkami?",
      a: "Skoro vždycky jde o problém formátování odstavců ve zdroji. Nastavení „udržet s dalším“ a „nedělit mezi stránkami“ ve Wordu vyřeší většinu lomů ještě před exportem.",
    },
    {
      q: "Ovlivňuje komprese formátování?",
      a: "Ne. Komprese se dotýká obrázků, ne rozvržení. Komprimované PDF má stejné formátování jako originál – jen menší vložené obrázky.",
    },
  ],
  related: [
    { label: "PDF do Wordu – převeď kvůli rozsáhlým opravám textu", path: "/pdf-to-word" },
    { label: "Word do PDF – čistě znovu exportuj", path: "/word-to-pdf" },
    { label: "Jak vyřešit problémy s písmem v PDF", path: "/guides/how-to-fix-pdf-font-issues" },
    { label: "Jak vyřešit problémy s tiskem PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "Konvertor PDF – Word, JPG, PNG a zpátky", path: "/pdf-converter" },
};

export default content;
