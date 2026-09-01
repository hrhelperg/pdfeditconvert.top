import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-sideways-pdf-pages",
  h1: "Jak opravit stránky PDF otočené na bok nebo vzhůru nohama",
  description:
    "Natrvalo narovnej stránky PDF, které se otevírají na bok nebo vzhůru nohama, přímo v prohlížeči. Proč nepomůže otočit displej a co problém skutečně vyřeší.",
  updated: "2026-05-23",
  intro: [
    "Otevřeš PDF a stránka leží na boku. Otočíš ji v prohlížečce, vypadá to v pořádku – pak ho pošleš a příjemce ji zase vidí bokem. To je ten háček: otočení v prohlížečce často změní jen to, jak stránku vidíš ty, ne to, jak je uložená. Aby se opravila pro všechny, musíš otočit samotnou stránku a tu změnu uložit.",
    "Tento návod dělá přesně to pomocí bezplatného nástroje Otočit PDF, který otočí stránky o 90, 180 nebo 270 stupňů a opravu zapeče do nového souboru, vše přímo v prohlížeči bez jakéhokoli nahrávání. Ať je špatně jedna stránka, nebo celý sken vyjel na šířku, tohle je trvalá oprava.",
    "Probereme i to, proč stránky bokem vůbec vznikají, abys tomu mohl předejít už u zdroje – obvykle jde o skener nebo telefon držený špatným směrem.",
  ],
  steps: [
    {
      title: "Otevřít nástroj Otočit PDF",
      body: "Přejdi na nástroj Otočit PDF v prohlížeči. Otočení uloží přímo do souboru, takže oprava zůstane pro každou prohlížečku – žádné nahrávání, žádný účet.",
    },
    {
      title: "Přidat PDF",
      body: "Přetáhni soubor do plochy pro přidání souboru nebo klikni pro jeho výběr. Nástroj zobrazí stránky, abys viděl, které jsou bokem nebo vzhůru nohama.",
    },
    {
      title: "Najít dotčené stránky",
      body: "Poznamenej si, které stránky jsou špatně a o kolik – čtvrtotočka, půlotočka. U dlouhého skenu to může být každá stránka; u reportu třeba jen jedna široká tabulka.",
    },
    {
      title: "Otočit do svislé polohy",
      body: "Použij 90° na stránku ležící na boku, 180° na stránku vzhůru nohama nebo 270° na tu otočenou opačným směrem, dokud se obsah nečte normálně.",
    },
    {
      title: "Ověřit a pak stáhnout",
      body: "Zkontroluj, že každá opravená stránka stojí rovně a že jsi nenarušil stránky, které už byly v pořádku, pak exportuj opravené PDF.",
    },
    {
      title: "Příště to opravit už u zdroje",
      body: "Stránky bokem obvykle vznikají tak, že skener podává stránky na šířku, nebo je telefon držený špatným směrem. Úprava orientace skenu nebo způsobu, jak držíš telefon, zabrání opakování problému.",
    },
  ],
  tips: [
    "Otočení v prohlížečce PDF často mění jen tvůj pohled, ne uložený soubor – proto se stránka příjemci znovu jeví bokem. Skutečně to opraví až uložení otočené kopie.",
    "Otáčej jen stránky, které jsou opravdu špatně. Správně široká tabulka na šířku (tabulkový list, graf) má tak být; otočením to jen zhoršíš.",
    "Pokud je celý sken na šířku, jediné otočení o 90° použité na všechny stránky to obvykle spraví jedním krokem.",
    "Oprav otočení dřív, než budeš přeskládávat nebo slučovat – posoudit pořadí a spojovat dokumenty je mnohem snazší, když každá stránka stojí rovně.",
    "Ponech si originál. Přetočení je snadné udělat omylem; opakovat postup z nedotčeného souboru je rychlejší než otáčet tam a zpátky.",
  ],
  mobileNote:
    "Stránky bokem skoro vždy vznikají na telefonu, a přesně tam se to nejrychleji opraví. Aplikace PDF Editor otáčí stránky jedním klepnutím a ukládá opravu do souboru offline – takže je čerstvě naskenovaný dokument rovně dřív, než vůbec opustí tvé ruce.",
  faq: [
    {
      q: "Proč vypadá stránka opraveně u mě, ale bokem u ostatních?",
      a: "Otočení v prohlížečce obvykle mění jen tvůj pohled na obrazovce, ne to, jak je stránka uložená. Aby se opravila pro všechny, otoč stránku a ulož nový soubor – přesně to dělá nástroj Otočit PDF.",
    },
    {
      q: "O kolik mám otočit?",
      a: "90° pro stránku na boku, 180° pro vzhůru nohama, 270° pro tu otočenou na opačnou stranu. Zvol míru, která postaví obsah rovně.",
    },
    {
      q: "Sníží oprava otočení kvalitu?",
      a: "Ne. Otočení mění jen orientaci; obsah stránky i rozlišení zůstávají beze změny.",
    },
    {
      q: "Nahrává se můj soubor někam?",
      a: "Ne. Otočení probíhá v prohlížeči na tvém zařízení, takže soubor zůstává v soukromí.",
    },
    {
      q: "Jak zabráním tomu, aby se stránky skenovaly bokem?",
      a: "Nastav skener, aby rozpoznal nebo srovnal orientaci stránky, nebo drž telefon tak, aby stránka svisle vyplňovala celý záběr. Oprava už při zachycení ušetří pozdější krok s otáčením.",
    },
  ],
  related: [
    {
      label: "Otočit PDF — narovnej stránky přímo v prohlížeči",
      path: "/rotate-pdf",
    },
    {
      label: "Jak otočit stránky v PDF",
      path: "/guides/how-to-rotate-pdf-pages",
    },
    {
      label: "Jak naskenovat dokumenty do PDF telefonem",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
    {
      label: "Jak změnit pořadí stránek v PDF",
      path: "/guides/how-to-reorder-pdf-pages",
    },
  ],
  parentHub: { label: "Otočit PDF", path: "/rotate-pdf" },
};

export default content;
