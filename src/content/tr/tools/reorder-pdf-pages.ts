import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "reorder-pdf-pages",
  hero: {
    eyebrow: "PDF Sayfalarını Yeniden Sırala",
    h1: "PDF sayfalarını yeniden sırala — tarayıcında.",
    highlight: "tarayıcında",
    lead: "Bir PDF ekle, her sayfayı önizle, sayfaları istediğin sıraya taşı ve yeniden düzenlenmiş dosyayı indir. Hiçbir şey bir sunucuya gönderilmez.",
  },
  privacyNote:
    "Dosyan tarayıcında yerel olarak işlenir, sunucularımıza gönderilmez. Hiçbir şey cihazından çıkmaz.",
  howTo: {
    heading: "PDF sayfaları nasıl yeniden sıralanır",
    steps: [
      {
        title: "PDF'ini ekle",
        body: "Bir PDF'i sürükle bırak ya da cihazından seçmek için tıkla.",
      },
      {
        title: "Önizlemeleri incele",
        body: "Her sayfa küçük resim olarak gösterilir, böylece neyi taşıdığını tam olarak görürsün.",
      },
      {
        title: "Sayfaları taşı",
        body: "Her sayfadaki yukarı/aşağı oklarını kullanarak belgede daha öne ya da daha sona taşı.",
      },
      {
        title: "Oluştur ve indir",
        body: "Yeniden Sırala'ya tıkla. Yeniden düzenlenmiş PDF yerel olarak oluşturulur ve otomatik olarak iner.",
      },
    ],
  },
  useCases: {
    heading: "Yeniden sıralama ne zaman işe yarar",
    items: [
      {
        title: "Tarama sırasını düzelt",
        body: "Telefon ve tarayıcı uygulamaları sayfaları çoğu zaman sırasız yakalar — paylaşmadan önce düzelt.",
      },
      {
        title: "Bir kapak ya da eki taşı",
        body: "Bir kapak sayfasını başa çek ya da destekleyici materyali sona it.",
      },
      {
        title: "Birleştirilmiş bir dosyayı yeniden düzenle",
        body: "Belgeleri birleştirdikten sonra sayfaları tam ihtiyacın olan okuma sırasına yerleştir.",
      },
      {
        title: "Baskıya hazırla",
        body: "Kitapçıklar, dağıtım materyalleri ya da çift taraflı baskı için sayfaları düzenle.",
      },
    ],
  },
  limitations: {
    heading: "Dürüst sınırlar",
    items: [
      {
        title: "Şifreyle korunan PDF'ler",
        body: "Şifrelenmiş dosyalar tarayıcıda açılamaz. Önce kilidini kaldır ya da PDF Editor uygulamasını kullan.",
      },
      {
        title: "Çok büyük PDF'ler",
        body: "Her sayfa için küçük resim oluşturmak bellek kullanır. Yüzlerce sayfa yavaş olabilir ya da tarayıcı sınırlarına takılabilir.",
      },
      {
        title: "Küçük resimler biraz zaman alır",
        body: "Önizlemeler cihazında sayfa sayfa oluşturulur, bu yüzden büyük PDF'ler yeniden sıralamaya başlamadan önce birkaç saniye ister.",
      },
    ],
  },
  related: [
    { label: "PDF Birleştir", path: "/merge-pdf" },
    { label: "PDF Böl", path: "/split-pdf" },
    { label: "PDF Döndür", path: "/rotate-pdf" },
    { label: "PDF Sayfalarını Çıkar", path: "/extract-pdf-pages" },
  ],
  faq: [
    {
      q: "Dosyalarım bir sunucuya mı gönderiliyor?",
      a: "Hayır. PDF tamamen tarayıcında oluşturulur ve yeniden birleştirilir. Dosyan cihazından hiç çıkmaz.",
    },
    {
      q: "Sayfaları sürükleyerek mi sıralıyorum?",
      a: "Yeniden sıralama her sayfada net yukarı/aşağı düğmeleriyle yapılır. Bu, mobilde ve masaüstünde güvenilir çalışır, küçük sürükleme tutamaçlarıyla uğraşmazsın.",
    },
    {
      q: "Sayfa içeriği ya da kalitesi değişir mi?",
      a: "Hayır. Sayfalar olduğu gibi kopyalanır — sadece sırası değişir. Metin seçilebilir kalır.",
    },
    {
      q: "Eklemeden sonra neden biraz bekliyorum?",
      a: "Her sayfa, neyi taşıdığını görebilmen için cihazında yerel olarak bir önizleme küçük resmine dönüştürülür. Büyük PDF'ler biraz daha uzun sürer.",
    },
    {
      q: "Şifreyle korunan bir PDF'i yeniden sıralayabilir miyim?",
      a: "Tarayıcıda hayır. Önce şifreyi kaldır ya da korumalı dosyaları destekleyen PDF Editor uygulamasını kullan.",
    },
  ],
  appCta: {
    heading: "Yolda PDF araçlarına mı ihtiyacın var?",
    sub: "iPhone ve Android için PDF Editor, PDF'lerini telefonundan yeniden sıralar, birleştirir ve imzalar.",
  },
};

export default content;
