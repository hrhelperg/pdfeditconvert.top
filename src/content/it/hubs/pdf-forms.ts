import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-forms",
  hero: {
    eyebrow: "Moduli PDF",
    h1: "Compila, firma e gestisci moduli PDF ovunque.",
    highlight: "moduli PDF",
    lead: "Moduli fiscali, domande, schede di ammissione, moduli di consenso — la maggior parte arriva come PDF. Scopri come funzionano davvero i moduli PDF, come compilare quelli interattivi e quelli non interattivi, e come risolvere i problemi più comuni, senza stampare nemmeno una pagina.",
    primaryCta: { label: "Apri l’app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Perché i moduli PDF mettono in difficoltà",
    paragraphs: [
      "Un modulo PDF sembra una cosa sola ma spesso ne è due. Alcuni sono interattivi: chi lo ha progettato ha aggiunto veri campi che puoi toccare e in cui puoi scrivere. Altri sono non interattivi: un modulo scansionato o stampato e poi salvato, senza alcun campo, dove devi aggiungere tu stesso il testo sopra. I due si comportano in modo completamente diverso, e gran parte della frustrazione legata ai moduli nasce proprio dal non sapere quale tipo hai davanti.",
      "Oltre a questo, i moduli si comportano in modi che i normali PDF non hanno. I campi spariscono nel visualizzatore sbagliato, le risposte scritte si rifiutano di salvarsi, un modulo si apre in sola lettura, oppure i valori che hai inserito non compaiono quando stampi. Nessuno di questi casi significa che il modulo sia rotto: sono problemi prevedibili con soluzioni altrettanto prevedibili, una volta capito cosa succede sotto il cofano.",
      "Questo hub raccoglie tutto in un unico posto: le basi di come funzionano i moduli, la procedura passo passo per compilarli da computer o da telefono, i flussi di lavoro aziendali per raccogliere informazioni dai clienti e una sezione di risoluzione dei problemi per quando un modulo non collabora. L’aspetto e il comportamento dei moduli possono variare tra i diversi visualizzatori PDF, quindi le guide restano oneste su cosa funziona ovunque e cosa dipende dallo strumento con cui apri il file.",
    ],
  },
  features: {
    heading: "Cosa puoi fare con i moduli PDF",
    items: [
      {
        icon: "FileText",
        title: "Compila i campi interattivi",
        body: "Tocca un vero campo del modulo e scrivi. Passa da un campo all’altro, seleziona le caselle di controllo e scegli dai menu a tendina dove chi lo ha progettato li ha previsti.",
      },
      {
        icon: "TextCursorInput",
        title: "Completa i moduli non interattivi",
        body: "Nessun campo? Posiziona tu stesso testo e segni di spunta ovunque sulla pagina, esattamente dove va ogni risposta su un modulo scansionato o stampato.",
      },
      {
        icon: "PenLine",
        title: "Firma dove serve",
        body: "Aggiungi una firma scritta o autografa nell’area della firma, che il campo sia interattivo o solo una riga su un modulo non interattivo.",
      },
      {
        icon: "Save",
        title: "Salva una copia completata",
        body: "Esporta una versione finita da rimandare subito indietro, e conserva l’originale vuoto per la prossima volta che ti serve.",
      },
      {
        icon: "Lock",
        title: "Appiattisci prima di inviare",
        body: "Blocca le tue risposte nella pagina, così non possono essere modificate o cancellate per errore dal visualizzatore di chi le riceve.",
      },
      {
        icon: "Smartphone",
        title: "Fai tutto dal telefono",
        body: "I moduli arrivano via email e tornano indietro allo stesso modo: compilarli e firmarli dal telefono è uno dei compiti PDF più autenticamente mobili che esistano.",
      },
    ],
  },
  steps: {
    heading: "Compilare un modulo PDF, dall’inizio alla fine",
    items: [
      {
        title: "Apri il modulo e controlla il tipo",
        body: "Apri il PDF e tocca dove dovrebbe andare una risposta. Se compare un cursore, ha campi interattivi. Se non succede nulla, è un modulo non interattivo e dovrai aggiungere il testo sopra.",
      },
      {
        title: "Compila i campi",
        body: "Per i moduli interattivi, tocca e scrivi, passando da un campo all’altro. Per quelli non interattivi, usa lo strumento testo per posizionare le risposte con precisione su ogni riga.",
      },
      {
        title: "Gestisci caselle di controllo, date e firme",
        body: "Seleziona le caselle o posiziona un segno di spunta, aggiungi la data dove richiesto e usa lo strumento firma per qualsiasi area di firma.",
      },
      {
        title: "Controlla ogni campo obbligatorio",
        body: "Ripercorri il modulo alla ricerca di spazi vuoti. Un modulo respinto per una data mancante costa più tempo di quanto ne avrebbe richiesto il controllo.",
      },
      {
        title: "Salva, appiattisci e invia",
        body: "Esporta una copia completata, appiattiscila così le risposte restano bloccate, e rimandala indietro via email o caricamento. Conserva l’originale vuoto.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Moduli dal telefono",
    body: "Un modulo arriva nella tua posta mentre sei lontano dalla scrivania. Con un telefono puoi aprirlo, compilare i campi o aggiungere testo a una scansione non interattiva, firmarlo e rimandarlo indietro prima ancora di trovare una sedia: senza stampante, senza scanner, senza aspettare di tornare a casa. L’app PDF Editor rileva i campi interattivi dove esistono, ti permette di posizionare testo e segni di spunta ovunque quando non esistono, e mantiene i dati personali del modulo sul tuo dispositivo.",
  },
  faq: [
    {
      q: "Qual è la differenza tra un modulo PDF interattivo e uno non interattivo?",
      a: "Un modulo interattivo ha campi che chi lo ha progettato ha inserito: ne tocchi uno e compare un cursore, così puoi scrivere. Un modulo non interattivo è essenzialmente l’immagine di un modulo senza alcun campo, quindi aggiungi tu il testo sopra. Puoi compilare entrambi; richiedono solo una gestione leggermente diversa.",
    },
    {
      q: "Devo stampare un modulo PDF per compilarlo?",
      a: "Quasi mai. Sia i moduli interattivi sia quelli non interattivi possono essere completati digitalmente: scrivi nei campi o posiziona il testo sulla pagina, poi firma ed esporta. Stampare conviene solo se chi lo riceve richiede esplicitamente una firma autografa su carta.",
    },
    {
      q: "Perché non riesco a scrivere in alcuni moduli PDF?",
      a: "Di solito è una di queste tre cose: il modulo è non interattivo (nessun campo su cui scrivere), il tuo visualizzatore non supporta i campi dei moduli, oppure il modulo è di sola lettura o protetto. Le guide di risoluzione dei problemi in questo hub analizzano ogni causa.",
    },
    {
      q: "Un modulo che compilo apparirà uguale a chi lo riceve?",
      a: "Nella maggior parte dei casi sì, ma non sempre: l’aspetto dei moduli può variare tra i diversi visualizzatori PDF. Appiattire il modulo completato prima di inviarlo blocca le risposte nella pagina, così vengono mostrate in modo coerente ovunque venga aperto.",
    },
    {
      q: "Compilare un modulo online è privato?",
      a: "Dipende dallo strumento. L’app PDF Editor compila i moduli sul tuo dispositivo, quindi le informazioni personali che inserisci non vengono caricate da nessuna parte. Anche gli strumenti basati su browser che funzionano localmente mantengono il file sul tuo dispositivo.",
    },
  ],
  related: [
    { label: "Cos’è un modulo PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Come compilare un modulo PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Come creare un PDF compilabile",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "Il modulo PDF non funziona? Inizia da qui",
      path: "/guides/pdf-form-not-working",
    },
    { label: "PDF Editor — compila e firma da mobile", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Compila e firma moduli PDF dal telefono.",
    sub: "Gratis su iOS e Android. Niente da caricare.",
  },
};

export default content;
