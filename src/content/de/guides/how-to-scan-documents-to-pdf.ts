import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-documents-to-pdf",
  h1: "Dokumente am Handy zu PDF scannen",
  description:
    "Nutze die Handykamera, um mehrseitige Dokumente in saubere PDFs zu scannen. Mobiler Ablauf mit Kantenerkennung und OCR.",
  updated: "2026-05-11",
  intro: [
    "Handys sind hervorragende Dokumentenscanner, sobald du die Standard-Kamera-App beiseitelässt. Die richtige App übernimmt Kantenerkennung, Perspektivkorrektur, Kontrastanpassung und OCR — und macht aus einem freihändig aufgenommenen Foto ein sauberes, durchsuchbares PDF, das wie gescannt aussieht statt wie schnell fotografiert.",
    "Diese Anleitung zeigt den Ablauf beim Dokumentenscannen in der App PDF Editor auf iPhone und Android. Beide Plattformen liefern gleichwertige Ergebnisse. Wir behandeln alltägliche Fälle: Kassenbelege, unterschriebene Formulare, mehrseitige Verträge, Ausweise — und die Momente, in denen das Scannen per Handy dem Gang zum Flachbettscanner klar überlegen ist.",
    "Am Ende hast du eine wiederholbare Scan-Routine, die auch bei nicht optimalem Licht funktioniert, Dateien liefert, die Steuerberatung und Rechtsabteilung anstandslos akzeptieren, und dabei alles auf dem Gerät behält.",
  ],
  steps: [
    {
      title: "Öffne den Scanner",
      body: "Tippe auf der Startseite der App PDF Editor auf die Kachel Scannen. Der Kamerasucher öffnet sich mit aktiver Kantenerkennung.",
    },
    {
      title: "Lege das Dokument auf einen kontrastreichen Untergrund",
      body: "Die Kantenerkennung funktioniert am besten bei deutlichem Kontrast zwischen Seite und Untergrund. Lege weißes Papier auf eine dunkle Fläche oder umgekehrt.",
    },
    {
      title: "Halte das Handy über die Seite",
      body: "Halte das Handy ungefähr über das Dokument. Die App zeichnet einen blauen Rahmen um die erkannten Kanten. Steht der Rahmen ruhig, löst die App automatisch aus.",
    },
    {
      title: "Automatisch oder manuell auslösen",
      body: "Die Kamera pulsiert kurz und löst aus, sobald der Ausschnitt passt. Erkennt die automatische Auslösung die Kanten nicht, tippe auf den manuellen Auslöser. Die Ecken kannst du im nächsten Schritt ohnehin noch anpassen.",
    },
    {
      title: "Erkannte Ecken anpassen",
      body: "Ziehe bei Bedarf an den Eckpunkten, um die Kanten feinzujustieren. Danach greift die Perspektivkorrektur und macht aus der schrägen Aufnahme eine rechteckige Seite.",
    },
    {
      title: "Filter anwenden",
      body: "Wähle zwischen Farbe, Graustufen oder Schwarz-Weiß. Bei Belegen und Formularen verkleinert Schwarz-Weiß die Datei deutlich, ohne an Qualität einzubüßen. Bei Dokumenten mit Fotos oder farbigen Elementen bleibst du besser bei Farbe.",
    },
    {
      title: "Weitere Seiten hinzufügen",
      body: "Tippe unten am Bildschirm auf den Seitenzähler, um weitere Seiten aufzunehmen. Jede neue Aufnahme wird an das aktuelle PDF angehängt. Über die Miniaturleiste kannst du die Seiten bei Bedarf neu anordnen.",
    },
    {
      title: "PDF speichern",
      body: "Tippe auf Fertig, vergib einen aussagekräftigen Dateinamen und speichere. Im Hintergrund läuft die Texterkennung (OCR), die das PDF durchsuchbar macht. Anschließend kannst du es teilen, drucken oder in einen Cloud-Speicher hochladen.",
    },
  ],
  tips: [
    "Gleichmäßiges, weiches Licht schlägt helles Deckenlicht — direktes Licht erzeugt Reflexionen auf glänzendem Papier oder laminierten Formularen.",
    "Lege das Dokument flach hin. Gewölbte Seiten, etwa bei einem aufgeschlagenen Buch, führen zu Textverzerrungen, die auch die Perspektivkorrektur nicht vollständig ausgleichen kann.",
    "Bei Kassenbelegen reduziert der Filter Schwarz-Weiß die Dateigröße typischerweise um 60–80 %, ohne dass die Lesbarkeit leidet.",
    "Scannst du Ausweise oder Reisepässe, speichere das PDF in einem passwortgeschützten Ordner oder versieh es vor dem Teilen mit einem Passwortschutz.",
    "Bei gutem Ausschnitt löst die automatische Erkennung in unter einer Sekunde aus. Tut sie sich schwer, liegt es meist am Licht oder am Kontrast.",
  ],
  mobileNote:
    "Der komplette Ablauf vom Scannen bis zum Speichern dauert bei einem mehrseitigen Dokument unter 30 Sekunden. Verglichen mit dem Gang zum Flachbettscanner, dem Herunterladen von Scanner-Software und dem Verwalten von E-Mail-Anhängen gewinnt das Handy für den geschäftlichen Alltag klar. Das Ergebnis ist dasselbe durchsuchbare Standard-PDF, das jedes Buchhaltungstool und Dokumentensystem akzeptiert.",
  faq: [
    {
      q: "Ist die Scanqualität so gut wie bei einem Flachbettscanner?",
      a: "Bei alltäglichen Dokumenten wie Belegen, Verträgen, Ausweisen und Formularen: ja, sofern Licht und flach liegendes Dokument stimmen. Für die Archivierung von Fotos oder feinen Druck auf Glanzpapier ist ein dedizierter Flachbettscanner weiterhin im Vorteil.",
    },
    {
      q: "Welche Sprachen unterstützt die Texterkennung (OCR)?",
      a: "Alle wichtigen Sprachen mit lateinischer Schrift (Englisch, Spanisch, Französisch, Deutsch, Italienisch, Portugiesisch, Niederländisch, Tschechisch, Polnisch und weitere) sowie Kyrillisch, Griechisch, Arabisch, Chinesisch, Japanisch und Koreanisch. Die Erkennungsqualität ist bei sauberer Druckschrift am höchsten und bei Handschrift geringer.",
    },
    {
      q: "Kann ich einen Ausweis oder Reisepass scannen?",
      a: "Ja. Die App liefert einen sauberen, entzerrten Scan, den du für eine KYC-Prüfung hochladen oder anderweitig einreichen kannst. Verschickst du das PDF per E-Mail, versieh es vorher mit einem Passwort.",
    },
    {
      q: "Funktioniert das Scannen offline?",
      a: "Ja. Kantenerkennung, Perspektivkorrektur und Filter laufen auf dem Gerät. Auch die OCR läuft bei den wichtigsten Sprachen lokal; für seltenere Sprachen lädt die App bei der ersten Nutzung möglicherweise ein Erkennungsmodell herunter.",
    },
    {
      q: "Wie groß werden gescannte PDFs?",
      a: "Ein typisches fünfseitiges Dokument in Schwarz-Weiß liegt bei etwa 200–400 KB. Derselbe Scan in Farbe kommt meist auf 1–2 MB. Willst du die Datei per E-Mail verschicken, lässt sich die Größe mit Komprimierung noch weiter reduzieren.",
    },
  ],
  related: [
    { label: "Scan zu PDF — die vollständige Übersicht", path: "/scan-to-pdf" },
    {
      label: "Das gescannte PDF im Nachhinein bearbeiten",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "PDF für Unternehmen", path: "/pdf-for-business" },
  ],
  parentHub: { label: "Scan zu PDF", path: "/scan-to-pdf" },
};

export default content;
