import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-files-privately",
  h1: "Come condividere un PDF in modo privato (senza caricarlo da sconosciuti)",
  description:
    "Il modo privato di condividere un PDF non passa per un sito «strumenti PDF» pubblico. I canali che mantengono i documenti tra te e il destinatario, con impostazioni predefinite sensate.",
  updated: "2026-05-29",
  intro: [
    "La prima cosa che molte persone fanno quando vogliono condividere un PDF con qualcuno è caricarlo su uno strumento che promette una condivisione «privata» — e quello strumento, spesso, è il rischio più grande per la privacy di tutta la catena. I servizi gratuiti di condivisione file di solito conservano i file per un certo periodo, a volte li indicizzano, e dipendono da un server con cui non hai alcun rapporto.",
    "La condivisione privata non è complicata; è questione di scegliere il canale giusto. Trasferimento diretto (AirDrop, USB), messaggistica crittografata end-to-end, mail crittografata, oppure file protetti da password inviati per mail normale. Ognuno funziona per una situazione diversa. Nessuno di questi richiede di caricare il file su uno sconosciuto.",
    "Questa guida percorre le opzioni realistiche per livello di sensibilità e caso d’uso, con i compromessi di ciascuna. L’obiettivo sono documenti condivisi che restano tra te e il destinatario, senza terzi come intermediario evitabile.",
  ],
  steps: [
    {
      title: "Per il trasferimento sullo stesso dispositivo o nella stessa stanza, usa AirDrop o la condivisione locale",
      body: "iPhone-a-iPhone, iPhone-a-Mac: AirDrop. Android: Nearby Share. Stesso Mac, stesso PC: AirDrop locale o cartella condivisa. Il file non tocca mai internet.",
    },
    {
      title: "Per i destinatari fidati, usa la messaggistica crittografata end-to-end",
      body: "Signal, WhatsApp (con qualche riserva), iMessage tra utenti Apple. Il trasporto stesso è crittografato; il file viene decrittografato solo sul dispositivo del destinatario. Le piattaforme vedono i metadati, non il contenuto.",
    },
    {
      title: "Per file a bassa sensibilità, la mail normale va bene",
      body: "La mail standard non è crittografata ma è praticamente sicura per la maggior parte dei documenti non sensibili. Il rischio è l’intercettazione, rara per documenti ordinari che passano attraverso i principali provider di posta.",
    },
    {
      title: "Per file sensibili via mail normale, proteggi prima con una password",
      body: "Applica una password al PDF prima di allegarlo. La mail contiene il file; la password passa attraverso un canale diverso (una telefonata, un messaggio separato). Anche se la mail viene intercettata, il file resta protetto.",
    },
    {
      title: "Per materiale molto sensibile, usa mail crittografata o consegna sicura",
      body: "ProtonMail, Tutanota, oppure il servizio di consegna sicura di documenti della tua organizzazione. Aggiungono una crittografia reale al canale stesso, eliminando il passaggio della password su un canale separato.",
    },
    {
      title: "Evita di caricare contenuti sensibili su servizi gratuiti di condivisione file",
      body: "Gli strumenti gratuiti che caricano il tuo file (compressori, strumenti per unire o dividere) tengono il file sul loro server, anche solo per breve tempo. Per materiale sensibile, usa strumenti basati sul browser che elaborano in locale prima di qualsiasi condivisione.",
    },
  ],
  tips: [
    "Non mettere una password nella stessa mail del file protetto da password. Il senso della password è difendersi proprio dall’intercettazione della mail.",
    "Conferma l’identità del destinatario prima di condividere — le truffe di phishing a volte si spacciano per clienti per estorcere PDF sensibili.",
    "Per condivisioni ripetute con lo stesso destinatario, accordatevi su un unico canale e restateci fedeli. È quando si cambia canale che avvengono le fughe di dati.",
    "Non condividere tramite link pubblici a meno che il link non sia a uso singolo. I link permanenti possono essere scoperti o condivisi ulteriormente.",
    "Dopo aver condiviso, elimina il file da qualsiasi area temporanea (cartella Download, disco di appoggio). Meno copie esistono del materiale sensibile, più piccola è la superficie di rischio.",
  ],
  mobileNote:
    "La maggior parte della condivisione privata oggi comincia dal telefono. L’app PDF Editor prepara i file (comprimi, firma, password) in locale su iOS e Android, per poi passarli ad AirDrop, Signal o alla tua mail — il file resta sul telefono durante la preparazione, e passa poi direttamente al destinatario.",
  faq: [
    {
      q: "Qual è il modo più semplice per condividere in modo privato?",
      a: "AirDrop o Nearby Share quando sei vicino al destinatario. Messaggistica crittografata end-to-end quando non lo sei. Entrambi tengono il file fuori dalle mani di un server di terzi.",
    },
    {
      q: "WhatsApp è abbastanza privato per documenti sensibili?",
      a: "La crittografia end-to-end protegge il contenuto; WhatsApp vede comunque i metadati (chi ha inviato cosa a chi). Per la maggior parte dei casi va bene; per materiale molto sensibile, Signal è la scelta più pulita.",
    },
    {
      q: "Devo usare un servizio di link per la condivisione di file?",
      a: "Solo con impegni espliciti sul trattamento dei dati e una conservazione breve. Per file sensibili, i canali diretti sono più sicuri.",
    },
    {
      q: "Come si confronta la protezione con password di un PDF con la crittografia del canale?",
      a: "Le password sui PDF proteggono il file in sé; la crittografia del canale protegge il trasporto. Entrambe hanno valore; proteggono da attacchi diversi.",
    },
    {
      q: "Qual è la pratica peggiore più comune?",
      a: "Caricare un PDF sensibile su uno strumento gratuito di «conversione» o «compressione», e poi inviare via mail il file risultante. Il passaggio del caricamento è dove i dati escono dal tuo controllo. Usa strumenti basati sul browser che non caricano nulla.",
    },
  ],
  related: [
    { label: "PDF Security — proteggi e crittografa con una password", path: "/pdf-security" },
    { label: "Come proteggere i file PDF sensibili", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Come evitare di caricare documenti sensibili", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
    { label: "Flussi di lavoro documentali che mettono la privacy al primo posto", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "PDF Security — proteggi e crittografa con una password", path: "/pdf-security" },
};

export default content;
