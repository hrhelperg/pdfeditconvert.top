import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx",
  h1: "PDF oder DOCX — welches Format solltest du nutzen?",
  description:
    "Wann du PDF statt DOCX wählen solltest, und umgekehrt. Klarer Vergleich von Bearbeitbarkeit, Treue zum Original, Unterschrift und Teilen.",
  updated: "2026-05-11",
  intro: [
    "PDF und DOCX lösen unterschiedliche Probleme. PDF ist ein fest verschlossenes, druckfertiges Format, das auf jedem Gerät identisch aussieht. DOCX ist ein bearbeitbares Arbeitsformat, das sich mit Word, Google Docs oder einer beliebigen Office-Anwendung umgestalten, umformatieren und neu strukturieren lässt.",
    "Wer für jede Aufgabe das passende Format wählt, umgeht die meisten Probleme, die beiden Formaten nachgesagt werden. Ein fertiger Vertrag als DOCX lädt zu versehentlichen Änderungen ein. Ein Arbeitsentwurf als PDF macht die Überarbeitung umständlich. Die Wahl ist keine Geschmacksfrage — sie richtet sich danach, wofür das Dokument gedacht ist.",
    "Diese Anleitung zeigt, wann welches Format die bessere Wahl ist — mit konkreten Beispielen aus Verträgen, Entwürfen, Rechnungen, Berichten und den Dokumenten, mit denen kleine Unternehmen und Privatpersonen jede Woche zu tun haben.",
  ],
  steps: [
    {
      title: "Nutze PDF, wenn das Dokument fertig ist",
      body: "Verträge, unterschriebene Vereinbarungen, Rechnungen, Broschüren, Berichte an Kundschaft oder Stakeholder. Immer dann, wenn der Empfänger genau das sehen soll, was du gesehen hast, und nicht unbemerkt etwas ändern können soll.",
    },
    {
      title: "Nutze DOCX, solange das Dokument noch entsteht",
      body: "Entwürfe, gemeinsam bearbeitete Dokumente, alles, was noch geprüft wird, sowie Vorlagen, die wiederverwendet und angepasst werden. Kommentare und Änderungsverfolgung funktionieren nur richtig in DOCX — genau dafür ist das Format gemacht.",
    },
    {
      title: "Nutze PDF zur Archivierung",
      body: "PDFs sind für die langfristige Aufbewahrung gemacht. Das Format sieht auch in zehn Jahren noch genauso aus. DOCX-Dateien können zwischen Word-Versionen und Betriebssystemen leicht anders dargestellt werden — für Arbeitsdokumente unproblematisch, für Archive riskant.",
    },
    {
      title: "Nutze DOCX, wenn Inhalte weiterverwendet werden müssen",
      body: "Text in ein anderes Tool übernehmen, einen Abschnitt für einen Blogbeitrag weiterverwenden, in einem anderen Stil umschreiben — all das geht aus DOCX leichter, weil der Inhalt bereits strukturiert und bearbeitbar vorliegt.",
    },
    {
      title: "Konvertiere bei Bedarf zwischen beiden Formaten",
      body: "Gute PDF-Tools konvertieren in beide Richtungen mit hoher Treue zum Original, solange es sich um textbasierte Dokumente handelt. Der übliche Ablauf: in DOCX bearbeiten, für den externen Versand als PDF exportieren. Kommt ein PDF an und der Inhalt soll weiterverwendet werden, wird es in DOCX zurückkonvertiert.",
    },
    {
      title: "Nutze PDF, wenn du eine Datei von Unbekannten erhältst",
      body: "DOCX-Dateien können Makros und eingebettete Objekte enthalten, die ein Sicherheitsrisiko darstellen. PDFs lassen sich aus nicht vertrauenswürdigen Quellen sicherer öffnen — trotzdem solltest du deinen PDF-Reader stets aktuell halten.",
    },
  ],
  tips: [
    "Schick einen Vertragsentwurf nie als DOCX an eine externe Person, außer du lädst bewusst zu Änderungen ein — sie kann ihn unbemerkt bearbeiten, und du merkst die Unterschiede nur bei genauem Vergleich.",
    "Schick eine fertige Rechnung nie als DOCX — sie sollte nicht bearbeitbar sein. PDF ist hier immer die richtige Wahl.",
    "Bittet dich jemand um ein „bearbeitbares PDF“, meint die Person damit meist DOCX. Frag lieber nach, statt zu raten, und konvertiere dann.",
    "PDFs mit Unterschrift sollten PDF bleiben. Beim Zurückkonvertieren in DOCX geht die Unterschrift verloren.",
    "Bei Dokumenten mit Formularfeldern ist PDF meist die bessere Wahl — Formularfelder in DOCX wirken umständlich und verhalten sich in verschiedenen Editoren uneinheitlich.",
  ],
  mobileNote:
    "Am Handy braucht DOCX Word, Google Docs oder eine andere Office-App, um korrekt angezeigt zu werden. PDF öffnet sich unter iOS und Android direkt mit den eingebauten Anzeigeprogrammen. Allein deshalb ist PDF für die meisten geteilten Dokumente die richtige Wahl — der Empfänger muss nichts installieren, um es zu lesen.",
  faq: [
    {
      q: "Kann ich ein PDF direkt bearbeiten, ohne es zu konvertieren?",
      a: "Ja, mit einem passenden PDF-Editor. Das Bearbeiten von PDFs ist eingeschränkter als bei DOCX — gedacht für Korrekturen, Unterschriften und kleine Änderungen, nicht für größere Umschreibungen. Bei umfangreicheren Änderungen ist es meist sinnvoller, vorher in DOCX zu konvertieren.",
    },
    {
      q: "Welches Format erzeugt kleinere Dateien?",
      a: "Das hängt vom Inhalt ab. Textlastige DOCX-Dateien sind meist kleiner als das entsprechende PDF. Bildlastige PDFs können bei guter Komprimierung kleiner sein als DOCX, weil die Bildkomprimierung bei PDF flexibler ist.",
    },
    {
      q: "Bleiben meine Schriftarten bei der Konvertierung erhalten?",
      a: "Meistens ja. Ist eine Schriftart auf dem Zielgerät nicht verfügbar, wird automatisch eine ähnliche verwendet. Bleib bei gängigen Schriftarten (Inter, Helvetica, Calibri, Arial), um sichtbare Ersetzungen zu vermeiden.",
    },
    {
      q: "Unterscheidet sich PDF/A von einem gewöhnlichen PDF?",
      a: "Ja. PDF/A ist eine strenge Archivvariante, die alle Schriftarten einbettet und keine externen Abhängigkeiten zulässt. Manche Behörden- und Rechtsarchive verlangen genau dieses Format. Für fast alles andere reicht ein normales PDF.",
    },
    {
      q: "Kann DOCX eine Unterschrift enthalten?",
      a: "Es kann ein Bild einer Unterschrift enthalten, das aber keine kryptografische Gültigkeit hat. PDF unterstützt echte digitale Signaturen, die fest mit dem Dokument verbunden sind. Für alles, was rechtsgültig unterschrieben werden muss, ist PDF das richtige Format.",
    },
  ],
  related: [
    { label: "PDF oder DOCX — der vollständige Vergleich", path: "/compare/pdf-vs-docx" },
    { label: "PDF-Konverter", path: "/pdf-converter" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
  parentHub: { label: "PDF-Konverter", path: "/pdf-converter" },
};

export default content;
