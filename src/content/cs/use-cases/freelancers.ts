import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "freelancers",
  h1: "PDF Editor pro freelancery",
  description:
    "Postupy, které freelanceři milují: nabídky, podepsané dohody a faktury – všechno z telefonu.",
  intro: [
    "Freelanceři řeší většinu firemních záležitostí z telefonu. Není tu žádná kancelář, žádné IT oddělení, žádná sdílená tiskárna. Stejný postup s PDF, který firemnímu týmu zabere tři aplikace a předplatné elektronického podpisu, se tu často musí zvládnout v jedné aplikaci, rychle, mezi fakturovatelnými hodinami.",
    "Každá minuta strávená bojem s nástroji je minuta, kterou nestrávíš prací, za kterou ti zaplatí. Editor PDF, který prostě funguje – bez nahrávání, bez zakládání účtu, bez měsíčních poplatků za nástroj používaný dvakrát týdně – patří mezi ty tiché investice, které se vrátí v horizontu měsíců.",
    "Tohle jsou konkrétní operace, díky kterým je život freelancera z telefonu zvládnutelný – rychlý, soukromý a bez zátěže v podobě předplatných.",
  ],
  workflows: [
    {
      title: "Pošli vyladěnou nabídku jako PDF",
      body: "Nabídku exportuj z Notionu, Pages nebo Google Docs do PDF. Podepiš ji, přilož k e-mailu, odešli. Příjemce uvidí přesně to, co jsi zamýšlel.",
    },
    {
      title: "Podepisuj dohody s klienty z telefonu",
      body: "Podpis si nakresli jednou a znovu ho použij na každé další smlouvě. Konec věty „ozvu se, až budu u notebooku“.",
    },
    {
      title: "Skenuj účtenky za výdaje rovnou na místě",
      body: "Schůzka u kávy, jízda taxíkem, nákup vybavení – naskenuj to hned. Výsledná PDF jsou prohledávatelná a kompatibilní s účetním softwarem.",
    },
    {
      title: "Fakturuj vždy v PDF",
      body: "Ať používáš jakýkoli fakturační nástroj, před odesláním exportuj do PDF. Snížíš riziko úprav a vypadá to profesionálněji než DOCX.",
    },
    {
      title: "Spoj výstupy při předání projektu",
      body: "Při uzavírání projektu spoj finální zadání, podepsanou dohodu a podkladový výzkum do jednoho archivačního PDF.",
    },
  ],
  appPitch:
    "PDF Editor je tichý pracovní kůň každého freelancera – nenahrazuje tvé nástroje pro design nebo fakturaci, jen zbaví práci s dokumenty veškeré námahy. Zdarma, nativní, přímo v zařízení. K dispozici na iOS a Androidu.",
  related: [
    { label: "Podepiš PDF z telefonu", path: "/sign-pdf" },
    { label: "Pracovní postupy PDF pro firmy", path: "/pdf-for-business" },
    { label: "Případy užití — práce na dálku", path: "/use-cases/remote-work" },
  ],
};

export default content;
