import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-sideways-pdf-pages",
  h1: "Come correggere le pagine di un PDF storte o capovolte",
  description:
    "Raddrizza in modo permanente le pagine di un PDF che si aprono storte o capovolte, nel tuo browser. Perché ruotare lo schermo non aiuta, e cosa risolve davvero il problema.",
  updated: "2026-05-23",
  intro: [
    "Apri un PDF e una pagina è sdraiata su un lato. La ruoti nel visualizzatore, sembra a posto — poi lo invii, e il destinatario la vede di nuovo storta. Ecco la trappola: ruotare in un visualizzatore spesso cambia solo come la vedi tu, non come la pagina è salvata. Per correggerla per tutti, devi ruotare la pagina stessa e salvare la modifica.",
    "Questa guida fa esattamente questo con lo strumento gratuito Rotate PDF, che gira le pagine di 90, 180 o 270 gradi e incorpora la correzione in un nuovo file, tutto nel tuo browser senza caricare nulla. Che sia sbagliata una sola pagina o che un’intera scansione sia uscita in orizzontale, questa è la soluzione permanente.",
    "Vedremo anche perché le pagine finiscono storte in primo luogo, così puoi evitare che succeda alla fonte — di solito uno scanner o un telefono tenuto nel verso sbagliato.",
  ],
  steps: [
    {
      title: "Apri lo strumento Rotate PDF",
      body: "Vai allo strumento Rotate PDF nel tuo browser. Salva la rotazione direttamente nel file, così la correzione resta valida per ogni visualizzatore — nessun caricamento, nessun account.",
    },
    {
      title: "Aggiungi il PDF",
      body: "Trascina il file nella zona di rilascio o fai clic per sceglierlo. Lo strumento mostra le pagine così puoi vedere quali sono storte o capovolte.",
    },
    {
      title: "Trova le pagine interessate",
      body: "Prendi nota di quali pagine sono sbagliate e di quanto lo sono — un quarto di giro, un mezzo giro. In una lunga scansione può essere ogni pagina; in un report, magari solo una tabella larga.",
    },
    {
      title: "Ruota fino a raddrizzare",
      body: "Applica 90° a una pagina sdraiata su un lato, 180° a una capovolta, o 270° a una girata nell’altra direzione, finché il contenuto non si legge normalmente.",
    },
    {
      title: "Verifica, poi scarica",
      body: "Conferma che ogni pagina corretta sia dritta e che tu non abbia disturbato pagine che erano già giuste, poi esporta il PDF corretto.",
    },
    {
      title: "Correggilo alla fonte la prossima volta",
      body: "Le pagine storte di solito arrivano da uno scanner che alimenta le pagine in orizzontale o da un telefono tenuto nel verso sbagliato. Regolare l’orientamento della scansione o come tieni il telefono previene il ripetersi del problema.",
    },
  ],
  tips: [
    "Ruotare in un visualizzatore PDF spesso cambia solo la tua vista, non il file salvato — ecco perché la pagina appare di nuovo storta al destinatario. Salvare una copia ruotata è ciò che risolve davvero il problema.",
    "Ruota solo le pagine che sono davvero sbagliate. Una tabella correttamente larga in orizzontale (un foglio di calcolo, un grafico) è pensata per essere così; ruotarla peggiora le cose.",
    "Se l’intera scansione è in orizzontale, una singola rotazione di 90° applicata a ogni pagina di solito risolve tutto in un colpo solo.",
    "Correggi la rotazione prima di riordinare o unire — è molto più facile giudicare la sequenza e combinare documenti quando ogni pagina è già dritta.",
    "Tieni l’originale. Ruotare troppo è facile da fare; ripartire dal file intatto è più veloce che ruotare avanti e indietro.",
  ],
  mobileNote:
    "Le pagine storte quasi sempre nascono su un telefono, ed è lì che si correggono più in fretta. L’app PDF Editor ruota le pagine con un tocco e salva la correzione nel file, offline — così un documento appena scansionato è dritto prima ancora di lasciare le tue mani.",
  faq: [
    {
      q: "Perché la pagina sembra corretta a me ma storta agli altri?",
      a: "Ruotare in un visualizzatore di solito cambia solo la tua vista a schermo, non come la pagina è salvata. Per correggerla per tutti, ruota la pagina e salva un nuovo file — che è esattamente ciò che fa lo strumento Rotate PDF.",
    },
    {
      q: "Quanto dovrei ruotare?",
      a: "90° per una pagina sdraiata su un lato, 180° per una capovolta, 270° per una girata nella direzione opposta. Scegli l’entità che raddrizza il contenuto.",
    },
    {
      q: "Correggere la rotazione riduce la qualità?",
      a: "No. Ruotare cambia solo l’orientamento; il contenuto della pagina e la risoluzione restano invariati.",
    },
    {
      q: "Il mio file viene caricato?",
      a: "No. La rotazione avviene nel tuo browser, sul tuo dispositivo, quindi il file resta privato.",
    },
    {
      q: "Come evito che le pagine scansionino storte?",
      a: "Imposta il tuo scanner per rilevare o adattare l’orientamento della pagina, oppure tieni il telefono in modo che la pagina riempia l’inquadratura in verticale. Correggerlo al momento della cattura risparmia il passaggio di rotazione dopo.",
    },
  ],
  related: [
    { label: "Rotate PDF — raddrizza le pagine nel tuo browser", path: "/rotate-pdf" },
    { label: "Come ruotare le pagine di un PDF", path: "/guides/how-to-rotate-pdf-pages" },
    { label: "Come scansionare documenti in PDF dal telefono", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Come riordinare le pagine di un PDF", path: "/guides/how-to-reorder-pdf-pages" },
  ],
  parentHub: { label: "Rotate PDF", path: "/rotate-pdf" },
};

export default content;
