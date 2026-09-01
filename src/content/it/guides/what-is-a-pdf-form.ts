import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "what-is-a-pdf-form",
  h1: "Cos’è un modulo PDF? Moduli interattivi e non interattivi spiegati",
  description:
    "Un modulo PDF è un documento pensato per raccogliere risposte — a volte con campi veri in cui scrivere, a volte come una pagina non interattiva su cui scrivi sopra. Cosa significa e come riconoscerlo.",
  updated: "2026-06-01",
  intro: [
    "Un modulo PDF è un PDF pensato per raccogliere informazioni da chi lo apre: una domanda di lavoro, un documento fiscale, un modulo di consenso, una scheda di prenotazione. Ciò che distingue un modulo da un PDF qualsiasi è l’intenzione: ti chiede di aggiungere delle risposte, non solo di leggerlo. La parte che confonde è che due moduli possono sembrare identici sullo schermo e comportarsi in modo completamente diverso quando provi a compilarli.",
    "Tutto dipende dal fatto che il modulo abbia o meno campi interattivi. Un modulo interattivo ha delle caselle che chi lo ha creato ha inserito nel file: ne tocchi una e compare un cursore, pronto per scrivere. Un modulo non interattivo non ne ha; è di fatto l’immagine di un modulo, spesso la scansione di un originale cartaceo, dove righe ed etichette fanno parte dell’immagine e non sono aree attive. Sono entrambi moduli, ed entrambi si possono compilare, ma richiedono un approccio diverso.",
    "Capire con quale dei due hai a che fare richiede un paio di secondi e ti risparmia parecchia frustrazione. Questa guida spiega cos’è davvero un modulo PDF, i due tipi che incontrerai e come distinguerli prima di iniziare a compilare.",
  ],
  steps: [
    {
      title: "Riconosci che un modulo è fatto per essere completato",
      body: "A differenza di una relazione o di un contratto che ti limiti a leggere, un modulo ha spazi vuoti in attesa di risposte — righe per il nome, caselle di controllo, aree per la firma. È questa intenzione a renderlo un modulo, indipendentemente da come è stato realizzato.",
    },
    {
      title: "Riconosci un modulo interattivo",
      body: "Apri il PDF e tocca o clicca nel punto in cui dovrebbe andare una risposta. Se compare un cursore di testo, un campo si evidenzia o una casella di controllo si attiva, il modulo ha campi interattivi che chi lo ha creato ha aggiunto apposta.",
    },
    {
      title: "Riconosci un modulo non interattivo",
      body: "Se toccare uno spazio vuoto non produce nulla — niente cursore, niente evidenziazione — il modulo è non interattivo. Righe ed etichette fanno parte dell’immagine della pagina, quindi non c’è nulla in cui scrivere direttamente.",
    },
    {
      title: "Controlla come è stato creato",
      body: "I moduli esportati da un software per la progettazione di moduli tendono a essere interattivi. I moduli che sono stati stampati, firmati a mano e poi scansionati sono quasi sempre non interattivi. Conoscere l’origine ti aiuta a prevedere il tipo.",
    },
    {
      title: "Scegli il modo giusto per compilarlo",
      body: "Moduli interattivi: tocca e scrivi. Moduli non interattivi: aggiungi tu stesso caselle di testo e segni di spunta sopra la pagina. Un editor di PDF completo gestisce entrambi i casi nello stesso file.",
    },
  ],
  tips: [
    "Il test più rapido è il tocco: sfiora una riga vuota. Se compare un cursore è interattivo; se non succede nulla è non interattivo.",
    "Un modulo può essere interattivo solo in parte: alcuni campi sono veri, altri mancano. Compila quelli veri, poi aggiungi il testo a mano per i vuoti restanti.",
    "I moduli interattivi sono più facili da compilare in modo ordinato, ma quelli non interattivi restano perfettamente gestibili: devi solo posizionare tu il testo.",
    "Se stai progettando un modulo per altri, rendilo interattivo dove puoi: semplifica molto la compilazione per chi lo riceve.",
    "L’aspetto di un modulo può variare da un lettore di PDF all’altro, quindi un campo che sul tuo telefono appare in un certo modo potrebbe essere leggermente diverso sul computer di qualcun altro.",
  ],
  mobileNote:
    "Sul telefono, l’app PDF Editor controlla se un modulo ha campi interattivi appena lo apri: dove ci sono, tocchi e scrivi; dove non ci sono, posizioni testo e segni di spunta in qualsiasi punto della pagina. In entrambi i casi puoi firmare ed esportare una copia completata senza stampare nulla.",
  faq: [
    {
      q: "Ogni PDF è un modulo?",
      a: "No. Un PDF è considerato un modulo solo quando è pensato per raccogliere risposte — campi, caselle di controllo, righe per la firma. Una relazione o un articolo sono PDF, ma non moduli.",
    },
    {
      q: "Come faccio a sapere se il mio modulo PDF è interattivo o non interattivo?",
      a: "Tocca o clicca su uno spazio vuoto dove dovrebbe andare una risposta. Se compare un cursore e puoi scrivere, è interattivo. Se non succede nulla, è un modulo non interattivo e aggiungi il testo sopra.",
    },
    {
      q: "Posso compilare un modulo PDF non interattivo?",
      a: "Sì. Un modulo non interattivo non ha campi, ma puoi posizionare tu testo e segni di spunta in qualsiasi punto della pagina usando un editor di PDF, e poi esportare il file completato.",
    },
    {
      q: "Perché qualcuno dovrebbe inviare un modulo non interattivo invece di uno interattivo?",
      a: "Di solito perché il modulo è nato su carta ed è stato scansionato, oppure perché lo strumento usato per crearlo non aggiunge campi. Non è un errore: richiede solo un metodo di compilazione leggermente diverso.",
    },
    {
      q: "I moduli interattivi sono sempre meglio?",
      a: "Sono più facili da completare e hanno un aspetto più ordinato, ma possono anche usare funzioni che alcuni lettori non supportano. Un modulo non interattivo ben fatto è affidabile ovunque, anche se richiede un po’ più di impegno per compilarlo.",
    },
  ],
  related: [
    {
      label: "PDF modificabile o PDF compilabile",
      path: "/guides/editable-pdf-vs-fillable-pdf",
    },
    { label: "Come funzionano i moduli PDF", path: "/guides/how-pdf-forms-work" },
    {
      label: "Come compilare un modulo PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "PDF modificabile o PDF non modificabile",
      path: "/guides/editable-pdf-vs-flat-pdf",
    },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
