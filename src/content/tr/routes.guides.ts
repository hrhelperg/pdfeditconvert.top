import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";

/**
 * Turkish route manifest for the guide library.
 *
 * Slugs follow genuine Turkish search phrasing under the fixed "kilavuzlar/"
 * section prefix (see docs/localization/tr-terminology.md §6) — never a
 * literal transliteration of the English slug. Titles and descriptions are
 * translated fresh from the English source in src/lib/routes.ts, following
 * the terminology policy: docs/localization/tr-terminology.md.
 */
export const TR_GUIDE_ROUTES: readonly LocaleRouteEntry[] = [
  {
    id: "guides/how-to-edit-pdf-on-iphone",
    slug: "kilavuzlar/iphonede-pdf-duzenleme",
    title: "iPhone'da PDF Nasıl Düzenlenir? (2026 Rehberi)",
    description:
      "iPhone'da PDF'teki metni düzelt, görsel ekle ve sayfaları yeniden sırala. PDF Editor uygulamasıyla adım adım anlatım.",
  },
  {
    id: "guides/how-to-edit-pdf-on-android",
    slug: "kilavuzlar/androidde-pdf-duzenleme",
    title: "Android'de PDF Nasıl Düzenlenir? (2026 Rehberi)",
    description:
      "Android'de PDF'te metni değiştir, sayfa ekle ve belgeleri imzala. PDF Editor uygulamasıyla net, adım adım talimatlar.",
  },
  {
    id: "guides/how-to-compress-pdf",
    slug: "kilavuzlar/pdf-sikistirma-rehberi",
    title: "PDF Nasıl Sıkıştırılır? Kalite Kaybetmeden",
    description:
      "E-posta ya da yükleme için PDF dosya boyutunu kalite kaybetmeden küçült. PDF Editor uygulamasıyla mobil uyumlu eğitim.",
  },
  {
    id: "guides/how-to-merge-pdf-files",
    slug: "kilavuzlar/pdf-dosyalarini-birlestirme",
    title: "Telefonda veya Bilgisayarda PDF Dosyaları Nasıl Birleştirilir?",
    description:
      "Birden fazla PDF'i tek bir belgede topla. PDF Editor uygulamasıyla adım adım mobil iş akışı.",
  },
  {
    id: "guides/how-to-sign-pdf-on-phone",
    slug: "kilavuzlar/telefonda-pdf-imzalama",
    title: "Telefonda PDF Nasıl İmzalanır?",
    description:
      "iPhone ya da Android'inden PDF'lere yasal geçerliliği olan elektronik imza ekle. PDF Editor uygulamasıyla pratik rehber.",
  },
  {
    id: "guides/how-to-scan-documents-to-pdf",
    slug: "kilavuzlar/telefonla-belge-tarama",
    title: "Telefonla Belgeler PDF'e Nasıl Taranır?",
    description:
      "Telefon kamerasıyla çok sayfalı belgeleri temiz PDF'lere tara. Kenar algılama ve OCR içeren mobil iş akışı.",
  },
  {
    id: "guides/best-pdf-app-for-students",
    slug: "kilavuzlar/ogrenciler-icin-en-iyi-pdf-uygulamasi",
    title: "Öğrenciler İçin En İyi PDF Uygulaması (2026)",
    description:
      "Bir öğrencinin PDF uygulamasından gerçekten neye ihtiyacı var: notlar, vurgulamalar, imzalar ve ücretsiz dönüştürmeler. Dürüst değerlendirme kriterleri.",
  },
  {
    id: "guides/best-pdf-app-for-business",
    slug: "kilavuzlar/isletmeler-icin-en-iyi-pdf-uygulamasi",
    title: "İşletmeler İçin En İyi PDF Uygulaması (2026)",
    description:
      "Küçük ekiplerin bir PDF uygulamasında araması gerekenler: imza, sözleşme, güvenlik ve mobilden iş birliği.",
  },
  {
    id: "guides/pdf-vs-docx",
    slug: "kilavuzlar/pdf-mi-docx-mu",
    title: "PDF mi DOCX mü? Hangi Formatı Kullanmalısın",
    description:
      "DOCX yerine ne zaman PDF seçmelisin, ne zaman tam tersi? Düzenlenebilirlik, görünüm bütünlüğü, imza ve paylaşım açısından net karşılaştırma.",
  },
  {
    id: "guides/how-to-protect-pdf-file",
    slug: "kilavuzlar/pdf-dosyasini-sifreyle-koruma",
    title: "PDF Dosyası Şifreyle Nasıl Korunur?",
    description:
      "Telefonda ya da bilgisayarda bir PDF'e şifre koruması ve şifreleme ekle. PDF Editor uygulamasıyla pratik rehber.",
  },
  {
    id: "guides/how-to-convert-pdf-to-word",
    slug: "kilavuzlar/pdfi-worde-donusturme",
    title: "PDF Word'e Nasıl Dönüştürülür? Ücretsiz, Tarayıcında",
    description:
      "PDF'teki metni tarayıcında düzenlenebilir bir Word belgesine aktar. Neyin sorunsuz dönüştüğü, neyin düzeltme istediği ve taramaların neden çalışmadığı.",
  },
  {
    id: "guides/how-to-convert-word-to-pdf",
    slug: "kilavuzlar/wordu-pdfe-donusturme",
    title: "Word PDF'e Nasıl Dönüştürülür? Ücretsiz, Yükleme Yok",
    description:
      "Bir .docx ya da .txt dosyasını tarayıcında temiz, paylaşılabilir bir PDF'e dönüştür. PDF'in neden doğru gönderim formatı olduğu ve dışa aktarmadan önce kontrol edilmesi gerekenler.",
  },
  {
    id: "guides/how-to-convert-jpg-to-pdf",
    slug: "kilavuzlar/jpgyi-pdfe-donusturme",
    title: "JPG PDF'e Nasıl Dönüştürülür? Ücretsiz Görsel-PDF Dönüşümü",
    description:
      "Tek ya da birden fazla JPG fotoğrafı tarayıcında tek bir PDF'te birleştir. Fişler, kimlikler ve fotoğraflanmış belgeler için ideal — kalite ve iPhone'un HEIC formatı hakkında dürüst notlarla.",
  },
  {
    id: "guides/how-to-convert-png-to-pdf",
    slug: "kilavuzlar/pngyi-pdfe-donusturme",
    title: "PNG PDF'e Nasıl Dönüştürülür? Net Ekran Görüntüleri ve Grafikler",
    description:
      "PNG ekran görüntülerini, diyagramları ve grafikleri tarayıcında tek bir PDF'te topla. PNG'nin metni neden keskin tuttuğu ve şeffaflığa ne olduğu.",
  },
  {
    id: "guides/how-to-convert-webp-to-pdf",
    slug: "kilavuzlar/webpyi-pdfe-donusturme",
    title: "WebP PDF'e Nasıl Dönüştürülür? Web Görsellerini Belgeye Çevirme",
    description:
      "İnternetten kaydedilen WebP görsellerini tarayıcında tek bir PDF'te birleştir. WebP'nin diğer uygulamalarda neden reddedildiği ve dönüştürmenin uyumluluğu nasıl çözdüğü.",
  },
  {
    id: "guides/how-to-convert-pdf-to-jpg",
    slug: "kilavuzlar/pdfi-jpgye-donusturme",
    title: "PDF JPG'ye Nasıl Dönüştürülür? Sayfaları Görsel Olarak Dışa Aktar",
    description:
      "PDF sayfalarını tarayıcında JPG görsellerine aktar. PNG yerine JPG'nin ne zaman doğru seçim olduğu, ölçeğin kaliteyi nasıl etkilediği ve görsel önizlemelerin PDF'ten ne zaman daha iyi olduğu.",
  },
  {
    id: "guides/how-to-convert-pdf-to-png",
    slug: "kilavuzlar/pdfi-pngye-donusturme",
    title: "PDF PNG'ye Nasıl Dönüştürülür? Keskin, Kayıpsız Sayfa Görselleri",
    description:
      "PDF sayfalarını tarayıcında yüksek kaliteli PNG görsellerine aktar. PNG'nin metni ve diyagramları neden net tuttuğu, ayrıca ölçek ve şeffaflık notları.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-iphone",
    slug: "kilavuzlar/iphone-fotograflarini-pdfe-donusturme",
    title: "iPhone'da Fotoğraflar PDF'e Nasıl Dönüştürülür? (HEIC Sorunu Çözümü)",
    description:
      "iPhone fotoğraflarını tek bir PDF'e çevir — insanları takılıp kalan HEIC formatı sorunu dahil. Tarayıcı üzerinden yol ve uygulama içindeki daha hızlı yöntem.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-android",
    slug: "kilavuzlar/android-fotograflarini-pdfe-donusturme",
    title: "Android'de Fotoğraflar PDF'e Nasıl Dönüştürülür?",
    description:
      "Android fotoğraflarını bir tarayıcı aracıyla ya da yerleşik Yazdır-PDF'e yöntemiyle tek bir PDF'e çevir. Ayrıca tarama içeren daha hızlı uygulama içi iş akışı.",
  },
  {
    id: "guides/how-to-convert-scanned-documents-to-pdf",
    slug: "kilavuzlar/taranmis-belgeleri-pdfe-donusturme",
    title: "Taranmış Belgeler PDF'e Nasıl Dönüştürülür?",
    description:
      "Elinde zaten tarama görselleri ya da kağıt fotoğrafları mı var? Bunları tarayıcında tek bir PDF'te birleştir — ayrıca OCR'ın ne yaptığı ve taramaların aranabilir olması için neden gerekli olduğu.",
  },
  {
    id: "guides/how-to-split-pdf-files",
    slug: "kilavuzlar/pdf-dosyalarini-bolme",
    title: "PDF Dosyaları Ayrı Dosyalara Nasıl Bölünür? (Ücretsiz)",
    description:
      "Büyük bir PDF'i tarayıcında sayfa aralığına göre daha küçük dosyalara ayır. Ne zaman bölmeli ne zaman çıkarmalı, ayrıca orijinalleri güvende tutma yöntemi.",
  },
  {
    id: "guides/how-to-extract-pages-from-pdf",
    slug: "kilavuzlar/pdften-sayfa-cikarma",
    title: "PDF'ten Sayfalar Nasıl Çıkarılır? (Ücretsiz, Yükleme Yok)",
    description:
      "Belirli sayfaları ya da aralıkları tarayıcında yeni bir dosyaya çıkar. Birinin ihtiyaç duyduğu sadece o sayfaları göndermek için ideal.",
  },
  {
    id: "guides/how-to-reorder-pdf-pages",
    slug: "kilavuzlar/pdf-sayfalarini-yeniden-siralama",
    title: "PDF Sayfaları Nasıl Yeniden Sıralanır? (Ücretsiz, Tarayıcıda)",
    description:
      "PDF sayfalarını tarayıcında doğru sıraya getir. Ters çıkan taramaları ya da yanlış sırada birleşen dosyaları düzelt.",
  },
  {
    id: "guides/how-to-rotate-pdf-pages",
    slug: "kilavuzlar/pdf-sayfalarini-dondurme",
    title: "PDF Sayfaları Nasıl Döndürülür? (Ücretsiz, Yükleme Yok)",
    description:
      "PDF'in tüm ya da seçili sayfalarını tarayıcında 90, 180 veya 270 derece döndür. Yatay taramaları ve baş aşağı sayfaları düzelterek belgeyi okunur hale getir.",
  },
  {
    id: "guides/how-to-add-watermark-to-pdf",
    slug: "kilavuzlar/pdfe-filigran-ekleme",
    title: "PDF'e Filigran Nasıl Eklenir? (Ücretsiz)",
    description:
      "TASLAK ya da GİZLİ gibi bir metni PDF'in her sayfasına tarayıcında damgala. Bir filigranın gerçekte neyi koruyup neyi korumadığı dürüstçe açıklanıyor.",
  },
  {
    id: "guides/how-to-remove-unwanted-pages-from-pdf",
    slug: "kilavuzlar/pdften-istenmeyen-sayfalari-silme",
    title: "PDF'ten İstenmeyen Sayfalar Nasıl Silinir?",
    description:
      "Boş sayfaları, kapak sayfalarını ya da gereksiz bölümleri tarayıcında PDF'ten çıkar, sadece istediğin sayfaları tut. Temiz dosyalar, gizliliği korunan bir işlem.",
  },
  {
    id: "guides/how-to-organize-pdf-files",
    slug: "kilavuzlar/pdf-dosyalarini-duzenleme",
    title: "PDF Dosyaları Nasıl Düzenlenir? Pratik Bir İş Akışı",
    description:
      "Dağınık PDF'lere düzen getir: ilgili dosyaları birleştir, sayfaları yeniden sırala, gereksizleri at ve doğru şekilde adlandır. Ücretsiz tarayıcı araçlarıyla tekrarlanabilir bir yöntem.",
  },
  {
    id: "guides/how-to-prepare-pdf-before-sharing",
    slug: "kilavuzlar/paylasim-oncesi-pdf-hazirlama",
    title: "Paylaşmadan Önce PDF Nasıl Hazırlanır? (Kontrol Listesi)",
    description:
      "PDF'ler için gönderim öncesi kontrol listesi: fazla sayfaları kırp, yönü düzelt, boyutu küçült ve taslakları etiketle. Temiz, doğru boyutlu, bilinçli bir belge gönder.",
  },
  {
    id: "guides/how-to-fix-sideways-pdf-pages",
    slug: "kilavuzlar/yan-yatmis-pdf-sayfalarini-duzeltme",
    title: "Yan Yatmış veya Baş Aşağı PDF Sayfaları Nasıl Düzeltilir?",
    description:
      "Yan ya da baş aşağı açılan PDF sayfalarını tarayıcında kalıcı olarak düzelt. Ekranı çevirmenin neden işe yaramadığı ve gerçekte neyin çözüm olduğu.",
  },
  {
    id: "guides/how-to-compress-pdf-online",
    slug: "kilavuzlar/yuklemeden-online-pdf-sikistirma",
    title: "PDF Yüklemeden Online Nasıl Sıkıştırılır?",
    description:
      "PDF'i doğrudan tarayıcında küçült — yükleme yok, hesap yok. Cihaz üzerinde sıkıştırmanın tipik online araçlardan farkı ve kalite ödünleşimi.",
  },
  {
    id: "guides/how-to-reduce-pdf-file-size-for-email",
    slug: "kilavuzlar/eposta-icin-pdf-boyutu-kucultme",
    title: "E-posta İçin PDF Dosya Boyutu Nasıl Küçültülür?",
    description:
      "PDF'i Gmail ve Outlook ek dosya sınırlarının altına indir. Gerçek limitler, taramaların bunları neden aştığı ve dosyayı gönderilebilir hale getirme yöntemi.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-iphone",
    slug: "kilavuzlar/iphonede-pdf-kucultme",
    title: "iPhone'da PDF Nasıl Küçültülür?",
    description:
      "Bir tarayıcı aracı ya da PDF Editor uygulamasıyla iPhone'da PDF'i küçült. iPhone taramalarının neden bu kadar büyüdüğü ve gönderim limitlerinin altına nasıl indirileceği.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-android",
    slug: "kilavuzlar/androidde-pdf-kucultme",
    title: "Android'de PDF Nasıl Küçültülür?",
    description:
      "Kurulum gerektirmeyen bir tarayıcı aracıyla ya da PDF Editor uygulamasıyla herhangi bir Android telefonda PDF'i sıkıştır. Taramaları e-posta ve yükleme limitlerinin altına indir.",
  },
  {
    id: "guides/why-is-my-pdf-so-large",
    slug: "kilavuzlar/pdf-neden-bu-kadar-buyuk",
    title: "PDF'im Neden Bu Kadar Büyük? Nedenleri ve Çözümleri",
    description:
      "Bir PDF'in şişmesinin gerçek nedenleri — taramalar, gömülü fotoğraflar, yazı tipleri ve daha fazlası — ve ücretsiz tarayıcı araçlarıyla her biri için doğru çözüm.",
  },
  {
    id: "guides/compress-pdf-without-losing-too-much-quality",
    slug: "kilavuzlar/kaliteden-cok-kaybetmeden-sikistirma",
    title: "Kaliteden Fazla Kaybetmeden PDF Nasıl Sıkıştırılır?",
    description:
      "Dosya boyutu ile kalite arasındaki dengeyi bul. Sıkıştırma düzeylerinin detayı boyut karşılığında nasıl feda ettiği ve hâlâ işe yarayan en hafif düzeyin nasıl seçileceği.",
  },
  {
    id: "guides/how-to-compress-scanned-pdf",
    slug: "kilavuzlar/taranmis-pdf-sikistirma",
    title: "Taranmış Bir PDF Nasıl Sıkıştırılır? (Büyük Tasarruf)",
    description:
      "Taranmış PDF'ler küçültmesi en kolay ve en çok yer kaplayan dosyalardır. Onları belirgin şekilde sıkıştırma yöntemi ve aranabilir metne ne olduğu.",
  },
  {
    id: "guides/best-pdf-compression-settings",
    slug: "kilavuzlar/en-iyi-pdf-sikistirma-ayarlari",
    title: "En İyi PDF Sıkıştırma Ayarları — Bir Karar Rehberi",
    description:
      "E-posta, baskı, arşivleme ya da web için hangi sıkıştırma düzeyi? Ayarları amaca eşleştiren pratik bir tablo, dürüst ödünleşimlerle.",
  },
  {
    id: "guides/how-to-send-large-pdf-files",
    slug: "kilavuzlar/buyuk-pdf-dosyalarini-gonderme",
    title: "Büyük PDF Dosyaları Nasıl Gönderilir? (5 Güvenilir Yöntem)",
    description:
      "E-postaya sığmayacak kadar büyük bir PDF'i göndermenin beş güvenilir yolu — sıkıştırma, bölme, bulut bağlantıları ve daha fazlası — ve aralarında nasıl seçim yapılacağı.",
  },
  {
    id: "guides/how-to-reduce-pdf-size-before-uploading",
    slug: "kilavuzlar/yuklemeden-once-pdf-boyutu-kucultme",
    title: "Yüklemeden Önce PDF Boyutu Nasıl Küçültülür?",
    description:
      "Yükleme portalları büyük dosyaları e-postadan daha sert şekilde reddeder. Kontrol ettikleri okunabilirliği bozmadan PDF'i sıkı portal limitlerinin altına indirme yöntemi.",
  },
  {
    id: "guides/how-to-sign-pdf-on-iphone",
    slug: "kilavuzlar/iphonede-pdf-imzalama",
    title: "iPhone'da PDF Nasıl İmzalanır? (2026 Rehberi)",
    description:
      "iPhone'da Markup ya da PDF Editor uygulamasıyla bir PDF'i imzala. Yerleşik yöntemin sınırları ve özel bir uygulamanın ne zaman daha iyi imzalama aracı olduğu.",
  },
  {
    id: "guides/how-to-sign-pdf-on-android",
    slug: "kilavuzlar/androidde-pdf-imzalama",
    title: "Android'de PDF Nasıl İmzalanır? (2026 Rehberi)",
    description:
      "Evrensel bir yerleşik imzalayıcı bulunmayan Android'de bir PDF'i imzala. Güvenilir uygulama yöntemi, üreticiye göre değişen seçenekler ve yasal temeller.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-phone",
    slug: "kilavuzlar/telefonda-pdf-form-doldurma",
    title: "Telefonda PDF Formları Nasıl Doldurulur?",
    description:
      "iPhone ya da Android'de PDF formlarını doldur — ister gerçek form alanları olsun ister etkileşimsiz taramalar. Dokunup yazma, metin kutusu ekleme ve tek yerde imzalama.",
  },
  {
    id: "guides/how-to-annotate-pdf-on-mobile",
    slug: "kilavuzlar/mobilde-pdf-isaretleme",
    title: "Mobilde PDF Nasıl Not Alınıp İşaretlenir?",
    description:
      "Telefon ya da tabletinden PDF'leri vurgula, yorum ekle ve üzerine çiz. Gerçekten işe yarayan not alma araçları ve işaretlemeleri okunur tutma yöntemi.",
  },
  {
    id: "guides/how-to-manage-pdfs-on-phone",
    slug: "kilavuzlar/telefonda-pdf-yonetimi",
    title: "Telefonda PDF'ler Nasıl Yönetilir?",
    description:
      "Telefondaki PDF'lerin dağınıklaşmasını önle: yeniden adlandır, klasörlere ayır, buluta senkronize et ve depolama alanı aç. Pratik bir bakım rutini.",
  },
  {
    id: "guides/how-to-create-pdf-from-camera",
    slug: "kilavuzlar/kameradan-pdf-olusturma",
    title: "Kameradan PDF Nasıl Oluşturulur?",
    description:
      "Bir kamera çekimini PDF'e çevir — ve düzgün bir taramanın ham bir fotoğraftan neden daha iyi olduğu. Fişler ve beyaz tahtalar için hızlı çekim, belgeler için tarama.",
  },
  {
    id: "guides/how-to-share-pdf-from-phone",
    slug: "kilavuzlar/telefondan-pdf-paylasma",
    title: "Telefondan PDF Nasıl Paylaşılır?",
    description:
      "iPhone ya da Android'den bir PDF'i doğru şekilde paylaş — e-posta, AirDrop, mesajlaşma ya da bağlantıyla — ve gerçekten ulaşması için nasıl boyutlandırılıp hazırlanacağı.",
  },
  {
    id: "guides/best-pdf-tools-for-students",
    slug: "kilavuzlar/ogrenciler-icin-ucretsiz-pdf-araclari",
    title: "Öğrenciler İçin En İyi Ücretsiz PDF Araçları (2026)",
    description:
      "Gerçek öğrenci işlerini karşılayan ücretsiz, kayıt gerektirmeyen PDF araçları — okuma metinlerini birleştirme, ödevleri sıkıştırma, dönüştürme ve not alma — hiçbir ücret duvarı olmadan.",
  },
  {
    id: "guides/best-pdf-workflow-for-freelancers",
    slug: "kilavuzlar/serbest-calisanlar-icin-pdf-is-akisi",
    title: "Serbest Çalışanlar İçin En İyi PDF İş Akışı",
    description:
      "Serbest çalışanlar için tekrarlanabilir bir PDF iş akışı: teklifler çıkar, sözleşmeler imzalanır, faturalar gönderilir. Bunu hızlı ve gizli tutan ücretsiz araçlar ve mobil uygulama.",
  },
  {
    id: "guides/best-pdf-tools-for-small-business",
    slug: "kilavuzlar/kucuk-isletmeler-icin-ucretsiz-pdf-araclari",
    title: "Küçük İşletmeler İçin En İyi Ücretsiz PDF Araçları",
    description:
      "Fatura, sözleşme ve kayıtları ücretsiz, gizliliği koruyan PDF araçlarıyla yönet — kişi başı abonelik yok. Hangi iş için hangi araç ve uygulamanın nereye uyduğu.",
  },
  {
    id: "guides/pdf-vs-jpg-for-documents",
    slug: "kilavuzlar/belgeler-icin-pdf-mi-jpg-mi",
    title: "Belgeler İçin PDF mi JPG mi? Fotoğraf Göndermeyi Bırak",
    description:
      "Bir belgenin JPG fotoğrafını göndermenin neden yanlış olduğu, PDF'in ne zaman doğru olduğu ve bir fotoğrafı düzgün bir belgeye çevirme yöntemi.",
  },
  {
    id: "guides/when-to-use-pdf-instead-of-docx",
    slug: "kilavuzlar/docx-yerine-ne-zaman-pdf-kullanilir",
    title: "DOCX Yerine Ne Zaman PDF Kullanmalısın? (Kontrol Listesi)",
    description:
      "Elinde bir Word belgesi var — onu DOCX yerine PDF olarak mı göndermelisin? PDF'in doğru tercih olduğu anların hızlı kontrol listesi ve dönüştürme yöntemi.",
  },
  {
    id: "guides/browser-based-pdf-tools-vs-upload-tools",
    slug: "kilavuzlar/tarayici-tabanli-mi-yukleme-gerektiren-mi",
    title: "Tarayıcı Tabanlı PDF Araçları mı, Yükleme Gerektiren Araçlar mı?",
    description:
      "Tüm “online” PDF araçları aynı değildir. Tarayıcında çalışan araçlarla dosyanı yükleyen araçlar arasındaki fark — ve aralarındaki farkı nasıl anlarsın.",
  },
  {
    id: "guides/privacy-first-pdf-tools",
    slug: "kilavuzlar/gizlilik-odakli-pdf-araclari",
    title: "Gizliliği Önceleyen PDF Araçları — Belgeler Cihazında Kalsın",
    description:
      "PDF'ler en hassas verilerinden bazılarını taşır. Hiçbir şey yüklemeden onlarla çalışma yöntemi ve “gizlilik odaklı” ifadesinin gerçekte ne anlama geldiği.",
  },
  {
    id: "guides/common-pdf-mistakes-to-avoid",
    slug: "kilavuzlar/kacinilmasi-gereken-pdf-hatalari",
    title: "Kaçınılması Gereken Yaygın PDF Hataları",
    description:
      "Zaman kaybettiren ya da bilgi sızdıran PDF hataları — aşırı sıkıştırma, fotoğraf gönderme, hassas dosya yükleme, sayfa unutma — ve bunlardan kaçınma yöntemi.",
  },
  {
    id: "guides/why-wont-my-pdf-open",
    slug: "kilavuzlar/pdfim-neden-acilmiyor",
    title: "PDF'im Neden Açılmıyor? Nedenleri ve Pratik Çözümleri",
    description:
      "Açılmayan bir PDF neredeyse her zaman beş şeyden biridir. Bozuk indirmeleri, şifre kilitlerini, görüntüleyici hatalarını ve eski dosyaları teşhis etme yöntemi — her biri için ne işe yaradığı.",
  },
  {
    id: "guides/why-is-my-pdf-blank",
    slug: "kilavuzlar/pdfim-neden-bos-goruntuleniyor",
    title: "PDF'im Neden Boş Görünüyor? Gerçek Nedenler ve Kurtarma Yöntemi",
    description:
      "Bir PDF boş sayfalar halinde açıldığında içerik genelde hâlâ oradadır — sadece bir render hatası, eksik yazı tipi ya da tarama sorunu yüzünden gizlidir. Ne olduğunu anlama ve belgeyi geri getirme yöntemi.",
  },
  {
    id: "guides/why-cant-i-edit-a-pdf",
    slug: "kilavuzlar/pdf-neden-duzenlenemiyor",
    title: "Bir PDF'i Neden Düzenleyemiyorum? Gerçek Nedenler ve Çözümler",
    description:
      "PDF'ler düzenlemeye direnecek şekilde tasarlanmıştır, ama bazı belirli şeyler — taramalar, güvenlik bayrakları, görüntüleyici sınırları — bazı dosyaları diğerlerinden daha zor yapar. Seninkini ne engelliyor ve gerçekten ne işe yarıyor.",
  },
  {
    id: "guides/why-is-my-pdf-blurry",
    slug: "kilavuzlar/pdf-neden-bulanik",
    title: "PDF'im Neden Bulanık? Çözünürlük, Sıkıştırma ve Tarama Nedenleri",
    description:
      "Bulanık PDF'ler düşük çözünürlüklü taramalardan, aşırı sıkıştırmadan ya da kötü bir dışa aktarmadan kaynaklanır — formatın kendisinden değil. Hangi nedenle karşı karşıya olduğunu anlama ve netliği geri kazanma yöntemi.",
  },
  {
    id: "guides/how-to-fix-a-corrupted-pdf",
    slug: "kilavuzlar/bozuk-pdf-onarma",
    title: "Bozuk Bir PDF Dosyası Nasıl Onarılır?",
    description:
      "“Bozuk” görünen PDF'lerin çoğu aslında bozuk değildir — yarım kalmış indirmeler, görüntüleyici uyumsuzlukları ya da eksik yazımlardır. Dosyayı kurtaran dürüst çözüm listesi ve gerçekten kaybolduğu durumlar.",
  },
  {
    id: "guides/how-to-fix-pdf-printing-issues",
    slug: "kilavuzlar/pdf-yazdirma-sorunlarini-cozme",
    title: "PDF Yazdırma Sorunları Nasıl Çözülür? (Kesilen Sayfa, Yanlış Boyut, Eksik Metin)",
    description:
      "Bir PDF kırpılmış, yanlış ölçekte ya da eksik metinle yazdırıldığında çözüm belirtiye bağlıdır. Her baskı sorununu doğru ayara ya da baskı öncesi düzeltmeye eşleştiren kısa bir tablo.",
  },
  {
    id: "guides/how-to-fix-pdf-upload-errors",
    slug: "kilavuzlar/pdf-yukleme-hatalarini-cozme",
    title: "PDF Yükleme Hataları Nasıl Çözülür? (Çok Büyük, Reddedildi, Takıldı)",
    description:
      "Portallar PDF'leri birkaç nedenle reddeder: dosya boyutu, sayfa sayısı, format katılığı ya da aksayan bir yükleme. Hangisinin seni etkilediğini belirleyip dosyayı bir sonraki denemede kabul ettirme yöntemi.",
  },
  {
    id: "guides/how-to-fix-pdf-formatting-problems",
    slug: "kilavuzlar/pdf-bicimlendirme-sorunlarini-cozme",
    title: "PDF Biçimlendirme Sorunları Nasıl Çözülür? (Satır Kayması, Kenar Boşluğu, Boşluklar)",
    description:
      "Bir PDF'in yerleşimi bozuk göründüğünde — metin kayıyor, kenar boşlukları yanlış, boşluklar karışmış — çözüm genelde PDF'te değil kaynak belgede bulunur. İyi görünen bir dışa aktarma için en temiz yöntem.",
  },
  {
    id: "guides/how-to-fix-scanned-pdf-quality",
    slug: "kilavuzlar/taranmis-pdf-kalitesini-duzeltme",
    title: "Taranmış PDF Kalitesi Nasıl Düzeltilir? (Netleştirme, Eğiklik Giderme, Renk Düzeltme)",
    description:
      "Taranmış PDF'ler öngörülebilir şekillerde bozulur: eğiklik, soluk kontrast, benekli arka planlar, aşırı büyük dosyalar. Onları gerçekten düzelten tarama öncesi ayarlar ve tarama sonrası araçlar.",
  },
  {
    id: "guides/how-to-fix-pdf-font-issues",
    slug: "kilavuzlar/pdf-yazi-tipi-sorunlarini-cozme",
    title: "PDF Yazı Tipi Sorunları Nasıl Çözülür? (Eksik, Değiştirilmiş, Bozuk)",
    description:
      "Bir PDF yanlış yazı tipi, karakter yerine kutucuklar ya da değiştirilmiş metin gösterdiğinde, genelde gömülü bir yazı tipi eksiktir. Gömme işleminin nasıl çalıştığı ve dışa aktarma sırasında nelerin değiştirilmesi gerektiği.",
  },
  {
    id: "guides/best-pdf-tools-for-remote-work",
    slug: "kilavuzlar/uzaktan-calisma-icin-pdf-araclari",
    title: "Uzaktan Çalışma İçin En İyi PDF Araçları (Ücretsiz, Tarayıcı Tabanlı)",
    description:
      "Ofisin bir dizüstü bilgisayar ve bir telefonken işe yarayan PDF araçları — imzala, sıkıştır, birleştir, tara, paylaş — kurulum ya da kişi başı lisans olmadan.",
  },
  {
    id: "guides/best-pdf-tools-for-office-documents",
    slug: "kilavuzlar/ofis-belgeleri-icin-pdf-araclari",
    title: "Ofis Belgeleri İçin En İyi PDF Araçları (Word, Excel, Raporlar)",
    description:
      "Ofis işinin gerçekten ihtiyaç duyduğu PDF araç seti: temiz Word-PDF dönüşümleri, çoklu belge birleştirme, sayfa yeniden sıralama ve e-posta ekleri için güvenilir sıkıştırma.",
  },
  {
    id: "guides/best-pdf-workflow-for-teams",
    slug: "kilavuzlar/ekipler-icin-pdf-is-akisi",
    title: "Ekipler İçin En İyi PDF İş Akışı (Ortak Dosyalar, İncelemeler, Onaylar)",
    description:
      "Küçük ekipler ücretli PDF aboneliği olmadan belgeleri nasıl taşır: taslaklar, incelemeler ve imzalı onaylar için ücretsiz tarayıcı araçlarıyla tekrarlanabilir bir devir teslim.",
  },
  {
    id: "guides/how-to-share-pdfs-with-clients",
    slug: "kilavuzlar/musterilerle-pdf-paylasma",
    title: "PDF'ler Müşterilerle Nasıl Profesyonelce Paylaşılır?",
    description:
      "PDF'leri müşterilere gönderme kısa rehberi — e-posta için boyutlandırma, şifre seçimleri, dosyayı markalama, teslim alındığını doğrulama — üçüncü taraflara hiçbir şey yüklemeden.",
  },
  {
    id: "guides/how-to-prepare-pdf-for-business-use",
    slug: "kilavuzlar/is-kullanimi-icin-pdf-hazirlama",
    title: "İş Kullanımı İçin PDF Nasıl Hazırlanır? (Temizlik Kontrol Listesi)",
    description:
      "Bir PDF ofisten çıkmadan önce: taslakları kırp, sayfalamayı doğrula, yönü düzelt, yazı tiplerini göm ve dosyayı küçült. İşletmeni temsil eden belgeler için gönderim öncesi kontrol listesi.",
  },
  {
    id: "guides/how-to-send-contracts-as-pdf",
    slug: "kilavuzlar/sozlesmeleri-pdf-olarak-gonderme",
    title: "Sözleşmeler PDF Olarak Nasıl Gönderilir? (İmzala, Kilitle, Teslim Et)",
    description:
      "Sözleşmeler daha sıkı bir PDF iş akışı gerektirir: içeriği kilitleme, imza uygulama, taslakları filigranlama ve karşı tarafın uzun yazışma olmadan imzalayabileceği bir son dosya elde etme.",
  },
  {
    id: "guides/how-to-organize-work-documents-as-pdf",
    slug: "kilavuzlar/is-belgelerini-pdf-olarak-duzenleme",
    title: "İş Belgeleri PDF Olarak Nasıl Düzenlenir? (Klasör, İsim, Sürüm)",
    description:
      "İş PDF'leri için pratik bir adlandırma ve klasörleme kuralı — teklifler, brifingler, teslimler, arşivler — sürüm karmaşasını önler ve herkesin her şeyi hızlıca bulmasını sağlar.",
  },
  {
    id: "guides/how-to-manage-invoices-as-pdf",
    slug: "kilavuzlar/faturalari-pdf-olarak-yonetme",
    title: "Faturalar PDF Olarak Nasıl Yönetilir? (Kes, Takip Et, Arşivle)",
    description:
      "Muhasebe yazılımı gerektirmeyen bir fatura-PDF iş akışı: oluştur, numaralandır, gönder, takip et ve arşivle — sadece ücretsiz tarayıcı araçları ve düzenli bir klasör sistemiyle.",
  },
  {
    id: "guides/how-to-create-client-ready-pdf-files",
    slug: "kilavuzlar/musteriye-hazir-pdf-dosyalari-olusturma",
    title: "Müşteriye Hazır PDF Dosyaları Nasıl Oluşturulur?",
    description:
      "İç kullanım için bir PDF ile müşteriye hazır bir PDF'i ayıran şey: kapak sayfası, sayfa numaralandırma, markalama, dosya boyutu, dosya adı. Belgeyi tamamlanmış hissettiren hızlı cila.",
  },
  {
    id: "guides/pdf-workflows-for-small-business",
    slug: "kilavuzlar/kucuk-isletmeler-icin-pdf-is-akislari",
    title: "Küçük İşletmeler İçin PDF İş Akışları (Teklif, Sözleşme, Kayıt)",
    description:
      "Küçük bir işletme belge akışını PDF'ler üzerinden nasıl yürütür — teklifler çıkar, sözleşmeler döner, kayıtlar arşivlenir — bunun için bir abonelik yığını satın almadan.",
  },
  {
    id: "guides/pdf-workflows-for-consultants",
    slug: "kilavuzlar/danismanlar-icin-pdf-is-akislari",
    title: "Danışmanlar İçin PDF İş Akışları (Teklif, Rapor, Fatura)",
    description:
      "Bir danışmanın PDF ritmi: kapanış getiren teklifler, telefonda temiz okunan raporlar, saniyeler içinde giden faturalar. Bunu yalın tutan tarayıcı tabanlı araçlar.",
  },
  {
    id: "guides/pdf-workflows-for-agencies",
    slug: "kilavuzlar/ajanslar-icin-pdf-is-akislari",
    title: "Ajanslar İçin PDF İş Akışları (Sunumlar, Brifingler, Onaylar)",
    description:
      "Bir ajansın PDF zinciri — pitch sunumları, yaratıcı brifingler, müşteri onayları, teslimler — ücretsiz, gizliliği koruyan, tarayıcı tabanlı araçlarla hızlı ve öngörülebilir tutulur.",
  },
  {
    id: "guides/how-to-submit-homework-as-pdf",
    slug: "kilavuzlar/odevi-pdf-olarak-teslim-etme",
    title: "Ödev PDF Olarak Nasıl Teslim Edilir? (Portal Sorunu Yaşamadan)",
    description:
      "Okul portalları ödevleri öngörülebilir nedenlerle reddeder — dosya boyutu, sayfa sayısı, format. Tamamlanmış bir ödevden kabul edilen bir PDF yüklemesine giden en basit yol.",
  },
  {
    id: "guides/how-to-scan-notes-to-pdf",
    slug: "kilavuzlar/el-yazisi-notlari-pdfe-tarama",
    title: "El Yazısı Notlar PDF'e Nasıl Taranır? (Temiz, Aranabilir)",
    description:
      "El yazısı ders notu sayfalarını telefon kamerasıyla temiz, çok sayfalı PDF'lere çevir. İlk denemede okunaklı taramalar üreten ayarlar.",
  },
  {
    id: "guides/how-to-compress-pdf-for-school-portals",
    slug: "kilavuzlar/okul-portallari-icin-pdf-sikistirma",
    title: "Okul Portalları İçin PDF Nasıl Sıkıştırılır? (Sıkı Limitler)",
    description:
      "Okul ve üniversite yükleme portalları PDF'leri e-postadan daha sert sınırlar. Not verenin kontrol ettiği okunabilirliği bozmadan ödevleri limitlere sığdıracak şekilde sıkıştırma yöntemi.",
  },
  {
    id: "guides/how-to-convert-lecture-notes-to-pdf",
    slug: "kilavuzlar/ders-notlarini-pdfe-donusturme",
    title: "Ders Notları PDF'e Nasıl Dönüştürülür? (Word, Fotoğraf, Sunum)",
    description:
      "Ders notları her formatta gelir — Word belgesi, sunum, ekran görüntüsü, tahtanın fotoğrafı. Her birini yapısını kaybetmeden tek, okunabilir bir PDF'e çevirme yöntemi.",
  },
  {
    id: "guides/how-to-organize-study-materials-as-pdf",
    slug: "kilavuzlar/ders-materyallerini-pdf-olarak-duzenleme",
    title: "Ders Materyalleri PDF Olarak Nasıl Düzenlenir? (Klasör, İsimlendirme, Dizin)",
    description:
      "Ders PDF'leri hızlıca birikir. Dönem materyallerini ilk haftadan finallere kadar aranabilir tutan basit bir klasör, isimlendirme ve birleştirme kuralı.",
  },
  {
    id: "guides/how-to-share-study-notes-as-pdf",
    slug: "kilavuzlar/ders-notlarini-pdf-olarak-paylasma",
    title: "Ders Notları PDF Olarak Nasıl Paylaşılır? (Grup, Grup Sohbeti, Bulut)",
    description:
      "Bir çalışma grubuyla biçimlendirmeyi ya da sürüm kontrolünü kaybetmeden notlarını paylaş. Ortak çalışmayı ekran görüntüsü kaosuna dönüşmekten koruyan PDF alışkanlıkları.",
  },
  {
    id: "guides/how-to-edit-class-documents-as-pdf",
    slug: "kilavuzlar/ders-belgelerini-pdf-olarak-duzenleme",
    title: "Ders Belgeleri PDF Olarak Nasıl Düzenlenir? (İşaretle, Vurgula, İmzala)",
    description:
      "Ders föyleri, alıştırma kağıtları ve izin formları genelde PDF olarak gelir. Onları yazdırmadan işaretleme, doldurma ve geri gönderme yöntemi — hepsi telefonda ya da dizüstü bilgisayarda.",
  },
  {
    id: "guides/pdf-workflow-for-university-students",
    slug: "kilavuzlar/universite-ogrencileri-icin-pdf-is-akisi",
    title: "Üniversite Öğrencileri İçin PDF İş Akışı (Notlar, Ödevler, Teslimler)",
    description:
      "Final haftasını atlatan dönem boyu bir PDF ritmi: taranan ders notları, teslim edilen ödevler, paylaşılan çalışma paketleri. Tarayıcı tabanlı ve ücretsiz.",
  },
  {
    id: "guides/how-to-create-digital-study-pdfs",
    slug: "kilavuzlar/dijital-calisma-pdfleri-olusturma",
    title: "Dijital Çalışma PDF'leri Nasıl Oluşturulur? (Kartlar, Özetler, Paketler)",
    description:
      "Notlardan, sunumlardan ve vurgulamalardan kendi çalışma PDF'lerini oluştur — aranabilir, taşınabilir, tablette işaretlemeye hazır. Onları sınav zamanında gerçekten kullanışlı yapan yapı.",
  },
  {
    id: "guides/are-online-pdf-tools-safe",
    slug: "kilavuzlar/online-pdf-araclari-guvenli-mi",
    title: "Online PDF Araçları Güvenli mi? Riske Dürüst Bir Bakış",
    description:
      "“Online” PDF araçlarının çoğu dosyanı bir sunucuya yükler. Bazıları yüklemez. Gerçek riskler, veriyi farklı şekilde işleyen araç kategorileri ve hangisinin hangisi olduğunu anlama yöntemi.",
  },
  {
    id: "guides/how-to-protect-sensitive-pdf-files",
    slug: "kilavuzlar/hassas-pdf-dosyalarini-koruma",
    title: "Hassas PDF Dosyaları Nasıl Korunur? (Depolama, Paylaşım, Yaşam Döngüsü)",
    description:
      "Hassas PDF'lerin üç noktada korunması gerekir: depolanırken, paylaşılırken ve alıcı işini bitirdikten sonra. Üçünü de kapsayan pratik bir iş akışı.",
  },
  {
    id: "guides/how-to-share-pdf-files-privately",
    slug: "kilavuzlar/pdf-dosyalarini-gizlice-paylasma",
    title: "PDF Dosyaları Gizlice Nasıl Paylaşılır? (Yabancılara Yüklemeden)",
    description:
      "Bir PDF'i paylaşmanın gizli yolu genel bir “PDF araçları” sitesi üzerinden geçmez. Belgeleri sadece seninle alıcı arasında tutan kanallar, makul varsayılan ayarlarla.",
  },
  {
    id: "guides/privacy-first-document-workflows",
    slug: "kilavuzlar/gizlilik-odakli-belge-is-akislari",
    title: "Gizliliği Önceleyen Belge İş Akışları (Baştan Sona Yüklemesiz)",
    description:
      "Dosyaları cihazlarında ve üçüncü taraf sunucuların dışında tutan uçtan uca bir belge iş akışı — yakalama, düzenleme, imzalama, gönderme, arşivleme. Gerçekçi yapısı ve araçları.",
  },
  {
    id: "guides/local-browser-pdf-processing-explained",
    slug: "kilavuzlar/tarayicida-yerel-pdf-isleme-nasil-calisir",
    title: "Tarayıcıda Yerel PDF İşleme Nasıl Çalışır?",
    description:
      "Bir PDF aracı dosyanı hiçbir yere göndermeden tarayıcıda nasıl çalışabilir? Teknoloji, ödünleşimler ve bir aracın gerçekten yerel çalıştığını doğrulama yöntemi.",
  },
  {
    id: "guides/do-online-pdf-tools-store-files",
    slug: "kilavuzlar/online-pdf-araclari-dosya-depoluyor-mu",
    title: "Online PDF Araçları Dosyalarını Saklıyor mu? Kontrol Edilmesi Gerekenler",
    description:
      "Bazı online PDF araçları yüklenenleri anında siler, bazıları saatlerce tutar, bazıları süresiz saklar. Bir gizlilik politikasını hızlıca okuma ve nelere dikkat edileceği.",
  },
  {
    id: "guides/how-to-avoid-uploading-sensitive-documents",
    slug: "kilavuzlar/hassas-belgeleri-yuklemekten-kacinma",
    title: "Hassas Belgeleri Yüklemekten Nasıl Kaçınılır? (Pratik Alternatifler)",
    description:
      "Bir iş akışı hassas bir PDF'i yüklemeye seni ittiğinde, neredeyse her zaman yerel bir alternatif vardır. Görev kategorileri ve her biri için yüklemesiz araç.",
  },
  {
    id: "guides/secure-pdf-workflows-for-business",
    slug: "kilavuzlar/isletmeler-icin-guvenli-pdf-is-akislari",
    title: "İşletmeler İçin Güvenli PDF İş Akışları (Kurumsal Yığın Olmadan)",
    description:
      "Küçük bir işletmenin güvenli çalışmak için bir SOC2 PDF kasasına ihtiyacı yok. Gerçek riski karşılayan gerçekçi temel — şifreli depolama, imzalı aktarımlar, yerel işleme.",
  },
  {
    id: "guides/browser-based-document-processing-benefits",
    slug: "kilavuzlar/tarayici-tabanli-belge-islemenin-avantajlari",
    title: "Tarayıcı Tabanlı Belge İşlemenin Avantajları (Hız, Gizlilik, Maliyet)",
    description:
      "PDF'leri tarayıcıda işlemek geleneksel bulut araçlarına kıyasla hız-gizlilik-maliyet dengesini nasıl değiştirir ve yerel işlemenin sınırları gerçekte nerede.",
  },
  {
    id: "guides/pdf-vs-google-docs",
    slug: "kilavuzlar/pdf-mi-google-docs-mu",
    title: "PDF mi Google Docs mu? Hangisini Ne Zaman Kullanmalısın",
    description:
      "Google Docs iş birliği için, PDF teslimat için. Gerçekçi kullanım anları ve doğru zamanlarda ikisi arasında temiz dönüştürme yöntemi.",
  },
  {
    id: "guides/pdf-vs-docx-for-business",
    slug: "kilavuzlar/is-belgelerinde-pdf-mi-docx-mu",
    title: "İş Belgelerinde PDF mi DOCX mü? (Sözleşme, Rapor, Dağıtım)",
    description:
      "İş belgelerinin neredeyse her zaman PDF olarak gönderilip DOCX olarak yaşamasının nedeni. Bir sözleşmenin, raporun ya da faturanın yaşam döngüsünün her aşamasında doğru araç.",
  },
  {
    id: "guides/pdf-vs-images-for-sharing-documents",
    slug: "kilavuzlar/belge-paylasiminda-pdf-mi-gorsel-mi",
    title: "Belge Paylaşmak İçin PDF mi Görsel mi? (JPG, PNG, HEIC)",
    description:
      "Bir belgenin JPG, PNG ya da HEIC hali ne zaman yanlış olur — ve PDF'i hızlı bir ekran görüntüsünün ötesinde her şey için doğru format yapan nedir.",
  },
  {
    id: "guides/pdf-vs-png",
    slug: "kilavuzlar/pdf-mi-png-mi",
    title: "PDF mi PNG mi? Çok Sayfalı Belgeler ve Tek Keskin Görseller",
    description:
      "Çok sayfalı belgeler için PDF, tek, keskin, şeffaf arka planlı görseller için PNG kazanır. Net kurallar ve aralarındaki dönüştürme yöntemi.",
  },
  {
    id: "guides/best-format-for-sharing-documents",
    slug: "kilavuzlar/belge-paylasmak-icin-en-iyi-format",
    title: "Belge Paylaşmak İçin En İyi Format (PDF, DOCX, Görseller Karşılaştırması)",
    description:
      "PDF'in paylaşım için ne zaman doğru format olduğu, ne zaman olmadığı ve gerçekçi alternatiflerin (DOCX, görseller, HTML, Markdown) günlük senaryolarda nasıl karşılaştırıldığı.",
  },
  {
    id: "guides/why-pdf-is-still-popular",
    slug: "kilavuzlar/pdf-neden-hala-populer",
    title: "PDF 2026'da Neden Hâlâ Belgelerin Varsayılanı?",
    description:
      "Onlarca yıl sonra PDF hâlâ belge paylaşımına hakim. Ayakta kalmasının nedenleri — sadakat, evrensellik, imzalanabilirlik, arşive uygunluk — ve zayıf olduğu noktalar.",
  },
  {
    id: "guides/when-to-use-scanned-pdf",
    slug: "kilavuzlar/taranmis-pdf-ne-zaman-kullanilmali",
    title: "Taranmış PDF Ne Zaman Kullanılmalı (Ne Zaman Kullanılmamalı)",
    description:
      "Taranmış PDF'ler belirli bir sorunu çözer — kağıttan dijitale geçiş. Aynı zamanda daha büyük, daha az aranabilir ve düzenlemesi daha zordurlar. Bu takasın ne zaman değdiği.",
  },
  {
    id: "guides/editable-pdf-vs-flat-pdf",
    slug: "kilavuzlar/duzenlenebilir-pdf-ile-goruntu-pdfi-farki",
    title: "Düzenlenebilir PDF ile Görüntü PDF'i Arasındaki Gerçek Fark",
    description:
      "Bazı PDF'lerin gerçek, seçilebilir metni ve düzenlenebilir yapısı vardır; bazıları altında metin katmanı olmayan sayfa görüntüleridir. Hangisine sahip olduğunu anlama ve her birinin ne zaman doğru olduğu.",
  },
  {
    id: "guides/best-free-pdf-tools",
    slug: "kilavuzlar/2026nin-en-iyi-ucretsiz-pdf-araclari",
    title: "2026'nın En İyi Ücretsiz PDF Araçları (Dürüst, Kayıt Gerektirmeyen Seçimler)",
    description:
      "Kullanmaya değer ücretsiz PDF araçları — sıkıştır, birleştir, imzala, dönüştür, tara — gerçek kalite ve gizlilik için seçildi, kaç reklam gösterdiklerine ya da deneme sürelerinin uzunluğuna göre değil.",
  },
  {
    id: "guides/free-browser-based-pdf-tools",
    slug: "kilavuzlar/ucretsiz-tarayici-tabanli-pdf-araclari",
    title: "Ücretsiz Tarayıcı Tabanlı PDF Araçları (Kurulum Yok, Yükleme Yok)",
    description:
      "Tamamen tarayıcında çalışan PDF araçları — kurulum yok, hesap yok, yükleme yok. Nelerin mevcut olduğu, neleri kapsadığı ve gerçekten yerel çalıştıklarını doğrulama yöntemi.",
  },
  {
    id: "guides/best-pdf-tools-without-upload",
    slug: "kilavuzlar/yuklemeden-calisan-pdf-araclari",
    title: "Yüklemeden Çalışan En İyi PDF Araçları (Dosyalar Cihazında Kalır)",
    description:
      "PDF'inin cihazından çıkmasını istemediğinde, işi yerel olarak yapan araçlar bunlar. Sıkıştırma, birleştirme, dönüştürme — hepsi dosyalar makinende kalırken.",
  },
  {
    id: "guides/best-private-pdf-tools",
    slug: "kilavuzlar/en-iyi-gizlilik-odakli-pdf-araclari",
    title: "En İyi Gizlilik Odaklı PDF Araçları (Gizlilik Gerçekten Önemliyse)",
    description:
      "Sözleşmeler, mali kayıtlar ve diğer hassas PDF'ler için gizliliğe sadece beyan edilen bir politikayla değil, mimariyle saygı gösteren araçlar bunlar.",
  },
  {
    id: "guides/free-pdf-tools-for-iphone",
    slug: "kilavuzlar/iphone-icin-ucretsiz-pdf-araclari",
    title: "iPhone İçin Ücretsiz PDF Araçları (Tarayıcı ve Uygulama Seçimleri)",
    description:
      "Abonelik gerektirmeden gerçekten işe yarayan ücretsiz iPhone PDF araçları — sıkıştır, imzala, tara, dönüştür. Tarayıcı tabanlı seçenekler ve çevrimdışı iş akışları için PDF Editor uygulaması.",
  },
  {
    id: "guides/free-pdf-tools-for-android",
    slug: "kilavuzlar/android-icin-ucretsiz-pdf-araclari",
    title: "Android İçin Ücretsiz PDF Araçları (Tarayıcı ve Uygulama Seçimleri)",
    description:
      "Günlük görevler için seçilmiş ücretsiz Android PDF araçları — sıkıştır, imzala, tara, dönüştür. Mobil tarayıcı yöntemleri ve çevrimdışı kullanım için PDF Editor uygulaması.",
  },
  {
    id: "guides/what-is-a-pdf-form",
    slug: "kilavuzlar/pdf-formu-nedir",
    title: "PDF Formu Nedir? Etkileşimli ve Etkileşimsiz Formlar",
    description:
      "Bir PDF formu, cevap toplamak için tasarlanmış bir belgedir — bazen gerçekten yazabildiğin alanlarla, bazen üzerine yazı yazılan etkileşimsiz bir sayfayla. Bunun anlamı ve nasıl anlaşılacağı.",
  },
  {
    id: "guides/editable-pdf-vs-fillable-pdf",
    slug: "kilavuzlar/duzenlenebilir-pdf-ile-doldurulabilir-pdf-farki",
    title: "Düzenlenebilir PDF ile Doldurulabilir PDF Arasındaki Fark Nedir?",
    description:
      "Bir PDF'i düzenlemek içeriğini değiştirir; bir PDF'i doldurmak form alanlarına cevap girmek demektir. İki işin neden farklı olduğu ve hangisine gerçekten ihtiyacın olduğu.",
  },
  {
    id: "guides/how-pdf-forms-work",
    slug: "kilavuzlar/pdf-formlari-nasil-calisir",
    title: "PDF Formları Nasıl Çalışır? Alanlar, AcroForm ve Etkileşimsiz Taramalar",
    description:
      "Perde arkasında bir PDF formu ya sayfanın üzerine yerleştirilmiş etkileşimli alanlar bütünüdür ya da hiçbirinin olmadığı etkileşimsiz bir görüntüdür. Her birinin nasıl oluşturulduğu ve doldurma açısından neden önemli olduğu.",
  },
  {
    id: "guides/can-you-edit-a-pdf-form",
    slug: "kilavuzlar/pdf-formu-duzenlenebilir-mi",
    title: "Bir PDF Formu Düzenlenebilir mi? Neyi Değiştirebilir, Neyi Değiştiremezsin",
    description:
      "Bir PDF formunun sorularını düzenlemek onu doldurmaktan farklıdır. Neyin düzenlenebilir olduğu, neyin kilitli olduğu ve elinde sadece bitmiş bir PDF olarak bulunan bir formu değiştirme yöntemi.",
  },
  {
    id: "guides/how-to-fill-out-a-pdf-form",
    slug: "kilavuzlar/pdf-formu-nasil-doldurulur",
    title: "PDF Formu Nasıl Doldurulur? (Etkileşimli ya da Etkileşimsiz)",
    description:
      "Gerçek alanları olsun ya da üzerine yazı yazdığın etkileşimsiz bir tarama olsun, herhangi bir PDF formunu doldur. Bilgisayar ve telefon için eksiksiz anlatım, artı imzalama ve kaydetme.",
  },
  {
    id: "guides/how-to-save-a-filled-pdf-form",
    slug: "kilavuzlar/doldurulmus-pdf-formu-nasil-kaydedilir",
    title: "Doldurulmuş Bir PDF Formu Nasıl Kaydedilir Ki Cevaplar Kalıcı Olsun?",
    description:
      "Bir formu doldurup cevapların kaybolduğunu mu gördün? Doldurulmuş form verisini güvenilir şekilde kaydetme yöntemi, bazı görüntüleyicilerin neden bunu yapamadığı ve göndermeden önce ne zaman kilitlenmesi gerektiği.",
  },
  {
    id: "guides/why-cant-i-type-in-a-pdf-form",
    slug: "kilavuzlar/pdf-formuna-neden-yazamiyorum",
    title: "Bir PDF Formuna Neden Yazamıyorum? Nedenleri ve Çözümleri",
    description:
      "Bir alana tıklıyorsun ve hiçbir şey olmuyor. Üç olağan neden — etkileşimsiz bir form, yanlış görüntüleyici ya da kilitli bir dosya — ve her biri için tam olarak ne yapman gerektiği.",
  },
  {
    id: "guides/how-to-create-a-fillable-pdf",
    slug: "kilavuzlar/doldurulabilir-pdf-nasil-olusturulur",
    title: "Doldurulabilir Bir PDF Nasıl Oluşturulur? Dürüst Seçenekler ve Sınırlar",
    description:
      "İnsanların doldurabileceği bir PDF yapmak gerçekte ne gerektirir — etkileşimli alanlar mı, yoksa basit, etkileşimsiz bir şablon mu — ve elindeki araçlara hangi yaklaşımın uyduğu.",
  },
  {
    id: "guides/how-to-share-a-pdf-form",
    slug: "kilavuzlar/pdf-formu-doldurulmak-uzere-paylasma",
    title: "Bir PDF Formu Başkalarının Doldurması İçin Nasıl Paylaşılır?",
    description:
      "Doldurulması için boş bir form göndermek, bitmiş bir belge göndermekten farklıdır. Alıcıların gerçekten doldurabilmesi için bir formu paylaşma ve sonuçları toplama yöntemi.",
  },
  {
    id: "guides/how-to-print-a-filled-pdf-form",
    slug: "kilavuzlar/doldurulmus-pdf-formu-yazdirma",
    title: "Doldurulmuş Bir PDF Formu Cevaplarla Nasıl Yazdırılır?",
    description:
      "Formunu yazdırdın ve alanlar boş mu çıktı? Doldurulmuş değerlerin bazen neden yazdırılmadığı ve her cevabın göründüğü temiz bir kağıt kopya alma yöntemi.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-iphone",
    slug: "kilavuzlar/iphonede-pdf-formu-doldurma",
    title: "iPhone'da PDF Formları Nasıl Doldurulur? (Dosyalar, Markup ve Uygulamalar)",
    description:
      "iPhone'da Dosyalar ve Markup'ı ya da özel bir PDF uygulamasını kullanarak etkileşimli ve etkileşimsiz PDF formlarını doldur. iOS'e özel adımlar, paylaşım menüsü yöntemi ve Markup'ın yetersiz kaldığı noktalar.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-android",
    slug: "kilavuzlar/androidde-pdf-formu-doldurma",
    title: "Android'de PDF Formları Nasıl Doldurulur? (Her Telefonda)",
    description:
      "Android'de etkileşimli ve etkileşimsiz PDF formlarını doldur. Yerleşik görüntüleyicinin neden çoğu zaman yazamadığı, güvenilir uygulama yöntemi ve markalar arası cihaz farklarının formları nasıl etkilediği.",
  },
  {
    id: "guides/how-to-send-a-completed-pdf-form",
    slug: "kilavuzlar/tamamlanmis-pdf-formu-gonderme",
    title: "Tamamlanmış Bir PDF Formu Nasıl Gönderilir? (Kilitle ve Teslim Et)",
    description:
      "Formu doldurdun — şimdi temizce geri gönder. Cevapların değiştirilememesi için kilitleme, doğru şekilde ekleme ve verinin kaybolmadan ulaştığını doğrulama yöntemi.",
  },
  {
    id: "guides/how-to-fill-government-pdf-forms-on-phone",
    slug: "kilavuzlar/devlet-pdf-formlarini-telefonda-doldurma",
    title: "Devlet Kurumu PDF Formları Telefonda Nasıl Doldurulur?",
    description:
      "Devlet formları genelde katı biçimlendirmesi olan etkileşimsiz taramalardır. Bunları telefonda tamamlama, sorunlu alanları yönetme ve kurumun kendi talimatlarını izleme yöntemi.",
  },
  {
    id: "guides/mobile-pdf-form-workflow",
    slug: "kilavuzlar/mobil-pdf-form-is-akisi",
    title: "Mobil PDF Form İş Akışı (Alımdan Gönderime)",
    description:
      "Formlar için tekrarlanabilir, telefon odaklı bir rutin: al, doğru uygulamada aç, doldur, imzala, kilitle, gönder. Bilgisayar gerektirmeyen uçtan uca iş akışı.",
  },
  {
    id: "guides/best-pdf-form-app-for-iphone",
    slug: "kilavuzlar/iphone-icin-en-iyi-pdf-form-uygulamasi",
    title: "iPhone İçin En İyi PDF Form Uygulaması (Nelere Bakmalısın)",
    description:
      "Bir iPhone PDF form uygulamasında gerçekten önemli olan şey — alan algılama, etkileşimsiz form metni, imzalama, cihazda gizlilik — ve kendi formların için bir uygulamayı nasıl değerlendireceğin.",
  },
  {
    id: "guides/best-pdf-form-app-for-android",
    slug: "kilavuzlar/android-icin-en-iyi-pdf-form-uygulamasi",
    title: "Android İçin En İyi PDF Form Uygulaması (Nasıl Seçilir)",
    description:
      "Bir Android PDF form uygulaması nasıl seçilir: alan algılama, etkileşimsiz form metni, imzalama ve cihazda gizlilik — ve özel bir uygulamanın formlar için neden varsayılan görüntüleyiciden daha iyi olduğu.",
  },
  {
    id: "guides/pdf-forms-for-small-business",
    slug: "kilavuzlar/kucuk-isletmeler-icin-pdf-formlari",
    title: "Küçük İşletmeler İçin PDF Formları (Kayıt, Sipariş, İK)",
    description:
      "Küçük bir işletmenin dayandığı günlük formlar — kayıt, sipariş, rezervasyon, basit İK — ve bunları bir form platformu satın almadan PDF olarak doldurma, toplama ve yönetme yöntemi.",
  },
  {
    id: "guides/how-to-send-client-intake-forms",
    slug: "kilavuzlar/musteri-kayit-formu-gonderme",
    title: "Müşteri Kayıt Formları Nasıl Gönderilir? (Temiz ve Gizli)",
    description:
      "Yeni bir müşterinin bilgilerini tek seferde temiz şekilde al. Bir PDF kayıt formunu doldurması kolay olacak, eksiksiz dönecek ve müşterinin bilgilerini gizli tutacak şekilde gönderme yöntemi.",
  },
  {
    id: "guides/how-to-use-pdf-forms-for-contracts",
    slug: "kilavuzlar/sozlesmeler-icin-pdf-formu-kullanma",
    title: "Sözleşmeler İçin PDF Formları Nasıl Kullanılır? (Alanlar ve İmzalama)",
    description:
      "Bir sözleşmeyi doldurulabilir bir PDF'e çevir: ad, tarih ve paraf alanları, bir imza bölgesi ve imzalanmış sürümün değiştirilememesi için bir kilitleme adımı. Dürüst sınırlarıyla birlikte.",
  },
  {
    id: "guides/how-to-manage-pdf-application-forms",
    slug: "kilavuzlar/pdf-basvuru-formlarini-yonetme",
    title: "PDF Başvuru Formları Nasıl Yönetilir? (Topla ve İncele)",
    description:
      "Başvuruları PDF olarak mı alıyorsun? Onları kaybetmeden toplama, inceleme, karşılaştırma ve arşivleme yöntemi — bir yığın tamamlanmış formu yönetmek için basit bir sistem.",
  },
  {
    id: "guides/pdf-forms-for-consultants",
    slug: "kilavuzlar/danismanlar-icin-pdf-formlari",
    title: "Danışmanlar İçin PDF Formları (Anketler ve Kapsam Belirleme)",
    description:
      "Keşif anketleri, iş kapsamı belirleme sayfaları ve geri bildirim formları — danışmanlığın form tarafı, müşterilerin herhangi bir cihazda tamamlayabileceği doldurulabilir PDF'ler olarak.",
  },
  {
    id: "guides/pdf-forms-for-agencies",
    slug: "kilavuzlar/ajanslar-icin-pdf-formlari",
    title: "Ajanslar İçin PDF Formları (Katılım, Brifing, Onay)",
    description:
      "Müşteri katılım paketleri, yaratıcı brifing formları ve onay sayfaları — ajansların yürüttüğü çok paydaşlı formlar, herkesin tamamlayabileceği doldurulabilir PDF'ler olarak.",
  },
  {
    id: "guides/pdf-forms-for-freelancers",
    slug: "kilavuzlar/serbest-calisanlar-icin-pdf-formlari",
    title: "Serbest Çalışanlar İçin PDF Formları (Kayıt, Anlaşma, Depozito)",
    description:
      "Proje kaydı, basit hizmet anlaşmaları ve depozito onayları — bir serbest çalışanın ihtiyaç duyduğu yalın doldurulabilir PDF form seti, abonelik yok, yükleme yok.",
  },
  {
    id: "guides/document-collection-workflows-with-pdf",
    slug: "kilavuzlar/pdf-ile-belge-toplama-is-akisi",
    title: "PDF ile Belge Toplama İş Akışları",
    description:
      "Müşterilerden dosya ve imzalı form mu topluyorsun? Tekrarlanabilir bir PDF toplama iş akışı kur — bir kontrol listesi, tutarlı formatlar ve neyin hâlâ eksik olduğunu takip eden düzenli bir yöntem.",
  },
  {
    id: "guides/pdf-form-best-practices",
    slug: "kilavuzlar/pdf-form-en-iyi-uygulamalari",
    title: "PDF Form En İyi Uygulamaları (İnsanların Bitirdiği Formlar Tasarla)",
    description:
      "İnsanların gerçekten tamamladığı formlar tasarla: net etiketler, gerçek boşluk, mantıklı alanlar, belirgin bir imza bölgesi ve bir kilitleme adımı. Form hazırlayanlar ve gönderenler için pratik kurallar.",
  },
  {
    id: "guides/pdf-form-not-working",
    slug: "kilavuzlar/pdf-formu-calismiyor-mu",
    title: "PDF Formu Çalışmıyor mu? Hızlı Teşhis ve Çözümler",
    description:
      "Sorunlu bir PDF formunun birkaç olağan nedeni vardır. Hangisiyle karşılaştığını belirlemek için hızlı teşhis — alanlar eksik, yazılmıyor, kaydedilmiyor, salt okunur — ve nerede düzeltileceği.",
  },
  {
    id: "guides/pdf-form-fields-missing",
    slug: "kilavuzlar/pdf-form-alanlari-kayip-mi",
    title: "PDF Form Alanları Kayıp mı? Nedenleri ve Geri Getirme Yöntemi",
    description:
      "Bir form açtın ve alanlar orada değil mi? Etkileşimli alanların bazı görüntüleyicilerde neden kaybolduğu, onları geri getirme yöntemi ve baştan hiç alan yoksa ne yapılacağı.",
  },
  {
    id: "guides/why-pdf-form-wont-save",
    slug: "kilavuzlar/pdf-formu-neden-kaydedilmiyor",
    title: "Bir PDF Formu Neden Kaydedilmiyor? (Ve Nasıl Düzeltilir)",
    description:
      "Bir formu doldurdun ve yeniden açınca cevaplar mı kayboluyor? Bazı görüntüleyicilerin form verisini kaydetmek yerine neden sadece yazdırdığı ve cevaplarını kalıcı hale getirmenin güvenilir yolları.",
  },
  {
    id: "guides/why-pdf-form-is-read-only",
    slug: "kilavuzlar/pdf-formu-neden-salt-okunur",
    title: "Bir PDF Formu Neden Salt Okunur? (Ve Ne Yapmalısın)",
    description:
      "Formun kilitli ve gri açılıyor mu? Formların neden salt okunur yapıldığı, kasıtlı bir güvenlik önlemini görüntüleyici tuhaflığından ayırt etme yöntemi ve bir formu tamamlamak için dürüst seçenekler.",
  },
  {
    id: "guides/pdf-form-not-printing-correctly",
    slug: "kilavuzlar/pdf-formu-dogru-yazdirilmiyor",
    title: "PDF Formu Doğru Yazdırılmıyor mu? Boş Alanları Düzelt",
    description:
      "Form boş alanlarla, kaymış metinle ya da kesilmiş kenarlarla mı yazdırılıyor? Forma özel yazdırma sorunları — özellikle eksik alan değerleri — ve her birini düzelten ayarlar.",
  },
  {
    id: "guides/pdf-form-font-problems",
    slug: "kilavuzlar/pdf-form-yazi-tipi-sorunlari",
    title: "PDF Form Yazı Tipi Sorunları (Otomatik Boyut, Kırpma, Değişim)",
    description:
      "Alan metni çok mu büyük, çok mu küçük, yoksa yazarken otomatik mi küçülüyor? Form alanlarına özgü yazı tipi tuhaflıkları — otomatik boyutlandırma, değişim, kırpma — ve temiz, okunaklı cevaplar elde etme yöntemi.",
  },
  {
    id: "guides/pdf-form-formatting-issues",
    slug: "kilavuzlar/pdf-form-bicimlendirme-sorunlari",
    title: "PDF Form Biçimlendirme Sorunları (Hizalama ve Taşma)",
    description:
      "Alanlar hizasız mı, cevaplar taşıyor mu, form başkasının ekranında farklı mı görünüyor? Görüntüleyiciye göre değişen form yerleşimi sorunları ve tutarlı bir sonuç elde etme yöntemi.",
  },
  {
    id: "guides/pdf-form-submission-errors",
    slug: "kilavuzlar/pdf-form-gonderim-hatalari",
    title: "PDF Form Gönderim Hataları (Gönder Butonu Çalışmadığında)",
    description:
      "Bir formun Gönder butonu başarısız mı oluyor ya da hiçbir şey mi yapmıyor? Yerleşik gönder butonlarının neden formu hazırlayan kurumun sunucusuna bağlı olduğu, hataların ne anlama geldiği ve formu elle gönderme yöntemi.",
  },
  {
    id: "guides/pdf-form-compatibility-problems",
    slug: "kilavuzlar/pdf-form-uyumluluk-sorunlari",
    title: "PDF Form Uyumluluk Sorunları (XFA ve Dinamik Formlar)",
    description:
      "Bir programda açılıp diğerinde bozulan bir form genelde her görüntüleyicinin desteklemediği özellikler kullanır. Dinamik formları tanıma, uyumsuzluğun nedeni ve seçeneklerin.",
  },
  {
    id: "guides/fix-pdf-form-errors",
    slug: "kilavuzlar/pdf-form-hatalarini-duzeltme",
    title: "PDF Form Hataları Nasıl Düzeltilir? Hızlı İlk Yardım Listesi",
    description:
      "Sorunlu bir PDF formu için evrensel ilk yardım adımları: görüntüleyici değiştir, yeniden indir, güncelle, üzerine metin ekle, kilitle. Belirli bir nedene inmeden önce bunları dene.",
  },
];
