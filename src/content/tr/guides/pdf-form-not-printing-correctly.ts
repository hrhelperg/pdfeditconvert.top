import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-printing-correctly",
  h1: "PDF Formu Doğru Yazdırılmıyor mu? Boş Alanları Düzelt",
  description:
    "Form boş alanlarla, kaymış metinle ya da kesilmiş kenarlarla mı yazdırılıyor? Forma özel yazdırma sorunları — özellikle eksik alan değerleri — ve her birini düzelten ayarlar.",
  updated: "2026-06-01",
  intro: [
    "Formlar, sıradan PDF'lerin yaşamadığı şekillerde kötü yazdırılır. En yaygın ve en kafa karıştırıcı olanı, doldurulmuş alanların boş çıkmasıdır — ekranda her şeyi tamamladın, ama kağıt sadece boş formu gösteriyor. Hemen ardından satırından kayan alan metni, yazdırılmayan onay kutuları ve kesilen kenarlar gelir. Her birinin, form alanlarının sayfa içeriğinden farklı yazdırılma biçiminde kökleşmiş belirli, düzeltilebilir bir nedeni vardır.",
    "Başlıktaki sorun — kağıtta boş alanlar — doldurulmuş cevapların formun alan katmanında yaşamasından ve bazı yazdırma yollarının bu katmanı tamamen atlamasından kaynaklanır. Çözüm ya form alanlarını dahil eden bir yazdırma ayarıdır ya da cevapların sayfanın bir parçası olması için önce formu kilitlemektir. Diğer sorunlar ölçekleme ve alan görüntülemesiyle ilgilidir, her birinin kendi ayarı vardır.",
    "Bu kılavuz forma özel yazdırma sorunlarına odaklanıyor. Herhangi bir belgede yanlış sayfa boyutları gibi genel PDF yazdırma sorunları için, daha geniş yazdırma kılavuzu daha kapsamlıdır.",
  ],
  steps: [
    {
      title: "Boş alanları düzelt: alan değerlerini yazdır ya da kilitle",
      body: "Doldurulmuş alanlar boş yazdırılıyorsa, form alanlarını yazdırma seçeneğini etkinleştir (bazen “belge ve işaretlemeler”) ya da cevapların sayfaya birleşip her zaman yazdırılması için önce formu kilitle.",
    },
    {
      title: "Kaymış alan metnini düzelt",
      body: "Alan metni yanlış yerde ya da yanlış yazı tipinde yazdırılıyorsa, görüntüleyicin alanları yazdırma için farklı işliyordur. Kilitleme, ekranda gördüğün görünümü sabitler, böylece aynı şekilde yazdırır.",
    },
    {
      title: "Kayıp onay kutularını ve işaretleri düzelt",
      body: "Kağıtta kaybolan onay işaretleri, boş metinle aynı alan katmanı sorunudur. Form alanlarını yazdırma ayarı ya da bir kilitleme adımı, diğer cevaplarınla birlikte onları da geri getirir.",
    },
    {
      title: "Kesilen kenarları düzelt",
      body: "Ölçeği özel bir yakınlaştırma yerine “sığdır” ya da %100 olarak ayarla, ve kağıt boyutunu formla eşleştir. Bu, alan katmanı sorunundan ayrı bir ölçekleme sorunudur ama yoğun formlarda yaygındır.",
    },
    {
      title: "Doğrulamak için bir sayfa yazdır",
      body: "Ayarları değiştirdikten sonra önce tek bir sayfa yazdır. Çok sayfalı formu tamamen kağıda vermeden önce cevapların, hizalamanın ve kenar boşluklarının doğru göründüğünü doğrula.",
    },
  ],
  tips: [
    "Yazdırmadan önce kilitlemek, boş ya da kaymış alanlar için evrensel çözümdür — kilitlenmiş bir form özel bir ayara gerek kalmadan cevaplarını her yerde yazdırır.",
    "Cevaplar ekranda görünüyor ama kağıtta görünmüyorsa, sorun dosyada değil bir yazdırma ayarındadır — form alanları seçeneğini yeniden kontrol et.",
    "Ölçekleme ve kağıt boyutu sorunları boş alan sorunundan ayrıdır; bunları sığdır/%100 ve eşleşen kağıtla düzelt.",
    "Taranmış, etkileşimsiz formlar bu boş alan sorununu yaşamaz çünkü cevapları zaten sayfanın bir parçasıdır.",
    "Yazdırma seçeneği adları uygulama ve yazıcıya göre değişir, o yüzden form alanlarından, işaretlemelerden ya da yorumlardan bahseden herhangi bir şeyi ara.",
  ],
  mobileNote:
    "Telefon yazdırma kısayolları da masaüstü kısayolları gibi alan değerlerini düşürebilir. PDF Editor uygulamasında, yazdırmadan ya da bir yazıcıyla paylaşmadan önce tamamlanmış formu kilitle, böylece her cevap sayfaya işlenir ve güvenilir şekilde çıkar.",
  faq: [
    {
      q: "Formum neden boş alanlarla yazdırılıyor?",
      a: "Doldurulmuş cevaplar formun alan katmanındadır ve yazdırma yolun onu atlıyor. Form alanı değerlerini yazdırma seçeneğini etkinleştir ya da cevapların sayfanın bir parçası olup her zaman yazdırılması için formu kilitle.",
    },
    {
      q: "Alan metni neden yanlış yerde ya da yazı tipinde yazdırılıyor?",
      a: "Görüntüleyici alanları yazdırma için farklı işler. Önce formu kilitle — kilitleme, ekranda gördüğün görünümü düzeltir, böylece birebir aynı yazdırır.",
    },
    {
      q: "Onay işaretlerim neden yazdırılmıyor?",
      a: "Boş metinle aynı nedendir: onay kutuları alan katmanının bir parçasıdır. Form alanları yazdırma ayarı ya da bir kilitleme adımı, diğer cevaplarınla birlikte onları da yazdırır.",
    },
    {
      q: "Yazdırılmış formum neden kenarlardan kesiliyor?",
      a: "Bu, alan sorunundan ayrı bir ölçek ya da kağıt boyutu uyumsuzluğudur. Ölçeği sığdır ya da %100 olarak ayarla ve kağıt boyutunu formun sayfa boyutuyla eşleştir.",
    },
    {
      q: "Bu, genel PDF yazdırma sorunlarından nasıl farklı?",
      a: "Bu, forma özel sorunları — başlıca boş alan değerlerini — kapsar. Genel PDF yazdırma kılavuzu, herhangi bir PDF'de yanlış boyutlar ve kırpma gibi belge çapındaki sorunları ele alır.",
    },
  ],
  related: [
    {
      label: "Doldurulmuş bir PDF formu nasıl yazdırılır",
      path: "/guides/how-to-print-a-filled-pdf-form",
    },
    {
      label: "PDF yazdırma sorunları nasıl çözülür",
      path: "/guides/how-to-fix-pdf-printing-issues",
    },
    { label: "PDF formu çalışmıyor mu", path: "/guides/pdf-form-not-working" },
    { label: "PDF form hataları nasıl düzeltilir", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
