import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-documents-to-pdf",
  h1: "Telefonla Belgeler PDF'e Nasıl Taranır?",
  description:
    "Telefon kamerasıyla çok sayfalı belgeleri temiz PDF'lere tara. Kenar algılama ve OCR içeren mobil iş akışı.",
  updated: "2026-05-11",
  intro: [
    "Telefonlar, varsayılan kamerayı kullanmayı bıraktığın anda mükemmel belge tarayıcılarına dönüşür. Doğru uygulama kenar algılama, perspektif düzeltme, kontrast ayarı ve OCR'ı halleder — elde tutularak çekilen bir fotoğrafı, anlık görüntü değil de tarama gibi görünen temiz, aranabilir bir PDF'e dönüştürür.",
    "Bu rehber, iPhone veya Android'de PDF Editor uygulamasındaki belge tarama iş akışını adım adım gösteriyor. Her iki platform da eşdeğer sonuçlar üretir. Günlük durumları ele alacağız: fişler, imzalı formlar, çok sayfalı sözleşmeler, kimlikler ve telefonla taramanın masaüstü tarayıcıya gitmekten daha iyi olduğu anlar.",
    "Sonunda, ideal olmayan ışıkta bile işe yarayan, muhasebecilerin ve hukuk ekiplerinin sorgusuz kabul ettiği dosyalar üreten ve her şeyi cihaz üzerinde tutan, tekrarlanabilir bir tarama rutinin olacak.",
  ],
  steps: [
    {
      title: "Tarayıcıyı aç",
      body: "PDF Editor uygulamasının ana ekranındaki Tarama kutucuğuna dokun. Kenar algılama etkinken kamera vizörü açılır.",
    },
    {
      title: "Belgeyi kontrast oluşturan bir yüzeye koy",
      body: "Kenar algılama, sayfa ile arkasındaki yüzey arasında net bir kontrast olduğunda en iyi çalışır. Beyaz kağıdı koyu bir yüzeye koy ya da tam tersini yap.",
    },
    {
      title: "Telefonu sayfanın üzerine tut",
      body: "Telefonu belgenin yaklaşık üzerinde tut. Uygulama, algılanan kenarların etrafına mavi bir çerçeve çizer. Çerçeve sabitlendiğinde otomatik olarak çeker.",
    },
    {
      title: "Otomatik çek veya elle dokun",
      body: "Kadraj doğru olduğunda kamera titreşir ve çeker. Otomatik çekim kenarları kaçırıyorsa, elle çekim düğmesine dokun. Köşeleri her zaman bir sonraki adımda ayarlayabilirsin.",
    },
    {
      title: "Algılanan köşeleri ayarla",
      body: "Gerekirse kenarları ince ayarlamak için köşe tutamaçlarını sürükle. Bu adımdan sonra perspektif düzeltme devreye girer ve açılı çekimden dikdörtgen bir sayfa üretir.",
    },
    {
      title: "Bir filtre uygula",
      body: "Renkli, Gri Tonlama ya da Siyah-Beyaz seç. Fişler ve formlar için Siyah-Beyaz, kalite kaybı olmadan dosyayı önemli ölçüde küçültür. Fotoğraf veya renkli öğeler içeren belgeler için Renkli'de kal.",
    },
    {
      title: "Daha fazla sayfa ekle",
      body: "Ek sayfalar çekmek için ekranın altındaki sayfa sayacına dokun. Her yeni çekim mevcut PDF'e eklenir. Gerekirse sayfaları küçük resim şeridinden yeniden sırala.",
    },
    {
      title: "PDF'i kaydet",
      body: "Bitti'ye dokun, dosyaya anlamlı bir ad ver ve kaydet. OCR arka planda çalışarak sonuçtaki PDF'i aranabilir hale getirir. Ardından paylaşabilir, yazdırabilir ya da bir bulut sürücüsüne yükleyebilirsin.",
    },
  ],
  tips: [
    "Yayılmış, eşit bir ışık, parlak tepe ışığından daha iyidir — doğrudan ışık, parlak kağıtta veya laminasyonlu formlarda yansıma oluşturur.",
    "Belgeyi düz bir şekilde yerleştir. Kavisli sayfalar (açık bir kitap gibi), perspektif düzeltmenin tam olarak çözemediği metin bozulmalarına neden olur.",
    "Fişler için Siyah-Beyaz filtresi genelde dosya boyutunu okunabilirlik kaybı olmadan %60-80 azaltır.",
    "Kimlik veya pasaport tararsan, sonuçtaki PDF'i şifre korumalı bir klasöre kaydet ya da paylaşmadan önce bir PDF şifresi uygula.",
    "Kadraj iyi olduğunda otomatik çekim bir saniyeden kısa sürede çalışır. Zorlanıyorsa sorun muhtemelen ışık ya da kontrasttır.",
  ],
  mobileNote:
    "Tam tara-ve-kaydet akışı, çok sayfalı bir belge için 30 saniyeden kısa sürer. Masaüstü tarayıcıya gitmek, tarayıcı yazılımı indirmek ve e-posta eklerini yönetmekle karşılaştırıldığında, telefon günlük iş ihtiyaçları için açık ara kazanıyor. Çıktı, her muhasebe aracının ve belge sisteminin kabul ettiği aynı standart, aranabilir PDF.",
  faq: [
    {
      q: "Tarama kalitesi masaüstü bir tarayıcı kadar iyi mi?",
      a: "Günlük belgeler için — fişler, sözleşmeler, kimlikler, formlar — doğru ışık ve düz bir belgeyle evet. Arşivlik fotoğraf taraması ya da parlak kağıttaki ince baskı için özel bir masaüstü tarayıcı hâlâ öne geçiyor.",
    },
    {
      q: "OCR hangi dilleri destekliyor?",
      a: "Latin alfabesini kullanan tüm büyük diller (İngilizce, İspanyolca, Fransızca, Almanca, İtalyanca, Portekizce, Hollandaca, Çekçe, Lehçe vb.) ile birlikte Kiril, Yunan, Arap, Çince, Japonca ve Korece. Tanıma kalitesi temiz baskılı metinde en yüksek, el yazısında ise daha düşük.",
    },
    {
      q: "Bir kimlik veya pasaport tarayabilir miyim?",
      a: "Evet. Uygulama, KYC yüklemeleri ya da herhangi bir belge gönderimi için hazır, temiz ve düzgünleştirilmiş bir tarama üretir. E-postayla göndereceksen sonuçtaki PDF'e bir şifre uygula.",
    },
    {
      q: "Tarama çevrimdışı çalışıyor mu?",
      a: "Evet. Kenar algılama, perspektif düzeltme ve filtreleme cihaz üzerinde çalışır. OCR, büyük diller için yerel olarak çalışır; daha az yaygın diller ilk kullanımda bir tanıma modeli indirebilir.",
    },
    {
      q: "Taranan PDF'ler ne kadar büyük oluyor?",
      a: "Siyah-beyaz modda tipik 5 sayfalık bir belge yaklaşık 200-400 KB'a iner. Aynı tarama tam renkli olduğunda genelde 1-2 MB'tır. E-postayla göndermen gerekirse sıkıştırma bunları daha da azaltabilir.",
    },
  ],
  related: [
    { label: "PDF Tarama — genel bakış", path: "/scan-to-pdf" },
    {
      label: "Taranan PDF'i sonradan düzenle",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "İşletmeler için PDF", path: "/pdf-for-business" },
  ],
  parentHub: { label: "PDF Tarama", path: "/scan-to-pdf" },
};

export default content;
