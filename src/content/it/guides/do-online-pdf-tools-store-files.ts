import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "do-online-pdf-tools-store-files",
  h1: "Gli strumenti PDF online conservano i tuoi file? Cosa controllare",
  description:
    "Alcuni strumenti PDF online cancellano i file caricati subito, altri li conservano per ore, altri a tempo indeterminato. Come leggere in fretta un’informativa sulla privacy e cosa cercare.",
  updated: "2026-05-29",
  intro: [
    "Quando uno strumento PDF gratuito ti chiede di caricare il tuo file, la domanda onesta da farsi è: cosa succede a quel file dopo? La risposta varia moltissimo. Alcuni strumenti cancellano il file caricato appena finisce la conversione. Alcuni lo tengono per un’ora «per tua comodità». Alcuni lo conservano più a lungo con un linguaggio vago sul «miglioramento del servizio». Alcuni lo usano per addestrare modelli di cui non sai nulla.",
    "L’informativa sulla privacy lo dice, ma di solito è lunga, spesso vaga, e a volte non aggiornata. Una lettura mirata richiede un minuto e ti dice esattamente ciò che ti serve sapere. E per i file abbastanza sensibili da rendere rilevante la conservazione, la mossa più sicura è scegliere uno strumento che non carica proprio nulla.",
    "Questa guida percorre la lettura rapida dell’informativa sulla privacy, spiega gli schemi da cercare, e indica l’alternativa più sicura quando il caricamento in sé è il problema.",
  ],
  steps: [
    {
      title: "Trova l’informativa e vai dritto alla conservazione",
      body: "L’informativa sulla privacy di solito è collegata nel footer. Cerca nella pagina (Ctrl-F) le parole «conservare», «eliminare», «memorizzare», «archiviazione». Quelle parole ti portano dritto alla sezione sulla conservazione.",
    },
    {
      title: "Leggi i numeri reali sulla conservazione",
      body: "«I file vengono eliminati entro un’ora» è concreto e rassicurante. «Eliminiamo i file quando non sono più necessari» è vago e può significare qualsiasi cosa. Contano gli impegni con numeri; le intenzioni no.",
    },
    {
      title: "Controlla cosa viene conservato oltre al file stesso",
      body: "I metadati (nome del file, dimensione, tipo, indirizzo IP) di solito vengono conservati più a lungo del contenuto del file. Per la maggior parte degli usi, la conservazione dei metadati è accettabile; per un lavoro molto sensibile, anche quella è un campanello d’allarme.",
    },
    {
      title: "Cerca clausole sui dati di addestramento",
      body: "Alcuni strumenti gratuiti si concedono il diritto di usare i file caricati per migliorare il servizio o addestrare modelli. Cerca «migliorare», «addestrare», «analisi». Se le trovi, considerale un segnale ancora più forte per i contenuti sensibili.",
    },
    {
      title: "Controlla la sezione sulla condivisione con terzi",
      body: "Anche se lo strumento non conserva il tuo file, potrebbe condividerlo con fornitori di hosting, sub-responsabili del trattamento o fornitori di analisi. Ognuno di loro è un’altra parte con accesso. Cerca «fornitori di servizi», «sub-responsabili», «terze parti».",
    },
    {
      title: "Per qualsiasi cosa sensibile, preferisci l’elaborazione locale",
      body: "Se lo strumento funziona nel tuo browser senza caricare nulla (verificalo con gli strumenti per sviluppatori), la conservazione non è nemmeno un problema — non c’è niente da conservare. Usa questa strada quando la conservazione del file conta davvero.",
    },
  ],
  tips: [
    "Gratis + conservazione vaga + terze parti poco chiare = da evitare per i file sensibili. Questa combinazione è il rischio più alto.",
    "Anche una politica di conservazione pulita non è una garanzia. Le violazioni dei server succedono. L’unica opzione a rischio zero è non caricare affatto.",
    "Tratta i file caricati come compromessi per qualsiasi scopo tu non possa verificare. Se non pubblicheresti quel file pubblicamente, pensaci due volte prima di caricarlo.",
    "Se proprio devi caricare, proteggi prima il file con una password. Lo strumento vede un blob crittografato; la crittografia protegge il contenuto.",
    "Non fidarti delle affermazioni «non conserviamo nulla» senza verificarle — il testo dell’informativa sulla privacy e il comportamento reale possono divergere.",
  ],
  mobileNote:
    "Le app mobile spesso hanno informative sulla privacy separate nell’app store o nelle impostazioni. L’app PDF Editor elabora tutto in locale e non carica affatto i tuoi file, quindi la questione della conservazione non si pone nemmeno. Per il lavoro da mobile su materiale sensibile, restare solo in locale è la scelta più pulita.",
  faq: [
    {
      q: "Per quanto tempo la maggior parte degli strumenti PDF online conserva i file?",
      a: "Varia moltissimo: da pochi minuti a tempo indeterminato. I grandi strumenti commerciali di solito eliminano entro un’ora; gli strumenti più piccoli e gratuiti sono incoerenti. Leggi ogni informativa sulla privacy singolarmente.",
    },
    {
      q: "Una conservazione breve è abbastanza sicura?",
      a: "Dipende dal file. Per documenti ordinari, un’ora va bene. Per materiale davvero sensibile, qualsiasi conservazione è una finestra di rischio reale.",
    },
    {
      q: "E i file eliminati — sono davvero spariti?",
      a: "Di solito sì dall’archivio attivo, ma i backup e le repliche possono conservare copie più a lungo. Un’eliminazione davvero sicura è tecnicamente più difficile di quanto sembri.",
    },
    {
      q: "Gli strumenti gratuiti conservano sempre più a lungo di quelli a pagamento?",
      a: "Tendenza, non regola. Alcuni strumenti gratuiti hanno una conservazione pulita; alcuni strumenti a pagamento hanno clausole sorprendenti. Leggi entrambi.",
    },
    {
      q: "Qual è il percorso più sicuro per un PDF sensibile?",
      a: "Strumenti basati sul browser che elaborano in locale (senza caricamento). Se devi proprio caricare, proteggi prima con una password e scegli uno strumento con impegni espliciti sull’eliminazione.",
    },
  ],
  related: [
    { label: "Strumenti PDF — nel browser, senza caricamenti", path: "/pdf-tools" },
    { label: "Gli strumenti PDF online sono sicuri?", path: "/guides/are-online-pdf-tools-safe" },
    { label: "Strumenti PDF nel browser contro strumenti che caricano i file", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Come evitare di caricare documenti sensibili", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "Strumenti PDF — gratuiti, nel browser", path: "/pdf-tools" },
};

export default content;
