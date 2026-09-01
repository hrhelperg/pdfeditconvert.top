import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-consultants",
  h1: "Flussi di lavoro PDF per consulenti (proposte, report, fatture)",
  description:
    "Il ritmo PDF di un consulente: proposte che convincono, report che si leggono bene anche dal telefono, fatture pronte in pochi secondi. Gli strumenti nel browser che tengono tutto snello.",
  updated: "2026-05-29",
  intro: [
    "Il lavoro di consulenza ruota attorno a tre documenti: la proposta che fa vincere l’incarico, il report che lo porta a termine, e la fattura che chiude il cerchio. Tutto il resto — deck di avvio, appunti delle interviste, aggiornamenti di stato — o è una bozza di uno di questi tre, oppure è materiale di lavoro che non esce mai dal progetto.",
    "Ognuno dei tre ha le sue abitudini in fatto di PDF. Le proposte devono sembrare sostanziose senza risultare pesanti; i report devono leggersi bene sul telefono, dove la maggior parte dei clienti li apre per primo; le fatture devono partire il giorno stesso in cui il lavoro finisce. Gli strumenti per fare bene tutte e tre le cose sono per lo più gratuiti, e il flusso di lavoro non cambia da un incarico all’altro.",
    "Questa guida descrive questo ritmo — cosa serve a ogni documento, cosa fa ogni strumento e dove va il tempo. Affinare questo ritmo nell’arco di un anno di incarichi fa risparmiare ore vere.",
  ],
  steps: [
    {
      title: "Proposta: essenziale, con il tuo brand, veloce",
      body: "Crea la proposta in Word partendo dal tuo modello. Mantienila sotto le 12 pagine: i clienti la scorrono, non la studiano. Esporta con Word a PDF. Copertina, descrizione del problema, approccio, deliverable, tempistiche, prezzi, termini. Comprimila sotto i 5 MB. Invia lo stesso giorno.",
    },
    {
      title: "Lettera d’incarico: PDF firmato e bloccato",
      body: "Una volta approvata la proposta, invia una lettera d’incarico firmata con Firma PDF. Il cliente la controfirma e te la rimanda. Salva entrambe le copie firmate in /Clienti/[Nome]/contratti/.",
    },
    {
      title: "Aggiornamenti intermedi: stato settimanale in PDF",
      body: "Un PDF breve (una pagina) inviato ogni settimana. Stato, blocchi, decisioni da prendere. Trattalo come un esercizio che ti costringe a pensare con chiarezza, non come un deliverable a sé.",
    },
    {
      title: "Report finale: strutturato per una lettura veloce",
      body: "Sintesi esecutiva in prima pagina. Metodologia e dettagli in fondo. Numera ogni pagina. Incorpora i font. Usa dimensioni del testo leggibili da telefono. La maggior parte dei clienti legge dal telefono prima ancora che dal computer.",
    },
    {
      title: "Fattura: lo stesso giorno della chiusura",
      body: "Fattura da modello, numero progressivo, Word a PDF, inviata entro 24 ore dalla chiusura dell’incarico. Una fattura in ritardo diventa quasi sempre un pagamento in ritardo.",
    },
    {
      title: "Archivia l’incarico",
      body: "Sposta l’intera cartella del cliente in /Storico/[Anno]/[Cliente]/ quando viene pagato. La cartella attiva resta snella; lo storico resta consultabile per casi studio e riferimenti futuri.",
    },
  ],
  tips: [
    "Non personalizzare il modello per ogni proposta. Personalizza il contenuto, mantieni la struttura sempre uguale: così i clienti ti riconoscono da un incarico all’altro.",
    "Tieni traccia di ogni proposta inviata in un foglio con data, cliente, importo, esito. Il tasso di conversione ti dice se conviene affinare l’offerta.",
    "I report che si leggono bene dal telefono usano un testo più grande e paragrafi più corti rispetto a quelli pensati per la stampa. Ottimizza per il dispositivo che il cliente usa per primo.",
    "Metti la filigrana «BOZZA» sulle versioni intermedie durante l’incarico, mai su quella finale. È proprio l’assenza della filigrana a far sembrare il documento definitivo.",
    "Tieni una cartella /casi-studio/ con esempi anonimizzati di incarichi passati. Sono la prova più convincente nelle proposte future.",
  ],
  mobileNote:
    "I consulenti vivono in viaggio. L’app PDF Editor gestisce dal telefono le compressioni dell’ultimo minuto per una proposta, le firme sulla lettera d’incarico e l’invio delle fatture — utile quando l’incarico si chiude in treno e la fattura deve partire prima di sera.",
  faq: [
    {
      q: "Quanto deve essere lunga una proposta?",
      a: "Sotto le 12 pagine per la maggior parte degli incarichi. I clienti scorrono il testo. Più la proposta è corta, più viene letta davvero.",
    },
    {
      q: "Serve una lettera d’incarico firmata?",
      a: "Sì. La proposta è un documento commerciale; la lettera d’incarico è il contratto vero e proprio. Non iniziare il lavoro senza averla.",
    },
    {
      q: "Con che frequenza devo inviare gli aggiornamenti intermedi?",
      a: "Settimanale è la scelta di default. Giornaliera per incarichi brevi e intensi. Mensile per quelli lunghi e a basso ritmo. Conta di più la costanza del formato.",
    },
    {
      q: "I report devono essere impaginati con cura grafica?",
      a: "Quanto basta per sembrare professionali, non tanto da rallentarti. Un modello tipografico pulito invecchia meglio di uno troppo elaborato.",
    },
    {
      q: "Quando va inviata la fattura?",
      a: "Lo stesso giorno in cui l’incarico si chiude. Ogni giorno di ritardo nell’invio tende a spostare il pagamento di più di un giorno dall’altra parte.",
    },
  ],
  related: [
    { label: "PDF per le aziende — contratti e flussi di lavoro", path: "/pdf-for-business" },
    { label: "Word a PDF — esportazioni per proposte e report", path: "/word-to-pdf" },
    { label: "Il miglior flusso di lavoro PDF per i freelance", path: "/guides/best-pdf-workflow-for-freelancers" },
    { label: "Come inviare i contratti in PDF", path: "/guides/how-to-send-contracts-as-pdf" },
  ],
  parentHub: { label: "PDF per le aziende — contratti e flussi di lavoro", path: "/pdf-for-business" },
};

export default content;
