import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-invoices-as-pdf",
  h1: "Faturalar PDF Olarak Nasıl Yönetilir? (Kes, Takip Et, Arşivle)",
  description:
    "Muhasebe yazılımı gerektirmeyen bir fatura-PDF iş akışı: oluştur, numaralandır, gönder, takip et ve arşivle — sadece ücretsiz tarayıcı araçları ve düzenli bir klasör sistemiyle.",
  updated: "2026-05-29",
  intro: [
    "Çoğu küçük işletmenin faturalar için gerçekten muhasebe yazılımına ihtiyacı yoktur. Bir PDF oluşturmanın, onu tutarlı şekilde numaralandırmanın, göndermenin, ne zaman ödendiğini takip etmenin ve vergi sezonu için arşivlemenin temiz bir yoluna ihtiyaçları vardır. İş mekaniktir; araçlar basittir; kaos kuralı atlamaktan gelir.",
    "Bir fatura iş akışının dört parçası vardır: düzenleme (PDF'in nereden geldiği), takip (neyin gönderildiğini nerede kaydettiğin), ödeme (ne zaman tahsil edildiği) ve arşiv (ödenmiş kopyaların nerede yaşadığı). Her parça kısadır ve istemiyorsan hiçbiri abonelik gerektirmez.",
    "Bu rehber, iş akışını bir serbest çalışanın ya da küçük bir ekibin gerçekten yürütebileceği şekilde anlatıyor — bir Word şablonundan PDF oluşturma, kontrol ettiğin numaralandırma ve bir vergi denetiminden sağ çıkan bir arşiv. Tek yol bu değil; bozulmayan yol bu.",
  ],
  steps: [
    {
      title: "Faturayı Word ya da Pages'te bir şablondan oluştur",
      body: "Word'deki bir fatura şablonu, müşteri, tarih, kalemler, toplam için yer tutucularla bilinen iyi bir yerleşim verir. Değişkenleri doldur, Word'den PDF'e ile PDF'e dışa aktar. Son sayıyı kaynak dışında hiçbir yerde düzenleme.",
    },
    {
      title: "Sıralı bir fatura numarası kullan",
      body: "FAT-2026-001, FAT-2026-002 ve böyle devam. Her yıl sıfırla. Numaralar benzersiz ve kesintisiz olmalı — vergi otoriteleri boşlukları işaretler. Bir elektronik tabloda ya da metin dosyasında güncel bir liste tut.",
    },
    {
      title: "Öngörülebilir bir dosya adıyla kaydet",
      body: "MusteriAdi_Fatura_FAT-2026-001_2026-05-29.pdf. Dosya adındaki fatura numarası, belgedeki numarayla eşleşir. Müşteri klasörü, müşteri başına bulmayı kolaylaştırır.",
    },
    {
      title: "Hemen gönder ve kaydet",
      body: "PDF'i kısa bir kapak notuyla e-postayla gönder ve gönderimi takip sayfana kaydet. Gönderilen tarih, fatura numarası, tutar, vade tarihi. Kaydetmediğin dakika unutacağın dakikadır.",
    },
    {
      title: "Ödeme tahsil edildiğinde ÖDENDİ filigranla",
      body: "PDF'e Filigran Ekle, dosyaya tarihle birlikte ÖDENDİ damgalar. Ödenmiş kopya /faturalar/odenen/'e gider; ödenmemiş /faturalar/bekleyen/'de yaşar. Görsel durum, elektronik tablo durumundan iyidir.",
    },
    {
      title: "Yıla göre arşivle",
      body: "Yıl sonunda /faturalar/odenen/'i /Arsiv/Faturalar/2026/'ya taşı. En az yedi yıl tut (yargı bölgesine göre değişir). Orijinal dosyalama mantığını unuttuğunda beş yıl sonra arşiv kendi kendini açıklayabilmelidir.",
    },
  ],
  tips: [
    "Gönderilmiş bir faturayı asla düzenleme. Tutar yanlışsa, bir alacak dekontu ya da yeni bir fatura düzenle — denetim izi eksiksiz olmalı.",
    "Dosyanın fatura numarasını, belgenin fatura numarasıyla ve takip sayfandaki satırla eşleştir. Aynı şeyi söyleyen üç yer.",
    "PDF/A, bazı vergi otoritelerinin tercih ettiği arşivlik formattır. Böyle bir yargı bölgesinde dosyalıyorsan, yıl sonu setini PDF/A'ya yeniden dışa aktar.",
    "Arşiv için faturaları sıkıştır — düz metindirler, ama arşivler birikir. Sıkıştırılmış kopyalar yıllar içinde gerçek disk alanı kazandırır.",
    "Müşteri gerektirmedikçe faturaları şifreyle koruma. Sadece sayı ve isimlerden oluşan bir belgede faydasız sürtünme.",
  ],
  mobileNote:
    "Faturalar giderek bir telefonda başlıyor — bir işten sonra bir kafeden hızlı bir gönderim. PDF Editor uygulaması, şablonu doldurmana, fatura numarasını damgalamana ve PDF'i mobilden e-postayla göndermene izin verir, kayıtların için yerel olarak bir kopya kaydedilir.",
  faq: [
    {
      q: "Fatura yazılımına ihtiyacım var mı?",
      a: "Düşük hacim için değil. Bir Word şablonu, bir takip sayfası ve bir klasör sistemi ayda düzinelerce faturayı temizce halleder. Yazılım, tekrarlayan faturalandırma, çoklu para birimi ya da çok sayıda müşteri gerektiğinde karşılığını verir.",
    },
    {
      q: "Hangi fatura numarası formatını kullanmalıyım?",
      a: "Sıralı, boşluksuz, tercihen bir yıl önekiyle. FAT-2026-001 hem insan tarafından okunabilir hem de vergi denetimi dostudur.",
    },
    {
      q: "Faturaları ne kadar süre saklamalıyım?",
      a: "Yargı bölgeleri değişir; yedi yıl güvenli bir varsayılandır. Gerçek gereksinim için kendi ülkenin kurallarını kontrol et.",
    },
    {
      q: "Faturaları Word olarak mı yoksa PDF olarak mı göndermeliyim?",
      a: "Her zaman PDF. PDF'ler formatı ve tutarı kilitler; Word belgeleri iyi niyetli müşterileri bir şeyi “düzeltmeye” davet eder.",
    },
    {
      q: "KDV ya da satış vergisi faturaları ne olacak?",
      a: "Bazı yargı bölgeleri belirli bir yerleşim, sıralı numaralandırma ve orijinal format arşivi gerektirir. Yerel kurallara uy; yukarıdaki iş akışı bunlara uyum sağlar.",
    },
  ],
  related: [
    { label: "İşletmeler için PDF — sözleşmeler ve iş akışları", path: "/pdf-for-business" },
    { label: "Word'den PDF'e — temiz fatura dışa aktarmaları", path: "/word-to-pdf" },
    { label: "PDF'e Filigran Ekle — kapanan faturalara ÖDENDİ damgala", path: "/add-watermark-to-pdf" },
    { label: "Küçük İşletmeler İçin PDF İş Akışları (Teklif, Sözleşme, Kayıt)", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "İşletmeler için PDF", path: "/pdf-for-business" },
};

export default content;
