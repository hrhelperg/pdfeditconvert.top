import type { SiteDictionary } from "@/lib/i18n/dictionary";

/**
 * Japanese site chrome (ja-JP).
 *
 * Navigation labels use the short verb/noun form that matches the tool
 * button itself (「圧縮」「結合」), not a literal rendering of the English
 * list. The footer links point at the Japanese route ids, so the whole
 * footer graph stays inside ja. Terminology policy:
 * docs/localization/ja-terminology.md.
 */
export const SITE_JA: SiteDictionary = {
  skipToContent: "コンテンツへスキップ",

  header: {
    homeAriaLabel: "PDF Editorのホーム",
    nav: [
      { id: "pdf-editor", label: "PDF Editor" },
      { id: "pdf-converter", label: "変換" },
      { id: "compress-pdf", label: "圧縮" },
      { id: "merge-pdf", label: "結合" },
      { id: "sign-pdf", label: "署名" },
      { id: "guides", label: "ガイド" },
    ],
    ctaLabel: "アプリを入手",
    ctaAriaLabel: "App StoreでPDF Editorをダウンロード",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
  },

  switcher: {
    label: "言語",
    ariaLabel: "言語を切り替える",
    currentLabel: "現在の言語",
  },

  footer: {
    tagline:
      "仕事、学業、日常生活のためのオールインワンPDFソリューションです。スマホからPDFを編集・変換・署名・スキャンできます。",
    appEyebrow: "PDF Editorアプリ",
    appHeading: "PDF Editorをいつでも手元に。",
    appSub: "iPhoneとAndroidで無料。アカウント登録は不要です。",
    columnProduct: "プロダクト",
    columnLearn: "ガイド",
    columnCompany: "会社情報",
    columnTools: "無料ツール",
    product: [
      { id: "pdf-editor", label: "PDF Editor" },
      { id: "pdf-converter", label: "PDFコンバーター" },
      { id: "compress-pdf", label: "PDFを圧縮" },
      { id: "sign-pdf", label: "PDFに署名" },
      { id: "scan-to-pdf", label: "PDFにスキャン" },
    ],
    learn: [
      { id: "guides", label: "すべてのガイド" },
      { id: "pdf-forms", label: "PDFフォーム" },
      {
        id: "guides/how-to-fill-out-a-pdf-form",
        label: "PDFフォームの入力方法",
      },
      {
        id: "guides/how-to-convert-pdf-to-word",
        label: "PDFをWordに変換する方法",
      },
      {
        id: "guides/how-to-reduce-pdf-file-size-for-email",
        label: "メール用にPDFのサイズを小さくする方法",
      },
      {
        id: "guides/how-to-edit-pdf-on-iphone",
        label: "iPhoneでPDFを編集する方法",
      },
      { id: "guides/how-to-merge-pdf-files", label: "PDFファイルを結合する方法" },
      { id: "compare/pdf-vs-docx", label: "PDFとDOCXの違い" },
    ],
    company: [
      { id: "contact", label: "お問い合わせ" },
      { id: "privacy-policy", label: "プライバシー" },
      { id: "terms", label: "利用規約" },
    ],
    tools: [
      { id: "pdf-tools", label: "すべての無料ツール" },
      { id: "image-to-pdf", label: "画像をPDFに変換" },
      { id: "merge-pdf", label: "PDFを結合" },
      { id: "split-pdf", label: "PDFを分割" },
      { id: "rotate-pdf", label: "PDFを回転" },
      { id: "pdf-to-images", label: "PDFを画像に変換" },
      { id: "add-watermark-to-pdf", label: "透かしを追加" },
    ],
    sitemapLabel: "サイトマップ",
    sitemapHref: "/sitemap.xml",
    rights: "© {year} hrhelperg s.r.o. 無断転載を禁じます。",
  },

  store: {
    appStoreAria: "App StoreでPDF Editorをダウンロード",
    googlePlayAria: "Google PlayでPDF Editorを入手",
  },

  breadcrumbs: {
    home: "ホーム",
    guides: "ガイド",
    compare: "比較",
    useCases: "活用事例",
    tools: "ツール",
  },

  sections: {
    faqHeading: "よくある質問",
    relatedGuides: "関連ガイド",
    readTheGuide: "ガイドを読む →",
    seeAllGuides: "すべてのガイドを見る",
    browseEveryGuide: "PDFガイドをすべて見る",
    allFreeTools: "ブラウザで使える無料のPDFツール一覧",
    relatedTools: "関連するPDFツール",
    stepByStep: "手順",
    tips: "コツ",
    lastUpdated: "最終更新日",
    whenToPick: "{label}を選ぶとよい場合",
    workflowsHeading: "覚えておきたい活用方法",
    tryOnPhone: "スマホで試す",
    takeWithYou: "PDF Editorをいつでも手元に。",
    freeOnBoth: "iOSとAndroidで無料。",
    appEyebrow: "PDF Editorアプリ",
    editOnPhoneHeading: "スマホでPDFを編集。",
    trust: [
      "ファイルはブラウザ内でローカルに処理されます",
      "アップロードなし、アカウント登録なし、透かしなし",
      "無料 — スマホでもパソコンでも使えます",
    ],
    clusterHeading: {
      one: "このグループの唯一のガイド",
      other: "このグループの{count}件のガイド",
    },
    toolGuidesHeading: {
      one: "{label}のガイド",
      other: "{label}のガイド",
    },
    goToHub: "{label}へ →",
    guideTopicsNav: "ガイドのトピック",
  },
};
