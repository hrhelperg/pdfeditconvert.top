import type { HomeContent } from "@/types/content";

/**
 * Japanese homepage copy. Terminology policy: docs/localization/ja-terminology.md.
 */
export const HOME_JA: HomeContent = {
  heroEyebrow: "ブラウザで使える無料のPDFツール",
  heroH1Before: "PDFの変換・結合・編集が",
  heroH1Highlight: "数秒で完了",
  heroH1After: "",
  heroLead:
    "無料のブラウザ完結型PDFツールです。処理はすべて端末内でローカルに行われ、ファイルがサーバーに送信されることはありません。",
  trust: [
    "ファイルはブラウザ内でローカルに処理されます",
    "アップロードなし、アカウント登録なし、透かしなし",
    "無料 — スマホでもパソコンでも使えます",
  ],
  browseAllToolsLabel: "PDFツールをすべて見る →",
  toolsEyebrow: "無料・ブラウザで完結",
  toolsHeading: "必要なPDFツールがすべてそろっています — アップロード不要です。",
  toolsLead:
    "ページを離れることなく、PDFの結合・分割・回転・透かし追加・変換ができます。どのツールもブラウザ内でローカルに動作します。",
  toolBadge: "無料ツール",
  tools: [
    { id: "image-to-pdf", label: "画像をPDFに変換", desc: "JPG、PNG、WebPを1つのPDFにまとめます。" },
    { id: "merge-pdf", label: "PDFを結合", desc: "複数のPDFを1つの文書にまとめます。" },
    { id: "split-pdf", label: "PDFを分割", desc: "指定した範囲でページを抽出します。" },
    { id: "rotate-pdf", label: "PDFを回転", desc: "横向きになったページを直します。" },
    { id: "pdf-to-images", label: "PDFを画像に変換", desc: "ページをPNGまたはJPGで書き出します。" },
    {
      id: "add-watermark-to-pdf",
      label: "透かしを追加",
      desc: "すべてのページにテキストを重ねます。",
    },
    {
      id: "compress-pdf",
      label: "PDFを圧縮",
      desc: "メール送信やアップロード用にファイルサイズを小さくします。",
    },
    { id: "pdf-to-word", label: "PDFをWordに変換", desc: "テキストを編集可能な.docxとして抽出します。" },
    { id: "word-to-pdf", label: "WordをPDFに変換", desc: ".docxや.txtをきれいなPDFに変換します。" },
    {
      id: "reorder-pdf-pages",
      label: "ページを並べ替え",
      desc: "プレビューを見ながらページを並べ替えてダウンロードします。",
    },
    {
      id: "extract-pdf-pages",
      label: "ページを抽出",
      desc: "選んだページや範囲を新しいPDFとして保存します。",
    },
  ],
  appBandEyebrow: "iPhone・Androidでも使える · 毎日役立つ5つの機能",
  featureBand: [
    { key: "edit", label: "編集", sub: "テキスト、画像、ページ" },
    { key: "convert", label: "変換", sub: "Word、JPG、PNG" },
    { key: "secure", label: "保護", sub: "パスワードで保護" },
    { key: "scan", label: "スキャン", sub: "紙をPDFに" },
    { key: "organize", label: "整理", sub: "並べ替え、分割" },
  ],
  hubsHeading: "PDFでできることを、まるごと解説。",
  hubsLead: "多くの人が毎日行っているPDF作業について、実践的なガイドと具体的な方法を紹介します。",
  hubs: [
    { id: "pdf-editor", label: "PDFエディター", desc: "テキスト、画像、ページを編集します。" },
    {
      id: "pdf-converter",
      label: "PDFコンバーター",
      desc: "Word、JPG、PNGなどに変換します。",
    },
    {
      id: "compress-pdf",
      label: "PDFを圧縮",
      desc: "画質を落とさずにファイルを小さくします。",
    },
    { id: "sign-pdf", label: "PDFに署名", desc: "スマホから直接署名できます。" },
    { id: "scan-to-pdf", label: "PDFにスキャン", desc: "紙の文書をきれいなPDFに変換します。" },
    {
      id: "pdf-security",
      label: "PDFのセキュリティ",
      desc: "パスワードで文書を保護します。",
    },
    {
      id: "pdf-for-business",
      label: "ビジネス向けPDF",
      desc: "外出先でも契約書や請求書を扱えます。",
    },
    {
      id: "pdf-for-students",
      label: "学生向けPDF",
      desc: "ノート、ハイライト、要約に。",
    },
    {
      id: "pdf-forms",
      label: "PDFフォーム",
      desc: "PDFに入力・署名して保存します。",
    },
  ],
  guidesHeading: "よく読まれているガイド",
  guideBadge: "ガイド",
  featuredGuides: [
    { id: "guides/how-to-edit-pdf-on-iphone", label: "iPhoneでPDFを編集する方法" },
    { id: "guides/how-to-edit-pdf-on-android", label: "AndroidでPDFを編集する方法" },
    { id: "guides/how-to-compress-pdf", label: "PDFを圧縮する方法" },
    { id: "guides/how-to-sign-pdf-on-phone", label: "スマホでPDFに署名する方法" },
  ],
  browseAllGuidesLabel: "PDFガイド{count}件をすべて見る →",
  finalCtaHeading: "PDF Editorをいつでも手元に。",
  finalCtaSub: "iOSとAndroidで無料。始めるのにアカウントは不要です。",
  faq: [
    {
      q: "PDF Editorは無料ですか？",
      a: "はい。基本的な編集・スキャン・圧縮・署名の機能は無料です。一部の高度な機能はPDF Editor Proで利用できます。",
    },
    {
      q: "インターネット接続がなくても使えますか？",
      a: "基本的な編集、ページの管理、署名、圧縮はオフラインでも動作します。クラウド同期とOCR（文字認識）には接続が必要な場合があります。",
    },
    {
      q: "対応している端末は？",
      a: "PDF EditorはiPhoneとiPad（iOS 16以降）、Androidのスマートフォンとタブレット（Android 9以降）に対応しています。",
    },
    {
      q: "ファイルは安全に守られますか？",
      a: "はい。共有を選択しない限り、ファイルは端末内に保存されたままです。文書がサーバーに送信されることはありません。",
    },
    {
      q: "法的な文書にも使えますか？",
      a: "多くのユーザーがPDF Editorで契約書に署名し、共有しています。法的な助言は行っていません — 重要な文書で電子署名を利用する前に、お住まいの地域の規定を確認してください。",
    },
  ],
};
