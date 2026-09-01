import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "common-pdf-mistakes-to-avoid",
  h1: "Kaçınılması Gereken Yaygın PDF Hataları",
  description:
    "Zaman kaybettiren ya da bilgi sızdıran PDF hataları — aşırı sıkıştırma, fotoğraf gönderme, hassas dosya yükleme, sayfa unutma — ve bunlardan kaçınma yöntemi.",
  updated: "2026-05-23",
  intro: [
    "Çoğu PDF sorunu teknik değildir — önlenebilir alışkanlıklardır. Kimsenin sıkıştırmadığı için geri tepen dosya, bir belge yerine gönderilen fotoğraf, rastgele bir sunucuya yüklenen sözleşme, çıkmaması gerekirken çıkan sayfa. Her biri küçük, her biri yaygın ve aramayı bildiğinde her biri kolayca durdurulur.",
    "Bu rehber, insanların PDF'lerle en sık yaptığı hataları, her birinin neden sorun yarattığını ve hızlı çözümü topluyor. Çözümlerin birkaçı bu sitedeki ücretsiz, cihaz üzerindeki araçları kullanır; hepsi özellikten çok alışkanlıktır.",
    "Bir kere oku, bir sonraki önlenebilir aksilikten önce kendini yakalayacaksın — müşterilere, meslektaşlara ve kurumlara giden belgelerle bu, kulağa geldiğinden daha değerlidir.",
  ],
  steps: [
    {
      title: "Bir belge yerine fotoğraf gönderme",
      body: "Bir sayfanın JPG'si eğridir, aranabilir değildir ve yazdırması ya da dosyalaması zordur. Bir belgeyse, önce Görselden PDF'e aracıyla PDF'e çevir ya da düzgünce tara — alıcıyı bir anlık görüntüyle uğraştırma.",
    },
    {
      title: "Hassas dosyaları bilinmeyen araçlara yükleme",
      body: "Bir sözleşmeyi ya da kimliği ilk çıkan “ücretsiz online PDF” servisine bırakmak, onu bir yabancının sunucusuna yükler. Okunmasını istemeyeceğin her şey için cihaz üzerinde çalışan, tarayıcı tabanlı araçlar kullan.",
    },
    {
      title: "Alışkanlıktan aşırı sıkıştırma",
      body: "Her dosyada sıkıştırmayı maksimuma çekmek, buna ihtiyacı olmayan belgeleri bozar. Boyut hedefini karşılayan en hafif düzeyi kullan ve zaten küçük olan dosyaları sıkıştırma.",
    },
    {
      title: "Göndermeden önce sayfaları kontrol etmeyi unutma",
      body: "Dahili notlar, önceki bir alıcının bilgileri, boş bir tarayıcı sayfası — bunlar fark edilmeden yolculuk eder. Sayfa sayfa gözden geçir ve çıkmaması gerekeni PDF Sayfalarını Çıkar aracıyla at.",
    },
    {
      title: "Düzenlenebilir bir dosyayı “final” olarak gönderme",
      body: "Word belgesi olarak gönderilen bitmiş bir teklif ya da sözleşme düzenlenebilir — kazara ya da kasıtlı. Yerleşim ve rakamlar sabit kalsın diye finalleri PDF'e dönüştür.",
    },
    {
      title: "Tek orijinalinin üzerine yazma",
      body: "Sıkıştırma, dönüştürme ve düzenleme, sakladığın kopya için tek yönlüdür. Dokunulmamış orijinal bir hatadan sağ çıksın diye düzenlenmiş sürümleri her zaman yeni bir isimle kaydet.",
    },
  ],
  tips: [
    "“Bu bir belge mi görüntü mü?” sorusunu ilk soru olarak ele al. Belgeler PDF olarak gider; sadece gerçek fotoğraflar JPG olarak gider.",
    "Gizlilik bir ayar değil, bir alışkanlıktır. Hassas dosyalar için varsayılan olarak cihaz üzerindeki araçları kullan, böylece dikkatli olmayı hatırlaman gerekmez.",
    "Refleksle değil niyetle sıkıştır — düzeyi amaca göre eşleştir ve zaten mantıklı bir boyutta olan dosyaları sıkıştırmayı atla.",
    "Göndermeden önce on saniyelik sayfa sayfa bir kontrol, en utandırıcı PDF hatalarını önler.",
    "Orijinalleri sakla. Neredeyse her PDF işlemi, kaynağın üzerine yazmadıysan geri alınabilir.",
  ],
  mobileNote:
    "Bu aksilerin çoğu, bir telefondan bir şey gönderme telaşında olur. PDF Editor uygulaması, kaçak bir sayfayı kırpmana, akıllıca sıkıştırmana, bir fotoğrafı dönüştürmene ve bir finali kilitlemene izin verir — hepsi cihazda — böylece aceleyle yapılan bir paylaşım özür dilemen gereken bir hataya dönüşmez.",
  faq: [
    {
      q: "En yaygın PDF hatası nedir?",
      a: "Alıcının bir belgeye ihtiyacı olduğunda bir JPG fotoğraf göndermek. Eğridir, aranabilir değildir, yazdırması ya da dosyalaması zordur. Fotoğrafı önce bir PDF'e çevirmek bunu çözer.",
    },
    {
      q: "PDF'leri ücretsiz araçlara yüklemek neden riskli?",
      a: "Pek çok “online” araç dosyanı bir sunucuya yükler, yani bir sözleşme ya da kimlik kısa süreliğine senin kontrol etmediğin bir altyapıda yaşar. Cihaz üzerindeki, tarayıcı tabanlı araçlar bundan tamamen kaçınır.",
    },
    {
      q: "Daha fazla sıkıştırma her zaman daha mı iyidir?",
      a: "Hayır. Aşırı sıkıştırma, buna ihtiyacı olmayan belgeleri bozar ve zaten küçük olan dosyalar için hiçbir şey yapmaz. Boyut hedefini karşılayan en hafif düzeyi kullan.",
    },
    {
      q: "Yanlış sayfaları göndermekten nasıl kaçınırım?",
      a: "Göndermeden önce belgeyi sayfa sayfa gözden geçir ve çıkmaması gereken her şeyi PDF Sayfalarını Çıkar aracıyla kaldır. Dahili notlar ve kaçak sayfalar genelde suçludur.",
    },
    {
      q: "Orijinal dosyanın üzerine neden yazmamalıyım?",
      a: "Sıkıştırma, dönüştürme ve düzenlemeler, sakladığın kopya için tek yönlüdür. Yeni bir isimle kaydetmek orijinali korur, böylece bir hata kolayca geri alınabilir.",
    },
  ],
  related: [
    { label: "Ücretsiz PDF Araçları", path: "/pdf-tools" },
    { label: "Paylaşmadan Önce PDF Nasıl Hazırlanır? (Kontrol Listesi)", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Gizliliği Önceleyen PDF Araçları — Belgeler Cihazında Kalsın", path: "/guides/privacy-first-pdf-tools" },
    { label: "Belgeler İçin PDF mi JPG mi? Fotoğraf Göndermeyi Bırak", path: "/guides/pdf-vs-jpg-for-documents" },
  ],
  parentHub: { label: "Ücretsiz PDF Araçları", path: "/pdf-tools" },
};

export default content;
