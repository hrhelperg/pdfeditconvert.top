import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "word-to-pdf",
  hero: {
    eyebrow: "WordからPDF",
    h1: "WordをPDFに変換する — ブラウザ内で。",
    highlight: "ブラウザ内で",
    lead: ".docxまたは.txtファイルを、きれいで共有しやすいPDFに変換します。処理はすべて端末上で完結し、文書がアップロードされることはありません。",
  },
  privacyNote:
    "ファイルは端末上のブラウザ内でローカルに処理され、サーバーにはアップロードされません。何も端末の外に出ません。",
  howTo: {
    heading: "WordをPDFに変換する方法",
    steps: [
      { title: "文書を追加", body: ".docxまたは.txtファイルをドラッグ&ドロップするか、クリックして選択してください。" },
      { title: "変換する", body: "「PDFに変換」をクリックしてください。テキストが読み込まれ、ブラウザ内でローカルにPDFへ配置されます。" },
      { title: "ダウンロード", body: "きれいなA4サイズのPDFが自動的にダウンロードされます。" },
      { title: "共有する", body: "どこでも同じ見た目で、うっかり編集されることもない形式で送りましょう。" },
    ],
  },
  useCases: {
    heading: "このツールが適した場面",
    items: [
      { title: "編集されないコピーを送る", body: "下書きをPDFとして共有すれば、相手が誤って内容を変更する心配がありません。" },
      { title: "申請書を提出する", body: "多くのポータルは.docxではなくPDFを要求します — アップロード前に変換しましょう。" },
      { title: "シンプルなメモを保存する", body: ".txtのログやメモを、ページ分けされたきれいなPDFの記録に変えます。" },
      { title: "印刷用データを渡す", body: "シンプルな文書から、統一感のあるA4サイズのPDFを作成します。" },
    ],
  },
  limitations: {
    heading: "正直な制限事項",
    items: [
      { title: "テキスト中心の変換", body: "文書のテキストを抽出し、きれいなPDFへ再配置します。元のフォント、画像、表、.docx特有の正確な余白は再現されません。" },
      { title: "旧形式の.docには非対応", body: "古いバイナリ形式の.docファイルはブラウザで解析できません。まず.docxとして保存してください。" },
      { title: "特殊な文字は簡略化される", body: "組み込みのPDFフォントはラテン文字のテキストに対応しています。一部の特殊文字は、変換が失敗しないよう簡略化されます。" },
    ],
  },
  related: [
    { label: "PDFからWord — 逆の操作", path: "/pdf-to-word" },
    { label: "画像からPDF", path: "/image-to-pdf" },
    { label: "PDFを結合", path: "/merge-pdf" },
    { label: "無料のPDFツール一覧", path: "/pdf-tools" },
    { label: "WordをPDFに変換する方法", path: "/guides/how-to-convert-word-to-pdf" },
  ],
  faq: [
    { q: "ファイルはアップロードされますか？", a: "いいえ。変換はすべてブラウザ内で行われます。文書が端末から出ることはありません。" },
    { q: "PDFは元のWordファイルと完全に同じ見た目になりますか？", a: "いいえ — そのように謳うこともしません。これはテキストを中心としたきれいな変換です。.docxのフォント、画像、表、正確な余白は再現されません。" },
    { q: "対応しているファイルは？", a: "現行のWord形式である.docxと、プレーンテキストの.txtです。旧バイナリ形式の.docには対応していません — 先に.docxとして保存してください。" },
    { q: "サイズに上限はありますか？", a: "1ファイルあたり100 MBまでです。すべての処理がブラウザのメモリ内で行われるためです。" },
    { q: "PDFを再びWordに変換できますか？", a: "はい — PDFからWordツールを使えば、テキストを再び編集可能な.docxとして抽出できます。" },
  ],
  appCta: {
    heading: "外出先でもPDFツールが必要ですか？",
    sub: "iPhoneとAndroid版のPDF Editorなら、スマホから文書の変換、署名、共有ができます。",
  },
};

export default content;
