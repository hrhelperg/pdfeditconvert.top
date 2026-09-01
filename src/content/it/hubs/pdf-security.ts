import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-security",
  hero: {
    eyebrow: "Sicurezza PDF",
    h1: "Proteggi i PDF sensibili nel modo giusto.",
    highlight: "modo giusto",
    lead: "Password, crittografia AES-256, redazione e restrizioni d’uso — su contratti, buste paga e scansioni di documenti d’identità. Il tipo di protezione che i documenti sensibili meritano davvero.",
    primaryCta: { label: "Apri l’app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Perché la maggior parte dei PDF «protetti» non lo è davvero",
    paragraphs: [
      "È sorprendentemente comune condividere scansioni di passaporti, contratti firmati e buste paga come semplici PDF, via email, tramite app di messaggistica o come allegati a moduli. Se l’account email o la cronologia dei messaggi viene compromessa, ognuno di questi documenti resta esposto.",
      "Alcuni utenti aggiungono una «protezione» che è semplicemente una password di apertura impostata con uno strumento online gratuito. È meglio di niente, ma la password è spesso debole, la crittografia è a volte quella legacy a 40 bit, e lo strumento conserva il tuo file abbastanza a lungo da diventare esso stesso un rischio.",
      "Una vera sicurezza per i PDF significa crittografia forte (AES-256), password robuste e, quando serve, separare i permessi di modifica e stampa dall’accesso in sola lettura. Dovrebbe avvenire anche sul dispositivo, perché nel momento in cui carichi un documento sensibile su uno strumento web hai già perso la battaglia della privacy.",
    ],
  },
  features: {
    heading: "Strumenti di sicurezza adatti alla minaccia reale",
    items: [
      {
        icon: "Lock",
        title: "Protezione con password",
        body: "Imposta una password per aprire il documento. Il PDF non può essere visualizzato senza.",
      },
      {
        icon: "ShieldCheck",
        title: "Crittografia AES-256",
        body: "Crittografia moderna e robusta, lo standard usato dai sistemi aziendali.",
      },
      {
        icon: "Printer",
        title: "Limita copia e stampa",
        body: "Consenti la visualizzazione ma blocca la copia del testo, la stampa o l’estrazione delle pagine.",
      },
      {
        icon: "EyeOff",
        title: "Redazione",
        body: "Oscura in modo permanente nomi, numeri di conto o firme prima di condividere il documento.",
      },
      {
        icon: "Stamp",
        title: "Filigrane",
        body: "Aggiungi una filigrana «riservato» o specifica per il destinatario per scoraggiare l’inoltro.",
      },
      {
        icon: "Link",
        title: "Consigli per condividere la password",
        body: "Indicazioni integrate su come condividere le password usando un canale diverso da quello del documento stesso.",
      },
    ],
  },
  steps: {
    heading: "Come proteggere un PDF",
    items: [
      {
        title: "Apri il PDF",
        body: "Importa il documento in PDF Editor da File o da qualsiasi cloud.",
      },
      {
        title: "Tocca Proteggi",
        body: "Lo trovi nel menu degli strumenti del documento. Scegli il livello di protezione che ti serve.",
      },
      {
        title: "Imposta la password",
        body: "Usa una password robusta: almeno 12 caratteri, con un mix di lettere, numeri e simboli.",
      },
      {
        title: "(Facoltativo) Scegli le restrizioni",
        body: "Consenti o blocca stampa, copia e modifica. Utile per documenti condivisi ma di sola lettura.",
      },
      {
        title: "Salva la copia protetta",
        body: "Salva come nuovo file, così l’originale resta accessibile se dimentichi la password.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Proteggere documenti sensibili in movimento",
    body: "La maggior parte degli errori di sicurezza avviene quando sei di fretta. La protezione dal telefono ti permette di bloccare un contratto prima di inviarlo dall’aeroporto, o di proteggere un PDF con dati salariali prima di condividerlo con un collaboratore esterno, senza dover cercare un computer.",
  },
  faq: [
    {
      q: "Che tipo di crittografia usa l’app?",
      a: "AES-256, lo standard moderno. Evita la vecchia crittografia a 40 bit e la RC4 a 128 bit: sono facilmente violabili.",
    },
    {
      q: "Cosa succede se dimentico la password?",
      a: "Non esiste una scorciatoia. Una crittografia robusta significa che il documento è irrecuperabile senza la password. Conservala in un gestore di password.",
    },
    {
      q: "Come condivido la password in sicurezza?",
      a: "Usa un canale diverso da quello del documento stesso: manda la password via SMS se hai inviato il PDF via email, oppure usa la funzione di condivisione sicura di un gestore di password.",
    },
    {
      q: "La redazione è permanente?",
      a: "Sì. Una redazione corretta rimuove il testo sottostante, non si limita a coprirlo visivamente. Anche copiando e incollando dal PDF redatto non emergerà il contenuto originale.",
    },
    {
      q: "Posso aggiungere una filigrana e una password insieme?",
      a: "Sì. Sono indipendenti e possono essere applicate insieme.",
    },
  ],
  related: [
    {
      label: "Guida passo passo: come proteggere un PDF con una password",
      path: "/guides/how-to-protect-pdf-file",
    },
    { label: "Firma i PDF prima di bloccarli", path: "/sign-pdf" },
    {
      label: "Flussi di lavoro PDF per team aziendali",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Blocca i PDF sensibili in pochi secondi.",
    sub: "Gratis su iOS e Android. La protezione avviene sul dispositivo.",
  },
};

export default content;
