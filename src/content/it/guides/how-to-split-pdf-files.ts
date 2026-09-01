import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-split-pdf-files",
  h1: "Come dividere un PDF in file separati (gratis)",
  description:
    "Suddividi un PDF grande in file più piccoli per intervallo di pagine, nel tuo browser. Quando dividere invece di estrarre, e come tenere al sicuro gli originali.",
  updated: "2026-05-23",
  intro: [
    "Dividere un PDF è quello che fai quando un file cerca di essere più documenti insieme: un pacchetto scansionato che in realtà è un contratto più i suoi allegati, un report di 200 pagine di cui ti serve solo un capitolo, oppure un lotto unito che deve tornare a essere singoli file. Invece di inviare tutto e chiedere alle persone di trovare la loro parte, lo dividi.",
    "Questa guida usa lo strumento gratuito Split PDF, che divide un PDF per intervallo di pagine direttamente nel tuo browser — nulla viene caricato. È un modo veloce e privato per trasformare un unico file nei pezzi più piccoli che ti servono davvero da inviare o conservare.",
    "Chiariremo anche un dubbio comune: la differenza tra dividere un PDF ed estrarne le pagine, perché lo strumento giusto dipende da cosa vuoi ottenere.",
  ],
  steps: [
    {
      title: "Apri lo strumento Split PDF",
      body: "Vai allo strumento Split PDF nel tuo browser. Funziona sul tuo dispositivo — nessun caricamento, nessun account.",
    },
    {
      title: "Aggiungi il tuo PDF",
      body: "Trascina il file nella zona di rilascio o fai clic per sceglierlo. Lo strumento legge il numero di pagine così puoi dividere per intervallo.",
    },
    {
      title: "Decidi dove si spezza il documento",
      body: "Guarda i numeri di pagina e individua i confini — per esempio, le pagine 1-10 sono il contratto, 11-24 l’allegato. Pianifica gli intervalli prima di dividere.",
    },
    {
      title: "Inserisci l’intervallo di pagine da isolare",
      body: "Specifica l’intervallo che vuoi come file a sé stante. Ripeti per ogni sezione che devi staccare.",
    },
    {
      title: "Scarica ogni parte",
      body: "Lo strumento produce un nuovo PDF per l’intervallo scelto. Salva ciascuno con un nome chiaro, specifico per quella sezione.",
    },
    {
      title: "Tieni intatto l’originale",
      body: "Dividere non modifica la fonte — il tuo PDF originale resta integro sul dispositivo. Conservalo finché non hai confermato che ogni divisione è venuta bene.",
    },
  ],
  tips: [
    "Dividi quando vuoi più documenti separati; estrai quando vuoi far confluire alcune pagine in un unico file nuovo. Sembrano simili ma producono risultati diversi.",
    "Segna i confini delle pagine prima di iniziare. Dividere un report lungo è molto più veloce quando sai già che la metodologia inizia a pagina 31.",
    "Nomina ogni file diviso in base al contenuto, non all’intervallo — «Allegato-B.pdf» è più utile per un destinatario di «pagine-25-40.pdf».",
    "Dividere prima un PDF enorme rende più veloci anche le altre operazioni: comprimere o convertire una sezione di 15 pagine batte lottare con il file completo di 300 pagine.",
    "I PDF protetti da password non possono essere elaborati nel browser. Rimuovi prima la password, oppure usa l’app PDF Editor, che supporta i file protetti.",
  ],
  mobileNote:
    "Sul telefono, dividere serve spesso a mandare la fetta giusta alla persona giusta, ovunque tu sia. L’app PDF Editor divide, estrae e condivide in pochi tocchi, e funziona offline — comodo quando sei sul posto e devi rimandare solo le pagine firmate.",
  faq: [
    {
      q: "Qual è la differenza tra dividere ed estrarre?",
      a: "Dividere spezza un PDF in più file separati per intervallo. Estrarre raccoglie le pagine scelte in un unico nuovo file. Usa dividi per suddividere un documento, estrai per raccogliere pagine specifiche.",
    },
    {
      q: "Dividere modifica il mio file originale?",
      a: "No. Il PDF sorgente resta intatto — lo strumento crea nuovi file per gli intervalli che scegli. Tieni l’originale finché non hai controllato i risultati.",
    },
    {
      q: "Il mio PDF viene caricato?",
      a: "No. La divisione avviene nel tuo browser, sul tuo dispositivo, quindi il file non lo lascia mai — sicuro per contratti e report riservati.",
    },
    {
      q: "In quanti pezzi posso dividere un PDF?",
      a: "Quanti ti servono — ripeti la selezione dell’intervallo per ogni sezione. I PDF molto grandi possono mettere sotto pressione la memoria del browser, nel qual caso l’app PDF Editor è l’opzione migliore.",
    },
    {
      q: "Posso dividere un PDF protetto da password?",
      a: "Non nel browser. Rimuovi prima la password, oppure usa l’app mobile PDF Editor, che può aprire i file protetti.",
    },
  ],
  related: [
    { label: "Split PDF — dividi un file nel tuo browser", path: "/split-pdf" },
    { label: "Extract PDF Pages — estrai pagine in un nuovo file", path: "/extract-pdf-pages" },
    { label: "Come estrarre pagine da un PDF", path: "/guides/how-to-extract-pages-from-pdf" },
    { label: "Come unire file PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Split PDF", path: "/split-pdf" },
};

export default content;
