import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-contracts-as-pdf",
  h1: "Verträge als PDF versenden (unterschreiben, sperren, zustellen)",
  description:
    "Verträge brauchen eine strengere PDF-Methode: Inhalt sperren, Unterschriften anbringen, Entwürfe mit Wasserzeichen versehen und am Ende eine Datei erhalten, die die Gegenseite ohne Hin und Her gegenzeichnen kann.",
  updated: "2026-05-29",
  intro: [
    "Verträge sind die Dokumentart, bei der ein falscher Umgang mit PDFs den größten Schaden anrichtet. Eine unterschriebene Kopie, die eine andere Version ist als der unsignierte Entwurf. Eine Gegenzeichnung auf einer Datei, von der der erste Unterzeichner dachte, sie sei gesperrt. Ein Entwurfs-Wasserzeichen, das auf der finalen Version vergessen wurde. Nichts davon ist exotisch; alles davon bringt Leute in echte Streitigkeiten.",
    "Die Lösung ist ein strafferer Arbeitsablauf rund um drei Dinge: den Inhalt vor der Unterschrift sperren, Unterschriften in einer klaren Reihenfolge anbringen und das Ergebnis als endgültige finale Datei ausliefern. Nichts davon braucht teure Vertragssoftware; es braucht den bewussten Einsatz der grundlegenden PDF-Tools und eine ehrliche Reihenfolge.",
    "Diese Anleitung zeigt den Arbeitsablauf, so wie er laufen sollte — vom finalen Entwurf über die Unterschriften beider Parteien bis zu einem sauberen gegengezeichneten PDF, mit dem der Anwalt zufrieden ist. Sie behandelt auch, was zu tun ist, wenn die Gegenseite ihre eigene Unterschriftenplattform nutzen will.",
  ],
  steps: [
    {
      title: "Finalisiere zuerst den Vertragsinhalt",
      body: "Alle Verhandlungen laufen über die Quelle — Word, Pages, Docs. Markiere Änderungen nicht im PDF. Exportiere erst dann als PDF, wenn beide Seiten sich einig sind, dass der Text feststeht.",
    },
    {
      title: "Entwurfsmarkierungen entfernen",
      body: "Entferne ENTWURF-Wasserzeichen (mit Wasserzeichen zu PDF hinzufügen fügst du ohnehin von vornherein keins zur finalen Version hinzu). Das finale PDF sollte auch final aussehen.",
    },
    {
      title: "Füge zuerst deine Unterschrift hinzu",
      body: "PDF unterschreiben lässt dich eine getippte oder gezeichnete Unterschrift an der richtigen Stelle hinzufügen. Unterschreibe zuerst, wenn du der Urheber bist; die Gegenseite gegenzeichnet dann das PDF, das deine Unterschrift bereits trägt.",
    },
    {
      title: "Sperre die Datei vor dem Versenden",
      body: "Wenn dein Tool das unterstützt, wende nach dem Unterschreiben Bearbeitungsbeschränkungen an. Die Gegenseite kann lesen und unterschreiben, aber den Inhalt nicht ändern. Das ist der einzige Weg, einen Vertrag zuverlässig einzufrieren.",
    },
    {
      title: "Mit klaren Anweisungen versenden",
      body: "Eine kurze Begleitnotiz: „Anbei: unterschriebener Vertrag. Bitte auf Seite 8 gegenzeichnen und zurücksenden.“ Ein Satz erspart eine ganze Runde Rückfragen.",
    },
    {
      title: "Nimm die gegengezeichnete Datei entgegen und archiviere beide",
      body: "Wenn das gegengezeichnete PDF ankommt, speichere es als maßgebliche Version. Bewahre den unsignierten Entwurf, deine einfach unterschriebene Kopie und die vollständig unterschriebene Kopie im selben Ordner auf. Die Versionskette ist der Prüfpfad.",
    },
  ],
  tips: [
    "Nutze das ursprüngliche Unterschriften-PDF nicht für einen zweiten Vertrag. Starte für jeden neuen Vertrag mit einem frischen Export — unberührte Metadaten, unberührte Unterschriften.",
    "Will die Gegenseite ihre Unterschriftenplattform nutzen (DocuSign, Adobe Sign oder andere), richte dich nach ihrer. Ein Streit darüber, welches Tool sauberer ist, lohnt sich nicht.",
    "Achte darauf, dass deine Unterschrift optisch unterscheidbar ist. Ein kursiv getippter Name ist eine Unterschrift, wirkt aber weniger bewusst als eine gezeichnete.",
    "Deckblätter, die Vertragstitel, Datum und Vertragsparteien auflisten, machen das spätere Auffinden viel leichter, als sich allein auf den Dateinamen zu verlassen.",
    "Versieh Entwürfe während der Verhandlung mit einem Wasserzeichen (ENTWURF, NICHT ZUR UNTERSCHRIFT). Die sichtbare Kennzeichnung verhindert eine versehentliche Gegenzeichnung.",
  ],
  mobileNote:
    "Gegenzeichnungen passieren oft am Handy — ein Partner, der im Zug prüft, ein Kunde, der zwischen zwei Meetings unterschreibt. Die PDF-Editor-App macht das gut: Vertrag prüfen, mit dem Finger auf dem Bildschirm unterschreiben, ohne Umweg über einen Desktop zurückschicken. Die unterschriebene Datei verlässt das Handy als sauberes PDF.",
  faq: [
    {
      q: "Ist eine getippte Unterschrift auf einem PDF rechtsverbindlich?",
      a: "In den meisten Rechtsordnungen ja, für gewöhnliche Verträge. Manche speziellen Fälle (notariell beurkundete Urkunden, bestimmte Finanzinstrumente) brauchen mehr — prüfe die Vertragsart, bevor du es einfach annimmst.",
    },
    {
      q: "Sollte der Vertrag mit einem Passwort geschützt werden?",
      a: "In der Regel nicht. Passwörter erzeugen Reibung ohne großen Sicherheitsgewinn. Hebe Passwörter für hochvertrauliche Anlagen auf, nicht für den Vertrag selbst.",
    },
    {
      q: "Wie sperre ich ein PDF nach dem Unterschreiben?",
      a: "Viele Bearbeitungstools, darunter die PDF-Editor-App, lassen dich während des Unterschreibens Bearbeitungsbeschränkungen anwenden. Sperre nach der letzten Unterschrift, nicht während der Verhandlung.",
    },
    {
      q: "Was, wenn die Gegenseite das PDF nach meiner Unterschrift bearbeitet?",
      a: "Sperrst du die Datei vor dem Versenden, wären Änderungen erkennbar. Auch ohne Sperre ist das unterschriebene PDF die maßgebliche Version; nachträgliche Änderungen machen die Unterschrift ungültig.",
    },
    {
      q: "Sollte ich immer zuerst unterschreiben?",
      a: "Bist du der Urheber, ja — das signalisiert, dass du dich bindest. Zeichnest du gegen, unterschreibe die Datei, die die Gegenseite geschickt hat, statt neu zu beginnen.",
    },
  ],
  related: [
    { label: "PDF unterschreiben — elektronische Unterschriften hinzufügen", path: "/sign-pdf" },
    { label: "Wasserzeichen zu PDF hinzufügen — Entwürfe klar kennzeichnen", path: "/add-watermark-to-pdf" },
    { label: "PDFs mit Kunden teilen", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "PDF-Workflows für kleine Unternehmen", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "PDF unterschreiben", path: "/sign-pdf" },
};

export default content;
