import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf",
  h1: "Come comprimere un PDF senza perdere qualità",
  description:
    "Riduci la dimensione di un PDF per l’e-mail o per caricarlo, senza perdere qualità. Tutorial pensato per il mobile con l’app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Ogni servizio di posta ha ancora un limite per gli allegati. Gmail si ferma a 25 MB. Outlook incontra un muro intorno ai 20 MB. Slack e la maggior parte delle app di messaggistica non accettano più di 25 MB. I PDF reali — preventivi con foto, contratti scansionati, report con grafici — superano facilmente questi limiti.",
    "Ci sono due modi per rendere un PDF più leggero. Quello sbagliato è stampare-in-PDF con una qualità più bassa, che degrada in modo permanente testo e firme. Quello giusto è ricomprimere le immagini e ricodificare i font all’interno del file, mantenendo il testo nitido mentre si taglia il 60–90% della dimensione.",
    "Questa guida ti mostra il modo giusto, usando l’app PDF Editor su iPhone o Android. I passaggi sono identici su entrambe le piattaforme. Otterrai un file abbastanza piccolo da inviare, ma identico all’originale a qualsiasi livello di zoom.",
  ],
  steps: [
    {
      title: "Apri l’app PDF Editor",
      body: "Avvia l’app dalla schermata iniziale. Tocca il riquadro Comprimi nella home.",
    },
    {
      title: "Aggiungi il PDF",
      body: "Tocca Aggiungi file. Scegli da File / iCloud (iPhone) o dal selettore file (Android). Puoi anche condividere un PDF da qualsiasi app verso PDF Editor.",
    },
    {
      title: "Scegli un livello di qualità",
      body: "Tre preset coprono quasi ogni caso. Bilanciato funziona per la maggior parte dei file. Scegli Piccolo per i file da inviare via mail o caricare. Scegli Alto quando il risultato deve essere pronto per la stampa.",
    },
    {
      title: "Guarda l’anteprima del risultato compresso",
      body: "Tocca Anteprima. L’app mostra la dimensione del file originale e di quello compresso a confronto, più le miniature delle prime pagine. Fai zoom per verificare la nitidezza del testo.",
    },
    {
      title: "Confronta con l’originale",
      body: "Passa dall’originale al file compresso. Se qualcosa sembra degradato (raro con Bilanciato), prova un preset diverso.",
    },
    {
      title: "Salva o condividi",
      body: "Salva il file compresso con un nuovo nome (così l’originale resta intatto) oppure condividilo direttamente via mail, Drive o qualsiasi app di messaggistica.",
    },
  ],
  tips: [
    "Se un file è dominato da pagine scansionate, il preset Piccolo può produrre riduzioni superiori al 90% senza perdita di qualità visibile.",
    "Per i PDF quasi interamente testuali, il guadagno della compressione è minore (10–30%) — il file è già efficiente.",
    "Dividere un PDF enorme prima di comprimerlo rende l’operazione più veloce sui telefoni datati e ti dà più flessibilità nell’invio.",
    "Tieni sempre l’originale finché non hai confermato che il file compresso va bene — una volta compresso, la qualità originale è persa.",
    "I PDF compressi mantengono il testo ricercabile e le firme. La compressione agisce sulle immagini e sulle tabelle dei font, non sul livello dei contenuti.",
  ],
  mobileNote:
    "La compressione avviene interamente sul dispositivo. Puoi comprimere un contratto delicato in aereo, con la modalità aereo attiva, e nemmeno un byte lascerà il tuo telefono.",
  faq: [
    {
      q: "Di quanto si ridurrà il mio PDF?",
      a: "I PDF ricchi di immagini o scansionati tipicamente si riducono del 60–90%. I PDF ricchi di testo si riducono meno, spesso del 10–30%. L’app mostra la dimensione esatta prima e dopo.",
    },
    {
      q: "Le immagini diventeranno sfocate?",
      a: "Bilanciato e Alto mantengono le immagini nitide allo zoom di visualizzazione normale. Piccolo applica una compressione più forte — va bene per la mail, ma noterai un leggero ammorbidimento se fai molto zoom.",
    },
    {
      q: "Posso comprimere un PDF protetto da password?",
      a: "Sì, una volta inserita la password. L’app gestisce la decrittazione, comprime il contenuto e può riapplicare la protezione al salvataggio.",
    },
    {
      q: "Qual è la differenza tra comprimere e mettere in ZIP?",
      a: "Un archivio ZIP racchiude il PDF in un altro contenitore ma raramente lo rimpicciolisce — i PDF usano già una compressione interna. La compressione PDF vera e propria riscrive le immagini e i font interni del file, ed è l’unico modo per ottenere un risparmio di spazio reale.",
    },
    {
      q: "Posso comprimere più PDF insieme?",
      a: "Sì. Aggiungi più file in un’unica sessione e l’app li elabora uno dopo l’altro, applicando lo stesso preset a ciascuno.",
    },
  ],
  related: [
    { label: "Compress PDF — panoramica completa", path: "/compress-pdf" },
    { label: "PDF Converter", path: "/pdf-converter" },
    {
      label: "Come unire file PDF",
      path: "/guides/how-to-merge-pdf-files",
    },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
