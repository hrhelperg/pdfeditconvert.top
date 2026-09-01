import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blurry",
  h1: "PDF'im Neden Bulanık? Çözünürlük, Sıkıştırma ve Tarama Nedenleri",
  description:
    "Bulanık PDF'ler düşük çözünürlüklü taramalardan, aşırı sıkıştırmadan ya da kötü bir dışa aktarmadan kaynaklanır — formatın kendisinden değil. Hangi nedenle karşı karşıya olduğunu anlama ve netliği geri kazanma yöntemi.",
  updated: "2026-05-29",
  intro: [
    "PDF'lerin kendisi hiçbir şeyi bulanıklaştırmaz. Format tırtıksız keskin vektör metni ve yüksek çözünürlüklü görselleri memnuniyetle barındırır. Yani bir PDF yumuşak, bulanık ya da pikselli göründüğünde, bulanıklık belirli bir yerden gelmiştir: düşük çözünürlüklü bir yakalama, çok ileri giden bir sıkıştırma geçişi ya da tırtıksız içeriği bitmap'e düzleştiren bir dışa aktarma ayarı.",
    "Dosyana hangisinin neden olduğunu bilmek önemlidir, çünkü çözümler tamamen farklıdır. Zaten ezilmiş bir dosyayı “sıkıştırmadan çıkaramazsın”, ama kaynaktan yeniden dışa aktarabilir, daha iyi bir çözünürlükte yeniden tarayabilir ya da farklı bir dönüştürme aracı seçebilirsin. Bazı dosyalar için ise bulanıklık sadece ekrandadır — orijinal hâlâ tam kalitede oradadır, sadece görüntüleyici tarafından küçültülerek render edilmiştir.",
    "Bu rehber nedenleri ayırıyor ve her biri için pratik çözümü ele alıyor, kaynağa geri dönmekten başka yapılacak bir şey olmadığı durumlar da dahil.",
  ],
  steps: [
    {
      title: "Yakınlaştır ve kenarlara bak",
      body: "Metinde keskin ama görsellerde bulanık kenarlar, metnin vektör (temiz) olduğu ve sadece fotoğrafların bozulduğu anlamına gelir — genelde sıkıştırmadan. Bulanık metin, tüm sayfanın bir raster görüntü olduğu anlamına gelir, bu da bir tarama ya da yazdır-görsel dışa aktarmasına işaret eder.",
    },
    {
      title: "Orijinal yakalama çözünürlüğünü kontrol et",
      body: "150 DPI altındaki taramalar ne olursa olsun bulanık görünür. 200-300 DPI, ekranda okuyacağın belgeler için güvenli aralıktır; 600, arşiv işi ve fotoğraf baskısı dışındaki her şey için gereğinden fazladır.",
    },
    {
      title: "Sıkıştırmanın abartılıp abartılmadığını araştır",
      body: "“Aşırı” sıkıştırmaya indirgenmiş dosyalar genelde %100 yakınlaştırmada iyi, %200'de korkunç görünür. Sıkıştırma öncesi orijinalin varsa, daha hafif bir ayarla yeniden sıkıştırabilirsin — PDF Sıkıştır aracı boyutu netlikle takas etmeni sağlar.",
    },
    {
      title: "Varsa kaynaktan yeniden dışa aktar",
      body: "Word, Pages, Google Docs ya da tasarım araçlarında oluşturulan belgeler doğrudan kaynaktan PDF olarak dışa aktarılmalı, bir ekran görüntüsünden yazdır-PDF'e ile değil. Doğrudan dışa aktarma metni vektör ve keskin tutar.",
    },
    {
      title: "Daha keskin ayarlarla yeniden tara",
      body: "Sorun bir taramaysa ve hâlâ kağıt elindeyse, iyi ışıkla 300 DPI'da yeniden yap. Telefon taramaları, düz yerleştirilmiş ve eşit ışıklandırılmış tek bir sayfadan büyük ölçüde fayda görür — temiz yakalama, işleme sonrası düzeltmeden daha iyidir.",
    },
    {
      title: "Dosyanın ekranda sadece küçültülüp küçültülmediğini doğrula",
      body: "Bazı görüntüleyiciler performans için alt örnekleme yapar ve yakınlaştırana kadar yumuşak görünür. PDF'ten Görsele ile bir sayfayı 2× ya da 3× ölçekte PNG'ye aktar — PNG keskinse, görüntüleyicin yalan söylüyordu.",
    },
  ],
  tips: [
    "İmlecinle seçilen metin vektör metindir ve bulanık olmamalıdır. Öyleyse, görüntüleyicin küçülterek render ediyordur — yeniden dışa aktarmadan önce farklı bir görüntüleyici dene.",
    "Bir belgeye eklenen telefon ekran görüntüleri zaten düşük çözünürlüktedir. Bir PDF'te her zaman yumuşak görünürler; daha büyük yeniden yakalamaktan başka çözüm yoktur.",
    "Bir dosyayı iki kez sıkıştırma. Tekrarlanan sıkıştırma bulanıklığı katlar. Orijinali sakla, paylaşım için bir kez sıkıştır, kaynağı arşivle.",
    "JPEG ağırlıklı PDF'ler, aynı sıkıştırmada PNG ağırlıklı olanlardan daha kötü bulanıklaşır — JPEG tasarım gereği kayıplıdır. PNG ekran görüntüleri daha uzun süre keskin kalır.",
    "Sadece bulanık bir sürümün varsa, görüntü bulanık görünse bile OCR bazen okunabilir metni geri kazandırabilir. Görüntü öyle olmasa bile metin temiz olacaktır.",
  ],
  mobileNote:
    "Telefonla çekilen PDF'ler en çok titrek eller, düşük ışık ya da kötü kadrajdan bulanıklaşır. PDF Editor uygulamasının tarama akışı otomatik kenar algılama ve sabitleme içerir, böylece sayfa başına tek bir sabit çekim ilk seferinde keskin bir belge üretir.",
  faq: [
    {
      q: "Bulanıklığa PDF formatının kendisi mi neden oluyor?",
      a: "Hayır. PDF metni vektör olarak ve görselleri kaynak çözünürlüklerinde saklar. Bulanıklık kaynaktan gelir — düşük DPI, aşırı sıkıştırma ya da bir ekran-yakalama dışa aktarması.",
    },
    {
      q: "Bulanık bir PDF'i sonradan keskinleştirebilir miyim?",
      a: "Ancak çok az. Bazı görüntü işleme yöntemleri fotoğraflarda sahte netlik yaratabilir, ama yakalanmamış detayı ekleyemezsin. Dürüst çözüm kaynak adımını yeniden yapmaktır.",
    },
    {
      q: "Sıkıştırılmış PDF'im neden sadece bazı sayfalarda bulanık?",
      a: "Sıkıştırma en çok görsel ağırlıklı sayfaları vurur. Sadece metin içeren sayfalar keskin kalır. Sadece bazı sayfalar bulanıksa, bunlar fotoğraf, grafik ya da tarama içerenlerdir.",
    },
    {
      q: "Hangi tarama çözünürlüğünü kullanmalıyım?",
      a: "Ekranda okuyacağın belgeler için 200-300 DPI. Yazdırabileceğin her şey için 300 DPI. 600 DPI sadece fotoğraflar ve arşiv için.",
    },
    {
      q: "PDF neden %100'de sorunsuz ama %200'de bulanık görünüyor?",
      a: "Ya düşük çözünürlükte rasterize edilmiş ya da yakınlaştırmanın kaybı ortaya çıkardığı noktanın ötesinde sıkıştırılmıştır. Yeniden dışa aktarmadan detayı geri getirmenin bir yolu yoktur.",
    },
  ],
  related: [
    { label: "PDF Sıkıştır — daha keskin çıktı için daha hafif ayarlar seç", path: "/compress-pdf" },
    { label: "PDF'ten Görsele — sayfaları yüksek çözünürlükte dışa aktar", path: "/pdf-to-images" },
    { label: "En İyi PDF Sıkıştırma Ayarları — Bir Karar Rehberi", path: "/guides/best-pdf-compression-settings" },
    { label: "Taranmış PDF Kalitesi Nasıl Düzeltilir? (Netleştirme, Eğiklik Giderme, Renk Düzeltme)", path: "/guides/how-to-fix-scanned-pdf-quality" },
  ],
  parentHub: { label: "PDF'ten Görsele", path: "/pdf-to-images" },
};

export default content;
