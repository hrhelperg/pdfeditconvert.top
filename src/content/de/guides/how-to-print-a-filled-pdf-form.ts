import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-print-a-filled-pdf-form",
  h1: "Ausgefülltes PDF-Formular mit sichtbaren Antworten drucken",
  description:
    "Formular gedruckt, und die Felder kamen leer heraus? Warum eingetragene Werte manchmal nicht mitgedruckt werden, und wie du eine saubere Papierkopie mit jeder sichtbaren Antwort bekommst.",
  updated: "2026-06-01",
  intro: [
    "Du füllst ein Formular am Bildschirm aus, schickst es an den Drucker, und das Papier kommt ohne deine Antworten heraus – nur das leere Formular. Es ist eines der häufigsten und rätselhaftesten Formularprobleme, und es hat eine klare Ursache: Die Antworten liegen in der Feldebene des Formulars, und manche Druckwege überspringen diese Ebene und drucken nur die darunterliegende Seite.",
    "Die Lösung ist meist eine von zwei Dingen – entweder die Einstellung aktivieren, die Formularfeldwerte mitdruckt, oder das Formular zuerst einbetten, damit die Antworten Teil der Seite werden und nicht ausgelassen werden können. So oder so ist ein sauberer Ausdruck mit jeder sichtbaren Antwort unkompliziert, sobald du weißt, warum das Problem auftritt.",
    "Diese Anleitung behandelt das Problem der leeren Felder, die Druckeinstellungen, die es steuern, und die allgemeineren Druckchecks (Ränder, Skalierung), die dafür sorgen, dass ein ausgefülltes Formular auch auf Papier gut aussieht.",
  ],
  steps: [
    {
      title: "Reproduziere das Problem in der Druckvorschau",
      body: "Öffne den Druckdialog und schau dir die Vorschau an, bevor du etwas an den Drucker schickst. Fehlen deine Antworten schon dort, liegt es am Drucken der Felder, nicht am Drucker.",
    },
    {
      title: "Aktiviere das Drucken der Formularfeldwerte",
      body: "Suche nach einer Druckoption wie „Formularfelder drucken“ oder einer Einstellung für Kommentare und Formulare mit dem Wert „Dokument und Markierungen“. Aktivierst du sie, wird die Feldebene mit deinen Antworten in den Druck einbezogen.",
    },
    {
      title: "Ist das nicht verfügbar, bette das Formular vorher ein",
      body: "Beim Einbetten werden deine ausgefüllten Antworten in die Seite selbst geschrieben. Ist das Formular erst einmal eingebettet, gibt es keine separate Feldebene mehr, die ausgelassen werden könnte, also enthält jeder Druckweg die Antworten. Das ist die zuverlässigste Lösung.",
    },
    {
      title: "Prüfe Skalierung und Ränder",
      body: "Stelle die Skalierung auf „Anpassen“ oder 100 % statt auf einen eigenen Zoomwert, damit das Formular nicht beschnitten oder verkleinert wird. Prüfe, dass das Papierformat zum Formular passt, damit nichts über den Rand hinausläuft.",
    },
    {
      title: "Drucke eine Testseite",
      body: "Drucke zuerst eine einzelne Seite, um zu prüfen, ob Antworten, Layout und Ränder stimmen, bevor du das gesamte Dokument druckst – besonders bei mehrseitigen Formularen.",
    },
  ],
  tips: [
    "Die schnellste, universelle Lösung: das Formular einbetten und dann drucken – ein eingebettetes Formular druckt seine Antworten überall, ganz ohne Sondereinstellung.",
    "Zeigt die Vorschau deine Antworten, das Papier aber nicht, liegt es an den Druckeinstellungen, nicht an der Datei – prüfe noch einmal die Option für Formularfelder.",
    "Ein gescanntes, nicht interaktives Formular hat dieses Problem nie: Seine „Felder“ sind schon Teil der Seite, deshalb werden sie immer mitgedruckt.",
    "Bei dunklen oder schattierten Formularen prüfe, ob der Feldtext in einer Farbe gedruckt wird, die auf dem Hintergrund lesbar bleibt.",
    "Druckeinstellungen unterscheiden sich zwischen Apps und Druckern, der genaue Name der Option variiert also – halte Ausschau nach allem, was Formularfelder oder Markierungen erwähnt.",
  ],
  mobileNote:
    "Beim Drucken vom Handy lauert dieselbe Falle – manche Druck-Shortcuts lassen Feldwerte weg. In der App PDF Editor kannst du das ausgefüllte Formular vor dem Drucken oder dem Senden an einen Drucker einbetten, sodass die Antworten fest in der Seite stecken und jedes Mal mitgedruckt werden.",
  faq: [
    {
      q: "Warum sind meine Formularantworten leer, wenn ich drucke?",
      a: "Weil die Antworten in der Feldebene des Formulars gespeichert sind und dein Druckweg sie überspringt. Aktiviere die Option zum Drucken der Formularfeldwerte, oder bette das Formular ein, damit die Antworten Teil der Seite werden.",
    },
    {
      q: "Was bewirkt Einbetten beim Drucken?",
      a: "Beim Einbetten werden deine ausgefüllten Werte in die Seite selbst geschrieben. Danach gibt es keine separate Feldebene mehr, die ausgelassen werden könnte, sodass die Antworten zuverlässig aus jeder App und jedem Drucker gedruckt werden.",
    },
    {
      q: "Die Antworten zeigen sich am Bildschirm, aber nicht auf Papier – warum?",
      a: "Dein Anzeigeprogramm stellt die Feldebene dar, aber die Druckeinstellungen schließen sie aus. Suche nach einer Druckoption zu Formularfeldern oder „Dokument und Markierungen“ und aktiviere sie, oder bette das Formular vor dem Drucken ein.",
    },
    {
      q: "Warum ist mein gedrucktes Formular an den Rändern abgeschnitten?",
      a: "Das ist ein Skalierungs- oder Papierformat-Problem, unabhängig vom Problem mit leeren Feldern. Stelle die Skalierung auf „Anpassen“ oder 100 % und wähle das passende Papierformat für das Formular.",
    },
    {
      q: "Haben flache, gescannte Formulare dieses Problem?",
      a: "Nein. Die Antworten eines nicht interaktiven Formulars sind Teil des Seitenbilds, sie werden also immer mitgedruckt. Das Problem mit leeren Feldern betrifft nur interaktive Formulare mit einer eigenen Feldebene.",
    },
  ],
  related: [
    {
      label: "Ausgefülltes PDF-Formular speichern",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "PDF-Formular druckt nicht richtig?",
      path: "/guides/pdf-form-not-printing-correctly",
    },
    {
      label: "PDF-Druckprobleme beheben",
      path: "/guides/how-to-fix-pdf-printing-issues",
    },
    {
      label: "Ausgefülltes PDF-Formular versenden",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
