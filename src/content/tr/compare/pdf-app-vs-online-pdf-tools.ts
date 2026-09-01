import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-app-vs-online-pdf-tools",
  h1: "PDF Uygulaması veya Online PDF Araçları — Hangisi Daha İyi?",
  description:
    "Yerel PDF uygulamalarını tarayıcı tabanlı araçlarla hız, gizlilik ve çevrimdışı erişim açısından karşılaştır.",
  intro: [
    "Telefondan ya da bilgisayardan PDF'lerle çalışmanın iki yolu vardır: yerel bir uygulama kurmak ya da tarayıcı tabanlı sayısız PDF aracından birini kullanmak. İki seçenek de işe yarar — ama ödünleşimler çok farklıdır ve en çok hassas belgeler için önem taşır.",
    "Tarayıcı tabanlı araçlar kolaylıkta kazanır: bir tık ve çalışmaya başlarsın. Yerel uygulamalar hız, gizlilik ve çevrimdışı erişimde kazanır. Herkese açık belgelerin tek seferlik dönüşümleri için tarayıcı araçları yeterlidir. Günlük belge işleri için — özellikle sözleşmeler, kimlikler ve müşteri dosyaları — yerel varsayılan olarak daha iyisidir.",
    "Bu karşılaştırma hızı, gizliliği, çevrimdışı erişimi, maliyeti ve her seçeneğin hangi dosya türlerini iyi işlediğini kapsar, böylece ilk Google sonucunun seni götürdüğü yerde kalmak yerine bilinçli bir seçim yapabilirsin.",
  ],
  leftLabel: "Yerel PDF Uygulaması",
  rightLabel: "Online PDF Aracı",
  rows: [
    { feature: "Çevrimdışı çalışır", left: "evet", right: "hayır" },
    { feature: "Dosyalar cihazında kalır", left: "evet", right: "hayır" },
    { feature: "Hız (yükleme/indirme beklemesi yok)", left: "evet", right: "hayır" },
    { feature: "Dosya boyutu sınırı yok", left: "evet", right: "Sınırlı" },
    { feature: "Hesap gerekmez", left: "evet", right: "Bazen" },
    { feature: "Kısıtlı kurumsal ağlarda çalışır", left: "evet", right: "Belki" },
    { feature: "Günlük kullanım için pratiklik", left: "evet", right: "Sınırlı" },
    { feature: "İlk kurulum gerekir", left: "evet", right: "hayır" },
    { feature: "Cihazlar arası işbirliği bağlantıları", left: "Sınırlı", right: "evet" },
  ],
  whenLeft: [
    "Hassas belgeler işliyorsun (sözleşmeler, kimlikler, bordrolar)",
    "İnternetin düzensiz olduğu yerlerde çalışıyorsun",
    "Kurulumu haklı çıkaracak kadar sık PDF düzenliyorsun",
    "Aynı aracın uçak modunda da çalışmasını istiyorsun",
    "İşlediğin belgeler için gizlilik önemli",
  ],
  whenRight: [
    "Herkese açık bir bilgisayarda tek seferlik dönüştürme ya da birleştirme",
    "Hiçbir şey kurmak istemiyorsun",
    "Belge hassas değil",
    "Paylaşılabilir bir önizleme bağlantısına ihtiyacın var",
    "Uygulama kuramadığın bir cihazdasın",
  ],
  faq: [
    {
      q: "Online PDF araçları güvenli mi?",
      a: "Bazıları evet. Çoğunun, dosyalarını işlem için kısa süre saklamasına izin veren gizlilik politikaları vardır. Hassas olmayan belgeler için bu sorun değil; sözleşmeler ya da kimlikler için yerel daha güvenlidir.",
    },
    {
      q: "Yerel uygulama neden daha hızlı?",
      a: "Dosya yükleme yok, sunucu sırası yok, sonucu indirme yok. Tüm işlem yerel olarak gerçekleşir.",
    },
    {
      q: "İkisini birlikte kullanabilir miyim?",
      a: "Evet. Çoğu kullanıcı günlük iş için varsayılan olarak yerel aracı kullanır ve bir meslektaşının paylaşılabilir bir önizleme bağlantısına ihtiyaç duyduğu nadir durumlarda bir web aracına başvurur.",
    },
  ],
  related: [
    { label: "PDF Düzenleyici — tam genel bakış", path: "/pdf-editor" },
    { label: "PDF Güvenliği", path: "/pdf-security" },
    { label: "İşletmeler için PDF", path: "/pdf-for-business" },
  ],
};

export default content;
