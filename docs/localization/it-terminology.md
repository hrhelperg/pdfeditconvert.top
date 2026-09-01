# Italian terminology and style policy

The single source of truth for Italian copy on pdfeditconvert.top. Every
wave — route manifest, shared UI, tools, hubs, guides — follows it, so 174
pages read as one voice rather than 174 independent translations.

**Variant: `it` — standard Italian of Italy, `it-IT`.**

## 1. Core glossary

| English | Italian | Never |
| --- | --- | --- |
| file | file (invariable, masc.: *il file*, *i file*) | *fila* |
| folder | cartella | |
| document | documento | |
| page(s) | pagina/pagine | |
| to compress | comprimere | |
| compression | compressione | |
| to merge | unire | *mergiare* |
| to combine (several into one) | combinare, riunire | |
| to split | dividere | |
| to separate | separare | |
| to rotate | ruotare | |
| to extract | estrarre | |
| to reorder | riordinare | |
| to convert / conversion | convertire / conversione | |
| watermark | filigrana | |
| to sign / signature | firmare / firma | |
| handwritten signature | firma autografa, firma a mano | |
| initials | sigla, iniziali | |
| form | modulo | |
| to fill in (a form) | compilare | *riempire* (reads clumsy for a form) |
| form field | campo del modulo | |
| checkbox | casella di controllo | |
| to tick | selezionare, spuntare | |
| flat (form/PDF) | non interattivo / piatto (see §3) | |
| to flatten | appiattire | |
| to scan / scan | scansionare / scansione | |
| a scan (the file) | un documento scansionato | |
| scanner (device) | scanner | |
| printing | stampa | |
| to print | stampare | |
| ZIP archive | archivio ZIP | |
| to download | scaricare | |
| to upload | caricare (su un server) | see §2 |
| browser | browser | |
| device | dispositivo | |
| phone | telefono, cellulare | |
| screen | schermo | |
| settings | impostazioni | |
| free (no cost) | gratis, gratuito | *libero* |
| account | account | |
| link | link | *collegamento* is correct but "link" is standard in Italian tech usage |
| to share | condividere | |
| share sheet (iOS/Android) | menu di condivisione | |
| preview | anteprima | |
| password | password | |
| encryption | crittografia | |
| privacy | privacy | Italian has adopted this English word directly; do not force *riservatezza* |
| storage | archiviazione, spazio di archiviazione | |
| quality | qualità | |
| resolution | risoluzione | |
| size (file) | dimensione | |
| layout | impaginazione, layout | |
| font | carattere, font | |
| embedded font | font incorporato | |
| searchable | ricercabile | |
| OCR | OCR (riconoscimento del testo) | |
| default (adj.) | predefinito | |
| feature | funzione | |
| workflow | flusso di lavoro; often better: *metodo*, *routine* | |

## 2. `upload` — the one deliberate decision

English "upload" carries the whole privacy argument of this site: the file
never leaves the device. Policy:

- In prose, say what actually happens: **«senza inviarlo a nessun
  server»**, **«il tuo file non lascia il tuo dispositivo»**, **«senza
  alcun trasferimento»**.
- **«caricare»** is correct and used when the act itself is the subject
  («caricare un contratto su un sito sconosciuto»).
- Never leave the bare English noun *upload* in Italian prose, and never
  use the anglicism *uploadare*.

## 3. `flat` vs `interactive` PDFs and forms

Fixed renderings, used consistently everywhere:

- interactive form → **modulo interattivo**
- flat form → **modulo non interattivo** (first mention may add «cioè
  semplicemente un'immagine della pagina»)
- flat PDF (image of a page, no text layer) → **PDF non modificabile** or
  **PDF immagine**, whichever the sentence is actually about
- to flatten a filled form → **appiattire**

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

- Keep every accent in visible copy: à è é ì ò ù. Slugs are ASCII-normalized
  in §6 only; prose never is.
- **Apostrophes are frequent and load-bearing in Italian** (elision:
  *un'immagine*, *l'app*, *dell'app*, *un'applicazione*) — unlike French or
  Spanish, this is not a rare edge case, it happens constantly. Always use
  the typographic apostrophe **’** (U+2019), never the straight ASCII `'`.
  This is the single typography rule most likely to be gotten wrong at
  scale in Italian, so double-check every elision.
- Quotation marks: Italian angled guillemets **« … »** for a genuine quote
  or scare-quote, or the curly `“ ”` pair when quoting a UI label inline.
  Be consistent within a page. Never use straight `" "` for a real quote.
- Capitalization: Italian sentence case in titles and headings — only the
  first word and proper nouns are capitalized. «Come comprimere un PDF»,
  never «Come Comprimere Un PDF».
- Numbers: `10 MB`, `25 MB` — space before the unit, MB stays MB.

## 6. Slug policy

- ASCII-normalized, lowercase, hyphenated, accents stripped in slugs only:
  `come-comprimere-un-pdf`, not `còme`.
- The verb/phrase Italian users actually search, not a literal rendering of
  the English slug: `comprimi-pdf` or `comprimere-pdf` for the tool
  (imperative form matches the button label better — use the imperative
  `comprimi-pdf` for tool slugs, matching how the tool button itself reads
  "Comprimi PDF"), `come-comprimere-un-pdf` for the guide (infinitive,
  matching how Italians phrase a how-to search).
- Section prefixes: `guide/`, `confronti/`, `casi-duso/` (elided article,
  ASCII apostrophe stripped to nothing in the slug — `casi-duso`, not
  `casi-d-uso` or `casi-uso`).
- Every slug is declared explicitly in the manifest. None is derived from
  a title.

## 7. Voice

- Address the reader with **tu**, matching the informal-but-professional
  register most Italian consumer/SaaS product copy uses (not *Lei*, which
  would read as unnecessarily formal for this kind of everyday tool).
- Prefer the active voice and a direct imperative in steps: «Apri il PDF»,
  «Scegli il livello di compressione».
- No filler: avoid *è importante sottolineare che*, *al giorno d'oggi*,
  *non esitare a*.
- Do not soften a technical caveat. If the English says a conversion is
  approximate, the Italian says **approssimativo**, not *quasi perfetto*.
- Do not translate sentence by sentence. Translate the point of the
  paragraph the way a native Italian technical editor would write it.

## 8. Truthfulness

Same rules as every other locale: no invented statistics, capabilities,
legal conclusions or jurisdictional claims; the operator identity,
addresses, app identifiers and external URLs are reproduced exactly. Where
a guide cites law, prefer conservative wording («in base alla normativa
applicabile») over naming an Italian statute the English source does not
support. **RGPD** is the established Italian acronym for GDPR (Regolamento
Generale sulla Protezione dei Dati) and should be used instead of the
English "GDPR" — the same regulation, and the controller is established in
the EU regardless of the reader's own country.
