import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-a-pdf-form",
  h1: "Come condividere un modulo PDF da far compilare ad altri",
  description:
    "Inviare un modulo vuoto da compilare è diverso dall’inviare un documento finito. Come condividere un modulo in modo che i destinatari possano davvero compilarlo — e raccogliere le risposte.",
  updated: "2026-06-01",
  intro: [
    "Condividere un modulo PDF sembra banale — allegalo, invia — ma c’è una differenza tra distribuire un modulo vuoto perché le persone lo completino e inviare un documento perché lo leggano. Quando condividi un modulo, ti serve che i destinatari riescano a compilarlo con qualsiasi dispositivo abbiano, e ti serve che le loro copie completate tornino indietro in uno stato che tu possa davvero usare.",
    "Ci sono due cose che spesso vanno storte. Il modulo arriva in un modo che elimina o nasconde i suoi campi, così i destinatari non riescono a scrivere. Oppure le risposte tornano in modo incoerente — alcune appiattite, altre modificabili, altre ancora sotto forma di foto di una stampa. Un po’ di attenzione al momento dell’invio previene entrambi i problemi e rende la raccolta delle risposte molto meno faticosa.",
    "Questa guida spiega come condividere un modulo vuoto in modo che resti compilabile, come dare ai destinatari istruzioni chiare e come gestire le copie completate man mano che arrivano — senza far passare nulla attraverso un servizio di terze parti se i contenuti sono sensibili.",
  ],
  steps: [
    {
      title: "Verifica che il modulo vuoto sia compilabile prima di inviarlo",
      body: "Apri il tuo modulo e controllalo tu stesso. Se è interattivo, assicurati che i campi siano attivi; se è non interattivo, assicurati che ci sia spazio chiaro per le risposte. Non appiattire un modulo vuoto — toglierebbe i campi di cui i destinatari hanno bisogno.",
    },
    {
      title: "Invia il file, non un link a un convertitore",
      body: "Allega il PDF direttamente a un’email o a un messaggio, oppure condividilo tramite uno spazio cloud che il destinatario già usa. Evita di far passare un modulo sensibile attraverso strumenti pubblici quando un semplice allegato basta a fare il lavoro.",
    },
    {
      title: "Spiega ai destinatari come compilarlo",
      body: "Una nota di una riga aiuta: «Tocca i campi per scrivere, oppure aggiungi il testo sopra se il tuo lettore non mostra i campi, poi esporta una copia completata». Indirizza chi usa il telefono verso una vera app PDF invece che verso l’anteprima di un’email.",
    },
    {
      title: "Chiedi le copie completate in un formato utilizzabile",
      body: "Chiedi alle persone di rimandare indietro un PDF salvato o appiattito, non la foto di una stampa. Le copie appiattite vengono mostrate in modo coerente e sono più facili da archiviare e leggere.",
    },
    {
      title: "Raccogli e organizza le risposte",
      body: "Man mano che le copie tornano, rinominale per chi ha risposto e per data, così non si confondono tra loro. Tieni separato il modello vuoto originale, in modo da avere sempre un modello pulito da reinviare.",
    },
  ],
  tips: [
    "Non appiattire mai il modulo vuoto che distribuisci — l’appiattimento elimina i campi e non lascia ai destinatari nulla da compilare.",
    "Se i destinatari continuano a inviare foto di stampe, le tue istruzioni devono essere più chiare sul compilare a schermo e sull’esportare.",
    "Per i moduli sensibili, preferisci gli allegati diretti o uno spazio cloud privato ai siti pubblici di «compilazione online».",
    "Dai al file un nome chiaro, tipo «modulo-raccolta-dati-vuoto.pdf», così i destinatari distinguono il modello dalla loro copia completata.",
    "Il comportamento di un modulo può variare da un lettore all’altro, quindi suggerire un’app affidabile specifica evita la maggior parte delle risposte del tipo «non riesco a scrivere».",
  ],
  mobileNote:
    "I destinatari sul telefono possono compilare il tuo modulo nell’app PDF Editor — che attiva i campi interattivi e permette di aggiungere testo ai moduli non interattivi — e poi esportare una copia completata da rimandare subito indietro. Suggerirla nel tuo messaggio risparmia a chi altrimenti resterebbe bloccato in un’anteprima email che ignora i campi.",
  faq: [
    {
      q: "Come condivido un modulo PDF perché le persone possano compilarlo?",
      a: "Invia il PDF compilabile come allegato diretto o tramite uno spazio cloud condiviso, senza appiattirlo prima. Di’ ai destinatari di aprirlo in una vera app PDF, compilare i campi o aggiungere il testo, poi esportare una copia completata.",
    },
    {
      q: "Perché i miei destinatari non riescono a scrivere nel modulo che ho inviato?",
      a: "Spesso lo aprono in un’anteprima email o in un lettore che ignora i campi del modulo, oppure il modulo è non interattivo. Consiglia un’app PDF dedicata, e fai presente che possono aggiungere il testo sopra se non compare nessun campo.",
    },
    {
      q: "Devo condividere un modulo tramite un servizio di compilazione online?",
      a: "Per i moduli ordinari può essere comodo, ma per qualsiasi cosa sensibile, un allegato diretto o uno spazio cloud privato tiene i contenuti fuori dai server di terze parti. Scegli il canale in base alla delicatezza dei contenuti.",
    },
    {
      q: "In che formato dovrebbero tornarmi i moduli completati?",
      a: "Chiedi un PDF salvato o appiattito, non la foto di una stampa. Le copie appiattite hanno lo stesso aspetto ovunque e sono molto più facili da archiviare ed elaborare.",
    },
    {
      q: "Come tengo organizzate le risposte?",
      a: "Rinomina ogni file ricevuto per chi ha risposto e per data, conservali in un’unica cartella e tieni separato il modello vuoto, così puoi sempre reinviare un modello pulito.",
    },
  ],
  related: [
    {
      label: "Come inviare un modulo PDF compilato",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "Come inviare moduli di raccolta dati per un nuovo cliente",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Flussi di lavoro per raccogliere documenti con PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "Come condividere PDF con i clienti",
      path: "/guides/how-to-share-pdfs-with-clients",
    },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
