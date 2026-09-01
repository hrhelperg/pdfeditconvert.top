import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-small-business",
  h1: "Küçük İşletmeler İçin PDF İş Akışları (Teklif, Sözleşme, Kayıt)",
  description:
    "Küçük bir işletme belge akışını PDF'ler üzerinden nasıl yürütür — teklifler çıkar, sözleşmeler döner, kayıtlar arşivlenir — bunun için bir abonelik yığını satın almadan.",
  updated: "2026-05-29",
  intro: [
    "Bir küçük işletme, sahibinin beklediğinden daha fazla PDF işler. Teklifler çıkar, imzalı sözleşmeler geri gelir, faturalar gönderilir, ekstreler dosyalanır, vergi belgeleri birikir. Bunların her biri küçük bir iş parçasıdır ve iş akışı bilinçli kurulmadığında her biri zaman yer.",
    "Pahalı PDF paketleri bir hukuk ekibin olduğunda kendini amorti eder. Haftada birkaç düzine belge işleyen beş kişilik bir işletme için ücretsiz tarayıcı araçları ve düzenli bir kural, aynı işi bir abonelik kalemine ihtiyaç duymadan görür. Numara, iş akışını bir kez yazıp ona sadık kalmak.",
    "Bu kılavuz, küçük işletmelerin PDF'te en çok yürüttüğü dört belge türü için iş akışını anlatıyor: teklifler, sözleşmeler, faturalar ve kayıtlar. Her bölüm kısa, her biri somut ve hiçbiri para ödeyeceğin bir şey gerektirmiyor.",
  ],
  steps: [
    {
      title: "Teklifler: Word şablonu → Word'den PDF'e → markalı gönderim",
      body: "Teklifi bir Word şablonundan oluştur, müşteri bilgilerini ve kalemleri doldur, Word'den PDF'e aracıyla PDF'e aktar. Kapağı markala, dosyayı MüşteriAdı_Teklif_YYYY-AA-GG.pdf olarak adlandır, gönder.",
    },
    {
      title: "Sözleşmeler: PDF → PDF İmzala → kilitle → karşı imza",
      body: "Metni kaynakta tamamla, PDF'e aktar, PDF İmzala ile imzala, aracın destekliyorsa kilitle, karşı imza için gönder. Hem tek imzalı hem tam imzalı kopyaları sakla.",
    },
    {
      title: "Faturalar: sıralı numaralandırma, ödendiğinde filigran",
      body: "FTR-2026-001, FTR-2026-002. Bir tabloda takip et. Ödeme geçtiğinde PDF'e Filigran Ekle aracı ÖDENDİ damgası basar ve dosya /bekleyen/ klasöründen /odenen/ klasörüne taşınır.",
    },
    {
      title: "Kayıtlar: al, sıkıştır, yıla göre arşivle",
      body: "Banka ekstreleri, tedarikçi faturaları, gider fişleri. PDF olarak al, arşiv için sıkıştır, /Kayitlar/2026/ altında yıla göre dosyala. En az yedi yıl sakla.",
    },
    {
      title: "Ortak bir klasör yapısı kullan",
      body: "/Musteriler/, /Kayitlar/, /Ic/, /Sablonlar/, /Arsiv/ için üst düzey klasörler. En fazla iki seviye iç içe geçme. Ekibin tamamı aynı yerleşimi kullanır.",
    },
    {
      title: "Her ay mutabakat yap",
      body: "Ayda bir kez /bekleyen/ fatura klasörünü ve /musteriler/ altındaki aktif projeleri gözden geçir. 30 günden eskiyse takip et. 90 günden eskiyse yükselt. Klasör, yapılacaklar listesidir.",
    },
  ],
  tips: [
    "Şablonu her seferinde yeniden icat etme. Bir teklif, bir sözleşme, bir fatura şablonu oluştur ve tekrar tekrar kullan.",
    "Yazılı bir adla değil, gerçek bir imzayla imzala. Çizilmiş imzalar anlaşmazlıklarda daha iyi tutunur.",
    "Her belgeyi gönderim anında sıkıştır — giden dosyalar her zaman iç kullanım orijinallerinden küçük olmalı.",
    "Müşterilere canlı Word dosyaları göndermekten kaçın. PDF olduktan sonra sürüm kilitlenir.",
    "Üç ayda bir arşiv taraması yap. Kapanan projeler /Arsiv/ klasörüne gitsin; aktif klasörler kısa ve taranabilir kalsın.",
  ],
  mobileNote:
    "Küçük işletme sahipleri PDF işinin yarısını telefonda yapar — toplantılar arasında bir sözleşme imzalamak, bir iş yerinden fatura göndermek, gün içinde bir fiş dosyalamak. PDF Editor uygulaması bu dört belge türünün tamamını mobilde, çevrimdışı olarak halleder; böylece iş masa başı zamanını beklemez.",
  faq: [
    {
      q: "Faturalama için muhasebe yazılımına ihtiyacım var mı?",
      a: "Düşük hacimde hayır. Bir Word şablonu, bir takip tablosu ve bir klasör sistemi ayda düzinelerce fatura için sorunsuz çalışır. Büyüdükçe yazılım kendini amorti eder.",
    },
    {
      q: "Hangi sözleşmelerin bekleyen olduğunu nasıl takip ederim?",
      a: "Bir klasör yapısı: /Musteriler/Aktif/[Ad]/sozlesmeler/gonderilen/ ve .../imzalanan/. Klasörün durumu, işin durumudur. Tablo gerekmez.",
    },
    {
      q: "Peki yedeklemeler?",
      a: "Belge klasörünü en az bir bulut sürücüsüne (Dropbox, iCloud, Google Drive) senkronize et. Vergi kaydı yılları için düzenli bir harici yedek tut.",
    },
    {
      q: "Belge türü başına tek şablon mu kullanmalıyım?",
      a: "Evet. Tutarlı şablonlar belgeleri tanınır kılar ve belge başına harcanan emeği azaltır. İçeriği özelleştir, yapıyı değil.",
    },
    {
      q: "Ücretli bir PDF paketi ne zaman mantıklı olmaya başlar?",
      a: "Otomatik yönlendirme, toplu e-imza ya da hesap verebilir denetim izleri gerektiğinde — genelde 20'den fazla çalışanda ya da düzenlemeye tabi iş akışlarında.",
    },
  ],
  related: [
    { label: "İşletmeler için PDF — sözleşmeler ve iş akışları", path: "/pdf-for-business" },
    { label: "PDF İmzala — elektronik imza", path: "/sign-pdf" },
    { label: "Faturalar PDF olarak nasıl yönetilir", path: "/guides/how-to-manage-invoices-as-pdf" },
    { label: "Küçük işletmeler için en iyi ücretsiz PDF araçları", path: "/guides/best-pdf-tools-for-small-business" },
  ],
  parentHub: { label: "İşletmeler için PDF — sözleşmeler ve iş akışları", path: "/pdf-for-business" },
};

export default content;
