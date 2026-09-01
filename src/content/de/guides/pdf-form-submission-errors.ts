import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-submission-errors",
  h1: "Übermittlungsfehler bei PDF-Formularen (wenn das Senden fehlschlägt)",
  description:
    "Die Senden-Schaltfläche eines Formulars schlägt fehl oder tut nichts? Warum eingebaute Senden-Schaltflächen vom Server des Herausgebers abhängen, was die Fehler bedeuten, und der zuverlässige manuelle Weg, dein Formular trotzdem zu verschicken.",
  updated: "2026-06-01",
  intro: [
    "Manche PDF-Formulare haben eine eingebaute Senden-Schaltfläche – du drückst sie, und das Formular soll sich selbst irgendwohin schicken. Funktioniert das, ist es praktisch; funktioniert es nicht, ist es rätselhaft, weil die Schaltfläche einfach fehlschlägt, einen kryptischen Fehler wirft, oder scheinbar gar nichts tut. Der Grund: Eine Senden-Schaltfläche verschickt das Formular nicht von allein – sie versucht, die Daten an ein Ziel zu übergeben, das der Herausgeber des Formulars eingerichtet hat, und genau diese Verbindung ist oft der Teil, der kaputtgeht.",
    "Diese Senden-Schaltflächen schicken die Formulardaten meist an eine Webadresse oder E-Mail-Adresse, die von der Person kontrolliert wird, die das Formular erstellt hat. Ist dieser Server offline, hat sich die Adresse geändert, oder blockiert dein Anzeigeprogramm die Aktion aus Sicherheitsgründen, schlägt die Übermittlung fehl – und nichts davon kannst du von deiner Seite aus beheben. Die gute Nachricht: Es gibt fast immer eine zuverlässige manuelle Alternative.",
    "Diese Anleitung erklärt, was Senden-Schaltflächen wirklich tun, was die üblichen Fehler bedeuten, und wie du dein ausgefülltes Formular an sein Ziel bringst, wenn die Schaltfläche nicht mitspielt. Das unterscheidet sich von Upload-Fehlern auf einem Web-Portal, was ein anderes Problem ist.",
  ],
  steps: [
    {
      title: "Verstehe, was Senden eigentlich macht",
      body: "Die Senden-Schaltfläche eines Formulars schickt die Felddaten an ein Ziel – eine Webadresse oder E-Mail –, das der Herausgeber eingerichtet hat. Sie ist nicht in sich abgeschlossen; sie hängt davon ab, dass dieses Ziel noch funktioniert und dein Anzeigeprogramm die Aktion erlaubt.",
    },
    {
      title: "Lies die Fehlermeldung nach Hinweisen",
      body: "Eine Meldung über einen Server, das Netzwerk oder eine blockierte Aktion deutet auf das Ziel oder eine Sicherheitseinschränkung hin, nicht auf deine Datei. „Nichts passiert“ bedeutet oft, dass dein Anzeigeprogramm die Übermittlung still aus Sicherheitsgründen blockiert hat.",
    },
    {
      title: "Probiere eine vollwertige PDF-App",
      body: "Einfache Anzeigeprogramme und Browser blockieren oder ignorieren häufig Senden-Aktionen. Öffnest du das ausgefüllte Formular in einer eigenen PDF-App, funktioniert die Schaltfläche manchmal wie vorgesehen.",
    },
    {
      title: "Weiche auf manuelles Versenden aus",
      body: "Schlägt die Schaltfläche weiterhin fehl, speichere und bette das ausgefüllte Formular ein und verschick es dann manuell – per E-Mail an die im Formular angegebene Adresse, oder hochgeladen auf das Portal des Herausgebers. Das umgeht das defekte Senden komplett.",
    },
    {
      title: "Bestätigen und eine Kopie behalten",
      body: "Verschickst du manuell, behalte deine eingebettete Kopie und achte auf eine Bestätigung. Sollte das Formular an ein bestimmtes Postfach oder Portal gehen, findest du in den Hinweisen des Herausgebers, wohin.",
    },
  ],
  tips: [
    "Eine fehlschlagende Senden-Schaltfläche liegt meist am Ziel des Herausgebers, nicht an deiner Datei – manuelles Versenden ist die verlässliche Alternative.",
    "Speichere und bette deine Antworten ein, bevor du manuell verschickst, damit die Empfangsperson eine fest sitzende, vollständige Kopie bekommt.",
    "„Nichts passiert“ beim Senden bedeutet oft, dass dein Anzeigeprogramm die Aktion aus Sicherheitsgründen blockiert hat; eine eigene App lässt sie manchmal zu.",
    "Übermittlungsfehler unterscheiden sich von Upload-Fehlern eines Portals – lädst du eine Datei auf eine Website hoch, ist das eine andere Lösung.",
    "Prüfe das Formular auf eine Kontakt-E-Mail oder Hinweise; Herausgeber bieten oft einen manuellen Weg genau für diesen Fall an.",
  ],
  mobileNote:
    "Schlägt die Senden-Schaltfläche eines Formulars auf dem Handy fehl, lässt dich die App PDF Editor das ausgefüllte Formular einbetten und manuell aus dem Teilen-Menü verschicken – per E-Mail oder Portal-Upload –, sodass eine defekte Senden-Aktion deine Antworten nie festhält. Das läuft alles auf dem Gerät.",
  faq: [
    {
      q: "Warum funktioniert die Senden-Schaltfläche meines PDF-Formulars nicht?",
      a: "Die Schaltfläche schickt deine Daten an ein Ziel, das der Herausgeber eingerichtet hat – einen Server oder eine E-Mail-Adresse. Ist das offline, geändert, oder blockiert dein Anzeigeprogramm die Aktion aus Sicherheitsgründen, schlägt sie fehl. Das liegt außerhalb deiner Kontrolle; verschick das Formular stattdessen manuell.",
    },
    {
      q: "Was bedeutet es, wenn Senden nichts tut?",
      a: "Dein Anzeigeprogramm hat die Senden-Aktion höchstwahrscheinlich still aus Sicherheitsgründen blockiert. Probiere eine vollwertige PDF-App, oder überspringe die Schaltfläche und verschick das ausgefüllte Formular manuell.",
    },
    {
      q: "Wie reiche ich das Formular ein, wenn die Schaltfläche defekt ist?",
      a: "Speichere und bette das ausgefüllte Formular ein, und verschick es dann manuell: per E-Mail an die im Formular angegebene Adresse oder hochgeladen auf das Portal des Herausgebers. Das umgeht die Senden-Aktion komplett.",
    },
    {
      q: "Ist ein Übermittlungsfehler dasselbe wie ein Upload-Fehler?",
      a: "Nein. Ein Übermittlungsfehler bedeutet, dass die eingebaute Senden-Schaltfläche des Formulars fehlschlägt. Ein Upload-Fehler bedeutet, dass eine Website eine Datei ablehnt, die du hochlädst. Beide haben unterschiedliche Ursachen und Lösungen.",
    },
    {
      q: "Könnten die Formulardaten trotz einer Fehlermeldung angekommen sein?",
      a: "Vermutlich nicht – sahst du eine Fehlermeldung, geh davon aus, dass sie nicht angekommen sind. Verschick manuell, behalte deine eigene Kopie, und achte auf eine Bestätigung, damit du weißt, dass sie das Ziel erreicht hat.",
    },
  ],
  related: [
    {
      label: "Ausgefülltes PDF-Formular versenden",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "PDF-Upload-Fehler beheben",
      path: "/guides/how-to-fix-pdf-upload-errors",
    },
    { label: "PDF-Formular funktioniert nicht?", path: "/guides/pdf-form-not-working" },
    {
      label: "Kompatibilitätsprobleme bei PDF-Formularen",
      path: "/guides/pdf-form-compatibility-problems",
    },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
