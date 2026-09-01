import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "remote-work",
  h1: "PDF Editor per il lavoro da remoto",
  description:
    "Lavora con i documenti in movimento: scansiona, firma e condividi PDF da qualsiasi dispositivo, ovunque tu sia.",
  intro: [
    "Il lavoro da remoto separa il tuo ufficio dal tuo lavoro. Il rovescio della medaglia è che le operazioni documentali che prima avvenivano a una stampante, a uno scanner o su un’unità condivisa, ora devono avvenire su qualsiasi dispositivo tu stia usando, spesso in treno, in un bar o dal cliente. Un editor PDF nativo per il telefono colma questo divario.",
    "Il requisito minimo per qualsiasi strumento da lavoro remoto è che funzioni con un WiFi instabile, funzioni offline quando serve, non richieda di caricare documenti sensibili presso terzi e funzioni su qualsiasi dispositivo tu stia usando. PDF Editor soddisfa tutti e quattro i punti perché tutte le operazioni pesanti avvengono sul dispositivo.",
    "Questi sono i flussi di lavoro concreti che trasformano un telefono in un ufficio documentale portatile, senza dipendere da una scrivania specifica, da un paese o da una connessione internet.",
  ],
  workflows: [
    {
      title: "Firma documenti mentre viaggi",
      body: "Firma un contratto in aereo o in treno. La firma viene salvata sul dispositivo; il file viene crittografato al salvataggio.",
    },
    {
      title: "Scansiona quando non hai uno scanner",
      body: "Camere d’albergo, centri congressi, uffici dei clienti — la fotocamera del telefono più la correzione automatica bastano per qualsiasi documento aziendale.",
    },
    {
      title: "Combina i file per un passaggio di consegne da remoto",
      body: "Unisci i documenti di cui ha bisogno il tuo collega in un unico PDF, condividilo via Drive o Slack, fatto.",
    },
    {
      title: "Comprimi prima di caricare su reti lente",
      body: "Il WiFi dell’hotel rende dolorosi gli allegati enormi. Comprimi prima, carica dopo, risparmia un’ora.",
    },
    {
      title: "Correggi piccoli errori senza avviare un portatile",
      body: "Un errore di battitura in una bozza, la data sbagliata su un preventivo: correggilo dal telefono in 60 secondi e vai avanti.",
    },
  ],
  appPitch:
    "PDF Editor si integra naturalmente nel resto dello stack per il lavoro da remoto — Drive, iCloud, Notion, Slack, Linear, GitHub. È il livello che gestisce le operazioni documentali senza richiedere una scrivania o una connessione stabile.",
  related: [
    { label: "PDF per le aziende", path: "/pdf-for-business" },
    { label: "Casi d’uso — liberi professionisti", path: "/use-cases/freelancers" },
    { label: "Scansiona in PDF", path: "/scan-to-pdf" },
  ],
};

export default content;
