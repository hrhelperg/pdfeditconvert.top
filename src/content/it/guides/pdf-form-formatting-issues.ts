import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-formatting-issues",
  h1: "Problemi di formattazione nei moduli PDF (allineamento e sovrapposizione)",
  description:
    "Campi disallineati, risposte che escono dai bordi, il modulo che appare diverso sullo schermo di qualcun altro? I problemi di impaginazione dei moduli che cambiano da un visualizzatore all’altro, e come ottenere un risultato coerente.",
  updated: "2026-06-01",
  intro: [
    "Un modulo può sembrare perfetto sul tuo schermo e arrivare con un aspetto sbagliato su quello di qualcun altro — campi spostati fuori dalle loro righe, risposte che escono dalle loro caselle, caselle di controllo disallineate, l’intera impaginazione leggermente spostata. Poiché i campi del modulo vengono disegnati da ogni lettore invece di essere fissati nella pagina, il loro aspetto esatto può variare, ed è questa la radice della maggior parte delle lamentele sulla formattazione dei moduli.",
    "Sono diversi dai problemi generali di formattazione dei PDF, che di solito risalgono ai margini e alla spaziatura del documento sorgente. I problemi di formattazione dei moduli riguardano il livello dei campi: come i campi si posizionano rispetto alla pagina, come le risposte entrano al loro interno, e quanto in modo coerente questo viene disegnato tra le diverse app. Le soluzioni sono di conseguenza specifiche per i moduli.",
    "Questa guida copre i problemi comuni di impaginazione dei moduli, perché succedono, e l’unica cura più affidabile — l’appiattimento — che fa apparire un modulo allo stesso modo ovunque.",
  ],
  steps: [
    {
      title: "Conferma che sia una differenza di lettore",
      body: "Apri il modulo in due app PDF diverse. Se l’impaginazione cambia tra le due, il problema è la resa dei campi, non il file — ogni lettore disegna i campi in modo leggermente diverso.",
    },
    {
      title: "Correggi le risposte che escono dai campi",
      body: "Se il testo fuoriesce dal bordo di un campo, il campo è troppo piccolo o la risposta troppo lunga. Su un modulo che controlli, ingrandisci il campo; quando compili, tieni le risposte dentro lo spazio visibile o usa la dimensione automatica.",
    },
    {
      title: "Riallinea i campi fuori posto rispetto alle loro righe",
      body: "Campi che si spostano sopra o sotto le loro etichette di solito significano che le posizioni dei campi non corrispondono alla pagina sottostante. Se è il tuo modulo, riposiziona i campi; se non lo è, aggiungere il testo sopra può essere più affidabile del campo disallineato.",
    },
    {
      title: "Appiattisci per un risultato coerente",
      body: "L’appiattimento unisce i campi alla pagina, fissando la loro posizione e il loro aspetto. Dopo l’appiattimento, il modulo appare identico in ogni lettore — la cura più affidabile per un’impaginazione che varia.",
    },
    {
      title: "Preferisci un modello non interattivo quando la coerenza è fondamentale",
      body: "Se un modulo deve apparire uguale per tutti, un modello non interattivo ben progettato (senza livello di campi interattivi) evita del tutto le differenze di resa tra un lettore e l’altro.",
    },
  ],
  tips: [
    "Apri il modulo in due app per confermare che un problema di impaginazione sia dovuto alla resa del lettore e non a un file danneggiato.",
    "L’appiattimento è la soluzione più affidabile — blocca posizione e aspetto dei campi nella pagina per ogni lettore.",
    "Quando compili un modulo con campi disallineati, posizionare il testo sopra può risultare più preciso che lottare con il campo.",
    "Se stai costruendo un modulo che deve apparire identico ovunque, un modello non interattivo evita le differenze di resa dei campi.",
    "L’aspetto di un modulo può variare da un lettore di PDF all’altro per come è progettato, quindi «sul loro schermo sembra sbagliato» di solito è resa, non corruzione.",
  ],
  mobileNote:
    "L’app PDF Editor ti permette di appiattire un modulo completato così la sua impaginazione è fissa prima di inviarlo, e non cambia sullo schermo del destinatario. Per i moduli con campi scomodi, puoi anche posizionare il testo con precisione sulla pagina e appiattire — un risultato coerente su qualsiasi dispositivo.",
  faq: [
    {
      q: "Perché il mio modulo PDF appare diverso sullo schermo di qualcun altro?",
      a: "I campi del modulo vengono disegnati da ogni lettore, quindi la loro posizione e il loro aspetto possono variare da un’app all’altra. Appiattire il modulo unisce i campi alla pagina così appare identico ovunque.",
    },
    {
      q: "Perché le mie risposte escono dalle caselle dei campi?",
      a: "Il campo è troppo piccolo per la risposta, oppure la risposta è troppo lunga. Ingrandisci il campo su un modulo che controlli, tieni le risposte dentro lo spazio visibile, oppure affidati alla dimensione automatica per farle entrare.",
    },
    {
      q: "Come correggo i campi fuori posto rispetto alle loro righe?",
      a: "Le posizioni dei campi non corrispondono alla pagina sottostante. Riposiziona i campi se è il tuo modulo; se non lo è, posizionare il tuo testo direttamente sulla pagina può essere più affidabile del campo disallineato.",
    },
    {
      q: "Qual è il modo più affidabile per mantenere coerente l’impaginazione di un modulo?",
      a: "Appiattirlo. L’appiattimento fissa l’aspetto dei campi nella pagina così viene disegnato allo stesso modo in qualsiasi lettore. Per i moduli che costruisci tu, un modello non interattivo evita il problema fin dall’inizio.",
    },
    {
      q: "In cosa è diverso dai problemi generali di formattazione dei PDF?",
      a: "Questa guida riguarda il livello dei campi — allineamento, fuoriuscita, resa del lettore. I problemi generali di formattazione dei PDF di solito derivano dai margini e dalla spaziatura del documento sorgente, non dai suoi campi del modulo.",
    },
  ],
  related: [
    {
      label: "Come risolvere i problemi di formattazione dei PDF",
      path: "/guides/how-to-fix-pdf-formatting-problems",
    },
    {
      label: "Problemi di carattere nei moduli PDF",
      path: "/guides/pdf-form-font-problems",
    },
    {
      label: "Problemi di compatibilità dei moduli PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "Buone pratiche per i moduli PDF", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
