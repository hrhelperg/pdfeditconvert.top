# Russian terminology and style policy

The single source of truth for Russian copy on pdfeditconvert.top. Every
wave — route manifest, shared UI, tools, hubs, guides — follows it, so 174
pages read as one voice rather than 174 independent translations.

**Variant: `ru` — standard Russian, `ru-RU`.** Not a regional/diaspora
variant; standard written Russian as used across ru.wikipedia.org-level
technology and consumer-product content.

## 1. Core glossary

| English | Russian | Never |
| --- | --- | --- |
| file | файл | |
| folder | папка | |
| document | документ | |
| page(s) | страница / страницы | |
| to compress | сжать / сжимать | компрессировать |
| compression | сжатие | компрессия |
| to merge | объединить / объединять | смёрджить, слить (просторечно) |
| to combine (several into one) | объединить, соединить | |
| to split | разделить / делить | сплитовать |
| to separate | отделить | |
| to rotate | повернуть / поворачивать | ротировать |
| to extract | извлечь / извлекать | |
| to reorder | изменить порядок | |
| to convert / conversion | конвертировать / преобразовать / конвертация | |
| watermark | водяной знак | |
| to sign / signature | подписать / подпись | |
| handwritten signature | подпись от руки, рукописная подпись | |
| initials | инициалы | |
| form | форма | анкета (неточно для PDF-контекста) |
| to fill in (a form) | заполнить | |
| form field | поле формы | |
| checkbox | флажок, чекбокс | |
| to tick | отметить, поставить галочку | |
| flat (form/PDF) | неинтерактивный (см. §3) | |
| to flatten | зафиксировать (см. §3 — сознательное решение) | сплющить (буквально «сделать физически плоским», не подходит по смыслу) |
| to scan / scan | отсканировать / скан, сканирование | |
| a scan (the file) | скан, отсканированный документ | |
| scanner (device) | сканер | |
| printing | печать | |
| to print | распечатать / печатать | |
| ZIP archive | ZIP-архив | |
| to download | скачать | загрузить (оставлено только для «загрузить на сервер», см. §2 — не смешивать со скачиванием) |
| to upload | загрузить (на сервер) | see §2 |
| browser | браузер | |
| device | устройство | |
| phone | телефон | |
| screen | экран | |
| settings | настройки | |
| free (no cost) | бесплатно | |
| account | аккаунт | |
| link | ссылка | |
| to share | поделиться | |
| share sheet (iOS/Android) | меню «Поделиться» | |
| preview | предпросмотр | |
| password | пароль | |
| encryption | шифрование | |
| privacy | конфиденциальность | |
| storage | хранилище | |
| quality | качество | |
| resolution | разрешение | |
| size (file) | размер | |
| layout | вёрстка, оформление | |
| font | шрифт | |
| embedded font | встроенный шрифт | |
| searchable | доступный для поиска | |
| OCR | распознавание текста (OCR) | |
| default (adj.) | по умолчанию | |
| feature | функция | |
| workflow | рабочий процесс | |

## 2. `upload` — the one deliberate decision

English "upload" carries the whole privacy argument of this site: the file
never leaves the device. Policy:

- The step verb for this site's own local tools is always **«Добавить»**,
  never «Загрузить» — that would claim a transfer the tool does not
  perform.
- To say a local tool does *not* upload, either paraphrase (**«файл не
  отправляется на сервер»**, **«файл остаётся на вашем устройстве»**,
  **«без какой-либо передачи данных»**) or negate the noun directly
  (**«без загрузки»**) — both are fine, use whichever reads more
  naturally in the sentence.
- **«загрузить»** (verb) is correct and expected when describing a
  genuine transfer to someone else's server — a government portal, an
  unfamiliar website, a third-party "online" tool being contrasted with
  this site's own local processing.
- Keep «скачать» (download) and «загрузить» (upload) as a clean opposite
  pair in this site's copy — Russian colloquial usage sometimes blurs
  «загрузить» to mean either direction, but that ambiguity would blur the
  exact privacy claim this site needs to make precisely, so this site
  never uses «загрузить» for downloading.

## 3. `flat` vs `interactive` PDFs and forms

Fixed renderings, used consistently everywhere:

- interactive form → **интерактивная форма**
- flat form → **неинтерактивная форма** (first mention may add «то есть
  по сути изображение страницы»)
- flat PDF (image of a page, no text layer) → **нередактируемый PDF** or
  **PDF-изображение**, whichever the sentence is actually about
- to flatten a filled form → **зафиксировать данные на странице** on
  first mention, then simply **зафиксировать** — never **сплющить**
  (reads as physically flattening an object, not locking form data into
  the page).

## 4. Product and technical strings — never translated

`PDF`, `DOCX`, `JPG`, `PNG`, `WebP`, `HEIC`, `ZIP`, `Word`, `Excel`,
`PowerPoint`, `Google Docs`, `Google Drive`, `iCloud`, `AirDrop`, `Gmail`,
`WhatsApp`, `Signal`, `iPhone`, `iPad`, `Android`, `iOS`, `macOS`,
`Windows`, `Linux`, `FileVault`, `BitLocker`, `LUKS`, `Safari`, `Chrome`,
`Firefox`, `WebAssembly`, `AcroForm`, `XFA`, `PDF/A`, `PDF/UA`, `PDF/X`,
`Markdown`, `HTML`, `OCR`, **`PDF Editor`** (the app name), `App Store`,
`Google Play`. These stay in Latin script exactly as written.

File extensions, code identifiers, URLs and query parameters are never
translated, transliterated or reformatted.

## 5. Typography

- Quotation marks: Russian «ёлочки» **« … »** for a genuine quote or
  scare-quote, never straight `" "`. For a quote nested inside another
  quote, use the German-style „ " pair for the inner one.
- The em dash **—** (not a hyphen `-`) is the standard Russian
  punctuation dash, set with spaces on both sides in running prose (this
  differs from English's tighter em-dash spacing) — use it for
  parenthetical asides and list-style clauses the way the English source
  uses its em dashes.
- Keep every Latin product name/extension exactly as written in §4 — no
  Cyrillic transliteration of `PDF`, `Word`, etc.
- Numbers: `10 МБ`, `25 МБ` — space before the unit; the unit itself is
  the Russian abbreviation (МБ, not MB) except for untranslatable format
  names.

## 6. Slug policy

- **ASCII-transliterated (romanized), not native Cyrillic script.** This
  matches the principle already established for pt-BR, fr, es, de and it:
  avoid percent-encoded URLs in links, sharing, and analytics — even
  though Cyrillic slugs are technically supported (`slug` is a plain
  string in the route map) and would render natively in a modern
  browser's address bar, every other locale on this site keeps URLs
  copy-paste-safe ASCII.
- Romanize using a simple, readable transliteration a search-savvy reader
  would recognize (not strict scholarly transliteration): e.g.
  `szhat-pdf` for "сжать PDF" (compress a PDF), `kak-obedinit-pdf` for
  "как объединить PDF" (how to merge a PDF). Every slug is declared
  explicitly in the manifest, never derived automatically from the
  Russian title.
- Section prefixes: `instrukcii/` (инструкции, guides), `sravnenie/`
  (сравнение, compare), `scenarii-ispolzovaniya/` (сценарии
  использования, use cases).

## 7. Voice

- Address the reader with the formal/polite **«вы»** (capitalized «Вы»
  only in direct address like a salutation, lowercase in ordinary running
  prose per standard Russian convention), not the informal «ты» — this is
  the expected, non-jarring register for Russian software and web
  copy addressing an unknown reader, unlike the deliberately casual «tu»
  chosen for the French version.
- Prefer direct imperative verbs for steps ("Откройте файл", "Выберите
  уровень сжатия") over passive constructions.
- No filler — avoid "стоит отметить, что", "в наши дни", generic
  throat-clearing phrases that add length without adding information.
- Do not soften a technical caveat. If the English says a conversion is
  approximate, the Russian says **приблизительно**, not an invented
  guarantee of perfection.
- Translate the point of the paragraph the way a native Russian technical
  editor would write it — never sentence-by-sentence machine transposition.

## 8. Truthfulness

Same rules as every other locale: no invented statistics, capabilities,
legal conclusions or jurisdictional claims; the operator identity,
addresses, app identifiers and external URLs are reproduced exactly. Where
a guide cites data-protection law, use **GDPR** (with a one-time Russian
gloss on first mention — «Общий регламент по защите данных (GDPR)») rather
than referencing Russian domestic data-protection law (152-ФЗ) — the
operator is an EU-established company (hrhelperg s.r.o., Czech Republic)
and GDPR is the regulation that actually applies, regardless of the
reader's own country; inventing a Russian-law angle here would be false.
Prefer conservative wording ("в соответствии с применимым
законодательством") over naming a specific statute the English source
does not support.
