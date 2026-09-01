import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-compression-settings",
  h1: "En İyi PDF Sıkıştırma Ayarları — Bir Karar Rehberi",
  description:
    "E-posta, baskı, arşivleme ya da web için hangi sıkıştırma düzeyi? Ayarları amaca eşleştiren pratik bir tablo, dürüst ödünleşimlerle.",
  updated: "2026-05-23",
  intro: [
    "Tek bir “en iyi” sıkıştırma ayarı yoktur — sadece dosyayla ne yapacağına göre en iyi ayar vardır. Bir fişi e-postayla göndermek için mükemmel olan düzey, matbaaya gidecek bir belgeyi mahveder. Yani sana gereken sihirli bir sayı değil, ayarı amaca hızlıca eşleştirecek bir yöntemdir.",
    "Bu rehber tam olarak o karar tablosudur. Ücretsiz PDF Sıkıştır aracındaki düzeyleri — Düşük, Önerilen ve Güçlü — her birinin mantıklı olduğu durumlarla eşleştirir ve her seçimin arkasındaki ödünleşimi açıklar. Araç, hiçbir şey yüklenmeden tarayıcında çalışır ve boyut tasarrufunu göstererek seçimini doğrulamana yardımcı olur.",
    "Bir kere okuduğunda tahmin etmeyi bırakırsın: belgenin ne için olduğunu görür görmez hangi düzeye uzanman gerektiğini bileceksin.",
  ],
  steps: [
    {
      title: "E-posta ekleri için: Önerilen",
      body: "Varsayılan denge noktası. Çoğu dosya için Gmail'in 25 MB ve Outlook'un yaklaşık 20 MB sınırının altına iner, belgeyi ekranda rahatça okunur tutar.",
    },
    {
      title: "Sıkı limitli yükleme portalları için: Güçlü",
      body: "Devlet ve İK portalları genelde birkaç megabayt ile sınırlıdır. Güçlü düzey seni oraya taşır. Taramalar bunu iyi kaldırır; tasarlanmış belgelerde sonucun hâlâ kabul edilebilir olduğunu kontrol et.",
    },
    {
      title: "Baskı ya da resmi kayıtlar için: Düşük",
      body: "Dosya yazdırılacaksa ya da kaliteli bir kayıt olarak tutulacaksa, en fazla detayı korumak için Düşük düzeyini kullan. Dosya gerçekten küçülmesi gerekiyorsa sıkıştır, yoksa hiç dokunma.",
    },
    {
      title: "Uzun vadeli arşivleme için: en az ya da hiç",
      body: "Bir arşiv boyuttan çok sadakati önceliklendirmelidir. Sıkıştırıyorsan bile hafif sıkıştır ve sıkıştırılmamış bir asıl kopya sakla — bir kopyayı sonra her zaman küçültebilirsin, ama kaybolan bir detayı geri getiremezsin.",
    },
    {
      title: "Web ve sadece ekranda okuma için: Önerilen'den Güçlü'ye",
      body: "Sadece ekranda okunacak belgeler daha ağır sıkıştırmaya dayanır. Baskı kalitesinin önemsiz olduğu, hızlı yüklenen web indirmeleri için Güçlü'ye eğil.",
    },
    {
      title: "Öncesi ve sonrası boyutla doğrula",
      body: "Hangisini seçersen seç, araç tasarrufu gösterir. Daha hafif bir düzey zaten hedefine ulaşıyorsa onu kullan — gereğinden fazla sıkıştırmanın hiçbir ödülü yok.",
    },
  ],
  tips: [
    "Önce amaç, sonra ayar. Dosyaya ne olacağına karar ver, ardından düzeyi seç — tersi değil.",
    "Taramalar, tasarlanmış belgelerden daha güçlü ayarlara dayanır. Taranmış bir form için sorun olmayan aynı Güçlü düzey, fotoğraf ağırlıklı bir broşürü fazla yumuşatabilir.",
    "Her düzey sayfaları görsele dönüştürür ve seçilebilir metni kaldırır. Belgenin aranabilir kalması gerekiyorsa bu, seçimini boyut kadar etkiler.",
    "Metin ve vektör ağırlıklı PDF'ler hangi ayarda olursa olsun neredeyse hiç küçülmez — sıkıştırılacak görsel veri azdır, yani Güçlü düzeyden mucize bekleme.",
    "Önemli olan her şey için sıkıştırılmamış bir asıl kopya sakla. Sıkıştırma tek yönlüdür; asıl kopya, ileride ihtiyacın olan herhangi bir boyutu yeniden elde etmeni sağlar.",
  ],
  mobileNote:
    "PDF Editor uygulaması, hareket halindeyken de ayarı amaca eşleştirmeyi kolaylaştırır: çevrimdışı sıkıştır, sonucu önizle ve paylaşmadan önce düzeyi ayarla. Korumalı dosyaları da destekler ve her şeyi cihazında tutar.",
  faq: [
    {
      q: "En iyi sıkıştırma ayarı hangisi?",
      a: "Tek bir cevabı yok — amaca bağlı. Önerilen e-posta için uygundur, Güçlü sıkı yükleme limitleri ve sadece ekranda kalacak dosyalar için uygundur, Düşük (ya da hiç sıkıştırma yok) baskı ve arşivleme için uygundur.",
    },
    {
      q: "Bir PDF'i e-postayla göndermek için hangi ayar en iyi?",
      a: "Önerilen. Çoğu dosya için tipik 20-25 MB e-posta limitlerinin altına iner ve belgeyi okunur tutar. Hâlâ limiti aşıyorsan Güçlü'ye geç.",
    },
    {
      q: "Yazdıracağım bir belge için neyi kullanmalıyım?",
      a: "Düşük ya da hiç sıkıştırma yapma. Baskı detay gerektirir, o yüzden kaliteyi koru ve dosya gerçekten yönetilemeyecek kadar büyükse ancak o zaman küçült.",
    },
    {
      q: "Daha güçlü ayarlar aranabilir metni kaldırır mı?",
      a: "Tüm düzeyler sayfaları yeniden görsel olarak oluşturur, bu da seçilebilir metni kaldırır. Belge aranabilir kalmalıysa, hangi düzeyi seçersen seç orijinali sakla.",
    },
    {
      q: "Güçlü düzey metin ağırlıklı PDF'imi neden pek küçültmedi?",
      a: "Sıkıştırma görsel veriyi hedef alır. Sadece metin ya da vektörden oluşan bir PDF'te sıkıştırılacak az şey vardır, yani Güçlü bile küçük bir tasarruf sağlar. O dosya başka bir nedenle büyük.",
    },
  ],
  related: [
    { label: "PDF Sıkıştır — düzeyini seç", path: "/compress-pdf" },
    { label: "Kaliteden Fazla Kaybetmeden PDF Nasıl Sıkıştırılır?", path: "/guides/compress-pdf-without-losing-too-much-quality" },
    { label: "Taranmış Bir PDF Nasıl Sıkıştırılır? (Büyük Tasarruf)", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Yüklemeden Önce PDF Boyutu Nasıl Küçültülür?", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "PDF Sıkıştır", path: "/compress-pdf" },
};

export default content;
