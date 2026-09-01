import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-printing-issues",
  h1: "PDF Yazdırma Sorunları Nasıl Çözülür? (Kesilen Sayfa, Yanlış Boyut, Eksik Metin)",
  description:
    "Bir PDF kırpılmış, yanlış ölçekte ya da eksik metinle yazdırıldığında çözüm belirtiye bağlıdır. Her baskı sorununu doğru ayara ya da baskı öncesi düzeltmeye eşleştiren kısa bir tablo.",
  updated: "2026-05-29",
  intro: [
    "PDF'ler bir belgenin her yerde aynı görünmesi için oluşturuldu — kağıt üzerinde de dahil. Yani biri kötü yazdırıldığında, bu neredeyse her zaman yazdırma işidir, dosya değil. Sayfa kağıttan büyüktür, yazıcı küçültüyordur, bir yazı tipi gömülü değildir, bir güvenlik bayrağı yazdırmayı engelliyordur ya da belge bulunmadığın bir bölge için boyutlandırılmıştır.",
    "Bunların her biri farklı bir belirti üretir: kırpılmış kenarlar, minik metin, boş sayfalar, hata pencereleri ya da tuhaf ikame yazı tipleri. Hepsini “yazıcı bozuk” olarak ele almak çok kağıt israf eder. Onları belirli çözümleri olan belirli sorunlar olarak ele almak zaman kazandırır.",
    "Bu rehber kısa bir tablo: gördüğün şey ile en olası neden ve doğru çözüm. Çözümlerin çoğu yazdırma penceresindeki ayarlar ya da hızlı bir baskı öncesi adımdır.",
  ],
  steps: [
    {
      title: "Kenarlar kırpılıyorsa “Yazdırılabilir alana sığdır” ayarla",
      body: "Pek çok PDF, kağıdın tam taşma boyutuna göre ayarlanmıştır; yazıcılar kenara kadar yazdıramaz. Yazdırma penceresinde “Gerçek boyut” yerine “Sığdır” ya da “Yazdırılabilir alana küçült” seç. Sayfa çok hafif küçülecek ve kenarları kaybetmeyi bırakacaktır.",
    },
    {
      title: "Metin minikse kağıt boyutu uyuşmazlığını kontrol et",
      body: "A3 için hazırlanmış bir belge Letter'a küçülerek sığar. Kaynağı hedef kağıt boyutunda yeniden dışa aktar ya da yeniden yazdırmadan önce çift sayfayı PDF Sayfalarını Çıkar ile ikiye böl.",
    },
    {
      title: "Boş ya da eksik metinle yazdırılan sayfalar için yazı tiplerini göm",
      body: "Yazıcının sahip olmadığı yazı tiplerini kullanan belgeler eksik karakterler render edebilir. Kaynak uygulamada “tüm yazı tiplerini göm” etkinken yeniden dışa aktar, ya da önce her şeyi piksellere düzleştirmek için yazdır-PDF'e kullan.",
    },
    {
      title: "“Belge korumalı” hataları için düzenleme izinlerini kontrol et",
      body: "Bazı PDF'ler yazdırmayı engelleyen bayraklarla dışa aktarılır. Bunları sadece yazar kaldırabilir. Dosya senin ise, yazdırma kısıtlaması olmadan yeniden dışa aktar. Değilse, yazdırmaya izin verilen bir kopya iste.",
    },
    {
      title: "Yön yanlışsa yazdırmadan önce sayfaları döndür",
      body: "Sayfalar yan yatmışsa ya da baş aşağıysa, yazıcıya göndermeden önce Döndür PDF ile düzelt. Yazıcı tarafında döndürme genelde kendi ölçekleme sorunlarını getirir — dosyada düzeltmek daha temizdir.",
    },
    {
      title: "Tek sayfalık bir çıkarımdan test sayfası yazdır",
      body: "50 sayfalık bir belgeyi bir yazdırma sorununu keşfederek harcama. PDF Sayfalarını Çıkar, tek bir sayfayı bağımsız bir PDF olarak kaydedebilir; onu yazdır, ayarları doğrula, sonra tam işi çalıştır.",
    },
  ],
  tips: [
    "Yazdırma penceresinde seçilen kağıt boyutunun PDF sayfa boyutuyla eşleştiğini her zaman kontrol et — Letter ile A4 uyuşmazlıkları “çok küçük” belirtisinin çoğuna neden olur.",
    "Dosya yanlış davranıyorsa önce yazdır-PDF'e uygula. Orijinal yazdırmadığında düzleştirilmiş kopya genelde temiz yazdırır.",
    "Kitapçık ve orta zımba ayarları çözdüklerinden daha fazla yazdırma sorunu yaratır — önce düz sayfaları yazdır, gerekiyorsa sonra fiziksel olarak yeniden düzenle.",
    "Tasarım yazılımından gelen renk profilleri ev yazıcılarında karanlık ya da bulanık baskılar üretebilir. sRGB olarak yeniden dışa aktarmak genelde bunu düzeltir.",
    "Yazıcı sürücüsü eskiyse, Yazdır-PDF'e üzerinden bir yeniden dışa aktarma, sürücünün ele alamadığı özellikleri gizleyebilir.",
  ],
  mobileNote:
    "Telefondan yazdırmak genelde AirPrint, Google Print ya da bir üretici uygulaması üzerinden geçer ve her biri PDF'i biraz farklı ele alır. PDF Editor uygulaması göndermeden önce sayfaları boyutlandırmanı, döndürmeni ve kırpmanı sağlar — yazdırma penceresiyle uğraşmak yerine PDF'i düzeltmek mobilde genelde daha iyi çalışır.",
  faq: [
    {
      q: "PDF'im neden ekrandan daha küçük yazdırılıyor?",
      a: "Neredeyse her zaman belge boyutu kağıt boyutuyla eşleşmediği için. Yazıcı sığdırmak için küçültür. Hedef kağıt boyutunda yeniden dışa aktar ya da eşleşen kağıtla “Gerçek boyut” kullan.",
    },
    {
      q: "Yazdırırken neden bazı karakterler eksik?",
      a: "Yazı tipleri gömülü değildi ve yazıcında yok. Gömülü yazı tipleriyle yeniden dışa aktar, ya da önce her şeyi düzleştirmek için yazdır-PDF'e kullan.",
    },
    {
      q: "Yazdırma penceresi neden PDF'imin korumalı olduğunu söylüyor?",
      a: "Yazdırmayı engelleyen bir izin bayrağı var. Sadece yazar bunu kaldırabilir. Güvenli bir alıcı tarafı aşma yöntemi yoktur.",
    },
    {
      q: "Sayfaları yazıcıda mı yoksa dosyada mı döndürmeliyim?",
      a: "Dosyada. Yazıcı döndürmesi ölçekleme sorunları getirebilir, oysa Döndür PDF yönü doğrudan belgenin içine yerleştirir.",
    },
    {
      q: "Yazdırma sorunlarını teşhis ederken kağıt israfını nasıl önlerim?",
      a: "Önce tek bir sayfa çıkar, onu yazdır, ayarları doğrula, sonra tam işi çalıştır. PDF Sayfalarını Çıkar bunu tarayıcında yapar.",
    },
  ],
  related: [
    { label: "PDF Döndür — yazdırmadan önce yönü düzelt", path: "/rotate-pdf" },
    { label: "PDF Sayfalarını Çıkar — önce tek sayfa test-yazdır", path: "/extract-pdf-pages" },
    { label: "PDF Biçimlendirme Sorunları Nasıl Çözülür? (Satır Kayması, Kenar Boşluğu, Boşluklar)", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "PDF Yazı Tipi Sorunları Nasıl Çözülür? (Eksik, Değiştirilmiş, Bozuk)", path: "/guides/how-to-fix-pdf-font-issues" },
  ],
  parentHub: { label: "Ücretsiz PDF Araçları", path: "/pdf-tools" },
};

export default content;
