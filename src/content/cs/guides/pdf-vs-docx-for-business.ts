import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx-for-business",
  h1: "PDF vs DOCX pro firmy (smlouvy, reporty, distribuce)",
  description:
    "Proč firemní dokumenty skoro vždy odcházejí ven jako PDF, ale žijí jako DOCX. Správný nástroj pro každou fázi života smlouvy, reportu nebo faktury.",
  updated: "2026-05-29",
  intro: [
    "Firemní dokumenty mají poměrně předvídatelný životní cyklus. Píšou se ve Wordu (DOCX), revidují a upravují se ve Wordu, dolaďují se ve Wordu a pak se exportují jako PDF k doručení, podpisu, archivaci a distribuci. Stejný soubor existuje ve dvou formátech v různých fázích a použití špatného formátu ve špatné fázi je zdrojem většiny tření.",
    "DOCX je pracovní formát, protože je upravitelný, hodí se pro spolupráci a dobře sleduje změny. PDF je doručovací formát, protože uzamkne rozvržení, vypadá stejně na každém zařízení, podporuje elektronické podpisy a je univerzálním standardem pro archivované firemní dokumenty.",
    "Tenhle návod projde životní cyklus fázi po fázi – kdy použít který formát, jak mezi nimi čistě přecházet a jaké chyby firmy dělají, když pošlou špatný formát ve špatný moment.",
  ],
  steps: [
    {
      title: "Piš v DOCX tam, kde probíhá úprava",
      body: "Microsoft Word, Google Docs (export do DOCX), Pages → DOCX. Formát podporuje skutečné úpravy, komentáře, sledování změn a práci víc autorů. PDF to nezvládá, ať už se to některé nástroje snaží předstírat sebevíc.",
    },
    {
      title: "Vyjednávej smlouvy v DOCX se sledováním změn",
      body: "Redlining smluv patří do DOCX. Druhá strana vidí, co jsi změnil, komentuje každou úpravu a vytvoří protinávrh. Nástroje na redlining v PDF existují, ale jsou pomalejší a míň spolupráci vstřícné.",
    },
    {
      title: "Exportuj do PDF, jakmile je verze finální",
      body: "Word do PDF v prohlížeči vytvoří čistý export s vloženými písmy a stabilním rozvržením. Tohle je verze, která jde ke klientovi, podepisuje se a žije v archivu.",
    },
    {
      title: "Podepisuj a doručuj jako PDF",
      body: "Podpisy se připojují k PDF, ne k DOCX. Podepsat PDF nebo aplikace PDF Editor zachytí podpis na uzamčeném PDF; zdroj v DOCX zůstává jako upravitelný záznam.",
    },
    {
      title: "Archivuj PDF, uchovávej DOCX",
      body: "PDF je kanonický záznam toho, co bylo doručeno nebo podepsáno. DOCX se uchovává pro případ, že budeš později potřebovat vyrobit související dokument. Obojí má svoje místo; nezaměňuj je.",
    },
    {
      title: "Převáděj PDF zpátky na DOCX, jen když musíš",
      body: "PDF do Wordu obnoví text z PDF, když nemáš zdroj. Výstup je přibližný – počítej s úklidem rozvržení. Ber to jako záchranu, ne jako pracovní postup.",
    },
  ],
  tips: [
    "Neposílej klientovi DOCX, pokud si ho výslovně nevyžádá. Verze v PDF je ta, na které je dohoda; DOCX je tvůj pracovní zdroj.",
    "Sledování změn dělej jen v DOCX. Anotační nástroje pro PDF existují, ale skutečné sledování změn nenahradí.",
    "Vlož písma do exportu PDF. PDF, které se u klienta zobrazí jinak, působí neprofesionálně.",
    "Komprimuj PDF pro e-mail nebo nahrání na portál. Zdroj v DOCX kompresi nepotřebuje; je malý. PDF ji často potřebuje.",
    "Drž oba formáty ve složce projektu. PDF ve /final/, DOCX ve /drafts/ nebo /source/.",
  ],
  mobileNote:
    "Telefony často zvládají pozdní fázi firemní práce s PDF – podepsat smlouvu, zkomprimovat report, odeslat finální verzi. Aplikace PDF Editor tohle všechno zvládá na iOS i Androidu a doplňuje práci s DOCX, která proběhla dřív na počítači.",
  faq: [
    {
      q: "Proč nepoužívat PDF na všechno?",
      a: "PDF nepodporuje skutečné úpravy, sledování změn ani spolupráci víc autorů. Pro psaní je DOCX opravdu lepší.",
    },
    {
      q: "Proč nepoužívat DOCX i k doručení?",
      a: "DOCX se napříč verzemi a zařízeními zobrazuje jinak. Klienti vidí jiné rozvržení, než jaké jsi zamýšlel. PDF vzhled uzamkne.",
    },
    {
      q: "Mají se smlouvy posílat jako PDF, nebo DOCX?",
      a: "Finální smlouvy: PDF, podepsané. Vyjednávací návrhy: DOCX se sledováním změn. Jiné nástroje v různých fázích.",
    },
    {
      q: "Co archivy — DOCX, nebo PDF?",
      a: "PDF jako záznam toho, co bylo doručeno nebo podepsáno. DOCX si drž pro referenci navíc, ale kanonickou archivní kopií je PDF.",
    },
    {
      q: "Kdy dává smysl PDF do Wordu?",
      a: "Když potřebuješ upravit PDF a nemáš zdroj. Počítej s úklidem rozvržení; převod je přibližný.",
    },
  ],
  related: [
    { label: "PDF pro firmy — smlouvy a pracovní postupy", path: "/pdf-for-business" },
    { label: "Word do PDF — čisté exporty pro distribuci", path: "/word-to-pdf" },
    { label: "PDF do Wordu — obnov upravitelný text", path: "/pdf-to-word" },
    { label: "PDF vs DOCX — úplné srovnání funkcí", path: "/guides/pdf-vs-docx" },
  ],
  parentHub: { label: "PDF pro firmy — smlouvy a pracovní postupy", path: "/pdf-for-business" },
};

export default content;
