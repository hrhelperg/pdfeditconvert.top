import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";
import { JA_GUIDE_ROUTES } from "@/content/ja/routes.guides";

/**
 * Japanese route manifest — the localization manifest for ja.
 *
 * One entry per English route this locale publishes. `id` is the English
 * route id; `slug` is the permanent Japanese URL after the `/ja` prefix.
 * Category, priority, change frequency and lastmod policy are inherited —
 * see buildLocaleRoutes.
 *
 * Slug conventions (also recorded in docs/localization/ja-terminology.md):
 *
 * - ASCII, Hepburn-romanized from the natural Japanese phrase:
 *   "pdf-asshuku" for "PDF圧縮". Prose keeps full Japanese script; slugs
 *   never do.
 * - An underlying katakana-loanword term (エディター "editor") romanizes as
 *   the plain English spelling ("editor"), not a phonetic transliteration
 *   — but this exception is narrow: it applies to a single loanword
 *   standing in for the whole slug (pdf-editor, privacy-policy), never to
 *   a compound English phrase reused wholesale (`pdf-for-business`,
 *   `pdf-vs-docx` and similar were caught by
 *   tests/i18n/routeMap.test.ts's "never reuses an English slug verbatim"
 *   check and rewritten to genuine romaji — `bijinesu-muke-pdf`,
 *   `pdf-tai-docx`).
 * - Section prefixes reuse the English site's own segments (guides/,
 *   compare/, use-cases/) rather than a translated prefix — a deliberate
 *   Japanese-specific simplification, see ja-parity-audit.md. Individual
 *   entries within those sections are still fully romanized.
 */
export const JA_ROUTE_MANIFEST: readonly LocaleRouteEntry[] = [
  {
    id: "",
    slug: "",
    title: "PDF Editor — スマホでPDFを編集・変換・署名・スキャン",
    description:
      "仕事、勉強、日常生活のためのオールインワンPDFソリューション。iOS・Android対応のPDF Editorアプリで、スマホからPDFを編集、変換、圧縮、結合、署名、スキャンできます。",
  },

  // Hubs
  {
    id: "pdf-editor",
    slug: "pdf-editor",
    title: "PDFエディター — スマホでテキスト・画像・ページを編集",
    description:
      "iPhoneやAndroidでPDFを編集：テキストの変更、画像の追加、ページの並べ替え、署名。PDF Editorアプリがスマホでの編集をどれだけ簡単にするかご覧ください。",
  },
  {
    id: "pdf-converter",
    slug: "pdf-konbata",
    title: "PDFコンバーター — Word、JPG、PNGなどに変換",
    description:
      "PDFをWord、Excel、JPG、PNGに変換したり、逆方向に変換したりできます。iOS・Android対応のPDF Editorアプリで、いちばんシンプルなスマホでの変換方法を紹介します。",
  },
  {
    id: "sign-pdf",
    slug: "pdf-shomei",
    title: "PDFに署名 — スマホで電子署名を追加",
    description:
      "手書き風の署名や入力した名前で、スマホからPDFに署名できます。多くの業務フローで受け入れられています。PDF Editorアプリをお試しください。",
  },
  {
    id: "scan-to-pdf",
    slug: "sukyan-shite-pdf",
    title: "スキャンしてPDFに — 紙の書類をきれいなPDFに変換",
    description:
      "スマホのカメラで書類・身分証明書・領収書をスキャンし、きれいで検索可能なPDFに変換します。PDF Editorアプリがページの端を自動で検出します。",
  },
  {
    id: "pdf-security",
    slug: "pdf-anzen",
    title: "PDFセキュリティ — パスワード保護と暗号化",
    description:
      "パスワードと暗号化で機密性の高いPDFを保護しましょう。iPhoneとAndroidでの文書保護についての実践ガイドです。",
  },
  {
    id: "pdf-for-business",
    slug: "bijinesu-muke-pdf",
    title: "ビジネス向けPDF — 契約書・請求書・業務フロー",
    description:
      "小規模チームが契約書、請求書、承認業務にPDFをどう活用しているか。PDF Editorアプリを使った、モバイル中心の最新の業務フローです。",
  },
  {
    id: "pdf-for-students",
    slug: "gakusei-muke-pdf",
    title: "学生向けPDF — ノート・ハイライト・学習資料",
    description:
      "講義ノート、ハイライト、学習資料にPDFを活用しましょう。iOS・Android対応のPDF Editorアプリを使った、賢いスマホ活用法です。",
  },
  {
    id: "pdf-forms",
    slug: "pdf-form",
    title: "PDFフォーム — 入力・署名・管理",
    description:
      "PDFフォームの仕組みと、入力・署名・作成・修正の方法を解説します。パソコンでもスマホでも使える、インタラクティブなフォームと非インタラクティブなフォームのハブです。",
  },

  // Guides
  {
    id: "guides",
    slug: "guides",
    title: "PDFガイド — 使い方の記事とチュートリアル",
    description:
      "スマホでの利用を前提にした実践的なPDFチュートリアル：iPhoneとAndroidでの編集、変換、圧縮、結合、署名、保護の方法。",
  },

  // Compare
  {
    id: "compare/pdf-vs-docx",
    slug: "compare/pdf-tai-docx",
    title: "PDFとDOCX — 機能別に徹底比較",
    description:
      "編集のしやすさ、再現性、署名、セキュリティ、共有のしやすさでPDFとDOCXを比較します。用途に合った正しいフォーマットを選びましょう。",
  },
  {
    id: "compare/pdf-vs-jpg",
    slug: "compare/pdf-tai-jpg",
    title: "PDFとJPG — どちらの形式を使うべきか",
    description:
      "PDFとJPG、どちらでスキャンし、どちらで撮影すべきか。画質、ファイルサイズ、OCR、文書としての使いやすさを比較します。",
  },
  {
    id: "compare/pdf-app-vs-online-pdf-tools",
    slug: "compare/pdf-app-tai-online-tool",
    title: "PDFアプリとオンラインPDFツール — どちらが優れているか",
    description:
      "ネイティブPDFアプリとブラウザベースのツールを、速度、プライバシー、オフライン利用のしやすさで比較します。",
  },

  // Use cases
  {
    id: "use-cases/freelancers",
    slug: "use-cases/furiiransu",
    title: "フリーランス向けPDF Editor — 提案書と署名済み文書",
    description:
      "フリーランスに愛用されるワークフロー：提案書、署名済みの契約書、請求書。すべてスマホから完結します。",
  },
  {
    id: "use-cases/remote-work",
    slug: "use-cases/rimoto-waku",
    title: "リモートワーク向けPDF Editor — どこでも文書を",
    description:
      "移動中でも文書を扱えます：どの端末からでも、どこにいても、PDFのスキャン、署名、共有ができます。",
  },

  // Tools (browser-based, free, no upload)
  {
    id: "pdf-tools",
    slug: "pdf-tool",
    title: "無料PDFツール — ブラウザで完結、アップロード不要",
    description:
      "ブラウザだけで動く無料のPDFツールです。結合、分割、回転、透かしの追加、画像からPDF、PDFから画像への変換ができます。ファイルは端末から出ません。",
  },
  {
    id: "compress-pdf",
    slug: "pdf-asshuku",
    title: "PDF圧縮 — ブラウザでファイルサイズを縮小（無料・アップロード不要）",
    description:
      "圧縮レベルを調整しながら、ブラウザ上でPDFのファイルサイズを縮小できます。無料、会員登録不要、アップロード不要 — ファイルは端末から出ません。",
  },
  {
    id: "pdf-to-word",
    slug: "pdf-kara-word",
    title: "PDFからWord — ブラウザで編集可能なDOCXに変換",
    description:
      "ブラウザ上でPDFのテキストを、編集可能なWord（.docx）文書として抽出します。無料、アップロード不要 — レイアウトを偽って再現するのではなく、誠実なテキスト変換です。",
  },
  {
    id: "word-to-pdf",
    slug: "word-kara-pdf",
    title: "WordからPDF — ブラウザでDOCXやTXTをPDFに変換",
    description:
      "Wordの.docxや.txtファイルを、ブラウザ上できれいなPDFに変換します。無料、会員登録不要、アップロード不要 — 文書は端末から出ません。",
  },
  {
    id: "reorder-pdf-pages",
    slug: "pdf-page-narabekae",
    title: "PDFページの並べ替え — ブラウザで（無料・アップロード不要）",
    description:
      "各ページをプレビューしながら、シンプルな操作でPDFのページ順を並べ替え、並べ替えたファイルをダウンロードします。無料、会員登録不要、アップロード不要 — ファイルは端末に残ります。",
  },
  {
    id: "extract-pdf-pages",
    slug: "pdf-page-chushutsu",
    title: "PDFページの抽出 — 選んだページを新しいPDFとして保存（無料・アップロード不要）",
    description:
      "特定のページや範囲を選び、それだけを含む新しいPDFをブラウザ上でダウンロードします。無料、会員登録不要、アップロード不要 — ファイルは端末から出ません。",
  },
  {
    id: "merge-pdf",
    slug: "pdf-ketsugo",
    title: "PDF結合 — ブラウザでファイルを結合（無料・アップロード不要）",
    description:
      "複数のPDFをブラウザ上で1つのファイルに結合します。無料、会員登録不要、アップロード不要 — ファイルは端末から出ません。",
  },
  {
    id: "split-pdf",
    slug: "pdf-bunkatsu",
    title: "PDF分割 — ブラウザでページを抽出（無料・アップロード不要）",
    description:
      "ページ範囲を指定して、ブラウザ上でPDFを分割します。無料、会員登録不要、アップロード不要 — ファイルは端末に残ります。",
  },
  {
    id: "image-to-pdf",
    slug: "gazo-kara-pdf",
    title: "画像からPDF — ブラウザでJPG、PNG、WebPをPDFに変換",
    description:
      "JPG、PNG、WebPの画像をブラウザ上で1つのPDFにまとめます。無料、アップロード不要、会員登録不要 — ファイルは端末に残ります。",
  },
  {
    id: "rotate-pdf",
    slug: "pdf-kaiten",
    title: "PDF回転 — ブラウザでページの向きを修正",
    description:
      "PDFのすべて、または選んだページを90°、180°、270°回転できます。無料でプライベート — ファイルは端末から出ません。",
  },
  {
    id: "pdf-to-images",
    slug: "pdf-kara-gazo",
    title: "PDFから画像 — ページをPNGまたはJPGとして書き出し",
    description:
      "任意のPDFを、ページごとにPNGまたはJPG画像に変換します。無料、アップロード不要、会員登録不要 — すべて端末上で完結します。",
  },
  {
    id: "add-watermark-to-pdf",
    slug: "pdf-sukashi",
    title: "PDFに透かしを追加 — 無料・プライベート・ブラウザで完結",
    description:
      "PDFの全ページにテキストの透かしを追加できます。無料、アップロード不要、会員登録不要 — ファイルは端末に残ります。",
  },

  // Legal & meta
  {
    id: "privacy-policy",
    slug: "privacy-policy",
    title: "プライバシーポリシー",
    description:
      "pdfeditconvert.topとhrhelperg s.r.o.が、お客様のデータをどのように扱うかについて。",
  },
  {
    id: "terms",
    slug: "riyou-kiyaku",
    title: "利用規約",
    description: "pdfeditconvert.topのご利用にあたっての規約です。",
  },
  {
    id: "contact",
    slug: "contact",
    title: "お問い合わせ — hrhelperg s.r.o.のPDF Editor",
    description:
      "PDF Editorの開発チームへのお問い合わせはこちら。メール：info@hrhelperg.com。",
  },

  ...JA_GUIDE_ROUTES,
];
