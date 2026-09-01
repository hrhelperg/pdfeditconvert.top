import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-pdfs-on-phone",
  h1: "Come organizzare i PDF sul telefono",
  description:
    "Evita che i PDF sul telefono diventino un caos: rinomina, organizza in cartelle, sincronizza con il cloud e libera spazio. Una routine di manutenzione pratica.",
  updated: "2026-05-23",
  intro: [
    "Sul telefono i PDF si accumulano più velocemente che altrove. Allegati mail, scansioni, download, foto convertite — si ammassano in Download o nell’app File con nomi come «Documento(3).pdf» finché non riesci più a trovare quello che ti serve proprio quando ti serve. Gestirli non è entusiasmante, ma dieci minuti di routine risparmiano un’ora di ricerca frenetica più avanti.",
    "Questa guida è una routine di manutenzione pratica per i PDF sul tuo iPhone o telefono Android: dar loro nomi che si trovino, organizzarli in cartelle sensate, sincronizzare quelli importanti, ed eliminare i divoratori di spazio. Si appoggia all’app File del tuo telefono e all’app PDF Editor per il lavoro sui documenti.",
    "L’obiettivo è un telefono in cui riesci a mettere le mani su qualsiasi documento in pochi secondi, e in cui lo spazio non sparisce silenziosamente dentro scansioni dimenticate da 40 MB.",
  ],
  steps: [
    {
      title: "Rinomina i file appena arrivano",
      body: "Nel momento in cui salvi un PDF, dagli un nome vero — «Contratto-affitto-firmato-2026-05.pdf», non «scan_0007.pdf». È un nome descrittivo a rendere un file ritrovabile settimane dopo.",
    },
    {
      title: "Crea qualche cartella sensata",
      body: "Nell’app File, crea cartelle che rispecchino il tuo modo di pensare — Scontrini, Contratti, Moduli, Lavoro. Una manciata di cartelle chiare batte un unico mucchio gigante.",
    },
    {
      title: "Sincronizza quelli importanti con il cloud",
      body: "Sposta i documenti che non puoi permetterti di perdere su iCloud Drive, Google Drive o OneDrive, così sopravvivono a un telefono perso o sostituito — e si aprono anche sui tuoi altri dispositivi.",
    },
    {
      title: "Snellisci e sistema i documenti stessi",
      body: "Usa l’app PDF Editor per unire i file correlati, eliminare le pagine vuote e correggere le scansioni storte, così ogni documento archiviato è pulito invece di essere un ammasso grezzo.",
    },
    {
      title: "Comprimi i divoratori di spazio",
      body: "Le scansioni pesanti mangiano spazio. Comprimi quelle che tieni ma di cui non ti serve la piena risoluzione, e lo spazio smette di riempirsi misteriosamente.",
    },
    {
      title: "Elimina ciò che non ti serve più",
      body: "Cancella i duplicati e i file occasionali che hai già inviato. Svuota di tanto in tanto la cartella Eliminati di recente, così lo spazio liberato torna davvero disponibile.",
    },
  ],
  tips: [
    "Rinomina all’arrivo, non «più tardi». Più tardi non arriva mai, e il risultato è una cartella piena di «Documento(n).pdf».",
    "Scegli un solo schema di denominazione — «Tipo-Chi-Data» funziona bene — e i tuoi file si ordinano e si trovano da soli.",
    "Sincronizza tutto ciò che ti dispiacerebbe perdere. Un telefono si perde molto più facilmente di un account cloud, e i file sincronizzati si aprono anche sul tuo portatile.",
    "Comprimere le scansioni che conservi ma apri raramente libera molto più spazio di quanto potrà mai fare l’eliminazione di piccoli file.",
    "Una rapida sistemata mensile batte uno scavo archeologico annuale. Dieci minuti con regolarità impediscono al mucchio di diventare un progetto a sé.",
  ],
  mobileNote:
    "L’app PDF Editor è il lato «documenti» della gestione dei PDF sul telefono: unisci, snellisci, ruota, comprimi e rinomina in un unico posto, offline, prima di archiviare. Abbinala all’app File per cartelle e sincronizzazione cloud, e il mucchio resta sotto controllo.",
  faq: [
    {
      q: "Dove vivono i PDF sul mio telefono?",
      a: "Su iPhone, nell’app File (spesso in Download o iCloud Drive); su Android, di solito in Download tramite l’app File. Creare cartelle in entrambi i casi li mantiene organizzati.",
    },
    {
      q: "Come dovrei chiamare i miei file PDF?",
      a: "Usa uno schema coerente e descrittivo con una data, tipo «Tipo-Chi-Data.pdf». Farlo appena i file arrivano è ciò che li mantiene ritrovabili in seguito.",
    },
    {
      q: "Come faccio a impedire ai PDF di mangiarmi lo spazio?",
      a: "Comprimi le scansioni pesanti che conservi, elimina i duplicati e i file occasionali già inviati, e svuota la cartella Eliminati di recente così lo spazio viene davvero liberato.",
    },
    {
      q: "Dovrei tenere i PDF nel cloud o sul dispositivo?",
      a: "Tieni quelli importanti nel cloud, così sopravvivono a un telefono perso e si sincronizzano sugli altri dispositivi. Lo spazio solo sul dispositivo va bene per i file temporanei che eliminerai presto.",
    },
    {
      q: "Posso organizzare i documenti stessi, non solo i file?",
      a: "Sì. L’app PDF Editor unisce, snellisce e sistema i documenti così ciò che archivi è pulito — guarda la guida su come organizzare i file PDF per il metodo completo.",
    },
  ],
  related: [
    { label: "Tutti gli strumenti PDF gratuiti", path: "/pdf-tools" },
    { label: "Come organizzare i tuoi file PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Come ridurre la dimensione di un PDF su iPhone", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
    { label: "Come condividere un PDF dal telefono", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Editor PDF", path: "/pdf-editor" },
};

export default content;
