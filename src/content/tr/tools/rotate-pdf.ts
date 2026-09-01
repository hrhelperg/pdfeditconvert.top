import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "rotate-pdf",
  hero: {
    eyebrow: "PDF Döndür",
    h1: "Yan yatmış PDF sayfalarını düzelt — tarayıcında.",
    highlight: "tarayıcında",
    lead: "Tüm sayfaları ya da seçtiğin sayfaları döndür, sonra düzeltilmiş PDF'i indir — hepsi tarayıcında.",
  },
  privacyNote:
    "Dosyan tarayıcında yerel olarak işlenir, sunucularımıza gönderilmez. Hiçbir şey cihazından çıkmaz.",
  howTo: {
    heading: "PDF nasıl döndürülür",
    steps: [
      {
        title: "PDF'ini ekle",
        body: "Tek bir PDF'i sürükle bırak ya da seçmek için tıkla.",
      },
      {
        title: "Bir açı seç",
        body: "90°, 180° ya da 270° (saat yönünde) seç.",
      },
      {
        title: "Hangi sayfaları seç",
        body: "Her sayfayı döndür ya da sayfa numaralarını gir (örn. 1,3-5).",
      },
      {
        title: "Döndür ve indir",
        body: "Döndür'e tıkla. PDF'i yeni yönlendirmeyle yerel olarak yeniden oluştururuz.",
      },
    ],
  },
  useCases: {
    heading: "Döndürme ne zaman doğru seçim",
    items: [
      {
        title: "Telefon taramaları yan geldi",
        body: "Kamera rulosu taramaları genelde yatay kaydedilir — tek tıkla çevir.",
      },
      {
        title: "Karışık yönlü raporlar",
        body: "Dikey bir raporun içine karışan geniş tablolu yatay sayfalar mı var? Yeniden taramadan düzelt.",
      },
      {
        title: "Pasaport ve kimlik kartları",
        body: "Bir devlet portalı şikayet etmeden önce her sayfanın aynı yönde okunmasını sağla.",
      },
      {
        title: "Makbuzlar ve faturalar",
        body: "Bir yığın makbuz fotoğrafını birleştirmeden önce tek bir yönde okunabilir hale getir.",
      },
    ],
  },
  limitations: {
    heading: "Sınırlar",
    items: [
      {
        title: "Şifreyle korunan PDF'ler",
        body: "Kilitli dosyalar tarayıcıda döndürülemez. Önce kilidini kaldır ya da PDF Editor uygulamasını kullan.",
      },
      {
        title: "Sayfa başına özel açılar",
        body: "Bu araç aynı anda tek bir açı uygular. Karışık açılar için farklı sayfa seçimleriyle iki kez çalıştır.",
      },
      {
        title: "Notlar ve form alanları",
        body: "Döndürme, üzerine binen katmanları görsel olarak kaydırabilir. Mobil uygulama notları daha düzgün işler.",
      },
    ],
  },
  related: [
    { label: "PDF Birleştir", path: "/merge-pdf" },
    { label: "PDF Böl", path: "/split-pdf" },
    { label: "PDF'e Filigran Ekle", path: "/add-watermark-to-pdf" },
    { label: "PDF Sayfalarını Yeniden Sırala", path: "/reorder-pdf-pages" },
    { label: "Tüm ücretsiz PDF araçları", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Dosyam bir sunucuya mı gönderiliyor?",
      a: "Hayır. Döndürme tamamen tarayıcında çalışır; hiçbir şey cihazından çıkmaz.",
    },
    {
      q: "Sadece bazı sayfaları döndürebilir miyim?",
      a: "Evet. Sayfa seçim alanını kullan, örn. 1,3-5,9.",
    },
    {
      q: "Döndürme kaliteyi düşürür mü?",
      a: "Hayır. Sayfalar bayt bayt korunur; sadece döndürme meta verisini ayarlarız.",
    },
    {
      q: "Şifreyle korunan bir PDF'i döndürebilir miyim?",
      a: "Tarayıcıda hayır. Önce şifreyi kaldır ya da PDF Editor uygulamasını kullan.",
    },
  ],
  appCta: {
    heading: "Telefonundan da döndür.",
    sub: "iPhone ve Android için PDF Editor, PDF'leri çevrimdışı düzenler, döndürür ve imzalar.",
  },
};

export default content;
