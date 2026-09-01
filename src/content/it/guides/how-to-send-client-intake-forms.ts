import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-client-intake-forms",
  h1: "Come inviare moduli di raccolta dati per un nuovo cliente (in modo pulito e privato)",
  description:
    "Raccogli i dati di un nuovo cliente in un unico passaggio ordinato. Come inviare un modulo PDF di raccolta dati facile da compilare, che torna completo, e che mantiene privati i dati del cliente.",
  updated: "2026-06-01",
  intro: [
    "Un modulo di raccolta dati è spesso la prima vera interazione che un cliente ha con il tuo modo di lavorare, quindi vale la pena farlo bene. Fatto bene, un unico modulo PDF di raccolta dati raccoglie tutto quello che ti serve per iniziare — contatti, dettagli del progetto, preferenze — in un solo passaggio, senza un continuo «puoi mandarmi anche...». Fatto male, torna indietro a metà compilato e dà subito un’impressione trascurata.",
    "I meccanismi sono semplici ma i dettagli contano: il modulo deve essere facile da compilare sul telefono (dove la maggior parte dei clienti lo aprirà), deve tornare completo e in un formato utilizzabile, e siccome contiene informazioni personali, non dovrebbe passare per un sito pubblico qualsiasi lungo il tragitto.",
    "Questa guida ripercorre come preparare il modulo di raccolta dati, come inviarlo così i clienti possano davvero completarlo, e come raccogliere le risposte in modo pulito — la versione pratica, non quella teorica.",
  ],
  steps: [
    {
      title: "Crea un modulo di raccolta dati che chiede solo ciò che ti serve",
      body: "Ogni campo in più abbassa il tasso di completamento. Chiedi solo ciò che ti serve davvero per iniziare, raggruppalo in modo logico e lascia spazio reale per le risposte. Tieni un modello vuoto che riutilizzi per ogni nuovo cliente.",
    },
    {
      title: "Invia il modulo vuoto, non uno appiattito",
      body: "Allega direttamente il PDF compilabile oppure condividilo tramite uno spazio cloud usato dal cliente. Non appiattire il modulo vuoto — toglierebbe i campi. Aggiungi una nota di una riga su come compilarlo e restituirlo.",
    },
    {
      title: "Rendi la compilazione senza sforzo sul telefono",
      body: "Di’ ai clienti che possono completarlo in un’app PDF — toccando i campi o aggiungendo testo su un modulo non interattivo — firmando se necessario, ed esportando. La maggior parte lo farà dal telefono, quindi rendi fluida quella strada.",
    },
    {
      title: "Chiedi indietro una copia appiattita",
      body: "Chiedi un PDF salvato o appiattito, non una foto. I moduli appiattiti si leggono in modo coerente, non possono essere cancellati e si inseriscono subito nel fascicolo del cliente.",
    },
    {
      title: "Archivialo e conferma la ricezione",
      body: "Rinomina il modulo ricevuto per cliente e data, conservalo insieme ai documenti di quel cliente, e invia una rapida conferma. Fai un sollecito se un modulo torna con campi obbligatori vuoti.",
    },
  ],
  tips: [
    "I moduli di raccolta dati più brevi vengono completati più spesso; taglia ogni campo che non è davvero necessario all’inizio.",
    "Poiché i moduli di raccolta dati contengono dati personali, preferisci gli allegati diretti o uno spazio cloud privato ai servizi pubblici di «compilazione online».",
    "Un modello vuoto riutilizzabile significa che ogni nuovo cliente riceve un modulo pulito e identico, senza dettagli residui.",
    "Consiglia un’app PDF specifica nella tua nota, così i clienti che usano il telefono non restano bloccati in un’anteprima email che non li lascia scrivere.",
    "Mantieni uno schema di denominazione dei file coerente, così il modulo di raccolta dati di un cliente è sempre facile da ritrovare in seguito.",
  ],
  mobileNote:
    "I clienti possono completare il tuo modulo di raccolta dati dal telefono con l’app PDF Editor — compilando i campi o aggiungendo testo a un modulo non interattivo, firmando ed esportando una copia appiattita da rimandare subito indietro. Funziona sul dispositivo, così i dati personali che inseriscono non vengono inviati da nessuna parte lungo il tragitto verso di te.",
  faq: [
    {
      q: "Come invio un modulo di raccolta dati per un cliente come PDF?",
      a: "Allega direttamente il PDF compilabile all’email oppure condividilo tramite uno spazio cloud usato dal cliente, senza appiattire il modulo vuoto. Includi una breve nota su come compilarlo in un’app PDF e restituire una copia completata.",
    },
    {
      q: "Perché il mio modulo di raccolta dati torna vuoto o compilato a metà?",
      a: "Spesso i clienti lo aprono in un’anteprima email che ignora i campi, oppure il modulo chiede troppo. Consiglia un’app PDF, taglia i campi non necessari e chiedi indietro una copia appiattita.",
    },
    {
      q: "Come mantengo private le informazioni del cliente quando raccolgo i moduli di raccolta dati?",
      a: "Invia e ricevi il modulo come allegato diretto o tramite uno spazio cloud privato, non un sito pubblico di compilazione. L’app PDF Editor compila sul dispositivo, quindi i dati del cliente non vengono inviati altrove.",
    },
    {
      q: "I moduli di raccolta dati devono essere interattivi o non interattivi?",
      a: "Interattivo è più ordinato se riesci a crearlo, ma un modello non interattivo pulito funziona ovunque. Entrambi vanno bene, purché i campi siano etichettati chiaramente e abbiano spazio sufficiente.",
    },
    {
      q: "Come tengo organizzati i moduli di raccolta dati ricevuti?",
      a: "Rinomina ognuno per cliente e data, conservalo insieme ai documenti di quel cliente, e tieni separato il modello vuoto così ogni nuovo cliente riceve una copia nuova.",
    },
  ],
  related: [
    {
      label: "Moduli PDF per piccole imprese",
      path: "/guides/pdf-forms-for-small-business",
    },
    {
      label: "Flussi di lavoro per raccogliere documenti con PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "Come condividere un modulo PDF",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Come condividere PDF con i clienti",
      path: "/guides/how-to-share-pdfs-with-clients",
    },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
