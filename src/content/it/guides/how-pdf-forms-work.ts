import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-pdf-forms-work",
  h1: "Come funzionano i moduli PDF — campi, AcroForm e scansioni non interattive",
  description:
    "Alla base, un modulo PDF è un insieme di campi interattivi sovrapposti alla pagina, oppure un’immagine piatta senza nessuno di questi campi. Come sono costruiti entrambi e perché conta per la compilazione.",
  updated: "2026-06-01",
  intro: [
    "Capire cosa succede davvero dentro un modulo PDF aiuta, perché spiega quasi tutte le stranezze che incontrerai. Una pagina PDF è un’impaginazione fissa — testo, righe e immagini posizionati a coordinate precise. Un modulo aggiunge un livello separato sopra questa impaginazione: i campi interattivi, ciascuno una piccola casella che sa di essere un campo di testo, una casella di controllo, un menu a tendina o un’area per la firma.",
    "Quando un modulo ha questo livello di campi, il tuo lettore di PDF disegna caselle modificabili nei punti in cui chi lo ha progettato le ha inserite. Tu scrivi, e il lettore memorizza quello che inserisci nel campo invece di fissarlo sulla pagina. Questa separazione è il motivo per cui le risposte compilate a volte possono essere cancellate, modificate o non salvarsi: vivono nel livello dei campi, non nella pagina stessa, finché non li appiattisci.",
    "I moduli non interattivi saltano del tutto il livello dei campi. Sono solo l’immagine della pagina, quindi non c’è nulla di interattivo in cui scrivere; aggiungi tu stesso degli oggetti di testo sopra. Questa guida ripercorre come sono costruiti entrambi i tipi, cosa fa l’appiattimento e perché lo stesso modulo può comportarsi diversamente da un’app all’altra.",
  ],
  steps: [
    {
      title: "Il livello della pagina: fisso e definitivo",
      body: "Ogni PDF ha un livello di pagina con testo e grafica bloccati in posizioni precise. È questo che fa apparire un PDF identico ovunque. In un modulo non interattivo, le righe delle domande e le etichette vivono interamente qui.",
    },
    {
      title: "Il livello dei campi: interattivo, sopra la pagina",
      body: "I moduli interattivi aggiungono un livello di campi sopra la pagina — caselle di testo, caselle di controllo, pulsanti di opzione, menu a tendina, campi per la firma. Ogni campo ha un nome e un tipo che il lettore riconosce.",
    },
    {
      title: "Compilazione: i dati inseriti restano nei campi",
      body: "Quando scrivi in un campo interattivo, la tua risposta resta in quel campo, non viene unita alla pagina. Per questo puoi cancellarla e riscriverla, e per questo un lettore diverso potrebbe mostrarla in modo leggermente diverso.",
    },
    {
      title: "Salvataggio: conservare i valori dei campi",
      body: "Salvare un modulo compilato memorizza i valori dei campi all’interno del file. Alcuni lettori di base ti permettono solo di stampare, non di salvare i dati — la ragione classica per cui le risposte compilate spariscono quando riapri il file.",
    },
    {
      title: "Appiattimento: unire i campi alla pagina",
      body: "L’appiattimento spinge i valori dei campi nel livello della pagina, trasformandoli in contenuto permanente della pagina. Dopo l’appiattimento le risposte non si possono più modificare o cancellare — utile proprio prima di rispedire il modulo.",
    },
  ],
  tips: [
    "Immagina un modulo interattivo come un foglio trasparente di caselle modificabili posato su una pagina stampata. L’appiattimento incolla il foglio per sempre.",
    "Poiché i valori dei campi sono separati dalla pagina, lo stesso modulo può apparire leggermente diverso da un lettore all’altro — carattere e dimensione dei campi non sono sempre identici.",
    "Se le risposte continuano a sparire, il livello dei campi non viene salvato. Usa uno strumento che scriva i valori dei campi nel file, oppure appiattisci prima di chiudere.",
    "Alcuni moduli avanzati (spesso chiamati XFA o moduli dinamici) usano una struttura più complessa che molti lettori non supportano del tutto — sono quelli con più probabilità di comportarsi male.",
    "I moduli non interattivi non hanno alcun livello di campi, quindi non perdono mai dati come può succedere a quelli interattivi — il testo che aggiungi resta semplicemente sulla pagina.",
  ],
  mobileNote:
    "L’app PDF Editor legge il livello dei campi di un modulo appena lo apri, così i campi interattivi sono subito toccabili. Per i moduli non interattivi senza livello di campi, ti permette di aggiungere testo e segni direttamente sulla pagina e poi esportare — e puoi appiattire il risultato per bloccare le risposte prima dell’invio.",
  faq: [
    {
      q: "Di cosa sono fatti i campi di un modulo PDF?",
      a: "Sono un livello di oggetti interattivi — caselle di testo, caselle di controllo, pulsanti di opzione, menu a tendina e campi per la firma — posizionati sopra l’impaginazione fissa della pagina, ciascuno con un nome e un tipo che il lettore riconosce.",
    },
    {
      q: "Perché a volte le mie risposte compilate spariscono?",
      a: "I valori dei campi sono memorizzati separatamente dalla pagina. Se il tuo lettore si limita a stampare invece di salvare i dati, o se non salvi correttamente, il livello dei campi non viene scritto nel file e le risposte vengono perse.",
    },
    {
      q: "Cosa significa appiattire un modulo PDF?",
      a: "Appiattire unisce i valori dei campi direttamente alla pagina, rendendoli permanenti. Il modulo non è più modificabile, ma le risposte verranno mostrate e stampate in modo coerente ovunque.",
    },
    {
      q: "Cos’è un AcroForm?",
      a: "AcroForm è il tipo standard di modulo PDF interattivo, ampiamente supportato. Esiste anche un tipo dinamico più complesso (XFA) che molti lettori gestiscono male, ed è per questo che alcuni moduli funzionano solo con software specifici.",
    },
    {
      q: "Perché lo stesso modulo appare diverso in due app?",
      a: "Perché ogni lettore disegna da sé il livello dei campi. L’aspetto di un modulo può variare da un lettore di PDF all’altro, soprattutto per carattere e dimensione dei campi. Appiattire prima di condividere evita sorprese.",
    },
  ],
  related: [
    { label: "Cos’è un modulo PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Come salvare un modulo PDF compilato",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "Problemi di compatibilità dei moduli PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "PDF Editor — compila da mobile", path: "/pdf-editor" },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
