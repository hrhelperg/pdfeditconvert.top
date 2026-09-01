import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-phone",
  h1: "Come compilare un modulo PDF dal telefono",
  description:
    "Compila un modulo PDF su iPhone o Android, che abbia campi veri o sia una semplice scansione. Tocca e scrivi, aggiungi caselle di testo e firma tutto nello stesso posto.",
  updated: "2026-05-23",
  intro: [
    "I moduli PDF si presentano in due versioni, e sapere quale hai tra le mani determina come lo compili. Alcuni sono interattivi — tocchi un campo e scrivi, con caselle ordinate che chi ha progettato il modulo ha già predisposto. Altri sono non interattivi: un modulo scansionato o stampato e poi trasformato in PDF, senza alcun campo, dove devi appoggiare tu stesso il testo sopra. Entrambi si compilano perfettamente dal telefono; richiedono solo un approccio leggermente diverso.",
    "Questa guida spiega come compilare entrambi i tipi su iPhone e Android usando l’app PDF Editor, che rileva i campi interattivi quando esistono e ti permette di posizionare testo e segni di spunta ovunque quando non ci sono. Molti moduli richiedono anche una firma, e la stessa app la gestisce nello stesso passaggio.",
    "Il risultato è un modulo compilato che puoi rimandare indietro subito — niente stampa, niente scansione, niente caccia disperata a una stampante funzionante nel momento peggiore possibile.",
  ],
  steps: [
    {
      title: "Apri il modulo nell’app PDF Editor",
      body: "Importa il PDF da File, Mail, Drive o qualsiasi menu di condivisione. L’app verifica se il modulo ha campi interattivi.",
    },
    {
      title: "Se ha campi, tocca e scrivi",
      body: "I moduli interattivi ti permettono di toccare direttamente ogni campo e scrivere. Passa da un campo all’altro scorrendo, e tocca le caselle di controllo per selezionarle.",
    },
    {
      title: "Se è non interattivo, aggiungi il tuo testo",
      body: "Per un modulo scansionato o senza campi, usa lo strumento testo per posizionare il testo dove va ogni risposta. Regola dimensione e posizione perché resti ordinato sulla riga.",
    },
    {
      title: "Gestisci caselle e date",
      body: "Posiziona un segno di spunta o una X sulle caselle da barrare, e aggiungi la data dove richiesto. Nei moduli non interattivi si tratta semplicemente di oggetti testo o segno che posizioni tu.",
    },
    {
      title: "Firma se il modulo lo richiede",
      body: "Usa lo strumento Firma per aggiungere la tua firma salvata nell’apposita area — lo stesso procedimento sia che il modulo sia interattivo sia che non lo sia.",
    },
    {
      title: "Esporta e invia",
      body: "Salva una copia compilata come nuovo file e rimandala indietro via mail o con qualsiasi app. Conserva l’originale vuoto nel caso debba compilarlo di nuovo.",
    },
  ],
  tips: [
    "Verifica prima se i campi sono interattivi — tocca dove dovrebbe andare una risposta. Se compare un cursore, scrivi; se non succede nulla, è un modulo non interattivo e aggiungi tu il testo sopra.",
    "Sui moduli non interattivi, fai zoom prima di posizionare il testo, così cade esattamente sulla riga invece di restare sospeso sopra o sotto.",
    "Conserva una copia vuota dei moduli che compili spesso. Ripartire da un originale pulito è più ordinato che modificare le risposte dell’ultima volta.",
    "Compila e firma nella stessa sessione, così non devi esportare, riaprire e riposizionare tutto — l’app tiene l’intero lavoro in un solo passaggio.",
    "Ricontrolla i campi obbligatori prima di inviare. Un modulo respinto per una data mancante fa perdere più tempo di quanto ne richieda il controllo.",
  ],
  mobileNote:
    "Compilare moduli è uno dei compiti PDF più adatti al telefono in assoluto — il modulo arriva via mail e riparte allo stesso modo. L’app PDF Editor compila moduli interattivi e non interattivi, aggiunge la tua firma ed esporta una copia completata, tutto sul dispositivo senza inviare nulla a un server.",
  faq: [
    {
      q: "Come faccio a sapere se un modulo PDF è interattivo?",
      a: "Tocca dove dovrebbe andare una risposta. Se compare un cursore di testo e puoi scrivere, ha campi interattivi. Se non succede nulla, è un modulo non interattivo e aggiungi tu il testo sopra.",
    },
    {
      q: "Posso compilare un modulo scansionato senza campi?",
      a: "Sì. Usa lo strumento testo per posizionare le tue risposte direttamente sulla pagina, e aggiungi segni di spunta dove serve. L’app li tratta come oggetti che posizioni tu.",
    },
    {
      q: "Posso firmare il modulo nella stessa app?",
      a: "Sì. Lo strumento Firma aggiunge la tua firma salvata nella stessa sessione, così compili e firmi senza cambiare app.",
    },
    {
      q: "Il modulo compilato viene caricato da qualche parte?",
      a: "No. L’app PDF Editor compila i moduli sul tuo dispositivo, quindi i dati personali che contengono restano privati.",
    },
    {
      q: "Posso riutilizzare un modulo che compilo spesso?",
      a: "Conserva l’originale vuoto e compila una copia nuova ogni volta. È più ordinato che modificare una versione già completata in precedenza.",
    },
  ],
  related: [
    { label: "Editor PDF — modifica e compila dal telefono", path: "/pdf-editor" },
    { label: "Come firmare un PDF dal telefono", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "Come annotare un PDF dal telefono", path: "/guides/how-to-annotate-pdf-on-mobile" },
    { label: "Come modificare un PDF su iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "Editor PDF", path: "/pdf-editor" },
};

export default content;
