import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-flat-pdf",
  h1: "PDF modificabile o PDF piatto — qual è la vera differenza",
  description:
    "Alcuni PDF hanno testo vero, selezionabile, e una struttura modificabile; altri sono solo immagini di pagine senza testo sottostante. Come capire quale hai tra le mani, e quando ciascuno è quello giusto.",
  updated: "2026-05-29",
  intro: [
    "Due file possono essere entrambi PDF e comportarsi in modo completamente diverso. Uno ti permette di selezionare il testo, copiare citazioni, cercare parole e modificare il contenuto. L’altro sembra identico a schermo ma è essenzialmente l’immagine di un documento — il testo fa parte dell’immagine, non è separato da essa. Il primo è un PDF modificabile; il secondo è un PDF piatto (a volte chiamato PDF scansionato o PDF immagine).",
    "Sapere quale dei due hai tra le mani conta perché gli strumenti per lavorarci sono diversi. I PDF modificabili rispondono bene a editor PDF, strumenti di conversione e ricerca. I PDF piatti hanno bisogno dell’OCR per diventare ricercabili, e modificarli significa o applicare l’OCR e poi modificare, oppure sostituire del tutto l’immagine. Provare a usare strumenti per PDF modificabili su un PDF piatto genera per lo più frustrazione.",
    "Questa guida spiega la differenza, percorre il test che te lo dice in due secondi, e mostra quando ciascun tipo è la scelta giusta. A volte il PDF piatto è intenzionale — a volte è solo un incidente di come è stato prodotto il file.",
  ],
  steps: [
    {
      title: "Il test dei due secondi: prova a selezionare il testo",
      body: "Apri il PDF, clicca e trascina su un po’ di testo. Se il testo si seleziona (si evidenzia, è copiabile), è un PDF modificabile. Se il cursore disegna un riquadro di selezione ma nessun testo si evidenzia, è piatto — il «testo» è in realtà dato immagine.",
    },
    {
      title: "PDF modificabile: il testo è selezionabile, ricercabile, copiabile",
      body: "Le esportazioni dirette da Word, Pages, Docs o strumenti di design producono PDF modificabili. Il testo è un dato strutturato dentro il file; la ricerca e il copia-incolla funzionano; gli editor PDF possono modificarlo.",
    },
    {
      title: "PDF piatto: l’immagine di una pagina, senza testo sottostante",
      body: "I documenti scansionati sono i PDF piatti più comuni. Il testo esiste solo come pixel; non c’è alcun dato dei caratteri sottostante. La ricerca non restituisce nulla; il copia-incolla non restituisce nulla.",
    },
    {
      title: "L’OCR converte il PDF piatto in ricercabile (ma non perfettamente modificabile)",
      body: "L’OCR analizza l’immagine della pagina e aggiunge uno strato di testo sotto i pixel. La ricerca inizia a funzionare; il copia-incolla restituisce un testo approssimativo. La modifica richiede comunque di sostituire manualmente gli elementi dell’immagine.",
    },
    {
      title: "Quando il PDF piatto è intenzionale: blocco, fedeltà perfetta all’immagine",
      body: "Alcuni flussi di lavoro appiattiscono deliberatamente un PDF — il file non può essere modificato facilmente, firme e timbri non disturbano il testo sottostante. PDF in immagini e poi Immagine in PDF ricrea una copia piatta.",
    },
    {
      title: "Quando il PDF modificabile è intenzionale: ogni altro flusso di lavoro",
      body: "Per condividere, firmare, modificare, archiviare, riutilizzare — il PDF modificabile è la scelta giusta. Non appiattire a meno che tu non ne abbia davvero bisogno.",
    },
  ],
  tips: [
    "Se non riesci a selezionare il testo in un PDF che hai prodotto tu, le impostazioni di esportazione hanno scartato lo strato di testo. Ri-esporta con l’opzione «mantieni il testo» attivata.",
    "I PDF scansionati con scanner più vecchi di solito sono piatti. Applica l’OCR al momento della scansione o in seguito con uno strumento, per renderli utili nel lungo periodo.",
    "I PDF piatti sono più pesanti dei PDF modificabili equivalenti — i dati immagine occupano più spazio dei dati testuali.",
    "Non appiattire per «bloccare» un PDF — le restrizioni di modifica vere funzionano meglio e preservano la ricercabilità.",
    "Alcuni PDF «modificabili» esportano ogni carattere come una piccola forma invece che come testo vero. La selezione sembra funzionare ma il copia-incolla produce un risultato senza senso. È il caso peggiore per la modifica.",
  ],
  mobileNote:
    "Su mobile, i PDF piatti e quelli modificabili sembrano identici in un lettore. L’app PDF Editor segnala la differenza in modalità di modifica — puoi vedere quali file hanno testo vero e quali sono solo immagine, e indirizzarli di conseguenza verso l’OCR o la modifica diretta.",
  faq: [
    {
      q: "Come capisco a colpo d’occhio quale dei due ho?",
      a: "Prova a selezionare il testo. Se la selezione funziona e il copia restituisce testo pulito, è modificabile. In caso contrario, è piatto.",
    },
    {
      q: "I PDF scansionati sono sempre piatti?",
      a: "Appena usciti dallo scanner, sì. Molte app di scansione oggi applicano l’OCR automaticamente e producono un PDF piatto ma ricercabile — il testo resta reso come immagine, ma sotto viene aggiunto uno strato ricercabile.",
    },
    {
      q: "Posso modificare un PDF piatto?",
      a: "Solo manipolando l’immagine (ruotare, ritagliare, aggiungere testo sovrapposto). La modifica vera del testo richiede prima l’OCR, e anche allora il risultato è approssimativo.",
    },
    {
      q: "Perché dovrei volere un PDF piatto?",
      a: "Per impedire modifiche al testo, per bloccare firme e timbri in modo che non possano essere spostati, o per consegnare una resa perfettamente fedele all’immagine. Casi d’uso rari ma reali.",
    },
    {
      q: "Il formato del file di partenza influisce su quale tipo ottengo?",
      a: "Sì — le esportazioni dirette dagli elaboratori di testo producono PDF modificabili; i file scansionati e poi salvati producono PDF piatti. La fonte determina il tipo.",
    },
  ],
  related: [
    { label: "PDF Editor — modifica testo e immagini da mobile", path: "/pdf-editor" },
    { label: "Perché non riesco a modificare un PDF?", path: "/guides/why-cant-i-edit-a-pdf" },
    { label: "PDF to Word — recupera il testo modificabile", path: "/pdf-to-word" },
    { label: "Quando usare un PDF scansionato", path: "/guides/when-to-use-scanned-pdf" },
  ],
  parentHub: { label: "PDF Editor — modifica testo, immagini e pagine", path: "/pdf-editor" },
};

export default content;
