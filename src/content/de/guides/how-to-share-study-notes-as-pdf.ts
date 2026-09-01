import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-study-notes-as-pdf",
  h1: "Lernnotizen als PDF teilen (Lerngruppe, Gruppenchat, Cloud)",
  description:
    "Teile Notizen mit deiner Lerngruppe, ohne Formatierung oder Versionsstand zu verlieren. Die PDF-Gewohnheiten, die gemeinsames Lernen vor dem Screenshot-Chaos bewahren.",
  updated: "2026-05-29",
  intro: [
    "Notizen mit einer Lerngruppe zu teilen sollte einfach sein, endet in der Praxis aber meist in einem Chatverlauf mit dreißig Screenshots und drei verschiedenen Versionen derselben Vorlesung. Am Abend vor der Prüfung findet niemand mehr die Version mit dem Rechenbeispiel, auf das sich alle ständig beziehen, und jemand hat ein Foto seiner handschriftlichen Randnotizen geschickt, das keiner entziffern kann.",
    "PDFs lösen das meiste davon. Sie frieren die Formatierung fest, funktionieren auf jedem Gerät, passen ins Teilen-Menü jeder Plattform und sind an kein bestimmtes Cloud-Konto gebunden. Ein paar Gewohnheiten beim Teilen — die Datei einheitlich benennen, bewusst versionieren, den richtigen Kanal wählen — halten gemeinsames Lernen geordnet, ohne dass jemand es wie ein Projekt managen muss.",
    "Diese Anleitung beschreibt diese Gewohnheiten. Keine davon ist ein Tool — alles sind Konventionen, auf die sich deine Gruppe einmal einigt. Danach läuft es einfach.",
  ],
  steps: [
    {
      title: "Einigt euch zuerst auf den Kanal",
      body: "Wählt einen einzigen Ort — Gruppenchat, gemeinsamer Cloud-Ordner, ein eigener Discord-Server — und bleibt dabei. Notizen, die über zwei Kanäle verstreut sind, findet niemand wieder. Welcher Kanal es ist, zählt weniger als die Konsequenz.",
    },
    {
      title: "Teile immer als PDF, nie als Foto des Dokuments",
      body: "Ein Screenshot eines PDFs ist schlechter als das PDF selbst. Schick die Datei direkt. Auf dem Handy ist das einfach — Teilen-Menü → Datei, kein Screenshot.",
    },
    {
      title: "Benenne die Datei für die Gruppe, nicht für dich selbst",
      body: "Kurskürzel_Woche3_Vorlesungsnotizen_DeinName.pdf. So sieht die Gruppe sofort, wer was zu welcher Woche geteilt hat. „Notizen.pdf“ ist nutzlos in einem Chat mit fünfzehn Anhängen namens Notizen.pdf.",
    },
    {
      title: "Versieh Entwurfsnotizen mit einem Wasserzeichen",
      body: "Sind deine Notizen ein erster Durchgang, der noch überarbeitet wird, stempelt Wasserzeichen zu PDF hinzufügen „ENTWURF“ oder „WIP“ auf jede Seite. Die Gruppe weiß dann, dass noch eine Überarbeitung kommt.",
    },
    {
      title: "Komprimiere vor dem Teilen",
      body: "PDF komprimieren senkt die Dateigröße für Chat-Plattformen mit Anhanggrenzen. Spart Zeit beim Hochladen über Mobilfunk und verhindert die Meldung „Datei zu groß“.",
    },
    {
      title: "Verfolge Versionen im Dateinamen, nicht im Chat",
      body: "Woche3_Vorlesungsnotizen_v2.pdf ist eindeutig. „Ich hab die Notizen überarbeitet, siehe Anhang“ im Chatverlauf ist es nicht. Der Dateiname ist das Versionsprotokoll.",
    },
  ],
  tips: [
    "Teile keine Word-Dokumente in der Gruppe. Sie sehen auf jedem Gerät anders aus, lassen sich jeweils nur von einer Person gleichzeitig bearbeiten und zersplittern sofort in verschiedene Versionen. Ein PDF friert alles fest.",
    "Nutze wo möglich mit OCR bearbeitete PDFs handschriftlicher Notizen — durchsuchbarer Text hilft der Gruppe, bestimmte Themen schnell zu finden.",
    "Poste keine Fotos von Laptop-Bildschirmen. Die Artefakte (Moiré-Muster, Spiegelungen, geringe Auflösung) machen Notizen schwerer lesbar, nicht leichter.",
    "Wenn eure Gruppe regelmäßig teilt, erstellt im Voraus eine gemeinsame Vorlage für Notiz-PDFs. Einheitliche Deckblätter helfen dabei, zu erkennen, wer was geteilt hat.",
    "Vermeide E-Mail für Gruppennotizen. Chatverläufe zeigen, wer was schon gesehen hat; E-Mail verteilt dasselbe Gespräch auf viele einzelne Postfächer.",
  ],
  mobileNote:
    "Das Handy übernimmt den größten Teil des Teilens in der Gruppe — schnelles Fotografieren, sofortiges Teilen im Chat, schnelle Rückmeldung. Die PDF-Editor-App erledigt die Kette aus Scannen, Zusammenführen, Komprimieren und Umbenennen mobil, sodass im Gruppenchat eine saubere Datei ankommt statt eines rohen Fotoschwalls.",
  faq: [
    {
      q: "Was ist die schlechteste Art, Lernnotizen zu teilen?",
      a: "Screenshots des Dokuments oder Notizen nur im Chat. Beides ist nicht durchsuchbar und geht unter, sobald sich das Gespräch weiterbewegt.",
    },
    {
      q: "Sollten alle ihre Notizen teilen oder nur eine Person?",
      a: "Alle sollten gezielt teilen: entweder feste Wochen pro Person, oder „ich mach diese Woche, du die nächste“. Ein Rotationsprinzip verringert den Aufwand pro Person und liefert Notizen aus mehreren Blickwinkeln.",
    },
    {
      q: "Wo sollten die verbindlichen Notizen liegen?",
      a: "Ein gemeinsamer Cloud-Ordner eignet sich am besten für die dauerhafte Ablage. Der Gruppenchat ist gut für die schnelle Verteilung; der Ordner ist das Archiv.",
    },
    {
      q: "Wie versionieren wir Notizen?",
      a: "Nur über den Dateinamen. v1, v2, v3. Sobald sich die Gruppe auf FINAL einigt, umbenennen und nach /final/ verschieben. Versionen nicht im Chat verfolgen.",
    },
    {
      q: "Was, wenn Notizen handschriftlich sind?",
      a: "Erst mit PDF scannen umwandeln. Schwarzweiß-Scans handschriftlicher Notizen sind schärfer und kleiner als Fotos. Ergänze OCR, falls dein Tool das unterstützt.",
    },
  ],
  related: [
    { label: "PDF für Studierende — Notizen und Lernhilfen", path: "/pdf-for-students" },
    { label: "PDF komprimieren — für Chat-Anhanggrenzen verkleinern", path: "/compress-pdf" },
    { label: "Lernmaterial als PDF organisieren", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Wie du ein PDF vom Handy aus teilst", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "PDF für Studierende — Notizen, Markierungen, Lernhilfen", path: "/pdf-for-students" },
};

export default content;
