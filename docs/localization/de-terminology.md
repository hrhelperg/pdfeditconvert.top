# German terminology and style policy

The single source of truth for German copy on pdfeditconvert.top. Every
wave — route manifest, shared UI, tools, hubs, guides — follows it, so 174
pages read as one voice rather than 174 independent translations.

**Variant: `de` — standard German of Germany (Bundesdeutsches Hochdeutsch),
`de-DE`.** Not Austrian or Swiss German. No ß-avoidance (Swiss convention);
use ß normally (`groß`, `außerdem`, `muss` stays with ss per current
spelling reform, `daß`→`dass`).

## 1. Core glossary

| English | German | Never |
| --- | --- | --- |
| file | Datei | |
| folder | Ordner | |
| document | Dokument | |
| page(s) | Seite(n) | |
| to compress | komprimieren | |
| compression | Komprimierung | |
| to merge | zusammenführen | *mergen* |
| to combine (several into one) | kombinieren, vereinen | |
| to split | teilen, aufteilen | |
| to separate | trennen | |
| to rotate | drehen | |
| to extract | extrahieren | |
| to reorder | neu anordnen | |
| to convert / conversion | konvertieren / Konvertierung, Umwandlung | |
| watermark | Wasserzeichen | |
| to sign / signature | unterschreiben, signieren / Unterschrift, Signatur | see note below |
| handwritten signature | handschriftliche Unterschrift | |
| initials | Initialen, Kürzel | |
| form | Formular | |
| to fill in (a form) | ausfüllen | |
| form field | Formularfeld | |
| checkbox | Kontrollkästchen | |
| to tick | ankreuzen | |
| flat (form/PDF) | nicht interaktiv / flach (see §3) | |
| to flatten | glätten (see §3 for the fixed rendering) | |
| to scan / scan | scannen / Scan | *einscannen* is fine as a variant verb |
| a scan (the file) | ein gescanntes Dokument | |
| scanner (device) | Scanner | |
| printing | Drucken | |
| to print | drucken | |
| ZIP archive | ZIP-Archiv | |
| to download | herunterladen | |
| to upload | hochladen (auf einen Server) | see §2 |
| browser | Browser | |
| device | Gerät | |
| phone | Handy, Smartphone | |
| screen | Bildschirm | |
| settings | Einstellungen | |
| free (no cost) | kostenlos | *frei* (ambiguous with "libre") |
| account | Konto | |
| link | Link | |
| to share | teilen | |
| share sheet (iOS/Android) | Teilen-Menü | |
| preview | Vorschau | |
| password | Passwort | |
| encryption | Verschlüsselung | |
| privacy | Datenschutz | |
| storage | Speicherung, Speicher | |
| quality | Qualität | |
| resolution | Auflösung | |
| size (file) | Größe | |
| layout | Layout, Seitenlayout | |
| font | Schriftart | |
| embedded font | eingebettete Schriftart | |
| searchable | durchsuchbar | |
| OCR | OCR (Texterkennung) | |
| default (adj.) | Standard-, standardmäßig | |
| feature | Funktion | |
| workflow | Arbeitsablauf; often better: *Methode*, *Routine* | |

**Sign/signature note:** use **unterschreiben/Unterschrift** for the everyday
act of signing a document (what the tool actually does — a drawn or typed
name); reserve **signieren/Signatur** for the more technical/legal register
(e.g. a qualified electronic signature under eIDAS) where the English source
itself is being technical. Most guide prose should default to
unterschreiben/Unterschrift.

## 2. `upload` — the one deliberate decision

English "upload" carries the whole privacy argument of this site: the file
never leaves the device. Policy:

- The step verb for this site's own local tools is always **„Hinzufügen"**,
  never „hochladen" or „Upload" — that would claim a transfer the tool does
  not perform.
- To say a local tool does *not* upload, either paraphrase (**„ohne es auf
  einen Server zu laden"**, **„deine Datei verlässt dein Gerät nicht"**,
  **„ohne jede Übertragung"**) or negate the noun directly (**„ohne
  Upload"**, **„kein Upload"**) — both are fine, use whichever reads more
  naturally in the sentence.
- **„hochladen"** (verb) and **„Upload"** (noun) are both correct, and
  freely interchangeable, when describing a genuine transfer to someone
  else's server — a school portal, an unknown website, a third-party
  "online" tool being contrasted with this site's own local processing
  („einen Vertrag auf eine unbekannte Website hochladen", „Upload-Portale
  lehnen große Dateien ab").
- "Upload" is a fully naturalized German loanword (case: *der Upload*,
  *das Upload-Portal*) — professional German tech writing uses it
  constantly, including as the noun form „hochladen" has no clean
  equivalent for (an adjective-like compound such as „Upload-Fehler" or
  „Upload-Portal" reads far more naturally than a forced „Hochlade-Fehler").
  Treat it as an ordinary German noun, not a lapse into English — the
  earlier draft of this policy banned it outright, which turned out to be
  stricter than how the language actually gets written; the substantive
  rule that matters is the one above: never let "hochladen"/"Upload"
  describe this site's own tool doing something it does not do.

## 3. `flat` vs `interactive` PDFs and forms

Fixed renderings, used consistently everywhere:

- interactive form → **interaktives Formular**
- flat form → **nicht interaktives Formular** (first mention may add
  „also im Grunde nur ein Bild der Seite")
- flat PDF (image of a page, no text layer) → **nicht bearbeitbares PDF**
  or **Bild-PDF**, whichever the sentence is actually about
- to flatten a filled form → **die Formularfelder fest in die Seite
  einbetten** on first mention, then simply **einbetten** or, where the verb
  form reads more naturally, **das Formular flach machen** — do not use
  *glätten* in the forms sense (it reads as "smooth/polish" in German, not
  "flatten a form"); "einbetten" or a short paraphrase ("die Werte werden
  fest in die Seite geschrieben") is the correct, natural rendering. This
  overrides the glossary row above — that row exists only to flag the false
  friend, not to prescribe it as the answer.

## 4. Product and technical strings — never translated

`PDF`, `DOCX`, `JPG`, `PNG`, `WebP`, `HEIC`, `ZIP`, `Word`, `Excel`,
`PowerPoint`, `Google Docs`, `Google Drive`, `iCloud`, `AirDrop`, `Gmail`,
`WhatsApp`, `Signal`, `iPhone`, `iPad`, `Android`, `iOS`, `macOS`, `Windows`,
`Linux`, `FileVault`, `BitLocker`, `LUKS`, `Safari`, `Chrome`, `Firefox`,
`WebAssembly`, `AcroForm`, `XFA`, `PDF/A`, `PDF/UA`, `PDF/X`, `Markdown`,
`HTML`, `OCR`, **`PDF Editor`** (the app name), `App Store`, `Google Play`.

File extensions, code identifiers, URLs and query parameters are never
translated or reformatted.

## 5. Typography

- Keep every umlaut and ß in visible copy: ä ö ü Ä Ö Ü ß. Slugs are
  ASCII-normalized (ä→ae, ö→oe, ü→ue, ß→ss) in §6 only; prose never is.
- Quotation marks: German „low-high" quotes **„ … "** (opening low,
  closing high) for a genuine quote — not the French/English „ " pair used
  elsewhere, not straight `" "`. Use the typographic apostrophe **’**
  (U+2019) for the rare genuine German apostrophe (omission before an
  -s or -n on a name ending in a sibilant, e.g. „Thomas’ Datei"; German
  otherwise does not use an apostrophe before a possessive -s the way
  English does — never write "PDF's Größe", write "die Größe des PDF" or
  "die PDF-Größe").
- **Compound nouns.** German builds long compounds instead of noun phrases:
  prefer **Dateigröße**, **Formularfeld**, **Passwortschutz** over a
  hyphen-chain or an anglicized noun phrase. Use a hyphen only where the
  compound would otherwise be hard to parse or mixes a Latin-script product
  name with a German noun (**PDF-Datei**, **Word-Dokument**).
- Capitalization: German capitalizes **every noun**, mid-sentence included —
  this is not optional and is the single most common tell of a rushed
  translation when it's missed. Titles/headings use normal German sentence
  capitalization (first word + all nouns capitalized), not English title
  case.
- Numbers: `10 MB`, `25 MB` — space before the unit, MB stays MB. Decimal
  comma is standard German usage (`1,5×`) rather than a decimal point,
  though this site's numbers are mostly integers where it rarely matters;
  use the comma where a decimal genuinely appears (compression scale
  factors, etc.).
- Em dash — German commonly uses a shorter em dash or a comma/colon where
  English reaches for one; don't mechanically copy every English em dash,
  rephrase where a German sentence structure reads more naturally.

## 6. Slug policy

- ASCII-normalized, lowercase, hyphenated, umlauts/ß transliterated in
  slugs only: `pdf-komprimieren`, not `pdf-komprimieren` with any ü/ö/ä/ß
  surviving (e.g. `groesse` not `größe` if a slug ever needed that word).
- German syntax often puts the verb differently than English/Romance
  languages; slugs should still read as the natural search phrase a German
  user types, not a word-for-word gloss: `pdf-komprimieren` (not
  `komprimieren-pdf`), `pdf-zusammenfuehren`, `pdf-drehen`.
- Section prefixes: `anleitungen/` (guides), `vergleiche/` (comparisons),
  `anwendungsfaelle/` (use cases).
- Every slug is declared explicitly in the manifest. None is derived from
  a title.

## 7. Voice

- Address the reader with **du**, matching the informal-but-professional
  register most German consumer/SaaS product copy uses (not the more
  formal *Sie*, which would feel corporate/distant for this kind of
  everyday tool).
- Prefer the active voice and a direct imperative in steps: „Öffne das
  PDF", „Wähle die Komprimierungsstufe".
- No filler: avoid *es ist wichtig zu erwähnen, dass*, *in der heutigen
  Zeit*, *zögere nicht*.
- Do not soften a technical caveat. If the English says a conversion is
  approximate, the German says **ungefähr/näherungsweise**, not *fast
  perfekt*.
- Do not translate sentence by sentence. Translate the point of the
  paragraph the way a German technical editor would write it — German
  sentence structure (verb-second, subordinate-clause-final-verb) often
  requires genuine restructuring, not word-order-preserving substitution.

## 8. Truthfulness

Same rules as every other locale: no invented statistics, capabilities,
legal conclusions or jurisdictional claims; the operator identity,
addresses, app identifiers and external URLs are reproduced exactly. Where
a guide cites law, prefer conservative wording („je nach geltendem Recht")
over naming a German statute the English source does not support.
**DSGVO** is the established German acronym for GDPR (Datenschutz-
Grundverordnung) and should be used instead of the English "GDPR" wherever
the English source discusses it — the same regulation, and Germany's own
data-protection culture means DSGVO is a term German readers already know
better than the English acronym.
