import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-size-before-uploading",
  h1: "Yüklemeden Önce PDF Boyutu Nasıl Küçültülür?",
  description:
    "Yükleme portalları büyük dosyaları e-postadan daha sert şekilde reddeder. Kontrol ettikleri okunabilirliği bozmadan PDF'i sıkı portal limitlerinin altına indirme yöntemi.",
  updated: "2026-05-23",
  intro: [
    "Yükleme portalları e-postadan daha katıdır. Bir devlet formu, bir iş başvuru sistemi, bir vergi ya da İK portalı bir PDF'i genelde 2, 4 ya da 5 MB ile sınırlar ve daha büyük her şeyi kısa bir hata mesajıyla, ikinci şans vermeden reddeder. Daha kötüsü, bunlar genelde taranmış belgelerdir — yani büyük olma ihtimali en yüksek dosyalar tam da bunlardır.",
    "Bu rehber, hiçbir şey yüklenmeden tarayıcında çalışan ücretsiz PDF Sıkıştır aracıyla bu limitleri aşma yöntemini anlatıyor. Portallardaki asıl zorluk, belgenin okunur kalması gerekmesi — hem reddedilen bir yükleme hem de okunamayan bir yükleme başarısız sayılır — yani bu bir denge işi.",
    "Belirli bir boyut hedefine nasıl ulaşacağını, bir portalın limiti acımasızca düşük olduğunda ne yapman gerektiğini ve belgeyi karşı taraftaki incelemeyi geçecek kadar okunur tutma yöntemini ele alacağız.",
  ],
  steps: [
    {
      title: "Portalın tam limitini bul",
      body: "Yükleme alanının küçük yazısını oku. Portallar genelde 2-5 MB gibi kesin bir üst sınır belirtir ve bunun üzerindeki her şeyi reddeder. Bu sayı senin hedefindir.",
    },
    {
      title: "PDF Sıkıştır aracını aç",
      body: "PDF Sıkıştır aracına git. Dosyayı cihazında işler, bu önemlidir çünkü portal yüklemeleri genelde kişisel ya da resmi belgelerdir.",
    },
    {
      title: "Limite doğru sıkıştır",
      body: "Önerilen düzeyle başla; sıkı bir limit için Güçlü'ye geç. Araç sonuç boyutunu gösterir, böylece limiti aşıp aşmadığını görebilirsin.",
    },
    {
      title: "Hâlâ okunaklı olduğunu doğrula",
      body: "Sıkıştırılmış dosyayı aç. Portallar çok büyük dosyaları reddeder, incelemeciler ise okunamayan dosyaları reddeder — belge ikisini de karşılamalıdır. Metnin rahatça okunabildiğini kontrol et.",
    },
    {
      title: "Limite ulaşamıyorsan sayfa azalt",
      body: "Sıkıştırma tek başına seni çok düşük bir limitin altına indiremiyorsa, PDF Sayfalarını Çıkar aracıyla gereksiz sayfaları kaldır ya da portal izin veriyorsa gerekli bölümleri ayrı ayrı yükle.",
    },
    {
      title: "Doğru boyuttaki dosyayı yükle",
      body: "Sıkıştırılmış sürümü gönder. Portal daha sonra daha net bir kopya isterse diye tam kaliteli orijinalini sakla.",
    },
  ],
  tips: [
    "Sıkıştırmadan önce tam limiti bul. Kör sıkıştırma çabayı boşa harcar; belirtilmiş bir 4 MB limiti sana tam olarak ne kadar sıkıştırman gerektiğini söyler.",
    "Portallar çift geçiş ister: yüklenecek kadar küçük ve okunacak kadar net. Bir formu bulamaç haline getiren Güçlü sıkıştırma, yüklense bile incelemeden geçemez.",
    "Taranmış başvuru belgeleri dramatik şekilde küçülür, yani 2 MB'lık bir limit bile genelde ulaşılabilir — çünkü neredeyse tamamen görsel veridir.",
    "Çok sayfalı bir tarama için limit imkansız derecede düşükse, önce boş ya da alakasız sayfaları kaldırmak kaliteye dokunmadan boyutu azaltır.",
    "Orijinali sakla. Bir detayı okuyamayan bir incelemeci daha net bir kopya isteyebilir ve tam kaliteli dosyayı hazır bulundurmak istersin.",
  ],
  mobileNote:
    "Portal yüklemelerinin çoğu bir telefondan yapılır — bir belgeyi çekip anında göndermek gibi. PDF Editor uygulaması çevrimdışı sıkıştırır ve yüklemeden önce okunabilirliği önizlemeni sağlar, böylece geçemeyecek kadar büyük ya da bulanık bir dosya göndermezsin.",
  faq: [
    {
      q: "Yükleme portalları PDF'imi neden reddediyor, e-posta neden kabul ediyor?",
      a: "Portallar çok daha sıkı limitler koyar — genelde e-postanın ~25 MB'ına karşılık 2-5 MB — ve bunları katı biçimde uygular. E-postayla sorunsuz giden bir dosya bir portal için kolayca çok büyük olabilir.",
    },
    {
      q: "Belirli bir boyut hedefine nasıl ulaşırım?",
      a: "Sıkıştır ve sonuç boyutunu oku, limitin altına inene kadar düzeyi artır. Araç öncesi-sonrası rakamları gösterir, böylece hedefi tam olarak tutturabilirsin.",
    },
    {
      q: "Ya Güçlü sıkıştırma bile yetmezse?",
      a: "PDF Sayfalarını Çıkar aracıyla gereksiz sayfaları kaldır ya da portal izin veriyorsa gerekli bölümleri ayrı ayrı yükle. Bu, kalan sayfaları daha fazla bozmadan boyutu düşürür.",
    },
    {
      q: "Sıkıştırırken belgem sizin sunucularınıza yükleniyor mu?",
      a: "Hayır. PDF Sıkıştır aracı tarayıcında, cihazında çalışır — bu önemlidir çünkü portal belgeleri genelde kişisel ya da resmidir.",
    },
    {
      q: "Ağır sıkıştırma portalın dosyayı okunamaz diye reddetmesine neden olur mu?",
      a: "Olabilir. Portallar hem yüklenecek kadar küçük hem de okunacak kadar net bir dosya ister. Sıkıştırdıktan sonra okunabilirliği kontrol et ve olası bir talep için orijinalini sakla.",
    },
  ],
  related: [
    { label: "PDF Sıkıştır — portalın limitini tuttur", path: "/compress-pdf" },
    { label: "PDF Sayfalarını Çıkar — boyutu düşürmek için sayfa at", path: "/extract-pdf-pages" },
    { label: "En İyi PDF Sıkıştırma Ayarları — Bir Karar Rehberi", path: "/guides/best-pdf-compression-settings" },
    { label: "E-posta İçin PDF Dosya Boyutu Nasıl Küçültülür?", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "PDF Sıkıştır", path: "/compress-pdf" },
};

export default content;
