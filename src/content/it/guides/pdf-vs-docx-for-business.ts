import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx-for-business",
  h1: "PDF o DOCX in azienda (contratti, report, distribuzione)",
  description:
    "Perché i documenti aziendali vengono quasi sempre distribuiti come PDF ma vivono come DOCX. Lo strumento giusto in ogni fase della vita di un contratto, un report o una fattura.",
  updated: "2026-05-29",
  intro: [
    "I documenti aziendali hanno un ciclo di vita abbastanza prevedibile. Vengono scritti in Word (DOCX), rivisti e modificati in Word, finalizzati in Word, e poi esportati in PDF per la consegna, la firma, l’archivio e la distribuzione. Lo stesso file esiste in due formati in fasi diverse, e usare il formato sbagliato nella fase sbagliata è da dove nasce la maggior parte dell’attrito.",
    "Il DOCX è il formato di lavoro perché è modificabile, adatto alla collaborazione e tiene bene traccia delle modifiche. Il PDF è il formato di consegna perché blocca l’impaginazione, ha lo stesso aspetto su ogni dispositivo, supporta le firme elettroniche, ed è lo standard universale per i documenti aziendali archiviati.",
    "Questa guida percorre il ciclo di vita fase per fase — quando usare quale formato, come passare in modo pulito dall’uno all’altro, e gli errori comuni che le aziende commettono inviando il formato sbagliato al momento sbagliato.",
  ],
  steps: [
    {
      title: "Scrivi in DOCX dove avviene la modifica",
      body: "Microsoft Word, Google Docs (esportato in DOCX), Pages → DOCX. Il formato supporta la modifica vera, i commenti, il tracciamento delle modifiche, il lavoro multi-autore. Il PDF no, nonostante alcuni strumenti facciano finta.",
    },
    {
      title: "Negozia i contratti in DOCX con le revisioni tracciate",
      body: "Le revisioni contrattuali appartengono al DOCX. La controparte vede cosa hai cambiato, commenta ogni punto e produce una controproposta. Esistono strumenti per revisionare i PDF, ma sono più lenti e meno collaborativi.",
    },
    {
      title: "Esporta in PDF quando la versione è definitiva",
      body: "Word in PDF nel tuo browser produce un’esportazione pulita con font incorporati e impaginazione stabile. Questa è la versione che va al cliente, viene firmata, e vive nell’archivio.",
    },
    {
      title: "Firma e consegna come PDF",
      body: "Le firme si applicano al PDF, non al DOCX. Firma PDF o l’app PDF Editor catturano la firma sul PDF bloccato; la fonte DOCX resta come registro modificabile.",
    },
    {
      title: "Archivia il PDF, conserva il DOCX",
      body: "Il PDF è il registro ufficiale di ciò che è stato consegnato o firmato. Il DOCX viene conservato nel caso tu debba produrre in seguito un documento correlato. Entrambi hanno un ruolo; non confonderli.",
    },
    {
      title: "Converti il PDF di nuovo in DOCX solo se costretto",
      body: "PDF in Word recupera il testo da un PDF quando non hai la fonte. Il risultato è approssimativo — aspettati di dover sistemare l’impaginazione. Trattalo come ripiego, non come flusso di lavoro.",
    },
  ],
  tips: [
    "Non inviare il DOCX a un cliente a meno che non lo richieda esplicitamente. La versione PDF è quella su cui si basa l’accordo; il DOCX è la tua fonte di lavoro.",
    "Traccia le modifiche solo nel DOCX. Esistono strumenti di annotazione per PDF, ma non sostituiscono un vero tracciamento delle modifiche.",
    "Incorpora i font nell’esportazione PDF. Un PDF che si visualizza in modo diverso sul computer del cliente sembra poco professionale.",
    "Comprimi il PDF per la mail o per il caricamento su un portale. La fonte DOCX non ha bisogno di compressione; è piccola. Il PDF spesso sì.",
    "Tieni entrambi i formati nella cartella del progetto. Il PDF in /finale/, il DOCX in /bozze/ o /fonte/.",
  ],
  mobileNote:
    "Il telefono gestisce spesso i momenti finali del lavoro PDF aziendale — firmare un contratto, comprimere un report, inviare la versione definitiva. L’app PDF Editor gestisce tutto questo su iOS e Android, completando il lavoro sul DOCX fatto in precedenza al computer.",
  faq: [
    {
      q: "Perché non usare semplicemente il PDF per tutto?",
      a: "Il PDF non supporta una vera modifica, il tracciamento delle modifiche o la collaborazione multi-autore. Per la stesura, il DOCX è davvero migliore.",
    },
    {
      q: "Perché non usare semplicemente il DOCX anche per la consegna?",
      a: "Il DOCX si visualizza in modo diverso tra versioni e dispositivi diversi. I clienti vedono impaginazioni diverse da quella che intendevi tu. Il PDF blocca l’aspetto.",
    },
    {
      q: "I contratti vanno inviati come PDF o come DOCX?",
      a: "Contratti definitivi: PDF, firmato. Bozze in negoziazione: DOCX con revisioni tracciate. Strumenti diversi per fasi diverse.",
    },
    {
      q: "E per l’archivio — DOCX o PDF?",
      a: "PDF, come registro di ciò che è stato consegnato o firmato. Tieni anche il DOCX come riferimento, ma il PDF è la copia d’archivio ufficiale.",
    },
    {
      q: "Quando ha senso convertire da PDF a Word?",
      a: "Quando devi modificare un PDF e non hai la fonte. Aspettati di dover sistemare l’impaginazione; la conversione è approssimativa.",
    },
  ],
  related: [
    { label: "PDF per le aziende — contratti e flussi di lavoro", path: "/pdf-for-business" },
    { label: "Word a PDF — esportazioni pulite per la distribuzione", path: "/word-to-pdf" },
    { label: "PDF to Word — recupera il testo modificabile", path: "/pdf-to-word" },
    { label: "PDF o DOCX — confronto completo delle funzioni", path: "/guides/pdf-vs-docx" },
  ],
  parentHub: { label: "PDF per le aziende — contratti e flussi di lavoro", path: "/pdf-for-business" },
};

export default content;
