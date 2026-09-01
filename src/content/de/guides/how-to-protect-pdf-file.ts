import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-pdf-file",
  h1: "PDF-Datei mit Passwort schützen",
  description:
    "Füge einem PDF am Handy oder Computer Passwortschutz und Verschlüsselung hinzu. Praktische Anleitung mit der PDF-Editor-App.",
  updated: "2026-05-11",
  intro: [
    "Viele Dokumente sollten nicht als ungeschütztes PDF verschickt werden: Gehaltsabrechnungen, unterschriebene Verträge, gescannte Ausweise, NDA-Kopien, medizinische Unterlagen, Finanzunterlagen. Ein Passwort mit richtiger Verschlüsselung sorgt dafür, dass nur die vorgesehene Empfängerin oder der vorgesehene Empfänger die Datei öffnen kann — selbst wenn die E-Mail weitergeleitet, abgefangen wird oder für immer in einem Firmenpostfach liegen bleibt.",
    "Diese Anleitung zeigt Schritt für Schritt, wie du ein PDF mit der PDF-Editor-App am iPhone oder Android mit einem Passwort schützt. Außerdem geht es darum, was du vermeiden solltest: schwache Passwörter, veraltete Verschlüsselungsverfahren und den häufigen Fehler, das Passwort über denselben Kanal wie das Dokument zu verschicken.",
    "Am Ende hast du einen Ablauf, den du in unter einer Minute auf jedes sensible Dokument anwenden kannst — mit starker AES-256-Verschlüsselung, die auch unternehmensinterne Sicherheitsrichtlinien erfüllt.",
  ],
  steps: [
    {
      title: "Öffne das PDF, das du schützen möchtest",
      body: "Füge das Dokument aus Dateien, iCloud Drive, Google Drive oder einer beliebigen Teilen-App zu PDF Editor hinzu. Der gesamte Ablauf läuft lokal — deine Datei verlässt dein Gerät nicht.",
    },
    {
      title: "Tippe im Werkzeugmenü auf „Schützen“",
      body: "Du findest die Funktion bei den Dokumentwerkzeugen. Wähle „Mit Passwort schützen“, um beim Öffnen ein Passwort zu verlangen, oder „Berechtigungen einschränken“ für einen reinen Lesezugriff.",
    },
    {
      title: "Wähle ein starkes Passwort",
      body: "Mindestens 12 Zeichen, mit einer Mischung aus Buchstaben, Zahlen und Sonderzeichen. Verzichte auf gängige Wörter und persönliche Angaben wie Geburtsdaten oder Namen. Hast du einen Passwort-Manager, lass ihn dir eines generieren — das ist der richtige Weg.",
    },
    {
      title: "Bestätige das Passwort",
      body: "Gib es ein zweites Mal ein, um Tippfehler auszuschließen. Ist die Datei erst verschlüsselt, gibt es bei einem Tippfehler keine Möglichkeit, wieder heranzukommen.",
    },
    {
      title: "Lege Einschränkungen fest (optional)",
      body: "Erlaube das Ansehen, aber blockiere Drucken, das Kopieren von Text oder das Extrahieren von Seiten. Praktisch, wenn die Empfängerin oder der Empfänger das Dokument lesen soll, du aber nicht willst, dass einzelne Teile weiterverbreitet werden.",
    },
    {
      title: "Speichere als neue Datei",
      body: "Bewahre die ungeschützte Originaldatei an einem sicheren Ort auf — vergisst du das Passwort, hast du trotzdem noch Zugriff. Speichere die geschützte Kopie unter einem eindeutig anderen Namen.",
    },
    {
      title: "Teile das Passwort über einen separaten Kanal",
      body: "Schick das verschlüsselte PDF per E-Mail, das Passwort dagegen per SMS oder Anruf. Schreib niemals beides in dieselbe E-Mail — wird das E-Mail-Konto kompromittiert, sind sonst beide Informationen offen. Eine kleine Gewohnheit, die die meisten realen Zwischenfälle verhindert.",
    },
  ],
  tips: [
    "AES-256 ist die richtige Verschlüsselung — die App verwendet sie standardmäßig. Bietet ein Tool „kompatible“ oder „ältere“ Verschlüsselung an, ist die meist unsicher; lass die Finger davon.",
    "Verwende das Passwort nicht für mehrere Dokumente. Wird eines davon bekannt, soll das nicht gleich einen Dominoeffekt auslösen.",
    "Ist die Empfängerin oder der Empfänger technisch weniger versiert, reicht eine einfache Anweisung: „Für das Öffnen der Datei brauchst du dieses Passwort: XYZ“ genügt völlig.",
    "Nutze wenn möglich einen Passwort-Manager, um Passwörter sicher zu teilen — die meisten bieten eine Teilen-Funktion, für die nicht beide Seiten ein Konto brauchen.",
    "Bei besonders sensiblen Dateien (rechtlich, medizinisch, finanziell) sind sichere Freigabelinks von 1Password oder Bitwarden die bessere Wahl, statt das Passwort per SMS zu schicken.",
  ],
  mobileNote:
    "Das Schützen eines PDF läuft vollständig auf dem Gerät ab. Sogar im Flugmodus kannst du einen Vertrag absichern und ihn verschicken, sobald wieder eine Verbindung besteht. Praktisch für alle, die unterwegs in der Hotellobby oder am Flughafen sensible Dokumente bearbeiten — der Schutz passiert lokal, eine Verbindung brauchst du erst für den eigentlichen Versand.",
  faq: [
    {
      q: "Was, wenn ich das Passwort vergesse?",
      a: "Es gibt keine Hintertür. Starke Verschlüsselung bedeutet: Ohne Passwort gibt es keine Wiederherstellung. Speichere Passwörter deshalb immer in einem Passwort-Manager, statt dich auf dein Gedächtnis zu verlassen.",
    },
    {
      q: "Verlangsamt das Passwort das Öffnen der Datei?",
      a: "Keine spürbare Verzögerung. Die Entschlüsselung passiert einmalig beim Öffnen und dauert selbst auf älteren Geräten nur Millisekunden.",
    },
    {
      q: "Kann ich das Passwort später wieder entfernen?",
      a: "Ja, sofern du das Passwort kennst. Öffne das geschützte PDF, gib das Passwort ein und wähle dann im Menü „Schützen“ die Option „Schutz entfernen“.",
    },
    {
      q: "Ist das Passwort wirklich sicher, oder ist das nur Sicherheitstheater?",
      a: "Echte Sicherheit. AES-256 mit einem starken Passwort ist dieselbe Verschlüsselung, die auch Unternehmenssysteme, Passwort-Manager und viele Banking-Apps verwenden. Die Schwachstelle ist immer das Passwort selbst — wähl also ein starkes.",
    },
    {
      q: "Was ist mit dem Schwärzen von Inhalten?",
      a: "Schwärzen ist etwas anderes als Passwortschutz. Beim Schwärzen wird Inhalt dauerhaft entfernt (etwa ein geschwärzter Name); Passwortschutz behält den Inhalt bei, verlangt aber eine Authentifizierung zum Ansehen. Bei sensiblen Dokumenten kann beides sinnvoll sein — schwärze, was nicht in der Datei stehen soll, und schütze den Rest mit einem Passwort.",
    },
  ],
  related: [
    { label: "PDF-Sicherheit — vollständiger Überblick", path: "/pdf-security" },
    { label: "PDFs unterschreiben, bevor du sie schützt", path: "/sign-pdf" },
    { label: "PDF-Workflows für Unternehmen", path: "/pdf-for-business" },
  ],
  parentHub: { label: "PDF-Sicherheit", path: "/pdf-security" },
};

export default content;
