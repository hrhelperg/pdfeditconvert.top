import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-private-pdf-tools",
  h1: "Die besten privaten PDF-Tools (wenn Vertraulichkeit wirklich zählt)",
  description:
    "Für Verträge, Finanzunterlagen und andere sensible PDFs sind das die Tools, die Datenschutz durch ihre Architektur respektieren – nicht nur auf dem Papier.",
  updated: "2026-05-29",
  intro: [
    "„Privat“ wird bei PDF-Tools genauso großzügig verwendet wie „natürlich“ bei Lebensmitteletiketten — und oft genauso ungenau. Viele Tools behaupten in ihren Texten, privat zu sein, während sie jede Datei auf ihre Server hochladen und dort verarbeiten. Der Datenschutz beruht dann auf einer Richtlinie: „wir speichern deine Datei nicht länger als eine Stunde.“ Das ist besser als nichts, hängt aber davon ab, dass die Richtlinie eingehalten wird — und das wiederum davon, dass das Unternehmen sich daran hält. Das ist keine starke Garantie für wirklich sensibles Material.",
    "Private PDF-Tools — die wirklich privaten — sind durch ihre Architektur privat. Deine Datei erreicht deren Server überhaupt nicht. Die Verarbeitung passiert in deinem Browser oder in einer lokalen App auf deinem Handy. Datenschutz ist keine Richtlinie, sondern eine strukturelle Eigenschaft. Das ist der Maßstab, an dem sich Tools messen lassen sollten, wenn die Datei wirklich zählt.",
    "Diese Anleitung listet die privaten Empfehlungen für die gängigen PDF-Aufgaben. Die Architektur ist der Maßstab; alles Weitere folgt daraus.",
  ],
  steps: [
    {
      title: "Zum Komprimieren sensibler Dateien: PDF komprimieren im Browser",
      body: "PDF komprimieren in deinem Browser verkleinert die Datei lokal. Sensible Kontoauszüge, gescannte Ausweise und Verträge werden komprimiert, ohne dein Gerät je zu verlassen. Überprüfe das mit den Entwicklertools — keine ausgehende POST-Anfrage, sobald du die Datei hinzufügst.",
    },
    {
      title: "Zum Zusammenführen sensibler Dateien: PDF zusammenführen im Browser",
      body: "PDF zusammenführen bündelt Verträge, Anlagen oder unterschriebene Pakete lokal. Die zusammengeführte Datei entsteht im Arbeitsspeicher des Browsers; die Einzelteile bleiben die ganze Zeit auf deinem Rechner.",
    },
    {
      title: "Um bestimmte Seiten zum Teilen zu extrahieren: PDF-Seiten extrahieren",
      body: "Musst du nur bestimmte Seiten eines sensiblen Dokuments verschicken, erzeugt PDF-Seiten extrahieren ein neues PDF mit genau diesen Seiten — lokal, in deinem Browser.",
    },
    {
      title: "Für seitenweises Entfernen im Sinn einer Schwärzung: Extrahieren oder Neuanordnen",
      body: "Echte Textschwärzung ist eine spezialisierte Aufgabe; wenn du ganze Seiten entfernst oder ersetzt, erledigen Tools auf Seitenebene in deinem Browser das, ohne den Inhalt irgendeinem Server preiszugeben.",
    },
    {
      title: "Zum Unterschreiben von Verträgen: PDF unterschreiben oder die PDF-Editor-App",
      body: "PDF unterschreiben im Browser oder die PDF-Editor-App auf dem Handy halten den Vertrag während des Unterschreibens auf deinem Gerät. Keine E-Signaturplattform sieht das Dokument.",
    },
    {
      title: "Für private Archive: verschlüsselter lokaler Speicher",
      body: "Archiviere sensible PDFs nach der Verarbeitung auf verschlüsseltem Speicher — FileVault, BitLocker, verschlüsselte externe Laufwerke oder ein Zero-Knowledge-Cloud-Backup. Lokale Verarbeitung nützt nichts, wenn der Archivspeicher unverschlüsselt ist.",
    },
  ],
  tips: [
    "Datenschutz durch Architektur schlägt Datenschutz durch Richtlinie. Die Architektur lässt sich überprüfen; die Richtlinie hängt von Vertrauen ab.",
    "Der Netzwerk-Tab der Entwicklertools ist der Kontrollschritt. Kannst du es nicht überprüfen, vertrau nicht.",
    "Akzeptiere keine Registrierung bei wirklich privaten Tools — das Konto ist ein Datenpunkt, den das Tool sonst nicht hätte.",
    "Private mobile Tools sollten offline funktionieren. Braucht eine „private“ App ständig eine Netzwerkverbindung, frag dich warum.",
    "Kombiniere private Tools mit privaten Kanälen. Privat zu verarbeiten und das Ergebnis dann unverschlüsselt per E-Mail zu verschicken, macht den Vorteil zunichte.",
  ],
  mobileNote:
    "Auf dem Handy ist die PDF-Editor-App die private Wahl — die gesamte Verarbeitung passiert auf dem Gerät, kein Hochladen, kein Konto. Praktisch für Verträge und sensible Scans, bei denen das Handy das naheliegende Gerät ist, die Datei aber durch keinen fremden Server laufen soll.",
  faq: [
    {
      q: "Was macht ein PDF-Tool wirklich privat?",
      a: "Die Architektur — die Datei erreicht den Server des Tools nicht. Angegebene Löschfristen sind schwächer, weil sie davon abhängen, dass das Unternehmen seine Zusagen einhält.",
    },
    {
      q: "Sind kostenpflichtige „private“ Tools besser als kostenlose private Tools?",
      a: "Nicht unbedingt. Kostenlose Tools, die in deinem Browser laufen, haben denselben architektonischen Datenschutz wie kostenpflichtige Tools ohne Hochladen. Kostenpflichtige Tools gewinnen bei fortgeschrittenen Funktionen (regulierte Workflows, E-Discovery), nicht beim grundlegenden Datenschutz.",
    },
    {
      q: "Kann ich den Datenschutz selbst überprüfen?",
      a: "Ja — Browser-Entwicklertools, Netzwerk-Tab. Datei hineinlegen, auf ausgehende Anfragen achten. Kein sichtbarer Datei-Upload bedeutet, dass keiner stattgefunden hat.",
    },
    {
      q: "Wie sieht es mit Ende-zu-Ende-Verschlüsselung aus?",
      a: "Nützlich beim Teilen, hilft aber nicht bei der Verarbeitung. Muss ein Tool deine Datei lesen, um sie zu verarbeiten, spielt die Verschlüsselung während der Übertragung keine Rolle — der Server sieht den Inhalt trotzdem.",
    },
    {
      q: "Was ist die stärkste Datenschutzhaltung für sensible PDFs?",
      a: "Lokal verarbeiten mit browserbasierten oder lokalen App-Tools. Auf verschlüsseltem Speicher archivieren. Über Ende-zu-Ende-verschlüsselte Kanäle teilen. Jede Ebene deckt eine andere Angriffsfläche ab.",
    },
  ],
  related: [
    { label: "PDF-Sicherheit — mit Passwort schützen und verschlüsseln", path: "/pdf-security" },
    { label: "PDF-Tools — browserbasiert, ohne Hochladen", path: "/pdf-tools" },
    { label: "PDF-Tools mit Datenschutz an erster Stelle", path: "/guides/privacy-first-pdf-tools" },
    { label: "Sensible PDF-Dateien schützen", path: "/guides/how-to-protect-sensitive-pdf-files" },
  ],
  parentHub: { label: "PDF-Tools — kostenlos, browserbasiert", path: "/pdf-tools" },
};

export default content;
