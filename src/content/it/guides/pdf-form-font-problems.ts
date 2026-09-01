import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-font-problems",
  h1: "Problemi di carattere nei moduli PDF (dimensione automatica, taglio, sostituzione)",
  description:
    "Il testo nel campo è troppo grande, troppo piccolo o si rimpicciolisce da solo mentre scrivi? Le stranezze tipografiche specifiche dei campi del modulo — dimensione automatica, sostituzione, taglio — e come ottenere risposte pulite e leggibili.",
  updated: "2026-06-01",
  intro: [
    "I campi del modulo hanno un comportamento tipografico tutto loro, separato dal resto di un PDF, e produce una serie specifica di grattacapi. Testo che si rimpicciolisce mentre scrivi di più, risposte che sembrano enormi in un campo e minuscole in quello successivo, caratteri tagliati in alto o in basso in un campo, oppure un carattere diverso da quello delle etichette del modulo. Sono stranezze tipografiche dei campi del modulo, non problemi generali di carattere del PDF — e la maggior parte riguarda come è stato impostato il campo.",
    "Il colpevole principale è la dimensione automatica. Molti campi sono configurati per rimpicciolire il testo automaticamente così le risposte più lunghe entrano comunque, ed è per questo che il tuo testo diventa più piccolo man mano che scrivi. Altri problemi derivano da un carattere del campo non incorporato, quindi viene sostituito in alcuni lettori, oppure da un campo semplicemente troppo corto per la sua dimensione di carattere, che taglia i caratteri.",
    "Questa guida copre i problemi di carattere specifici dei campi del modulo, come riconoscere ciascuno, e cosa cambiare per ottenere risposte leggibili e coerenti. Per i problemi di carattere su un intero documento invece che sui suoi campi, la guida generale sui caratteri PDF copre un terreno più ampio.",
  ],
  steps: [
    {
      title: "Riconosci il rimpicciolimento con dimensione automatica",
      body: "Se il testo del campo diventa più piccolo mentre aggiungi caratteri, il campo usa la dimensione automatica per far entrare tutto. È voluto, ma può rendere minuscole le risposte lunghe. Tieni le risposte concise oppure, se controlli il modulo, imposta una dimensione fissa.",
    },
    {
      title: "Correggi dimensioni incoerenti tra i campi",
      body: "Risposte che sembrano grandi in un campo e piccole in un altro di solito significano che ogni campo ha una dimensione di carattere diversa impostata. Se è il tuo modulo, standardizza la dimensione del carattere dei campi così ogni risposta corrisponde.",
    },
    {
      title: "Affronta i caratteri tagliati",
      body: "Se le lettere sono tagliate in alto o in basso, il campo è troppo corto per la sua dimensione di carattere. Ingrandisci il campo o riduci la dimensione del carattere (su un modulo che controlli), oppure accetta una dimensione più piccola quando ne compili uno che non controlli.",
    },
    {
      title: "Gestisci i caratteri sostituiti",
      body: "Se il testo del campo appare con un carattere diverso da quello previsto, il carattere previsto non è incorporato e il lettore ne ha sostituito uno. Incorporare il carattere del campo quando costruisci il modulo lo mantiene coerente tra i vari lettori.",
    },
    {
      title: "Appiattisci per bloccare l’aspetto",
      body: "Una volta che le tue risposte hanno un aspetto corretto, appiattisci il modulo. L’appiattimento fissa il testo dei campi nella pagina così la sua dimensione e il suo carattere vengono mostrati allo stesso modo ovunque, indipendentemente dal lettore del destinatario.",
    },
  ],
  tips: [
    "La dimensione automatica è la solita ragione per cui il testo del campo si rimpicciolisce mentre scrivi — le risposte concise restano leggibili, oppure imposta una dimensione fissa sui moduli che costruisci.",
    "Se stai progettando il modulo, standardizza le dimensioni del carattere dei campi così le risposte non escono come un’accozzaglia di grande e piccolo.",
    "I caratteri tagliati significano che il campo è troppo corto per il suo carattere; ridimensiona il campo o il carattere su un modulo che controlli.",
    "Appiattisci prima di inviare così i caratteri e le dimensioni dei tuoi campi non possono cambiare sullo schermo del destinatario.",
    "L’aspetto dei campi può variare da un lettore all’altro, quindi un risultato fisso, con carattere incorporato e appiattito è il più coerente.",
  ],
  mobileNote:
    "Sul telefono, l’app PDF Editor ti lascia posizionare il testo sui moduli non interattivi con una dimensione che scegli tu, evitando del tutto la dimensione automatica dei campi, e appiattire il risultato così carattere e dimensione restano bloccati. Per i campi interattivi, tenere le risposte concise evita il rimpicciolimento automatico che rende difficili da leggere le voci lunghe.",
  faq: [
    {
      q: "Perché il testo del mio modulo si rimpicciolisce mentre scrivo?",
      a: "Il campo usa la dimensione automatica, che rimpicciolisce il testo così le risposte più lunghe entrano comunque. È un comportamento voluto. Tieni le risposte concise per restare leggibili, oppure imposta una dimensione di carattere fissa se controlli il modulo.",
    },
    {
      q: "Perché le mie risposte appaiono in dimensioni diverse?",
      a: "Probabilmente ogni campo ha la propria dimensione di carattere impostata. Su un modulo che hai costruito tu, standardizza la dimensione del carattere dei campi così ogni risposta corrisponde. Su uno che non hai costruito tu, le dimensioni sono fissate nei campi.",
    },
    {
      q: "Perché i caratteri nei campi del mio modulo sono tagliati?",
      a: "Il campo è troppo corto per la sua dimensione di carattere, il che taglia le lettere. Ingrandisci il campo o riduci la dimensione del carattere su un modulo che controlli, oppure usa una dimensione più piccola quando ne compili uno che non controlli.",
    },
    {
      q: "Perché il carattere del campo sembra diverso da quello delle etichette?",
      a: "Il carattere previsto per il campo non è incorporato, quindi il tuo lettore ne ha sostituito uno. Incorporare il carattere del campo quando crei il modulo lo mantiene coerente tra lettori diversi.",
    },
    {
      q: "In cosa è diverso dai problemi generali di carattere dei PDF?",
      a: "Questa guida riguarda i caratteri all’interno dei campi del modulo — dimensione automatica, dimensionamento a livello di campo, taglio. La guida generale sui caratteri PDF copre i caratteri mancanti o sostituiti su un intero documento.",
    },
  ],
  related: [
    {
      label: "Come risolvere i problemi di carattere nei PDF",
      path: "/guides/how-to-fix-pdf-font-issues",
    },
    {
      label: "Problemi di formattazione nei moduli PDF",
      path: "/guides/pdf-form-formatting-issues",
    },
    { label: "Buone pratiche per i moduli PDF", path: "/guides/pdf-form-best-practices" },
    { label: "Risolvere gli errori nei moduli PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
