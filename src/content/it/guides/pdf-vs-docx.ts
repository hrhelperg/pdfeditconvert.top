import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx",
  h1: "PDF o DOCX — quale formato scegliere?",
  description:
    "Quando scegliere il PDF invece del DOCX, e viceversa. Confronto chiaro su modificabilità, fedeltà, firma e condivisione.",
  updated: "2026-05-11",
  intro: [
    "PDF e DOCX risolvono problemi diversi. Il PDF è un formato bloccato e stampabile, che appare identico su ogni dispositivo. Il DOCX è un formato di lavoro modificabile, che chiunque abbia Word, Google Docs o una suite per ufficio può rimodellare, restilizzare e riformattare.",
    "Scegliere il formato giusto per ogni compito evita la maggior parte dei grattacapi che le persone associano a entrambi. Inviare un contratto definitivo come DOCX invita a modifiche accidentali. Inviare una bozza di lavoro come PDF rende scomoda la revisione. La scelta non è estetica — riguarda a cosa serve il documento.",
    "Questa guida spiega quando ciascun formato vince, con esempi concreti tratti da contratti, bozze, fatture, report e i tipi di documenti che piccole imprese e privati gestiscono ogni settimana.",
  ],
  steps: [
    {
      title: "Usa il PDF quando il documento è definitivo",
      body: "Contratti, accordi firmati, fatture, brochure, report destinati a clienti o parti interessate. Qualsiasi cosa in cui il destinatario debba vedere esattamente ciò che hai visto tu, senza poterla modificare senza che se ne accorga nessuno.",
    },
    {
      title: "Usa il DOCX quando il documento è ancora in scrittura",
      body: "Bozze, documenti collaborativi, qualsiasi cosa in fase di revisione, modelli che verranno riusati e adattati. I commenti e le revisioni tracciate funzionano davvero solo nel DOCX — sono la ragione d’essere del formato.",
    },
    {
      title: "Usa il PDF per l’archiviazione",
      body: "I PDF sono pensati per la conservazione a lungo termine. Il formato si visualizza allo stesso modo tra 10 anni. I file DOCX possono rompersi in modo sottile tra versioni di Word e sistemi operativi diversi — va bene per i documenti di lavoro, rischioso per gli archivi.",
    },
    {
      title: "Usa il DOCX quando il contenuto deve essere estratto",
      body: "Riportare il testo in un altro strumento, riutilizzare una sezione per un articolo del blog, riscrivere con uno stile diverso — tutto più facile dal DOCX, dove il contenuto è già strutturato e modificabile.",
    },
    {
      title: "Converti tra i due quando serve",
      body: "I buoni strumenti PDF convertono in entrambe le direzioni con alta fedeltà per i documenti basati su testo. Il flusso tipico: modifichi in DOCX, esporti in PDF quando condividi all’esterno. Ricevi un PDF, lo converti in DOCX se devi riutilizzarne il contenuto.",
    },
    {
      title: "Usa il PDF quando ricevi da qualcuno che non conosci",
      body: "I file DOCX possono contenere macro e oggetti incorporati che rappresentano rischi per la sicurezza. I PDF sono più sicuri da aprire da fonti non attendibili, anche se dovresti comunque tenere aggiornato il tuo lettore di PDF.",
    },
  ],
  tips: [
    "Non inviare mai una bozza di contratto come DOCX a una parte esterna, a meno che tu non stia invitando delle modifiche — potrebbero modificarla senza che tu lo sappia, e noterai le differenze solo confrontando con attenzione.",
    "Non inviare mai una fattura definitiva come DOCX — dovrebbe essere non modificabile. Il PDF è la scelta corretta ogni volta.",
    "Se un destinatario chiede un «PDF modificabile», di solito intende un DOCX. Chiedi prima di dare per scontato, poi converti.",
    "I PDF con firme dovrebbero restare PDF. Riconvertirli in DOCX elimina la firma.",
    "Per i documenti con campi modulo, il PDF è di solito la scelta migliore — i campi modulo nei DOCX sono goffi e incoerenti tra un editor e l’altro.",
  ],
  mobileNote:
    "Su mobile, il DOCX richiede Word, Google Docs o un’altra app per ufficio per essere visualizzato correttamente. Il PDF si apre nativamente su iOS e Android con i visualizzatori integrati. Questo da solo rende il PDF la scelta giusta per la maggior parte dei documenti condivisi — il tuo destinatario non dovrà installare nulla per leggerlo.",
  faq: [
    {
      q: "Posso modificare un PDF direttamente senza convertirlo?",
      a: "Sì, con un editor PDF adatto. Modificare un PDF è più vincolato rispetto a modificare un DOCX — è pensato per correzioni, firme e piccoli cambiamenti, non per riscritture importanti. Per modifiche sostanziali, convertire prima in DOCX ha di solito più senso.",
    },
    {
      q: "Quale formato produce file più piccoli?",
      a: "Dipende dal contenuto. Un DOCX ricco di testo è di solito più piccolo del PDF equivalente. I PDF ricchi di immagini possono essere più piccoli di un DOCX se ben compressi, perché la compressione delle immagini nel PDF è più flessibile.",
    },
    {
      q: "I miei font sopravviveranno alla conversione?",
      a: "Per lo più sì. Se un font non è disponibile sul dispositivo di destinazione, ne viene sostituito automaticamente uno simile. Usa font comuni (Inter, Helvetica, Calibri, Arial) per ridurre al minimo le sostituzioni visibili.",
    },
    {
      q: "Il PDF/A è diverso dal PDF normale?",
      a: "Sì. Il PDF/A è un sottoinsieme rigoroso per l’archiviazione, che incorpora tutti i font e non ammette dipendenze esterne. Richiesto da alcuni archivi pubblici e legali. Il PDF standard va bene per quasi tutto il resto.",
    },
    {
      q: "Il DOCX può contenere una firma?",
      a: "Può contenere un’immagine di una firma, ma la firma non ha alcuna validità crittografica. I PDF supportano vere firme digitali che vincolano la firma al documento. Per tutto ciò che deve essere firmato legalmente, il PDF è il formato giusto.",
    },
  ],
  related: [
    { label: "PDF o DOCX — confronto completo", path: "/compare/pdf-vs-docx" },
    { label: "PDF Converter", path: "/pdf-converter" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
