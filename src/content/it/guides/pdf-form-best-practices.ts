import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-best-practices",
  h1: "Buone pratiche per i moduli PDF (moduli che le persone finiscono davvero)",
  description:
    "Progetta moduli che le persone finiscono davvero di compilare: etichette chiare, spaziatura vera, campi sensati, uno spazio per la firma ben visibile e un passaggio di appiattimento. Regole pratiche per chi crea e chi invia i moduli.",
  updated: "2026-06-01",
  intro: [
    "Il compito di un modulo è essere completato in modo accurato e restituito senza attriti. La maggior parte dei moduli che falliscono lo fa per ragioni noiose e risolvibili: campi troppo stretti, etichette ambigue, nessuno spazio per scrivere, o un’impaginazione che si rompe nel momento in cui qualcuno lo apre dal telefono. Una buona progettazione dei moduli non riguarda l’apparire intelligenti — riguarda l’eliminare ogni piccola ragione per cui una persona potrebbe arrendersi o sbagliare.",
    "Queste buone pratiche si applicano sia che tu stia costruendo moduli interattivi sia modelli non interattivi, e sia che tu sia un’impresa che raccoglie dati di contatto sia chiunque invii un modulo da far compilare. Coprono anche il lato dell’invio: come distribuire un modulo così resti compilabile e torni indietro utilizzabile. Niente di tutto questo è complicato; è per lo più disciplina.",
    "Considera questa guida come il riferimento a cui rimandano le altre guide sui moduli. Se ne adotti solo una manciata, scegli etichette chiare, spaziatura generosa e l’appiattimento al ritorno — queste tre regole prevengono la maggior parte dei problemi con i moduli.",
  ],
  steps: [
    {
      title: "Etichetta ogni campo senza ambiguità",
      body: "Ogni campo dovrebbe chiarire cosa ci va dentro, incluso il formato dove conta (stile della data, un carattere per casella). Etichette ambigue producono risposte sbagliate che poi devi inseguire.",
    },
    {
      title: "Dai alle risposte spazio reale",
      body: "I campi troppo piccoli sono la lamentela più comune sui moduli. Lascia più spazio di quanto pensi ti serva, soprattutto per nomi, indirizzi e risposte in testo libero, così nulla resta stretto o tagliato.",
    },
    {
      title: "Chiedi solo ciò che ti serve",
      body: "Ogni campo in più abbassa il tasso di completamento e aggiunge dati che poi devi gestire. Taglia qualsiasi cosa non sia davvero necessaria in questa fase. I moduli più brevi tornano indietro più velocemente e più completi.",
    },
    {
      title: "Rendi evidente l’area per la firma",
      body: "Se serve una firma, dalle un’area chiara e ben posizionata con un campo data accanto. Le persone dimenticano la firma più di ogni altro campo; un’area evidente evita che il modulo torni indietro.",
    },
    {
      title: "Distribuisci e restituisci nel modo giusto",
      body: "Invia i moduli vuoti non appiattiti così i campi sopravvivono, consiglia un’app PDF affidabile, e chiedi indietro copie appiattite così le risposte si bloccano e vengono mostrate allo stesso modo ovunque.",
    },
  ],
  tips: [
    "Compila tu stesso il tuo modulo una volta dal telefono prima di inviarlo — noterai subito ogni campo troppo stretto e ogni etichetta poco chiara.",
    "Etichette chiare, spaziatura generosa e appiattimento al ritorno sono le tre abitudini che prevengono la maggior parte dei problemi con i moduli.",
    "Non appiattire un modulo vuoto che stai distribuendo; l’appiattimento toglie i campi di cui i destinatari hanno bisogno.",
    "Fai corrispondere i formati dei campi a quello che farai con i dati — formati coerenti per date e numeri risparmiano lavoro di pulizia in seguito.",
    "Mantieni aspettative oneste: l’aspetto di un modulo può variare da un lettore all’altro, quindi un modello non interattivo o una restituzione appiattita sono la soluzione più affidabile in generale.",
  ],
  mobileNote:
    "Poiché la maggior parte delle persone compila i moduli dal telefono, testa il tuo nell’app PDF Editor su un telefono prima di inviarlo: verifica che i campi siano toccabili o che un modello non interattivo abbia spazio per il testo scritto con i pollici, che l’area della firma sia raggiungibile, e che un’esportazione appiattita abbia un aspetto corretto.",
  faq: [
    {
      q: "Cosa rende facile da compilare un modulo PDF?",
      a: "Etichette chiare e senza ambiguità; spazio generoso per ogni risposta; solo i campi che ti servono davvero; e un’area per la firma evidente. Poi testalo tu stesso dal telefono, visto che è lì che la maggior parte delle persone lo completerà.",
    },
    {
      q: "Devo inviare moduli interattivi o non interattivi?",
      a: "Interattivo è più ordinato dove riesci a costruirlo bene, ma un modello non interattivo pulito funziona in ogni lettore. Qualunque tu scelga, etichette chiare e spaziatura vera contano più del tipo di campo.",
    },
    {
      q: "Perché non dovrei appiattire un modulo vuoto prima di inviarlo?",
      a: "L’appiattimento unisce il livello dei campi alla pagina, eliminando i campi interattivi. I destinatari non avrebbero nulla in cui scrivere. Appiattisci solo i moduli completati al ritorno.",
    },
    {
      q: "Come evito che le persone dimentichino la firma?",
      a: "Dai alla firma un’area chiara e ben posizionata con un campo data accanto. Le firme dimenticate sono la causa più comune per cui i moduli tornano indietro, e un’area evidente risolve la maggior parte del problema.",
    },
    {
      q: "Quanti campi sono troppi?",
      a: "Qualsiasi campo non necessario in questa fase è troppo — ognuno abbassa il tasso di completamento. Chiedi il minimo ora e raccogli il resto in seguito se ti serve davvero.",
    },
  ],
  related: [
    {
      label: "Come creare un PDF compilabile",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "Come compilare un modulo PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Come condividere un modulo PDF",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Problemi di formattazione nei moduli PDF",
      path: "/guides/pdf-form-formatting-issues",
    },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
