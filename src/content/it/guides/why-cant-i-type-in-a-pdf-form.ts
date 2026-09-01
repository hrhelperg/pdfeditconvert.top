import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-type-in-a-pdf-form",
  h1: "Perché non riesco a scrivere in questo modulo PDF? Cause e soluzioni",
  description:
    "Clicchi su un campo e non succede niente. I tre motivi più comuni — un modulo non interattivo, il programma sbagliato o un file bloccato — e cosa fare in ciascun caso.",
  updated: "2026-06-01",
  intro: [
    "Apri un modulo, clicchi dove dovrebbe andare il tuo nome, e... niente. Nessun cursore, nessuna casella, nessun modo di scrivere. Sembra che il modulo sia rotto, ma quasi mai lo è davvero. L’impossibilità di scrivere dipende da una di tre cause precise, ognuna con una soluzione chiara una volta che riesci a individuarla.",
    "La prima e più comune è che il modulo sia non interattivo — non ci sono campi interattivi in cui scrivere, solo l’immagine di un modulo. La seconda è che lo stai aprendo in un lettore che non gestisce correttamente i campi del modulo. La terza è che il modulo sia bloccato o in sola lettura, impedendo di proposito l’inserimento dei dati. Distinguerle richiede un paio di controlli veloci.",
    "Questa guida ripercorre le tre cause una per una, mostra come confermare quale ti riguarda, e offre la soluzione pratica per ciascuna così puoi portare le tue risposte sulla pagina.",
  ],
  steps: [
    {
      title: "Verifica se il modulo ha davvero dei campi",
      body: "Tocca diversi spazi vuoti nella pagina. Se nessuno produce un cursore o un’evidenziazione, il modulo è quasi certamente non interattivo — non ci sono campi in cui scrivere, per come è stato progettato o perché è stato scansionato.",
    },
    {
      title: "Se è non interattivo, aggiungi il testo sopra",
      body: "Nei moduli non interattivi non puoi scrivere direttamente, ma puoi posizionare tu testo e segni di spunta sopra la pagina con lo strumento testo di un editor di PDF. È il modo previsto per completare un modulo scansionato o senza campi.",
    },
    {
      title: "Escludi il problema del lettore",
      body: "Alcuni browser e anteprime leggere mostrano il modulo ma ignorano i suoi campi. Apri lo stesso file in un’app PDF dedicata. Se i campi improvvisamente funzionano, il problema era il lettore originale.",
    },
    {
      title: "Controlla se il modulo è bloccato o in sola lettura",
      body: "Se i campi esistono ma rifiutano l’inserimento ovunque, il modulo potrebbe essere protetto o contrassegnato come sola lettura. Cerca un’icona a forma di lucchetto o un avviso di «protezione». Un modulo in sola lettura blocca la scrittura di proposito.",
    },
    {
      title: "Aggira un modulo bloccato",
      body: "Per un modulo in sola lettura, spesso puoi comunque posizionare il testo sopra come se fosse non interattivo, oppure chiedere a chi te lo ha inviato una versione sbloccata. Non provare a forzare la protezione di un modulo che non è tuo da modificare.",
    },
  ],
  tips: [
    "La diagnosi più rapida in assoluto: prova lo stesso file in un’app PDF vera e propria. Distingue subito tra «modulo non interattivo» e «lettore inadatto».",
    "Aggiungere testo sopra funziona su quasi ogni modulo, non interattivo o bloccato, ed è spesso la via più rapida per completare la pagina.",
    "Un modulo in cui riesci a scrivere bene dal computer ma non nell’anteprima email del telefono è un problema di lettore — aprilo invece in una vera app PDF.",
    "Se solo alcuni campi rifiutano la scrittura, quei campi specifici potrebbero essere calcolati automaticamente o bloccati, mentre il resto resta aperto.",
    "L’aspetto e il comportamento di un modulo possono variare da un lettore di PDF all’altro, quindi «qui non funziona» raramente significa «è rotto ovunque».",
  ],
  mobileNote:
    "Sul telefono, l’app PDF Editor scrive nei campi interattivi dove esistono e ti lascia posizionare il testo direttamente sui moduli non interattivi o bloccati dove non esistono — così un modulo che non accettava la scrittura nell’anteprima email diventa compilabile. Funziona sul dispositivo, senza inviare nulla altrove.",
  faq: [
    {
      q: "Perché non riesco a scrivere nel mio modulo PDF?",
      a: "Di solito è uno di tre motivi: il modulo è non interattivo e senza campi, il tuo lettore non supporta i campi del modulo, oppure il modulo è bloccato/in sola lettura. Individua quale, poi aggiungi il testo sopra, cambia lettore, oppure richiedi una copia sbloccata.",
    },
    {
      q: "Come scrivo in un modulo PDF non interattivo?",
      a: "Non puoi scrivere nei campi perché non ce ne sono. Usa invece un editor di PDF per posizionare testo e segni di spunta direttamente sulla pagina, nel punto in cui va ogni risposta, poi esporta il file.",
    },
    {
      q: "Perché il modulo funziona sul mio computer ma non sul telefono?",
      a: "Il telefono probabilmente lo sta mostrando in un’anteprima che ignora i campi del modulo. Apri il file in un’app PDF dedicata e i campi dovrebbero attivarsi.",
    },
    {
      q: "Cosa significa che un modulo PDF è in sola lettura?",
      a: "È un modulo che l’autore ha protetto in modo che i campi non possano essere modificati o compilati. Spesso puoi comunque posizionare il testo sopra, oppure chiedere a chi te lo ha inviato una versione che consenta la scrittura.",
    },
    {
      q: "Un modulo può essere compilabile solo in parte?",
      a: "Sì. Alcuni campi possono essere bloccati o calcolati automaticamente, mentre altri accettano l’inserimento. Compila quelli aperti e aggiungi il testo a mano per quelli che non riesci a raggiungere.",
    },
  ],
  related: [
    {
      label: "Come compilare un modulo PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Perché il modulo PDF è in sola lettura",
      path: "/guides/why-pdf-form-is-read-only",
    },
    {
      label: "Mancano i campi nel modulo PDF",
      path: "/guides/pdf-form-fields-missing",
    },
    { label: "Il modulo PDF non funziona", path: "/guides/pdf-form-not-working" },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
