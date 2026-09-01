import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-contracts-as-pdf",
  h1: "Come inviare un contratto in PDF (firmare, bloccare, consegnare)",
  description:
    "Un contratto richiede un metodo più rigoroso: bloccare il contenuto, applicare la firma, marcare le bozze con una filigrana e ottenere un file finale che l’altra parte possa controfirmare senza andirivieni.",
  updated: "2026-05-29",
  intro: [
    "I contratti sono il tipo di documento in cui una gestione sciatta del PDF fa più danni. Una copia firmata che risulta una versione diversa dalla bozza senza firma. Una controfirma applicata a un file che il primo firmatario credeva bloccato. Una filigrana da bozza dimenticata sul documento finale. Niente di esotico — eppure basta a far scoppiare controversie vere.",
    "Il rimedio è un metodo più rigoroso attorno a tre punti: bloccare il contenuto prima della firma, applicare le firme in un ordine chiaro, e consegnare il risultato come file finale davvero definitivo. Non serve un software di gestione contratti costoso: serve usare con metodo gli strumenti PDF di base, seguendo una sequenza onesta.",
    "Questa guida segue il percorso corretto — dalla bozza definitiva, attraverso le firme di entrambe le parti, fino a un PDF controfirmato e pulito che soddisfa anche l’avvocato. Copre anche il caso in cui la controparte voglia usare la propria piattaforma di firma.",
  ],
  steps: [
    {
      title: "Definisci prima il contenuto del contratto",
      body: "Ogni trattativa resta sul documento sorgente — Word, Pages, Docs. Non correggere direttamente nel PDF. Esporta in PDF solo quando entrambe le parti hanno concordato che il testo è definitivo.",
    },
    {
      title: "Elimina le tracce di bozza e la filigrana",
      body: "Rimuovi le filigrane BOZZA (con Aggiungi filigrana a PDF eviti fin dall’inizio di applicarne una sul documento finale). Il PDF finale deve avere davvero l’aspetto di un documento finale.",
    },
    {
      title: "Firma tu per primo",
      body: "Firma PDF ti permette di aggiungere una firma scritta al computer o disegnata nel punto giusto. Firma per primo se sei tu a proporre il contratto; la controparte controfirmerà il PDF che riporta già la tua firma.",
    },
    {
      title: "Blocca il file prima di inviarlo",
      body: "Se lo strumento lo consente, applica le restrizioni di modifica dopo la firma. La controparte può leggere e firmare, ma non può alterare il contenuto. È l’unico modo per congelare un contratto con sicurezza.",
    },
    {
      title: "Invia con istruzioni chiare",
      body: "Una nota breve basta: «In allegato: contratto firmato. Controfirma a pagina 8 e rimandalo indietro». Una frase sola evita un giro di domande di andirivieni.",
    },
    {
      title: "Ricevi il file controfirmato e archivia entrambe le versioni",
      body: "Quando arriva il PDF controfirmato, salvalo come versione di riferimento. Tieni nella stessa cartella la bozza senza firma, la tua copia con una sola firma e la copia con entrambe le firme. La catena delle versioni è già la tracciabilità di cui hai bisogno.",
    },
  ],
  tips: [
    "Non riusare il PDF già firmato per un secondo contratto. Parti sempre da una nuova esportazione per ogni contratto — metadati puliti, firme pulite.",
    "Se la controparte preferisce usare la propria piattaforma di firma (DocuSign, Adobe Sign, o altre), asseconda la sua scelta. Non vale la pena discutere su quale strumento sia più pulito.",
    "Assicurati che la tua firma sia visivamente riconoscibile. Un nome scritto in corsivo al computer è comunque una firma, ma trasmette meno intenzionalità di una firma disegnata a mano.",
    "Una copertina che elenca titolo del contratto, data e controparti rende molto più facile ritrovare il documento in seguito, rispetto ad affidarsi solo al nome del file.",
    "Applica una filigrana alle bozze (BOZZA, NON VALIDO PER LA FIRMA) durante la trattativa. L’etichetta visibile evita una controfirma per sbaglio.",
  ],
  mobileNote:
    "Le controfirme capitano spesso dal telefono — un socio che rilegge in treno, un cliente che firma tra una riunione e l’altra. L’app PDF Editor gestisce bene questo scenario: rileggi il contratto, firma con un dito sullo schermo, rimandalo indietro senza passare dal computer. Il file firmato esce dal telefono già come PDF pulito.",
  faq: [
    {
      q: "Una firma digitata su un PDF ha valore legale?",
      a: "In base alla normativa applicabile, per i contratti ordinari sì, nella maggior parte dei casi. Alcune situazioni specifiche (atti notarili, certi strumenti finanziari) richiedono qualcosa in più — verifica il tipo di contratto prima di darlo per scontato.",
    },
    {
      q: "Il contratto va protetto con una password?",
      a: "Di solito no. Le password aggiungono scomodità senza un vero beneficio in termini di sicurezza. Riservale agli allegati davvero riservati, non al contratto in sé.",
    },
    {
      q: "Come blocco un PDF dopo averlo firmato?",
      a: "Molti strumenti di modifica, inclusa l’app PDF Editor, permettono di applicare restrizioni di modifica durante il processo di firma. Blocca dopo l’ultima firma, non durante la trattativa.",
    },
    {
      q: "Cosa succede se la controparte modifica il PDF dopo la mia firma?",
      a: "Se blocchi il file prima di inviarlo, ogni alterazione risulta rilevabile. Anche senza blocco, il PDF firmato resta la versione di riferimento; modifiche successive invalidano la firma.",
    },
    {
      q: "Devo sempre firmare per primo?",
      a: "Se sei tu a proporre il contratto, sì — è un segnale di impegno. Se stai controfirmando, firma il file che ti ha mandato la controparte invece di ripartire da zero.",
    },
  ],
  related: [
    { label: "Firma PDF — aggiungi una firma elettronica", path: "/sign-pdf" },
    { label: "Aggiungi filigrana a PDF — etichetta le bozze con chiarezza", path: "/add-watermark-to-pdf" },
    { label: "Come condividere PDF con i clienti", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Flussi di lavoro PDF per piccole imprese", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Firma PDF — firma elettronica dal telefono", path: "/sign-pdf" },
};

export default content;
