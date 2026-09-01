import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "compress-pdf",
  hero: {
    eyebrow: "PDF Sıkıştır",
    h1: "PDF'lerini küçült — tarayıcında.",
    highlight: "tarayıcında",
    lead: "PDF'ini e-posta ve yükleme sınırlarına sığacak şekilde küçült. Bir sıkıştırma düzeyi seç, ne kadar yer kazandığını gör, sonra indir — dosyan cihazından hiç çıkmaz.",
  },
  privacyNote:
    "Dosyan tarayıcında yerel olarak işlenir, sunucularımıza gönderilmez. Hiçbir şey cihazından çıkmaz.",
  howTo: {
    heading: "PDF nasıl sıkıştırılır",
    steps: [
      {
        title: "PDF'ini ekle",
        body: "Bir PDF'i sayfaya sürükle bırak ya da cihazından seçmek için tıkla.",
      },
      {
        title: "Bir düzey seç",
        body: "Düşük daha çok ayrıntı korur; Önerilen boyut ile kaliteyi dengeler; Güçlü en küçük dosyayı verir.",
      },
      {
        title: "Sıkıştır",
        body: "PDF Sıkıştır'a tıkla. Sayfalar tarayıcında yerel olarak yeniden oluşturulup kodlanır.",
      },
      {
        title: "İndir",
        body: "Öncesi/sonrası boyutu ve küçülme yüzdesini gör, sonra daha küçük dosyayı indir.",
      },
    ],
  },
  useCases: {
    heading: "Sıkıştırma en çok ne zaman işine yarar",
    items: [
      {
        title: "E-posta boyut sınırları",
        body: "Taranmış bir sözleşmeyi ya da broşürü 10 MB veya 25 MB'lik ek sınırının altına indir.",
      },
      {
        title: "Yükleme formları ve portalları",
        body: "Devlet ve İK portalları birkaç megabaytı geçen dosyaları çoğu zaman reddeder — bu sorunu çözer.",
      },
      {
        title: "Taranmış belgeler",
        body: "Telefonla yapılan taramalar devasa boyutlarda olur. Görsel ağırlıklı PDF'ler güçlü sıkıştırmayla ciddi biçimde küçülür.",
      },
      {
        title: "Depolama ve paylaşım",
        body: "Arşivlerini hafif tut, bağlantıları alan kişi için daha hızlı indirilir hale getir.",
      },
    ],
  },
  limitations: {
    heading: "Dürüst sınırlar",
    items: [
      {
        title: "Metin görsele dönüşür",
        body: "Sıkıştırma her sayfayı görsel olarak yeniden oluşturur, bu yüzden çıktıda metin artık seçilebilir ya da aranabilir olmaz. Bu özelliğe ihtiyacın varsa orijinali sakla.",
      },
      {
        title: "Sadece metin içeren PDF'ler az küçülür",
        body: "Bir PDF zaten büyük ölçüde metin veya vektör grafikse sıkıştıracak pek bir şey kalmaz — bu durumda daha büyük bir dosya vermek yerine orijinalini değiştirmeden bırakırız.",
      },
      {
        title: "Çok büyük veya kilitli PDF'ler",
        body: "Tarayıcı, yerel bir uygulamadan çok daha önce bellek yetersizliğine düşer. Şifreyle korunan PDF'ler tarayıcıda işlenemez — PDF Editor uygulamasını kullan.",
      },
    ],
  },
  related: [
    { label: "PDF Birleştir", path: "/merge-pdf" },
    { label: "PDF Böl", path: "/split-pdf" },
    { label: "PDF Sayfalarını Çıkar", path: "/extract-pdf-pages" },
    { label: "Tüm ücretsiz PDF araçları", path: "/pdf-tools" },
    { label: "Kılavuz: PDF nasıl sıkıştırılır", path: "/guides/how-to-compress-pdf" },
  ],
  faq: [
    {
      q: "Dosyam bir sunucuya mı gönderiliyor?",
      a: "Hayır. Sıkıştırma tamamen tarayıcında, cihazının işlemcisini kullanarak çalışır. Dosyan cihazından hiç çıkmaz.",
    },
    {
      q: "PDF'im ne kadar küçülür?",
      a: "İçeriğe bağlıdır. Taranmış ve görsel ağırlıklı PDF'ler genelde %50-90 küçülür. Sadece metin içeren PDF'ler hiç küçülmeyebilir — bu durumda orijinalini korur.",
    },
    {
      q: "Kalite düşer mi?",
      a: "Evet, biraz — bu kayıplı bir sıkıştırma. Daha düşük düzeyler daha çok ayrıntı korur. Asla 'kalite kaybı yok' demeyiz; işine uygun görünen düzeyi seç.",
    },
    {
      q: "Sıkıştırmadan sonra metin neden seçilemiyor?",
      a: "Tarayıcıda gerçek bir yer tasarrufu sağlamak için her sayfa görsele dönüştürülür. Seçilebilir metne ihtiyacın varsa orijinali sakla ya da daha hafif bir düzey kullan.",
    },
    {
      q: "Şifreyle korunan bir PDF'i sıkıştırabilir miyim?",
      a: "Tarayıcıda hayır. Önce şifreyi kaldır ya da korumalı dosyaları destekleyen PDF Editor uygulamasını kullan.",
    },
  ],
  appCta: {
    heading: "Yolda PDF araçlarına mı ihtiyacın var?",
    sub: "iPhone ve Android için PDF Editor, PDF'lerini doğrudan telefonundan sıkıştırır, imzalar ve paylaşır.",
  },
};

export default content;
