import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-google-docs",
  h1: "PDF o Google Docs — quando usare l’uno o l’altro (modifica, condivisione, blocco)",
  description:
    "Google Docs serve per collaborare, il PDF per consegnare. Una panoramica realistica su quando usare l’uno o l’altro, e come convertire in modo pulito tra i due.",
  updated: "2026-05-29",
  intro: [
    "Google Docs e il PDF non sono davvero in competizione — servono a fasi diverse della vita di un documento. Docs serve per scrivere, collaborare, rivedere, commentare; il PDF serve per consegnare, bloccare, firmare, archiviare. Provare a usare l’uno o l’altro fuori dal suo punto di forza è da dove nasce l’attrito.",
    "Un documento tipico passa attraverso entrambi: viene scritto in Docs perché è lì che avviene la collaborazione, poi esportato in PDF quando la versione è definitiva e sta per uscire dal gruppo di lavoro. Fare il percorso inverso — ricevere un PDF, importarlo in Docs per modificarlo — funziona ma perde sempre un po’ di fedeltà, quindi è un ripiego, non una routine.",
    "Questa guida percorre il quando-usare-l’uno-o-l’altro realistico per fase, più i meccanismi di conversione nelle due direzioni. Scegli il formato giusto al momento giusto e l’attrito quasi scompare.",
  ],
  steps: [
    {
      title: "Usa Google Docs mentre il documento viene scritto",
      body: "Modifica multi-autore, cursori in tempo reale, cronologia delle versioni, commenti. Docs gestisce tutto questo con facilità e il PDF non gestisce nulla di tutto ciò. La stesura e la revisione appartengono a Docs.",
    },
    {
      title: "Passa al PDF quando il documento è definitivo o esterno",
      body: "Una volta che un documento è destinato a un cliente, un regolatore, un fornitore o un archivio, il PDF blocca l’impaginazione e il contenuto. Il documento Docs resta come fonte modificabile; il PDF è il documento consegnato.",
    },
    {
      title: "Esporta da Docs a PDF in modo pulito",
      body: "File → Scarica → Documento PDF. Incorpora i font tramite le impostazioni di esportazione, se disponibili. Il PDF risultante mantiene titoli, tabelle, immagini e formattazione.",
    },
    {
      title: "Converti il PDF in un formato modificabile quando devi",
      body: "PDF in Word nel tuo browser estrae il testo da un PDF. Il risultato è approssimativo — l’impaginazione ne risente, le tabelle possono rompersi. Trattalo come un percorso di recupero, non come un flusso di lavoro abituale.",
    },
    {
      title: "Non firmare né archiviare in Google Docs",
      body: "Docs non ha un vero supporto per le firme, e la cronologia delle versioni è legata al tuo account Google. I documenti firmati e gli archivi appartengono al PDF, conservati in locale o in un caveau scelto con cura.",
    },
    {
      title: "Fai corrispondere il formato del file al destinatario",
      body: "I clienti si aspettano il PDF. Gli editor si aspettano Word o Docs. I team interni potrebbero preferire Docs per la collaborazione. Invia il formato che il destinatario userà davvero.",
    },
  ],
  tips: [
    "Non condividere un link di Google Docs con un cliente — potrebbe non avere un account Google, i permessi di condivisione potrebbero sorprenderti, e il documento può continuare a cambiare dopo che l’ha aperto.",
    "Quando converti da Docs a PDF, controlla l’impaginazione — quello che sembrava una pagina in Docs a volte trabocca in due nel PDF.",
    "Non «aprire in Docs» un PDF che hai ricevuto a meno che tu non debba fare modifiche pesanti. La conversione perde formattazione; il PDF originale è più pulito per leggere e condividere.",
    "Usa la cronologia delle versioni di Docs per la stesura collaborativa. Il PDF è lo scatto al momento della consegna.",
    "Considera Docs come la fonte di verità durante la stesura; considera il PDF come la fonte di verità dopo la consegna.",
  ],
  mobileNote:
    "Il telefono gestisce gran parte del lavoro PDF nelle fasi finali, anche quando la stesura avviene sul computer. L’app PDF Editor gestisce compressione dell’ultimo minuto, firma e condivisione del PDF finale su iOS e Android — utile nel momento tra «Docs è pronto» e «il cliente ha il file».",
  faq: [
    {
      q: "Posso semplicemente tenere tutto in Google Docs?",
      a: "Per la collaborazione interna, sì. Per la consegna esterna, no — i clienti si aspettano il PDF, e i permessi di condivisione di Docs possono far trapelare l’accesso in modi che non ti aspetti.",
    },
    {
      q: "Quanto funziona bene la conversione da PDF a Docs?",
      a: "Accettabile per recuperare il testo, scarsa per l’impaginazione. Il testo di solito passa; le tabelle, le colonne e la formattazione precisa ne risentono. Usala solo quando devi rimodificare un PDF di cui non hai la fonte.",
    },
    {
      q: "Devo firmare in Google Docs o in PDF?",
      a: "In PDF. Le firme elettroniche vere si applicano al PDF in modo pulito; Docs non ha un supporto nativo per le firme paragonabile agli strumenti di firma PDF.",
    },
    {
      q: "E Google Docs per l’archivio?",
      a: "Possibile ma rischioso — gli account possono cambiare, i documenti Docs possono essere eliminati, e il formato dipende dal servizio di Google. Il PDF è il formato di archivio migliore.",
    },
    {
      q: "Posso fare avanti e indietro Docs → PDF → Docs?",
      a: "Possibile ma con perdita di qualità. Ogni conversione perde fedeltà. Tieni il documento Docs originale come fonte modificabile e fai il percorso avanti e indietro solo quando devi davvero.",
    },
  ],
  related: [
    { label: "PDF Converter — Word, JPG, PNG e viceversa", path: "/pdf-converter" },
    { label: "PDF to Word — converti per le modifiche pesanti", path: "/pdf-to-word" },
    { label: "PDF o DOCX — confronto delle funzioni", path: "/guides/pdf-vs-docx" },
    { label: "PDF o DOCX in azienda", path: "/guides/pdf-vs-docx-for-business" },
  ],
  parentHub: { label: "PDF Converter — Word, JPG, PNG e viceversa", path: "/pdf-converter" },
};

export default content;
