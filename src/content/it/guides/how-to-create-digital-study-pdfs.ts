import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-digital-study-pdfs",
  h1: "Come creare PDF di studio digitali (flashcard, riassunti, raccolte)",
  description:
    "Costruisci i tuoi PDF di studio a partire da appunti, slide ed evidenziazioni — ricercabili, portatili, pronti per essere annotati su tablet. La struttura che li rende davvero utili al momento dell’esame.",
  updated: "2026-05-29",
  intro: [
    "Un PDF di studio fatto da te è uno dei migliori strumenti che tu possa avere per un esame. È più piccolo dell’intero set di appunti settimanali, più strutturato di una chat piena di consigli per il ripasso, e più portatile delle flashcard di carta. Aprilo su un tablet durante una pausa studio, in un bar, sul portatile in biblioteca — stesso file, stesse annotazioni, stessa ricercabilità.",
    "Ma un PDF di studio vale la pena solo se è strutturato. Riversare ogni lezione in un unico file lo rende inutilizzabile; una raccolta di riassunti costruita con cura è invece il documento che apri davvero tre volte a settimana prima dell’esame finale. La differenza sta in come lo costruisci.",
    "Questa guida percorre la struttura che funziona: cosa includere, cosa lasciare fuori, come organizzare per una lettura veloce o per un approfondimento, e come tenere gestibile la dimensione del file su tablet. Parte dal presupposto che tu stia costruendo a partire da appunti settimanali, slide ed evidenziazioni già esistenti — non da zero.",
  ],
  steps: [
    {
      title: "Decidi l’ambito prima di iniziare a costruire",
      body: "Un PDF di studio per corso, uno per esame importante (parziale, finale), oppure uno per argomento — scegli la granularità che rispecchia il tuo modo reale di studiare. PDF più piccoli e mirati battono un’unica raccolta gigante.",
    },
    {
      title: "Costruisci una copertina chiara e un indice",
      body: "Codice del corso, nome dell’esame, data, argomenti trattati. Una pagina di indice all’inizio. Entrambi sono brevi — cinque minuti da scrivere e triplicano la navigabilità.",
    },
    {
      title: "Estrai le slide e gli appunti chiave",
      body: "Estrai pagine PDF preleva solo le slide e gli appunti che ti servono davvero dalle raccolte settimanali più grandi. Non includere l’intero semestre — solo le parti rilevanti per questo esame.",
    },
    {
      title: "Unisci in un ordine coerente",
      body: "Unisci PDF combina gli estratti nell’ordine di studio: cronologico, concettuale, o secondo il peso dato dall’esame. Usa l’ordine in cui farai davvero il ripasso.",
    },
    {
      title: "Annota in anticipo",
      body: "Evidenzia in anticipo termini chiave, formule e concetti. L’annotazione funziona meglio durante il ripasso quando non stai anche evidenziando in tempo reale.",
    },
    {
      title: "Comprimi per la portabilità su tablet",
      body: "Comprimi PDF porta la raccolta di studio a una dimensione adatta al tablet — di solito sotto i 20 MB. I file più piccoli si caricano in fretta, scorrono in modo fluido e non consumano la batteria durante lunghe sessioni di studio.",
    },
  ],
  tips: [
    "Non puntare alla completezza. Il PDF di studio completa gli appunti completi; non li sostituisce. Lascia i dettagli nelle raccolte settimanali.",
    "Includi una o due pagine riassuntive alla fine con formule, date, nomi — tutto ciò che richiede un richiamo a memoria immediato il giorno dell’esame.",
    "Rispecchia la struttura dell’esame. Se l’esame prevede domande brevi più un tema, struttura la raccolta di studio allo stesso modo, così l’esercizio corrisponde al formato del test.",
    "Non comprimere troppo. Alcuni artefatti sul testo con compressione forte danneggiano la leggibilità durante lunghe sessioni di studio. Il livello medio è di solito l’equilibrio giusto.",
    "Ri-esporta dopo una sessione di annotazione importante, così i segni restano contenuto leggibile e non solo una sovrapposizione.",
  ],
  mobileNote:
    "Tablet e telefoni sono dove i PDF di studio vengono davvero usati. L’app PDF Editor supporta annotazione, evidenziazione e ricerca sul file che hai costruito — trasformando la raccolta di studio in uno strumento di ripasso interattivo ovunque tu studi.",
  faq: [
    {
      q: "Quanto dovrebbe essere lungo un PDF di studio?",
      a: "Quanto riesci davvero a rileggere in due o tre sessioni. Per la maggior parte dei corsi sono 30–80 pagine. Oltre le 100 finirai per saltarne metà.",
    },
    {
      q: "Devo includere tutte le slide o solo quelle chiave?",
      a: "Solo quelle chiave. Includere tutto diluisce il valore della raccolta. Scegli le slide che spiegano i concetti in cui sei più debole.",
    },
    {
      q: "Le flashcard digitali sono meglio di quelle di carta?",
      a: "Per la maggior parte degli studenti, sì. Sono ricercabili, portatili e sopravvivono a una caduta o a un bicchiere rovesciato. Le app a ripetizione dilazionata aggiungono un livello in più.",
    },
    {
      q: "Devo condividere il mio PDF di studio con il gruppo?",
      a: "Facoltativo. Alcune persone studiano meglio con le proprie raccolte; altre traggono vantaggio da una condivisa. Prova entrambe le strade e vedi quale ti aiuta a ricordare meglio.",
    },
    {
      q: "Con quanto anticipo dovrei costruirlo?",
      a: "Due o tre settimane prima dell’esame. Prima e mancano contenuti; dopo e non hai tempo per studiarlo.",
    },
  ],
  related: [
    { label: "PDF per studenti — appunti e guide di studio", path: "/pdf-for-students" },
    { label: "Unisci PDF — componi le raccolte di studio", path: "/merge-pdf" },
    { label: "Come organizzare il materiale di studio in PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Flusso di lavoro PDF per studenti universitari", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF per studenti — appunti, evidenziazioni, guide di studio", path: "/pdf-for-students" },
};

export default content;
