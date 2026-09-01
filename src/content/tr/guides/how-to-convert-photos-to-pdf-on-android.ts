import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-android",
  h1: "Android'de Fotoğraflar PDF'e Nasıl Dönüştürülür?",
  description:
    "Android fotoğraflarını bir tarayıcı aracıyla ya da yerleşik Yazdır-PDF'e yöntemiyle tek bir PDF'e çevir. Ayrıca tarama içeren daha hızlı uygulama içi iş akışı.",
  updated: "2026-05-23",
  intro: [
    "Android, fotoğrafları bir PDF'e çevirmenin birden fazla yolunu sunar; bu hem bir nimet hem de bir kafa karışıklığı kaynağıdır — adımlar Samsung, Pixel, Xiaomi ve diğerleri arasında değişir. İyi haber şu ki, her Android telefonda aynı şekilde çalışan bir yol var: cihazında çalışan ve üreticinin kim olduğunu umursamayan bir tarayıcı aracı.",
    "Bu rehber, ücretsiz Görselden PDF'e aracını kullanan bu evrensel tarayıcı yolunu, paylaşım menüsünde gizlenen yerleşik \"PDF'e Yazdır\" numarasını ve fotoğrafları, taramayı ve imzalamayı tek bir yerde istediğinde PDF Editor uygulamasını ele alıyor.",
    "Android fotoğrafları genelde JPG olarak kaydedilir, bu yüzden genelde iPhone kullanıcılarının yaşadığı format baş ağrılarından kaçınırsın — ama bilmeye değer tek istisnayı belirteceğiz.",
  ],
  steps: [
    {
      title: "Tarayıcında Görselden PDF'e aracını aç",
      body: "Chrome'da ya da tercih ettiğin tarayıcıda Görselden PDF'e aracına git. Markadan bağımsız olarak her Android telefonda çalışır ve görselleri cihazında işler — hiçbir şey yüklenmez.",
    },
    {
      title: "Fotoğraflarını ekle",
      body: "Galerinden ya da dosyalarından fotoğraf seçmek için dokun. Hem JPG hem PNG çalışır; her görsel bir sayfa olur.",
    },
    {
      title: "Sayfaları sırala",
      body: "Fotoğrafları düzenlemek için okları kullan. Çok sayfalı bir belge için dosyayı oluşturmadan önce sırayı iki kez kontrol et.",
    },
    {
      title: "PDF'i oluştur ve kaydet",
      body: "PDF Oluştur'a dokun. Dosya telefonuna iner; Dosyalar'a ya da tercih ettiğin bulut sürücüsüne kaydet ya da hemen paylaş.",
    },
    {
      title: "Alternatif: PDF'e Yazdır'ı kullan",
      body: "Fotoğrafları Google Fotoğraflar'da ya da galerinde aç, Paylaş → Yazdır'a dokun, sonra yazıcı olarak \"PDF olarak kaydet\"i seç. Bu, herhangi bir araç kullanmadan seçili görselleri bir PDF'te toplar, ama sıra üzerinde daha az kontrolün olur.",
    },
    {
      title: "Ya da PDF Editor uygulamasını kullan",
      body: "Uygulama, galeri fotoğraflarını bir PDF'te birleştirir, otomatik kenar algılamayla taze sayfalar tarar ve imzalamana olanak tanır — hepsi çevrimdışı, hepsi cihaz üzerinde.",
    },
  ],
  tips: [
    "Tarayıcı yolu Samsung, Pixel, Xiaomi ve diğerlerinde birebir aynı şekilde davranır, bu yüzden telefon değiştirirsen ya da farklı bir markada birine yardım edersen hatırlaman gereken budur.",
    "PDF'e Yazdır numarası aciliyette harikadır ama sayfa sırası üzerinde az kontrol verir — sıra önemliyse Görselden PDF'e aracını kullan.",
    "Önce fotoğrafları galerinde kırp. Sayfalar görsele göre boyutlandırılır, bu yüzden kırpmak daha temiz bir belge verir.",
    "Çoğu Android kamerası JPG kaydeder, ama bazıları yüksek verimlilik modunda HEIF/HEIC kaydeder. Bir fotoğraf eklenmiyorsa, kamera ayarlarını kontrol et ya da PDF Editor uygulamasını kullan.",
    "Yüksek çözünürlüklü fotoğraflardan oluşan büyük galeriler büyük PDF'ler oluşturur. E-postayla göndermeden önce sonucu sıkıştır.",
  ],
  mobileNote:
    "Android'de belge işleri telefonda gerçekleşir ve PDF Editor uygulaması bunu orada tutar: galeri fotoğraflarını birleştir, kenar algılamayla kağıt tara, imzala ve paylaş — çevrimdışı ve hiçbir şey yüklemeden. Tekrarlanan işler için her seferinde tarayıcıdan daha hızlıdır.",
  faq: [
    {
      q: "Tarayıcı yöntemi her Android telefonda çalışır mı?",
      a: "Evet. Araç tarayıcıda çalıştığı için Samsung, Pixel, Xiaomi ve diğer herhangi bir Android cihazda aynı şekilde davranır — üreticiye göre değişen yerleşik özelliklerin aksine.",
    },
    {
      q: "PDF'e Yazdır ile araç arasındaki fark nedir?",
      a: "PDF'e Yazdır, Android'in paylaşım menüsüne yerleşiktir ve araç gerektirmez, ama sayfa sırası üzerinde az kontrol sunar. Görselden PDF'e aracı sayfaları hassas şekilde sıralamana izin verir; bu, çok sayfalı belgeler için önemlidir.",
    },
    {
      q: "Fotoğraflarım herhangi bir yere yükleniyor mu?",
      a: "Hayır. Görselden PDF'e aracı ve PDF Editor uygulaması, fotoğrafları cihazında işler. Görsellerin gizli kalır.",
    },
    {
      q: "Fotoğraflarım araca eklenmiyor — neden?",
      a: "Bazı Android telefonlar, tarayıcı araçlarının okuyamayabileceği HEIF/HEIC'i yüksek verimlilik modunda kaydeder. Kamerani standart JPG'ye çevir ya da PDF Editor uygulamasını kullan.",
    },
    {
      q: "PDF'i aranabilir yapabilir miyim?",
      a: "Düz bir fotoğrafın metin katmanı yoktur. Aranabilir metin elde etmek için belgeyi sadece fotoğraflamak yerine PDF Editor uygulamasının metin tanımasıyla tara.",
    },
  ],
  related: [
    { label: "Görselden PDF'e — tarayıcında fotoğrafları dönüştür", path: "/image-to-pdf" },
    { label: "PDF Tarama — kamerayla kağıt yakala", path: "/scan-to-pdf" },
    { label: "iPhone'da fotoğraflar PDF'e nasıl dönüştürülür", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
    { label: "JPG PDF'e nasıl dönüştürülür", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "PDF Dönüştürücü", path: "/pdf-converter" },
};

export default content;
