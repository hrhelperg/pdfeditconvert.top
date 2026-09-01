import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-word",
  hero: {
    eyebrow: "PDFからWord",
    h1: "PDFを編集可能なWordに変換する — ブラウザ内で。",
    highlight: "ブラウザ内で",
    lead: "PDF内のテキストを取り出し、Word、Google Docs、Pagesで編集できる.docxファイルにします。誠実なテキスト変換であり、「レイアウトを完璧に再現する」といった偽りの約束はしません。",
  },
  privacyNote:
    "ファイルは端末上のブラウザ内でローカルに処理され、サーバーにはアップロードされません。何も端末の外に出ません。",
  howTo: {
    heading: "PDFをWordに変換する方法",
    steps: [
      { title: "PDFを追加", body: "テキストを含むPDFをドラッグ&ドロップするか、クリックして選択してください。" },
      { title: "変換する", body: "「Wordに変換」をクリックしてください。選択可能なテキストがブラウザ内でローカルに抽出されます。" },
      { title: "ダウンロード", body: ".docxファイルが自動的にダウンロードされます — どこでも開いて編集できます。" },
      { title: "整える", body: "見出しやレイアウトはお使いのエディターで再設定してください。テキストは自由に再構成できます。" },
    ],
  },
  useCases: {
    heading: "このツールが適した場面",
    items: [
      { title: "契約書の文言を再利用する", body: "PDFの契約書から条項を取り出し、打ち直すことなく編集可能な下書きにします。" },
      { title: "レポートを再利用する", body: "PDFレポートの本文テキストを、再構成できる文書に移します。" },
      { title: "引用・要約する", body: "メモや要約、引用のために、手作業で書き写すことなく文章を抽出します。" },
      { title: "元データを失ったPDFを修復する", body: "元の.docxがもう手元にない場合でも、編集可能なテキストを復元できます。" },
    ],
  },
  limitations: {
    heading: "正直な制限事項",
    items: [
      { title: "レイアウトは再現されない", body: "このツールはテキストのみを抽出します。段組み、表、正確な余白、フォント、画像は再現されません — お使いのエディターで書式を再設定してください。" },
      { title: "スキャンされたPDFは処理できない", body: "画像のみ／スキャンされたPDFにはテキスト層がありません。ブラウザではOCRを利用できないため、スキャンした文書にはPDF Editorアプリをご利用ください。" },
      { title: "複雑な文書は整形が必要", body: "作り込まれたPDF（多段組み、脚注など）は、読める形のテキストの流れとして抽出されるため、整える作業が必要になります。" },
    ],
  },
  related: [
    { label: "WordからPDF — 逆の操作", path: "/word-to-pdf" },
    { label: "PDFを画像に変換", path: "/pdf-to-images" },
    { label: "無料のPDFツール一覧", path: "/pdf-tools" },
    { label: "PDFとDOCX — どちらを使うべきか", path: "/compare/pdf-vs-docx" },
    { label: "PDFをWordに変換する方法", path: "/guides/how-to-convert-pdf-to-word" },
  ],
  faq: [
    { q: "ファイルはアップロードされますか？", a: "いいえ。テキスト抽出はすべてブラウザ内で行われます。PDFが端末から出ることはありません。" },
    { q: "Wordファイルは元のPDFと完全に同じ見た目になりますか？", a: "いいえ — そのように装うこともしません。これは実用的なテキスト変換です。レイアウト、フォント、段組み、画像は再現されないため、お使いのエディターで書式を再設定してください。" },
    { q: "「テキストが見つかりません」と表示されるのはなぜですか？", a: "そのPDFはおそらくスキャンや画像のみのファイルで、テキスト層がありません。ブラウザのツールではOCRができないため、PDF Editorアプリをご利用ください。" },
    { q: "どの形式で保存されますか？", a: "Microsoft Word、Google Docs、Pages、LibreOfficeで開ける標準的な.docxファイルです。" },
    { q: "元に戻すことはできますか？", a: "はい — WordからPDFツールを使えば、編集した.docxを再びPDFに変換できます。" },
  ],
  appCta: {
    heading: "外出先でもPDFツールが必要ですか？",
    sub: "iPhoneとAndroid版のPDF Editorなら、スマホから文書の変換、編集、署名ができます。",
  },
};

export default content;
