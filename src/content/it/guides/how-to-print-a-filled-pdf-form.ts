import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-print-a-filled-pdf-form",
  h1: "Come stampare un modulo PDF compilato con le risposte visibili",
  description:
    "Hai stampato il modulo e i campi sono usciti vuoti? Perché i valori inseriti a volte non vengono stampati, e come ottenere una copia su carta pulita con ogni risposta visibile.",
  updated: "2026-06-01",
  intro: [
    "Compili un modulo a schermo, lo mandi in stampa, e il foglio esce senza nessuna delle tue risposte — solo il modulo vuoto. È uno dei problemi più comuni e più sconcertanti con i moduli, e ha una causa precisa: le risposte vivono nel livello dei campi del modulo, e alcuni percorsi di stampa saltano quel livello, stampando solo la pagina sottostante.",
    "La soluzione di solito è una delle due: attivare l’impostazione che stampa i valori dei campi del modulo, oppure appiattire prima il modulo così le risposte diventano parte della pagina e non possono più essere escluse. In entrambi i casi, ottenere una stampa pulita con ogni risposta visibile è semplice, una volta capito perché succede.",
    "Questa guida copre il problema dei campi vuoti, le impostazioni di stampa che lo controllano, e i controlli di stampa più generali (margini, scala) che mantengono un modulo compilato con un aspetto corretto sulla carta.",
  ],
  steps: [
    {
      title: "Riproduci il problema con l’anteprima di stampa",
      body: "Apri la finestra di stampa e guarda l’anteprima prima di mandare qualsiasi cosa alla stampante. Se le tue risposte mancano anche lì, è un problema di stampa dei campi, non un difetto della stampante.",
    },
    {
      title: "Attiva la stampa dei valori dei campi del modulo",
      body: "Cerca un’opzione di stampa come «stampa i campi del modulo» oppure un’impostazione per commenti e moduli impostata su «documento e annotazioni». Attivandola dici al percorso di stampa di includere il livello dei campi con le tue risposte.",
    },
    {
      title: "Se non è disponibile, appiattisci prima il modulo",
      body: "L’appiattimento unisce le tue risposte compilate direttamente alla pagina. Una volta appiattito, non esiste più un livello di campi separato da omettere, quindi ogni percorso di stampa include le risposte. È la soluzione più affidabile.",
    },
    {
      title: "Controlla scala e margini",
      body: "Imposta la scala su «adatta» o 100% invece di uno zoom personalizzato, così il modulo non viene ritagliato o rimpicciolito. Verifica che il formato della carta corrisponda a quello del modulo, così niente esce dal bordo.",
    },
    {
      title: "Stampa una pagina di prova",
      body: "Stampa prima una sola pagina per confermare che risposte, impaginazione e margini siano tutti corretti prima di lanciare l’intero documento — soprattutto per i moduli con più pagine.",
    },
  ],
  tips: [
    "La soluzione universale più rapida è appiattire il modulo e poi stampare — un modulo appiattito stampa le sue risposte ovunque, senza bisogno di impostazioni speciali.",
    "Se l’anteprima mostra le tue risposte ma la carta no, il problema è nelle impostazioni di stampa, non nel file — ricontrolla l’opzione per i campi del modulo.",
    "Un modulo scansionato e non interattivo non ha mai questo problema: i suoi «campi» sono già parte della pagina, quindi vengono sempre stampati.",
    "Per i moduli scuri o con sfondo colorato, controlla che il testo dei campi venga stampato con un colore che resti leggibile sullo sfondo.",
    "Le impostazioni di stampa cambiano da un’app all’altra e da una stampante all’altra, quindi il nome esatto dell’opzione varia — cerca qualsiasi voce che parli di campi del modulo o di annotazioni.",
  ],
  mobileNote:
    "Stampare dal telefono nasconde la stessa trappola — alcune scorciatoie di stampa perdono i valori dei campi. Nell’app PDF Editor puoi appiattire il modulo compilato prima di stamparlo o condividerlo con una stampante, così le risposte restano fissate nella pagina e vengono fuori ogni volta.",
  faq: [
    {
      q: "Perché le risposte del mio modulo escono vuote quando stampo?",
      a: "Perché le risposte sono memorizzate nel livello dei campi del modulo e il tuo percorso di stampa lo sta saltando. Attiva l’opzione per stampare i valori dei campi del modulo, oppure appiattisci il modulo così le risposte diventano parte della pagina.",
    },
    {
      q: "Cosa fa l’appiattimento per la stampa?",
      a: "L’appiattimento unisce i tuoi valori compilati direttamente alla pagina. Da quel momento non esiste più un livello di campi separato da tralasciare, quindi le risposte vengono stampate in modo affidabile da qualsiasi app o stampante.",
    },
    {
      q: "Le risposte si vedono a schermo ma non sulla carta — perché?",
      a: "Il tuo lettore mostra il livello dei campi, ma le impostazioni di stampa lo escludono. Cerca un’opzione di stampa relativa ai campi del modulo o a «documento e annotazioni» e attivala, oppure appiattisci prima di stampare.",
    },
    {
      q: "Perché il mio modulo stampato è tagliato ai bordi?",
      a: "È un problema di scala o di formato carta non corrispondente, separato da quello dei campi vuoti. Imposta la scala su adatta o 100% e fai corrispondere il formato della carta a quello del modulo.",
    },
    {
      q: "I moduli scansionati non interattivi hanno questo problema?",
      a: "No. Le risposte di un modulo non interattivo sono parte dell’immagine della pagina, quindi vengono sempre stampate. Il problema dei campi vuoti riguarda solo i moduli interattivi con un livello di campi separato.",
    },
  ],
  related: [
    {
      label: "Come salvare un modulo PDF compilato",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "Il modulo PDF non stampa correttamente",
      path: "/guides/pdf-form-not-printing-correctly",
    },
    {
      label: "Come risolvere i problemi di stampa dei PDF",
      path: "/guides/how-to-fix-pdf-printing-issues",
    },
    {
      label: "Come inviare un modulo PDF compilato",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
