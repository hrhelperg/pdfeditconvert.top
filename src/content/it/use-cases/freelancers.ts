import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "freelancers",
  h1: "PDF Editor per liberi professionisti",
  description:
    "I metodi che i liberi professionisti adorano: proposte, accordi firmati e fatture, tutto dal telefono.",
  intro: [
    "I liberi professionisti gestiscono la maggior parte delle operazioni aziendali dal telefono. Non c’è un ufficio, non c’è un reparto IT, non c’è una stampante condivisa. Lo stesso flusso di lavoro sui PDF che a un team aziendale richiede tre app e un abbonamento per la firma elettronica, qui deve spesso stare in una sola app, veloce, tra un’ora fatturabile e l’altra.",
    "Ogni minuto perso a lottare con uno strumento è un minuto non speso su un lavoro che fatturi. Un editor PDF che funziona e basta — senza caricamenti, senza creare un account, senza canoni mensili per uno strumento usato due volte a settimana — è uno di quegli investimenti silenziosi che si ripaga nel giro di mesi.",
    "Queste sono le operazioni concrete che rendono sostenibile lo stile di vita da libero professionista dal telefono: veloci, private e senza i costi di un abbonamento.",
  ],
  workflows: [
    {
      title: "Invia una proposta curata in PDF",
      body: "Esporta la tua proposta da Notion, Pages o Google Docs in PDF. Firmala, allegala all’email, inviala. Chi la riceve vede esattamente quello che volevi mostrare.",
    },
    {
      title: "Firma gli accordi con i clienti dal telefono",
      body: "Disegna la tua firma una volta sola e riutilizzala su ogni contratto futuro. Basta con «ti rispondo quando sono al computer».",
    },
    {
      title: "Scansiona le ricevute delle spese non appena le fai",
      body: "Un caffè di lavoro, una corsa in taxi, l’acquisto di un’attrezzatura: scansionala sul momento. I PDF risultanti hanno testo ricercabile e sono compatibili con il software di contabilità.",
    },
    {
      title: "Fattura sempre in PDF",
      body: "Qualunque sia il tuo strumento di fatturazione, esporta in PDF prima di inviare. Riduce il rischio che qualcuno la modifichi e dà un’immagine più professionale rispetto a un DOCX.",
    },
    {
      title: "Raggruppa i deliverable a fine progetto",
      body: "Combina il brief finale, l’accordo firmato e la documentazione di supporto in un unico PDF di archivio quando chiudi un progetto.",
    },
  ],
  appPitch:
    "PDF Editor è il cavallo di battaglia silenzioso del libero professionista: non sostituisce i tuoi strumenti di design o fatturazione, rende semplicemente senza sforzo il livello documentale. Gratis, nativa, sul dispositivo. Disponibile su iOS e Android.",
  related: [
    { label: "Firma un PDF dal telefono", path: "/sign-pdf" },
    { label: "Flussi di lavoro PDF per le aziende", path: "/pdf-for-business" },
    { label: "Casi d’uso — lavoro da remoto", path: "/use-cases/remote-work" },
  ],
};

export default content;
