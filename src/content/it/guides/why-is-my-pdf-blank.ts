import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blank",
  h1: "Perché il mio PDF è vuoto? Cause reali e come recuperarlo",
  description:
    "Aprire un PDF e trovare pagine vuote è inquietante. La buona notizia è che il contenuto quasi sempre c’è ancora. La cattiva è che la causa non è ovvia a colpo d’occhio.",
  updated: "2026-05-29",
  intro: [
    "Aprire un PDF e trovarti davanti a una pagina vuota mette a disagio. Ti aspetti testo, grafici, contratti firmati — e non trovi nulla. La buona notizia è che il contenuto è quasi sempre ancora nel file. La cattiva è che la causa può essere una tra diverse possibili, e devi capire quale prima di poterla risolvere.",
    "I PDF vuoti nascono di solito da un problema di visualizzazione (il tuo lettore si è bloccato su qualcosa di specifico), un problema con i font (il testo tecnicamente c’è, ma punta a un carattere che nessuno riesce a disegnare), un errore di scansione o acquisizione (l’origine ha prodotto pagine vuote), oppure un problema di contenuto nascosto o su più livelli. In rari casi il file è davvero vuoto.",
    "Questa guida passa in rassegna le diagnosi nell’ordine in cui costa meno controllarle, per poi indirizzarti verso la soluzione giusta. La maggior parte dei PDF vuoti torna leggibile con una nuova esportazione o cambiando lettore.",
  ],
  steps: [
    {
      title: "Prima di tutto, apri il file in un altro lettore",
      body: "Prova il lettore integrato di Chrome, Anteprima su macOS, o un lettore da telefono. Se uno di questi mostra il contenuto, hai isolato il problema nel tuo lettore originale — e il file va bene.",
    },
    {
      title: "Controlla la dimensione del file rispetto alle aspettative",
      body: "Un PDF davvero vuoto è minuscolo — pochi KB. Un PDF che sembra vuoto ma pesa diversi megabyte contiene quasi certamente del contenuto, che semplicemente non viene visualizzato sul tuo dispositivo.",
    },
    {
      title: "Controlla i flag di sicurezza o di permesso",
      body: "Alcuni PDF vengono esportati con un flag di «visualizzazione protetta» o di firma che fa nascondere il contenuto ad alcuni lettori finché non viene concesso il permesso. Salvare una copia senza protezione da un lettore più permissivo di solito risolve il problema.",
    },
    {
      title: "Esporta di nuovo il file passando per la stampa in PDF",
      body: "Apri il file in un lettore qualsiasi che mostra il contenuto e usa «Stampa → Salva come PDF» (oppure Microsoft Print to PDF su Windows). Questo ricostruisce la visualizzazione della pagina e risolve la maggior parte dei vuoti legati ai font.",
    },
    {
      title: "Se è una scansione, riscansiona con un’impostazione diversa",
      body: "Le pagine scansionate vuote nascono di solito da un alimentatore che ha preso due fogli insieme, un contrasto impostato troppo basso, o una scansione da telefono che ha messo a fuoco il piano sbagliato. Il flusso Scansiona in PDF con il rilevamento dei bordi evita quasi tutti questi problemi.",
    },
    {
      title: "Estrai le singole pagine come immagini per verificare",
      body: "PDF in immagini esporta ogni pagina come PNG direttamente nel browser. Se i PNG esportati mostrano contenuto, il problema è il tuo lettore. Se sono davvero vuoti, allora la pagina nel file è vuota per davvero.",
    },
  ],
  tips: [
    "Un PDF vuoto che pesa diversi megabyte ha del contenuto da qualche parte — continua a provare lettori diversi e nuove esportazioni prima di dare per perso il file.",
    "Il testo grigio chiaro su sfondo bianco può sembrare «vuoto» sullo schermo del telefono alla luce diretta del sole. Aumenta la luminosità o inverti i colori prima di dare per scontato che la pagina sia vuota.",
    "I file esportati da alcune app con restrizioni di accessibilità a volte incorporano tutto in un unico livello che i lettori più recenti ignorano. La stampa in PDF lo appiattisce.",
    "Se ti torna un contratto con le pagine della firma vuote, probabilmente chi ha firmato ha usato uno strumento che ha sovrascritto i campi reali con annotazioni vuote — chiedi una copia firmata di nuovo con uno strumento diverso.",
    "Non continuare a modificare o unire un file che si mostra vuoto finché non sai perché. Lavorare su una visualizzazione già rotta produce un file ancora più danneggiato.",
  ],
  mobileNote:
    "I lettori da telefono a volte sono più rigidi di quelli desktop. L’app PDF Editor usa un motore di visualizzazione più permissivo, che tende a mostrare il contenuto anche quando altri lettori da telefono restituiscono una pagina vuota, e ti permette di salvare il documento come una copia più pulita.",
  faq: [
    {
      q: "Un PDF vuoto è perso per sempre?",
      a: "Raramente. Se il file pesa più di qualche KB, il contenuto è quasi sicuramente ancora lì dentro — prova un altro lettore, una nuova esportazione con stampa in PDF, o un’estrazione delle immagini per verificarlo.",
    },
    {
      q: "Perché il mio scanner a volte produce PDF vuoti?",
      a: "Più spesso di ogni altra cosa, l’alimentatore ha preso due pagine attaccate insieme e ha registrato solo la seconda, oppure il contrasto era impostato troppo basso. Riscansionare con il contrasto automatico di solito risolve.",
    },
    {
      q: "Potrebbe essere un problema di font?",
      a: "Sì. Quando un PDF fa riferimento a un font che non è incorporato e il tuo lettore non riesce a sostituirlo, il testo scompare anche se è ancora nel file. Esportare di nuovo incorpora un font utilizzabile.",
    },
    {
      q: "Comprimere o unire un PDF vuoto rischia di far perdere il contenuto?",
      a: "Può succedere — entrambe le operazioni lavorano su quello che il tuo lettore riesce a vedere. Non elaborare un file che si mostra vuoto finché non hai confermato che il contenuto c’è davvero.",
    },
    {
      q: "Perché sembra vuoto in Acrobat ma va bene in Chrome?",
      a: "Interpretazioni diverse. Il lettore di Chrome è spesso il più tollerante; le versioni più vecchie di Acrobat sono più rigide. Il file non è danneggiato — è il tuo lettore a esserlo.",
    },
  ],
  related: [
    { label: "PDF in immagini — verifica che le pagine non siano davvero vuote", path: "/pdf-to-images" },
    { label: "Scansiona in PDF — scansioni pulite senza pagine vuote", path: "/scan-to-pdf" },
    { label: "Perché il mio PDF non si apre?", path: "/guides/why-wont-my-pdf-open" },
    { label: "Come riparare un PDF danneggiato", path: "/guides/how-to-fix-a-corrupted-pdf" },
  ],
  parentHub: { label: "Strumenti PDF gratuiti nel browser", path: "/pdf-tools" },
};

export default content;
