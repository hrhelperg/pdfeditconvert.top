import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-upload-errors",
  h1: "Come risolvere gli errori di caricamento di un PDF (troppo pesante, rifiutato, bloccato)",
  description:
    "I portali rifiutano un PDF per un numero limitato di motivi: dimensione, numero di pagine, formato troppo rigido o un caricamento instabile. Come capire quale ti riguarda e far accettare il file al prossimo tentativo.",
  updated: "2026-05-29",
  intro: [
    "I portali di caricamento sono più severi della mail. Molti rifiutano tutto ciò che supera i 5 MB, alcuni i 2 MB, alcuni rifiutano i file con più pagine, e altri falliscono silenziosamente su qualunque cosa non sia un PDF/A perfettamente conforme. I messaggi di errore che mostrano sono raramente specifici — «file troppo grande», «formato non valido», «caricamento fallito» — e la maggior parte significa qualcosa di diverso da quello che dice.",
    "Le cause reali di solito sono una di queste quattro: il file supera il limite del portale, il formato interno del file non è standard, la connessione è caduta a metà caricamento, oppure il portale si aspetta una variante specifica di PDF (PDF/A, una sola pagina, versione bassa). Ognuna ha una soluzione diversa, e la soluzione giusta dipende da quale sia il caso.",
    "Questa guida passa in rassegna le diagnosi per sintomo e mostra come risolvere ciascuna direttamente nel tuo browser. La maggior parte dei caricamenti falliti riesce al secondo tentativo, una volta affrontata la vera causa.",
  ],
  steps: [
    {
      title: "Leggi il messaggio di errore alla lettera",
      body: "«Il file supera il limite di dimensione» significa compressione. «File non valido» significa formato. «Caricamento fallito» di solito significa rete. Tratta le parole come primo indizio, anche quando sono laconiche.",
    },
    {
      title: "Comprimi in modo aggressivo se il problema è la dimensione",
      body: "Comprimi PDF nel tuo browser riduce i file in modo significativo, specialmente quelli pieni di scansioni. Prova prima la compressione più forte; se la qualità cala troppo, torna indietro di un livello. Alcuni portali impongono un tetto di 2 MB — la maggior parte delle compressioni porta un documento tipico ben sotto quella soglia.",
    },
    {
      title: "Dividi un grande PDF multi-pagina se serve",
      body: "Se il portale accetta più file piccoli ma rifiuta uno grande, Dividi PDF o Estrai pagine PDF ti permette di spezzare il file in sezioni. Numera chiaramente le parti nel nome del file, così chi riceve può ricomporle.",
    },
    {
      title: "Ri-esporta in PDF standard se il formato viene rifiutato",
      body: "Alcuni portali accettano solo file salvati come PDF 1.4 o PDF/A. La soluzione più semplice è aprire il file in un qualsiasi visualizzatore e usare la stampa in PDF — la copia risultante è semplice, standard, e di solito viene accettata.",
    },
    {
      title: "Controlla il numero di pagine e le dimensioni",
      body: "I portali della pubblica amministrazione e dell’istruzione a volte limitano il numero di pagine o il formato carta. Se il portale elenca i requisiti, rispettali: solo Letter o A4, niente pagine fuori misura, niente sfondi trasparenti. Estrai pagine PDF elimina tutto ciò che supera i limiti.",
    },
    {
      title: "Riprova con una connessione stabile",
      body: "Un Wi-Fi che cade a metà caricamento sembra identico a un rifiuto. Cambia rete o riprova con una connessione diversa prima di dare per scontato che il problema sia il file stesso.",
    },
  ],
  tips: [
    "Comprimi prima di dividere. Un singolo file compresso spesso rientra nel limite; se ancora non ci rientra, dividi la copia compressa.",
    "Evita cifratura o protezione con password quando carichi su un portale — molti bloccano i file protetti anche se accetterebbero il contenuto sottostante.",
    "Fai attenzione ai limiti nascosti di caratteri nei nomi dei file. Alcuni portali rifiutano nomi con spazi, accenti o punteggiatura.",
    "Se il portale accetta JPG ma rifiuta PDF, puoi esportare le pagine del PDF come immagini con PDF in immagini e caricare quelle — utile per i requisiti solo immagine, come l’invio di un documento d’identità.",
    "Conferma sempre che il caricamento sia andato a buon fine (alcuni portali falliscono in silenzio). Aggiorna la pagina di conferma e cerca una vera conferma, non solo l’assenza di un errore.",
  ],
  mobileNote:
    "I caricamenti dal telefono falliscono più spesso di quelli da portatile semplicemente perché la connessione cade più spesso. L’app PDF Editor comprime e divide i file offline, così il passaggio di caricamento in sé dura poco — un file più piccolo si carica più in fretta e sopravvive a una rete instabile.",
  faq: [
    {
      q: "A quale dimensione limitano la maggior parte dei portali?",
      a: "I limiti più comuni sono 2 MB, 5 MB e 10 MB. I portali della pubblica amministrazione e accademici tendono a essere i più severi; quelli commerciali sono più permissivi. Controlla la sezione di aiuto del portale se non è indicato chiaramente.",
    },
    {
      q: "La compressione risolve sempre un rifiuto per dimensione?",
      a: "Di solito sì, specialmente per i file pieni di scansioni. Una scansione da 30 MB spesso si comprime senza problemi a meno di 5 MB. I PDF fatti solo di testo, già piccoli, non si comprimono molto oltre.",
    },
    {
      q: "Perché il portale rifiuta il mio file come «non valido»?",
      a: "O il file non è davvero un PDF (alcuni download hanno un nome sbagliato), oppure usa funzioni PDF che l’analizzatore del portale non supporta. Ri-esportare con la stampa in PDF produce una copia di base che quasi sempre viene accettata.",
    },
    {
      q: "Posso aggirare il limite di dimensione comprimendolo in ZIP?",
      a: "Quasi mai. I portali che limitano i PDF di solito limitano anche la dimensione totale del caricamento e rifiutano del tutto gli archivi ZIP. Comprimere il PDF stesso è la strada giusta.",
    },
    {
      q: "E se il portale vuole specificamente il PDF/A?",
      a: "Il PDF/A è una variante per l’archiviazione. Microsoft Word e Google Docs possono esportare direttamente in questo formato. In alternativa, apri il file, usa la stampa in PDF, e controlla le opzioni di esportazione per un’impostazione compatibile con lo standard A.",
    },
  ],
  related: [
    { label: "Comprimi PDF — riduci per rientrare nei limiti del portale", path: "/compress-pdf" },
    { label: "Dividi PDF — spezza i file grandi in parti accettabili", path: "/split-pdf" },
    { label: "Come ridurre un PDF prima di caricarlo su un portale", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
    { label: "Come ridurre la dimensione di un PDF per la mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "Comprimi PDF — riduci la dimensione nel browser", path: "/compress-pdf" },
};

export default content;
