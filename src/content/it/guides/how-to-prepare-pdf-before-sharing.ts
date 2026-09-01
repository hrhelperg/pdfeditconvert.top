import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-before-sharing",
  h1: "Come preparare un PDF prima di condividerlo (checklist)",
  description:
    "La verifica prima dell’invio per i PDF: elimina pagine sparse, correggi l’orientamento, riduci la dimensione ed etichetta le bozze. Invia un documento pulito, delle dimensioni giuste e intenzionale.",
  updated: "2026-05-23",
  intro: [
    "Il minuto prima di premere invio è il momento più economico per accorgersi di un problema in un PDF. Una volta che è nella casella di qualcuno, la pagina bianca, la scansione storta, i 40 MB di dimensione, o la nota interna che hai dimenticato di togliere diventano anche un suo problema — e un tuo motivo per scusarti. Un breve passaggio deliberato prima dell’invio previene quasi tutto questo.",
    "Questa guida è proprio quel passaggio: una checklist pratica che richiede un paio di minuti e usa strumenti gratuiti del browser, ognuno dei quali funziona sul tuo dispositivo senza caricare nulla. È pensata per i documenti che vanno davvero verso altre persone — preventivi, contratti, domande, report.",
    "Non si tratta di rifinitura fine a se stessa. Si tratta di far sì che chi riceve il tuo file trovi esattamente ciò che si aspettava, a una dimensione che può effettivamente ricevere, senza nulla di extra allegato.",
  ],
  steps: [
    {
      title: "Conferma che sia la versione giusta e definitiva",
      body: "Apri il file e controlla che sia l’ultima bozza, completamente rivista. Un PDF è una fotografia — correggere un refuso dopo l’invio significa rimandarlo.",
    },
    {
      title: "Rimuovi tutto ciò che non dovrebbe uscire",
      body: "Elimina pagine bianche, copertine, appunti interni e pagine destinate a qualcun altro, tenendo solo ciò che appartiene al documento, con lo strumento Extract PDF Pages.",
    },
    {
      title: "Correggi orientamento e ordine",
      body: "Usa lo strumento Rotate PDF sulle pagine storte e lo strumento Reorder PDF Pages su tutto ciò che è fuori sequenza, così il documento si legge in modo pulito dall’inizio alla fine.",
    },
    {
      title: "Porta la dimensione sotto il limite",
      body: "Se il file è pesante — scansioni e foto lo rendono tale — passalo dallo strumento Compress PDF per rientrare nei tipici limiti di 10-25 MB di mail e portali.",
    },
    {
      title: "Etichetta il suo stato se non è definitivo",
      body: "Se stai condividendo una bozza per revisione, aggiungi una filigrana BOZZA con lo strumento Add Watermark to PDF, così nessuno la scambia per la versione firmata.",
    },
    {
      title: "Nominalo chiaramente e invia",
      body: "Dagli un nome file descrittivo e datato, così è ovvio nella casella del destinatario e facile da ritrovare in seguito, poi allegalo o caricalo.",
    },
  ],
  tips: [
    "L’errore più comune prima dell’invio è una pagina che non dovrebbe esserci — una bianca, un duplicato, o una pagina con dettagli destinati a qualcun altro. Controlla pagina per pagina.",
    "Dimensiona bene in base al canale: la mail si ferma intorno ai 25 MB, molti portali di caricamento molto più in basso. Comprimere un file ricco di scansioni è di solito la soluzione.",
    "Una filigrana BOZZA o RISERVATO fissa le aspettative e impedisce che una versione di lavoro venga trattata come definitiva — un’assicurazione economica su tutto ciò che non è ancora firmato.",
    "Un nome file chiaro fa parte della preparazione del documento. È la prima cosa che vede il destinatario e quella che cercherai tu stesso più tardi.",
    "Per qualsiasi cosa davvero sensibile, valuta anche una password — la preparazione non è solo ordine, è anche non condividere più del necessario.",
  ],
  mobileNote:
    "Inviare documenti direttamente dal telefono è esattamente il momento in cui un rapido passaggio di preparazione ripaga. L’app PDF Editor ti lascia tagliare pagine, ruotare, comprimere, applicare filigrane e rinominare in un unico posto prima che il file esca — offline, senza nulla caricato.",
  faq: [
    {
      q: "Cosa dovrei controllare prima di inviare un PDF?",
      a: "Che sia la versione definitiva, senza pagine sparse o sensibili, correttamente orientato e ordinato, abbastanza piccolo per il canale, etichettato se è una bozza, e chiaramente nominato. Un passaggio di due minuti copre tutto questo.",
    },
    {
      q: "Come mi assicuro di non condividere le pagine sbagliate?",
      a: "Tieni solo le pagine che appartengono al documento con lo strumento Extract PDF Pages, e rivedi il risultato pagina per pagina. Appunti interni e dettagli di altri destinatari spesso si nascondono su pagine che non ti servono per l’invio.",
    },
    {
      q: "Perché la dimensione del file conta così tanto?",
      a: "I servizi di posta rifiutano gli allegati oltre circa 25 MB e molti portali di caricamento hanno limiti ancora più bassi. Un PDF ricco di scansioni li supera facilmente, quindi comprimerlo evita un rimbalzo o un caricamento rifiutato.",
    },
    {
      q: "Questi strumenti di preparazione sono privati?",
      a: "Sì. Gli strumenti di estrazione, rotazione, riordino, compressione e filigrana funzionano tutti nel tuo browser, sul tuo dispositivo — nulla viene caricato.",
    },
    {
      q: "Ogni PDF condiviso dovrebbe essere protetto da password?",
      a: "No — solo quelli davvero sensibili. Una password aggiunge attrito per il destinatario, quindi riservala ai documenti il cui contenuto ha davvero bisogno di protezione.",
    },
  ],
  related: [
    { label: "Compress PDF — riduci per la mail", path: "/compress-pdf" },
    { label: "Add Watermark to PDF — etichetta le bozze", path: "/add-watermark-to-pdf" },
    { label: "Come ridurre la dimensione di un PDF per la mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Come condividere un PDF dal telefono", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "All free PDF tools", path: "/pdf-tools" },
};

export default content;
