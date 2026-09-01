import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-avoid-uploading-sensitive-documents",
  h1: "Hassas Belgeleri Yüklemekten Nasıl Kaçınılır? (Pratik Alternatifler)",
  description:
    "Bir iş akışı hassas bir PDF'i yüklemeye seni ittiğinde, neredeyse her zaman yerel bir alternatif vardır. Görev kategorileri ve her biri için yüklemesiz araç.",
  updated: "2026-05-29",
  intro: [
    "Her PDF görevinde, arama sonucundaki ilk bağlantının dosyanı yüklemeni istediği bir an vardır. Sıkıştırma, birleştirme, bölme, dönüştürme, imzalama — hepsinin yükle-ve-işle modeli üzerine kurulmuş yüzlerce web sitesi vardır. Sıradan dosyalar için bu sorun değil. Hassas olanlar için (mali kayıtlar, kimlik belgeleri, sözleşmeler, tıbbi dosyalar) bu kaçınılabilir bir risktir.",
    "Yüklemeden kaçınmak modern araçlardan kaçınmak anlamına gelmez. Cihazında çalışan araçları seçmek demektir — tarayıcında, bir mobil uygulamada, masaüstünde. Her yaygın PDF görevinin, dosyanı hiç üçüncü taraf sunucusuna değdirmeden işi yapan en az bir sadece yerel seçeneği vardır.",
    "Bu kılavuz pratik değiştirmedir: görev kategorileri, her biri için sadece yerel araç ve yerel işlemenin henüz gerçekten ihtiyacı karşılamadığı küçük durum kümesi.",
  ],
  steps: [
    {
      title: "Sıkıştırma için tarayıcı tabanlı bir sıkıştırıcı kullan",
      body: "Bu sitenin araç setindeki PDF Sıkıştır yerel çalışır. Yüklemeden tipik tarama ağırlıklı ya da fotoğraf ağırlıklı dosyayı halleder. Geliştirici araçlarıyla doğrula — dosyayı eklediğinde büyük bir giden istek yok.",
    },
    {
      title: "Birleştirme için tarayıcı tabanlı bir birleştirici kullan",
      body: "PDF Birleştir dosyaları yerel olarak birleştirir. Birleşik dosya indirilenlerine geri yazılır; bir sunucuda kopya yaşamaz. Sıkıştırmayla aynı mimari — önce yerel.",
    },
    {
      title: "Bölme ve çıkarma için tarayıcı tabanlı bir bölücü kullan",
      body: "PDF Böl ve PDF Sayfalarını Çıkar cihazında çalışır. Sayfa düzeyindeki işlemler mekaniktir ve yerel işlemeye mükemmel uyar.",
    },
    {
      title: "Dönüştürme için tarayıcı tabanlı bir dönüştürücü kullan",
      body: "PDF'ten Word'e, Word'den PDF'e, Görselden PDF'e, PDF'ten Görsele — hepsi yükleme yapmayan tarayıcı tabanlı sürümler olarak mevcut. Dönüştürme tarayıcı sekmende gerçekleşir.",
    },
    {
      title: "İmzalama için yerel bir imzalama uygulaması kullan",
      body: "Tarayıcıda PDF İmzala ya da telefonda PDF Editor uygulaması. Çizilmiş imza, bulut imzalama platformu yok. İmzalı dosya, paylaşmayı seçene kadar cihazında kalır.",
    },
    {
      title: "Gerçekten sunucu yardımı gerektiren görevler için açık garantili ücretli bir araç kullan",
      body: "Bazı iş akışları (uzun belgelerde ağır OCR, gelişmiş karartma) hâlâ sunucu işlemeden fayda görür. Bunlar için belirsiz dilli ücretsiz bir araç değil, açık saklama ve veri işleme taahhütleri olan ücretli bir araç seç.",
    },
  ],
  tips: [
    "Arama sonuçları yerleşim için ödeyen araçları öne çıkarır. İlk sonuç nadiren en gizli olandır; gerçekte ne aldığını kontrol et.",
    "Sadece yerel araçlar çevrimdışı çalışır. Aracı çevrimdışı denemek, dosyan için ağ erişimine ihtiyaç duymadığının hızlı bir doğrulamasıdır.",
    "“Dosyanı saklamıyoruz” diyen ama işlemek için yine de yükleme isteyen araçlara kanma. Kısa saklama penceresi bile son derece hassas materyal için gerçek bir maruziyettir.",
    "Yerel işleyen mobil uygulamalar genelde belli olur — kurulumdan sonra internetsiz çalışırlar. PDF Editor uygulaması bu kalıba uyar.",
    "Alışkanlığı kur. Varsayılan olarak sadece yerel araçları kullandığında, hassas materyal her seferinde düşünmene gerek kalmadan daha güvende kalır.",
  ],
  mobileNote:
    "Telefonda cazibe, App Store'un önerdiği herhangi bir PDF aracını kullanmaktır — bunların çoğu yükleme yapar. PDF Editor uygulaması iOS ve Android'de her şeyi cihaz üzerinde işler, böylece hassas bir belge kamera çekiminden imzalı teslimata bir sunucuya değmeden gidebilir.",
  faq: [
    {
      q: "Yaygın tüm PDF görevlerini gerçekten yüklemeden yapabilir miyim?",
      a: "Evet, günlük görevler için: sıkıştır, birleştir, böl, dönüştür, imzala, filigranla, yeniden sırala, çıkar. Bu sitedeki araçlar bunları yerel olarak kapsar. Bazı gelişmiş işlemler (uzun belgelerde tam OCR) bazen hâlâ sunucu yardımına ihtiyaç duyar.",
    },
    {
      q: "Bir aracın yüklemediğini nasıl doğrularım?",
      a: "Tarayıcı geliştirici araçları, ağ sekmesi, bir dosya bırak. Büyük bir giden POST görürsen yükleme yapıyordur. Görmezsen yereldir. Fark görünürdür.",
    },
    {
      q: "Yerel araçlar daha mı yavaş?",
      a: "Bazen. Modern WebAssembly, çoğu görev için yerel işlemeyi sunucu işlemeyle rekabetçi hâle getirir. Büyük dosyalarda ağır işlemler yerelde daha uzun sürebilir ama hassas materyal için gizlilik ödünleşimi genelde buna değer.",
    },
    {
      q: "Peki OCR — o yerel çalışabilir mi?",
      a: "Hafif OCR evet; uzun belgelerde yüksek doğruluklu OCR genelde hâlâ sunucu işlemeyi kullanır. OCR önemliyse işlemenin nerede gerçekleştiğini açıkça belirten araçları seç.",
    },
    {
      q: "Bu paranoyaklık mı?",
      a: "Hassas materyal için değil. Varsayılan olarak her şeyin yüklendiği model, belgeler daha az hassas ve ihlaller daha nadirken işe yarıyordu. İkisi de değişti. Önce-yerel artık mantıklı bir temeldir.",
    },
  ],
  related: [
    { label: "PDF uygulaması mı online araçlar mı", path: "/compare/pdf-app-vs-online-pdf-tools" },
    { label: "PDF Güvenliği — şifreyle koru ve şifrele", path: "/pdf-security" },
    { label: "Hassas PDF dosyaları nasıl korunur", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "PDF dosyaları gizlice nasıl paylaşılır", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Gizliliği önceleyen belge iş akışları", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "PDF Güvenliği — şifreyle koru ve şifrele", path: "/pdf-security" },
};

export default content;
