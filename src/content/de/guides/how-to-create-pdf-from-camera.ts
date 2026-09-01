import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-pdf-from-camera",
  h1: "PDF mit der Handykamera erstellen",
  description:
    "Verwandle ein Kamerafoto in ein PDF – und erfahre, warum ein richtiger Scan ein rohes Foto schlägt. Schnelle Aufnahme für Belege und Whiteboards, Scannen für Dokumente.",
  updated: "2026-05-23",
  intro: [
    "Die Kamera auf etwas zu richten und ein PDF herauszubekommen ist der schnellste Weg, die physische Welt als Dokument festzuhalten — eine Quittung, ein Whiteboard nach einem Meeting, eine Buchseite, ein Aushang an der Wand. Aber zwischen einem rohen, in ein PDF verpackten Foto und einem richtigen Scan besteht ein echter Unterschied, und zu wissen, was du brauchst, bewahrt dich vor einem schiefen, von Reflexionen durchzogenen Ergebnis.",
    "Diese Anleitung deckt beides ab: schnelle Aufnahme, bei der ein Kamerafoto mit dem kostenlosen Tool Bild zu PDF zu einer PDF-Seite wird, und richtiges Scannen, bei dem die PDF-Editor-App die Kanten des Dokuments erkennt, den Winkel korrigiert und den Text erkennen kann. Beides läuft auf deinem Gerät, ohne dass irgendetwas hochgeladen wird.",
    "Für einen Schnappschuss, den du nur zu den Akten legen musst, reicht die schnelle Aufnahme. Für alles, was wie ein Dokument aussehen muss — flach, rechtwinklig, lesbar — lohnt sich der zusätzliche Moment fürs Scannen.",
  ],
  steps: [
    {
      title: "Entscheide: schnelle Aufnahme oder richtiger Scan",
      body: "Eine Quittung für deine eigenen Unterlagen darf ein schnelles Foto sein. Ein Dokument, das du verschickst oder klar lesen musst, verdient einen richtigen Scan mit Kantenerkennung und Winkelkorrektur.",
    },
    {
      title: "Schnelle Aufnahme: gut fotografieren",
      body: "Fotografiere senkrecht von oben bei gleichmäßigem Licht, fülle den Rahmen mit der Seite aus und vermeide Schatten von deiner Hand oder deinem Handy. Ein gutes Foto ergibt eine gute PDF-Seite.",
    },
    {
      title: "Verwandle das Foto in ein PDF",
      body: "Öffne das Tool Bild zu PDF, füge das Foto (oder mehrere) hinzu, bring sie in die richtige Reihenfolge und erstelle das PDF. Jede Aufnahme wird zu einer Seite.",
    },
    {
      title: "Richtiger Scan: nutze den Scanner der App",
      body: "Nutze in der PDF-Editor-App die Scan-Funktion. Sie findet die Kanten des Dokuments automatisch, begradigt die Perspektive und säubert die Seite, sodass sie wie ein Scan wirkt, nicht wie ein Schnappschuss.",
    },
    {
      title: "Mehrere Seiten nacheinander erfassen",
      body: "Bei einem mehrseitigen Dokument lässt dich der Scanner Seite für Seite in ein einziges PDF aufnehmen und hält dabei die Reihenfolge ein.",
    },
    {
      title: "Mach es bei Bedarf durchsuchbar",
      body: "Ein rohes Foto hat keine Textebene. Die App kann eine Texterkennung durchführen, damit die aufgenommenen Seiten durchsuchbar werden — nützlich für alles, was du später über seinen Inhalt wiederfinden musst.",
    },
  ],
  tips: [
    "Ein rohes Foto ist ein Bild von einem Dokument; ein Scan ist eine korrigierte, begradigte, lesbare Version. Richte den Aufwand danach, wie das Ergebnis genutzt wird.",
    "Gleichmäßiges Licht und ein senkrechter Winkel bringen mehr für eine aufgenommene Seite als jeder Filter. Reflexionen und Schatten lassen sich leichter vermeiden als nachträglich korrigieren.",
    "Ein dunkler, einfarbiger Hintergrund hinter der Seite hilft der Kantenerkennung, das Dokument sauber zu finden.",
    "Sowohl aufgenommene Fotos als auch Scans können groß werden — komprimiere das PDF, wenn es per E-Mail verschickt oder auf ein Portal hochgeladen werden soll.",
    "Die schnelle Aufnahme hat keinen durchsuchbaren Text. Musst du das Dokument später durchsuchen können, scanne mit Texterkennung, statt es nur zu fotografieren.",
  ],
  mobileNote:
    "Deine Kamera hast du ohnehin schon in der Hand, weshalb das Erfassen von Dokumenten eine Aufgabe ist, die aufs Handy gehört. Die PDF-Editor-App scannt mit automatischer Kantenerkennung, Mehrseitenaufnahme und Texterkennung — alles offline — und macht aus dem, was vor dir liegt, direkt vor Ort ein sauberes, teilbares PDF.",
  faq: [
    {
      q: "Was ist der Unterschied zwischen einem Dokument fotografieren und scannen?",
      a: "Ein Foto ist ein rohes Bild, verpackt in ein PDF — gut genug für schnelle Notizen. Ein Scan erkennt die Seitenkanten, korrigiert den Winkel und begradigt die Seite, sodass sie wie ein echtes Dokument wirkt. Scanne alles, was du verschickst oder klar lesen musst.",
    },
    {
      q: "Kann ich aus einem einzelnen Kamerafoto ein PDF machen?",
      a: "Ja. Mach das Foto und nutze dann das Tool Bild zu PDF, um es (oder mehrere) in ein PDF zu verwandeln, eine Seite pro Aufnahme.",
    },
    {
      q: "Ist ein per Kamera erstelltes PDF durchsuchbar?",
      a: "Nicht bei einem rohen Foto — es gibt keine Textebene. Die PDF-Editor-App kann beim Scannen eine Texterkennung durchführen, sodass das Ergebnis durchsuchbar ist.",
    },
    {
      q: "Werden meine erfassten Dokumente hochgeladen?",
      a: "Nein. Sowohl das Tool Bild zu PDF als auch der Scanner der App arbeiten auf deinem Gerät, sodass die erfassten Dokumente privat bleiben.",
    },
    {
      q: "Wie erfasse ich mehrere Seiten in einem PDF?",
      a: "Nutze den Scanner der App, der dich Seite für Seite in ein einziges Dokument aufnehmen lässt und dabei die Reihenfolge einhält. Auch das Tool Bild zu PDF kombiniert mehrere Fotos zu einer Datei.",
    },
  ],
  related: [
    { label: "PDF scannen — Papier mit der Kamera erfassen", path: "/scan-to-pdf" },
    { label: "Bild zu PDF — Fotos in ein PDF verwandeln", path: "/image-to-pdf" },
    { label: "Dokumente am Handy zu PDF scannen", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Fotos auf dem iPhone in PDF umwandeln", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "PDF scannen", path: "/scan-to-pdf" },
};

export default content;
