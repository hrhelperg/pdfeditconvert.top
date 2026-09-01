import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-agencies",
  h1: "Flussi di lavoro PDF per agenzie (deck, brief, approvazioni)",
  description:
    "La catena PDF di un’agenzia — deck di presentazione, brief creativi, approvazioni dei clienti, deliverable — resta veloce e prevedibile con strumenti gratuiti, privati e nel browser.",
  updated: "2026-05-29",
  intro: [
    "Le agenzie gestiscono più PDF di quanto pensino. Escono deck di presentazione, tornano brief, il lavoro creativo passa per le approvazioni, i deliverable partono a lotti, i retro finiscono nelle cartelle condivise. Ognuno di questi è un piccolo compito; messi insieme, sono l’arteria su cui gira l’agenzia.",
    "Gran parte delle operazioni PDF di un’agenzia si ripete sempre uguale: convertire un deck di slide in un PDF pronto da inviare, unire una versione per il presenter con gli allegati, comprimere per i portali dei clienti, mettere la filigrana sulle bozze durante la revisione, firmare le approvazioni, archiviare alla chiusura del progetto. Con un ritmo definito e i pochi strumenti giusti, tutto questo resta leggero. Senza, si mangia ore.",
    "Questa guida descrive il flusso di lavoro che abbiamo visto funzionare nelle piccole agenzie. Nulla di tutto questo richiede software PDF a pagamento; gran parte gira in una scheda del browser senza inviare materiale sensibile dei clienti a un server esterno.",
  ],
  steps: [
    {
      title: "Pitch deck: esporta, comprimi, controlla il brand",
      body: "Deck di slide → esportazione in PDF → comprimi per l’email del potenziale cliente. Verifica che i font siano incorporati, così i titoli delle slide non vengono sostituiti dal lato del destinatario. Copertina con il nome del potenziale cliente, titolo nei metadati impostato, file rinominato come NomeProspect_Pitch_AAAA-MM-GG.pdf.",
    },
    {
      title: "Brief creativo: unisci il documento con gli asset",
      body: "Documento del brief più gli asset del cliente (loghi, esempi, brand book) → usa Unisci PDF per creare un unico file di lavoro a cui il team può fare riferimento. Conserva gli originali; la versione unita serve solo per la consultazione rapida.",
    },
    {
      title: "Approvazioni: PDF firmato, filigrana sulle bozze durante la revisione",
      body: "Le bozze circolano con Aggiungi filigrana che timbra BOZZA. Quando il cliente approva, un PDF firmato formalizza l’approvazione, con Firma PDF a registrare il via libera. I file finali perdono la filigrana.",
    },
    {
      title: "Deliverable: PDF ad alta qualità, separati dai file di lavoro",
      body: "I deliverable finali si esportano con una qualità più alta rispetto alle versioni interne. Riordina le pagine del PDF conferma l’ordine giusto; Estrai pagine PDF elimina tutto ciò che non deve essere consegnato.",
    },
    {
      title: "Comprimi per i portali dei clienti",
      body: "La maggior parte dei portali aziendali dei clienti accetta file fino a 10–25 MB. Comprimi PDF porta i deliverable sotto il limite senza una perdita di qualità evidente. Il file consegnato è la copia compressa; l’archivio sorgente conserva quella non compressa.",
    },
    {
      title: "Archivia alla chiusura del progetto",
      body: "Sposta la cartella del progetto in /Storico/[Anno]/[Cliente]/[NomeProgetto]/. La cartella attiva resta snella; lo storico è la fonte dei casi studio per il prossimo pitch.",
    },
  ],
  tips: [
    "I deck pensati per lo schermo vanno esportati con una compressione più leggera rispetto a quelli pensati per la stampa: sullo schermo gli artefatti visivi si notano meno.",
    "Standardizza la copertina del deck. Logo, nome del potenziale cliente, data, contatto dell’agenzia. Layout diversi a ogni pitch danno un’impressione poco coerente.",
    "Metti la filigrana su tutte le bozze. Nel momento in cui una bozza perde la filigrana lungo la catena, la responsabilità diventa sfumata.",
    "Le approvazioni vanno su PDF firmati, non in una chat. Il te del futuro avrà bisogno di una traccia difendibile.",
    "Prepara in anticipo una cartella /Modelli/ con copertina del deck, modello del brief, modulo di approvazione. Riusare batte sempre il ricreare da zero.",
  ],
  mobileNote:
    "La vita in agenzia passa dal telefono durante gli shooting, in viaggio, negli uffici dei clienti. L’app PDF Editor gestisce bozze, firme e riesportazioni rapide da mobile, così un’approvazione può arrivare dal telefono senza aspettare di tornare al computer.",
  faq: [
    {
      q: "Quanto deve pesare un PDF di pitch deck?",
      a: "Idealmente sotto i 10 MB, sempre sotto i 25 MB. I deck molto visivi si comprimono meno di quelli di solo testo: tieni d’occhio la dimensione man mano che il deck cresce.",
    },
    {
      q: "Conviene usare un solo modello per ogni pitch?",
      a: "Sì per la struttura, no per il contenuto creativo. Chi legge deve riconoscere subito «questa è una proposta dell’agenzia»; è il contenuto creativo a distinguere ogni pitch.",
    },
    {
      q: "Come teniamo traccia dello stato delle approvazioni?",
      a: "Con lo stato della cartella: /bozze/, /approvati/, /consegnati/. Il PDF firmato di approvazione è il documento che conferma il passaggio da una cartella all’altra.",
    },
    {
      q: "Servono PDF di lavoro separati da quelli di consegna?",
      a: "Sì. I file di lavoro non sono compressi e contengono annotazioni; i deliverable sono compressi, puliti e definitivi. Fai attenzione a non consegnare per errore il file di lavoro.",
    },
    {
      q: "Qual è l’errore più comune nella gestione dei PDF in agenzia?",
      a: "Inviare un deck non definitivo. Metti la filigrana sulle bozze, dai loro un nome chiaro, e fai in modo che solo il file nella cartella /approvati/ arrivi al cliente.",
    },
  ],
  related: [
    { label: "PDF per le aziende — contratti e flussi di lavoro", path: "/pdf-for-business" },
    { label: "Unisci PDF — assembla brief e deliverable", path: "/merge-pdf" },
    { label: "Flussi di lavoro PDF per consulenti", path: "/guides/pdf-workflows-for-consultants" },
    { label: "Il miglior flusso di lavoro PDF per i team", path: "/guides/best-pdf-workflow-for-teams" },
  ],
  parentHub: { label: "PDF per le aziende — contratti e flussi di lavoro", path: "/pdf-for-business" },
};

export default content;
