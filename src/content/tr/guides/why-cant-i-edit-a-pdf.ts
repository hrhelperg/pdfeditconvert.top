import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-edit-a-pdf",
  h1: "Bir PDF'i Neden Düzenleyemiyorum? Gerçek Nedenler ve Çözümler",
  description:
    "PDF'ler düzenlemeye direnecek şekilde tasarlanmıştır, ama bazı belirli şeyler — taramalar, güvenlik bayrakları, görüntüleyici sınırları — bazı dosyaları diğerlerinden daha zor yapar. Seninkini ne engelliyor ve gerçekten ne işe yarıyor.",
  updated: "2026-05-29",
  intro: [
    "PDF'ler her yerde aynı görünmesi için tasarlandı, bu da onları düzenlemenin bir Word belgesini düzenlemekten neden daha zor hissettirdiğinin tam nedeni. Format metni bir karakter akışından çok basılı bir sayfa gibi ele alır — piksel mükemmelliğinde paylaşım istediğinde kullanışlı, bir sözleşmedeki bir ismi değiştirmen gerektiğinde can sıkıcı.",
    "Ama her PDF eşit derecede kilitli değildir. Bir PDF'i düzenleyememenin dört yaygın nedeni var: altında gerçek metin olmayan taranmış bir belge görüntüsü olması, dosyanın düzenlemeleri engelleyen bir güvenlik bayrağı taşıması, görüntüleyicinin tasarım gereği salt okunur olması ya da orijinalin metni şekillere parçalayan bir şekilde dışa aktarılmış olması. Her birinin farklı bir ilerleme yolu var.",
    "Bu rehber her nedeni sade terimlerle ele alıyor, her biri için doğru araçla. Hiçbiri pahalı yazılım gerektirmiyor ve çoğu çözüm bir tarayıcı sekmesinde çalışıyor.",
  ],
  steps: [
    {
      title: "PDF'in gerçek metni mi yoksa taranmış görüntüleri mi olduğunu doğrula",
      body: "İmlecin ya da parmağınla metni seçmeyi dene. Seçim çalışıyorsa, PDF'in gerçek metni var ve düzenleme yapılabilir. Hiçbir şey seçemiyorsan, bu bir taramadır — metnin kendisi değil, metnin görüntüleridir.",
    },
    {
      title: "Bir düzenleme kısıtlama bayrağı olup olmadığını kontrol et",
      body: "PDF'ler görüntülemeye izin veren ama düzenlemeyi, yazdırmayı ya da kopyalamayı engelleyen izinler taşıyabilir. Çoğu görüntüleyici bu açıkken küçük bir kilit simgesi ya da “korumalı” bildirimi gösterir. Yazar kısıtlamayı kaldırabilir; alıcılar bunu güvenli şekilde aşamaz.",
    },
    {
      title: "Gerçek düzenlemeler için gerçek bir PDF düzenleyici kullan",
      body: "Tarayıcılar ve temel görüntüleyiciler metni düzenlemez — sadece görüntülerler. PDF Editor uygulaması, PDF'ten uzaklaşmadan metinde, görsellerde ve sayfalarda yapısal düzenlemeler yapar, bu da yerleşimi korur.",
    },
    {
      title: "Ağır yeniden yazma gerektiğinde Word'e dönüştür",
      body: "Kelimeleri ayarlamak yerine paragrafları yeniden yazman gerekiyorsa, PDF'ten Word'e metni gerçek bir düzenleyiciye çeker. Katı yerleşimi kaybedersin ama gerçek akış düzenlemesi kazanırsın — zaten yeniden yayınlanacak belgeler için daha iyi.",
    },
    {
      title: "Taranmış PDF'ler için OCR sınırlarını bekle",
      body: "Bir taramayı düzenlemek önce görüntüleri metne çevirmek (OCR) demektir. Bazı araçlar bunu çevrimiçi yapar, bazıları yapmaz ve kalite tarama çözünürlüğüne göre büyük ölçüde değişir. OCR çıktısını bitmiş bir düzenleme değil, bir başlangıç noktası olarak ele al.",
    },
    {
      title: "Sayfa düzeyindeki değişiklikler “düzenleme” gerektirmez",
      body: "Sadece sayfa silmen, yeniden düzenlemen, döndürmen ya da eklemen gerekiyorsa, bir metin düzenleyiciye hiç ihtiyacın yok — Çıkar, Yeniden Sırala ve Döndür PDF araçları, metin katmanının kilidini açmadan yapısal düzenlemeleri halleder.",
    },
  ],
  tips: [
    "Sadece bir imza eklemen ya da bir form doldurman gerekiyorsa, dosyanın muhtemelen “düzenlenmeye” ihtiyacı yoktur — İmzala ve form doldurma iş akışları orijinal metne dokunmaz.",
    "Bazı PDF'ler her karakteri metin yerine küçük bir şekil olarak dışa aktarır. Seçim sorunsuz görünür ama kopyala-yapıştır anlamsız çıktı üretir. Bu, düzenleme için en kötü durumdur; geriye dönük tek gerçekçi yol kaynak belgedir.",
    "Düzenleme kısıtlamalarını kaldırmayı vaat eden şifre kırıcı sitelere güvenme. Ya etkisizdirler, ya kötü niyetlidirler ya da ikisi birdendir.",
    "Yazar sensen ve daha önce gönderdiğin bir dosyada düzenlemeyi etkinleştirmek istiyorsan, en temiz yol onu kısıtlama olmadan yeniden dışa aktarmaktır.",
    "Aynı belgeye tekrar tekrar düzenleme yapman gerekiyorsa, her seferinde PDF'i yamalamak yerine kaynağı (Word, Pages, tasarım aracı) düzenleyip yeniden dışa aktar.",
  ],
  mobileNote:
    "Telefonda, çoğu yerleşik görüntüleyici kasıtlı olarak salt okunurdur. PDF Editor uygulaması, iOS ve Android'de dosyayı düzleştirmeden metin düzenlemelerini, görsel değişimlerini ve sayfa yeniden düzenlemesini halleder, böylece hızlı bir düzeltme bir dizüstü bilgisayara dönmeni beklemek zorunda kalmaz.",
  faq: [
    {
      q: "Metni görebiliyorum ama neden tıklayamıyorum?",
      a: "Ya PDF bir taramadır (metnin görüntüsü, altında karakter yok) ya da görüntüleyicin salt okunurdur. PDF Editor uygulaması gibi gerçek bir PDF düzenleyici, düzenlenebilir metne tıklamana izin verir.",
    },
    {
      q: "Düzenleme kısıtlamalarını kaldırmanın bir yolu var mı?",
      a: "İzin kısıtlamalarını sadece orijinal yazar temiz şekilde kaldırabilir. Bunları çıkarmayı vaat eden araçlar ya çalışmaz ya da dosyayı bozar. Gönderenden kısıtlamasız bir kopya iste.",
    },
    {
      q: "OCR nedir ve ne zaman ihtiyacım olur?",
      a: "OCR, metin görüntülerini gerçek metne çevirme sürecidir — taranmış bir PDF'i düzenlerken gerekir. Kalite taramaya bağlıdır; temiz, yüksek çözünürlüklü taramalar bulanık telefon fotoğraflarından çok daha iyi OCR sonucu verir.",
    },
    {
      q: "Düzenlemek için Word'e dönüştürmeli miyim?",
      a: "Sadece ağır metin değişiklikleri gerekiyorsa. Dönüştürme yerleşim doğruluğunu kaybettirir. Küçük düzenlemeler için, gerçek bir PDF düzenleyici daha fazlasını korur.",
    },
    {
      q: "Metne dokunmadan sayfaları düzenleyebilir miyim?",
      a: "Evet. Sayfaları yeniden sıralama, döndürme, çıkarma ve kaldırma yapısal düzenlemelerdir ve bir metin düzenleyici gerektirmez. Bu sitedeki tarayıcı araçları, hiçbir şey yüklemeden bunları halleder.",
    },
  ],
  related: [
    { label: "PDF Düzenleyici — mobilde metin ve görsel düzenle", path: "/pdf-editor" },
    { label: "PDF'ten Word'e — ağır düzenleme için dönüştür", path: "/pdf-to-word" },
    { label: "iPhone'da PDF Nasıl Düzenlenir? (2026 Rehberi)", path: "/guides/how-to-edit-pdf-on-iphone" },
    { label: "Android'de PDF Nasıl Düzenlenir? (2026 Rehberi)", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "PDF Düzenleyici", path: "/pdf-editor" },
};

export default content;
