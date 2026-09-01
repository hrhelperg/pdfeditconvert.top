import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";
import { DE_GUIDE_ROUTES } from "@/content/de/routes.guides";

/**
 * German route manifest — the localization manifest for de.
 *
 * One entry per English route this locale publishes. `id` is the English
 * route id; `slug` is the permanent German URL after the `/de` prefix.
 * Category, priority, change frequency and lastmod policy are inherited —
 * see buildLocaleRoutes.
 *
 * Slug conventions (also recorded in docs/localization/de-terminology.md):
 *
 * - ASCII-normalized, umlauts/ß transliterated: "pdf-groesse-reduzieren",
 *   not "pdf-größe-reduzieren". Prose keeps every umlaut and ß; slugs do
 *   not, so URLs stay copy-pasteable and never percent-encode.
 * - The verb order German users actually search: "pdf-komprimieren", not
 *   "komprimieren-pdf" (verb-noun order in slugs, not the German
 *   sentence-final-verb pattern, since search queries are noun-first).
 * - Translated section prefixes: anleitungen/, vergleiche/, anwendungsfaelle/.
 */
export const DE_ROUTE_MANIFEST: readonly LocaleRouteEntry[] = [
  {
    id: "",
    slug: "",
    title: "PDF Editor — PDFs bearbeiten, konvertieren, unterschreiben und scannen",
    description:
      "Die komplette PDF-Lösung für Arbeit, Studium und Alltag. Bearbeite, konvertiere, komprimiere, führe zusammen, unterschreibe und scanne PDFs mit PDF Editor für iOS und Android – direkt vom Handy aus.",
  },

  // Hubs
  {
    id: "pdf-editor",
    slug: "pdf-editor",
    title: "PDF Editor — Text, Bilder und Seiten am Handy bearbeiten",
    description:
      "Bearbeite deine PDFs auf dem iPhone oder mit Android: Text korrigieren, Bilder einfügen, Seiten neu anordnen und Dokumente unterschreiben. So macht die PDF-Editor-App mobiles Bearbeiten mühelos.",
  },
  {
    id: "pdf-converter",
    slug: "pdf-konverter",
    title: "PDF-Konverter — PDF in Word, JPG, PNG und zurück umwandeln",
    description:
      "Wandle PDFs in Word, Excel, JPG, PNG und wieder zurück um. Der sauberste mobile Weg dafür, mit der PDF-Editor-App für iOS und Android.",
  },
  {
    id: "sign-pdf",
    slug: "pdf-unterschreiben",
    title: "PDF unterschreiben — elektronische Unterschrift am Handy hinzufügen",
    description:
      "Unterschreibe deine PDFs direkt am Handy, mit einer echten handschriftlichen Unterschrift oder eingetipptem Namen. In den meisten Abläufen anerkannt. Probier die PDF-Editor-App aus.",
  },
  {
    id: "scan-to-pdf",
    slug: "pdf-scannen",
    title: "In PDF scannen — Papierdokumente in ein sauberes PDF verwandeln",
    description:
      "Nutze die Handykamera, um Dokumente, Ausweise und Belege in saubere, durchsuchbare PDFs zu scannen. Die PDF-Editor-App erkennt die Kanten automatisch.",
  },
  {
    id: "pdf-security",
    slug: "pdf-sicherheit",
    title: "PDF-Sicherheit — PDFs mit Passwort schützen und verschlüsseln",
    description:
      "Schütze sensible PDFs mit Passwort und Verschlüsselung. Praktische Anleitung, um Dokumente auf iPhone und Android abzusichern.",
  },
  {
    id: "pdf-for-business",
    slug: "pdf-fuer-unternehmen",
    title: "PDF für Unternehmen — Verträge, Rechnungen und Arbeitsabläufe",
    description:
      "Wie kleine Teams PDFs für Verträge, Rechnungen und Freigaben nutzen. Moderne, mobil gedachte Abläufe mit der PDF-Editor-App.",
  },
  {
    id: "pdf-for-students",
    slug: "pdf-fuer-studierende",
    title: "PDF für Studierende — Notizen, Markierungen und Lernzusammenfassungen",
    description:
      "Nutze PDFs für Vorlesungsnotizen, Markierungen und Lernzusammenfassungen. Clevere mobile Abläufe mit der PDF-Editor-App für iOS und Android.",
  },
  {
    id: "pdf-forms",
    slug: "pdf-formulare",
    title: "PDF-Formulare — ausfüllbare PDFs ausfüllen, unterschreiben und verwalten",
    description:
      "Verstehe, wie PDF-Formulare wirklich funktionieren, und wie du sie ausfüllst, unterschreibst, erstellst und reparierst. Der Ausgangspunkt für interaktive und nicht interaktive ausfüllbare PDFs, am Computer wie am Handy.",
  },

  // Guides index
  {
    id: "guides",
    slug: "anleitungen",
    title: "PDF-Anleitungen — Schritt-für-Schritt-Tutorials",
    description:
      "Praktische, mobil gedachte PDF-Tutorials: Dokumente auf iPhone und Android bearbeiten, konvertieren, komprimieren, zusammenführen, unterschreiben und schützen.",
  },

  // Tools
  {
    id: "pdf-tools",
    slug: "pdf-werkzeuge",
    title: "Kostenlose PDF-Werkzeuge — im Browser, ohne Upload",
    description:
      "Kostenlose PDF-Werkzeuge, die vollständig in deinem Browser laufen. PDFs zusammenführen, teilen, drehen, mit Wasserzeichen versehen, Bilder in PDF umwandeln und zurück – deine Dateien verlassen nie dein Gerät.",
  },
  {
    id: "compress-pdf",
    slug: "pdf-komprimieren",
    title: "PDF komprimieren — Dateigröße direkt im Browser reduzieren",
    description:
      "Verkleinere die Dateigröße eines PDFs direkt in deinem Browser, mit einstellbaren Komprimierungsstufen. Kostenlos, ohne Anmeldung, ohne Upload – deine Datei verlässt dein Gerät nicht.",
  },
  {
    id: "merge-pdf",
    slug: "pdf-zusammenfuehren",
    title: "PDF zusammenführen — mehrere Dateien im Browser kombinieren",
    description:
      "Kombiniere mehrere PDFs zu einer einzigen Datei, direkt in deinem Browser. Kostenlos, ohne Anmeldung, ohne Upload – deine Dateien verlassen dein Gerät nicht.",
  },
  {
    id: "split-pdf",
    slug: "pdf-teilen",
    title: "PDF teilen — Seitenbereich direkt im Browser extrahieren",
    description:
      "Teile ein PDF nach Seitenbereich, direkt in deinem Browser. Kostenlos, ohne Anmeldung, ohne Upload – deine Dateien bleiben auf deinem Gerät.",
  },
  {
    id: "rotate-pdf",
    slug: "pdf-drehen",
    title: "PDF drehen — Seitenausrichtung korrigieren",
    description:
      "Drehe alle Seiten eines PDFs oder nur ausgewählte, um 90°, 180° oder 270°, direkt in deinem Browser. Kostenlos und privat – die Datei verlässt dein Gerät nicht.",
  },
  {
    id: "image-to-pdf",
    slug: "bild-zu-pdf",
    title: "Bild zu PDF — JPG, PNG und WebP im Browser umwandeln",
    description:
      "Füge JPG-, PNG- und WebP-Bilder zu einem einzigen PDF zusammen, direkt in deinem Browser. Kostenlos, ohne Upload, ohne Anmeldung – die Dateien bleiben auf deinem Gerät.",
  },
  {
    id: "pdf-to-images",
    slug: "pdf-zu-bildern",
    title: "PDF zu Bildern — Seiten als PNG oder JPG exportieren",
    description:
      "Wandle jedes PDF Seite für Seite in PNG- oder JPG-Bilder um, in deinem Browser. Kostenlos, ohne Upload, ohne Konto – läuft vollständig auf deinem Gerät.",
  },
  {
    id: "pdf-to-word",
    slug: "pdf-zu-word",
    title: "PDF zu Word — PDF in ein bearbeitbares DOCX umwandeln",
    description:
      "Extrahiere den Text eines PDFs in ein bearbeitbares Word-Dokument (.docx), direkt in deinem Browser. Kostenlos, ohne Upload – eine ehrliche Textkonvertierung, kein falsches Layout-Versprechen.",
  },
  {
    id: "word-to-pdf",
    slug: "word-zu-pdf",
    title: "Word zu PDF — DOCX oder TXT im Browser umwandeln",
    description:
      "Verwandle eine Word-.docx- oder .txt-Datei in ein sauberes PDF, direkt in deinem Browser. Kostenlos, ohne Anmeldung, ohne Upload – dein Dokument verlässt dein Gerät nicht.",
  },
  {
    id: "add-watermark-to-pdf",
    slug: "wasserzeichen-zu-pdf",
    title: "Wasserzeichen zu PDF hinzufügen — kostenlos, privat, im Browser",
    description:
      "Füge jeder Seite eines PDFs ein Text-Wasserzeichen hinzu, direkt in deinem Browser. Kostenlos, ohne Upload, ohne Anmeldung – die Dateien bleiben auf deinem Gerät.",
  },
  {
    id: "reorder-pdf-pages",
    slug: "pdf-seiten-neu-anordnen",
    title: "PDF-Seiten neu anordnen — Reihenfolge im Browser ändern",
    description:
      "Sieh dir jede Seite in der Vorschau an und ändere die Reihenfolge eines PDFs mit einfachen Steuerelementen, dann lade die neu angeordnete Datei herunter. Kostenlos, ohne Anmeldung, ohne Upload.",
  },
  {
    id: "extract-pdf-pages",
    slug: "pdf-seiten-extrahieren",
    title: "PDF-Seiten extrahieren — Auswahl in einer neuen Datei speichern",
    description:
      "Wähle bestimmte Seiten oder Bereiche aus und lade ein neues PDF nur mit diesen Seiten herunter, direkt in deinem Browser. Kostenlos, ohne Anmeldung, ohne Upload.",
  },

  // Comparisons
  {
    id: "compare/pdf-vs-docx",
    slug: "vergleiche/pdf-oder-docx",
    title: "PDF oder DOCX — der Vergleich Punkt für Punkt",
    description:
      "PDF und DOCX im Vergleich bei Bearbeitbarkeit, Treue zum Original, Unterschrift, Sicherheit und Teilen. Finde das richtige Format für jede Aufgabe.",
  },
  {
    id: "compare/pdf-vs-jpg",
    slug: "vergleiche/pdf-oder-jpg",
    title: "PDF oder JPG — wann welches Format",
    description:
      "PDF oder JPG: wann scannen, wann fotografieren. Qualität, Dateigröße, OCR und Eignung für den Dokumenten-Workflow im Vergleich.",
  },
  {
    id: "compare/pdf-app-vs-online-pdf-tools",
    slug: "vergleiche/pdf-app-oder-online-tools",
    title: "PDF-App oder Online-PDF-Tools — was ist besser?",
    description:
      "Native PDF-Apps im Vergleich zu browserbasierten Tools: Geschwindigkeit, Datenschutz und Offline-Zugriff im Vergleich.",
  },

  // Use cases
  {
    id: "use-cases/freelancers",
    slug: "anwendungsfaelle/freiberufler",
    title: "PDF Editor für Freiberufler — Angebote und unterschriebene Dokumente",
    description:
      "Die Abläufe, die Freiberufler lieben: Angebote, unterschriebene Vereinbarungen und Rechnungen, alles vom Handy aus.",
  },
  {
    id: "use-cases/remote-work",
    slug: "anwendungsfaelle/remote-arbeit",
    title: "PDF Editor für Remote-Arbeit — Dokumente von überall",
    description:
      "Arbeite unterwegs mit Dokumenten: PDFs scannen, unterschreiben und teilen, egal auf welchem Gerät oder wo du bist.",
  },

  // Legal and meta
  {
    id: "privacy-policy",
    slug: "datenschutz",
    title: "Datenschutzerklärung",
    description:
      "Wie pdfeditconvert.top und hrhelperg s.r.o. mit deinen Daten umgehen.",
  },
  {
    id: "terms",
    slug: "nutzungsbedingungen",
    title: "Nutzungsbedingungen",
    description: "Die Bedingungen für die Nutzung von pdfeditconvert.top.",
  },
  {
    id: "contact",
    slug: "kontakt",
    title: "Kontakt — PDF Editor von hrhelperg s.r.o.",
    description:
      "Schreib dem Team hinter PDF Editor. E-Mail: info@hrhelperg.com.",
  },

  ...DE_GUIDE_ROUTES,
];
