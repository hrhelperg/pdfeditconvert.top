# Turkish terminology and style policy

The single source of truth for Turkish copy on pdfeditconvert.top. Every
wave — route manifest, shared UI, tools, hubs, guides — follows it, so 174
pages read as one voice rather than 174 independent translations.

**Variant: `tr` — standard Turkish of Turkey, `tr-TR`.**

## 1. Core glossary

| English | Turkish | Never |
| --- | --- | --- |
| file | dosya | |
| folder | klasör | |
| document | belge | |
| page(s) | sayfa / sayfalar | |
| to compress | sıkıştırmak | |
| compression | sıkıştırma | |
| to merge | birleştirmek | |
| to combine (several into one) | tek dosyada birleştirmek | |
| to split | bölmek | |
| to separate | ayırmak | |
| to rotate | döndürmek | |
| to extract | çıkarmak | |
| to reorder | yeniden sıralamak | |
| to convert / conversion | dönüştürmek / dönüştürme | |
| watermark | filigran | |
| to sign / signature | imzalamak / imza | |
| handwritten signature | el yazısı imza | |
| initials | paraf | |
| form | form | |
| to fill in (a form) | doldurmak | |
| form field | form alanı | |
| checkbox | onay kutusu | |
| to tick | işaretlemek | |
| flat (form/PDF) | see §3, use "etkileşimsiz" | |
| to scan / scan | taramak / tarama | |
| a scan (the file) | taranan belge | |
| scanner (device) | tarayıcı | |
| printing | yazdırma | |
| to print | yazdırmak | |
| ZIP archive | ZIP dosyası | |
| to download | indirmek | see §2 |
| to upload | yüklemek | see §2 |
| browser | tarayıcı (context distinguishes from "scanner" — see note) | |
| device | cihaz | |
| phone | telefon | |
| screen | ekran | |
| settings | ayarlar | |
| free (no cost) | ücretsiz | |
| account | hesap | |
| link | bağlantı | |
| to share | paylaşmak | |
| share sheet (iOS/Android) | paylaşım menüsü | |
| preview | önizleme | |
| password | şifre / parola | |
| encryption | şifreleme | |
| privacy | gizlilik | |
| storage | depolama | |
| quality | kalite | |
| resolution | çözünürlük | |
| size (file) | boyut | |
| layout | yerleşim | |
| font | yazı tipi | |
| embedded font | gömülü yazı tipi | |
| searchable | aranabilir | |
| OCR | OCR (metin tanıma) | |
| default (adj.) | varsayılan | |
| feature | özellik | |
| workflow | iş akışı | |

**"tarayıcı" note**: Turkish uses the same word for "(web) browser" and
"scanner (device)" — "tarayıcı." This site's content almost never needs
both senses in the same sentence, but where ambiguity is possible, prefer
"web tarayıcısı" for the browser sense.

## 2. `upload` — the one deliberate decision

English "upload" carries the whole privacy argument of this site: the file
never leaves the device. Policy:

- The step verb for this site's own local tools is always **"Ekle"**
  ("PDF dosyanı ekle"), never "Yükle" — that claims a network transfer
  the tool does not perform. Note "yüklemek" is also the general Turkish
  verb for "to load," which makes this an especially easy word to misuse
  here — always check the actual sense before using it.
- To say a local tool does *not* upload, paraphrase (**"sunucuya
  gönderilmeden"**, **"dosyan cihazından hiç çıkmaz"**) or negate the noun
  directly (**"yükleme yok"**, **"yüklemeden"**).
- **"yüklemek"/"yükleme"** are correct, and freely usable, when describing
  a genuine transfer to someone else's server — a school portal, an
  unknown website, a third-party tool being contrasted with this site's
  own local processing ("sözleşmeyi bilinmeyen bir siteye yüklemek",
  "yükleme portalları büyük dosyaları çoğu zaman reddeder").
- **"indirmek"/"indirme"** (download) must stay a clean opposite of
  "yüklemek"/"yükleme" (upload) — never let the two blur, e.g. a
  "corrupted download" is "bozuk indirme", never "bozuk yükleme".

## 3. `flat` vs `interactive` PDFs and forms

Fixed renderings, used consistently everywhere:

- interactive form → **etkileşimli form**
- flat form → **etkileşimsiz form** (first mention may add "aslında
  üzerine yazı yazılan bir sayfa görüntüsü")
- flat PDF (image of a page, no text layer) → **görüntü PDF'i** or **metin
  katmanı olmayan dosya**, whichever the sentence is actually about
- to flatten a filled form (lock field values permanently into the page)
  → **kilitlemek** (alan değerleri sayfaya kalıcı olarak kilitlenir) —
  **never "düzleştirmek"**, which in Turkish means physically flattening
  or levelling an object and reads as a mistranslation in this sense.
  "Düzleştirmek" is correct only for the *different*, genuine sense of
  rasterizing a page to a flat image (e.g. "PDF'e yazdırmak her şeyi
  piksellere düzleştirir") — keep the two senses strictly apart.

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

- Standard Latin punctuation: period `.` and comma `,`. Quotation marks
  use curly `" "` for a genuine quote, not straight `" "`.
- Decimal separator is the comma, not the point (**2,5 MB**, not "2.5
  MB"), matching Continental European convention; a space before the unit
  (**10 MB**, **90°**).
- **Dotted/dotless I is a real risk, not a style nicety.** Turkish has two
  pairs of the letter I: dotted İ/i and dotless I/ı. Never programmatically
  uppercase/lowercase Turkish text with a generic (English-rule) case
  transform — "İstanbul".toLowerCase() and "Istanbul".toLowerCase() do not
  behave the way an English speaker expects, and this class of bug has
  broken real software before. When writing prose by hand this doesn't
  come up, but if any tooling in this pipeline ever auto-derives a slug or
  a capitalized label from Turkish text, that transform must be
  Turkish-locale-aware or the diacritic-stripping table in §6, never a
  blind `.toUpperCase()`/`.toLowerCase()`.
- Em dash — Turkish editorial style commonly uses a comma or simply starts
  a new sentence rather than the English em-dash-aside; don't mechanically
  copy every English em dash into Turkish prose.

## 6. Slug policy

- ASCII, lowercase, hyphenated, genuine Turkish search phrasing — e.g.
  `pdf-sikistir` for "compress-pdf", not a word-for-word gloss of the
  English path. Diacritics are stripped in slugs only (ç→c, ğ→g, ı→i,
  ö→o, ş→s, ü→u) — prose keeps every diacritic in full.
- **A slug identical to its English route id is treated as a bug, not a
  policy** (enforced by `tests/i18n/routeMap.test.ts`'s "never reuses an
  English slug verbatim" check) — every Turkish slug must be genuine
  Turkish phrasing, not a copy of the English path. The only sitewide
  exceptions are a short, explicitly allowlisted set for other locales
  (`pdf-editor`, `guides`, `contact`, `privacy-policy`) — Turkish does not
  get an automatic exemption for any of these.
- Section prefixes: `kilavuzlar/` (guides), `karsilastirma/`
  (comparisons), `kullanim-senaryolari/` (use cases) — all diacritic-
  stripped per the rule above.
- Every slug is declared explicitly in the manifest. None is derived from
  a title.

## 7. Voice

- Address the reader informally, with **sen**, matching the friendly,
  direct tone most Turkish consumer/mobile-app copy uses (not the more
  formal/distant **siz**, which would feel corporate for an everyday
  tool) — the same register choice already made for French (tu), German
  (du), Polish and Czech, deliberately differing from Russian's formal
  choice.
- UI step verbs and button labels use the direct imperative, dropping the
  pronoun (Turkish verb conjugation already carries it): **"Dosya ekle"**,
  **"Sıkıştırma düzeyini seç"**, **"Sonucu indir"**.
- Prefer active voice and short sentences. No filler ("belirtmek
  gerekirse ki", "günümüzde", "çekinmeden").
- Do not soften a technical caveat: if the English says a conversion is
  approximate, the Turkish says **yaklaşık/tahmini**, not "neredeyse
  mükemmel".
- Do not translate sentence by sentence — translate the point of the
  paragraph the way a Turkish technical editor would write it; Turkish
  is agglutinative and verb-final, so a genuinely natural sentence often
  needs real restructuring, not word-order-preserving substitution.

## 8. Truthfulness

Same rules as every other locale: no invented statistics, capabilities,
legal conclusions or jurisdictional claims; the operator identity,
addresses, app identifiers and external URLs are reproduced exactly.
Turkey has its own data-protection law (KVKK — Kişisel Verilerin
Korunması Kanunu), but that is a **different**, narrower Turkish statute —
the site's operator is EU-established, so **GDPR** is the regulation that
actually applies regardless of the reader's own country. Keep "GDPR"
itself (KVKK is not a substitute — it's a distinct, non-equivalent Turkish
law) with a one-time Turkish gloss on first mention ("GDPR, AB'nin veri
koruma düzenlemesi"), the same treatment already used for Arabic, Russian,
Czech, Japanese and Indonesian. Do not substitute KVKK in its place.
