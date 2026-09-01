import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-client-ready-pdf-files",
  h1: "Müşteriye Hazır PDF Dosyaları Nasıl Oluşturulur?",
  description:
    "İç kullanım için bir PDF ile müşteriye hazır bir PDF'i ayıran şey: kapak sayfası, sayfa numaralandırma, markalama, dosya boyutu, dosya adı. Belgeyi tamamlanmış hissettiren hızlı cila.",
  updated: "2026-05-29",
  intro: [
    "Çalışma amaçlı bir PDF ile müşteriye hazır bir PDF arasında fark vardır ve bu fark çoğunlukla küçük ayrıntılardan oluşur. İç kullanım sürümünde yer tutucu bir kapak, eksik sayfa numarası, 14 MB boyut ve “final-final-v2.pdf” gibi bir dosya adı bulunur. Müşteriye hazır sürümde ise temiz bir kapak, markaya uygun tipografi, numaralandırılmış sayfalar, 2 MB boyut ve profesyonel görünen bir ad vardır. İkisi de aynı bilgiyi taşır; sadece biri bitmiş hissettirir.",
    "Müşteriye hazır sürümü elde etmek için bir tasarımcıya ihtiyacın yok. Standart birkaç adımdan oluşan kısa bir sıra yeter: kaynağı düzelt, temiz şekilde yeniden dışa aktar, PDF'i cilala, doğru etiketle, akıllıca sıkıştır, özenle yeniden adlandır. Sırayla yapıldığında bu cila her belge için sadece birkaç dakika sürer.",
    "Bu kılavuz sırayı adım adım anlatıyor. Bu adımların hiçbiri pahalı araçlar gerektirmez; çoğu, hassas hiçbir şeyi sunucuya göndermeden bir tarayıcı sekmesinde yapılabilir.",
  ],
  steps: [
    {
      title: "Düzgün tasarlanmış bir kaynaktan başla",
      body: "Kaynak belge taslak gibi görünüyorsa PDF de öyle görünür. Kenar boşluklarını, yazı tipi seçimlerini ve başlık hiyerarşisini dışa aktarmadan önce Word, Pages ya da Docs'ta düzelt. PDF, kaynakta olmayan bir cilayı ekleyemez.",
    },
    {
      title: "Teslimatı tanımlayan bir kapak sayfası ekle",
      body: "Müşteri adı, proje adı, belge başlığı, tarih, işletmenin adı. Tek sayfa. Belgenin her başlığında tekrar etmek zorunda kalmayacağın bağlamı verir.",
    },
    {
      title: "İkinci sayfadan itibaren sayfa numarası ekle",
      body: "“X / Y” biçimi nettir ve eksiksizliği doğrular — okuyan kişi hiçbir şeyin eksik olmadığını bilir. Kapakta numaralandırmayı atla, 2. sayfadan başla.",
    },
    {
      title: "Tutarlı bir markalama uygula (tipografi, renk, logo)",
      body: "Küçük bir logo ve tutarlı bir tipografi sistemi özen gösterir. Markalama sessiz kalmalı, göz alıcı olmamalı. Müşterinin bir marka kılavuzu varsa onu takip et.",
    },
    {
      title: "Yazı tipleri gömülü şekilde yeniden dışa aktar",
      body: "Gömülü yazı tipleri, belgenin müşteride de sende göründüğü gibi görünmesini sağlar. Kaynaktan “tüm yazı tiplerini göm” seçeneğini açarak yeniden dışa aktar.",
    },
    {
      title: "Göndermeden önce sıkıştır, yeniden adlandır ve kontrol et",
      body: "Tipik e-posta sınırının altında kalman için PDF Sıkıştır aracını kullan. Dosyayı MüşteriAdı_BelgeTürü_YYYY-AA-GG.pdf olarak yeniden adlandır. Göndermeden önce son dosyayı bir kez aç, ilk ve son sayfayı yeniden oku — yazım hataları yeniden okurken fark edilir.",
    },
  ],
  tips: [
    "Stok arka planlardan ve ekran görüntüsü gibi duran başlık sayfalarından kaçın. Tipografiye dayanan sade bir kapak, aşırı tasarlanmış bir kapaktan daha iyi yaşlanır.",
    "Son sürüme “TASLAK” filigranı koyma. Filigranın yokluğu, bunun son hâl olduğunun işaretidir.",
    "Birden fazla sayfaya yayılan tablolar başlık satırını tekrar etmeli. Word'de “başlık satırını tekrarla” tek tıkla baskıda okunabilirlik sorunlarını önler.",
    "Vektör (PDF) olarak dışa aktarılan grafikler keskin kalır. Görsel olarak yapıştırılan grafikler yüksek yakınlaştırmada bulanıklaşır — sorunu kaynağında düzelt.",
    "Aynı şablonu birden fazla müşteri için tekrar kullanıyorsan meta verileri her seferinde tazele; böylece belge Beta Co'ya giderken başlık hâlâ “Acme Teklifi” demez.",
  ],
  mobileNote:
    "Müşteriler teslimatları genelde önce telefonda açar. PDF Editor uygulaması, son PDF'i müşterinin göreceği şekilde telefonda önizlemeni sağlar; böylece 27 inçlik bir ekranda gayet iyi görünen ama telefonda sıkışık duran bir kapak sayfası teslimden önce fark edilir.",
  faq: [
    {
      q: "Bir PDF'in müşteriye hazır olmadığının en büyük işareti nedir?",
      a: "Düzenlenmemiş bir dosya adı. “final_v3_revised.pdf” müşteriye bunun birçok sürümden biri olduğunu söyler. Adlandırılmış, tarihli bir dosya adı bitmiş bir ürünün işaretidir.",
    },
    {
      q: "Her sayfada logo olması gerekir mi?",
      a: "Hayır. Kapakta bir logo ve alt bilgide sade bir işaret yeterli. Her sayfada büyük logolar belgeyi bir belge yerine satış sunumu gibi hissettirir.",
    },
    {
      q: "İçindekiler tablosu eklemeye değer mi?",
      a: "On sayfadan uzun her şeyde evet. Belgeyi bitmiş hissettiren ve okuyucunun yönünü bulmasına yardım eden küçük bir incelik.",
    },
    {
      q: "En iyi sayfa numaralandırma biçimi nedir?",
      a: "X / Y. Y, eksiksizliği doğrular. Daha kısa belgeler için sade X yeterlidir ama bu bütünlük işaretini kaybeder.",
    },
    {
      q: "Özel bir kapak tasarlamaya değer mi?",
      a: "Tekrar eden teslimatlar için evet — markalı bir şablon birçok belgede kendini amorti eder. Tek seferlik işler için sade, tipografi ağırlıklı bir kapak yeterlidir.",
    },
  ],
  related: [
    { label: "İşletmeler için PDF — sözleşmeler ve iş akışları", path: "/pdf-for-business" },
    { label: "Word'den PDF'e — dağıtım için temiz dışa aktarmalar", path: "/word-to-pdf" },
    { label: "PDF'ler müşterilerle nasıl paylaşılır", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "İş kullanımı için PDF nasıl hazırlanır", path: "/guides/how-to-prepare-pdf-for-business-use" },
  ],
  parentHub: { label: "İşletmeler için PDF — sözleşmeler ve iş akışları", path: "/pdf-for-business" },
};

export default content;
