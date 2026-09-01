import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-best-practices",
  h1: "PDF-Formulare richtig gestalten (Formulare, die Leute wirklich ausfüllen)",
  description:
    "Gestalte Formulare, die Leute tatsächlich zu Ende ausfüllen: klare Beschriftungen, echter Abstand, sinnvolle Felder, ein eindeutiges Unterschriftsfeld und ein Einbetten-Schritt. Praktische Regeln für alle, die Formulare erstellen und verschicken.",
  updated: "2026-06-01",
  intro: [
    "Die Aufgabe eines Formulars ist es, korrekt ausgefüllt und ohne Reibung zurückgeschickt zu werden. Die meisten Formulare scheitern aus langweiligen, aber behebbaren Gründen: zu enge Felder, mehrdeutige Beschriftungen, kein Platz zum Schreiben, oder ein Layout, das zusammenbricht, sobald jemand es auf dem Handy öffnet. Gutes Formular-Design geht nicht darum, clever zu wirken – es geht darum, jeden kleinen Grund zu beseitigen, aus dem jemand aufgeben oder etwas falsch machen könnte.",
    "Diese bewährten Praktiken gelten unabhängig davon, ob du interaktive Formulare oder flache Templates baust, und unabhängig davon, ob du ein Unternehmen bist, das Aufnahmedaten sammelt, oder einfach jemand, der ein Formular zum Ausfüllen verschickt. Sie decken auch die Versandseite ab: wie du ein Formular verteilst, damit es ausfüllbar bleibt und verwertbar zurückkommt. Nichts davon ist kompliziert; es ist vor allem Disziplin.",
    "Behandle diese Anleitung als die Referenz, auf die die anderen Formular-Anleitungen zurückverweisen. Wenn du nur eine Handvoll davon übernimmst, wähle klare Beschriftungen, großzügigen Abstand und Einbetten beim Zurückschicken – diese drei verhindern die meisten Formularprobleme.",
  ],
  steps: [
    {
      title: "Beschrifte jedes Feld eindeutig",
      body: "Jedes Feld sollte klarmachen, was hineingehört, inklusive des Formats, wo es wichtig ist (Datumsstil, ein Zeichen pro Kästchen). Mehrdeutige Beschriftungen führen zu falschen Antworten, denen du dann hinterherlaufen musst.",
    },
    {
      title: "Gib Antworten echten Platz",
      body: "Zu kleine Felder sind die häufigste Beschwerde bei Formularen. Lass mehr Platz, als du für nötig hältst, besonders bei Namen, Adressen und Freitextantworten, damit nichts eng wird oder abgeschnitten wirkt.",
    },
    {
      title: "Frag nur, was du brauchst",
      body: "Jedes zusätzliche Feld senkt die Rücklaufquote und erzeugt Daten, um die du dich dann kümmern musst. Streiche alles, was in dieser Phase nicht wirklich notwendig ist. Kürzere Formulare kommen schneller und vollständiger zurück.",
    },
    {
      title: "Mach das Unterschriftsfeld eindeutig",
      body: "Wird eine Unterschrift gebraucht, gib ihr einen klaren, gut platzierten Bereich und ein Datumsfeld daneben. Die Unterschrift wird häufiger übersehen als jedes andere Feld; ein eindeutiger Bereich verhindert, dass das Formular zurückkommt.",
    },
    {
      title: "Verteile und sammle richtig ein",
      body: "Verschick leere Formulare nicht eingebettet, damit die Felder erhalten bleiben, empfiehl eine zuverlässige PDF-App, und bitte um eingebettete Kopien zurück, damit Antworten fest sitzen und überall gleich angezeigt werden.",
    },
  ],
  tips: [
    "Fülle dein eigenes Formular einmal auf dem Handy aus, bevor du es verschickst – so entdeckst du sofort jedes zu enge Feld und jede unklare Beschriftung.",
    "Klare Beschriftungen, großzügiger Abstand und Einbetten beim Zurückschicken sind die drei Gewohnheiten, die die meisten Formularprobleme verhindern.",
    "Bette ein leeres Formular, das du verteilst, nicht ein; Einbetten entfernt die Felder, die Empfängerinnen und Empfänger brauchen.",
    "Passe Feldformate an das an, was du später mit den Daten machst – einheitliche Datums- und Zahlenformate ersparen dir später Aufräumarbeit.",
    "Bleib bei den Erwartungen ehrlich: Das Erscheinungsbild eines Formulars kann sich zwischen Anzeigeprogrammen unterscheiden, ein flaches Template oder eine eingebettete Rückgabe ist also insgesamt am zuverlässigsten.",
  ],
  mobileNote:
    "Weil die meisten Menschen Formulare auf dem Handy ausfüllen, teste deins vor dem Versand in der App PDF Editor auf dem Handy: Prüfe, ob Felder antippbar sind oder ein flaches Template Platz für mit dem Daumen eingetippten Text hat, ob das Unterschriftsfeld erreichbar ist, und ob ein eingebetteter Export richtig aussieht.",
  faq: [
    {
      q: "Was macht ein PDF-Formular leicht ausfüllbar?",
      a: "Klare, eindeutige Beschriftungen; großzügiger Platz für jede Antwort; nur die Felder, die du wirklich brauchst; und ein eindeutiges Unterschriftsfeld. Teste es dann selbst auf dem Handy, denn dort werden es die meisten Leute ausfüllen.",
    },
    {
      q: "Sollte ich Formulare interaktiv oder flach verschicken?",
      a: "Interaktiv wirkt ordentlicher, wenn du es gut umsetzen kannst, aber ein sauberes flaches Template funktioniert in jedem Anzeigeprogramm. Für welche Variante du dich auch entscheidest – klare Beschriftungen und echter Abstand zählen mehr als der Feldtyp.",
    },
    {
      q: "Warum sollte ich ein leeres Formular nicht vor dem Versand einbetten?",
      a: "Einbetten verschmilzt die Feldebene mit der Seite und entfernt damit die interaktiven Felder. Empfängerinnen und Empfänger hätten dann nichts mehr zum Hineintippen. Bette nur ausgefüllte Formulare beim Zurückschicken ein.",
    },
    {
      q: "Wie verhindere ich, dass Leute die Unterschrift vergessen?",
      a: "Gib der Unterschrift einen klaren, gut platzierten Bereich mit einem Datumsfeld daneben. Vergessene Unterschriften sind der häufigste Grund, warum Formulare zurückkommen, und ein eindeutiger Bereich behebt das meiste davon.",
    },
    {
      q: "Wie viele Felder sind zu viele?",
      a: "Jedes Feld, das in dieser Phase nicht gebraucht wird, ist zu viel – jedes senkt die Rücklaufquote. Frag jetzt nur das Nötigste ab und sammle den Rest später, falls du ihn wirklich brauchst.",
    },
  ],
  related: [
    {
      label: "Ausfüllbares PDF erstellen",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "PDF-Formular ausfüllen",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "PDF-Formular zum Ausfüllen teilen",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Formatierungsprobleme bei PDF-Formularen",
      path: "/guides/pdf-form-formatting-issues",
    },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
