import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-consultants",
  h1: "Danışmanlar İçin PDF İş Akışları (Teklif, Rapor, Fatura)",
  description:
    "Bir danışmanın PDF ritmi: kapanış getiren teklifler, telefonda temiz okunan raporlar, saniyeler içinde giden faturalar. Bunu yalın tutan tarayıcı tabanlı araçlar.",
  updated: "2026-05-29",
  intro: [
    "Danışmanlık işi üç belge üzerinde döner: işi kazandıran teklif, işi teslim eden rapor ve döngüyü kapatan fatura. Bunların dışındaki her şey — açılış sunumları, görüşme notları, durum güncellemeleri — ya bu üçünden birinin taslağıdır ya da işin dışına çıkmayan bir çalışma belgesidir.",
    "Üçünün de kendi PDF alışkanlıkları vardır. Teklifler ağır olmadan ciddi hissettirmeli; raporlar çoğu müşterinin ilk açtığı yer olan telefonda temiz okunmalı; faturalar işin bittiği gün gönderilmeli. Üçünü de iyi yapmanın araçları çoğunlukla ücretsizdir ve iş akışı müşteri projeleri arasında değişmez.",
    "Bu kılavuz o ritmi anlatıyor — her belgenin neye ihtiyacı olduğu, her aracın ne yaptığı ve zamanın nereye gittiği. Bir yıllık projeler boyunca ritmi sıkılaştırmak gerçek saatler kazandırır.",
  ],
  steps: [
    {
      title: "Teklif: derli toplu, markalı, hızlı",
      body: "Şablonundan Word'de oluştur. 12 sayfanın altında tut — müşteriler göz gezdirir, incelemez. Dışa aktarmak için Word'den PDF'e kullan. Kapak sayfası, sorun tanımı, yaklaşım, teslimatlar, zaman çizelgesi, fiyatlandırma, koşullar. 5 MB'ın altına sıkıştır. Aynı gün gönder.",
    },
    {
      title: "Sözleşme mektubu: imzalı, kilitli PDF",
      body: "Teklif onaylandıktan sonra PDF İmzala ile imzalı bir sözleşme mektubu gönder. Müşteri karşı imza atıp geri gönderir. İki imzalı kopyayı da /Musteriler/[Ad]/sozlesmeler/ altında sakla.",
    },
    {
      title: "Ara güncellemeler: haftalık PDF durumu",
      body: "Her hafta gönderilen kısa (tek sayfalık) bir PDF. Durum, engeller, alınması gereken kararlar. Bunu tek başına bir teslimat değil, net düşünmeyi zorlayan bir araç olarak kullan.",
    },
    {
      title: "Son rapor: göz gezdirmeye göre yapılandırılmış",
      body: "Birinci sayfada yönetici özeti. Yöntem ve detay arkada. Her sayfayı numaralandır. Yazı tiplerini göm. Mobilde okunabilir yazı boyutları. Çoğu müşteri raporu dizüstü bilgisayardan önce telefonda okur.",
    },
    {
      title: "Fatura: kapanıştan aynı gün sonra",
      body: "Şablonlu fatura, sıralı numara, Word'den PDF'e, proje kapandıktan sonraki 24 saat içinde gönderilir. Geciken faturalar geç ödemeye dönüşür.",
    },
    {
      title: "Projeyi arşivle",
      body: "Ödeme yapıldığında tüm müşteri klasörünü /Arsiv/[Yil]/[Musteri]/ altına taşı. Aktif klasör ince kalır; arşiv vaka çalışması ve referans amaçlı aranabilir kalır.",
    },
  ],
  tips: [
    "Her teklif için şablonu özelleştirme. İçeriği özelleştir, yapıyı sabit tut — müşteriler seni projeler arasında tanır.",
    "Gönderilen her teklifi tarih, müşteri, tutar, sonuç ile bir tabloda takip et. Dönüşüm oranı teklifi geliştirip geliştirmemen gerektiğini söyler.",
    "Mobilde iyi okunan raporlar, baskı için tasarlanmış raporlardan daha büyük yazı tipi ve daha kısa paragraflar kullanır. Müşterinin önce kullandığı cihaza göre optimize et.",
    "Proje sürerken taslakları (TASLAK) filigranla, son sürümde asla. Son hâl, filigranın yokluğuyla son hâl gibi hisseder.",
    "Geçmiş projelerden anonim örneklerle bir /vaka-calismalari/ klasörü tut. Gelecek tekliflerde en güçlü kanıt bunlardır.",
  ],
  mobileNote:
    "Danışmanlar yolda yaşar. PDF Editor uygulaması son dakika teklif sıkıştırmalarını, sözleşme mektubu imzalarını ve fatura gönderimlerini telefondan halleder — proje trende kapanırken ve fatura gün bitmeden gitmesi gerekirken işe yarar.",
  faq: [
    {
      q: "Bir teklif ne kadar uzun olmalı?",
      a: "Çoğu proje için 12 sayfanın altı. Müşteriler göz gezdirir. Teklif ne kadar kısaysa o kadar okunur.",
    },
    {
      q: "İmzalı bir sözleşme mektubuna ihtiyacım var mı?",
      a: "Evet. Teklif bir satış belgesidir; sözleşme mektubu sözleşmenin kendisidir. Biri olmadan işe başlama.",
    },
    {
      q: "Ara güncellemeleri ne sıklıkla göndermeliyim?",
      a: "Varsayılan haftalık. Kısa, yoğun projelerde günlük. Uzun, yavaş projelerde aylık. Sıklık, formattan daha önemlidir.",
    },
    {
      q: "Raporlar tasarlanmalı mı?",
      a: "Profesyonel görünecek kadar tasarlanmış, seni yavaşlatmayacak kadar sade. Temiz bir tipografik şablon, aşırı tasarlanmış bir şablondan daha iyi yaşlanır.",
    },
    {
      q: "Fatura ne zaman gönderilmeli?",
      a: "Proje kapandığı gün. Her gecikme günü, karşı taraftaki ödeme tarihini genelde bir günden fazla öteler.",
    },
  ],
  related: [
    { label: "İşletmeler için PDF — sözleşmeler ve iş akışları", path: "/pdf-for-business" },
    { label: "Word'den PDF'e — teklif ve rapor dışa aktarmaları", path: "/word-to-pdf" },
    { label: "Serbest çalışanlar için en iyi PDF iş akışı", path: "/guides/best-pdf-workflow-for-freelancers" },
    { label: "Sözleşmeler PDF olarak nasıl gönderilir", path: "/guides/how-to-send-contracts-as-pdf" },
  ],
  parentHub: { label: "İşletmeler için PDF — sözleşmeler ve iş akışları", path: "/pdf-for-business" },
};

export default content;
