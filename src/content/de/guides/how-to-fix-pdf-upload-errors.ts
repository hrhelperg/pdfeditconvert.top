import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-upload-errors",
  h1: "PDF-Upload-Fehler beheben (zu groß, abgelehnt, hängt fest)",
  description:
    "Portale lehnen PDFs aus einer Handvoll Gründen ab: Dateigröße, Seitenzahl, strenge Formatvorgaben oder ein instabiler Upload. Wie du herausfindest, welcher dich betrifft, und die Datei beim nächsten Versuch akzeptiert bekommst.",
  updated: "2026-05-29",
  intro: [
    "Upload-Portale sind strenger als E-Mail. Viele lehnen alles über 5 MB ab, manche schon über 2 MB, manche verweigern mehrseitige Dateien, und wieder andere scheitern stillschweigend an allem, was nicht exakt dem PDF/A-Standard entspricht. Die Fehlermeldungen, die sie zeigen, sind selten konkret – „Datei zu groß“, „ungültiges Format“, „Upload fehlgeschlagen“ – und die meisten bedeuten etwas anderes, als sie sagen.",
    "Die tatsächliche Ursache ist meist eine von vier: Die Datei überschreitet das Limit des Portals, das interne Format der Datei ist nicht standardkonform, deine Verbindung ist mitten im Upload abgebrochen, oder das Portal erwartet eine bestimmte PDF-Variante (PDF/A, nur eine Seite, ältere Version). Für jede gibt es eine eigene Lösung, und die richtige hängt davon ab, welche zutrifft.",
    "Diese Anleitung geht die Diagnosen nach Symptom durch und zeigt, wie du jedes davon direkt im Browser behebst. Die meisten gescheiterten Uploads gelingen beim zweiten Versuch, sobald die eigentliche Ursache behoben ist.",
  ],
  steps: [
    {
      title: "Nimm die Fehlermeldung wörtlich",
      body: "„Datei überschreitet das Größenlimit“ bedeutet Komprimierung. „Ungültige Datei“ bedeutet ein Formatproblem. „Upload fehlgeschlagen“ bedeutet meist ein Netzwerkproblem. Behandle den Wortlaut als ersten Hinweis, auch wenn er knapp ausfällt.",
    },
    {
      title: "Komprimiere stark, wenn die Dateigröße das Problem ist",
      body: "PDF komprimieren verkleinert Dateien direkt in deinem Browser deutlich, besonders scanlastige. Probiere zuerst die stärkste Komprimierungsstufe; verschlechtert sich die Qualität zu sehr, geh eine Stufe zurück. Manche Portale setzen das Limit bei 2 MB – bei den meisten typischen Dokumenten kommt man damit deutlich darunter.",
    },
    {
      title: "Teile ein großes, mehrseitiges PDF bei Bedarf auf",
      body: "Akzeptiert das Portal mehrere kleinere Dateien, lehnt aber eine große ab, lässt dich PDF teilen oder PDF-Seiten extrahieren die Datei in Abschnitte zerlegen. Nummeriere die Teile klar im Dateinamen, damit die Empfängerin oder der Empfänger sie wieder zusammensetzen kann.",
    },
    {
      title: "Exportiere als Standard-PDF neu, wenn das Format abgelehnt wird",
      body: "Manche Portale akzeptieren nur Dateien im Format PDF 1.4 oder PDF/A. Am einfachsten öffnest du die Datei in einem beliebigen Anzeigeprogramm und exportierst sie über „Drucken als PDF“ neu – die entstehende Kopie ist schlicht, standardkonform und wird meist akzeptiert.",
    },
    {
      title: "Prüfe Seitenzahl und Abmessungen",
      body: "Behörden- und Bildungsportale begrenzen manchmal die Seitenzahl oder das Papierformat. Nennt das Portal Anforderungen, halte dich genau daran: nur A4 oder Letter, keine übergroßen Seiten, keine transparenten Hintergründe. PDF-Seiten extrahieren entfernt alles, was darüber hinausgeht.",
    },
    {
      title: "Versuche es über eine stabile Verbindung erneut",
      body: "Ein WLAN-Abbruch mitten im Upload sieht genauso aus wie eine Ablehnung. Wechsle das Netzwerk oder versuch es über eine andere Verbindung erneut, bevor du annimmst, dass die Datei selbst das Problem ist.",
    },
  ],
  tips: [
    "Komprimiere, bevor du teilst. Eine komprimierte Einzeldatei passt oft schon unter das Limit; klappt das immer noch nicht, teile die komprimierte Kopie.",
    "Verzichte auf Verschlüsselung oder Passwortschutz, wenn du die Datei zu einem Portal hochlädst – viele blockieren geschützte Dateien, selbst wenn sie den eigentlichen Inhalt akzeptieren würden.",
    "Achte auf versteckte Zeichenbegrenzungen im Dateinamen. Manche Portale lehnen Namen mit Leerzeichen, Akzenten oder Sonderzeichen ab.",
    "Akzeptiert das Portal JPG, aber kein PDF, kannst du die PDF-Seiten mit PDF zu Bildern exportieren und diese hochladen – nützlich bei Anforderungen, die nur Bilder zulassen, etwa beim Einreichen eines Ausweisdokuments.",
    "Vergewissere dich immer, dass der Upload wirklich abgeschlossen ist (manche Portale scheitern lautlos). Lade die Bestätigungsseite neu und suche nach einer echten Bestätigung – nicht nur nach dem Fehlen einer Fehlermeldung.",
  ],
  mobileNote:
    "Uploads vom Handy scheitern häufiger als vom Laptop, einfach weil die Verbindung öfter abbricht. Die App PDF Editor komprimiert und teilt Dateien offline, sodass der eigentliche Upload-Schritt kurz bleibt – eine kleinere Datei lädt schneller hoch und übersteht auch ein instabiles Netzwerk.",
  faq: [
    {
      q: "Auf welche Größe begrenzen die meisten Portale?",
      a: "Übliche Grenzen sind 2 MB, 5 MB und 10 MB. Behörden- und Bildungsportale sind meist am strengsten, kommerzielle Portale großzügiger. Steht das Limit nicht direkt da, schau im Hilfebereich des Portals nach.",
    },
    {
      q: "Löst Komprimieren eine Ablehnung wegen der Dateigröße immer?",
      a: "Meistens ja, besonders bei scanlastigen Dateien. Ein 30-MB-Scan lässt sich oft sauber auf unter 5 MB komprimieren. Reine Textdateien, die schon klein sind, lassen sich kaum weiter verkleinern.",
    },
    {
      q: "Warum lehnt das Portal meine Datei als „ungültig“ ab?",
      a: "Entweder ist die Datei gar kein echtes PDF (manche Downloads sind falsch benannt), oder sie nutzt PDF-Funktionen, die der Parser des Portals nicht unterstützt. Ein erneuter Export über „Drucken als PDF“ erzeugt eine schlichte Basisversion, die fast immer akzeptiert wird.",
    },
    {
      q: "Kann ich das Größenlimit umgehen, indem ich die Datei zippe?",
      a: "So gut wie nie. Portale, die PDFs begrenzen, begrenzen meist auch die Gesamtgröße des Uploads und lehnen ZIP-Archive komplett ab. Der richtige Weg ist, das PDF selbst zu komprimieren.",
    },
    {
      q: "Was, wenn das Portal ausdrücklich PDF/A verlangt?",
      a: "PDF/A ist eine Archivvariante. Word und Google Docs können direkt dorthin exportieren. Ansonsten öffne die Datei, nutze „Drucken als PDF“ und prüfe die Exportoptionen auf eine A-kompatible Einstellung.",
    },
  ],
  related: [
    { label: "PDF komprimieren – auf Portal-Limits verkleinern", path: "/compress-pdf" },
    { label: "PDF teilen – große Dateien in akzeptierte Teile zerlegen", path: "/split-pdf" },
    { label: "Wie du die PDF-Größe vor dem Hochladen reduzierst", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
    { label: "Wie du die PDF-Dateigröße für E-Mails reduzierst", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "PDF komprimieren – Größe direkt im Browser reduzieren", path: "/compress-pdf" },
};

export default content;
