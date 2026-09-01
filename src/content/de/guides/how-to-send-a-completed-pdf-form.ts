import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-a-completed-pdf-form",
  h1: "Ausgefülltes PDF-Formular versenden (einbetten und zustellen)",
  description:
    "Formular ausgefüllt – jetzt sauber zurückschicken. So bettest du die Antworten fest ein, damit sie sich nicht mehr ändern lassen, hängst die Datei richtig an, und bestätigst, dass sie ankommt, ohne dass Daten verloren gehen.",
  updated: "2026-06-01",
  intro: [
    "Ein Formular auszufüllen ist nur die halbe Arbeit; es unversehrt zurück an die absendende Person zu bringen, ist die andere Hälfte. Das ist die Rückreise – du hast ein Formular ausgefüllt, das dir jemand geschickt hat, und musst es jetzt so zustellen, dass deine Antworten genau so ankommen, wie du sie eingetragen hast, sich nicht versehentlich löschen lassen und in einem Format landen, das die Empfangsperson auch wirklich öffnen kann.",
    "Die beiden Dinge, die dabei schiefgehen können: Antworten, die unterwegs verschwinden (weil die Felddaten nicht gespeichert oder eingebettet wurden), und Dateien, die als unhandliche Fotos eines Bildschirms ankommen. Beides lässt sich mit ein paar bewussten Schritten vor dem Absenden vermeiden. Ein eingebetteter PDF-Anhang ist fast immer die richtige Wahl.",
    "Diese Anleitung zeigt, wie du das ausgefüllte Formular vorbereitest, wie du es versendest, und die kleinen Bestätigungen, die dir eine Runde „das Formular kam leer zurück“-E-Mails ersparen.",
  ],
  steps: [
    {
      title: "Prüfe zum Schluss noch einmal jede Antwort",
      body: "Geh das gesamte Formular noch einmal durch – auf leere Pflichtfelder, das Datum und deine Unterschrift. Ein fehlendes Feld jetzt zu entdecken ist deutlich günstiger, als wenn das Formular deshalb zu dir zurückkommt.",
    },
    {
      title: "Speichere die ausgefüllte Kopie richtig",
      body: "Exportiere oder speichere so, dass die Feldwerte in die Datei geschrieben werden. Überstehen deine Antworten ein Schließen und erneutes Öffnen nicht, hat das Programm nur gedruckt – wechsle zu einem, das Formulardaten tatsächlich speichert.",
    },
    {
      title: "Bette ein, damit die Antworten fest sitzen",
      body: "Bette das ausgefüllte Formular vor dem Versand ein. Dabei verschmelzen deine Antworten mit der Seite, sodass sie sich im Anzeigeprogramm der Empfangsperson nicht mehr bearbeiten oder löschen lassen und überall gleich angezeigt werden.",
    },
    {
      title: "Hänge das PDF direkt an",
      body: "Verschicke das eingebettete PDF als normalen E-Mail-Anhang, oder lade es auf das von der absendenden Person angegebene Portal hoch. Verzichte auf einen Screenshot oder ein Foto des Formulars, außer das ist ausdrücklich gewünscht.",
    },
    {
      title: "Bestätigen und eine Kopie behalten",
      body: "Notiere dir, dass du es verschickt hast, und behalte eine eigene Kopie der fertigen Datei. Geht es an ein Portal, achte auf eine Bestätigung am Bildschirm oder per E-Mail, dass der Upload erfolgreich war.",
    },
  ],
  tips: [
    "Einbetten ist die beste Angewohnheit beim Zurückschicken von Formularen – es garantiert, dass deine Antworten bei der Empfangsperson auch wirklich ankommen.",
    "Gib der Datei einen sinnvollen Namen wie „schmidt-bewerbung-ausgefuellt.pdf“, damit die Empfangsperson sie ablegen kann, ohne sie umzubenennen.",
    "Lehnt ein Portal die Datei wegen ihrer Größe ab, komprimiere sie, statt deine Antworten noch einmal einzutragen – der Inhalt bleibt dabei unverändert.",
    "Behalte deine eigene ausgefüllte Kopie; kommt es zu Rückfragen oder Unstimmigkeiten, brauchst du genau die Version, die du verschickt hast.",
    "Vorgaben von Behörden und Unternehmen unterscheiden sich – folge deshalb konkreten Einreichungshinweisen der absendenden Person, wenn sie den allgemeinen Schritten hier widersprechen.",
  ],
  mobileNote:
    "Auf dem Handy exportiert die App PDF Editor eine eingebettete, fertige Kopie, die du direkt aus dem Teilen-Menü verschicken kannst – per E-Mail, Portal-Upload oder Nachricht –, mit deinen Antworten fest in der Seite verankert. Das läuft alles auf dem Gerät, sodass die persönlichen Angaben auf dem Formular beim Versenden privat bleiben.",
  faq: [
    {
      q: "Wie stelle ich sicher, dass meine Antworten beim Versenden nicht verschwinden?",
      a: "Speichere so, dass die Feldwerte in die Datei geschrieben werden, und bette das Formular vor dem Versand ein. Einbetten verschmilzt deine Antworten mit der Seite, sodass sie sich nicht löschen lassen und in jedem Anzeigeprogramm gleich dargestellt werden.",
    },
    {
      q: "Sollte ich ein ausgefülltes Formular vor dem Versand per E-Mail einbetten?",
      a: "Ja, so gut wie immer. Bist du mit dem Bearbeiten fertig, sperrt das Einbetten die Antworten und verhindert, dass das Anzeigeprogramm der Empfangsperson sie verwirft oder verändert.",
    },
    {
      q: "Ist es in Ordnung, ein Foto des ausgefüllten Formulars zu verschicken?",
      a: "Nur, wenn genau das verlangt wird. Ein eingebettetes PDF ist sauberer, besser lesbar und leichter abzulegen. Fotos von Bildschirmen oder Ausdrucken kommen oft schief oder unscharf an.",
    },
    {
      q: "Was, wenn das Upload-Portal mein Formular ablehnt?",
      a: "Meist liegt es an einer Größen- oder Formatgrenze. Komprimiere das PDF oder prüfe die akzeptierten Formate – du musst es nicht neu ausfüllen. Der Inhalt bleibt nach der Komprimierung gleich.",
    },
    {
      q: "Sollte ich eine Kopie von dem behalten, was ich verschickt habe?",
      a: "Ja. Behalte deine eigene ausgefüllte Kopie für Rückfragen oder falls du erneut einreichen musst, damit du genau die Version wieder verschicken kannst, die du eingereicht hast.",
    },
  ],
  related: [
    {
      label: "Ausgefülltes PDF-Formular speichern",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "PDF-Formular ausfüllen",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "PDF-Formular zum Ausfüllen teilen",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Übermittlungsfehler bei PDF-Formularen",
      path: "/guides/pdf-form-submission-errors",
    },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
