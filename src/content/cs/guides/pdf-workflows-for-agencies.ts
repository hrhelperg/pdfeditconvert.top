import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-agencies",
  h1: "Pracovní postupy s PDF pro agentury (prezentace, zadání, schvalování)",
  description:
    "Řetězec agentury v PDF – prezentace pro klienta, kreativní zadání, klientská schválení, výstupy – udržovaný rychlý a předvídatelný pomocí bezplatných, soukromých nástrojů v prohlížeči.",
  updated: "2026-05-29",
  intro: [
    "Agentury zpracují víc PDF, než si samy uvědomují. Odcházejí prezentace pro klienta, vrací se zadání, kreativní práce prochází schvalováním, výstupy se odesílají po dávkách, retrospektivy končí ve sdílených složkách. Každá z těchto věcí je malý kousek práce; dohromady jsou to tepny, na kterých agentura běží.",
    "Většina PDF operací v agentuře se opakuje pořád stejně: převést prezentaci na PDF k odeslání, sloučit verzi pro prezentujícího s přílohami, zkomprimovat pro klientský portál, orazit rozpracované verze vodoznakem během revize, podepsat schválení, archivovat po uzavření zakázky. S promyšleným rytmem a pár správnými drobnými nástroji zůstává tohle všechno lehké. Bez něj to sežere hodiny.",
    "Tenhle návod popisuje postup, který funguje v malých agenturách. Nic z toho nepotřebuje placený software na PDF; většina to zvládne v záložce prohlížeče, aniž bys citlivé materiály klienta poslal na cizí server.",
  ],
  steps: [
    {
      title: "Prezentace pro klienta: exportuj, zkomprimuj, zkontroluj značku",
      body: "Prezentace snímků → export do PDF → komprese pro e-mail potenciálního klienta. Ověř, že jsou písma vložená, aby se na straně příjemce nenahradily nadpisy snímků. Titulní stránka se jménem potenciálního klienta, nastavený titulek v metadatech, soubor pojmenovaný JménoProspecta_Prezentace_RRRR-MM-DD.pdf.",
    },
    {
      title: "Kreativní zadání: slouč vstupní dokument s podklady",
      body: "Dokument zadání plus podklady od klienta (loga, příklady, brand manuál) → pomocí nástroje Sloučit PDF vytvoř jeden pracovní soubor, na který se tým může odkazovat. Originály si ponech, sloučená verze slouží jen pro rychlou orientaci.",
    },
    {
      title: "Schvalování: podepsané PDF, vodoznak na návrzích během revize",
      body: "Rozpracované verze kolují s vodoznakem NÁVRH přidaným pomocí nástroje Přidat vodoznak do PDF. Když klient schválí, podepsané PDF schválení formalizuje – Podepsat PDF zaznamená souhlas. Finální soubory vodoznak ztrácejí.",
    },
    {
      title: "Výstupy: PDF ve vysoké kvalitě, oddělené od pracovních souborů",
      body: "Finální výstupy se exportují ve vyšší kvalitě než interní verze. Nástroj Změnit pořadí stránek PDF potvrdí správné pořadí, Extrahovat stránky z PDF odstraní všechno, co se nemá odeslat.",
    },
    {
      title: "Zkomprimuj pro klientské portály",
      body: "Většina firemních klientských portálů má strop 10–25 MB. Zkomprimovat PDF dostane výstupy pod limit bez znatelné ztráty kvality. Doručený soubor je zkomprimovaná kopie, zdrojový archiv si drží nezkomprimovanou verzi.",
    },
    {
      title: "Archivuj po uzavření zakázky",
      body: "Přesuň složku zakázky do /Archiv/[Rok]/[Klient]/[NazevZakazky]/. Aktivní složka zůstává útlá, archiv je zdrojem case studies pro další prezentaci.",
    },
  ],
  tips: [
    "Prezentace určené pro obrazovku exportuj s menší kompresí než ty určené pro tisk – na obrazovce jsou viditelné artefakty méně nápadné.",
    "Standardizuj titulní stránku prezentace. Logo, jméno potenciálního klienta, datum, kontakt na agenturu. Různá rozvržení u každé prezentace působí napříč agenturou nekonzistentně.",
    "Vodoznakem označuj všechny rozpracované verze. Ve chvíli, kdy rozpracovaná verze ztratí vodoznak v řetězci, se odpovědnost rozostří.",
    "Schválení patří na podepsané PDF, ne do vlákna chatu. Budoucí ty budeš potřebovat doložitelný záznam.",
    "Připrav si předem složku /Sablony/ s titulní stránkou prezentace, šablonou zadání a formulářem pro schválení. Znovupoužití vždy vyhraje nad tvorbou od nuly.",
  ],
  mobileNote:
    "Život v agentuře se odehrává na telefonu při natáčení, na cestách, u klienta v kanceláři. Aplikace PDF Editor zvládá rozpracované verze, podpisy i rychlé přeexportování z mobilu, takže schválení může přijít z telefonu, aniž by se čekalo na návrat k počítači.",
  faq: [
    {
      q: "Jak velké má být PDF s prezentací pro klienta?",
      a: "Ideálně pod 10 MB, vždy pod 25 MB. Vizuálně bohaté prezentace se komprimují hůř než textové – s růstem prezentace hlídej velikost.",
    },
    {
      q: "Máme používat jednu šablonu pro každou prezentaci?",
      a: "Ano pro strukturu, ne pro kreativní obsah. Čtenář má okamžitě poznat „tohle je nabídka od agentury“; jednotlivé prezentace odlišuje právě kreativní obsah.",
    },
    {
      q: "Jak sledujeme stav schvalování?",
      a: "Stavem složky: /rozpracovane/, /schvalene/, /odeslane/. Podepsané PDF se schválením je doklad, který potvrzuje přechod z jedné složky do druhé.",
    },
    {
      q: "Potřebujeme oddělené pracovní PDF a PDF k odevzdání?",
      a: "Ano. Pracovní soubory jsou nezkomprimované a obsahují poznámky; výstupy jsou zkomprimované, čisté a finální. Dej pozor, abys omylem neodeslal pracovní soubor.",
    },
    {
      q: "Jaká je nejčastější chyba agentur s PDF?",
      a: "Odeslání nedokončené prezentace. Rozpracované verze označuj vodoznakem, pojmenovávej je jasně a ke klientovi ať jde jen soubor ze složky /schvalene/.",
    },
  ],
  related: [
    { label: "PDF pro firmy — smlouvy a pracovní postupy", path: "/pdf-for-business" },
    { label: "Sloučit PDF — sestav zadání a výstupy", path: "/merge-pdf" },
    { label: "Pracovní postupy s PDF pro konzultanty", path: "/guides/pdf-workflows-for-consultants" },
    { label: "Nejlepší pracovní postup s PDF pro týmy", path: "/guides/best-pdf-workflow-for-teams" },
  ],
  parentHub: { label: "PDF pro firmy — smlouvy a pracovní postupy", path: "/pdf-for-business" },
};

export default content;
