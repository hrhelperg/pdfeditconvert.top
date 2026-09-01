import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reorder-pdf-pages",
  h1: "PDF-Seiten neu anordnen (kostenlos, im Browser)",
  description:
    "Bringe PDF-Seiten im Browser in die richtige Reihenfolge. Korrigiere Scans, die rückwärts eingescannt wurden, oder zusammengeführte Dateien in falscher Reihenfolge.",
  updated: "2026-05-23",
  intro: [
    "Seiten landen häufiger in der falschen Reihenfolge, als man denkt. Ein Dokumenteneinzug zieht einen Stapel ein und scannt ihn von hinten nach vorn. Ein Zusammenführen wirft zwei Dateien zusammen, aber in der falschen Reihenfolge. Ein Anhang, der eigentlich ganz hinten stehen sollte, landet mittendrin. Egal, was die Ursache ist — die Lösung bleibt gleich: die Seiten so lange umsortieren, bis das Dokument in der richtigen Reihenfolge gelesen werden kann.",
    "Diese Anleitung nutzt das kostenlose Tool PDF-Seiten neu anordnen: Es zeigt jede Seite als Vorschau und lässt dich sie mit einfachen Steuerelementen verschieben, direkt in deinem Browser — es wird nichts hochgeladen. Du siehst Miniaturansichten, schiebst sie an die richtige Stelle und lädst die korrigierte Datei herunter.",
    "Ein kleiner Handgriff mit großer Wirkung: Ein Dokument in der richtigen Reihenfolge wirkt durchdacht, eines in der falschen lässt das Ganze schlampig erscheinen.",
  ],
  steps: [
    {
      title: "Öffne PDF-Seiten neu anordnen",
      body: "Ruf PDF-Seiten neu anordnen in deinem Browser auf. Es läuft auf deinem Gerät — kein Hochladen, kein Konto nötig.",
    },
    {
      title: "Füge dein PDF hinzu",
      body: "Zieh die Datei in die Ablagefläche oder klicke, um sie auszuwählen. Das Tool zeigt eine Miniaturansicht jeder Seite, sodass du die aktuelle Reihenfolge auf einen Blick siehst.",
    },
    {
      title: "Erkenne, was nicht an seinem Platz ist",
      body: "Geh die Miniaturansichten durch und such nach vertauschten, falsch platzierten oder doppelten Seiten. Wenn du die Zielreihenfolge schon im Kopf hast, gehen die Verschiebungen zügig.",
    },
    {
      title: "Bring die Seiten in die richtige Reihenfolge",
      body: "Nutze die Steuerelemente, um jede Seite an ihre richtige Position zu schieben. Arbeite dich vom Anfang des Dokuments nach hinten vor, damit die Positionen berechenbar bleiben.",
    },
    {
      title: "Prüfe die neue Reihenfolge",
      body: "Geh die Miniaturansichten noch einmal von oben nach unten durch. Die angezeigte Reihenfolge ist genau die, die du in der Datei bekommst.",
    },
    {
      title: "Lade das korrigierte PDF herunter",
      body: "Exportiere die neu sortierte Datei und speichere sie mit einem klaren Namen. Bewahre das Original auf, bis du die neue Reihenfolge bestätigt hast.",
    },
  ],
  tips: [
    "Ist ein ganzer Scan in umgekehrter Reihenfolge herausgekommen, behebt das Neuanordnen die Sequenz — eine seitlich verdrehte Seite ist dagegen ein Drehproblem, das PDF drehen löst.",
    "Ordne neu an, bevor du komprimierst oder konvertierst. Es ist einfacher, zuerst die Struktur zu klären und die aufwendigeren Schritte erst am fertigen Dokument durchzuführen.",
    "Arbeite beim Verschieben von vorn nach hinten, damit jede Bewegung nicht gleich die schon gesetzten Positionen durcheinanderbringt.",
    "Bei Dokumenten, die mehrere Quellen kombinieren, ordne direkt nach dem Zusammenführen neu an, solange die geplante Struktur noch frisch im Kopf ist.",
    "Bewahre die Originaldatei auf. Geht beim Neuanordnen etwas schief, fängst du mit der unangetasteten Quelle viel schneller wieder von vorn an.",
  ],
  mobileNote:
    "Auf dem Handy ist Neuanordnen vor allem eine Sache des Ziehens von Miniaturansichten, und die PDF-Editor-App macht das ganz greifbar: Halten, ziehen, loslassen, fertig — offline und ohne dass die Datei hochgeladen wird. Praktisch direkt nach dem Scannen, wenn Seiten oft noch schnell umsortiert werden müssen.",
  faq: [
    {
      q: "Kann ich einen in umgekehrter Reihenfolge gescannten Stapel korrigieren?",
      a: "Ja. Mit dem Neuanordnen drehst du die Reihenfolge um, sodass die zuletzt gescannte Seite wieder nach vorn kommt. Sind die Seiten zusätzlich verdreht, korrigierst du die Ausrichtung mit PDF drehen.",
    },
    {
      q: "Verändert das Neuanordnen den Seiteninhalt?",
      a: "Nein. Nur die Reihenfolge ändert sich — Inhalt und Ausrichtung jeder Seite bleiben genau wie zuvor.",
    },
    {
      q: "Wird mein PDF hochgeladen?",
      a: "Nein. Das Neuanordnen läuft in deinem Browser auf deinem Gerät, die Datei bleibt also privat.",
    },
    {
      q: "Kann ich beim Neuanordnen Seiten löschen?",
      a: "Beim Neuanordnen geht es nur um die Reihenfolge. Um Seiten loszuwerden, extrahiere mit PDF-Seiten extrahieren die Seiten, die bleiben sollen — die unerwünschten fallen dabei automatisch weg.",
    },
    {
      q: "Wird die Originaldatei verändert?",
      a: "Nein. Das Tool erzeugt ein neues, neu geordnetes PDF und lässt deine Quelldatei unangetastet — du kannst bei Bedarf jederzeit vom Original neu starten.",
    },
  ],
  related: [
    { label: "PDF-Seiten neu anordnen — im Browser umsortieren", path: "/reorder-pdf-pages" },
    { label: "PDF drehen — seitlich verdrehte Seiten korrigieren", path: "/rotate-pdf" },
    { label: "Wie du PDF-Dateien organisierst", path: "/guides/how-to-organize-pdf-files" },
    { label: "Wie du PDF-Dateien zusammenführst", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "PDF-Seiten neu anordnen", path: "/reorder-pdf-pages" },
};

export default content;
