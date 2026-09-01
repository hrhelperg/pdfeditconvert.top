import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";
import { TR_GUIDE_ROUTES } from "@/content/tr/routes.guides";

/**
 * Turkish route manifest — the localization manifest for tr.
 *
 * One entry per English route this locale publishes. `id` is the English
 * route id; `slug` is the permanent Turkish URL after the `/tr` prefix.
 * Category, priority, change frequency and lastmod policy are inherited —
 * see buildLocaleRoutes.
 *
 * Slug conventions (also recorded in docs/localization/tr-terminology.md):
 *
 * - ASCII, lowercase, hyphenated, genuine Turkish phrasing — "pdf-sikistir"
 *   for "compress-pdf", never a slug identical to the English route id
 *   (enforced by tests/i18n/routeMap.test.ts's "never reuses an English
 *   slug verbatim" check — every entry below was written to fail that
 *   check by construction, not just pass it by accident).
 * - Diacritics stripped in slugs only (ç→c, ğ→g, ı→i, ö→o, ş→s, ü→u).
 *   Prose keeps every diacritic.
 * - Translated section prefixes: kilavuzlar/, karsilastirma/,
 *   kullanim-senaryolari/.
 */
export const TR_ROUTE_MANIFEST: readonly LocaleRouteEntry[] = [
  {
    id: "",
    slug: "",
    title: "PDF Editor — Telefonda PDF Düzenle, Dönüştür, İmzala, Tara",
    description:
      "İş, okul ve günlük hayat için hepsi bir arada PDF çözümü. iOS ve Android için PDF Editor uygulamasıyla telefonundan PDF düzenle, dönüştür, sıkıştır, birleştir, imzala ve tara.",
  },

  // Hubs
  {
    id: "pdf-editor",
    slug: "pdf-duzenleyici",
    title: "PDF Düzenleyici — Telefonda Metin, Görsel ve Sayfa Düzenle",
    description:
      "iPhone veya Android'de PDF düzenle: metni değiştir, görsel ekle, sayfaları yeniden sırala, belgeleri imzala. PDF Editor uygulamasının telefonda düzenlemeyi ne kadar kolaylaştırdığını gör.",
  },
  {
    id: "pdf-converter",
    slug: "pdf-donusturucu",
    title: "PDF Dönüştürücü — Word, JPG, PNG ve Daha Fazlasına Dönüştür",
    description:
      "PDF'i Word, Excel, JPG, PNG'ye dönüştür, hatta tam tersini yap. iOS ve Android için PDF Editor uygulamasıyla telefonda en basit yöntemi öğren.",
  },
  {
    id: "sign-pdf",
    slug: "pdf-imzala",
    title: "PDF İmzala — Telefonda Elektronik İmza Ekle",
    description:
      "Telefonundan PDF'leri el yazısı ya da yazılı isimle imzala. Çoğu iş sürecinde kabul edilir. PDF Editor uygulamasını dene.",
  },
  {
    id: "scan-to-pdf",
    slug: "pdf-tarama",
    title: "PDF Tarama — Kağıt Belgeleri Temiz PDF'e Dönüştür",
    description:
      "Telefon kamerasıyla belgeleri, kimlikleri ve fişleri tarayarak temiz, aranabilir PDF'lere dönüştür. PDF Editor uygulaması sayfa kenarlarını otomatik algılar.",
  },
  {
    id: "pdf-security",
    slug: "pdf-guvenligi",
    title: "PDF Güvenliği — Şifre Koruması ve Şifreleme",
    description:
      "Hassas PDF'leri şifre ve şifreleme ile koru. iPhone ve Android'de belge güvenliği için pratik rehber.",
  },
  {
    id: "pdf-for-business",
    slug: "isletmeler-icin-pdf",
    title: "İşletmeler için PDF — Sözleşme, Fatura ve İş Akışları",
    description:
      "Küçük ekipler sözleşme, fatura ve onay süreçlerinde PDF'i nasıl kullanıyor? PDF Editor uygulamasıyla mobil odaklı modern iş akışları.",
  },
  {
    id: "pdf-for-students",
    slug: "ogrenciler-icin-pdf",
    title: "Öğrenciler için PDF — Notlar, Vurgulamalar ve Ders Materyalleri",
    description:
      "PDF'leri ders notları, vurgulamalar ve çalışma materyalleri için kullan. iOS ve Android için PDF Editor uygulamasıyla akıllı telefon kullanımı.",
  },
  {
    id: "pdf-forms",
    slug: "pdf-formlari",
    title: "PDF Formları — Doldur, İmzala ve Yönet",
    description:
      "PDF formlarının nasıl çalıştığını, nasıl doldurulup imzalanacağını, oluşturulup düzeltileceğini öğren. Etkileşimli ve etkileşimsiz doldurulabilir PDF'ler için hem bilgisayarda hem telefonda geçerli kaynak.",
  },

  // Guides
  {
    id: "guides",
    slug: "kilavuzlar",
    title: "PDF Kılavuzları — Nasıl Yapılır Makaleleri ve Eğitimler",
    description:
      "Telefon odaklı pratik PDF eğitimleri: iPhone ve Android'de düzenleme, dönüştürme, sıkıştırma, birleştirme, imzalama ve koruma yöntemleri.",
  },

  // Compare
  {
    id: "compare/pdf-vs-docx",
    slug: "karsilastirma/pdf-veya-docx",
    title: "PDF veya DOCX — Özellik Özellik Karşılaştırma",
    description:
      "PDF ve DOCX'i düzenleme kolaylığı, görünüm bütünlüğü, imza, güvenlik ve paylaşım açısından karşılaştır. İşine uygun doğru formatı seç.",
  },
  {
    id: "compare/pdf-vs-jpg",
    slug: "karsilastirma/pdf-veya-jpg",
    title: "PDF veya JPG — Hangi Formatı Ne Zaman Kullanmalısın",
    description:
      "PDF mi JPG mi: ne zaman taramalı, ne zaman fotoğraf çekmelisin? Kalite, dosya boyutu, OCR ve belge iş akışına uygunluk açısından karşılaştırma.",
  },
  {
    id: "compare/pdf-app-vs-online-pdf-tools",
    slug: "karsilastirma/pdf-uygulamasi-veya-online-araclar",
    title: "PDF Uygulaması veya Online PDF Araçları — Hangisi Daha İyi?",
    description:
      "Yerel PDF uygulamalarını tarayıcı tabanlı araçlarla hız, gizlilik ve çevrimdışı erişim açısından karşılaştır.",
  },

  // Use cases
  {
    id: "use-cases/freelancers",
    slug: "kullanim-senaryolari/serbest-calisanlar",
    title: "Serbest Çalışanlar için PDF Editor — Teklifler ve İmzalı Belgeler",
    description:
      "Serbest çalışanların sevdiği iş akışları: teklifler, imzalı sözleşmeler ve faturalar — hepsi telefondan.",
  },
  {
    id: "use-cases/remote-work",
    slug: "kullanim-senaryolari/uzaktan-calisma",
    title: "Uzaktan Çalışma için PDF Editor — Belgeler Her Yerde",
    description:
      "Yolda belgelerle çalış: herhangi bir cihazdan, herhangi bir yerden PDF tara, imzala ve paylaş.",
  },

  // Tools (browser-based, free, no upload)
  {
    id: "pdf-tools",
    slug: "pdf-araclari",
    title: "Ücretsiz PDF Araçları — Tarayıcı Tabanlı, Yükleme Yok",
    description:
      "Tamamen tarayıcında çalışan ücretsiz PDF araçları. PDF birleştir, böl, döndür, filigran ekle, görselden PDF'e ve PDF'ten görsele dönüştür — dosyaların cihazından hiç çıkmaz.",
  },
  {
    id: "compress-pdf",
    slug: "pdf-sikistir",
    title: "PDF Sıkıştır — Tarayıcıda Dosya Boyutunu Küçült (Ücretsiz, Yükleme Yok)",
    description:
      "Sıkıştırma düzeyini ayarlayarak PDF dosya boyutunu doğrudan tarayıcında küçült. Ücretsiz, kayıt yok, yükleme yok — dosyan cihazından hiç çıkmaz.",
  },
  {
    id: "pdf-to-word",
    slug: "pdf-word-donustur",
    title: "PDF'ten Word'e — Tarayıcıda Düzenlenebilir DOCX'e Dönüştür",
    description:
      "PDF'teki metni tarayıcında düzenlenebilir bir Word (.docx) belgesine dönüştür. Ücretsiz, yükleme yok — sahte bir yerleşim vaadi değil, dürüst bir metin dönüşümü.",
  },
  {
    id: "word-to-pdf",
    slug: "word-pdf-donustur",
    title: "Word'den PDF'e — Tarayıcıda DOCX veya TXT'yi PDF'e Dönüştür",
    description:
      "Word .docx veya .txt dosyanı tarayıcında temiz bir PDF'e dönüştür. Ücretsiz, kayıt yok, yükleme yok — belgen cihazından hiç çıkmaz.",
  },
  {
    id: "reorder-pdf-pages",
    slug: "pdf-sayfa-sirala",
    title: "PDF Sayfalarını Yeniden Sırala — Tarayıcıda (Ücretsiz, Yükleme Yok)",
    description:
      "Her sayfayı önizleyip basit kontrollerle PDF sayfa sırasını değiştir, ardından yeniden sıralanmış dosyayı indir. Ücretsiz, kayıt yok, yükleme yok — dosyalar cihazında kalır.",
  },
  {
    id: "extract-pdf-pages",
    slug: "pdf-sayfa-cikar",
    title: "PDF Sayfalarını Çıkar — Seçili Sayfaları Yeni PDF Olarak Kaydet (Ücretsiz, Yükleme Yok)",
    description:
      "Belirli sayfaları veya aralıkları seç, sadece onları içeren yeni bir PDF'i tarayıcında indir. Ücretsiz, kayıt yok, yükleme yok — dosyalar cihazından hiç çıkmaz.",
  },
  {
    id: "merge-pdf",
    slug: "pdf-birlestir",
    title: "PDF Birleştir — Tarayıcıda Dosyaları Birleştir (Ücretsiz, Yükleme Yok)",
    description:
      "Birden fazla PDF'i tarayıcında tek dosyada birleştir. Ücretsiz, kayıt yok, yükleme yok — dosyaların cihazından hiç çıkmaz.",
  },
  {
    id: "split-pdf",
    slug: "pdf-bol",
    title: "PDF Böl — Tarayıcıda Sayfa Çıkar (Ücretsiz, Yükleme Yok)",
    description:
      "PDF'i sayfa aralığına göre tarayıcında böl. Ücretsiz, kayıt yok, yükleme yok — dosyalar cihazında kalır.",
  },
  {
    id: "image-to-pdf",
    slug: "gorsel-pdf-donustur",
    title: "Görselden PDF'e — Tarayıcıda JPG, PNG, WebP'yi PDF'e Dönüştür",
    description:
      "JPG, PNG ve WebP görsellerini tarayıcında tek bir PDF'te birleştir. Ücretsiz, yükleme yok, kayıt yok — dosyalar cihazında kalır.",
  },
  {
    id: "rotate-pdf",
    slug: "pdf-dondur",
    title: "PDF Döndür — Tarayıcıda Sayfa Yönünü Düzelt",
    description:
      "PDF'in tamamını veya seçili sayfalarını 90°, 180° ya da 270° döndür. Ücretsiz ve gizli — dosyalar cihazından hiç çıkmaz.",
  },
  {
    id: "pdf-to-images",
    slug: "pdf-gorsel-donustur",
    title: "PDF'ten Görsele — Sayfaları PNG veya JPG Olarak Dışa Aktar",
    description:
      "Herhangi bir PDF'i sayfa sayfa PNG veya JPG görsellerine dönüştür. Ücretsiz, yükleme yok, hesap yok — her şey cihazında çalışır.",
  },
  {
    id: "add-watermark-to-pdf",
    slug: "pdf-filigran-ekle",
    title: "PDF'e Filigran Ekle — Ücretsiz, Gizli, Tarayıcıda",
    description:
      "PDF'in her sayfasına metin filigranı ekle. Ücretsiz, yükleme yok, kayıt yok — dosyalar cihazında kalır.",
  },

  // Legal & meta
  {
    id: "privacy-policy",
    slug: "gizlilik-politikasi",
    title: "Gizlilik Politikası",
    description:
      "pdfeditconvert.top ve hrhelperg s.r.o.'nun verilerini nasıl işlediği.",
  },
  {
    id: "terms",
    slug: "kullanim-kosullari",
    title: "Kullanım Koşulları",
    description: "pdfeditconvert.top kullanımını düzenleyen koşullar.",
  },
  {
    id: "contact",
    slug: "iletisim",
    title: "İletişim — hrhelperg s.r.o.'nun PDF Editor'ı",
    description:
      "PDF Editor'ın arkasındaki ekiple iletişime geç. E-posta: info@hrhelperg.com.",
  },

  ...TR_GUIDE_ROUTES,
];
