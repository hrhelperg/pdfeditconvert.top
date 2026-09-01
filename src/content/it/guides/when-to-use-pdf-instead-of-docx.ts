import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-pdf-instead-of-docx",
  h1: "Quando inviare un PDF invece di un DOCX (checklist)",
  description:
    "Hai un documento Word: dovresti inviarlo come PDF invece? Una checklist rapida per i momenti in cui il PDF è la scelta giusta, e come convertirlo.",
  updated: "2026-05-23",
  intro: [
    "Hai finito un documento in Word, e adesso c’è una piccola decisione da prendere: inviare il .docx così com’è, o convertirlo prima in PDF? È facile lasciarsi andare a quello che si ha già davanti, ma la scelta sbagliata ha conseguenze — un’impaginazione che si rompe sullo schermo di qualcun altro, un prezzo che un cliente modifica di nascosto, una bozza scambiata per la versione finale. Questa guida serve a riconoscere i momenti in cui il PDF è chiaramente la scelta migliore da inviare.",
    "Più che un ampio confronto tra formati, questa è una checklist mirata: una serie di segnali che significano «converti in PDF prima di inviare». Quando nessuno si applica, il tuo DOCX va bene così com’è. Quando ne scatta uno, lo strumento gratuito Word in PDF lo converte sul tuo dispositivo in pochi secondi.",
    "Passa in rassegna la checklist qualche volta e diventerà istinto — saprai a colpo d’occhio se un documento deve uscire come Word o come PDF.",
  ],
  steps: [
    {
      title: "Il documento è definitivo?",
      body: "Se è finito e non deve essere modificato — una lettera firmata, un rapporto completo, una consegna — invia un PDF. Il DOCX invita a modifiche che non vuoi una volta che un documento è concluso.",
    },
    {
      title: "L’impaginazione deve restare esattamente come l’hai progettata?",
      body: "Brochure, CV, qualunque cosa in cui spaziatura e font contano dovrebbe uscire come PDF. Il DOCX può ricomporsi diversamente su un’altra versione di Word o in Google Docs, rompendo l’impaginazione curata con attenzione.",
    },
    {
      title: "Chi riceve potrebbe modificarlo a tuo svantaggio?",
      body: "Preventivi, fatture, contratti — ovunque un numero o un termine possa essere alterato — appartengono al PDF. Blocca le modifiche casuali e mantiene una registrazione fissa di ciò che hai inviato.",
    },
    {
      title: "Potrebbero non avere Word?",
      body: "Il PDF si apre nativamente su ogni telefono, tablet e computer. Se non sei sicuro che chi riceve abbia un’app da ufficio, il PDF garantisce che possa leggerlo senza installare nulla.",
    },
    {
      title: "Finirà in un archivio?",
      body: "Per la conservazione a lungo termine, il PDF si visualizza allo stesso modo tra dieci anni; il DOCX può cambiare aspetto tra le versioni di Word. Archivia come PDF, conserva il DOCX come tuo originale modificabile.",
    },
    {
      title: "Se anche solo una risposta è sì, convertilo",
      body: "Apri lo strumento Word in PDF, aggiungi il tuo .docx e scarica il PDF — sul tuo dispositivo, senza inviare nulla a un server. Conserva il file Word originale per le modifiche future.",
    },
  ],
  tips: [
    "Tieni il DOCX quando il documento è ancora in lavorazione, ha bisogno di commenti o revisioni tracciate, o chi lo riceve deve modificarlo. Il PDF è per i documenti finiti e definitivi.",
    "Conserva sempre il .docx modificabile. Il PDF è la copia da inviare; il file Word è il tuo originale per la prossima revisione.",
    "Accetta o elimina le revisioni tracciate prima di convertire, altrimenti potrebbero comparire nel PDF, visibili a chiunque.",
    "Convertire in PDF blocca l’impaginazione ma non cifra il file. Se serve una protezione vera, aggiungi una password come passaggio separato.",
    "Se chi riceve chiede un «PDF modificabile», di solito intende il DOCX — verifica prima di dare per scontato, poi invia quello giusto.",
  ],
  mobileNote:
    "Decidere di inviare un PDF succede spesso lontano dalla scrivania, quando un documento finito deve uscire subito. L’app PDF Editor converte e invia dal telefono, così puoi bloccare un documento e mandarlo via mail senza aspettare di tornare al computer.",
  faq: [
    {
      q: "Quando dovrei inviare un PDF invece di un file Word?",
      a: "Quando il documento è definitivo, l’impaginazione deve restare fissa, chi riceve potrebbe modificarlo a tuo svantaggio, potrebbe non avere Word, oppure finirà in un archivio. Ognuno di questi casi significa convertire in PDF.",
    },
    {
      q: "Quando è meglio tenere il DOCX?",
      a: "Quando il documento è ancora in scrittura, ha bisogno di commenti o revisioni tracciate, o chi lo riceve deve modificarlo. Il DOCX è il formato di lavoro; il PDF è quello finito.",
    },
    {
      q: "Convertire da Word a PDF cambierà la mia impaginazione?",
      a: "Per i documenti con font comuni, no — è proprio questo il punto del PDF. Fai attenzione solo ai font insoliti, che possono essere sostituiti. Apri il PDF e controlla prima di inviarlo.",
    },
    {
      q: "Inviare un PDF protegge il documento?",
      a: "Impedisce le modifiche casuali e blocca l’impaginazione, ma non è una cifratura. Per una protezione reale contro l’apertura o la copia, aggiungi una password separatamente.",
    },
    {
      q: "Dove posso vedere un confronto più completo tra PDF e DOCX?",
      a: "Guarda la guida e il confronto PDF o DOCX per uno sguardo più ampio su come i due formati differiscono su modifica, fedeltà e firma.",
    },
  ],
  related: [
    { label: "Word in PDF — converti nel browser", path: "/word-to-pdf" },
    { label: "PDF o DOCX — quale formato usare", path: "/guides/pdf-vs-docx" },
    { label: "Come convertire un Word in PDF", path: "/guides/how-to-convert-word-to-pdf" },
    { label: "PDF o DOCX — confronto delle caratteristiche", path: "/compare/pdf-vs-docx" },
  ],
  parentHub: { label: "Convertitore PDF", path: "/pdf-converter" },
};

export default content;
