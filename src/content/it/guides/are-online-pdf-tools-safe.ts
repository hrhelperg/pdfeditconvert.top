import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "are-online-pdf-tools-safe",
  h1: "Gli strumenti PDF online sono sicuri? Uno sguardo onesto al rischio",
  description:
    "La maggior parte degli strumenti PDF «online» carica il tuo file su un server. Alcuni no. I rischi reali, le categorie di strumenti che trattano i dati in modo diverso e come distinguerli.",
  updated: "2026-05-29",
  intro: [
    "«Strumento PDF online» è un’espressione che nasconde una distinzione importante. Alcuni di questi strumenti scaricano il tuo file sul loro server, lo elaborano lì, e ti rimandano il risultato. Altri funzionano interamente nel tuo browser — il tuo file non lascia mai il tuo dispositivo. Entrambi vengono a volte chiamati «online», e per qualsiasi cosa sensibile la differenza conta parecchio.",
    "La risposta onesta alla domanda «sono sicuri» è: dipende da quale tipo stai usando e da cosa contiene il file. Un estratto conto che passa per uno strumento che carica il file su un server è un rischio reale, anche con una politica di conservazione dichiarata. Lo stesso estratto conto su uno strumento che elabora tutto in locale non tocca mai la loro rete, quindi il profilo di rischio è fondamentalmente diverso.",
    "Questa guida separa le categorie senza fare allarmismo. Spiega dove si trovano davvero i rischi, come leggere in fretta un’informativa sulla privacy, e come capire se uno strumento che stai valutando carica il file su un server oppure funziona in locale — senza prendere per buono il testo del marketing.",
  ],
  steps: [
    {
      title: "Individua a quale categoria appartiene lo strumento",
      body: "Tre categorie: (1) caricamento completo — il file va sul server, viene elaborato lì. (2) Basato sul browser con sincronizzazione facoltativa — funziona in locale ma offre funzioni cloud. (3) Solo browser — non carica mai nulla. La categoria determina il rischio reale.",
    },
    {
      title: "Controlla la conservazione nell’informativa sulla privacy",
      body: "Cerca parole come «conservare», «memorizzare», «eliminare dopo». Una politica che dice «i file vengono eliminati entro un’ora» ti dice che è categoria (1). Una politica che dice «i file non lasciano il tuo dispositivo» indica la categoria (3). Le politiche vaghe sono un campanello d’allarme.",
    },
    {
      title: "Osserva il traffico di rete per verificare",
      body: "Apri gli strumenti per sviluppatori, la scheda rete, e trascina dentro il tuo PDF. Se vedi una richiesta in uscita di grandi dimensioni quando aggiungi il file, lo strumento lo sta caricando su un server. Se non la vedi, lo sta elaborando in locale. Questa è la verifica più diretta.",
    },
    {
      title: "Fai corrispondere lo strumento alla sensibilità del file",
      body: "I file occasionali (foto delle vacanze convertite in PDF) possono passare per qualsiasi categoria. I file sensibili (finanziari, legali, medici, personali) vanno affidati alla categoria (3) o a uno strumento a pagamento con garanzie esplicite sul trattamento dei dati.",
    },
    {
      title: "Rifletti su cosa significa «sicuro» per il tuo caso",
      body: "A volte il rischio è aziendale (non far trapelare dati dei clienti). A volte normativo (RGPD). A volte personale (evitare il furto d’identità). Lo strumento giusto dipende dalla minaccia che stai davvero affrontando.",
    },
    {
      title: "In caso di dubbio, preferisci gli strumenti basati sul browser",
      body: "Gli strumenti basati sul browser che non caricano nulla su un server sono sicuri per definizione — il file non può trapelare da un server che non l’ha mai ricevuto. Gli strumenti di questo sito rientrano in questa categoria.",
    },
  ],
  tips: [
    "Gratis + caricamento su server + informativa sulla privacy poco chiara = da evitare per qualsiasi cosa sensibile. Questa combinazione è il profilo a rischio più alto.",
    "Anche gli strumenti che caricano il file ma hanno politiche sulla privacy solide hanno una superficie di attacco reale — violazioni dei server, conservazione andata storta, accesso da parte dei dipendenti. L’elaborazione locale elimina questa superficie.",
    "Non fidarti delle affermazioni «non conserviamo nulla» senza verificarle. Osservare il traffico di rete è l’unico modo per saperlo con certezza.",
    "Gli strumenti basati sul browser hanno i loro limiti — operazioni pesanti e l’OCR a volte richiedono l’aiuto di un server. Conosci il limite; non fidarti di promesse eccessive.",
    "Se un flusso di lavoro richiede davvero un caricamento su server (raro), scegli uno strumento con una politica di conservazione dichiarata e usa un file protetto da password creato apposta per l’occasione.",
  ],
  mobileNote:
    "Anche gli strumenti PDF per mobile si dividono tra quelli che caricano il file su un server e quelli solo locali. L’app PDF Editor elabora tutto direttamente sul dispositivo, su iOS e Android — nessun caricamento, nessun account, nessuna sincronizzazione a meno che tu non la attivi. Per documenti sensibili dal telefono, questa è l’impostazione giusta di default.",
  faq: [
    {
      q: "Caricare il mio PDF su uno strumento online è davvero rischioso?",
      a: "Dipende dal file. Per un itinerario di viaggio, il rischio è bassissimo. Per documenti finanziari o contratti, il rischio è reale — violazioni dei server e conservazioni andate storte succedono davvero. Fai corrispondere lo strumento al file.",
    },
    {
      q: "Come capisco se uno strumento carica il file o lo elabora in locale?",
      a: "Apri gli strumenti per sviluppatori del browser, scheda rete, trascina dentro un file. Se parte una richiesta di rete in uscita di grandi dimensioni quando aggiungi il file, lo sta caricando su un server. In caso contrario, lo elabora in locale.",
    },
    {
      q: "Gli strumenti a pagamento sono più sicuri di quelli gratuiti?",
      a: "A volte. Gli strumenti a pagamento spesso hanno impegni espliciti sulla conservazione e sul trattamento dei dati. Alcuni strumenti gratuiti (quelli di questo sito) funzionano in locale e non hanno bisogno di quegli impegni perché non ricevono mai il tuo file.",
    },
    {
      q: "E la crittografia end-to-end?",
      a: "Utile per la condivisione, ma non aiuta durante l’elaborazione. Se un server deve leggere il tuo file per comprimerlo, la crittografia in transito non cambia il fatto che il server ne veda il contenuto.",
    },
    {
      q: "Devo crittografare il mio PDF prima di caricarlo su un server?",
      a: "Se proprio devi caricarlo, sì. Un PDF protetto da password arriva al server già protetto. Ma per materiale sensibile è meglio evitare del tutto il caricamento.",
    },
  ],
  related: [
    { label: "Strumenti PDF — nel browser, senza caricamenti", path: "/pdf-tools" },
    { label: "Strumenti PDF che mettono la privacy al primo posto", path: "/guides/privacy-first-pdf-tools" },
    { label: "Strumenti PDF nel browser contro strumenti che caricano i file", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Gli strumenti PDF online conservano i tuoi file?", path: "/guides/do-online-pdf-tools-store-files" },
  ],
  parentHub: { label: "Strumenti PDF — gratuiti, nel browser", path: "/pdf-tools" },
};

export default content;
