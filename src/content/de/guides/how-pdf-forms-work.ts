import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-pdf-forms-work",
  h1: "Wie PDF-Formulare funktionieren – Felder, AcroForms und flache Scans",
  description:
    "Im Kern ist ein PDF-Formular entweder eine Reihe interaktiver Felder auf der Seite oder ein flaches Bild ganz ohne Felder. Wie beides aufgebaut ist und warum das beim Ausfüllen wichtig ist.",
  updated: "2026-06-01",
  intro: [
    "Es hilft zu verstehen, was in einem PDF-Formular technisch eigentlich passiert, denn das erklärt fast jede Eigenart, die dir begegnen wird. Eine PDF-Seite ist ein festes Layout – Text, Linien und Bilder an exakten Koordinaten platziert. Ein Formular legt darüber eine eigene Ebene: interaktive Felder, jedes davon ein kleines Feld, das weiß, ob es ein Textfeld, ein Kontrollkästchen, ein Dropdown-Menü oder ein Unterschriftsfeld ist.",
    "Hat ein Formular diese Feldebene, zeichnet dein PDF-Anzeigeprogramm bearbeitbare Felder genau dort, wo sie beim Erstellen platziert wurden. Du tippst, und das Programm speichert deine Eingabe im Feld, statt sie fest in die Seite zu schreiben. Genau diese Trennung ist der Grund, warum ausgefüllte Antworten manchmal gelöscht werden, sich ändern lassen oder gar nicht gespeichert werden – sie liegen in der Feldebene, nicht auf der Seite selbst, bis du sie einbettest.",
    "Nicht interaktive Formulare haben gar keine Feldebene. Sie bestehen nur aus dem Seitenbild, es gibt also nichts Interaktives zum Hineintippen; du fügst deinen eigenen Text darüber hinzu. Diese Anleitung zeigt, wie beide Arten aufgebaut sind, was Einbetten bewirkt und warum sich dasselbe Formular in unterschiedlichen Apps unterschiedlich verhalten kann.",
  ],
  steps: [
    {
      title: "Die Seitenebene: fest und endgültig",
      body: "Jedes PDF hat eine Seitenebene, in der Text und Grafiken an exakten Positionen fixiert sind. Das sorgt dafür, dass ein PDF überall gleich aussieht. Bei einem nicht interaktiven Formular liegen die Fragenzeilen und Beschriftungen vollständig auf dieser Ebene.",
    },
    {
      title: "Die Feldebene: interaktiv obendrauf",
      body: "Interaktive Formulare legen eine Ebene aus Formularfeldern über die Seite – Texteingaben, Kontrollkästchen, Radiobuttons, Dropdown-Menüs, Unterschriftsfelder. Jedes Feld hat einen Namen und einen Typ, den das Anzeigeprogramm erkennt.",
    },
    {
      title: "Ausfüllen: Eingaben werden in Feldern gespeichert",
      body: "Tippst du in ein interaktives Feld, wird deine Antwort in diesem Feld gehalten, nicht in die Seite eingebettet. Deshalb kannst du sie löschen und neu eingeben – und deshalb zeigt sie ein anderes Anzeigeprogramm möglicherweise leicht anders an.",
    },
    {
      title: "Speichern: die Feldwerte erhalten",
      body: "Wenn du ein ausgefülltes Formular speicherst, werden die Feldwerte in der Datei abgelegt. Manche einfachen Anzeigeprogramme bieten nur eine Druckfunktion, aber kein Speichern der Daten – der klassische Grund, warum ausgefüllte Antworten beim erneuten Öffnen verschwunden sind.",
    },
    {
      title: "Einbetten: Felder in die Seite verschmelzen",
      body: "Beim Einbetten werden die Feldwerte fest in die Seitenebene geschrieben und zu dauerhaftem Seiteninhalt. Danach lassen sich die Antworten nicht mehr bearbeiten oder löschen – praktisch kurz bevor du das Formular zurückschickst.",
    },
  ],
  tips: [
    "Stell dir ein interaktives Formular wie eine durchsichtige Folie mit bearbeitbaren Feldern vor, die über einer gedruckten Seite liegt. Einbetten klebt diese Folie dauerhaft fest.",
    "Weil die Feldwerte von der Seite getrennt sind, kann dasselbe Formular in verschiedenen Anzeigeprogrammen leicht unterschiedlich aussehen – Schriftart und Feldgröße stimmen nicht immer exakt überein.",
    "Verschwinden Antworten immer wieder, wird die Feldebene nicht gespeichert. Nutze ein Programm, das die Feldwerte tatsächlich in die Datei schreibt, oder bette das Formular vor dem Schließen ein.",
    "Manche fortgeschrittenen Formulare (oft XFA oder dynamische Formulare genannt) nutzen eine komplexere Struktur, die viele Anzeigeprogramme nicht vollständig unterstützen – bei ihnen treten Probleme am häufigsten auf.",
    "Nicht interaktive Formulare haben überhaupt keine Feldebene, deshalb können bei ihnen auch keine Daten auf diese Weise verloren gehen – dein hinzugefügter Text ist einfach Teil der Seite.",
  ],
  mobileNote:
    "Die App PDF Editor liest die Feldebene eines Formulars beim Öffnen, sodass interaktive Felder sofort antippbar sind. Bei nicht interaktiven Formularen ohne Feldebene lässt sie dich Text und Markierungen direkt auf die Seite setzen und dann exportieren – und du kannst das Ergebnis einbetten, damit deine Antworten vor dem Versand fest sitzen.",
  faq: [
    {
      q: "Woraus bestehen die Felder eines PDF-Formulars?",
      a: "Sie bilden eine Ebene interaktiver Objekte – Textfelder, Kontrollkästchen, Radiobuttons, Dropdown-Menüs und Unterschriftsfelder –, die über dem festen Seitenlayout liegt, jedes mit einem Namen und einem Typ, den das Anzeigeprogramm erkennt.",
    },
    {
      q: "Warum verschwinden meine ausgefüllten Antworten manchmal?",
      a: "Feldwerte werden getrennt von der Seite gespeichert. Druckt dein Anzeigeprogramm die Daten nur, statt sie zu speichern, oder speicherst du nicht richtig, wird die Feldebene nicht in die Datei geschrieben, und die Antworten gehen verloren.",
    },
    {
      q: "Was bedeutet es, ein PDF-Formular einzubetten?",
      a: "Beim Einbetten werden die Feldwerte fest in die Seite selbst geschrieben und damit dauerhaft. Das Formular ist danach nicht mehr bearbeitbar, aber die Antworten werden überall gleich angezeigt und gedruckt.",
    },
    {
      q: "Was ist ein AcroForm?",
      a: "AcroForm ist die standardisierte, weit verbreitete Art interaktiver PDF-Formulare. Daneben gibt es einen komplexeren, dynamischen Typ (XFA), den viele Anzeigeprogramme nur unzureichend unterstützen – deshalb funktionieren manche Formulare nur in bestimmter Software.",
    },
    {
      q: "Warum sieht dasselbe Formular in zwei Apps unterschiedlich aus?",
      a: "Weil jedes Anzeigeprogramm die Feldebene selbst darstellt. Das Erscheinungsbild eines Formulars kann sich zwischen PDF-Anzeigeprogrammen unterscheiden, besonders bei Schriftart und Feldgröße. Einbetten vor dem Teilen verhindert solche Überraschungen.",
    },
  ],
  related: [
    { label: "Was ist ein PDF-Formular?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Ausgefülltes PDF-Formular speichern",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "Kompatibilitätsprobleme bei PDF-Formularen",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "PDF Editor – Formulare auf dem Handy ausfüllen", path: "/pdf-editor" },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
