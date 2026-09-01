import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-digital-study-pdfs",
  h1: "Jak vytvořit digitální studijní PDF (kartičky, shrnutí, balíčky)",
  description:
    "Vytvoř si vlastní studijní PDF z poznámek, prezentací a zvýrazněných pasáží – prohledávatelné, přenosné, připravené na psaní poznámek v tabletu. Struktura, díky které jsou u zkoušky skutečně k užitku.",
  updated: "2026-05-29",
  intro: [
    "Vlastnoručně sestavené studijní PDF je jeden z nejlepších nástrojů, jaké u zkoušky můžeš mít. Je menší než celá sada týdenních poznámek, strukturovanější než vlákno chatu s tipy na opakování a přenosnější než papírové kartičky. Otevři ho na tabletu při pauze na studium, v kavárně, na notebooku v knihovně – stejný soubor, stejné poznámky, stejná prohledatelnost.",
    "Studijní PDF se ale vyplatí, jen když má strukturu. Vysypat do jednoho souboru každou přednášku je nepoužitelné; pečlivě sestavený souhrnný balíček je artefakt, který skutečně otevřeš třikrát týdně před finální zkouškou. Rozdíl je v tom, jak ho postavíš.",
    "Tenhle návod projde strukturu, která funguje: co zahrnout, co vynechat, jak organizovat pro rychlé prolétnutí i pro hluboké čtení a jak udržet velikost souboru zvládnutelnou na tabletu. Předpokládá, že stavíš z existujících týdenních poznámek, prezentací a zvýrazněných pasáží – ne od nuly.",
  ],
  steps: [
    {
      title: "Před stavbou urči rozsah",
      body: "Jedno studijní PDF na kurz, jedno na velkou zkoušku (pololetní, závěrečnou), nebo jedno na téma – vyber zrnitost, která odpovídá tomu, jak se skutečně učíš. Menší, zaměřená PDF jsou lepší než jeden obří balíček.",
    },
    {
      title: "Postav jasnou titulní stránku a obsah",
      body: "Kód kurzu, název zkoušky, datum, probraná témata. Jednostránkový obsah hned na začátku. Obojí je krátké – napsání zabere pět minut a ztrojnásobí to orientaci v souboru.",
    },
    {
      title: "Vytáhni klíčové snímky a poznámky",
      body: "Extrahovat stránky z PDF vytáhne jen snímky a stránky s poznámkami, které skutečně potřebuješ, z větších týdenních balíků. Nedávej tam celý semestr – jen části, na kterých u téhle zkoušky záleží.",
    },
    {
      title: "Slouč do souvislého pořadí",
      body: "Sloučit PDF spojí výtažky ve studijním pořadí: chronologicky, koncepčně, nebo podle váhy v důrazu zkoušky. Použij pořadí, ve kterém budeš opakovat.",
    },
    {
      title: "Piš poznámky předem",
      body: "Předem zvýrazni klíčové pojmy, vzorce a koncepty. Poznámky pak při opakování fungují lépe, protože zvýrazňování už neděláš v reálném čase souběžně.",
    },
    {
      title: "Zkomprimuj pro přenositelnost na tabletu",
      body: "Zkomprimovat PDF dostane studijní balíček na velikost vhodnou pro tablet – obvykle pod 20 MB. Menší soubory se rychle načtou, hladce rolují a při dlouhých studijních seancích méně vybíjí baterii.",
    },
  ],
  tips: [
    "Necíl na úplnost. Studijní PDF doplňuje plné poznámky, nenahrazuje je. Detail nech v týdenních balících.",
    "Na konec přidej jednu nebo dvě stránky se shrnutím – vzorce, data, jména – zkrátka cokoli, co u zkoušky potřebuje okamžité vybavení.",
    "Zrcadli strukturu zkoušky. Pokud je zkouška krátká odpověď plus esej, postav studijní balíček stejně, aby cvičení odpovídalo formátu testu.",
    "Nepřeháněj to s kompresí. Některé artefakty textu při silné kompresi škodí čitelnosti během dlouhých studijních seancí. Střední komprese bývá správná rovnováha.",
    "Po velkém kole poznámek soubor znovu exportuj, aby zápisky přetrvaly jako čitelný obsah, ne jen jako vrstva navrch.",
  ],
  mobileNote:
    "Tablety a telefony jsou místo, kde se studijní PDF skutečně používají. Aplikace PDF Editor podporuje poznámky, zvýrazňování a vyhledávání v souboru, který sis postavil – studijní balíček se pak promění v interaktivní nástroj na opakování, ať studuješ kdekoli.",
  faq: [
    {
      q: "Jak dlouhé má studijní PDF být?",
      a: "Takové, kolik skutečně stihneš znovu přečíst za dvě nebo tři seance. U většiny kurzů je to 30–80 stránek. Přes 100 stránek už polovinu vynecháš.",
    },
    {
      q: "Mám zahrnout celé snímky, nebo jen ty klíčové?",
      a: "Jen klíčové. Zahrnutí všeho hodnotu rozředí. Vyber snímky, které vysvětlují koncepty, ve kterých jsi nejslabší.",
    },
    {
      q: "Jsou digitální kartičky lepší než papírové?",
      a: "Pro většinu studentů ano. Jsou prohledávatelné, přenosné a přežijí upuštění nebo polití. Aplikace se spaced repetition k tomu přidají další vrstvu.",
    },
    {
      q: "Mám sdílet svoje studijní PDF se skupinou?",
      a: "Volitelné. Někomu se lépe studuje z vlastního balíčku, někomu prospívá sdílený. Vyzkoušej obojí a sleduj, co dá lepší výsledky při vybavování.",
    },
    {
      q: "Jak brzy ho mám postavit?",
      a: "Dva až tři týdny před zkouškou. Dřív chybí obsah, později nezbude čas ho prostudovat.",
    },
  ],
  related: [
    { label: "PDF pro studenty — poznámky a studijní materiály", path: "/pdf-for-students" },
    { label: "Sloučit PDF — sestav studijní balíčky", path: "/merge-pdf" },
    { label: "Jak organizovat studijní materiály jako PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Pracovní postup s PDF pro vysokoškoláky", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF pro studenty — poznámky a studijní materiály", path: "/pdf-for-students" },
};

export default content;
