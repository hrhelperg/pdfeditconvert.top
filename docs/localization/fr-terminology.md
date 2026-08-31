# French terminology and style policy

The single source of truth for French copy on pdfeditconvert.top. Every wave —
route manifest, shared UI, tools, hubs, guides — follows it, so 174 pages read
as one voice rather than 174 independent translations.

**Variant: `fr` — standard French of France.** Not `fr-CA`. No Québécois forms
(*courriel*, *magasiner*, *fichier attaché*), no Belgian/Swiss numerals.

## 1. Core glossary

| English | French | Never |
| --- | --- | --- |
| file | fichier | *dossier* (that is a folder) |
| folder | dossier | |
| document | document | |
| page(s) | page(s) | |
| to compress | compresser | *comprimer* (medical/physical) |
| compression | compression | |
| to merge | fusionner | *merger* |
| to combine (several into one) | assembler, regrouper | |
| to split | diviser | *splitter* |
| to separate | séparer | |
| to rotate | faire pivoter | *rotationner*, *tourner* (ambiguous) |
| to extract | extraire | |
| to reorder | réorganiser | *réordonner* |
| to convert / conversion | convertir / conversion | |
| watermark | filigrane | *marque d'eau* |
| to sign / signature | signer / signature | |
| handwritten signature | signature manuscrite | |
| initials | paraphe | *initiales* (for signing blocks) |
| form | formulaire | |
| to fill in (a form) | remplir | *compléter* |
| form field | champ de formulaire | |
| checkbox | case à cocher | |
| to tick | cocher | |
| flat (form/PDF) | non interactif / aplati (see §3) | |
| to flatten | aplatir | |
| to scan / scan | numériser / numérisation | *scanner* as a verb in prose |
| a scan (the file) | un document numérisé | |
| scanner (device) | scanner | |
| printing | impression | |
| to print | imprimer | |
| ZIP archive | archive ZIP | |
| to download | télécharger | |
| to upload | envoyer (sur un serveur) / téléverser | see §2 |
| browser | navigateur | |
| device | appareil | *dispositif* |
| phone | téléphone, mobile | |
| screen | écran | |
| settings | paramètres | *réglages* only for iOS Settings |
| free (no cost) | gratuit | *libre* |
| account | compte | |
| link | lien | |
| to share | partager | |
| share sheet (iOS/Android) | menu de partage | |
| preview | aperçu | |
| password | mot de passe | |
| encryption | chiffrement | *cryptage* |
| privacy | confidentialité | *vie privée* only about persons |
| storage | stockage | |
| quality | qualité | |
| resolution | résolution | |
| size (file) | taille | |
| layout | mise en page | |
| font | police | |
| embedded font | police intégrée | |
| searchable | consultable / interrogeable; *texte sélectionnable* where that is the real point | |
| OCR | OCR (reconnaissance de texte) | |
| default (adj.) | par défaut | |
| feature | fonctionnalité | *feature* |
| workflow | flux de travail; often better: *méthode*, *routine*, *organisation* | |

## 2. `upload` — the one deliberate decision

English "upload" carries the whole privacy argument of this site: the file
never leaves the device. French has no single short verb that reads naturally
in both a button and a sentence.

Policy:
- In prose, say what actually happens: **« sans envoi sur un serveur »**,
  **« votre fichier ne quitte pas votre appareil »**, **« aucun transfert »**.
- **« téléverser »** is correct and used when the act itself is the subject
  (« téléverser un contrat sur un site inconnu »).
- Never leave the bare English noun *upload* in French prose.
- Never translate it as *charger* or *uploader*.

## 3. `flat` vs `interactive` PDFs and forms

A recurring pair. Fixed renderings:

- interactive form → **formulaire interactif**
- flat form → **formulaire non interactif** (first mention may add
  « c'est-à-dire une simple image de la page »)
- flat PDF (image of a page, no text layer) → **PDF non éditable** or
  **PDF image**, whichever the sentence is actually about
- to flatten a filled form → **aplatir**

Never *plat* for a document — in French that only reads as physically flat.

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

- Keep every diacritic in visible copy: é è ê ë à â î ï ô ù û ü ç œ æ.
  Slugs are ASCII-normalized (§6); prose never is.
- Apostrophe: the typographic **’** (U+2019), not `'`. « l’écran », not
  « l'écran ».
- Quotation marks: French guillemets **« … »** with a space inside, or the
  curly English pair for a quoted UI label where guillemets would be noisy.
  Be consistent within a page.
- French requires a space before `? ! : ;` and inside `« »`. Use a regular
  space, **not** `&nbsp;` and **not** U+00A0: these strings are also used in
  `<title>`, meta descriptions, JSON-LD and the sitemap, where a stray
  non-breaking space is invisible in review and corrupts the byte the
  crawler sees. A regular space is typographically imperfect and always
  safe; the imperfection is deliberate and documented here.
- Em dash — with spaces around it, as in the English source.
- Capitalization: French sentence case in titles and headings.
  « Comment compresser un PDF », never « Comment Compresser Un PDF ».
- Numbers: `10 Mo`, `25 Mo` — space before the unit. Megabyte is **Mo**, not
  MB, in prose; keep `MB` only when quoting a literal UI label.

## 6. Slug policy

- ASCII-normalized, lowercase, hyphenated. `compresser-pdf`, never
  `compresser-pdf-en-ligne`, never `compressér`.
- Diacritics are stripped **in slugs only**: `reorganiser-pages-pdf`,
  `faire-pivoter-pdf`.
- Drop the article where French search does: `compresser-pdf`, not
  `compresser-un-pdf`. Keep it where the query genuinely carries it, which
  is mostly in guide slugs phrased as questions:
  `comment-compresser-un-pdf`.
- Section prefixes: `guides/`, `comparatifs/`, `cas-usage/`.
- Every slug is declared explicitly in the manifest. None is derived from a
  title.

## 7. Voice

- Address the reader with **vous**, never *tu*.
- Prefer the active voice and a direct imperative in steps:
  « Ouvrez le PDF », « Choisissez le niveau de compression ».
- No filler: avoid *il est important de noter que*, *dans le monde
  d'aujourd'hui*, *n'hésitez pas à*.
- Do not soften a technical caveat. If the English says a conversion is
  approximate, the French says **approximatif**, not *presque parfait*.
- Do not translate sentence by sentence. Translate the point of the
  paragraph into the way a French technical editor would put it.

## 8. Truthfulness

Same rules as every other locale: no invented statistics, capabilities, legal
conclusions or jurisdictional claims; the operator identity, addresses, app
identifiers and external URLs are reproduced exactly. Where a guide cites law,
prefer conservative wording (« selon la réglementation applicable ») over
naming a French statute the English source does not support. RGPD may be used
for GDPR, since that is the established French form of the same regulation.
