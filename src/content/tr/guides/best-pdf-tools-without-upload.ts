import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-tools-without-upload",
  h1: "Yüklemeden Çalışan En İyi PDF Araçları (Dosyalar Cihazında Kalır)",
  description:
    "PDF'inin cihazından çıkmasını istemediğinde, işi yerel olarak yapan araçlar bunlar. Sıkıştırma, birleştirme, dönüştürme — hepsi dosyalar makinende kalırken.",
  updated: "2026-05-29",
  intro: [
    "Bir PDF'i sıkıştırmaya, birleştirmeye ya da dönüştürmeye gittiğin ve durakladığın bir an vardır. Dosya hassastır — bir sözleşme, bir banka ekstresi, taranmış bir kimlik — ve ilk üç arama sonucu hepsi onu sunucularına yüklemeni ister. Risk her tek durumda küçük hissettirir ama bir yıllık gündelik belge işlemede birikir.",
    "Yüklemesiz PDF araçları bu riski mimari gereği masadan kaldırır. İşleme cihazında gerçekleşir — tarayıcı sekmende ya da bir mobil uygulamada — ve dosya hiçbir zaman üçüncü taraf bir sunucuya ulaşmaz. Gizlilik özelliği beyan edilen bir saklama politikasına bağlı olmak yerine otomatiktir.",
    "Bu kılavuz yaygın PDF görevleri için yüklemesiz seçimleri listeliyor. Eğilim, hiçbir şey kurmadan çalıştıkları için tarayıcı tabanlı araçlara doğrudur; mobil uygulama seçimleri, telefonun iş için daha iyi cihaz olduğu yerlerde tamamlar.",
  ],
  steps: [
    {
      title: "Yüklemeden sıkıştır: tarayıcıda PDF Sıkıştır",
      body: "Sayfayı aç, PDF'ini bırak, bir sıkıştırma düzeyi seç, indir. Sıkıştırma algoritması tarayıcında çalışır; dosya yerel olarak okunur, bellekte işlenir ve yeni bir indirme olarak geri yazılır.",
    },
    {
      title: "Yüklemeden birleştir: tarayıcıda PDF Birleştir",
      body: "Birden fazla PDF bırak, sıralamak için sürükle, birleşik dosyayı indir. Birleştirme yerel gerçekleşir — dosyaların tarayıcı belleğinde bir araya gelir, hiçbir zaman bir sunucuya gönderilmez.",
    },
    {
      title: "Yüklemeden böl ve çıkar",
      body: "PDF Böl ve PDF Sayfalarını Çıkar sayfa düzeyindeki işlemleri tarayıcında halleder. Sayfaları belirt, sonucu indir. Hassas bir belgenin sadece belirli sayfalarını göndermen gerektiğinde kullanışlıdır.",
    },
    {
      title: "Yüklemeden dönüştür",
      body: "PDF'ten Word'e, Word'den PDF'e, Görselden PDF'e, PDF'ten Görsele hepsi tarayıcıda çalışır. Dönüşüm yerel gerçekleşir; dönüştürülen dosya indirilenlerine geri yazılır.",
    },
    {
      title: "Yüklemeden imzala",
      body: "PDF İmzala ya da PDF Editor uygulaması cihazında bir imza yakalar. İmzalı dosya, paylaşmayı seçene kadar yerel kalır. İmzalama platformu yok.",
    },
    {
      title: "Yüklemesizliği tarayıcı geliştirici araçlarıyla doğrula",
      body: "Geliştirici araçlarını aç, ağ sekmesi, bir dosya bırak. Gerçek bir yüklemesiz araç büyük bir giden POST göstermez. Görürsen, araç etikete rağmen yüklüyordur.",
    },
  ],
  tips: [
    "Yüklemesiz araçlar sayfa yüklendikten sonra çevrimdışı çalışır. Bunu test et — sayfa yüklendikten sonra WiFi'yi kapatıp aracı dene. Gerçek yerel araçlar hâlâ çalışır.",
    "Hassas dosyalar (mali, hukuki, tıbbi) varsayılan olarak yüklemesiz araçlara gitmeli. Tek bir durum düşük risk taşısa bile azalan risk gerçektir.",
    "Yükleme yapan araçlardan gelen “dosyanı saklamıyoruz” iddialarına doğrulama olmadan güvenme. Mimari, politikayı geçer.",
    "Yerel işleyen mobil uygulamalar telefondaki yüklemesiz seçimler olma eğilimindedir. PDF Editor uygulaması iOS ve Android'de bu kalıba uyar.",
    "Tarayıcı tabanlı yüklemesiz araçlar otomatik doğrulanır çünkü işlemeleri geliştirici araçlarında görünür. Yeni araçları değerlendirirken bunu kullan.",
  ],
  mobileNote:
    "PDF Editor uygulaması, tarayıcı tabanlı yüklemesiz kalıbın iOS/Android eşdeğeridir — tüm işleme cihaz üzerinde gerçekleşir, yükleme yok, hesap yok. Telefonun iş akışı için doğal cihaz olduğu yerlerde (imzalama, tarama, hızlı düzenlemeler) kullanışlıdır.",
  faq: [
    {
      q: "Yüklemesiz olmak neden önemli?",
      a: "Çünkü yüklemeler dosyanın kopyalarını kontrol etmediğin sunucularda oluşturur. Güçlü politikalarla bile sunucu ihlalleri gerçekleşir. Yüklemesiz araçlar riski mimari gereği ortadan kaldırır.",
    },
    {
      q: "Yüklemesiz araçlar gerçekten büyük PDF'leri sıkıştırabilir mi?",
      a: "Evet. Modern tarayıcılar yüzlerce megabaytı rahatça işler. İşleme, WebAssembly tarafından neredeyse yerel hızda yapılır.",
    },
    {
      q: "Bir aracın yüklemediğini nasıl onaylarım?",
      a: "Tarayıcı geliştirici araçları, ağ sekmesi, bir dosya sürükle. Büyük bir giden istek yok = yükleme yok. Doğrulama doğrudan ve görünür.",
    },
    {
      q: "Yüklemesiz araçlar ücretsiz mi?",
      a: "Genelde evet. Yüklemesiz araçların ekonomisi sunucu tabanlı olanlardan farklıdır — minimum barındırma maliyeti — bu yüzden verini paraya çevirmeden ücretsiz kalabilirler.",
    },
    {
      q: "Bir iş akışı yükleme gerektiriyorsa ne olur?",
      a: "Bazı özel görevler (uzun dosyalarda yüksek doğruluklu OCR) hâlâ sunucu işlemeye ihtiyaç duyar. Bunlar için açık saklama taahhütleri olan ücretli araçlar seç ve önce dosyayı şifreyle koru.",
    },
  ],
  related: [
    { label: "PDF araçları — tarayıcı tabanlı, yükleme yok", path: "/pdf-tools" },
    { label: "En iyi ücretsiz PDF araçları", path: "/guides/best-free-pdf-tools" },
    { label: "Ücretsiz tarayıcı tabanlı PDF araçları", path: "/guides/free-browser-based-pdf-tools" },
    { label: "Hassas belgeleri yüklemekten nasıl kaçınılır", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "PDF araçları — ücretsiz, tarayıcı tabanlı", path: "/pdf-tools" },
};

export default content;
