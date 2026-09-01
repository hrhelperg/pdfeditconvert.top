import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-sensitive-pdf-files",
  h1: "Sensible PDF-Dateien schützen (Speicherung, Weitergabe, Lebenszyklus)",
  description:
    "Sensible PDFs brauchen Schutz an drei Punkten: bei der Speicherung, bei der Weitergabe und danach, wenn die Empfängerin fertig damit ist. Ein praktischer Workflow, der alle drei abdeckt.",
  updated: "2026-05-29",
  intro: [
    "Sensible PDFs — Verträge, Finanzunterlagen, Ausweisdokumente, medizinische Unterlagen — brauchen Schutz an drei unterschiedlichen Punkten in ihrem Lebenszyklus: während sie auf deinem Gerät oder deiner Festplatte liegen (Speicherung), während sie zwischen dir und der Empfängerin unterwegs sind (Weitergabe), und nachdem die Empfängerin sie genutzt hat (Lebenszyklus). Die meisten Menschen konzentrieren sich auf die Weitergabe und übersehen die anderen beiden.",
    "Ein durchdachter Workflow deckt alle drei ab. Speicherung bedeutet verschlüsselte Laufwerke oder passwortgeschützte Dateien an nicht vertrauenswürdigen Orten. Weitergabe bedeutet, einen Kanal zu wählen, der nicht durchsickert, statt einfach das erstbeste Ergebnis einer Suche hochzuladen. Lebenszyklus bedeutet, darüber nachzudenken, was danach mit der Datei passiert — sowohl bei dir als auch bei der Empfängerin.",
    "Diese Anleitung geht alle drei Punkte durch. Nichts davon ist Enterprise-Niveau — es ist die realistische Grundausstattung für eine Einzelperson oder ein kleines Team, das gelegentlich mit sensiblem Material zu tun hat und dafür keinen SOC2-zertifizierten Tresor aufbauen will.",
  ],
  steps: [
    {
      title: "Speicherung: sensible PDFs auf verschlüsseltem Speicher",
      body: "FileVault unter macOS, BitLocker unter Windows, Festplattenverschlüsselung unter Linux. Das deckt deine lokale Festplatte ab. Bei externen Laufwerken nutze verschlüsselte Formate. Auch Backups sollten verschlüsselt sein — synchronisiere mit Cloud-Diensten, die Zero-Knowledge-Verschlüsselung unterstützen, oder verschlüssele die Datei vorher selbst.",
    },
    {
      title: "Schütze einzelne sensible PDFs mit Passwort",
      body: "Ein Passwortschutz fürs PDF fügt eine zweite Ebene hinzu. Die Datei bleibt geschützt, selbst wenn die Festplattenverschlüsselung versagt oder jemand eine Kopie der Datei während der Übertragung abfängt. Nutze starke, einzigartige Passwörter und teile sie über einen anderen Kanal als die Datei.",
    },
    {
      title: "Weitergabe: den richtigen Kanal nach Sensibilität wählen",
      body: "Normale E-Mail reicht bei wenig sensiblen Dateien. Ende-zu-Ende-verschlüsselte Nachrichtendienste (Signal, sichere E-Mail) bei mittlerer Sensibilität. Bei hoher Sensibilität kostenpflichtige Dienste mit ausdrücklichen Zusagen zum Datenumgang. Lade sensible PDFs nicht bei kostenlosen „Tools“ von Drittanbietern hoch.",
    },
    {
      title: "Verarbeite lokal vor, bevor du versendest",
      body: "Musst du ein sensibles PDF vor dem Versand komprimieren, schwärzen oder neu anordnen, nutze browserbasierte Tools, die lokal verarbeiten — deine Datei läuft durch keinen fremden Server. PDF komprimieren, PDF-Seiten extrahieren und PDF-Seiten neu anordnen laufen alle auf deinem Gerät.",
    },
    {
      title: "Lebenszyklus: über Aufbewahrung und Löschung nachdenken",
      body: "Bewahre sensible PDFs nur so lange auf, wie du sie brauchst. Das sollte auch für die Empfängerin gelten. Erwäge, sie um eine Löschbestätigung zu bitten, nachdem sie die Datei genutzt hat — besonders bei einmalig genutzten Ausweisdokumenten.",
    },
    {
      title: "Entferne Metadaten vor dem Versand",
      body: "PDFs tragen oft Autorennamen, ursprüngliche Dateinamen und Bearbeitungsverlauf mit sich. Ein erneuter Export aus einer sauberen Quelle entfernt das meiste davon. Die PDF-Editor-App und andere Tools lassen dich Metadaten auch gezielt entfernen.",
    },
  ],
  tips: [
    "Verschicke das Passwort nicht in derselben Nachricht wie die passwortgeschützte Datei. Schicke die Datei über einen Kanal, das Passwort über einen anderen.",
    "Behandle Scans von Ausweisdokumenten als Einmalgebrauch. Sobald die Empfängerin sie hat, bitte sie um Löschung, außer sie hat einen rechtlichen Grund zur Aufbewahrung.",
    "Nutze bei sensiblen PDFs keine Passwörter mehrfach. Sickert eines durch, bleiben die anderen geschützt.",
    "Vermeide öffentliches WLAN beim Versenden sensibler Dateien. Nutze einen Hotspot oder warte auf ein vertrauenswürdiges Netzwerk.",
    "Überprüfe deine sensiblen PDFs einmal im Jahr. Die meisten davon brauchst du nicht mehr — lösche sie sicher und verkleinere so die Angriffsfläche.",
  ],
  mobileNote:
    "Handys speichern und verschicken heute viele sensible PDFs (unterschriebene Verträge, Ausweisscans). Die PDF-Editor-App verarbeitet sie direkt auf dem Gerät — Komprimieren, Unterschreiben, Passwortschutz —, sodass das sensible Material das Handy nie verlassen muss, um versandfertig zu werden.",
  faq: [
    {
      q: "Ist der Passwortschutz von PDFs tatsächlich stark?",
      a: "Moderne AES-Verschlüsselung bei PDFs ist stark. Der Schwachpunkt ist meist das Passwort selbst — ein schwaches Passwort ist der einzige einfache Weg hinein. Nutze lange, einzigartige Passwörter.",
    },
    {
      q: "Sollte ich sensible PDFs immer verschlüsseln?",
      a: "Ja, sowohl bei der Speicherung als auch bei der Übertragung. Festplattenverschlüsselung schützt bei der Speicherung; PDF-Passwörter oder verschlüsselte Kanäle schützen bei der Übertragung.",
    },
    {
      q: "Wie sieht es mit Cloud-Speicher für sensible PDFs aus?",
      a: "Akzeptabel mit Zero-Knowledge-Verschlüsselung (der Anbieter kann deine Dateien nicht lesen) oder mit clientseitiger Verschlüsselung (du verschlüsselst vor dem Hochladen selbst). Gewöhnlicher Cloud-Speicher ist für unkritische Dateien in Ordnung, nicht für hochsensible.",
    },
    {
      q: "Wie schwärze ich sensible Teile eines PDFs?",
      a: "Echte Schwärzung wandelt den Text in ein Bild um und ersetzt ihn. Die PDF-Editor-App unterstützt das. Nur ein schwarzer Kasten darüber schwärzt nicht wirklich — der darunterliegende Text lässt sich weiterhin extrahieren.",
    },
    {
      q: "Kann ich ein PDF sicher löschen?",
      a: "Auf SSDs ist sicheres Löschen weniger eindeutig als auf klassischen Festplatten. Verschiebe die Datei auf verschlüsselten Speicher, lösche sie dann und lass die TRIM-Funktion des Laufwerks die Sektoren bereinigen. Bei sehr hoher Sensibilität ist Festplattenverschlüsselung von Anfang an der richtige Ansatz.",
    },
  ],
  related: [
    { label: "PDF-Sicherheit — PDFs mit Passwort schützen", path: "/pdf-security" },
    { label: "Wie du eine PDF-Datei mit Passwort schützt", path: "/guides/how-to-protect-pdf-file" },
    { label: "PDF-Dateien privat teilen", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Sensible Dokumente nicht hochladen müssen", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "PDF-Sicherheit — mit Passwort schützen und verschlüsseln", path: "/pdf-security" },
};

export default content;
