import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "merge-pdf",
  hero: {
    eyebrow: "PDF Birleştir",
    h1: "PDF'leri tek bir belgede birleştir — tarayıcında.",
    highlight: "tarayıcında",
    lead: "İki veya daha fazla PDF dosyasını ekle ve tek bir belgede birleştir. Birleştirmeden önce sırasını değiştir — dosyaların cihazında kalır.",
  },
  privacyNote:
    "Dosyaların tarayıcında yerel olarak işlenir, sunucularımıza gönderilmez. Hiçbir şey cihazından çıkmaz.",
  howTo: {
    heading: "PDF'ler nasıl birleştirilir",
    steps: [
      {
        title: "PDF'lerini ekle",
        body: "İki ya da daha fazla PDF'i sürükle bırak ya da cihazından seçmek için tıkla.",
      },
      {
        title: "Gerekirse sırasını değiştir",
        body: "Birleştirmeden önce sayfaları doğru sıraya koymak için her satırdaki okları kullan.",
      },
      {
        title: "Birleştir",
        body: "PDF Birleştir'e tıkla. Dosyaların tarayıcında yerel olarak birleştirilir.",
      },
      {
        title: "İndir",
        body: "Birleştirilmiş PDF otomatik olarak iner. Kaydettikten sonra yeniden adlandır.",
      },
    ],
  },
  useCases: {
    heading: "Birleştirme ne zaman doğru seçim",
    items: [
      {
        title: "Beş değil tek bir dosya gönder",
        body: "Müşteriler, muhasebeciler ve avukatlar bir ek dizisi yerine tek bir belgeyi tercih eder.",
      },
      {
        title: "Teklif, sözleşme ve faturayı bir arada topla",
        body: "Farklı araçlarda oluşturulan belgelerden denetime uygun tek bir dosya oluştur.",
      },
      {
        title: "Taranmış sayfaları paketle",
        body: "Bir pasaportun, kimliğin ya da sözleşmenin sayfa sayfa taramalarını bir portalın kabul edeceği tek bir belgede birleştir.",
      },
      {
        title: "Bir rapor oluştur",
        body: "Bir kapak sayfasını, gövde PDF'ini ve destekleyici ekleri tek bir teslimatta bir araya getir.",
      },
    ],
  },
  limitations: {
    heading: "Sınırlar",
    items: [
      {
        title: "Şifreyle korunan PDF'ler",
        body: "Kilitli dosyalar tarayıcıda birleştirilemez. Önce kaynak uygulamayla kilidini kaldır ya da PDF Editor uygulamasını kullan.",
      },
      {
        title: "Çok büyük paketler",
        body: "Tarayıcı, yerel bir uygulamadan çok daha önce bellek yetersizliğine düşer. 50'den fazla dosya ya da devasa taramalar için PDF Editor uygulamasını kullan.",
      },
      {
        title: "Yer imleri ve form alanları",
        body: "Bazı gömülü yapılar (form alanları, notlar) birleştirme sırasında etkileşimsiz hale gelebilir. Mobil uygulama bunları daha iyi korur.",
      },
    ],
  },
  related: [
    { label: "PDF Böl — tersi", path: "/split-pdf" },
    { label: "PDF Döndür", path: "/rotate-pdf" },
    { label: "PDF Sıkıştır", path: "/compress-pdf" },
    { label: "PDF Sayfalarını Yeniden Sırala", path: "/reorder-pdf-pages" },
    { label: "Tüm ücretsiz PDF araçları", path: "/pdf-tools" },
    { label: "Kılavuz: PDF'ler nasıl birleştirilir", path: "/guides/how-to-merge-pdf-files" },
  ],
  faq: [
    {
      q: "Dosyalarım bir sunucuya mı gönderiliyor?",
      a: "Hayır. Birleştirme tamamen tarayıcında çalışır. Dosyaların cihazından hiç çıkmaz.",
    },
    {
      q: "Kaç PDF birleştirebileceğimin bir sınırı var mı?",
      a: "Kesin bir üst sınır yok, ama tarayıcının hızlı kalması için tek bir grubu 30 dosyanın ya da toplam ~500 MB'ın altında tutmanı öneririz.",
    },
    {
      q: "Şifreyle korunan PDF'leri birleştirebilir miyim?",
      a: "Tarayıcıda hayır. Önce şifreyi kaldır ya da korumalı dosyaları destekleyen PDF Editor uygulamasını kullan.",
    },
    {
      q: "Orijinal biçimlendirme değişir mi?",
      a: "Hayır. Her kaynak sayfa olduğu gibi korunur. Sadece sayfa sırası ve dış belge değişir.",
    },
    {
      q: "Sonradan ayırabilir miyim?",
      a: "Evet. Birleştirilmiş herhangi bir dosyayı yeniden sayfalara ya da aralıklara ayırmak için PDF Böl aracını kullan.",
    },
  ],
  appCta: {
    heading: "Yolda PDF araçlarına mı ihtiyacın var?",
    sub: "iPhone ve Android için PDF Editor, PDF'lerini telefonundan birleştirir, imzalar ve tarar.",
  },
};

export default content;
