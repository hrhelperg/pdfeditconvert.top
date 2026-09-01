import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-jpg",
  h1: "PDF oder JPG — wann du welches Format nutzt",
  description:
    "PDF oder JPG: wann scannen, wann fotografieren. Vergleich von Qualität, Dateigröße, OCR und Eignung für den Dokumentenalltag.",
  intro: [
    "JPG ist ein Fotoformat. PDF ist ein Dokumentformat. Trotz dieser klaren Trennung verschicken viele regelmäßig JPGs von Verträgen und PDFs von einzelnen Bildern — beides funktioniert, ist aber nicht die ideale Wahl.",
    "Diese Fehlnutzung passiert, weil Handys standardmäßig alles als JPG speichern, vom Familienfoto bis zum gescannten Kassenbeleg, während Laptops für jedes druckbare Dokument standardmäßig PDF wählen. Ohne groß darüber nachzudenken, landen so Kassenbeleg-JPGs in der Galerie und bildlastige PDFs im Downloads-Ordner.",
    "Dieser Vergleich hilft dir, für die Dokumente, die du tatsächlich verschickst, das richtige Format zu wählen: Kassenbelege, Ausweise, Verträge, Screenshots, Produktfotos und die Grenzfälle dazwischen, bei denen die richtige Antwort nicht offensichtlich ist.",
  ],
  leftLabel: "PDF",
  rightLabel: "JPG",
  rows: [
    { feature: "Unterstützung mehrerer Seiten", left: "ja", right: "nein" },
    { feature: "Durchsuchbarer Text (mit OCR)", left: "ja", right: "nein" },
    { feature: "Scharf bei jeder Zoomstufe", left: "ja", right: "nein" },
    { feature: "Kleine Dateigröße bei Fotos", left: "Eingeschränkt", right: "ja" },
    { feature: "Universell anzeigbar", left: "ja", right: "ja" },
    { feature: "Passwortschutz", left: "ja", right: "nein" },
    { feature: "Später bearbeitbar", left: "ja", right: "Eingeschränkt" },
    { feature: "Am besten für Kassenbelege und Verträge", left: "ja", right: "nein" },
    { feature: "Am besten für Produktfotos", left: "nein", right: "ja" },
  ],
  whenLeft: [
    "Der Inhalt ist ein Dokument (Kassenbeleg, Vertrag, Ausweis, Formular)",
    "Das Ergebnis braucht eventuell mehrere Seiten",
    "Du willst durchsuchbaren Text (OCR)",
    "Der Empfänger ist eine Steuerkanzlei oder ein Geschäftssystem",
    "Du musst später eventuell eine Unterschrift hinzufügen",
  ],
  whenRight: [
    "Der Inhalt ist ein Foto",
    "Die Dateigröße zählt mehr als die Bildtreue",
    "Ein einzelnes Bild, keine mehreren Seiten nötig",
    "Weitergabe über Messaging-Apps, die Bilder bevorzugen",
    "Veröffentlichung in sozialen Netzwerken",
  ],
  faq: [
    {
      q: "Kann ich ein JPG in ein PDF umwandeln?",
      a: "Ja. PDF Editor (und die meisten PDF-Tools) verpacken JPGs in PDFs, ohne die Bildqualität zu verschlechtern.",
    },
    {
      q: "Funktioniert OCR bei einem JPG-Foto eines Dokuments?",
      a: "Besser erst in ein PDF umwandeln und dann OCR ausführen — das Ergebnis ist durchsuchbarer Text in einem richtigen Dokumentformat.",
    },
    {
      q: "Warum bevorzugen Steuerkanzleien PDFs?",
      a: "Ihre Buchhaltungstools indizieren PDFs und ignorieren JPGs. PDF-Kassenbelege werden automatisch kategorisiert; JPGs liegen einfach nur in einem Ordner.",
    },
  ],
  related: [
    { label: "PDF Converter", path: "/pdf-converter" },
    { label: "Scan to PDF", path: "/scan-to-pdf" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
};

export default content;
