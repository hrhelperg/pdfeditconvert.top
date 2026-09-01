# Indonesian terminology and style policy

The single source of truth for Indonesian copy on pdfeditconvert.top. Every
wave — route manifest, shared UI, tools, hubs, guides — follows it, so 174
pages read as one voice rather than 174 independent translations.

**Variant: `id` — standard Indonesian of Indonesia, `id-ID`.**

## 1. Core glossary

| English | Indonesian | Never |
| --- | --- | --- |
| file | file | berkas is technically correct but reads as stiff/bureaucratic; use "file" |
| folder | folder | |
| document | dokumen | |
| page(s) | halaman | |
| to compress | mengompres | |
| compression | kompresi | |
| to merge | menggabungkan | |
| to combine (several into one) | menggabungkan menjadi satu file | |
| to split | membagi | |
| to separate | memisahkan | |
| to rotate | memutar | |
| to extract | mengekstrak | |
| to reorder | mengurutkan ulang | |
| to convert / conversion | mengonversi / konversi | |
| watermark | watermark | tanda air (technically correct but not what Indonesian readers search) |
| to sign / signature | menandatangani / tanda tangan | |
| handwritten signature | tanda tangan tulisan tangan | |
| initials | inisial | |
| form | formulir | |
| to fill in (a form) | mengisi | |
| form field | kolom formulir | |
| checkbox | kotak centang | |
| to tick | mencentang | |
| flat (form/PDF) | see §3, use "non-interaktif" | |
| to scan / scan | memindai / pindaian | |
| a scan (the file) | dokumen hasil pindaian | |
| scanner (device) | pemindai | |
| printing | pencetakan | |
| to print | mencetak | |
| ZIP archive | file ZIP | |
| to download | mengunduh | see §2 |
| to upload | mengunggah | see §2 |
| browser | browser | peramban (correct but uncommon in casual tech writing) |
| device | perangkat | |
| phone | ponsel / HP | |
| screen | layar | |
| settings | pengaturan | |
| free (no cost) | gratis | |
| account | akun | |
| link | tautan | |
| to share | membagikan | |
| share sheet (iOS/Android) | menu bagikan | |
| preview | pratinjau | |
| password | kata sandi | |
| encryption | enkripsi | |
| privacy | privasi | |
| storage | penyimpanan | |
| quality | kualitas | |
| resolution | resolusi | |
| size (file) | ukuran | |
| layout | tata letak | |
| font | font | |
| embedded font | font tersemat | |
| searchable | dapat dicari | |
| OCR | OCR (pengenalan teks) | |
| default (adj.) | default / bawaan | |
| feature | fitur | |
| workflow | alur kerja | |

## 2. `upload` — the one deliberate decision

English "upload" carries the whole privacy argument of this site: the file
never leaves the device. Policy:

- The step verb for this site's own local tools is always **"Tambahkan"**
  ("Tambahkan file PDF"), never "Unggah" — that claims a network transfer
  the tool does not perform.
- To say a local tool does *not* upload, paraphrase (**"tanpa mengirim ke
  server"**, **"file tidak pernah meninggalkan perangkat Anda"**) or
  negate the noun directly (**"tanpa unggah"**, **"tidak perlu
  mengunggah"**).
- **"mengunggah"/"unggah"** are correct, and freely usable, when
  describing a genuine transfer to someone else's server — a school
  portal, an unknown website, a third-party tool being contrasted with
  this site's own local processing ("mengunggah kontrak ke situs yang
  tidak dikenal", "portal unggahan sering menolak file besar").
- **"mengunduh"/"unduh"** (download) must stay a clean opposite of
  "mengunggah"/"unggah" (upload) — never let the two blur, e.g. a
  "corrupted download" is "unduhan yang rusak", never "unggahan yang
  rusak".
- Note: "upload"/"download" as raw English loanwords are extremely common
  in casual Indonesian tech speech, but this site's written, edited
  content uses the correct formal Indonesian pair (unggah/unduh)
  throughout, matching how professional Indonesian tech publications and
  official app copy are actually written.

## 3. `flat` vs `interactive` PDFs and forms

Fixed renderings, used consistently everywhere:

- interactive form → **formulir interaktif**
- flat form → **formulir non-interaktif** (first mention may add "pada
  dasarnya gambar halaman yang hanya bisa ditulisi di atasnya")
- flat PDF (image of a page, no text layer) → **PDF berupa gambar** or
  **file tanpa lapisan teks**, whichever the sentence is actually about
- to flatten a filled form (lock field values permanently into the page)
  → **mengunci** (nilai kolom terkunci secara permanen ke halaman) —
  **never "meratakan"**, which in Indonesian means physically flattening
  or levelling something (ground, a surface) and reads as a
  mistranslation in this sense. "Meratakan"/"perataan" is correct only for
  the *different*, genuine sense of rasterizing a page to a flat image
  (e.g. "mencetak ke PDF meratakan semuanya menjadi piksel") — keep the
  two senses strictly apart.

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
- Numbers: file sizes and percentages in this site's content are
  effectively always whole numbers or simple decimals (`10 MB`, `50%`),
  so the formal Indonesian decimal-comma/thousands-period convention
  rarely comes up — where a genuine decimal does appear, use the comma
  (`1,5×`), not the English point. Whole numbers with units keep a space
  before the unit (`10 MB`, `90°`), matching the convention already used
  by every other locale on this site.
- Em dash — Indonesian editorial style leans toward a comma, colon, or
  simply starting a new sentence rather than the English em-dash-aside;
  don't mechanically copy every English em dash into Indonesian prose.
- Prefixes attach directly to the root with no space or hyphen
  (`mengunggah`, not `meng-unggah`; `di-download` is informal/incorrect —
  use `diunduh`).

## 6. Slug policy

- ASCII, lowercase, hyphenated, natural Indonesian search phrasing — e.g.
  `kompres-pdf` for "compress-pdf", not a word-for-word gloss of the
  English path. Indonesian has no diacritics to strip, but slugs are
  still declared explicitly per §6's usual rule: never derived from a
  title, never assume a 1:1 mapping to the English slug.
- **A slug identical to its English route id is treated as a bug, not a
  policy** (enforced by `tests/i18n/routeMap.test.ts`'s "never reuses an
  English slug verbatim" check) — every Indonesian slug must be genuine
  Indonesian phrasing, not a copy of the English path. The only sitewide
  exceptions are a short, explicitly allowlisted set for other locales
  (`pdf-editor`, `guides`, `contact`) — Indonesian does not get an
  automatic exemption for any of these; if a term happens to be a
  reasonable Indonesian word too (e.g. "kontak" for contact, not
  "contact"), translate it properly rather than relying on coincidence.
- Section prefixes: `panduan/` (guides), `perbandingan/` (comparisons),
  `kasus-penggunaan/` (use cases).
- Every slug is declared explicitly in the manifest. None is derived from
  a title.

## 7. Voice

- Address the reader as **Anda** — the standard, neutral-polite Indonesian
  second person for consumer software and web content. This is not a
  formal/distant register the way German "Sie" can feel; "Anda" is the
  ordinary, expected address for an app or a how-to guide, not a marker
  of stiff business language. Do not use "kamu" (too casual/intimate for
  this content) or drop the pronoun entirely in narrative prose.
- UI step verbs and button labels use the imperative, dropping "Anda"
  (standard Indonesian UI convention): **"Tambahkan file"**,
  **"Pilih tingkat kompresi"**, **"Unduh hasilnya"**.
- Prefer active voice and direct sentences. No filler ("perlu diketahui
  bahwa", "di era sekarang ini", "jangan ragu untuk").
- Do not soften a technical caveat: if the English says a conversion is
  approximate, the Indonesian says **kurang lebih/perkiraan**, not
  "hampir sempurna".
- Do not translate sentence by sentence — translate the point of the
  paragraph the way an Indonesian technical editor would write it.

## 8. Truthfulness

Same rules as every other locale: no invented statistics, capabilities,
legal conclusions or jurisdictional claims; the operator identity,
addresses, app identifiers and external URLs are reproduced exactly.
Indonesia has its own data-protection law (UU PDP — Undang-Undang
Pelindungan Data Pribadi, 2022), but that is a **different**, narrower
Indonesian statute — the site's operator is EU-established, so **GDPR** is
the regulation that actually applies regardless of the reader's own
country. Keep "GDPR" itself (no established single-acronym Indonesian
equivalent is in wide use) with a one-time Indonesian gloss on first
mention ("GDPR, regulasi perlindungan data Uni Eropa"), the same treatment
already used for Arabic, Russian, Czech and Japanese. Do not substitute UU
PDP in its place.
