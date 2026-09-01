# Polish terminology and style policy

The single source of truth for Polish copy on pdfeditconvert.top. Every
wave — route manifest, shared UI, tools, hubs, guides — follows it, so 174
pages read as one voice rather than 174 independent translations.

**Variant: `pl` — standard Polish of Poland, `pl-PL`.**

## 1. Core glossary

| English | Polish | Never |
| --- | --- | --- |
| file | plik | |
| folder | folder | |
| document | dokument | |
| page(s) | strona / strony | |
| to compress | skompresować / kompresować | |
| compression | kompresja | |
| to merge | scalić / łączyć | |
| to combine (several into one) | połączyć w jeden plik | |
| to split | podzielić / dzielić | |
| to separate | rozdzielić | |
| to rotate | obrócić | |
| to extract | wyodrębnić | |
| to reorder | zmienić kolejność | |
| to convert / conversion | przekonwertować / konwersja | |
| watermark | znak wodny | |
| to sign / signature | podpisać / podpis | |
| handwritten signature | odręczny podpis | |
| initials | inicjały | |
| form | formularz | |
| to fill in (a form) | wypełnić | |
| form field | pole formularza | |
| checkbox | pole wyboru | |
| to tick | zaznaczyć | |
| flat (form/PDF) | niearchiwalny — see §3, do not use; use "nieinteraktywny" | |
| to scan / scan | zeskanować / skan | |
| a scan (the file) | zeskanowany dokument | |
| scanner (device) | skaner | |
| printing | drukowanie | |
| to print | wydrukować | |
| ZIP archive | archiwum ZIP | |
| to download | pobrać | see §2 |
| to upload | przesłać / wgrać (na serwer) | see §2 |
| browser | przeglądarka | |
| device | urządzenie | |
| phone | telefon | |
| screen | ekran | |
| settings | ustawienia | |
| free (no cost) | bezpłatny / za darmo | |
| account | konto | |
| link | link / odnośnik | |
| to share | udostępnić | |
| share sheet (iOS/Android) | menu udostępniania | |
| preview | podgląd | |
| password | hasło | |
| encryption | szyfrowanie | |
| privacy | prywatność | |
| storage | przechowywanie | |
| quality | jakość | |
| resolution | rozdzielczość | |
| size (file) | rozmiar | |
| layout | układ | |
| font | czcionka | |
| embedded font | osadzona czcionka | |
| searchable | przeszukiwalny | |
| OCR | OCR (rozpoznawanie tekstu) | |
| default (adj.) | domyślny | |
| feature | funkcja | |
| workflow | sposób pracy, przepływ pracy | |

## 2. `upload` — the one deliberate decision

English "upload" carries the whole privacy argument of this site: the file
never leaves the device. Policy:

- The step verb for this site's own local tools is always **"Dodaj"**
  ("Dodaj plik PDF"), never "prześlij" or "wgraj" — those claim a network
  transfer the tool does not perform.
- To say a local tool does *not* upload, paraphrase (**"bez wysyłania na
  serwer"**, **"plik nie opuszcza Twojego urządzenia"**) or negate the noun
  directly (**"bez przesyłania"**).
- **"przesłać"/"wgrać"** (verbs) and **"przesyłanie"** (noun) are correct,
  and freely usable, when describing a genuine transfer to someone else's
  server — a school portal, an unknown website, a third-party tool being
  contrasted with this site's own local processing ("przesłać umowę na
  nieznaną stronę", "portale odrzucają duże pliki").
- **"pobrać"** (download) must stay a clean opposite of "przesłać"/"wgrać"
  (upload) — never let the two blur into each other, e.g. a "damaged
  download" is "uszkodzone pobieranie", never "uszkodzone przesyłanie".

## 3. `flat` vs `interactive` PDFs and forms

Fixed renderings, used consistently everywhere:

- interactive form → **formularz interaktywny**
- flat form → **formularz nieinteraktywny** (first mention may add "czyli w
  praktyce obraz strony, na którym się tylko pisze")
- flat PDF (image of a page, no text layer) → **PDF-obraz** or **plik bez
  warstwy tekstowej**, whichever the sentence is actually about
- to flatten a filled form (lock field values permanently into the page) →
  **utrwalić** (dane pól zostają na stałe zapisane na stronie) — **never
  "spłaszczyć"**, which in Polish means physically flattening an object
  (a box, a package) and reads as a mistranslation in this sense.
  "Spłaszczyć"/"spłaszczenie" is correct only for the *different*, genuine
  sense of rasterizing a page to a flat image (e.g. "drukowanie do PDF
  spłaszcza wszystko do pikseli") — keep the two senses strictly apart.

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

- Quotation marks: Polish primary quotes are **„ … "** (opening low-9,
  closing high) — e.g. „Dodaj plik". Nested/secondary quotes use « … » or
  ‚ … '.
- Dash: prefer the en dash **–** with spaces for a parenthetical aside
  ("skompresuj plik – bez utraty jakości"), rather than mechanically
  copying every English em dash — Polish editorial style leans toward the
  shorter dash for this role.
- Decimal separator is the comma, not the point (**2,5 MB**, not "2.5 MB");
  thousands separator is a space, not a comma, where it ever appears.
- Numbers with units: space before the unit (**10 MB**, **90°**).
- Polish diacritics (ą ć ę ł ń ó ś ź ż) are kept in full in all prose and
  UI copy. They are stripped only in slugs — see §6.

## 6. Slug policy

- ASCII-normalized, lowercase, hyphenated: diacritics are transliterated
  in slugs only (ą→a, ć→c, ę→e, ł→l, ń→n, ó→o, ś→s, ź→z, ż→z), e.g.
  `zmniejsz-pdf`, not a slug carrying "ł" or "ż" — this avoids
  percent-encoded URLs in links, sharing and analytics, the same principle
  already established for pt-BR/fr/es/de/it/ar/ru.
- Slugs read as the natural Polish search phrase, not a word-for-word
  gloss of the English path: `kompresuj-pdf` (imperative-style, matching
  how a Polish user actually searches), not a literal noun-phrase
  transliteration.
- Section prefixes: `poradniki/` (guides), `porownania/` (comparisons),
  `przypadki-uzycia/` (use cases).
- Every slug is declared explicitly in the manifest. None is derived from
  a title.

## 7. Voice

- Address the reader informally and directly. Narrative guide prose uses
  the implied informal second person ("Możesz przekonwertować plik prosto
  w przeglądarce", "Twój plik zostaje na urządzeniu") — Polish verb
  conjugation carries this without needing to spell out "Ty".
- UI step verbs and button labels use the direct imperative, which is the
  dominant convention in Polish consumer software: **"Dodaj plik"**,
  **"Wybierz poziom kompresji"**, **"Pobierz wynik"** — not an infinitive
  ("Dodanie pliku") and not the formal "Pan/Pani" register, which would
  feel corporate and distant for an everyday mobile tool.
- Prefer active voice and short sentences. No filler ("warto zauważyć,
  że", "w dzisiejszych czasach", "nie wahaj się").
- Do not soften a technical caveat: if the English says a conversion is
  approximate, the Polish says **przybliżony/w przybliżeniu**, not
  "niemal idealny".
- Do not translate sentence by sentence — translate the point of the
  paragraph the way a Polish technical editor would write it.

## 8. Truthfulness

Same rules as every other locale: no invented statistics, capabilities,
legal conclusions or jurisdictional claims; the operator identity,
addresses, app identifiers and external URLs are reproduced exactly.
**RODO** (Rozporządzenie o Ochronie Danych Osobowych) is the established
Polish acronym for GDPR and should be used — on first mention write
"RODO (GDPR)", since RODO is the term Polish readers already know, the
same way German uses DSGVO and French uses RGPD. Do not cite a different,
narrower Polish statute in its place — the site's operator is
EU-established, so GDPR/RODO is the regulation that actually applies.
