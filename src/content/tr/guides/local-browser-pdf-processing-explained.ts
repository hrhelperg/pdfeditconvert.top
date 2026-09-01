import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "local-browser-pdf-processing-explained",
  h1: "Tarayıcıda Yerel PDF İşleme Nasıl Çalışır?",
  description:
    "Bir PDF aracı dosyanı hiçbir yere göndermeden tarayıcıda nasıl çalışabilir? Teknoloji, ödünleşimler ve bir aracın gerçekten yerel çalıştığını doğrulama yöntemi.",
  updated: "2026-05-29",
  intro: [
    "Bir tarayıcı sekmesinin bir PDF'i sıkıştırabildiğini, iki dosyayı birleştirebildiğini ya da 200 sayfalık bir belgeden sayfa çıkarabildiğini — hiçbir şeyi sunucuya yüklemeden — öğrenmek insanları şaşırtır. Tarayıcı, ağır işin gerçekleştiği bir yer değil, internete açılan bir pencere gibi hissettirir. Ama modern tarayıcılar makinende çok fazla kod çalıştırabilir ve PDF işleme tam olarak buna uyan türden bir iş çıkıyor.",
    "Yerel tarayıcı PDF araçlarının arkasındaki teknoloji, tarayıcında çalışan ve sağladığın dosya üzerinde doğrudan çalışan JavaScript ve WebAssembly'dir. Dosya JavaScript tarafından okunur, tarayıcının belleğinde dönüştürülür ve indirebileceğin yeni bir dosyaya geri yazılır — hepsi dosyanın içeriğini taşıyan hiçbir ağ çağrısı olmadan.",
    "Bu kılavuz bunun gerçekte nasıl çalıştığını, neden varsayılan olarak güvenli olduğunu, sınırlamalarının ne olduğunu (bazı gerçek sınırlamalar var) ve düşündüğün bir aracın gerçekten yerel olduğunu nasıl doğrulayacağını açıklıyor. Egzotik hiçbir şey yok; teknoloji olgun.",
  ],
  steps: [
    {
      title: "Temel akışı anla",
      body: "Bir dosyayı sayfaya sürüklersin. JavaScript onu tarayıcının belleğine okur. JavaScript ya da WebAssembly kodu onu dönüştürür (sıkıştırır, birleştirir, böler). Sonuç, indirdiğin yeni bir dosyaya geri yazılır. Dosyanın kendisi için yükleme yok, sunucu teması yok.",
    },
    {
      title: "Bunu gizli yapan şeyi bil",
      body: "Sunucu JavaScript kodunu (aracın kendisini) sağlar ama kodun işlediği veriyi hiç görmez. Aracı indiren aynı tarayıcı sekmesi onu ardından dosyanda yerel olarak çalıştırır. Mimari, kod teslimatını veri işlemeden ayırır.",
    },
    {
      title: "Tarayıcı geliştirici araçlarıyla doğrula",
      body: "Geliştirici araçlarını, ağ sekmesini aç, dosyanı bırak. Gerçek bir yerel araç, dosyayı eklediğinde büyük bir giden istek göstermez. Yükleme yapan bir araç, dosyayı birkaç megabaytlık bir POST isteği olarak gönderir. Fark görünürdür.",
    },
    {
      title: "Sınırlamaları dürüstçe kabul et",
      body: "Yerel işleme, tarayıcının belleği ve işlemcisiyle sınırlıdır. Çok büyük dosyalar (yüzlerce sayfa, gigabaytlar) tıkanabilir; gelişmiş işlemler (uzun belgelerde tam OCR) bazen sunucu yardımına ihtiyaç duyar. Tarayıcı tabanlı araçlar sıradan işler için en iyisidir.",
    },
    {
      title: "Hiçbir telemetrinin veri sızdırmadığını kontrol et",
      body: "Bazı araçlar meta veriyle (sayfa sayısı, dosya boyutu) analitik olayları kaydeder. Bu içeriği sızdırmaktan farklıdır — ve analitik aynı ağ sekmesinde görünür. İçeriği meta veriden ayır.",
    },
    {
      title: "Tarayıcıyı bir güven sınırı olarak ele al",
      body: "Dosyan tarayıcı sekmesine girdikten sonra hâlâ cihazındadır. Bu sitedeki işleme araçları bu özelliği kullanır: işlerini sekmede yapar ve dosyanı asla dışarı göndermezler, böylece gizlilik ücretsiz gelir.",
    },
  ],
  tips: [
    "WebAssembly, modern tarayıcılarda PDF işlemenin ağır kısmını üstlenir — neredeyse yerel hıza sahiptir, bu yüzden yerel PDF araçları performansta masaüstü uygulamalarına yetişti.",
    "Tarayıcı sekmesini kapatmak dosyayı bellekten temizler. Yerel araçlar arkalarında kopya bırakmaz.",
    "Yerel araçlar sayfa yüklendikten sonra çevrimdışı çalışır — dosyanın yüklenmediğinin kullanışlı bir doğrulaması.",
    "Gizlilik iddiaları doğrulanabilir olmalı. Geliştirici araçları doğrulamadır; pazarlama metnine güvenmek zorunda değilsin.",
    "Tarayıcı tabanlı olmak sunucusuz olmakla aynı değildir. Bazı “tarayıcı tabanlı” araçlar hâlâ dosyanı yükler — sadece arayüz tarayıcıdadır. Ağ trafiğini kontrol et.",
  ],
  mobileNote:
    "Mobil tarayıcılar, masaüstü tarayıcılarıyla aynı yerel JavaScript ve WebAssembly araçlarını çalıştırır. PDF Editor uygulaması benzer bir mimari kullanır: tüm işleme cihaz üzerinde gerçekleşir, yükleme yoktur, böylece iPhone ve Android kullanıcıları aynı gizlilik garantilerini alır.",
  faq: [
    {
      q: "PDF işleme bir tarayıcıda nasıl gerçekleşir?",
      a: "JavaScript ve WebAssembly dosyanı tarayıcı sekmesinin belleğine okur, dönüştürür ve sonucu bir indirmeye geri yazar. Sunucu kodu sağlar ama dosyayı hiç görmez.",
    },
    {
      q: "Yerel tarayıcı işleme gerçekten gizli mi?",
      a: "Evet, mimari gereği. Dosya sekmeden çıkmaz. Yerel bir aracın sızdırmasının tek yolu bir hata ya da gizli bir yükleme olurdu — bu da geliştirici araçlarında görünürdü.",
    },
    {
      q: "Ne kadar büyük bir dosyayı işleyebilir?",
      a: "Modern tarayıcılar birkaç yüz megabayta kadar PDF'leri rahatça işleyebilir. Bunun üzerinde, cihaza bağlı olarak bellek sınırlarına takılabilirsin.",
    },
    {
      q: "Bu çevrimdışı çalışır mı?",
      a: "Evet, sayfa bir kez yüklendikten sonra. İşleme yerel gerçekleşir; ağa ihtiyaç yoktur. Bu, aracın gerçekten yerel olduğunun kullanışlı bir testidir.",
    },
    {
      q: "Neden her PDF aracı bu şekilde çalışmıyor?",
      a: "Bazı işlemler (uzun belgelerde gerçek OCR, belirli sıkıştırmalar) hâlâ sunucuda daha hızlıdır. Birçok araç da sunucu taraflı bir iş modeline bağlıdır. Tarayıcı tabanlı araçlar çoğu günlük iş için uygulanabilir bir alternatif hâline geldi.",
    },
  ],
  related: [
    { label: "PDF araçları — tarayıcı tabanlı, yükleme yok", path: "/pdf-tools" },
    { label: "Tarayıcı tabanlı mı yükleme gerektiren mi", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Tarayıcı tabanlı belge işlemenin avantajları", path: "/guides/browser-based-document-processing-benefits" },
    { label: "Online PDF araçları güvenli mi", path: "/guides/are-online-pdf-tools-safe" },
  ],
  parentHub: { label: "PDF araçları — ücretsiz, tarayıcı tabanlı", path: "/pdf-tools" },
};

export default content;
