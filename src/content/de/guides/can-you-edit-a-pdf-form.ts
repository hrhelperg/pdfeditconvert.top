import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "can-you-edit-a-pdf-form",
  h1: "Kann man ein PDF-Formular bearbeiten? Was geht und was nicht",
  description:
    "Die Fragen eines PDF-Formulars zu bearbeiten ist etwas anderes als es auszufüllen. Was sich ändern lässt, was gesperrt ist, und wie du ein Formular änderst, das du nur als fertiges PDF hast.",
  updated: "2026-06-01",
  intro: [
    "„Kann man ein PDF-Formular bearbeiten?“ verbirgt meist zwei verschiedene Fragen. Die eine lautet: Kann ich es ausfüllen – meine Antworten in die Felder eintippen? Fast immer ja. Die andere lautet: Kann ich das Formular selbst verändern – eine Frage umformulieren, ein Feld hinzufügen, eine Beschriftung korrigieren? Das hängt ganz davon ab, wie das Formular erstellt wurde und ob es gesperrt ist.",
    "Ein Formular auszufüllen ist der Alltagsfall und selten ein Problem. Die Struktur eines Formulars zu bearbeiten ist die schwierigere Aufgabe, und ob das geht, hängt von drei Dingen ab: ob die Datei echten, bearbeitbaren Text enthält oder ein flacher Scan ist, ob die Autorin oder der Autor eine Sicherheitseinstellung angewendet hat, die Änderungen blockiert, und ob du ein Werkzeug hast, das Formularfelder wirklich bearbeiten kann statt sie nur auszufüllen.",
    "Diese Anleitung trennt die beiden Fragen sauber voneinander und zeigt dann, was realistisch möglich ist, wenn du nur das fertige PDF hast – samt der ehrlichen Grenzen, denn manche Formulare sind bewusst so gebaut, dass sie sich nicht bearbeiten lassen.",
  ],
  steps: [
    {
      title: "Kläre, welche Art von Bearbeitung du meinst",
      body: "Antworten einzutragen ist die eine Sache, den Wortlaut, das Layout oder die Felder des Formulars zu ändern eine andere. Ersteres ist einfach und ganz normal; Zweiteres meinen die meisten, wenn sie von „ein Formular bearbeiten“ sprechen – und das ist deutlich eingeschränkter.",
    },
    {
      title: "Prüfe: echter Text oder flacher Scan?",
      body: "Versuche, den Text des Formulars zu markieren. Lässt er sich markieren, ist der Inhalt echt und potenziell bearbeitbar. Lässt sich nichts markieren, handelt es sich um einen flachen Scan – ein Bild eines Formulars – und Bearbeiten bedeutet dann erst OCR oder das Layout komplett neu aufzubauen.",
    },
    {
      title: "Prüfe auf Sicherheitseinschränkungen",
      body: "Manche Formulare erlauben zwar das Ausfüllen, blockieren aber das Bearbeiten oder verbieten Änderungen sogar ganz ohne Passwort. Sind die Bearbeitungswerkzeuge in einem PDF-Editor ausgegraut, ist die Datei wahrscheinlich absichtlich eingeschränkt.",
    },
    {
      title: "Nutze einen formularfähigen Editor für echte Felder",
      body: "Reine Ausfüll-Werkzeuge lassen dich nur Felder beantworten. Um Felder hinzuzufügen, zu verschieben, umzubenennen oder zu löschen, oder Fragen zu ändern, brauchst du einen Editor, der die Struktur des Formulars offenlegt – das kann nicht jede App.",
    },
    {
      title: "Wisse, wann du nach der Quelldatei fragen solltest",
      body: "Brauchst du größere Änderungen, ist der sauberste Weg oft, die ursprüngliche bearbeitbare Datei (etwa ein Word-Dokument oder die Quelle des Formulars) bei der erstellenden Person anzufragen, statt gegen ein gesperrtes PDF anzukämpfen.",
    },
  ],
  tips: [
    "Musst du das Formular nur ausfüllen, brauchst du es gar nicht zu bearbeiten – fülle einfach die Felder aus oder füge bei einer nicht interaktiven Kopie Text hinzu.",
    "Ein gescanntes Formular zu bearbeiten heißt, mit einem Bild zu arbeiten: Entweder gewinnst du per OCR den Text zurück, oder du legst neuen Text und neue Felder über die alten.",
    "Formularfelder umzubenennen oder neu anzuordnen ist echtes Bearbeiten und braucht ein dafür gebautes Werkzeug – einfache Anzeigeprogramme können das nicht.",
    "Respektiere gesperrte Formulare: Eine Sicherheitseinstellung, die das Bearbeiten blockiert, ist meist eine bewusste Entscheidung der erstellenden Person, kein Fehler, den man umgehen sollte.",
    "Behalte eine nicht eingebettete Kopie, wenn du deine Antworten später noch anpassen willst; sobald ein Formular eingebettet ist, werden die Antworten fester Seiteninhalt.",
  ],
  mobileNote:
    "Auf dem Handy lässt dich die App PDF Editor jedes Formular ausfüllen und den Dokumentinhalt bearbeiten, sofern die Datei es zulässt. Bei nicht interaktiven Formularen fügst du Text direkt auf der Seite hinzu, statt Felder zu bearbeiten. Ausfüllen und leichte Bearbeitungen laufen auf dem Gerät, das leere Original bleibt für die Wiederverwendung erhalten.",
  faq: [
    {
      q: "Kann ich die Fragen eines PDF-Formulars ändern?",
      a: "Manchmal. Enthält das Formular echten, bearbeitbaren Text und ist nicht gesperrt, kann ein formularfähiger Editor Wortlaut und Felder ändern. Ist es ein flacher Scan oder sicherheitsbeschränkt, ist das Ändern der Fragen deutlich schwerer oder gar nicht möglich.",
    },
    {
      q: "Warum lässt mich mein Editor ein Formular nicht ändern?",
      a: "Entweder ist die Datei ein flaches Bild ohne bearbeitbaren Text, oder sie trägt Berechtigungen, die das Ausfüllen erlauben, aber nicht das Bearbeiten. Beides kommt häufig vor und ist meist beabsichtigt.",
    },
    {
      q: "Kann ich meine Antworten nachträglich ändern, nachdem ich ein Formular ausgefüllt habe?",
      a: "Ja, solange du es als interaktives Formular gespeichert und nicht eingebettet hast. Ist es einmal eingebettet, verschmelzen die Antworten mit der Seite und sind fest.",
    },
    {
      q: "Wie bearbeite ich ein gescanntes Formular ohne Felder?",
      a: "Behandle es wie ein Bild. Nutze OCR, um bearbeitbaren Text zurückzugewinnen, oder platziere einfach eigenen Text und Häkchen darüber – zum Ausfüllen reicht meist der zweite Weg völlig aus.",
    },
    {
      q: "Ist es besser, das PDF zu bearbeiten, oder sollte ich die Originaldatei anfragen?",
      a: "Für größere Änderungen frag nach Möglichkeit die erstellende Person nach der Quelldatei. Ein fertiges, womöglich gesperrtes PDF zu bearbeiten ist immer eingeschränkter, als mit dem Original zu arbeiten.",
    },
  ],
  related: [
    { label: "Was ist ein PDF-Formular?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Bearbeitbares PDF oder ausfüllbares PDF",
      path: "/guides/editable-pdf-vs-fillable-pdf",
    },
    {
      label: "Ausfüllbares PDF erstellen",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "Warum kann ich ein PDF nicht bearbeiten?",
      path: "/guides/why-cant-i-edit-a-pdf",
    },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
