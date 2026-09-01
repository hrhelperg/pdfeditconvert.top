import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-invoices-as-pdf",
  h1: "Come gestire le fatture in PDF (emettere, tracciare, archiviare)",
  description:
    "Un metodo di fatturazione in PDF che non richiede software di contabilità: generare, numerare, inviare, tracciare e archiviare — solo con strumenti gratuiti del browser e un sistema di cartelle ordinato.",
  updated: "2026-05-29",
  intro: [
    "La maggior parte delle piccole imprese, in realtà, non ha bisogno di un software di contabilità per le fatture. Ha bisogno di un modo pulito per generare un PDF, numerarlo in modo coerente, inviarlo, tracciare quando viene pagato e archiviarlo in vista della dichiarazione dei redditi. Il lavoro è meccanico, gli strumenti sono semplici; il caos nasce solo quando si salta la convenzione.",
    "Un metodo di fatturazione ha quattro parti: emissione (da dove nasce il PDF), tracciamento (dove registri cosa hai inviato), pagamento (quando arriva) e archivio (dove restano le copie pagate). Ogni parte è breve, e nessuna richiede un abbonamento se non lo vuoi.",
    "Questa guida segue il metodo così come può usarlo davvero un libero professionista o un piccolo team — con un PDF generato da un modello Word, una numerazione che controlli tu, e un archivio che regge anche a un controllo fiscale. Non è l’unico modo possibile; è quello che non si rompe.",
  ],
  steps: [
    {
      title: "Crea la fattura in Word o Pages partendo da un modello",
      body: "Un modello di fattura in Word ti dà un’impaginazione già collaudata, con segnaposto per cliente, data, voci e totale. Compila le variabili ed esporta in PDF con Word in PDF. Evita di modificare il numero finale ovunque tranne che nel sorgente.",
    },
    {
      title: "Usa una numerazione progressiva delle fatture",
      body: "FATT-2026-001, FATT-2026-002, e così via. Riparti da zero ogni anno. I numeri devono essere unici e senza salti — le autorità fiscali segnalano le lacune. Tieni un elenco aggiornato in un foglio di calcolo o in un file di testo.",
    },
    {
      title: "Salva con un nome file prevedibile",
      body: "NomeCliente_Fattura_FATT-2026-001_2026-05-29.pdf. Il numero di fattura nel nome del file coincide con quello riportato sul documento. La cartella per cliente rende immediato ritrovare le fatture di ognuno.",
    },
    {
      title: "Invia e registra subito",
      body: "Invia il PDF via mail con una breve nota di accompagnamento e registra subito l’invio nel tuo foglio di tracciamento. Data di invio, numero fattura, importo, scadenza. Il momento in cui non registri è esattamente il momento in cui te ne dimenticherai.",
    },
    {
      title: "Applica la filigrana PAGATA una volta ricevuto il pagamento",
      body: "Aggiungi filigrana a PDF applica la scritta PAGATA sul file, con la data. La copia pagata va in /fatture/pagate/; quella non ancora saldata resta in /fatture/da-incassare/. Uno stato visibile a colpo d’occhio batte una riga in un foglio di calcolo.",
    },
    {
      title: "Archivia per anno",
      body: "A fine anno, sposta /fatture/pagate/ in /Archivio/Fatture/2026/. Conserva le fatture per almeno sette anni (i tempi variano in base alla normativa applicabile). L’archivio deve restare comprensibile da solo anche tra cinque anni, quando avrai dimenticato la logica con cui lo avevi organizzato.",
    },
  ],
  tips: [
    "Non modificare mai una fattura già inviata. Se l’importo è sbagliato, emetti una nota di credito o una nuova fattura — la tracciabilità deve restare intatta.",
    "Fai coincidere il numero di fattura nel nome del file, quello sul documento e la riga corrispondente nel tuo foglio di tracciamento. Tre punti diversi che dicono la stessa cosa.",
    "PDF/A è il formato d’archiviazione che alcune autorità fiscali preferiscono. Se la normativa applicabile lo richiede, ri-esporta il pacchetto di fine anno in PDF/A.",
    "Comprimi le fatture prima di archiviarle — sono solo testo, ma gli archivi si accumulano nel tempo. Le copie compresse fanno risparmiare spazio su disco negli anni.",
    "Non proteggere le fatture con una password, a meno che il cliente non lo richieda esplicitamente. È scomodità senza beneficio su un documento che contiene solo numeri e nomi.",
  ],
  mobileNote:
    "Sempre più fatture nascono direttamente dal telefono — un invio veloce da un bar, appena finito un lavoro. L’app PDF Editor ti permette di compilare il modello, inserire il numero di fattura e inviare il PDF via mail dal telefono, con una copia salvata in locale per i tuoi archivi.",
  faq: [
    {
      q: "Mi serve un software di fatturazione?",
      a: "Non per volumi bassi. Un modello Word, un foglio di tracciamento e un sistema di cartelle gestiscono senza problemi decine di fatture al mese. Un software conviene quando serve la fatturazione ricorrente, più valute o un numero elevato di clienti.",
    },
    {
      q: "Che formato devo usare per la numerazione delle fatture?",
      a: "Progressivo, senza salti, idealmente con l’anno all’inizio. FATT-2026-001 è leggibile a colpo d’occhio e regge bene un controllo fiscale.",
    },
    {
      q: "Per quanto tempo devo conservare le fatture?",
      a: "I tempi variano in base alla normativa applicabile; sette anni è un valore prudente di default. Verifica le regole del tuo paese per il requisito effettivo.",
    },
    {
      q: "Devo inviare le fatture in Word o in PDF?",
      a: "Sempre in PDF. Il PDF blocca formato e importo; un documento Word invita anche il cliente più ben intenzionato a «sistemare» qualcosa.",
    },
    {
      q: "E le fatture con IVA o altre imposte sulle vendite?",
      a: "In base alla normativa applicabile, alcune giurisdizioni richiedono un’impaginazione specifica, una numerazione progressiva e un archivio nel formato originale. Rispetta le regole locali; il metodo descritto sopra le può accogliere senza problemi.",
    },
  ],
  related: [
    { label: "PDF per le aziende — contratti e flussi di lavoro", path: "/pdf-for-business" },
    { label: "Word in PDF — esporta fatture pulite", path: "/word-to-pdf" },
    { label: "Aggiungi filigrana a PDF — applica PAGATA sulle fatture chiuse", path: "/add-watermark-to-pdf" },
    { label: "Flussi di lavoro PDF per piccole imprese", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "PDF per le aziende — contratti e flussi di lavoro", path: "/pdf-for-business" },
};

export default content;
