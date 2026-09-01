import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-font-problems",
  h1: "Schriftprobleme bei PDF-Formularen (Auto-Größe, Abschneiden, Ersetzung)",
  description:
    "Text im Feld zu groß, zu klein oder schrumpft automatisch beim Tippen? Die Schrift-Eigenheiten, die speziell bei Formularfeldern auftreten – Auto-Größe, Ersetzung, Abschneiden – und wie du saubere, lesbare Antworten bekommst.",
  updated: "2026-06-01",
  intro: [
    "Formularfelder haben ihr eigenes Schriftverhalten, getrennt vom Rest eines PDF, und das erzeugt eine ganz bestimmte Art von Ärger. Text, der schrumpft, je mehr du tippst, Antworten, die in einem Feld riesig und im nächsten winzig wirken, Zeichen, die oben oder unten in einem Feld abgeschnitten werden, oder eine andere Schriftart als bei den Beschriftungen des Formulars. Das sind Eigenheiten der Formularfeld-Schrift, keine allgemeinen PDF-Schriftprobleme – und die meisten hängen damit zusammen, wie das Feld eingerichtet wurde.",
    "Der größte Übeltäter ist die Auto-Größe. Viele Felder sind so eingestellt, dass sie Text automatisch verkleinern, damit auch längere Antworten hineinpassen, deshalb wird dein Text kleiner, je mehr du schreibst. Andere Probleme entstehen, weil die Schriftart eines Feldes nicht eingebettet ist und deshalb in manchen Anzeigeprogrammen ersetzt wird, oder weil ein Feld schlicht zu kurz für seine Schriftgröße ist und Zeichen abschneidet.",
    "Diese Anleitung behandelt die formularfeldspezifischen Schriftprobleme, wie du jedes erkennst, und was du ändern musst, um lesbare, einheitliche Antworten zu bekommen. Für Schriftprobleme im gesamten Dokument statt nur in Feldern geht die allgemeine PDF-Schrift-Anleitung breiter ins Detail."
  ],
  steps: [
    {
      title: "Erkenne das Schrumpfen durch Auto-Größe",
      body: "Wird der Feldtext kleiner, je mehr Zeichen du hinzufügst, nutzt das Feld Auto-Größe, um alles unterzubringen. Das ist beabsichtigt, kann lange Antworten aber winzig machen. Halte Antworten knapp, oder stelle, falls du das Formular selbst gestaltest, eine feste Größe ein.",
    },
    {
      title: "Behebe uneinheitliche Größen zwischen Feldern",
      body: "Wirken Antworten in einem Feld groß und im nächsten klein, hat meist jedes Feld eine andere Schriftgröße eingestellt. Ist es dein Formular, vereinheitliche die Feld-Schriftgröße, damit jede Antwort gleich aussieht.",
    },
    {
      title: "Kümmere dich um abgeschnittene Zeichen",
      body: "Werden Buchstaben oben oder unten abgeschnitten, ist das Feld zu kurz für seine Schriftgröße. Vergrößere das Feld oder verkleinere die Schriftgröße (bei einem Formular, das du selbst gestaltest), oder akzeptiere eine kleinere Größe, wenn du ein fremdes ausfüllst.",
    },
    {
      title: "Behandle ersetzte Schriftarten",
      body: "Erscheint der Feldtext in einer anderen als der erwarteten Schriftart, ist die vorgesehene Schriftart nicht eingebettet, und das Anzeigeprogramm hat eine andere eingesetzt. Die Feld-Schriftart beim Erstellen des Formulars einzubetten hält sie über verschiedene Anzeigeprogramme hinweg einheitlich.",
    },
    {
      title: "Bette ein, um das Erscheinungsbild zu fixieren",
      body: "Sobald deine Antworten richtig aussehen, bette das Formular ein. Einbetten schreibt den Feldtext fest in die Seite, sodass Größe und Schriftart überall gleich angezeigt werden, unabhängig vom Anzeigeprogramm der Empfangsperson.",
    },
  ],
  tips: [
    "Auto-Größe ist meist der Grund, warum Feldtext beim Tippen schrumpft – knappe Antworten bleiben lesbar, oder stelle bei selbst gestalteten Formularen eine feste Größe ein.",
    "Gestaltest du das Formular selbst, vereinheitliche die Feld-Schriftgrößen, damit Antworten nicht wie ein Flickenteppich aus groß und klein wirken.",
    "Abgeschnittene Zeichen bedeuten, dass das Feld zu kurz für seine Schriftart ist; passe bei einem eigenen Formular Feldgröße oder Schriftgröße an.",
    "Bette vor dem Versand ein, damit sich Feld-Schriftarten und -größen auf dem Bildschirm der Empfangsperson nicht verschieben können.",
    "Das Erscheinungsbild von Feldern kann sich zwischen Anzeigeprogrammen unterscheiden, ein festes, eingebettetes Ergebnis ist also am einheitlichsten.",
  ],
  mobileNote:
    "Auf dem Handy lässt dich die App PDF Editor Text auf nicht interaktiven Formularen in einer selbst gewählten Größe platzieren und umgeht damit die Auto-Größe der Felder komplett, und du kannst das Ergebnis einbetten, damit Schriftart und Größe fest sitzen. Bei interaktiven Feldern hält es die Antworten knapp, das automatische Schrumpfen zu vermeiden, das lange Einträge schwer lesbar macht.",
  faq: [
    {
      q: "Warum schrumpft mein Formulartext beim Tippen?",
      a: "Das Feld nutzt Auto-Größe, die Text verkleinert, damit auch längere Antworten passen. Das ist beabsichtigtes Verhalten. Halte Antworten knapp, um lesbar zu bleiben, oder stelle eine feste Schriftgröße ein, wenn du das Formular selbst gestaltest.",
    },
    {
      q: "Warum erscheinen meine Antworten in unterschiedlichen Größen?",
      a: "Jedes Feld hat wahrscheinlich seine eigene Schriftgröße eingestellt. Bei einem selbst erstellten Formular vereinheitliche die Feld-Schriftgröße, damit jede Antwort gleich aussieht. Bei einem fremden Formular sind die Größen fest in den Feldern hinterlegt.",
    },
    {
      q: "Warum werden Zeichen in meinen Formularfeldern abgeschnitten?",
      a: "Das Feld ist zu kurz für seine Schriftgröße und schneidet die Buchstaben ab. Vergrößere das Feld oder verkleinere die Schriftgröße bei einem eigenen Formular, oder nutze eine kleinere Größe bei einem fremden.",
    },
    {
      q: "Warum sieht die Feld-Schriftart anders aus als die Beschriftungen?",
      a: "Die vorgesehene Schriftart des Feldes ist nicht eingebettet, dein Anzeigeprogramm hat also eine andere eingesetzt. Die Feld-Schriftart beim Erstellen des Formulars einzubetten hält sie über verschiedene Anzeigeprogramme hinweg einheitlich.",
    },
    {
      q: "Worin unterscheidet sich das von allgemeinen PDF-Schriftproblemen?",
      a: "Hier geht es um Schriftarten innerhalb von Formularfeldern – Auto-Größe, feldbezogene Größe, Abschneiden. Die allgemeine PDF-Schrift-Anleitung behandelt fehlende oder ersetzte Schriftarten im gesamten Dokument.",
    },
  ],
  related: [
    {
      label: "PDF-Schriftprobleme beheben",
      path: "/guides/how-to-fix-pdf-font-issues",
    },
    {
      label: "Formatierungsprobleme bei PDF-Formularen",
      path: "/guides/pdf-form-formatting-issues",
    },
    { label: "PDF-Formulare richtig gestalten", path: "/guides/pdf-form-best-practices" },
    { label: "PDF-Formularfehler beheben", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
