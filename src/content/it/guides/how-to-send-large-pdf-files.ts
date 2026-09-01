import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-large-pdf-files",
  h1: "Come inviare un PDF pesante (5 metodi affidabili)",
  description:
    "Cinque modi affidabili per inviare un PDF troppo grande per la mail — comprimere, dividere, link in cloud e altro — e come scegliere tra loro.",
  updated: "2026-05-23",
  intro: [
    "La mail è dove i PDF pesanti vengono respinti. I limiti sono reali e inflessibili — 25 MB su Gmail, circa 20 MB su Outlook, a volte meno dal lato di chi riceve — e un documento pieno di scansioni li supera facilmente. La soluzione non è un solo trucco: è conoscere la manciata di opzioni affidabili e sapere quale si adatta al tuo file e a chi lo riceve.",
    "Questa guida elenca le strade pratiche, più o meno nell’ordine in cui la maggior parte delle persone dovrebbe provarle: rimpicciolirlo, dividerlo o condividere un link. Due di queste passano da strumenti gratuiti nel browser che funzionano sul tuo dispositivo senza caricare nulla; la terza riguarda la scelta di un metodo di condivisione che rispetti la sensibilità del documento.",
    "L’obiettivo è un file che arrivi integro e leggibile, senza che tu ne rovini la qualità o condivida troppo per sbaglio tramite un servizio di cui non ti fidi.",
  ],
  steps: [
    {
      title: "Per prima cosa, prova a comprimerlo",
      body: "Passa il file nello strumento Comprimi PDF. Le scansioni e i PDF ricchi di immagini spesso scendono sotto i limiti della mail con un solo passaggio: è la soluzione più semplice possibile.",
    },
    {
      title: "Se è ancora troppo pesante, dividilo",
      body: "Usa lo strumento Dividi PDF per inviare il documento come due o tre file più piccoli. Due metà leggibili valgono più di un unico file compresso fino a diventare illeggibile.",
    },
    {
      title: "Per i file molto pesanti, condividi un link cloud",
      body: "Carica il file su uno spazio cloud che controlli tu e invia un link. In questo modo aggiri del tutto i limiti della mail e puoi revocare l’accesso in seguito — ma per i documenti sensibili scegli un servizio di cui ti fidi.",
    },
    {
      title: "Controlla anche il limite di chi riceve, non solo il tuo",
      body: "Il tuo provider potrebbe permetterti di inviare 25 MB, mentre quello del destinatario rifiuta tutto ciò che supera i 10 MB. Nel dubbio, punta in basso o usa un link.",
    },
    {
      title: "Verifica che il file finale sia della dimensione giusta e pulito",
      body: "Qualunque strada tu scelga, apri prima il file finale — pagine corrette, qualità leggibile, niente che non dovrebbe esserci.",
    },
  ],
  tips: [
    "Procedi in ordine: comprimi, poi dividi, poi condividi un link. Ogni passaggio richiede più impegno del precedente, quindi fermati appena il file riesce a partire.",
    "Un link cloud è di solito la risposta più onesta per i file davvero enormi — ma per i documenti riservati scegli un servizio di cui ti fidi e revoca l’accesso quando non serve più.",
    "La compressione trasforma le pagine in immagini ed elimina il testo selezionabile. Se chi riceve deve copiare del testo, invia l’originale tramite un link invece di un allegato compresso pesantemente.",
    "Dividere lungo i confini naturali del documento (capitoli, sezioni, firmato contro non firmato) è più utile per chi riceve che tagliare a una pagina qualsiasi.",
    "Non inviare documenti sensibili a un servizio gratuito di terze parti per «file pesanti» di cui non hai mai sentito parlare solo per aggirare un limite di dimensione: scambi un piccolo fastidio con un vero rischio per la privacy.",
  ],
  mobileNote:
    "Quando il file troppo pesante è sul telefono, l’app PDF Editor comprime e divide offline e passa il risultato direttamente alla tua app di mail o messaggistica — così puoi inviare una scansione pesante da dove ti trovi senza doverla prima caricare su un servizio sconosciuto.",
  faq: [
    {
      q: "Qual è il modo più semplice per inviare un PDF troppo pesante?",
      a: "Comprimilo prima di tutto. Le scansioni e i PDF ricchi di immagini scendono spesso sotto i limiti della mail con un solo passaggio, evitando del tutto la divisione o i link.",
    },
    {
      q: "Quando conviene dividere invece di comprimere?",
      a: "Quando la sola compressione non riesce a rimpicciolire abbastanza il file senza rovinarne la qualità. Due o tre file leggibili sono meglio di uno solo degradato.",
    },
    {
      q: "I link cloud sono sicuri per i documenti sensibili?",
      a: "Possono esserlo, se usi un servizio di cui ti fidi e revochi l’accesso quando hai finito. Evita i servizi gratuiti sconosciuti per «file pesanti» quando si tratta di qualcosa di riservato.",
    },
    {
      q: "Come faccio a sapere se chi riceve può ricevere il file?",
      a: "Il suo limite potrebbe essere più basso del tuo. Se non sei sicuro, comprimi ben sotto i 10 MB oppure invia un link, piuttosto che rischiare un rifiuto silenzioso.",
    },
    {
      q: "Comprimere per l’invio danneggia il documento?",
      a: "È una compressione con perdita ed elimina il testo selezionabile. Per i documenti in cui contano la qualità o la ricercabilità del testo, condividi l’originale tramite un link invece di schiacciarlo in un allegato.",
    },
  ],
  related: [
    { label: "Comprimi PDF — rimpicciolisci per inviare", path: "/compress-pdf" },
    { label: "Dividi PDF — invialo in più parti", path: "/split-pdf" },
    { label: "Come ridurre la dimensione di un PDF per la mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Come condividere un PDF dal telefono", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Comprimi PDF", path: "/compress-pdf" },
};

export default content;
