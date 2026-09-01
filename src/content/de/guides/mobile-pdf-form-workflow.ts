import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "mobile-pdf-form-workflow",
  h1: "Der mobile Workflow für PDF-Formulare (vom Empfang bis zum Versand)",
  description:
    "Eine wiederholbare, handyzentrierte Routine für Formulare: empfangen, in der richtigen App öffnen, ausfüllen, unterschreiben, einbetten, senden. Der komplette Ablauf ganz ohne Computer.",
  updated: "2026-06-01",
  intro: [
    "Formulare gehören zu den PDF-Aufgaben, die sich wirklich am besten für das Handy eignen. Sie kommen per E-Mail an, du füllst sie in der Hand aus, und sie gehen auf demselben Weg zurück – kein Computer nötig, in keinem einzigen Schritt. Der Trick liegt nicht in einem einzelnen Werkzeug, sondern in einer wiederholbaren Routine, sodass jedes Formular, interaktiv oder flach, denselben Weg vom Posteingang bis zum Versand nimmt.",
    "Diese Anleitung zeigt diesen Workflow von Anfang bis Ende. Er besteht bewusst jedes Mal aus denselben fünf Schritten: Formular in eine geeignete App holen, ausfüllen, unterschreiben, einbetten, verschicken. Sitzt das erst einmal im Muskelgedächtnis, wird aus einem Formular, das früher „warten, bis ich am Schreibtisch bin“ bedeutete, eine Zweiminuten-Aufgabe zwischendurch.",
    "Er funktioniert für beide Formulartypen. Interaktive tippst du aus; flache Scans beschreibst du. Der Workflow selbst ändert sich nicht – nur der Schritt des Ausfüllens passt sich an.",
  ],
  steps: [
    {
      title: "Empfange und sichere das Formular",
      body: "Landet ein Formular in einer E-Mail oder Nachricht, speichere es an einem Ort, den du kontrollierst – Dateien oder den Speicher deines Handys –, statt in einer Vorschau zu arbeiten, die Formularfelder möglicherweise ignoriert.",
    },
    {
      title: "Öffne es in einer formularfähigen App",
      body: "Öffne die gespeicherte Datei in der App PDF Editor. Sie erkennt vorhandene interaktive Felder und lässt dich bei nicht interaktiven Formularen Text hinzufügen. Allein dieser Schritt vermeidet die meisten „Ich kann nicht tippen“-Sackgassen.",
    },
    {
      title: "Fülle je nach Formulartyp aus",
      body: "Tippe in interaktive Felder, oder platziere Text und Häkchen auf einem nicht interaktiven Formular. Zoome für mehr Präzision hinein, arbeite dich von oben nach unten durch, und überspringe keine Pflichtfelder.",
    },
    {
      title: "Unterschreibe im selben Vorgang",
      body: "Ergänze deine gespeicherte Unterschrift im Unterschriftsfeld, ohne die App zu wechseln. Erledigst du das in einem Durchgang, musst du nicht exportieren, erneut öffnen und alles neu platzieren.",
    },
    {
      title: "Einbetten und verschicken",
      body: "Bette das ausgefüllte Formular ein, damit die Antworten fest sitzen, und verschicke es dann über das Teilen-Menü – per E-Mail, Portal oder Nachricht. Behalte das leere Original für das nächste Mal.",
    },
  ],
  tips: [
    "Der ganze Sinn liegt in der Wiederholbarkeit: dieselben fünf Schritte bei jedem Formular, sodass es keine Entscheidung mehr ist, sondern eine Gewohnheit.",
    "Speichere Formulare aus E-Mail-Vorschauen heraus, bevor du sie ausfüllst – dieser eine Schritt verhindert den häufigsten Frust mit mobilen Formularen.",
    "Fülle aus und unterschreibe in einem Durchgang, um erneutes Hinzufügen und Neu-Platzieren von Antworten zu vermeiden.",
    "Bette vor dem Versand ein, damit die Empfangsperson deine Antworten genau so sieht, wie du sie eingetragen hast.",
    "Lege einen Ordner „Formulare“ mit leeren Vorlagen an, damit du beim erneuten Ausfüllen immer eine frische, saubere Kopie hast.",
  ],
  mobileNote:
    "Die App PDF Editor ist genau für diesen Ablauf gebaut: Felder erkennen, ausfüllen, unterschreiben, einbetten, exportieren – alles auf dem Gerät, ohne dass etwas hochgeladen wird. Weil jeder Schritt in einer einzigen App stattfindet, läuft der gesamte Weg vom Empfang bis zum Versand, ohne dass du je zum Laptop greifen musst.",
  faq: [
    {
      q: "Kann ich PDF-Formulare wirklich komplett auf dem Handy erledigen?",
      a: "Ja. Formulare kommen per E-Mail an und gehen auf demselben Weg zurück, und eine geeignete PDF-App übernimmt Ausfüllen, Unterschreiben, Einbetten und Exportieren – der komplette Workflow braucht also keinen Computer.",
    },
    {
      q: "Ändert sich der Workflow bei flachen gegenüber interaktiven Formularen?",
      a: "Nur der Schritt des Ausfüllens. Bei interaktiven Formularen tippst du, bei nicht interaktiven platzierst du Text darüber. Empfangen, Unterschreiben, Einbetten und Versenden sind bei beiden identisch.",
    },
    {
      q: "Warum Formulare in einer eigenen App öffnen statt in der E-Mail?",
      a: "E-Mail-Vorschauen und einfache Anzeigeprogramme ignorieren häufig Formularfelder, sodass Tippen unmöglich erscheint. Öffnest du die gespeicherte Datei in einer eigenen PDF-App, werden die Felder aktiv, und diese Sackgasse entfällt.",
    },
    {
      q: "Warum vor dem Versand einbetten?",
      a: "Einbetten verschmilzt deine Antworten mit der Seite, sodass sie sich im Anzeigeprogramm der Empfangsperson nicht löschen oder verändern lassen und überall gleich angezeigt werden.",
    },
    {
      q: "Ist der mobile Formular-Workflow privat?",
      a: "Mit der App PDF Editor läuft jeder Schritt auf dem Gerät, die eingegebenen persönlichen Angaben werden also nicht hochgeladen. Nutze bei sensiblen Formularen für die Einreichung den offiziellen Kanal der Empfangsstelle.",
    },
  ],
  related: [
    {
      label: "PDF-Formulare auf iPhone ausfüllen",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "PDF-Formulare auf Android ausfüllen",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "Ausgefülltes PDF-Formular versenden",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "PDF auf dem Handy unterschreiben",
      path: "/guides/how-to-sign-pdf-on-phone",
    },
    { label: "PDF Editor – ausfüllen und unterschreiben", path: "/pdf-editor" },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
