import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-online",
  h1: "Come comprimere un PDF online senza caricarlo su un server",
  description:
    "Riduci un PDF direttamente nel tuo browser, senza caricare nulla né creare un account. In cosa la compressione sul dispositivo si differenzia dai tipici strumenti online, e il compromesso sulla qualità.",
  updated: "2026-05-23",
  intro: [
    "«Comprimi PDF online» evoca di solito un’immagine familiare e un po’ scomoda: carica il tuo file sul server di uno sconosciuto, aspetta, scarica il risultato, e spera che il documento appena consegnato non fosse qualcosa a cui tenevi. Esiste una versione migliore di quel flusso — una che gira direttamente nella scheda del browser, così il file non lascia mai il tuo dispositivo.",
    "Questa guida usa lo strumento gratuito Compress PDF, che lavora in locale usando il processore del tuo stesso dispositivo. È «online» nel senso che ci arrivi tramite una pagina web, ma il tuo PDF non viene mai inviato da nessuna parte. Questa distinzione conta soprattutto per i documenti che le persone comprimono davvero: contratti scansionati, estratti conto, domande.",
    "Vedremo i passaggi, spiegheremo onestamente il compromesso sulla qualità, e segnaleremo i tipi di file in cui la compressione da browser brilla oppure trova un limite.",
  ],
  steps: [
    {
      title: "Apri lo strumento Compress PDF",
      body: "Vai allo strumento Compress PDF nel tuo browser. Si carica nella pagina ed elabora il tuo file sul dispositivo — nessun caricamento, nessuna registrazione.",
    },
    {
      title: "Aggiungi il tuo PDF",
      body: "Trascina il file nella zona di rilascio o fai clic per sceglierlo. Nulla viene trasmesso; il file viene letto in locale.",
    },
    {
      title: "Scegli un livello di compressione",
      body: "Basso mantiene il massimo dettaglio, Consigliato bilancia dimensione e qualità, Forte è il più piccolo. Per mail e caricamenti, Consigliato è di solito il punto giusto.",
    },
    {
      title: "Comprimi",
      body: "Avvialo. Lo strumento ri-renderizza e ricodifica le pagine in locale, poi mostra la dimensione prima e dopo e la percentuale risparmiata.",
    },
    {
      title: "Controlla che il risultato sia accettabile",
      body: "Apri il file compresso e guarda le pagine. Le scansioni dovrebbero restare leggibili; se un livello sembra troppo aggressivo, torna a uno più leggero.",
    },
    {
      title: "Scarica il file più piccolo",
      body: "Salvalo come nuovo file, così il tuo originale resta intatto. La copia compressa è pronta da allegare o caricare.",
    },
  ],
  tips: [
    "«Online» qui non significa «caricato». Il file viene elaborato nel tuo browser, sul tuo dispositivo, il che è il modo più sicuro di comprimere qualsiasi cosa sensibile.",
    "La compressione comporta perdita — nessuno strumento onesto sostiene il contrario. I livelli più bassi mantengono più dettaglio; scegli quello che sembra ancora accettabile per il tuo uso.",
    "Per ottenere un risparmio reale nel browser, lo strumento ri-renderizza le pagine come immagini, quindi il testo nel risultato non è più selezionabile né ricercabile. Tieni l’originale se ti serve quella caratteristica.",
    "I PDF solo testo o vettoriali si riducono a malapena perché c’è poco dato immagine da comprimere — i guadagni maggiori arrivano da scansioni e file ricchi di foto.",
    "I PDF protetti da password non possono essere elaborati nel browser. Rimuovi prima la password, oppure usa l’app PDF Editor, che supporta i file protetti.",
  ],
  mobileNote:
    "Comprimere un documento sensibile in movimento è esattamente dove l’elaborazione sul dispositivo dà il meglio di sé. L’app PDF Editor comprime interamente offline — puoi ridurre un contratto in modalità aereo e nemmeno un byte lascerà il telefono — e gestisce anche i file protetti da password.",
  faq: [
    {
      q: "Il mio PDF viene davvero caricato su un server?",
      a: "No. Nonostante ci si arrivi tramite una pagina web, lo strumento Compress PDF gira nel tuo browser ed elabora il file sul tuo dispositivo. Nulla viene trasmesso, il che lo rende sicuro per i documenti riservati.",
    },
    {
      q: "Di quanto si ridurrà il mio file?",
      a: "Dipende dal contenuto. I PDF scansionati o ricchi di immagini spesso si riducono del 50-90%; i PDF solo testo possono cambiare a malapena. Lo strumento mostra la dimensione esatta prima e dopo.",
    },
    {
      q: "La qualità peggiorerà?",
      a: "Sì, un po’ — questa è compressione con perdita e non facciamo finta del contrario. I livelli più bassi conservano più dettaglio. Scegli il livello che appare accettabile per come userai il documento.",
    },
    {
      q: "Perché non riesco a selezionare il testo dopo la compressione?",
      a: "Per ottenere un risparmio di dimensione reale nel browser, ogni pagina viene trasformata in un’immagine, il che elimina il livello di testo selezionabile. Se ti serve testo ricercabile, tieni l’originale o usa un approccio più leggero.",
    },
    {
      q: "Posso comprimere in questo modo un PDF protetto?",
      a: "Non nel browser. Rimuovi prima la password, oppure usa l’app mobile PDF Editor, che può aprire e comprimere i file protetti.",
    },
  ],
  related: [
    { label: "Compress PDF — riduci nel tuo browser", path: "/compress-pdf" },
    { label: "Come comprimere un PDF senza perdere qualità", path: "/guides/how-to-compress-pdf" },
    { label: "Come ridurre la dimensione di un PDF per la mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Strumenti PDF che rispettano la privacy", path: "/guides/privacy-first-pdf-tools" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
