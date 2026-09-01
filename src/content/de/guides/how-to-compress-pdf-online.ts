import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-online",
  h1: "PDF online komprimieren, ohne es hochzuladen",
  description:
    "Verkleinere ein PDF direkt in deinem Browser – ohne Upload, ohne Konto. Wie sich die Komprimierung auf dem Gerät von typischen Online-Tools unterscheidet, und der Kompromiss bei der Qualität.",
  updated: "2026-05-23",
  intro: [
    "„PDF online komprimieren“ ruft meist ein vertrautes, leicht unbehagliches Bild hervor: die eigene Datei auf den Server eines Fremden laden, warten, das Ergebnis herunterladen und hoffen, dass das gerade weitergegebene Dokument nichts war, worauf es ankam. Es geht auch besser — mit einem Ablauf, der direkt im Browser-Tab läuft, sodass die Datei dein Gerät nie verlässt.",
    "Diese Anleitung nutzt das kostenlose Werkzeug PDF komprimieren, das lokal mit dem Prozessor deines eigenen Geräts arbeitet. „Online“ heißt hier nur, dass du es über eine Webseite erreichst — dein PDF wird dabei nirgendwohin geschickt. Genau dieser Unterschied zählt bei den Dokumenten, die Menschen tatsächlich komprimieren: eingescannte Verträge, Kontoauszüge, Bewerbungsunterlagen.",
    "Diese Anleitung führt durch die Schritte, erklärt den Kompromiss bei der Qualität ehrlich und zeigt, bei welchen Dateitypen die Komprimierung im Browser glänzt — und wo sie an ihre Grenzen stößt.",
  ],
  steps: [
    {
      title: "Öffne das Werkzeug PDF komprimieren",
      body: "Rufe das Werkzeug PDF komprimieren im Browser auf. Es lädt in der Seite und verarbeitet deine Datei auf deinem Gerät — kein Hochladen, keine Registrierung.",
    },
    {
      title: "Füge dein PDF hinzu",
      body: "Ziehe die Datei in die Ablagefläche oder klicke, um sie auszuwählen. Es wird nichts übertragen — die Datei wird lokal gelesen.",
    },
    {
      title: "Wähle eine Komprimierungsstufe",
      body: "Niedrig behält die meisten Details, Empfohlen balanciert Größe und Qualität, Stark liefert die kleinste Datei. Für E-Mail und Uploads ist Empfohlen meist der beste Kompromiss.",
    },
    {
      title: "Komprimieren",
      body: "Starte den Vorgang. Das Werkzeug rendert und kodiert die Seiten lokal neu und zeigt anschließend die Größe vorher und nachher sowie die eingesparte Prozentzahl.",
    },
    {
      title: "Prüfe, ob das Ergebnis akzeptabel aussieht",
      body: "Öffne die komprimierte Datei und sieh dir die Seiten an. Scans sollten weiterhin lesbar sein — wirkt eine Stufe zu grob, geh einen Schritt zu einer leichteren zurück.",
    },
    {
      title: "Lade die kleinere Datei herunter",
      body: "Speichere sie als neue Datei, damit dein Original erhalten bleibt. Die komprimierte Kopie ist bereit zum Anhängen oder Hochladen.",
    },
  ],
  tips: [
    "„Online“ bedeutet hier nicht „hochgeladen“. Die Datei wird im Browser auf deinem Gerät verarbeitet — der sicherere Weg, um alles Sensible zu komprimieren.",
    "Komprimierung ist verlustbehaftet — kein ehrliches Werkzeug behauptet etwas anderes. Niedrigere Stufen behalten mehr Details; wähle die, die für deinen Zweck noch akzeptabel aussieht.",
    "Um im Browser wirklich Speicherplatz zu sparen, rendert das Werkzeug die Seiten als Bilder neu — Text im Ergebnis lässt sich danach weder markieren noch durchsuchen. Brauchst du das, bewahre das Original auf.",
    "Reine Text- oder Vektor-PDFs schrumpfen kaum, weil es wenig Bilddaten zu komprimieren gibt — die größten Einsparungen bringen Scans und fotolastige Dateien.",
    "Passwortgeschützte PDFs lassen sich im Browser nicht verarbeiten. Entferne zuerst das Passwort, oder nutze die App PDF Editor, die auch geschützte Dateien unterstützt.",
  ],
  mobileNote:
    "Genau unterwegs, beim Komprimieren eines sensiblen Dokuments, zahlt sich die Verarbeitung auf dem Gerät aus. Die App PDF Editor komprimiert komplett offline — du kannst einen Vertrag im Flugmodus verkleinern, und kein einziges Byte verlässt dein Handy — und sie kommt auch mit passwortgeschützten Dateien zurecht.",
  faq: [
    {
      q: "Wird mein PDF tatsächlich auf einen Server hochgeladen?",
      a: "Nein. Auch wenn du das Werkzeug PDF komprimieren über eine Webseite erreichst, läuft es in deinem Browser und verarbeitet die Datei auf deinem Gerät. Es wird nichts übertragen, was es sicher für vertrauliche Dokumente macht.",
    },
    {
      q: "Um wie viel kleiner wird meine Datei?",
      a: "Das hängt vom Inhalt ab. Eingescannte und bildlastige PDFs schrumpfen oft um 50 bis 90 %, reine Text-PDFs ändern sich kaum. Das Werkzeug zeigt die genaue Größe vorher und nachher.",
    },
    {
      q: "Sinkt die Qualität?",
      a: "Ja, etwas — das ist verlustbehaftete Komprimierung, und daraus wird kein Geheimnis gemacht. Niedrigere Stufen bewahren mehr Details. Wähle die Stufe, die für den geplanten Einsatzzweck akzeptabel aussieht.",
    },
    {
      q: "Warum kann ich den Text nach dem Komprimieren nicht mehr markieren?",
      a: "Um im Browser wirklich Größe zu sparen, wird jede Seite in ein Bild umgewandelt, wodurch die markierbare Textebene verloren geht. Brauchst du durchsuchbaren Text, bewahre das Original auf oder wähle eine leichtere Stufe.",
    },
    {
      q: "Kann ich ein geschütztes PDF auf diese Weise komprimieren?",
      a: "Nicht im Browser. Entferne zuerst das Passwort, oder nutze die mobile App PDF Editor, die geschützte Dateien öffnen und komprimieren kann.",
    },
  ],
  related: [
    { label: "PDF komprimieren — kleiner im Browser", path: "/compress-pdf" },
    { label: "Wie du ein PDF komprimierst, ohne an Qualität zu verlieren", path: "/guides/how-to-compress-pdf" },
    { label: "Wie du die Dateigröße eines PDFs für E-Mails verringerst", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "PDF-Tools mit Datenschutz an erster Stelle", path: "/guides/privacy-first-pdf-tools" },
  ],
  parentHub: { label: "PDF komprimieren", path: "/compress-pdf" },
};

export default content;
