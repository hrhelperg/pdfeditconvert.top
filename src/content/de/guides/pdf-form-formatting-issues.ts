import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-formatting-issues",
  h1: "Formatierungsprobleme bei PDF-Formularen (Ausrichtung und Überlauf)",
  description:
    "Felder falsch ausgerichtet, Antworten laufen über, das Formular sieht auf einem anderen Bildschirm anders aus? Die Layoutprobleme, die je nach Anzeigeprogramm variieren – und wie du ein einheitliches Ergebnis bekommst.",
  updated: "2026-06-01",
  intro: [
    "Ein Formular kann auf deinem Bildschirm perfekt aussehen und bei jemand anderem falsch ankommen – Felder von ihrer Linie verrutscht, Antworten, die über ihre Kästen hinauslaufen, falsch ausgerichtete Kontrollkästchen, das ganze Layout leicht verschoben. Weil Formularfelder von jedem Anzeigeprogramm neu gezeichnet werden, statt fest in der Seite zu stecken, kann ihr genaues Aussehen variieren, und das ist die Wurzel der meisten Formatierungsbeschwerden bei Formularen.",
    "Das unterscheidet sich von allgemeinen PDF-Formatierungsproblemen, die meist auf Ränder und Abstände des Quelldokuments zurückgehen. Formularformatierungsprobleme betreffen die Feldebene: wie Felder relativ zur Seite sitzen, wie Antworten hineinpassen, und wie einheitlich sich das über verschiedene Apps hinweg darstellt. Die Lösungen sind entsprechend formularspezifisch.",
    "Diese Anleitung behandelt die üblichen Formular-Layoutprobleme, warum sie auftreten, und das eine zuverlässigste Mittel – Einbetten –, das ein Formular überall gleich aussehen lässt.",
  ],
  steps: [
    {
      title: "Bestätige einen Unterschied im Anzeigeprogramm",
      body: "Öffne das Formular in zwei verschiedenen PDF-Apps. Verschiebt sich das Layout zwischen ihnen, liegt es an der Felddarstellung, nicht an der Datei – jedes Anzeigeprogramm zeichnet Felder leicht unterschiedlich.",
    },
    {
      title: "Behebe Antworten, die über ihre Felder hinauslaufen",
      body: "Läuft Text über den Rand eines Feldes hinaus, ist das Feld zu klein oder die Antwort zu lang. Vergrößere bei einem eigenen Formular das Feld; halte beim Ausfüllen Antworten innerhalb des sichtbaren Platzes oder verlass dich auf die Auto-Größe.",
    },
    {
      title: "Richte Felder neu aus, die von ihrer Linie abweichen",
      body: "Felder, die über oder unter ihren Beschriftungen abdriften, bedeuten meist, dass die Feldpositionen nicht zur darunterliegenden Seite passen. Ist es dein Formular, positioniere die Felder neu; wenn nicht, kann Text darüberzulegen zuverlässiger sein als das fehlausgerichtete Feld.",
    },
    {
      title: "Bette ein für ein einheitliches Ergebnis",
      body: "Einbetten verschmilzt die Felder mit der Seite und fixiert damit ihre Position und ihr Aussehen. Nach dem Einbetten sieht das Formular in jedem Anzeigeprogramm identisch aus – das zuverlässigste Mittel gegen wechselndes Layout.",
    },
    {
      title: "Bevorzuge ein flaches Template, wenn Einheitlichkeit entscheidend ist",
      body: "Muss ein Formular für alle gleich aussehen, umgeht ein gut gestaltetes flaches Template (ohne interaktive Feldebene) Unterschiede in der Darstellung zwischen Anzeigeprogrammen komplett.",
    },
  ],
  tips: [
    "Öffne das Formular in zwei Apps, um zu bestätigen, dass ein Layoutproblem an der Darstellung des Anzeigeprogramms liegt und nicht an einer beschädigten Datei.",
    "Einbetten ist die zuverlässigste Lösung – es fixiert Feldpositionen und Aussehen fest in der Seite, für jedes Anzeigeprogramm.",
    "Füllst du ein Formular mit fehlausgerichteten Feldern aus, kann Text darüberzulegen präziser landen, als gegen das Feld anzukämpfen.",
    "Baust du ein Formular, das überall identisch aussehen muss, umgeht ein flaches Template Unterschiede in der Felddarstellung von vornherein.",
    "Das Erscheinungsbild eines Formulars kann sich zwischen PDF-Anzeigeprogrammen absichtlich unterscheiden, „es sieht auf ihrem Bildschirm falsch aus“ bedeutet also meist Darstellung, nicht Beschädigung.",
  ],
  mobileNote:
    "Die App PDF Editor lässt dich ein ausgefülltes Formular vor dem Versand einbetten, damit sein Layout fixiert ist und sich auf dem Bildschirm der Empfangsperson nicht verschiebt. Bei Formularen mit unhandlichen Feldern kannst du auch Text präzise auf der Seite platzieren und einbetten – ein einheitliches Ergebnis auf jedem Gerät.",
  faq: [
    {
      q: "Warum sieht mein PDF-Formular auf einem anderen Bildschirm anders aus?",
      a: "Formularfelder werden von jedem Anzeigeprogramm neu gezeichnet, ihre Position und ihr Aussehen können sich also zwischen Apps unterscheiden. Einbetten verschmilzt die Felder mit der Seite, sodass es überall identisch aussieht.",
    },
    {
      q: "Warum laufen meine Antworten über die Feldkästen hinaus?",
      a: "Das Feld ist zu klein für die Antwort, oder die Antwort ist zu lang. Vergrößere das Feld bei einem eigenen Formular, halte Antworten innerhalb des sichtbaren Platzes, oder verlass dich auf die Auto-Größe.",
    },
    {
      q: "Wie behebe ich Felder, die von ihrer Linie abweichen?",
      a: "Die Feldpositionen passen nicht zur darunterliegenden Seite. Positioniere die Felder neu, wenn es dein Formular ist; wenn nicht, kann Text direkt auf der Seite zuverlässiger sein als das fehlausgerichtete Feld.",
    },
    {
      q: "Was ist der zuverlässigste Weg, das Layout eines Formulars einheitlich zu halten?",
      a: "Bette es ein. Einbetten fixiert das Erscheinungsbild der Felder in der Seite, sodass es in jedem Anzeigeprogramm gleich dargestellt wird. Für selbst gestaltete Formulare umgeht ein flaches Template das Problem von vornherein.",
    },
    {
      q: "Worin unterscheidet sich das von allgemeinen PDF-Formatierungsproblemen?",
      a: "Hier geht es um die Feldebene – Ausrichtung, Überlauf, Darstellung durch das Anzeigeprogramm. Allgemeine PDF-Formatierungsprobleme kommen meist von den Rändern und Abständen des Quelldokuments, nicht von seinen Formularfeldern.",
    },
  ],
  related: [
    {
      label: "PDF-Formatierungsprobleme beheben",
      path: "/guides/how-to-fix-pdf-formatting-problems",
    },
    {
      label: "Schriftprobleme bei PDF-Formularen",
      path: "/guides/pdf-form-font-problems",
    },
    {
      label: "Kompatibilitätsprobleme bei PDF-Formularen",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "PDF-Formulare richtig gestalten", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
