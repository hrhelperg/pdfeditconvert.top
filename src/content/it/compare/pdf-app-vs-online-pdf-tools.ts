import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-app-vs-online-pdf-tools",
  h1: "App PDF o strumenti PDF online — quale scegliere?",
  description:
    "App PDF native contro strumenti basati su browser: velocità, privacy e accesso offline a confronto.",
  intro: [
    "Ci sono due modi per lavorare con i PDF da telefono o computer: installare un’app nativa o usare uno dei tanti strumenti PDF basati su browser. Entrambe le opzioni funzionano, ma i compromessi sono molto diversi, e contano soprattutto per i documenti sensibili.",
    "Gli strumenti basati su browser vincono sulla comodità: un clic e stai già lavorando. Le app native vincono su velocità, privacy e accesso offline. Per conversioni occasionali di documenti pubblici, gli strumenti da browser vanno benissimo. Per il lavoro documentale quotidiano — soprattutto contratti, documenti d’identità e file dei clienti — nativo è la scelta migliore di default.",
    "Questo confronto copre velocità, privacy, accesso offline, costo e i tipi di file che ciascuna opzione gestisce meglio, così puoi scegliere in modo consapevole invece di finire dove ti ha portato il primo risultato di Google.",
  ],
  leftLabel: "App PDF nativa",
  rightLabel: "Strumento PDF online",
  rows: [
    { feature: "Funziona offline", left: "sì", right: "no" },
    { feature: "I file restano sul tuo dispositivo", left: "sì", right: "no" },
    { feature: "Velocità (nessuna attesa di caricamento/scaricamento)", left: "sì", right: "no" },
    { feature: "Nessun limite di dimensione dei file", left: "sì", right: "Limitato" },
    { feature: "Non serve un account", left: "sì", right: "A volte" },
    { feature: "Funziona su reti aziendali bloccate", left: "sì", right: "Forse" },
    { feature: "Comodo per l’uso quotidiano", left: "sì", right: "Limitato" },
    { feature: "Serve un’installazione iniziale", left: "sì", right: "no" },
    { feature: "Link di collaborazione tra dispositivi", left: "Limitato", right: "sì" },
  ],
  whenLeft: [
    "Gestisci documenti sensibili (contratti, documenti d’identità, buste paga)",
    "Lavori in posti con connessione internet instabile",
    "Modifichi i PDF abbastanza spesso da giustificare un’installazione",
    "Vuoi che lo stesso strumento funzioni anche in modalità aereo",
    "La privacy conta per i documenti che elabori",
  ],
  whenRight: [
    "Conversione o unione occasionale su un computer pubblico",
    "Non vuoi installare nulla",
    "Il documento non è sensibile",
    "Ti serve un link di anteprima condivisibile",
    "Sei su un dispositivo su cui non puoi installare app",
  ],
  faq: [
    {
      q: "Gli strumenti PDF online sono sicuri?",
      a: "Alcuni sì. La maggior parte ha politiche sulla privacy che permettono di conservare brevemente i tuoi file per l’elaborazione. Per documenti non sensibili va bene; per contratti o documenti d’identità, nativo è più sicuro.",
    },
    {
      q: "Perché l’app nativa è più veloce?",
      a: "Nessun caricamento del file, nessuna coda sul server, nessun download del risultato. L’intera operazione avviene localmente.",
    },
    {
      q: "Posso usare entrambi?",
      a: "Sì. Molti utenti usano di default lo strumento nativo per il lavoro quotidiano e ricorrono a uno strumento web nei rari casi in cui un collega ha bisogno di un link di anteprima condivisibile.",
    },
  ],
  related: [
    { label: "PDF Editor — panoramica completa", path: "/pdf-editor" },
    { label: "Sicurezza PDF", path: "/pdf-security" },
    { label: "PDF per le aziende", path: "/pdf-for-business" },
  ],
};

export default content;
