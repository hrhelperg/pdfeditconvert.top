import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-android",
  h1: "Android'de PDF Nasıl Düzenlenir? (2026 Rehberi)",
  description:
    "Android'de PDF'te metni değiştir, sayfa ekle ve belgeleri imzala. PDF Editor uygulamasıyla net, adım adım talimatlar.",
  updated: "2026-05-11",
  intro: [
    "Android, kutudan çıktığı haliyle PDF'leri makul ölçüde iyi yönetir — ama sadece görüntüleme için. Bir yazım hatasını düzeltmen, bir görseli değiştirmen ya da sayfaları yeniden sıralaman gerektiği an, yerleşik görüntüleyici sınırına dayanır ve genelde çözüm dosyayı bir siteye yüklemek olur. Daha hızlı bir yol var: telefonunda çalışan yerel bir düzenleyici.",
    "Bu rehber, Android'de PDF Editor uygulamasını kullanıyor. Aynı akış Android çalışma zamanına sahip tabletlerde ve Chromebook'larda da işliyor. Android 9 veya üzeri gerekiyor. Çoğu adım iPhone akışıyla aynı, ama Android'in Depolama Erişim Çerçevesi (Storage Access Framework) dosyaları içeri aktarma ve kaydetme şeklini değiştiriyor.",
    "Her adım nereye dokunacağını gösteriyor, telefon ve tablet arasındaki küçük farklar da dahil. Android'in iOS'tan ayrıldığı noktaları — dosya seçici, Drive entegrasyonu, geri tuşu — ayrıca belirteceğiz.",
  ],
  steps: [
    {
      title: "PDF Editor'ı Google Play'den yükle",
      body: "\"PDF Editor\" diye ara ve hrhelperg tarafından yayınlanan uygulamayı seç. Yükle ve aç. Hesap gerekmiyor.",
    },
    {
      title: "Bir PDF aç",
      body: "Ana ekrandaki + düğmesine dokun. Android'in Depolama Erişim Çerçevesi iletişim kutusu açılır — PDF'i Dosyalar, Google Drive, OneDrive, Dropbox ya da bağlı başka bir bulut sağlayıcısından seç. Gmail'de veya herhangi bir uygulamada bir PDF'e dokunup açıcı olarak PDF Editor'ı da seçebilirsin.",
    },
    {
      title: "Metni düzenle",
      body: "Bir paragrafa dokun. Mavi bir düzenleme kutusu belirir. Metni değiştirmek veya eklemek için yaz. Uygulama mevcut yazı tipini ve rengi koruduğu için yerleşim bozulmaz.",
    },
    {
      title: "Bir görseli değiştir",
      body: "Bir görsele dokunarak seç. Değiştir simgesine dokun ve galerinden veya dosyalarından yeni bir görsel seç. En-boy oranını bozmadan boyutlandırmak için köşelerden sürükle.",
    },
    {
      title: "Yeni bir sayfa ekle",
      body: "Küçük resimler için sayfalar simgesine dokun. Boş bir sayfa eklemek ya da bir görseli yeni sayfa olarak içeri aktarmak için küçük resimler arasındaki + düğmesini kullan.",
    },
    {
      title: "Form alanlarını doldur",
      body: "Etkileşimli alanlara sahip PDF'lerde bu alanlar otomatik olarak vurgulanır. Bir alana dokun, yaz ve Bitti'ye dokun. Klavye alan türüne (metin, sayı, tarih) göre uyum sağlar.",
    },
    {
      title: "Belgeyi imzala",
      body: "İmzala aracına dokun, parmağınla ya da dijital kalemle çiz ve imzayı yerleştir. Sonraki kullanımlar için kaydet — tekrar çizmen gerekmez.",
    },
    {
      title: "Yeni bir dosya olarak kaydet",
      body: "Bitti'ye, sonra hem orijinali hem düzenlenen kopyayı saklamak için \"Farklı Kaydet\"e dokun. Android'in dosya seçicisi Dosyalar'a, Drive'a ya da bağladığın herhangi bir bulut sağlayıcısına kaydetmene olanak tanır.",
    },
  ],
  tips: [
    "Büyük tabletlerde bölünmüş ekranı etkinleştirip iki PDF'i yan yana açarak hızlıca karşılaştırma yapabilirsin.",
    "S Pen'in varsa düzenleme modunda girişi \"Sadece kalem\"e çevir — bu şekilde avuç içi reddi çok daha iyi çalışır.",
    "Kaydetmeden önce açıklayıcı dosya adları kullan — sonradan arama yaparken \"Sozlesme-Imzali-2026-05-11.pdf\", \"Document(1).pdf\"ten çok daha işe yarar.",
    "Bir kez kullandıktan sonra üzerine uzun basarak PDF Editor'ı paylaşım menüsüne sabitle — bir dahaki sefere en üstte görünür.",
    "Eski bir cihazda düzenleme yavaş hissettiriyorsa arka plandaki diğer uygulamaları kapat; PDF işleme boş RAM'den fayda görür.",
  ],
  mobileNote:
    "Android'in Depolama Erişim Çerçevesi dosya açmanın doğru yolu — dosyayı uygulamanın kendi deposuna kopyalamadan kalıcı erişim sağlar. Bu da düzenlemelerin bir kopyaya değil, doğrudan Drive'a veya OneDrive'a kaydedildiği anlamına gelir.",
  faq: [
    {
      q: "Daha eski Android sürümlerinde çalışıyor mu?",
      a: "Resmi olarak Android 9 ve üzeri. Daha eski cihazlar uygulamayı yükleyebilir ama en yeni özellikleri (gelişmiş OCR, tarama filtreleri) alamaz.",
    },
    {
      q: "Şifre korumalı PDF'leri açabilir miyim?",
      a: "Evet. İstendiğinde şifreyi gir. Uygulama düzenleme sırasında belgeyi şifreli tutar ve istersen kaydederken yeniden şifreler.",
    },
    {
      q: "Google Drive entegrasyonu nasıl çalışıyor?",
      a: "Sistemin dosya seçicisi üzerinden Drive'dan doğrudan aç ve kaydet. Drive'a geri kaydedilen düzenlemeler tercihine bağlı olarak orijinalin üzerine yazar ya da yeni bir dosya olarak kaydedilir.",
    },
    {
      q: "Düzenlemeler bilgisayarıma senkronize olur mu?",
      a: "Bir bulut sağlayıcısına (Drive, OneDrive, Dropbox) kaydettiysen düzenlenen dosya diğer cihazlarına otomatik olarak senkronize olur. Sadece cihaza kaydedilenler ise telefonda kalır.",
    },
    {
      q: "Çevrimdışı çalışıyor mu?",
      a: "Evet. Düzenleme tamamen cihaz üzerinde gerçekleşir. Bulut senkronizasyonu sadece bir buluta kaydettiğinde devreye girer.",
    },
  ],
  related: [
    { label: "PDF Editor — genel bakış", path: "/pdf-editor" },
    {
      label: "iPhone'da PDF nasıl düzenlenir",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "PDF nasıl sıkıştırılır", path: "/guides/how-to-compress-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
