import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-merge-pdf-files",
  h1: "Come unire file PDF da telefono o computer",
  description:
    "Combina più PDF in un unico documento. Procedura passo passo da mobile con l’app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Combinare più PDF è una delle operazioni sui documenti più richieste da una piccola impresa o da uno studente. Che si tratti di scontrini scansionati da mandare al commercialista, di articoli di ricerca da raggruppare per una scadenza, o di un preventivo da unire ai documenti di supporto, inviare un unico file ordinato è sempre meglio che destreggiarsi con cinque allegati.",
    "Questa guida mostra come unire i PDF dal telefono usando l’app PDF Editor per iPhone o Android. Il flusso è identico su entrambe le piattaforme: aggiungi i file, trascinali nell’ordine che vuoi, ed esporta un unico PDF combinato. L’intera operazione richiede di solito meno di un minuto.",
    "Se preferisci unire i file da computer, gli stessi principi valgono per la maggior parte degli strumenti PDF moderni. Qui il focus è sul flusso mobile perché è dove avvengono la maggior parte delle unioni nella vita reale — tra una riunione e l’altra, presso un cliente o in viaggio.",
  ],
  steps: [
    {
      title: "Apri l’app PDF Editor",
      body: "Avvia l’app e tocca il riquadro Unisci nella schermata iniziale. Non serve alcun account per iniziare.",
    },
    {
      title: "Aggiungi i file da combinare",
      body: "Tocca il pulsante +. Aggiungi ogni PDF da File, iCloud Drive, Google Drive, OneDrive, oppure condividendolo da qualsiasi altra app. Puoi mescolare liberamente le origini.",
    },
    {
      title: "Riordina la coda",
      body: "Tieni premuto un elemento nella coda e trascinalo nella posizione giusta. L’ordine nella coda è l’ordine nel file finale. Ricontrolla la sequenza prima di unire.",
    },
    {
      title: "Ruota le pagine orizzontali",
      body: "Se alcuni file di partenza sono stati scansionati storti, tocca l’icona di rotazione accanto a ciascun elemento interessato, così il documento unito si legge correttamente.",
    },
    {
      title: "(Facoltativo) Aggiungi una copertina",
      body: "Tocca Aggiungi copertina per inserire una semplice pagina di titolo con data e un titolo di una riga. Utile quando il documento unito è destinato a un cliente.",
    },
    {
      title: "Tocca Unisci",
      body: "L’app combina tutti i file in un unico PDF e mostra il risultato per la revisione. L’unione avviene sul dispositivo, quindi anche i file di partenza protetti da password restano privati.",
    },
    {
      title: "Rivedi il file unito",
      body: "Scorri il documento per assicurarti che le pagine siano in ordine e l’orientamento sia corretto. Usa la vista miniature delle pagine per verificare rapidamente.",
    },
    {
      title: "Salva o condividi",
      body: "Salva in File, sincronizza con un cloud, oppure condividi direttamente via mail, AirDrop o qualsiasi app di messaggistica. Scegli un nome file descrittivo — «Contratto-con-Allegato-2026-05.pdf» è molto meglio di «Documento(3).pdf» quando il file arriva nella casella di qualcuno.",
    },
  ],
  tips: [
    "Aggiungi una copertina quando il documento unito è destinato a un destinatario esterno — fa sembrare il pacchetto intenzionale invece che improvvisato.",
    "Ruota le pagine scansionate storte prima di unire, non dopo — correggere l’orientamento più tardi significa riesportare l’intero file.",
    "Se il PDF unito deve essere inviato via mail, passa poi lo strumento Comprimi così il risultato rientra nei tipici limiti di 25 MB per gli allegati.",
    "Segnala le sezioni unite tramite la vista Pagine, così il destinatario può saltare direttamente alla parte che gli interessa in un documento lungo.",
    "Tieni i file originali finché non hai confermato che l’unione è andata bene — non eliminare mai gli originali nella stessa sessione.",
  ],
  mobileNote:
    "L’unione da mobile funziona particolarmente bene quando devi combinare scansioni e PDF digitali — l’app gestisce entrambi in un’unica coda, e puoi acquisire al volo una nuova scansione da aggiungere all’unione. Sul computer è un’operazione scomoda, sul telefono basta un tocco.",
  faq: [
    {
      q: "C’è un numero massimo di file che posso unire?",
      a: "Non c’è un limite rigido. Lotti molto grandi (50 file e oltre) richiedono più tempo sui telefoni datati, ma l’app gestisce senza problemi le unioni della vita reale. Se noti problemi di prestazioni, dividi il lavoro in due unioni e combina i risultati.",
    },
    {
      q: "Posso unire un documento Word a un PDF?",
      a: "Sì, indirettamente. Converti prima il documento Word in PDF usando il riquadro Converti, poi aggiungi il risultato alla coda di unione insieme agli altri PDF.",
    },
    {
      q: "Cosa succede con i file di partenza protetti da password?",
      a: "Inserisci la password quando richiesta. L’app gestisce la decrittazione localmente; il file unito finale può restare senza protezione oppure essere protetto di nuovo con una password a tua scelta.",
    },
    {
      q: "La formattazione originale cambia dopo l’unione?",
      a: "No. Ogni pagina di partenza viene preservata esattamente. Cambia solo l’ordine delle pagine, e attorno a esse viene costruito un PDF contenitore.",
    },
    {
      q: "Posso annullare un’unione?",
      a: "Sì. La funzione Dividi PDF scompone qualsiasi PDF — unito o originale — di nuovo in pagine o intervalli singoli. Gli originali non vengono mai modificati durante un’unione.",
    },
  ],
  related: [
    { label: "Merge PDF — gratis, nel tuo browser", path: "/merge-pdf" },
    { label: "Split PDF — estrai pagine nel tuo browser", path: "/split-pdf" },
    { label: "Tutti gli strumenti PDF gratuiti", path: "/pdf-tools" },
    {
      label: "Come comprimere un PDF dopo averlo unito",
      path: "/guides/how-to-compress-pdf",
    },
  ],
  parentHub: { label: "Merge PDF", path: "/merge-pdf" },
};

export default content;
