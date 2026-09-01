import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-documents-to-pdf",
  h1: "Jak naskenovat dokumenty do PDF telefonem",
  description:
    "Naskenuj telefonem vícestránkové dokumenty do čistých PDF. Mobilní postup s automatickým rozpoznáním okrajů a OCR.",
  updated: "2026-05-11",
  intro: [
    "Telefony jsou skvělé skenery dokumentů, jakmile přestaneš používat výchozí fotoaparát. Správná aplikace zvládne rozpoznání okrajů, opravu perspektivy, úpravu kontrastu i OCR – z fotky pořízené z ruky tak vznikne čisté, prohledávatelné PDF, které vypadá jako naskenované, ne jen vyfocené.",
    "Tento návod prochází postup skenování dokumentů v aplikaci PDF Editor na iPhonu nebo Androidu. Obě platformy dávají srovnatelný výsledek. Projdeme si běžné případy: účtenky, podepsané formuláře, vícestránkové smlouvy, doklady a chvíle, kdy je skenování telefonem lepší než chůze ke stolnímu skeneru.",
    "Na konci budeš mít opakovatelný postup skenování, který funguje i při ne úplně ideálním osvětlení, produkuje soubory, které účetní i právní oddělení přijmou bez váhání, a vše přitom zůstává v zařízení.",
  ],
  steps: [
    {
      title: "Otevřít skener",
      body: "Klepni na dlaždici Skenovat na domovské obrazovce aplikace PDF Editor. Otevře se hledáček fotoaparátu s aktivním rozpoznáním okrajů.",
    },
    {
      title: "Položit dokument na kontrastní podklad",
      body: "Rozpoznání okrajů funguje nejlépe, když je mezi stránkou a podkladem pod ní jasný kontrast. Bílý papír polož na tmavý podklad a naopak.",
    },
    {
      title: "Namířit telefon nad stránku",
      body: "Drž telefon zhruba nad dokumentem. Aplikace kolem rozpoznaných okrajů vykreslí modrý obrys. Jakmile je obrys stabilní, automaticky se vyfotí.",
    },
    {
      title: "Automatické vyfocení nebo ruční klepnutí",
      body: "Fotoaparát blikne a vyfotí, jakmile je rámování správné. Pokud automatické vyfocení okraje nezachytí, klepni na tlačítko ručního snímání. Rohy pak stejně můžeš doladit v dalším kroku.",
    },
    {
      title: "Upravit rozpoznané rohy",
      body: "Podle potřeby doladíš okraje přetažením úchytů v rozích. Po tomto kroku se spustí oprava perspektivy, takže ze snímku pořízeného pod úhlem vznikne obdélníková stránka.",
    },
    {
      title: "Použít filtr",
      body: "Vyber Barevný, Odstíny šedi nebo Černobílý. U účtenek a formulářů černobílý filtr výrazně zmenší soubor bez ztráty kvality. U dokumentů s fotkami nebo barevnými prvky zůstaň u barevného.",
    },
    {
      title: "Přidat další stránky",
      body: "Klepnutím na počítadlo stránek dole na obrazovce vyfotíš další stránky. Každý nový snímek se připojí k aktuálnímu PDF. Pořadí stránek podle potřeby změň v pásu náhledů.",
    },
    {
      title: "Uložit PDF",
      body: "Klepni na Hotovo, dej souboru výstižný název a ulož ho. OCR běží na pozadí a výsledné PDF díky němu bude prohledávatelné. Poté ho můžeš sdílet, vytisknout nebo nahrát do cloudového úložiště.",
    },
  ],
  tips: [
    "Rozptýlené, rovnoměrné osvětlení je lepší než jasné světlo shora – přímé světlo vytváří na lesklém papíru nebo laminovaných formulářích odlesky.",
    "Dokument polož naplocho. Prohnuté stránky (třeba otevřená kniha) způsobují zkreslení textu, které oprava perspektivy nedokáže úplně napravit.",
    "U účtenek černobílý filtr obvykle zmenší soubor o 60–80 % bez ztráty čitelnosti.",
    "Pokud skenuješ doklady nebo pas, ulož výsledné PDF do složky chráněné heslem, nebo mu heslo nastav ještě před sdílením.",
    "Automatické vyfocení funguje za necelou vteřinu, pokud je rámování dobré. Pokud si neví rady, problémem bývá osvětlení nebo kontrast.",
  ],
  mobileNote:
    "Celý postup od naskenování po uložení trvá u vícestránkového dokumentu necelých 30 vteřin. Ve srovnání s chůzí ke stolnímu skeneru, stahováním softwaru pro skener a spravováním e-mailových příloh telefon jednoznačně vyhrává v běžných obchodních situacích. Výstupem je stejné standardní prohledávatelné PDF, které přijme každý účetní nástroj i dokumentový systém.",
  faq: [
    {
      q: "Je kvalita skenu stejně dobrá jako u stolního skeneru?",
      a: "U běžných dokumentů – účtenky, smlouvy, doklady, formuláře – ano, při vhodném osvětlení a rovné podložce dokumentu. Pro archivní skenování fotografií nebo drobný tisk na lesklém papíře má stolní skener pořád navrch.",
    },
    {
      q: "Jaké jazyky OCR podporuje?",
      a: "Všechny hlavní jazyky s latinkou (angličtina, španělština, francouzština, němčina, italština, portugalština, nizozemština, čeština, polština atd.) plus cyrilici, řečtinu, arabštinu, čínštinu, japonštinu a korejštinu. Kvalita rozpoznávání je nejvyšší u čistého tištěného textu a nižší u rukopisu.",
    },
    {
      q: "Můžu naskenovat doklad totožnosti nebo pas?",
      a: "Ano. Aplikace vytvoří čistý, narovnaný sken připravený pro KYC ověření nebo jakékoli podání dokumentu. Pokud ho posíláš e-mailem, nastav výslednému PDF heslo.",
    },
    {
      q: "Funguje skenování offline?",
      a: "Ano. Rozpoznání okrajů, oprava perspektivy i filtrování běží v zařízení. OCR pro hlavní jazyky funguje lokálně; méně běžné jazyky mohou při prvním použití stáhnout model pro rozpoznávání.",
    },
    {
      q: "Jak velká jsou naskenovaná PDF?",
      a: "Typický pětistránkový dokument v černobílém režimu vyjde na zhruba 200–400 KB. Stejný sken v plné barvě má obvykle 1–2 MB. Pokud je potřeba je poslat e-mailem, dá se velikost dál zmenšit kompresí.",
    },
  ],
  related: [
    { label: "Sken do PDF — kompletní přehled", path: "/scan-to-pdf" },
    {
      label: "Následná úprava naskenovaného PDF",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "PDF pro firmy", path: "/pdf-for-business" },
  ],
  parentHub: { label: "Sken do PDF", path: "/scan-to-pdf" },
};

export default content;
