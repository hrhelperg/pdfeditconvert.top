import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-study-materials-as-pdf",
  h1: "Come organizzare il materiale di studio in PDF (cartelle, nomi, indice)",
  description:
    "I PDF dei corsi si accumulano in fretta. Una convenzione semplice di cartelle, nomi e unione dei file che mantiene ricercabile il materiale del semestre dalla prima settimana agli esami.",
  updated: "2026-05-29",
  intro: [
    "Entro la quarta settimana di semestre, la tua cartella dei download ha già cinquanta PDF con nomi come «lezione7.pdf», «versione-finale-2.pdf», «Slide_v3_corrette.pdf» e «Documento.pdf». Entro la decima settimana non trovi più niente. Alla settimana degli esami stai cercando la stessa lezione tre volte perché non ricordi quale versione di quale file contiene la slide che ti serve.",
    "La soluzione non sono software o app — è una convenzione. Una struttura di cartelle semplice, un nome file coerente, l’abitudine di unire i file ogni settimana. Una volta messe in pratica queste tre cose, ritrovare una lezione specifica due mesi dopo richiede cinque secondi invece di quindici minuti.",
    "Questa guida descrive la convenzione che regge per l’intero semestre: come dovrebbero essere le cartelle, come dovrebbero leggersi i nomi dei file, quando unire, e cosa fare a fine corso.",
  ],
  steps: [
    {
      title: "Crea una cartella principale per ogni corso",
      body: "/Corsi/[CodiceCorso]/. All’interno: /lezioni/, /compiti/, /letture/, /esami/. Quattro cartelle coprono la maggior parte di quello che arriva. Non andare oltre due livelli di annidamento.",
    },
    {
      title: "Standardizza lo schema dei nomi file",
      body: "SettimanaN_TipoDocumento_AAAA-MM-GG.pdf. Quindi Settimana3_Lezione_2026-09-15.pdf, Compito2_Consegna_2026-09-20.pdf. La data alla fine ordina cronologicamente; la settimana all’inizio raggruppa per argomento.",
    },
    {
      title: "Unisci per settimana, non per singolo file",
      body: "Alla fine di ogni settimana, Unisci PDF combina gli appunti di lezione, le slide e le foto della lavagna di quella settimana in un unico Settimana3_Raccolta_Lezione_2026-09-15.pdf. Un file unico a settimana è molto più facile da ritrovare in seguito.",
    },
    {
      title: "Aggiungi copertine alle raccolte unite",
      body: "Una copertina battuta al computer (corso, settimana, argomenti trattati) rende la raccolta comprensibile da sola al momento degli esami. Il te del futuro, mentre scorre dodici settimane di raccolte, ringrazierà il te di adesso.",
    },
    {
      title: "Archivia a fine semestre",
      body: "Sposta /Corsi/[Corso]/ in /Archivio/[Anno]/[Corso]/ quando il semestre finisce. Le cartelle attive restano snelle; gli archivi restano ricercabili per una revisione futura in vista di un corso propedeutico.",
    },
    {
      title: "Comprimi gli archivi, non i file attivi",
      body: "Comprimi PDF il materiale archiviato per risparmiare spazio su disco. Non comprimere i file di studio attivi — durante il semestre la leggibilità conta più della dimensione.",
    },
  ],
  tips: [
    "Usa le date nel formato AAAA-MM-GG. Si ordinano correttamente in qualsiasi gestore file. 15/9/26 no.",
    "Non mettere numeri di versione nel materiale di studio. La lezione finale è la lezione; un «v2» significa che il docente l’ha ricaricata.",
    "Etichetta separatamente la preparazione agli esami — /esami/parziale/ e /esami/finale/. È una modalità di studio diversa dal ripasso settimanale.",
    "Non unire file di corsi diversi. I PDF che mescolano più corsi diventano impossibili da ritrovare.",
    "Tieni un breve README.txt in ogni cartella del corso che indichi cosa contiene ciascuna sottocartella. Aiuta quando torni su quel materiale un semestre dopo.",
  ],
  mobileNote:
    "La maggior parte dei PDF di studio arriva dal telefono (tramite il portale del corso, la mail del docente, o una tua scansione). L’app PDF Editor ti permette di rinominare, archiviare e unire i file direttamente da mobile, così il file finisce subito al posto giusto invece di accumularsi nella cartella Download.",
  faq: [
    {
      q: "Qual è il formato di nome file migliore per il materiale di studio?",
      a: "SettimanaN_TipoDocumento_AAAA-MM-GG.pdf. Il prefisso della settimana raggruppa per argomento, il tipo di documento chiarisce il contenuto, la data in formato ISO ordina cronologicamente.",
    },
    {
      q: "Devo unire settimanalmente o tenere i file separati?",
      a: "Unisci settimanalmente. Un PDF a settimana per corso è la granularità giusta — abbastanza piccolo da caricarsi in fretta, abbastanza grande da bastare a sé stesso per il ripasso.",
    },
    {
      q: "Quanto devono essere profonde le cartelle?",
      a: "Due livelli. /Corsi/[Corso]/[tipo]/. Oltre a questo perdi i file.",
    },
    {
      q: "Mi serve una cartella di archivio separata?",
      a: "Sì. Sposta i semestri conclusi fuori da /Corsi/, così la cartella attiva resta scorribile a colpo d’occhio.",
    },
    {
      q: "E la sincronizzazione sul cloud?",
      a: "Sincronizza la cartella /Corsi/ con almeno un cloud drive. L’accesso dal telefono al portatile conta molto durante gli esami; la sincronizzazione se ne occupa.",
    },
  ],
  related: [
    { label: "PDF per studenti — appunti e guide di studio", path: "/pdf-for-students" },
    { label: "Unisci PDF — componi le raccolte settimanali", path: "/merge-pdf" },
    { label: "Come organizzare i file PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Flusso di lavoro PDF per studenti universitari", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF per studenti — appunti, evidenziazioni, guide di studio", path: "/pdf-for-students" },
};

export default content;
