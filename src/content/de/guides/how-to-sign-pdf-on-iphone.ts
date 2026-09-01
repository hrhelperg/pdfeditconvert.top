import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-iphone",
  h1: "PDF auf dem iPhone unterschreiben (Anleitung 2026)",
  description:
    "Unterschreibe ein PDF auf dem iPhone mit Markup oder der PDF-Editor-App. Die Grenzen des nativen Wegs, und wann eine eigene App die bessere Wahl ist.",
  updated: "2026-05-23",
  intro: [
    "Ein PDF auf dem iPhone zu unterschreiben ist eine der Aufgaben, die iOS fast von allein erledigt. Das eingebaute Markup-Werkzeug kann zur Not eine Unterschrift hinzufügen, und für eine schnelle, einmalige Unterschrift reicht das völlig aus. Doch sobald du regelmäßig unterschreibst — Verträge, Formulare, Vereinbarungen, die Woche für Woche wiederkommen —, zeigen sich seine Grenzen, und ein eigenes Tool spart dann echte Zeit.",
    "Diese Anleitung deckt beide Wege ab. Zuerst den nativen Markup-Ansatz über die Dateien-App, mit einem ehrlichen Blick darauf, wo er an Grenzen stößt. Danach die PDF-Editor-App, die eine wiederverwendbare Unterschrift speichert, Unterschriftsfelder erkennt und alles auf dem Gerät behält.",
    "Elektronische Unterschriften werden für gewöhnliche Geschäftsdokumente in den meisten Ländern anerkannt, daher ist das Unterschreiben auf dem iPhone selten nur eine Bequemlichkeit — es reicht oft völlig für sich allein aus.",
  ],
  steps: [
    {
      title: "Schneller Weg: öffne das PDF in der Dateien-App",
      body: "Tippe in der Dateien-App auf das PDF, um es zu öffnen, dann auf das Markup-Symbol (die Stiftspitze). Das ist der eingebaute Editor von iOS — praktisch für eine einmalige Unterschrift, ohne etwas installieren zu müssen.",
    },
    {
      title: "Eine Unterschrift mit Markup hinzufügen",
      body: "Tippe auf das Plus-Symbol, wähle Unterschrift und zeichne eine mit dem Finger oder speichere eine neue. Platziere sie auf der Seite und passe die Größe an. Für das gelegentliche Dokument reicht das völlig.",
    },
    {
      title: "Wisse, wo Markup an seine Grenzen stößt",
      body: "Markup erkennt keine Unterschriftsfelder in Formularen, geht mit Datumsangaben oder Initialen nicht sauber um, und die Unterschrift jedes Mal neu zu zeichnen oder wiederzufinden wird lästig. Wer häufig unterschreibt, sollte zu einem eigenen Tool wechseln.",
    },
    {
      title: "Der bessere Weg: öffne es in der PDF-Editor-App",
      body: "Importiere das PDF aus Dateien, Mail oder einem beliebigen Teilen-Menü in die App. Das Unterschreiben-Werkzeug bietet handschriftliche, getippte Unterschriften und Initialen.",
    },
    {
      title: "Zeichne deine Unterschrift einmal, nutze sie immer wieder",
      body: "Erstelle deine Unterschrift beim ersten Mal — mit dem Finger oder dem Apple Pencil —, und sie wird auf deinem Gerät für jedes künftige Dokument gespeichert. Unterschreiben wird dann zu: öffnen, antippen, platzieren, exportieren.",
    },
    {
      title: "Platzieren, datieren und exportieren",
      body: "Setze die Unterschrift an die richtige Stelle, füge bei Bedarf ein Datum oder Initialen hinzu und exportiere eine unterschriebene Kopie. Speichere sie als neue Datei, damit das unterschriftslose Original unangetastet bleibt.",
    },
  ],
  tips: [
    "Nutze einen Apple Pencil, falls du einen hast — der Strich wirkt deutlich sauberer als mit der Fingerspitze, was bei kundenseitigen Verträgen zählt.",
    "Markup ist das richtige Werkzeug für eine wirklich einmalige Sache. Unterschreibst du öfter als einmal im Monat, zahlt sich eine gespeicherte, wiederverwendbare Unterschrift schnell aus.",
    "Bewahre das unterschriftslose Original neben der unterschriebenen Kopie auf. Will die Gegenseite eine unbearbeitete Version, oder musst du mit einer Korrektur erneut unterschreiben, hast du es zur Hand.",
    "Füge bei einem sensiblen unterschriebenen Dokument vor dem Teilen ein Passwort hinzu — Unterschreiben und Schützen sind zwei getrennte Schritte.",
    "Eine elektronische Unterschrift eignet sich für gewöhnliche Geschäftsdokumente, aber hochwertige oder regulierte Vereinbarungen können eine formellere qualifizierte Signatur erfordern — prüfe dafür die geltenden Regeln.",
  ],
  mobileNote:
    "Auf dem iPhone zu unterschreiben bedeutet, dass ein Vertrag innerhalb einer Stunde zurückgeht, oft innerhalb von Minuten. Die PDF-Editor-App behält deine gespeicherte Unterschrift auf dem Gerät, erkennt vorhandene Unterschriftsfelder und lädt das Dokument nie hoch — sodass selbst sensible Vereinbarungen privat bleiben, während du unterwegs unterschreibst.",
  faq: [
    {
      q: "Kann ich ein PDF auf dem iPhone ohne App unterschreiben?",
      a: "Ja — öffne es in der Dateien-App und füge mit Markup eine Unterschrift hinzu. Das ist ideal für eine einmalige Sache. Für regelmäßiges Unterschreiben ist ein eigenes Tool mit gespeicherter, wiederverwendbarer Unterschrift deutlich schneller.",
    },
    {
      q: "Was kann das eingebaute Markup-Werkzeug nicht?",
      a: "Es erkennt keine Unterschriftsfelder in Formularen, geht unhandlich mit Datumsangaben und Initialen um, und du musst deine Unterschrift jedes Mal neu platzieren. Diese Lücken sind der Grund, warum Vielunterschreiber zu einer eigenen App wechseln.",
    },
    {
      q: "Ist eine elektronische Unterschrift auf meinem iPhone rechtsgültig?",
      a: "Für gewöhnliche Geschäftsverträge ist sie in den meisten Rechtsordnungen gültig. Hochwertige oder regulierte Dokumente können eine formellere qualifizierte Signatur erfordern — prüfe die für deinen Fall geltenden Regeln.",
    },
    {
      q: "Wird mein unterschriebenes Dokument irgendwohin hochgeladen?",
      a: "Mit der PDF-Editor-App nicht — deine gespeicherte Unterschrift und das Dokument bleiben auf deinem Gerät. Es wird nichts an einen Server gesendet.",
    },
    {
      q: "Wie unterschreibe ich stattdessen auf Android?",
      a: "Der Ablauf ist ähnlich, aber die nativen Werkzeuge unterscheiden sich. Sieh dir die eigene Anleitung zum Unterschreiben eines PDFs auf Android an.",
    },
  ],
  related: [
    { label: "PDF unterschreiben — elektronische Unterschriften am Handy", path: "/sign-pdf" },
    { label: "PDF auf Android unterschreiben", path: "/guides/how-to-sign-pdf-on-android" },
    { label: "PDF am Handy unterschreiben", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "PDF auf dem iPhone bearbeiten", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "PDF unterschreiben", path: "/sign-pdf" },
};

export default content;
