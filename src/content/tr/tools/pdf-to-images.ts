import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-images",
  hero: {
    eyebrow: "PDF'ten Görsele",
    h1: "Her PDF sayfasını PNG ya da JPG olarak dışa aktar.",
    highlight: "PNG ya da JPG",
    lead: "PDF sayfalarını indirilebilir PNG ya da JPEG görsel dosyalarına dönüştür — tarayıcında yerel olarak oluşturulur.",
  },
  privacyNote:
    "Dosyan tarayıcında yerel olarak oluşturulur, sunucularımıza gönderilmez. Hiçbir şey cihazından çıkmaz.",
  howTo: {
    heading: "PDF görsele nasıl dönüştürülür",
    steps: [
      {
        title: "PDF'ini ekle",
        body: "Tek bir PDF'i sürükle bırak ya da seçmek için tıkla.",
      },
      {
        title: "Format seç",
        body: "Temiz metin ve saydamlık için PNG, daha küçük dosyalar için JPG seç.",
      },
      {
        title: "Ölçek seç",
        body: "Daha yüksek ölçek = daha keskin görseller, daha büyük dosyalar. Genelde 2× doğru seçimdir.",
      },
      {
        title: "İndir",
        body: "Her sayfa ayrı bir görsel olarak iner.",
      },
    ],
  },
  useCases: {
    heading: "Bu araç ne zaman işe yarar",
    items: [
      {
        title: "Bir sayfayı Slack'e bırak",
        body: "PDF'lerin yapamadığı yerde görsel önizlemeleri satır içinde görünür.",
      },
      {
        title: "Bir grafiği bir sunumda yeniden kullan",
        body: "Tek bir sayfayı çıkar ve bir slayda yapıştır.",
      },
      {
        title: "Küçük resimler oluştur",
        body: "Hızlı inceleme için PDF sayfalarından bir kontakt sayfası oluştur.",
      },
      {
        title: "Web önizlemeleri",
        body: "Oluşturulan görselleri bir web sitesinde hafif önizlemeler olarak kullan.",
      },
    ],
  },
  limitations: {
    heading: "Sınırlar",
    items: [
      {
        title: "Tarayıcı belleği",
        body: "Yüksek ölçekte çok büyük PDF'ler belleği tüketebilir. Önce 1,5× ölçeği dene ya da PDF'i böl.",
      },
      {
        title: "Şifreyle korunan PDF'ler",
        body: "Şifrelenmiş dosyalar oluşturulamaz. Önce kilidini kaldır ya da PDF Editor uygulamasını kullan.",
      },
      {
        title: "Vektör içerik rastere dönüşür",
        body: "Görseller aranabilir metni korumaz. Bunun için orijinal PDF'i sakla.",
      },
    ],
  },
  related: [
    { label: "Görselden PDF'e — tersi", path: "/image-to-pdf" },
    { label: "PDF Böl", path: "/split-pdf" },
    { label: "Tüm ücretsiz PDF araçları", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Dosyam bir sunucuya mı gönderiliyor?",
      a: "Hayır. Oluşturma tamamen tarayıcında çalışır; hiçbir şey cihazından çıkmaz.",
    },
    {
      q: "PNG mi JPG mi — hangisini seçmeliyim?",
      a: "PNG metin için daha keskindir ve saydamlığı destekler. JPG daha küçüktür; fotoğraflar ve tam sayfa ekran görüntüleri için uygundur.",
    },
    {
      q: "Ölçek ne anlama geliyor?",
      a: "PDF noktası başına kaç görsel pikseli olduğunu belirtir. 2× retina ekranlarda keskin sonuçlar verir. 3× büyük ama çok net.",
    },
    {
      q: "Tüm sayfaların tek bir ZIP'ini alabilir miyim?",
      a: "Henüz değil — sayfalar tek tek iner. Toplu dışa aktarma için PDF Editor mobil uygulaması daha hızlıdır.",
    },
  ],
  appCta: {
    heading: "Çevrimdışı PDF araçlarına mı ihtiyacın var?",
    sub: "iPhone ve Android için PDF Editor, sayfaları donanım hızlandırmasıyla anında oluşturur.",
  },
};

export default content;
