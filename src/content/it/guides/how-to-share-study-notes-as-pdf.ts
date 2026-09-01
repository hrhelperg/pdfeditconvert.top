import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-study-notes-as-pdf",
  h1: "Come condividere appunti di studio in PDF (gruppo, chat, cloud)",
  description:
    "Condividi gli appunti con il tuo gruppo di studio senza perdere la formattazione o il controllo delle versioni. Le abitudini con i PDF che evitano che lo studio di gruppo finisca nel caos degli screenshot.",
  updated: "2026-05-29",
  intro: [
    "Condividere appunti con un gruppo di studio dovrebbe essere semplice, ma in pratica finisce spesso in una chat con trenta screenshot e tre versioni diverse della stessa lezione. La sera prima dell’esame, nessuno trova più la versione con l’esempio svolto che tutti continuano a citare, e qualcuno ha mandato la foto dei propri appunti a margine scritti a mano che nessuno riesce a leggere.",
    "I PDF risolvono gran parte di questo problema. Bloccano la formattazione, funzionano su qualsiasi dispositivo, entrano nel menu di condivisione di ogni piattaforma e non dipendono da un unico account cloud. Poche abitudini di condivisione — nominare il file in modo coerente, gestire le versioni con criterio, scegliere il canale giusto — mantengono coerente lo studio di gruppo senza che nessuno debba gestirlo come un progetto.",
    "Questa guida descrive queste abitudini. Nessuna richiede strumenti particolari; sono tutte convenzioni su cui tu e il tuo gruppo vi accordate una volta sola. Da lì in poi funziona da sé.",
  ],
  steps: [
    {
      title: "Concordate prima il canale di condivisione",
      body: "Scegliete un unico posto — chat di gruppo, cartella cloud condivisa, un canale Discord dedicato — e restateci fedeli. Appunti sparsi su due canali diversi diventano introvabili. Conta più la coerenza del canale scelto.",
    },
    {
      title: "Condividi sempre come PDF, mai come foto del documento",
      body: "Uno screenshot di un PDF è peggio del PDF stesso. Invia direttamente il file. Sul telefono è facile — menu di condivisione → file, non screenshot.",
    },
    {
      title: "Nomina il file pensando al gruppo, non a te",
      body: "CodiceCorso_Settimana3_Appunti_Lezione_TuoNome.pdf. Il gruppo vede subito chi ha condiviso cosa e di quale settimana. «Appunti.pdf» è inutile in una chat con quindici allegati che si chiamano tutti Appunti.pdf.",
    },
    {
      title: "Applica una filigrana agli appunti in bozza",
      body: "Se i tuoi appunti sono una prima stesura e probabilmente verranno rivisti, Aggiungi filigrana a PDF stampa BOZZA o WIP su ogni pagina. Il gruppo sa che deve aspettarsi una revisione.",
    },
    {
      title: "Comprimi prima di condividere",
      body: "Comprimi PDF abbassa la dimensione del file per le piattaforme di chat con limiti sugli allegati. Fa risparmiare tempo di caricamento sui dati mobili ed evita il rifiuto per «file troppo grande».",
    },
    {
      title: "Traccia le versioni nel nome del file, non in chat",
      body: "Settimana3_Appunti_Lezione_v2.pdf non lascia dubbi. «Ho rivisto gli appunti, vedi allegato» in una chat non basta. Il nome del file è il registro delle versioni.",
    },
  ],
  tips: [
    "Non condividere documenti Word con il gruppo. Vengono visualizzati in modo diverso su ogni dispositivo, si bloccano su un solo editor alla volta e si moltiplicano subito in versioni diverse. Il PDF blocca tutto.",
    "Usa, quando possibile, PDF con OCR degli appunti scritti a mano — il testo ricercabile aiuta il gruppo a trovare in fretta un argomento specifico.",
    "Non pubblicare foto dello schermo del portatile. Gli artefatti (effetto moiré, riflessi, bassa risoluzione) rendono gli appunti più difficili da leggere, non più facili.",
    "Se il tuo gruppo condivide regolarmente, crea in anticipo un modello condiviso per i PDF di appunti. Copertine coerenti aiutano a riconoscere subito chi ha condiviso cosa.",
    "Evita la mail per gli appunti di gruppo. Le chat tengono traccia di chi ha visto cosa; la mail disperde la stessa conversazione in tante caselle diverse.",
  ],
  mobileNote:
    "Il telefono gestisce la maggior parte della condivisione di gruppo — foto veloce, condivisione immediata in chat, conferma rapida. L’app PDF Editor gestisce da mobile la catena scansione-unione-compressione-rinomina, così il file che arriva nella chat di gruppo è già pulito invece di essere uno scarico grezzo del rullino fotografico.",
  faq: [
    {
      q: "Qual è il modo peggiore di condividere appunti di studio?",
      a: "Gli screenshot del documento o gli appunti scritti solo in chat. Entrambi sono impossibili da cercare e non sopravvivono quando la conversazione va avanti.",
    },
    {
      q: "Deve condividere tutti i propri appunti, o basta una persona sola?",
      a: "Meglio che tutti condividano con criterio: settimane assegnate per persona, oppure «questa settimana la faccio io, tu la prossima». Alternarsi riduce lo sforzo di ciascuno e produce appunti con più punti di vista.",
    },
    {
      q: "Dove dovrebbero vivere gli appunti definitivi?",
      a: "Una cartella cloud condivisa è la scelta migliore per la conservazione a lungo termine. La chat di gruppo va bene per la distribuzione rapida; la cartella è l’archivio.",
    },
    {
      q: "Come gestiamo le versioni degli appunti?",
      a: "Solo nel nome del file. v1, v2, v3. Quando il gruppo si accorda sulla versione DEFINITIVA, rinominala e spostala in /definitivi/. Non tracciare le versioni in chat.",
    },
    {
      q: "E se gli appunti sono scritti a mano?",
      a: "Scansiona prima in PDF. Le scansioni in bianco e nero di appunti scritti a mano sono più nitide e leggere delle foto. Aggiungi l’OCR se il tuo strumento lo supporta.",
    },
  ],
  related: [
    { label: "PDF per studenti — appunti e guide di studio", path: "/pdf-for-students" },
    { label: "Comprimi PDF — riduci per i limiti degli allegati in chat", path: "/compress-pdf" },
    { label: "Come organizzare il materiale di studio in PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Come condividere un PDF dal telefono", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "PDF per studenti — appunti, evidenziazioni, guide di studio", path: "/pdf-for-students" },
};

export default content;
