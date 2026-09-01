import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-private-pdf-tools",
  h1: "I migliori strumenti PDF privati (quando la riservatezza conta davvero)",
  description:
    "Per contratti, documenti finanziari e altri PDF sensibili, questi sono gli strumenti che rispettano la privacy per come sono costruiti — non solo a parole.",
  updated: "2026-05-29",
  intro: [
    "«Privato» viene applicato agli strumenti PDF nello stesso modo in cui «naturale» viene applicato alle etichette alimentari — generosamente e spesso in modo impreciso. Molti strumenti dichiarano la privacy nel loro testo mentre caricano ogni file sui loro server e lo elaborano lì. La privacy diventa allora una questione di politica: «non conserviamo il tuo file per più di un’ora». È meglio di niente, ma dipende dal fatto che la politica venga rispettata, il che dipende dal fatto che l’azienda continui a esistere — non è una garanzia forte per materiale davvero sensibile.",
    "Gli strumenti PDF privati — quelli davvero privati — sono privati per architettura. Il tuo file non raggiunge affatto il loro server. L’elaborazione avviene nel tuo browser o in un’app locale sul telefono. La privacy non è una politica; è una proprietà strutturale. È lo standard a cui vale la pena tenere gli strumenti quando il file conta.",
    "Questa guida elenca le scelte private per le attività PDF più comuni. L’architettura è il criterio; il resto segue da lì.",
  ],
  steps: [
    {
      title: "Per comprimere file sensibili: Comprimi PDF nel browser",
      body: "Comprimi PDF nel tuo browser riduce il file in locale. Estratti conto sensibili, documenti d’identità scansionati e contratti si comprimono senza mai lasciare il tuo dispositivo. Verifica con gli strumenti per sviluppatori — nessuna richiesta POST in uscita quando aggiungi il file.",
    },
    {
      title: "Per unire file sensibili: Unisci PDF nel browser",
      body: "Unisci PDF combina contratti, allegati o fascicoli firmati in locale. Il file unito viene generato nella memoria del browser; i componenti restano sulla tua macchina per tutto il tempo.",
    },
    {
      title: "Per estrarre pagine specifiche da condividere: Estrai pagine PDF",
      body: "Se devi inviare solo pagine specifiche di un documento sensibile, Estrai pagine PDF produce un nuovo PDF con solo quelle pagine — in locale, nel tuo browser.",
    },
    {
      title: "Per rimuovere pagine in stile oscuramento: Estrai o Riordina",
      body: "L’oscuramento vero del testo è un’attività specializzata; se stai rimuovendo intere pagine o sostituendole, gli strumenti a livello di pagina nel tuo browser fanno il lavoro senza esporre il contenuto a nessun server.",
    },
    {
      title: "Per firmare contratti: Firma PDF o l’app PDF Editor",
      body: "Firma PDF nel browser o l’app PDF Editor sul telefono mantengono il contratto sul tuo dispositivo durante tutta la firma. Nessuna piattaforma di firma elettronica vede il documento.",
    },
    {
      title: "Per archivi privati: archiviazione locale crittografata",
      body: "Dopo l’elaborazione, archivia i PDF sensibili su archiviazione crittografata — FileVault, BitLocker, dischi esterni crittografati, o backup cloud a conoscenza zero. L’elaborazione locale non conta se l’archiviazione poi è in chiaro.",
    },
  ],
  tips: [
    "La privacy per architettura batte la privacy per politica. L’architettura si verifica; la politica dipende dalla fiducia.",
    "La scheda rete degli strumenti per sviluppatori è il passaggio di verifica. Se non puoi verificare, non fidarti.",
    "Non accettare registrazioni per strumenti genuinamente privati — l’account è un dato che lo strumento altrimenti non avrebbe.",
    "Gli strumenti privati per mobile dovrebbero funzionare offline. Se un’app «privata» richiede rete costante, chiediti perché.",
    "Combina strumenti privati con canali privati. Elaborare in privato e poi inviare il risultato via mail in chiaro vanifica lo scopo.",
  ],
  mobileNote:
    "Sul mobile, l’app PDF Editor è la scelta privata — tutta l’elaborazione avviene sul dispositivo, nessun caricamento, nessun account. Utile per contratti e scansioni sensibili dove il telefono è il dispositivo naturale ma il file non dovrebbe passare dal server di qualcun altro.",
  faq: [
    {
      q: "Cosa rende uno strumento PDF davvero privato?",
      a: "L’architettura — il file non raggiunge il server dello strumento. Le politiche di conservazione dichiarate sono più deboli perché dipendono dal fatto che l’azienda rispetti i propri impegni.",
    },
    {
      q: "Gli strumenti «privati» a pagamento sono migliori di quelli privati gratuiti?",
      a: "Non necessariamente. Gli strumenti gratuiti che funzionano nel tuo browser hanno la stessa privacy architetturale degli strumenti a pagamento senza caricamento. Gli strumenti a pagamento vincono sulle funzioni avanzate (flussi regolamentati, e-discovery), non sulla privacy di base.",
    },
    {
      q: "Posso verificare da solo la privacy?",
      a: "Sì — strumenti per sviluppatori del browser, scheda rete. Aggiungi un file, osserva le richieste in uscita. Nessun caricamento visibile significa che nessun caricamento è avvenuto.",
    },
    {
      q: "E la crittografia end-to-end?",
      a: "Utile per la condivisione, non aiuta durante l’elaborazione. Se uno strumento deve leggere il tuo file per elaborarlo, la crittografia in transito non conta — il server vede comunque il contenuto.",
    },
    {
      q: "Qual è la posizione più forte sulla privacy per i PDF sensibili?",
      a: "Elabora in locale con strumenti basati sul browser o app locali. Archivia su archiviazione crittografata. Condividi attraverso canali crittografati end-to-end. Ogni livello copre una superficie di attacco diversa.",
    },
  ],
  related: [
    { label: "PDF Security — proteggi e crittografa con una password", path: "/pdf-security" },
    { label: "Strumenti PDF — nel browser, senza caricamenti", path: "/pdf-tools" },
    { label: "Strumenti PDF che mettono la privacy al primo posto", path: "/guides/privacy-first-pdf-tools" },
    { label: "Come proteggere i file PDF sensibili", path: "/guides/how-to-protect-sensitive-pdf-files" },
  ],
  parentHub: { label: "Strumenti PDF — gratuiti, nel browser", path: "/pdf-tools" },
};

export default content;
