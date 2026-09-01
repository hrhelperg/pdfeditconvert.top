import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "remote-work",
  h1: "PDF Editor pro práci na dálku",
  description:
    "Pracuj s dokumenty na cestách: skenuj, podepisuj a sdílej PDF z libovolného zařízení, kdekoli se nacházíš.",
  intro: [
    "Práce na dálku odděluje kancelář od tvé práce. Nevýhodou je, že operace s dokumenty, které se dřív odehrávaly u tiskárny, skeneru nebo na sdíleném disku, se teď musí odehrát na jakémkoli zařízení, které zrovna používáš – často ve vlaku, v kavárně nebo u klienta. Nativní mobilní editor PDF tuhle mezeru zaplňuje.",
    "Laťka pro jakýkoli nástroj pro práci na dálku je, že funguje na nestabilní WiFi, funguje offline, když je potřeba, nevyžaduje nahrávání citlivých dokumentů třetí straně a funguje na jakémkoli zařízení, které zrovna používáš. PDF Editor splňuje všechny čtyři body, protože všechny náročné operace probíhají přímo v zařízení.",
    "Tohle jsou konkrétní pracovní postupy, díky kterým se telefon promění v přenosnou dokumentovou kancelář – bez závislosti na konkrétním stole, zemi nebo internetovém připojení.",
  ],
  workflows: [
    {
      title: "Podepisuj dokumenty na cestách",
      body: "Podepiš smlouvu v letadle nebo ve vlaku. Podpis se ukládá přímo v zařízení; soubor se při uložení zašifruje.",
    },
    {
      title: "Skenuj, i když nemáš skener",
      body: "Hotelové pokoje, kongresová centra, kanceláře klientů – fotoaparát telefonu spolu s automatickou korekcí stačí na jakýkoli pracovní dokument.",
    },
    {
      title: "Spoj soubory pro předání na dálku",
      body: "Sluč dokumenty, které kolega potřebuje, do jednoho PDF, sdílej přes Drive nebo Slack, hotovo.",
    },
    {
      title: "Zkomprimuj před nahráním na pomalých sítích",
      body: "Hotelová WiFi dělá z velkých příloh utrpení. Nejdřív zkomprimuj, pak nahraj, ušetříš hodinu.",
    },
    {
      title: "Uprav drobnosti bez zapínání notebooku",
      body: "Překlep v návrhu, špatné datum na nabídce – oprav to z telefonu za 60 sekund a jeď dál.",
    },
  ],
  appPitch:
    "PDF Editor přirozeně zapadá do zbytku sady nástrojů pro práci na dálku – Drive, iCloud, Notion, Slack, Linear, GitHub. Je to vrstva, která řeší operace s dokumenty bez nutnosti mít stůl nebo stabilní připojení.",
  related: [
    { label: "PDF pro firmy", path: "/pdf-for-business" },
    { label: "Případy užití — freelanceři", path: "/use-cases/freelancers" },
    { label: "Skenovat do PDF", path: "/scan-to-pdf" },
  ],
};

export default content;
