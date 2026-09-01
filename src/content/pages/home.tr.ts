import type { HomeContent } from "@/types/content";

/**
 * Turkish homepage copy. Terminology policy: docs/localization/tr-terminology.md.
 */
export const HOME_TR: HomeContent = {
  heroEyebrow: "Ücretsiz tarayıcı PDF araçları",
  heroH1Before: "PDF'leri Dönüştür, Birleştir ve Düzenle ",
  heroH1Highlight: "Saniyeler İçinde",
  heroH1After: "",
  heroLead:
    "Gizli, yerel işleme ile ücretsiz tarayıcı tabanlı PDF araçları — hiçbir şey sunucuya gönderilmez.",
  trust: [
    "Dosyalar tarayıcında yerel olarak işlenir",
    "Yükleme yok, hesap yok, filigran yok",
    "Ücretsiz — telefonda ve bilgisayarda çalışır",
  ],
  browseAllToolsLabel: "Tüm PDF araçlarına göz at →",
  toolsEyebrow: "Ücretsiz, tarayıcında",
  toolsHeading: "İhtiyacın olan her PDF aracı — yükleme gerekmez.",
  toolsLead:
    "Sayfadan ayrılmadan PDF'leri birleştir, böl, döndür, filigranla ve dönüştür. Her araç tarayıcında yerel olarak çalışır.",
  toolBadge: "Ücretsiz araç",
  tools: [
    { id: "image-to-pdf", label: "Görselden PDF'e", desc: "JPG, PNG, WebP'yi tek bir PDF'te birleştir." },
    { id: "merge-pdf", label: "PDF Birleştir", desc: "PDF'leri tek bir belgede birleştir." },
    { id: "split-pdf", label: "PDF Böl", desc: "Sayfaları aralığa göre ayır." },
    { id: "rotate-pdf", label: "PDF Döndür", desc: "Yan yatmış sayfaları düzelt." },
    { id: "pdf-to-images", label: "PDF'ten görsele", desc: "Sayfaları PNG ya da JPG olarak dışa aktar." },
    { id: "add-watermark-to-pdf", label: "Filigran ekle", desc: "Her sayfaya metin damgası bas." },
    { id: "compress-pdf", label: "PDF Sıkıştır", desc: "E-posta ve aktarım için dosya boyutunu küçült." },
    { id: "pdf-to-word", label: "PDF'ten Word'e", desc: "Metni düzenlenebilir bir .docx'e çıkar." },
    { id: "word-to-pdf", label: "Word'den PDF'e", desc: "Bir .docx ya da .txt'yi temiz bir PDF'e dönüştür." },
    {
      id: "reorder-pdf-pages",
      label: "PDF sayfalarını yeniden sırala",
      desc: "Sayfaları önizle, yeniden sırala, sonra indir.",
    },
    {
      id: "extract-pdf-pages",
      label: "PDF sayfalarını çıkar",
      desc: "Seçtiğin sayfaları ya da aralıkları yeni bir PDF olarak kaydet.",
    },
  ],
  appBandEyebrow: "iPhone ve Android'de de · beş günlük araç",
  featureBand: [
    { key: "edit", label: "Düzenle", sub: "Metin, görsel, sayfa" },
    { key: "convert", label: "Dönüştür", sub: "Word, JPG, PNG" },
    { key: "secure", label: "Koru", sub: "Şifreyle koru" },
    { key: "scan", label: "Tara", sub: "Kağıttan PDF'e" },
    { key: "organize", label: "Sırala", sub: "Yeniden sırala, böl" },
  ],
  hubsHeading: "PDF'lerle yaptığın her şey — açıklandı.",
  hubsLead:
    "İnsanların PDF'lerle her gün gerçekten yaptığı işler için pratik kılavuzlar ve yöntemler.",
  hubs: [
    { id: "pdf-editor", label: "PDF Düzenleyici", desc: "Metni, görselleri ve sayfaları düzenle." },
    { id: "pdf-converter", label: "PDF Dönüştürücü", desc: "Word, JPG, PNG ve daha fazlasına dönüştür." },
    { id: "compress-pdf", label: "PDF Sıkıştır", desc: "Kaliteyi kaybetmeden dosyaları küçült." },
    { id: "sign-pdf", label: "PDF İmzala", desc: "Telefonundan imza ekle." },
    { id: "scan-to-pdf", label: "PDF Tarama", desc: "Kağıdı temiz PDF'lere dönüştür." },
    { id: "pdf-security", label: "PDF Güvenliği", desc: "Belgeleri şifreyle koru." },
    { id: "pdf-for-business", label: "İşletmeler için PDF", desc: "Sözleşmeler ve faturalar her yerde." },
    { id: "pdf-for-students", label: "Öğrenciler için PDF", desc: "Notlar, vurgulamalar ve ders özetleri." },
    { id: "pdf-forms", label: "PDF Formları", desc: "Doldurulabilir PDF'leri doldur, imzala ve kaydet." },
  ],
  guidesHeading: "En çok okunan kılavuzlar",
  guideBadge: "Kılavuz",
  featuredGuides: [
    { id: "guides/how-to-edit-pdf-on-iphone", label: "iPhone'da PDF nasıl düzenlenir" },
    { id: "guides/how-to-edit-pdf-on-android", label: "Android'de PDF nasıl düzenlenir" },
    { id: "guides/how-to-compress-pdf", label: "PDF nasıl sıkıştırılır" },
    { id: "guides/how-to-sign-pdf-on-phone", label: "Telefonda PDF nasıl imzalanır" },
  ],
  browseAllGuidesLabel: "{count} PDF kılavuzunun tümüne göz at →",
  finalCtaHeading: "PDF Editor'ı yanında taşı.",
  finalCtaSub: "iOS ve Android'de ücretsiz. Başlamak için hesap gerekmez.",
  faq: [
    {
      q: "PDF Editor ücretsiz mi?",
      a: "Evet. Temel düzenleme, tarama, sıkıştırma ve imzalama özellikleri ücretsizdir. Bazı gelişmiş özellikler PDF Editor Pro ile açılır.",
    },
    {
      q: "İnternet bağlantısı olmadan çalışır mı?",
      a: "Temel düzenleme, sayfa yönetimi, imzalama ve sıkıştırmanın tümü çevrimdışı çalışır. Bulut senkronizasyonu ve OCR bağlantı gerektirebilir.",
    },
    {
      q: "Hangi cihazlarda çalışır?",
      a: "PDF Editor, iPhone ve iPad'de (iOS 16 ve üzeri) ile Android telefon ve tabletlerde (Android 9 ve üzeri) kullanılabilir.",
    },
    {
      q: "Dosyalarım gizli mi?",
      a: "Evet. Sen paylaşmayı seçmedikçe dosyaların cihazında kalır. Belgelerini sunucularımıza göndermeyiz.",
    },
    {
      q: "Bunu yasal belgeler için kullanabilir miyim?",
      a: "Birçok kullanıcı PDF Editor ile sözleşme imzalayıp paylaşıyor. Hukuki tavsiye vermeyiz — kritik belgeler için elektronik imzaya güvenmeden önce yerel kuralları kontrol et.",
    },
  ],
};
