import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blurry",
  h1: "Perché il mio PDF è sfocato? Risoluzione, compressione e scansione",
  description:
    "Un PDF sfocato viene da una scansione a bassa risoluzione, una compressione troppo aggressiva o un’esportazione andata male — mai dal formato in sé. Come capire la tua causa e recuperare la nitidezza.",
  updated: "2026-05-29",
  intro: [
    "Il formato PDF di per sé non sfoca nulla. Contiene senza problemi testo vettoriale nitidissimo e immagini ad alta risoluzione. Quindi quando un PDF appare sfocato, sgranato o pixelato, la sfocatura viene da qualcosa di specifico: un’acquisizione a bassa risoluzione, una compressione spinta troppo oltre, o un’impostazione di esportazione che ha appiattito un contenuto nitido in bitmap.",
    "Capire quale di queste cause riguarda il tuo file è importante, perché le soluzioni sono completamente diverse. Non puoi «decomprimere» un file già compresso, ma puoi esportarlo di nuovo dall’origine, riscansionarlo a una risoluzione migliore, o scegliere uno strumento di conversione diverso. E per alcuni file, la sfocatura c’è solo sullo schermo — l’originale è ancora lì alla piena qualità, solo visualizzato in modo ridotto dal lettore.",
    "Questa guida separa le cause e ti guida alla soluzione pratica per ciascuna, incluso il caso in cui non resta altro da fare che tornare al documento di origine.",
  ],
  steps: [
    {
      title: "Ingrandisci e guarda i bordi",
      body: "Bordi nitidi sul testo ma sfocati sulle immagini significa che il testo è vettoriale (pulito) e solo le foto sono degradate — di solito per via della compressione. Testo sfocato significa che l’intera pagina è un’immagine raster, il che indica una scansione o un’esportazione stampata come immagine.",
    },
    {
      title: "Controlla la risoluzione di acquisizione originale",
      body: "Le scansioni sotto i 150 DPI appaiono sfocate in ogni caso. 200–300 DPI è l’intervallo sicuro per i documenti che leggerai a schermo; 600 è eccessivo per tutto tranne l’archiviazione a lungo termine e la stampa di foto.",
    },
    {
      title: "Verifica se la compressione è stata eccessiva",
      body: "I file ridotti con una compressione «estrema» spesso sembrano a posto allo zoom 100% e terribili al 200%. Se hai l’originale prima della compressione, puoi comprimerlo di nuovo con un’impostazione più leggera — lo strumento Comprimi PDF ti permette di scambiare dimensione con nitidezza.",
    },
    {
      title: "Esporta di nuovo dall’origine, se ce l’hai",
      body: "I documenti creati in Word, Pages, Google Docs o strumenti di grafica andrebbero esportati come PDF direttamente dal file di origine, non stampati in PDF da uno screenshot. L’esportazione diretta mantiene il testo vettoriale e nitido.",
    },
    {
      title: "Riscansiona con impostazioni più nitide",
      body: "Se il problema è una scansione e hai ancora il documento cartaceo, rifalla a 300 DPI con una buona illuminazione. Le scansioni da telefono migliorano moltissimo con una sola pagina appoggiata piatta e una luce uniforme — un’acquisizione pulita batte qualsiasi ritocco successivo.",
    },
    {
      title: "Verifica che il file non venga semplicemente ridotto a schermo",
      body: "Alcuni lettori riducono la risoluzione per motivi di prestazioni, e sembrano sfocati finché non ingrandisci. Esporta una pagina in PNG con PDF in immagini a una scala di 2× o 3× — se il PNG è nitido, il tuo lettore ti stava ingannando.",
    },
  ],
  tips: [
    "Il testo che riesci a selezionare con il cursore è testo vettoriale e non dovrebbe essere sfocato. Se lo è, il tuo lettore lo sta visualizzando in modo ridotto — prova un lettore diverso prima di esportare di nuovo.",
    "Gli screenshot da telefono inseriti in un documento sono già a bassa risoluzione. In un PDF sembreranno sempre sfocati; non c’è soluzione se non riacquisirli a una dimensione maggiore.",
    "Non comprimere un file due volte. Compressioni ripetute sommano la sfocatura. Conserva l’originale, comprimi una sola volta per condividere, e archivia il file di partenza.",
    "I PDF ricchi di immagini JPEG si sfocano più di quelli ricchi di PNG, a parità di compressione — il JPEG è per natura una compressione con perdita. Gli screenshot in PNG restano nitidi più a lungo.",
    "Se hai solo una versione sfocata, l’OCR a volte riesce a recuperare testo leggibile anche quando l’immagine sembra sgranata. Il testo risulterà pulito anche se l’immagine non lo è.",
  ],
  mobileNote:
    "I PDF acquisiti da telefono si sfocano più spesso per il tremolio della mano, la scarsa illuminazione o un’inquadratura non centrata. Il flusso di scansione dell’app PDF Editor include il rilevamento automatico dei bordi e la stabilizzazione, così un solo scatto stabile per pagina produce un documento nitido già al primo tentativo.",
  faq: [
    {
      q: "La sfocatura è causata dal formato PDF in sé?",
      a: "No. Il PDF salva il testo come vettori e le immagini alla loro risoluzione di origine. La sfocatura viene dall’origine — DPI bassi, compressione aggressiva o un’esportazione da screenshot.",
    },
    {
      q: "Posso rendere più nitido un PDF sfocato dopo che è già così?",
      a: "Solo in minima parte. Alcune elaborazioni delle immagini possono simulare nitidezza sulle foto, ma non puoi aggiungere dettagli che non sono mai stati catturati. La soluzione onesta è rifare il passaggio di origine.",
    },
    {
      q: "Perché il mio PDF compresso è sfocato solo in alcune pagine?",
      a: "La compressione colpisce più duramente le pagine ricche di immagini. Le pagine di solo testo restano nitide. Se solo alcune pagine sono sfocate, sono quelle con foto, grafici o scansioni.",
    },
    {
      q: "Quale risoluzione di scansione dovrei usare?",
      a: "200–300 DPI per i documenti che leggerai a schermo. 300 DPI per tutto quello che potresti stampare. 600 DPI solo per foto e archiviazione a lungo termine.",
    },
    {
      q: "Perché il PDF sembra a posto al 100% ma sfocato al 200%?",
      a: "O è stato trasformato in immagine a bassa risoluzione, o compresso oltre il punto in cui l’ingrandimento rivela la perdita di qualità. Non c’è modo di recuperare il dettaglio senza esportare di nuovo.",
    },
  ],
  related: [
    { label: "Comprimi PDF — scegli impostazioni più leggere per un risultato più nitido", path: "/compress-pdf" },
    { label: "PDF in immagini — esporta le pagine ad alta risoluzione", path: "/pdf-to-images" },
    { label: "Migliori impostazioni di compressione PDF", path: "/guides/best-pdf-compression-settings" },
    { label: "Come migliorare la qualità di un PDF scansionato", path: "/guides/how-to-fix-scanned-pdf-quality" },
  ],
  parentHub: { label: "PDF in immagini — esportazioni nitide", path: "/pdf-to-images" },
};

export default content;
