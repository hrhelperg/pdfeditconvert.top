import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "image-to-pdf",
  hero: {
    eyebrow: "Görselden PDF'e",
    h1: "JPG, PNG ve WebP görsellerini tek bir PDF'e dönüştür.",
    highlight: "tek bir PDF'e",
    lead: "JPG, PNG ya da WebP görsellerini ekle ve tek bir PDF'te birleştir. Sayfaları yeniden sırala, sonra indir — görsellerin cihazında kalır.",
  },
  privacyNote:
    "Dosyaların tarayıcında yerel olarak işlenir, sunucularımıza gönderilmez. Hiçbir şey cihazından çıkmaz.",
  howTo: {
    heading: "Görselden PDF'e aracı nasıl kullanılır",
    steps: [
      {
        title: "Görsellerini ekle",
        body: "JPG, PNG ya da WebP dosyalarını sürükle bırak ya da cihazından seçmek için tıkla.",
      },
      {
        title: "Gerekirse sırasını değiştir",
        body: "Sayfaları doğru sıraya koymak için her satırdaki yukarı ve aşağı oklarını kullan.",
      },
      {
        title: "PDF'i oluştur",
        body: "PDF Oluştur'a tıkla. Görsellerin, her görselin boyutuna uyacak şekilde tek bir belgenin sayfaları olur.",
      },
      {
        title: "İndir",
        body: "Oluşturulan PDF otomatik olarak iner. Kaydettikten sonra yeniden adlandırabilirsin.",
      },
    ],
  },
  useCases: {
    heading: "Bu araç ne zaman işe yarar",
    items: [
      {
        title: "Fotoğraflı makbuzlar ve giderler",
        body: "Bir ayın makbuzlarını muhasebeciye göndermeden önce tek bir PDF'te topla.",
      },
      {
        title: "Kimlik ve pasaport taramaları",
        body: "Ön ve arka yüzü, bir devlet portalının kabul edeceği tek bir belgede birleştir.",
      },
      {
        title: "Ekran görüntülerini bir rapora dönüştür",
        body: "Bir dizi arayüz ekran görüntüsünü düzenli bir inceleme belgesinde topla.",
      },
      {
        title: "Beyaz tahta fotoğrafları",
        body: "Bir toplantıdaki fotoğraf dizisini ekip üyelerinin göz atabileceği tek bir belgeye dönüştür.",
      },
    ],
  },
  limitations: {
    heading: "Sınırlar",
    items: [
      {
        title: "Sadece JPG, PNG ve WebP",
        body: "HEIC, AVIF, GIF ve TIFF tarayıcıda desteklenmez. Önce dönüştür ya da mobil uygulamayı kullan.",
      },
      {
        title: "Tarayıcı belleği",
        body: "Çok büyük gruplar (yüzlerce yüksek çözünürlüklü fotoğraf) eski cihazları yavaşlatabilir.",
      },
      {
        title: "OCR yok",
        body: "Görsellerin içindeki metin çıkarılmaz. Aranabilir PDF'ler için PDF Editor uygulamasıyla tara.",
      },
    ],
  },
  related: [
    { label: "PDF Birleştir", path: "/merge-pdf" },
    { label: "PDF'ten Görsele", path: "/pdf-to-images" },
    { label: "Tüm ücretsiz PDF araçları", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Görsellerim bir yere mi gönderiliyor?",
      a: "Hayır. Her şey tarayıcında çalışır. Görsellerin cihazından hiç çıkmaz.",
    },
    {
      q: "Dosya boyutu sınırı var mı?",
      a: "Evet — tarayıcının hızlı kalması için her dosya 100 MB ile sınırlıdır. PDF Editor mobil uygulaması donanım hızlandırmasıyla daha büyük grupları işler.",
    },
    {
      q: "Sayfa boyutunu değiştirebilir miyim?",
      a: "Her sayfa, görselinin piksel boyutlarıyla eşleşir, böylece en-boy oranı doğru kalır. Standart A4 çıktı için PDF Editor uygulamasını kullan.",
    },
    {
      q: "Bu iPhone ve Android'de çalışır mı?",
      a: "Evet, herhangi bir güncel mobil tarayıcıda. Sık kullanım için PDF Editor uygulaması daha hızlıdır ve kamera rulondan doğrudan HEIC fotoğraflarını destekler.",
    },
  ],
  appCta: {
    heading: "Bunu her hafta telefonunda mı istiyorsun?",
    sub: "iPhone ve Android için PDF Editor, PDF'leri çevrimdışı tarar, düzenler ve imzalar.",
  },
};

export default content;
