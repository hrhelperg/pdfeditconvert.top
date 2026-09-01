# Japanese terminology and style policy

The single source of truth for Japanese copy on pdfeditconvert.top. Every
wave — route manifest, shared UI, tools, hubs, guides — follows it, so 174
pages read as one voice rather than 174 independent translations.

**Variant: `ja` — standard Japanese of Japan, `ja-JP`.**

## 1. Core glossary

| English | Japanese | Never |
| --- | --- | --- |
| file | ファイル | |
| folder | フォルダ | |
| document | 文書 / ドキュメント | |
| page(s) | ページ | |
| to compress | 圧縮する | |
| compression | 圧縮 | |
| to merge | 結合する | |
| to combine (several into one) | 1つのファイルにまとめる | |
| to split | 分割する | |
| to separate | 分ける | |
| to rotate | 回転する | |
| to extract | 抽出する | |
| to reorder | 並べ替える | |
| to convert / conversion | 変換する / 変換 | |
| watermark | 透かし | |
| to sign / signature | 署名する / 署名 | |
| handwritten signature | 手書き署名 | |
| initials | イニシャル | |
| form | フォーム | |
| to fill in (a form) | 入力する | |
| form field | フォームフィールド | |
| checkbox | チェックボックス | |
| to tick | チェックを入れる | |
| flat (form/PDF) | see §3, use "非インタラクティブ" | |
| to scan / scan | スキャンする / スキャン | |
| a scan (the file) | スキャンした文書 | |
| scanner (device) | スキャナー | |
| printing | 印刷 | |
| to print | 印刷する | |
| ZIP archive | ZIPファイル | |
| to download | ダウンロードする | see §2 |
| to upload | アップロードする | see §2 |
| browser | ブラウザ | |
| device | 端末 / デバイス | |
| phone | スマホ / スマートフォン | |
| screen | 画面 | |
| settings | 設定 | |
| free (no cost) | 無料 | |
| account | アカウント | |
| link | リンク | |
| to share | 共有する | |
| share sheet (iOS/Android) | 共有メニュー | |
| preview | プレビュー | |
| password | パスワード | |
| encryption | 暗号化 | |
| privacy | プライバシー | |
| storage | 保存 | |
| quality | 画質 / 品質 | |
| resolution | 解像度 | |
| size (file) | サイズ | |
| layout | レイアウト | |
| font | フォント | |
| embedded font | 埋め込みフォント | |
| searchable | 検索可能 | |
| OCR | OCR（文字認識） | |
| default (adj.) | デフォルト | |
| feature | 機能 | |
| workflow | ワークフロー / 作業の流れ | |

## 2. `upload` — the one deliberate decision

English "upload" carries the whole privacy argument of this site: the file
never leaves the device. Policy:

- The step verb for this site's own local tools is always **「追加」**
  （ファイルを追加）, never 「アップロード」 — that claims a network
  transfer the tool does not perform.
- To say a local tool does *not* upload, paraphrase (**「サーバーに送信
  せず」**、**「ファイルは端末から出ません」**) or negate the verb directly
  (**「アップロードなし」**、**「アップロードせずに」**).
- **「アップロードする」／「アップロード」** are correct, and freely usable,
  when describing a genuine transfer to someone else's server — a school
  portal, an unknown website, a third-party tool being contrasted with this
  site's own local processing（「不明なサイトにアップロードする」、
  「大きいファイルはアップロードポータルで拒否されることが多い」）。
- **「ダウンロードする」** (download) must stay a clean opposite of
  「アップロードする」(upload) — never let the two blur together, e.g. a
  "corrupted download" is 「ダウンロードが壊れている」, never
  「アップロードが壊れている」.

## 3. `flat` vs `interactive` PDFs and forms

Fixed renderings, used consistently everywhere:

- interactive form → **インタラクティブなフォーム**
- flat form → **非インタラクティブなフォーム**（初出時は「ページの画像の
  ようなもので、上から書き込むだけのもの」と補足してよい）
- flat PDF (image of a page, no text layer) → **画像化されたPDF** または
  **テキスト情報を持たないPDF**、文脈に応じて使い分ける
- to flatten a filled form (lock field values permanently into the page) →
  **固定する**（フィールドの入力内容がページに固定される）——
  **「平坦化する」は使わない** — this term reads as literally flattening a
  physical object, a mistranslation in this sense. 「平坦化」は
  *別の*、正しい意味（ページを画像として描画すること）にのみ使う（例:
  「PDFに印刷すると、すべてがピクセルに平坦化されます」）— この2つの意味を
  混同しない。

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

- Sentence punctuation uses full-width Japanese marks: 。(period), 、
  (comma) — not the half-width `.`/`,`. Latin product terms and numerals
  embedded in a Japanese sentence stay half-width ASCII (`PDF`, `10 MB`,
  `iPhone`).
- Parenthetical asides use full-width parentheses （…） around Japanese
  text; a literal range/format example that's actually syntax to type
  (e.g. "1-3 or 2,4,6" in a page-range field) keeps half-width Latin
  punctuation since that's the real syntax.
- Numbers stay Arabic numerals (not kanji numerals): `10 MB`, `90°`, `50%`.
  A space before the unit, matching the convention already used by every
  other locale on this site.
- Quotation marks: use「…」for a genuine quoted phrase or literal on-screen
  label (e.g. 「追加」ボタンをタップ). Do not use English-style smart quotes
  or straight quotes in Japanese prose.
- No word spacing — Japanese does not space between words, only around an
  embedded Latin term/number where it reads more clearly with one
  half-width space.

## 6. Slug policy

- ASCII, romanized (Hepburn-style) from the natural Japanese phrase, not a
  literal transliteration of the English path — e.g. `pdf-asshuku` for
  "PDF圧縮" (compress-pdf), matching the same principle already
  established for every other locale: avoid percent-encoded URLs (native
  Japanese script in a URL) in links, sharing and analytics.
- Where the underlying Japanese term is itself a **single** English
  loanword written in katakana (エディター "editor", プライバシーポリシー
  "privacy policy"), the slug may use the plain English spelling directly
  rather than a phonetic romanization of the katakana (`editor`/
  `privacy-policy`, not `editaa`) — this matches how real Japanese sites
  commonly write such URLs. This exception is narrow and does **not**
  extend to a compound English phrase reused wholesale: `pdf-for-business`,
  `pdf-vs-docx`, `scan-to-pdf` and similar are not loanword phrases, they
  are literal untranslated English, and must be romanized properly
  (`bijinesu-muke-pdf`, `pdf-tai-docx`, `sukyan-shite-pdf`). Only two
  English-identical slugs are allowlisted sitewide for this reason —
  `guides` and `privacy-policy`, alongside the pre-existing `pdf-editor`/
  `contact` exceptions other locales already established — see the
  `SHARED` set in `tests/i18n/routeMap.test.ts`'s "never reuses an English
  slug verbatim" check, which is the actual enforcement mechanism and
  caught 15 real violations during this locale's own rollout (see
  ja-parity-audit.md).
- Section **prefixes** `guides/`, `compare/`, `use-cases/` reuse the
  English site's own segments rather than a translated prefix — a
  deliberate Japanese-specific simplification. Individual entries *within*
  those sections are still fully romanized (`compare/pdf-tai-docx`, not
  `compare/pdf-vs-docx`).
- Every slug is declared explicitly in the manifest. None is derived from
  a title.

## 7. Voice

- Use the polite です・ます form throughout — the standard register for
  Japanese consumer/SaaS product copy, never the plain/literary だ・である
  form and never keigo (敬語) formal-business register, which would feel
  stiff and distant for an everyday mobile tool.
- Do not use an explicit second-person pronoun（あなた）— Japanese
  omits the subject naturally and polite verb conjugation already conveys
  the direct address; inserting あなた reads as translated-from-English,
  not native Japanese.
- Step instructions use the polite request form 〜してください
  （例:「ファイルを追加してください」）or a plain descriptive です・ます
  sentence for what the tool does, matching how Japanese how-to content is
  actually phrased.
- Prefer short, direct sentences. No filler (「言うまでもなく」、
  「今の時代」、「ぜひ」を多用しない).
- Do not soften a technical caveat: if the English says a conversion is
  approximate, the Japanese says **おおよそ／近似的に**, not
  「ほぼ完璧」.
- Do not translate sentence by sentence — translate the point of the
  paragraph the way a Japanese technical editor would write it; Japanese
  sentence structure (topic-comment, verb-final) often needs genuine
  restructuring, not word-order-preserving substitution.

## 8. Truthfulness

Same rules as every other locale: no invented statistics, capabilities,
legal conclusions or jurisdictional claims; the operator identity,
addresses, app identifiers and external URLs are reproduced exactly. Japan
has its own data-protection law (個人情報保護法, APPI), but that is a
**different**, narrower Japanese statute — the site's operator is
EU-established, so **GDPR** is the regulation that actually applies
regardless of the reader's own country. Keep "GDPR" itself (no established
single-kanji-acronym exists the way DSGVO/RGPD/RODO do for German, French,
Polish) with a one-time Japanese gloss on first mention
（「一般データ保護規則（GDPR）」）, the same treatment already used for
Arabic and Russian and Czech. Do not substitute APPI in its place.
