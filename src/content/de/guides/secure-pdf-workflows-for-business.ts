import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "secure-pdf-workflows-for-business",
  h1: "Sichere PDF-Workflows für Unternehmen (auch ohne Enterprise-Stack)",
  description:
    "Ein kleines Unternehmen braucht keinen SOC2-zertifizierten PDF-Tresor, um sicher zu arbeiten. Die realistische Grundausstattung – verschlüsselte Speicherung, signierte Übertragungen, lokale Verarbeitung –, die dem tatsächlichen Risiko gerecht wird.",
  updated: "2026-05-29",
  intro: [
    "Enterprise-PDF-Sicherheitspakete — SOC2-geprüfte Tresore, automatisierte Aufbewahrungsfristen, E-Discovery-Bereitschaft — gibt es für Unternehmen, denen Regulierungsbehörden über die Schulter schauen. Für eine Fünf-Personen-Beratung oder eine Dreißig-Personen-Agentur ist das übertrieben. Das tatsächliche Risiko ist banaler: Ein Mitarbeiter lädt einen Kundenvertrag bei einem kostenlosen „Komprimieren“-Tool hoch, das die Datei behält, ein gemeinsames Laufwerk hat keine Verschlüsselung, ein signiertes PDF wird unverschlüsselt über öffentliches WLAN verschickt.",
    "Eine sichere Grundausstattung für ein gewöhnliches kleines Unternehmen adressiert genau diese realen Risiken, ohne Enterprise-Ausrüstung zu kaufen. Verschlüsselte Speicherung, signierte Übertragungen, lokale Verarbeitung für sensibles Material und ein paar Gewohnheiten, auf die sich das Team einigt. Nichts davon ist teuer; manches bedeutet nur, die Standard-Tools zu wechseln.",
    "Diese Anleitung beschreibt diese Grundausstattung. Übernimm, was zu deinem Unternehmen passt; lass weg, was nicht zutrifft. Ziel ist vernünftiger Schutz, keine Show.",
  ],
  steps: [
    {
      title: "Festplattenverschlüsselung auf jedem Firmengerät",
      body: "FileVault unter macOS, BitLocker unter Windows, LUKS unter Linux. Auf Laptops zwingend, auf Desktop-Rechnern sinnvoll. Ein verlorenes oder gestohlenes Gerät ohne Verschlüsselung ist sofort eine Datenpanne; mit Verschlüsselung ist es nur ein Hardware-Verlust.",
    },
    {
      title: "Verarbeite PDFs für sensibles Kundenmaterial lokal",
      body: "PDF komprimieren, PDF zusammenführen, PDF-Seiten extrahieren und andere browserbasierte Tools auf dieser Website verarbeiten lokal — Kundendaten laufen durch keinen Drittanbieter. Mach das zur Standardpraxis im Team.",
    },
    {
      title: "Unterschreibe Verträge mit einem echten E-Signatur-Tool",
      body: "PDF unterschreiben oder die PDF-Editor-App für gewöhnliche Verträge. Bei regulierten Geschäften nutze eine geprüfte kommerzielle Signaturplattform. In beiden Fällen halten gezeichnete Unterschriften besser stand als getippte Namen.",
    },
    {
      title: "Nutze verschlüsselte Kanäle für sensible Übertragungen",
      body: "Signal oder Ende-zu-Ende-verschlüsselte E-Mail für sensibles Material. Normale E-Mail für gewöhnliche Dokumente. Wähle den Kanal passend zur Sensibilität.",
    },
    {
      title: "Lege eine Passwortrichtlinie für sensible PDFs fest",
      body: "Vertrauliches Kundenmaterial bekommt ein PDF-Passwort. Teile das Passwort über einen anderen Kanal als die Datei. Nutze wo möglich pro Kundin ein eigenes Passwort.",
    },
    {
      title: "Prüfe und lösche regelmäßig",
      body: "Vierteljährliche Durchsicht von /Kunden/Archiv/. Lösche, was weder Behörden verlangen noch Kundinnen noch brauchen. Jede aufbewahrte sensible Datei ist ein fortlaufendes Risiko; ein kleinerer Bestand verkleinert die Angriffsfläche.",
    },
  ],
  tips: [
    "Halte die Sicherheitsgrundlagen schriftlich fest. Eine einseitige Richtlinie, die jede und jeder gelesen hat, hält besser als eine unausgesprochene Norm.",
    "Verschlüssele USB-Sticks und externe Backup-Laufwerke. Sie gehen am leichtesten verloren.",
    "Zahle nicht pro Nutzerin für Sicherheitssoftware, wenn kostenlose Tools die Grundausstattung abdecken. Spare das Budget für echte Lücken auf.",
    "Schule das Team zu Phishing — die meisten Datenpannen bei kleinen Unternehmen kommen nicht von schwachen Tools, sondern von einer erfolgreichen Phishing-Mail.",
    "Habt einen Notfallplan, auch wenn er nur ein Absatz ist. „Verlieren wir einen Laptop mit Kundendateien, informieren wir die betroffenen Kundinnen innerhalb von 48 Stunden“ reicht als Anfang.",
  ],
  mobileNote:
    "Kleine Unternehmen erledigen heute einen erheblichen Teil ihrer Dokumentenarbeit auf dem Handy. Die PDF-Editor-App übernimmt Unterschreiben, Komprimieren, Konvertieren und Teilen lokal unter iOS und Android, sodass der mobile Teil der Geschäftsarbeit keinen zusätzlichen fremden Server in die Kette bringt.",
  faq: [
    {
      q: "Brauchen kleine Unternehmen wirklich eine Sicherheitsgrundlage?",
      a: "Ja. Die meisten Datenpannen treffen kleine Unternehmen, nicht Konzerne. Die Grundausstattung ist kurz und günstig; sie nicht zu haben, ist das eigentliche Risiko.",
    },
    {
      q: "Ist browserbasierte Verarbeitung sicher genug für Kundenarbeit?",
      a: "Für gewöhnliche Kundenarbeit ja. Die Datei verlässt dein Gerät nicht — das ist stärker als ein serverseitiges Tool mit Speicherfrist. Bei regulierten Geschäften (Finanzen, Medizin) können je nach geltendem Recht besondere Vorgaben gelten.",
    },
    {
      q: "Sollten wir für jeden Vertrag Enterprise-Signaturen nutzen?",
      a: "Nein. Gewöhnliche Verträge können mit PDF unterschreiben oder der PDF-Editor-App unterschrieben werden. Reserviere kommerzielle Signaturplattformen für hochwertige oder regulierte Geschäfte.",
    },
    {
      q: "Wie gehen wir mit einem Sicherheitsvorfall um?",
      a: "Plane im Voraus: Benachrichtigungsprozess, Liste der betroffenen Kundinnen, je nach geltendem Recht eine Meldung an Behörden. Improvisiere nicht erst im Ernstfall.",
    },
    {
      q: "Was ist die häufigste Sicherheitslücke bei kleinen Unternehmen?",
      a: "Uneinheitliche Geräteverschlüsselung und der unbedachte Einsatz kostenloser, hochladender PDF-Tools für sensibles Kundenmaterial. Beides lässt sich günstig beheben.",
    },
  ],
  related: [
    { label: "PDF-Sicherheit — mit Passwort schützen und verschlüsseln", path: "/pdf-security" },
    { label: "Sensible PDF-Dateien schützen", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "PDF-Dateien privat teilen", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "PDF-Workflows für kleine Unternehmen", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "PDF-Sicherheit — mit Passwort schützen und verschlüsseln", path: "/pdf-security" },
};

export default content;
