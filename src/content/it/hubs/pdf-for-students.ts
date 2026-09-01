import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-students",
  hero: {
    eyebrow: "PDF per studenti",
    h1: "Strumenti PDF pensati per come gli studenti studiano davvero.",
    highlight: "davvero",
    lead: "Annota le slide delle lezioni, evidenzia le letture, unisci articoli di ricerca, scansiona le pagine dei libri di testo e firma moduli — dal telefono o dal tablet che già usi.",
    primaryCta: { label: "Apri l’app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Perché i PDF restano al centro del metodo di studio",
    paragraphs: [
      "I docenti pubblicano le slide come PDF. Le dispense del corso arrivano come PDF. Le tracce dei compiti sono PDF. I programmi dei corsi sono PDF. Eppure il visualizzatore predefinito del telefono non permette di evidenziare, annotare o organizzare correttamente questi file, e l’alternativa a cui ricorre la maggior parte degli studenti è fare uno screenshot delle pagine e salvarlo in Note, perdendo ricercabilità, struttura e la possibilità di tornare alla fonte.",
      "Un vero editor PDF per il telefono permette agli studenti di trattare le letture come tratterebbero un libro di testo — evidenziazioni, note a margine, segnalibri — ma con ricercabilità e possibilità di condivisione. Le stesse letture annotate si aprono su ogni dispositivo, così il lavoro fatto sull’autobus è ancora lì quando ti siedi in biblioteca.",
      "Abbinato a una penna digitale su un tablet, questo metodo può sostituire gran parte degli appunti cartacei per il materiale dei corsi. Il costo è il prezzo dell’app (gratis per le funzioni di base) e il tempo speso per configurarla una volta sola.",
    ],
  },
  features: {
    heading: "Pensato per le sessioni di studio",
    items: [
      {
        icon: "Highlighter",
        title: "Evidenzia e annota",
        body: "Evidenziatore giallo, note a mano libera, commenti, sottolineature — esattamente quello che faresti su carta, ma ricercabile.",
      },
      {
        icon: "Bookmark",
        title: "Segnalibri e struttura",
        body: "Segna i capitoli o le sezioni a cui vuoi tornare. Passa da uno all’altro con un tocco mentre scrivi un saggio.",
      },
      {
        icon: "Combine",
        title: "Unisci le letture",
        body: "Combina gli articoli della settimana in un unico documento da leggere offline in treno, in aereo o durante il tragitto.",
      },
      {
        icon: "ScanLine",
        title: "Scansiona le pagine dei libri",
        body: "Cattura le pagine di libri fisici in PDF ricercabili. Utile per citare passaggi nei saggi quando hai solo la copia cartacea.",
      },
      {
        icon: "FileSignature",
        title: "Firma i moduli all’istante",
        body: "Domande di borse di studio, fogli firma, conferme di iscrizione — firma e restituisci senza stampare.",
      },
      {
        icon: "Layers",
        title: "Organizza per corso",
        body: "Raggruppa i documenti per materia. Spostali durante tutto il semestre senza perdere le tue annotazioni.",
      },
    ],
  },
  steps: {
    heading: "Un metodo di studio semplice",
    items: [
      {
        title: "Raccogli le letture della settimana",
        body: "Scarica o condividi ogni PDF in PDF Editor dal portale della tua università, da Canvas, Moodle o dall’email.",
      },
      {
        title: "Uniscile in un unico file per settimana di corso",
        body: "Usa lo strumento Unisci per combinarle in «Settimana 3 letture - Microeconomia.pdf» per l’uso offline.",
      },
      {
        title: "Annota mentre leggi",
        body: "Evidenzia i passaggi importanti, aggiungi note a margine, lascia commenti dove hai domande da approfondire. Le note si salvano sul posto.",
      },
      {
        title: "Usa le evidenziazioni quando scrivi i saggi",
        body: "Torna alle sezioni evidenziate tramite il pannello dei segnalibri quando citi le fonti. Il testo sotto l’evidenziazione è selezionabile e copiabile.",
      },
      {
        title: "Scansiona e unisci gli appunti scritti a mano",
        body: "Quando hai preso appunti su carta, scansionali nella stessa libreria di PDF Editor, così hai tutto in un unico posto ricercabile.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Studiare ovunque",
    body: "Lezioni, biblioteca, treno, bar — il posto in cui uno studente legge raramente è una scrivania. Un editor PDF pensato prima di tutto per il telefono significa avere la stessa copia annotata in mano ovunque tu sia. L’ora che avresti perso aspettando l’autobus diventa tempo di lettura produttivo.",
  },
  faq: [
    {
      q: "L’app è gratis per gli studenti?",
      a: "Sì. Annotazione, unione, scansione e firma di base sono gratuite senza limiti giornalieri. Alcune funzioni Pro (OCR in batch, crittografia avanzata) sono a pagamento, ma il livello gratuito copre tutto ciò di cui uno studente ha tipicamente bisogno.",
    },
    {
      q: "Le mie evidenziazioni si sincronizzano tra i dispositivi?",
      a: "Se salvi il file su iCloud Drive, Google Drive o qualsiasi altro provider cloud, le modifiche si sincronizzano ovunque venga aperto lo stesso file. I file solo locali restano sul dispositivo su cui sono stati modificati.",
    },
    {
      q: "Posso scansionare legalmente una pagina di un libro?",
      a: "Per lo studio personale, nella maggior parte delle giurisdizioni sì (le norme sull’uso corretto in genere permettono brevi estratti a scopo di studio). Fai attenzione a distribuire le copie scansionate: è una questione diversa e spesso non consentita.",
    },
    {
      q: "L’app funziona bene su iPad e tablet Android?",
      a: "Sì. I tablet con input a penna digitale (Apple Pencil, S Pen) rendono l’annotazione molto più simile alla carta rispetto ai telefoni con solo il dito. Se hai un tablet, usalo per le sessioni di lettura.",
    },
    {
      q: "Posso esportare i miei appunti annotati?",
      a: "Sì. Il PDF annotato può essere condiviso così com’è (con le annotazioni incorporate) oppure appiattito in un PDF definitivo. Puoi anche estrarre solo il testo evidenziato per le citazioni.",
    },
  ],
  related: [
    {
      label: "Come condividere gli appunti di studio come PDF",
      path: "/guides/how-to-share-study-notes-as-pdf",
    },
    {
      label: "La migliore app PDF per studenti",
      path: "/guides/best-pdf-app-for-students",
    },
    { label: "Scansiona in PDF", path: "/scan-to-pdf" },
  ],
  appCta: {
    heading: "Studia con un vero toolkit PDF.",
    sub: "Gratis su iOS e Android. Le annotazioni si sincronizzano via iCloud o Drive.",
  },
};

export default content;
