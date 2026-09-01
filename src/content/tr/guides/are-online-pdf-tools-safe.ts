import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "are-online-pdf-tools-safe",
  h1: "Online PDF Araçları Güvenli mi? Riske Dürüst Bir Bakış",
  description:
    "“Online” PDF araçlarının çoğu dosyanı bir sunucuya yükler. Bazıları yüklemez. Gerçek riskler, veriyi farklı şekilde işleyen araç kategorileri ve hangisinin hangisi olduğunu anlama yöntemi.",
  updated: "2026-05-29",
  intro: [
    "“Online PDF aracı” ifadesi büyük bir ayrımı gizler. Bu araçların bazıları dosyanı sunucularına indirir, orada işler ve sonucu geri gönderir. Bazıları tamamen tarayıcında çalışır — dosyan cihazından hiç çıkmaz. İkisi de bazen “online” olarak adlandırılır ve hassas herhangi bir şey için aradaki fark oldukça önemlidir.",
    "“Güvenliler mi” sorusunun dürüst cevabı: kullandığın türe ve dosyanın içeriğine bağlı. Bir banka ekstresinin yükleme yapan bir araçtan geçmesi, belirtilen saklama politikalarına rağmen gerçek bir risktir. Aynı ekstre yerel işlem yapan bir araçta onların ağına hiç değmez, bu yüzden risk profili temelden farklıdır.",
    "Bu kılavuz kategorileri korku salmadan ayırıyor. Gerçek risklerin nerede olduğunu, bir gizlilik politikasını nasıl hızlıca okuyacağını ve düşündüğün bir aracın yükleme mi yaptığını yoksa yerel mi çalıştığını pazarlama metnini kelimesi kelimesine kabul etmeden nasıl anlayacağını açıklıyor.",
  ],
  steps: [
    {
      title: "Aracın hangi kategoride olduğunu belirle",
      body: "Üç kategori: (1) tam yükleme — dosya sunucuya gider, orada işlenir. (2) İsteğe bağlı senkronizasyonlu tarayıcı tabanlı — yerel çalışır ama bulut özellikleri sunar. (3) Sadece tarayıcı — hiç yüklemez. Kategori gerçek riski belirler.",
    },
    {
      title: "Saklama için gizlilik politikasını kontrol et",
      body: "“Saklamak”, “depolamak”, “sonra sil” gibi kelimeleri ara. “Dosyalar bir saat içinde silinir” diyen bir politika (1) kategorisinde olduğunu söyler. “Dosyalar cihazından hiç çıkmaz” diyen bir politika (3)'ü gösterir. Belirsiz politikalar bir uyarı işaretidir.",
    },
    {
      title: "Doğrulamak için ağ trafiğini izle",
      body: "Geliştirici araçlarını, ağ sekmesini aç, PDF'ini sürükleyip bırak. Bir yükleme görürsen (dosyayı eklediğinde büyük bir giden istek), yükleme yapıyordur. Görmüyorsan yerel işliyordur. Bu en doğrudan doğrulama yöntemidir.",
    },
    {
      title: "Aracı dosyanın hassasiyetiyle eşleştir",
      body: "Sıradan dosyalar (PDF olarak tatil fotoğrafları) herhangi bir kategoriden geçebilir. Hassas dosyalar (mali, hukuki, tıbbi, kişisel) (3) kategorisine ya da açık veri işleme garantileri olan ücretli bir araca ait.",
    },
    {
      title: "Senin durumun için “güvenli”nin ne anlama geldiğini düşün",
      body: "Bazen risk kurumsaldır (müşteri verisi sızdırma). Bazen düzenleyicidir (HIPAA, GDPR). Bazen kişiseldir (kimlik hırsızlığından kaçınmak). Doğru araç, gerçekte karşı karşıya olduğun tehdide bağlıdır.",
    },
    {
      title: "Şüphedeysen varsayılan olarak tarayıcı tabanlı araçları seç",
      body: "Yükleme yapmayan tarayıcı tabanlı araçlar varsayılan olarak güvenlidir — dosya, kendisini hiç almamış bir sunucudan sızamaz. Bu sitedeki araçlar bu kategoridedir.",
    },
  ],
  tips: [
    "Ücretsiz + yükleme yapan + net olmayan bir gizlilik politikası = hassas herhangi bir şey için kaçın. Bu kombinasyon en yüksek riskli profildir.",
    "Güçlü gizlilik politikaları olan yükleme yapan araçların bile gerçek bir saldırı yüzeyi vardır — sunucu ihlalleri, saklama hataları, çalışan erişimi. Yerel işleme bu yüzeyi ortadan kaldırır.",
    "Doğrulama yapmadan “saklamıyoruz” iddialarına güvenme. Ağ trafiğini izlemek, kesin olarak bilmenin tek yoludur.",
    "Tarayıcı tabanlı araçların kendi sınırları vardır — ağır işlemler ve OCR bazen sunucu yardımına ihtiyaç duyar. Sınırı bil; fazla söz verme.",
    "Bir iş akışı yükleme gerektiriyorsa (nadir), belirtilmiş bir saklama politikası olan bir araç seç ve şifreyle korunan taze bir dosya kullan.",
  ],
  mobileNote:
    "Mobil PDF araçları da yükleme yapan ve sadece yerel olan diye ikiye ayrılır. PDF Editor uygulaması iOS ve Android'de her şeyi cihaz üzerinde işler — yükleme yok, hesap yok, sen açmadıkça senkronizasyon yok. Telefonda hassas belgeler için doğru varsayılan budur.",
  faq: [
    {
      q: "PDF'imi bir online araca yüklemek gerçekten riskli mi?",
      a: "Dosyaya bağlı. Bir tatil planı için risk çok düşük. Mali kayıtlar ya da sözleşmeler için gerçek risk — sunucu ihlalleri ve saklama hataları gerçekten olur. Aracı dosyayla eşleştir.",
    },
    {
      q: "Bir aracın yükleme mi yaptığını yoksa yerel mi işlediğini nasıl anlarım?",
      a: "Tarayıcı geliştirici araçlarını, ağ sekmesini aç, bir dosya bırak. Dosyayı eklediğinde büyük bir giden ağ isteği tetiklenirse yükleme yapıyordur. Tetiklenmezse yerel işliyordur.",
    },
    {
      q: "Ücretli araçlar ücretsizlerden daha mı güvenli?",
      a: "Bazen. Ücretli araçların genelde açık saklama ve veri işleme taahhütleri vardır. Bazı ücretsiz araçlar (bu sitedekiler gibi) yerel çalışır ve dosyanı hiç almadıkları için bu taahhütlere ihtiyaç duymazlar.",
    },
    {
      q: "Peki uçtan uca şifreleme?",
      a: "Paylaşım için kullanışlı ama işleme sırasında yardımcı olmaz. Bir sunucu dosyanı sıkıştırmak için okuması gerekiyorsa, aktarımdaki şifreleme sunucunun içeriği görmesini değiştirmez.",
    },
    {
      q: "Yüklemeden önce PDF'imi şifrelemeli miyim?",
      a: "Yüklemek zorundaysan evet. Şifreyle korunan bir PDF sunucuya zaten korunmuş ulaşır. Ama hassas materyal için yüklemenin tamamından kaçınmak daha iyidir.",
    },
  ],
  related: [
    { label: "PDF araçları — tarayıcı tabanlı, yükleme yok", path: "/pdf-tools" },
    { label: "Gizliliği önceleyen PDF araçları", path: "/guides/privacy-first-pdf-tools" },
    { label: "Tarayıcı tabanlı mı yükleme gerektiren mi", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Online PDF araçları dosyalarını saklıyor mu", path: "/guides/do-online-pdf-tools-store-files" },
  ],
  parentHub: { label: "PDF araçları — ücretsiz, tarayıcı tabanlı", path: "/pdf-tools" },
};

export default content;
