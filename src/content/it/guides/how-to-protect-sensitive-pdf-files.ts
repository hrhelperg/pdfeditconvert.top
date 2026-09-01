import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-sensitive-pdf-files",
  h1: "Come proteggere i file PDF sensibili (conservazione, condivisione, ciclo di vita)",
  description:
    "I PDF sensibili vanno protetti in tre momenti: mentre sono conservati, mentre vengono condivisi e dopo che il destinatario ha finito di usarli. Un flusso di lavoro pratico che copre tutti e tre.",
  updated: "2026-05-29",
  intro: [
    "I PDF sensibili — contratti, documenti finanziari, documenti d’identità, cartelle mediche — vanno protetti in tre momenti distinti della loro vita: mentre restano sul tuo dispositivo o disco (conservazione), mentre si spostano tra te e il destinatario (condivisione), e dopo che il destinatario li ha usati (ciclo di vita). La maggior parte delle persone si concentra sulla condivisione e ignora gli altri due.",
    "Un flusso di lavoro sensato copre tutti e tre. Conservazione significa dischi crittografati o file protetti da password in luoghi non affidabili. Condivisione significa scegliere un canale che non fa trapelare nulla, non limitarsi a caricare il file sul primo strumento trovato in una ricerca. Ciclo di vita significa pensare a cosa succede al file dopo — sia la tua conservazione che quella del destinatario.",
    "Questa guida percorre ciascuno dei tre momenti. Nulla di tutto ciò è di livello enterprise; è la base realistica per una persona o un piccolo team che gestisce occasionalmente materiale sensibile e non vuole implementare uno stack certificato SOC2 solo per farlo.",
  ],
  steps: [
    {
      title: "Conservazione: tieni i PDF sensibili su archiviazione crittografata",
      body: "FileVault su macOS, BitLocker su Windows, crittografia completa del disco sui telefoni Linux. Coprono il tuo disco locale. Per i dischi esterni, usa formati crittografati. Anche i backup dovrebbero essere crittografati — sincronizza con servizi cloud che supportano la crittografia a conoscenza zero, oppure crittografa prima il file.",
    },
    {
      title: "Proteggi con password i singoli PDF sensibili",
      body: "La protezione con password di un PDF aggiunge un secondo livello. Il file resta al sicuro anche se la crittografia del disco fallisce o qualcuno ottiene una copia del file durante il trasferimento. Usa password forti e uniche; condividile attraverso un canale diverso da quello del file.",
    },
    {
      title: "Condivisione: scegli il canale giusto in base alla sensibilità",
      body: "La mail normale va bene per file a bassa sensibilità. La messaggistica crittografata end-to-end (Signal, mail sicura) per una sensibilità media. Per un’alta sensibilità, servizi a pagamento con impegni espliciti sul trattamento dei dati. Evita di caricare PDF sensibili su «strumenti» gratuiti di terzi.",
    },
    {
      title: "Elabora in locale prima di inviare",
      body: "Se devi comprimere, oscurare o riordinare un PDF sensibile prima di inviarlo, usa strumenti basati sul browser che elaborano in locale — il tuo file non passa dal server di nessun altro. Comprimi PDF, Estrai pagine PDF, Riordina le pagine del PDF funzionano tutti sul tuo dispositivo.",
    },
    {
      title: "Ciclo di vita: pensa alla conservazione e all’eliminazione",
      body: "Tieni i PDF sensibili solo per il tempo che ti serve davvero. Anche il destinatario dovrebbe farlo. Valuta di chiedere al destinatario di confermare l’eliminazione dopo aver usato il file, in particolare per documenti d’identità pensati per un uso singolo.",
    },
    {
      title: "Rimuovi i metadati prima di inviare",
      body: "I PDF spesso contengono nomi di autori, nomi di file originali, cronologia delle modifiche. Ri-esportare da una fonte pulita elimina gran parte di questo. L’app PDF Editor e altri strumenti ti permettono anche di ripulire i metadati in modo esplicito.",
    },
  ],
  tips: [
    "Non inviare via mail una password nello stesso messaggio del file protetto da password. Invia il file su un canale, la password su un altro.",
    "Tratta le scansioni dei documenti d’identità come materiale a uso singolo. Una volta che il destinatario le ha ricevute, chiedigli di eliminarle, a meno che non abbia un motivo normativo per conservarle.",
    "Non riutilizzare le password tra PDF sensibili diversi. Se una viene compromessa, le altre restano protette.",
    "Evita il Wi-Fi pubblico per inviare file sensibili. Usa un hotspot personale o aspetta una rete affidabile.",
    "Rivedi una volta all’anno i tuoi PDF sensibili. La maggior parte non ti serve più — eliminali in modo sicuro e riduci la superficie di rischio.",
  ],
  mobileNote:
    "Oggi i telefoni conservano e inviano molti PDF sensibili (contratti firmati, scansioni di documenti d’identità). L’app PDF Editor li elabora in locale sul dispositivo — compressione, firma, protezione con password — così il materiale sensibile non deve mai lasciare il telefono per essere preparato all’invio.",
  faq: [
    {
      q: "La protezione con password di un PDF è davvero solida?",
      a: "La crittografia AES moderna sui PDF è solida. Il punto debole di solito è la password stessa — una password debole è l’unica via d’accesso facile. Usa password lunghe e uniche.",
    },
    {
      q: "Devo sempre crittografare i PDF sensibili?",
      a: "Sì, sia a riposo che in transito. La crittografia del disco protegge a riposo; le password sui PDF o i canali crittografati proteggono in transito.",
    },
    {
      q: "E l’archiviazione cloud per i PDF sensibili?",
      a: "Accettabile con crittografia a conoscenza zero (il fornitore non può leggere i tuoi file) o con crittografia lato client (crittografi tu il file prima di caricarlo). L’archiviazione cloud normale va bene per file ordinari, non per quelli davvero sensibili.",
    },
    {
      q: "Come oscuro le parti sensibili di un PDF?",
      a: "L’oscuramento vero consiste nel rendere il testo come immagine e sostituirlo. L’app PDF Editor lo supporta. I riquadri neri sovrapposti da soli non oscurano nulla — il testo sottostante resta comunque estraibile.",
    },
    {
      q: "Posso eliminare un PDF in modo sicuro?",
      a: "Sugli SSD, l’eliminazione sicura è meno immediata che sui dischi tradizionali. Sposta il file su archiviazione crittografata, poi eliminalo e lascia che il TRIM del disco ripulisca i settori. Per una sensibilità molto alta, la crittografia completa del disco fin dall’inizio è l’approccio giusto.",
    },
  ],
  related: [
    { label: "PDF Security — proteggi i PDF con una password", path: "/pdf-security" },
    { label: "Come proteggere un file PDF con una password", path: "/guides/how-to-protect-pdf-file" },
    { label: "Come condividere un PDF in modo privato", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Come evitare di caricare documenti sensibili", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "PDF Security — proteggi e crittografa con una password", path: "/pdf-security" },
};

export default content;
