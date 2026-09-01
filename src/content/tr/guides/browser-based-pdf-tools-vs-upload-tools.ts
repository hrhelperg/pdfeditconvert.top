import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "browser-based-pdf-tools-vs-upload-tools",
  h1: "Tarayıcı Tabanlı PDF Araçları mı, Yükleme Gerektiren Araçlar mı?",
  description:
    "Tüm “online” PDF araçları aynı değildir. Tarayıcında çalışan araçlarla dosyanı yükleyen araçlar arasındaki fark — ve aralarındaki farkı nasıl anlarsın.",
  updated: "2026-05-23",
  intro: [
    "İki PDF aracı birbirinin aynısı görünebilir — aynı web sayfası, aynı sürükle-bırak kutusu, aynı indirme butonu — ve dosyanla tamamen farklı bir şey yapabilir. Biri onu doğrudan tarayıcının içinde, kendi cihazında işler. Diğeri onu bir sunucuya yükler, işi orada yapar ve sonucu geri gönderir. Dışarıdan çoğu zaman anlayamazsın, ama hassas herhangi bir şey için bu fark her şeydir.",
    "Bu rehber bu ayrımı, neden önemli olduğunu ve hangisini kullandığını nasıl anlayacağını açıklıyor. Bu sitedeki araçlar birinci türdendir: tarayıcında çalışırlar ve dosyan cihazından hiç çıkmaz. Pek çok popüler “online PDF” servisi ikinci türdendir, bunu belli etmeseler bile.",
    "Sorun yükleme araçlarının işe yaramaz olması değil — belgeni kime teslim ettiğini bilmen ve bilinçli seçim yapman gerekiyor.",
  ],
  steps: [
    {
      title: "“Tarayıcı tabanlı” gerçekte ne demek bil",
      body: "Gerçek bir tarayıcı tabanlı araç, işlemeyi sayfanın içinde, cihazının işlemcisini kullanarak yapar. Dosyan yerel olarak okunur ve asla iletilmez — iş, dosyanın zaten olduğu yerde gerçekleşir.",
    },
    {
      title: "Bir yükleme aracının ne yaptığını bil",
      body: "Bir yükleme aracı dosyanı uzak bir sunucuya gönderir, orada işler ve sonucu geri döndürür. Belgen, kısa süreliğine başkasının altyapısında, onların saklama ve gizlilik politikalarına tabi olarak yaşar.",
    },
    {
      title: "İşaretleri gözle",
      body: "Bir yükleme aracı genelde internet hızına bağlı bir ilerleme çubuğu gösterir, çevrimdışıyken başarısız olabilir ve sık sık dosyaların “bir saat sonra silindiğinden” bahseder — bu ifade ancak dosyanı başta gerçekten aldılarsa anlam kazanır.",
    },
    {
      title: "Çevrimdışı test et",
      body: "Aracı yükle, ardından bağlantını kapat ve kullanmayı dene. Gerçek bir tarayıcı tabanlı araç çalışmaya devam eder; bir yükleme aracı devam edemez, çünkü dosyayı gönderecek hiçbir yeri yoktur.",
    },
    {
      title: "Seçimi belgeye göre yap",
      body: "Herkese açık, hassas olmayan dosyalar için her ikisi de uygundur. Sözleşmeler, kimlikler, ekstreler ve müşteri işleri için, belge cihazından hiç çıkmasın diye tarayıcı tabanlı bir araç seç.",
    },
    {
      title: "Hassas işler için cihaz üzerinde çalışan araçlar kullan",
      body: "Bu sitedeki araçlar — birleştir, böl, sıkıştır, dönüştür, döndür ve diğerleri — tarayıcında çalışır. Gizlilik gerçekten önemli olduğunda bunlara yönel.",
    },
  ],
  tips: [
    "“Online” bir dosyanın yüklenip yüklenmediğini söylemez. Asıl soru işlemenin nerede gerçekleştiğidir — cihazında mı, onların sunucusunda mı.",
    "Çevrimdışı test en güvenilir kontroldür: tarayıcı tabanlı bir araç bağlantın kapalıyken de çalışır, bir yükleme aracı çalışmaz.",
    "“Dosyalarınızı bir saat sonra siliyoruz” ancak yüklenmelerini istediysen rahatlatıcıdır. Hiçbir zaman yüklemeyen bir aracın silecek hiçbir şeyi yoktur.",
    "Hız bir ipucudur: tarayıcı tabanlı araçların yükleme ya da indirme beklemesi yoktur, bu yüzden büyük dosyalar genelde bir sunucuya gidip gelmekten daha hızlı işlenir.",
    "Yükleme araçları kötü değildir — herkese açık bir el ilanı için sorun olmaz. Sadece bir sözleşmeyi ya da kimliği düşünmeden onlara teslim etme.",
  ],
  mobileNote:
    "Mobilde, bir yükleme aracı ayrıca veri paketini tüketir ve zayıf bir bağlantıda takılır. PDF Editor uygulaması her şeyi cihazda işler ve tamamen çevrimdışı çalışır — böylece sinyalsiz bir trende hassas bir belgeyi birleştirebilir ya da sıkıştırabilirsin, hiçbir şey telefonundan çıkmaz.",
  faq: [
    {
      q: "Tüm online PDF araçları aynı mı?",
      a: "Hayır. Bazıları dosyanı tarayıcında, cihazında işler; diğerleri bir sunucuya yükler. Birbirinin aynısı görünebilirler, yani fark gözden kaçması kolaydır — ama belgenin cihazından çıkıp çıkmayacağını bu belirler.",
    },
    {
      q: "Bir aracın dosyamı yükleyip yüklemediğini nasıl anlarım?",
      a: "Çevrimdışı dene. Tarayıcı tabanlı bir araç bağlantın kapalıyken de çalışmaya devam eder; bir yükleme aracı edemez, çünkü dosyayı gönderecek hiçbir yeri yoktur. Yükleme araçları ayrıca genelde ağa bağlı ilerleme çubukları gösterir.",
    },
    {
      q: "Bu sitedeki araçlar tarayıcı tabanlı mı?",
      a: "Evet. Birleştir, böl, sıkıştır, dönüştür, döndür ve diğerleri, cihazının işlemcisini kullanarak tarayıcında çalışır. Dosyaların asla yüklenmez.",
    },
    {
      q: "Bir yükleme aracı kullanmak hiç uygun mudur?",
      a: "Herkese açık, hassas olmayan belgeler için evet. Dikkat, sözleşmeler, kimlikler, mali ekstreler ve müşteri işleri için geçerlidir; bunlarda tarayıcı tabanlı bir araç dosyayı cihazında tutar.",
    },
    {
      q: "Tarayıcı tabanlı araçlar bazen neden daha hızlı?",
      a: "Yükleme ya da indirme beklemesi yoktur. Dosya zaten cihazındadır, yani büyük belgeler için yerel işleme genelde bir sunucuya gidip gelmekten daha iyidir.",
    },
  ],
  related: [
    { label: "Ücretsiz PDF Araçları — tarayıcı tabanlı, yükleme yok", path: "/pdf-tools" },
    { label: "Gizliliği Önceleyen PDF Araçları — Belgeler Cihazında Kalsın", path: "/guides/privacy-first-pdf-tools" },
    { label: "PDF Uygulaması veya Online PDF Araçları — Hangisi Daha İyi?", path: "/compare/pdf-app-vs-online-pdf-tools" },
    { label: "PDF Yüklemeden Online Nasıl Sıkıştırılır?", path: "/guides/how-to-compress-pdf-online" },
  ],
  parentHub: { label: "Ücretsiz PDF Araçları", path: "/pdf-tools" },
};

export default content;
