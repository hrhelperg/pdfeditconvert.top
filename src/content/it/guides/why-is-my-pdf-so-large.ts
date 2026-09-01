import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-so-large",
  h1: "Perché il mio PDF è così pesante? Cause e soluzioni",
  description:
    "Le vere ragioni per cui un PDF diventa enorme — scansioni, foto incorporate, font e altro — e la soluzione giusta per ognuna, con strumenti gratuiti del browser.",
  updated: "2026-05-23",
  intro: [
    "Un documento di dieci pagine non ha alcun motivo per pesare 60 MB, eppure i PDF si gonfiano di continuo. Prima di ricorrere a uno strumento di compressione, vale la pena capire perché un file è diventato così grande — perché la soluzione giusta dipende dalla causa, e quella sbagliata può rovinare un documento che non aveva bisogno di essere compresso.",
    "Questa guida è una breve diagnosi. Ripercorre i soliti colpevoli dietro a un PDF gonfio, come capire con quale hai a che fare, e la risposta più efficace per ciascuno. La maggior parte delle soluzioni usa gli strumenti gratuiti da browser di questo sito, tutti funzionanti sul tuo dispositivo senza caricare nulla.",
    "Alla fine saprai se il tuo file ha bisogno di compressione, di rimozione di pagine, o semplicemente di essere riesportato dalla fonte — e smetterai di comprimere documenti per abitudine quando non serve.",
  ],
  steps: [
    {
      title: "Sospetta prima le pagine scansionate",
      body: "Le scansioni sono la causa numero uno. Ogni pagina scansionata è un’immagine a piena risoluzione, quindi poche di esse superano di gran lunga un documento di testo. Se il tuo PDF viene da uno scanner o dalla fotocamera del telefono, è quasi certamente questo il motivo.",
    },
    {
      title: "Controlla foto e grafiche incorporate",
      body: "Foto ad alta risoluzione, screenshot e grafici inseriti in un documento portano con sé tutti i loro dati in pixel. Un report con una dozzina di immagini grandi può essere enorme anche se il testo è breve.",
    },
    {
      title: "Considera font incorporati e asset di design",
      body: "I documenti che incorporano più famiglie di font complete, o che sono stati esportati da software di design pesanti, portano un peso extra in font e asset vettoriali di cui il contenuto non sembra avere visibilmente bisogno.",
    },
    {
      title: "Cerca contenuti residui o nascosti",
      body: "Pagine duplicate da un’unione fatta con poca cura, inserti bianchi dello scanner, o cronologia delle revisioni possono appesantire un file. Rimuovere le pagine che non ti servono a volte è il modo più semplice per guadagnare spazio.",
    },
    {
      title: "Applica la soluzione giusta",
      body: "Per scansioni e foto, comprimi con lo strumento Compress PDF. Per l’ingombro, elimina pagine con lo strumento Extract PDF Pages. Per un documento solo testo che è misteriosamente enorme, riesportalo dall’applicazione sorgente.",
    },
    {
      title: "Ricontrolla la dimensione",
      body: "Conferma che il file sia atterrato dove ti serve. Se è ancora grande dopo aver compresso un file ricco di scansioni, il passo successivo è un livello più forte o dividere il documento.",
    },
  ],
  tips: [
    "Fai corrispondere la soluzione alla causa: la compressione aiuta i file ricchi di immagini; non fa quasi nulla per un PDF solo testo che è grande per un altro motivo.",
    "Un documento solo testo sorprendentemente pesante di solito ha font incorporati o oggetti nascosti — riesportarlo dall’applicazione sorgente spesso lo riduce in modo più pulito della compressione.",
    "Scansionare a 600 DPI quando 200-300 basterebbero è una causa comune ed evitabile di file enormi. Abbassa la risoluzione di scansione alla fonte per i documenti che condividerai.",
    "Rimuovere le pagine non necessarie può ridurre la dimensione senza toccare affatto la qualità — vale la pena controllarlo prima di comprimere.",
    "Non comprimere per riflesso. Se un file è già di dimensioni ragionevoli, comprimerlo lo degrada soltanto senza un guadagno reale.",
  ],
  mobileNote:
    "Le scansioni da telefono sono l’imputato classico — immagini ad alta risoluzione salvate come PDF. L’app PDF Editor ti lascia scansionare a una risoluzione sensata fin dall’inizio e comprimere offline, così i documenti non si gonfiano in partenza e si riducono facilmente quando succede.",
  faq: [
    {
      q: "Cosa rende grande un PDF la maggior parte delle volte?",
      a: "Le pagine scansionate e le foto incorporate. Ognuna è un’immagine a piena risoluzione, quindi già una manciata di esse supera di molte volte un lungo documento di testo.",
    },
    {
      q: "Perché il mio PDF solo testo è comunque grande?",
      a: "Probabilmente font incorporati, oggetti nascosti, o contenuti rimasti da modifiche e unioni. Riesportare dall’applicazione sorgente, o rimuovere le pagine non necessarie, spesso aiuta più della compressione.",
    },
    {
      q: "La compressione riduce sempre il mio file?",
      a: "No. La compressione agisce sui dati immagine, quindi i PDF ricchi di scansioni o foto si riducono molto mentre i file solo testo o vettoriali cambiano a malapena. Se un file di testo è enorme, la causa è altrove.",
    },
    {
      q: "Rimuovere pagine riduce la dimensione?",
      a: "Sì, soprattutto se le pagine rimosse sono scansioni o immagini. Eliminare l’ingombro con lo strumento Extract PDF Pages può ridurre la dimensione senza intaccare la qualità di ciò che resta.",
    },
    {
      q: "Come evito che le scansioni siano così grandi?",
      a: "Scansiona a 200-300 DPI invece di 600 per i documenti che condividerai, e i file partiranno molto più piccoli. L’app PDF Editor ti lascia controllare in anticipo la qualità di scansione.",
    },
  ],
  related: [
    { label: "Compress PDF — riduci i file ricchi di immagini", path: "/compress-pdf" },
    { label: "Extract PDF Pages — rimuovi l’ingombro", path: "/extract-pdf-pages" },
    { label: "Come comprimere un PDF scansionato", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Le migliori impostazioni di compressione PDF", path: "/guides/best-pdf-compression-settings" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
