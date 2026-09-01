import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-class-documents-as-pdf",
  h1: "Unterlagen für den Unterricht als PDF bearbeiten (annotieren, markieren, unterschreiben)",
  description:
    "Handouts, Aufgabenblätter und Einverständniserklärungen kommen oft als PDF. So markierst, füllst und gibst du sie zurück, ganz ohne Ausdrucken – vom Handy oder Laptop aus.",
  updated: "2026-05-29",
  intro: [
    "Unterlagen für den Unterricht kommen heute öfter als PDF an als in jedem anderen Format. Handouts zum Markieren, Aufgabenblätter zum Ausfüllen, Einverständniserklärungen zum Unterschreiben und Zurückgeben, Modulhandbücher zum Durchlesen. Die Versuchung ist groß, alles auszudrucken, von Hand auszufüllen und wieder einzuscannen. Das funktioniert, ist aber langsam und sieht am Ende schlechter aus, als das PDF direkt zu bearbeiten.",
    "Moderne PDF-Bearbeitung deckt alle vier Fälle gut ab: Markieren und Anmerkungen fürs Lesen, Ausfüllen für Aufgabenblätter und Formulare, Unterschriften für Einverständniserklärungen und strukturelle Änderungen, wenn eine Seite hinzukommen muss. Das meiste lässt sich in einem Browser-Tab oder einer mobilen App erledigen, ohne für Software zu bezahlen.",
    "Diese Anleitung geht jeden Fall durch — welches Tool das richtige ist, was es kann und was nicht, und wie du eine saubere, ausgefüllte Kopie zurückschickst. Vorausgesetzt wird, dass du möglichst nichts ausdrucken willst, wenn es nicht sein muss.",
  ],
  steps: [
    {
      title: "Zum Lesen und Anmerken: markieren und kommentieren",
      body: "Die meisten PDF-Reader (und die PDF-Editor-App) unterstützen Markieren, Unterstreichen und Notizzettel-Kommentare. Nutze das für aktives Lesen — die Anmerkungen bleiben mit der Datei verbunden und überstehen auch das Teilen.",
    },
    {
      title: "Bei echten Formularfeldern: antippen und ausfüllen",
      body: "Als Formular angelegte PDFs haben echte interaktive Felder. Tippe jedes Feld an, tippe deinen Text ein, geh zum nächsten weiter. Das Ergebnis sieht genauso aus wie ausgedruckte und getippte Arbeit.",
    },
    {
      title: "Bei nicht interaktiven PDFs (ohne Formularfelder): Textfelder hinzufügen",
      body: "Bei einem gescannten Handout ohne echte Felder legst du Textfelder über die Lücken. Die PDF-Editor-App unterstützt das; das Ergebnis wirkt ordentlicher als handschriftliche Antworten auf einem Ausdruck.",
    },
    {
      title: "Für Unterschriften: PDF unterschreiben",
      body: "Mit PDF unterschreiben zeichnest oder tippst du eine Unterschrift direkt ins Formular. Bei Einverständniserklärungen ist eine gezeichnete Unterschrift die richtige Wahl.",
    },
    {
      title: "Um Seiten hinzuzufügen: zusammenführen",
      body: "Ist deine Antwort länger, als die Lücken im Handout zulassen, kannst du mit PDF zusammenführen zusätzliche Seiten anhängen. Achte auf die richtige Reihenfolge; die Originalseiten bleiben unverändert.",
    },
    {
      title: "Speichere als neue Datei, nicht über das Original",
      body: "Speichere die ausgefüllte Version unter einem neuen Namen (Handout3_Ausgefuellt_Nachname.pdf). Das leere Original bleibt unangetastet, falls du es noch einmal brauchst oder mit einer Lernpartnerin teilen willst.",
    },
  ],
  tips: [
    "Prüfe zuerst, ob das PDF echte Formularfelder hat. Öffnet sich beim Antippen einer Leerzeile ein Texteingabecursor, ist es ein echtes Formular. Passiert nichts, brauchst du ein Textfeld-Overlay.",
    "Nutze eine einheitliche Schriftgröße für deine Antworten — orientiere dich nach Möglichkeit an der Schriftgröße des Dokumenttexts.",
    "Drucke nur zum Ausfüllen aus, wenn es wirklich nötig ist. Die zurückgescannte Version ist immer schlechter lesbar als eine digital ausgefüllte.",
    "Speichere, bevor du unterschreibst. Eine Unterschrift bettet meist Teile der Datei fest ein; die Version davor ist deine bearbeitbare Kopie.",
    "Bestätige ausgefüllte Formulare, indem du danach als PDF exportierst — manche Tools speichern den ausfüllbaren Zustand separat, und der exportierte PDF friert deine Antworten fest.",
  ],
  mobileNote:
    "Viele Unterlagen für den Unterricht kommen zuerst auf dem Handy an und müssen genauso zurückgehen. Die PDF-Editor-App übernimmt Anmerkungen, Formularausfüllung, Unterschrift und Zusammenführen auf iOS und Android, sodass ein Handout nicht auf einen Laptop-Moment warten muss, um ausgefüllt zurückzukommen.",
  faq: [
    {
      q: "Kann ich ein PDF im Browser bearbeiten?",
      a: "Für begrenzte Fälle ja — Formularausfüllung und Anmerkungen funktionieren in vielen Browsern. Für Textänderungen und strukturelle Anpassungen leistet ein richtiger Editor (browserbasiert oder als App) deutlich mehr.",
    },
    {
      q: "Warum hat mein Handout keine echten Formularfelder?",
      a: "Entweder hat die Professorin sie beim Export nicht aktiviert, oder die Datei ist ein Scan. Nutze in dem Fall ein Textfeld-Overlay über den Leerzeilen.",
    },
    {
      q: "Werden signierte PDFs für Unterlagen im Unterricht akzeptiert?",
      a: "Zunehmend ja. Manche rechtlich bindenden Formulare (etwa bestimmte Einverständniserklärungen je nach geltendem Recht) verlangen unter Umständen noch eine handschriftliche Unterschrift auf Papier — prüfe die Hinweise auf dem Formular.",
    },
    {
      q: "Sollte ich immer als neue Datei speichern?",
      a: "Ja, bei Unterlagen für den Unterricht. Das leere Original zu behalten erlaubt dir, es erneut zu versuchen oder zu teilen, ohne neu herunterzuladen.",
    },
    {
      q: "Wie füge ich einem PDF, das ich ausfülle, eine Seite hinzu?",
      a: "Schreib deinen zusätzlichen Inhalt als separates PDF, und nutze dann PDF zusammenführen, um beides zu verbinden. Platziere die angehängte Seite dort, wo sie inhaltlich hingehört.",
    },
  ],
  related: [
    { label: "PDF Editor — Text und Bilder mobil bearbeiten", path: "/pdf-editor" },
    { label: "PDF unterschreiben — elektronische Signaturen hinzufügen", path: "/sign-pdf" },
    { label: "Wie du PDF-Formulare auf dem Handy ausfüllst", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "Wie du ein PDF mobil mit Anmerkungen versiehst", path: "/guides/how-to-annotate-pdf-on-mobile" },
  ],
  parentHub: { label: "PDF Editor — Text, Bilder und Seiten bearbeiten", path: "/pdf-editor" },
};

export default content;
