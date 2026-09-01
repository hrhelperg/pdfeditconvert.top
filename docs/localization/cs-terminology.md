# Czech terminology and style policy

The single source of truth for Czech copy on pdfeditconvert.top. Every
wave — route manifest, shared UI, tools, hubs, guides — follows it, so 174
pages read as one voice rather than 174 independent translations.

**Variant: `cs` — standard Czech of the Czech Republic, `cs-CZ`.**

## 1. Core glossary

| English | Czech | Never |
| --- | --- | --- |
| file | soubor | |
| folder | složka | |
| document | dokument | |
| page(s) | stránka / stránky | |
| to compress | zkomprimovat / komprimovat | |
| compression | komprese | |
| to merge | sloučit | |
| to combine (several into one) | spojit do jednoho souboru | |
| to split | rozdělit | |
| to separate | oddělit | |
| to rotate | otočit | |
| to extract | extrahovat, vyjmout | |
| to reorder | změnit pořadí | |
| to convert / conversion | převést / převod, konverze | |
| watermark | vodoznak | |
| to sign / signature | podepsat / podpis | |
| handwritten signature | vlastnoruční podpis | |
| initials | iniciály | |
| form | formulář | |
| to fill in (a form) | vyplnit | |
| form field | pole formuláře | |
| checkbox | zaškrtávací pole | |
| to tick | zaškrtnout | |
| flat (form/PDF) | see §3, use "neinteraktivní" | |
| to scan / scan | naskenovat / sken | |
| a scan (the file) | naskenovaný dokument | |
| scanner (device) | skener | |
| printing | tisk | |
| to print | vytisknout | |
| ZIP archive | ZIP archiv | |
| to download | stáhnout | see §2 |
| to upload | nahrát (na server) | see §2 |
| browser | prohlížeč | |
| device | zařízení | |
| phone | telefon | |
| screen | obrazovka | |
| settings | nastavení | |
| free (no cost) | zdarma | |
| account | účet | |
| link | odkaz | |
| to share | sdílet | |
| share sheet (iOS/Android) | nabídka sdílení | |
| preview | náhled | |
| password | heslo | |
| encryption | šifrování | |
| privacy | soukromí | |
| storage | úložiště | |
| quality | kvalita | |
| resolution | rozlišení | |
| size (file) | velikost | |
| layout | rozvržení | |
| font | písmo | |
| embedded font | vložené písmo | |
| searchable | prohledávatelný | |
| OCR | OCR (rozpoznávání textu) | |
| default (adj.) | výchozí | |
| feature | funkce | |
| workflow | pracovní postup | |

## 2. `upload` — the one deliberate decision

English "upload" carries the whole privacy argument of this site: the file
never leaves the device. Policy:

- The step verb for this site's own local tools is always **"Přidat"**
  ("Přidat soubor PDF"), never "nahrát" — that claims a network transfer
  the tool does not perform.
- To say a local tool does *not* upload, paraphrase (**"bez odesílání na
  server"**, **"soubor neopustí vaše zařízení"**) or negate the noun
  directly (**"bez nahrávání"**).
- **"nahrát"** (verb) and **"nahrávání"** (noun) are correct, and freely
  usable, when describing a genuine transfer to someone else's server — a
  school portal, an unknown website, a third-party tool being contrasted
  with this site's own local processing ("nahrát smlouvu na neznámý web",
  "portály odmítají velké soubory").
- **"stáhnout"** (download) must stay a clean opposite of "nahrát" (upload)
  — never let the two blur, e.g. a "corrupted download" is "poškozené
  stažení", never "poškozené nahrání".

## 3. `flat` vs `interactive` PDFs and forms

Fixed renderings, used consistently everywhere:

- interactive form → **interaktivní formulář**
- flat form → **neinteraktivní formulář** (first mention may add "v
  podstatě obrázek stránky, do kterého se jen dopisuje")
- flat PDF (image of a page, no text layer) → **PDF jako obrázek** or
  **soubor bez textové vrstvy**, whichever the sentence is actually about
- to flatten a filled form (lock field values permanently into the page) →
  **zafixovat** (hodnoty polí se natrvalo zapíší do stránky) — **never
  "zploštit"**, which in Czech means physically flattening an object and
  reads as a mistranslation in this sense. "Zploštit"/"zploštění" is
  correct only for the *different*, genuine sense of rasterizing a page to
  a flat image (e.g. "tisk do PDF vše zploští na pixely") — keep the two
  senses strictly apart.

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

- Quotation marks: Czech primary quotes are **„ … "** (opening low-9
  U+201E, closing U+201C — the closing mark reuses the "left" curly-quote
  glyph, the same Central-European convention German uses) — e.g.
  „Přidat soubor“. Nested/secondary quotes use ‚ … '.
- Dash: prefer the en dash **–** with spaces for a parenthetical aside,
  rather than mechanically copying every English em dash.
- Decimal separator is the comma, not the point (**2,5 MB**, not "2.5
  MB"); numbers with units take a space before the unit (**10 MB**,
  **90°**).
- Czech diacritics (á č ď é ě í ň ó ř š ť ú ů ý ž) are kept in full in all
  prose and UI copy. They are stripped only in slugs — see §6.

## 6. Slug policy

- ASCII-normalized, lowercase, hyphenated: diacritics are transliterated
  in slugs only (á→a, č→c, ď→d, é→e, ě→e, í→i, ň→n, ó→o, ř→r, š→s, ť→t,
  ú/ů→u, ý→y, ž→z), e.g. `zmensit-pdf`, not a slug carrying "č"/"ě"/"ř" —
  this avoids percent-encoded URLs in links, sharing and analytics, the
  same principle already established for pt-BR/fr/es/de/it/ar/ru/pl.
- Slugs read as the natural Czech search phrase, not a word-for-word gloss
  of the English path.
- Section prefixes: `navody/` (guides), `srovnani/` (comparisons),
  `pripady-uziti/` (use cases).
- Every slug is declared explicitly in the manifest. None is derived from
  a title.

## 7. Voice

- Address the reader informally, with the **ty** register, not the formal
  **vy** — matching the friendly, direct tone of the English source and
  the register most Czech consumer/mobile-app copy actually uses today
  (deliberately not the more distant, business-correspondence "vy" some
  older Czech software localizations default to). Narrative guide prose:
  "Když nahráváš PDF do portálu…", "Tvůj soubor zůstává v zařízení."
- UI step verbs and button labels use the **infinitive**, which is the
  standard, formality-neutral convention in Czech software UI —
  **"Přidat soubor"**, **"Stáhnout výsledek"**, **"Vybrat úroveň
  komprese"** — not a conjugated imperative and not the noun form.
- Prefer active voice and short sentences. No filler ("je důležité
  zmínit, že", "v dnešní době", "neváhejte").
- Do not soften a technical caveat: if the English says a conversion is
  approximate, the Czech says **přibližný/přibližně**, not "téměř
  dokonalý".
- Do not translate sentence by sentence — translate the point of the
  paragraph the way a Czech technical editor would write it; Czech word
  order and clause structure often need genuine restructuring, not
  word-order-preserving substitution.

## 8. Truthfulness

Same rules as every other locale: no invented statistics, capabilities,
legal conclusions or jurisdictional claims; the operator identity,
addresses, app identifiers and external URLs are reproduced exactly.
Czech has no single native acronym for GDPR as established in everyday use
as German's DSGVO or French's RGPD — Czech consumer and legal writing
overwhelmingly keeps **GDPR** itself. Policy: keep "GDPR" with a one-time
Czech-language gloss on first mention ("GDPR, obecné nařízení o ochraně
osobních údajů"), same treatment as Arabic and Russian. Do not substitute
a narrower Czech statute — the operator is EU-established, so GDPR is the
regulation that actually applies regardless of the reader's own country.
