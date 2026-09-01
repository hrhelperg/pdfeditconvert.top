import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-word-to-pdf",
  h1: "Word zu PDF konvertieren — kostenlos, ohne Upload",
  description:
    "Verwandle eine .docx- oder .txt-Datei in ein sauberes, teilbares PDF im Browser. Warum PDF das richtige Versandformat ist und was du vor dem Export prüfen solltest.",
  updated: "2026-05-23",
  intro: [
    "Ein Word-Dokument an jemand außerhalb der eigenen Arbeitsumgebung zu schicken, ist ein kleines Risiko. Die Person öffnet es vielleicht in einer anderen Word-Version, in Google Docs oder an einem Handy ganz ohne Office-App — und das sorgfältig arrangierte Layout verschiebt sich, fließt neu um oder lässt sich gar nicht erst öffnen. Eine Konvertierung zu PDF nimmt dieses Risiko. Ein PDF sieht überall gleich aus und lässt sich nicht versehentlich verändern.",
    "Diese Anleitung zeigt, wie du eine .docx- oder .txt-Datei mit dem kostenlosen Word-zu-PDF-Tool in ein PDF umwandelst — es läuft im Browser, ohne dass etwas auf einen Server geladen wird. Der richtige Schritt immer dann, wenn ein Dokument fertig ist und an jemand anderen geht: ein Angebot, ein Anschreiben, eine Rechnung, ein unterschriebenes Formular, ein Bericht für die Kundschaft.",
    "Außerdem geht es um die wenigen Dinge, die sich vor dem Export zu prüfen lohnen, damit das versendete PDF wirklich das ist, das du verschicken wolltest.",
  ],
  steps: [
    {
      title: "Bearbeite das Dokument zuerst fertig in Word",
      body: "Ein PDF ist eine Momentaufnahme, kein Arbeitsdokument. Erledige alle geplanten Änderungen in Word, Google Docs oder Pages, bevor du konvertierst — Tippfehler nach dem Export zu korrigieren bedeutet, noch einmal zu konvertieren.",
    },
    {
      title: "Öffne das Word-zu-PDF-Tool",
      body: "Rufe das Word-zu-PDF-Tool in deinem Browser auf. Nichts zu installieren, keine Anmeldung nötig — die Konvertierung läuft auf deinem eigenen Gerät.",
    },
    {
      title: "Füge deine .docx- oder .txt-Datei hinzu",
      body: "Zieh die Datei in den markierten Bereich oder klick, um sie auszuwählen. Auch reine .txt-Dateien lassen sich konvertieren — praktisch, um aus Notizen oder Protokollen ein ordentliches Dokument zu machen.",
    },
    {
      title: "Konvertieren und herunterladen",
      body: "Klick auf „In PDF konvertieren“. Das Tool erzeugt dein Dokument, und das PDF wird automatisch heruntergeladen — bereit zum Anhängen oder Hochladen.",
    },
    {
      title: "Öffne das PDF und lies es Korrektur",
      body: "Öffne das Ergebnis immer, bevor du es verschickst. Prüfe, ob die Seitenumbrüche sinnvoll sitzen, Überschriften an der richtigen Stelle stehen und nichts am Rand abgeschnitten ist.",
    },
    {
      title: "Gib der Datei einen aussagekräftigen Namen",
      body: "„Rechnung-Acme-2026-05.pdf“ sagt dem Empfänger sofort, worum es geht; „Dokument1.pdf“ nicht. Ein klarer Dateiname hilft auch später bei der Suche.",
    },
  ],
  tips: [
    "Bleib bei gängigen Schriftarten (Calibri, Arial, Times New Roman, Inter). Ausgefallene Schriftarten können bei der Konvertierung ersetzt werden und dein Layout verschieben.",
    "Braucht dein Dokument ein bestimmtes Seitenformat, stell es in Word ein, bevor du konvertierst, statt darauf zu hoffen, dass das Tool es richtig errät.",
    "Die Konvertierung zu PDF verschlüsselt die Datei nicht und schützt sie nicht vor dem Kopieren — sie verhindert nur beiläufiges Bearbeiten. Für echten Schutz fügst du separat ein Passwort hinzu.",
    "Komplexe Word-Funktionen wie eingebettete Kommentare, Änderungsverfolgung und Makros sind in einem PDF nicht enthalten. Nimm Änderungen vorher an oder verwirf sie, damit sie nicht im Ergebnis auftauchen.",
    "Willst du ein Dokument später noch einmal bearbeiten, behalte die .docx-Datei. Das PDF ist die Versandkopie, nicht dein Original.",
  ],
  mobileNote:
    "Musst du ein fertiges Dokument vom Handy aus verschicken? Die PDF-Editor-App wandelt Dokumente in PDFs um, unterschreibt sie und teilt sie direkt über das Teilen-Menü — praktisch, wenn ein Vertrag zurückgehen muss, bevor du wieder an einem Schreibtisch sitzt.",
  faq: [
    {
      q: "Bleibt meine Formatierung bei der Konvertierung erhalten?",
      a: "Bei gewöhnlichen Dokumenten mit gängigen Schriftarten ja — genau dafür ist PDF gemacht. Achten solltest du nur auf ungewöhnliche Schriftarten, die ersetzt werden können. Öffne das PDF und prüfe es, bevor du es verschickst.",
    },
    {
      q: "Kann ich auch eine .txt-Datei konvertieren?",
      a: "Ja. Reine Textdateien werden zu einem sauberen, lesbaren PDF — eine schnelle Möglichkeit, Notizen, Protokolle oder exportierte Daten ansehnlich zu machen.",
    },
    {
      q: "Wird mein Dokument irgendwohin hochgeladen?",
      a: "Nein. Die Konvertierung läuft in deinem Browser auf deinem eigenen Gerät ab, die Datei verlässt es nie. Das ist wichtig bei Verträgen, Rechnungen und allem mit persönlichen Daten.",
    },
    {
      q: "Schützt die Konvertierung zu PDF das Dokument?",
      a: "Sie verhindert beiläufiges Bearbeiten und hält das Layout fest, ist aber keine Verschlüsselung. Soll die Datei nicht geöffnet oder kopiert werden können, brauchst du zusätzlich ein Passwort — die Konvertierung allein reicht dafür nicht.",
    },
    {
      q: "Kann ich das PDF im Nachhinein noch bearbeiten?",
      a: "PDFs eignen sich für Korrekturen und Unterschriften, nicht für größere Überarbeitungen. Für größere Änderungen bearbeitest du besser die ursprüngliche .docx-Datei und exportierst neu, oder konvertierst das PDF zurück zu Word.",
    },
  ],
  related: [
    { label: "Word zu PDF — im Browser konvertieren", path: "/word-to-pdf" },
    { label: "PDF zu Word — die umgekehrte Konvertierung", path: "/pdf-to-word" },
    { label: "PDF zu Word konvertieren — die Anleitung", path: "/guides/how-to-convert-pdf-to-word" },
    { label: "Wann du PDF statt DOCX nutzen solltest", path: "/guides/when-to-use-pdf-instead-of-docx" },
  ],
  parentHub: { label: "PDF-Konverter", path: "/pdf-converter" },
};

export default content;
