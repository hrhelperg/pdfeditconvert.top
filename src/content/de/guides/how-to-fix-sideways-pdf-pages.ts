import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-sideways-pdf-pages",
  h1: "Quer oder verkehrt liegende PDF-Seiten korrigieren",
  description:
    "Richte PDF-Seiten, die quer oder auf dem Kopf stehend geöffnet werden, dauerhaft im Browser aus. Warum das Drehen des Bildschirms nicht hilft, und was wirklich funktioniert.",
  updated: "2026-05-23",
  intro: [
    "Du öffnest ein PDF, und eine Seite liegt quer. Im Betrachter drehst du sie, sieht gut aus — doch sobald du die Datei verschickst, sieht der Empfänger sie wieder quer liegen. Genau das ist die Falle: Das Drehen im Betrachter verändert oft nur deine Ansicht, nicht wie die Seite gespeichert ist. Damit die Korrektur für alle gilt, musst du die Seite selbst drehen und die Änderung speichern.",
    "Genau das übernimmt das kostenlose Werkzeug PDF drehen: Es dreht Seiten um 90, 180 oder 270 Grad und schreibt die Korrektur fest in eine neue Datei — alles im Browser, ohne dass etwas hochgeladen wird. Egal ob nur eine Seite falsch liegt oder ein ganzer Scan im Querformat rauskam, das ist die dauerhafte Lösung.",
    "Außerdem geht diese Anleitung der Frage nach, warum Seiten überhaupt quer landen, damit du das Problem gleich an der Quelle vermeidest — meistens ein Scanner oder ein falsch gehaltenes Handy.",
  ],
  steps: [
    {
      title: "Öffne das Werkzeug PDF drehen",
      body: "Rufe das Werkzeug PDF drehen im Browser auf. Es speichert die Drehung direkt in der Datei, sodass die Korrektur für jeden Betrachter gilt — kein Hochladen, kein Konto nötig.",
    },
    {
      title: "Füge das PDF hinzu",
      body: "Ziehe die Datei in die Ablagefläche oder klicke, um sie auszuwählen. Das Werkzeug zeigt die Seiten an, damit du siehst, welche quer oder auf dem Kopf stehen.",
    },
    {
      title: "Finde die betroffenen Seiten",
      body: "Notiere dir, welche Seiten falsch liegen und wie stark — eine Vierteldrehung, eine halbe Drehung. Bei einem langen Scan kann das jede Seite betreffen, bei einem Bericht vielleicht nur eine breite Tabelle.",
    },
    {
      title: "Drehe die Seiten aufrecht",
      body: "Wende 90° bei einer quer liegenden Seite an, 180° bei einer auf dem Kopf stehenden oder 270° bei einer, die in die andere Richtung gedreht ist — so lange, bis sich der Inhalt normal lesen lässt.",
    },
    {
      title: "Überprüfen, dann herunterladen",
      body: "Prüfe, ob wirklich jede korrigierte Seite aufrecht steht und du keine bereits richtigen Seiten versehentlich verdreht hast, und exportiere dann das korrigierte PDF.",
    },
    {
      title: "Beheb es beim nächsten Mal schon an der Quelle",
      body: "Quer liegende Seiten entstehen meist, weil ein Scanner die Seiten im Querformat einzieht oder ein Handy falsch gehalten wird. Wer die Scanausrichtung anpasst oder das Handy anders hält, verhindert, dass sich das Problem wiederholt.",
    },
  ],
  tips: [
    "Das Drehen in einem PDF-Betrachter verändert oft nur deine Ansicht, nicht die gespeicherte Datei — deshalb sieht der Empfänger die Seite wieder quer. Erst eine gespeicherte, gedrehte Kopie behebt das Problem wirklich.",
    "Drehe nur die Seiten, die wirklich falsch liegen. Eine bewusst breite Querformat-Tabelle (etwa eine Kalkulationstabelle oder ein Diagramm) soll so aussehen — sie zu drehen macht es nur schlimmer.",
    "Ist der ganze Scan im Querformat, reicht meist eine einzige 90°-Drehung, auf alle Seiten angewendet, um alles auf einmal zu korrigieren.",
    "Korrigiere die Ausrichtung vor dem Neuanordnen oder Zusammenführen — die Reihenfolge lässt sich viel leichter beurteilen und Dokumente lassen sich einfacher kombinieren, wenn jede Seite aufrecht steht.",
    "Bewahre das Original auf. Zu viel oder in die falsche Richtung zu drehen passiert schnell — von der unveränderten Datei neu anzufangen geht schneller, als hin- und herzudrehen.",
  ],
  mobileNote:
    "Quer liegende Seiten entstehen fast immer schon auf dem Handy, und genau dort lassen sie sich am schnellsten korrigieren. Die App PDF Editor dreht Seiten mit einem Fingertipp und speichert die Korrektur direkt in der Datei, offline — ein frisch gescanntes Dokument steht so aufrecht, noch bevor es deine Hände verlässt.",
  faq: [
    {
      q: "Warum sieht die Seite bei mir korrigiert aus, bei anderen aber quer?",
      a: "Das Drehen in einem Betrachter verändert meist nur deine Bildschirmansicht, nicht wie die Seite gespeichert ist. Damit die Korrektur für alle gilt, musst du die Seite drehen und eine neue Datei speichern — genau das übernimmt das Werkzeug PDF drehen.",
    },
    {
      q: "Um wie viel Grad sollte ich drehen?",
      a: "90° für eine quer liegende Seite, 180° für eine auf dem Kopf stehende, 270° für eine in die andere Richtung gedrehte. Wähle den Wert, der den Inhalt aufrecht stellt.",
    },
    {
      q: "Verschlechtert das Korrigieren der Drehung die Qualität?",
      a: "Nein. Beim Drehen ändert sich nur die Ausrichtung — Inhalt und Auflösung der Seite bleiben unverändert.",
    },
    {
      q: "Wird meine Datei hochgeladen?",
      a: "Nein. Die Drehung läuft im Browser auf deinem Gerät, die Datei bleibt also privat.",
    },
    {
      q: "Wie verhindere ich, dass Seiten quer eingescannt werden?",
      a: "Stell deinen Scanner so ein, dass er die Seitenausrichtung erkennt oder anpasst, oder halte dein Handy so, dass die Seite den Bildausschnitt aufrecht ausfüllt. Wer das schon bei der Aufnahme richtig macht, spart sich den Dreh-Schritt danach.",
    },
  ],
  related: [
    { label: "PDF drehen — Seiten im Browser ausrichten", path: "/rotate-pdf" },
    { label: "Wie du Seiten in einem PDF drehst", path: "/guides/how-to-rotate-pdf-pages" },
    { label: "Wie du Dokumente mit dem Handy als PDF scannst", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Wie du Seiten in einem PDF neu anordnest", path: "/guides/how-to-reorder-pdf-pages" },
  ],
  parentHub: { label: "PDF drehen", path: "/rotate-pdf" },
};

export default content;
