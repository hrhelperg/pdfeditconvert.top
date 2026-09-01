import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-use-pdf-forms-for-contracts",
  h1: "Jak použít formuláře PDF pro smlouvy (pole a podepisování)",
  description:
    "Proměň smlouvu ve vyplnitelné PDF: pole pro jména, data a iniciály, prostor na podpis a krok se zafixováním, díky kterému se podepsaná verze nedá pozměnit. Včetně poctivých limitů.",
  updated: "2026-06-01",
  intro: [
    "Řada smluv opakuje stejnou kostru a mění se jen pár detailů – jména stran, data, částky, podpis. Když z těchhle proměnlivých částí uděláš pole formuláře, staneš se z statické smlouvy vyplnitelné PDF, které druhá strana dokáže doplnit a podepsat bez přepisování čehokoli – rychlejší a čistší než posílat si tam a zpátky soubor Word.",
    "Tenhle návod je konkrétně o mechanice formulářů u smluv: kde pomůžou pole, jak zacházet s iniciálami a prostorem na podpis, a o klíčovém kroku se zafixováním, který podepsanou dohodu uzamkne tak, aby se pak potichu neupravovala. Je to úhel pohledu přes pole formuláře, odlišný od širšího úkolu posílání a doručování smluv.",
    "Jedna upřímná poznámka platí napříč celým návodem: tohle pokrývá mechaniku dokumentu, ne právní platnost. Jestli je konkrétní smlouva nebo způsob podpisu právně dostatečný, závisí na tvé jurisdikci a dohodě samotné – to je otázka pro strany nebo jejich poradce, ne pro nástroj na PDF.",
  ],
  steps: [
    {
      title: "Urči proměnlivé části",
      body: "Označ detaily, které se mění pokaždé – jména, adresy, data, částky, délky trvání. Z těch se stanou tvá pole formuláře; pevné klauzule zůstanou jako uzamčený text dokumentu.",
    },
    {
      title: "Přidej pole pro doplňované údaje",
      body: "Umísti jasně popsaná pole (nebo na neinteraktivní šabloně zřetelné čáry) pro každou proměnnou. Datům a částkám dej dost prostoru a rozvržení udrž zřetelné, ať nic nezůstane přehlédnuté.",
    },
    {
      title: "Vyřeš iniciály a prostor na podpis",
      body: "Přidej pole na podpis nebo zřetelný řádek na podepsání, plus políčka na iniciály tam, kde je stránky potřebují. Druhá strana podepíše napsaným nebo vlastnoručním podpisem v těchhle prostorech.",
    },
    {
      title: "Zafixuj podepsanou dohodu",
      body: "Jakmile obě strany doplní údaje a podepíšou, PDF zafixuj. Tím se doplněné údaje i podpis slijí se stránkou, takže finální smlouvu už nejde upravit ani jí vyprázdnit pole.",
    },
    {
      title: "Doruč a ulož finální verzi",
      body: "Zafixovanou, podepsanou smlouvu pošli všem stranám a ponech si vlastní kopii. Konzistentní název souboru a jedna složka na smlouvy usnadní pozdější dohledání podepsané verze.",
    },
  ],
  tips: [
    "Uzamkni klauzule a nech vyplnitelná jen proměnlivá pole, ať se podmínky dohody při vyplňování nedají změnit.",
    "Zafixování po podpisu je klíčový krok – zmrazí podepsanou verzi, ať se později nic neposune.",
    "Prázdnou, nevyplněnou šablonu drž zvlášť od podepsaných kopií, ať kostru čistě znovu použiješ.",
    "U čehokoli právně významného zacházej s PDF jen jako s mechanikou a požadavky si potvrď se stranami nebo poradcem.",
    "Požadavky na smlouvy a podpisy se liší podle místa a situace, takže nepředpokládej, že jeden přístup sedí na každou dohodu.",
  ],
  mobileNote:
    "Druhá strana může tvůj smluvní formulář vyplnit a podepsat na telefonu v aplikaci PDF Editor – doplní proměnlivá pole, přidá podpis a vrátí kopii. Podepsanou dohodu pak zafixuješ, aby byla uzamčená, vše v zařízení bez nahrávání smlouvy třetí straně.",
  faq: [
    {
      q: "Můžu ze smlouvy udělat vyplnitelný formulář PDF?",
      a: "Ano. Proměnlivé části – jména, data, částky – proměň v pole formuláře nebo zřetelné čáry, klauzule nech jako uzamčený text a přidej prostor na podpis. Druhá strana vyplní a podepíše, pak finální verzi zafixuješ.",
    },
    {
      q: "Jak zabráním úpravě smlouvy po podpisu?",
      a: "Podepsané PDF zafixuj. Zafixování slije doplněná pole a podpis se stránkou, takže se stanou pevným obsahem, který se nedá pozměnit ani vyprázdnit.",
    },
    {
      q: "Jsou podpisy z formuláře PDF na smlouvách právně platné?",
      a: "To závisí na tvé jurisdikci a dohodě a nedokáže to určit žádný nástroj na PDF. Tenhle návod pokrývá mechaniku dokumentu; právní dostatečnost si potvrď se stranami nebo poradcem.",
    },
    {
      q: "Mají být smluvní pole interaktivní, nebo stačí čáry?",
      a: "Interaktivní pole jsou úhlednější a snižují chybovost, ale zřetelné čáry na neinteraktivní šabloně fungují všude. Obojí je v pořádku, dokud má každá proměnná zřetelný, dostatečně velký prostor.",
    },
    {
      q: "Čím se to liší od posílání smluv jako PDF?",
      a: "Tohle je o tom, jak smlouvu postavit jako vyplnitelný formulář – pole, iniciály, prostor na podpis. Posílání smluv jako PDF pokrývá šířeji uzamčení, doručení a získání protistranou podepsané verze.",
    },
  ],
  related: [
    {
      label: "Jak posílat smlouvy jako PDF",
      path: "/guides/how-to-send-contracts-as-pdf",
    },
    {
      label: "Jak vytvořit vyplnitelné PDF",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "Jak uložit vyplněný formulář PDF",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    { label: "Podepsat PDF na telefonu", path: "/sign-pdf" },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
