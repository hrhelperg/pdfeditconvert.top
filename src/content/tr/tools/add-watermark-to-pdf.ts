import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "add-watermark-to-pdf",
  hero: {
    eyebrow: "PDF'e Filigran Ekle",
    h1: "Bir PDF'in her sayfasına metin filigranı ekle.",
    highlight: "her sayfasına",
    lead: "PDF'ini paylaşmadan önce basit bir metin filigranı ekle — konumu, saydamlığı, yazı tipi boyutunu ve döndürmeyi seç.",
  },
  privacyNote:
    "Dosyan tarayıcında yerel olarak işlenir, sunucularımıza gönderilmez. Hiçbir şey cihazından çıkmaz.",
  howTo: {
    heading: "Filigran nasıl eklenir",
    steps: [
      {
        title: "PDF'ini ekle",
        body: "Tek bir PDF'i sürükle bırak ya da seçmek için tıkla.",
      },
      {
        title: "Filigran metnini yaz",
        body: "En iyi sonuç için ~40 karaktere kadar. Örnekler: GİZLİ, TASLAK, Örnek.",
      },
      {
        title: "Saydamlığı ve açıyı ayarla",
        body: "İnce görünüm için düşük saydamlık, belirgin görünüm için yüksek saydamlık seç. 45° çoğu yerleşim için uygundur.",
      },
      {
        title: "İndir",
        body: "PDF'i filigranla birlikte her sayfada yerel olarak yeniden oluştururuz.",
      },
    ],
  },
  useCases: {
    heading: "Filigranlar ne zaman işe yarar",
    items: [
      {
        title: "İncelemedeki taslaklar",
        body: "Kafa karışıklığını önlemek için dağıtmadan önce belgeleri TASLAK olarak işaretle.",
      },
      {
        title: "Gizli belgeler",
        body: "Hassas sözleşmeleri ya da mali belgeleri paylaşmadan önce GİZLİ damgası vur.",
      },
      {
        title: "Örnek materyaller",
        body: "Portföy örneklerini izinsiz yeniden kullanılamasın diye filigranla.",
      },
      {
        title: "Sadece dahili belgeler",
        body: "Dış dağıtım için tasarlanmamış belgeleri işaretle.",
      },
    ],
  },
  limitations: {
    heading: "Sınırlar",
    items: [
      {
        title: "Sadece metin filigranı",
        body: "Bu araç metin damgalar. Görsel ya da logo filigranları için PDF Editor uygulamasını kullan.",
      },
      {
        title: "Sadece standart yazı tipleri",
        body: "Çıktının taşınabilir kalması için yerleşik Helvetica yazı tipini kullanırız. Özel yazı tipleri gömülmez.",
      },
      {
        title: "Filigranlar kaldırılabilir",
        body: "Bir filigran yasal bir koruma değildir. Gelişigüzel kötüye kullanımı caydırır, kararlı bir düzenlemeyi değil.",
      },
    ],
  },
  related: [
    { label: "PDF Birleştir", path: "/merge-pdf" },
    { label: "PDF Böl", path: "/split-pdf" },
    { label: "PDF Döndür", path: "/rotate-pdf" },
    { label: "Tüm ücretsiz PDF araçları", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Dosyam bir sunucuya mı gönderiliyor?",
      a: "Hayır. Filigran ekleme tamamen tarayıcında çalışır; hiçbir şey cihazından çıkmaz.",
    },
    {
      q: "Farklı bir yazı tipi kullanabilir miyim?",
      a: "Bu araçta hayır — çıktının taşınabilir olması için Helvetica kullanırız. Özel yazı tipleri için PDF Editor uygulamasını kullan.",
    },
    {
      q: "Filigran her sayfaya mı ekleniyor?",
      a: "Evet. Aynı metin her sayfada çapraz olarak ortalanır.",
    },
    {
      q: "Bir filigran kaldırılabilir mi?",
      a: "Doğru araçlara sahip biri tarafından, evet. Bir filigran gelişigüzel kötüye kullanımı caydırır ama bir güvenlik özelliği değildir.",
    },
  ],
  appCta: {
    heading: "Görsel ya da logo filigranına mı ihtiyacın var?",
    sub: "iPhone ve Android için PDF Editor, özel yazı tiplerini, görselleri ve sayfa başına yerleşimi destekler.",
  },
};

export default content;
