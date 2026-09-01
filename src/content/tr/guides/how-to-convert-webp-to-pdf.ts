import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-webp-to-pdf",
  h1: "WebP PDF'e Nasıl Dönüştürülür? Web Görsellerini Belgeye Çevirme",
  description:
    "İnternetten kaydedilen WebP görsellerini tarayıcında tek bir PDF'te birleştir. WebP'nin diğer uygulamalarda neden reddedildiği ve dönüştürmenin uyumluluğu nasıl çözdüğü.",
  updated: "2026-05-23",
  intro: [
    "WebP, modern bir web sitesinden bir görsel kaydettiğinde elde ettiğin formattır. Benzer kalitede JPG ya da PNG'den daha küçüktür, bu yüzden siteler onu sever — ama aynı zamanda diğer uygulamaların sessizce reddettiği formattır. Bir WebP'i eski bir portala yüklediğinde, bazı belge düzenleyicilere bıraktığında ya da eski bir yazılım kullanan bir meslektaşına gönderdiğinde, genelde düz bir \"desteklenmeyen dosya türü\" mesajı alırsın.",
    "WebP'i PDF'e dönüştürmek bu sorunu aşar. Bir PDF her yerde açılır, bu yüzden WebP görsellerini bir PDF'e sarmak onları evrensel olarak paylaşılabilir yapar. Bu rehber, WebP kabul eden ve tamamen tarayıcında çalışan ücretsiz Görselden PDF'e aracını kullanıyor — hiçbir şey yüklenmez.",
    "İnternetten görseller topladığında — ürün fotoğrafları, referans resimleri, kaydedilmiş infografikler — ve her alıcının ve her sistemin gerçekten kabul edeceği bir formata ihtiyacın olduğunda doğru hamle budur.",
  ],
  steps: [
    {
      title: "Görselden PDF'e aracını aç",
      body: "Tarayıcında Görselden PDF'e aracına git. JPG ve PNG'nin yanında WebP'yi de kabul eder ve her şeyi cihazında işler — yükleme ya da kayıt yok.",
    },
    {
      title: "WebP dosyalarını ekle",
      body: "Kaydettiğin WebP görsellerini bırakma alanına sürükle ya da seçmek için tıkla. Her görsel, son PDF'te bir sayfa olur.",
    },
    {
      title: "Sırayı düzenle",
      body: "Görselleri sıralamak için yukarı ve aşağı okları kullan. Referans fotoğrafları ya da adım adım bir diziyse, sırayı burada doğru yap.",
    },
    {
      title: "PDF'i oluştur",
      body: "PDF Oluştur'a tıkla. WebP görsellerin PDF sayfalarına yerleştirilir ve cihazında yerel olarak tek bir dosyada birleştirilir.",
    },
    {
      title: "İndir ve paylaş",
      body: "PDF otomatik olarak iner. Artık ham WebP dosyalarında takılan herhangi bir cihaz ya da portalda açılır.",
    },
    {
      title: "Dosya büyükse sıkıştır",
      body: "WebP verimlidir, ama bir yığın yüksek çözünürlüklü görsel yine de toplanır. Bir ek dosya ya da yükleme sınırına sığması gerekiyorsa sonucu PDF Sıkıştır'dan geçir.",
    },
  ],
  tips: [
    "WebP'i PDF'e dönüştürmenin tüm nedeni uyumluluktur — bir WebP'in kabul edilmediği yerde bir PDF kabul edilir, yani zor beğenen bir formatı evrensel biriyle takas ediyorsun.",
    "Sadece görsellerin kendisine daha yaygın bir formatta ihtiyacın varsa (belge değil), düz bir görsel dönüştürücü isteyebilirsin. Amaç tek, paylaşılabilir, yazdırılabilir bir dosyaysa PDF'i seç.",
    "WebP, nasıl kaydedildiğine bağlı olarak kayıplı ya da kayıpsız olabilir; her iki durumda da PDF'e dönüştürmek, web sitesinin zaten attığı detayı geri getirmez.",
    "Bir WebP'teki şeffaflık, tıpkı bir PNG'de olduğu gibi, bir PDF sayfası olduğunda beyaza karşı görüntülenir.",
    "Bazı çok eski tarayıcılar WebP'i hiç çözemez. Araç dosyanı okuyamıyorsa, güncel bir tarayıcıda aç ya da PDF Editor uygulamasını kullan.",
  ],
  mobileNote:
    "Telefonunda gezinirken görsel kaydetmek genelde seni diğer uygulamalarının reddettiği WebP dosyalarıyla baş başa bırakır. PDF Editor uygulaması bunları anında paylaşılabilir bir PDF'e dönüştürür, böylece internette bulduğun bir resim dizüstüne uğramadan göndermeye hazır olur.",
  faq: [
    {
      q: "WebP'i neden dönüştürmem gerekiyor ki?",
      a: "Birçok uygulama, portal ve eski sistem WebP'i kabul etmez. PDF'e dönüştürmek sana her yerde açılan bir dosya verir; insanların dönüşümü istemesinin asıl nedeni genelde budur.",
    },
    {
      q: "Dönüşümde görsel kalitesi kaybolur mu?",
      a: "PDF'e dönüştürmek ek bir kayıp yaratmaz, ama web sitesinin WebP'i kaydederken zaten kaldırdığı detayı geri getiremez. PDF, kaynak görsel ne kadar iyi görünüyorsa o kadar iyi görünecektir.",
    },
    {
      q: "Görsellerim yükleniyor mu?",
      a: "Hayır. Dönüştürme kendi cihazındaki tarayıcında çalışır, bu yüzden görsellerin gizli kalır.",
    },
    {
      q: "WebP'i JPG ve PNG ile birleştirebilir miyim?",
      a: "Evet. Araç üçünü birlikte kabul eder, bu yüzden karışık görsel kaynaklarından tek bir PDF oluşturabilirsin.",
    },
    {
      q: "Araç WebP'imi okumuyor — şimdi ne yapmalıyım?",
      a: "Güncel bir tarayıcı kullan, çünkü eski olanlar WebP'i çözemez. Alternatif olarak PDF Editor mobil uygulaması dönüşümü halledebilir.",
    },
  ],
  related: [
    { label: "Görselden PDF'e — tarayıcında WebP dosyalarını birleştir", path: "/image-to-pdf" },
    { label: "PDF Sıkıştır — sonucu küçült", path: "/compress-pdf" },
    { label: "PNG PDF'e nasıl dönüştürülür", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "JPG PDF'e nasıl dönüştürülür", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "PDF Dönüştürücü", path: "/pdf-converter" },
};

export default content;
