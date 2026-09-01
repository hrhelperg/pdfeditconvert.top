import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "do-online-pdf-tools-store-files",
  h1: "Online PDF Araçları Dosyalarını Saklıyor mu? Kontrol Edilmesi Gerekenler",
  description:
    "Bazı online PDF araçları yüklenenleri anında siler, bazıları saatlerce tutar, bazıları süresiz saklar. Bir gizlilik politikasını hızlıca okuma ve nelere dikkat edileceği.",
  updated: "2026-05-29",
  intro: [
    "Ücretsiz bir PDF aracı dosyanı yüklemeni istediğinde dürüst bir soru şudur: o dosyaya sonrasında ne oluyor? Cevap büyük ölçüde değişir. Bazı araçlar dönüştürme biter bitmez yüklemeyi siler. Bazıları “kolaylığın için” bir saat tutar. Bazıları “hizmet iyileştirme” gibi belirsiz bir dille daha uzun saklar. Bazıları haberin olmadığı modelleri eğitmek için kullanır.",
    "Gizlilik politikası söyler, ama gizlilik politikası genelde uzun, çoğu zaman belirsiz ve bazen güncel değildir. Hedefli bir okuma bir dakika sürer ve gerçekten bilmen gerekeni söyler. Saklamanın önemli olduğu kadar hassas dosyalar için daha güvenli hamle, hiç yüklemeyen bir araç seçmektir.",
    "Bu kılavuz hızlı gizlilik politikası okumasını, aranacak kalıpları ve yüklemenin kendisi sorun olduğunda daha güvenli alternatifi anlatıyor.",
  ],
  steps: [
    {
      title: "Politikayı bul ve saklama kısmına atla",
      body: "Gizlilik politikası genelde alt bilgide bağlantılıdır. Sayfada (Ctrl-F) “saklamak”, “silmek”, “depolamak” kelimelerini ara. Bu kelimeler seni doğrudan saklama bölümüne götürür.",
    },
    {
      title: "Gerçek saklama rakamlarını oku",
      body: "“Dosyalar bir saat içinde silinir” somut ve güven vericidir. “Artık gerekmediğinde dosyaları sileriz” belirsizdir ve her şey anlamına gelebilir. Rakam şeklindeki taahhütler önemlidir; niyetler önemli değildir.",
    },
    {
      title: "Dosyanın kendisinin ötesinde ne saklandığını kontrol et",
      body: "Meta veri (dosya adı, dosya boyutu, tür, IP adresi) genelde dosya içeriğinden daha uzun saklanır. Çoğu kullanım için meta veri saklaması kabul edilebilir; son derece hassas işler için bu bile bir uyarı işaretidir.",
    },
    {
      title: "Eğitim verisi maddelerini ara",
      body: "Bazı ücretsiz araçlar, yüklenen dosyaları hizmet iyileştirme ya da model eğitimi için kullanmalarına izin verir. “İyileştirmek”, “eğitmek”, “analitik” kelimelerini ara. Bulursan hassas içerik için daha güçlü bir uyarı işareti olarak ele al.",
    },
    {
      title: "Üçüncü taraf paylaşım bölümünü kontrol et",
      body: "Araç dosyanı tutmasa bile onu hosting sağlayıcılarıyla, alt işlemcilerle ya da analitik satıcılarıyla paylaşabilir. Her biri erişimi olan başka bir taraftır. “Hizmet sağlayıcılar”, “alt işlemciler”, “üçüncü taraflar” ifadelerini ara.",
    },
    {
      title: "Hassas herhangi bir şey için varsayılan olarak yerel işlemeyi seç",
      body: "Araç, yükleme yapmadan tarayıcında çalışıyorsa (geliştirici araçlarıyla doğrula), saklama bir soru değildir — saklanacak bir şey yoktur. Dosyanın saklanması önemliyse bu yolu kullan.",
    },
  ],
  tips: [
    "Ücretsiz + belirsiz saklama + net olmayan üçüncü taraflar = hassas dosyalar için kaçın. Bu kombinasyon en yüksek risktir.",
    "Temiz bir saklama politikası bile garanti değildir. Sunucu ihlalleri olur. Tek sıfır risk seçeneği yüklememektir.",
    "Denetleyemediğin herhangi bir amaç için yüklenen dosyaları tehlikeye girmiş kabul et. Dosyayı herkese açık paylaşmazdın diye düşünüyorsan, onu yüklemeyi iki kez düşün.",
    "Yüklemek zorundaysan önce dosyayı şifreyle koru. Araç şifreli bir blob görür; şifreleme içeriği korur.",
    "Doğrulama yapmadan “saklamıyoruz” iddialarına güvenme — gizlilik politikası dili ile gerçek davranış birbirinden ayrılabilir.",
  ],
  mobileNote:
    "Mobil uygulamaların genelde uygulama mağazasında ya da ayarlarda ayrı gizlilik politikaları vardır. PDF Editor uygulaması yerel işler ve dosyalarını hiç yüklemez, bu yüzden saklama söz konusu değildir. Hassas materyal üzerinde mobil çalışma için en temiz varsayılan sadece yereldir.",
  faq: [
    {
      q: "Çoğu online PDF aracı dosyaları ne kadar tutar?",
      a: "Büyük ölçüde değişir: dakikalardan süresize kadar. Büyük ticari araçlar genelde bir saat içinde siler; daha küçük ve ücretsiz araçlar tutarsızdır. Her gizlilik politikasını ayrı ayrı oku.",
    },
    {
      q: "Kısa saklama yeterince güvenli mi?",
      a: "Dosyaya bağlı. Sıradan belgeler için bir saat sorun değil. Gerçekten hassas materyal için herhangi bir saklama gerçek bir risk penceresidir.",
    },
    {
      q: "Peki silinen dosyalar — gerçekten gitmiş mi oluyor?",
      a: "Genelde aktif depodan evet, ama yedekler ve kopyalar daha uzun süre tutabilir. Gerçekten güvenli silme, kulağa geldiğinden teknik olarak daha zordur.",
    },
    {
      q: "Ücretsiz araçlar her zaman ücretlilerden daha uzun mu saklar?",
      a: "Eğilim, kural değil. Bazı ücretsiz araçların temiz saklaması var; bazı ücretli araçların şaşırtıcı maddeleri var. İkisini de oku.",
    },
    {
      q: "Hassas bir PDF için en güvenli yol nedir?",
      a: "Yerel işleyen (yükleme yapmayan) tarayıcı tabanlı araçlar. Yüklemek zorundaysan önce şifreyle koru ve açık silme taahhütleri olan bir araç seç.",
    },
  ],
  related: [
    { label: "PDF araçları — tarayıcı tabanlı, yükleme yok", path: "/pdf-tools" },
    { label: "Online PDF araçları güvenli mi", path: "/guides/are-online-pdf-tools-safe" },
    { label: "Tarayıcı tabanlı mı yükleme gerektiren mi", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Hassas belgeleri yüklemekten nasıl kaçınılır", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "PDF araçları — ücretsiz, tarayıcı tabanlı", path: "/pdf-tools" },
};

export default content;
