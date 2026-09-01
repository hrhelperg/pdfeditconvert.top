import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-files-privately",
  h1: "PDF-Dateien privat teilen (ohne sie bei Fremden hochzuladen)",
  description:
    "Der private Weg, ein PDF zu teilen, führt nicht über eine öffentliche „PDF-Tools“-Website. Die Kanäle, die Dokumente zwischen dir und der Empfängerin halten, mit sinnvollen Voreinstellungen.",
  updated: "2026-05-29",
  intro: [
    "Das Erste, was viele tun, wenn sie ein PDF mit jemandem teilen wollen, ist es bei einem Tool hochzuladen, das „privates“ Teilen verspricht — und genau dieses Tool ist oft das größte Datenschutzrisiko in der ganzen Kette. Kostenlose Filesharing-Dienste bewahren Dateien meist eine Weile auf, indexieren sie manchmal sogar und hängen von einem Server ab, zu dem du in keiner Beziehung stehst.",
    "Privates Teilen ist nicht kompliziert — es geht darum, den richtigen Kanal zu wählen. Direkte Übertragung (AirDrop, USB), Ende-zu-Ende-verschlüsselte Nachrichtendienste, verschlüsselte E-Mail oder passwortgeschützte Dateien über normale E-Mail. Jeder Weg passt zu einer anderen Situation. Keiner davon verlangt, bei Fremden hochzuladen.",
    "Diese Anleitung geht die realistischen Optionen nach Sensibilitätsstufe und Anwendungsfall durch, mit den jeweiligen Kompromissen. Ziel sind geteilte Dokumente, die zwischen dir und der Empfängerin bleiben — ohne vermeidbaren Umweg über einen Dritten.",
  ],
  steps: [
    {
      title: "Für die Übertragung im selben Raum: AirDrop oder lokales Teilen",
      body: "iPhone zu iPhone, iPhone zu Mac: AirDrop. Android: Nearby Share. Derselbe Mac, derselbe PC: lokales AirDrop oder ein gemeinsamer Ordner. Die Datei berührt das Internet nie.",
    },
    {
      title: "Bei vertrauenswürdigen Empfängerinnen: Ende-zu-Ende-verschlüsselte Nachrichtendienste",
      body: "Signal, WhatsApp (mit Einschränkungen), iMessage zwischen Apple-Nutzern. Die Übertragung selbst ist verschlüsselt; die Datei wird erst auf dem Gerät der Empfängerin entschlüsselt. Die Plattformen sehen Metadaten, nicht den Inhalt.",
    },
    {
      title: "Bei wenig sensiblen Dateien reicht normale E-Mail",
      body: "Normale E-Mail ist unverschlüsselt, aber für die meisten unkritischen Dokumente praktisch sicher genug. Das Risiko ist das Abfangen, das bei gewöhnlichen Dokumenten über große E-Mail-Anbieter selten vorkommt.",
    },
    {
      title: "Bei sensiblen Dateien über normale E-Mail: erst mit Passwort schützen",
      body: "Vergib ein PDF-Passwort, bevor du die Datei anhängst. Die E-Mail transportiert die Datei; das Passwort geht über einen anderen Kanal (Anruf, separate Nachricht). Wird die E-Mail abgefangen, bleibt die Datei trotzdem geschützt.",
    },
    {
      title: "Bei sehr sensiblem Material: verschlüsselte E-Mail oder sichere Zustellung",
      body: "ProtonMail, Tutanota oder der sichere Dokumentenversand deiner Organisation. Diese verschlüsseln den Kanal selbst und machen den separaten Passwortversand überflüssig.",
    },
    {
      title: "Lade sensible Inhalte nicht bei kostenlosen Filesharing-Diensten hoch",
      body: "Kostenlose Tools, die deine Datei hochladen (Komprimierer, Zusammenführer, Teiler), halten sie zumindest kurz auf ihrem Server. Nutze bei sensiblem Material browserbasierte Tools, die lokal verarbeiten, bevor du überhaupt teilst.",
    },
  ],
  tips: [
    "Setze das Passwort nicht in dieselbe E-Mail wie die passwortgeschützte Datei. Der Sinn des Passworts ist der Schutz gegen abgefangene E-Mails.",
    "Bestätige die Identität der Empfängerin, bevor du teilst — Phishing-Betrug gibt sich manchmal als Kundin aus, um an sensible PDFs zu kommen.",
    "Einigt euch bei wiederholtem Teilen mit derselben Empfängerin auf einen einzigen Kanal und bleibt dabei. Genau beim Kanalwechsel passieren Lecks.",
    "Teile nicht über öffentliche Links, außer der Link ist nur einmal gültig. Dauerhafte Links können entdeckt oder weitergegeben werden.",
    "Lösche die Datei nach dem Teilen aus jedem temporären Ablageort (Downloads-Ordner, Zwischenspeicher). Je weniger Kopien sensibles Material hat, desto kleiner die Angriffsfläche.",
  ],
  mobileNote:
    "Privates Teilen beginnt heute meist auf dem Handy. Die PDF-Editor-App bereitet Dateien (komprimieren, unterschreiben, Passwort) lokal unter iOS und Android vor und übergibt sie dann an AirDrop, Signal oder deine E-Mail-App — die Datei bleibt während der Vorbereitung auf dem Handy und geht danach direkt an die Empfängerin.",
  faq: [
    {
      q: "Was ist der einfachste Weg, privat zu teilen?",
      a: "AirDrop oder Nearby Share, wenn du in der Nähe der Empfängerin bist. Ende-zu-Ende-verschlüsselte Nachrichtendienste, wenn nicht. Beides hält die Datei aus fremden Servern heraus.",
    },
    {
      q: "Ist WhatsApp privat genug für sensible Dokumente?",
      a: "Ende-zu-Ende-Verschlüsselung schützt den Inhalt; WhatsApp sieht trotzdem Metadaten (wer hat wem was geschickt). Für die meisten Fälle ist das in Ordnung; bei sehr sensiblem Material ist Signal die sauberere Wahl.",
    },
    {
      q: "Sollte ich einen Filesharing-Link-Dienst nutzen?",
      a: "Nur mit ausdrücklichen Zusagen zum Datenumgang und kurzer Aufbewahrungsfrist. Bei sensiblen Dateien sind direkte Kanäle sicherer.",
    },
    {
      q: "Wie verhält sich PDF-Passwortschutz zu Kanalverschlüsselung?",
      a: "PDF-Passwörter schützen die Datei selbst; Kanalverschlüsselung schützt die Übertragung. Beides hat seinen Wert — sie schützen gegen unterschiedliche Angriffe.",
    },
    {
      q: "Was ist die schlechteste verbreitete Praxis?",
      a: "Ein sensibles PDF bei einem kostenlosen „Konvertierungs“- oder „Komprimierungs“-Tool hochzuladen und dann die resultierende Datei per E-Mail zu verschicken. Genau beim Hochladen verlässt die Datei deine Kontrolle. Nutze browserbasierte Tools, die nichts hochladen.",
    },
  ],
  related: [
    { label: "PDF-Sicherheit — mit Passwort schützen und verschlüsseln", path: "/pdf-security" },
    { label: "Sensible PDF-Dateien schützen", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Sensible Dokumente nicht hochladen müssen", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
    { label: "Dokumenten-Workflows mit Datenschutz an erster Stelle", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "PDF-Sicherheit — mit Passwort schützen und verschlüsseln", path: "/pdf-security" },
};

export default content;
