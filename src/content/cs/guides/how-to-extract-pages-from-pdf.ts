import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-extract-pages-from-pdf",
  h1: "Jak extrahovat stránky z PDF (zdarma, bez nahrávání)",
  description:
    "Vyjmi konkrétní stránky nebo rozsahy z PDF do nového souboru přímo v prohlížeči, bez odesílání na server. Ideální, když chceš poslat jen stránky, které někdo skutečně potřebuje.",
  updated: "2026-05-23",
  intro: [
    "Extrahování stránek je odpovědí na velmi konkrétní potřebu: někdo chce část dokumentu, ne celek. Banka potřebuje stránku 3, formulář potřebuje stránku s podpisem, revize nabídky se týká jen cenové sekce. Poslat celý čtyřicetistránkový soubor a napsat „viz strana 12“ je líné a u čehokoli citlivého i neopatrné.",
    "Tento návod používá bezplatný nástroj Extrahovat stránky z PDF, který ti umožní vybrat stránky, o které stojíš, a uložit je jako úplně nové PDF – vše v prohlížeči, bez jakéhokoli nahrávání. Originál zůstává nedotčený; dostaneš jen čistý soubor s tím, co jsi vybral.",
    "Je to jedna z nejužitečnějších operací s PDF právě proto, že zároveň slouží jako nástroj pro soukromí: pošleš přesně ty stránky, které jsou potřeba, a nic navíc.",
  ],
  steps: [
    {
      title: "Otevřít nástroj Extrahovat stránky z PDF",
      body: "Přejdi na nástroj Extrahovat stránky z PDF v prohlížeči. Běží celý na tvém zařízení – žádné nahrávání, žádný účet.",
    },
    {
      title: "Přidat PDF",
      body: "Přetáhni soubor do plochy pro přidání souboru nebo klikni pro jeho výběr. Nástroj načte počet stránek, abys mohl přesně vybírat.",
    },
    {
      title: "Vybrat stránky, které chceš",
      body: "Zadej jednotlivé stránky nebo rozsahy – například 3, pak 8–10. Do nového souboru se dostanou jen stránky, které vyjmenuješ.",
    },
    {
      title: "Vytvořit nové PDF",
      body: "Spusť extrahování. Nástroj sestaví nové PDF jen s vybranými stránkami, v pořadí, které jsi zvolil.",
    },
    {
      title: "Stáhnout a pojmenovat",
      body: "Extrahovaný soubor ulož pod názvem, který říká, o co jde – „Podpisova-stranka.pdf“ nebo „Cenova-sekce.pdf“.",
    },
    {
      title: "Zkontrolovat před odesláním",
      body: "Otevři nové PDF a ověř, že obsahuje jen zamýšlené stránky. Tohle je chvíle, kdy odhalíš chybu o jednu stránku dřív, než se dostane k někomu jinému.",
    },
  ],
  tips: [
    "Extrahuj, když chceš pár stránek sesbírat do jednoho nového souboru; rozděl, když chceš dokument rozlámat na víc souborů. Přizpůsob nástroj cíli.",
    "Extrahování je tichá výhra pro soukromí: poslání jen relevantních stránek znamená žádné náhodné vystavení zbytku dokumentu.",
    "Čísla stránek si ověř podle dokumentu, ne podle indexu prohlížečky PDF – titulní stránky a vložené listy dokážou počet posunout o jednu.",
    "Originál se nikdy neupravuje, takže z něj můžeš extrahovat různé sady stránek tolikrát, kolikrát potřebuješ.",
    "Chceš-li stránky spíš odstranit než ponechat, extrahuj ty, které chceš zachovat – to je nejčistší způsob, jak zbavit PDF pár nechtěných stránek.",
  ],
  mobileNote:
    "Potřebuješ poslat zpátky z telefonu jen podepsanou stránku? Aplikace PDF Editor extrahuje a sdílí konkrétní stránky na pár klepnutí, offline – takže ven jde jen ta správná stránka, ne celý důvěrný soubor.",
  faq: [
    {
      q: "Jak se extrahování liší od rozdělení?",
      a: "Extrahování sesbírá vybrané stránky do jednoho nového souboru. Rozdělení rozláme PDF na víc samostatných souborů. Extrahování použij pro sesbírání konkrétních stránek, rozdělení pro rozdělení dokumentu.",
    },
    {
      q: "Můžu vybrat i stránky, které nejdou za sebou?",
      a: "Ano. Vyjmenuj jednotlivé stránky i rozsahy dohromady, třeba 1, 4, 9–12, a nové PDF bude obsahovat přesně tyhle stránky v tomto pořadí.",
    },
    {
      q: "Změní extrahování originál?",
      a: "Ne. Zdrojové PDF zůstává nedotčené; nástroj vytvoří nový soubor. Ze stejného originálu můžeš spustit tolik extrahování, kolik chceš.",
    },
    {
      q: "Nahrává se můj soubor někam?",
      a: "Ne. Extrahování probíhá v prohlížeči na tvém zařízení, takže důvěrné dokumenty zůstávají v soukromí.",
    },
    {
      q: "Jak stránky spíš odstraním, než abych je ponechal?",
      a: "Extrahuj stránky, které chceš zachovat – nechtěné prostě nebudou zahrnuté. To je nejjednodušší cesta, jak z PDF pár stránek vyřadit.",
    },
  ],
  related: [
    {
      label: "Extrahovat stránky z PDF — vytáhni stránky přímo v prohlížeči",
      path: "/extract-pdf-pages",
    },
    { label: "Rozdělit PDF — rozděl soubor podle rozsahu", path: "/split-pdf" },
    {
      label: "Jak rozdělit PDF na samostatné soubory",
      path: "/guides/how-to-split-pdf-files",
    },
    {
      label: "Jak odstranit nechtěné stránky z PDF",
      path: "/guides/how-to-remove-unwanted-pages-from-pdf",
    },
  ],
  parentHub: { label: "Extrahovat stránky z PDF", path: "/extract-pdf-pages" },
};

export default content;
