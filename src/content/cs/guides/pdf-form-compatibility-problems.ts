import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-compatibility-problems",
  h1: "Problémy s kompatibilitou formuláře PDF (XFA a dynamické formuláře)",
  description:
    "Formulář, který funguje v jednom programu a rozbije se v jiném, obvykle používá funkce, které nepodporuje každý prohlížeč. Jak poznat dynamický formulář, co způsobuje neshodu a jaké máš možnosti.",
  updated: "2026-06-01",
  intro: [
    "Občas formulář funguje v jednom programu bezvadně a v jiném se úplně rozsype – pole se neobjeví, upozornění řekne „otevři prosím v jiném prohlížeči“, nebo je stránka prázdná jen s chybovou zprávou. Tohle je problém s kompatibilitou a skoro vždycky znamená, že formulář používá funkce, které nepodporuje každý prohlížeč PDF. Formulář není rozbitý; je jen vybíravější na to, kde se otevírá, než ten standardní.",
    "Obvyklou příčinou je pokročilý nebo dynamický formulář postavený na technologii (často zvané XFA nebo LiveCycle), kterou pořádně vykreslí jen určitý software. Standardní interaktivní formuláře jsou široce podporované, ale tyhle dynamické umí vyžadovat konkrétní program a řada moderních prohlížečů – zvlášť na telefonech a v prohlížečích webu – je vůbec neotevře správně.",
    "Tenhle návod ti pomůže rozpoznat problém s kompatibilitou, pochopit, proč se děje, a zvážit reálné možnosti – včetně poctivé reality, že některé formuláře prostě vyžadují software, pro který byly navržené, nebo jiný formát od vydavatele.",
  ],
  steps: [
    {
      title: "Rozpoznej typické signály",
      body: "Hláška o čekání nebo výzva otevřít formulář v jiném, kompatibilním prohlížeči, prázdná stránka tam, kde má být formulář, nebo pole, která se objeví v jednom programu a v jiném zmizí – všechno ukazuje na formulář používající nepodporované funkce.",
    },
    {
      title: "Rozpoznej dynamický (XFA) formulář",
      body: "Formuláře zobrazující upozornění na potřebu konkrétního softwaru bývají obvykle dynamické XFA formuláře. Nejsou to standardní interaktivní formuláře a řada prohlížečů – hlavně mobilních a webových – je neumí vykreslit.",
    },
    {
      title: "Vyzkoušej jiný, plnohodnotný prohlížeč",
      body: "Otevři formulář v několika schopných programech na PDF. Standardní interaktivní formulář, který se rozbil v základní prohlížečce, často funguje v plnohodnotné aplikaci. Dynamický formulář může pořád potřebovat svůj konkrétní software.",
    },
    {
      title: "Požádej vydavatele o kompatibilní verzi",
      body: "Pokud se formulář opravdu nikde neotevře tam, kde ho umíš použít, požádej toho, kdo ho poslal, o standardní PDF, neinteraktivní tisknutelnou verzi, nebo pokyny, jaký software potřebuje. Vydavatelé obvykle mají alternativu.",
    },
    {
      title: "V nouzi přejdi na vytisknutí a ruční vyplnění",
      body: "Jako poslední možnost u formuláře, který nejde otevřít interaktivně, si vyžádej nebo vygeneruj neinteraktivní tisknutelnou kopii a dokonči ho umístěním textu na stránku nebo ručně. Není to elegantní, ale funguje to vždycky.",
    },
  ],
  tips: [
    "Upozornění „kompatibilní prohlížeč“ je klasický signál dynamického XFA formuláře, který potřebuje konkrétní software.",
    "Standardní interaktivní formuláře jsou široce podporované; pokud se jeden rozbije jen v základní prohlížečce, obvykle to spraví plnohodnotná aplikace.",
    "Některé formuláře prostě vyžadují program, pro který byly postavené – to je skutečný limit, ne něco, co se dá protlačit silou.",
    "Když se formulář neotevře nikde použitelně, vydavatel skoro vždy dokáže poskytnout standardní nebo tisknutelnou alternativu.",
    "Některé formuláře PDF mohou používat nepodporované funkce, takže „tady se to neotevře“ může být design formuláře, ne chyba na tvé straně.",
  ],
  mobileNote:
    "Telefony jsou místo, kde problémy s kompatibilitou bolí nejvíc – dynamické XFA formuláře se v mobilních prohlížečích často vůbec nevykreslí. Aplikace PDF Editor spolehlivě otevře a vyplní standardní interaktivní i neinteraktivní formuláře; u dynamického formuláře, který potřebuje konkrétní software pro počítač, požádej vydavatele o standardní verzi PDF.",
  faq: [
    {
      q: "Proč mi formulář PDF funguje v jednom programu, ale ne v jiném?",
      a: "Pravděpodobně používá funkce, které nepodporuje každý prohlížeč – často jde o dynamický XFA formulář. Standardní formuláře jsou široce kompatibilní; dynamické mohou vyžadovat konkrétní software a v řadě prohlížečů se nevykreslí, zvlášť mobilních a webových.",
    },
    {
      q: "Co je dynamický nebo XFA formulář?",
      a: "Je to pokročilý typ formuláře, který se chová spíš jako malý program než statická stránka. Pořádně ho vykreslí jen určitý software, a proto jinde může zobrazit upozornění nebo prázdnou stránku.",
    },
    {
      q: "Jak otevřu formulář, který říká, že mám použít kompatibilní prohlížeč?",
      a: "Vyzkoušej plnohodnotný program na PDF. Pokud je to dynamický formulář, který se pořád neotevře, požádej vydavatele o standardní PDF nebo tisknutelnou verzi – řada prohlížečů dynamické formuláře opravdu neumí vykreslit.",
    },
    {
      q: "Můžu dynamický formulář sám převést na standardní?",
      a: "Z hotového souboru spolehlivě ne. Spolehlivá cesta je požádat vydavatele o standardní nebo neinteraktivní verzi. Vynucený převod často ztratí pole nebo data.",
    },
    {
      q: "Je problém s kompatibilitou to samé jako chybějící pole?",
      a: "Trochu se to překrývá – problém s kompatibilitou může způsobit, že pole v nepodporovaném prohlížeči chybí. Ale chybějící pole je často jen základní prohlížečka nevykreslující standardní formulář, což spraví schopná aplikace.",
    },
  ],
  related: [
    {
      label: "Chybí pole ve formuláři PDF",
      path: "/guides/pdf-form-fields-missing",
    },
    { label: "Formulář PDF nefunguje", path: "/guides/pdf-form-not-working" },
    { label: "Jak fungují formuláře PDF", path: "/guides/how-pdf-forms-work" },
    { label: "Oprav chyby ve formuláři PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formuláře PDF", path: "/pdf-forms" },
};

export default content;
