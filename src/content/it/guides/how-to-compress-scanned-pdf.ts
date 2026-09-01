import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-scanned-pdf",
  h1: "Come comprimere un PDF scansionato (risparmio enorme)",
  description:
    "I PDF scansionati sono i più facili da ridurre e i più pesanti in assoluto. Come comprimerli in modo drastico, e cosa succede al testo ricercabile.",
  updated: "2026-05-23",
  intro: [
    "I PDF scansionati sono i pesi massimi del mondo dei documenti. Ogni pagina è un’immagine a piena risoluzione, quindi un breve contratto scansionato può superare un report di testo di cento pagine. Il lato positivo è la buona notizia: proprio perché le scansioni sono quasi tutte dati immagine, si comprimono in modo più drastico di qualsiasi altro tipo di PDF — spesso del 70% o più.",
    "Questa guida si concentra proprio sulla compressione delle scansioni usando lo strumento gratuito Compress PDF, che gira nel tuo browser senza caricare nulla. Le scansioni sono esattamente il caso in cui la compressione da browser dà il meglio, e dove i risparmi di dimensione valgono di più.",
    "Vedremo anche l’unica cosa a cui prestare attenzione con i documenti scansionati — il testo ricercabile — così non perdi per sbaglio un livello di testo che avevi faticato a creare.",
  ],
  steps: [
    {
      title: "Apri lo strumento Compress PDF",
      body: "Vai allo strumento Compress PDF nel tuo browser. Elabora il file sul tuo dispositivo, così anche un contratto scansionato resta privato.",
    },
    {
      title: "Aggiungi il tuo PDF scansionato",
      body: "Trascina la scansione nella zona di rilascio o fai clic per sceglierla. Lo strumento la legge in locale — nulla viene caricato.",
    },
    {
      title: "Scegli un livello — qui puoi osare",
      body: "Le scansioni tollerano bene una compressione forte perché sono immagini, non testo vettoriale nitido. Consigliato spesso basta; Forte può comunque sembrare perfettamente leggibile per i documenti di tutti i giorni.",
    },
    {
      title: "Comprimi e controlla la leggibilità",
      body: "Avvialo e apri il risultato. Il test chiave per una scansione è la leggibilità — riesci a leggere il testo comodamente? Se sì a un livello forte, prendi il risparmio maggiore.",
    },
    {
      title: "Fai attenzione al livello di testo ricercabile",
      body: "Se la tua scansione era stata elaborata con OCR per essere ricercabile, comprimerla nel browser ri-renderizza le pagine come immagini e rimuove quel livello. Tieni l’originale ricercabile se ti serve.",
    },
    {
      title: "Salva la copia più piccola",
      body: "Salva con un nuovo nome. I file scansionati scendono di routine ben sotto i limiti di mail e caricamento in un solo passaggio.",
    },
  ],
  tips: [
    "Le scansioni si comprimono meglio di qualsiasi altro PDF — se un documento è enorme perché scansionato, sei fortunato sul fronte della dimensione.",
    "Poiché le scansioni sono immagini, di solito puoi spingerti a un livello più forte di quanto oseresti con un documento curato, e mantenerlo comunque leggibile.",
    "Se la tua scansione aveva un livello di testo ricercabile grazie all’OCR, la compressione da browser lo rimuove. Rifai il riconoscimento del testo dopo, oppure tieni separato l’originale ricercabile.",
    "Scansionare a una risoluzione più bassa (200-300 DPI) alla fonte produce file più piccoli fin dall’inizio, riducendo quanto dovrai comprimere dopo.",
    "Le scansioni a colori sono più pesanti di quelle in scala di grigi. Se il colore non aggiunge nulla al documento, scansionare in scala di grigi lo riduce già prima ancora che inizi la compressione.",
  ],
  mobileNote:
    "Le scansioni di solito nascono su un telefono, e l’app PDF Editor mantiene l’intero ciclo sul dispositivo: scansiona a una qualità sensata, comprimi offline e — a differenza degli strumenti da browser — esegui il riconoscimento del testo così il file più piccolo resta comunque ricercabile. Nessun caricamento in nessun passaggio.",
  faq: [
    {
      q: "Quanto può ridursi un PDF scansionato?",
      a: "Spesso del 70% o più. Le scansioni sono quasi interamente dati immagine, esattamente ciò su cui agisce la compressione, quindi si riducono molto più dei PDF basati su testo.",
    },
    {
      q: "La scansione resterà leggibile dopo una compressione forte?",
      a: "Di solito sì per i documenti di tutti i giorni — le scansioni tollerano una compressione forte perché sono immagini, non testo vettoriale nitido. Apri sempre il risultato e conferma la leggibilità.",
    },
    {
      q: "Comprimere elimina il testo ricercabile da una scansione?",
      a: "Se la scansione era stata elaborata con OCR per essere ricercabile, la compressione da browser ri-renderizza le pagine come immagini e rimuove quel livello. Tieni l’originale ricercabile, oppure rifai il riconoscimento del testo dopo.",
    },
    {
      q: "Il mio documento scansionato viene caricato?",
      a: "No. Lo strumento Compress PDF gira nel tuo browser, sul tuo dispositivo, quindi le scansioni sensibili come contratti ed estratti conto restano private.",
    },
    {
      q: "Posso comprimere una scansione protetta da password?",
      a: "Non nel browser. Rimuovi prima la password, oppure usa l’app mobile PDF Editor, che comprime i file protetti offline.",
    },
  ],
  related: [
    { label: "Compress PDF — riduci le scansioni nel tuo browser", path: "/compress-pdf" },
    { label: "Come convertire documenti scansionati in PDF", path: "/guides/how-to-convert-scanned-documents-to-pdf" },
    { label: "Perché il mio PDF è così pesante?", path: "/guides/why-is-my-pdf-so-large" },
    { label: "Come scansionare documenti in PDF dal telefono", path: "/guides/how-to-scan-documents-to-pdf" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
