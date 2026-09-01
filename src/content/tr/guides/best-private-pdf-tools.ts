import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-private-pdf-tools",
  h1: "En İyi Gizlilik Odaklı PDF Araçları (Gizlilik Gerçekten Önemliyse)",
  description:
    "Sözleşmeler, mali kayıtlar ve diğer hassas PDF'ler için gizliliğe sadece beyan edilen bir politikayla değil, mimariyle saygı gösteren araçlar bunlar.",
  updated: "2026-05-29",
  intro: [
    "“Gizli”, PDF araçlarına, “doğal”ın yiyecek etiketlerine uygulandığı gibi uygulanır — cömertçe ve genelde yanlış bir şekilde. Birçok araç metninde gizlilik iddia ederken her dosyayı sunucularına yükler ve orada işler. Gizlilik o zaman politika tabanlıdır: “dosyanı bir saatten fazla saklamıyoruz”. Bu hiç yoktan iyidir ama politikanın tutmasına bağlıdır, ki bu da şirketin tutmasına bağlıdır — gerçekten hassas materyal için güçlü bir garanti değildir.",
    "Gizli PDF araçları — gerçekten gizli olanlar — mimari gereği gizlidir. Dosyan sunucularına hiç ulaşmaz. İşleme tarayıcında ya da telefonundaki yerel bir uygulamada gerçekleşir. Gizlilik bir politika değil; yapısal bir özelliktir. Dosya önemli olduğunda araçları tutması gereken standart budur.",
    "Bu kılavuz yaygın PDF görevleri için gizli seçimleri listeliyor. Mimari çıtadır; gerisi oradan gelir.",
  ],
  steps: [
    {
      title: "Hassas dosyaların sıkıştırılması için: tarayıcıda PDF Sıkıştır",
      body: "Tarayıcındaki PDF Sıkıştır dosyayı yerel olarak küçültür. Hassas banka ekstreleri, taranmış kimlikler ve sözleşmeler cihazından hiç çıkmadan sıkışır. Geliştirici araçlarıyla doğrula — dosyayı eklediğinde giden POST yok.",
    },
    {
      title: "Hassas dosyaları birleştirmek için: tarayıcıda PDF Birleştir",
      body: "PDF Birleştir sözleşmeleri, ekleri ya da imzalı paketleri yerel olarak birleştirir. Birleşik dosya tarayıcı belleğinde üretilir; bileşenler boyunca makinende kalır.",
    },
    {
      title: "Paylaşmak için belirli sayfaları çıkarmak: PDF Sayfalarını Çıkar",
      body: "Hassas bir belgenin sadece belirli sayfalarını göndermen gerekiyorsa PDF Sayfalarını Çıkar sadece o sayfaları içeren yeni bir PDF üretir — yerel olarak, tarayıcında.",
    },
    {
      title: "Karartma tarzı sayfa kaldırma için: Çıkar ya da Yeniden Sırala",
      body: "Gerçek metin karartma özel bir görevdir; tüm sayfaları kaldırıyor ya da yerlerine başkalarını koyuyorsan tarayıcındaki sayfa düzeyi araçlar içeriği hiçbir sunucuya açığa çıkarmadan işi yapar.",
    },
    {
      title: "Sözleşme imzalamak için: PDF İmzala ya da PDF Editor uygulaması",
      body: "Tarayıcıda PDF İmzala ya da telefonda PDF Editor uygulaması, sözleşmeyi imzalama boyunca cihazında tutar. Hiçbir e-imza platformu belgeyi görmez.",
    },
    {
      title: "Gizli arşivler için: şifreli yerel depolama",
      body: "İşledikten sonra hassas PDF'leri şifreli depolamada arşivle — FileVault, BitLocker, şifreli harici sürücüler ya da sıfır bilgi bulut yedeği. Arşiv depolaması düz metinse yerel işleme önemli değildir.",
    },
  ],
  tips: [
    "Mimariyle gizlilik, politikayla gizliliği geçer. Mimari doğrulanır; politika güvene bağlıdır.",
    "Geliştirici araçlarının ağ sekmesi doğrulama adımıdır. Doğrulayamıyorsan güvenme.",
    "Gerçekten gizli araçlar için kayıt kabul etme — hesap, aracın aksi hâlde sahip olmayacağı bir veri noktasıdır.",
    "Mobil gizli araçlar çevrimdışı çalışmalı. “Gizli” bir uygulama sürekli ağ istiyorsa nedenini sor.",
    "Gizli araçları gizli kanallarla birleştir. Gizlice işleyip sonucu düz metin olarak e-postalamak amacı boşa çıkarır.",
  ],
  mobileNote:
    "Mobilde, PDF Editor uygulaması gizli seçimdir — tüm işleme cihaz üzerinde gerçekleşir, yükleme yok, hesap yok. Telefonun doğal cihaz olduğu ama dosyanın başkasının sunucusundan geçmemesi gereken sözleşmeler ve hassas taramalar için kullanışlıdır.",
  faq: [
    {
      q: "Bir PDF aracını gerçekten gizli yapan nedir?",
      a: "Mimari — dosya aracın sunucusuna ulaşmaz. Beyan edilen saklama politikaları daha zayıftır çünkü şirketin taahhütlerine sadık kalmasına bağlıdır.",
    },
    {
      q: "Ücretli “gizli” araçlar ücretsiz gizli araçlardan daha mı iyi?",
      a: "Mutlaka değil. Tarayıcında çalışan ücretsiz araçların, ücretli yüklemesiz araçlarla aynı mimari gizliliği vardır. Ücretli araçlar temel gizlilikte değil gelişmiş özelliklerde (düzenlemeye tabi iş akışları, e-keşif) kazanır.",
    },
    {
      q: "Gizliliği kendim doğrulayabilir miyim?",
      a: "Evet — tarayıcı geliştirici araçları, ağ sekmesi. Bir dosya bırak, giden istekleri izle. Görünür bir dosya yüklemesi yoksa dosya yüklemesi olmamıştır.",
    },
    {
      q: "Peki uçtan uca şifreleme?",
      a: "Paylaşım için kullanışlı, işlemede yardımcı olmaz. Bir araç dosyanı işlemek için okuması gerekiyorsa, aktarımdaki şifreleme önemli değildir — sunucu içeriği yine görür.",
    },
    {
      q: "Hassas PDF'ler için en güçlü gizlilik duruşu nedir?",
      a: "Tarayıcı tabanlı ya da yerel uygulama araçlarıyla yerel işle. Şifreli depolamada arşivle. Uçtan uca şifreli kanallardan paylaş. Her katman farklı bir saldırı yüzeyini kapsar.",
    },
  ],
  related: [
    { label: "PDF Güvenliği — şifreyle koru ve şifrele", path: "/pdf-security" },
    { label: "PDF araçları — tarayıcı tabanlı, yükleme yok", path: "/pdf-tools" },
    { label: "Gizliliği önceleyen PDF araçları", path: "/guides/privacy-first-pdf-tools" },
    { label: "Hassas PDF dosyaları nasıl korunur", path: "/guides/how-to-protect-sensitive-pdf-files" },
  ],
  parentHub: { label: "PDF araçları — ücretsiz, tarayıcı tabanlı", path: "/pdf-tools" },
};

export default content;
