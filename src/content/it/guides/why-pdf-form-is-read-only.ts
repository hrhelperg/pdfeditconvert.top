import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-is-read-only",
  h1: "Perché il modulo PDF è in sola lettura? E cosa fare",
  description:
    "Il tuo modulo si apre bloccato e in grigio? Perché i moduli vengono impostati in sola lettura, come distinguere una protezione voluta da una stranezza del visualizzatore, e le opzioni oneste per compilarlo comunque.",
  updated: "2026-06-01",
  intro: [
    "Un modulo PDF in sola lettura si apre senza problemi ma rifiuta ogni tentativo di compilarlo — campi in grigio, un’icona a forma di lucchetto, magari un avviso di «protetto» o «sicuro» nella barra del titolo. A differenza di un modulo non interattivo (che semplicemente non ha campi) o di un problema di salvataggio (dove le risposte non si conservano), un modulo in sola lettura ha campi che esistono ma sono disattivati di proposito. Qualcosa o qualcuno lo ha bloccato.",
    "Ci sono alcune ragioni oneste per questo, e contano perché cambiano cosa dovresti fare. L’autore del modulo potrebbe averlo protetto di proposito. Il modulo potrebbe essere certificato o già firmato, così cambiarlo lo comprometterebbe. Oppure il tuo lettore potrebbe aprirlo in una modalità di sola lettura che puoi disattivare. Distinguere una protezione voluta da una stranezza del lettore è il primo passo fondamentale.",
    "Questa guida spiega le cause, come individuare quale ti riguarda, e i modi legittimi per completare un modulo in sola lettura — senza provare a forzare la protezione di un documento che non è tuo da modificare.",
  ],
  steps: [
    {
      title: "Controlla la presenza di un avviso di protezione",
      body: "Guarda la barra del titolo e le proprietà del documento per parole come «protetto», «sicuro», oppure un’icona a forma di lucchetto. Questo segnala una protezione voluta applicata dall’autore — lo stato di sola lettura è intenzionale.",
    },
    {
      title: "Escludi una modalità di sola lettura del lettore",
      body: "Alcune app aprono i file in sola lettura o in «visualizzazione protetta» per impostazione predefinita. Cerca un avviso «attiva modifica» o un interruttore per la sola lettura, e prova un’app PDF dedicata, prima di dare per scontato che il file stesso sia bloccato.",
    },
    {
      title: "Considera se è certificato o firmato",
      body: "Se il modulo è già firmato digitalmente o certificato, modificarlo invaliderebbe quella firma, quindi i lettori lo bloccano. È un comportamento corretto — in generale non dovresti alterare un modulo firmato.",
    },
    {
      title: "Completalo aggiungendo il testo sopra",
      body: "Anche quando i campi sono bloccati, spesso puoi posizionare tu testo e segni di spunta sulla pagina come se fosse un modulo non interattivo, poi esportare — un modo legittimo di compilare un modulo in sola lettura.",
    },
    {
      title: "Chiedi a chi te lo ha inviato una versione sbloccata",
      body: "Se ti servono davvero i campi interattivi, la soluzione più pulita è richiedere a chi te lo ha inviato una versione che consenta la scrittura. Non provare ad aggirare la protezione di un documento che non è tuo.",
    },
  ],
  tips: [
    "Decidi prima: protezione voluta o stranezza del lettore? Cerca un’icona a forma di lucchetto o un avviso «sicuro» rispetto a un avviso «attiva modifica».",
    "Posizionare il testo sopra la pagina funziona sulla maggior parte dei moduli in sola lettura ed è spesso la via legittima più rapida per completarli.",
    "Non provare a togliere la protezione da un modulo che non è tuo — se ti servono i campi sbloccati, chiedi a chi te lo ha inviato.",
    "Un modulo certificato o firmato è bloccato per una buona ragione; alterarlo comprometterebbe la firma che porta.",
    "La «visualizzazione protetta» di alcuni lettori è solo un’impostazione predefinita — passare a un’app PDF completa o attivare la modifica potrebbe essere tutto ciò che ti serve.",
  ],
  mobileNote:
    "Sul telefono, un modulo in sola lettura di solito si può comunque completare nell’app PDF Editor posizionando testo e segni di spunta sulla pagina, anche quando i suoi campi sono bloccati. Funziona sul dispositivo, così i tuoi dati restano privati — e non manomette la protezione del modulo, si limita a posare le tue risposte sopra.",
  faq: [
    {
      q: "Perché il mio modulo PDF è in sola lettura?",
      a: "O l’autore lo ha protetto di proposito, oppure è certificato o già firmato (così modificarlo lo comprometterebbe), oppure il tuo lettore lo ha aperto in modalità di sola lettura. Controlla la presenza di un’icona a forma di lucchetto o di un avviso «sicuro» per distinguere una protezione voluta da un’impostazione del lettore.",
    },
    {
      q: "Come compilo un modulo PDF in sola lettura?",
      a: "Spesso puoi posizionare tu testo e segni di spunta sulla pagina come se fosse non interattivo, poi esportare — anche quando i campi sono bloccati. Se ti servono i campi interattivi, chiedi a chi te lo ha inviato una copia sbloccata.",
    },
    {
      q: "La sola lettura è la stessa cosa del non riuscire a scrivere?",
      a: "È una delle cause del non riuscire a scrivere. Un modulo può rifiutare la scrittura anche perché è non interattivo o aperto nel lettore sbagliato. La sola lettura significa in modo specifico che i campi esistono ma sono disattivati di proposito.",
    },
    {
      q: "Posso rimuovere la protezione di sola lettura?",
      a: "Se il modulo è tuo e sei stato tu a impostare la protezione, puoi cambiarla in un editor adeguato. Se è di qualcun altro, non provare ad aggirare la sua protezione — richiedi invece una versione sbloccata.",
    },
    {
      q: "Perché la modifica di un modulo firmato viene bloccata?",
      a: "Modificarlo invaliderebbe la firma digitale o la certificazione che il modulo porta, quindi i lettori lo bloccano. È un comportamento voluto per mantenere affidabili i documenti firmati.",
    },
  ],
  related: [
    {
      label: "Perché non riesco a scrivere in questo modulo PDF?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    { label: "Il modulo PDF non funziona", path: "/guides/pdf-form-not-working" },
    {
      label: "Perché il modulo PDF non si salva",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "Come proteggere con password un file PDF",
      path: "/guides/how-to-protect-pdf-file",
    },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
