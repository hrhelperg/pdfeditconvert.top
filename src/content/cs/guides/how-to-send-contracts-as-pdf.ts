import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-contracts-as-pdf",
  h1: "Jak posílat smlouvy jako PDF (podepsat, zamknout, doručit)",
  description:
    "Smlouvy vyžadují přísnější postup s PDF: uzamčení obsahu, připojení podpisu, označení návrhů vodoznakem a finální soubor, který druhá strana bez zbytečného pinkání spolupodepíše.",
  updated: "2026-05-29",
  intro: [
    "Smlouvy jsou typ dokumentu, u kterého špatné zacházení s PDF napáchá nejvíc škody. Podepsaná kopie, která je jinou verzí než nepodepsaný návrh. Spolupodpis přiložený k souboru, o kterém první podepisující myslel, že je uzamčený. Vodoznak návrhu zapomenutý na finální verzi. Nic z toho není exotické; všechno to lidi zavleče do skutečných sporů.",
    "Lékem je přísnější postup kolem tří věcí: uzamknout obsah před podpisem, přidávat podpisy v jasném pořadí a odeslat výsledek jako definitivní finální soubor. Nic z toho nevyžaduje drahý software na smlouvy; vyžaduje to promyšlené používání základních PDF nástrojů a poctivé pořadí kroků.",
    "Tenhle návod projde postup tak, jak by měl fungovat – od finálního návrhu přes podpisy obou stran až po čisté spolupodepsané PDF, se kterým bude spokojený i právník. Pokrývá i to, co dělat, když druhá strana chce použít vlastní podpisovou platformu.",
  ],
  steps: [
    {
      title: "Nejdřív dokonči obsah smlouvy",
      body: "Veškeré vyjednávání se vrací do zdroje – Word, Pages, Docs. Neopravuj přímo v PDF. Do PDF exportuj až tehdy, když se obě strany shodnou, že je text uzamčený.",
    },
    {
      title: "Odstraň stopy návrhu a vodoznak",
      body: "Odstraň vodoznaky NÁVRH (nástrojem Přidat vodoznak do PDF se vyhneš tomu, aby ses ho na finální verzi vůbec dotkl). Finální PDF by mělo vypadat skutečně finálně.",
    },
    {
      title: "Podepiš první",
      body: "Podepsat PDF ti umožní přidat napsaný nebo nakreslený podpis na správné místo. Podepiš první, pokud jsi tvůrce smlouvy; druhá strana pak spolupodepíše PDF, které už tvůj podpis nese.",
    },
    {
      title: "Uzamkni soubor, než ho pošleš",
      body: "Pokud to tvůj nástroj podporuje, po podepsání aplikuj omezení úprav. Druhá strana může číst a podepsat, ale obsah nemůže pozměnit. Je to jediný způsob, jak smlouvu s jistotou zmrazit.",
    },
    {
      title: "Pošli s jasnými pokyny",
      body: "Krátká průvodní zpráva: „V příloze: podepsaná smlouva. Spolupodepiš prosím na straně 8 a pošli zpátky.“ Jedna věta ušetří kolo dotazů.",
    },
    {
      title: "Přijmi spolupodepsaný soubor a archivuj obě verze",
      body: "Až dorazí spolupodepsané PDF, ulož ho jako referenční verzi. Nepodepsaný návrh, tvoji jedním podpisem opatřenou kopii a plně podepsanou kopii drž ve stejné složce. Řetězec verzí je zároveň auditní stopa.",
    },
  ],
  tips: [
    "Nepoužívej původní podepisovaný PDF pro druhou smlouvu. U každé nové smlouvy vždycky začni čerstvým exportem – čistá metadata, čisté podpisy.",
    "Pokud druhá strana chce použít vlastní podpisovou platformu (DocuSign, Adobe Sign nebo jinou), přizpůsob se jí. Nestojí to za spor o to, čí nástroj je čistší.",
    "Ujisti se, že tvůj podpis je vizuálně výrazný. Napsané jméno kurzívou je podpis, ale působí méně promyšleně než nakreslený.",
    "Titulní listy, které uvádějí název smlouvy, datum a smluvní strany, výrazně usnadní pozdější dohledání víc než spoléhat jen na název souboru.",
    "Během vyjednávání vodoznakuj návrhy (NÁVRH, NENÍ URČENO K PODPISU). Viditelný štítek zabrání náhodnému spolupodpisu.",
  ],
  mobileNote:
    "Spolupodpisy se často odehrávají na telefonu – partner, který si to čte ve vlaku, klient, který podepisuje mezi schůzkami. Aplikace PDF Editor to zvládá dobře: projdi smlouvu, podepiš prstem na displeji, pošli zpátky, aniž bys musel skočit na počítač. Podepsaný soubor odejde z telefonu jako čisté PDF.",
  faq: [
    {
      q: "Je napsaný podpis na PDF právně závazný?",
      a: "Ve většině jurisdikcí ano, pro běžné smlouvy. Některé konkrétní případy (notářsky ověřené listiny, určité finanční nástroje) potřebují víc – ověř si typ smlouvy, než to předpokládáš.",
    },
    {
      q: "Má být smlouva chráněná heslem?",
      a: "Obvykle ne. Hesla přidávají tření bez velkého přínosu pro bezpečnost. Hesla si nech na vysoce důvěrné přílohy, ne na samotnou smlouvu.",
    },
    {
      q: "Jak uzamknu PDF po podepsání?",
      a: "Řada editačních nástrojů, včetně aplikace PDF Editor, ti umožní aplikovat omezení úprav během procesu podepisování. Uzamkni po posledním podpisu, ne během vyjednávání.",
    },
    {
      q: "Co když druhá strana upraví PDF po mém podpisu?",
      a: "Pokud soubor před odesláním uzamkneš, byly by úpravy zjistitelné. I bez uzamčení zůstává podepsané PDF referenční verzí; pozdější úpravy podpis znehodnotí.",
    },
    {
      q: "Mám vždycky podepisovat jako první?",
      a: "Pokud jsi tvůrce smlouvy, ano – signalizuje to tvůj závazek. Pokud spolupodepisuješ, podepiš soubor, který ti poslala druhá strana, místo abys začínal od nuly.",
    },
  ],
  related: [
    { label: "Podepsat PDF – přidej elektronický podpis", path: "/sign-pdf" },
    { label: "Přidat vodoznak do PDF – jasně označ návrhy", path: "/add-watermark-to-pdf" },
    { label: "Jak sdílet PDF s klienty", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Pracovní postupy s PDF pro malé firmy", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Podepsat PDF – elektronický podpis na mobilu", path: "/sign-pdf" },
};

export default content;
