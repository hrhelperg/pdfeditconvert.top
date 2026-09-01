import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-format-for-sharing-documents",
  h1: "Miglior formato per condividere documenti (PDF, DOCX, immagini a confronto)",
  description:
    "Quando il PDF è il formato giusto da condividere, quando non lo è, e come si comportano davvero le alternative realistiche (DOCX, immagini, HTML, Markdown) nelle situazioni di ogni giorno.",
  updated: "2026-05-29",
  intro: [
    "Non esiste un unico formato migliore per condividere documenti — esiste un formato migliore per ogni tipo di situazione di condivisione. Il PDF è quello giusto quasi sempre, ma non sempre. Il DOCX è giusto per i documenti che verranno modificati. Le immagini sono giuste per singoli contenuti visivi. L’HTML è giusto per il web. Il Markdown è giusto per il testo semplice con una struttura leggera. Ognuno eccelle in una cosa ed è scomodo in tutte le altre.",
    "Il modo giusto di decidere è pensare a cosa farà il destinatario con il file. Leggere e archiviare? PDF. Modificare? DOCX. Guardare sul web? HTML. Citare in una chat? Markdown. Guardare una singola immagine? PNG o JPG. Far passare ogni condivisione dal PDF è comodo ma genera attrito quando il destinatario voleva modificare il documento.",
    "Questa guida percorre la scelta scenario per scenario. L’obiettivo è inviare il formato che il destinatario userà davvero, non quello che a te risulta più facile produrre.",
  ],
  steps: [
    {
      title: "Se leggeranno e archivieranno, invia PDF",
      body: "Impaginazione bloccata, identica su ogni dispositivo, firmabile, archiviabile. Il PDF è il predefinito per i documenti condivisi e la scelta giusta la maggior parte delle volte.",
    },
    {
      title: "Se modificheranno, invia DOCX o Google Docs",
      body: "La modifica vera avviene in DOCX o in Docs. Inviare un PDF quando il destinatario dovrà modificarlo lo costringe a riconvertirlo — otterrà solo un’approssimazione di ciò che gli hai mandato.",
    },
    {
      title: "Se lo guarderanno sul web, invia un link o HTML",
      body: "Le pagine web si visualizzano nei browser senza bisogno di un download. Per i contenuti pensati per essere nativamente web, l’HTML batte il PDF.",
    },
    {
      title: "Se è testo semplice con struttura leggera, invia Markdown",
      body: "Appunti, contenuti tecnici, documentazione leggera. Il Markdown è leggibile come testo in qualsiasi contesto e si visualizza bene dove è supportato.",
    },
    {
      title: "Se è una singola immagine, invia PNG o JPG",
      body: "Immagine singola, nessun testo sottostante, nessuna pagina da gestire. PNG per nitidezza/trasparenza, JPG per le foto. Il PDF avvolge inutilmente una singola immagine.",
    },
    {
      title: "In caso di dubbio, preferisci il PDF",
      body: "Quando non puoi prevedere cosa farà il destinatario con il file, il PDF è il ripiego più sicuro. Può essere letto da chiunque, non cambia dopo l’invio, e si converte in altri formati se serve.",
    },
  ],
  tips: [
    "Chiedi al destinatario se dovrà modificare il documento. La risposta cambia il formato giusto.",
    "Non inviare sia il PDF che il DOCX a meno che non te lo chiedano. Segnala indecisione.",
    "Un contenuto su più pagine in qualsiasi formato diverso dal PDF di solito è sbagliato.",
    "Gli strumenti interni (chat, wiki, piattaforme di documenti) spesso hanno formati nativi che battono il PDF nel loro contesto. Non esportare in PDF per riflesso per una condivisione interna.",
    "Nel dubbio sul formato, invia il PDF — i destinatari possono convertirlo se ne hanno bisogno.",
  ],
  mobileNote:
    "Il telefono oggi riceve la maggior parte dei documenti condivisi, e il PDF funziona meglio su schermi piccoli perché l’impaginazione è bloccata. L’app PDF Editor legge, firma e condivide PDF su iOS e Android senza sorprese su come apparirà il file su ogni dispositivo.",
  faq: [
    {
      q: "Il PDF è davvero il predefinito migliore?",
      a: "Per condividere documenti finiti, sì. Per le bozze di lavoro, il DOCX è migliore. Per singole immagini, PNG o JPG. Scegli in base a cosa farà il destinatario.",
    },
    {
      q: "Quando il DOCX è meglio del PDF?",
      a: "Quando il destinatario modificherà il documento. Il PDF è difficile da modificare; il DOCX è facile. Non costringerlo a convertire.",
    },
    {
      q: "Dovrei inviare entrambi?",
      a: "Solo se te lo chiedono esplicitamente. Inviare due formati segnala che non sei sicuro di quale vuole il destinatario, e dovrà scegliere lui.",
    },
    {
      q: "E i link ai documenti cloud?",
      a: "Utili per documenti collaborativi (Docs, Sheets). Per condivisioni a senso unico di documenti finiti, i download sono più semplici dei permessi sui link.",
    },
    {
      q: "Il dispositivo del destinatario conta?",
      a: "Un po’ — i dispositivi più vecchi potrebbero non aprire le funzioni più recenti del DOCX. Il PDF è il formato più universalmente compatibile.",
    },
  ],
  related: [
    { label: "Strumenti PDF — l’elenco completo, nel browser", path: "/pdf-tools" },
    { label: "PDF o DOCX — confronto delle funzioni", path: "/guides/pdf-vs-docx" },
    { label: "PDF o Google Docs", path: "/guides/pdf-vs-google-docs" },
    { label: "PDF o immagini per condividere documenti", path: "/guides/pdf-vs-images-for-sharing-documents" },
  ],
  parentHub: { label: "Strumenti PDF — gratuiti, nel browser", path: "/pdf-tools" },
};

export default content;
