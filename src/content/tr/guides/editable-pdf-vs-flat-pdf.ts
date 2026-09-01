import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-flat-pdf",
  h1: "Düzenlenebilir PDF ile Görüntü PDF'i Arasındaki Gerçek Fark",
  description:
    "Bazı PDF'lerin gerçek, seçilebilir metni ve düzenlenebilir yapısı vardır; bazıları altında metin katmanı olmayan sayfa görüntüleridir. Hangisine sahip olduğunu anlama ve her birinin ne zaman doğru olduğu.",
  updated: "2026-05-29",
  intro: [
    "İki dosya da PDF olabilir ve tamamen farklı davranabilir. Biri metni seçmene, alıntıları kopyalamana, kelimeleri aramana ve içeriği düzenlemene izin verir. Diğeri ekranda aynı görünür ama esasen bir belgenin resmidir — metin görselin ayrılmaz bir parçasıdır, ondan ayrı değildir. Birincisi düzenlenebilir bir PDF'tir; ikincisi bir görüntü PDF'idir (bazen taranmış ya da görsel PDF olarak da adlandırılır).",
    "Hangisine sahip olduğunu bilmek önemlidir çünkü her biriyle çalışma araçları farklıdır. Düzenlenebilir PDF'ler PDF düzenleyicilerine, dönüştürme araçlarına ve aramaya yanıt verir. Görüntü PDF'lerinin aranabilir hâle gelmesi için OCR gerekir ve onları düzenlemek ya önce OCR-sonra-düzenle demektir ya da görseli tamamen değiştirmek demektir. Bir görüntü PDF'i üzerinde düzenlenebilir-PDF araçlarını kullanmaya çalışmak genelde hayal kırıklığı üretir.",
    "Bu kılavuz farkı açıklıyor, sana iki saniyede söyleyen testi anlatıyor ve her birinin ne zaman doğru seçim olduğunu gösteriyor. Bazen görüntü PDF'i bilinçlidir — bazen dosyanın nasıl üretildiğinin bir kazasıdır.",
  ],
  steps: [
    {
      title: "İki saniyelik test: metni seçmeyi dene",
      body: "PDF'i aç, biraz metnin üzerine tıklayıp sürükle. Metin seçiliyorsa (vurgulanıyor, kopyalanabiliyor), düzenlenebilir bir PDF'tir. İmlecin bir seçim çerçevesi çiziyor ama hiçbir metin vurgulanmıyorsa, görüntü PDF'idir — “metin” görsel veridir.",
    },
    {
      title: "Düzenlenebilir PDF: metin seçilebilir, aranabilir, kopyalanabilir",
      body: "Word, Pages, Docs ya da tasarım araçlarından doğrudan dışa aktarmalar düzenlenebilir PDF'ler üretir. Metin, dosyanın içindeki yapılandırılmış veridir; arama ve kopyala-yapıştır çalışır; PDF düzenleyicileri onu değiştirebilir.",
    },
    {
      title: "Görüntü PDF'i: bir sayfanın görseli, altında metin yok",
      body: "Taranmış belgeler en yaygın görüntü PDF'leridir. Metin sadece piksel olarak var olur; altında karakter verisi yoktur. Arama hiçbir şey döndürmez; kopyala-yapıştır hiçbir şey döndürmez.",
    },
    {
      title: "OCR görüntü PDF'ini aranabilire çevirir (ama mükemmel şekilde düzenlenebilir yapmaz)",
      body: "OCR sayfa görselini analiz eder ve piksellerin altına bir metin katmanı ekler. Arama çalışmaya başlar; kopyala-yapıştır yaklaşık metin döndürür. Düzenleme hâlâ görsel unsurları elle değiştirmeyi gerektirir.",
    },
    {
      title: "Görüntü PDF'i bilinçli olduğunda: kilitleme, görsel-mükemmel sadakat",
      body: "Bazı iş akışları bilinçli olarak bir PDF'i düzleştirir — dosya kolayca düzenlenemez, imzalar ve damgalar alttaki metni bozmaz. PDF'ten Görsele, ardından Görselden PDF'e görüntü bir kopyayı gidiş dönüş yaptırır.",
    },
    {
      title: "Düzenlenebilir olan bilinçli olduğunda: diğer her iş akışı",
      body: "Paylaşım, imzalama, düzenleme, arşivleme, yeniden amaçlandırma için — düzenlenebilir PDF doğru seçimdir. Özellikle ihtiyacın olmadıkça düzleştirme.",
    },
  ],
  tips: [
    "Ürettiğin bir PDF'te metni seçemiyorsan, dışa aktarma ayarları metin katmanını düşürmüştür. “Metni koru” etkinken yeniden dışa aktar.",
    "Eski tarayıcılardan gelen taranmış PDF'ler genelde görüntü PDF'idir. Uzun vadede kullanışlı olmaları için tarama anında ya da sonradan bir araçla OCR uygula.",
    "Görüntü PDF'leri eşdeğer düzenlenebilir PDF'lerden daha büyüktür — görsel verisi karakter verisinden daha fazla yer kaplar.",
    "Bir PDF'i “kilitlemek” için düzleştirme — uygun düzenleme kısıtlamaları daha iyi çalışır ve aranabilirliği korur.",
    "Bazı “düzenlenebilir” PDF'ler her karakteri metin yerine küçük bir şekil olarak dışa aktarır. Seçim doğru görünür ama kopyala-yapıştır anlamsız metin üretir. Düzenleme için en kötü durum budur.",
  ],
  mobileNote:
    "Mobilde, görüntü ve düzenlenebilir PDF'ler bir görüntüleyicide aynı görünür. PDF Editor uygulaması farkı düzenleme modunda işaretler — hangi dosyaların gerçek metne sahip olduğunu ve hangilerinin sadece görsel olduğunu görebilir ve onları buna göre OCR'a ya da doğrudan düzenlemeye yönlendirebilirsin.",
  faq: [
    {
      q: "Hangi türe sahip olduğumu bir bakışta nasıl anlarım?",
      a: "Metni seçmeyi dene. Seçim çalışıyorsa ve kopyalama temiz metin döndürüyorsa düzenlenebilirdir. Değilse görüntü PDF'idir.",
    },
    {
      q: "Taranmış PDF'ler her zaman görüntü PDF'i mi?",
      a: "Tarayıcıdan çıktığı hâliyle evet. Birçok tarama uygulaması artık otomatik olarak OCR uygular ve aranabilir bir görüntü PDF'i üretir — metin hâlâ görsel olarak işlenir ama altına aranabilir bir katman eklenir.",
    },
    {
      q: "Bir görüntü PDF'ini düzenleyebilir miyim?",
      a: "Sadece görseli işleyerek (döndür, kırp, üzerine metin ekle). Gerçek metin düzenlemesi önce OCR gerektirir ve o zaman bile çıktı yaklaşıktır.",
    },
    {
      q: "Neden bir görüntü PDF'i isteyeyim?",
      a: "Metin düzenlemelerini engellemek için, imzaları ve damgaları taşınamayacak şekilde kilitlemek için ya da görsel-mükemmel bir sunum teslim etmek için. Nadir ama gerçek kullanım durumları.",
    },
    {
      q: "Hangi türü aldığım dosya formatına mı bağlı?",
      a: "Evet — kelime işlemcilerden doğrudan dışa aktarmalar düzenlenebilir PDF'ler üretir; taranıp-sonra-kaydedilen dosyalar görüntü PDF'leri üretir. Kaynak türü belirler.",
    },
  ],
  related: [
    { label: "PDF Düzenleyici — mobilde metin ve görsel düzenle", path: "/pdf-editor" },
    { label: "Bir PDF'i neden düzenleyemiyorum", path: "/guides/why-cant-i-edit-a-pdf" },
    { label: "PDF'ten Word'e — düzenlenebilir metni kurtar", path: "/pdf-to-word" },
    { label: "Taranmış PDF ne zaman kullanılmalı", path: "/guides/when-to-use-scanned-pdf" },
  ],
  parentHub: { label: "PDF Düzenleyici — metin, görsel ve sayfa düzenle", path: "/pdf-editor" },
};

export default content;
