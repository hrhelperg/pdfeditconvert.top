import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "secure-pdf-workflows-for-business",
  h1: "İşletmeler İçin Güvenli PDF İş Akışları (Kurumsal Yığın Olmadan)",
  description:
    "Küçük bir işletmenin güvenli çalışmak için bir SOC2 PDF kasasına ihtiyacı yok. Gerçek riski karşılayan gerçekçi temel — şifreli depolama, imzalı aktarımlar, yerel işleme.",
  updated: "2026-05-29",
  intro: [
    "Kurumsal PDF güvenlik yığınları — SOC2 denetimli kasalar, otomatik saklama, e-keşif hazırlığı — omuz üstünden bakan düzenleyicileri olan işletmeler için var. Beş kişilik bir danışmanlık ya da otuz kişilik bir ajans için bu fazlasıyla abartılıdır. Gerçek risk daha sıradandır: bir çalışan müşteri sözleşmesini dosyayı saklayan ücretsiz bir “sıkıştır” aracına yükler, paylaşılan bir sürücüde şifreleme yoktur, imzalı bir PDF genel Wi-Fi'de korumasız e-postalanır.",
    "Sıradan küçük bir işletme için güvenli bir temel, kurumsal ekipman satın almadan bu gerçek riskleri ele alır. Şifreli depolama, imzalı aktarımlar, hassas materyal için yerel işleme ve ekibin üzerinde anlaştığı birkaç alışkanlık. Hiçbiri pahalı değil; bazıları sadece varsayılan araçları değiştirmek.",
    "Bu kılavuz temeli anlatıyor. İşletmene uyanı al; uymayanı atla. Amaç mantıklı savunma, gösteri değil.",
  ],
  steps: [
    {
      title: "Her iş cihazında tam disk şifrelemesi",
      body: "macOS'ta FileVault, Windows'ta BitLocker, Linux'ta LUKS. Dizüstü bilgisayarlarda zorunlu, masaüstülerde kullanışlı. Şifrelemesiz kaybolan ya da çalınan bir cihaz anında bir veri ihlalidir; şifrelemeyle bu sadece donanım kaybıdır.",
    },
    {
      title: "Hassas müşteri materyali için PDF'leri yerel işle",
      body: "PDF Sıkıştır, PDF Birleştir, PDF Sayfalarını Çıkar ve bu sitedeki diğer tarayıcı tabanlı araçlar yerel işler — müşteri verisi üçüncü bir taraftan geçmez. Bunu ekip varsayılanı olarak belirle.",
    },
    {
      title: "Sözleşmeleri gerçek bir e-imza aracıyla imzala",
      body: "Sıradan sözleşmeler için PDF İmzala ya da PDF Editor uygulaması. Düzenlemeye tabi işlemler için incelenmiş ticari bir imzalama platformu kullan. Her iki durumda da çizilmiş imzalar yazılı adlardan daha iyi tutunur.",
    },
    {
      title: "Hassas aktarımlar için şifreli kanallar kullan",
      body: "Hassas materyal için Signal ya da uçtan uca şifreli e-posta. Sıradan belgeler için sıradan e-posta. Kanalı hassasiyetle eşleştir.",
    },
    {
      title: "Hassas PDF'ler için bir şifre politikası belirle",
      body: "Gizli müşteri materyali bir PDF şifresi alır. Şifreyi dosyadan ayrı bir kanaldan paylaş. Mümkünse müşteri başına benzersiz şifreler kullan.",
    },
    {
      title: "Bir program dahilinde denetle ve sil",
      body: "/Musteriler/Arsiv/ klasörünün üç ayda bir gözden geçirilmesi. Düzenleyicilerin gerektirmediği ve müşterilerin artık ihtiyaç duymadığını sil. Saklanan her hassas dosya sürekli bir risktir; envanteri azaltmak maruziyeti azaltır.",
    },
  ],
  tips: [
    "Güvenlik temelini yazılı hâle getir. Herkesin okuduğu tek sayfalık bir politika, söylenmemiş bir normdan daha iyi tutunur.",
    "USB sürücüleri ve harici yedekleme disklerini şifrele. Bunlar kaybetmesi en kolay cihazlardır.",
    "Ücretsiz araçlar temeli karşılarken güvenlik yazılımı için kişi başı ödeme yapma. Bütçeyi gerçek boşluklar için sakla.",
    "Ekibi kimlik avına karşı eğit — çoğu küçük işletme ihlali araç zayıflığından değil, başarılı bir kimlik avı e-postasından gelir.",
    "Bir olay planın olsun, tek paragraf bile olsa. “Müşteri dosyalarıyla bir dizüstü bilgisayar kaybedersek etkilenen müşterileri 48 saat içinde bilgilendiririz” başlamak için yeterlidir.",
  ],
  mobileNote:
    "Küçük işletmeler artık önemli belge işini telefonda yapıyor. PDF Editor uygulaması imzalama, sıkıştırma, dönüştürme ve paylaşımı iOS ve Android'de yerel olarak halleder, böylece iş işinin mobil ayağı zincire yeni bir üçüncü taraf sunucu eklemez.",
  faq: [
    {
      q: "Küçük işletmelerin gerçekten bir güvenlik temeline ihtiyacı var mı?",
      a: "Evet. Çoğu ihlal kurumları değil küçük işletmeleri etkiler. Temel kısa ve ucuzdur; ona sahip olmamak gerçek risktir.",
    },
    {
      q: "Tarayıcı tabanlı işleme müşteri işi için yeterince güvenli mi?",
      a: "Sıradan müşteri işi için evet. Dosya cihazından çıkmaz; bu, saklama politikası olan sunucu taraflı bir araçtan daha güçlüdür. Düzenlemeye tabi işlemler için (mali, tıbbi) özel uyum gereksinimleri geçerli olabilir.",
    },
    {
      q: "Her sözleşme için kurumsal düzeyde imzalama mı kullanmalıyız?",
      a: "Hayır. Sıradan sözleşmeler PDF İmzala ya da PDF Editor uygulamasını kullanabilir. Ticari imzalama platformlarını yüksek değerli ya da düzenlemeye tabi işlemler için sakla.",
    },
    {
      q: "Bir güvenlik olayını nasıl ele alırız?",
      a: "Önceden planla: bildirim süreci, etkilenen müşteri listesi, uygunsa düzenleyici raporlama. İmprovize etme.",
    },
    {
      q: "En yaygın küçük işletme güvenlik açığı nedir?",
      a: "Tutarsız cihaz şifrelemesi ve hassas müşteri materyali için yükleme tabanlı ücretsiz PDF araçlarının rastgele kullanımı. İkisi de düzeltmesi ucuz.",
    },
  ],
  related: [
    { label: "PDF Güvenliği — şifreyle koru ve şifrele", path: "/pdf-security" },
    { label: "Hassas PDF dosyaları nasıl korunur", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "PDF dosyaları gizlice nasıl paylaşılır", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Küçük işletmeler için PDF iş akışları", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "PDF Güvenliği — şifreyle koru ve şifrele", path: "/pdf-security" },
};

export default content;
