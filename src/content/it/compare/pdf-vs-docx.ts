import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-docx",
  h1: "PDF o DOCX — confronto punto per punto",
  description:
    "PDF e DOCX a confronto su modifica, fedeltà dell’impaginazione, firma, sicurezza e condivisione. Scegli il formato giusto per ogni attività.",
  intro: [
    "PDF e DOCX sono i due formati in cui finisce la maggior parte dei documenti. Entrambi hanno un compito preciso, e scegliere quello giusto per ogni attività evita gran parte dei problemi di formattazione e condivisione che di solito si associano ai documenti in generale.",
    "Questo confronto è pratico, non accademico. Ogni riga riflette come si comportano i due formati nei flussi di lavoro reali, non come vengono definiti in un documento di standard. Ci concentriamo su ciò che noterai nel primo mese di uso intensivo dell’uno o dell’altro.",
    "In breve: il PDF vince quando il documento è finito, deve apparire identico a chi lo legge, oppure contiene una firma. Il DOCX vince quando il documento è ancora una bozza di lavoro, viene revisionato da più persone, oppure vuoi riutilizzare il contenuto altrove. La maggior parte dei documenti attraversa entrambi i formati in fasi diverse della propria vita.",
  ],
  leftLabel: "PDF",
  rightLabel: "DOCX",
  rows: [
    { feature: "Impaginazione fedele al pixel", left: "sì", right: "no" },
    { feature: "Modifica del testo semplice", left: "Limitato", right: "sì" },
    { feature: "Lettura universale", left: "sì", right: "no" },
    { feature: "Revisioni e commenti", left: "Limitato", right: "sì" },
    { feature: "Protezione con password (AES-256)", left: "sì", right: "sì" },
    { feature: "Rendering affidabile anche dopo 10 anni", left: "sì", right: "no" },
    { feature: "Visualizzazione su mobile senza app extra", left: "sì", right: "no" },
    { feature: "Campi modulo", left: "sì", right: "Limitato" },
    { feature: "Firma integrata", left: "sì", right: "Componente aggiuntivo" },
  ],
  whenLeft: [
    "Il documento è definitivo e non dovrebbe essere modificato",
    "Ti serve che appaia identico su ogni dispositivo",
    "Chi lo riceve potrebbe non avere Microsoft Word",
    "Il documento verrà archiviato per anni",
    "Ti serve un formato stampabile e pronto per la firma",
  ],
  whenRight: [
    "Il documento è ancora in fase di stesura",
    "Più persone lo stanno revisionando o co-scrivendo",
    "Le revisioni e i commenti sono importanti",
    "Devi riutilizzare o cambiare lo stile del contenuto",
    "Il documento diventerà un modello",
  ],
  faq: [
    {
      q: "Posso convertire tra PDF e DOCX?",
      a: "Sì. I buoni strumenti per PDF convertono in entrambe le direzioni con alta fedeltà per i documenti di testo.",
    },
    {
      q: "Quale formato è più sicuro?",
      a: "Entrambi supportano la crittografia AES-256. Non è il formato in sé a determinare la sicurezza, ma la password e il modo in cui la condividi.",
    },
    {
      q: "I miei font sopravviveranno alla conversione?",
      a: "Nella maggior parte dei casi sì. Se un font non è disponibile sul dispositivo di destinazione, viene sostituito con uno simile. Usa font comuni (Calibri, Inter, Helvetica) per ridurre al minimo le sostituzioni.",
    },
  ],
  related: [
    { label: "Guida: PDF o DOCX", path: "/guides/pdf-vs-docx" },
    { label: "Convertitore PDF", path: "/pdf-converter" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
};

export default content;
