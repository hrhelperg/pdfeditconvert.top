import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-agencies",
  h1: "Ajanslar İçin PDF İş Akışları (Sunumlar, Brifingler, Onaylar)",
  description:
    "Bir ajansın PDF zinciri — pitch sunumları, yaratıcı brifingler, müşteri onayları, teslimler — ücretsiz, gizliliği koruyan, tarayıcı tabanlı araçlarla hızlı ve öngörülebilir tutulur.",
  updated: "2026-05-29",
  intro: [
    "Ajanslar fark ettiklerinden daha fazla PDF işler. Pitch sunumları çıkar, brifingler geri gelir, yaratıcı iş onaylardan geçer, teslimler toplu gönderilir, retrolar ortak klasörlere düşer. Bunların her biri küçük bir iş parçasıdır; birlikte, ajansın üzerinde çalıştığı ana damardır.",
    "Ajansın PDF hareketlerinin çoğu tekrar eder: bir sunumu gönderilebilir bir PDF'e dönüştür, sunucu sürümünü eklerle birleştir, müşteri portalları için sıkıştır, inceleme sırasında taslakları filigranla, onayları imzala, proje kapanışında arşivle. Bilinçli bir ritim ve doğru küçük araç setiyle bu hafif kalır. Ritim yoksa saatler yer.",
    "Bu kılavuz, küçük ajanslarda işe yaradığını gördüğümüz iş akışını anlatıyor. Hiçbiri ücretli PDF yazılımı gerektirmez; çoğu, hassas müşteri materyalini hiçbir yere yüklemeden bir tarayıcı sekmesinde çalışır.",
  ],
  steps: [
    {
      title: "Pitch sunumu: dışa aktar, sıkıştır, marka kontrolü yap",
      body: "Sunum → PDF olarak dışa aktar → müşteri adayının e-postası için sıkıştır. Slayt başlıklarının karşı tarafta değişmemesi için yazı tiplerinin gömülü olduğunu doğrula. Kapağı müşteri adayının adıyla düzenle; meta veri başlığını ayarla; AdayAdi_Pitch_YYYY-AA-GG.pdf olarak adlandır.",
    },
    {
      title: "Yaratıcı brifing: girdi ve materyalleri birleştir",
      body: "Brifing belgesi artı müşteri materyalleri (logolar, örnekler, marka kitabı) → PDF Birleştir ile ekibin başvurabileceği tek bir çalışma dosyasına dönüştür. Orijinalleri sakla; birleşik sürüm hızlı başvuru içindir.",
    },
    {
      title: "Onaylar: imzalı PDF, inceleme sırasında taslak filigranı",
      body: "Taslaklar PDF'e Filigran Ekle ile TASLAK damgasıyla dolaşır. Müşteri onayladığında imzalı bir PDF onayı resmileştirir; PDF İmzala onayı kayıt altına alır. Son dosyalar filigranı kaybeder.",
    },
    {
      title: "Teslimler: çalışma dosyalarından ayrı, yüksek kaliteli PDF",
      body: "Son teslimler iç sürümlerden daha yüksek kalitede dışa aktarılır. PDF Sayfalarını Yeniden Sırala akışı doğrular; PDF Sayfalarını Çıkar gönderilmemesi gereken her şeyi atar.",
    },
    {
      title: "Müşteri portalları için sıkıştır",
      body: "Çoğu kurumsal müşteri portalı 10–25 MB'da sınırlanır. PDF Sıkıştır teslimleri belirgin bir kalite kaybı olmadan sınırın altına indirir. Gönderilen dosya sıkıştırılmış kopyadır; kaynak arşiv sıkıştırılmamışı saklar.",
    },
    {
      title: "Proje kapanışında arşivle",
      body: "Proje klasörünü /Arsiv/[Yil]/[Musteri]/[ProjeAdi]/ altına taşı. Aktif klasör ince kalır; arşiv bir sonraki pitch için vaka çalışması kaynağıdır.",
    },
  ],
  tips: [
    "Ekran için hazırlanan sunumlar, baskı için hazırlananlardan daha düşük sıkıştırmayla dışa aktarılmalı — belirgin bozulmalar ekranda daha az fark edilir.",
    "Sunum kapağını standartlaştır. Logo, müşteri adayı adı, tarih, ajans iletişimi. Pitch başına farklı yerleşimler ajans genelinde tutarsız hissettirir.",
    "Tüm taslakları filigranla. Bir taslak zincirde filigranını kaybettiği anda hesap verebilirlik bulanıklaşır.",
    "Onaylar sohbet zincirlerinde değil imzalı PDF'lerde olmalı. İleride savunulabilir bir kayda ihtiyacın olacak.",
    "Sunum kapağı, brifing şablonu ve onay formuyla önceden bir /Sablonlar/ klasörü kur. Yeniden kullanmak her zaman yeniden yaratmaktan iyidir.",
  ],
  mobileNote:
    "Ajans hayatı çekimlerde, yolda, müşteri ofislerinde telefonda geçer. PDF Editor uygulaması taslakları, imzaları ve hızlı yeniden dışa aktarmaları mobilde halleder; böylece bir onay masaya dönmeyi beklemeden telefondan onaylanabilir.",
  faq: [
    {
      q: "Bir pitch sunumu PDF'i ne kadar büyük olmalı?",
      a: "İdeal olarak 10 MB'ın altı; her zaman 25 MB'ın altı. Görsel ağırlıklı sunumlar metin ağırlıklı olanlardan daha az sıkışır; sunum büyüdükçe boyutu izle.",
    },
    {
      q: "Her pitch için tek bir şablon mu kullanmalıyız?",
      a: "Yapı için evet, yaratıcı içerik için hayır. Okuyan kişi “bu bir ajans teklifi” demeli anında; yaratıcı içerik her birini birbirinden ayırır.",
    },
    {
      q: "Onay durumunu nasıl takip ederiz?",
      a: "Klasör durumu: /taslaklar/, /onaylanan/, /gonderilen/. İmzalı onay PDF'i, bir klasörden diğerine geçişi doğrulayan belgedir.",
    },
    {
      q: "Ayrı çalışma ve teslim PDF'lerine ihtiyacımız var mı?",
      a: "Evet. Çalışma dosyaları sıkıştırılmamış ve notlarla doludur; teslimler sıkıştırılmış, temiz ve son hâlindedir. Çalışma dosyasını yanlışlıkla göndermeyin.",
    },
    {
      q: "En büyük ajans PDF hatası nedir?",
      a: "Son hâline gelmemiş bir sunumu göndermek. Taslakları filigranla, açıkça adlandır ve müşteriye sadece /onaylanan/ klasöründeki dosya gitsin.",
    },
  ],
  related: [
    { label: "İşletmeler için PDF — sözleşmeler ve iş akışları", path: "/pdf-for-business" },
    { label: "PDF Birleştir — brifing ve teslimleri bir araya getir", path: "/merge-pdf" },
    { label: "Danışmanlar için PDF iş akışları", path: "/guides/pdf-workflows-for-consultants" },
    { label: "Ekipler için en iyi PDF iş akışı", path: "/guides/best-pdf-workflow-for-teams" },
  ],
  parentHub: { label: "İşletmeler için PDF — sözleşmeler ve iş akışları", path: "/pdf-for-business" },
};

export default content;
