import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-rotate-pdf-pages",
  h1: "PDF-Seiten drehen (kostenlos, ohne Upload)",
  description:
    "Drehe alle oder ausgewählte PDF-Seiten um 90, 180 oder 270 Grad im Browser. Korrigiere Querformat-Scans und auf dem Kopf stehende Seiten, damit das Dokument richtig lesbar ist.",
  updated: "2026-05-23",
  intro: [
    "Ein PDF, das seitlich verdreht aufgeht, ist ein kleiner, aber hartnäckiger Ärger. Man legt den Kopf schief, oder man dreht das Handy immer weiter und die Seite dreht sich einfach mit. Die Lösung: die Seite selbst so drehen, dass sie aufrecht gespeichert ist — dann liest sie sich für alle richtig, auf jedem Gerät, ohne verrenkten Hals.",
    "Diese Anleitung nutzt das kostenlose Tool PDF drehen, das alle oder ausgewählte Seiten um 90°, 180° oder 270° dreht, direkt in deinem Browser, ohne dass etwas hochgeladen wird. Es ist die richtige Lösung, egal ob nur eine Seite falsch liegt oder das ganze Dokument im Querformat aus dem Scanner kam.",
    "Drehen verändert dauerhaft, wie die Seite gespeichert ist. Deshalb zeigen wir dir, wie du es nur auf die Seiten anwendest, die es brauchen, und wie du das Ergebnis prüfst, bevor du speicherst.",
  ],
  steps: [
    {
      title: "Öffne PDF drehen",
      body: "Ruf PDF drehen in deinem Browser auf. Es läuft auf deinem Gerät — kein Hochladen, kein Konto nötig.",
    },
    {
      title: "Füge dein PDF hinzu",
      body: "Zieh die Datei in die Ablagefläche oder klicke, um sie auszuwählen. Das Tool zeigt die Seiten an, sodass du siehst, welche falsch liegen.",
    },
    {
      title: "Entscheide, welche Seiten gedreht werden sollen",
      body: "Drehe entweder alle Seiten oder nur die falsch liegenden — etwa eine einzelne Querformat-Tabelle in einem sonst aufrechten Bericht. Notiere dir, welche Seiten und in welche Richtung.",
    },
    {
      title: "Wähle den Drehwinkel",
      body: "Nimm 90° für eine seitlich liegende Seite, 180° für eine auf dem Kopf stehende und 270° für eine in die andere Richtung verdrehte. Wende den Winkel auf die ausgewählten Seiten an.",
    },
    {
      title: "Prüfe, ob wirklich jede Seite aufrecht steht",
      body: "Bestätige, dass die korrigierten Seiten jetzt normal lesbar sind und du nicht versehentlich Seiten gedreht hast, die schon in Ordnung waren.",
    },
    {
      title: "Lade das korrigierte PDF herunter",
      body: "Exportiere die gedrehte Datei und speichere sie mit einem klaren Namen. Das Original bleibt unangetastet, falls du noch einmal von vorn anfangen musst.",
    },
  ],
  tips: [
    "Drehe nur die Seiten, die falsch liegen. Eine pauschale Drehung auf ein Dokument anzuwenden, in dem die meisten Seiten schon stimmen, schafft nur neue Probleme.",
    "Querformat-Seiten — breite Tabellen, Diagramme, als PDF exportierte Tabellenkalkulationen — sind oft absichtlich quer. Drehe nur, wenn der Inhalt wirklich seitlich verdreht ist, nicht wenn er zu Recht breit ist.",
    "Sind Seiten zugleich falsch sortiert und verdreht, korrigiere zuerst die Drehung und ordne danach neu an — die Reihenfolge lässt sich leichter beurteilen, wenn jede Seite schon aufrecht steht.",
    "Wer vor dem Zusammenführen dreht, bekommt ein von Anfang an korrektes Gesamtdokument — ohne verdrehte Überraschungen mittendrin.",
    "Bewahre das Original auf. Drehst du in die falsche Richtung, geht es schneller, von der unangetasteten Datei neu zu starten, als ständig hin- und herzudrehen.",
  ],
  mobileNote:
    "Seitlich verdrehte Scans passieren am häufigsten auf dem Handy — und genau dort lassen sie sich auch am schnellsten korrigieren. Die PDF-Editor-App dreht Seiten mit einem Fingertipp und funktioniert offline, sodass du ein frisch gescanntes Dokument geradebiegen kannst, bevor es dein Gerät je verlässt.",
  faq: [
    {
      q: "Kann ich nur eine einzelne Seite drehen?",
      a: "Ja. Wähle nur die falsch liegenden Seiten aus und drehe diese — der Rest des Dokuments bleibt unverändert.",
    },
    {
      q: "Welchen Drehwinkel sollte ich wählen?",
      a: "90° für eine seitlich liegende Seite, 180° für eine auf dem Kopf stehende und 270° für eine in die andere Richtung gedrehte. Wähle den Winkel, mit dem der Inhalt aufrecht steht.",
    },
    {
      q: "Ist die Drehung dauerhaft?",
      a: "Sie wird in die exportierte Datei gespeichert, sodass die Seite überall aufrecht angezeigt wird. Dein Original bleibt unangetastet, du kannst die Drehung bei Bedarf also jederzeit wiederholen.",
    },
    {
      q: "Wird mein PDF hochgeladen?",
      a: "Nein. Das Drehen läuft in deinem Browser auf deinem Gerät, die Datei verlässt es also nie.",
    },
    {
      q: "Mein Scan ist seitlich verdreht und in falscher Reihenfolge — was zuerst?",
      a: "Drehe die Seiten zuerst aufrecht, und korrigiere danach mit PDF-Seiten neu anordnen die Reihenfolge. Die richtige Reihenfolge zu beurteilen fällt leichter, wenn alles schon richtig herum steht.",
    },
  ],
  related: [
    { label: "PDF drehen — Ausrichtung im Browser korrigieren", path: "/rotate-pdf" },
    { label: "PDF-Seiten neu anordnen — die Reihenfolge korrigieren", path: "/reorder-pdf-pages" },
    { label: "Wie du seitlich verdrehte PDF-Seiten korrigierst", path: "/guides/how-to-fix-sideways-pdf-pages" },
    { label: "Wie du Seiten in einem PDF neu anordnest", path: "/guides/how-to-reorder-pdf-pages" },
  ],
  parentHub: { label: "PDF drehen", path: "/rotate-pdf" },
};

export default content;
