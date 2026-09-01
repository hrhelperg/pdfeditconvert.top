import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "word-to-pdf",
  hero: {
    eyebrow: "Word'den PDF'e",
    h1: "Word'ü PDF'e dönüştür — tarayıcında.",
    highlight: "tarayıcında",
    lead: "Bir .docx ya da .txt dosyasını temiz, paylaşılabilir bir PDF'e çevir. Her şey cihazında çalışır — belgen cihazından hiç çıkmaz.",
  },
  privacyNote:
    "Dosyan tarayıcında yerel olarak işlenir, sunucularımıza gönderilmez. Hiçbir şey cihazından çıkmaz.",
  howTo: {
    heading: "Word PDF'e nasıl dönüştürülür",
    steps: [
      {
        title: "Belgeni ekle",
        body: "Bir .docx ya da .txt dosyasını sürükle bırak ya da seçmek için tıkla.",
      },
      {
        title: "Dönüştür",
        body: "PDF'e Dönüştür'e tıkla. Metin okunur ve tarayıcında yerel olarak bir PDF'e yerleştirilir.",
      },
      {
        title: "İndir",
        body: "Temiz bir A4 PDF otomatik olarak iner.",
      },
      {
        title: "Paylaş",
        body: "Her yerde aynı görünen ve yanlışlıkla düzenlenemeyen bir format gönder.",
      },
    ],
  },
  useCases: {
    heading: "Bu araç ne zaman doğru seçim",
    items: [
      {
        title: "Düzenlenemeyen bir kopya gönder",
        body: "Alıcıların yanlışlıkla değiştiremeyeceği bir taslağı PDF olarak paylaş.",
      },
      {
        title: "Bir başvuru gönder",
        body: "Birçok portal .docx değil PDF ister — yüklemeden önce dönüştür.",
      },
      {
        title: "Düz notları arşivle",
        body: ".txt günlüklerini ya da notlarını düzenli, sayfalanmış bir PDF'e çevir.",
      },
      {
        title: "Baskıya hazır teslim",
        body: "Basit bir belgeden tutarlı bir A4 PDF üret.",
      },
    ],
  },
  limitations: {
    heading: "Dürüst sınırlar",
    items: [
      {
        title: "Metin odaklı dönüşüm",
        body: "Belge metnini çıkarıp temiz bir PDF'e yeniden akıtırız. Orijinal yazı tipleri, görseller, tablolar ve .docx'in tam boşluk ayarları yeniden oluşturulmaz.",
      },
      {
        title: "Eski .doc desteklenmiyor",
        body: "Eski ikili .doc dosyaları tarayıcıda ayrıştırılamaz. Önce .docx olarak kaydet.",
      },
      {
        title: "Alışılmadık karakterler sadeleştirilir",
        body: "Yerleşik PDF yazı tipi Latin metni kapsar; bazı özel karakterler dönüşümün asla başarısız olmaması için sadeleştirilir.",
      },
    ],
  },
  related: [
    { label: "PDF'ten Word'e — tersi", path: "/pdf-to-word" },
    { label: "Görselden PDF'e", path: "/image-to-pdf" },
    { label: "PDF Birleştir", path: "/merge-pdf" },
    { label: "Tüm ücretsiz PDF araçları", path: "/pdf-tools" },
    {
      label: "Kılavuz: Word nasıl PDF'e dönüştürülür",
      path: "/guides/how-to-convert-word-to-pdf",
    },
  ],
  faq: [
    {
      q: "Dosyam bir sunucuya mı gönderiliyor?",
      a: "Hayır. Dönüşüm tamamen tarayıcında çalışır. Belgen cihazından hiç çıkmaz.",
    },
    {
      q: "PDF, Word dosyamla birebir aynı mı görünecek?",
      a: "Hayır — ve aksini iddia etmeyiz. Bu temiz, metin odaklı bir dönüşümdür: .docx'teki yazı tipleri, görseller, tablolar ve tam boşluk ayarları yeniden oluşturulmaz.",
    },
    {
      q: "Hangi dosyalar destekleniyor?",
      a: "Güncel Word .docx ve düz .txt. Eski ikili .doc desteklenmiyor — önce .docx olarak kaydet.",
    },
    {
      q: "Boyut sınırı var mı?",
      a: "Dosya başına 100 MB'a kadar, çünkü her şey tarayıcının belleğinde işlenir.",
    },
    {
      q: "PDF'i tekrar Word'e çevirebilir miyim?",
      a: "Evet — metni düzenlenebilir bir .docx'e geri almak için PDF'ten Word'e aracını kullan.",
    },
  ],
  appCta: {
    heading: "Yolda PDF araçlarına mı ihtiyacın var?",
    sub: "iPhone ve Android için PDF Editor, belgeleri telefonundan dönüştürür, imzalar ve paylaşır.",
  },
};

export default content;
