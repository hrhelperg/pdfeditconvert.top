import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "extract-pdf-pages",
  hero: {
    eyebrow: "PDF Sayfalarını Çıkar",
    h1: "PDF'ten sayfa çıkar — tarayıcında.",
    highlight: "tarayıcında",
    lead: "Bir PDF ekle, istediğin sayfaları ya da aralıkları yaz, sadece o sayfaları içeren yeni bir PDF'i indir. Her şey cihazında çalışır.",
  },
  privacyNote:
    "Dosyan tarayıcında yerel olarak işlenir, sunucularımıza gönderilmez. Hiçbir şey cihazından çıkmaz.",
  howTo: {
    heading: "PDF sayfaları nasıl çıkarılır",
    steps: [
      {
        title: "PDF'ini ekle",
        body: "Bir PDF'i sürükle bırak ya da seçmek için tıkla. Toplam sayfa sayısını sana gösteririz.",
      },
      {
        title: "Sayfaları gir",
        body: "Tek sayfaları ve aralıkları yaz, örn. 1-3,5,8-10. Seçili sayı yazdıkça güncellenir.",
      },
      {
        title: "Çıkar",
        body: "Sayfaları Çıkar'a tıkla. Sadece o sayfaları içeren yeni bir PDF yerel olarak oluşturulur.",
      },
      {
        title: "İndir",
        body: "Çıkarılan PDF otomatik olarak iner.",
      },
    ],
  },
  useCases: {
    heading: "Sayfa çıkarma ne zaman işe yarar",
    items: [
      {
        title: "Sadece gerekeni paylaş",
        body: "Belgenin tamamı yerine yalnızca tek bir bölümü ya da imzalı sayfayı gönder.",
      },
      {
        title: "Bir form ya da makbuz çıkar",
        body: "Bir portalın istediği tek sayfayı, geri kalanını göstermeden al.",
      },
      {
        title: "Bir bölümü ayır",
        body: "Uzun bir rapordan ya da kitaptan çalışma ya da inceleme için odaklı bir PDF oluştur.",
      },
      {
        title: "Özel bir paket oluştur",
        body: "Sayfaları istediğin sırada listeleyerek bir seçkiyi yeniden sırala.",
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
        title: "Aralık dışındaki sayfalar",
        body: "Belge uzunluğunu aşan sayfa numaraları yok sayılır; geçerli hiçbir seçim yoksa net bir hata alırsın.",
      },
      {
        title: "Çok büyük PDF'ler",
        body: "Tarayıcı, yerel bir uygulamadan çok daha önce bellek yetersizliğine düşer. Devasa dosyalar için PDF Editor uygulamasını kullan.",
      },
    ],
  },
  related: [
    { label: "PDF Böl", path: "/split-pdf" },
    { label: "PDF Sayfalarını Yeniden Sırala", path: "/reorder-pdf-pages" },
    { label: "PDF Sıkıştır", path: "/compress-pdf" },
    { label: "PDF Birleştir", path: "/merge-pdf" },
  ],
  faq: [
    {
      q: "Dosyalarım bir sunucuya mı gönderiliyor?",
      a: "Hayır. Çıkarma tamamen tarayıcında çalışır. Dosyan cihazından hiç çıkmaz.",
    },
    {
      q: "Hangi sayfa biçimlerini girebilirim?",
      a: "Virgülle ayrılmış tek sayfalar ve aralıklar: 1-3, 2,4,6 ya da 1-2,5,8-10. Boşluk bırakman sorun değil.",
    },
    {
      q: "Geçersiz bir aralıkta ne olur?",
      a: "Geçersiz girişler net bir mesajla reddedilir; aralık dışı sayılar yok sayılır. Geçerli hiçbir şey kalmazsa nedenini görürsün.",
    },
    {
      q: "Sayfaları tekrarlayabilir ya da yeniden sıralayabilir miyim?",
      a: "Evet. Sayfaları istediğin sırada listele; bir sayfayı tekrarlarsan birden fazla kez üretilir.",
    },
    {
      q: "Çıkarma kaliteyi değiştirir mi?",
      a: "Hayır. Seçilen sayfalar olduğu gibi kopyalanır — metin seçilebilir kalır ve hiçbir şey yeniden sıkıştırılmaz.",
    },
  ],
  appCta: {
    heading: "Yolda PDF araçlarına mı ihtiyacın var?",
    sub: "iPhone ve Android için PDF Editor, PDF'lerini telefonundan çıkarır, böler ve imzalar.",
  },
};

export default content;
