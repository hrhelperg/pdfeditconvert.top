import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-compression-settings",
  h1: "Migliori impostazioni di compressione PDF — guida alla decisione",
  description:
    "Quale livello di compressione per mail, stampa, archiviazione o web? Una tabella pratica che collega ogni impostazione all’uso previsto, con i compromessi spiegati con onestà.",
  updated: "2026-05-23",
  intro: [
    "Non esiste un’unica impostazione di compressione «migliore»: esiste solo la migliore impostazione per quello che stai per fare con il file. Il livello perfetto per inviare uno scontrino via mail rovinerebbe un documento destinato alla tipografia. Quindi, invece di un numero magico, ti serve un modo rapido per far corrispondere l’impostazione allo scopo.",
    "Questa guida è proprio quella tabella. Collega i livelli dello strumento gratuito Comprimi PDF — Basso, Consigliato e Forte — alle situazioni in cui ha senso usare ciascuno, e spiega il compromesso dietro ogni scelta. Lo strumento funziona nel tuo browser senza inviare nulla a un server, e mostra il risparmio di dimensione così puoi verificare la tua scelta.",
    "Leggila una volta sola e smetterai di tirare a indovinare: saprai subito quale livello scegliere non appena capisci a cosa serve il documento.",
  ],
  steps: [
    {
      title: "Per gli allegati mail: Consigliato",
      body: "Il punto di equilibrio predefinito. Per la maggior parte dei file rientra nel limite di 25 MB di Gmail e di circa 20 MB di Outlook, mantenendo il documento comodamente leggibile a schermo.",
    },
    {
      title: "Per i portali con limiti stretti: Forte",
      body: "I portali della pubblica amministrazione e delle risorse umane spesso impongono un tetto di pochi megabyte. Il livello Forte ti ci porta. Le scansioni lo reggono bene; per i documenti impaginati, verifica che restino accettabili.",
    },
    {
      title: "Per la stampa o gli archivi ufficiali: Basso",
      body: "Se il file verrà stampato o conservato come documento di qualità, usa il livello Basso per preservare più dettagli possibile. Comprimi solo se il file ha davvero bisogno di essere più piccolo.",
    },
    {
      title: "Per l’archiviazione a lungo termine: minima o nulla",
      body: "Un archivio deve privilegiare la fedeltà rispetto alla dimensione. Comprimi appena, se proprio devi, e conserva sempre un originale non compresso: puoi sempre rimpicciolire una copia più avanti, ma non puoi recuperare un dettaglio perso.",
    },
    {
      title: "Per il web e la lettura solo a schermo: da Consigliato a Forte",
      body: "I documenti destinati a essere letti solo a schermo tollerano una compressione più decisa. Propendi per Forte quando serve un download veloce dal web e la qualità di stampa non conta.",
    },
    {
      title: "Verifica con la dimensione prima e dopo",
      body: "Qualunque livello tu scelga, lo strumento mostra il risparmio ottenuto. Se un livello più leggero raggiunge già il tuo obiettivo, fermati lì: non c’è nessun premio per comprimere più del necessario.",
    },
  ],
  tips: [
    "Prima lo scopo, poi l’impostazione. Decidi cosa succederà al file, e solo dopo scegli il livello — non il contrario.",
    "Le scansioni tollerano impostazioni più aggressive dei documenti impaginati. Lo stesso livello Forte che va bene per un modulo scansionato può ammorbidire troppo una brochure piena di foto.",
    "Ogni livello trasforma le pagine in immagini ed elimina il testo selezionabile. Se il documento deve restare ricercabile, questo pesa sulla scelta tanto quanto la dimensione.",
    "I PDF ricchi di testo e di elementi vettoriali si riducono pochissimo con qualsiasi impostazione: c’è poco dato immagine da comprimere, quindi non aspettarti miracoli dal livello Forte.",
    "Conserva un originale non compresso per tutto ciò che conta davvero. La compressione è a senso unico; l’originale ti permette di ricavare in seguito qualunque dimensione ti serva.",
  ],
  mobileNote:
    "L’app PDF Editor rende facile far corrispondere l’impostazione allo scopo anche in movimento: comprimi offline, vedi l’anteprima del risultato e regola il livello prima di condividere. Gestisce anche i file protetti e tiene tutto sul dispositivo.",
  faq: [
    {
      q: "Qual è la migliore impostazione di compressione in assoluto?",
      a: "Non ce n’è una sola: dipende dallo scopo. Consigliato va bene per la mail, Forte per i limiti stretti dei portali e per i file destinati solo allo schermo, Basso (o nessuna compressione) per la stampa e l’archiviazione.",
    },
    {
      q: "Quale impostazione è migliore per inviare un PDF via mail?",
      a: "Consigliato. Per la maggior parte dei file rientra nei tipici limiti mail di 20–25 MB mantenendo il documento leggibile. Passa a Forte solo se sei ancora sopra il limite.",
    },
    {
      q: "Cosa devo usare per un documento che stamperò?",
      a: "Basso, o nessuna compressione. La stampa ha bisogno di dettaglio, quindi preserva la qualità e riduci il file solo se è davvero troppo pesante da gestire.",
    },
    {
      q: "Le impostazioni più aggressive eliminano il testo ricercabile?",
      a: "Tutti i livelli ridisegnano le pagine come immagini, il che elimina il testo selezionabile. Se il documento deve restare ricercabile, conserva l’originale indipendentemente dal livello scelto.",
    },
    {
      q: "Perché Forte non ha ridotto molto il mio PDF di testo?",
      a: "La compressione agisce sui dati immagine. Un PDF fatto solo di testo o vettori ha poco da comprimere, quindi anche Forte produce un risparmio minimo. Se quel file è pesante, la causa è un’altra.",
    },
  ],
  related: [
    { label: "Comprimi PDF — scegli il tuo livello", path: "/compress-pdf" },
    { label: "Come comprimere un PDF senza perdere troppa qualità", path: "/guides/compress-pdf-without-losing-too-much-quality" },
    { label: "Come comprimere un PDF scansionato", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Come ridurre un PDF prima di caricarlo su un portale", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "Comprimi PDF", path: "/compress-pdf" },
};

export default content;
