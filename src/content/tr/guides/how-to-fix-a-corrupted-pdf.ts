import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-a-corrupted-pdf",
  h1: "Bozuk Bir PDF Dosyası Nasıl Onarılır?",
  description:
    "“Bozuk” görünen PDF'lerin çoğu aslında bozuk değildir — yarım kalmış indirmeler, görüntüleyici uyumsuzlukları ya da eksik yazımlardır. Dosyayı kurtaran dürüst çözüm listesi ve gerçekten kaybolduğu durumlar.",
  updated: "2026-05-29",
  intro: [
    "“Bozuk” olarak adlandırılan neredeyse her PDF, daha az dramatik bir şeydir: bitmemiş bir indirme, hafifçe farklı bir dosyayı okumayı reddeden bir görüntüleyici ya da dosya kapatılmadan önce kesintiye uğrayan bir yazma işlemi. Gerçek bozulma — dosya içindeki baytların gerçekten hasar gördüğü durum — insanların düşündüğünden daha nadirdir ve gerçekleştiğinde kurtarma en iyi ihtimalle kısmidir.",
    "Bunun önemli olmasının nedeni, bu dört nedenin çözümlerinin tamamen farklı olmasıdır. Yeniden indirmek saniyeler alır; görüntüleyici değiştirmek saniyeler alır; bir yeniden dışa aktarma döngüsü bir dakika alır; gerçek bayt düzeyinde kurtarma saatler süren bir iş ve çoğu zaman imkansızdır. Dosyanın hangi kategoriye girdiğini bilmek gerçek zaman kazandırır.",
    "Bu rehber, teşhisleri en ucuzdan başlayarak ele alıyor, ardından kurtarılamaz olduğunda ne yapılacağını açıklıyor. Çoğu dosya üçüncü adımda hayata döner.",
  ],
  steps: [
    {
      title: "Dosyayı yeniden indir ya da yeniden al",
      body: "Yarım kalmış bir indirme, görüntüleyicinin bakış açısından bozulmayla aynı görünür. Dosyayı yeniden al. İkinci kopya açılıyorsa, ilki eksikti. Listeleniyorsa bayt boyutunu kaynakla karşılaştır.",
    },
    {
      title: "En az iki başka görüntüleyici dene",
      body: "Tarayıcılar, Önizleme, mobil okuyucular ve masaüstü uygulamaları PDF'i farklı şekilde işler. Acrobat'ın reddettiği bir dosya bazen Chrome'da sorunsuz açılır. Tek bir görüntüleyici bile okuyorsa, dosya gerçekten bozuk değildir.",
    },
    {
      title: "Dosyayı çalışan herhangi bir görüntüleyicide aç ve yeniden dışa aktar",
      body: "Çalışan görüntüleyiciden Yazdır-PDF'e (macOS, Windows, Linux) ya da “PDF olarak kaydet” dosya yapısını yeniden kurar. Yeni kopya, orijinali reddeden görüntüleyicilerde genelde açılır.",
    },
    {
      title: "PDF'ten Görsele ile sayfaları tek tek ayır",
      body: "Hiçbir görüntüleyici tüm dosyayı render etmiyor ama bazıları kısmi içerik gösteriyorsa, her sayfayı PDF'ten Görsele ile PNG olarak dışa aktar. Ardından bu PNG'lerden Görselden PDF'e ile taze bir PDF yeniden oluşturabilirsin — arama ve düzenlenebilirliği kaybedersin ama içeriği kurtarırsın.",
    },
    {
      title: "Dosya başlığını sade bir düzenleyicide kontrol et",
      body: "Dosyayı TextEdit, Not Defteri ya da VS Code'da aç. Gerçek bir PDF %PDF- ile ve ardından bir sürüm numarasıyla başlar. İlk baytlar başka bir şeyse, dosya bir PDF değildir — yeniden adlandırılmış, yanlış etiketlenmiş ya da değiştirilmiştir.",
    },
    {
      title: "Kaynaktan taze bir kopya iste",
      body: "Hiçbir şey dosyayı kurtarmıyorsa, kaynakta hâlâ orijinal vardır. Onu üreten Word, Google Docs ya da her ne ise oradan yeniden dışa aktar. Tam kaliteye dönen tek yol budur.",
    },
  ],
  tips: [
    "Garip davranan bir dosyayı düzenlemeye ya da birleştirmeye devam etme. Bozukluğu yeni dosyanın içine gömersin.",
    "Herhangi bir onarım denemesinden önce bozuk orijinali güvende tut. Onarım araçları bazen üzerine yazar ve bozuk dosya kaybedeceğin kısmi içerik barındırabilir.",
    "Bir yazma kesintisinin (elektrik kesintisi, kaydetme sırasında zorla kapatma) hemen ardından başarısız olan dosyalar genelde kurtarılamaz — dosyanın sonundaki yapısal dizin hiç yazılamamıştır.",
    "Mucize vaat eden “PDF onarma” web sitelerinden kaçın. Çoğu, kendi başına yapabileceğin aynı yazdır-PDF'e yeniden dışa aktarmayı yapar ve dosyanı yüklerler.",
    "Görüntü üzerinden kurtarılan PDF'ler tüm gerçek metni ve aranabilirliği kaybeder. Bu yolu sadece içeriğin dosya doğruluğundan daha önemli olduğu dosyalar için kullan.",
  ],
  mobileNote:
    "Telefonda, “bozuk” bir PDF'in olağan nedeni düzensiz bir hücresel indirmedir. PDF Editor uygulaması dosyaları yerel olarak saklar ve yeniden alıp yeniden açmanı sağlar, bu da bir masaüstü döngüsüne ihtiyaç duymadan kesilme sorununu temizler.",
  faq: [
    {
      q: "Bozuk bir PDF'in en yaygın nedeni nedir?",
      a: "Bitmemiş bir indirme. Dosya teknik olarak eksiktir, bozuk değil, ama görüntüleyiciler farkı anlayamaz. Yeniden indirmek çoğu durumu düzeltir.",
    },
    {
      q: "Gerçek PDF onarma araçları var mı?",
      a: "Bazı ticari araçlar onarım iddia eder, ama yaptıklarının çoğu ücretsiz olarak kendi başına yapabileceğin aynı yazdır-PDF'e yeniden dışa aktarmadır. Ağır hasarlı PDF'lerin gerçek yapısal onarımı uzmanlık gerektiren bir iştir.",
    },
    {
      q: "Bozuk bir PDF'i sıkıştırmak yardımcı olur mu?",
      a: "Sadece sıkıştırma aracı onu okuyabiliyorsa. Görüntüleyicin açamıyorsa, hiçbir sıkıştırıcı da açamaz. Sıkıştırma bir onarım tekniği değildir.",
    },
    {
      q: "Kurtarılan dosyam neden form alanlarını kaybediyor?",
      a: "Yazdır-PDF'e etkileşimli öğeleri statik piksellere düzleştirir. Form alanları, işaretlemeler ve imzalar görüntü haline gelir. Onları geri istiyorsan, kaynaktan yeniden iste.",
    },
    {
      q: "Görsel çıkarma her zaman içeriği kurtarabilir mi?",
      a: "Sadece herhangi bir görüntüleyici sayfaları hiç render edebiliyorsa. Dosya her yerde okunamıyorsa, bir görsel çıkarma aracı bile başarısız olur.",
    },
  ],
  related: [
    { label: "PDF'ten Görsele — kurtarılabilir sayfaları çıkar", path: "/pdf-to-images" },
    { label: "Görselden PDF'e — kurtarma sonrası sayfaları yeniden birleştir", path: "/image-to-pdf" },
    { label: "PDF'im Neden Açılmıyor? Nedenleri ve Pratik Çözümleri", path: "/guides/why-wont-my-pdf-open" },
    { label: "PDF'im Neden Boş Görünüyor? Gerçek Nedenler ve Kurtarma Yöntemi", path: "/guides/why-is-my-pdf-blank" },
  ],
  parentHub: { label: "Ücretsiz PDF Araçları", path: "/pdf-tools" },
};

export default content;
