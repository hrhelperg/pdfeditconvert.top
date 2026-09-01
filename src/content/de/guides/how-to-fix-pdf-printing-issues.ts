import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-printing-issues",
  h1: "PDF-Druckprobleme lösen (abgeschnittene Seiten, falsche Größe, fehlender Text)",
  description:
    "Wenn ein PDF beschnitten, falsch skaliert oder mit fehlendem Text gedruckt wird, hängt die Lösung vom Symptom ab. Eine kurze Übersicht, die jedes Druckproblem der richtigen Einstellung zuordnet.",
  updated: "2026-05-29",
  intro: [
    "PDFs wurden entwickelt, damit ein Dokument überall gleich aussieht – auch auf Papier. Druckt eines also schlecht, liegt das fast immer am Druckauftrag, nicht an der Datei. Die Seite ist größer als das Papier, der Drucker skaliert herunter, eine Schriftart ist nicht eingebettet, eine Sicherheitsmarkierung blockiert den Druck, oder das Dokument ist für ein anderes Papierformat ausgelegt, als du gerade verwendest.",
    "Jede dieser Ursachen erzeugt ein anderes Symptom: abgeschnittene Ränder, winzigen Text, leere Seiten, Fehlermeldungen oder seltsame Ersatzschriftarten. Wer das alles pauschal als „der Drucker ist kaputt“ abtut, verschwendet viel Papier. Wer jedes Problem einzeln mit der passenden Lösung angeht, spart Zeit.",
    "Diese Anleitung ist eine kurze Matrix: was du siehst, gegenüber der wahrscheinlichsten Ursache und der richtigen Lösung. Die meisten Lösungen sind Einstellungen im Druckdialog oder ein kurzer Schritt vor dem Drucken.",
  ],
  steps: [
    {
      title: "Bei abgeschnittenen Rändern: „An Druckbereich anpassen“ wählen",
      body: "Viele PDFs sind randlos bis zum Papierrand ausgelegt; Drucker können aber nicht bis zum Rand drucken. Wähle im Druckdialog „Anpassen“ oder „An Druckbereich verkleinern“ statt „Originalgröße“. Die Seite wird dann minimal verkleinert und verliert keine Ränder mehr.",
    },
    {
      title: "Bei winzigem Text: Papierformat abgleichen",
      body: "Ein für A3 angelegtes Dokument schrumpft beim Drucken auf A4, um zu passen. Exportiere die Quelle erneut im Zielformat, oder teile die Doppelseite mit PDF-Seiten extrahieren vor dem erneuten Drucken in zwei einzelne Seiten auf.",
    },
    {
      title: "Bei leeren Seiten oder fehlendem Text: Schriftarten einbetten",
      body: "Dokumente mit Schriftarten, die dein Drucker nicht kennt, können mit fehlenden Zeichen erscheinen. Exportiere in der Quellanwendung erneut mit aktivierter Option „alle Schriftarten einbetten“, oder wandle die Datei zuerst über „Drucken als PDF“ in gerasterte Pixel um.",
    },
    {
      title: "Bei der Meldung „Dokument ist geschützt“: Berechtigungen prüfen",
      body: "Manche PDFs werden mit einer Druckblockade exportiert. Nur die Autorin oder der Autor kann sie entfernen. Ist es deine eigene Datei, exportiere sie ohne die Druckeinschränkung neu. Ist es nicht deine Datei, bitte um eine Kopie ohne Druckschutz.",
    },
    {
      title: "Drehe Seiten vor dem Drucken, wenn die Ausrichtung nicht stimmt",
      body: "Liegen Seiten seitlich oder auf dem Kopf, korrigiere sie vor dem Drucken mit PDF drehen. Eine Drehung im Drucker selbst bringt oft eigene Skalierungsprobleme mit sich – die Korrektur in der Datei ist sauberer.",
    },
    {
      title: "Drucke zuerst eine einzelne Testseite",
      body: "Verschwende kein 50-seitiges Dokument, um ein Druckproblem zu entdecken. PDF-Seiten extrahieren speichert eine einzelne Seite als eigenständiges PDF; drucke die, bestätige die Einstellungen und starte dann den vollständigen Druckauftrag.",
    },
  ],
  tips: [
    "Achte im Druckdialog immer darauf, dass das eingestellte Papierformat mit der PDF-Seitengröße übereinstimmt – Unstimmigkeiten zwischen Letter und A4 verursachen die meisten Fälle von „zu klein gedruckt“.",
    "Exportiere die Datei zuerst über „Drucken als PDF“ neu, wenn sie sich seltsam verhält. Die fest eingebettete Kopie druckt oft sauber, wo das Original scheitert.",
    "Broschüren- und Heftungseinstellungen verursachen mehr Druckprobleme, als sie lösen – drucke zuerst normale Einzelseiten und ordne sie bei Bedarf danach physisch um.",
    "Farbprofile aus Design-Software können auf Heimdruckern zu dunklen, matschigen Ausdrucken führen. Ein erneuter Export in sRGB behebt das meist.",
    "Ist der Druckertreiber veraltet, kann ein erneuter Export über „Drucken als PDF“ Funktionen verbergen, mit denen der Treiber nicht zurechtkommt.",
  ],
  mobileNote:
    "Drucken vom Handy läuft meist über AirPrint, Google Print oder eine Hersteller-App, und jede davon behandelt PDFs etwas anders. Die App PDF Editor lässt dich Seiten vor dem Senden skalieren, drehen und zuschneiden – die Datei selbst zu korrigieren, statt mit dem Druckdialog zu kämpfen, funktioniert am Handy meist besser.",
  faq: [
    {
      q: "Warum druckt mein PDF kleiner als am Bildschirm?",
      a: "Fast immer, weil das Dokumentformat nicht zum Papierformat passt. Der Drucker verkleinert automatisch, um zu passen. Exportiere im Zielformat neu oder wähle „Originalgröße“ mit passendem Papier.",
    },
    {
      q: "Warum fehlen beim Drucken manche Zeichen?",
      a: "Die Schriftarten wurden nicht eingebettet, und dein Drucker hat sie nicht. Exportiere erneut mit eingebetteten Schriftarten oder wandle die Datei zuerst über „Drucken als PDF“ um.",
    },
    {
      q: "Warum meldet der Druckdialog, mein PDF sei geschützt?",
      a: "Es trägt eine Berechtigungsmarkierung, die den Druck blockiert. Nur die Autorin oder der Autor kann sie aufheben. Eine sichere Umgehung von der Empfängerseite aus gibt es nicht.",
    },
    {
      q: "Sollte ich Seiten im Drucker oder in der Datei drehen?",
      a: "In der Datei. Eine Drehung im Drucker kann die Skalierung verändern, während PDF drehen die Ausrichtung fest ins Dokument einbettet.",
    },
    {
      q: "Wie vermeide ich Papierverschwendung beim Aufspüren von Druckproblemen?",
      a: "Extrahiere zuerst eine einzelne Seite, drucke sie, bestätige die Einstellungen und starte dann erst den vollständigen Druckauftrag. PDF-Seiten extrahieren erledigt das direkt im Browser.",
    },
  ],
  related: [
    { label: "PDF drehen – Ausrichtung vor dem Drucken korrigieren", path: "/rotate-pdf" },
    { label: "PDF-Seiten extrahieren – zuerst eine Testseite drucken", path: "/extract-pdf-pages" },
    { label: "PDF-Formatierungsprobleme lösen", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "PDF-Schriftartprobleme lösen", path: "/guides/how-to-fix-pdf-font-issues" },
  ],
  parentHub: { label: "PDF-Werkzeuge – kostenlos, im Browser", path: "/pdf-tools" },
};

export default content;
