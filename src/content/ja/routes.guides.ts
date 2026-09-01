import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";

/**
 * Japanese route manifest for the guide library.
 *
 * Slugs follow the natural Japanese search-keyword phrasing under the fixed
 * "guides/" section prefix (kept as the English word — see §6 of the
 * terminology doc), ASCII Hepburn-romanized with long vowels simplified.
 * Terminology policy: docs/localization/ja-terminology.md.
 */
export const JA_GUIDE_ROUTES: readonly LocaleRouteEntry[] = [
  {
    id: "guides/how-to-edit-pdf-on-iphone",
    slug: "guides/iphone-pdf-henshu",
    title: "iPhoneでPDFを編集する方法（2026年版）",
    description:
      "iPhoneで直接、PDFのテキストを編集し、画像を追加し、ページを並べ替えられます。PDF Editorアプリを使ったステップバイステップガイドです。",
  },
  {
    id: "guides/how-to-edit-pdf-on-android",
    slug: "guides/android-pdf-henshu",
    title: "AndroidでPDFを編集する方法（2026年版）",
    description:
      "AndroidでPDFを編集：テキストの変更、ページの挿入、文書への署名。PDF Editorアプリを使った、わかりやすいステップバイステップの手順です。",
  },
  {
    id: "guides/how-to-compress-pdf",
    slug: "guides/pdf-asshuku-hoho",
    title: "PDFを圧縮する方法（画質を落とさずに）",
    description:
      "メール送信やアップロード用に、画質を落とさずPDFのファイルサイズを縮小します。PDF Editorアプリを使った、スマホでも使いやすいチュートリアルです。",
  },
  {
    id: "guides/how-to-merge-pdf-files",
    slug: "guides/pdf-ketsugo-hoho",
    title: "スマホやパソコンでPDFファイルを結合する方法",
    description:
      "複数のPDFを1つの文書にまとめます。PDF Editorアプリを使った、ステップバイステップのスマホ向けワークフローです。",
  },
  {
    id: "guides/how-to-sign-pdf-on-phone",
    slug: "guides/sumaho-pdf-shomei",
    title: "スマホでPDFに署名する方法",
    description:
      "iPhoneやAndroidから、法的に有効な電子署名をPDFに追加します。PDF Editorアプリを使った実践ガイドです。",
  },
  {
    id: "guides/how-to-scan-documents-to-pdf",
    slug: "guides/sumaho-scan-to-pdf",
    title: "スマホで書類をスキャンしてPDFにする方法",
    description:
      "スマホのカメラを使って、複数ページの書類をきれいなPDFにスキャンします。端の自動検出とOCRを備えたスマホ向けワークフローです。",
  },
  {
    id: "guides/best-pdf-app-for-students",
    slug: "guides/gakusei-pdf-app",
    title: "学生に最適なPDFアプリはどれか（2026年版）",
    description:
      "学生がPDFアプリに本当に必要なもの：ノート機能、ハイライト、署名、無料の変換機能。評価基準を正直に解説します。",
  },
  {
    id: "guides/best-pdf-app-for-business",
    slug: "guides/business-pdf-app",
    title: "ビジネスに最適なPDFアプリはどれか（2026年版）",
    description:
      "小規模チームがPDFアプリに求めるべきもの：署名、契約書対応、セキュリティ、スマホでのコラボレーション。",
  },
  {
    id: "guides/pdf-vs-docx",
    slug: "guides/pdf-docx-tsukaiwake",
    title: "PDFとDOCX — どちらの形式を使うべきか",
    description:
      "DOCXではなくPDFを選ぶべき場面、その逆の場面を整理します。編集のしやすさ、再現性、署名、共有のしやすさを明快に比較します。",
  },
  {
    id: "guides/how-to-protect-pdf-file",
    slug: "guides/pdf-password-hogo-hoho",
    title: "PDFファイルをパスワードで保護する方法",
    description:
      "スマホでもパソコンでも、PDFにパスワード保護と暗号化を追加できます。PDF Editorアプリを使った実践ガイドです。",
  },
  {
    id: "guides/how-to-convert-pdf-to-word",
    slug: "guides/pdf-kara-word-henkan-hoho",
    title: "PDFをWordに変換する方法 — ブラウザで無料",
    description:
      "ブラウザ上でPDFのテキストを編集可能なWord文書に抽出します。きれいに変換できるもの、手直しが必要なもの、スキャンではうまくいかないケースを解説します。",
  },
  {
    id: "guides/how-to-convert-word-to-pdf",
    slug: "guides/word-kara-pdf-henkan-hoho",
    title: "WordをPDFに変換する方法 — 無料・アップロード不要",
    description:
      ".docxや.txtファイルを、ブラウザ上できれいで共有しやすいPDFに変換します。PDFが送るのに適した形式である理由と、書き出し前に確認すべき点を解説します。",
  },
  {
    id: "guides/how-to-convert-jpg-to-pdf",
    slug: "guides/jpg-kara-pdf-henkan-hoho",
    title: "JPGをPDFに変換する方法 — 無料の画像からPDF変換",
    description:
      "1枚または複数のJPG写真を、ブラウザ上で1つのPDFにまとめます。領収書、身分証明書、書類の写真に最適です。画質やiPhoneのHEICについても正直に解説します。",
  },
  {
    id: "guides/how-to-convert-png-to-pdf",
    slug: "guides/png-kara-pdf-henkan-hoho",
    title: "PNGをPDFに変換する方法 — スクリーンショットや図をくっきりと",
    description:
      "PNGのスクリーンショット、図、グラフィックをブラウザ上で1つのPDFに変換します。PNGがテキストをくっきり保つ理由と、透明部分がどうなるかを解説します。",
  },
  {
    id: "guides/how-to-convert-webp-to-pdf",
    slug: "guides/webp-kara-pdf-henkan-hoho",
    title: "WebPをPDFに変換する方法 — Web画像を文書に",
    description:
      "Webから保存したWebP画像を、ブラウザ上で1つのPDFに変換します。WebPが他のアプリで拒否されがちな理由と、変換で互換性が解決する仕組みを解説します。",
  },
  {
    id: "guides/how-to-convert-pdf-to-jpg",
    slug: "guides/pdf-kara-jpg-henkan-hoho",
    title: "PDFをJPGに変換する方法 — ページを画像として書き出す",
    description:
      "ブラウザ上でPDFの各ページをJPG画像として書き出します。PNGよりJPGが適する場面、拡大縮小が画質に与える影響、画像プレビューがPDFより優れている場面を解説します。",
  },
  {
    id: "guides/how-to-convert-pdf-to-png",
    slug: "guides/pdf-kara-png-henkan-hoho",
    title: "PDFをPNGに変換する方法 — くっきりとした劣化なしのページ画像",
    description:
      "ブラウザ上でPDFの各ページを高画質なPNG画像として書き出します。PNGがテキストや図をくっきり保つ理由に加え、拡大縮小と透明部分についても解説します。",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-iphone",
    slug: "guides/iphone-shashin-kara-pdf",
    title: "iPhoneで写真をPDFに変換する方法（HEIC対応）",
    description:
      "iPhoneの写真を1つのPDFにまとめます。つまずきやすいHEIC形式の癖への対処法も含みます。ブラウザで行う方法と、より速いアプリ内での方法を紹介します。",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-android",
    slug: "guides/android-shashin-kara-pdf",
    title: "Androidで写真をPDFに変換する方法",
    description:
      "ブラウザツールや標準搭載の「PDFとして印刷」機能を使い、Androidの写真を1つのPDFに変換します。スキャン機能を使った、より速いアプリ内ワークフローも紹介します。",
  },
  {
    id: "guides/how-to-convert-scanned-documents-to-pdf",
    slug: "guides/scan-gazo-kara-pdf",
    title: "スキャンした書類をPDFに変換する方法",
    description:
      "すでにスキャン画像や紙の書類の写真がありますか？ ブラウザ上で1つのPDFにまとめられます。OCRの役割と、スキャンを検索可能にするためにOCRが必要な理由も解説します。",
  },
  {
    id: "guides/how-to-split-pdf-files",
    slug: "guides/pdf-bunkatsu-hoho",
    title: "PDFを複数のファイルに分割する方法（無料）",
    description:
      "ブラウザ上で、ページ範囲を指定して大きなPDFを複数の小さなファイルに分割します。分割と抽出をどう使い分けるか、元のファイルを安全に残す方法も解説します。",
  },
  {
    id: "guides/how-to-extract-pages-from-pdf",
    slug: "guides/pdf-page-chushutsu-hoho",
    title: "PDFからページを抽出する方法（無料・アップロード不要）",
    description:
      "ブラウザ上で、特定のページや範囲をPDFから抜き出し、新しいファイルにまとめます。必要なページだけを送りたいときに最適です。",
  },
  {
    id: "guides/how-to-reorder-pdf-pages",
    slug: "guides/pdf-page-narabekae-hoho",
    title: "PDFのページを並べ替える方法（無料・ブラウザで完結）",
    description:
      "ブラウザ上でPDFのページを正しい順序に並べ替えます。逆順でスキャンしてしまった書類や、順番が崩れて結合されたファイルを修正できます。",
  },
  {
    id: "guides/how-to-rotate-pdf-pages",
    slug: "guides/pdf-page-kaiten-hoho",
    title: "PDFのページを回転する方法（無料・アップロード不要）",
    description:
      "ブラウザ上で、PDFの全ページまたは選んだページを90°、180°、270°回転できます。横向きのスキャンや上下逆さまのページを直し、文書を正しく読める状態にします。",
  },
  {
    id: "guides/how-to-add-watermark-to-pdf",
    slug: "guides/pdf-sukashi-tsuika-hoho",
    title: "PDFに透かしを追加する方法（無料）",
    description:
      "ブラウザ上で、「DRAFT」や「CONFIDENTIAL」といったテキストをPDFの全ページに重ねられます。透かしが何を守り、何を守らないのかを正直に解説します。",
  },
  {
    id: "guides/how-to-remove-unwanted-pages-from-pdf",
    slug: "guides/pdf-fuyo-page-sakujo",
    title: "PDFから不要なページを削除する方法",
    description:
      "ブラウザ上で、必要なページだけを残すことで、白紙ページや表紙、不要な部分をPDFから取り除きます。ファイルはすっきりし、処理も非公開のまま行われます。",
  },
  {
    id: "guides/how-to-organize-pdf-files",
    slug: "guides/pdf-file-seiri-hoho",
    title: "PDFファイルを整理する方法 — 実践ワークフロー",
    description:
      "散らかったPDFを整えます：関連ファイルを結合し、ページを並べ替え、不要なものを取り除き、正しく名前を付ける。無料のブラウザツールを使った、繰り返し使えるワークフローです。",
  },
  {
    id: "guides/how-to-prepare-pdf-before-sharing",
    slug: "guides/pdf-kyoyu-mae-checklist",
    title: "共有前にPDFを整えるチェックリスト",
    description:
      "送信前のPDFチェックリスト：余分なページを削り、向きを直し、サイズを小さくし、下書きにはラベルを付ける。すっきりとした、適切なサイズの、意図の伝わる文書を送りましょう。",
  },
  {
    id: "guides/how-to-fix-sideways-pdf-pages",
    slug: "guides/pdf-page-muki-shusei",
    title: "横向き・上下逆さまのPDFページを直す方法",
    description:
      "ブラウザ上で、横向きや上下逆さまで開くPDFページを恒久的にまっすぐにします。画面を回転させても解決しない理由と、本当に効く直し方を解説します。",
  },
  {
    id: "guides/how-to-compress-pdf-online",
    slug: "guides/pdf-online-asshuku-hoho",
    title: "アップロードせずにPDFをオンラインで圧縮する方法",
    description:
      "アップロードもアカウント登録も不要で、ブラウザ上でそのままPDFを縮小できます。端末上での圧縮が一般的なオンラインツールとどう違うのか、画質とのトレードオフも解説します。",
  },
  {
    id: "guides/how-to-reduce-pdf-file-size-for-email",
    slug: "guides/pdf-file-size-mail-taio",
    title: "メール送信用にPDFのファイルサイズを小さくする方法",
    description:
      "GmailやOutlookの添付ファイル上限内にPDFを収めます。実際の上限、スキャンがそれを超えてしまう理由、そして送れるサイズまで縮小する方法を解説します。",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-iphone",
    slug: "guides/iphone-pdf-shukusho-hoho",
    title: "iPhoneでPDFを小さくする方法",
    description:
      "ブラウザツールまたはPDF Editorアプリを使い、iPhoneでPDFを縮小します。iPhoneのスキャンが大きくなりがちな理由と、送信の上限内に収める方法を解説します。",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-android",
    slug: "guides/android-pdf-shukusho-hoho",
    title: "AndroidでPDFを小さくする方法",
    description:
      "インストール不要のブラウザツール、またはPDF Editorアプリで、AndroidのどんなPDFも圧縮できます。スキャンをメールやアップロードの上限内に収めましょう。",
  },
  {
    id: "guides/why-is-my-pdf-so-large",
    slug: "guides/pdf-file-size-ga-okii-genin",
    title: "なぜPDFのファイルサイズが大きいのか — 原因と対策",
    description:
      "PDFが肥大化する本当の理由 — スキャン、埋め込まれた写真、フォントなど — と、それぞれに適した対策を、無料のブラウザツールを使って解説します。",
  },
  {
    id: "guides/compress-pdf-without-losing-too-much-quality",
    slug: "guides/pdf-asshuku-gashitsu-baransu",
    title: "画質を落としすぎずにPDFを圧縮するコツ",
    description:
      "ファイルサイズと画質のちょうどいいバランスを見つけます。圧縮レベルがディテールとサイズをどうトレードオフするか、それでも十分使える最も軽いレベルの選び方を解説します。",
  },
  {
    id: "guides/how-to-compress-scanned-pdf",
    slug: "guides/scan-pdf-asshuku-hoho",
    title: "スキャンしたPDFを圧縮する方法（大幅な削減）",
    description:
      "スキャンしたPDFはもっとも縮小しやすく、同時に最大の容量犯です。大幅に圧縮する方法と、検索可能なテキストがどうなるかを解説します。",
  },
  {
    id: "guides/best-pdf-compression-settings",
    slug: "guides/pdf-asshuku-settei-erabikata",
    title: "最適なPDF圧縮設定の選び方",
    description:
      "メール、印刷、保存、Web公開、それぞれに適した圧縮レベルはどれか。目的別に設定を対応させる実践的な早見表を、トレードオフも含めて正直に解説します。",
  },
  {
    id: "guides/how-to-send-large-pdf-files",
    slug: "guides/okii-pdf-file-sofu-hoho",
    title: "大きなPDFファイルを送る5つの確実な方法",
    description:
      "メールで送るには大きすぎるPDFを送る、5つの確実な方法 — 圧縮、分割、クラウドリンクなど — とその使い分けを解説します。",
  },
  {
    id: "guides/how-to-reduce-pdf-size-before-uploading",
    slug: "guides/upload-mae-pdf-shukusho",
    title: "アップロード前にPDFのサイズを小さくする方法",
    description:
      "アップロードポータルはメールよりも厳しく大きいファイルを拒否します。審査でチェックされる読みやすさを保ちながら、厳しいポータルの上限内にPDFを収める方法を解説します。",
  },
  {
    id: "guides/how-to-sign-pdf-on-iphone",
    slug: "guides/iphone-pdf-shomei-hoho",
    title: "iPhoneでPDFに署名する方法（2026年版）",
    description:
      "マークアップ機能、またはPDF Editorアプリを使い、iPhoneでPDFに署名します。標準機能の限界と、専用アプリの方が優れている場面を解説します。",
  },
  {
    id: "guides/how-to-sign-pdf-on-android",
    slug: "guides/android-pdf-shomei-hoho",
    title: "AndroidでPDFに署名する方法（2026年版）",
    description:
      "統一された標準の署名機能がないAndroidで、PDFに署名する方法。信頼できるアプリでの署名方法、メーカーごとに異なる選択肢、署名の法的な基礎知識を解説します。",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-phone",
    slug: "guides/sumaho-pdf-form-nyuryoku",
    title: "スマホでPDFフォームに入力する方法",
    description:
      "実際のフォームフィールドがあるものでも、非インタラクティブなスキャンでも、iPhoneやAndroidでPDFフォームに入力できます。タップして入力、テキストボックスの追加、署名までを1か所で行う方法を解説します。",
  },
  {
    id: "guides/how-to-annotate-pdf-on-mobile",
    slug: "guides/mobile-pdf-chusyaku-hoho",
    title: "スマホでPDFに注釈を入れる方法",
    description:
      "スマホやタブレットからPDFにハイライト、コメント、描き込みができます。重要な注釈ツールと、書き込みを読みやすく保つコツを解説します。",
  },
  {
    id: "guides/how-to-manage-pdfs-on-phone",
    slug: "guides/sumaho-pdf-kanri-hoho",
    title: "スマホでPDFを管理する方法",
    description:
      "スマホのPDFが散らからないように保ちます：名前の変更、フォルダへの整理、クラウドとの同期、保存容量の解放。実践的なメンテナンス習慣を解説します。",
  },
  {
    id: "guides/how-to-create-pdf-from-camera",
    slug: "guides/camera-kara-pdf-sakusei",
    title: "カメラからPDFを作成する方法",
    description:
      "カメラで撮った写真をPDFに変換する方法と、なぜきちんとしたスキャンの方が単なる写真より優れているかを解説します。領収書やホワイトボードには手早い撮影、書類にはスキャンを使い分けましょう。",
  },
  {
    id: "guides/how-to-share-pdf-from-phone",
    slug: "guides/sumaho-pdf-kyoyu-hoho",
    title: "スマホからPDFを共有する方法",
    description:
      "iPhoneやAndroidから、メール、AirDrop、メッセージアプリ、リンクなど、正しい方法でPDFを共有します。確実に届くようにサイズを調整し準備する方法も解説します。",
  },
  {
    id: "guides/best-pdf-tools-for-students",
    slug: "guides/gakusei-muke-muryo-pdf-tool",
    title: "学生向けの無料PDFツール決定版（2026年版）",
    description:
      "課題文献の結合、提出物の圧縮、変換、注釈といった学生の実際のタスクをカバーする、無料で会員登録不要なPDFツールです。有料プランへの誘導なしで使えます。",
  },
  {
    id: "guides/best-pdf-workflow-for-freelancers",
    slug: "guides/freelance-pdf-workflow",
    title: "フリーランスに最適なPDFワークフロー",
    description:
      "フリーランス向けの繰り返し使えるPDFワークフロー：提案書の送付、契約書への署名、請求書の送信。これらを速く、プライベートに保つ無料ツールとモバイルアプリを紹介します。",
  },
  {
    id: "guides/best-pdf-tools-for-small-business",
    slug: "guides/chusho-kigyo-muryo-pdf-tool",
    title: "中小企業向けの無料PDFツール決定版",
    description:
      "座席課金のサブスクリプションなしで、請求書、契約書、記録をまとめて無料・プライベートなPDFツールで運用します。どの作業にどのツールを使うべきか、アプリがどこで役立つかを解説します。",
  },
  {
    id: "guides/pdf-vs-jpg-for-documents",
    slug: "guides/pdf-vs-jpg-shorui",
    title: "書類はPDFかJPGか — 写真での送付をやめよう",
    description:
      "書類の写真をJPGで送るのがなぜ間違いなのか、PDFが適切な場面はいつか、そして写真をきちんとした文書に変換する方法を解説します。",
  },
  {
    id: "guides/when-to-use-pdf-instead-of-docx",
    slug: "guides/docx-kawari-pdf-checklist",
    title: "DOCXの代わりにPDFを使うべき場面（チェックリスト）",
    description:
      "手元にWord文書がある — それをPDFとして送るべきでしょうか？ PDFが正解になる瞬間を素早く見極めるチェックリストと、変換方法を解説します。",
  },
  {
    id: "guides/browser-based-pdf-tools-vs-upload-tools",
    slug: "guides/browser-pdf-tool-vs-upload-tool",
    title: "ブラウザ完結型のPDFツールとアップロード型ツールの違い",
    description:
      "「オンライン」PDFツールがすべて同じというわけではありません。ブラウザ内で動作するツールと、ファイルをアップロードするツールの違い、その見分け方を解説します。",
  },
  {
    id: "guides/privacy-first-pdf-tools",
    slug: "guides/privacy-jushi-pdf-tool",
    title: "プライバシー重視のPDFツール — 文書を端末内に保つ",
    description:
      "PDFにはあなたの機密性の高いデータが含まれていることがあります。何もアップロードせずにPDFを扱う方法と、「プライバシー重視」が実際に意味することを解説します。",
  },
  {
    id: "guides/common-pdf-mistakes-to-avoid",
    slug: "guides/pdf-yokuaru-machigai",
    title: "避けるべきPDFのよくある失敗",
    description:
      "時間を無駄にしたり情報を漏らしたりするPDFの失敗 — 過度な圧縮、写真としての送付、機密ファイルのアップロード、ページの取りこぼしなど — と、それを避ける方法を解説します。",
  },
  {
    id: "guides/why-wont-my-pdf-open",
    slug: "guides/pdf-ga-hirakanai-genin",
    title: "PDFが開かない理由と実践的な対処法",
    description:
      "開かないPDFの原因は、ほぼ5つのパターンのいずれかです。壊れたダウンロード、パスワードロック、ビューアの不具合、古い形式のファイルを見分ける方法と、それぞれの対処法を解説します。",
  },
  {
    id: "guides/why-is-my-pdf-blank",
    slug: "guides/pdf-ga-hakushi-genin",
    title: "PDFが白紙で開く理由と復元方法",
    description:
      "PDFが白紙のページで開くとき、たいていコンテンツ自体は残っていて、描画の失敗やフォント不足、スキャンエラーによって隠れているだけです。何が起きたかの見極め方と、文書を元に戻す方法を解説します。",
  },
  {
    id: "guides/why-cant-i-edit-a-pdf",
    slug: "guides/pdf-ga-henshu-dekinai-riyu",
    title: "PDFを編集できない本当の理由と対処法",
    description:
      "PDFはもともと編集されにくいように設計されていますが、スキャン、セキュリティ設定、ビューアの制限など、いくつか特定の要因がファイルによって編集しづらさを変えています。あなたのファイルを妨げているものと、実際に効く対処法を解説します。",
  },
  {
    id: "guides/why-is-my-pdf-blurry",
    slug: "guides/pdf-ga-boyakeru-genin",
    title: "PDFがぼやける理由 — 解像度・圧縮・スキャンの原因",
    description:
      "PDFのぼやけは、低解像度のスキャン、強すぎる圧縮、不適切な書き出しから生じるものであり、PDFという形式自体の問題ではありません。どの原因に当てはまるかの見極め方と、鮮明さを取り戻す方法を解説します。",
  },
  {
    id: "guides/how-to-fix-a-corrupted-pdf",
    slug: "guides/pdf-hason-shufuku-hoho",
    title: "破損したPDFファイルを修復する方法（本当に効く対処法）",
    description:
      "「破損した」PDFの多くは実際には破損しておらず、途中で切れたダウンロード、ビューアの不一致、部分的な書き込みが原因です。ファイルを復元できる正直な対処チェックリストと、本当に修復不能なケースを解説します。",
  },
  {
    id: "guides/how-to-fix-pdf-printing-issues",
    slug: "guides/pdf-insatsu-toraburu-kaiketsu",
    title: "PDFの印刷トラブルを直す方法（欠けたページ・サイズ違い・文字欠け）",
    description:
      "PDFが切れて印刷される、サイズが合わない、テキストが抜け落ちる場合、対処法は症状によって異なります。それぞれの印刷トラブルに合った設定や印刷前の対処法をまとめた早見表です。",
  },
  {
    id: "guides/how-to-fix-pdf-upload-errors",
    slug: "guides/pdf-upload-error-kaiketsu",
    title: "PDFのアップロードエラーを直す方法（大きすぎる・拒否される・止まる）",
    description:
      "ポータルサイトがPDFを拒否する理由はいくつかのパターンに絞られます：ファイルサイズ、ページ数、形式の厳しさ、不安定なアップロード。どれに当てはまるかを見極め、次こそ受理される状態にする方法を解説します。",
  },
  {
    id: "guides/how-to-fix-pdf-formatting-problems",
    slug: "guides/pdf-layout-kuzure-shusei",
    title: "PDFのレイアウト崩れを直す方法（改行・余白・間隔）",
    description:
      "PDFのレイアウトが崩れて見える場合 — テキストの折り返し、ずれた余白、乱れた間隔 — 修正すべきなのは通常PDF自体ではなく元の文書です。きれいな見た目で書き出すための最もクリーンなワークフローを解説します。",
  },
  {
    id: "guides/how-to-fix-scanned-pdf-quality",
    slug: "guides/scan-pdf-gashitsu-kaizen",
    title: "スキャンしたPDFの画質を改善する方法（シャープ化・傾き補正・色調整）",
    description:
      "スキャンしたPDFはよくあるパターンで劣化します：傾き、色あせたコントラスト、斑点状の背景、肥大化したファイルサイズ。それらをきれいに整えるスキャン前の調整とスキャン後のツールを解説します。",
  },
  {
    id: "guides/how-to-fix-pdf-font-issues",
    slug: "guides/pdf-font-mondai-kaiketsu",
    title: "PDFのフォントの不具合を直す方法（欠落・置き換え・文字化け）",
    description:
      "PDFで意図しないフォントが表示されたり、文字の代わりに四角い記号が出たり、テキストが置き換えられて表示されたりする場合、たいていフォントが埋め込まれていません。フォント埋め込みの仕組みと、書き出し時に変更すべき点を解説します。",
  },
  {
    id: "guides/best-pdf-tools-for-remote-work",
    slug: "guides/remote-work-pdf-tool",
    title: "リモートワークに最適なPDFツール（無料・ブラウザ完結）",
    description:
      "オフィスがノートパソコンとスマホだけになっても対応できるPDFツール — 署名、圧縮、結合、スキャン、共有 — をインストールや座席課金ライセンスなしで使えます。",
  },
  {
    id: "guides/best-pdf-tools-for-office-documents",
    slug: "guides/office-bunsho-pdf-tool",
    title: "オフィス文書に最適なPDFツール（Word・Excel・レポート）",
    description:
      "オフィス業務が本当に必要とするPDFツール一式：Word⇔PDFのきれいな相互変換、複数文書の結合、ページ並べ替え、メール添付に適した確実な圧縮を紹介します。",
  },
  {
    id: "guides/best-pdf-workflow-for-teams",
    slug: "guides/team-pdf-workflow",
    title: "チームに最適なPDFワークフロー（共有ファイル・レビュー・承認）",
    description:
      "小規模チームが有料のPDFサブスクリプションなしで文書をやり取りする方法：無料のブラウザツールを使った、下書き・レビュー・署名承認までの繰り返し使える引き継ぎフローを解説します。",
  },
  {
    id: "guides/how-to-share-pdfs-with-clients",
    slug: "guides/client-pdf-kyoyu-hoho",
    title: "クライアントとPDFを共有する方法（プロフェッショナルに、プライベートに）",
    description:
      "クライアントにPDFを送るための短いプレイブック — メール向けのサイズ調整、パスワードの選び方、ファイルのブランド化、受領確認まで — 第三者に何もアップロードすることなく行う方法です。",
  },
  {
    id: "guides/how-to-prepare-pdf-for-business-use",
    slug: "guides/gyomu-pdf-junbi-checklist",
    title: "業務用にPDFを整えるチェックリスト（クリーンアップ）",
    description:
      "PDFがオフィスを出る前に：下書きを削り、ページ順を確認し、向きを直し、フォントを埋め込み、ファイルサイズを縮小する。会社を代表する文書のための送信前チェックリストです。",
  },
  {
    id: "guides/how-to-send-contracts-as-pdf",
    slug: "guides/keiyakusho-pdf-sofu-hoho",
    title: "契約書をPDFで送る方法（署名・固定・送付）",
    description:
      "契約書にはより厳密なPDFワークフローが求められます：内容の固定、署名の適用、下書きへの透かし追加、そして相手方が余計なやり取りなしで署名し返せる最終ファイルの作成方法を解説します。",
  },
  {
    id: "guides/how-to-organize-work-documents-as-pdf",
    slug: "guides/gyomu-pdf-seiri-hoho",
    title: "業務文書をPDFとして整理する方法（フォルダ・命名・バージョン管理）",
    description:
      "見積書、企画書、成果物、アーカイブなど、業務用PDFのための実践的な命名・フォルダ分類のルールです。バージョンの混乱をなくし、誰でもすぐに目的のファイルを見つけられるようにします。",
  },
  {
    id: "guides/how-to-manage-invoices-as-pdf",
    slug: "guides/seikyusho-pdf-kanri-hoho",
    title: "請求書をPDFとして管理する方法（発行・追跡・保存）",
    description:
      "会計ソフトを使わない請求書PDFワークフロー：無料のブラウザツールと整理されたフォルダ構成だけで、発行、番号付け、送付、追跡、保存までを行います。",
  },
  {
    id: "guides/how-to-create-client-ready-pdf-files",
    slug: "guides/client-muke-pdf-shiage",
    title: "クライアント向けに仕上がったPDFファイルを作る方法",
    description:
      "社内用のPDFとクライアント向けの完成品を分けるもの：表紙、ページ番号、ブランディング、ファイルサイズ、ファイル名。文書を「仕上がった」印象にする手早い仕上げの方法です。",
  },
  {
    id: "guides/pdf-workflows-for-small-business",
    slug: "guides/chusho-kigyo-pdf-workflow",
    title: "中小企業のPDFワークフロー（見積書・契約書・記録管理）",
    description:
      "中小企業がPDFで文書業務を回す方法 — 見積書の送付、契約書の受け取り、記録の保存 — サブスクリプションのツール群を購入することなく実現します。",
  },
  {
    id: "guides/pdf-workflows-for-consultants",
    slug: "guides/consultant-pdf-workflow",
    title: "コンサルタントのPDFワークフロー（提案書・レポート・請求書）",
    description:
      "コンサルタントのPDFのリズム：成約につながる提案書、スマホでもきれいに読めるレポート、数秒で発行できる請求書。それを支えるブラウザベースのツールを紹介します。",
  },
  {
    id: "guides/pdf-workflows-for-agencies",
    slug: "guides/dairiten-pdf-workflow",
    title: "代理店のPDFワークフロー（企画書・ブリーフ・承認）",
    description:
      "代理店のPDFの流れ — 企画提案書、クリエイティブブリーフ、クライアント承認、成果物の納品 — を、無料でプライベートなブラウザベースのツールで速く予測可能に保ちます。",
  },
  {
    id: "guides/how-to-submit-homework-as-pdf",
    slug: "guides/homework-pdf-teishutsu-hoho",
    title: "宿題をPDFで提出する方法（ポータルのトラブルを避ける）",
    description:
      "学校のポータルサイトが宿題を拒否する理由は決まっています — ファイルサイズ、ページ数、形式。完成した課題を、確実に受理されるPDFにする最もシンプルな道筋を解説します。",
  },
  {
    id: "guides/how-to-scan-notes-to-pdf",
    slug: "guides/tegaki-note-scan-pdf",
    title: "手書きノートをスキャンしてPDFにする方法（きれいで検索可能に）",
    description:
      "手書きの講義ノートを、スマホのカメラで複数ページのきれいなPDFにまとめます。一発できれいに読めるスキャンになる設定を解説します。",
  },
  {
    id: "guides/how-to-compress-pdf-for-school-portals",
    slug: "guides/gakko-portal-pdf-asshuku",
    title: "学校のポータルサイト向けにPDFを圧縮する方法（厳しい容量制限）",
    description:
      "学校や大学のアップロードポータルは、メールよりも厳しくPDFの容量を制限します。採点者がチェックする読みやすさを損なわずに、課題を制限内に収める圧縮方法を解説します。",
  },
  {
    id: "guides/how-to-convert-lecture-notes-to-pdf",
    slug: "guides/kogi-note-pdf-henkan",
    title: "講義ノートをPDFに変換する方法（Word・写真・スライド）",
    description:
      "講義ノートはWord文書、スライド資料、スクリーンショット、黒板の写真など、あらゆる形式で存在します。構成を崩さずそれぞれを1つの読みやすいPDFにまとめる方法を解説します。",
  },
  {
    id: "guides/how-to-organize-study-materials-as-pdf",
    slug: "guides/study-shiryo-pdf-seiri",
    title: "学習資料をPDFとして整理する方法（フォルダ・命名・索引）",
    description:
      "授業のPDFはあっという間に積み上がります。1週目から期末試験まで検索しやすい状態を保つ、シンプルなフォルダ・命名・結合のルールを解説します。",
  },
  {
    id: "guides/how-to-share-study-notes-as-pdf",
    slug: "guides/study-note-pdf-kyoyu",
    title: "勉強ノートをPDFとして共有する方法（グループ・チャット・クラウド）",
    description:
      "フォーマット崩れやバージョンの混乱を起こさずに、ノートを勉強仲間と共有します。共同学習をスクリーンショットの寄せ集めにしないためのPDFの習慣を解説します。",
  },
  {
    id: "guides/how-to-edit-class-documents-as-pdf",
    slug: "guides/jugyo-shorui-pdf-henshu",
    title: "授業の文書をPDFとして編集する方法（注釈・ハイライト・署名）",
    description:
      "授業のプリント、問題集、同意書はPDFで配られることがよくあります。印刷せずにスマホやパソコンだけで書き込み、記入し、提出する方法を解説します。",
  },
  {
    id: "guides/pdf-workflow-for-university-students",
    slug: "guides/daigakusei-pdf-workflow",
    title: "大学生のためのPDFワークフロー（ノート・課題・提出）",
    description:
      "期末週まで乗り切れる、学期を通して使えるPDFのリズム：講義ノートのスキャン、課題の提出、学習資料の共有まで。ブラウザ完結で無料です。",
  },
  {
    id: "guides/how-to-create-digital-study-pdfs",
    slug: "guides/digital-study-pdf-sakusei",
    title: "デジタル学習用PDFを作る方法（フラッシュカード・要約・資料集）",
    description:
      "ノート、スライド、ハイライトから自分専用の学習PDFを作ります — 検索可能で、持ち運びやすく、タブレットでの注釈にも対応。試験期に本当に役立つ構成のコツを解説します。",
  },
  {
    id: "guides/are-online-pdf-tools-safe",
    slug: "guides/online-pdf-tool-anzensei",
    title: "オンラインPDFツールは安全か — リスクを正直に検証する",
    description:
      "多くの「オンライン」PDFツールはファイルをサーバーにアップロードしますが、そうではないものもあります。実際のリスク、データの扱い方が異なるツールの種類、その見分け方を解説します。",
  },
  {
    id: "guides/how-to-protect-sensitive-pdf-files",
    slug: "guides/kimitsu-pdf-hogo-hoho",
    title: "機密性の高いPDFファイルを守る方法",
    description:
      "機密性の高いPDFは3つの段階で保護が必要です：保存中、共有中、そして受け取った相手が使い終わった後。この3つすべてをカバーする実践的なワークフローを解説します。",
  },
  {
    id: "guides/how-to-share-pdf-files-privately",
    slug: "guides/pdf-private-kyoyu-hoho",
    title: "PDFファイルをプライベートに共有する方法（見知らぬ相手にアップロードしない）",
    description:
      "PDFをプライベートに共有する方法は、公開の「PDFツール」サイト経由ではありません。あなたと相手だけの間に文書を留めておける手段と、その適切な選び方を解説します。",
  },
  {
    id: "guides/privacy-first-document-workflows",
    slug: "guides/privacy-jushi-bunsho-workflow",
    title: "プライバシー重視の文書ワークフロー（アップロードなしで完結）",
    description:
      "取り込みから編集、署名、送信、保存まで、ファイルを自分の端末に留め、第三者のサーバーの外に置いたままにする文書ワークフローです。現実的な全体像と使えるツールを解説します。",
  },
  {
    id: "guides/local-browser-pdf-processing-explained",
    slug: "guides/local-browser-shori-shikumi",
    title: "ブラウザ内でのローカルPDF処理の仕組み",
    description:
      "PDFツールが、ファイルをどこにも送信せずにブラウザ内で動作できる理由を解説します。その技術、トレードオフ、そしてツールが本当にローカルで動いているかを確かめる方法を紹介します。",
  },
  {
    id: "guides/do-online-pdf-tools-store-files",
    slug: "guides/online-pdf-tool-hozon-kakunin",
    title: "オンラインPDFツールはファイルを保存しているか — 確認すべきこと",
    description:
      "アップロードされたファイルをすぐに削除するオンラインPDFツールもあれば、数時間保持するもの、無期限に保管するものもあります。プライバシーポリシーを素早く読み解くコツと、確認すべきポイントを解説します。",
  },
  {
    id: "guides/how-to-avoid-uploading-sensitive-documents",
    slug: "guides/kimitsu-shorui-upload-kaihi",
    title: "機密性の高い書類のアップロードを避ける方法",
    description:
      "あるワークフローで機密性の高いPDFのアップロードを迫られたとき、たいていアップロードなしで完結する代替手段があります。タスクの種類ごとに、アップロード不要なツールを紹介します。",
  },
  {
    id: "guides/secure-pdf-workflows-for-business",
    slug: "guides/kigyo-pdf-security-workflow",
    title: "企業向けの安全なPDFワークフロー（大掛かりな仕組みなしで）",
    description:
      "中小企業がセキュアに運用するのに、SOC2対応のPDF専用保管庫は必要ありません。暗号化された保存、署名済みの受け渡し、ローカル処理といった、実際のリスクに見合う現実的な基準を解説します。",
  },
  {
    id: "guides/browser-based-document-processing-benefits",
    slug: "guides/browser-shori-meritto",
    title: "ブラウザ完結型の文書処理のメリット（速度・プライバシー・コスト）",
    description:
      "ブラウザ内でPDFを処理することが、従来のクラウドツールと比べて速度・プライバシー・コストのバランスをどう変えるか、そしてローカル処理の限界がどこにあるかを解説します。",
  },
  {
    id: "guides/pdf-vs-google-docs",
    slug: "guides/pdf-google-docs-tsukaiwake",
    title: "PDFとGoogle Docs — 使い分けのポイント（編集・共有・固定）",
    description:
      "Google Docsは共同作業向け、PDFは最終的な受け渡し向けです。現実的な使い分けのポイントと、適切なタイミングできれいに変換する方法を解説します。",
  },
  {
    id: "guides/pdf-vs-docx-for-business",
    slug: "guides/business-pdf-vs-docx",
    title: "ビジネスにおけるPDFとDOCX（契約書・レポート・配布）",
    description:
      "なぜビジネス文書はほぼ必ずPDFとして送られ、DOCXとして保管されるのか。契約書、レポート、請求書、それぞれのライフサイクルの各段階で使うべき正しいツールを解説します。",
  },
  {
    id: "guides/pdf-vs-images-for-sharing-documents",
    slug: "guides/pdf-vs-gazo-kyoyu",
    title: "文書共有にはPDFか画像か（JPG・PNG・HEIC）",
    description:
      "書類のJPG、PNG、HEICが不適切な場面と、簡単なスクリーンショット以上の用途にはPDFが正しい形式である理由を解説します。",
  },
  {
    id: "guides/pdf-vs-png",
    slug: "guides/pdf-png-tsukaiwake",
    title: "PDFとPNG — 複数ページの文書か、1枚の鮮明な画像か",
    description:
      "複数ページの文書にはPDF、単一の鮮明で透明背景の画像にはPNGが優れています。明快なルールと、両者の変換方法を解説します。",
  },
  {
    id: "guides/best-format-for-sharing-documents",
    slug: "guides/bunsho-kyoyu-saiteki-format",
    title: "文書共有に最適なファイル形式（PDF・DOCX・画像を比較）",
    description:
      "PDFが共有に適した形式である場合、そうでない場合、そして現実的な代替手段（DOCX、画像、HTML、Markdown）が日常のさまざまな場面でどう比較されるかを解説します。",
  },
  {
    id: "guides/why-pdf-is-still-popular",
    slug: "guides/pdf-ga-ima-mo-teiban-riyu",
    title: "2026年になってもPDFが文書の定番であり続ける理由",
    description:
      "何十年経ってもPDFは文書共有の主役であり続けています。忠実な再現性、汎用性、署名のしやすさ、アーカイブ適性など、生き残ってきた理由と、その弱点を解説します。",
  },
  {
    id: "guides/when-to-use-scanned-pdf",
    slug: "guides/scan-pdf-tsukaidokoro",
    title: "スキャンしたPDFを使うべき場面（そして避けるべき場面）",
    description:
      "スキャンしたPDFは紙からデジタルへという特定の課題を解決します。一方でファイルサイズが大きく、検索性が低く、編集もしにくくなります。そのトレードオフが見合う場面を解説します。",
  },
  {
    id: "guides/editable-pdf-vs-flat-pdf",
    slug: "guides/pdf-henshu-kano-vs-gazoka",
    title: "編集可能なPDFと画像化されたPDFの違い",
    description:
      "実際に選択・編集できるテキストと構造を持つPDFもあれば、テキスト情報を持たないページの画像に過ぎないPDFもあります。どちらのタイプか見分ける方法と、それぞれが適する場面を解説します。",
  },
  {
    id: "guides/best-free-pdf-tools",
    slug: "guides/muryo-pdf-tool-osusume",
    title: "2026年最新のおすすめ無料PDFツール（正直な基準で選定）",
    description:
      "使う価値のある無料PDFツール — 圧縮、結合、署名、変換、スキャン — を、広告の多さや無料期間の長さではなく、実際の品質とプライバシーを基準に選びました。",
  },
  {
    id: "guides/free-browser-based-pdf-tools",
    slug: "guides/muryo-browser-pdf-tool",
    title: "ブラウザ完結の無料PDFツール（インストール不要・アップロード不要）",
    description:
      "インストールもアカウント登録もアップロードも不要で、完全にブラウザ内で動くPDFツールです。何ができるか、どこまでカバーしているか、そして本当にローカルで動作しているかの確かめ方を解説します。",
  },
  {
    id: "guides/best-pdf-tools-without-upload",
    slug: "guides/upload-fuyo-pdf-tool",
    title: "アップロード不要のPDFツール決定版（ファイルは端末に残る）",
    description:
      "PDFを端末の外に出したくないとき、ローカルで処理してくれるツールがこれです。圧縮、結合、変換 — すべてファイルを端末に残したまま行えます。",
  },
  {
    id: "guides/best-private-pdf-tools",
    slug: "guides/private-jushi-pdf-tool",
    title: "機密性が本当に重要なときのプライベートなPDFツール",
    description:
      "契約書、財務記録など機密性の高いPDFのために、方針としてではなく仕組みとしてプライバシーを尊重するツールを紹介します。",
  },
  {
    id: "guides/free-pdf-tools-for-iphone",
    slug: "guides/iphone-muryo-pdf-tool",
    title: "iPhone向けの無料PDFツール（ブラウザ・アプリのおすすめ）",
    description:
      "サブスクリプションなしで実際に使える無料のiPhone向けPDFツール — 圧縮、署名、スキャン、変換。ブラウザで使える選択肢と、オフラインでも使えるPDF Editorアプリを紹介します。",
  },
  {
    id: "guides/free-pdf-tools-for-android",
    slug: "guides/android-muryo-pdf-tool",
    title: "Android向けの無料PDFツール（ブラウザ・アプリのおすすめ）",
    description:
      "日常のタスクに合わせて選んだ無料のAndroid向けPDFツール — 圧縮、署名、スキャン、変換。モバイルブラウザでの方法と、オフライン利用に対応したPDF Editorアプリを紹介します。",
  },
  {
    id: "guides/what-is-a-pdf-form",
    slug: "guides/pdf-form-toha",
    title: "PDFフォームとは — インタラクティブなフォームと非インタラクティブなフォームの違い",
    description:
      "PDFフォームは回答を集めるために作られた文書です。実際に入力できるフィールドを持つ場合もあれば、上から書き込むだけの非インタラクティブなページの場合もあります。その意味と見分け方を解説します。",
  },
  {
    id: "guides/editable-pdf-vs-fillable-pdf",
    slug: "guides/pdf-henshu-vs-form-nyuryoku",
    title: "編集可能なPDFと入力可能なPDF、何が違うのか",
    description:
      "PDFを編集するとは内容を変更すること、PDFに入力するとはフォームフィールドに回答を入れることです。両者がなぜ別の作業なのか、あなたに実際に必要なのはどちらかを解説します。",
  },
  {
    id: "guides/how-pdf-forms-work",
    slug: "guides/pdf-form-shikumi",
    title: "PDFフォームの仕組み — フィールド・AcroForm・非インタラクティブなスキャン",
    description:
      "PDFフォームは内部的には、ページに重なるインタラクティブなフィールドの集まりか、それを一切持たない画像のどちらかです。それぞれがどう作られているか、そしてなぜそれが入力のしやすさに関わるかを解説します。",
  },
  {
    id: "guides/can-you-edit-a-pdf-form",
    slug: "guides/pdf-form-henshu-kanosei",
    title: "PDFフォームを編集できるか — 変更できること・できないこと",
    description:
      "PDFフォームの質問文を編集することと、フォームに入力することは別の作業です。編集できる部分、固定されている部分、そして完成済みのPDFとしてしか持っていないフォームを変更する方法を解説します。",
  },
  {
    id: "guides/how-to-fill-out-a-pdf-form",
    slug: "guides/pdf-form-nyuryoku-hoho",
    title: "PDFフォームに入力する方法（インタラクティブ・非インタラクティブ両対応）",
    description:
      "実際のフィールドを持つフォームでも、上から書き込む非インタラクティブなスキャンでも、あらゆるPDFフォームに入力できます。パソコンとスマホ両方に対応した完全ガイドで、署名と保存の方法も解説します。",
  },
  {
    id: "guides/how-to-save-a-filled-pdf-form",
    slug: "guides/kinyu-zumi-pdf-form-hozon",
    title: "記入済みのPDFフォームを確実に保存する方法",
    description:
      "フォームに入力したのに、その回答が消えてしまった経験はありませんか？ 記入済みフォームのデータを確実に保存する方法、一部のビューアで保存できない理由、送信前に固定すべきタイミングを解説します。",
  },
  {
    id: "guides/why-cant-i-type-in-a-pdf-form",
    slug: "guides/pdf-form-nyuryoku-dekinai-riyu",
    title: "PDFフォームに入力できない理由と対処法",
    description:
      "フィールドをクリックしても何も起きない — その主な原因は3つです：非インタラクティブなフォーム、対応していないビューア、ロックされたファイル。それぞれの正確な対処法を解説します。",
  },
  {
    id: "guides/how-to-create-a-fillable-pdf",
    slug: "guides/nyuryoku-kano-pdf-sakusei-hoho",
    title: "入力可能なPDFを作る方法 — 現実的な選択肢と限界",
    description:
      "人が入力できるPDFを本当に作るには何が必要か — インタラクティブなフィールドを使う方法と、シンプルな非インタラクティブなテンプレートを使う方法 — 手元のツールに合ったやり方を解説します。",
  },
  {
    id: "guides/how-to-share-a-pdf-form",
    slug: "guides/pdf-form-kyoyu-hoho",
    title: "相手に入力してもらうためにPDFフォームを共有する方法",
    description:
      "記入してもらうために空欄のフォームを送ることは、完成した文書を送ることとは違います。相手が実際に入力できる形でフォームを共有し、結果を回収する方法を解説します。",
  },
  {
    id: "guides/how-to-print-a-filled-pdf-form",
    slug: "guides/kinyu-zumi-pdf-form-insatsu",
    title: "記入済みのPDFフォームを回答が見える状態で印刷する方法",
    description:
      "フォームを印刷したらフィールドが白紙のまま出てきましたか？ 記入した値が印刷されないことがある理由と、すべての回答がきちんと見える形で紙に出力する方法を解説します。",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-iphone",
    slug: "guides/iphone-pdf-form-nyuryoku",
    title: "iPhoneでPDFフォームに入力する方法（ファイル・マークアップ・アプリ）",
    description:
      "「ファイル」アプリとマークアップ機能、または専用のPDFアプリを使い、iPhoneでインタラクティブ・非インタラクティブ両方のPDFフォームに入力します。iOS特有の手順、共有メニューを使った方法、マークアップの限界も解説します。",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-android",
    slug: "guides/android-pdf-form-nyuryoku",
    title: "AndroidでPDFフォームに入力する方法（どの機種でも）",
    description:
      "Androidでインタラクティブ・非インタラクティブ両方のPDFフォームに入力する方法です。標準ビューアで入力できないことが多い理由、確実に使えるアプリでの方法、メーカーによる端末差がフォームに与える影響を解説します。",
  },
  {
    id: "guides/how-to-send-a-completed-pdf-form",
    slug: "guides/kinyu-zumi-pdf-form-sofu",
    title: "記入済みのPDFフォームを送る方法（固定・送付）",
    description:
      "フォームへの入力は終わった — 次はきれいに返送する番です。回答が変更できないよう固定する方法、正しい形で添付する方法、データを失わずに届いたことを確認する方法を解説します。",
  },
  {
    id: "guides/how-to-fill-government-pdf-forms-on-phone",
    slug: "guides/gyosei-pdf-form-nyuryoku",
    title: "スマホで行政のPDFフォームに入力する方法",
    description:
      "行政の書式は非インタラクティブなスキャンで、厳格なフォーマットのことがよくあります。スマホで記入する方法、扱いにくいフィールドへの対処、担当機関自身の案内に従う方法を解説します。",
  },
  {
    id: "guides/mobile-pdf-form-workflow",
    slug: "guides/sumaho-pdf-form-nagare",
    title: "スマホで完結するPDFフォームワークフロー（受信から送信まで）",
    description:
      "受信、適切なアプリで開く、入力、署名、固定、送信までを、スマホだけで完結させる繰り返し使えるフォームの手順です。パソコンなしで完結する一連の流れを解説します。",
  },
  {
    id: "guides/best-pdf-form-app-for-iphone",
    slug: "guides/iphone-pdf-form-app-osusume",
    title: "iPhoneに最適なPDFフォームアプリの選び方",
    description:
      "iPhoneのPDFフォームアプリで本当に重要なポイント — フィールドの自動検出、非インタラクティブなフォームへのテキスト入力、署名機能、端末内で完結するプライバシー — 自分のフォームに合ったアプリの見極め方を解説します。",
  },
  {
    id: "guides/best-pdf-form-app-for-android",
    slug: "guides/android-pdf-form-app-erabikata",
    title: "Androidに最適なPDFフォームアプリの選び方",
    description:
      "Androidのフォームアプリの選び方：フィールドの自動検出、非インタラクティブなフォームへのテキスト入力、署名機能、端末内で完結するプライバシー。専用アプリが標準ビューアよりフォームに優れている理由も解説します。",
  },
  {
    id: "guides/pdf-forms-for-small-business",
    slug: "guides/chusho-kigyo-pdf-form",
    title: "中小企業のPDFフォーム活用（受付・注文・人事）",
    description:
      "中小企業が日常的に使っているフォーム — 受付、注文、予約、簡単な人事手続き — をどう入力し、回収し、フォーム専用プラットフォームを買わずにPDFとして管理するかを解説します。",
  },
  {
    id: "guides/how-to-send-client-intake-forms",
    slug: "guides/client-intake-form-sofu",
    title: "クライアントの受付フォームを送る方法（きれいに、プライベートに）",
    description:
      "新しいクライアントの情報を一度できれいに集めます。記入しやすく、確実に完了した状態で返ってくるPDF受付フォームの送り方と、クライアント情報をプライベートに保つ方法を解説します。",
  },
  {
    id: "guides/how-to-use-pdf-forms-for-contracts",
    slug: "guides/keiyakusho-pdf-form-katsuyo",
    title: "契約書でPDFフォームを使う方法（フィールドと署名）",
    description:
      "契約書を入力可能なPDFに変えます：氏名、日付、イニシャル用のフィールド、署名欄、そして署名済みバージョンを変更できないようにする固定ステップまで。正直な限界も解説します。",
  },
  {
    id: "guides/how-to-manage-pdf-application-forms",
    slug: "guides/oubo-pdf-form-kanri",
    title: "PDFの申込フォームを管理する方法（回収・確認）",
    description:
      "申込書をPDFで受け取っていますか？ 見落としなく回収、確認、比較、保存する方法 — 完成した申込フォームの束を扱うシンプルな仕組みを解説します。",
  },
  {
    id: "guides/pdf-forms-for-consultants",
    slug: "guides/consultant-pdf-form",
    title: "コンサルタントのPDFフォーム活用（ヒアリングシート・スコーピング）",
    description:
      "ディスカバリー用のヒアリングシート、業務範囲確認シート、フィードバックフォーム — コンサルティング業務のフォーム部分を、どの端末からでも入力できる入力可能なPDFとして扱う方法を解説します。",
  },
  {
    id: "guides/pdf-forms-for-agencies",
    slug: "guides/dairiten-pdf-form",
    title: "代理店のPDFフォーム活用（オンボーディング・ブリーフ・承認）",
    description:
      "クライアントのオンボーディング資料、クリエイティブブリーフのフォーム、承認サインオフシート — 代理店が扱う関係者の多い各種フォームを、誰でも入力できる入力可能なPDFとして扱う方法を解説します。",
  },
  {
    id: "guides/pdf-forms-for-freelancers",
    slug: "guides/freelance-pdf-form",
    title: "フリーランスのPDFフォーム活用（受付・契約・着手金）",
    description:
      "プロジェクトの受付、シンプルな業務委託契約、着手金の同意書 — サブスクリプションもアップロードも不要な、フリーランスに必要な最小限の入力可能なPDFフォーム一式を解説します。",
  },
  {
    id: "guides/document-collection-workflows-with-pdf",
    slug: "guides/pdf-shorui-kaishu-workflow",
    title: "PDFを使った書類回収ワークフロー",
    description:
      "クライアントからファイルや署名済みフォームを集めていますか？ チェックリスト、統一したフォーマット、まだ足りないものをすっきり把握できる方法を使った、繰り返し使える回収ワークフローを構築しましょう。",
  },
  {
    id: "guides/pdf-form-best-practices",
    slug: "guides/pdf-form-best-practice",
    title: "最後まで入力してもらえるPDFフォームの作り方",
    description:
      "実際に最後まで入力してもらえるフォームを設計します：明確なラベル、適切な余白、無理のないフィールド構成、わかりやすい署名欄、そして固定ステップまで。作成者と送信者のための実践的なルールを解説します。",
  },
  {
    id: "guides/pdf-form-not-working",
    slug: "guides/pdf-form-ugokanai-taisho",
    title: "PDFフォームが動かないときの症状別対処法",
    description:
      "PDFフォームがうまく動かない場合、原因はいくつかのパターンに絞られます。フィールドが見当たらない、入力できない、保存できない、読み取り専用になっているなど、どれに当てはまるかを見極める早見表と対処法を解説します。",
  },
  {
    id: "guides/pdf-form-fields-missing",
    slug: "guides/pdf-form-field-ga-nai",
    title: "PDFフォームのフィールドが見当たらない理由と復元方法",
    description:
      "フォームを開いたのにフィールドが見当たりませんか？ 一部のビューアでインタラクティブなフィールドが消える理由、それを取り戻す方法、そもそもフィールドが存在しなかった場合の対処法を解説します。",
  },
  {
    id: "guides/why-pdf-form-wont-save",
    slug: "guides/pdf-form-hozon-dekinai",
    title: "PDFフォームが保存できない理由と直し方",
    description:
      "フォームに入力しても、開き直すと回答が消えていませんか？ 一部のビューアが印刷にしか対応せずフィールドデータを保存しない理由と、確実に回答を残す方法を解説します。",
  },
  {
    id: "guides/why-pdf-form-is-read-only",
    slug: "guides/pdf-form-yomitori-senyo-riyu",
    title: "PDFフォームが読み取り専用になっている理由と対処法",
    description:
      "フォームがロックされてグレーアウトした状態で開きますか？ フォームが読み取り専用に設定される理由、意図的なセキュリティ設定なのかビューアの不具合なのかの見分け方、入力を完了させるための正直な選択肢を解説します。",
  },
  {
    id: "guides/pdf-form-not-printing-correctly",
    slug: "guides/pdf-form-insatsu-toraburu",
    title: "PDFフォームが正しく印刷されないときの対処法（空欄のフィールドを直す）",
    description:
      "フォームを印刷するとフィールドが空欄になる、テキストがずれる、端が切れる場合、フォーム特有の印刷トラブル — とりわけフィールドの値が抜け落ちる問題 — とそれぞれを直す設定を解説します。",
  },
  {
    id: "guides/pdf-form-font-problems",
    slug: "guides/pdf-form-font-mondai",
    title: "PDFフォームのフォントの不具合（自動縮小・文字切れ・置き換え）",
    description:
      "フィールドの文字が大きすぎる、小さすぎる、または入力するにつれ自動的に縮小していきませんか？ フォームフィールドに特有のフォントの癖 — 自動サイズ調整、置き換え、文字切れ — と、きれいで読みやすい回答にする方法を解説します。",
  },
  {
    id: "guides/pdf-form-formatting-issues",
    slug: "guides/pdf-form-layout-kuzure",
    title: "PDFフォームのレイアウトの不具合（配置ずれ・はみ出し）",
    description:
      "フィールドの配置がずれる、回答がはみ出す、相手の画面では見た目が違って見える — ビューアによって異なるフォームのレイアウト問題と、一貫した表示にする方法を解説します。",
  },
  {
    id: "guides/pdf-form-submission-errors",
    slug: "guides/pdf-form-soshin-error",
    title: "PDFフォームの送信エラー（送信が失敗するとき）",
    description:
      "フォームの送信ボタンが失敗する、または何も起きませんか？ 組み込みの送信ボタンがフォーム作成側のサーバーに依存する理由、エラーの意味、それでも確実にフォームを送る手動の方法を解説します。",
  },
  {
    id: "guides/pdf-form-compatibility-problems",
    slug: "guides/pdf-form-gokansei-mondai",
    title: "PDFフォームの互換性の問題（XFAと動的フォーム）",
    description:
      "あるソフトでは開けるのに別のソフトでは崩れてしまうフォームは、たいてい一部のビューアしか対応していない機能を使っています。動的フォームの見分け方、不一致が起きる原因、選べる選択肢を解説します。",
  },
  {
    id: "guides/fix-pdf-form-errors",
    slug: "guides/pdf-form-error-okyu-shochi",
    title: "PDFフォームのエラーを直す — 応急処置チェックリスト",
    description:
      "不具合のあるPDFフォームに効く、汎用的な応急処置の手順です：ビューアを変える、再ダウンロードする、更新する、上からテキストを追加する、固定する。特定の原因を調べる前に、まずこれらを試しましょう。",
  },
];
