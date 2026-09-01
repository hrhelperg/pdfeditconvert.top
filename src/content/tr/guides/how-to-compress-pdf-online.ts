import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-online",
  h1: "PDF Yüklemeden Online Nasıl Sıkıştırılır?",
  description:
    "PDF'i doğrudan tarayıcında küçült — yükleme yok, hesap yok. Cihaz üzerinde sıkıştırmanın tipik online araçlardan farkı ve kalite ödünleşimi.",
  updated: "2026-05-23",
  intro: [
    "\"PDF'i online sıkıştır\" genelde tanıdık, hafif rahatsız edici bir tablo canlandırır: dosyanı bir yabancının sunucusuna yükle, bekle, sonucu indir ve az önce teslim ettiğin belgenin önemsediğin bir şey olmadığını umut et. Bu iş akışının daha iyi bir versiyonu var — doğrudan tarayıcı sekmesinde çalışan, dosyanın cihazından hiç çıkmadığı bir versiyon.",
    "Bu rehber, cihazının kendi işlemcisini kullanarak işini yerel olarak yapan ücretsiz PDF Sıkıştır aracını kullanıyor. \"Online\" olması, ona bir web sayfası üzerinden ulaşman anlamında — ama PDF'in hiçbir yere gönderilmez. Bu ayrım, insanların gerçekte sıkıştırdığı belgeler için en çok önem taşır: taranmış sözleşmeler, ekstreler, başvurular.",
    "Adımları tek tek göstereceğiz, kalite ödünleşimini dürüstçe açıklayacağız ve tarayıcı sıkıştırmasının ya parladığı ya da duvara çarptığı dosya türlerini belirteceğiz.",
  ],
  steps: [
    {
      title: "PDF Sıkıştır aracını aç",
      body: "Tarayıcında PDF Sıkıştır aracına git. Sayfada açılır ve dosyanı cihazında işler — yükleme yok, kayıt yok.",
    },
    {
      title: "PDF'ini ekle",
      body: "Dosyayı bırakma alanına sürükle ya da seçmek için tıkla. Hiçbir şey iletilmez; dosya yerel olarak okunur.",
    },
    {
      title: "Bir sıkıştırma düzeyi seç",
      body: "Düşük en fazla ayrıntıyı korur, Önerilen boyut ve kaliteyi dengeler, Güçlü en küçüğüdür. E-posta ve yüklemeler için genellikle en uygun nokta Önerilen'dir.",
    },
    {
      title: "Sıkıştır",
      body: "Çalıştır. Araç, sayfaları yerel olarak yeniden işler ve yeniden kodlar, sonra öncesi-sonrası boyutu ve kazanılan yüzdeyi gösterir.",
    },
    {
      title: "Sonucun kabul edilebilir göründüğünü kontrol et",
      body: "Sıkıştırılmış dosyayı aç ve sayfalara bak. Taramalar hâlâ okunabilir olmalı; bir düzey çok kaba görünüyorsa daha hafif birine geri dön.",
    },
    {
      title: "Küçültülmüş dosyayı indir",
      body: "Orijinalin bozulmadan kalması için yeni bir dosya olarak kaydet. Sıkıştırılmış kopya eklemeye ya da yüklemeye hazır.",
    },
  ],
  tips: [
    "Buradaki \"online\", \"yüklendi\" anlamına gelmez. Dosya, cihazındaki tarayıcında işlenir; bu, hassas herhangi bir şeyi sıkıştırmanın daha güvenli yoludur.",
    "Sıkıştırma kayıplıdır — dürüst hiçbir araç tersini iddia etmez. Daha düşük düzeyler daha fazla ayrıntı korur; kullanımın için hâlâ kabul edilebilir görüneni seç.",
    "Tarayıcıda gerçek tasarruf elde etmek için, araç sayfaları görsel olarak yeniden işler, bu yüzden çıktıdaki metin artık seçilebilir ya da aranabilir değildir. Buna ihtiyacın varsa orijinali sakla.",
    "Sadece metin ya da vektör PDF'ler neredeyse hiç küçülmez, çünkü sıkıştıracak çok az görsel veri vardır — en büyük kazançlar taramalardan ve fotoğraf ağırlıklı dosyalardan gelir.",
    "Şifre korumalı PDF'ler tarayıcıda işlenemez. Önce şifreyi kaldır ya da korumalı dosyaları destekleyen PDF Editor uygulamasını kullan.",
  ],
  mobileNote:
    "Hassas bir belgeyi yolda sıkıştırmak, cihaz üzerinde işlemenin tam olarak hakkını verdiği yerdir. PDF Editor uygulaması tamamen çevrimdışı sıkıştırır — uçak modunda bir sözleşmeyi küçültebilirsin ve bir bayt bile telefonundan çıkmaz — ayrıca şifre korumalı dosyaları da halleder.",
  faq: [
    {
      q: "PDF'im gerçekten bir sunucuya mı yükleniyor?",
      a: "Hayır. Bir web sayfası üzerinden ulaşılmasına rağmen, PDF Sıkıştır aracı tarayıcında çalışır ve dosyayı cihazında işler. Hiçbir şey iletilmez; bu, onu gizli belgeler için güvenli kılar.",
    },
    {
      q: "Dosyam ne kadar küçülecek?",
      a: "İçeriğe bağlı. Taranmış ve görsel ağırlıklı PDF'ler genelde %50-90 küçülür; sadece metin içeren PDF'ler neredeyse hiç değişmeyebilir. Araç tam öncesi-sonrası boyutu gösterir.",
    },
    {
      q: "Kalite düşer mi?",
      a: "Evet, biraz — bu kayıplı bir sıkıştırmadır ve tersini iddia etmiyoruz. Daha düşük düzeyler daha fazla ayrıntı korur. Belgenin nasıl kullanılacağına göre kabul edilebilir görünen düzeyi seç.",
    },
    {
      q: "Sıkıştırdıktan sonra metni neden seçemiyorum?",
      a: "Tarayıcıda gerçek boyut tasarrufu elde etmek için, her sayfa bir görsele dönüştürülür; bu, seçilebilir metin katmanını kaldırır. Aranabilir metne ihtiyacın varsa orijinali sakla ya da daha hafif bir yaklaşım kullan.",
    },
    {
      q: "Bu şekilde korumalı bir PDF'i sıkıştırabilir miyim?",
      a: "Tarayıcıda hayır. Önce şifreyi kaldır ya da korumalı dosyaları açıp sıkıştırabilen PDF Editor mobil uygulamasını kullan.",
    },
  ],
  related: [
    { label: "PDF Sıkıştır — tarayıcında küçült", path: "/compress-pdf" },
    { label: "PDF nasıl sıkıştırılır kalite kaybetmeden", path: "/guides/how-to-compress-pdf" },
    { label: "E-posta için PDF dosya boyutu nasıl küçültülür", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Gizlilik öncelikli PDF araçları", path: "/guides/privacy-first-pdf-tools" },
  ],
  parentHub: { label: "PDF Sıkıştır", path: "/compress-pdf" },
};

export default content;
