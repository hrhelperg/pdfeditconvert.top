import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-webp-to-pdf",
  h1: "Come convertire un WebP in PDF — immagini dal web a un documento",
  description:
    "Trasforma le immagini WebP salvate dal web in un unico PDF nel tuo browser. Perché altre app le rifiutano, e come la conversione risolve la compatibilità.",
  updated: "2026-05-23",
  intro: [
    "Il WebP è il formato immagine con cui ti ritrovi quando salvi una foto da un sito web moderno. È più leggero di JPG o PNG a parità di qualità, il che è il motivo per cui piace tanto ai siti — ma è anche il formato che molte altre app rifiutano senza troppi complimenti. Carica un WebP su un portale datato, incollalo in alcuni editor di documenti, o inviala a un collega con software vecchio, e spesso otterrai un secco «tipo di file non supportato».",
    "Convertire il WebP in PDF aggira il problema. Un PDF si apre ovunque, quindi racchiudere le tue immagini WebP in uno le rende universalmente condivisibili. Questa guida usa lo strumento gratuito Image to PDF, che accetta il WebP e funziona interamente nel tuo browser — nulla viene caricato.",
    "È la mossa giusta quando hai raccolto immagini dal web — foto di prodotti, immagini di riferimento, infografiche salvate — e ti servono in un formato che ogni destinatario e ogni sistema accetterà davvero.",
  ],
  steps: [
    {
      title: "Apri lo strumento Image to PDF",
      body: "Vai allo strumento Image to PDF nel tuo browser. Accetta il WebP insieme a JPG e PNG, ed elabora tutto sul tuo dispositivo senza caricamento né registrazione.",
    },
    {
      title: "Aggiungi i tuoi file WebP",
      body: "Trascina le immagini WebP salvate nella zona di rilascio o fai clic per sceglierle. Ogni immagine diventa una pagina nel PDF finale.",
    },
    {
      title: "Disponi l’ordine",
      body: "Usa le frecce su e giù per sequenziare le immagini. Se sono foto di riferimento o una serie passo passo, sistema l’ordine qui.",
    },
    {
      title: "Crea il PDF",
      body: "Fai clic su Crea PDF. Le tue immagini WebP vengono posizionate su pagine PDF e combinate in un unico file, in locale sul tuo dispositivo.",
    },
    {
      title: "Scarica e condividi",
      body: "Il PDF si scarica automaticamente. Ora si aprirà su qualsiasi dispositivo o portale che si era bloccato sui file WebP originali.",
    },
    {
      title: "Comprimi se il file è pesante",
      body: "Il WebP è efficiente, ma un gruppo di immagini ad alta risoluzione si somma comunque. Passa il risultato dallo strumento Compress PDF se deve rientrare in un limite di allegato o caricamento.",
    },
  ],
  tips: [
    "L’intero motivo per convertire il WebP in PDF è la compatibilità — un PDF viene accettato dove un WebP non lo è, quindi stai scambiando un formato capriccioso con uno universale.",
    "Se ti servono solo le immagini in un formato più comune (non un documento), potresti preferire un semplice convertitore di immagini. Scegli il PDF quando l’obiettivo è un unico file condivisibile e stampabile.",
    "Il WebP può essere con o senza perdita a seconda di come è stato salvato; in entrambi i casi, convertire in PDF non recupera il dettaglio che il sito web aveva già scartato.",
    "La trasparenza in un WebP, come in un PNG, viene renderizzata su sfondo bianco una volta che diventa una pagina PDF.",
    "Alcuni browser molto datati non riescono a decodificare il WebP. Se lo strumento non riesce a leggere il tuo file, aprilo in un browser aggiornato o usa l’app PDF Editor.",
  ],
  mobileNote:
    "Salvare immagini navigando dal telefono spesso ti lascia con file WebP che il resto delle tue app rifiuta. L’app PDF Editor li trasforma in un PDF condivisibile all’istante, così un’immagine trovata sul web è pronta da inviare senza passare dal computer.",
  faq: [
    {
      q: "Perché dovrei proprio convertire il WebP?",
      a: "Molte app, portali e sistemi datati non accettano il WebP. Convertire in PDF ti dà un file che si apre ovunque, ed è di solito proprio per questo che si vuole la conversione.",
    },
    {
      q: "La qualità dell’immagine si perde nella conversione?",
      a: "Convertire in PDF non aggiunge perdita, ma non può recuperare il dettaglio che il sito aveva già rimosso quando ha salvato il WebP. Il PDF sarà bello quanto lo è l’immagine di partenza.",
    },
    {
      q: "Le mie immagini vengono caricate?",
      a: "No. La conversione avviene nel tuo browser, sul tuo stesso dispositivo, quindi le tue immagini restano private.",
    },
    {
      q: "Posso combinare WebP con JPG e PNG?",
      a: "Sì. Lo strumento accetta tutti e tre insieme, quindi puoi costruire un unico PDF a partire da sorgenti di immagini miste.",
    },
    {
      q: "Lo strumento non legge il mio WebP — cosa faccio?",
      a: "Usa un browser aggiornato, dato che quelli vecchi non decodificano il WebP. In alternativa, l’app mobile PDF Editor può gestire la conversione.",
    },
  ],
  related: [
    { label: "Image to PDF — combina i file WebP nel tuo browser", path: "/image-to-pdf" },
    { label: "Compress PDF — riduci il risultato", path: "/compress-pdf" },
    { label: "Come convertire PNG in PDF", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "Come convertire JPG in PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
