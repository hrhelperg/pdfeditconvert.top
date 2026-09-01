import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-wont-my-pdf-open",
  h1: "Warum öffnet sich mein PDF nicht? Ursachen und praktische Lösungen",
  description:
    "Ein PDF, das sich weigert zu öffnen, ist fast immer eine von fünf Ursachen. Wie du beschädigte Downloads, Passwortsperren, Anzeigefehler und alte Dateien erkennst – und was jeweils hilft.",
  updated: "2026-05-29",
  intro: [
    "Du doppelklickst auf ein PDF – und nichts passiert. Oder das Anzeigeprogramm zeigt einen Fehler, hängt sich auf oder verlangt plötzlich ein Passwort, mit dem du nicht gerechnet hast. Eigentlich sollten PDFs einfach funktionieren, und meistens tun sie das auch – wenn nicht, lohnt es sich, die kurze Liste möglicher Ursachen zu kennen.",
    "Hinter einem hartnäckigen PDF stecken eigentlich immer nur wenige Ursachen: ein unvollständiger Download, ein passwortgeschütztes Dokument, ein Anzeigeprogramm, das nicht zur PDF-Version passt, eine fehlerhafte Export-Datei oder ein Format, das nur wie ein PDF aussieht. Für jede dieser Ursachen gibt es eine klare, wiederholbare Lösung.",
    "Diese Anleitung geht die Diagnosen der Reihe nach durch, in der Reihenfolge, in der sich die Prüfung lohnt, mit dem passenden Werkzeug für jeden Fall. Bei den meisten Lösungen geht es darum, das richtige Problem zu erkennen – nicht darum, einen fortgeschrittenen Trick zu lernen.",
  ],
  steps: [
    {
      title: "Lade die Datei zuerst noch einmal herunter",
      body: "Ein abgebrochener Download ist mit Abstand der häufigste Grund, warum sich ein PDF nicht öffnen lässt. Die Datei erneut herunterzuladen behebt das Problem oft innerhalb von Sekunden. Öffnet sie sich danach immer noch nicht, stimmt die Dateigröße mit der Quelle überein, und die Quelle lädt sie weiterhin normal, ist ein fehlerhafter Download als Ursache ausgeschlossen.",
    },
    {
      title: "Prüfe, ob das PDF passwortgeschützt ist",
      body: "Manche Anzeigeprogramme zeigen statt einer Passwortabfrage nur eine allgemeine Fehlermeldung. Kommt die Datei von einer Bank, vom Arbeitgeber oder von einer Kanzlei, geh davon aus, dass ein Passwort dahintersteckt. Die ursprüngliche Absenderin oder der Absender kennt es.",
    },
    {
      title: "Probiere ein anderes Anzeigeprogramm",
      body: "Browser, Vorschau unter macOS, Adobe Acrobat und mobile Reader interpretieren PDFs jeweils etwas unterschiedlich. Eine Datei, die ein Programm ablehnt, öffnet sich in einem anderen oft problemlos. Funktioniert ein Browser-Tab, aber nicht die Desktop-App, liegt das an einer unterschiedlichen Programmversion – nicht an einer defekten Datei.",
    },
    {
      title: "Kontrolliere den tatsächlichen Dateityp",
      body: "Dateien aus E-Mails oder Chats tragen manchmal die Endung .pdf, sind in Wirklichkeit aber .docx, .html, ein Bild oder ein ZIP-Archiv. Öffnest du sie in einem einfachen Texteditor, siehst du die ersten Bytes. Ein echtes PDF beginnt mit %PDF-. Steht dort etwas anderes, hilft nur Umbenennen oder die Datei erneut anfordern.",
    },
    {
      title: "Repariere die Datei über einen erneuten Export",
      body: "Ist die Datei im Kern gültig, aber auf subtile Weise beschädigt, hilft oft Folgendes: Öffne sie in einem Anzeigeprogramm, das sie noch darstellen kann, und exportiere sie über „Drucken als PDF“ oder einen erneuten Export neu. Fehlerhafte Objekte werden dabei häufig neu geschrieben, und die neue Datei öffnet sich überall.",
    },
    {
      title: "Verkleinere die Datei, wenn der Speicher das Problem ist",
      body: "Auf älteren Handys können sehr große, scanlastige PDFs mitunter überhaupt nicht öffnen. Das Tool PDF komprimieren verkleinert die Datei direkt im Browser; die komprimierte Kopie öffnet sich dann oft dort, wo das Original scheiterte.",
    },
  ],
  tips: [
    "Vergleiche die Größe der heruntergeladenen Datei mit der Angabe des Absenders. Eine Abweichung deutet direkt auf einen abgebrochenen Download hin.",
    "Öffnet der Browser das PDF, die Desktop-App aber nicht, lass es vorerst im Browser öffnen – du verlierst dabei nichts und kommst weiter.",
    "Öffnet sich eine Datei auf dem Handy, aber nicht auf dem Laptop (oder umgekehrt), liegt das meist an der Programmversion, nicht an einer defekten Datei. Nutze einfach das Anzeigeprogramm, das funktioniert.",
    "Scheitert ein per E-Mail angehängtes PDF wiederholt, lade es über die Webmail-Oberfläche statt über das Mail-Programm herunter – manche Programme schneiden große Anhänge unbemerkt ab.",
    "Sichere das Original, bevor du einen Reparaturversuch startest. Ein missglückter erneuter Export kann Formularfelder oder Anmerkungen verlieren, die im Original noch vorhanden waren.",
  ],
  mobileNote:
    "Am Handy ist die häufigste Ursache ein unvollständiger Download über eine instabile Mobilfunkverbindung. Die App PDF Editor speichert Dateien lokal und lässt dich große PDFs erneut laden und öffnen, ohne auf den Browser-Cache angewiesen zu sein – genau dort passiert der Abbruch oft.",
  faq: [
    {
      q: "Warum meldet mein PDF, es sei beschädigt, obwohl der Absender sagt, es sei in Ordnung?",
      a: "Fast immer ein unvollständiger Download. Lade die Datei erneut herunter und prüfe, ob die Dateigröße mit der Angabe des Absenders übereinstimmt. Öffnet sich die neue Kopie, war die ursprüngliche Datei einfach nicht vollständig.",
    },
    {
      q: "Mein Anzeigeprogramm verlangt ein Passwort, das ich nicht habe. Was jetzt?",
      a: "Nur die ursprüngliche Absenderin oder der Absender kann es dir mitteilen. Ein echtes PDF-Passwort lässt sich von der Empfängerseite aus nicht sicher umgehen – Tools, die genau das versprechen, solltest du meiden.",
    },
    {
      q: "Warum öffnet sich das PDF in Chrome, aber nicht in Acrobat?",
      a: "Ältere Desktop-Programme unterstützen manche neueren PDF-Funktionen nicht. Nutze entweder weiter das Programm, das funktioniert, oder exportiere die Datei über „Drucken als PDF“ neu, um eine kompatible Kopie zu erzeugen.",
    },
    {
      q: "Gibt es ein Tool, das kaputte PDFs einfach „repariert“?",
      a: "Manchmal – ein erneuter Export (öffnen, als PDF drucken, speichern) behebt kleinere strukturelle Probleme. Schwer beschädigte PDFs lassen sich aber in der Regel nicht mehr retten.",
    },
    {
      q: "Hilft Komprimieren bei PDFs, die sich nicht öffnen lassen?",
      a: "Nur, wenn der Speicher das Problem ist: Sehr große, scanlastige PDFs scheitern manchmal auf älteren Handys. PDF komprimieren macht sie klein genug, um zu laden. Eine strukturell defekte Datei repariert das Tool aber nicht.",
    },
  ],
  related: [
    { label: "PDF komprimieren – große Dateien verkleinern, die sich nicht öffnen", path: "/compress-pdf" },
    { label: "PDF-Werkzeuge – alle Lösungen direkt im Browser", path: "/pdf-tools" },
    { label: "Beschädigtes PDF reparieren", path: "/guides/how-to-fix-a-corrupted-pdf" },
    { label: "PDF-Formatierungsprobleme lösen", path: "/guides/how-to-fix-pdf-formatting-problems" },
  ],
  parentHub: { label: "PDF-Werkzeuge – kostenlos, im Browser", path: "/pdf-tools" },
};

export default content;
