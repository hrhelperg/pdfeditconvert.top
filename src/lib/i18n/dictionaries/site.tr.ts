import type { SiteDictionary } from "@/lib/i18n/dictionary";

/**
 * Turkish site chrome (tr-TR).
 *
 * Navigation labels use the imperative form that matches the tool button
 * itself ("Sıkıştır", "Birleştir"), not a literal rendering of the English
 * list. The footer links point at the Turkish route ids, so the whole
 * footer graph stays inside tr. Terminology policy:
 * docs/localization/tr-terminology.md.
 */
export const SITE_TR: SiteDictionary = {
  skipToContent: "İçeriğe atla",

  header: {
    homeAriaLabel: "PDF Editor ana sayfası",
    nav: [
      { id: "pdf-editor", label: "PDF Editor" },
      { id: "pdf-converter", label: "Dönüştür" },
      { id: "compress-pdf", label: "Sıkıştır" },
      { id: "merge-pdf", label: "Birleştir" },
      { id: "sign-pdf", label: "İmzala" },
      { id: "guides", label: "Kılavuzlar" },
    ],
    ctaLabel: "Uygulamayı indir",
    ctaAriaLabel: "PDF Editor uygulamasını App Store'dan indir",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
  },

  switcher: {
    label: "Dil",
    ariaLabel: "Dili değiştir",
    currentLabel: "Geçerli dil",
  },

  footer: {
    tagline:
      "İş, okul ve günlük hayat için hepsi bir arada PDF çözümü. Telefonundan PDF'leri düzenle, dönüştür, imzala ve tara.",
    appEyebrow: "PDF Editor uygulaması",
    appHeading: "PDF Editor'ı yanında taşı.",
    appSub: "iPhone ve Android'de ücretsiz. Hesap gerekmez.",
    columnProduct: "Ürün",
    columnLearn: "Kaynaklar",
    columnCompany: "Şirket",
    columnTools: "Ücretsiz araçlar",
    product: [
      { id: "pdf-editor", label: "PDF Editor" },
      { id: "pdf-converter", label: "PDF Dönüştürücü" },
      { id: "compress-pdf", label: "PDF Sıkıştır" },
      { id: "sign-pdf", label: "PDF İmzala" },
      { id: "scan-to-pdf", label: "PDF Tarama" },
    ],
    learn: [
      { id: "guides", label: "Tüm kılavuzlar" },
      { id: "pdf-forms", label: "PDF Formları" },
      { id: "guides/how-to-fill-out-a-pdf-form", label: "PDF formu nasıl doldurulur" },
      { id: "guides/how-to-convert-pdf-to-word", label: "PDF Word'e nasıl dönüştürülür" },
      {
        id: "guides/how-to-reduce-pdf-file-size-for-email",
        label: "E-posta için PDF boyutu nasıl küçültülür",
      },
      { id: "guides/how-to-edit-pdf-on-iphone", label: "iPhone'da PDF nasıl düzenlenir" },
      { id: "guides/how-to-merge-pdf-files", label: "PDF dosyaları nasıl birleştirilir" },
      { id: "compare/pdf-vs-docx", label: "PDF mi DOCX mi" },
    ],
    company: [
      { id: "contact", label: "İletişim" },
      { id: "privacy-policy", label: "Gizlilik" },
      { id: "terms", label: "Koşullar" },
    ],
    tools: [
      { id: "pdf-tools", label: "Tüm ücretsiz araçlar" },
      { id: "image-to-pdf", label: "Görselden PDF'e" },
      { id: "merge-pdf", label: "PDF Birleştir" },
      { id: "split-pdf", label: "PDF Böl" },
      { id: "rotate-pdf", label: "PDF Döndür" },
      { id: "pdf-to-images", label: "PDF'ten görsele" },
      { id: "add-watermark-to-pdf", label: "Filigran ekle" },
    ],
    sitemapLabel: "Site haritası",
    sitemapHref: "/sitemap.xml",
    rights: "© {year} hrhelperg s.r.o. Tüm hakları saklıdır.",
  },

  store: {
    appStoreAria: "PDF Editor uygulamasını App Store'dan indir",
    googlePlayAria: "PDF Editor uygulamasını Google Play'den al",
  },

  breadcrumbs: {
    home: "Ana sayfa",
    guides: "Kılavuzlar",
    compare: "Karşılaştırma",
    useCases: "Kullanım senaryoları",
    tools: "Araçlar",
  },

  sections: {
    faqHeading: "Sıkça sorulan sorular",
    relatedGuides: "İlgili kılavuzlar",
    readTheGuide: "Kılavuzu oku →",
    seeAllGuides: "Tüm kılavuzları gör",
    browseEveryGuide: "Tüm PDF kılavuzlarına göz at",
    allFreeTools: "Tarayıcıda çalışan tüm ücretsiz PDF araçları",
    relatedTools: "İlgili PDF araçları",
    stepByStep: "Adım adım",
    tips: "İpuçları",
    lastUpdated: "Son güncelleme",
    whenToPick: "{label} ne zaman tercih edilmeli",
    workflowsHeading: "İşe yarayan iş akışları",
    tryOnPhone: "Telefonunda dene",
    takeWithYou: "PDF Editor'ı yanında taşı.",
    freeOnBoth: "iOS ve Android'de ücretsiz.",
    appEyebrow: "PDF Editor uygulaması",
    editOnPhoneHeading: "PDF'lerini telefonunda düzenle.",
    trust: [
      "Dosyalar tarayıcında yerel olarak işlenir",
      "Yükleme yok, hesap yok, filigran yok",
      "Ücretsiz — telefonda ve bilgisayarda çalışır",
    ],
    clusterHeading: {
      one: "Bu kümedeki 1 kılavuz",
      other: "Bu kümedeki {count} kılavuzun tümü",
    },
    toolGuidesHeading: {
      one: "{label} kılavuzu",
      other: "{label} kılavuzları",
    },
    goToHub: "{label} sayfasına git →",
    guideTopicsNav: "Kılavuz konuları",
  },
};
