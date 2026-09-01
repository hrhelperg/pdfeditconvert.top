import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-edit-a-pdf",
  h1: "Perché non riesco a modificare questo PDF? Le vere ragioni",
  description:
    "Il PDF è stato pensato per resistere alla modifica, ma alcuni fattori precisi — scansioni, protezioni, limiti del lettore — rendono alcuni file più bloccati di altri. Cosa blocca il tuo, e cosa funziona davvero.",
  updated: "2026-05-29",
  intro: [
    "I PDF sono stati progettati per apparire identici ovunque, ed è proprio per questo che modificarli sembra più difficile che modificare un documento Word. Il formato tratta il testo più come una pagina stampata che come una sequenza di caratteri — utile quando vuoi una condivisione fedele al pixel, frustrante quando devi cambiare un nome su un contratto.",
    "Ma non tutti i PDF sono bloccati allo stesso modo. Ci sono quattro motivi comuni per cui non riesci a modificarne uno: è l’immagine scansionata di un documento, senza testo vero sotto; il file ha un flag di sicurezza che blocca le modifiche; il tuo lettore è di sola lettura per progettazione; oppure l’originale è stato esportato in un modo che ha frammentato il testo in forme. Ognuno ha una via diversa da seguire.",
    "Questa guida spiega ogni causa in termini semplici, con lo strumento giusto per ciascuna. Nessuna richiede software costoso, e la maggior parte delle soluzioni funziona direttamente in una scheda del browser.",
  ],
  steps: [
    {
      title: "Verifica se il PDF ha testo vero o immagini scansionate",
      body: "Prova a selezionare il testo con il cursore o con il dito. Se la selezione funziona, il PDF ha testo vero e la modifica è possibile. Se non riesci a selezionare nulla, è una scansione — immagini di testo, non testo vero e proprio.",
    },
    {
      title: "Controlla se c’è un flag che blocca le modifiche",
      body: "I PDF possono avere permessi che consentono la visualizzazione ma bloccano modifica, stampa o copia. La maggior parte dei lettori mostra una piccola icona a forma di lucchetto o un avviso di «protezione» quando è attiva. Solo chi ha creato il file può rimuovere la restrizione; chi lo riceve non può aggirarla in modo sicuro.",
    },
    {
      title: "Usa un vero editor PDF per le modifiche vere e proprie",
      body: "I browser e i lettori di base non modificano il testo — si limitano a mostrarlo. L’app PDF Editor applica modifiche strutturali a testo, immagini e pagine senza convertire il file fuori dal formato PDF, così l’impaginazione resta intatta.",
    },
    {
      title: "Converti in Word quando devi riscrivere molto",
      body: "Se devi riscrivere interi paragrafi e non solo qualche parola, PDF in Word porta il testo in un vero editor. Perdi la fedeltà esatta dell’impaginazione ma guadagni una modifica fluida — meglio per documenti che verranno comunque ripubblicati.",
    },
    {
      title: "Per i PDF scansionati, aspettati i limiti dell’OCR",
      body: "Modificare una scansione significa prima convertire le immagini in testo (OCR). Alcuni strumenti lo fanno online, altri no, e la qualità varia moltissimo con la risoluzione della scansione. Considera il risultato dell’OCR un punto di partenza, non una modifica finita.",
    },
    {
      title: "Le modifiche a livello di pagina non richiedono «editing»",
      body: "Se ti serve solo eliminare, riordinare, ruotare o aggiungere pagine, non hai bisogno di un editor di testo — gli strumenti Estrai, Riordina e Ruota PDF gestiscono le modifiche strutturali senza dover sbloccare il livello del testo.",
    },
  ],
  tips: [
    "Se ti serve solo aggiungere una firma o compilare un modulo, il file probabilmente non ha bisogno di essere «modificato» — Firma PDF e la compilazione dei moduli lasciano intatto il testo originale.",
    "Alcuni PDF esportano ogni carattere come una piccola forma invece che come testo. La selezione sembra funzionare, ma copiare e incollare produce solo caratteri senza senso. È il caso peggiore per la modifica; il documento di origine è l’unica via realistica per tornare indietro.",
    "Non fidarti dei siti che promettono di eliminare le restrizioni di modifica forzando la password. O non funzionano, o sono dannosi, o entrambe le cose.",
    "Se sei tu l’autore e vuoi consentire la modifica su un file che hai inviato in precedenza, la via più pulita è esportarlo di nuovo senza la restrizione.",
    "Per modifiche ripetute allo stesso documento, modifica il file di origine (Word, Pages, uno strumento di grafica) ed esportalo di nuovo, invece di rattoppare il PDF ogni volta.",
  ],
  mobileNote:
    "Sul telefono, la maggior parte dei lettori nativi è di sola lettura per scelta progettuale. L’app PDF Editor gestisce modifiche al testo, sostituzione di immagini e riordino delle pagine su iOS e Android senza appiattire il file, così una correzione veloce non deve aspettare che tu torni al computer.",
  faq: [
    {
      q: "Perché vedo il testo ma non riesco a cliccarci dentro?",
      a: "O il PDF è una scansione (immagine del testo, senza caratteri veri sotto), oppure il tuo lettore è di sola lettura. Un vero editor PDF — come l’app PDF Editor — ti permette di cliccare su testo davvero modificabile.",
    },
    {
      q: "C’è un modo per rimuovere le restrizioni di modifica?",
      a: "Solo l’autore originale può rimuovere le restrizioni di permesso in modo pulito. Gli strumenti che promettono di eliminarle o non funzionano o compromettono il file. Chiedi a chi te lo ha inviato una copia senza restrizioni.",
    },
    {
      q: "Cos’è l’OCR e quando mi serve?",
      a: "L’OCR è il processo che trasforma le immagini di testo in testo vero — necessario quando modifichi un PDF scansionato. La qualità dipende dalla scansione; scansioni pulite e ad alta risoluzione danno risultati OCR molto migliori rispetto a foto sfocate scattate col telefono.",
    },
    {
      q: "Dovrei convertire in Word per modificarlo?",
      a: "Solo se devi fare modifiche importanti al testo. La conversione fa perdere fedeltà nell’impaginazione. Per modifiche piccole, un vero editor PDF conserva di più.",
    },
    {
      q: "Posso modificare le pagine senza toccare il testo?",
      a: "Sì. Riordinare, ruotare, estrarre e rimuovere pagine sono modifiche strutturali e non richiedono un editor di testo. Gli strumenti del browser su questo sito le gestiscono senza caricare nulla.",
    },
  ],
  related: [
    { label: "Editor PDF — modifica testo e immagini dal telefono", path: "/pdf-editor" },
    { label: "PDF in Word — converti per modifiche importanti", path: "/pdf-to-word" },
    { label: "Come modificare un PDF su iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
    { label: "Come modificare un PDF su Android", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "Editor PDF — modifica testo, immagini e pagine", path: "/pdf-editor" },
};

export default content;
