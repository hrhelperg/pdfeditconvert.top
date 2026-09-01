import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-for-business-use",
  h1: "Come preparare un PDF per uso professionale (checklist finale)",
  description:
    "Prima che un PDF lasci l’ufficio: elimina le bozze, verifica l’impaginazione, correggi l’orientamento, incorpora i font e riduci il file. La verifica finale per i documenti che rappresentano la tua attività.",
  updated: "2026-05-29",
  intro: [
    "Un PDF che esce dalla tua attività è un piccolo ambasciatore. Porta con sé il tuo nome, la tua identità visiva, le tue scelte tipografiche e — fin troppo spesso — il nome file originale, tipo «Documento senza titolo (4).pdf», lasciato da chi lo ha aperto per primo la settimana scorsa. La differenza tra un PDF dilettantesco e uno professionale raramente è eclatante, ma quasi sempre si vede a colpo d’occhio.",
    "Preparare un PDF per uso professionale non è un’unica trasformazione, ma una checklist breve. Elimina le pagine di troppo, sistema la numerazione, correggi l’orientamento, controlla che i font siano incorporati, etichetta con chiarezza, comprimi con criterio, scegli un nome file utile. Ogni passaggio richiede pochi secondi, l’insieme richiede un minuto, e il documento arriva con l’aria di essere stato fatto apposta — perché lo è.",
    "Questa guida segue la checklist nell’ordine che intercetta prima i problemi più frequenti — lo stesso ordine che useresti per una consegna vera, in un martedì pomeriggio qualunque.",
  ],
  steps: [
    {
      title: "Elimina le pagine inutilizzate o di bozza",
      body: "Estrai pagine PDF ti permette di tenere solo le pagine che vuoi davvero inviare. Copertine segnaposto, pagine di ringraziamento vuote, vecchi allegati — tutto questo deve sparire dal file finale.",
    },
    {
      title: "Controlla l’ordine e la numerazione delle pagine",
      body: "Riordina pagine PDF se qualcosa è finito fuori sequenza dopo un’unione o una revisione. Controlla che i numeri di pagina visibili corrispondano all’ordine reale — chi legge nota subito una numerazione che non torna.",
    },
    {
      title: "Correggi l’orientamento",
      body: "Le pagine larghe (fogli di calcolo, grafici) vanno in orizzontale; tutto il resto in verticale. Ruota PDF raddrizza le scansioni o gli import arrivati storti. Un documento con orientamenti misti sembra rotto anche quando non lo è.",
    },
    {
      title: "Verifica che i font siano incorporati",
      body: "I font non incorporati vengono sostituiti da chi legge, a volte male. Ri-esporta dal sorgente con l’opzione «incorpora tutti i font» attiva, oppure stampa in PDF per fissare la resa così com’è.",
    },
    {
      title: "Imposta il titolo del file nei metadati",
      body: "Il testo mostrato nelle schede del browser e nella barra del titolo del lettore spesso non coincide con il nome del file. Imposta entrambi con attenzione — i clienti notano quando una scheda «Proposta» mostra in realtà «Senzanome.docx».",
    },
    {
      title: "Comprimi e assegna un nome per l’invio",
      body: "Comprimi PDF porta il file sotto i limiti tipici di mail e portali. Rinomina in NomeCliente_TipoDocumento_AAAA-MM-GG.pdf, così il destinatario riconosce il file dalla propria cartella download anche un anno dopo.",
    },
  ],
  tips: [
    "Scorri l’intero documento una volta allo zoom 100% prima di inviarlo. L’occhio nota sorprese che uno scorrimento veloce lascia passare.",
    "Applica una filigrana alle bozze, mai ai documenti finali — l’assenza della filigrana è già il segnale che quello è il documento definitivo.",
    "Elimina i vecchi metadati. Sia PDF Editor sia una nuova esportazione permettono di sostituire autore, azienda e cronologia delle modifiche che potrebbero trapelare dalle bozze.",
    "Se il documento ha campi modulo pensati per essere compilati, provali sul tipo di dispositivo a cui li stai inviando. Molti campi funzionano in Acrobat ma non nei browser.",
    "Controlla l’anteprima di stampa un’ultima volta. Se la stampa esce sbagliata da te, il destinatario avrà lo stesso problema.",
  ],
  mobileNote:
    "Le rifiniture dell’ultimo minuto — raddrizzare una scansione storta, togliere una pagina di bozza rimasta per sbaglio, ricomprimere per rientrare nel limite della mail — succedono dal telefono più spesso di quanto si ammetta. L’app PDF Editor gestisce tutto questo offline, così la consegna esce pulita anche dal Wi-Fi di un bar.",
  faq: [
    {
      q: "Qual è il passaggio che si salta più spesso?",
      a: "Impostare i metadati. Il nome del file e il titolo del documento mostrati in schede e intestazioni sono spesso un residuo della fase di bozza. Correggi entrambi prima di inviare.",
    },
    {
      q: "Quanto conta la compressione?",
      a: "Molto se il destinatario usa un portale con limiti stretti o una connessione lenta. Meno per una condivisione interna informale. Come regola, comprimi sempre: quasi mai fa danno.",
    },
    {
      q: "Devo incorporare i font in ogni PDF?",
      a: "Su tutto ciò che va a un cliente, sì. Sulle bozze interne, dove tutti hanno gli stessi font installati, è meno critico. Il costo di incorporarli è comunque minimo.",
    },
    {
      q: "Devo sempre inserire i numeri di pagina?",
      a: "Sulle consegne a più pagine, sì. Su un documento di una sola pagina, no. I numeri di pagina aiutano chi legge a orientarsi e a verificare che il documento sia completo.",
    },
    {
      q: "Esiste uno strumento che fa tutto questo in un solo passaggio?",
      a: "No, ed è voluto — ogni passaggio è una scelta consapevole, non una trasformazione automatica. Gli strumenti nel browser di questo sito ti permettono di fare ogni passaggio in pochi secondi, senza chiuderli in una scatola nera.",
    },
  ],
  related: [
    { label: "PDF per le aziende — contratti e flussi di lavoro", path: "/pdf-for-business" },
    { label: "Estrai pagine PDF — rifinisci le consegne finali", path: "/extract-pdf-pages" },
    { label: "Come condividere PDF con i clienti", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Come preparare un PDF prima di condividerlo", path: "/guides/how-to-prepare-pdf-before-sharing" },
  ],
  parentHub: { label: "PDF per le aziende — contratti e flussi di lavoro", path: "/pdf-for-business" },
};

export default content;
