import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-edit-a-pdf",
  h1: "Warum kann ich ein PDF nicht bearbeiten? Die echten Gründe",
  description:
    "PDFs wurden so entworfen, dass sie sich der Bearbeitung widersetzen, aber ein paar konkrete Dinge – Scans, Sicherheitsmarkierungen, Anzeigegrenzen – machen manche Dateien schwieriger als andere. Was deine blockiert, und was wirklich hilft.",
  updated: "2026-05-29",
  intro: [
    "PDFs wurden so entworfen, dass sie überall gleich aussehen – genau deshalb fühlt sich die Bearbeitung schwerer an als bei einem Word-Dokument. Das Format behandelt Text eher wie eine gedruckte Seite als wie eine Zeichenkette. Praktisch, wenn du pixelgenau teilen willst; frustrierend, wenn du nur einen Namen in einem Vertrag ändern musst.",
    "Aber nicht jedes PDF ist gleich verschlossen. Es gibt vier häufige Gründe, warum sich eines nicht bearbeiten lässt: Es ist ein gescanntes Bild eines Dokuments ohne echten Text darunter, die Datei trägt eine Sicherheitsmarkierung, die Bearbeitung blockiert, dein Anzeigeprogramm ist von Haus aus nur zum Lesen gedacht, oder das Original wurde so exportiert, dass der Text in einzelne Formen zerlegt wurde. Für jeden Fall gibt es einen eigenen Weg weiter.",
    "Diese Anleitung erklärt jede Ursache verständlich, mit dem passenden Werkzeug dafür. Keine davon braucht teure Software, und die meisten Lösungen funktionieren direkt in einem Browser-Tab.",
  ],
  steps: [
    {
      title: "Prüfe, ob das PDF echten Text oder gescannte Bilder enthält",
      body: "Versuche, Text mit dem Cursor oder dem Finger zu markieren. Klappt das, enthält das PDF echten Text, und Bearbeitung ist möglich. Lässt sich nichts markieren, handelt es sich um einen Scan – Bilder von Text, nicht Text selbst.",
    },
    {
      title: "Achte auf eine Bearbeitungssperre",
      body: "PDFs können Berechtigungen tragen, die das Ansehen erlauben, aber Bearbeiten, Drucken oder Kopieren blockieren. Die meisten Anzeigeprogramme zeigen dann ein kleines Schloss-Symbol oder den Hinweis „geschützt“. Nur die Autorin oder der Autor kann die Sperre aufheben; Empfängerinnen und Empfänger können sie nicht sicher umgehen.",
    },
    {
      title: "Nutze für echte Änderungen einen richtigen PDF-Editor",
      body: "Browser und einfache Anzeigeprogramme bearbeiten keinen Text – sie zeigen ihn nur an. Die App PDF Editor nimmt strukturelle Änderungen an Text, Bildern und Seiten vor, ohne das Format zu verlassen, wodurch das Layout erhalten bleibt.",
    },
    {
      title: "Konvertiere in Word, wenn du viel umschreiben musst",
      body: "Wenn du ganze Absätze umschreiben willst statt nur einzelne Wörter anzupassen, holt PDF zu Word den Text in einen echten Editor. Du verlierst dabei das exakte Layout, gewinnst aber echte Fließtext-Bearbeitung – sinnvoll bei Dokumenten, die ohnehin neu veröffentlicht werden.",
    },
    {
      title: "Bei gescannten PDFs: mit OCR-Grenzen rechnen",
      body: "Um einen Scan zu bearbeiten, musst du die Bilder zuerst per OCR (Texterkennung) in Text umwandeln. Manche Tools machen das direkt im Browser, andere nicht, und die Qualität hängt stark von der Scan-Auflösung ab. Behandle das OCR-Ergebnis als Ausgangspunkt, nicht als fertige Bearbeitung.",
    },
    {
      title: "Änderungen auf Seitenebene brauchen keine „Bearbeitung“",
      body: "Willst du nur Seiten löschen, neu anordnen, drehen oder hinzufügen, brauchst du gar keinen Text-Editor – die Tools PDF-Seiten extrahieren, PDF-Seiten neu anordnen und PDF drehen erledigen strukturelle Änderungen, ohne die Textebene anzurühren.",
    },
  ],
  tips: [
    "Willst du nur eine Unterschrift hinzufügen oder ein Formular ausfüllen, braucht die Datei wahrscheinlich gar keine „Bearbeitung“ – PDF unterschreiben und Formulare ausfüllen lassen den ursprünglichen Text unangetastet.",
    "Manche PDFs exportieren jedes Zeichen als winzige Form statt als Text. Die Markierung sieht dann normal aus, aber Kopieren und Einfügen liefert nur Zeichensalat. Das ist der schwierigste Fall für die Bearbeitung – realistisch führt nur der Weg über das Quelldokument zurück.",
    "Traue Websites nicht, die versprechen, Bearbeitungssperren per Passwort-Cracker zu entfernen. Sie funktionieren entweder nicht, sind schädlich, oder beides.",
    "Bist du selbst die Autorin oder der Autor und willst die Bearbeitung für eine bereits verschickte Datei freigeben, ist der sauberste Weg, sie ohne die Einschränkung neu zu exportieren.",
    "Musst du dasselbe Dokument immer wieder ändern, bearbeite die Quelle (Word, Pages, Design-Tool) und exportiere neu, statt das PDF jedes Mal einzeln zu flicken.",
  ],
  mobileNote:
    "Auf dem Handy sind die meisten vorinstallierten Anzeigeprogramme bewusst nur zum Lesen gedacht. Die App PDF Editor übernimmt Textänderungen, Bildaustausch und Seiten-Neuanordnung unter iOS und Android, ohne die Datei fest einzubetten – eine schnelle Korrektur muss also nicht warten, bis du wieder am Laptop sitzt.",
  faq: [
    {
      q: "Warum sehe ich den Text, kann aber nicht hineinklicken?",
      a: "Entweder ist das PDF ein Scan (ein Bild von Text, ohne zugrunde liegende Zeichen), oder dein Anzeigeprogramm ist nur zum Lesen gedacht. Ein echter PDF-Editor – wie die App PDF Editor – lässt dich direkt in bearbeitbaren Text klicken.",
    },
    {
      q: "Kann ich Bearbeitungssperren entfernen?",
      a: "Nur die ursprüngliche Autorin oder der ursprüngliche Autor kann Berechtigungssperren sauber aufheben. Tools, die versprechen, sie zu entfernen, funktionieren entweder nicht oder beschädigen die Datei. Bitte den Absender um eine Kopie ohne Einschränkung.",
    },
    {
      q: "Was ist OCR, und wann brauche ich es?",
      a: "OCR ist der Vorgang, bei dem Bilder von Text in echten Text umgewandelt werden – nötig, um ein gescanntes PDF zu bearbeiten. Die Qualität hängt vom Scan ab: Saubere, hochauflösende Scans liefern deutlich bessere OCR-Ergebnisse als unscharfe Handyfotos.",
    },
    {
      q: "Sollte ich es zum Bearbeiten in Word umwandeln?",
      a: "Nur, wenn du viel Text ändern musst. Die Umwandlung geht auf Kosten des exakten Layouts. Für kleine Änderungen erhält ein echter PDF-Editor mehr vom Original.",
    },
    {
      q: "Kann ich Seiten ändern, ohne den Text anzufassen?",
      a: "Ja. Neu anordnen, Drehen, Extrahieren und Entfernen von Seiten sind strukturelle Änderungen und brauchen keinen Text-Editor. Die Browser-Tools auf dieser Seite erledigen das, ohne die Datei hochzuladen.",
    },
  ],
  related: [
    { label: "PDF Editor – Text und Bilder am Handy bearbeiten", path: "/pdf-editor" },
    { label: "PDF zu Word – konvertieren für umfangreiche Bearbeitung", path: "/pdf-to-word" },
    { label: "Wie du ein PDF auf dem iPhone bearbeitest", path: "/guides/how-to-edit-pdf-on-iphone" },
    { label: "Wie du ein PDF auf Android bearbeitest", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "PDF Editor – Text, Bilder und Seiten bearbeiten", path: "/pdf-editor" },
};

export default content;
