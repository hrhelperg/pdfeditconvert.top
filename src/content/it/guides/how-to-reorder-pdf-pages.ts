import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reorder-pdf-pages",
  h1: "Come riordinare le pagine di un PDF (gratis, nel browser)",
  description:
    "Rimetti le pagine di un PDF nell’ordine giusto dal tuo browser. Correggi le scansioni venute al contrario o i file uniti fuori ordine.",
  updated: "2026-05-23",
  intro: [
    "Le pagine finiscono nell’ordine sbagliato più spesso di quanto si pensi. Un alimentatore automatico prende una pila e la scansiona al contrario. Un’unione mette insieme due file ma nella sequenza sbagliata. Un allegato che dovrebbe stare in fondo finisce nel mezzo. Qualunque sia la causa, il rimedio è lo stesso: riordinare le pagine finché il documento non si legge come dovrebbe.",
    "Questa guida usa lo strumento gratuito Reorder PDF Pages, che mostra un’anteprima di ogni pagina e ti lascia spostarle con controlli semplici, direttamente nel tuo browser — nulla viene caricato. Vedi le miniature, le rimescoli al posto giusto e scarichi il file corretto.",
    "È un’operazione piccola con un effetto enorme: un documento nell’ordine giusto si legge come intenzionale, mentre uno nell’ordine sbagliato fa sembrare tutto il resto trascurato.",
  ],
  steps: [
    {
      title: "Apri lo strumento Reorder PDF Pages",
      body: "Vai allo strumento Reorder PDF Pages nel tuo browser. Funziona sul tuo dispositivo — nessun caricamento, nessun account.",
    },
    {
      title: "Aggiungi il tuo PDF",
      body: "Trascina il file nella zona di rilascio o fai clic per sceglierlo. Lo strumento genera una miniatura di ogni pagina così puoi vedere l’ordine attuale a colpo d’occhio.",
    },
    {
      title: "Individua cosa è fuori posto",
      body: "Scorri le miniature cercando pagine invertite, fuori posto o duplicate. Sapere l’ordine finale prima di iniziare rende gli spostamenti rapidi.",
    },
    {
      title: "Sposta le pagine nella sequenza giusta",
      body: "Usa i controlli per spostare ogni pagina nella posizione corretta. Lavora dall’inizio del documento verso la fine, così le posizioni restano prevedibili.",
    },
    {
      title: "Rivedi il nuovo ordine",
      body: "Rileggi le miniature dall’alto in basso un’altra volta. La sequenza mostrata è quella che otterrai nel file.",
    },
    {
      title: "Scarica il PDF corretto",
      body: "Esporta il file riordinato e salvalo con un nome chiaro. Tieni l’originale finché non hai confermato che il nuovo ordine è giusto.",
    },
  ],
  tips: [
    "Se un’intera scansione è venuta al contrario, riordinare risolve la sequenza — ma una pagina storta è un problema di rotazione, gestito invece dallo strumento Rotate PDF.",
    "Riordina prima di comprimere o convertire. È più facile sistemare prima la struttura, poi eseguire le operazioni più pesanti sul documento finito.",
    "Lavora dall’inizio alla fine quando sposti le pagine, così ogni mossa non scombina le posizioni che hai già sistemato.",
    "Per documenti che combinano più fonti, riordina subito dopo l’unione, mentre la struttura prevista è ancora fresca in mente.",
    "Tieni il file originale. Se un riordino va storto, è molto più veloce ripartire dalla fonte intatta.",
  ],
  mobileNote:
    "Riordinare dal telefono è un lavoro di trascinamento di miniature, e l’app PDF Editor lo rende tattile: premi, trascina, rilascia, fatto — offline e senza caricare il file. Comodo subito dopo la scansione, quando le pagine spesso hanno bisogno di un rapido rimescolamento.",
  faq: [
    {
      q: "Posso correggere una scansione venuta in ordine inverso?",
      a: "Sì. Riordinare ti permette di invertire la sequenza così l’ultima pagina scansionata torna in cima. Se le pagine sono anche ruotate, correggi l’orientamento con lo strumento Rotate PDF.",
    },
    {
      q: "Riordinare cambia il contenuto delle pagine?",
      a: "No. Cambia solo la sequenza — il contenuto e l’orientamento di ogni pagina restano esattamente come erano.",
    },
    {
      q: "Il mio PDF viene caricato?",
      a: "No. Il riordino avviene nel tuo browser, sul tuo dispositivo, quindi il file resta privato.",
    },
    {
      q: "Posso eliminare pagine mentre riordino?",
      a: "Riordinare riguarda la sequenza. Per eliminare delle pagine, estrai quelle che vuoi tenere con lo strumento Extract PDF Pages, che lascia fuori quelle indesiderate.",
    },
    {
      q: "Il file originale verrà modificato?",
      a: "No. Lo strumento produce un nuovo PDF riordinato e lascia intatta la fonte, così puoi riprovare dall’originale se serve.",
    },
  ],
  related: [
    { label: "Reorder PDF Pages — riordina nel tuo browser", path: "/reorder-pdf-pages" },
    { label: "Rotate PDF — correggi le pagine storte", path: "/rotate-pdf" },
    { label: "Come organizzare i tuoi file PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Come unire file PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Reorder PDF Pages", path: "/reorder-pdf-pages" },
};

export default content;
