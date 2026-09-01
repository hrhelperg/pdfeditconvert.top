import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-app-vs-online-pdf-tools",
  h1: "PDF-App oder Online-PDF-Tools — was ist besser?",
  description:
    "Native PDF-Apps im Vergleich zu browserbasierten Tools: Geschwindigkeit, Datenschutz und Offline-Zugriff im Vergleich.",
  intro: [
    "Es gibt zwei Wege, PDFs auf dem Handy oder Laptop zu bearbeiten: eine native App installieren oder eines der vielen browserbasierten PDF-Tools nutzen. Beide Wege funktionieren — aber die Kompromisse sind sehr unterschiedlich, und sie wiegen am schwersten bei sensiblen Dokumenten.",
    "Browserbasierte Tools gewinnen bei der Bequemlichkeit: ein Klick, und du legst los. Native Apps gewinnen bei Geschwindigkeit, Datenschutz und Offline-Zugriff. Für die einmalige Konvertierung öffentlicher Dokumente sind Browser-Tools völlig in Ordnung. Für die tägliche Dokumentarbeit — vor allem bei Verträgen, Ausweisen und Kundendateien — ist eine native App die bessere Standardwahl.",
    "Dieser Vergleich deckt Geschwindigkeit, Datenschutz, Offline-Zugriff, Kosten und die Art von Dateien ab, mit denen jede Option gut umgeht, damit du bewusst wählst, statt einfach beim ersten Google-Treffer zu landen.",
  ],
  leftLabel: "Native PDF-App",
  rightLabel: "Online-PDF-Tool",
  rows: [
    { feature: "Funktioniert offline", left: "ja", right: "nein" },
    { feature: "Dateien bleiben auf deinem Gerät", left: "ja", right: "nein" },
    { feature: "Geschwindigkeit (keine Warterei bei Up-/Download)", left: "ja", right: "nein" },
    { feature: "Keine Dateigrößenbegrenzung", left: "ja", right: "Eingeschränkt" },
    { feature: "Kein Konto nötig", left: "ja", right: "Manchmal" },
    { feature: "Funktioniert in abgeschotteten Firmennetzwerken", left: "ja", right: "Vielleicht" },
    { feature: "Komfort für die tägliche Nutzung", left: "ja", right: "Eingeschränkt" },
    { feature: "Erstinstallation nötig", left: "ja", right: "nein" },
    { feature: "Links zur geräteübergreifenden Zusammenarbeit", left: "Eingeschränkt", right: "ja" },
  ],
  whenLeft: [
    "Du bearbeitest sensible Dokumente (Verträge, Ausweise, Gehaltsabrechnungen)",
    "Du arbeitest an Orten mit unzuverlässigem Internet",
    "Du bearbeitest PDFs oft genug, um eine Installation zu rechtfertigen",
    "Dasselbe Tool soll auch im Flugmodus funktionieren",
    "Datenschutz ist bei den Dokumenten, die du bearbeitest, wichtig",
  ],
  whenRight: [
    "Eine einmalige Konvertierung oder Zusammenführung an einem öffentlichen Computer",
    "Du willst nichts installieren",
    "Das Dokument ist nicht sensibel",
    "Du brauchst einen teilbaren Vorschau-Link",
    "Du sitzt an einem Gerät, auf dem du keine Apps installieren kannst",
  ],
  faq: [
    {
      q: "Sind Online-PDF-Tools sicher?",
      a: "Manche schon. Die meisten haben Datenschutzrichtlinien, nach denen sie deine Dateien kurzzeitig zur Verarbeitung speichern dürfen. Für unkritische Dokumente ist das in Ordnung; bei Verträgen oder Ausweisen ist eine native App sicherer.",
    },
    {
      q: "Warum ist die native App schneller?",
      a: "Kein Datei-Upload, keine Server-Warteschlange, kein Download des Ergebnisses. Der gesamte Vorgang läuft lokal ab.",
    },
    {
      q: "Kann ich beides nutzen?",
      a: "Ja. Viele nutzen für die tägliche Arbeit standardmäßig die native App und greifen nur im seltenen Fall, dass ein Kollege einen teilbaren Vorschau-Link braucht, auf ein Web-Tool zurück.",
    },
  ],
  related: [
    { label: "PDF Editor — der komplette Überblick", path: "/pdf-editor" },
    { label: "PDF Security", path: "/pdf-security" },
    { label: "PDF for Business", path: "/pdf-for-business" },
  ],
};

export default content;
