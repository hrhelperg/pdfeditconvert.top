import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";

/**
 * Italian route manifest for the guide library.
 *
 * Slugs follow Italian search phrasing, question/infinitive form
 * ("come-comprimere-un-pdf") matching how an Italian user actually
 * searches. Terminology policy: docs/localization/it-terminology.md.
 */
export const IT_GUIDE_ROUTES: readonly LocaleRouteEntry[] = [
  {
    id: "guides/how-to-edit-pdf-on-iphone",
    slug: "guide/come-modificare-un-pdf-su-iphone",
    title: "Come modificare un PDF su iPhone (guida 2026)",
    description:
      "Correggi il testo, aggiungi immagini e riordina le pagine di un PDF direttamente su iPhone. Procedura passo passo con l’app PDF Editor.",
  },
  {
    id: "guides/how-to-edit-pdf-on-android",
    slug: "guide/come-modificare-un-pdf-su-android",
    title: "Come modificare un PDF su Android (guida 2026)",
    description:
      "Modifica i tuoi PDF su Android: cambia il testo, inserisci pagine e firma i documenti. Istruzioni chiare, passo dopo passo, con l’app PDF Editor.",
  },
  {
    id: "guides/how-to-compress-pdf",
    slug: "guide/come-comprimere-un-pdf",
    title: "Come comprimere un PDF senza perdere qualità",
    description:
      "Riduci la dimensione di un PDF per l’e-mail o per caricarlo, senza perdere qualità. Tutorial pensato per il mobile con l’app PDF Editor.",
  },
  {
    id: "guides/how-to-merge-pdf-files",
    slug: "guide/come-unire-file-pdf",
    title: "Come unire file PDF da telefono o computer",
    description:
      "Combina più PDF in un unico documento. Procedura passo passo da mobile con l’app PDF Editor.",
  },
  {
    id: "guides/how-to-sign-pdf-on-phone",
    slug: "guide/come-firmare-un-pdf-dal-telefono",
    title: "Come firmare un PDF dal telefono",
    description:
      "Aggiungi firme elettroniche legalmente valide ai tuoi PDF da iPhone o Android. Guida pratica con l’app PDF Editor.",
  },
  {
    id: "guides/how-to-scan-documents-to-pdf",
    slug: "guide/come-scansionare-documenti-in-pdf-dal-telefono",
    title: "Come scansionare documenti in PDF dal telefono",
    description:
      "Usa la fotocamera del telefono per scansionare documenti di più pagine in PDF nitidi. Flusso mobile con rilevamento dei bordi e OCR.",
  },
  {
    id: "guides/best-pdf-app-for-students",
    slug: "guide/migliore-app-pdf-per-studenti",
    title: "Qual è la migliore app PDF per studenti (2026)",
    description:
      "Cosa serve davvero a uno studente da un’app PDF: appunti, evidenziazioni, firme e conversioni gratuite. Criteri di valutazione onesti.",
  },
  {
    id: "guides/best-pdf-app-for-business",
    slug: "guide/migliore-app-pdf-per-le-aziende",
    title: "Qual è la migliore app PDF per le aziende (2026)",
    description:
      "Cosa deve cercare un team piccolo in un’app PDF: firme, contratti, sicurezza e collaborazione da mobile.",
  },
  {
    id: "guides/pdf-vs-docx",
    slug: "guide/pdf-o-docx",
    title: "PDF o DOCX — quale formato scegliere?",
    description:
      "Quando scegliere il PDF invece del DOCX, e viceversa. Confronto chiaro su modificabilità, fedeltà, firma e condivisione.",
  },
  {
    id: "guides/how-to-protect-pdf-file",
    slug: "guide/come-proteggere-un-pdf-con-password",
    title: "Come proteggere un file PDF con una password",
    description:
      "Aggiungi protezione con password e crittografia a un PDF da mobile o computer. Guida pratica con l’app PDF Editor.",
  },
  {
    id: "guides/how-to-convert-pdf-to-word",
    slug: "guide/come-convertire-un-pdf-in-word",
    title: "Come convertire un PDF in Word, gratis e nel browser",
    description:
      "Estrai il testo da un PDF in un documento Word modificabile, senza caricare nulla. Cosa si converte bene, cosa richiede ritocchi, e quando una scansione non funziona.",
  },
  {
    id: "guides/how-to-convert-word-to-pdf",
    slug: "guide/come-convertire-un-word-in-pdf",
    title: "Come convertire un Word in PDF, gratis e senza caricare nulla",
    description:
      "Trasforma un file .docx o .txt in un PDF pulito e pronto da condividere nel tuo browser. Perché il PDF è il formato giusto da inviare, e cosa controllare prima di esportare.",
  },
  {
    id: "guides/how-to-convert-jpg-to-pdf",
    slug: "guide/come-convertire-un-jpg-in-pdf",
    title: "Come convertire un JPG in PDF — da immagine a documento",
    description:
      "Riunisci una o più foto JPG in un unico PDF nel tuo browser. Ideale per scontrini, documenti d’identità e documenti fotografati, con note oneste su qualità e HEIC dell’iPhone.",
  },
  {
    id: "guides/how-to-convert-png-to-pdf",
    slug: "guide/come-convertire-un-png-in-pdf",
    title: "Come convertire un PNG in PDF — screenshot e grafiche nitide",
    description:
      "Trasforma i tuoi screenshot, diagrammi e grafiche PNG in un unico PDF nel tuo browser. Perché il PNG mantiene il testo nitido, e cosa succede alla trasparenza.",
  },
  {
    id: "guides/how-to-convert-webp-to-pdf",
    slug: "guide/come-convertire-un-webp-in-pdf",
    title: "Come convertire un WebP in PDF — immagini dal web a un documento",
    description:
      "Trasforma le immagini WebP salvate dal web in un unico PDF nel tuo browser. Perché altre app le rifiutano, e come la conversione risolve la compatibilità.",
  },
  {
    id: "guides/how-to-convert-pdf-to-jpg",
    slug: "guide/come-convertire-un-pdf-in-jpg",
    title: "Come convertire un PDF in JPG — esporta le pagine come immagini",
    description:
      "Esporta le pagine di un PDF come immagini JPG nel tuo browser. Quando il JPG batte il PNG, come la scala influisce sulla qualità, e quando un’anteprima immagine batte un PDF.",
  },
  {
    id: "guides/how-to-convert-pdf-to-png",
    slug: "guide/come-convertire-un-pdf-in-png",
    title: "Come convertire un PDF in PNG — pagine nitide e senza perdita di qualità",
    description:
      "Esporta le pagine di un PDF come immagini PNG di alta qualità nel tuo browser. Perché il PNG mantiene nitidi testo e diagrammi, con note su scala e trasparenza.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-iphone",
    slug: "guide/come-convertire-foto-in-pdf-su-iphone",
    title: "Come convertire foto in PDF su iPhone (risolvi il problema HEIC)",
    description:
      "Trasforma le foto dell’iPhone in un unico PDF, incluso il problema del formato HEIC che manda in confusione tanti. La via del browser e quella più rapida dall’app.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-android",
    slug: "guide/come-convertire-foto-in-pdf-su-android",
    title: "Come convertire foto in PDF su Android",
    description:
      "Trasforma le foto Android in un unico PDF con uno strumento del browser o con la funzione integrata di stampa in PDF. Più il metodo più rapido dall’app, con la scansione.",
  },
  {
    id: "guides/how-to-convert-scanned-documents-to-pdf",
    slug: "guide/come-convertire-documenti-scansionati-in-pdf",
    title: "Come convertire documenti scansionati in PDF",
    description:
      "Hai già immagini di scansione o foto della carta? Riuniscile in un PDF nel tuo browser, e scopri cosa fa l’OCR e perché le scansioni ne hanno bisogno per essere ricercabili.",
  },
  {
    id: "guides/how-to-split-pdf-files",
    slug: "guide/come-dividere-un-pdf",
    title: "Come dividere un PDF in file separati (gratis)",
    description:
      "Suddividi un PDF grande in file più piccoli per intervallo di pagine, nel tuo browser. Quando dividere invece di estrarre, e come tenere al sicuro gli originali.",
  },
  {
    id: "guides/how-to-extract-pages-from-pdf",
    slug: "guide/come-estrarre-pagine-da-un-pdf",
    title: "Come estrarre pagine da un PDF (gratis, senza caricare nulla)",
    description:
      "Estrai pagine o intervalli specifici da un PDF in un nuovo file, nel tuo browser. Perfetto per inviare solo le pagine che servono a qualcuno.",
  },
  {
    id: "guides/how-to-reorder-pdf-pages",
    slug: "guide/come-riordinare-le-pagine-di-un-pdf",
    title: "Come riordinare le pagine di un PDF (gratis, nel browser)",
    description:
      "Rimetti le pagine di un PDF nell’ordine giusto dal tuo browser. Correggi le scansioni venute al contrario o i file uniti fuori ordine.",
  },
  {
    id: "guides/how-to-rotate-pdf-pages",
    slug: "guide/come-ruotare-le-pagine-di-un-pdf",
    title: "Come ruotare le pagine di un PDF (gratis, senza caricare nulla)",
    description:
      "Ruota tutte le pagine di un PDF o solo alcune, di 90, 180 o 270 gradi, nel tuo browser. Correggi scansioni orizzontali e pagine capovolte perché il documento si legga bene.",
  },
  {
    id: "guides/how-to-add-watermark-to-pdf",
    slug: "guide/come-aggiungere-una-filigrana-a-un-pdf",
    title: "Come aggiungere una filigrana a un PDF (gratis)",
    description:
      "Applica una scritta come BOZZA o RISERVATO su ogni pagina di un PDF nel tuo browser. Cosa protegge davvero una filigrana e cosa no, spiegato con onestà.",
  },
  {
    id: "guides/how-to-remove-unwanted-pages-from-pdf",
    slug: "guide/come-rimuovere-pagine-indesiderate-da-un-pdf",
    title: "Come rimuovere le pagine indesiderate da un PDF",
    description:
      "Elimina pagine bianche, copertine o sezioni non pertinenti da un PDF nel tuo browser, tenendo solo le pagine che vuoi. File puliti, processo privato.",
  },
  {
    id: "guides/how-to-organize-pdf-files",
    slug: "guide/come-organizzare-i-tuoi-file-pdf",
    title: "Come organizzare i tuoi file PDF — un metodo pratico",
    description:
      "Metti ordine in PDF disordinati: unisci i file collegati, riordina le pagine, elimina il superfluo e nomina tutto correttamente. Un metodo ripetibile con strumenti gratuiti del browser.",
  },
  {
    id: "guides/how-to-prepare-pdf-before-sharing",
    slug: "guide/come-preparare-un-pdf-prima-di-condividerlo",
    title: "Come preparare un PDF prima di condividerlo (checklist)",
    description:
      "La verifica prima dell’invio per i PDF: elimina pagine sparse, correggi l’orientamento, riduci la dimensione ed etichetta le bozze. Invia un documento pulito, delle dimensioni giuste e intenzionale.",
  },
  {
    id: "guides/how-to-fix-sideways-pdf-pages",
    slug: "guide/come-correggere-le-pagine-pdf-storte",
    title: "Come correggere le pagine di un PDF storte o capovolte",
    description:
      "Raddrizza in modo permanente le pagine di un PDF che si aprono storte o capovolte, nel tuo browser. Perché ruotare lo schermo non aiuta, e cosa risolve davvero il problema.",
  },
  {
    id: "guides/how-to-compress-pdf-online",
    slug: "guide/come-comprimere-un-pdf-online-senza-caricarlo",
    title: "Come comprimere un PDF online senza caricarlo su un server",
    description:
      "Riduci un PDF direttamente nel tuo browser, senza caricare nulla né creare un account. In cosa la compressione sul dispositivo si differenzia dai tipici strumenti online, e il compromesso sulla qualità.",
  },
  {
    id: "guides/how-to-reduce-pdf-file-size-for-email",
    slug: "guide/come-ridurre-la-dimensione-di-un-pdf-per-la-mail",
    title: "Come ridurre la dimensione di un PDF per la mail",
    description:
      "Porta un PDF sotto i limiti degli allegati di Gmail e Outlook. I limiti reali, perché le scansioni li superano, e come ridurre un file così che si possa inviare.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-iphone",
    slug: "guide/come-ridurre-un-pdf-su-iphone",
    title: "Come ridurre la dimensione di un PDF su iPhone",
    description:
      "Riduci un PDF sul tuo iPhone con uno strumento del browser o con l’app PDF Editor. Perché le scansioni dell’iPhone diventano enormi e come portarle sotto i limiti di invio.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-android",
    slug: "guide/come-ridurre-un-pdf-su-android",
    title: "Come ridurre la dimensione di un PDF su Android",
    description:
      "Comprimi un PDF su qualsiasi telefono Android con uno strumento del browser che non richiede installazione, o con l’app PDF Editor. Porta le scansioni sotto i limiti di mail e caricamento.",
  },
  {
    id: "guides/why-is-my-pdf-so-large",
    slug: "guide/perche-il-mio-pdf-e-cosi-pesante",
    title: "Perché il mio PDF è così pesante? Cause e soluzioni",
    description:
      "Le vere ragioni per cui un PDF diventa enorme — scansioni, foto incorporate, font e altro — e la soluzione giusta per ognuna, con strumenti gratuiti del browser.",
  },
  {
    id: "guides/compress-pdf-without-losing-too-much-quality",
    slug: "guide/comprimere-un-pdf-senza-perdere-troppa-qualita",
    title: "Comprimere un PDF senza perdere troppa qualità",
    description:
      "Trova il punto giusto tra dimensione e qualità. Come i livelli di compressione scambiano dettaglio con dimensione, e come scegliere il più leggero che funzioni ancora.",
  },
  {
    id: "guides/how-to-compress-scanned-pdf",
    slug: "guide/come-comprimere-un-pdf-scansionato",
    title: "Come comprimere un PDF scansionato (risparmio enorme)",
    description:
      "I PDF scansionati sono i più facili da ridurre e i più pesanti in assoluto. Come comprimerli in modo drastico, e cosa succede al testo ricercabile.",
  },
  {
    id: "guides/best-pdf-compression-settings",
    slug: "guide/migliori-impostazioni-di-compressione-pdf",
    title: "Migliori impostazioni di compressione PDF — guida alla decisione",
    description:
      "Quale livello di compressione per mail, stampa, archiviazione o web? Una tabella pratica che collega ogni impostazione all’uso previsto, con i compromessi spiegati con onestà.",
  },
  {
    id: "guides/how-to-send-large-pdf-files",
    slug: "guide/come-inviare-un-pdf-pesante",
    title: "Come inviare un PDF pesante (5 metodi affidabili)",
    description:
      "Cinque modi affidabili per inviare un PDF troppo grande per la mail — comprimere, dividere, link in cloud e altro — e come scegliere tra loro.",
  },
  {
    id: "guides/how-to-reduce-pdf-size-before-uploading",
    slug: "guide/come-ridurre-un-pdf-prima-di-caricarlo",
    title: "Come ridurre un PDF prima di caricarlo su un portale",
    description:
      "I portali di caricamento rifiutano i file pesanti con più severità della mail. Come far stare un PDF sotto limiti molto stretti senza perdere la leggibilità che verificano.",
  },
  {
    id: "guides/how-to-sign-pdf-on-iphone",
    slug: "guide/come-firmare-un-pdf-su-iphone",
    title: "Come firmare un PDF su iPhone (guida 2026)",
    description:
      "Firma un PDF su iPhone con Markup o con l’app PDF Editor. I limiti della via nativa, e quando un’app dedicata firma meglio.",
  },
  {
    id: "guides/how-to-sign-pdf-on-android",
    slug: "guide/come-firmare-un-pdf-su-android",
    title: "Come firmare un PDF su Android (guida 2026)",
    description:
      "Firma un PDF su Android, dove non esiste una firma nativa universale. La via affidabile con un’app, le diverse opzioni a seconda del produttore, e le basi legali.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-phone",
    slug: "guide/come-compilare-un-modulo-pdf-dal-telefono",
    title: "Come compilare un modulo PDF dal telefono",
    description:
      "Compila un modulo PDF su iPhone o Android, che abbia campi veri o sia una semplice scansione. Tocca e scrivi, aggiungi caselle di testo e firma tutto nello stesso posto.",
  },
  {
    id: "guides/how-to-annotate-pdf-on-mobile",
    slug: "guide/come-annotare-un-pdf-dal-telefono",
    title: "Come annotare un PDF dal telefono",
    description:
      "Evidenzia, commenta e disegna sui tuoi PDF da telefono o tablet. Gli strumenti di annotazione che contano davvero, e come mantenere leggibili le tue note.",
  },
  {
    id: "guides/how-to-manage-pdfs-on-phone",
    slug: "guide/come-organizzare-i-pdf-sul-telefono",
    title: "Come organizzare i PDF sul telefono",
    description:
      "Evita che i PDF sul telefono diventino un caos: rinomina, organizza in cartelle, sincronizza con il cloud e libera spazio. Una routine di manutenzione pratica.",
  },
  {
    id: "guides/how-to-create-pdf-from-camera",
    slug: "guide/come-creare-un-pdf-con-la-fotocamera-del-telefono",
    title: "Come creare un PDF con la fotocamera del telefono",
    description:
      "Trasforma uno scatto in un PDF, e scopri perché una scansione vera batte una foto al volo. Cattura rapida per scontrini e lavagne, scansione per i documenti.",
  },
  {
    id: "guides/how-to-share-pdf-from-phone",
    slug: "guide/come-condividere-un-pdf-dal-telefono",
    title: "Come condividere un PDF dal telefono",
    description:
      "Condividi un PDF da iPhone o Android nel modo giusto — mail, AirDrop, messaggi o link — e scopri come prepararlo perché arrivi davvero.",
  },
  {
    id: "guides/best-pdf-tools-for-students",
    slug: "guide/migliori-strumenti-pdf-gratuiti-per-studenti",
    title: "I migliori strumenti PDF gratuiti per studenti (2026)",
    description:
      "Gli strumenti PDF gratuiti e senza registrazione che coprono le esigenze reali degli studenti — unire letture, comprimere consegne, convertire e annotare — senza muri a pagamento.",
  },
  {
    id: "guides/best-pdf-workflow-for-freelancers",
    slug: "guide/miglior-metodo-pdf-per-liberi-professionisti",
    title: "Il miglior metodo PDF per liberi professionisti",
    description:
      "Un metodo PDF ripetibile per un libero professionista: proposta inviata, contratto firmato, fattura emessa. Gli strumenti gratuiti e l’app che tengono tutto veloce e privato.",
  },
  {
    id: "guides/best-pdf-tools-for-small-business",
    slug: "guide/migliori-strumenti-pdf-gratuiti-per-piccole-imprese",
    title: "I migliori strumenti PDF gratuiti per piccole imprese",
    description:
      "Gestisci fatture, contratti e archivi con strumenti PDF gratuiti e privati, senza abbonamento per utente. Quale strumento per quale compito, e dove si inserisce l’app.",
  },
  {
    id: "guides/pdf-vs-jpg-for-documents",
    slug: "guide/pdf-o-jpg-per-i-documenti",
    title: "PDF o JPG per i documenti — smetti di inviare foto",
    description:
      "Perché una foto JPG di un documento è la cosa sbagliata da inviare, quando il PDF è la scelta giusta, e come trasformare una foto in un documento vero.",
  },
  {
    id: "guides/when-to-use-pdf-instead-of-docx",
    slug: "guide/quando-inviare-un-pdf-invece-di-un-docx",
    title: "Quando inviare un PDF invece di un DOCX (checklist)",
    description:
      "Hai un documento Word: dovresti inviarlo come PDF invece? Una checklist rapida per i momenti in cui il PDF è la scelta giusta, e come convertirlo.",
  },
  {
    id: "guides/browser-based-pdf-tools-vs-upload-tools",
    slug: "guide/strumenti-pdf-nel-browser-o-con-caricamento-file",
    title: "Strumenti PDF nel browser o con caricamento dei file",
    description:
      "Non tutti gli strumenti PDF «online» sono uguali. La differenza tra quelli che funzionano nel tuo browser e quelli che caricano il tuo file su un server — e come distinguerli.",
  },
  {
    id: "guides/privacy-first-pdf-tools",
    slug: "guide/strumenti-pdf-che-rispettano-la-privacy",
    title: "Strumenti PDF che rispettano la tua privacy — i documenti restano sul tuo dispositivo",
    description:
      "I PDF contengono spesso i tuoi dati più sensibili. Come lavorarci senza caricare nulla, e cosa significa davvero «privacy al primo posto».",
  },
  {
    id: "guides/common-pdf-mistakes-to-avoid",
    slug: "guide/errori-comuni-con-i-pdf-da-evitare",
    title: "Errori comuni con i PDF da evitare",
    description:
      "Gli errori con i PDF che fanno perdere tempo o espongono informazioni — comprimere troppo, inviare foto, caricare file sensibili, dimenticare pagine — e come evitarli.",
  },
  {
    id: "guides/why-wont-my-pdf-open",
    slug: "guide/perche-il-mio-pdf-non-si-apre",
    title: "Perché il mio PDF non si apre? Cause e soluzioni pratiche",
    description:
      "Un PDF che si rifiuta di aprirsi è quasi sempre una di cinque cose. Come riconoscere un download interrotto, un blocco con password, un bug del lettore o un file datato — e cosa risolve ciascuno.",
  },
  {
    id: "guides/why-is-my-pdf-blank",
    slug: "guide/perche-il-mio-pdf-e-vuoto",
    title: "Perché il mio PDF è vuoto? Cause reali e come recuperarlo",
    description:
      "Aprire un PDF e trovare pagine vuote è inquietante. La buona notizia è che il contenuto quasi sempre c’è ancora. La cattiva è che la causa non è ovvia a colpo d’occhio.",
  },
  {
    id: "guides/why-cant-i-edit-a-pdf",
    slug: "guide/perche-non-riesco-a-modificare-un-pdf",
    title: "Perché non riesco a modificare questo PDF? Le vere ragioni",
    description:
      "Il PDF è stato pensato per resistere alla modifica, ma alcuni fattori precisi — scansioni, protezioni, limiti del lettore — rendono alcuni file più bloccati di altri. Cosa blocca il tuo, e cosa funziona davvero.",
  },
  {
    id: "guides/why-is-my-pdf-blurry",
    slug: "guide/perche-il-mio-pdf-e-sfocato",
    title: "Perché il mio PDF è sfocato? Risoluzione, compressione e scansione",
    description:
      "Un PDF sfocato viene da una scansione a bassa risoluzione, una compressione troppo aggressiva o un’esportazione andata male — mai dal formato in sé. Come capire la tua causa e recuperare la nitidezza.",
  },
  {
    id: "guides/how-to-fix-a-corrupted-pdf",
    slug: "guide/come-riparare-un-pdf-danneggiato",
    title: "Come riparare un PDF danneggiato (quello che funziona davvero)",
    description:
      "La maggior parte dei PDF «danneggiati» non lo è davvero: sono download interrotti, lettori incompatibili o scritture incomplete. La lista onesta di soluzioni che recuperano il file, e il caso in cui è davvero perduto.",
  },
  {
    id: "guides/how-to-fix-pdf-printing-issues",
    slug: "guide/come-risolvere-i-problemi-di-stampa-di-un-pdf",
    title: "Come risolvere i problemi di stampa di un PDF (pagine tagliate, formato sbagliato, testo mancante)",
    description:
      "Quando un PDF si stampa ritagliato, scalato male o senza parte del testo, la soluzione dipende dal sintomo. Una tabella breve che collega ogni problema all’impostazione giusta.",
  },
  {
    id: "guides/how-to-fix-pdf-upload-errors",
    slug: "guide/come-risolvere-gli-errori-di-caricamento-di-un-pdf",
    title: "Come risolvere gli errori di caricamento di un PDF (troppo pesante, rifiutato, bloccato)",
    description:
      "I portali rifiutano un PDF per un numero limitato di motivi: dimensione, numero di pagine, formato troppo rigido o un caricamento instabile. Come capire quale ti riguarda e far accettare il file al prossimo tentativo.",
  },
  {
    id: "guides/how-to-fix-pdf-formatting-problems",
    slug: "guide/come-correggere-i-problemi-di-formattazione-di-un-pdf",
    title: "Come correggere i problemi di formattazione di un PDF (a capo, margini, spaziatura)",
    description:
      "Quando l’impaginazione di un PDF sembra rotta — il testo si ricolloca, i margini non tornano, la spaziatura è incoerente — la soluzione di solito è nel documento di origine, non nel PDF. Il metodo più pulito per ottenere un’esportazione a posto.",
  },
  {
    id: "guides/how-to-fix-scanned-pdf-quality",
    slug: "guide/come-migliorare-la-qualita-di-un-pdf-scansionato",
    title: "Come migliorare la qualità di un PDF scansionato (nitidezza, raddrizzamento, colore)",
    description:
      "I PDF scansionati sbagliano sempre allo stesso modo: storti, contrasto slavato, sfondo macchiato, file enormi. Le regolazioni prima della scansione e gli strumenti dopo che li sistemano davvero.",
  },
  {
    id: "guides/how-to-fix-pdf-font-issues",
    slug: "guide/come-correggere-i-problemi-di-font-in-un-pdf",
    title: "Come correggere i problemi di font in un PDF (mancante, sostituito, illeggibile)",
    description:
      "Quando un PDF mostra il font sbagliato, quadratini al posto dei caratteri o testo sostituito, quasi sempre manca un font incorporato. Come funziona l’incorporazione e cosa cambiare in fase di esportazione.",
  },
  {
    id: "guides/best-pdf-tools-for-remote-work",
    slug: "guide/migliori-strumenti-pdf-per-il-lavoro-da-remoto",
    title: "I migliori strumenti PDF per il lavoro da remoto (gratuiti, nel browser)",
    description:
      "Strumenti PDF che reggono quando il tuo ufficio è un portatile e un telefono — firmare, comprimere, unire, scansionare, condividere — tutto senza installazioni o licenze per utente.",
  },
  {
    id: "guides/best-pdf-tools-for-office-documents",
    slug: "guide/migliori-strumenti-pdf-per-documenti-dufficio",
    title: "I migliori strumenti PDF per documenti d’ufficio (Word, Excel, report)",
    description:
      "Il kit di strumenti PDF di cui il lavoro d’ufficio ha davvero bisogno: passaggi puliti tra Word e PDF, unione di più documenti, riordino delle pagine e compressione affidabile per gli allegati mail.",
  },
  {
    id: "guides/best-pdf-workflow-for-teams",
    slug: "guide/miglior-metodo-pdf-in-team",
    title: "Il miglior metodo PDF in team (file condivisi, revisioni, approvazioni)",
    description:
      "Come un team piccolo fa circolare i documenti senza abbonamenti PDF a pagamento: un passaggio ripetibile per bozze, revisioni e approvazioni firmate con strumenti gratuiti del browser.",
  },
  {
    id: "guides/how-to-share-pdfs-with-clients",
    slug: "guide/come-condividere-pdf-con-i-clienti",
    title: "Come condividere PDF con i clienti (con professionalità e riservatezza)",
    description:
      "Una breve guida per inviare un PDF a un cliente — dimensione adatta alla mail, scelta della password, identità del marchio, conferma di ricezione — senza affidare nulla a terzi.",
  },
  {
    id: "guides/how-to-prepare-pdf-for-business-use",
    slug: "guide/come-preparare-un-pdf-per-uso-professionale",
    title: "Come preparare un PDF per uso professionale (checklist finale)",
    description:
      "Prima che un PDF lasci l’ufficio: elimina le bozze, verifica l’impaginazione, correggi l’orientamento, incorpora i font e riduci il file. La verifica finale per i documenti che rappresentano la tua attività.",
  },
  {
    id: "guides/how-to-send-contracts-as-pdf",
    slug: "guide/come-inviare-un-contratto-in-pdf",
    title: "Come inviare un contratto in PDF (firmare, bloccare, consegnare)",
    description:
      "Un contratto richiede un metodo più rigoroso: bloccare il contenuto, applicare la firma, marcare le bozze con una filigrana e ottenere un file finale che l’altra parte possa controfirmare senza andirivieni.",
  },
  {
    id: "guides/how-to-organize-work-documents-as-pdf",
    slug: "guide/come-organizzare-i-documenti-di-lavoro-in-pdf",
    title: "Come organizzare i documenti di lavoro in PDF (cartelle, nomi, versioni)",
    description:
      "Una convenzione pratica di nomi e cartelle per i PDF di lavoro — preventivi, brief, consegne, archivi — che evita il caos delle versioni e permette a chiunque di trovare tutto in fretta.",
  },
  {
    id: "guides/how-to-manage-invoices-as-pdf",
    slug: "guide/come-gestire-le-fatture-in-pdf",
    title: "Come gestire le fatture in PDF (emettere, tracciare, archiviare)",
    description:
      "Un metodo di fatturazione in PDF che non richiede software di contabilità: generare, numerare, inviare, tracciare e archiviare — solo con strumenti gratuiti del browser e un sistema di cartelle ordinato.",
  },
  {
    id: "guides/how-to-create-client-ready-pdf-files",
    slug: "guide/come-creare-pdf-pronti-per-il-cliente",
    title: "Come creare PDF pronti per il cliente (curati, con la tua identità)",
    description:
      "Cosa distingue un PDF a uso interno da uno pronto per il cliente: copertina, numerazione delle pagine, branding, dimensione e nome del file. Il rifinimento rapido che fa sembrare un documento davvero finito.",
  },
  {
    id: "guides/pdf-workflows-for-small-business",
    slug: "guide/flussi-di-lavoro-pdf-per-piccole-imprese",
    title: "Flussi di lavoro PDF per piccole imprese (preventivi, contratti, archivio)",
    description:
      "Come una piccola impresa gestisce i suoi documenti con i PDF — preventivi in uscita, contratti firmati, archivio ordinato — senza comprare un pacchetto di abbonamenti apposta.",
  },
  {
    id: "guides/pdf-workflows-for-consultants",
    slug: "guide/flussi-di-lavoro-pdf-per-consulenti",
    title: "Flussi di lavoro PDF per consulenti (proposte, report, fatture)",
    description:
      "Il ritmo PDF di un consulente: proposte che convincono, report che si leggono bene anche dal telefono, fatture pronte in pochi secondi. Gli strumenti nel browser che tengono tutto snello.",
  },
  {
    id: "guides/pdf-workflows-for-agencies",
    slug: "guide/flussi-di-lavoro-pdf-per-agenzie",
    title: "Flussi di lavoro PDF per agenzie (deck, brief, approvazioni)",
    description:
      "La catena PDF di un’agenzia — deck di presentazione, brief creativi, approvazioni dei clienti, deliverable — resta veloce e prevedibile con strumenti gratuiti, privati e nel browser.",
  },
  {
    id: "guides/how-to-submit-homework-as-pdf",
    slug: "guide/come-consegnare-i-compiti-in-pdf",
    title: "Come consegnare i compiti in PDF (senza drammi con il portale)",
    description:
      "I portali scolastici rifiutano i compiti per motivi prevedibili — dimensione del file, numero di pagine, formato. Il percorso più semplice dal compito finito al PDF accettato dal portale.",
  },
  {
    id: "guides/how-to-scan-notes-to-pdf",
    slug: "guide/come-scansionare-appunti-a-mano-in-pdf",
    title: "Come scansionare appunti scritti a mano in PDF (nitidi, ricercabili)",
    description:
      "Trasforma pagine di appunti scritti a mano durante una lezione in PDF puliti e su più pagine, con la fotocamera del telefono. Le impostazioni che danno scansioni leggibili già al primo tentativo.",
  },
  {
    id: "guides/how-to-compress-pdf-for-school-portals",
    slug: "guide/come-comprimere-un-pdf-per-i-portali-scolastici",
    title: "Come comprimere un PDF per i portali scolastici (limiti severi)",
    description:
      "I portali di scuole e università limitano i PDF in modo più severo della mail. Come comprimere una consegna per farla stare nel limite senza rovinare la leggibilità che il docente verifica.",
  },
  {
    id: "guides/how-to-convert-lecture-notes-to-pdf",
    slug: "guide/come-convertire-appunti-di-lezione-in-pdf",
    title: "Come convertire appunti di lezione in PDF (Word, foto, slide)",
    description:
      "Gli appunti di lezione arrivano in ogni formato — documento Word, presentazione, screenshot, foto della lavagna. Come trasformare ciascuno in un unico PDF leggibile senza perdere la struttura.",
  },
  {
    id: "guides/how-to-organize-study-materials-as-pdf",
    slug: "guide/come-organizzare-il-materiale-di-studio-in-pdf",
    title: "Come organizzare il materiale di studio in PDF (cartelle, nomi, indice)",
    description:
      "I PDF dei corsi si accumulano in fretta. Una convenzione semplice di cartelle, nomi e unione dei file che mantiene ricercabile il materiale del semestre dalla prima settimana agli esami.",
  },
  {
    id: "guides/how-to-share-study-notes-as-pdf",
    slug: "guide/come-condividere-appunti-di-studio-in-pdf",
    title: "Come condividere appunti di studio in PDF (gruppo, chat, cloud)",
    description:
      "Condividi gli appunti con il tuo gruppo di studio senza perdere la formattazione o il controllo delle versioni. Le abitudini con i PDF che evitano che lo studio di gruppo finisca nel caos degli screenshot.",
  },
  {
    id: "guides/how-to-edit-class-documents-as-pdf",
    slug: "guide/come-modificare-i-documenti-scolastici-in-pdf",
    title: "Come modificare i documenti scolastici in PDF (annotare, evidenziare, firmare)",
    description:
      "Dispense, esercitazioni e moduli di consenso spesso arrivano come PDF. Come segnarli, compilarli e restituirli senza stamparli — dal telefono o dal computer.",
  },
  {
    id: "guides/pdf-workflow-for-university-students",
    slug: "guide/flusso-di-lavoro-pdf-per-studenti-universitari",
    title: "Flusso di lavoro PDF per studenti universitari (appunti, compiti, consegne)",
    description:
      "Un ritmo PDF che regge un intero semestre, sessione d’esame compresa: appunti scansionati, compiti consegnati, materiale di studio condiviso. Tutto nel browser e gratuito.",
  },
  {
    id: "guides/how-to-create-digital-study-pdfs",
    slug: "guide/come-creare-pdf-di-studio-digitali",
    title: "Come creare PDF di studio digitali (flashcard, riassunti, raccolte)",
    description:
      "Costruisci i tuoi PDF di studio a partire da appunti, slide ed evidenziazioni — ricercabili, portatili, pronti per essere annotati su tablet. La struttura che li rende davvero utili al momento dell’esame.",
  },
  {
    id: "guides/are-online-pdf-tools-safe",
    slug: "guide/gli-strumenti-pdf-online-sono-sicuri",
    title: "Gli strumenti PDF online sono sicuri? Uno sguardo onesto al rischio",
    description:
      "La maggior parte degli strumenti PDF «online» carica il tuo file su un server. Alcuni no. I rischi reali, le categorie di strumenti che trattano i dati in modo diverso e come distinguerli.",
  },
  {
    id: "guides/how-to-protect-sensitive-pdf-files",
    slug: "guide/come-proteggere-i-pdf-sensibili",
    title: "Come proteggere i file PDF sensibili (conservazione, condivisione, ciclo di vita)",
    description:
      "I PDF sensibili vanno protetti in tre momenti: mentre sono conservati, mentre vengono condivisi e dopo che il destinatario ha finito di usarli. Un flusso di lavoro pratico che copre tutti e tre.",
  },
  {
    id: "guides/how-to-share-pdf-files-privately",
    slug: "guide/come-condividere-un-pdf-in-modo-privato",
    title: "Come condividere un PDF in modo privato (senza caricarlo da sconosciuti)",
    description:
      "Il modo privato di condividere un PDF non passa per un sito «strumenti PDF» pubblico. I canali che mantengono i documenti tra te e il destinatario, con impostazioni predefinite sensate.",
  },
  {
    id: "guides/privacy-first-document-workflows",
    slug: "guide/flussi-di-lavoro-che-mettono-la-privacy-al-primo-posto",
    title: "Flussi di lavoro documentali che mettono la privacy al primo posto (senza caricamenti)",
    description:
      "Un intero flusso di lavoro sui documenti — acquisizione, modifica, firma, invio, archiviazione — che tiene i file sui tuoi dispositivi e fuori dai server di terzi. La forma realistica e gli strumenti giusti.",
  },
  {
    id: "guides/local-browser-pdf-processing-explained",
    slug: "guide/elaborazione-pdf-locale-nel-browser-spiegata",
    title: "Elaborazione PDF locale nel browser, spiegata (come funziona davvero)",
    description:
      "Come uno strumento PDF può funzionare nel browser senza inviare il tuo file da nessuna parte. La tecnologia, i compromessi e come verificare che uno strumento sia davvero locale.",
  },
  {
    id: "guides/do-online-pdf-tools-store-files",
    slug: "guide/gli-strumenti-pdf-online-conservano-i-tuoi-file",
    title: "Gli strumenti PDF online conservano i tuoi file? Cosa controllare",
    description:
      "Alcuni strumenti PDF online cancellano i file caricati subito, altri li conservano per ore, altri a tempo indeterminato. Come leggere in fretta un’informativa sulla privacy e cosa cercare.",
  },
  {
    id: "guides/how-to-avoid-uploading-sensitive-documents",
    slug: "guide/come-evitare-di-caricare-documenti-sensibili",
    title: "Come evitare di caricare documenti sensibili (alternative pratiche)",
    description:
      "Quando un flusso di lavoro ti spinge a caricare un PDF sensibile, esiste quasi sempre un’alternativa del tutto locale. Le categorie di attività e lo strumento senza caricamento adatto a ciascuna.",
  },
  {
    id: "guides/secure-pdf-workflows-for-business",
    slug: "guide/flussi-di-lavoro-pdf-sicuri-per-le-imprese",
    title: "Flussi di lavoro PDF sicuri per le imprese (senza uno stack enterprise)",
    description:
      "Una piccola impresa non ha bisogno di un caveau PDF certificato SOC2 per lavorare in sicurezza. La base realistica — archiviazione cifrata, trasferimenti firmati, elaborazione locale — che risponde al rischio effettivo.",
  },
  {
    id: "guides/browser-based-document-processing-benefits",
    slug: "guide/vantaggi-dellelaborazione-dei-documenti-nel-browser",
    title: "Vantaggi dell’elaborazione dei documenti nel browser (velocità, privacy, costi)",
    description:
      "Perché elaborare i PDF nel browser cambia l’equilibrio tra velocità, privacy e costi rispetto agli strumenti cloud tradizionali, e dove si fermano davvero i limiti dell’elaborazione locale.",
  },
  {
    id: "guides/pdf-vs-google-docs",
    slug: "guide/pdf-o-google-docs",
    title: "PDF o Google Docs — quando usare l’uno o l’altro (modifica, condivisione, blocco)",
    description:
      "Google Docs serve per collaborare, il PDF per consegnare. Una panoramica realistica su quando usare l’uno o l’altro, e come convertire in modo pulito tra i due.",
  },
  {
    id: "guides/pdf-vs-docx-for-business",
    slug: "guide/pdf-o-docx-in-azienda",
    title: "PDF o DOCX in azienda (contratti, report, distribuzione)",
    description:
      "Perché i documenti aziendali vengono quasi sempre distribuiti come PDF ma vivono come DOCX. Lo strumento giusto in ogni fase della vita di un contratto, un report o una fattura.",
  },
  {
    id: "guides/pdf-vs-images-for-sharing-documents",
    slug: "guide/pdf-o-immagini-per-condividere-documenti",
    title: "PDF o immagini per condividere documenti (JPG, PNG, HEIC)",
    description:
      "Quando un JPG, un PNG o un HEIC di un documento è la scelta sbagliata — e cosa rende il PDF il formato giusto per tutto ciò che va oltre un semplice screenshot.",
  },
  {
    id: "guides/pdf-vs-png",
    slug: "guide/pdf-o-png",
    title: "PDF o PNG — documenti su più pagine contro un’immagine singola e nitida",
    description:
      "Il PDF vince con i documenti su più pagine, il PNG con un’immagine singola, nitida e con sfondo trasparente. Le regole chiare e come convertire tra i due.",
  },
  {
    id: "guides/best-format-for-sharing-documents",
    slug: "guide/miglior-formato-per-condividere-documenti",
    title: "Miglior formato per condividere documenti (PDF, DOCX, immagini a confronto)",
    description:
      "Quando il PDF è il formato giusto da condividere, quando non lo è, e come si comportano davvero le alternative realistiche (DOCX, immagini, HTML, Markdown) nelle situazioni di ogni giorno.",
  },
  {
    id: "guides/why-pdf-is-still-popular",
    slug: "guide/perche-il-pdf-e-ancora-lo-standard-nel-2026",
    title: "Perché il PDF è ancora lo standard per i documenti nel 2026",
    description:
      "A distanza di decenni, il PDF domina ancora la condivisione dei documenti. I motivi per cui è rimasto — fedeltà, universalità, possibilità di firma, adatto all’archiviazione — e dove è vulnerabile.",
  },
  {
    id: "guides/when-to-use-scanned-pdf",
    slug: "guide/quando-usare-un-pdf-scansionato",
    title: "Quando usare un PDF scansionato (e quando no)",
    description:
      "I PDF scansionati risolvono un problema specifico — portare la carta nel digitale. Sono anche più pesanti, meno ricercabili e più difficili da modificare. Quando vale la pena farlo.",
  },
  {
    id: "guides/editable-pdf-vs-flat-pdf",
    slug: "guide/pdf-modificabile-o-pdf-piatto",
    title: "PDF modificabile o PDF piatto — qual è la vera differenza",
    description:
      "Alcuni PDF hanno testo vero, selezionabile, e una struttura modificabile; altri sono solo immagini di pagine senza testo sottostante. Come capire quale hai tra le mani, e quando ciascuno è quello giusto.",
  },
  {
    id: "guides/best-free-pdf-tools",
    slug: "guide/migliori-strumenti-pdf-gratuiti",
    title: "I migliori strumenti PDF gratuiti nel 2026 (onesti, senza registrazione)",
    description:
      "Gli strumenti PDF gratuiti che vale davvero la pena usare — comprimere, unire, firmare, convertire, scansionare — scelti per qualità reale e privacy, non per quanta pubblicità mostrano o quanto dura la prova.",
  },
  {
    id: "guides/free-browser-based-pdf-tools",
    slug: "guide/strumenti-pdf-gratuiti-nel-browser",
    title: "Strumenti PDF gratuiti nel browser (senza installazione, senza caricamento)",
    description:
      "Gli strumenti PDF che funzionano interamente nel tuo browser — senza installazione, senza account, senza caricare nulla. Cosa c’è disponibile, cosa copre, e come verificare che sia davvero locale.",
  },
  {
    id: "guides/best-pdf-tools-without-upload",
    slug: "guide/migliori-strumenti-pdf-senza-caricamento",
    title: "I migliori strumenti PDF senza caricamento (i file restano sul tuo dispositivo)",
    description:
      "Quando non vuoi che il tuo PDF lasci il dispositivo, questi sono gli strumenti che lavorano in locale. Comprimere, unire, convertire — tutto restando sul tuo computer.",
  },
  {
    id: "guides/best-private-pdf-tools",
    slug: "guide/migliori-strumenti-pdf-privati",
    title: "I migliori strumenti PDF privati (quando la riservatezza conta davvero)",
    description:
      "Per contratti, documenti finanziari e altri PDF sensibili, questi sono gli strumenti che rispettano la privacy per come sono costruiti — non solo a parole.",
  },
  {
    id: "guides/free-pdf-tools-for-iphone",
    slug: "guide/strumenti-pdf-gratuiti-per-iphone",
    title: "Strumenti PDF gratuiti per iPhone (browser e app)",
    description:
      "Strumenti PDF gratuiti per iPhone che funzionano davvero senza abbonamento — comprimere, firmare, scansionare, convertire. Le opzioni nel browser e l’app PDF Editor per lavorare anche offline.",
  },
  {
    id: "guides/free-pdf-tools-for-android",
    slug: "guide/strumenti-pdf-gratuiti-per-android",
    title: "Strumenti PDF gratuiti per Android (browser e app)",
    description:
      "Strumenti PDF gratuiti per Android scelti per le attività di ogni giorno — comprimere, firmare, scansionare, convertire. Le vie nel browser mobile e l’app PDF Editor per l’uso offline.",
  },
  {
    id: "guides/what-is-a-pdf-form",
    slug: "guide/cosa-e-un-modulo-pdf",
    title: "Cos’è un modulo PDF? Moduli interattivi e non interattivi spiegati",
    description:
      "Un modulo PDF è un documento pensato per raccogliere risposte — a volte con campi veri in cui scrivere, a volte come una pagina non interattiva su cui scrivi sopra. Cosa significa e come riconoscerlo.",
  },
  {
    id: "guides/editable-pdf-vs-fillable-pdf",
    slug: "guide/pdf-modificabile-o-pdf-compilabile",
    title: "PDF modificabile o PDF compilabile — qual è la differenza?",
    description:
      "Modificare un PDF ne cambia il contenuto; compilare un PDF significa inserire risposte nei campi del modulo. Perché sono due compiti diversi, e di quale hai davvero bisogno.",
  },
  {
    id: "guides/how-pdf-forms-work",
    slug: "guide/come-funzionano-i-moduli-pdf",
    title: "Come funzionano i moduli PDF — campi, AcroForm e scansioni non interattive",
    description:
      "Alla base, un modulo PDF è un insieme di campi interattivi sovrapposti alla pagina, oppure un’immagine piatta senza nessuno di questi campi. Come sono costruiti entrambi e perché conta per la compilazione.",
  },
  {
    id: "guides/can-you-edit-a-pdf-form",
    slug: "guide/si-puo-modificare-un-modulo-pdf",
    title: "Si può modificare un modulo PDF? Cosa puoi cambiare e cosa no",
    description:
      "Modificare le domande di un modulo PDF è diverso dal compilarlo. Cosa è modificabile, cosa è bloccato, e come cambiare un modulo di cui hai solo la versione finita in PDF.",
  },
  {
    id: "guides/how-to-fill-out-a-pdf-form",
    slug: "guide/come-compilare-un-modulo-pdf",
    title: "Come compilare un modulo PDF (interattivo o non interattivo)",
    description:
      "Compila qualsiasi modulo PDF, che abbia campi veri o sia una scansione non interattiva su cui scrivere sopra. La guida completa per computer e telefono, firma e salvataggio inclusi.",
  },
  {
    id: "guides/how-to-save-a-filled-pdf-form",
    slug: "guide/come-salvare-un-modulo-pdf-compilato",
    title: "Come salvare un modulo PDF compilato in modo che le risposte restino",
    description:
      "Compili un modulo e poi le tue risposte spariscono? Come salvare i dati di un modulo compilato in modo affidabile, perché alcuni programmi non lo fanno, e quando appiattire prima di inviarlo.",
  },
  {
    id: "guides/why-cant-i-type-in-a-pdf-form",
    slug: "guide/perche-non-riesco-a-scrivere-in-un-modulo-pdf",
    title: "Perché non riesco a scrivere in questo modulo PDF? Cause e soluzioni",
    description:
      "Clicchi su un campo e non succede niente. I tre motivi più comuni — un modulo non interattivo, il programma sbagliato o un file bloccato — e cosa fare in ciascun caso.",
  },
  {
    id: "guides/how-to-create-a-fillable-pdf",
    slug: "guide/come-creare-un-pdf-compilabile",
    title: "Come creare un PDF compilabile — opzioni oneste e limiti",
    description:
      "Cosa serve davvero per creare un PDF che altri possano compilare — campi interattivi oppure un semplice modello non interattivo — e quale approccio si adatta agli strumenti che hai.",
  },
  {
    id: "guides/how-to-share-a-pdf-form",
    slug: "guide/come-condividere-un-modulo-pdf-da-compilare",
    title: "Come condividere un modulo PDF da far compilare ad altri",
    description:
      "Inviare un modulo vuoto da compilare è diverso dall’inviare un documento finito. Come condividere un modulo in modo che i destinatari possano davvero compilarlo — e raccogliere le risposte.",
  },
  {
    id: "guides/how-to-print-a-filled-pdf-form",
    slug: "guide/come-stampare-un-modulo-pdf-compilato",
    title: "Come stampare un modulo PDF compilato con le risposte visibili",
    description:
      "Hai stampato il modulo e i campi sono usciti vuoti? Perché i valori inseriti a volte non vengono stampati, e come ottenere una copia su carta pulita con ogni risposta visibile.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-iphone",
    slug: "guide/come-compilare-moduli-pdf-su-iphone",
    title: "Come compilare moduli PDF su iPhone (File, Markup e app)",
    description:
      "Compila moduli PDF interattivi e non interattivi su iPhone — con File e Markup oppure con un’app PDF dedicata. I passaggi specifici di iOS, la via del menu di condivisione, e dove Markup non basta.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-android",
    slug: "guide/come-compilare-moduli-pdf-su-android",
    title: "Come compilare moduli PDF su Android (qualsiasi telefono)",
    description:
      "Compila moduli PDF interattivi e non interattivi su Android. Perché il visualizzatore preinstallato spesso non ti fa scrivere, la via affidabile con un’app, e come le differenze tra i produttori influenzano i moduli.",
  },
  {
    id: "guides/how-to-send-a-completed-pdf-form",
    slug: "guide/come-inviare-un-modulo-pdf-compilato",
    title: "Come inviare un modulo PDF compilato (appiattire e consegnare)",
    description:
      "Hai compilato il modulo — ora restituiscilo in modo pulito. Come appiattirlo perché le risposte non si possano più cambiare, allegarlo nel modo giusto, e verificare che arrivi senza perdere i dati.",
  },
  {
    id: "guides/how-to-fill-government-pdf-forms-on-phone",
    slug: "guide/come-compilare-moduli-pdf-della-pubblica-amministrazione-dal-telefono",
    title: "Come compilare moduli PDF della pubblica amministrazione dal telefono",
    description:
      "I moduli della pubblica amministrazione sono spesso scansioni non interattive con un formato rigido. Come completarli dal telefono, gestire i campi scomodi e seguire le istruzioni dell’ente stesso.",
  },
  {
    id: "guides/mobile-pdf-form-workflow",
    slug: "guide/flusso-di-lavoro-mobile-per-i-moduli-pdf",
    title: "Il flusso di lavoro mobile per i moduli PDF (dalla ricezione all’invio)",
    description:
      "Una routine ripetibile e pensata per il telefono: ricevi, apri nell’app giusta, compila, firma, appiattisci, invia. Il percorso completo senza bisogno di un computer.",
  },
  {
    id: "guides/best-pdf-form-app-for-iphone",
    slug: "guide/migliore-app-per-moduli-pdf-su-iphone",
    title: "Migliore app per moduli PDF su iPhone (cosa cercare)",
    description:
      "Cosa conta davvero in un’app per moduli PDF su iPhone — riconoscimento dei campi, testo sui moduli non interattivi, firma, privacy sul dispositivo — e come valutarne una per i tuoi moduli.",
  },
  {
    id: "guides/best-pdf-form-app-for-android",
    slug: "guide/migliore-app-per-moduli-pdf-su-android",
    title: "Migliore app per moduli PDF su Android (come scegliere)",
    description:
      "Come scegliere un’app per moduli PDF su Android: riconoscimento dei campi, testo sui moduli non interattivi e privacy sul dispositivo — e perché un’app dedicata batte il visualizzatore predefinito per i moduli.",
  },
  {
    id: "guides/pdf-forms-for-small-business",
    slug: "guide/moduli-pdf-per-piccole-imprese",
    title: "Moduli PDF per piccole imprese (raccolta dati, ordini, risorse umane)",
    description:
      "I moduli di tutti i giorni su cui si basa una piccola impresa — raccolta dati, ordini, prenotazioni, semplici pratiche del personale — e come compilarli, raccoglierli e gestirli come PDF senza comprare una piattaforma per moduli.",
  },
  {
    id: "guides/how-to-send-client-intake-forms",
    slug: "guide/come-inviare-moduli-di-raccolta-dati-per-i-clienti",
    title: "Come inviare moduli di raccolta dati per un nuovo cliente (in modo pulito e privato)",
    description:
      "Raccogli i dati di un nuovo cliente in un unico passaggio ordinato. Come inviare un modulo PDF di raccolta dati facile da compilare, che torna completo, e che mantiene privati i dati del cliente.",
  },
  {
    id: "guides/how-to-use-pdf-forms-for-contracts",
    slug: "guide/come-usare-i-moduli-pdf-per-i-contratti",
    title: "Come usare i moduli PDF per i contratti (campi e firma)",
    description:
      "Trasforma un contratto in un PDF compilabile: campi per nomi, date e sigle, uno spazio per la firma e un passaggio di appiattimento perché la versione firmata non si possa più alterare. Con i limiti onesti inclusi.",
  },
  {
    id: "guides/how-to-manage-pdf-application-forms",
    slug: "guide/come-gestire-i-moduli-di-candidatura-in-pdf",
    title: "Come gestire i moduli di candidatura in PDF (raccogliere e valutare)",
    description:
      "Ricevi candidature come PDF? Come raccoglierle, valutarle, confrontarle e archiviarle senza perdere il filo — un sistema semplice per gestire una pila di moduli compilati.",
  },
  {
    id: "guides/pdf-forms-for-consultants",
    slug: "guide/moduli-pdf-per-consulenti",
    title: "Moduli PDF per consulenti (questionari e definizione dell’incarico)",
    description:
      "Questionari conoscitivi, schede per definire l’incarico e moduli di feedback — il lato «moduli» della consulenza, gestito come PDF compilabili che i clienti possono completare su qualsiasi dispositivo.",
  },
  {
    id: "guides/pdf-forms-for-agencies",
    slug: "guide/moduli-pdf-per-agenzie",
    title: "Moduli PDF per agenzie (onboarding, brief, approvazioni)",
    description:
      "Pacchetti di onboarding per i clienti, moduli per i brief creativi e schede di approvazione — i moduli con più soggetti coinvolti che le agenzie gestiscono ogni giorno, come PDF compilabili che chiunque può completare.",
  },
  {
    id: "guides/pdf-forms-for-freelancers",
    slug: "guide/moduli-pdf-per-freelance",
    title: "Moduli PDF per freelance (raccolta dati, accordi, acconti)",
    description:
      "Raccolta dati del progetto, semplici accordi di servizio e autorizzazioni per gli acconti — l’insieme essenziale di moduli PDF compilabili di cui un freelance ha bisogno, senza abbonamenti e senza dover caricare nulla.",
  },
  {
    id: "guides/document-collection-workflows-with-pdf",
    slug: "guide/flussi-di-lavoro-per-raccogliere-documenti-con-pdf",
    title: "Flussi di lavoro per raccogliere documenti con PDF",
    description:
      "Raccogli file e moduli firmati dai clienti? Costruisci un flusso di lavoro ripetibile per la raccolta in PDF — una checklist, formati coerenti e un modo ordinato per tenere traccia di cosa manca ancora.",
  },
  {
    id: "guides/pdf-form-best-practices",
    slug: "guide/buone-pratiche-per-i-moduli-pdf",
    title: "Buone pratiche per i moduli PDF (moduli che le persone finiscono davvero)",
    description:
      "Progetta moduli che le persone finiscono davvero di compilare: etichette chiare, spaziatura vera, campi sensati, uno spazio per la firma ben visibile e un passaggio di appiattimento. Regole pratiche per chi crea e chi invia i moduli.",
  },
  {
    id: "guides/pdf-form-not-working",
    slug: "guide/il-modulo-pdf-non-funziona",
    title: "Il modulo PDF non funziona? Diagnosi e soluzioni",
    description:
      "Un modulo PDF che si comporta male ha di solito una delle poche cause consuete. Una diagnosi rapida per capire quale ti riguarda — campi mancanti, non riesci a scrivere, non si salva, sola lettura — e dove intervenire.",
  },
  {
    id: "guides/pdf-form-fields-missing",
    slug: "guide/mancano-i-campi-nel-modulo-pdf",
    title: "Mancano i campi nel modulo PDF? Perché e come recuperarli",
    description:
      "Apri un modulo e i campi non ci sono? Perché i campi interattivi spariscono in alcuni visualizzatori, come recuperarli, e cosa fare quando in realtà non ce ne sono mai stati.",
  },
  {
    id: "guides/why-pdf-form-wont-save",
    slug: "guide/perche-il-modulo-pdf-non-si-salva",
    title: "Perché il modulo PDF non si salva? E come risolverlo",
    description:
      "Compili un modulo e le risposte spariscono quando lo riapri? Perché alcuni programmi si limitano a stampare i dati del modulo invece di salvarli — e i modi affidabili per far restare le tue risposte.",
  },
  {
    id: "guides/why-pdf-form-is-read-only",
    slug: "guide/perche-il-modulo-pdf-e-in-sola-lettura",
    title: "Perché il modulo PDF è in sola lettura? E cosa fare",
    description:
      "Il tuo modulo si apre bloccato e in grigio? Perché i moduli vengono impostati in sola lettura, come distinguere una protezione voluta da una stranezza del visualizzatore, e le opzioni oneste per compilarlo comunque.",
  },
  {
    id: "guides/pdf-form-not-printing-correctly",
    slug: "guide/il-modulo-pdf-non-stampa-correttamente",
    title: "Il modulo PDF non stampa correttamente? Correggi i campi vuoti",
    description:
      "Il modulo si stampa con campi vuoti, testo spostato o bordi tagliati? I problemi di stampa specifici dei moduli — soprattutto i valori dei campi mancanti — e le impostazioni che risolvono ciascuno.",
  },
  {
    id: "guides/pdf-form-font-problems",
    slug: "guide/problemi-di-carattere-nei-moduli-pdf",
    title: "Problemi di carattere nei moduli PDF (dimensione automatica, taglio, sostituzione)",
    description:
      "Il testo nel campo è troppo grande, troppo piccolo o si rimpicciolisce da solo mentre scrivi? Le stranezze tipografiche specifiche dei campi del modulo — dimensione automatica, sostituzione, taglio — e come ottenere risposte pulite e leggibili.",
  },
  {
    id: "guides/pdf-form-formatting-issues",
    slug: "guide/problemi-di-formattazione-nei-moduli-pdf",
    title: "Problemi di formattazione nei moduli PDF (allineamento e sovrapposizione)",
    description:
      "Campi disallineati, risposte che escono dai bordi, il modulo che appare diverso sullo schermo di qualcun altro? I problemi di impaginazione dei moduli che cambiano da un visualizzatore all’altro, e come ottenere un risultato coerente.",
  },
  {
    id: "guides/pdf-form-submission-errors",
    slug: "guide/errori-di-invio-dei-moduli-pdf",
    title: "Errori di invio dei moduli PDF (quando l’invio fallisce)",
    description:
      "Il pulsante di invio di un modulo fallisce o non fa nulla? Perché i pulsanti di invio integrati dipendono dal server di chi ha creato il modulo, cosa significano gli errori, e il modo manuale affidabile per inviare comunque il tuo modulo.",
  },
  {
    id: "guides/pdf-form-compatibility-problems",
    slug: "guide/problemi-di-compatibilita-dei-moduli-pdf",
    title: "Problemi di compatibilità dei moduli PDF (XFA e moduli dinamici)",
    description:
      "Un modulo che si apre in un programma e si rompe in un altro di solito usa funzioni che non tutti i visualizzatori supportano. Come riconoscere i moduli dinamici, cosa causa l’incompatibilità, e quali opzioni hai.",
  },
  {
    id: "guides/fix-pdf-form-errors",
    slug: "guide/risolvere-gli-errori-nei-moduli-pdf",
    title: "Risolvere gli errori nei moduli PDF — una checklist rapida di primo soccorso",
    description:
      "I passaggi universali di primo soccorso per un modulo PDF che si comporta male: cambia visualizzatore, scaricalo di nuovo, aggiornalo, scrivi il testo sopra, appiattiscilo. Prova questi prima di scavare in una causa specifica.",
  },
];
