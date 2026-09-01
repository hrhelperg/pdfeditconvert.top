import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "fix-pdf-form-errors",
  h1: "Risolvere gli errori nei moduli PDF — una checklist rapida di primo soccorso",
  description:
    "I passaggi universali di primo soccorso per un modulo PDF che si comporta male: cambia visualizzatore, scaricalo di nuovo, aggiornalo, scrivi il testo sopra, appiattiscilo. Prova questi prima di scavare in una causa specifica.",
  updated: "2026-06-01",
  intro: [
    "Quando un modulo si comporta male e vuoi solo portarlo a termine, c’è una breve sequenza di soluzioni che risolve la maggior parte dei problemi indipendentemente dalla causa esatta. Questa è la checklist di primo soccorso — le cose da provare in ordine prima di diagnosticare un problema specifico. La maggior parte degli errori nei moduli cede davanti a una di queste cinque mosse, e ci vuole un paio di minuti per percorrerle.",
    "Pensala come il complemento alla diagnosi del sintomo preciso. Se preferisci individuare con precisione se si tratta di campi mancanti, un problema di salvataggio, o un blocco in sola lettura, la guida di triage ti indirizza lì. Ma spesso la via più rapida è semplicemente eseguire questi passaggi universali, e il modulo inizia a comportarsi bene.",
    "Ogni passaggio prende di mira un’ampia classe di problemi — disallineamenti di lettore, file incompleti, software datato, moduli bloccati o non interattivi, e salvataggio incoerente. Eseguili dall’alto verso il basso e fermati quando il modulo funziona.",
  ],
  steps: [
    {
      title: "Aprilo in un’app PDF dedicata",
      body: "La soluzione singola con la resa più alta. Anteprime email, schede del browser e lettori di base causano la maggior parte degli errori nei moduli ignorando il livello dei campi. Un’app PDF completa risolve da sola gran parte dei problemi.",
    },
    {
      title: "Scarica di nuovo una copia fresca",
      body: "Un download parziale o interrotto può produrre campi mancanti, pagine vuote, o errori di «file danneggiato». Scarica di nuovo il modulo dalla fonte e riapri la copia completa prima di supporre un guasto più profondo.",
    },
    {
      title: "Aggiorna il tuo software PDF",
      body: "Un lettore datato potrebbe non disegnare le funzioni più recenti dei moduli. Aggiornare a una versione attuale, o passare a un’app PDF ben mantenuta, elimina gli errori di tipo compatibilità che non riguardano davvero il file.",
    },
    {
      title: "Aggiungi il tuo testo sopra",
      body: "Se il modulo è non interattivo, bloccato, o semplicemente non collabora, posiziona tu stesso testo e segni di spunta direttamente sulla pagina con un editor di PDF. Questa soluzione universale completa quasi ogni modulo, qualunque sia il problema di fondo.",
    },
    {
      title: "Salva correttamente e appiattisci",
      body: "Per evitare che le risposte spariscano, salva con uno strumento che scriva i dati dei campi, poi appiattisci il modulo completato. L’appiattimento blocca le tue risposte nella pagina così vengono mostrate, stampate e inviate in modo affidabile ovunque.",
    },
  ],
  tips: [
    "Esegui i passaggi in ordine e fermati quando funziona — la maggior parte dei moduli si sistema già al primo o al secondo passaggio.",
    "Aprire il file in una vera app PDF è la singola mossa con la resa più alta per quasi ogni errore nei moduli.",
    "Aggiungere il testo sopra è la via di fuga universale quando un modulo non collabora e ti serve solo finirlo.",
    "Appiattire alla fine previene i problemi più comuni che si presentano dopo: risposte sparite e stampe vuote.",
    "Se nessuno di questi funziona, il modulo potrebbe usare funzioni non supportate — consulta la guida sulla compatibilità o chiedi a chi lo ha creato una versione standard.",
  ],
  mobileNote:
    "Sul telefono questa checklist è rapida: apri il modulo nell’app PDF Editor invece che nell’anteprima email, compila i campi o aggiungi il testo sopra, poi appiattisci ed esporta. Queste sole mosse eliminano la maggior parte degli errori nei moduli da mobile, tutto sul dispositivo senza inviare nulla altrove.",
  faq: [
    {
      q: "Qual è il modo più rapido per risolvere un modulo PDF che si comporta male?",
      a: "Aprilo in un’app PDF dedicata invece che in un’anteprima email o nel browser. Questo risolve la quota più ampia degli errori nei moduli, che di solito sono disallineamenti di lettore e non difetti del file.",
    },
    {
      q: "Il modulo continua a non funzionare dopo aver cambiato app — cosa faccio adesso?",
      a: "Scarica di nuovo una copia fresca, aggiorna il tuo software PDF, e se continua a essere ostinato, aggiungi il tuo testo direttamente sopra la pagina. Questo approccio manuale completa quasi ogni modulo indipendentemente dalla causa.",
    },
    {
      q: "Come evito che le mie risposte spariscano?",
      a: "Salva con uno strumento che scriva i dati dei campi del modulo, poi appiattisci il modulo completato. L’appiattimento unisce le tue risposte alla pagina così non possono andare perse alla riapertura, alla stampa o all’invio.",
    },
    {
      q: "Devo usare questa checklist o diagnosticare il problema specifico?",
      a: "Entrambe le vie funzionano. Questa checklist risolve la maggior parte degli errori rapidamente senza diagnosi. Se preferisci individuare la causa esatta — campi mancanti, non si salva, sola lettura — parti invece dal triage di risoluzione dei problemi del modulo.",
    },
    {
      q: "E se niente di tutto ciò lo risolve?",
      a: "Il modulo potrebbe usare funzioni avanzate che il tuo software non riesce a gestire. Consulta la guida sulla compatibilità, oppure chiedi a chi te lo ha inviato un PDF standard o una versione stampabile non interattiva che tu possa completare.",
    },
  ],
  related: [
    { label: "Il modulo PDF non funziona", path: "/guides/pdf-form-not-working" },
    {
      label: "Mancano i campi nel modulo PDF",
      path: "/guides/pdf-form-fields-missing",
    },
    {
      label: "Problemi di compatibilità dei moduli PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    {
      label: "Perché il modulo PDF non si salva",
      path: "/guides/why-pdf-form-wont-save",
    },
  ],
  parentHub: { label: "Moduli PDF", path: "/pdf-forms" },
};

export default content;
