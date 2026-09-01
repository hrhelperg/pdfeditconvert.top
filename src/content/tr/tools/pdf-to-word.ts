import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-word",
  hero: {
    eyebrow: "PDF'ten Word'e",
    h1: "PDF'i düzenlenebilir Word'e dönüştür — tarayıcında.",
    highlight: "tarayıcında",
    lead: "PDF'teki metni Word, Google Docs ya da Pages'te düzenleyebileceğin bir .docx dosyasına aktar. Dürüst bir metin dönüşümü — sahte 'kusursuz yerleşim' vaatleri yok.",
  },
  privacyNote:
    "Dosyan tarayıcında yerel olarak işlenir, sunucularımıza gönderilmez. Hiçbir şey cihazından çıkmaz.",
  howTo: {
    heading: "PDF Word'e nasıl dönüştürülür",
    steps: [
      {
        title: "PDF'ini ekle",
        body: "Metin tabanlı bir PDF'i sürükle bırak ya da seçmek için tıkla.",
      },
      {
        title: "Dönüştür",
        body: "Word'e Dönüştür'e tıkla. Seçilebilir metin tarayıcında yerel olarak çıkarılır.",
      },
      {
        title: "İndir",
        body: "Bir .docx dosyası otomatik olarak iner — istediğin yerde aç ve düzenle.",
      },
      {
        title: "Düzenini toparla",
        body: "Başlıkları ve yerleşimi kendi düzenleyicinde yeniden uygula. Metin artık senin, yeniden yapılandırabilirsin.",
      },
    ],
  },
  useCases: {
    heading: "Bu araç ne zaman doğru seçim",
    items: [
      {
        title: "Sözleşme metnini yeniden kullan",
        body: "Bir PDF sözleşmesindeki maddeleri yeniden yazmak yerine düzenlenebilir bir taslağa aktar.",
      },
      {
        title: "Bir raporu yeniden değerlendir",
        body: "Bir PDF raporunun gövde metnini yeniden yapılandırabileceğin bir belgeye taşı.",
      },
      {
        title: "Alıntı yap ve referans göster",
        body: "Not, özet ya da alıntılar için pasajları elle yazmadan çıkar.",
      },
      {
        title: "Kaynağı elinde olmayan bir PDF'i kurtar",
        body: "Orijinal .docx dosyası kaybolduğunda düzenlenebilir metni geri kazan.",
      },
    ],
  },
  limitations: {
    heading: "Dürüst sınırlar",
    items: [
      {
        title: "Yerleşim korunmaz",
        body: "Bu araç sadece metni çıkarır. Sütunlar, tablolar, tam boşluk ayarları, yazı tipleri ve görseller yeniden oluşturulmaz — biçimlendirmeyi kendi düzenleyicinde yeniden uygularsın.",
      },
      {
        title: "Taranmış PDF'ler çalışmaz",
        body: "Sadece görselden oluşan / taranmış PDF'lerde metin katmanı yoktur. Tarayıcıda OCR yok; taramalar için PDF Editor uygulamasını kullan.",
      },
      {
        title: "Karmaşık belgeler düzenleme ister",
        body: "Yoğun tasarlanmış PDF'ler (çok sütunlu, dipnotlu) okunabilir bir metin akışı olarak çıkar; üzerinde biraz düzenleme yapman gerekir.",
      },
    ],
  },
  related: [
    { label: "Word'den PDF'e — tersi", path: "/word-to-pdf" },
    { label: "PDF'ten Görsele", path: "/pdf-to-images" },
    { label: "Tüm ücretsiz PDF araçları", path: "/pdf-tools" },
    { label: "PDF mi DOCX mi — hangisini kullanmalısın", path: "/compare/pdf-vs-docx" },
    {
      label: "Kılavuz: PDF nasıl Word'e dönüştürülür",
      path: "/guides/how-to-convert-pdf-to-word",
    },
  ],
  faq: [
    {
      q: "Dosyam bir sunucuya mı gönderiliyor?",
      a: "Hayır. Metin çıkarma tamamen tarayıcında çalışır. PDF'in cihazından hiç çıkmaz.",
    },
    {
      q: "Word dosyası PDF ile birebir aynı mı görünecek?",
      a: "Hayır — ve aksini iddia etmeyiz. Bu pratik bir metin dönüşümüdür. Yerleşim, yazı tipleri, sütunlar ve görseller korunmaz; biçimlendirmeyi kendi düzenleyicinde yeniden uygularsın.",
    },
    {
      q: "'Metin bulunamadı' diyor, neden?",
      a: "PDF'in muhtemelen metin katmanı olmayan bir tarama ya da görsel dosyası. Tarayıcı araçları OCR yapamaz; PDF Editor uygulaması yapabilir.",
    },
    {
      q: "Hangi formatta dosya alıyorum?",
      a: "Microsoft Word, Google Docs, Pages ve LibreOffice'te açılan standart bir .docx dosyası.",
    },
    {
      q: "Geri dönüştürebilir miyim?",
      a: "Evet — düzenlediğin .docx dosyasını tekrar PDF'e çevirmek için Word'den PDF'e aracını kullan.",
    },
  ],
  appCta: {
    heading: "Yolda PDF araçlarına mı ihtiyacın var?",
    sub: "iPhone ve Android için PDF Editor, belgeleri telefonundan dönüştürür, düzenler ve imzalar.",
  },
};

export default content;
