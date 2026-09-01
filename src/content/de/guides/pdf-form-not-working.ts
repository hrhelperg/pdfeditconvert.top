import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-working",
  h1: "PDF-Formular funktioniert nicht? Ursachen finden und beheben",
  description:
    "Ein PDF-Formular, das nicht mitmacht, hat meist eine von wenigen üblichen Ursachen. Eine schnelle Einordnung, welche davon bei dir zutrifft – fehlende Felder, kein Tippen möglich, kein Speichern, nur Lesezugriff – und wo du ansetzen musst.",
  updated: "2026-06-01",
  intro: [
    "„Mein PDF-Formular funktioniert nicht“ deckt viele verschiedene Probleme ab, und die Lösung hängt ganz davon ab, welches davon bei dir tatsächlich vorliegt. Das Formular lässt dich nicht tippen, die Felder sind verschwunden, deine Antworten speichern nicht, es öffnet sich schreibgeschützt, oder es verhält sich einfach seltsam. Jedes hat eine konkrete Ursache und eine konkrete Lösung – der Trick ist, das Symptom zuerst zu benennen.",
    "Diese Seite ist eine schnelle Einordnung. Statt einer einzigen Universallösung hilft sie dir, in ein paar Sekunden zu erkennen, welches Problem du hast, und verweist dich dann auf die passende Anleitung. Die meisten Formularprobleme liegen gar nicht an der Datei selbst; es ist eine Nichtübereinstimmung zwischen Formular und dem Anzeigeprogramm, in dem du es geöffnet hast, oder eine bewusste Einstellung wie ein Schreibschutz.",
    "Geh die kurzen Checks unten durch. Sie zeigen dir, ob du es mit einem nicht interaktiven Formular, einem Anzeigeprogramm-Problem, einem Speicherproblem, einer Sicherheitseinstellung oder einem Kompatibilitätsproblem zu tun hast – und wohin du als Nächstes gehst.",
  ],
  steps: [
    {
      title: "Siehst du überhaupt Felder?",
      body: "Fehlen Formularfelder oder wirkt die Seite unvollständig, ist das ein Problem mit fehlenden Feldern – meist ein Anzeigeprogramm, das die Feldebene nicht darstellt. Die Anleitung zu fehlenden Feldern zeigt die Lösung.",
    },
    {
      title: "Felder sind da, aber du kannst nicht tippen?",
      body: "Tippst du ein Feld an und nichts passiert, ist das Formular vielleicht nicht interaktiv, im falschen Anzeigeprogramm geöffnet, oder schreibgeschützt. Die Anleitung „kann nicht tippen“ zeigt, wie du das auseinanderhältst.",
    },
    {
      title: "Antworten verschwinden nach dem Speichern?",
      body: "Füllst du das Formular aus, speicherst, öffnest erneut, und es ist wieder leer, werden die Feldwerte nicht in die Datei geschrieben. Die Anleitung „speichert nicht“ behandelt zuverlässiges Speichern von Formulardaten.",
    },
    {
      title: "Formular öffnet sich schreibgeschützt oder gesperrt?",
      body: "Ist alles ausgegraut oder siehst du einen Hinweis auf Schutz, ist das Formular gegen Bearbeitung gesichert. Die Anleitung zum Schreibschutz erklärt deine Optionen, ohne eine Sicherung zu umgehen, die nicht deine ist.",
    },
    {
      title: "Funktioniert in einer App, aber nicht in einer anderen?",
      body: "Verhält sich das Formular in einem Programm normal und zerbricht in einem anderen, ist das ein Kompatibilitätsproblem – möglicherweise ein fortgeschrittener Formulartyp. Sieh in der Kompatibilitäts-Anleitung nach, oder probiere die gesammelte Erste-Hilfe-Checkliste.",
    },
  ],
  tips: [
    "Benenne das Symptom, bevor du Lösungen probierst – die richtige Lösung hängt ganz davon ab, welches Problem du hast.",
    "Der schnellste Test für viele Probleme: Öffne dieselbe Datei in einer richtigen PDF-App. Das trennt sofort „kaputtes Formular“ von „ungeeignetes Anzeigeprogramm“.",
    "Ein Formular, das nicht mitmacht, ist selten wirklich kaputt; die meisten Ursachen sind ungeeignete Anzeigeprogramme oder bewusste Einstellungen.",
    "Musst du es einfach nur erledigen, funktioniert das Platzieren von Text auf der Seite bei fast jedem Formular, egal was die eigentliche Ursache ist.",
    "Aussehen und Verhalten eines Formulars können sich zwischen PDF-Anzeigeprogrammen unterscheiden, „funktioniert hier nicht“ heißt also selten „ist überall kaputt“.",
  ],
  mobileNote:
    "Viele Meldungen „Formular funktioniert nicht“ sind schlicht eine E-Mail-Vorschau oder ein einfaches Anzeigeprogramm, das die Felder ignoriert. Öffnest du die Datei in der App PDF Editor, werden interaktive Felder aktiv, wo es sie gibt, und du kannst Text auf nicht interaktiven oder gesperrten Formularen platzieren, wo es keine gibt – auf dem Gerät, ohne dass etwas hochgeladen wird.",
  faq: [
    {
      q: "Warum funktioniert mein PDF-Formular nicht?",
      a: "Fast immer eines von wenigen Dingen: Das Formular ist nicht interaktiv und hat keine Felder, dein Anzeigeprogramm stellt Felder nicht dar, die Antworten speichern nicht, das Formular ist schreibgeschützt, oder es nutzt Funktionen, die deine App nicht unterstützt. Erkenne das Symptom, dann wende die passende Lösung an.",
    },
    {
      q: "Was probiere ich am schnellsten zuerst?",
      a: "Öffne dieselbe Datei in einer richtigen PDF-App statt in einer E-Mail-Vorschau oder im Browser. Allein dieser Schritt löst einen großen Teil der Fälle von „Formular funktioniert nicht“, die eigentlich an einem ungeeigneten Anzeigeprogramm liegen.",
    },
    {
      q: "Wie weiß ich, ob das Formular kaputt ist oder nur meine App?",
      a: "Probier es in einer anderen, geeigneten PDF-App. Funktioniert es dort, lag es an deinem ursprünglichen Anzeigeprogramm. Scheitert es überall, ist es möglicherweise ein fortgeschrittener Formulartyp oder eine tatsächlich beschädigte Datei.",
    },
    {
      q: "Ich muss es nur ausfüllen – was ist die universelle Notlösung?",
      a: "Platziere mit einem PDF-Editor eigenen Text und Häkchen auf der Seite. Das funktioniert bei nicht interaktiven, gesperrten und feldlosen Formularen gleichermaßen, unabhängig von der eigentlichen Ursache.",
    },
    {
      q: "Wo finde ich Hilfe für mein konkretes Problem?",
      a: "Nutze die Checks oben, um dein Symptom zuzuordnen – fehlende Felder, kein Tippen möglich, speichert nicht, schreibgeschützt oder Kompatibilität – und folge der verlinkten Anleitung dazu, oder der gesammelten Erste-Hilfe-Checkliste.",
    },
  ],
  related: [
    {
      label: "PDF-Formularfelder fehlen?",
      path: "/guides/pdf-form-fields-missing",
    },
    {
      label: "Warum kann ich in diesem PDF-Formular nicht tippen?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    {
      label: "Warum speichert mein PDF-Formular nicht?",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "Kompatibilitätsprobleme bei PDF-Formularen",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "PDF-Formularfehler beheben", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
