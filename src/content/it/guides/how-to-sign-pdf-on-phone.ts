import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-phone",
  h1: "Come firmare un PDF dal telefono",
  description:
    "Aggiungi firme elettroniche legalmente valide ai tuoi PDF da iPhone o Android. Guida pratica con l’app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Stampare un PDF solo per firmarlo e riscansionarlo è ormai un anacronismo. Nella maggior parte degli ordinamenti le firme elettroniche sono accettate per i comuni contratti commerciali, gli NDA, i preventivi e le dichiarazioni di presa visione. Il tuo telefono è più che in grado di produrre una firma pulita e legalmente utilizzabile in meno di un minuto.",
    "Questa guida spiega come firmare un PDF su iPhone o Android usando l’app PDF Editor. La firma che salvi è riutilizzabile per ogni documento futuro — la disegni una volta sola. Da quel momento, firmare qualsiasi contratto è un’operazione di quattro tocchi: apri, tocca Firma, posiziona, esporta.",
    "Vedremo anche i casi in cui firmare dal telefono è *meglio* che alla scrivania: contratti che devono tornare indietro in fretta, firme mentre sei in viaggio, e flussi con più firmatari che passano da un telefono all’altro. Alla fine avrai una firma salvata, pronta per ogni documento futuro.",
  ],
  steps: [
    {
      title: "Apri il PDF",
      body: "Aggiungi il documento all’app PDF Editor da File, dal tuo cloud, dalla mail o da qualsiasi app di condivisione. Il flusso di firma funziona indipendentemente da dove arriva il PDF.",
    },
    {
      title: "Tocca lo strumento Firma",
      body: "Si trova nella barra degli strumenti di modifica. Scegli firma autografa, firma digitata o sigla. Lo strumento rileva automaticamente i campi firma esistenti se il PDF è stato predisposto per la firma.",
    },
    {
      title: "Disegna o digita la tua firma",
      body: "Solo la prima volta. Usa il dito, una Apple Pencil o una S Pen. Il risultato viene salvato sul dispositivo. Puoi modificarla o sostituirla in qualsiasi momento dalle Impostazioni.",
    },
    {
      title: "Posiziona la firma",
      body: "Trascinala nel punto giusto della pagina. Ridimensionala con le maniglie negli angoli. La firma diventa un normale oggetto del PDF, quindi puoi spostarla dopo averla posizionata.",
    },
    {
      title: "Aggiungi data e sigla se serve",
      body: "Molti contratti richiedono la data accanto alla firma e la sigla su ogni pagina. Un timbro data con un tocco e una variante salvata della sigla coprono entrambi i casi.",
    },
    {
      title: "Esporta la copia firmata",
      body: "Salva come nuovo file (consigliato — così conservi l’originale non firmato) oppure sovrascrivi. Il PDF esportato include i metadati della firma per la tenuta dei registri. Condividi via mail, AirDrop, Drive o qualsiasi app di messaggistica.",
    },
  ],
  tips: [
    "Usa uno stilo invece del dito quando il documento passerà per una revisione visiva. Un tratto più pulito fa una vera differenza sui contratti destinati ai clienti.",
    "Salva la firma una sola volta e riusala su ogni documento futuro — l’app la conserva localmente sul dispositivo, senza mai inviarla altrove.",
    "Usa una firma digitata per le dichiarazioni interne di routine e una autografa per i contratti esterni.",
    "Applica una password ai documenti firmati particolarmente delicati prima di condividerli — lo strumento Proteggi si usa dopo la firma.",
    "Tieni l’originale non firmato in una cartella insieme alla versione firmata. Se una controparte chiede una copia «pulita», o devi rifirmare con delle correzioni, l’avrai già pronta.",
  ],
  mobileNote:
    "Firmare dal telefono significa che i contratti tornano all’altra parte entro un’ora — a volte entro pochi minuti. Questo vantaggio di velocità conta in modo sproporzionato quando lavori fuori dalla scrivania: presso un cliente, tra una riunione e l’altra, o in viaggio. L’intero flusso, dal ricevere un contratto al rimandarlo firmato, sta comodamente nella pausa caffè.",
  faq: [
    {
      q: "Una firma elettronica è legalmente valida?",
      a: "Nella maggior parte degli ordinamenti sì, per i comuni contratti commerciali. Il regolamento eIDAS dell’UE e lo statunitense ESIGN Act riconoscono entrambi le firme elettroniche standard. Per documenti di alto valore o regolati per legge, verifica la normativa applicabile — potrebbe servire una firma elettronica qualificata, un processo diverso e più formale.",
    },
    {
      q: "Più persone possono firmare lo stesso PDF?",
      a: "Sì. Passa il file tra i firmatari tramite il menu di condivisione, AirDrop, mail o qualsiasi app di messaggistica. Ogni firma viene aggiunta al suo posto e le firme precedenti restano intatte. Il file finale mostra la firma di tutti nelle posizioni corrette.",
    },
    {
      q: "La firma risulterà fluida su uno schermo di telefono?",
      a: "Sui telefoni moderni, sì. Uno stilo produce tratti decisamente più fluidi rispetto al dito, il che conta per i contratti sottoposti a revisione visiva. Per le dichiarazioni di routine, firmare col dito va benissimo.",
    },
    {
      q: "La mia firma viene salvata da qualche parte su un server?",
      a: "No. Le firme salvate vivono solo sul tuo dispositivo. Vengono applicate ai documenti in locale e non vengono mai inviate alla nostra infrastruttura né a terzi.",
    },
    {
      q: "Cosa succede se il PDF ha già campi firma?",
      a: "L’app rileva i campi firma già presenti in stile modulo e ti permette di toccarli direttamente. La tua firma si adatta automaticamente alla dimensione e alla posizione corrette — nessun ridimensionamento manuale necessario.",
    },
  ],
  related: [
    { label: "Sign PDF — panoramica completa", path: "/sign-pdf" },
    {
      label: "Proteggi con password i PDF firmati",
      path: "/guides/how-to-protect-pdf-file",
    },
    {
      label: "Come modificare un PDF su iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
  ],
  parentHub: { label: "Sign PDF", path: "/sign-pdf" },
};

export default content;
