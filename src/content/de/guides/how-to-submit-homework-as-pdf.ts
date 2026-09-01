import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-submit-homework-as-pdf",
  h1: "Hausaufgaben als PDF abgeben (ohne Portal-Drama)",
  description:
    "Schulportale lehnen Hausaufgaben aus vorhersehbaren Gründen ab – Dateigröße, Seitenzahl, Format. Der einfachste Weg von der fertigen Aufgabe zum PDF, das dein Portal akzeptiert.",
  updated: "2026-05-29",
  intro: [
    "Zwei Minuten vor der Deadline ist der denkbar schlechteste Moment, um zu merken, dass das Schulportal deine Hausaufgabe ablehnt. Die Fehlermeldung ist meist unspezifisch — „ungültige Datei“, „Hochladen fehlgeschlagen“, „zu groß“ — und die eigentliche Ursache ist fast immer eine von vier vorhersehbaren Sachen: Die Datei überschreitet das Größenlimit, das Format entspricht nicht genau dem, was das Portal erwartet, die Seitenzahl liegt über einer Obergrenze, oder dein Handyfoto ist eigentlich noch gar kein richtiges PDF.",
    "Die Lösung ist in jedem Fall kurz und lässt sich vom Handy oder Laptop aus in einem Browser-Tab erledigen, ohne irgendetwas bei einem Drittanbieter hochzuladen. Der Trick ist, genau zu wissen, was das Portal erwartet, und gleich beim ersten Versuch exakt diese Datei zu erzeugen.",
    "Diese Anleitung zeigt den Weg von der fertigen Aufgabe zum akzeptierten PDF — inklusive des richtigen Umgangs mit Scans handschriftlicher Arbeiten, Aufgabenblättern und gemischten Abgaben wie „ein Word-Dokument plus drei handschriftliche Seiten“.",
  ],
  steps: [
    {
      title: "Prüfe die tatsächlichen Anforderungen des Portals",
      body: "Die meisten Kursportale listen die Grenzwerte irgendwo unauffällig auf — meist 5–25 MB, manchmal eine maximale Seitenzahl, gelegentlich explizit PDF/A. Prüfe das vor dem Hochladen, nicht erst nach der Ablehnung.",
    },
    {
      title: "Wandle zuerst alle Teile in PDF um",
      body: "Ein Word-Dokument → mit Word in PDF. Handschriftliche Seiten → mit PDF scannen auf dem Handy. Screenshots oder Fotos der Tafel → mit Bild in PDF. Alles wird zuerst zu PDF, bevor irgendetwas anderes passiert.",
    },
    {
      title: "Führe alles in der Abgabereihenfolge zu einer Datei zusammen",
      body: "PDF zusammenführen bündelt die getippte Arbeit, die gescannten Seiten und alle Anmerkungen in einer geordneten Datei. Prüferinnen bevorzugen eine Datei gegenüber dreien.",
    },
    {
      title: "Prüfe Ausrichtung und Reihenfolge",
      body: "PDF-Seiten neu anordnen, falls beim Zusammenführen etwas durcheinandergeraten ist. PDF drehen, wenn ein Scan quer eingescannt wurde. Die Prüferin sollte deine Arbeit nicht erst manuell drehen müssen, um sie zu lesen.",
    },
    {
      title: "Komprimiere auf das Portal-Limit",
      body: "PDF komprimieren im Browser verkleinert die Datei. Umfangreiche Scans schrumpfen deutlich, getippter Inhalt kaum. Ziel: knapp unter dem Portal-Limit, mit etwas Puffer.",
    },
    {
      title: "Benenne die Datei so, wie der Kurs es erwartet",
      body: "Viele Kurse geben eine Namenskonvention vor: Nachname_Vorname_Aufgabe3.pdf. Halte dich exakt daran. Falsche Namen kosten Punkte oder sorgen für Verwirrung bei der Sortierung.",
    },
  ],
  tips: [
    "Reiche keine Word-Dokumente bei einem Portal ein, das PDFs akzeptiert. Word wird auf dem Rechner der Prüferin anders dargestellt; ein PDF friert das Aussehen fest.",
    "Scans handschriftlicher Seiten sollten schwarz-weiß oder Graustufen sein, nicht farbig. Kleiner, schärfer und besser lesbar.",
    "Komprimiere umfangreiche Scans kräftig, getippte Arbeit dagegen kaum. Getippte Seiten lassen sich kaum verkleinern, Scans dagegen deutlich.",
    "Lade vorab eine Testversion probeweise hoch, um vor der Deadline zu prüfen, ob das Portal deine Datei akzeptiert.",
    "Speichere die abgegebene Datei zusätzlich lokal. Die Kopie im Portal lässt sich später nicht immer wieder abrufen, und du brauchst vielleicht später einen Nachweis, was genau du abgegeben hast.",
  ],
  mobileNote:
    "Abgaben nur vom Handy sind heute normal. Die PDF-Editor-App deckt die gesamte Kette auf dem Handy ab — handschriftliche Seiten scannen, mit getippter Arbeit zusammenführen, komprimieren, benennen, hochladefertig — ganz ohne Umweg über einen Laptop.",
  faq: [
    {
      q: "Welche Dateigröße erlauben die meisten Schulportale?",
      a: "Meist 5–25 MB. Manche Portale für Schulen setzen das Limit bei 2 MB. Uni-Portale sind großzügiger. Prüfe die genauen Vorgaben deines Kurses.",
    },
    {
      q: "Kann ich statt PDF ein Word-Dokument abgeben?",
      a: "Nur, wenn das Portal es ausdrücklich zulässt. Die meisten verlangen gezielt PDF, um die Formatierung festzuschreiben; ein Word-Dokument kann Punkte kosten oder automatisch abgelehnt werden.",
    },
    {
      q: "Muss ich alles zu einer Datei zusammenführen?",
      a: "Ja, außer das Portal erlaubt mehrere Uploads. Prüferinnen bevorzugen eine Datei; viele Portale akzeptieren ohnehin nur eine.",
    },
    {
      q: "Was ist der häufigste Ablehnungsgrund?",
      a: "Die Dateigröße. Scans lassen Dateien schnell über das Portal-Limit wachsen. Komprimiere vor der Abgabe, und die Ablehnung fällt meist weg.",
    },
    {
      q: "Kann ich vom Handy aus hochladen?",
      a: "Ja. Die meisten modernen Schulportale funktionieren im mobilen Browser und akzeptieren PDFs direkt aus dem Teilen-Menü. Die Handy-Tools decken die gesamte Kette ab.",
    },
  ],
  related: [
    { label: "PDF für Studierende — Notizen und Lernhilfen", path: "/pdf-for-students" },
    { label: "PDF scannen — handschriftliche Seiten erfassen", path: "/scan-to-pdf" },
    { label: "PDF für Schulportale komprimieren", path: "/guides/how-to-compress-pdf-for-school-portals" },
    { label: "Handschriftliche Notizen als PDF scannen", path: "/guides/how-to-scan-notes-to-pdf" },
  ],
  parentHub: { label: "PDF für Studierende — Notizen, Markierungen, Lernhilfen", path: "/pdf-for-students" },
};

export default content;
