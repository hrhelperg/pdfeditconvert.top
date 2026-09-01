import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-google-docs",
  h1: "PDF oder Google Docs – wann du was nutzt (Bearbeiten, Teilen, Sperren)",
  description:
    "Google Docs ist für die Zusammenarbeit da, PDF für die Auslieferung. Der realistische Blick auf den richtigen Moment für jedes Format – und wie du sauber zwischen beiden umwandelst.",
  updated: "2026-05-29",
  intro: [
    "Google Docs und PDF stehen eigentlich gar nicht in Konkurrenz zueinander — sie gehören zu verschiedenen Phasen im Leben eines Dokuments. Docs ist zum Schreiben, Zusammenarbeiten, Überarbeiten und Kommentieren da; PDF zum Ausliefern, Sperren, Unterschreiben und Archivieren. Reibung entsteht genau dann, wenn du eines der beiden außerhalb seiner Stärke einsetzt.",
    "Ein typisches Dokument durchläuft beide: entworfen in Docs, weil dort die Zusammenarbeit passiert, dann als PDF exportiert, sobald die Version final ist und die Arbeitsgruppe verlässt. Der umgekehrte Weg — ein PDF empfangen und zum Bearbeiten in Docs importieren — funktioniert, verliert aber immer etwas an Genauigkeit. Das ist eher eine Notlösung als eine Routine.",
    "Diese Anleitung zeigt den realistischen Einsatz je nach Phase, dazu die Umwandlungsmechanik in beide Richtungen. Wähle das richtige Format zum richtigen Zeitpunkt, und die Reibung verschwindet größtenteils.",
  ],
  steps: [
    {
      title: "Nutze Google Docs, solange das Dokument geschrieben wird",
      body: "Bearbeitung durch mehrere Personen, Live-Cursor, Versionsverlauf, Kommentare. Docs kann das alles sauber, PDF nichts davon. Entwurf und Überprüfung gehören in Docs.",
    },
    {
      title: "Wechsle zu PDF, sobald das Dokument final ist oder nach außen geht",
      body: "Sobald ein Dokument an eine Kundin, eine Behörde, einen Anbieter oder ins Archiv geht, friert PDF Layout und Inhalt fest. Das Doc bleibt die bearbeitbare Quelle; das PDF ist das Ergebnis.",
    },
    {
      title: "Exportiere sauber von Docs zu PDF",
      body: "Datei → Herunterladen → PDF-Dokument. Bette Schriftarten über die Exporteinstellungen ein, falls verfügbar. Das entstehende PDF behält Überschriften, Tabellen, Bilder und Formatierung.",
    },
    {
      title: "Wandle PDF nur um, wenn es sein muss, in eine bearbeitbare Version",
      body: "PDF in Word in deinem Browser zieht Text aus einem PDF. Das Ergebnis ist ungefähr — das Layout leidet, Tabellen können zerbrechen. Behandle das als Notlösung, nicht als regulären Workflow.",
    },
    {
      title: "Unterschreibe oder archiviere nicht in Google Docs",
      body: "Docs hat keine echte Unterstützung für Unterschriften, und der Versionsverlauf hängt an deinem Google-Konto. Unterschriebene Dokumente und Archive gehören ins PDF-Format, gespeichert lokal oder in einem bewusst angelegten Archiv.",
    },
    {
      title: "Wähle das Dateiformat passend zur Empfängerin",
      body: "Kundinnen erwarten PDF. Lektorinnen erwarten Word oder Docs. Interne Teams bevorzugen für die Zusammenarbeit vielleicht Docs. Schick das Format, das die Empfängerin tatsächlich nutzen wird.",
    },
  ],
  tips: [
    "Teile keinen Google-Docs-Link mit einer Kundin — sie hat vielleicht kein Google-Konto, die Freigabeeinstellungen können überraschen, und das Dokument kann sich weiter ändern, nachdem sie es geöffnet hat.",
    "Prüfe beim Umwandeln von Docs zu PDF die Seitenaufteilung — was in Docs wie eine Seite aussah, läuft im PDF manchmal auf zwei Seiten über.",
    "Öffne ein erhaltenes PDF nicht einfach „in Docs“, außer du musst umfangreich bearbeiten. Die Umwandlung verliert Formatierung; das Original-PDF ist zum Lesen und Teilen sauberer.",
    "Nutze den Versionsverlauf von Docs für gemeinsames Verfassen. Das PDF ist die Momentaufnahme bei der Auslieferung.",
    "Behandle Docs als verbindliche Version während des Entwurfs; behandle das PDF als verbindliche Version nach der Auslieferung.",
  ],
  mobileNote:
    "Handys übernehmen den größten Teil der späten PDF-Arbeit, selbst wenn der Entwurf am Desktop entsteht. Die PDF-Editor-App übernimmt das Komprimieren, Unterschreiben und Teilen des finalen PDFs in letzter Minute unter iOS und Android — praktisch für den Moment zwischen „Docs ist fertig“ und „die Kundin hat die Datei“.",
  faq: [
    {
      q: "Kann ich einfach alles in Google Docs lassen?",
      a: "Für interne Zusammenarbeit ja. Für die Auslieferung nach außen nein — Kundinnen erwarten PDF, und die Freigabeeinstellungen von Docs können auf unerwartete Weise Zugriff freigeben.",
    },
    {
      q: "Wie gut funktioniert die Umwandlung von PDF zu Docs?",
      a: "Zur Textwiederherstellung akzeptabel, beim Layout schwach. Der Text kommt meist durch; Tabellen, Spalten und präzise Formatierung leiden. Nutze das nur, wenn du ein PDF ohne Quelldatei erneut bearbeiten musst.",
    },
    {
      q: "Sollte ich in Google Docs oder in PDF unterschreiben?",
      a: "PDF. Echte elektronische Unterschriften lassen sich sauber an PDFs anhängen; Docs hat keine native Unterstützung für Unterschriften, die mit PDF-Signaturtools vergleichbar wäre.",
    },
    {
      q: "Wie sieht es mit Google Docs fürs Archiv aus?",
      a: "Möglich, aber riskant — Konten können sich ändern, Docs können gelöscht werden, und das Format hängt vom Dienst von Google ab. PDF ist das bessere Archivformat.",
    },
    {
      q: "Kann ich Docs → PDF → Docs hin- und herwandeln?",
      a: "Möglich, aber verlustbehaftet. Jede Umwandlung verliert an Genauigkeit. Behalte das ursprüngliche Doc als bearbeitbare Quelle und wandle nur hin und her, wenn es unbedingt nötig ist.",
    },
  ],
  related: [
    { label: "PDF-Konverter — Word, JPG, PNG und zurück", path: "/pdf-converter" },
    { label: "PDF in Word — für umfangreiche Bearbeitung umwandeln", path: "/pdf-to-word" },
    { label: "PDF oder DOCX — Funktionsvergleich", path: "/guides/pdf-vs-docx" },
    { label: "PDF oder DOCX im Unternehmen", path: "/guides/pdf-vs-docx-for-business" },
  ],
  parentHub: { label: "PDF-Konverter — Word, JPG, PNG und zurück", path: "/pdf-converter" },
};

export default content;
