import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-rotate-pdf-pages",
  h1: "Jak otočit stránky v PDF (zdarma, bez nahrávání)",
  description:
    "Otoč všechny nebo vybrané stránky PDF o 90°, 180° nebo 270° přímo v prohlížeči, bez odesílání na server. Oprav naskenované stránky na šířku nebo vzhůru nohama, aby se dokument dal normálně číst.",
  updated: "2026-05-23",
  intro: [
    "PDF, které se otevře na bok, je drobná, ale vytrvalá otrava. Nakláníš hlavu, nebo pořád otáčíš telefonem a stránka se otáčí s ním. Oprava spočívá v otočení samotné stránky, aby byla uložená rovně – pak se čte správně všem, na každém zařízení, aniž by si kdokoli musel vykrucovat krk.",
    "Tento návod používá bezplatný nástroj Otočit PDF, který otočí všechny nebo vybrané stránky o 90, 180 nebo 270 stupňů přímo v prohlížeči, bez jakéhokoli nahrávání. Je to správná oprava, ať je špatně jedna stránka, nebo celý dokument vyjel ze skeneru na šířku.",
    "Otočení je trvalá změna toho, jak je stránka uložená, takže si projdeme, jak ho použít jen na stránky, které to potřebují, a jak výsledek ověřit před uložením.",
  ],
  steps: [
    {
      title: "Otevřít nástroj Otočit PDF",
      body: "Přejdi na nástroj Otočit PDF v prohlížeči. Běží na tvém zařízení – žádné nahrávání, žádný účet.",
    },
    {
      title: "Přidat PDF",
      body: "Přetáhni soubor do plochy pro přidání souboru nebo klikni pro jeho výběr. Nástroj zobrazí stránky, abys viděl, které jsou špatně.",
    },
    {
      title: "Rozhodnout, které stránky otočit",
      body: "Otoč všechny stránky, nebo jen ty špatné – třeba jedinou tabulku na šířku v jinak rovném reportu. Poznač si, které stránky a kterým směrem.",
    },
    {
      title: "Zvolit míru otočení",
      body: "Vyber 90° pro stránku ležící na boku, 180° pro stránku vzhůru nohama, nebo 270° pro tu otočenou na druhou stranu. Použij ji na vybrané stránky.",
    },
    {
      title: "Zkontrolovat, že každá stránka stojí rovně",
      body: "Ověř, že se opravené stránky teď čtou normálně a že jsi omylem neotočil ty, které už byly v pořádku.",
    },
    {
      title: "Stáhnout opravené PDF",
      body: "Exportuj otočený soubor a ulož ho pod jasným názvem. Originál zůstává nedotčený pro případ, že bys musel začít znovu.",
    },
  ],
  tips: [
    "Otoč jen stránky, které jsou špatně. Plošné otočení celého dokumentu, kde je většina stránek v pořádku, jen vytváří nové problémy.",
    "Stránky na šířku – široké tabulky, grafy, tabulkové listy exportované do PDF – mají orientaci na šířku často záměrně. Otáčej jen tehdy, když je obsah skutečně bokem, ne když je správně široký.",
    "Pokud jsou stránky zároveň ve špatném pořadí i otočené, oprav nejdřív otočení a pak pořadí – posouzení sledu je snazší, když každá stránka stojí rovně.",
    "Otočení ještě před sloučením zaručí, že spojený dokument je v pořádku od začátku, bez schovaných překvapení uprostřed.",
    "Ponech si originál. Pokud otočíš špatným směrem, je rychlejší začít znovu z nedotčeného souboru než otáčet tam a zpátky.",
  ],
  mobileNote:
    "Naskenovaný dokument bokem nejčastěji vznikne na telefonu, a přesně tam se to nejrychleji opraví. Aplikace PDF Editor otáčí stránky jedním klepnutím a funguje offline, takže čerstvě naskenovaný dokument narovnáš dřív, než vůbec opustí zařízení.",
  faq: [
    {
      q: "Můžu otočit jen jednu stránku?",
      a: "Ano. Vyber jen stránky, které jsou špatně, a otoč je, zbytek dokumentu zůstane, jak je.",
    },
    {
      q: "Jaké otočení mám zvolit?",
      a: "90° pro stránku ležící na boku, 180° pro stránku vzhůru nohama a 270° pro tu otočenou na opačnou stranu. Zvol míru, která postaví obsah rovně.",
    },
    {
      q: "Je otočení trvalé?",
      a: "Uloží se do exportovaného souboru, takže se stránka všude čte rovně. Originál zůstává nedotčený, takže to v případě potřeby vždycky můžeš zopakovat.",
    },
    {
      q: "Nahrává se moje PDF někam?",
      a: "Ne. Otočení probíhá v prohlížeči na tvém zařízení, takže soubor z něj nikdy neodejde.",
    },
    {
      q: "Můj sken je bokem a zároveň ve špatném pořadí – co nejdřív?",
      a: "Nejdřív stránky otoč rovně, pak nástrojem Změnit pořadí stránek PDF oprav pořadí. Posoudit pořadí je snazší, jakmile je všechno správně natočené.",
    },
  ],
  related: [
    {
      label: "Otočit PDF — oprav orientaci přímo v prohlížeči",
      path: "/rotate-pdf",
    },
    {
      label: "Změnit pořadí stránek PDF — oprav pořadí stránek",
      path: "/reorder-pdf-pages",
    },
    {
      label: "Jak opravit naskenované PDF stránky na šířku",
      path: "/guides/how-to-fix-sideways-pdf-pages",
    },
    {
      label: "Jak změnit pořadí stránek v PDF",
      path: "/guides/how-to-reorder-pdf-pages",
    },
  ],
  parentHub: { label: "Otočit PDF", path: "/rotate-pdf" },
};

export default content;
