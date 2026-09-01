import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflow-for-university-students",
  h1: "Flusso di lavoro PDF per studenti universitari (appunti, compiti, consegne)",
  description:
    "Un ritmo PDF che regge un intero semestre, sessione d’esame compresa: appunti scansionati, compiti consegnati, materiale di studio condiviso. Tutto nel browser e gratuito.",
  updated: "2026-05-29",
  intro: [
    "Un semestre universitario genera centinaia di PDF. Slide di lezione, appunti scritti a mano scansionati, esercitazioni, compiti completati, letture integrative, raccolte di studio per gli esami. La maggior parte degli studenti se la cava accumulandoli nella cartella download e rovistando quando serve. Funziona alla terza settimana; crolla alla decima; agli esami è peggio che non averli affatto.",
    "Un ritmo PDF che regge l’intero semestre è breve e facile da mantenere. Raccolte settimanali di appunti per corso, consegne di compiti nominate in modo coerente, raccolte di studio assemblate prima degli esami, archivi a fine semestre. Non richiede strumenti costosi o app che non hai già, e gran parte si può fare dal telefono.",
    "Questa guida descrive il ritmo — cosa fare ogni settimana, cosa fare per ogni compito, cosa fare a metà semestre e agli esami. Parte dal presupposto che l’obiettivo sia trovare qualsiasi documento in cinque secondi, non costruire un sistema di conoscenza personale perfetto.",
  ],
  steps: [
    {
      title: "Ogni settimana: raccogli e unisci il materiale di lezione",
      body: "Alla fine di ogni settimana per ogni corso: raccogli appunti battuti al computer, PDF delle slide, foto della lavagna e pagine scansionate scritte a mano. Unisci PDF le combina in Settimana3_Raccolta_2026-09-15.pdf dentro /Corsi/[Corso]/lezioni/.",
    },
    {
      title: "Per ogni compito: produci, nomina, consegna, archivia",
      body: "Word a PDF per il lavoro battuto al computer, Scansiona in PDF per le pagine scritte a mano, Unisci PDF per combinare, Comprimi PDF se il portale ha un limite. Consegna, e tieni una copia in /Corsi/[Corso]/compiti/consegnati/.",
    },
    {
      title: "A metà semestre: fai pulizia",
      body: "Verso la settimana 7, ripassa le cartelle dei corsi. Elimina i duplicati, correggi i file mal nominati, archivia ciò che è già concluso. Venti minuti a metà semestre risparmiano ore agli esami.",
    },
    {
      title: "Prima degli esami: costruisci una raccolta di studio",
      body: "Combina le raccolte settimanali rilevanti in un unico Corso_RaccoltaStudio_Finale.pdf. Aggiungi una copertina con gli argomenti. Comprimi per un uso portatile su tablet o telefono durante il ripasso.",
    },
    {
      title: "Annota la raccolta di studio su tablet o telefono",
      body: "Per alcuni studenti l’annotazione PDF su tablet funziona meglio della carta. Usa evidenziazione, commenti e sottolineatura; i segni restano per un ripasso successivo.",
    },
    {
      title: "A fine semestre: archivia il corso",
      body: "Sposta /Corsi/[Corso]/ in /Archivio/[Anno]/[Corso]/. Comprimi tutto ciò che finisce in archivio. La cartella attiva resta pulita per il semestre successivo.",
    },
  ],
  tips: [
    "Non unire tra corsi diversi o tra settimane diverse. L’unità utile più piccola è un PDF a settimana per corso.",
    "Consegna seguendo esattamente la convenzione di nome richiesta da ogni corso. «Cognome_Nome_Compito3.pdf» è lo standard più comune; seguilo alla lettera.",
    "Annota le raccolte di studio in digitale. I PDF annotati e ricercabili battono la carta per il ripasso — trovi un argomento specifico in fretta.",
    "Comprimi solo al momento della consegna e dell’archiviazione. Durante l’uso attivo, ottimizza per la leggibilità.",
    "Sincronizza la cartella Corsi con un cloud drive. L’accesso dal telefono al portatile durante gli esami vale più dello spazio su disco risparmiato.",
  ],
  mobileNote:
    "Gran parte della giornata PDF di uno studente avviene dal telefono — scansionare una pagina scritta a mano, fotografare una slide, consegnare un compito. L’app PDF Editor gestisce l’intera catena (scansione, unione, compressione, firma, condivisione) offline su iOS e Android, così il flusso di lavoro non dipende dall’accesso al portatile.",
  faq: [
    {
      q: "Quanto tempo richiede questo ritmo?",
      a: "Dieci minuti a settimana per corso per la raccolta settimanale. Due minuti per compito. Venti minuti a metà semestre. Il risparmio accumulato agli esami è di ore.",
    },
    {
      q: "E se ho molti corsi?",
      a: "Il ritmo si adatta — la stessa convenzione vale per ogni corso. Due corsi in parallelo raddoppiano il tempo; la struttura resta invariata.",
    },
    {
      q: "Vale ancora la pena tenere la carta?",
      a: "Gli appunti originali scritti a mano sì, come backup. Una volta scansionati e inseriti nella raccolta settimanale, la carta serve solo come riferimento.",
    },
    {
      q: "Devo applicare l’OCR alle scansioni per cercarle?",
      a: "Se il tuo strumento lo offre, sì. Materiale di studio ricercabile al momento dell’esame vale molto più di uno non ricercabile.",
    },
    {
      q: "E le letture integrative?",
      a: "Una cartella /letture/ separata per ogni corso. Non unirle alle raccolte di lezione; crescono separatamente e servono a uno scopo diverso.",
    },
  ],
  related: [
    { label: "PDF per studenti — appunti e guide di studio", path: "/pdf-for-students" },
    { label: "I migliori strumenti PDF gratuiti per studenti", path: "/guides/best-pdf-tools-for-students" },
    { label: "Come organizzare il materiale di studio in PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Come consegnare i compiti in PDF", path: "/guides/how-to-submit-homework-as-pdf" },
  ],
  parentHub: { label: "PDF per studenti — appunti, evidenziazioni, guide di studio", path: "/pdf-for-students" },
};

export default content;
