import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-fields-missing",
  h1: "Mancano i campi nel modulo PDF? Perché e come recuperarli",
  description:
    "Apri un modulo e i campi non ci sono? Perché i campi interattivi spariscono in alcuni visualizzatori, come recuperarli, e cosa fare quando in realtà non ce ne sono mai stati.",
  updated: "2026-06-01",
  intro: [
    "Apri un modulo aspettandoti caselle in cui scrivere e non c’è nulla — solo una pagina dall’aspetto non interattivo, oppure campi che compaiono come contorni vuoti con cui non puoi interagire. I campi mancanti sono preoccupanti ma di solito innocui: i campi sono ancora nel file; il tuo lettore semplicemente non li disegna. A volte il modulo non ha mai avuto campi ed era sempre stato pensato per essere compilato a mano.",
    "Due scenari coprono quasi ogni caso. Nel primo, il modulo è interattivo ma lo hai aperto in un posto che ignora il livello dei campi — un’anteprima nel browser, un lettore email, un lettore PDF di base in stile immagine. Nel secondo, il modulo è davvero non interattivo, quindi non c’è nessun campo da trovare e lo completi posizionando il testo sopra.",
    "Questa guida ti aiuta a distinguere i due casi e a recuperare i campi quando esistono — senza dare per scontato che il file sia danneggiato, perché quasi mai lo è.",
  ],
  steps: [
    {
      title: "Prima escludi il lettore",
      body: "Apri lo stesso file in un’app PDF dedicata invece che in una scheda del browser o in un’anteprima email. Se i campi ricompaiono, c’erano sempre stati — il lettore precedente semplicemente non disegnava il livello dei campi.",
    },
    {
      title: "Controlla se i campi sono mai esistiti",
      body: "Se nessuna app adeguata mostra campi in nessun punto della pagina, il modulo è non interattivo — è stato scansionato o esportato senza un livello di campi. Non manca nulla; semplicemente non è mai stato interattivo.",
    },
    {
      title: "Aggiorna o cambia la tua app PDF",
      body: "Un lettore datato o minimale potrebbe disegnare la pagina ma saltare i campi. Un’app PDF aggiornata e completa è il modo più affidabile per mostrare e usare i campi interattivi.",
    },
    {
      title: "Scarica di nuovo se il file sembra incompleto",
      body: "Un download parziale o interrotto può perdere contenuto. Scarica di nuovo il modulo dalla fonte e riaprilo — una copia nuova e completa a volte recupera i campi che sembravano mancanti.",
    },
    {
      title: "Compila un modulo non interattivo aggiungendo il testo",
      body: "Se il modulo davvero non ha campi, completalo alla maniera non interattiva: posiziona testo e segni di spunta sulla pagina con un editor di PDF, poi esporta. Non ti servono i campi per finirlo.",
    },
  ],
  tips: [
    "Prima di dare per scontato un danno, cambia lettore — un’app diversa è il test più rapido per capire se i campi esistono davvero.",
    "Le anteprime nel browser e i lettori email sono i soliti colpevoli dei campi «spariti»; una vera app PDF risolve la maggior parte dei casi.",
    "Se i campi compaiono come contorni vuoti che non puoi cliccare, spesso è un lettore che li disegna ma non li attiva — cambia app.",
    "Un modulo davvero non interattivo non manca di nulla — aggiungere il testo sopra è il modo previsto per compilarlo.",
    "I moduli dinamici avanzati a volte mostrano i campi solo in un software specifico; in tal caso, il modulo potrebbe richiedere quel programma o un formato alternativo.",
  ],
  mobileNote:
    "Sul telefono, i campi mancanti sono di solito un’anteprima che non li disegna. Apri il modulo nell’app PDF Editor: attiva i campi interattivi dove esistono e ti lascia posizionare il testo sulla pagina dove non esistono — così un modulo che sembrava senza campi nell’email diventa compilabile.",
  faq: [
    {
      q: "Perché mancano i campi nel mio modulo PDF?",
      a: "Il più delle volte il tuo lettore non sta disegnando il livello dei campi — comune con le anteprime nel browser e i lettori email. Apri il file in un’app PDF dedicata e i campi di solito ricompaiono. Se nessuna app li mostra, il modulo è semplicemente non interattivo.",
    },
    {
      q: "Ho perso i campi, o non ce ne sono mai stati?",
      a: "Aprilo in un’app PDF adeguata. Se i campi compaiono, c’erano sempre stati e il vecchio lettore li nascondeva. Se non compaiono da nessuna parte, il modulo è non interattivo e non ha mai avuto un livello di campi interattivo.",
    },
    {
      q: "Un download danneggiato può causare campi mancanti?",
      a: "Occasionalmente. Un download parziale può perdere contenuto. Scarica di nuovo il modulo dalla fonte e riaprilo prima di concludere che i campi sono davvero spariti.",
    },
    {
      q: "Come compilo un modulo che non ha campi?",
      a: "Posiziona tu stesso testo e segni di spunta direttamente sulla pagina con un editor di PDF, poi esporta. I moduli non interattivi si completano così — nessun campo richiesto.",
    },
    {
      q: "Perché i campi compaiono come contorni che non posso cliccare?",
      a: "Il tuo lettore sta disegnando le caselle dei campi ma non le rende interattive. Passa a un’app PDF completa, che sia mostra sia attiva i campi.",
    },
  ],
  related: [
    { label: "Il modulo PDF non funziona", path: "/guides/pdf-form-not-working" },
    {
      label: "Perché non riesco a scrivere in questo modulo PDF?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    {
      label: "Problemi di compatibilità dei moduli PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "Cos’è un modulo PDF?", path: "/guides/what-is-a-pdf-form" },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
