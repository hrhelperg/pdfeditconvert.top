import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";

/**
 * German route manifest for the guide library.
 *
 * Slugs follow German search phrasing rather than a literal rendering of
 * the English slug, verb-first where that matches how a German user
 * actually searches ("pdf-komprimieren"). Titles use German sentence
 * capitalization — every noun capitalized, not English title case.
 * Terminology policy: docs/localization/de-terminology.md.
 */
export const DE_GUIDE_ROUTES: readonly LocaleRouteEntry[] = [
  {
    id: "guides/how-to-edit-pdf-on-iphone",
    slug: "anleitungen/pdf-auf-iphone-bearbeiten",
    title: "PDF auf dem iPhone bearbeiten (Anleitung 2026)",
    description:
      "Korrigiere Text, füge Bilder ein und ordne Seiten eines PDFs direkt auf dem iPhone neu an. Schritt-für-Schritt-Anleitung mit der PDF-Editor-App.",
  },
  {
    id: "guides/how-to-edit-pdf-on-android",
    slug: "anleitungen/pdf-auf-android-bearbeiten",
    title: "PDF auf Android bearbeiten (Anleitung 2026)",
    description:
      "Bearbeite PDFs auf Android: Text ändern, Seiten einfügen und Dokumente unterschreiben. Klare Schritt-für-Schritt-Anleitung mit der PDF-Editor-App.",
  },
  {
    id: "guides/how-to-compress-pdf",
    slug: "anleitungen/pdf-komprimieren",
    title: "PDF komprimieren, ohne an Qualität zu verlieren",
    description:
      "Reduziere die PDF-Dateigröße für E-Mail oder Upload, ohne Qualitätsverlust. Mobilfreundliches Tutorial mit der PDF-Editor-App.",
  },
  {
    id: "guides/how-to-merge-pdf-files",
    slug: "anleitungen/pdf-dateien-zusammenfuehren",
    title: "PDF-Dateien am Handy oder Computer zusammenführen",
    description:
      "Kombiniere mehrere PDFs zu einem Dokument. Schritt-für-Schritt-Anleitung fürs Handy mit der PDF-Editor-App.",
  },
  {
    id: "guides/how-to-sign-pdf-on-phone",
    slug: "anleitungen/pdf-am-handy-unterschreiben",
    title: "PDF am Handy unterschreiben",
    description:
      "Füge PDFs von deinem iPhone oder Android aus rechtsgültige elektronische Unterschriften hinzu. Praktische Anleitung mit der PDF-Editor-App.",
  },
  {
    id: "guides/how-to-scan-documents-to-pdf",
    slug: "anleitungen/dokumente-am-handy-zu-pdf-scannen",
    title: "Dokumente am Handy zu PDF scannen",
    description:
      "Nutze die Handykamera, um mehrseitige Dokumente in saubere PDFs zu scannen. Mobiler Ablauf mit Kantenerkennung und OCR.",
  },
  {
    id: "guides/best-pdf-app-for-students",
    slug: "anleitungen/beste-pdf-app-fuer-studierende",
    title: "Die beste PDF-App für Studierende (2026)",
    description:
      "Was Studierende von einer PDF-App wirklich brauchen: Notizen, Markierungen, Unterschriften und kostenlose Konvertierungen. Ehrliche Bewertungskriterien.",
  },
  {
    id: "guides/best-pdf-app-for-business",
    slug: "anleitungen/beste-pdf-app-fuer-unternehmen",
    title: "Die beste PDF-App für Unternehmen (2026)",
    description:
      "Worauf kleine Teams bei einer PDF-App achten sollten: Unterschriften, Verträge, Sicherheit und Zusammenarbeit am Handy.",
  },
  {
    id: "guides/pdf-vs-docx",
    slug: "anleitungen/pdf-oder-docx",
    title: "PDF oder DOCX — welches Format solltest du nutzen?",
    description:
      "Wann du PDF statt DOCX wählen solltest, und umgekehrt. Klarer Vergleich von Bearbeitbarkeit, Treue zum Original, Unterschrift und Teilen.",
  },
  {
    id: "guides/how-to-protect-pdf-file",
    slug: "anleitungen/pdf-mit-passwort-schuetzen",
    title: "PDF-Datei mit Passwort schützen",
    description:
      "Füge einem PDF am Handy oder Computer Passwortschutz und Verschlüsselung hinzu. Praktische Anleitung mit der PDF-Editor-App.",
  },
  {
    id: "guides/how-to-convert-pdf-to-word",
    slug: "anleitungen/pdf-zu-word-konvertieren",
    title: "PDF zu Word konvertieren — kostenlos, im Browser",
    description:
      "Hol den Text aus einem PDF in ein bearbeitbares Word-Dokument im Browser. Was sauber konvertiert, was Nacharbeit braucht, und wann Scans nicht funktionieren.",
  },
  {
    id: "guides/how-to-convert-word-to-pdf",
    slug: "anleitungen/word-zu-pdf-konvertieren",
    title: "Word zu PDF konvertieren — kostenlos, ohne Upload",
    description:
      "Verwandle eine .docx- oder .txt-Datei in ein sauberes, teilbares PDF im Browser. Warum PDF das richtige Versandformat ist und was du vor dem Export prüfen solltest.",
  },
  {
    id: "guides/how-to-convert-jpg-to-pdf",
    slug: "anleitungen/jpg-zu-pdf-konvertieren",
    title: "JPG zu PDF konvertieren — kostenlos, Bild zu PDF",
    description:
      "Füge ein oder mehrere JPG-Fotos zu einem PDF im Browser zusammen. Ideal für Belege, Ausweise und fotografierte Dokumente – mit ehrlichen Hinweisen zu Qualität und iPhone-HEIC.",
  },
  {
    id: "guides/how-to-convert-png-to-pdf",
    slug: "anleitungen/png-zu-pdf-konvertieren",
    title: "PNG zu PDF konvertieren — scharfe Screenshots und Grafiken",
    description:
      "Verwandle PNG-Screenshots, Diagramme und Grafiken in ein PDF im Browser. Warum PNG Text scharf hält, und was mit Transparenz passiert.",
  },
  {
    id: "guides/how-to-convert-webp-to-pdf",
    slug: "anleitungen/webp-zu-pdf-konvertieren",
    title: "WebP zu PDF konvertieren — Webbilder zu einem Dokument",
    description:
      "Verwandle aus dem Web gespeicherte WebP-Bilder in ein PDF im Browser. Warum WebP von anderen Apps abgelehnt wird, und wie die Konvertierung die Kompatibilität herstellt.",
  },
  {
    id: "guides/how-to-convert-pdf-to-jpg",
    slug: "anleitungen/pdf-zu-jpg-konvertieren",
    title: "PDF zu JPG konvertieren — Seiten als Bilder exportieren",
    description:
      "Exportiere PDF-Seiten als JPG-Bilder im Browser. Wann JPG die bessere Wahl gegenüber PNG ist, wie die Skalierung die Qualität beeinflusst, und wann eine Bildvorschau ein PDF schlägt.",
  },
  {
    id: "guides/how-to-convert-pdf-to-png",
    slug: "anleitungen/pdf-zu-png-konvertieren",
    title: "PDF zu PNG konvertieren — scharfe, verlustfreie Seitenbilder",
    description:
      "Exportiere PDF-Seiten als hochwertige PNG-Bilder im Browser. Warum PNG Text und Diagramme scharf hält, plus Hinweise zu Skalierung und Transparenz.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-iphone",
    slug: "anleitungen/fotos-auf-iphone-zu-pdf-konvertieren",
    title: "Fotos auf dem iPhone zu PDF konvertieren (HEIC-Problem lösen)",
    description:
      "Verwandle iPhone-Fotos in ein einziges PDF – inklusive der HEIC-Eigenheit, die viele stolpern lässt. Der Weg über den Browser und der schnellere Weg über die App.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-android",
    slug: "anleitungen/fotos-auf-android-zu-pdf-konvertieren",
    title: "Fotos auf Android zu PDF konvertieren",
    description:
      "Verwandle Android-Fotos mit einem Browser-Tool oder der eingebauten Drucken-als-PDF-Funktion in ein PDF. Plus der schnellere Weg über die App mit Scan-Funktion.",
  },
  {
    id: "guides/how-to-convert-scanned-documents-to-pdf",
    slug: "anleitungen/gescannte-dokumente-zu-pdf-konvertieren",
    title: "Gescannte Dokumente zu PDF konvertieren",
    description:
      "Du hast schon Scan-Bilder oder Fotos von Papierdokumenten? Füge sie im Browser zu einem PDF zusammen – und erfahre, was OCR macht und warum Scans es für Durchsuchbarkeit brauchen.",
  },
  {
    id: "guides/how-to-split-pdf-files",
    slug: "anleitungen/pdf-in-einzelne-dateien-teilen",
    title: "PDF in einzelne Dateien teilen (kostenlos)",
    description:
      "Teile ein großes PDF nach Seitenbereich in kleinere Dateien, im Browser. Wann teilen statt extrahieren sinnvoll ist, und wie du die Originale sicher aufbewahrst.",
  },
  {
    id: "guides/how-to-extract-pages-from-pdf",
    slug: "anleitungen/seiten-aus-pdf-extrahieren",
    title: "Seiten aus einem PDF extrahieren (kostenlos, ohne Upload)",
    description:
      "Hol bestimmte Seiten oder Bereiche aus einem PDF in eine neue Datei, im Browser. Perfekt, um genau die Seiten zu verschicken, die jemand braucht.",
  },
  {
    id: "guides/how-to-reorder-pdf-pages",
    slug: "anleitungen/pdf-seiten-neu-anordnen",
    title: "PDF-Seiten neu anordnen (kostenlos, im Browser)",
    description:
      "Bringe PDF-Seiten im Browser in die richtige Reihenfolge. Korrigiere Scans, die rückwärts eingescannt wurden, oder zusammengeführte Dateien in falscher Reihenfolge.",
  },
  {
    id: "guides/how-to-rotate-pdf-pages",
    slug: "anleitungen/pdf-seiten-drehen",
    title: "PDF-Seiten drehen (kostenlos, ohne Upload)",
    description:
      "Drehe alle oder ausgewählte PDF-Seiten um 90, 180 oder 270 Grad im Browser. Korrigiere Querformat-Scans und auf dem Kopf stehende Seiten, damit das Dokument richtig lesbar ist.",
  },
  {
    id: "guides/how-to-add-watermark-to-pdf",
    slug: "anleitungen/wasserzeichen-zu-pdf-hinzufuegen",
    title: "Wasserzeichen zu einem PDF hinzufügen (kostenlos)",
    description:
      "Stemple ENTWURF oder VERTRAULICH über jede Seite eines PDFs im Browser. Was ein Wasserzeichen schützt und was nicht, ehrlich erklärt.",
  },
  {
    id: "guides/how-to-remove-unwanted-pages-from-pdf",
    slug: "anleitungen/unerwuenschte-seiten-aus-pdf-entfernen",
    title: "Unerwünschte Seiten aus einem PDF entfernen",
    description:
      "Entferne leere Seiten, Deckblätter oder unwichtige Abschnitte aus einem PDF im Browser, indem du nur die gewünschten Seiten behältst. Saubere Dateien, privater Ablauf.",
  },
  {
    id: "guides/how-to-organize-pdf-files",
    slug: "anleitungen/pdf-dateien-organisieren",
    title: "PDF-Dateien organisieren — eine praktische Methode",
    description:
      "Bring Ordnung in unübersichtliche PDFs: verwandte Dateien zusammenführen, Seiten neu anordnen, Unnötiges entfernen und richtig benennen. Ein wiederholbarer Ablauf mit kostenlosen Browser-Tools.",
  },
  {
    id: "guides/how-to-prepare-pdf-before-sharing",
    slug: "anleitungen/pdf-vor-dem-teilen-vorbereiten",
    title: "PDF vor dem Teilen vorbereiten (Checkliste)",
    description:
      "Die Checkliste vor dem Versand für PDFs: verirrte Seiten entfernen, Ausrichtung korrigieren, Größe verkleinern und Entwürfe kennzeichnen. Ein sauberes, passend großes, bewusst fertiges Dokument versenden.",
  },
  {
    id: "guides/how-to-fix-sideways-pdf-pages",
    slug: "anleitungen/quer-oder-verkehrt-liegende-pdf-seiten-korrigieren",
    title: "Quer oder verkehrt liegende PDF-Seiten korrigieren",
    description:
      "Richte PDF-Seiten, die quer oder auf dem Kopf stehend geöffnet werden, dauerhaft im Browser aus. Warum das Drehen des Bildschirms nicht hilft, und was wirklich funktioniert.",
  },
  {
    id: "guides/how-to-compress-pdf-online",
    slug: "anleitungen/pdf-online-komprimieren-ohne-upload",
    title: "PDF online komprimieren, ohne es hochzuladen",
    description:
      "Verkleinere ein PDF direkt in deinem Browser – ohne Upload, ohne Konto. Wie sich die Komprimierung auf dem Gerät von typischen Online-Tools unterscheidet, und der Kompromiss bei der Qualität.",
  },
  {
    id: "guides/how-to-reduce-pdf-file-size-for-email",
    slug: "anleitungen/pdf-groesse-fuer-e-mail-reduzieren",
    title: "PDF-Dateigröße für E-Mail reduzieren",
    description:
      "Bring ein PDF unter die Anhanggrenzen von Gmail und Outlook. Die echten Obergrenzen, warum Scans sie sprengen, und wie du eine Datei so verkleinerst, dass sie versendet werden kann.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-iphone",
    slug: "anleitungen/pdf-auf-iphone-verkleinern",
    title: "PDF auf dem iPhone verkleinern",
    description:
      "Verkleinere ein PDF auf deinem iPhone mit einem Browser-Tool oder der PDF-Editor-App. Warum iPhone-Scans so riesig werden und wie du sie unter die Versandgrenzen bringst.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-android",
    slug: "anleitungen/pdf-auf-android-verkleinern",
    title: "PDF auf Android verkleinern",
    description:
      "Komprimiere ein PDF auf jedem Android-Handy mit einem Browser-Tool ohne Installation oder mit der PDF-Editor-App. Bring Scans unter die Grenzen für E-Mail und Upload.",
  },
  {
    id: "guides/why-is-my-pdf-so-large",
    slug: "anleitungen/warum-ist-mein-pdf-so-gross",
    title: "Warum ist mein PDF so groß? Ursachen und Lösungen",
    description:
      "Die echten Gründe, warum ein PDF aus dem Ruder läuft – Scans, eingebettete Fotos, Schriftarten und mehr – und die richtige Lösung für jeden, mit kostenlosen Browser-Tools.",
  },
  {
    id: "guides/compress-pdf-without-losing-too-much-quality",
    slug: "anleitungen/pdf-komprimieren-ohne-zu-viel-qualitaet-zu-verlieren",
    title: "PDF komprimieren, ohne zu viel Qualität zu verlieren",
    description:
      "Finde den richtigen Punkt zwischen Dateigröße und Qualität. Wie Komprimierungsstufen Detail gegen Größe tauschen, und wie du die leichteste wählst, die noch funktioniert.",
  },
  {
    id: "guides/how-to-compress-scanned-pdf",
    slug: "anleitungen/gescanntes-pdf-komprimieren",
    title: "Gescanntes PDF komprimieren (große Ersparnis)",
    description:
      "Gescannte PDFs lassen sich am leichtesten verkleinern und sind die größten Platzfresser. Wie du sie drastisch komprimierst, und was mit durchsuchbarem Text passiert.",
  },
  {
    id: "guides/best-pdf-compression-settings",
    slug: "anleitungen/beste-pdf-komprimierungseinstellungen",
    title: "Beste PDF-Komprimierungseinstellungen — eine Entscheidungshilfe",
    description:
      "Welche Komprimierungsstufe für E-Mail, Druck, Archivierung oder Web? Eine praktische Übersicht, die Einstellungen dem Zweck zuordnet, mit ehrlichen Kompromissen.",
  },
  {
    id: "guides/how-to-send-large-pdf-files",
    slug: "anleitungen/grosse-pdf-dateien-versenden",
    title: "Große PDF-Dateien versenden (5 zuverlässige Wege)",
    description:
      "Fünf zuverlässige Wege, ein PDF zu versenden, das zu groß für die E-Mail ist – komprimieren, teilen, Cloud-Links und mehr – und wie du dich entscheidest.",
  },
  {
    id: "guides/how-to-reduce-pdf-size-before-uploading",
    slug: "anleitungen/pdf-groesse-vor-dem-upload-reduzieren",
    title: "PDF-Größe vor dem Upload reduzieren",
    description:
      "Upload-Portale lehnen große Dateien noch strenger ab als E-Mail. Wie du ein PDF unter enge Portal-Grenzen bringst, ohne die geprüfte Lesbarkeit zu verlieren.",
  },
  {
    id: "guides/how-to-sign-pdf-on-iphone",
    slug: "anleitungen/pdf-auf-iphone-unterschreiben",
    title: "PDF auf dem iPhone unterschreiben (Anleitung 2026)",
    description:
      "Unterschreibe ein PDF auf dem iPhone mit Markup oder der PDF-Editor-App. Die Grenzen des nativen Wegs, und wann eine eigene App die bessere Wahl ist.",
  },
  {
    id: "guides/how-to-sign-pdf-on-android",
    slug: "anleitungen/pdf-auf-android-unterschreiben",
    title: "PDF auf Android unterschreiben (Anleitung 2026)",
    description:
      "Unterschreibe ein PDF auf Android, wo es keine universelle eingebaute Lösung gibt. Der verlässliche App-Weg, unterschiedliche Hersteller-Optionen und die rechtlichen Grundlagen.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-phone",
    slug: "anleitungen/pdf-formulare-am-handy-ausfuellen",
    title: "PDF-Formulare am Handy ausfüllen",
    description:
      "Fülle PDF-Formulare auf iPhone oder Android aus, egal ob sie echte Formularfelder haben oder nur gescannt sind. Antippen und tippen, Textfelder hinzufügen und an einem Ort unterschreiben.",
  },
  {
    id: "guides/how-to-annotate-pdf-on-mobile",
    slug: "anleitungen/pdf-am-handy-kommentieren",
    title: "PDF am Handy kommentieren",
    description:
      "Markiere, kommentiere und zeichne auf PDFs von deinem Handy oder Tablet aus. Die Anmerkungswerkzeuge, die zählen, und wie deine Notizen lesbar bleiben.",
  },
  {
    id: "guides/how-to-manage-pdfs-on-phone",
    slug: "anleitungen/pdfs-am-handy-verwalten",
    title: "PDFs am Handy verwalten",
    description:
      "Verhindere, dass die PDFs auf deinem Handy zum Chaos werden: umbenennen, in Ordner sortieren, mit der Cloud synchronisieren und Speicher freigeben. Eine praktische Wartungsroutine.",
  },
  {
    id: "guides/how-to-create-pdf-from-camera",
    slug: "anleitungen/pdf-mit-der-kamera-erstellen",
    title: "PDF mit der Handykamera erstellen",
    description:
      "Verwandle ein Kamerafoto in ein PDF – und erfahre, warum ein richtiger Scan ein rohes Foto schlägt. Schnelle Aufnahme für Belege und Whiteboards, Scannen für Dokumente.",
  },
  {
    id: "guides/how-to-share-pdf-from-phone",
    slug: "anleitungen/pdf-vom-handy-aus-teilen",
    title: "PDF vom Handy aus teilen",
    description:
      "Teile ein PDF von iPhone oder Android richtig – E-Mail, AirDrop, Nachrichten oder Link – und erfahre, wie du es passend vorbereitest, damit es wirklich ankommt.",
  },
  {
    id: "guides/best-pdf-tools-for-students",
    slug: "anleitungen/beste-kostenlose-pdf-tools-fuer-studierende",
    title: "Die besten kostenlosen PDF-Tools für Studierende (2026)",
    description:
      "Die kostenlosen PDF-Tools ohne Anmeldung, die echte studentische Aufgaben abdecken – Lesestoff zusammenführen, Abgaben komprimieren, konvertieren und kommentieren – ganz ohne Bezahlschranke.",
  },
  {
    id: "guides/best-pdf-workflow-for-freelancers",
    slug: "anleitungen/beste-pdf-methode-fuer-freiberufler",
    title: "Die beste PDF-Methode für Freiberufler",
    description:
      "Eine wiederholbare PDF-Methode für Freiberufler: Angebot raus, Vertrag unterschrieben, Rechnung versendet. Die kostenlosen Tools und die mobile App, die alles schnell und privat halten.",
  },
  {
    id: "guides/best-pdf-tools-for-small-business",
    slug: "anleitungen/beste-kostenlose-pdf-tools-fuer-kleinunternehmen",
    title: "Die besten kostenlosen PDF-Tools für Kleinunternehmen",
    description:
      "Erledige Rechnungen, Verträge und Unterlagen mit kostenlosen, privaten PDF-Tools – ohne Lizenz pro Person. Welches Tool für welche Aufgabe, und wo die App reinpasst.",
  },
  {
    id: "guides/pdf-vs-jpg-for-documents",
    slug: "anleitungen/pdf-oder-jpg-fuer-dokumente",
    title: "PDF oder JPG für Dokumente — hör auf, Fotos zu verschicken",
    description:
      "Warum ein JPG-Foto eines Dokuments das falsche Format zum Verschicken ist, wann PDF richtig ist, und wie du ein Foto in ein richtiges Dokument umwandelst.",
  },
  {
    id: "guides/when-to-use-pdf-instead-of-docx",
    slug: "anleitungen/wann-pdf-statt-docx-verwenden",
    title: "Wann du PDF statt DOCX verwenden solltest (Checkliste)",
    description:
      "Du hast ein Word-Dokument – solltest du es stattdessen als PDF verschicken? Eine kurze Checkliste für die Momente, in denen PDF die richtige Wahl ist, und wie du konvertierst.",
  },
  {
    id: "guides/browser-based-pdf-tools-vs-upload-tools",
    slug: "anleitungen/browserbasierte-pdf-tools-oder-upload-tools",
    title: "Browserbasierte PDF-Tools oder Upload-Tools",
    description:
      "Nicht alle „Online“-PDF-Tools sind gleich. Der Unterschied zwischen Tools, die in deinem Browser laufen, und solchen, die deine Datei hochladen – und wie du das erkennst.",
  },
  {
    id: "guides/privacy-first-pdf-tools",
    slug: "anleitungen/pdf-tools-mit-datenschutz-im-fokus",
    title: "PDF-Tools mit Datenschutz im Fokus — Dokumente auf deinem Gerät behalten",
    description:
      "PDFs enthalten oft deine sensibelsten Daten. Wie du mit ihnen arbeitest, ohne irgendetwas hochzuladen, und was „Datenschutz zuerst“ wirklich bedeutet.",
  },
  {
    id: "guides/common-pdf-mistakes-to-avoid",
    slug: "anleitungen/haeufige-pdf-fehler-vermeiden",
    title: "Häufige PDF-Fehler vermeiden",
    description:
      "Die PDF-Fehler, die Zeit kosten oder Daten preisgeben – zu stark komprimieren, Fotos verschicken, sensible Dateien hochladen, Seiten vergessen – und wie du sie umgehst.",
  },
  {
    id: "guides/why-wont-my-pdf-open",
    slug: "anleitungen/warum-oeffnet-sich-mein-pdf-nicht",
    title: "Warum öffnet sich mein PDF nicht? Ursachen und praktische Lösungen",
    description:
      "Ein PDF, das sich weigert zu öffnen, ist fast immer eine von fünf Ursachen. Wie du beschädigte Downloads, Passwortsperren, Anzeigefehler und alte Dateien erkennst – und was jeweils hilft.",
  },
  {
    id: "guides/why-is-my-pdf-blank",
    slug: "anleitungen/warum-ist-mein-pdf-leer",
    title: "Warum ist mein PDF leer? Echte Ursachen und wie du es rettest",
    description:
      "Ein PDF zu öffnen und leere Seiten vorzufinden ist beunruhigend. Die gute Nachricht: Der Inhalt ist fast immer noch da. Die schlechte: Die Ursache lässt sich nicht sofort erraten.",
  },
  {
    id: "guides/why-cant-i-edit-a-pdf",
    slug: "anleitungen/warum-kann-ich-ein-pdf-nicht-bearbeiten",
    title: "Warum kann ich ein PDF nicht bearbeiten? Die echten Gründe",
    description:
      "PDFs wurden so entworfen, dass sie sich der Bearbeitung widersetzen, aber ein paar konkrete Dinge – Scans, Sicherheitsmarkierungen, Anzeigegrenzen – machen manche Dateien schwieriger als andere. Was deine blockiert, und was wirklich hilft.",
  },
  {
    id: "guides/why-is-my-pdf-blurry",
    slug: "anleitungen/warum-ist-mein-pdf-unscharf",
    title: "Warum ist mein PDF unscharf? Auflösung, Komprimierung und Scan-Ursachen",
    description:
      "Unscharfe PDFs entstehen durch niedrig aufgelöste Scans, aggressive Komprimierung oder einen missglückten Export – nicht durch das Format selbst. Wie du die Ursache erkennst und die Schärfe zurückbekommst.",
  },
  {
    id: "guides/how-to-fix-a-corrupted-pdf",
    slug: "anleitungen/beschaedigtes-pdf-reparieren",
    title: "Beschädigtes PDF reparieren (was wirklich hilft)",
    description:
      "Die meisten „beschädigten“ PDFs sind gar nicht wirklich beschädigt – sie sind abgebrochene Downloads, falsche Anzeigeprogramme oder unvollständig geschriebene Dateien. Die ehrliche Checkliste, die die Datei rettet, und wann sie wirklich verloren ist.",
  },
  {
    id: "guides/how-to-fix-pdf-printing-issues",
    slug: "anleitungen/pdf-druckprobleme-loesen",
    title: "PDF-Druckprobleme lösen (abgeschnittene Seiten, falsche Größe, fehlender Text)",
    description:
      "Wenn ein PDF beschnitten, falsch skaliert oder mit fehlendem Text gedruckt wird, hängt die Lösung vom Symptom ab. Eine kurze Übersicht, die jedes Druckproblem der richtigen Einstellung zuordnet.",
  },
  {
    id: "guides/how-to-fix-pdf-upload-errors",
    slug: "anleitungen/pdf-upload-fehler-beheben",
    title: "PDF-Upload-Fehler beheben (zu groß, abgelehnt, hängt fest)",
    description:
      "Portale lehnen PDFs aus einer Handvoll Gründen ab: Dateigröße, Seitenzahl, strenge Formatvorgaben oder ein instabiler Upload. Wie du herausfindest, welcher dich betrifft, und die Datei beim nächsten Versuch akzeptiert bekommst.",
  },
  {
    id: "guides/how-to-fix-pdf-formatting-problems",
    slug: "anleitungen/pdf-formatierungsprobleme-loesen",
    title: "PDF-Formatierungsprobleme lösen (Umbrüche, Ränder, Abstände)",
    description:
      "Wenn das Layout eines PDFs kaputt aussieht – Text verschiebt sich, Ränder stimmen nicht, Abstände sind durcheinander – liegt die Lösung meist im Ausgangsdokument, nicht im PDF. Der sauberste Weg zu einem guten Export.",
  },
  {
    id: "guides/how-to-fix-scanned-pdf-quality",
    slug: "anleitungen/qualitaet-eines-gescannten-pdfs-verbessern",
    title: "Qualität eines gescannten PDFs verbessern (schärfen, ausrichten, Farbe korrigieren)",
    description:
      "Gescannte PDFs gehen auf vorhersehbare Weise schief: schief liegend, ausgewaschener Kontrast, fleckiger Hintergrund, riesige Dateien. Die Einstellungen vor dem Scannen und die Tools danach, die wirklich helfen.",
  },
  {
    id: "guides/how-to-fix-pdf-font-issues",
    slug: "anleitungen/pdf-schriftartprobleme-loesen",
    title: "PDF-Schriftartprobleme lösen (fehlend, ersetzt, verstümmelt)",
    description:
      "Wenn ein PDF die falsche Schriftart, Kästchen statt Zeichen oder ersetzten Text zeigt, fehlt meist eine eingebettete Schriftart. Wie das Einbetten funktioniert und was du beim Export ändern solltest.",
  },
  {
    id: "guides/best-pdf-tools-for-remote-work",
    slug: "anleitungen/beste-pdf-tools-fuer-remote-arbeit",
    title: "Die besten PDF-Tools für Remote-Arbeit (kostenlos, im Browser)",
    description:
      "PDF-Tools, die halten, was sie versprechen, wenn dein Büro ein Laptop und ein Handy sind – unterschreiben, komprimieren, zusammenführen, scannen, teilen – ganz ohne Installation oder Lizenzen pro Person.",
  },
  {
    id: "guides/best-pdf-tools-for-office-documents",
    slug: "anleitungen/beste-pdf-tools-fuer-buerodokumente",
    title: "Die besten PDF-Tools für Bürodokumente (Word, Excel, Berichte)",
    description:
      "Das PDF-Werkzeugset, das Büroarbeit wirklich braucht: sauberer Wechsel zwischen Word und PDF, Zusammenführen mehrerer Dokumente, Seiten neu anordnen und zuverlässige Komprimierung für E-Mail-Anhänge.",
  },
  {
    id: "guides/best-pdf-workflow-for-teams",
    slug: "anleitungen/beste-pdf-methode-im-team",
    title: "Die beste PDF-Methode im Team (geteilte Dateien, Reviews, Freigaben)",
    description:
      "Wie kleine Teams Dokumente ohne kostenpflichtige PDF-Abos bewegen: eine wiederholbare Übergabe für Entwürfe, Reviews und unterschriebene Freigaben mit kostenlosen Browser-Tools.",
  },
  {
    id: "guides/how-to-share-pdfs-with-clients",
    slug: "anleitungen/pdfs-mit-kunden-teilen",
    title: "PDFs mit Kunden teilen (professionell, privat)",
    description:
      "Ein kurzer Leitfaden, um PDFs an Kunden zu schicken – passende Größe für E-Mail, Passwortwahl, Branding der Datei, Empfangsbestätigung – ohne irgendetwas an Dritte hochzuladen.",
  },
  {
    id: "guides/how-to-prepare-pdf-for-business-use",
    slug: "anleitungen/pdf-fuer-den-geschaeftlichen-einsatz-vorbereiten",
    title: "PDF für den geschäftlichen Einsatz vorbereiten (Checkliste)",
    description:
      "Bevor ein PDF das Büro verlässt: Entwürfe entfernen, Seitenzahlen prüfen, Ausrichtung korrigieren, Schriftarten einbetten und die Datei verkleinern. Die Checkliste vor dem Versand für Dokumente, die dein Unternehmen repräsentieren.",
  },
  {
    id: "guides/how-to-send-contracts-as-pdf",
    slug: "anleitungen/vertraege-als-pdf-versenden",
    title: "Verträge als PDF versenden (unterschreiben, sperren, zustellen)",
    description:
      "Verträge brauchen eine strengere PDF-Methode: Inhalt sperren, Unterschriften anbringen, Entwürfe mit Wasserzeichen versehen und am Ende eine Datei erhalten, die die Gegenseite ohne Hin und Her gegenzeichnen kann.",
  },
  {
    id: "guides/how-to-organize-work-documents-as-pdf",
    slug: "anleitungen/arbeitsdokumente-als-pdf-organisieren",
    title: "Arbeitsdokumente als PDF organisieren (Ordner, Namen, Versionen)",
    description:
      "Eine praktische Namens- und Ordnerkonvention für Arbeits-PDFs – Angebote, Briefings, Ergebnisse, Archive – die Versionschaos verhindert und jedem erlaubt, alles schnell zu finden.",
  },
  {
    id: "guides/how-to-manage-invoices-as-pdf",
    slug: "anleitungen/rechnungen-als-pdf-verwalten",
    title: "Rechnungen als PDF verwalten (ausstellen, verfolgen, archivieren)",
    description:
      "Eine Rechnungsmethode mit PDF, die keine Buchhaltungssoftware braucht: erstellen, nummerieren, versenden, verfolgen und archivieren – nur mit kostenlosen Browser-Tools und einem sauberen Ordnersystem.",
  },
  {
    id: "guides/how-to-create-client-ready-pdf-files",
    slug: "anleitungen/pdf-dateien-kundenfertig-gestalten",
    title: "PDF-Dateien kundenfertig gestalten (aufgeräumt, mit Corporate Design)",
    description:
      "Was ein internes PDF von einer kundenfertigen Version unterscheidet: Deckblatt, Seitennummerierung, Branding, Dateigröße, Dateiname. Der schnelle Feinschliff, der ein Dokument fertig wirken lässt.",
  },
  {
    id: "guides/pdf-workflows-for-small-business",
    slug: "anleitungen/pdf-workflows-fuer-kleine-unternehmen",
    title: "PDF-Workflows für kleine Unternehmen (Angebote, Verträge, Ablage)",
    description:
      "Wie ein kleines Unternehmen seine Dokumente mit PDFs organisiert – Angebote raus, Verträge zurück, Ablage archiviert – ganz ohne teures Abo-Paket dafür.",
  },
  {
    id: "guides/pdf-workflows-for-consultants",
    slug: "anleitungen/pdf-workflows-fuer-berater",
    title: "PDF-Workflows für Berater (Angebote, Berichte, Rechnungen)",
    description:
      "Der PDF-Rhythmus eines Beraters: Angebote, die überzeugen, Berichte, die sich auf dem Smartphone sauber lesen lassen, und Rechnungen, die in Sekunden raus sind. Die browserbasierten Tools, die das schlank halten.",
  },
  {
    id: "guides/pdf-workflows-for-agencies",
    slug: "anleitungen/pdf-workflows-fuer-agenturen",
    title: "PDF-Workflows für Agenturen (Decks, Briefings, Freigaben)",
    description:
      "Die PDF-Kette einer Agentur – Pitch-Decks, Kreativ-Briefings, Kundenfreigaben, Deliverables – bleibt schnell und planbar, mit kostenlosen, privaten, browserbasierten Tools.",
  },
  {
    id: "guides/how-to-submit-homework-as-pdf",
    slug: "anleitungen/hausaufgaben-als-pdf-abgeben",
    title: "Hausaufgaben als PDF abgeben (ohne Portal-Drama)",
    description:
      "Schulportale lehnen Hausaufgaben aus vorhersehbaren Gründen ab – Dateigröße, Seitenzahl, Format. Der einfachste Weg von der fertigen Aufgabe zum PDF, das dein Portal akzeptiert.",
  },
  {
    id: "guides/how-to-scan-notes-to-pdf",
    slug: "anleitungen/handschriftliche-notizen-als-pdf-scannen",
    title: "Handschriftliche Notizen als PDF scannen (sauber, durchsuchbar)",
    description:
      "Verwandle handschriftliche Vorlesungsnotizen mit der Handykamera in saubere, mehrseitige PDFs. Die Einstellungen, mit denen die Scans schon beim ersten Versuch lesbar werden.",
  },
  {
    id: "guides/how-to-compress-pdf-for-school-portals",
    slug: "anleitungen/pdf-fuer-schulportale-komprimieren",
    title: "PDF für Schulportale komprimieren (strenge Limits)",
    description:
      "Schul- und Uni-Portale setzen bei PDFs oft engere Grenzen als der E-Mail-Versand. So komprimierst du Abgaben, damit sie durchpassen, ohne die Lesbarkeit zu verlieren, auf die die Prüferin achtet.",
  },
  {
    id: "guides/how-to-convert-lecture-notes-to-pdf",
    slug: "anleitungen/vorlesungsnotizen-in-pdf-umwandeln",
    title: "Vorlesungsnotizen in PDF umwandeln (Word, Fotos, Folien)",
    description:
      "Vorlesungsnotizen kommen in jedem erdenklichen Format – Word-Dokument, Folien-Deck, Screenshot, Foto der Tafel. So wird aus jedem ein einziges, lesbares PDF, ohne dass die Struktur verloren geht.",
  },
  {
    id: "guides/how-to-organize-study-materials-as-pdf",
    slug: "anleitungen/lernmaterial-als-pdf-organisieren",
    title: "Lernmaterial als PDF organisieren (Ordner, Namen, Register)",
    description:
      "Kurs-PDFs stapeln sich schnell. Eine einfache Ordner-, Namens- und Zusammenführungslogik, die Semesterunterlagen von der ersten Woche bis zur Prüfungsphase durchsuchbar hält.",
  },
  {
    id: "guides/how-to-share-study-notes-as-pdf",
    slug: "anleitungen/lernnotizen-als-pdf-teilen",
    title: "Lernnotizen als PDF teilen (Lerngruppe, Gruppenchat, Cloud)",
    description:
      "Teile Notizen mit deiner Lerngruppe, ohne Formatierung oder Versionsstand zu verlieren. Die PDF-Gewohnheiten, die gemeinsames Lernen vor dem Screenshot-Chaos bewahren.",
  },
  {
    id: "guides/how-to-edit-class-documents-as-pdf",
    slug: "anleitungen/unterlagen-fuer-den-unterricht-als-pdf-bearbeiten",
    title: "Unterlagen für den Unterricht als PDF bearbeiten (annotieren, markieren, unterschreiben)",
    description:
      "Handouts, Aufgabenblätter und Einverständniserklärungen kommen oft als PDF. So markierst, füllst und gibst du sie zurück, ganz ohne Ausdrucken – vom Handy oder Laptop aus.",
  },
  {
    id: "guides/pdf-workflow-for-university-students",
    slug: "anleitungen/pdf-workflow-fuer-studierende",
    title: "PDF-Workflow für Studierende (Notizen, Aufgaben, Abgaben)",
    description:
      "Ein PDF-Rhythmus für das ganze Semester, der auch die Prüfungsphase übersteht: Vorlesungsnotizen gescannt, Aufgaben abgegeben, Lernpakete geteilt. Browserbasiert und kostenlos.",
  },
  {
    id: "guides/how-to-create-digital-study-pdfs",
    slug: "anleitungen/digitale-lern-pdfs-erstellen",
    title: "Digitale Lern-PDFs erstellen (Karteikarten, Zusammenfassungen, Pakete)",
    description:
      "Baue eigene Lern-PDFs aus Notizen, Folien und Markierungen – durchsuchbar, portabel, bereit für Annotationen auf dem Tablet. Die Struktur, die sie zur Prüfungszeit wirklich nützlich macht.",
  },
  {
    id: "guides/are-online-pdf-tools-safe",
    slug: "anleitungen/sind-online-pdf-tools-sicher",
    title: "Sind Online-PDF-Tools sicher? Ein ehrlicher Blick auf das Risiko",
    description:
      "Die meisten „Online“-PDF-Tools laden deine Datei auf einen Server. Manche nicht. Die realen Risiken, die Kategorien von Tools, die mit Daten unterschiedlich umgehen, und wie du erkennst, welches welches ist.",
  },
  {
    id: "guides/how-to-protect-sensitive-pdf-files",
    slug: "anleitungen/sensible-pdf-dateien-schuetzen",
    title: "Sensible PDF-Dateien schützen (Speicherung, Weitergabe, Lebenszyklus)",
    description:
      "Sensible PDFs brauchen Schutz an drei Punkten: bei der Speicherung, bei der Weitergabe und danach, wenn die Empfängerin fertig damit ist. Ein praktischer Workflow, der alle drei abdeckt.",
  },
  {
    id: "guides/how-to-share-pdf-files-privately",
    slug: "anleitungen/pdf-dateien-privat-teilen",
    title: "PDF-Dateien privat teilen (ohne sie bei Fremden hochzuladen)",
    description:
      "Der private Weg, ein PDF zu teilen, führt nicht über eine öffentliche „PDF-Tools“-Website. Die Kanäle, die Dokumente zwischen dir und der Empfängerin halten, mit sinnvollen Voreinstellungen.",
  },
  {
    id: "guides/privacy-first-document-workflows",
    slug: "anleitungen/dokumenten-workflows-mit-datenschutz-an-erster-stelle",
    title: "Dokumenten-Workflows mit Datenschutz an erster Stelle (durchgehend ohne Hochladen)",
    description:
      "Ein kompletter Dokumenten-Workflow – erfassen, bearbeiten, unterschreiben, senden, archivieren –, der Dateien auf deinen Geräten hält und aus fremden Servern heraus. Die realistische Umsetzung und die passenden Tools.",
  },
  {
    id: "guides/local-browser-pdf-processing-explained",
    slug: "anleitungen/lokale-pdf-verarbeitung-im-browser-erklaert",
    title: "Lokale PDF-Verarbeitung im Browser erklärt (wie sie wirklich funktioniert)",
    description:
      "Wie ein PDF-Tool im Browser laufen kann, ohne deine Datei irgendwohin zu senden. Die Technik dahinter, die Kompromisse und wie du prüfst, ob ein Tool wirklich lokal arbeitet.",
  },
  {
    id: "guides/do-online-pdf-tools-store-files",
    slug: "anleitungen/speichern-online-pdf-tools-deine-dateien",
    title: "Speichern Online-PDF-Tools deine Dateien? Worauf du achten solltest",
    description:
      "Manche Online-PDF-Tools löschen hochgeladene Dateien sofort, manche behalten sie stundenlang, manche unbegrenzt. So liest du eine Datenschutzerklärung schnell und weißt, worauf zu achten ist.",
  },
  {
    id: "guides/how-to-avoid-uploading-sensitive-documents",
    slug: "anleitungen/sensible-dokumente-nicht-hochladen-muessen",
    title: "Sensible Dokumente nicht hochladen müssen (praktische Alternativen)",
    description:
      "Wenn ein Workflow dich dazu verleitet, ein sensibles PDF hochzuladen, gibt es fast immer eine rein lokale Alternative. Die Aufgabenarten und das passende Tool ohne Hochladen für jede davon.",
  },
  {
    id: "guides/secure-pdf-workflows-for-business",
    slug: "anleitungen/sichere-pdf-workflows-fuer-unternehmen",
    title: "Sichere PDF-Workflows für Unternehmen (auch ohne Enterprise-Stack)",
    description:
      "Ein kleines Unternehmen braucht keinen SOC2-zertifizierten PDF-Tresor, um sicher zu arbeiten. Die realistische Grundausstattung – verschlüsselte Speicherung, signierte Übertragungen, lokale Verarbeitung –, die dem tatsächlichen Risiko gerecht wird.",
  },
  {
    id: "guides/browser-based-document-processing-benefits",
    slug: "anleitungen/vorteile-der-dokumentenverarbeitung-im-browser",
    title: "Vorteile der Dokumentenverarbeitung im Browser (Tempo, Datenschutz, Kosten)",
    description:
      "Warum die Verarbeitung von PDFs im Browser die Rechnung aus Tempo, Datenschutz und Kosten verändert – im Vergleich zu klassischen Cloud-Tools – und wo die Grenzen der lokalen Verarbeitung wirklich liegen.",
  },
  {
    id: "guides/pdf-vs-google-docs",
    slug: "anleitungen/pdf-oder-google-docs",
    title: "PDF oder Google Docs – wann du was nutzt (Bearbeiten, Teilen, Sperren)",
    description:
      "Google Docs ist für die Zusammenarbeit da, PDF für die Auslieferung. Der realistische Blick auf den richtigen Moment für jedes Format – und wie du sauber zwischen beiden umwandelst.",
  },
  {
    id: "guides/pdf-vs-docx-for-business",
    slug: "anleitungen/pdf-oder-docx-im-unternehmen",
    title: "PDF oder DOCX im Unternehmen (Verträge, Berichte, Verteilung)",
    description:
      "Warum Geschäftsdokumente fast immer als PDF verschickt werden, aber als DOCX weiterleben. Das richtige Format in jeder Phase im Leben eines Vertrags, Berichts oder einer Rechnung.",
  },
  {
    id: "guides/pdf-vs-images-for-sharing-documents",
    slug: "anleitungen/pdf-oder-bilder-zum-teilen-von-dokumenten",
    title: "PDF oder Bilder zum Teilen von Dokumenten (JPG, PNG, HEIC)",
    description:
      "Wann ein JPG, PNG oder HEIC eines Dokuments die falsche Wahl ist – und warum PDF das richtige Format für alles ist, was über einen schnellen Screenshot hinausgeht.",
  },
  {
    id: "guides/pdf-vs-png",
    slug: "anleitungen/pdf-oder-png",
    title: "PDF oder PNG – mehrseitige Dokumente gegen ein scharfes Einzelbild",
    description:
      "PDF gewinnt bei mehrseitigen Dokumenten, PNG bei einem einzelnen, scharfen Bild mit transparentem Hintergrund. Die klaren Regeln und wie du zwischen beiden umwandelst.",
  },
  {
    id: "guides/best-format-for-sharing-documents",
    slug: "anleitungen/bestes-format-zum-teilen-von-dokumenten",
    title: "Bestes Format zum Teilen von Dokumenten (PDF, DOCX, Bilder im Vergleich)",
    description:
      "Wann PDF das richtige Format zum Teilen ist, wann nicht, und wie die realistischen Alternativen (DOCX, Bilder, HTML, Markdown) in den alltäglichen Situationen wirklich abschneiden.",
  },
  {
    id: "guides/why-pdf-is-still-popular",
    slug: "anleitungen/warum-pdf-2026-immer-noch-der-standard-ist",
    title: "Warum PDF 2026 immer noch der Standard für Dokumente ist",
    description:
      "Jahrzehnte später dominiert PDF beim Teilen von Dokumenten immer noch. Die Gründe, warum es sich gehalten hat – Treue zum Original, Universalität, Signierbarkeit, Archivtauglichkeit – und wo es verwundbar ist.",
  },
  {
    id: "guides/when-to-use-scanned-pdf",
    slug: "anleitungen/wann-ein-gescanntes-pdf-sinnvoll-ist",
    title: "Wann ein gescanntes PDF sinnvoll ist (und wann nicht)",
    description:
      "Gescannte PDFs lösen ein bestimmtes Problem – Papier wird digital. Sie sind aber auch größer, schlechter durchsuchbar und schwerer zu bearbeiten. Wann sich der Tausch lohnt.",
  },
  {
    id: "guides/editable-pdf-vs-flat-pdf",
    slug: "anleitungen/bearbeitbares-pdf-oder-flaches-pdf",
    title: "Bearbeitbares PDF oder flaches PDF – der eigentliche Unterschied",
    description:
      "Manche PDFs haben echten, markierbaren Text und eine bearbeitbare Struktur, manche sind nur Bilder von Seiten ohne zugrunde liegenden Text. So erkennst du, welches du hast, und wann welches richtig ist.",
  },
  {
    id: "guides/best-free-pdf-tools",
    slug: "anleitungen/beste-kostenlose-pdf-tools",
    title: "Die besten kostenlosen PDF-Tools 2026 (ehrlich, ohne Registrierung)",
    description:
      "Die kostenlosen PDF-Tools, die sich wirklich lohnen – komprimieren, zusammenführen, unterschreiben, konvertieren, scannen –, ausgewählt nach echter Qualität und Datenschutz, nicht danach, wie viel Werbung sie zeigen oder wie lange die Testphase läuft.",
  },
  {
    id: "guides/free-browser-based-pdf-tools",
    slug: "anleitungen/kostenlose-pdf-tools-im-browser",
    title: "Kostenlose PDF-Tools im Browser (keine Installation, kein Hochladen)",
    description:
      "Die PDF-Tools, die komplett in deinem Browser laufen – ohne Installation, ohne Konto, ohne Hochladen. Was verfügbar ist, was es abdeckt, und wie du prüfst, ob es wirklich lokal arbeitet.",
  },
  {
    id: "guides/best-pdf-tools-without-upload",
    slug: "anleitungen/beste-pdf-tools-ohne-hochladen",
    title: "Die besten PDF-Tools ohne Hochladen (Dateien bleiben auf deinem Gerät)",
    description:
      "Wenn dein PDF dein Gerät nicht verlassen soll, erledigen diese Tools die Arbeit lokal. Komprimieren, Zusammenführen, Konvertieren – alles, während die Datei auf deinem Rechner bleibt.",
  },
  {
    id: "guides/best-private-pdf-tools",
    slug: "anleitungen/beste-private-pdf-tools",
    title: "Die besten privaten PDF-Tools (wenn Vertraulichkeit wirklich zählt)",
    description:
      "Für Verträge, Finanzunterlagen und andere sensible PDFs sind das die Tools, die Datenschutz durch ihre Architektur respektieren – nicht nur auf dem Papier.",
  },
  {
    id: "guides/free-pdf-tools-for-iphone",
    slug: "anleitungen/kostenlose-pdf-tools-fuer-iphone",
    title: "Kostenlose PDF-Tools für iPhone (Browser und App im Überblick)",
    description:
      "Kostenlose PDF-Tools für iPhone, die wirklich ohne Abo funktionieren – komprimieren, unterschreiben, scannen, konvertieren. Browserbasierte Optionen und die PDF-Editor-App für den Offline-Workflow.",
  },
  {
    id: "guides/free-pdf-tools-for-android",
    slug: "anleitungen/kostenlose-pdf-tools-fuer-android",
    title: "Kostenlose PDF-Tools für Android (Browser und App im Überblick)",
    description:
      "Kostenlose PDF-Tools für Android für die alltäglichen Aufgaben – komprimieren, unterschreiben, scannen, konvertieren. Mobile Browser-Wege und die PDF-Editor-App für die Offline-Nutzung.",
  },
  {
    id: "guides/what-is-a-pdf-form",
    slug: "anleitungen/was-ist-ein-pdf-formular",
    title: "Was ist ein PDF-Formular? Interaktive und flache Formulare erklärt",
    description:
      "Ein PDF-Formular ist ein Dokument, das Antworten sammeln soll – manchmal mit echten Feldern zum Eintippen, manchmal als flache Seite, auf die du schreibst. Was das bedeutet und wie du es erkennst.",
  },
  {
    id: "guides/editable-pdf-vs-fillable-pdf",
    slug: "anleitungen/bearbeitbares-pdf-oder-ausfuellbares-pdf",
    title: "Bearbeitbares PDF oder ausfüllbares PDF – wo liegt der Unterschied?",
    description:
      "Ein PDF zu bearbeiten verändert seinen Inhalt; ein PDF auszufüllen bedeutet, Antworten in Formularfelder einzutragen. Warum das zwei unterschiedliche Aufgaben sind – und welche du wirklich brauchst.",
  },
  {
    id: "guides/how-pdf-forms-work",
    slug: "anleitungen/wie-pdf-formulare-funktionieren",
    title: "Wie PDF-Formulare funktionieren – Felder, AcroForms und flache Scans",
    description:
      "Im Kern ist ein PDF-Formular entweder eine Reihe interaktiver Felder auf der Seite oder ein flaches Bild ganz ohne Felder. Wie beides aufgebaut ist und warum das beim Ausfüllen wichtig ist.",
  },
  {
    id: "guides/can-you-edit-a-pdf-form",
    slug: "anleitungen/kann-man-ein-pdf-formular-bearbeiten",
    title: "Kann man ein PDF-Formular bearbeiten? Was geht und was nicht",
    description:
      "Die Fragen eines PDF-Formulars zu bearbeiten ist etwas anderes als es auszufüllen. Was sich ändern lässt, was gesperrt ist, und wie du ein Formular änderst, das du nur als fertiges PDF hast.",
  },
  {
    id: "guides/how-to-fill-out-a-pdf-form",
    slug: "anleitungen/pdf-formular-ausfuellen",
    title: "PDF-Formular ausfüllen (interaktiv oder flach)",
    description:
      "Fülle jedes PDF-Formular aus, ob mit echten Feldern oder als flacher Scan, auf den du schreibst. Die komplette Anleitung für Computer und Handy, inklusive Unterschreiben und Speichern.",
  },
  {
    id: "guides/how-to-save-a-filled-pdf-form",
    slug: "anleitungen/ausgefuelltes-pdf-formular-speichern",
    title: "Ausgefülltes PDF-Formular speichern, damit die Antworten bleiben",
    description:
      "Formular ausgefüllt, und die Antworten verschwinden trotzdem? So speicherst du ausgefüllte Formulardaten zuverlässig, warum manche Programme das nicht tun, und wann du vor dem Versand einbetten solltest.",
  },
  {
    id: "guides/why-cant-i-type-in-a-pdf-form",
    slug: "anleitungen/warum-kann-ich-in-diesem-pdf-formular-nicht-tippen",
    title: "Warum kann ich in diesem PDF-Formular nicht tippen? Ursachen und Lösungen",
    description:
      "Du klickst in ein Feld, und nichts passiert. Die drei üblichen Gründe – ein flaches Formular, das falsche Programm oder eine gesperrte Datei – und was du in jedem Fall tun kannst.",
  },
  {
    id: "guides/how-to-create-a-fillable-pdf",
    slug: "anleitungen/ausfuellbares-pdf-erstellen",
    title: "Ausfüllbares PDF erstellen – ehrliche Optionen und Grenzen",
    description:
      "Was es wirklich braucht, damit andere ein PDF ausfüllen können – interaktive Felder oder ein einfaches, flaches Template – und welcher Ansatz zu deinen Werkzeugen passt.",
  },
  {
    id: "guides/how-to-share-a-pdf-form",
    slug: "anleitungen/pdf-formular-zum-ausfuellen-teilen",
    title: "PDF-Formular zum Ausfüllen teilen",
    description:
      "Ein leeres Formular zum Ausfüllen zu versenden ist etwas anderes als ein fertiges Dokument zu teilen. So teilst du ein Formular, damit Empfängerinnen es wirklich ausfüllen können – und sammelst die Ergebnisse ein.",
  },
  {
    id: "guides/how-to-print-a-filled-pdf-form",
    slug: "anleitungen/ausgefuelltes-pdf-formular-drucken",
    title: "Ausgefülltes PDF-Formular mit sichtbaren Antworten drucken",
    description:
      "Formular gedruckt, und die Felder kamen leer heraus? Warum eingetragene Werte manchmal nicht mitgedruckt werden, und wie du eine saubere Papierkopie mit jeder sichtbaren Antwort bekommst.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-iphone",
    slug: "anleitungen/pdf-formulare-auf-iphone-ausfuellen",
    title: "PDF-Formulare auf iPhone ausfüllen (Dateien, Markup und Apps)",
    description:
      "Fülle interaktive und flache PDF-Formulare auf dem iPhone aus – mit Dateien und Markup oder einer eigenen PDF-App. Die iOS-spezifischen Schritte, der Weg über das Teilen-Menü, und wo Markup an seine Grenzen stößt.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-android",
    slug: "anleitungen/pdf-formulare-auf-android-ausfuellen",
    title: "PDF-Formulare auf Android ausfüllen (jedes Handy)",
    description:
      "Fülle interaktive und flache PDF-Formulare auf Android aus. Warum die vorinstallierte Anzeige oft nicht tippen lässt, der zuverlässige Weg über eine App, und wie sich Unterschiede zwischen Herstellern auf Formulare auswirken.",
  },
  {
    id: "guides/how-to-send-a-completed-pdf-form",
    slug: "anleitungen/ausgefuelltes-pdf-formular-versenden",
    title: "Ausgefülltes PDF-Formular versenden (einbetten und zustellen)",
    description:
      "Formular ausgefüllt – jetzt sauber zurückschicken. So bettest du die Antworten fest ein, damit sie sich nicht mehr ändern lassen, hängst die Datei richtig an, und bestätigst, dass sie ankommt, ohne dass Daten verloren gehen.",
  },
  {
    id: "guides/how-to-fill-government-pdf-forms-on-phone",
    slug: "anleitungen/behoerdliche-pdf-formulare-auf-dem-handy-ausfuellen",
    title: "Behördliche PDF-Formulare auf dem Handy ausfüllen",
    description:
      "Formulare von Behörden sind oft flache Scans mit strengen Formatvorgaben. So füllst du sie auf dem Handy aus, gehst mit unhandlichen Feldern um und folgst den Vorgaben der Behörde selbst.",
  },
  {
    id: "guides/mobile-pdf-form-workflow",
    slug: "anleitungen/mobiler-workflow-fuer-pdf-formulare",
    title: "Der mobile Workflow für PDF-Formulare (vom Empfang bis zum Versand)",
    description:
      "Eine wiederholbare, handyzentrierte Routine für Formulare: empfangen, in der richtigen App öffnen, ausfüllen, unterschreiben, einbetten, senden. Der komplette Ablauf ganz ohne Computer.",
  },
  {
    id: "guides/best-pdf-form-app-for-iphone",
    slug: "anleitungen/beste-pdf-formular-app-fuer-iphone",
    title: "Beste PDF-Formular-App für iPhone (worauf es ankommt)",
    description:
      "Was bei einer iPhone-App für PDF-Formulare wirklich zählt – Felderkennung, Text auf flachen Formularen, Unterschreiben, Datenschutz auf dem Gerät – und wie du eine für deine eigenen Formulare beurteilst.",
  },
  {
    id: "guides/best-pdf-form-app-for-android",
    slug: "anleitungen/beste-pdf-formular-app-fuer-android",
    title: "Beste PDF-Formular-App für Android (so triffst du die Wahl)",
    description:
      "So wählst du eine Android-App für PDF-Formulare: Felderkennung, Text auf flachen Formularen, Unterschreiben und Datenschutz auf dem Gerät – und warum eine eigene App der Standardanzeige bei Formularen überlegen ist.",
  },
  {
    id: "guides/pdf-forms-for-small-business",
    slug: "anleitungen/pdf-formulare-fuer-kleine-unternehmen",
    title: "PDF-Formulare für kleine Unternehmen (Aufnahme, Bestellungen, HR)",
    description:
      "Die alltäglichen Formulare, auf denen ein kleines Unternehmen läuft – Aufnahme, Bestellungen, Buchungen, einfache HR-Prozesse – und wie du sie als PDF ausfüllst, sammelst und verwaltest, ohne eine Formular-Plattform zu kaufen.",
  },
  {
    id: "guides/how-to-send-client-intake-forms",
    slug: "anleitungen/aufnahmeformulare-fuer-kunden-versenden",
    title: "Aufnahmeformulare für neue Kunden versenden (sauber, privat)",
    description:
      "Erfasse die Daten eines neuen Kunden in einem einzigen, sauberen Durchgang. So versendest du ein PDF-Aufnahmeformular, das leicht auszufüllen ist, vollständig zurückkommt und die Angaben des Kunden privat hält.",
  },
  {
    id: "guides/how-to-use-pdf-forms-for-contracts",
    slug: "anleitungen/pdf-formulare-fuer-vertraege-nutzen",
    title: "PDF-Formulare für Verträge nutzen (Felder und Unterschrift)",
    description:
      "Verwandle einen Vertrag in ein ausfüllbares PDF: Felder für Namen, Daten und Kürzel, ein Unterschriftsfeld und ein Einbetten-Schritt, damit sich die unterschriebene Version nicht mehr verändern lässt. Inklusive der ehrlichen Grenzen.",
  },
  {
    id: "guides/how-to-manage-pdf-application-forms",
    slug: "anleitungen/pdf-bewerbungsformulare-verwalten",
    title: "PDF-Bewerbungsformulare verwalten (sammeln und prüfen)",
    description:
      "Kommen Bewerbungen bei dir als PDF rein? So sammelst, prüfst, vergleichst und archivierst du sie, ohne den Überblick zu verlieren – ein einfaches System für einen ganzen Stapel ausgefüllter Formulare.",
  },
  {
    id: "guides/pdf-forms-for-consultants",
    slug: "anleitungen/pdf-formulare-fuer-berater",
    title: "PDF-Formulare für Berater (Fragebögen und Angebotsklärung)",
    description:
      "Erstgespräch-Fragebögen, Bögen zur Angebotsklärung und Feedback-Formulare – die Formularseite der Beratung, als ausfüllbare PDFs, die Kunden auf jedem Gerät ausfüllen können.",
  },
  {
    id: "guides/pdf-forms-for-agencies",
    slug: "anleitungen/pdf-formulare-fuer-agenturen",
    title: "PDF-Formulare für Agenturen (Onboarding, Briefings, Freigaben)",
    description:
      "Onboarding-Pakete für Kunden, Briefing-Formulare für Kreative und Freigabebögen – die Formulare mit vielen Beteiligten, die Agenturen brauchen, als ausfüllbare PDFs, die jeder ausfüllen kann.",
  },
  {
    id: "guides/pdf-forms-for-freelancers",
    slug: "anleitungen/pdf-formulare-fuer-freelancer",
    title: "PDF-Formulare für Freelancer (Aufnahme, Vereinbarungen, Anzahlungen)",
    description:
      "Projektaufnahme, einfache Dienstleistungsvereinbarungen und Freigaben für Anzahlungen – die schlanke Reihe ausfüllbarer PDF-Formulare, die ein Freelancer braucht, ohne Abo und ohne irgendetwas hochzuladen.",
  },
  {
    id: "guides/document-collection-workflows-with-pdf",
    slug: "anleitungen/dokumente-mit-pdf-einsammeln",
    title: "Workflows zum Einsammeln von Dokumenten mit PDF",
    description:
      "Sammelst du Dateien und unterschriebene Formulare von Kunden ein? Baue dir einen wiederholbaren PDF-Sammel-Workflow – eine Checkliste, einheitliche Formate und eine übersichtliche Art, den Überblick über Fehlendes zu behalten.",
  },
  {
    id: "guides/pdf-form-best-practices",
    slug: "anleitungen/pdf-formulare-richtig-gestalten",
    title: "PDF-Formulare richtig gestalten (Formulare, die Leute wirklich ausfüllen)",
    description:
      "Gestalte Formulare, die Leute tatsächlich zu Ende ausfüllen: klare Beschriftungen, echter Abstand, sinnvolle Felder, ein eindeutiges Unterschriftsfeld und ein Einbetten-Schritt. Praktische Regeln für alle, die Formulare erstellen und verschicken.",
  },
  {
    id: "guides/pdf-form-not-working",
    slug: "anleitungen/pdf-formular-funktioniert-nicht",
    title: "PDF-Formular funktioniert nicht? Ursachen finden und beheben",
    description:
      "Ein PDF-Formular, das nicht mitmacht, hat meist eine von wenigen üblichen Ursachen. Eine schnelle Einordnung, welche davon bei dir zutrifft – fehlende Felder, kein Tippen möglich, kein Speichern, nur Lesezugriff – und wo du ansetzen musst.",
  },
  {
    id: "guides/pdf-form-fields-missing",
    slug: "anleitungen/pdf-formularfelder-fehlen",
    title: "PDF-Formularfelder fehlen? Warum und wie du sie wiederherstellst",
    description:
      "Formular geöffnet, und die Felder sind nicht da? Warum interaktive Felder in manchen Anzeigen verschwinden, wie du sie zurückbekommst, und was du tust, wenn es von Anfang an keine gab.",
  },
  {
    id: "guides/why-pdf-form-wont-save",
    slug: "anleitungen/warum-speichert-mein-pdf-formular-nicht",
    title: "Warum speichert mein PDF-Formular nicht? Und wie du es reparierst",
    description:
      "Formular ausgefüllt, und die Antworten sind beim erneuten Öffnen weg? Warum manche Programme Formulardaten nur drucken statt sie zu speichern – und die zuverlässigen Wege, deine Antworten dauerhaft zu sichern.",
  },
  {
    id: "guides/why-pdf-form-is-read-only",
    slug: "anleitungen/warum-ist-mein-pdf-formular-schreibgeschuetzt",
    title: "Warum ist mein PDF-Formular schreibgeschützt? Und was tun",
    description:
      "Dein Formular öffnet sich gesperrt und ausgegraut? Warum Formulare schreibgeschützt eingestellt werden, wie du bewusste Sicherheit von einer Macke des Anzeigeprogramms unterscheidest, und die ehrlichen Optionen, es trotzdem auszufüllen.",
  },
  {
    id: "guides/pdf-form-not-printing-correctly",
    slug: "anleitungen/pdf-formular-druckt-nicht-richtig",
    title: "PDF-Formular druckt nicht richtig? Leere Felder beheben",
    description:
      "Formular druckt mit leeren Feldern, verschobenem Text oder abgeschnittenen Rändern? Die formularspezifischen Druckprobleme – vor allem fehlende Feldwerte – und die Einstellungen, die jedes davon beheben.",
  },
  {
    id: "guides/pdf-form-font-problems",
    slug: "anleitungen/pdf-formular-schriftprobleme",
    title: "Schriftprobleme bei PDF-Formularen (Auto-Größe, Abschneiden, Ersetzung)",
    description:
      "Text im Feld zu groß, zu klein oder schrumpft automatisch beim Tippen? Die Schrift-Eigenheiten, die speziell bei Formularfeldern auftreten – Auto-Größe, Ersetzung, Abschneiden – und wie du saubere, lesbare Antworten bekommst.",
  },
  {
    id: "guides/pdf-form-formatting-issues",
    slug: "anleitungen/pdf-formular-formatierungsprobleme",
    title: "Formatierungsprobleme bei PDF-Formularen (Ausrichtung und Überlauf)",
    description:
      "Felder falsch ausgerichtet, Antworten laufen über, das Formular sieht auf einem anderen Bildschirm anders aus? Die Layoutprobleme, die je nach Anzeigeprogramm variieren – und wie du ein einheitliches Ergebnis bekommst.",
  },
  {
    id: "guides/pdf-form-submission-errors",
    slug: "anleitungen/pdf-formular-uebermittlungsfehler",
    title: "Übermittlungsfehler bei PDF-Formularen (wenn das Senden fehlschlägt)",
    description:
      "Die Senden-Schaltfläche eines Formulars schlägt fehl oder tut nichts? Warum eingebaute Senden-Schaltflächen vom Server des Herausgebers abhängen, was die Fehler bedeuten, und der zuverlässige manuelle Weg, dein Formular trotzdem zu verschicken.",
  },
  {
    id: "guides/pdf-form-compatibility-problems",
    slug: "anleitungen/pdf-formular-kompatibilitaetsprobleme",
    title: "Kompatibilitätsprobleme bei PDF-Formularen (XFA und dynamische Formulare)",
    description:
      "Ein Formular, das in einem Programm funktioniert und in einem anderen zerbricht, nutzt meist Funktionen, die nicht jede Anzeige unterstützt. Wie du dynamische Formulare erkennst, was die Unterschiede verursacht, und welche Optionen du hast.",
  },
  {
    id: "guides/fix-pdf-form-errors",
    slug: "anleitungen/pdf-formularfehler-beheben",
    title: "PDF-Formularfehler beheben – eine schnelle Erste-Hilfe-Checkliste",
    description:
      "Die universellen Erste-Hilfe-Schritte für ein PDF-Formular, das nicht mitspielt: Anzeigeprogramm wechseln, erneut herunterladen, aktualisieren, Text darüberlegen, einbetten. Probiere das aus, bevor du dich in eine spezifische Ursache vertiefst.",
  },
];
