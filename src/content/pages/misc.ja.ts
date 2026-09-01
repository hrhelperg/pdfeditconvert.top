import type {
  ContactContent,
  GuidesIndexContent,
  LegalContent,
  ToolsIndexContent,
} from "@/types/content";
import { PRIVACY_UPDATED } from "@/content/legal/privacy";
import { TERMS_UPDATED } from "@/content/legal/terms";

export const TOOLS_INDEX_JA: ToolsIndexContent = {
  crumbLabel: "無料のPDFツール",
  heroEyebrow: "無料のPDFツール",
  heroH1: "ブラウザで使えるPDFツール — ファイルは一切端末から出ません。",
  heroHighlight: "一切端末から出ません",
  heroLead:
    "PDFの結合・分割・回転・透かし追加・変換が、何もアップロードせずに行えます。処理はすべてブラウザ内でローカルに完結し、無料・登録不要です。",
  privacyNote:
    "このページのすべてのツールは、ファイルをブラウザ内でローカルに処理します。サーバーには何も送信されず、何も保存されません。",
  clusterHeading: "ブラウザでのPDF作業に関するガイド{count}件",
  goingFurtherHeading: "PDFをもっと使いこなす",
  goingFurtherBody:
    "これらのツールはブラウザでの単発の作業に対応しています。編集・変換・署名・保護・スキャンといった一連の作業の進め方については、以下のトピック別ページから始めてください。",
  hubs: [
    { id: "pdf-editor", label: "PDFエディター" },
    { id: "pdf-converter", label: "PDFコンバーター" },
    { id: "pdf-forms", label: "PDFフォーム" },
    { id: "sign-pdf", label: "PDFに署名" },
    { id: "pdf-security", label: "PDFのセキュリティ" },
    { id: "scan-to-pdf", label: "PDFにスキャン" },
    {
      id: "compare/pdf-app-vs-online-pdf-tools",
      label: "PDFアプリ vs オンラインPDFツール",
    },
  ],
  appCtaHeading: "PDFツールをスマホでも使いたい方へ",
  appCtaSub: "PDF EditorアプリをiPhone・Androidで — 無料です。",
};

export const GUIDES_INDEX_JA: GuidesIndexContent = {
  h1: "PDFガイド",
  lead: "PDFの編集・変換・圧縮・署名・保護について、スマホでの利用を想定した実践的なチュートリアルを{count}件紹介します。ツールやトピックごとにまとめています。",
};

export const CONTACT_JA: ContactContent = {
  h1: "お問い合わせ",
  lead: "ご質問、提携のご相談、取材のお問い合わせ、PDF Editorアプリへのご意見など — いただいたメールはすべて目を通しています。",
  emailLabel: "メール",
  officeLabel: "登記上の所在地",
  sections: [
    {
      heading: "対応について",
      body: "メールが唯一の問い合わせ窓口です。チケットシステムやチャットボットは使用していません。返信は、アプリを開発している少人数のチームから、通常2営業日以内に届きます。アプリに関する内容の場合は端末とOSのバージョンをお知らせください。特定の文書に関する問題の場合は、ファイルを添付する代わりに何をしていたかを説明してください — 文書は必要とせず、お預かりもしません。",
    },
    {
      heading: "対応できないこと",
      body: "このサイトのブラウザツールはすべて端末内で完結して動作するため、処理した内容が届くことはありません。そのため、変換したファイルの復元、ダウンロードの再送、内容の確認なども行えません — 手元に控えが一切ないためです。特定のPDFでツールがうまく動作しなかった場合は、ファイルの種類（スキャンしたもの、パスワードで保護されたもの、入力済みのフォームなど）と、ツールがどのような挙動をしたかをお知らせください。",
    },
    {
      heading: "プライバシーおよび法的なお問い合わせ",
      body: "データ保護に関するご質問、削除のご依頼、法的な通知はすべて同じ宛先に届き、上記の登記上の所在地にあるhrhelperg s.r.o.が対応します。",
    },
  ],
  legalSentence:
    "{privacy}では収集する情報・しない情報について説明しており、{terms}ではサイトおよびツールの利用条件を定めています。",
  privacyLinkLabel: "プライバシーポリシー",
  termsLinkLabel: "利用規約",
  tryAppHeading: "アプリを試す",
};

/**
 * Japanese privacy policy.
 *
 * A translation, not a separate policy: the operator, the registered
 * office, the contact address, the analytics vendor and the legal basis are
 * the same facts the English version states, because the same company
 * processes the same data under the same law.
 *
 * The operator's legal name and registered-office address
 * ("hrhelperg s.r.o., Husitská 502/36, Žižkov, 130 00 Praha 3, Czech
 * Republic") and the contact email are reproduced byte-identical to the
 * English source — never translated or localized.
 *
 * "GDPR" is kept as-is (no established single-kanji-acronym exists the way
 * DSGVO/RGPD/RODO do for German, French, Polish) with a one-time Japanese
 * gloss on first mention（「一般データ保護規則（GDPR）」）, per §8 of the
 * terminology policy: the site's operator is EU-established, so GDPR is the
 * regulation that applies regardless of the reader's own country. Japan's
 * own 個人情報保護法 (APPI) is a different, narrower statute and is not
 * substituted here.
 */
export const PRIVACY_JA: LegalContent = {
  h1: "プライバシーポリシー",
  updated: PRIVACY_UPDATED,
  sections: [
    {
      heading: "運営者について",
      body: [
        "pdfeditconvert.topは、hrhelperg s.r.o.（チェコの有限会社）が運営しています。登記上の所在地はHusitská 502/36, Žižkov, 130 00 Praha 3, Czech Republicです。お問い合わせはinfo@hrhelperg.comまでお願いします。",
      ],
    },
    {
      heading: "このウェブサイトが収集する情報",
      body: [
        "このウェブサイトは情報提供のみを目的としています。ページを読むためにアカウントの作成、文書のアップロード、個人情報の共有を求めることはありません。",
        "プライバシーに配慮した解析ツール（WebmasterID）を使用して、どのページが閲覧されているか、読者がどのようにサイトにたどり着いたかを把握しています。記録されるのは、閲覧したページのURL、おおよその地域と端末の種類、参照元サイトです。広告用のCookieは使用せず、他のサイトをまたいだプロファイルを作成することもありません。",
      ],
    },
    {
      heading: "モバイルアプリが収集する情報",
      body: [
        "PDF Editorモバイルアプリは、端末内にデータ（開いたファイルや設定）をローカルに保存する場合があり、この機能を有効にすると、選択したクラウドサービス（iCloud、Google Driveなど）にファイルを同期する場合もあります。正式な一覧は、App StoreおよびGoogle Playでのアプリのプライバシー情報をご確認ください。",
      ],
    },
    {
      heading: "Cookie",
      body: [
        "サイトの基本的な機能とアクセス解析のために、少数のCookieおよび類似の保存技術を使用しています。広告用のCookieは使用していません。",
      ],
    },
    {
      heading: "権利について",
      body: [
        "EU（欧州連合）またはEEA（欧州経済領域）にお住まいの場合、一般データ保護規則（GDPR）に基づき、アクセス、訂正、削除、処理の制限、データポータビリティなどの権利があります。これらの権利を行使するには、info@hrhelperg.comまでメールでご連絡ください。",
      ],
    },
    {
      heading: "お問い合わせ",
      body: ["このポリシーに関するご質問は、info@hrhelperg.comまでお送りください。"],
    },
    {
      heading: "変更について",
      body: [
        "このポリシーは更新される場合があります。重要な変更がある場合は、このページ上でお知らせするとともに、「最終更新日」を更新します。",
      ],
    },
  ],
};

/** Japanese terms of service — a translation of the same terms. */
export const TERMS_JA: LegalContent = {
  h1: "利用規約",
  updated: TERMS_UPDATED,
  sections: [
    {
      heading: "この利用規約について",
      body: [
        "この利用規約は、hrhelperg s.r.o.（Husitská 502/36, Žižkov, 130 00 Praha 3, Czech Republic）が運営するpdfeditconvert.topの利用について定めるものです。",
      ],
    },
    {
      heading: "サイトの利用",
      body: [
        "このサイトのページを閲覧し、リンクし、共有することができます。コンテンツの大部分を抽出して再公開すること、他の利用者の妨げになるような方法でサイトを利用することはできません。",
      ],
    },
    {
      heading: "PDF Editorモバイルアプリについて",
      body: [
        "PDF Editorは、Apple App StoreおよびGoogle Playを通じて配布される別のモバイルアプリです。アプリの利用には、インストール時に表示されるアプリ独自の利用規約が適用されます。",
      ],
    },
    {
      heading: "保証の否認",
      body: [
        "pdfeditconvert.topのコンテンツは一般的な情報提供のみを目的としており、法律、税務、または財務に関する助言ではありません。正確な内容を保つよう合理的な努力をしていますが、内容の完全性や特定の目的への適合性を保証するものではありません。",
      ],
    },
    {
      heading: "責任の制限",
      body: [
        "チェコおよびEU法で認められる最大限の範囲において、hrhelperg s.r.o.は、このサイトの利用から生じる間接的または結果的な損害について責任を負いません。",
      ],
    },
    {
      heading: "準拠法",
      body: [
        "この利用規約はチェコ共和国の法律に準拠します。紛争が生じた場合は、管轄権を有するチェコの裁判所で解決されます。",
      ],
    },
    {
      heading: "お問い合わせ",
      body: ["この利用規約に関するご質問は、info@hrhelperg.comまでお送りください。"],
    },
  ],
};
