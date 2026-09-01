import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-notes-to-pdf",
  h1: "Come scansionare appunti scritti a mano in PDF (nitidi, ricercabili)",
  description:
    "Trasforma pagine di appunti scritti a mano durante una lezione in PDF puliti e su più pagine, con la fotocamera del telefono. Le impostazioni che danno scansioni leggibili già al primo tentativo.",
  updated: "2026-05-29",
  intro: [
    "Gli appunti scritti a mano restano il modo più veloce per seguire una lezione, e la maggior parte degli studenti li lascia sulla carta invece di digitalizzarli — perché di solito le scansioni vengono male. Pagine storte, scansioni grigie e sbiadite, file troppo pesanti, e il tempo che serve per rifare quelle venute male. Sommato su un intero semestre, è per questo che gli appunti restano nel quaderno.",
    "Ottenere scansioni pulite dal telefono è soprattutto questione di tecnica e impostazioni, non di app. Luce uniforme, inquadratura ben squadrata, contrasto attivo, scala di grigi invece che colori, e rilevamento dei bordi se lo strumento lo offre. Una pagina catturata bene assomiglia più a una scansione da scanner piano che a una foto al volo.",
    "Questa guida ripercorre la tecnica dall’inizio alla fine — le condizioni della stanza che danno buone scansioni, l’approccio pagina per pagina, il flusso di lavoro per più pagine, e cosa fare del PDF una volta creato. Parte dal presupposto che tu abbia solo un telefono e voglia un PDF pulito, su più pagine, senza comprare uno scanner.",
  ],
  steps: [
    {
      title: "Prepara la pagina su uno sfondo a contrasto",
      body: "Foglio a righe su una scrivania scura. Foglio bianco su un panno scuro. Qualunque cosa renda il bordo della pagina ben visibile alla fotocamera e al ritaglio automatico. Evita i riflessi: una luce uniforme conta più di una luce forte.",
    },
    {
      title: "Tieni il telefono parallelo alla pagina",
      body: "La fotocamera deve stare dritta sopra la pagina, non inclinata. L’inclinazione produce una distorsione prospettica che la correzione automatica può sistemare, ma mai bene quanto uno scatto perfettamente dritto.",
    },
    {
      title: "Usa un’app di scansione con rilevamento dei bordi",
      body: "Scansiona in PDF, o la funzione di scansione dell’app PDF Editor, rileva il bordo della pagina e la ritaglia in automatico. Una foto scattata a caso con il telefono non lo fa: un’app di scansione dà un risultato più vicino a uno scanner piano.",
    },
    {
      title: "Passa alla modalità scala di grigi o bianco e nero",
      body: "Le scansioni a colori di inchiostro nero su carta bianca sono più pesanti, più rumorose e meno nitide. La scala di grigi dà scansioni più nitide, più leggere e più leggibili. Il bianco e nero è ancora più leggero, ma meno flessibile in seguito.",
    },
    {
      title: "Cattura ogni pagina, poi unisci",
      body: "I flussi di scansione multipagina catturano una pagina alla volta e le combinano automaticamente in un unico PDF. Se hai catturato le pagine separatamente, Unisci PDF le combina in ordine.",
    },
    {
      title: "Ritaglia, ruota e riordina in fase di rifinitura",
      body: "Usa Riordina le pagine del PDF se qualche pagina è stata catturata fuori sequenza. Usa Ruota PDF per gli scatti venuti storti. Dedica un minuto a questa rifinitura: il te del futuro ringrazierà il te di adesso.",
    },
  ],
  tips: [
    "Fai tutte le scansioni prima di iniziare la rifinitura: cambiare modalità in continuazione spezza il ritmo.",
    "Se la luce non è uniforme, un semplice foglio bianco tenuto sopra la pagina come riflettore migliora molto il contrasto.",
    "Non ritagliare troppo stretto. Lasciare un piccolo margine intorno al bordo della pagina fa sembrare il documento più curato.",
    "Comprimi il PDF finale prima di archiviarlo. Appunti fatti di sole scansioni pesano molto; le versioni compresse sono più facili da condividere in seguito.",
    "Aggiungi una copertina (scritta al computer, con nome del corso e data) prima di unire tutto. Così la raccolta si spiega da sola nel tuo archivio.",
  ],
  mobileNote:
    "Scansionare gli appunti è una delle cose che un telefono, per un uso occasionale, fa davvero meglio di uno scanner piano. La funzione di scansione dell’app PDF Editor gira interamente sul telefono — cattura, rilevamento dei bordi, contrasto, unione multipagina — e produce un PDF pulito senza passare da nessun server.",
  faq: [
    {
      q: "Gli appunti scritti a mano e scansionati diventano ricercabili?",
      a: "Solo se lo strumento esegue l’OCR — trasformando l’immagine della scrittura in testo ricercabile. L’OCR sulla scrittura a mano è meno affidabile che sul testo stampato: la qualità dipende dalla calligrafia e dalla scansione.",
    },
    {
      q: "Qual è l’impostazione migliore della fotocamera per scansionare gli appunti?",
      a: "Usa la modalità scala di grigi o bianco e nero dell’app di scansione, con contrasto automatico. Non affidarti alla fotocamera standard del telefono: le sue foto sono più pesanti, meno contrastate e più difficili da leggere.",
    },
    {
      q: "Quante pagine conviene scansionare per sessione?",
      a: "Tutte quelle scritte in una volta sola. Scansionare ogni settimana o dopo ogni lezione è molto più semplice che lasciare accumulare un intero semestre.",
    },
    {
      q: "Conviene scansionare a colori?",
      a: "Solo se gli appunti usano il colore (evidenziatori, diagrammi). Altrimenti la scala di grigi o il bianco e nero sono più nitidi e più leggeri.",
    },
    {
      q: "E se la pagina è piegata o macchiata?",
      a: "Il contrasto automatico riesce a sistemare la maggior parte dei segni del tempo sulla carta. Le pieghe marcate di solito restano visibili: valuta se rifare la scansione oppure se accettarla, se il materiale è solo per uso personale.",
    },
  ],
  related: [
    { label: "Scansionare in PDF — scansione con la fotocamera del telefono e rilevamento dei bordi", path: "/scan-to-pdf" },
    { label: "Unisci PDF — combina scansioni su più pagine", path: "/merge-pdf" },
    { label: "Come scansionare documenti in PDF con il telefono", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Flusso di lavoro PDF per studenti universitari", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "Scansionare in PDF — scansione con la fotocamera del telefono", path: "/scan-to-pdf" },
};

export default content;
