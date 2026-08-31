# Spanish terminology and style policy

The single source of truth for Spanish copy on pdfeditconvert.top. Every
wave — route manifest, shared UI, tools, hubs, guides — follows it, so 174
pages read as one voice rather than 174 independent translations.

**Variant: `es` — standard Peninsular Spanish (Spain), `es-ES`.** Not a
Latin-American variant. Concretely: **ordenador**, not *computadora*;
**móvil**, not *celular*; **vosotros** exists in the language but this is
web/product copy addressed to one reader, so use **usted/tú** conventions
below, not a regional pronoun choice.

## 1. Core glossary

| English | Spanish | Never |
| --- | --- | --- |
| file | archivo | *fichero* (correct but dated/formal; avoid) |
| folder | carpeta | |
| document | documento | |
| page(s) | página(s) | |
| to compress | comprimir | |
| compression | compresión | |
| to merge | fusionar, unir | *mergear* |
| to combine (several into one) | combinar, juntar | |
| to split | dividir | |
| to separate | separar | |
| to rotate | girar | *rotar* (used in some LatAm variants; Spain prefers *girar*) |
| to extract | extraer | |
| to reorder | reordenar | |
| to convert / conversion | convertir / conversión | |
| watermark | marca de agua | |
| to sign / signature | firmar / firma | |
| handwritten signature | firma manuscrita | |
| initials | rúbrica, iniciales | |
| form | formulario | |
| to fill in (a form) | rellenar | *llenar* (LatAm; Spain says rellenar) |
| form field | campo de formulario | |
| checkbox | casilla de verificación, casilla | |
| to tick | marcar | |
| flat (form/PDF) | no interactivo / plano (see §3) | |
| to flatten | aplanar | |
| to scan / scan | escanear / escaneo | |
| a scan (the file) | un documento escaneado | |
| scanner (device) | escáner | |
| printing | impresión | |
| to print | imprimir | |
| ZIP archive | archivo ZIP | |
| to download | descargar | |
| to upload | subir (a un servidor) / enviar | see §2 |
| browser | navegador | |
| device | dispositivo | |
| phone | móvil, teléfono | *celular* |
| screen | pantalla | |
| settings | ajustes | *configuración* only for system-wide iOS "Configuración" |
| free (no cost) | gratis, gratuito | *libre* |
| account | cuenta | |
| link | enlace | *link* (anglicism, avoid) |
| to share | compartir | |
| share sheet (iOS/Android) | menú para compartir | |
| preview | vista previa | |
| password | contraseña | |
| encryption | cifrado | *encriptación* (common but Spain style guides prefer *cifrado*) |
| privacy | privacidad | |
| storage | almacenamiento | |
| quality | calidad | |
| resolution | resolución | |
| size (file) | tamaño | |
| layout | maquetación, diseño de página | |
| font | fuente, tipo de letra | |
| embedded font | fuente incrustada | |
| searchable | con texto buscable / seleccionable | |
| OCR | OCR (reconocimiento de texto) | |
| default (adj.) | predeterminado | *por defecto* is acceptable colloquially but prefer *predeterminado* in UI copy |
| feature | función | |
| workflow | flujo de trabajo; often better: *método*, *rutina*, *organización* | |

## 2. `upload` — the one deliberate decision

English "upload" carries the whole privacy argument of this site: the file
never leaves the device. Policy:

- In prose, say what actually happens: **«sin enviarlo a ningún
  servidor»**, **«tu archivo no sale de tu dispositivo»**, **«sin
  transferencia alguna»**.
- **«subir»** is correct and used when the act itself is the subject
  («subir un contrato a una web desconocida»).
- Never leave the bare English noun *upload* in Spanish prose, and never
  use the anglicism *subir* alone as a noun-substitute for "the upload"
  without a verb construction — always phrase it as an action.

## 3. `flat` vs `interactive` PDFs and forms

Fixed renderings, used consistently everywhere:

- interactive form → **formulario interactivo**
- flat form → **formulario no interactivo** (first mention may add
  «es decir, una simple imagen de la página»)
- flat PDF (image of a page, no text layer) → **PDF no editable** or
  **PDF de imagen**, whichever the sentence is actually about
- to flatten a filled form → **aplanar**

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

- Keep every accent and the eñe in visible copy: á é í ó ú ü ñ Á É Í Ó Ú Ü Ñ.
  Slugs are ASCII-normalized (§6) and drop diacritics there only; prose
  never does.
- **Inverted question and exclamation marks**: Spanish opens as well as
  closes them — **¿Por qué mi PDF no se abre?**, never a bare closing `?`
  with no opening `¿`. This applies to every question in headings, FAQ
  items, and prose — it is not optional in Spanish and its absence reads
  as a translation immediately.
- Apostrophes barely occur in Spanish prose (no English-style elision).
  Where one is genuinely needed (a foreign name, a quoted English UI
  label), use the typographic **’** (U+2019), not the ASCII `'`.
- Quotation marks: Spanish angled guillemets **« … »** for a genuine quote
  or scare-quote, or the curly `“ ”` pair when quoting a UI label inline.
  Be consistent within a page. Never use straight `" "` for a real quote.
- Regular spaces throughout — no `&nbsp;`/U+00A0 before punctuation (unlike
  French, Spanish punctuation does not require a preceding space at all,
  so this is not even a temptation, but the same rule against invisible
  non-breaking-space corruption in `<title>`/meta/JSON-LD applies).
- Em dash — with spaces around it, as in the English source, or the Spanish
  convention of a plain hyphen/en dash for a parenthetical where that reads
  more naturally; be consistent within one page.
- Capitalization: Spanish sentence case in titles and headings — only the
  first word and proper nouns are capitalized. «Cómo comprimir un PDF»,
  never «Cómo Comprimir Un PDF».
- Numbers: `10 MB`, `25 MB` — space before the unit is standard Spanish
  usage too. Megabyte stays **MB** (not the French *Mo*); this is the
  established Spanish abbreviation.

## 6. Slug policy

- ASCII-normalized, lowercase, hyphenated, diacritics stripped in slugs
  only: `como-comprimir-un-pdf`, never `cómo-comprimir-un-pdf`.
- Keep the article where Spanish search genuinely carries it in question
  form (`como-comprimir-un-pdf`), drop it in short tool slugs where English
  and French both drop theirs (`comprimir-pdf`, not `comprimir-un-pdf`).
- Section prefixes: `guias/`, `comparativas/`, `casos-de-uso/`.
- Every slug is declared explicitly in the manifest. None is derived from
  a title.

## 7. Voice

- Address the reader with **tú**, matching the informal-but-professional
  register most Spanish SaaS/consumer product copy uses (not the more
  formal *usted*, which would read as stiff for this kind of tool).
- Prefer the active voice and a direct imperative in steps: «Abre el PDF»,
  «Elige el nivel de compresión».
- No filler: avoid *es importante señalar que*, *en el mundo actual*, *no
  dudes en*.
- Do not soften a technical caveat. If the English says a conversion is
  approximate, the Spanish says **aproximado**, not *casi perfecto*.
- Do not translate sentence by sentence. Translate the point of the
  paragraph the way a Spanish technical editor would put it.

## 8. Truthfulness

Same rules as every other locale: no invented statistics, capabilities,
legal conclusions or jurisdictional claims; the operator identity,
addresses, app identifiers and external URLs are reproduced exactly. Where
a guide cites law, prefer conservative wording («según la normativa
aplicable») over naming a Spanish statute the English source does not
support. **RGPD** is the established Spanish acronym for GDPR (Reglamento
General de Protección de Datos) and may be used the same way it is in
French, for the same reason: the controller is established in the EU
regardless of the reader's country.
