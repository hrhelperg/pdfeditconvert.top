import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-class-documents-as-pdf",
  h1: "Come modificare i documenti scolastici in PDF (annotare, evidenziare, firmare)",
  description:
    "Dispense, esercitazioni e moduli di consenso spesso arrivano come PDF. Come segnarli, compilarli e restituirli senza stamparli — dal telefono o dal computer.",
  updated: "2026-05-29",
  intro: [
    "I documenti scolastici oggi arrivano come PDF più che in qualsiasi altro formato. Dispense da annotare, esercitazioni da compilare, moduli di consenso da firmare e restituire, programmi del corso da rivedere. La tentazione è stampare tutto, compilarlo a mano e riscansionarlo. Funziona, ma è lento e produce un risultato peggiore rispetto a modificare direttamente il PDF.",
    "La modifica PDF moderna gestisce bene tutti e quattro i casi: evidenziazione e annotazione per la lettura, compilazione dei campi per esercitazioni e moduli, firme per le autorizzazioni, modifiche strutturali quando serve aggiungere una pagina. Gran parte si fa in una scheda del browser o con un’app da telefono, senza pagare software.",
    "Questa guida percorre ogni caso — qual è lo strumento giusto, cosa fa e cosa non fa, e come rimandare indietro una copia compilata pulita. Parte dal presupposto che tu non voglia stampare nulla, se puoi evitarlo.",
  ],
  steps: [
    {
      title: "Per leggere e annotare: evidenzia e commenta",
      body: "La maggior parte dei lettori PDF (e l’app PDF Editor) supportano evidenziazione, sottolineatura e commenti con nota adesiva. Usali per la lettura attiva; le annotazioni restano nel file e sopravvivono alla condivisione.",
    },
    {
      title: "Per i campi modulo reali: tocca e compila",
      body: "I PDF pensati come moduli hanno campi interattivi veri. Tocca ciascuno, scrivi, passa al successivo. Il risultato è identico a un lavoro stampato e compilato a mano.",
    },
    {
      title: "Per i PDF non interattivi (senza campi modulo): aggiungi caselle di testo",
      body: "Una dispensa scansionata senza campi veri richiede di sovrapporre caselle di testo sulle righe vuote. L’app PDF Editor lo supporta; il risultato è più ordinato di risposte scritte a mano su una stampa.",
    },
    {
      title: "Per le firme: Firma PDF",
      body: "Firma PDF ti permette di disegnare o digitare una firma direttamente sul modulo. Per moduli di consenso e autorizzazioni, una firma disegnata è la scelta giusta.",
    },
    {
      title: "Per aggiungere pagine: unisci",
      body: "Se la tua risposta è più lunga degli spazi disponibili nella dispensa, Unisci PDF ti permette di aggiungere pagine extra. Mantienile nell’ordine giusto; le pagine originali restano intatte.",
    },
    {
      title: "Salva come nuovo file, non sopra l’originale",
      body: "Salva la versione compilata con un nuovo nome (Dispensa3_Completata_Cognome.pdf). L’originale vuoto resta intatto, nel caso tu debba rifarlo o condividerlo con un compagno di studio.",
    },
  ],
  tips: [
    "Verifica prima se il PDF ha campi modulo reali. Se toccando una riga vuota compare un cursore di digitazione, è un modulo vero. Se non succede nulla, ti serve la sovrapposizione con caselle di testo.",
    "Usa una dimensione di testo coerente per le risposte compilate — se riesci a capirlo, allinea alla dimensione del corpo del documento.",
    "Evita di stampare per compilare, a meno che non sia strettamente necessario. La versione ri-scansionata è sempre meno leggibile della compilazione digitale.",
    "Salva prima di firmare. Una firma di solito appiattisce parte del file; la versione precedente alla firma è la copia ancora modificabile.",
    "Conferma i moduli compilati esportandoli in PDF dopo — alcuni strumenti salvano lo stato modificabile separatamente, e il PDF esportato blocca le tue risposte.",
  ],
  mobileNote:
    "Molti documenti scolastici arrivano sul telefono e devono tornare indietro nello stesso modo. L’app PDF Editor gestisce annotazione, compilazione, firma e unione su iOS e Android, così una dispensa non deve aspettare il portatile per tornare compilata.",
  faq: [
    {
      q: "Posso modificare un PDF dal browser?",
      a: "Per casi limitati sì — compilazione moduli e annotazione funzionano in molti browser. Per modifiche al testo e cambiamenti strutturali, un editor vero (nel browser o come app) fa molto di più.",
    },
    {
      q: "Perché la mia dispensa non ha campi modulo reali?",
      a: "O il docente l’ha esportata senza attivarli, o il file è una scansione. Usa la sovrapposizione con caselle di testo sopra le righe vuote.",
    },
    {
      q: "I PDF firmati sono accettati per i moduli scolastici?",
      a: "Sempre più spesso sì. Alcuni moduli con valore legale (in particolare certe autorizzazioni firmate, a seconda della normativa applicabile) potrebbero comunque richiedere l’inchiostro — verifica sempre le istruzioni del modulo.",
    },
    {
      q: "Devo sempre salvare come nuovo file?",
      a: "Sì, per il lavoro scolastico. Tenere l’originale vuoto ti permette di riprovare o condividere senza doverlo riscaricare.",
    },
    {
      q: "Come aggiungo una pagina a un PDF che sto compilando?",
      a: "Scrivi il contenuto aggiuntivo come PDF separato, poi usa Unisci PDF per combinarli. Colloca la pagina aggiunta dove ha senso logicamente.",
    },
  ],
  related: [
    { label: "PDF Editor — modifica testo e immagini da mobile", path: "/pdf-editor" },
    { label: "Firma PDF — aggiungi firme elettroniche", path: "/sign-pdf" },
    { label: "Come compilare moduli PDF dal telefono", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "Come annotare un PDF da mobile", path: "/guides/how-to-annotate-pdf-on-mobile" },
  ],
  parentHub: { label: "PDF Editor — modifica testo, immagini e pagine", path: "/pdf-editor" },
};

export default content;
