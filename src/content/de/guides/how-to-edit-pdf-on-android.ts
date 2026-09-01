import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-android",
  h1: "PDF auf Android bearbeiten (Anleitung 2026)",
  description:
    "Bearbeite PDFs auf Android: Text ändern, Seiten einfügen und Dokumente unterschreiben. Klare Schritt-für-Schritt-Anleitung mit der PDF-Editor-App.",
  updated: "2026-05-11",
  intro: [
    "Android kommt ab Werk recht gut mit PDFs zurecht — aber nur zum Anzeigen. Sobald du einen Tippfehler korrigieren, ein Bild ersetzen oder Seiten neu anordnen willst, stößt die eingebaute Anzeige an ihre Grenzen, und der übliche Ausweg ist, die Datei auf eine Website hochzuladen. Es geht auch schneller: mit einem nativen Editor, der direkt auf deinem Handy läuft.",
    "Diese Anleitung nutzt die App PDF Editor auf Android. Derselbe Ablauf funktioniert auf Tablets und auf Chromebooks mit Android-Laufzeitumgebung. Du brauchst Android 9 oder neuer. Die meisten Schritte gleichen dem iPhone-Ablauf, aber Androids Storage Access Framework verändert, wie du Dateien hinzufügst und speicherst.",
    "Jeder Schritt zeigt dir genau, wo du tippen musst, samt der kleinen Unterschiede zwischen Handy und Tablet. Wo Android von iOS abweicht — Dateiauswahl, Drive-Integration, die Zurück-Taste —, weisen wir gezielt darauf hin.",
  ],
  steps: [
    {
      title: "Installiere PDF Editor über Google Play",
      body: "Suche nach „PDF Editor“ und wähle die App von hrhelperg. Installiere sie und öffne sie. Ein Konto brauchst du nicht.",
    },
    {
      title: "Öffne ein PDF",
      body: "Tippe auf der Startseite auf das Plus-Symbol. Der Dialog von Androids Storage Access Framework öffnet sich — wähle das PDF aus Dateien, Google Drive, OneDrive, Dropbox oder einem anderen verbundenen Cloud-Anbieter. Du kannst auch in Gmail oder einer beliebigen App auf ein PDF tippen und PDF Editor als Öffnen-mit-App auswählen.",
    },
    {
      title: "Text bearbeiten",
      body: "Tippe auf einen Absatz. Ein blaues Bearbeitungsfeld erscheint. Ersetze den vorhandenen Text oder füge neuen ein. Die App behält Schriftart und Farbe bei, sodass das Layout nicht auseinanderfällt.",
    },
    {
      title: "Bild ersetzen",
      body: "Tippe auf ein Bild, um es zu markieren. Tippe auf das Tausch-Symbol und wähle ein Ersatzbild aus deiner Galerie oder deinen Dateien. Ziehe an den Ecken, um die Größe zu ändern, ohne das Seitenverhältnis zu verzerren.",
    },
    {
      title: "Neue Seite einfügen",
      body: "Tippe auf das Seiten-Symbol für die Miniaturansicht. Nutze das Plus-Symbol zwischen zwei Miniaturen, um eine leere Seite einzufügen oder ein Bild als neue Seite hinzuzufügen.",
    },
    {
      title: "Formularfelder ausfüllen",
      body: "PDFs mit interaktiven Feldern werden automatisch hervorgehoben. Tippe auf ein Feld, gib den Text ein und tippe auf Fertig. Die Tastatur passt sich dem Feldtyp an (Text, Zahl, Datum).",
    },
    {
      title: "Dokument unterschreiben",
      body: "Tippe auf das Werkzeug Unterschreiben, zeichne mit dem Finger oder einem Stylus und platziere die Unterschrift. Speichere sie für später — dann musst du sie nicht noch einmal zeichnen.",
    },
    {
      title: "Als neue Datei speichern",
      body: "Tippe auf Fertig und dann auf „Speichern unter“, um sowohl das Original als auch die bearbeitete Kopie zu behalten. Über Androids Dateiauswahl speicherst du in Dateien, Drive oder jedem verbundenen Cloud-Anbieter.",
    },
  ],
  tips: [
    "Aktiviere auf großen Tablets den Splitscreen und lege zwei PDFs nebeneinander, um schnell zwischen ihnen zu vergleichen.",
    "Hast du einen S Pen, stelle im Bearbeitungsmodus auf „Nur Stift“ um — die Handballenerkennung funktioniert dann deutlich zuverlässiger.",
    "Vergib beim Speichern aussagekräftige Dateinamen — „Vertrag-unterschrieben-2026-05-11.pdf“ hilft dir bei der späteren Suche deutlich mehr als „Dokument(1).pdf“.",
    "Halte PDF Editor im Teilen-Menü gedrückt, nachdem du es einmal genutzt hast, um es anzuheften — beim nächsten Mal erscheint es dann ganz oben.",
    "Wirkt die Bearbeitung auf einem älteren Gerät träge, schließe andere Apps im Hintergrund — die PDF-Darstellung profitiert von freiem Arbeitsspeicher.",
  ],
  mobileNote:
    "Androids Storage Access Framework ist der richtige Weg, um Dateien zu öffnen — er gewährt dauerhaften Zugriff, ohne die Datei in den App-eigenen Speicher zu kopieren. Änderungen landen dadurch direkt zurück in Drive oder OneDrive, nicht in einem Duplikat.",
  faq: [
    {
      q: "Funktioniert die App auf älteren Android-Versionen?",
      a: "Offiziell unterstützt wird Android 9 und neuer. Auf älteren Geräten lässt sich die App zwar oft installieren, aber ohne die neuesten Funktionen wie verbesserte OCR oder Scan-Filter.",
    },
    {
      q: "Kann ich passwortgeschützte PDFs öffnen?",
      a: "Ja. Gib das Passwort ein, wenn du dazu aufgefordert wirst. Die App hält das Dokument während der Bearbeitung verschlüsselt und verschlüsselt es beim Speichern auf Wunsch erneut.",
    },
    {
      q: "Wie funktioniert die Google-Drive-Integration?",
      a: "Öffne und speichere direkt aus Drive über die Dateiauswahl des Systems. Änderungen, die zurück nach Drive gespeichert werden, überschreiben je nach Wahl das Original oder legen eine neue Datei an.",
    },
    {
      q: "Werden Änderungen mit meinem Desktop synchronisiert?",
      a: "Wenn du in einen Cloud-Anbieter wie Drive, OneDrive oder Dropbox gespeichert hast, wird die bearbeitete Datei automatisch mit deinen anderen Geräten synchronisiert. Rein lokal gespeicherte Dateien bleiben auf dem Handy.",
    },
    {
      q: "Funktioniert die App offline?",
      a: "Ja. Die Bearbeitung findet vollständig auf dem Gerät statt. Die Cloud-Synchronisierung greift erst, wenn du in einen Cloud-Pfad speicherst.",
    },
  ],
  related: [
    { label: "PDF Editor — die vollständige Übersicht", path: "/pdf-editor" },
    {
      label: "PDF auf dem iPhone bearbeiten",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "PDF komprimieren", path: "/guides/how-to-compress-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
