import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-printing-correctly",
  h1: "PDF-Formular druckt nicht richtig? Leere Felder beheben",
  description:
    "Formular druckt mit leeren Feldern, verschobenem Text oder abgeschnittenen Rändern? Die formularspezifischen Druckprobleme – vor allem fehlende Feldwerte – und die Einstellungen, die jedes davon beheben.",
  updated: "2026-06-01",
  intro: [
    "Formulare drucken auf Arten schlecht, wie es bei gewöhnlichen PDFs nicht vorkommt. Am häufigsten und verwirrendsten: ausgefüllte Felder kommen leer aus dem Drucker – du hast am Bildschirm alles ausgefüllt, aber das Papier zeigt nur das leere Formular. Dicht dahinter: Feldtext, der von seiner Zeile abrutscht, Kontrollkästchen, die nicht mitdrucken, und Ränder, die abgeschnitten werden. Jedes davon hat eine konkrete, behebbare Ursache, die daran liegt, dass Formularfelder anders gedruckt werden als gewöhnlicher Seiteninhalt.",
    "Das Hauptproblem – leere Felder auf Papier – entsteht, weil ausgefüllte Antworten in der Feldebene des Formulars liegen und manche Druckwege diese Ebene komplett überspringen. Die Lösung ist entweder eine Druckeinstellung, die Formularfelder einschließt, oder das Einbetten des Formulars, damit die Antworten Teil der Seite werden. Die anderen Probleme drehen sich um Skalierung und Felddarstellung, jeweils mit eigener Einstellung.",
    "Diese Anleitung konzentriert sich auf die formularspezifischen Druckprobleme. Für allgemeine PDF-Druckprobleme wie falsche Seitengrößen bei beliebigen Dokumenten geht die breitere Druck-Anleitung weiter ins Detail.",
  ],
  steps: [
    {
      title: "Behebe leere Felder: Feldwerte drucken oder einbetten",
      body: "Drucken ausgefüllte Felder leer, aktiviere die Option zum Drucken von Formularfeldern (manchmal „Dokument und Markierungen“), oder bette das Formular vorher ein, damit die Antworten mit der Seite verschmelzen und immer mitdrucken.",
    },
    {
      title: "Behebe verschobenen Feldtext",
      body: "Druckt Feldtext an der falschen Stelle oder in der falschen Schriftart, stellt das Anzeigeprogramm die Felder beim Drucken anders dar. Einbetten fixiert das Erscheinungsbild, das du am Bildschirm siehst, sodass es genauso gedruckt wird.",
    },
    {
      title: "Behebe fehlende Kontrollkästchen und Markierungen",
      body: "Häkchen, die auf Papier verschwinden, sind dasselbe Feldebenen-Problem wie leerer Text. Die Einstellung zum Drucken von Formularfeldern oder ein Einbetten-Schritt bringt sie zusammen mit dem Rest deiner Antworten zurück.",
    },
    {
      title: "Behebe abgeschnittene Ränder",
      body: "Stelle die Skalierung auf „Anpassen“ oder 100 % statt auf einen eigenen Zoomwert, und wähle das passende Papierformat für das Formular. Das ist ein Skalierungsproblem, getrennt vom Feldebenen-Problem, aber häufig bei dicht beschriebenen Formularen.",
    },
    {
      title: "Drucke eine Seite zur Kontrolle",
      body: "Drucke nach dem Ändern der Einstellungen zuerst eine einzelne Seite. Prüfe, ob Antworten, Ausrichtung und Ränder stimmen, bevor du das gesamte mehrseitige Formular auf Papier bringst.",
    },
  ],
  tips: [
    "Einbetten vor dem Drucken ist die universelle Lösung für leere oder verschobene Felder – ein eingebettetes Formular druckt seine Antworten überall, ganz ohne Sondereinstellung.",
    "Zeigen sich Antworten am Bildschirm, aber nicht auf Papier, liegt es an einer Druckeinstellung, nicht an der Datei – such nach der Option für Formularfelder.",
    "Skalierungs- und Papierformat-Probleme sind vom Problem mit leeren Feldern getrennt; behebe sie mit „Anpassen“/100 % und passendem Papier.",
    "Flache, gescannte Formulare leiden nicht unter dem Problem leerer Felder, weil ihre Antworten schon Teil der Seite sind.",
    "Die Namen der Druckoptionen unterscheiden sich je nach App und Drucker, halte also Ausschau nach allem, was Formularfelder, Markierungen oder Kommentare erwähnt.",
  ],
  mobileNote:
    "Druck-Shortcuts auf dem Handy können Feldwerte genauso weglassen wie am Computer. Bette das ausgefüllte Formular in der App PDF Editor vor dem Drucken oder dem Senden an einen Drucker ein, damit jede Antwort fest in der Seite steckt und zuverlässig mitdruckt.",
  faq: [
    {
      q: "Warum druckt mein Formular mit leeren Feldern?",
      a: "Die ausgefüllten Antworten liegen in der Feldebene des Formulars, und dein Druckweg überspringt sie. Aktiviere die Option zum Drucken von Formularfeldern, oder bette das Formular ein, damit die Antworten Teil der Seite werden und immer mitdrucken.",
    },
    {
      q: "Warum druckt der Feldtext an der falschen Stelle oder in der falschen Schriftart?",
      a: "Das Anzeigeprogramm stellt Felder beim Drucken anders dar. Bette das Formular zuerst ein – Einbetten fixiert das Erscheinungsbild auf das, was du am Bildschirm siehst, sodass es identisch gedruckt wird.",
    },
    {
      q: "Meine Häkchen drucken nicht mit – warum?",
      a: "Dieselbe Ursache wie leerer Text: Kontrollkästchen sind Teil der Feldebene. Die Einstellung zum Drucken von Formularfeldern oder ein Einbetten-Schritt druckt sie zusammen mit deinen anderen Antworten.",
    },
    {
      q: "Warum ist mein gedrucktes Formular an den Rändern abgeschnitten?",
      a: "Das ist eine Skalierungs- oder Papierformat-Diskrepanz, kein Feldproblem. Stelle die Skalierung auf „Anpassen“ oder 100 % und wähle das zur Seitengröße des Formulars passende Papierformat.",
    },
    {
      q: "Worin unterscheidet sich das von allgemeinen PDF-Druckproblemen?",
      a: "Das hier behandelt formularspezifische Probleme – vor allem leere Feldwerte. Die allgemeine PDF-Druck-Anleitung behandelt dokumentweite Probleme wie falsche Größen und Beschneidung bei jedem PDF.",
    },
  ],
  related: [
    {
      label: "Ausgefülltes PDF-Formular drucken",
      path: "/guides/how-to-print-a-filled-pdf-form",
    },
    {
      label: "PDF-Druckprobleme beheben",
      path: "/guides/how-to-fix-pdf-printing-issues",
    },
    { label: "PDF-Formular funktioniert nicht?", path: "/guides/pdf-form-not-working" },
    { label: "PDF-Formularfehler beheben", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "PDF-Formulare", path: "/pdf-forms" },
};

export default content;
