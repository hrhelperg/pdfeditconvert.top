import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-scanned-pdf-quality",
  h1: "Come migliorare la qualità di un PDF scansionato (nitidezza, raddrizzamento, colore)",
  description:
    "I PDF scansionati sbagliano sempre allo stesso modo: storti, contrasto slavato, sfondo macchiato, file enormi. Le regolazioni prima della scansione e gli strumenti dopo che li sistemano davvero.",
  updated: "2026-05-29",
  intro: [
    "Una scansione fatta male rovina un documento che altrimenti sarebbe semplice. Righe storte, contrasto slavato, puntini di polvere che si vedono, dimensione del file enorme — e il contenuto diventa difficile da leggere o impossibile da comprimere ulteriormente. La parte fastidiosa è che la maggior parte di questi problemi viene dall’impostazione, non dal PDF in sé, ed evitarli al momento della cattura è molto più facile che correggerli dopo.",
    "Quando hai davvero una scansione da correggere, le opzioni realistiche sono: raddrizzare ciò che è storto, ritagliare ciò che è inquadrato male, ridurre la risoluzione di ciò che è troppo pesante, e accettare che la risoluzione persa in fase di cattura non torna indietro. Alcuni strumenti di elaborazione immagini promettono di «rendere più nitido»; in pratica cambiano solo l’aspetto, non lo migliorano.",
    "Questa guida separa la prevenzione (scansionare bene fin dalla prima volta) dal recupero (cosa fare con il file che hai già). La prevenzione è più importante.",
  ],
  steps: [
    {
      title: "Previeni le pagine storte inserendole correttamente",
      body: "Gli scanner con alimentatore automatico producono pagine storte quando i fogli non sono allineati nel vassoio. Le scansioni da telefono si storcono quando inclini la fotocamera. Entrambi i casi sono evitabili: allinea bene il foglio, tieni il telefono parallelo alla carta, e la scansione esce dritta.",
    },
    {
      title: "Imposta la risoluzione di scansione a 200–300 DPI per i documenti",
      body: "600 DPI è qualità fotografica e produce file enormi senza alcun beneficio su una pagina scritta al computer. 150 DPI è troppo basso — il testo diventa morbido. L’intervallo 200–300 è il punto di equilibrio per i documenti che condividerai, archivierai o stamperai.",
    },
    {
      title: "Scegli scala di grigi o bianco e nero invece del colore per il testo",
      body: "La modalità colore su un documento di testo triplica la dimensione del file e introduce rumore che si comprime male. La scala di grigi o il bianco e nero produce scansioni più nitide, più piccole e più pulite per tutto ciò che non è una foto o una grafica a colori.",
    },
    {
      title: "Usa il contrasto automatico e il ritaglio automatico quando disponibili",
      body: "La maggior parte delle app di scansione include il contrasto automatico e il rilevamento dei bordi. Entrambi fanno una vera differenza: il contrasto elimina la foschia grigia, il rilevamento dei bordi ritaglia sulla pagina così i margini restano puliti.",
    },
    {
      title: "Comprimi con attenzione le scansioni già esistenti",
      body: "Se un PDF scansionato è già enorme, Comprimi PDF nel tuo browser può ridurlo drasticamente. Non usare l’impostazione estrema sul testo — può pixelare i caratteri. Forte ma non estremo è la scelta più sicura.",
    },
    {
      title: "Ruota le pagine storte con Ruota PDF",
      body: "Se solo poche pagine sono di traverso o capovolte, Ruota PDF le raddrizza sul posto. Non può correggere una leggera inclinazione angolare, ma gestisce le rotazioni di 90/180/270 gradi che la maggior parte degli errori dell’alimentatore produce.",
    },
  ],
  tips: [
    "Una luce intensa e uniforme conta più della qualità della fotocamera nelle scansioni da telefono. Una scansione da telefono ben illuminata batte l’output di uno scanner d’ufficio mal illuminato.",
    "Non scansionare a colori e ad alto DPI per poi comprimere forte. Scansiona subito con le impostazioni giuste; il file sarà più piccolo, più nitido e più veloce da gestire.",
    "Lo sfondo che traspare (testo sul retro di carta sottile) è un problema della carta, non della scansione. Metti un foglio di carta scura dietro la pagina.",
    "Riscannerizzare è quasi sempre più veloce che correggere. Se hai ancora la carta, sistema la scansione al momento della cattura invece di elaborare l’immagine dopo.",
    "Le app di scansione da telefono che promettono di «migliorare» spesso aggiungono una nitidezza artificiale che peggiora a un esame ravvicinato. Una scansione pulita di base batte una elaborata ma fatta male.",
  ],
  mobileNote:
    "Le scansioni da telefono sbagliano in modo prevedibile — angolazione, luce e messa a fuoco sono tutte nelle mani di chi scansiona. Il flusso di scansione dell’app PDF Editor usa rilevamento dei bordi e regolazione del contrasto in tempo reale, così ogni cattura si avvicina già al primo tentativo al risultato di uno scanner piano.",
  faq: [
    {
      q: "Perché il mio PDF scansionato è così slavato?",
      a: "Il contrasto era impostato troppo basso al momento della cattura. Riscansiona con il contrasto automatico attivo, oppure regolando manualmente luminosità e contrasto. L’elaborazione successiva aiuta solo in minima parte.",
    },
    {
      q: "Posso rendere più nitida una scansione sfocata?",
      a: "Solo in apparenza. Il dettaglio reale perso al momento della cattura non si può recuperare. I filtri di nitidezza modificano i bordi ma non aggiungono informazione.",
    },
    {
      q: "Quale risoluzione di scansione dovrei usare?",
      a: "200–300 DPI per i documenti. 300 se pensi di stampare. Qualsiasi valore più alto è sprecato sul testo e appesantisce solo il file.",
    },
    {
      q: "Dovrei scansionare a colori o in scala di grigi?",
      a: "Scala di grigi o bianco e nero per il testo. Colore solo per foto e grafiche a colori. La scala di grigi è più nitida e molto più leggera.",
    },
    {
      q: "Perché le mie scansioni sono enormi in dimensione?",
      a: "Di solito per un DPI troppo alto unito alla modalità colore. Riduci entrambi al momento della cattura, oppure comprimi il file esistente. I PDF scansionati sono quelli che beneficiano di più dalla compressione.",
    },
  ],
  related: [
    { label: "Scansiona in PDF — catture pulite con rilevamento dei bordi", path: "/scan-to-pdf" },
    { label: "Comprimi PDF — riduci le scansioni pesanti", path: "/compress-pdf" },
    { label: "Come comprimere un PDF scansionato", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Perché il mio PDF è sfocato?", path: "/guides/why-is-my-pdf-blurry" },
  ],
  parentHub: { label: "Scansiona in PDF — con la fotocamera del telefono", path: "/scan-to-pdf" },
};

export default content;
