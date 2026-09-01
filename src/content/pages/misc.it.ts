import type {
  ContactContent,
  GuidesIndexContent,
  LegalContent,
  ToolsIndexContent,
} from "@/types/content";
import { PRIVACY_UPDATED } from "@/content/legal/privacy";
import { TERMS_UPDATED } from "@/content/legal/terms";

export const TOOLS_INDEX_IT: ToolsIndexContent = {
  crumbLabel: "Strumenti PDF gratuiti",
  heroEyebrow: "Strumenti PDF gratuiti",
  heroH1: "Strumenti PDF nel browser — i tuoi file non lasciano mai il tuo dispositivo.",
  heroHighlight: "non lasciano mai",
  heroLead:
    "Unisci, dividi, ruota, marca e converti i tuoi PDF senza caricare nulla. Tutta l’elaborazione avviene in locale, nel tuo browser, gratis e senza registrazione.",
  privacyNote:
    "Tutti gli strumenti di questa pagina elaborano i tuoi file in locale, nel tuo browser. Non viene inviato nulla ai nostri server e non viene conservato nulla.",
  clusterHeading: "{count} guide su come lavorare con i PDF nel browser",
  goingFurtherHeading: "Andare oltre con i PDF",
  goingFurtherBody:
    "Questi strumenti risolvono attività puntuali nel browser. Per i metodi che ci sono dietro — modificare, convertire, firmare, proteggere e scansionare — inizia dalle sezioni qui sotto.",
  hubs: [
    { id: "pdf-editor", label: "Editor di PDF" },
    { id: "pdf-converter", label: "Convertitore di PDF" },
    { id: "pdf-forms", label: "Moduli PDF" },
    { id: "sign-pdf", label: "Firma PDF" },
    { id: "pdf-security", label: "Sicurezza dei PDF" },
    { id: "scan-to-pdf", label: "Scansiona in PDF" },
    {
      id: "compare/pdf-app-vs-online-pdf-tools",
      label: "App per PDF o strumenti online",
    },
  ],
  appCtaHeading: "Ti servono strumenti PDF sul telefono?",
  appCtaSub: "Scarica l’app PDF Editor per iPhone e Android — gratis.",
};

export const GUIDES_INDEX_IT: GuidesIndexContent = {
  h1: "Guide sui PDF",
  lead: "{count} tutorial pratici, pensati per il telefono, su modifica, conversione, compressione, firma e protezione dei tuoi PDF — raggruppati per strumento o per argomento.",
};

export const CONTACT_IT: ContactContent = {
  h1: "Contatti",
  lead: "Domande, collaborazioni, richieste stampa o pareri sull’app PDF Editor — leggiamo ogni mail.",
  emailLabel: "Mail",
  officeLabel: "Sede legale",
  sections: [
    {
      heading: "Cosa aspettarti",
      body: "La mail è il nostro unico canale di contatto: nessun sistema di ticket, nessun chatbot in mezzo. Le risposte arrivano dallo stesso piccolo team che sviluppa l’app, di solito entro due giorni lavorativi. Per una domanda sull’app, indica dispositivo e versione del sistema; per un problema con un documento specifico, descrivi cosa stavi facendo invece di allegare il file, perché non vogliamo né ci servono i tuoi documenti.",
    },
    {
      heading: "Con cosa non possiamo aiutarti",
      body: "Gli strumenti di questo sito funzionano interamente sul tuo dispositivo, quindi non ci arriva nulla di ciò che elabori. Questo significa anche che non possiamo recuperare un file che hai convertito, reinviarti un download né consultare nulla per tuo conto: non esiste nessuna copia da parte nostra. Se uno strumento ha avuto un problema con un PDF specifico, raccontaci che tipo di file era (scansionato, protetto da password, un modulo compilato) e cosa ha fatto lo strumento.",
    },
    {
      heading: "Privacy e richieste legali",
      body: "Le domande sulla protezione dei dati, le richieste di cancellazione e le comunicazioni legali vanno allo stesso indirizzo e arrivano a hrhelperg s.r.o., presso la sede legale indicata sopra.",
    },
  ],
  legalSentence:
    "La nostra {privacy} spiega cosa viene raccolto e cosa no, e i nostri {terms} regolano l’uso del sito e degli strumenti.",
  privacyLinkLabel: "informativa sulla privacy",
  termsLinkLabel: "termini di utilizzo",
  tryAppHeading: "Scopri l’app",
};

/**
 * Italian privacy policy.
 *
 * A translation, not a separate policy: the operator, the registered
 * office, the contact address, the analytics vendor and the legal basis are
 * the same facts the English version states, because the same company
 * processes the same data under the same law.
 *
 * "RGPD" replaces "GDPR" deliberately, for the same reason it does in the
 * French and Spanish versions: the regulation applies because the
 * controller is established in the EU, and RGPD (Regolamento Generale sulla
 * Protezione dei Dati) is the term an Italian reader — themselves inside
 * the EU — already uses for the same regulation.
 */
export const PRIVACY_IT: LegalContent = {
  h1: "Informativa sulla privacy",
  updated: PRIVACY_UPDATED,
  sections: [
    {
      heading: "Chi siamo",
      body: [
        "pdfeditconvert.top è gestito da hrhelperg s.r.o., una società a responsabilità limitata ceca con sede legale in Husitská 502/36, Žižkov, 130 00 Praga 3, Repubblica Ceca. Puoi scriverci a info@hrhelperg.com.",
      ],
    },
    {
      heading: "Cosa raccoglie questo sito",
      body: [
        "Questo sito ha finalità informativa. Non richiede di creare un account, di inviare documenti né di condividere dati personali per leggere nessuna pagina.",
        "Usiamo uno strumento di analisi rispettoso della privacy (WebmasterID) per capire quali pagine vengono visitate e come i lettori ci trovano. Registra l’indirizzo della pagina visitata, la tua area geografica approssimativa, il tipo di dispositivo e il sito di provenienza. Non usa cookie pubblicitari e non costruisce un tuo profilo su altri siti.",
      ],
    },
    {
      heading: "Cosa raccoglie l’app mobile",
      body: [
        "L’app PDF Editor può salvare dati in locale sul tuo dispositivo (file aperti, le tue impostazioni) e può sincronizzare i file con il servizio cloud che scegli (iCloud, Google Drive e altri) se attivi questa opzione. Consulta le informazioni sulla privacy dell’app su App Store e Google Play per l’elenco ufficiale.",
      ],
    },
    {
      heading: "Cookie",
      body: [
        "Usiamo un numero limitato di cookie e tecnologie di archiviazione simili per il funzionamento di base del sito e per le misurazioni di traffico. Non usiamo cookie pubblicitari.",
      ],
    },
    {
      heading: "I tuoi diritti",
      body: [
        "Se risiedi nell’Unione Europea o nello Spazio Economico Europeo, hai diritti riconosciuti dal RGPD, tra cui accesso, rettifica, cancellazione, limitazione del trattamento e portabilità. Scrivi a info@hrhelperg.com per esercitarli.",
      ],
    },
    {
      heading: "Contatti",
      body: [
        "Le domande su questa informativa possono essere inviate a info@hrhelperg.com.",
      ],
    },
    {
      heading: "Modifiche",
      body: [
        "Possiamo aggiornare questa informativa. Le modifiche rilevanti saranno segnalate in questa pagina, insieme a una nuova data di aggiornamento.",
      ],
    },
  ],
};

/** Italian terms of service — a translation of the same terms. */
export const TERMS_IT: LegalContent = {
  h1: "Termini di utilizzo",
  updated: TERMS_UPDATED,
  sections: [
    {
      heading: "A proposito di questi termini",
      body: [
        "Questi termini regolano l’uso di pdfeditconvert.top, gestito da hrhelperg s.r.o. (Husitská 502/36, Žižkov, 130 00 Praga 3, Repubblica Ceca).",
      ],
    },
    {
      heading: "Uso del sito",
      body: [
        "Puoi leggere, collegare e condividere le pagine di questo sito. Non puoi estrarre ampie porzioni di contenuto per ripubblicarle, né usare il sito in un modo che disturbi altre persone.",
      ],
    },
    {
      heading: "Sull’app PDF Editor",
      body: [
        "PDF Editor è un’app mobile distribuita tramite l’App Store di Apple e Google Play. Il suo utilizzo è regolato dai termini propri dell’app, mostrati durante l’installazione.",
      ],
    },
    {
      heading: "Nessuna garanzia",
      body: [
        "I contenuti di pdfeditconvert.top hanno finalità informativa generale e non costituiscono consulenza legale, fiscale o finanziaria. Ci impegniamo ragionevolmente a mantenerli corretti, ma non garantiamo che siano completi o adatti a uno scopo specifico.",
      ],
    },
    {
      heading: "Responsabilità",
      body: [
        "Nei limiti consentiti dalla legge ceca e dell’Unione Europea, hrhelperg s.r.o. non risponde di danni indiretti o consequenziali derivanti dall’uso di questo sito.",
      ],
    },
    {
      heading: "Legge applicabile",
      body: [
        "Questi termini sono regolati dalle leggi della Repubblica Ceca. Eventuali controversie saranno risolte davanti ai tribunali cechi competenti.",
      ],
    },
    {
      heading: "Contatti",
      body: [
        "Le domande su questi termini possono essere inviate a info@hrhelperg.com.",
      ],
    },
  ],
};
