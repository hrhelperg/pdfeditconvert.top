# Arabic terminology and style policy

The single source of truth for Arabic copy on pdfeditconvert.top. Every
wave — route manifest, shared UI, tools, hubs, guides — follows it, so 174
pages read as one voice rather than 174 independent translations.

**Variant: `ar` — Modern Standard Arabic (فصحى / MSA), `ar` (not
dialect-specific, no regional code).** MSA is the correct register for a
professional web product read across the whole Arabic-speaking world; a
national dialect (Egyptian, Gulf, Levantine, Maghrebi) would alienate every
reader outside that one region.

## 0. This is the first RTL locale — read this before writing anything

Every locale shipped so far (pt-BR, fr, es, de, it) is left-to-right.
Arabic is right-to-left. The architecture (`dir` on `<html>`, logical
CSS properties `ms-`/`me-`/`ps-`/`pe-`/`start-`/`end-` instead of
`ml-`/`mr-`/`pl-`/`pr-`/`left-`/`right-`) was already RTL-ready or was
patched to be RTL-ready as part of enabling this locale — see the git log
for the shared-component fixes (globals.css `.callout`, `AppCTA.tsx`,
`PrivacyNote.tsx`, `FAQ.tsx`, `CompareTable.tsx`, `ComparePage.tsx`,
`Breadcrumbs.tsx`'s chevron). Content authors don't need to touch any of
that — it's mentioned here so nobody re-diagnoses it as a new bug.

**One content-level RTL rule, though:** the site bakes a literal arrow
character directly into several translated strings as a "continue reading"
indicator ("Leer la guía →" in Spanish, for example). In Arabic, reading
continues **leftward**, so every one of these uses **←** (U+2190), never
→. This is a plain content decision, not a code change — get it right in
the dictionaries and page content directly.

## 1. Core glossary

| English | Arabic | Never |
| --- | --- | --- |
| file | ملف | |
| folder | مجلد | |
| document | مستند | |
| page(s) | صفحة / صفحات | |
| to compress | ضغط (فعل: يضغط) | |
| compression | ضغط (اسم) | |
| to merge | دمج (فعل: يدمج) | |
| to combine (several into one) | دمج، جمع | |
| to split | تقسيم (فعل: يقسم) | |
| to separate | فصل | |
| to rotate | تدوير (فعل: يدور) | |
| to extract | استخراج (فعل: يستخرج) | |
| to reorder | إعادة ترتيب | |
| to convert / conversion | تحويل (فعل: يحول) / تحويل | |
| watermark | علامة مائية | |
| to sign / signature | توقيع (فعل: يوقّع) / توقيع | |
| handwritten signature | توقيع بخط اليد | |
| initials | الأحرف الأولى من الاسم | |
| form | نموذج | استمارة (صحيح لكنه أقل استخداماً في السياق الرقمي) |
| to fill in (a form) | تعبئة (فعل: يعبئ) | ملء (صحيح لكن أقل شيوعاً في سياق النماذج الرقمية) |
| form field | حقل في النموذج | |
| checkbox | مربع اختيار | |
| to tick | تحديد، وضع علامة | |
| flat (form/PDF) | غير تفاعلي (انظر §3) | |
| to flatten | تثبيت (انظر §3 — القرار المتعمد) | تسطيح (يُقرأ حرفياً كـ"جعل الشيء مسطحاً فيزيائياً"، وليس المعنى التقني الصحيح) |
| to scan / scan | مسح ضوئي (فعل: يمسح ضوئياً) / مسح ضوئي | سكانر كفعل |
| a scan (the file) | مستند ممسوح ضوئياً | |
| scanner (device) | ماسح ضوئي | |
| printing | طباعة | |
| to print | طباعة (فعل: يطبع) | |
| ZIP archive | أرشيف ZIP | |
| to download | تنزيل (فعل: ينزّل) | تحميل (يُستخدم أحياناً للتنزيل، لكن يُبقى للرفع فقط هنا لتجنّب اللبس — انظر §2) |
| to upload | رفع (فعل: يرفع) | see §2 |
| browser | متصفح | |
| device | جهاز | |
| phone | هاتف | جوال/موبايل (مفهومة لكن أقل رسمية؛ الهاتف هو الخيار الفصيح المحايد إقليمياً) |
| screen | شاشة | |
| settings | إعدادات | |
| free (no cost) | مجاني | |
| account | حساب | |
| link | رابط | |
| to share | مشاركة (فعل: يشارك) | |
| share sheet (iOS/Android) | قائمة المشاركة | |
| preview | معاينة | |
| password | كلمة المرور | |
| encryption | تشفير | |
| privacy | خصوصية | |
| storage | تخزين | |
| quality | جودة | |
| resolution | دقة (الصورة) | |
| size (file) | حجم | |
| layout | تنسيق، تخطيط | |
| font | خط | |
| embedded font | خط مضمّن | |
| searchable | قابل للبحث | |
| OCR | التعرف الضوئي على الحروف (OCR) | |
| default (adj.) | افتراضي | |
| feature | ميزة | |
| workflow | سير العمل | |

## 2. `upload` — the one deliberate decision

English "upload" carries the whole privacy argument of this site: the file
never leaves the device. Policy:

- The step verb for this site's own local tools is always **"إضافة"**
  (to add), never "رفع" (upload) — that would claim a transfer the tool
  does not perform.
- To say a local tool does *not* upload, paraphrase what actually happens:
  **"دون رفع أي شيء إلى خادم"**, **"يبقى ملفك على جهازك"**, **"دون أي
  نقل للبيانات"**.
- **"رفع"** (upload, verb: يرفع) is correct and expected when describing a
  genuine transfer to someone else's server — a school portal, an unknown
  website, a third-party "online" tool being explicitly contrasted with
  this site's own local processing.
- Keep "تنزيل" (download) and "رفع" (upload) as a clean opposite pair —
  don't let "تحميل" drift in to mean upload anywhere in this site's copy,
  even though some Arabic tech writing uses it loosely for either
  direction; the ambiguity would blur the exact claim this site needs to
  make precisely.

## 3. `flat` vs `interactive` PDFs and forms

Fixed renderings, used consistently everywhere:

- interactive form → **نموذج تفاعلي**
- flat form → **نموذج غير تفاعلي** (first mention may add "أي أنه في
  الأساس صورة للصفحة")
- flat PDF (image of a page, no text layer) → **PDF غير قابل للتحرير** or
  **PDF كصورة**, whichever the sentence is actually about
- to flatten a filled form → **تثبيت البيانات في الصفحة بشكل نهائي** on
  first mention, then simply **تثبيت** — never **تسطيح**, which reads as
  physically flattening an object, not locking form data into the page.

## 4. Product and technical strings — never translated

`PDF`, `DOCX`, `JPG`, `PNG`, `WebP`, `HEIC`, `ZIP`, `Word`, `Excel`,
`PowerPoint`, `Google Docs`, `Google Drive`, `iCloud`, `AirDrop`, `Gmail`,
`WhatsApp`, `Signal`, `iPhone`, `iPad`, `Android`, `iOS`, `macOS`,
`Windows`, `Linux`, `FileVault`, `BitLocker`, `LUKS`, `Safari`, `Chrome`,
`Firefox`, `WebAssembly`, `AcroForm`, `XFA`, `PDF/A`, `PDF/UA`, `PDF/X`,
`Markdown`, `HTML`, `OCR`, **`PDF Editor`** (the app name), `App Store`,
`Google Play`. These stay in Latin script embedded in the Arabic sentence
— the browser's bidi algorithm handles the direction switch automatically,
no manual isolation marks needed for a simple inline product-name mention.

File extensions, code identifiers, URLs and query parameters are never
translated, transliterated or reformatted.

## 5. Typography

- **Arabic punctuation, not Latin.** Use the Arabic comma **،** (not `,`),
  the Arabic semicolon **؛** (not `;`), and the Arabic question mark
  **؟** (not `?`) throughout. This is the single mechanical check most
  likely to slip at scale — a translator working fast defaults to the
  Latin keys next to the Arabic ones. Latin punctuation embedded mid-word
  in a bidi run (URLs, file extensions like `.docx`) stays as-is; it's
  prose-level Arabic punctuation this rule targets.
- **Numerals: Western Arabic (0–9), not Eastern Arabic-Indic (٠١٢٣...).**
  This matches how Modern Standard Arabic technology and business writing
  is actually set across the Arabic-speaking web (Eastern digits remain
  common in some print and religious contexts, not in MSA tech copy) —
  file sizes ("25 ميجابايت"), page counts, dates all use 0–9.
  Digit *order* within a number is never reversed — the browser's Unicode
  bidi algorithm renders "25 MB" correctly inside an RTL paragraph on its
  own; never hand-reverse digits to "fix" perceived direction.
- **The "continue reading" arrow points left: ← (U+2190), never →.** See
  §0. Applies to every dictionary/content string that bakes an arrow
  glyph directly into the label (`readTheGuide`, `goToHub`,
  `browseAllToolsLabel`, `browseAllGuidesLabel`, and any guide/hub content
  that does the same).
- Keep every Latin product name/extension exactly as written in §4 — no
  Arabic-script transliteration of `PDF`, `Word`, etc.

## 6. Slug policy

- **ASCII-transliterated (romanized), not native Arabic script.** This
  matches the stated principle already established for pt-BR, fr, es, de
  and it: avoid percent-encoded URLs in links, sharing, and analytics.
  Arabic script slugs are technically supported by the route map (`slug`
  is a plain string) and would render natively in a modern browser's
  address bar, but every other locale on this site keeps URLs
  copy-paste-safe ASCII, and there's no reason to break that consistency
  for the one locale where it would matter most for readability of raw
  links in emails, chat apps, and analytics dashboards.
- Romanize using a simple, readable transliteration a search-savvy reader
  would recognize (not strict academic transliteration with diacritics):
  e.g. `dam-malaffat-pdf` for "دمج ملفات PDF" (merge PDF files),
  `kayfiyyat-dght-pdf` for "كيفية ضغط PDF" (how to compress a PDF).
  Every slug is declared explicitly in the manifest, same as every other
  locale — never derived automatically from the Arabic title.
- Section prefixes: `adilla/` (أدلة, guides), `muqaranat/` (مقارنات,
  compare), `halat-alistikhdam/` (حالات الاستخدام, use cases).

## 7. Voice

- Address the reader with the masculine-generic second-person singular
  (أنتَ / تفعل), the standard neutral default in Arabic web and product
  copy — not a stylistic exclusion, just how MSA imperative/second-person
  address conventionally defaults absent a reason to do otherwise.
- Prefer direct imperative verbs for steps ("افتح الملف", "اختر مستوى
  الضغط") over passive or overly formal constructions.
- No filler — avoid "من الجدير بالذكر أن", "في عصرنا الحالي", generic
  throat-clearing that MSA web writing tends to overuse relative to how
  concise the English source is.
- Do not soften a technical caveat. If the English says a conversion is
  approximate, the Arabic says **تقريبي**, not an invented guarantee of
  perfection.
- Translate the point of the paragraph the way a native Arabic technical
  editor would write it — never sentence-by-sentence machine transposition.

## 8. Truthfulness

Same rules as every other locale: no invented statistics, capabilities,
legal conclusions or jurisdictional claims; the operator identity,
addresses, app identifiers and external URLs are reproduced exactly. Where
a guide cites data-protection law, use **"اللائحة العامة لحماية البيانات
(GDPR)"** on first mention (full Arabic gloss with the English acronym
kept, since there is no single established Arabic-script acronym the way
DSGVO/RGPD are established in German/French/Italian/Spanish), then GDPR
alone afterward — the regulation applies because the controller is
established in the EU, regardless of the reader's own country. Prefer
conservative wording ("وفقاً للقوانين المعمول بها") over naming a specific
national statute the English source does not support.
