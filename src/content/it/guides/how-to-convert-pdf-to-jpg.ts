import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-jpg",
  h1: "Come convertire un PDF in JPG — esporta le pagine come immagini",
  description:
    "Esporta le pagine di un PDF come immagini JPG nel tuo browser. Quando il JPG batte il PNG, come la scala influisce sulla qualità, e quando un’anteprima immagine batte un PDF.",
  updated: "2026-05-23",
  intro: [
    "A volte il PDF è il contenitore sbagliato. Vuoi inserire una singola pagina in un messaggio Slack dove verrà mostrata in anteprima, incollare un grafico in una slide, oppure pubblicare una pagina in un posto che accetta solo immagini. Per tutto questo, ti servono le pagine come JPG, non un PDF.",
    "Questa guida usa lo strumento gratuito PDF to Images, che trasforma ogni pagina di un PDF in un’immagine scaricabile, interamente nel tuo browser senza caricare nulla. Il JPG è uno dei due formati disponibili, ed è la scelta giusta quando la dimensione del file conta più di un testo perfettamente nitido.",
    "Vedremo come scegliere la scala (che controlla la nitidezza), quando il JPG batte il PNG, e il limite da tenere a mente: un JPG di una pagina è un’immagine piatta, non un documento.",
  ],
  steps: [
    {
      title: "Apri lo strumento PDF to Images",
      body: "Vai allo strumento PDF to Images nel tuo browser. Trasforma le pagine in locale sul tuo dispositivo — nessun caricamento, nessun account necessario.",
    },
    {
      title: "Aggiungi il tuo PDF",
      body: "Trascina un singolo PDF nella zona di rilascio o fai clic per sceglierlo. Lo strumento legge ogni pagina per poterla esportare come immagine.",
    },
    {
      title: "Scegli JPG come formato",
      body: "Seleziona JPG. Produce file più piccoli rispetto al PNG ed è la scelta giusta per foto, screenshot a pagina intera, e ovunque la dimensione del file conti più di un testo perfettamente nitido.",
    },
    {
      title: "Imposta la scala",
      body: "La scala controlla con quanti pixel viene renderizzata ogni pagina. 2× è nitida sulla maggior parte degli schermi; scendi a 1,5× per file più piccoli, oppure sali a 3× quando ti serve un risultato molto nitido e non ti preoccupa la dimensione.",
    },
    {
      title: "Esporta le pagine",
      body: "Avvia la conversione. Ogni pagina si scarica come file JPG separato, pronto da inserire in un messaggio, una presentazione o un modulo di caricamento.",
    },
    {
      title: "Scegli la pagina che ti serve",
      body: "Se volevi solo una pagina, prendi quel JPG ed elimina gli altri. Per un PDF lungo, dividerlo prima significa meno immagini da smistare.",
    },
  ],
  tips: [
    "Scegli JPG quando la pagina è ricca di foto o stai ottimizzando per la dimensione; scegli PNG quando la pagina è per lo più testo o disegni al tratto che devono restare nitidi.",
    "Una scala più alta significa immagini più nitide e file più grandi. Non c’è alcun vantaggio a usare 3× se l’immagine verrà sempre vista in piccolo.",
    "Un JPG di una pagina non ha un livello di testo — le parole non si possono cercare, selezionare o copiare. Tieni il PDF originale se ti servirà di nuovo il testo.",
    "PDF molto grandi a scala alta possono esaurire la memoria del browser. Se lo strumento fa fatica, scendi a una scala di 1,5× o dividi prima il PDF.",
    "I PDF protetti da password non possono essere renderizzati nel browser. Rimuovi prima la password, oppure usa l’app PDF Editor.",
  ],
  mobileNote:
    "Sul telefono, esportare una pagina come immagine è spesso una questione di condivisione: le anteprime immagine compaiono direttamente nelle chat, dove un allegato PDF resta lì come una semplice icona. L’app PDF Editor renderizza ed esporta le pagine all’istante con accelerazione hardware, e le passa direttamente al menu di condivisione.",
  faq: [
    {
      q: "JPG o PNG — cosa dovrei esportare?",
      a: "JPG per file più piccoli e pagine ricche di foto; PNG quando la pagina è per lo più testo o diagrammi che devono restare nitidi. La compressione del JPG ammorbidisce i bordi fini, cosa che noterai sulle lettere.",
    },
    {
      q: "Otterrò un’immagine per ogni pagina?",
      a: "Sì. Ogni pagina del PDF viene renderizzata e scaricata come JPG separato. Se ti serve solo una pagina, tieni quel file ed elimina gli altri.",
    },
    {
      q: "Il mio PDF viene caricato?",
      a: "No. La renderizzazione avviene interamente nel tuo browser, quindi il file non lascia mai il tuo dispositivo.",
    },
    {
      q: "Posso cercare il testo nel JPG dopo?",
      a: "No. Una pagina convertita è un’immagine piatta senza livello di testo. Per mantenere il testo ricercabile, tieni il PDF originale.",
    },
    {
      q: "A cosa serve l’impostazione della scala?",
      a: "Imposta quanti pixel dell’immagine vengono renderizzati per ogni punto del PDF. 2× appare nitido sulla maggior parte dei display; 3× è molto nitido ma produce file grandi.",
    },
  ],
  related: [
    { label: "PDF to Images — esporta le pagine nel tuo browser", path: "/pdf-to-images" },
    { label: "Image to PDF — l’operazione inversa", path: "/image-to-pdf" },
    { label: "Come convertire PDF in PNG", path: "/guides/how-to-convert-pdf-to-png" },
    { label: "Come dividere un PDF in file separati", path: "/guides/how-to-split-pdf-files" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
