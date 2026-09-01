import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-agencies",
  h1: "PDF-Workflows für Agenturen (Decks, Briefings, Freigaben)",
  description:
    "Die PDF-Kette einer Agentur – Pitch-Decks, Kreativ-Briefings, Kundenfreigaben, Deliverables – bleibt schnell und planbar, mit kostenlosen, privaten, browserbasierten Tools.",
  updated: "2026-05-29",
  intro: [
    "Agenturen verarbeiten mehr PDFs, als ihnen bewusst ist. Pitch-Decks gehen raus, Briefings kommen zurück, Kreativarbeit läuft durch Freigabeschleifen, Deliverables werden in Paketen verschickt, Retros landen in gemeinsamen Ordnern. Jede dieser Aufgaben ist für sich klein — zusammen sind sie die Ader, an der die Agentur hängt.",
    "Die meisten PDF-Handgriffe einer Agentur wiederholen sich: ein Foliendeck in ein versandfertiges PDF umwandeln, eine Präsentationsversion mit Anhängen zusammenführen, für Kundenportale komprimieren, Entwürfe während der Prüfung mit Wasserzeichen versehen, Freigaben unterschreiben, bei Projektabschluss archivieren. Mit einem festen Rhythmus und dem richtigen kleinen Werkzeugkasten bleibt das leicht. Ohne beides frisst es Stunden.",
    "Diese Anleitung beschreibt den Ablauf, der sich bei kleinen Agenturen bewährt hat. Nichts davon braucht kostenpflichtige PDF-Software; das meiste läuft direkt im Browser, ohne sensibles Kundenmaterial hochladen zu müssen.",
  ],
  steps: [
    {
      title: "Pitch-Deck: exportieren, komprimieren, Branding prüfen",
      body: "Foliendeck → PDF-Export → komprimieren für die E-Mail des Interessenten. Prüfe, ob die Schriftarten eingebettet sind, damit die Folientitel beim Interessenten nicht durch eine andere Schrift ersetzt werden. Deckblatt mit dem Namen des Interessenten, Metadaten-Titel gesetzt, Datei benannt als InteressentName_Pitch_JJJJ-MM-TT.pdf.",
    },
    {
      title: "Kreativ-Briefing: Eingangsdokument mit Assets zusammenführen",
      body: "Briefing-Dokument plus Kundenmaterial (Logos, Beispiele, Brand Book) → mit PDF zusammenführen zu einer einzigen Arbeitsdatei, auf die das Team zurückgreifen kann. Bewahre die Originale auf; die zusammengeführte Version dient dem schnellen Nachschlagen.",
    },
    {
      title: "Freigaben: signiertes PDF, Entwurfs-Wasserzeichen während der Prüfung",
      body: "Entwürfe zirkulieren mit einem „ENTWURF“-Stempel, gesetzt über Wasserzeichen zu PDF hinzufügen. Sobald die Kundin zustimmt, macht ein signiertes PDF die Freigabe verbindlich — PDF unterschreiben hält die Zustimmung fest. Finale Dateien tragen kein Wasserzeichen mehr.",
    },
    {
      title: "Deliverables: hochwertiges PDF, getrennt von Arbeitsdateien",
      body: "Finale Deliverables werden in höherer Qualität exportiert als interne Versionen. PDF-Seiten neu anordnen bestätigt die Reihenfolge; PDF-Seiten extrahieren entfernt alles, was nicht raus soll.",
    },
    {
      title: "Komprimiere für Kundenportale",
      body: "Die meisten Kundenportale größerer Unternehmen setzen ein Limit von 10–25 MB. PDF komprimieren bringt Deliverables unter dieses Limit, ohne dass ein Qualitätsverlust auffällt. Ausgeliefert wird die komprimierte Kopie; im Quellarchiv bleibt die unkomprimierte Version.",
    },
    {
      title: "Archiviere bei Projektabschluss",
      body: "Verschiebe den Projektordner nach /Archiv/[Jahr]/[Kunde]/[Projektname]/. Der aktive Ordner bleibt schlank, das Archiv ist die Fallstudien-Quelle für den nächsten Pitch.",
    },
  ],
  tips: [
    "Decks für die Bildschirmansicht solltest du mit weniger Kompression exportieren als solche für den Druck — sichtbare Artefakte fallen auf dem Bildschirm weniger auf.",
    "Standardisiere das Deckblatt der Decks. Logo, Name des Interessenten, Datum, Ansprechpartner der Agentur. Unterschiedliche Layouts je Pitch wirken über die Agentur hinweg uneinheitlich.",
    "Versieh alle Entwürfe mit Wasserzeichen. Sobald ein Entwurf sein Wasserzeichen in der Kette verliert, wird die Verantwortlichkeit unklar.",
    "Freigaben gehören auf signierte PDFs, nicht in Chat-Verläufe. Dein zukünftiges Ich braucht einen belastbaren Nachweis.",
    "Lege im Voraus einen Ordner /Vorlagen/ mit Deck-Deckblatt, Briefing-Vorlage und Freigabeformular an. Wiederverwenden schlägt Neuerstellen jedes Mal.",
  ],
  mobileNote:
    "Agenturalltag spielt sich auf dem Handy ab — bei Shootings, unterwegs, beim Kundentermin. Die PDF-Editor-App übernimmt Entwürfe, Unterschriften und schnelle Re-Exporte direkt mobil, sodass eine Freigabe vom Handy aus durchgehen kann, statt auf die Rückkehr zum Laptop zu warten.",
  faq: [
    {
      q: "Wie groß sollte ein Pitch-Deck-PDF sein?",
      a: "Idealerweise unter 10 MB, in jedem Fall unter 25 MB. Bildlastige Decks lassen sich schlechter komprimieren als textlastige — behalte die Größe im Auge, während das Deck wächst.",
    },
    {
      q: "Sollten wir für jeden Pitch dieselbe Vorlage verwenden?",
      a: "Bei der Struktur ja, bei der Kreation nein. Die Leserin soll sofort erkennen „das ist ein Angebot dieser Agentur“; der kreative Inhalt macht jeden Pitch für sich einzigartig.",
    },
    {
      q: "Wie behalten wir den Freigabestatus im Blick?",
      a: "Über den Ordnerstand: /entwuerfe/, /freigegeben/, /versendet/. Das signierte Freigabe-PDF ist der Nachweis dafür, dass eine Datei in den nächsten Ordner wandern darf.",
    },
    {
      q: "Brauchen wir getrennte Arbeits- und Liefer-PDFs?",
      a: "Ja. Arbeitsdateien sind unkomprimiert und enthalten Anmerkungen; Deliverables sind komprimiert, sauber und final. Verschicke niemals versehentlich die Arbeitsdatei.",
    },
    {
      q: "Was ist der größte PDF-Fehler bei Agenturen?",
      a: "Ein nicht finalisiertes Deck zu verschicken. Versieh Entwürfe mit Wasserzeichen, benenne sie eindeutig, und nur die Datei in /freigegeben/ geht an die Kundin.",
    },
  ],
  related: [
    { label: "PDF für Unternehmen — Verträge und Workflows", path: "/pdf-for-business" },
    { label: "PDF zusammenführen — Briefings und Deliverables bündeln", path: "/merge-pdf" },
    { label: "PDF-Workflows für Berater", path: "/guides/pdf-workflows-for-consultants" },
    { label: "Der beste PDF-Workflow für Teams", path: "/guides/best-pdf-workflow-for-teams" },
  ],
  parentHub: { label: "PDF für Unternehmen — Verträge und Workflows", path: "/pdf-for-business" },
};

export default content;
