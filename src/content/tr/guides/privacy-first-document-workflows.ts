import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "privacy-first-document-workflows",
  h1: "Gizliliği Önceleyen Belge İş Akışları (Baştan Sona Yüklemesiz)",
  description:
    "Dosyaları cihazlarında ve üçüncü taraf sunucuların dışında tutan uçtan uca bir belge iş akışı — yakalama, düzenleme, imzalama, gönderme, arşivleme. Gerçekçi yapısı ve araçları.",
  updated: "2026-05-29",
  intro: [
    "Çoğu belge iş akışı sızdırır. Hassas bir kağıdı bir uygulamayla tarar, bir web sitesiyle sıkıştırmak için yüklersin, üçüncü taraf bir “iyileştirme” aracıyla e-postalarsın ve sonunda seninle kalacağını sandığın bir şeyin kopyalarını tutan üç dört sunucuyla karşılaşırsın. Her adım kullanışlıdır; birikimli gizlilik maliyeti büyük ve görünmezdir.",
    "Gizliliği önceleyen bir iş akışı modern araçları reddetmez — dosyalarını hareket ettirmeyenleri seçer. Yakalama kameranda olur. Sıkıştırma ve düzenleme tarayıcında olur. İmzalama telefonundaki bir uygulamada olur. Aktarım güvendiğin bir kanaldan olur. Hiçbir noktada belge bir yabancının sunucusunda yaşamaz.",
    "Bu kılavuz uçtan uca yapıyı, her adıma uyan araçları ve yerel işlemenin gerçekten kapsayamadığı yeri (çoğu kişinin düşündüğünden daha küçük bir küme) anlatıyor. Bu, gerçekçi bir gizlilik öncelikli iş akışı — mutlakçı olan değil.",
  ],
  steps: [
    {
      title: "Yakalama: telefonunla yerel olarak tara",
      body: "Telefonundaki PDF Tarama, kamerayı ve sayfa algılamayı cihaz üzerinde çalıştırır. Yükleme yok, bulut işleme yok. Ürettiğin PDF, paylaşmaya karar verene kadar yerel başlar ve yerel kalır.",
    },
    {
      title: "Tarayıcı sekmesinde düzenle ve temizle",
      body: "PDF Sıkıştır, PDF Sayfalarını Yeniden Sırala, PDF Sayfalarını Çıkar, PDF Döndür, PDF'e Filigran Ekle — hepsi tarayıcıda çalışır. Dosya, makinendeki JavaScript tarafından okunur; sunucu içeriği hiç görmez.",
    },
    {
      title: "Gerçek bir imzayla, yerel olarak imzala",
      body: "PDF İmzala ya da PDF Editor uygulaması cihazında çizilmiş bir imzayı yakalar ve dosyaya gömer. Hiçbir üçüncü taraf imza platformu belgeyi görmez.",
    },
    {
      title: "Güvenilir bir kanaldan paylaş",
      body: "AirDrop, Signal, şifreli e-posta, uçtan uca şifreli mesajlaşma. Kanal aktarımı şifreler; alıcı, dosyayı okuyabilen bir aracıdan geçmeden alır.",
    },
    {
      title: "Şifreli depolamada arşivle",
      body: "Tam disk şifrelemesi olan yerel sürücü ya da sıfır bilgi bulut yedeği. Hassas PDF'leri sade bulut depolamada tutma — bu, dosyalarını okuyan bir sunucu demektir.",
    },
    {
      title: "Bir program dahilinde denetle ve sil",
      body: "Üç ayda bir hassas PDF'lerini gözden geçir. Artık ihtiyacın olmayanı sil. Saklanan her hassas dosya küçük, sürekli bir risktir; envanteri azaltmak maruziyeti azaltır.",
    },
  ],
  tips: [
    "Yakalama, düzenleme ve imzalama tek bir cihazda gerçekleşebilir. Cihaz atlaması ne kadar azsa sızıntı yüzeyi o kadar küçük olur.",
    "Bir “tarayıcı tabanlı” aracın gerçekten yerel çalıştığını güvenmeden önce doğrula. Geliştirici araçlarının ağ sekmesi en hızlı kontroldür.",
    "Şifreli kanallardan paylaşırken bile hassas PDF'leri şifrelerle koru. Çok katmanlı savunma.",
    "Hassas materyal için “bağlantı gönder” dosya paylaşım hizmetlerinden kaçın. Bağlantı, sunucu taraflı bir tutamaçtır; dosya başka birinin diskinde yaşar.",
    "Zorunlu değilse hassas PDF'leri yazdırma. Yazıcı kuyruğu ve kağıt, takip etmen gereken ek iki kopyadır.",
  ],
  mobileNote:
    "Gizliliği önceleyen iş akışları insanların düşündüğünden telefonda daha kolaydır. PDF Editor uygulaması yakalama, düzenleme, imzalama ve paylaşımı iOS ve Android'de yerel olarak halleder; böylece hassas bir belge kağıttan alıcıya, hiçbir üçüncü taraf sunucusuna değmeden gidebilir.",
  faq: [
    {
      q: "Gerçek bir iş akışı gerçekten yerel kalabilir mi?",
      a: "Çoğu adım için evet. Yakalama, sıkıştırma, düzenleme, imzalama ve sıradan aktarım hepsi yüklemeden yapılabilir. Bazı işlemler (yüksek kaliteli OCR, gelişmiş karartma) bazen sunucu yardımına ihtiyaç duyar; ihtiyacın olursa o araçları dikkatle seç.",
    },
    {
      q: "Bunların hepsi paranoyaklık değil mi?",
      a: "Hassas materyal için değil. Her şeyi yükleyen iş akışı, belgeler daha az hassas ve ihlaller daha nadirken işe yarıyordu. İkisi de değişti. Gizliliği önceleyen iş akışı, alışkanlık hâline geldiğinde aynı süreyi alır.",
    },
    {
      q: "Bir tarayıcı aracının gerçekten yerel olduğunu nasıl anlarım?",
      a: "Geliştirici araçlarını, ağ sekmesini aç, bir dosya ekle. Büyük bir giden yükleme görmezsen yerel işliyordur. Bu sitedeki araçlar bu kalıba uyar.",
    },
    {
      q: "Peki yedekler?",
      a: "Sıfır bilgi bulut yedeği (sağlayıcı dosyalarını okuyamaz) sorun değil. Hassas PDF'lerin sade bulut yedeği gizli değildir — sağlayıcı her şeyi okuyabilir.",
    },
    {
      q: "İş akışı nerede bozulur?",
      a: "İki yerde: bir iş akışı belirli bir ücretli platform gerektirdiğinde (düzenlemeye tabi sektörler) ve alıcı kendi tarafında yükleme yapan bir iş akışı kullandığında. Gizlilik her iki tarafa da bağlıdır.",
    },
  ],
  related: [
    { label: "PDF araçları — tarayıcı tabanlı, yükleme yok", path: "/pdf-tools" },
    { label: "Gizliliği önceleyen PDF araçları", path: "/guides/privacy-first-pdf-tools" },
    { label: "Tarayıcıda yerel PDF işleme nasıl çalışır", path: "/guides/local-browser-pdf-processing-explained" },
    { label: "Tarayıcı tabanlı belge işlemenin avantajları", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "PDF araçları — ücretsiz, tarayıcı tabanlı", path: "/pdf-tools" },
};

export default content;
