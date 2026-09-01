import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-formatting-problems",
  h1: "Come correggere i problemi di formattazione di un PDF (a capo, margini, spaziatura)",
  description:
    "Quando l’impaginazione di un PDF sembra rotta — il testo si ricolloca, i margini non tornano, la spaziatura è incoerente — la soluzione di solito è nel documento di origine, non nel PDF. Il metodo più pulito per ottenere un’esportazione a posto.",
  updated: "2026-05-29",
  intro: [
    "Una cattiva formattazione del PDF quasi sempre si ricollega al momento dell’esportazione. Il PDF in sé non ricolloca nulla — blocca la pagina esattamente com’era al momento del salvataggio. Quindi se la spaziatura è sbagliata, i margini non tornano, o la tabella si è spezzata tra le pagine, era già il file di origine a produrre quel risultato.",
    "La soluzione, quasi sempre, è tornare all’origine — Word, Pages, Google Docs, uno strumento di design — sistemare l’impaginazione e ri-esportare. È frustrante quando l’origine non è tua, ma è la strada più pulita. Le alternative — convertire in Word, modificare direttamente il PDF, o «correggerlo» con un visualizzatore diverso — perdono ognuna qualcosa che l’originale aveva.",
    "Questa guida passa in rassegna i sintomi di formattazione più comuni e la soluzione realistica per ciascuno, inclusi i metodi che producono PDF puliti fin dal primo tentativo.",
  ],
  steps: [
    {
      title: "Capisci se è un problema di contenuto o di visualizzazione",
      body: "Apri il PDF in due visualizzatori diversi. Se entrambi mostrano la stessa impaginazione rotta, il file è la fonte del problema. Se uno la mostra correttamente, hai un problema di visualizzatore, non di formattazione.",
    },
    {
      title: "Correggi l’impaginazione nel documento di origine, non nel PDF",
      body: "Apri il file Word, Pages o Docs, correggi margini, spaziatura o tabella, poi ri-esporta in PDF. L’origine corretta produce direttamente un PDF corretto. Modificare un PDF per rattoppare l’impaginazione va contro il formato.",
    },
    {
      title: "Ri-esporta specificando il formato carta",
      body: "Le impostazioni di adattamento automatico spesso riservano sorprese. Imposta esplicitamente il formato carta (Letter o A4), i margini (2,5 cm) e l’orientamento nell’applicazione di origine prima di esportare.",
    },
    {
      title: "Converti in Word solo per riscritture pesanti del testo",
      body: "PDF in Word nel tuo browser estrae il testo per poterlo rimodificare. La conversione perde parte dell’impaginazione — accettalo come prezzo per riavere la modifica del testo. Dopo la pulizia, ri-esporta in PDF per la condivisione.",
    },
    {
      title: "Usa strumenti a livello di pagina per le correzioni strutturali",
      body: "Se solo alcune pagine sono sbagliate — una scansione fuori ordine, una copertina duplicata, un inserto storto — Riordina pagine PDF, Estrai pagine PDF e Ruota PDF correggono la struttura senza toccare la formattazione del testo.",
    },
    {
      title: "Ri-esporta in PDF prima di condividere",
      body: "Una volta corretta l’impaginazione nell’origine, esporta di nuovo da zero invece di risalvare un PDF esistente. L’esportazione più pulita arriva direttamente dall’applicazione che ha creato il documento.",
    },
  ],
  tips: [
    "L’anteprima di stampa in Word o Pages mostra lo stesso comportamento delle interruzioni di pagina che avrà il PDF. Correggi le interruzioni sbagliate prima di esportare, non dopo.",
    "Le tabelle che si spezzano male sono un problema di formattazione dei paragrafi nell’origine, non un problema del PDF. Usa «mantieni con il successivo» per legare la riga di intestazione al suo contenuto.",
    "Non aprire un PDF in Word per modificarlo — Word lo converte, spesso male. Usa l’origine originale se ce l’hai, oppure PDF in Word solo quando non ce l’hai.",
    "Il contenuto incollato dal web porta spesso con sé una formattazione nascosta. Eliminala prima di esportare (incolla come testo semplice) per evitare bordi e colori a sorpresa nel PDF.",
    "Se hai solo il PDF e non puoi tornare all’origine, accetta che la pulizia dell’impaginazione sarà parziale. Dai priorità ai cambiamenti che chi legge noterà per primi.",
  ],
  mobileNote:
    "I problemi di formattazione dei PDF su mobile spesso arrivano da documenti creati su desktop ed esportati con il formato carta sbagliato. L’app PDF Editor ti permette di ruotare, riordinare e ritagliare le pagine dal telefono — utile per sistemare i problemi strutturali anche quando non puoi correggere l’origine.",
  faq: [
    {
      q: "Perché il mio PDF sembra diverso dalla versione Word?",
      a: "Di solito per font, formato carta o impostazioni dell’area di stampa durante l’esportazione. Ri-esportare con formato carta esplicito e font incorporati produce un PDF che corrisponde all’origine.",
    },
    {
      q: "Posso modificare il testo in un PDF per correggere la spaziatura?",
      a: "Puoi modificare singoli caratteri e parole, ma ricollocare interi paragrafi è difficile perché i PDF trattano il testo come blocchi posizionati. Correggi nell’origine, se possibile.",
    },
    {
      q: "Perché il mio PDF convertito in Word sembra rotto?",
      a: "I PDF codificano l’impaginazione, non il flusso. La conversione li riporta a un flusso, ma gli indizi strutturali sono andati persi. Aspettati di dover fare una vera pulizia su un file convertito.",
    },
    {
      q: "Perché le mie tabelle si spezzano male tra le pagine?",
      a: "Quasi sempre un problema di formattazione dei paragrafi nell’origine. Le impostazioni «mantieni con il successivo» e «non dividere tra le pagine» in Word risolvono la maggior parte delle interruzioni prima dell’esportazione.",
    },
    {
      q: "La compressione influisce sulla formattazione?",
      a: "No. La compressione agisce sulle immagini, non sull’impaginazione. Un PDF compresso ha la stessa formattazione dell’originale — solo con immagini incorporate più piccole.",
    },
  ],
  related: [
    { label: "PDF in Word — converti per le correzioni pesanti del testo", path: "/pdf-to-word" },
    { label: "Word in PDF — ri-esporta in modo pulito", path: "/word-to-pdf" },
    { label: "Come correggere i problemi di font in un PDF", path: "/guides/how-to-fix-pdf-font-issues" },
    { label: "Come risolvere i problemi di stampa di un PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "Convertitore PDF — Word, JPG, PNG e viceversa", path: "/pdf-converter" },
};

export default content;
