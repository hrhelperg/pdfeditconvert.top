import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-font-issues",
  h1: "Come correggere i problemi di font in un PDF (mancante, sostituito, illeggibile)",
  description:
    "Quando un PDF mostra il font sbagliato, quadratini al posto dei caratteri o testo sostituito, quasi sempre manca un font incorporato. Come funziona l’incorporazione e cosa cambiare in fase di esportazione.",
  updated: "2026-05-29",
  intro: [
    "Quando un PDF mostra quadratini al posto dei caratteri, o il font sbagliato ovunque, o una spaziatura strana che non c’era nell’originale, è un problema di font. I PDF fanno riferimento ai font per nome; il visualizzatore deve trovare quel font sul sistema oppure averlo incorporato dentro il file. Se nessuna delle due cose è vera, vedi una sostituzione — nel migliore dei casi un’alternativa simile, nel peggiore dei quadratini.",
    "La soluzione giusta è quasi sempre ri-esportare con i font incorporati. Una volta incorporato, il font porta con sé i dati dei glifi e appare corretto ovunque. Il prezzo è un file leggermente più grande, ma per la maggior parte dei font la differenza è trascurabile rispetto al documento.",
    "Questa guida spiega come funziona davvero l’incorporazione dei font, passa in rassegna i sintomi più comuni e mostra le soluzioni — incluso il caso in cui ri-esportare non è possibile e devi appiattire il file in immagini.",
  ],
  steps: [
    {
      title: "Conferma che il file stia mostrando font sostituiti",
      body: "Apri il file in due visualizzatori diversi. Se entrambi mostrano lo stesso font sbagliato, i font non sono incorporati. Se un visualizzatore è corretto e l’altro no, è quello sbagliato a non avere il font e a sostituirlo.",
    },
    {
      title: "Ri-esporta con tutti i font incorporati",
      body: "In Word, Pages, Docs e nella maggior parte degli strumenti di design, le impostazioni di esportazione PDF includono «incorpora tutti i font». Attivarla aggiunge i dati dei font al file e lo fa visualizzare in modo coerente ovunque.",
    },
    {
      title: "Usa la stampa in PDF come soluzione di riserva",
      body: "Se non riesci ad attivare l’incorporazione dei font nell’app di origine, apri il documento in un visualizzatore che lo mostra correttamente e usa la stampa in PDF. La nuova copia fissa i glifi renderizzati come immagine raster — più pesante e non ricercabile, ma affidabile.",
    },
    {
      title: "Controlla se ci sono font con licenza che non si possono incorporare",
      body: "Alcuni font commerciali hanno restrizioni sull’incorporazione. L’app di origine te lo segnala. La soluzione realistica è passare a un font simile che permette l’incorporazione, oppure trasformare in immagine il testo interessato.",
    },
    {
      title: "Converti in Word, correggi il testo, ri-esporta",
      body: "Se la sostituzione ha già rovinato il testo e hai solo il PDF, PDF in Word estrae ciò che è recuperabile. Ripulisci il testo, imposta font che possiedi, ri-esporta in un nuovo PDF.",
    },
    {
      title: "Appiattisci in immagini quando nient’altro funziona",
      body: "PDF in immagini esporta ogni pagina come PNG ad alta risoluzione. Se poi la riassembli con Immagine in PDF, il risultato non ha più testo vivo — solo immagini — ma la resa dei font è fissata per ogni visualizzatore.",
    },
  ],
  tips: [
    "Non usare font non incorporabili nei documenti importanti — il file sarà sempre esposto al rischio di sostituzione.",
    "I font web e i font decorativi scaricati sono i colpevoli più comuni dei problemi di incorporazione. I font di sistema (Arial, Times, Helvetica, Calibri) si incorporano senza problemi.",
    "Incorporare i font «in sottoinsieme» (solo i caratteri usati) mantiene il file piccolo. La maggior parte degli strumenti di esportazione lo fa di default, ed è la scelta giusta.",
    "Se è sbagliato solo un carattere (come una frazione o un simbolo speciale), al font manca quel glifo. Sostituisci il carattere di origine con un equivalente Unicode.",
    "Dopo aver appiattito in immagini, aspettati di perdere copia-incolla e OCR. Usa questa strada solo quando la fedeltà visiva conta più della ricercabilità.",
  ],
  mobileNote:
    "I visualizzatori da telefono spesso hanno meno font installati rispetto al desktop, quindi i file senza font incorporati sono ancora più problematici su mobile. L’app PDF Editor mostra avvisi sui font sostituiti e ti permette di ri-esportare i documenti con i font incorporati, mantenendoli visivamente coerenti tra iOS, Android e i visualizzatori desktop.",
  faq: [
    {
      q: "Cosa fa esattamente «incorpora i font»?",
      a: "Include i dati dei glifi del font direttamente dentro il PDF, così qualsiasi visualizzatore può mostrare il testo correttamente senza bisogno del font installato localmente.",
    },
    {
      q: "Perché vedo dei quadratini al posto delle lettere?",
      a: "Il font non è installato sul sistema e non era incorporato. Il visualizzatore non può sostituirlo perché non sa quali glifi disegnare, quindi mostra il quadratino del carattere mancante.",
    },
    {
      q: "Posso aggiungere un font a un PDF dopo l’esportazione?",
      a: "Non in modo pulito. Ri-esportare dall’origine è la strada giusta. Esistono strumenti che promettono di incorporarli a posteriori, ma la maggior parte produce file difettosi.",
    },
    {
      q: "Perché il mio PDF esportato è più pesante quando incorporo i font?",
      a: "Perché i dati del font sono ora dentro il file. L’aumento è di solito piccolo, a meno che tu non incorpori molte famiglie di font. Il sottoinsieme (solo i caratteri usati) tiene la dimensione bassa.",
    },
    {
      q: "La compressione rimuove i font incorporati?",
      a: "No. La compressione dei PDF agisce sulle immagini, non sul testo o sui font. Comprimere un PDF con i font incorporati non lo danneggia.",
    },
  ],
  related: [
    { label: "PDF in Word — recupera il testo da font sostituiti", path: "/pdf-to-word" },
    { label: "PDF in immagini — appiattisci come ultima risorsa", path: "/pdf-to-images" },
    { label: "Come correggere i problemi di formattazione di un PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "Come risolvere i problemi di stampa di un PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "Convertitore PDF — Word, JPG, PNG e viceversa", path: "/pdf-converter" },
};

export default content;
