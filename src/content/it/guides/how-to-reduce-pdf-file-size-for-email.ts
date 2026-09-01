import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-file-size-for-email",
  h1: "Come ridurre la dimensione di un PDF per la mail",
  description:
    "Porta un PDF sotto i limiti degli allegati di Gmail e Outlook. I limiti reali, perché le scansioni li superano, e come ridurre un file così che si possa inviare.",
  updated: "2026-05-23",
  intro: [
    "I limiti per gli allegati di posta non si sono mossi granché negli anni, ma i documenti che alleghiamo continuano ad appesantirsi. Gmail ti ferma a 25 MB. Outlook traccia il confine intorno ai 20 MB. Il server del destinatario potrebbe avere un limite ancora più basso. Così alleghi un contratto scansionato o un report pieno di foto, premi invia, e rimbalza — o peggio, fallisce in silenzio.",
    "Questa guida serve a ottenere un PDF abbastanza piccolo da essere effettivamente inviato. Usa lo strumento gratuito Compress PDF, che gira nel tuo browser senza caricare nulla, e copre le decisioni pratiche: quale livello di compressione, quando comprimere invece di dividere, e cosa fare quando nemmeno la compressione basta.",
    "La buona notizia è che i file più a rischio di rimbalzare — scansioni e PDF ricchi di immagini — sono esattamente quelli che si comprimono di più.",
  ],
  steps: [
    {
      title: "Controlla quanto sei sopra il limite",
      body: "Prendi nota della dimensione del file e del tuo obiettivo. Gmail si ferma a 25 MB, Outlook intorno ai 20 MB, e alcuni server aziendali più in basso. Conoscere il divario ti dice quanto essere aggressivo.",
    },
    {
      title: "Apri lo strumento Compress PDF",
      body: "Vai allo strumento Compress PDF nel tuo browser. Elabora il file sul tuo dispositivo — nulla viene caricato, il che conta per i documenti che invierai via mail.",
    },
    {
      title: "Aggiungi il PDF e scegli un livello",
      body: "Inizia con Consigliato. Bilancia dimensione e qualità ed è sufficiente per la maggior parte dei file. Scendi a Forte solo se sei ancora sopra il limite.",
    },
    {
      title: "Comprimi e leggi la nuova dimensione",
      body: "Avvialo e controlla i valori prima e dopo. I documenti scansionati spesso scendono ben sotto i 25 MB in un solo passaggio.",
    },
    {
      title: "Se è ancora troppo grande, dividilo",
      body: "Quando un singolo documento non riesce a diventare abbastanza piccolo, usa lo strumento Split PDF per inviarlo come due o tre file più piccoli — spesso più pratico che sacrificare ulteriormente la qualità.",
    },
    {
      title: "Allega e invia",
      body: "Allega il file compresso (o diviso). Aprilo una volta prima per confermare che si legga ancora bene al livello scelto.",
    },
  ],
  tips: [
    "Il livello Consigliato supera la maggior parte dei limiti di mail con qualità da vendere. Riserva Forte ai file ancora sopra il limite dopo il primo passaggio.",
    "Le scansioni e i PDF ricchi di foto si riducono di più; un documento solo testo è già piccolo, quindi se è enorme, cerca immagini o font incorporati come causa.",
    "Se la sola compressione non basta a raggiungere l’obiettivo, dividere il documento è meglio che degradarlo fino a renderlo illeggibile — due metà leggibili battono un intero rovinato.",
    "La compressione trasforma le pagine in immagini, quindi la copia inviata non avrà testo selezionabile. Se il destinatario deve copiare il testo, invia l’originale in altro modo e via mail un’anteprima compressa.",
    "Quando anche un file compresso è troppo grande, un link a un cloud condiviso è la risposta onesta — vedi la guida sull’invio di file PDF di grandi dimensioni.",
  ],
  mobileNote:
    "La maggior parte degli allegati rimbalzati capita quando invii un documento dal telefono tra un’altra cosa e l’altra. L’app PDF Editor comprime offline e condivide direttamente nella tua app di posta, così una scansione troppo grande diventa un file inviabile senza uscire dalla tua casella.",
  faq: [
    {
      q: "Qual è il limite reale per gli allegati di posta?",
      a: "Gmail si ferma a 25 MB, Outlook intorno ai 20 MB, e alcuni server di posta aziendali ancora più in basso. Punta comodamente sotto il limite del tuo destinatario, non solo il tuo.",
    },
    {
      q: "Perché il mio PDF è troppo grande per essere inviato via mail?",
      a: "Quasi sempre pagine scansionate o foto incorporate. Ogni pagina scansionata è essenzialmente un’immagine ad alta risoluzione, e già poche superano rapidamente i 25 MB.",
    },
    {
      q: "Quale livello di compressione dovrei usare per la mail?",
      a: "Inizia con Consigliato — supera la maggior parte dei limiti mantenendo il documento leggibile. Passa a Forte solo se sei ancora sopra il limite dopo il primo tentativo.",
    },
    {
      q: "Il mio file viene caricato quando lo comprimo?",
      a: "No. Lo strumento Compress PDF gira nel tuo browser, sul tuo dispositivo, quindi il documento resta privato anche mentre lo prepari per l’invio.",
    },
    {
      q: "E se la compressione ancora non basta?",
      a: "Dividi il PDF in file più piccoli, oppure condividi un link cloud invece di un allegato. Entrambi battono comprimere un documento fino a renderlo illeggibile.",
    },
  ],
  related: [
    { label: "Compress PDF — riduci per la mail", path: "/compress-pdf" },
    { label: "Come inviare file PDF di grandi dimensioni", path: "/guides/how-to-send-large-pdf-files" },
    { label: "Come comprimere un PDF online senza caricarlo", path: "/guides/how-to-compress-pdf-online" },
    { label: "Come dividere un PDF in file separati", path: "/guides/how-to-split-pdf-files" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
