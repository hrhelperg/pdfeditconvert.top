import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-submit-homework-as-pdf",
  h1: "Ödev PDF Olarak Nasıl Teslim Edilir? (Portal Sorunu Yaşamadan)",
  description:
    "Okul portalları ödevleri öngörülebilir nedenlerle reddeder — dosya boyutu, sayfa sayısı, format. Tamamlanmış bir ödevden kabul edilen bir PDF yüklemesine giden en basit yol.",
  updated: "2026-05-29",
  intro: [
    "Son teslim tarihinden iki dakika önce, okul portalının ödevini reddettiğini fark etmek için yanlış zamandır. Hata genelde belirsizdir — “geçersiz dosya”, “yükleme başarısız”, “çok büyük” — ve gerçek neden dört öngörülebilir şeyden biridir: dosya boyut sınırının üzerinde, format portalın beklediğiyle tam örtüşmüyor, sayfa sayısı bir üst sınırı aşıyor ya da telefon çekimin henüz gerçek bir PDF bile değil.",
    "Her durumda çözüm kısadır ve hassas hiçbir şeyi üçüncü bir tarafa yüklemeden bir tarayıcı sekmesinde, telefonda ya da bilgisayarda yapılabilir. Numara, portalın gerçekte ne beklediğini bilmek ve ilk seferde tam olarak o dosyayı üretmek.",
    "Bu kılavuz, bitmiş bir ödevden kabul edilen bir PDF'e giden yolu anlatıyor — el yazısı işin taramalarını, problem setlerini ve “bir Word belgesi artı üç el yazısı sayfa” gibi karma formatlı teslimleri doğru şekilde ele alma dahil.",
  ],
  steps: [
    {
      title: "Portalın gerçek gereksinimlerini doğrula",
      body: "Çoğu sınıf portalı sınırı sessizce listeler — genelde 5–25 MB, bazen bir üst sayfa sayısı, ara sıra özellikle PDF/A. Ret aldıktan sonra değil, yüklemeden önce kontrol et.",
    },
    {
      title: "Önce tüm parçaları PDF'e dönüştür",
      body: "Bir Word belgesi → Word'den PDF'e. El yazısı sayfalar → telefonunda PDF Tarama. Tahtanın ekran görüntüleri ya da fotoğrafları → Görselden PDF'e. Başka bir şey olmadan önce her şey PDF'e dönüşür.",
    },
    {
      title: "Teslim sırasına göre tek dosyada birleştir",
      body: "PDF Birleştir, yazılı işi, taranan işi ve tüm notları tek, sıralı bir dosyada toplar. Not verenler üç dosya yerine bir dosyayı tercih eder.",
    },
    {
      title: "Yönü ve sırayı doğrula",
      body: "Birleştirme bir şeyi sıra dışı bıraktıysa PDF Sayfalarını Yeniden Sırala. Bir tarama yan gelmişse PDF Döndür. Not veren, işini okumak için elle döndürmek zorunda kalmamalı.",
    },
    {
      title: "Portal sınırına sığacak şekilde sıkıştır",
      body: "Tarayıcındaki PDF Sıkıştır dosyayı küçültür. Ağır taramalar belirgin şekilde küçülür; yazılı içerik neredeyse hiç değişmez. Küçük bir tampon payıyla portal sınırının altını hedefle.",
    },
    {
      title: "Dosyayı sınıfın beklediği şekilde adlandır",
      body: "Birçok sınıf adlandırma kuralını belirtir: Soyad_Ad_Odev3.pdf. Tam olarak uy. Yanlış adlar puan kaybettirir ya da sıralama karışıklığına yol açar.",
    },
  ],
  tips: [
    "PDF kabul eden bir portala Word belgesi gönderme. Word, not verenin bilgisayarında farklı görünür; PDF görünümü kilitler.",
    "El yazısı taramalar renkli değil siyah-beyaz ya da gri tonlamalı olmalı. Daha küçük, daha keskin ve daha net okunur.",
    "Ağır taramaları sert sıkıştır, yazılı işi değil. Yazılı sayfalar fazla sıkışmaz; taramalar çok sıkışır.",
    "Son teslim öncesi bir taslak sürümünü deneme amaçlı yükleyip portalın dosyanı kabul ettiğini doğrula.",
    "Teslim ettiğin dosyayı yerelde de sakla. Portal kopyaları her zaman sonradan erişilebilir olmayabilir ve ne teslim ettiğine bakman gerekebilir.",
  ],
  mobileNote:
    "Sadece telefonla teslim artık normal. PDF Editor uygulaması tüm zinciri telefonda halleder — el yazısı sayfaları tara, yazılı işle birleştir, sıkıştır, adlandır, yüklemeye hazır — bilgisayara geçmeden.",
  faq: [
    {
      q: "Çoğu okul portalı hangi boyutu kabul eder?",
      a: "Genellikle 5–25 MB. Bazı K-12 portalları 2 MB'da sınırlanır. Üniversite portalları daha esnektir. Sınıfa özel şartları kontrol et.",
    },
    {
      q: "PDF yerine Word gönderebilir miyim?",
      a: "Sadece portal bunu açıkça kabul ediyorsa. Çoğu, biçimlendirmeyi kilitlemek için özellikle PDF ister; Word göndermek puan kaybettirebilir ya da otomatik reddedilebilir.",
    },
    {
      q: "Her şeyi tek dosyada birleştirmem gerekir mi?",
      a: "Portal birden fazla yüklemeyi desteklemiyorsa evet. Not verenler tek dosyayı tercih eder; birçok portal zaten sadece birini kabul eder.",
    },
    {
      q: "En yaygın ret nedeni nedir?",
      a: "Dosya boyutu. Taramalar dosyaları hızla portal sınırının üzerine çıkarır. Göndermeden önce sıkıştırınca ret büyük ölçüde ortadan kalkar.",
    },
    {
      q: "Telefonumdan yükleyebilir miyim?",
      a: "Evet. Çoğu modern okul portalı mobil tarayıcılarda çalışır ve paylaşım menüsünden gelen PDF'leri kabul eder. Telefon araçları zincirin tamamını kapsar.",
    },
  ],
  related: [
    { label: "Öğrenciler için PDF — notlar ve çalışma kılavuzları", path: "/pdf-for-students" },
    { label: "PDF Tarama — el yazısı sayfaları yakala", path: "/scan-to-pdf" },
    { label: "Okul portalları için PDF nasıl sıkıştırılır", path: "/guides/how-to-compress-pdf-for-school-portals" },
    { label: "El yazısı notlar PDF'e nasıl taranır", path: "/guides/how-to-scan-notes-to-pdf" },
  ],
  parentHub: { label: "Öğrenciler için PDF — notlar, vurgulamalar, çalışma kılavuzları", path: "/pdf-for-students" },
};

export default content;
