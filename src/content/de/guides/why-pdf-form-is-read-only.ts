import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-is-read-only",
  h1: "Warum ist mein PDF-Formular schreibgeschützt? Und was tun",
  description:
    "Dein Formular öffnet sich gesperrt und ausgegraut? Warum Formulare schreibgeschützt eingestellt werden, wie du bewusste Sicherheit von einer Macke des Anzeigeprogramms unterscheidest, und die ehrlichen Optionen, es trotzdem auszufüllen.",
  updated: "2026-06-01",
  intro: [
    "Ein schreibgeschütztes PDF-Formular öffnet sich problemlos, verweigert aber jeden Versuch, es auszufüllen – ausgegraute Felder, ein Schloss-Symbol, vielleicht ein Hinweis wie „geschützt“ oder „gesichert“ in der Titelleiste. Anders als ein nicht interaktives Formular (das schlicht keine Felder hat) oder ein Speicherproblem (bei dem Antworten nicht erhalten bleiben), hat ein schreibgeschütztes Formular Felder, die zwar existieren, aber bewusst deaktiviert sind. Etwas oder jemand hat es gesperrt.",
    "Dafür gibt es ein paar nachvollziehbare Gründe, und sie sind wichtig, weil sie bestimmen, was du tun solltest. Die erstellende Person hat das Formular vielleicht bewusst gesichert. Das Formular könnte zertifiziert oder bereits unterschrieben sein, sodass eine Änderung das zunichtemachen würde. Oder dein Anzeigeprogramm öffnet es standardmäßig in einem schreibgeschützten Modus, den du abschalten kannst. Bewusste Sicherung von einer Macke des Anzeigeprogramms zu unterscheiden ist der entscheidende erste Schritt.",
    "Diese Anleitung erklärt die Ursachen, wie du erkennst, welche bei dir zutrifft, und die legitimen Wege, ein schreibgeschütztes Formular trotzdem auszufüllen – ohne den Schutz eines Dokuments zu umgehen, das nicht dir gehört.",
  ],
  steps: [
    {
      title: "Achte auf einen Hinweis zu Schutz oder Sicherung",
      body: "Sieh in der Titelleiste und den Dokumenteigenschaften nach Begriffen wie „gesichert“, „geschützt“ oder einem Schloss-Symbol. Das zeigt eine bewusste Sicherheitseinstellung der erstellenden Person – der Schreibschutz ist beabsichtigt.",
    },
    {
      title: "Schließe einen Schreibschutz-Modus des Anzeigeprogramms aus",
      body: "Manche Apps öffnen Dateien standardmäßig in einem schreibgeschützten oder „geschützten“ Modus. Achte auf einen Hinweis wie „Bearbeitung aktivieren“ oder einen Umschalter, und probiere eine eigene PDF-App, bevor du davon ausgehst, dass die Datei selbst gesperrt ist.",
    },
    {
      title: "Denk daran, ob es zertifiziert oder unterschrieben ist",
      body: "Ist das Formular bereits digital signiert oder zertifiziert, würde eine Bearbeitung diese Unterschrift ungültig machen, weshalb Anzeigeprogramme es sperren. Das ist korrektes Verhalten – ein unterschriebenes Formular solltest du grundsätzlich nicht verändern.",
    },
    {
      title: "Fülle es aus, indem du Text darüberlegst",
      body: "Auch wenn Felder gesperrt sind, kannst du oft eigenen Text und Häkchen wie bei einem nicht interaktiven Formular auf der Seite platzieren und dann exportieren – ein legitimer Weg, ein schreibgeschütztes Formular auszufüllen.",
    },
    {
      title: "Bitte die absendende Person um eine entsperrte Version",
      body: "Brauchst du wirklich die interaktiven Felder, ist der sauberste Weg, bei der absendenden Person eine Version anzufragen, die Eingaben erlaubt. Versuch nicht, den Schutz eines Dokuments zu umgehen, das nicht dir gehört.",
    },
  ],
  tips: [
    "Kläre zuerst: bewusste Sicherung oder Macke des Anzeigeprogramms? Achte auf ein Schloss-Symbol oder einen „gesichert“-Hinweis gegenüber einer „Bearbeitung aktivieren“-Aufforderung.",
    "Text auf der Seite zu platzieren funktioniert bei den meisten schreibgeschützten Formularen und ist oft der schnellste legitime Weg zum Ausfüllen.",
    "Versuch nicht, den Schutz eines Formulars zu entfernen, das nicht dir gehört – brauchst du entsperrte Felder, frag die absendende Person.",
    "Ein zertifiziertes oder unterschriebenes Formular ist aus gutem Grund gesperrt; eine Änderung würde die enthaltene Unterschrift ungültig machen.",
    "Die „geschützte Ansicht“ mancher Anzeigeprogramme ist nur eine Standardeinstellung – der Wechsel zu einer vollwertigen PDF-App oder das Aktivieren der Bearbeitung reicht oft schon aus.",
  ],
  mobileNote:
    "Auf dem Handy lässt sich ein schreibgeschütztes Formular meist trotzdem in der App PDF Editor ausfüllen, indem du Text und Häkchen auf der Seite platzierst, selbst wenn die Felder gesperrt sind. Das läuft auf dem Gerät, deine Angaben bleiben also privat – und es rührt nicht an der Sicherung des Formulars, sondern legt deine Antworten nur darüber.",
  faq: [
    {
      q: "Warum ist mein PDF-Formular schreibgeschützt?",
      a: "Entweder hat die erstellende Person es bewusst gesichert, es ist zertifiziert oder bereits unterschrieben (eine Bearbeitung würde das zunichtemachen), oder dein Anzeigeprogramm hat es in einem schreibgeschützten Modus geöffnet. Achte auf ein Schloss-Symbol oder einen „gesichert“-Hinweis, um bewussten Schutz von einer Einstellung des Anzeigeprogramms zu unterscheiden.",
    },
    {
      q: "Wie fülle ich ein schreibgeschütztes PDF-Formular aus?",
      a: "Oft kannst du eigenen Text und Häkchen wie bei einem nicht interaktiven Formular auf der Seite platzieren und dann exportieren – auch wenn die Felder gesperrt sind. Brauchst du die interaktiven Felder, bitte die absendende Person um eine entsperrte Kopie.",
    },
    {
      q: "Ist Schreibschutz dasselbe wie nicht tippen zu können?",
      a: "Es ist eine mögliche Ursache dafür. Ein Formular kann Tippen auch verweigern, weil es nicht interaktiv ist oder im falschen Anzeigeprogramm geöffnet wurde. Schreibgeschützt bedeutet konkret, dass Felder existieren, aber bewusst deaktiviert sind.",
    },
    {
      q: "Kann ich den Schreibschutz entfernen?",
      a: "Gehört das Formular dir und hast du den Schutz selbst gesetzt, kannst du ihn in einem geeigneten Editor ändern. Gehört es jemand anderem, versuch nicht, dessen Sicherung zu umgehen – bitte stattdessen um eine entsperrte Version.",
    },
    {
      q: "Warum wird das Bearbeiten eines unterschriebenen Formulars blockiert?",
      a: "Eine Bearbeitung würde die digitale Unterschrift oder Zertifizierung des Formulars ungültig machen, weshalb Anzeigeprogramme es sperren. Das ist beabsichtigtes Verhalten, damit unterschriebene Dokumente vertrauenswürdig bleiben.",
    },
  ],
  related: [
    {
      label: "Warum kann ich in diesem PDF-Formular nicht tippen?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    { label: "PDF-Formular funktioniert nicht?", path: "/guides/pdf-form-not-working" },
    {
      label: "Warum speichert mein PDF-Formular nicht?",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "PDF-Datei mit Passwort schützen",
      path: "/guides/how-to-protect-pdf-file",
    },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
