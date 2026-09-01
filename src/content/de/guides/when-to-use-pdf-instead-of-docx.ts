import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-pdf-instead-of-docx",
  h1: "Wann du PDF statt DOCX verwenden solltest (Checkliste)",
  description:
    "Du hast ein Word-Dokument – solltest du es stattdessen als PDF verschicken? Eine kurze Checkliste für die Momente, in denen PDF die richtige Wahl ist, und wie du konvertierst.",
  updated: "2026-05-23",
  intro: [
    "Du hast ein Dokument in Word fertiggestellt, und jetzt steht eine kleine Entscheidung an: die .docx so verschicken, wie sie ist, oder erst in PDF umwandeln? Es ist verlockend, einfach das zu nehmen, was gerade vor dir liegt — aber die falsche Wahl hat Folgen: ein Layout, das auf dem Bildschirm der anderen Person zerbricht, ein Preis, den ein Kunde heimlich ändert, ein Entwurf, der für final gehalten wird. In dieser Anleitung geht es darum, die Momente zu erkennen, in denen PDF eindeutig die bessere Wahl zum Verschicken ist.",
    "Statt eines breiten Formatvergleichs ist das hier eine gezielte Entscheidungscheckliste: eine Reihe von Signalen, die bedeuten „vor dem Versand in PDF umwandeln“. Trifft keines davon zu, ist deine DOCX so in Ordnung, wie sie ist. Trifft eines zu, wandelt das kostenlose Tool Word zu PDF die Datei in Sekunden direkt auf deinem Gerät um.",
    "Geh die Checkliste ein paar Mal durch, und sie wird zum Reflex — du weißt auf einen Blick, ob ein Dokument als Word oder als PDF rausgehen sollte.",
  ],
  steps: [
    {
      title: "Ist das Dokument final?",
      body: "Ist es fertig und nicht zum Bearbeiten gedacht — ein unterschriebener Brief, ein fertiger Bericht, eine Abgabe —, schick PDF. DOCX lädt zu Änderungen ein, die du bei einem abgeschlossenen Dokument nicht willst.",
    },
    {
      title: "Muss das Layout exakt so bleiben, wie gestaltet?",
      body: "Broschüren, Lebensläufe, alles, bei dem Abstände und Schriftarten wichtig sind, sollten als PDF rausgehen. Eine DOCX kann sich in einer anderen Word-Version oder in Google Docs neu umbrechen und dein sorgfältig gestaltetes Layout zerstören.",
    },
    {
      title: "Könnte der Empfänger es zu deinem Nachteil bearbeiten?",
      body: "Angebote, Rechnungen, Verträge — überall dort, wo eine Zahl oder Bedingung verändert werden könnte — gehören ins PDF. Es verhindert beiläufige Änderungen und hält fest, was du wirklich verschickt hast.",
    },
    {
      title: "Hat die Gegenseite vielleicht kein Word?",
      body: "PDF öffnet sich nativ auf jedem Handy, Tablet und Computer. Bist du dir nicht sicher, ob der Empfänger eine Office-App hat, garantiert PDF, dass er es lesen kann, ohne irgendetwas installieren zu müssen.",
    },
    {
      title: "Wandert es ins Archiv?",
      body: "Für die langfristige Aufbewahrung sieht ein PDF auch in zehn Jahren noch genauso aus; eine DOCX kann sich über Word-Versionen hinweg verändern. Archiviere als PDF, behalte die DOCX als dein bearbeitbares Original.",
    },
    {
      title: "Ist auch nur eine Antwort ja, wandle es um",
      body: "Öffne das Tool Word zu PDF, füge deine .docx hinzu und lade das PDF herunter — direkt auf deinem Gerät, ohne dass die Datei auf einen Server geladen wird. Bewahre die ursprüngliche Word-Datei für künftige Änderungen auf.",
    },
  ],
  tips: [
    "Bleib bei DOCX, solange am Dokument noch gearbeitet wird, Kommentare oder Änderungsverfolgung nötig sind oder der Empfänger es bearbeiten soll. PDF ist für fertige, feststehende Dokumente.",
    "Bewahre immer die bearbeitbare .docx auf. Das PDF ist die Versandkopie; die Word-Datei ist dein Original für die nächste Überarbeitung.",
    "Nimm nachverfolgte Änderungen an oder entferne sie vor dem Umwandeln, sonst tauchen sie im PDF für alle sichtbar auf.",
    "Die Umwandlung in PDF friert das Layout ein, verschlüsselt die Datei aber nicht. Braucht sie echten Schutz, füge in einem eigenen Schritt ein Passwort hinzu.",
    "Bittet jemand um ein „bearbeitbares PDF“, meint er meist DOCX — frag lieber nach, statt es anzunehmen, und schick dann das Richtige.",
  ],
  mobileNote:
    "Die Entscheidung für PDF fällt oft fernab vom Schreibtisch, wenn ein fertiges Dokument sofort raus muss. Die PDF-Editor-App konvertiert und verschickt direkt vom Handy aus, sodass du ein Dokument festschreiben und per E-Mail verschicken kannst, ohne erst zurück an einen Computer zu müssen.",
  faq: [
    {
      q: "Wann sollte ich ein PDF statt einer Word-Datei verschicken?",
      a: "Wenn das Dokument final ist, das Layout feststehen muss, der Empfänger es zu deinem Nachteil bearbeiten könnte, er vielleicht kein Word hat oder es ins Archiv wandert. Trifft eines davon zu, heißt das: in PDF umwandeln.",
    },
    {
      q: "Wann ist es besser, bei DOCX zu bleiben?",
      a: "Wenn noch am Dokument geschrieben wird, Kommentare oder Änderungsverfolgung nötig sind oder der Empfänger es bearbeiten soll. DOCX ist das Arbeitsformat; PDF das fertige.",
    },
    {
      q: "Verändert die Umwandlung von Word zu PDF mein Layout?",
      a: "Bei Dokumenten mit gängigen Schriftarten nein — genau das ist der Sinn von PDF. Achte nur bei ungewöhnlichen Schriftarten auf, die ersetzt werden können. Öffne das PDF und prüfe es vor dem Versand.",
    },
    {
      q: "Schützt der Versand als PDF das Dokument?",
      a: "Es verhindert beiläufige Bearbeitung und friert das Layout ein, ist aber keine Verschlüsselung. Für echten Schutz vor dem Öffnen oder Kopieren füge separat ein Passwort hinzu.",
    },
    {
      q: "Wo finde ich einen ausführlicheren Vergleich von PDF und DOCX?",
      a: "In der Anleitung und dem Vergleich PDF oder DOCX findest du einen umfassenderen Blick darauf, wie sich die beiden Formate bei Bearbeitung, Originaltreue und Unterschrift unterscheiden.",
    },
  ],
  related: [
    { label: "Word zu PDF — im Browser konvertieren", path: "/word-to-pdf" },
    { label: "PDF oder DOCX — welches Format solltest du nutzen?", path: "/guides/pdf-vs-docx" },
    { label: "Word zu PDF konvertieren — kostenlos, ohne Upload", path: "/guides/how-to-convert-word-to-pdf" },
    { label: "PDF oder DOCX — der Vergleich Punkt für Punkt", path: "/compare/pdf-vs-docx" },
  ],
  parentHub: { label: "PDF-Konverter", path: "/pdf-converter" },
};

export default content;
