import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "split-pdf",
  hero: {
    eyebrow: "PDF Böl",
    h1: "PDF'ten sayfa çıkar — gizli biçimde, tarayıcında.",
    highlight: "tarayıcında",
    lead: "Bir PDF ekle ve dışa aktarmak istediğin sayfa aralığını seç. 1-3,5,8-10 gibi aralıklar kullan — dosyan cihazında kalır.",
  },
  privacyNote:
    "Dosyan tarayıcında yerel olarak işlenir, sunucularımıza gönderilmez. Hiçbir şey cihazından çıkmaz.",
  howTo: {
    heading: "PDF nasıl bölünür",
    steps: [
      {
        title: "PDF'ini ekle",
        body: "Tek bir PDF'i sürükle bırak ya da seçmek için tıkla.",
      },
      {
        title: "Sayfa aralıklarını gir",
        body: "Sayfaları ve aralıkları virgülle ayırarak yaz. Örnek: 1-3,5,8-10.",
      },
      {
        title: "Böl",
        body: "Sayfaları Çıkar'a tıkla. Sadece o sayfaları içeren yeni bir PDF'i yerel olarak oluştururuz.",
      },
      {
        title: "İndir",
        body: "Yeni PDF otomatik olarak iner. Kaydettikten sonra yeniden adlandır.",
      },
    ],
  },
  useCases: {
    heading: "Bölme ne zaman doğru seçim",
    items: [
      {
        title: "Sadece ilgili sayfaları gönder",
        body: "Belgenin tamamı yerine sadece önemli olan sözleşme maddesini paylaş.",
      },
      {
        title: "Taranmış bir grubu ayır",
        body: "Çok belgeli bir taramayı tekrar ayrı dosyalara böl.",
      },
      {
        title: "Bir rapordan tek bir sayfa al",
        body: "Dosyanın geri kalanını göstermeden bir grafiği ya da tabloyu çıkar.",
      },
      {
        title: "Daha temiz bir ek oluştur",
        body: "E-posta göndermeden önce kapak sayfalarını, boş sayfaları ya da ekleri kırp.",
      },
    ],
  },
  limitations: {
    heading: "Sınırlar",
    items: [
      {
        title: "Şifreyle korunan PDF'ler",
        body: "Kilitli dosyalar tarayıcıda bölünemez. Önce kilidini kaldır ya da PDF Editor uygulamasını kullan.",
      },
      {
        title: "Çok büyük dosyalar",
        body: "Birkaç yüz megabaytı aşan belgelerde tarayıcı bellek yetersizliğine düşebilir.",
      },
      {
        title: "Aralık başına ayrı çıktı yok",
        body: "Bu araç seçilen sayfaları içeren tek bir birleşik PDF verir. Birden fazla çıktı dosyası için işlemi iki kez çalıştır.",
      },
    ],
  },
  related: [
    { label: "PDF Birleştir — tersi", path: "/merge-pdf" },
    { label: "PDF Döndür", path: "/rotate-pdf" },
    { label: "PDF'ten Görsele", path: "/pdf-to-images" },
    { label: "PDF Sıkıştır", path: "/compress-pdf" },
    { label: "PDF Sayfalarını Çıkar", path: "/extract-pdf-pages" },
    { label: "PDF Sayfalarını Yeniden Sırala", path: "/reorder-pdf-pages" },
    { label: "Tüm ücretsiz PDF araçları", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Dosyalarım bir sunucuya mı gönderiliyor?",
      a: "Hayır. Bölme tamamen tarayıcında çalışır; dosyan cihazından hiç çıkmaz.",
    },
    {
      q: "Sayfa aralığı sözdizimi nasıl?",
      a: "Virgülle ayrılmış sayfalar ve aralıklar. Örnek: 1-3,5,8-10 ifadesi 1, 2, 3, 5, 8, 9 ve 10. sayfaları tutar.",
    },
    {
      q: "Şifreyle korunan bir PDF'i bölebilir miyim?",
      a: "Tarayıcıda hayır. Önce şifreyi kaldır ya da PDF Editor uygulamasını kullan.",
    },
    {
      q: "Çıktı orijinal kaliteyi korur mu?",
      a: "Evet — sayfalar bayt bayt kopyalanır. Yeniden oluşturma yok, kalite kaybı yok.",
    },
  ],
  appCta: {
    heading: "Yolda mı bölüyorsun?",
    sub: "iPhone ve Android için PDF Editor, PDF'lerini telefonundan böler ve birleştirir.",
  },
};

export default content;
