import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-sensitive-pdf-files",
  h1: "Hassas PDF Dosyaları Nasıl Korunur? (Depolama, Paylaşım, Yaşam Döngüsü)",
  description:
    "Hassas PDF'lerin üç noktada korunması gerekir: depolanırken, paylaşılırken ve alıcı işini bitirdikten sonra. Üçünü de kapsayan pratik bir iş akışı.",
  updated: "2026-05-29",
  intro: [
    "Hassas PDF'lerin — sözleşmeler, mali kayıtlar, kimlik belgeleri, tıbbi dosyalar — yaşamlarında üç ayrı noktada korunması gerekir: cihazında ya da sürücünde dururken (depolama), sen ve alıcı arasında hareket ederken (paylaşım) ve alıcı onları kullandıktan sonra (yaşam döngüsü). Çoğu insan paylaşıma odaklanıp diğer ikisini görmezden gelir.",
    "Mantıklı bir iş akışı üçünü de ele alır. Depolama, güvenilmeyen konumlarda şifreli sürücüler ya da şifreyle korunan dosyalar demektir. Paylaşım, aramada ilk çıkan her şeye yüklemek yerine sızdırmayan bir kanal seçmek demektir. Yaşam döngüsü, dosyaya sonrasında ne olacağını düşünmek demektir — hem senin hem alıcının saklaması açısından.",
    "Bu kılavuz üçünü de anlatıyor. Hiçbiri kurumsal düzeyde değil; hassas materyali ara sıra işleyen ve bunun için bir SOC2 yığını kurmak istemeyen bir birey ya da küçük ekip için gerçekçi bir temel.",
  ],
  steps: [
    {
      title: "Depolama: hassas PDF'leri şifreli depolamada tut",
      body: "macOS'ta FileVault, Windows'ta BitLocker, Linux telefonlarda tam disk şifrelemesi. Bunlar yerel sürücünü kapsar. Harici sürücüler için şifreli formatlar kullan. Yedeklerin de şifreli olmalı — sıfır bilgi şifrelemesi destekleyen bulut hizmetlerine senkronize et ya da önce dosyayı şifrele.",
    },
    {
      title: "Tek tek hassas PDF'leri şifreyle koru",
      body: "PDF şifre koruması ikinci bir katman ekler. Disk şifrelemesi başarısız olsa ya da biri aktarım sırasında dosyanın bir kopyasını ele geçirse bile dosya güvende kalır. Güçlü, benzersiz şifreler kullan; bunları dosyadan farklı bir kanaldan paylaş.",
    },
    {
      title: "Paylaşım: kanalı hassasiyete göre seç",
      body: "Düşük hassasiyetli dosyalar için sıradan e-posta yeterlidir. Orta düzey için uçtan uca şifreli mesajlaşma (Signal, güvenli e-posta). Yüksek hassasiyet için açık veri işleme taahhütleri olan ücretli hizmetler. Hassas PDF'leri ücretsiz üçüncü taraf “araçlara” yüklemekten kaçın.",
    },
    {
      title: "Göndermeden önce yerel olarak ön işle",
      body: "Hassas bir PDF'i göndermeden önce sıkıştırman, düzenlemen ya da yeniden düzenlemen gerekiyorsa yerel çalışan tarayıcı tabanlı araçlar kullan — dosyan başka birinin sunucusundan geçmez. PDF Sıkıştır, PDF Sayfalarını Çıkar, PDF Sayfalarını Yeniden Sırala hepsi cihazında çalışır.",
    },
    {
      title: "Yaşam döngüsü: saklama ve silmeyi düşün",
      body: "Hassas PDF'leri sadece ihtiyacın olduğu sürece sakla. Alıcı da öyle yapmalı. Özellikle tek kullanımlık kimlik belgeleri için alıcıdan dosyayı kullandıktan sonra silmeyi onaylamasını istemeyi düşün.",
    },
    {
      title: "Göndermeden önce meta verileri temizle",
      body: "PDF'ler genelde yazar adları, orijinal dosya adları, düzenleme geçmişi taşır. Temiz bir kaynaktan yeniden dışa aktarmak bunun çoğunu temizler. PDF Editor uygulaması ve diğer araçlar da meta verileri açıkça temizlemene izin verir.",
    },
  ],
  tips: [
    "Şifreyi, şifreyle korunan dosyayla aynı e-postada gönderme. Dosyayı bir kanaldan, şifreyi başka bir kanaldan gönder.",
    "Kimlik belgesi taramalarını tek kullanımlık gibi ele al. Alıcı elde ettikten sonra, saklaması için düzenleyici bir nedeni yoksa silmesini iste.",
    "Hassas PDF'ler arasında şifreleri tekrar kullanma. Biri sızarsa diğerleri korunmuş kalır.",
    "Hassas dosyaları göndermek için genel Wi-Fi'den kaçın. Bir hotspot kullan ya da güvenilir ağı bekle.",
    "Hassas PDF'lerini yılda bir kez denetle. Çoğuna artık ihtiyacın yoktur — güvenli şekilde sil ve yüzeyi küçült.",
  ],
  mobileNote:
    "Telefonlar artık birçok hassas PDF'i (imzalı sözleşmeler, kimlik taramaları) tutuyor ve gönderiyor. PDF Editor uygulaması bunları cihaz üzerinde yerel olarak işler — sıkıştırma, imzalama, şifre koruması — böylece hassas materyalin gönderilmeye hazırlanmak için telefondan çıkması gerekmez.",
  faq: [
    {
      q: "PDF şifre koruması gerçekten güçlü mü?",
      a: "PDF'lerdeki modern AES şifrelemesi güçlüdür. Zayıf nokta genelde şifrenin kendisidir — zayıf bir şifre içeri girmenin tek kolay yoludur. Uzun, benzersiz şifreler kullan.",
    },
    {
      q: "Hassas PDF'leri her zaman şifrelemeli miyim?",
      a: "Evet, hem dururken hem aktarımda. Disk şifrelemesi dururken korur; PDF şifreleri ya da şifreli kanallar aktarımda korur.",
    },
    {
      q: "Peki hassas PDF'ler için bulut depolama?",
      a: "Sıfır bilgi şifrelemesiyle (sağlayıcı dosyalarını okuyamaz) ya da istemci taraflı şifrelemeyle (yüklemeden önce sen şifrelersin) kabul edilebilir. Sade bulut depolama sıradan dosyalar için kabul edilebilir, son derece hassas olanlar için değil.",
    },
    {
      q: "Bir PDF'in hassas kısımlarını nasıl karartırım?",
      a: "Gerçek karartma, metni görsele dönüştürüp değiştirmektir. PDF Editor uygulaması bunu destekler. Sadece siyah kutu bindirmek karartma sağlamaz — altındaki metin hâlâ çıkarılabilir.",
    },
    {
      q: "Bir PDF'i güvenli şekilde silebilir miyim?",
      a: "SSD'lerde güvenli silme, dönen disklerdeki kadar basit değildir. Dosyayı şifreli depolamaya taşı, sonra sil ve diskin TRIM'inin sektörleri temizlemesine izin ver. Çok yüksek hassasiyet için baştan tam disk şifrelemesi doğru yaklaşımdır.",
    },
  ],
  related: [
    { label: "PDF Güvenliği — PDF'leri şifreyle koru", path: "/pdf-security" },
    { label: "PDF dosyası şifreyle nasıl korunur", path: "/guides/how-to-protect-pdf-file" },
    { label: "PDF dosyaları gizlice nasıl paylaşılır", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Hassas belgeleri yüklemekten nasıl kaçınılır", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "PDF Güvenliği — şifreyle koru ve şifrele", path: "/pdf-security" },
};

export default content;
