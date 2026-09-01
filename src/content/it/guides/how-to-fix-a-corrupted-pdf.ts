import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-a-corrupted-pdf",
  h1: "Come riparare un PDF danneggiato (quello che funziona davvero)",
  description:
    "La maggior parte dei PDF «danneggiati» non lo è davvero: sono download interrotti, lettori incompatibili o scritture incomplete. La lista onesta di soluzioni che recuperano il file, e il caso in cui è davvero perduto.",
  updated: "2026-05-29",
  intro: [
    "Quasi ogni PDF etichettato come «danneggiato» in realtà è qualcosa di meno drammatico: un download che non si è completato, un lettore che si rifiuta di leggere un file leggermente anomalo, o una scrittura interrotta prima che il file venisse chiuso correttamente. Il danneggiamento vero — quello in cui i byte all’interno del file sono realmente rovinati — è più raro di quanto si pensi, e quando succede, il recupero è nella migliore delle ipotesi parziale.",
    "La ragione per cui questo conta è che le soluzioni per queste quattro cause sono completamente diverse. Scaricare di nuovo richiede pochi secondi; cambiare lettore richiede pochi secondi; un’esportazione di andata e ritorno richiede un minuto; il recupero vero a livello di byte richiede ore di lavoro e spesso è impossibile. Sapere in quale categoria ricade il tuo file fa risparmiare tempo vero.",
    "Questa guida percorre le diagnosi partendo da quelle meno costose da verificare, per poi spiegare cosa fare quando il file non è recuperabile. La maggior parte dei file torna utilizzabile entro il terzo passaggio.",
  ],
  steps: [
    {
      title: "Scarica o fatti inviare di nuovo il file",
      body: "Dal punto di vista del lettore, un download interrotto sembra identico a un danneggiamento. Scarica di nuovo il file. Se la seconda copia si apre, la prima era incompleta. Controlla la dimensione in byte rispetto all’origine, se è indicata.",
    },
    {
      title: "Prova almeno altri due lettori",
      body: "Browser, Anteprima, lettori da telefono e app desktop gestiscono i PDF in modo diverso l’uno dall’altro. Un file che Acrobat rifiuta a volte si apre senza problemi in Chrome. Se anche un solo lettore riesce a leggerlo, il file non è davvero danneggiato.",
    },
    {
      title: "Apri il file in un lettore che funziona ed esportalo di nuovo",
      body: "La stampa in PDF (macOS, Windows, Linux) o «Salva come PDF» dal lettore che funziona ricostruisce la struttura del file. La nuova copia spesso si apre in lettori che avevano rifiutato l’originale.",
    },
    {
      title: "Estrai le pagine una per una con PDF in immagini",
      body: "Se nessun lettore mostra l’intero file, ma qualcuno ne mostra almeno una parte, esporta ogni pagina come PNG con PDF in immagini. Puoi poi ricostruire un nuovo PDF da quei PNG con Immagine in PDF — perdendo la ricercabilità e la modificabilità, ma salvando il contenuto.",
    },
    {
      title: "Controlla l’intestazione del file con un editor di testo semplice",
      body: "Apri il file con TextEdit, Blocco note o VS Code. Un vero PDF inizia con %PDF- seguito da un numero di versione. Se i primi byte sono qualcos’altro, il file non è un PDF — è stato rinominato, etichettato male o sostituito.",
    },
    {
      title: "Chiedi all’origine una copia nuova",
      body: "Se nulla recupera il file, chi lo ha prodotto ha ancora l’originale. Esporta di nuovo da Word, Google Docs o qualsiasi programma lo abbia generato. È l’unica via che restituisce la piena qualità.",
    },
  ],
  tips: [
    "Non continuare a modificare o unire un file che si comporta in modo strano. Finirai per incorporare il danno nel nuovo file.",
    "Metti al sicuro l’originale danneggiato prima di qualsiasi tentativo di riparazione. Gli strumenti di riparazione a volte sovrascrivono, e il file danneggiato potrebbe contenere parte del contenuto che rischi di perdere.",
    "I file che smettono di funzionare subito dopo un’interruzione della scrittura (mancanza di corrente, chiusura forzata durante il salvataggio) spesso non sono recuperabili — l’indice strutturale alla fine del file non è mai stato scritto.",
    "Evita i siti «per riparare PDF» che promettono miracoli. Nella maggior parte dei casi fanno la stessa esportazione con stampa in PDF che puoi fare da solo, e in più caricano il tuo file su un server.",
    "I PDF recuperati passando per le immagini perdono tutto il testo vero e la ricercabilità. Usa questa via solo per i file in cui il contenuto conta più della fedeltà del file.",
  ],
  mobileNote:
    "Sul telefono, la causa più comune di un PDF «danneggiato» è un download instabile con la connessione dati. L’app PDF Editor conserva i file in locale e ti permette di scaricarli di nuovo e riaprirli, risolvendo il problema dell’interruzione senza dover passare dal computer.",
  faq: [
    {
      q: "Qual è la causa più comune di un PDF danneggiato?",
      a: "Un download che non si è completato. Il file è tecnicamente incompleto, non danneggiato, ma i lettori non riescono a fare la differenza. Scaricare di nuovo risolve la maggior parte dei casi.",
    },
    {
      q: "Esistono strumenti veri per riparare i PDF?",
      a: "Alcuni strumenti commerciali dichiarano di riparare i file, ma per lo più fanno la stessa esportazione con stampa in PDF che puoi fare gratis da solo. La vera riparazione strutturale di PDF gravemente danneggiati è un lavoro da specialisti.",
    },
    {
      q: "Comprimere un PDF danneggiato aiuta?",
      a: "Solo se lo strumento di compressione riesce a leggerlo. Se il tuo lettore non riesce ad aprirlo, non ci riuscirà nemmeno un compressore. La compressione non è una tecnica di riparazione.",
    },
    {
      q: "Perché il mio file recuperato perde i campi del modulo?",
      a: "La stampa in PDF appiattisce gli elementi interattivi in pixel statici. Campi del modulo, annotazioni e firme diventano immagini. Se ti servono di nuovo, richiedi il file all’origine.",
    },
    {
      q: "L’estrazione tramite immagini riesce sempre a salvare il contenuto?",
      a: "Solo se almeno un lettore riesce a mostrare le pagine. Se il file è illeggibile ovunque, fallisce anche uno strumento di estrazione delle immagini.",
    },
  ],
  related: [
    { label: "PDF in immagini — estrai le pagine recuperabili", path: "/pdf-to-images" },
    { label: "Immagine in PDF — ricostruisci le pagine dopo il recupero", path: "/image-to-pdf" },
    { label: "Perché il mio PDF non si apre?", path: "/guides/why-wont-my-pdf-open" },
    { label: "Perché il mio PDF è vuoto?", path: "/guides/why-is-my-pdf-blank" },
  ],
  parentHub: { label: "Strumenti PDF gratuiti nel browser", path: "/pdf-tools" },
};

export default content;
