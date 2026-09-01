import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-a-fillable-pdf",
  h1: "Ausfüllbares PDF erstellen – ehrliche Optionen und Grenzen",
  description:
    "Was es wirklich braucht, damit andere ein PDF ausfüllen können – interaktive Felder oder ein einfaches, flaches Template – und welcher Ansatz zu deinen Werkzeugen passt.",
  updated: "2026-06-01",
  intro: [
    "Es gibt zwei ehrliche Wege, ein PDF zu erstellen, das andere ausfüllen können, und sie unterscheiden sich deutlich in Aufwand und Ergebnis. Der elegantere Weg ist ein echtes interaktives Formular: ein PDF mit richtigen Feldern – Textfeldern, Kontrollkästchen, Dropdown-Menüs –, in die Empfängerinnen und Empfänger tippen. Der einfachere Weg ist ein flaches Template: ein sauberes, gut gegliedertes PDF mit klaren Linien und Beschriftungen, das andere ausfüllen, indem sie Text darüberlegen.",
    "Ganz ehrlich vorweg: Echte interaktive Formularfelder zu bauen braucht in der Regel spezielle Formular-Design-Software, und das Ergebnis kann sich trotzdem zwischen verschiedenen PDF-Anzeigeprogrammen unterschiedlich verhalten. Ein flaches Template dagegen lässt sich aus fast jedem Dokumentwerkzeug erstellen und funktioniert überall zuverlässig – dafür müssen Empfängerinnen und Empfänger etwas mehr selbst tun, um ihre Antworten zu platzieren.",
    "Diese Anleitung behandelt beide Ansätze, wann sich welcher lohnt, und wie du beide so gestaltest, dass das fertige Formular leicht auszufüllen ist. Sie tut nicht so, als könnte ein Browser-Tool komplexe interaktive Felder herzaubern, die es nicht kann – stattdessen zeigt sie dir die Methode, die zu dem passt, was du tatsächlich zur Verfügung hast.",
  ],
  steps: [
    {
      title: "Beginne mit einem sauberen, gut gegliederten Layout",
      body: "Gestalte das Formular zuerst in einem Dokumentwerkzeug: klare Beschriftungen, ausreichend Platz für Antworten, gut sichtbare Kontrollkästchen und eine Unterschriftszeile. Genug Abstand ist bei beiden Varianten wichtig, interaktiv wie nicht interaktiv.",
    },
    {
      title: "Entscheide dich: interaktive Felder oder flaches Template",
      body: "Wird das Formular häufig ausgefüllt und soll das Erlebnis ordentlich und direkt bespielbar sein, strebe interaktive Felder an. Brauchst du schnell etwas, das in jedem Anzeigeprogramm funktioniert, ist ein flaches Template die pragmatische Wahl.",
    },
    {
      title: "Für ein flaches Template: als PDF exportieren",
      body: "Exportiere dein fertig gestaltetes Dokument direkt als PDF. Linien und Beschriftungen werden zur Seite; Empfängerinnen und Empfänger fügen mit einem beliebigen PDF-Editor Text darüber hinzu. Das funktioniert mit fast jedem Werkzeug, das du ohnehin schon nutzt.",
    },
    {
      title: "Für interaktive Felder: Formular-Design-Software nutzen",
      body: "Echte Textfelder, Kontrollkästchen und Dropdown-Menüs zu erstellen braucht dafür gebaute Software. Lege jedes Feld über dem Layout an, benenne es eindeutig und lege seinen Typ fest. Plane ein, das Ergebnis in mehr als einem Anzeigeprogramm zu testen.",
    },
    {
      title: "Teste das Formular, bevor du es verschickst",
      body: "Öffne dein Formular so, wie es Empfängerinnen und Empfänger tun würden – auf dem Handy und am Computer. Fülle es selbst komplett aus. Korrigiere jedes Feld, das zu klein ist, falsch beschriftet ist oder nicht auf seiner Linie sitzt, bevor du es verteilst.",
    },
  ],
  tips: [
    "Ein sauberes flaches Template, das sich überall zuverlässig ausfüllen lässt, ist oft besser als ein aufwendiges interaktives Formular, das in manchen Anzeigeprogrammen streikt.",
    "Lass mehr Platz für Antworten, als du für nötig hältst – zu enge Felder sind die häufigste Beschwerde bei Formularen.",
    "Benenne interaktive Felder sinnvoll; das hilft sowohl beim Ausfüllen als auch bei der späteren Auswertung der Antworten.",
    "Verzichte auf aufwendige dynamische Formularfunktionen, außer du weißt, dass die Software deiner Empfängerinnen und Empfänger sie unterstützt – manche PDF-Anzeigeprogramme können das nicht.",
    "Egal welchen Weg du wählst: Fülle das Formular zuerst selbst aus – so findest du die unhandlichen Stellen, die kein Design-Review aufdeckt.",
  ],
  mobileNote:
    "Empfängerinnen und Empfänger können dein Formular auf dem Handy mit der App PDF Editor ausfüllen, ob interaktiv oder flach – sie tippt in echte Felder und lässt Text auf flachen Templates platzieren. Baust du ein flaches Template, teste es in der App auf dem Handy, um zu prüfen, ob die Antwortflächen groß genug für Daumen sind.",
  faq: [
    {
      q: "Kann ich ein ausfüllbares PDF kostenlos erstellen?",
      a: "Ein flaches, ausfüllbares Template kannst du kostenlos aus fast jedem Dokumentwerkzeug erstellen, indem du als PDF exportierst – Empfängerinnen und Empfänger legen den Text darüber. Echte interaktive Felder zu bauen braucht meist spezielle Formular-Design-Software.",
    },
    {
      q: "Was unterscheidet interaktive von flachen ausfüllbaren PDFs?",
      a: "Ein interaktives PDF hat echte Felder, in die man tippt. Ein flaches Template ist eine saubere Seite, auf der man eigenen Text platziert. Interaktiv wirkt ordentlicher; flach ist einfacher zu erstellen und funktioniert in jedem Anzeigeprogramm.",
    },
    {
      q: "Funktionieren interaktive PDF-Formulare überall?",
      a: "Nicht immer. Standardfelder werden breit unterstützt, aber Aussehen und fortgeschrittene Funktionen können sich zwischen PDF-Anzeigeprogrammen unterscheiden, und dynamische Formulare öffnen sich in manchen Apps gar nicht. Teste, bevor du dich darauf verlässt.",
    },
    {
      q: "Welchen Ansatz sollte ich wählen?",
      a: "Wird das Formular stark wiederverwendet und soll es ordentlich wirken, investiere in interaktive Felder. Brauchst du es schnell und zuverlässig, ist ein gut gestaltetes flaches Template die sicherere Wahl.",
    },
    {
      q: "Wie mache ich ein flaches Template leicht ausfüllbar?",
      a: "Nutze klare Beschriftungen, viel Platz, sichtbare Linien oder Kästen für jede Antwort und einen eindeutigen Unterschriftsbereich. Fülle es dann selbst einmal aus, um zu prüfen, ob überall genug Platz ist.",
    },
  ],
  related: [
    { label: "Was ist ein PDF-Formular?", path: "/guides/what-is-a-pdf-form" },
    { label: "Wie PDF-Formulare funktionieren", path: "/guides/how-pdf-forms-work" },
    { label: "PDF-Formulare richtig gestalten", path: "/guides/pdf-form-best-practices" },
    {
      label: "PDF-Formular zum Ausfüllen teilen",
      path: "/guides/how-to-share-a-pdf-form",
    },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
