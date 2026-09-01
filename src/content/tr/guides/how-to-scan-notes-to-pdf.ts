import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-notes-to-pdf",
  h1: "El Yazısı Notlar PDF'e Nasıl Taranır? (Temiz, Aranabilir)",
  description:
    "El yazısı ders notu sayfalarını telefon kamerasıyla temiz, çok sayfalı PDF'lere çevir. İlk denemede okunaklı taramalar üreten ayarlar.",
  updated: "2026-05-29",
  intro: [
    "El yazısı ders notları hâlâ bir dersi yakalamanın en hızlı yoludur ve çoğu öğrenci onları dijitalleştirmek yerine kağıtta bırakır — çünkü taramalar genelde kötü çıkar. Eğik sayfalar, soluk gri taramalar, şişkin dosya boyutları ve kötü çıkanları yeniden çekmek için harcanan zaman. Bir dönem boyunca toplanınca notların defterde kalmasının nedeni budur.",
    "Telefondan temiz taramalar almak çoğunlukla uygulamayla değil, teknik ve ayarlarla ilgilidir. Eşit ışık, kare çerçeveleme, açık kontrast, renkli değil gri tonlama ve varsa kenar algılama. İyi çekilmiş bir sayfa, bir enstantaneden çok bir masaüstü tarayıcıya benzer.",
    "Bu kılavuz tekniği baştan sona anlatıyor — iyi tarama üreten oda koşulları, sayfa başına yaklaşım, çok sayfalı iş akışı ve PDF'i oluşturduktan sonra ne yapılacağı. Elinde bir telefon olduğunu ve tarayıcı satın almadan temiz, çok sayfalı bir PDF istediğini varsayıyor.",
  ],
  steps: [
    {
      title: "Sayfayı kontrastlı bir zemine yerleştir",
      body: "Çizgili kağıdı koyu bir masaüstünde. Düz beyazı koyu bir bez üzerinde. Sayfa kenarını kameraya ve otomatik kırpmaya belirgin yapacak her şey. Parlamadan kaçın; eşit ışık, parlak ışıktan iyidir.",
    },
    {
      title: "Telefonu sayfaya paralel tut",
      body: "Kamera sayfanın tam üzerinde olmalı, eğik değil. Eğiklik, otomatik düzeltmenin giderebileceği ama kare bir çekim kadar iyi gideremeyeceği perspektif bozulması yaratır.",
    },
    {
      title: "Kenar algılamalı bir tarama uygulaması kullan",
      body: "PDF Tarama ya da PDF Editor uygulamasının tarama akışı sayfa kenarını algılayıp otomatik kırpar. Rastgele telefon fotoğrafları bunu yapmaz; bir tarama uygulaması masaüstü tarayıcı benzeri bir sonuç üretir.",
    },
    {
      title: "Gri tonlama ya da siyah-beyaz moda geç",
      body: "Beyaz kağıt üzerinde siyah mürekkebin renkli taramaları daha büyük, daha gürültülü ve daha yumuşaktır. Gri tonlama daha keskin, daha küçük, daha okunaklı taramalar üretir. Siyah-beyaz daha da küçüktür ama sonradan daha az esnektir.",
    },
    {
      title: "Her sayfayı çek, sonra birleştir",
      body: "Çok sayfalı tarama akışları sayfa sayfa çeker ve otomatik olarak tek bir PDF'te birleştirir. Ayrı ayrı çektiysen PDF Birleştir bunları sırayla bir araya getirir.",
    },
    {
      title: "Temizlik aşamasında kırp, döndür, yeniden sırala",
      body: "Bir sayfa sıra dışı çekildiyse PDF Sayfalarını Yeniden Sırala. Yan çekimler için PDF Döndür. Temizliğe bir dakika ayır; ileride kendine teşekkür edeceksin.",
    },
  ],
  tips: [
    "Temizliğe başlamadan önce tüm taramaları çek — modları sürekli değiştirmek akışı bozar.",
    "Işık eşit değilse sayfanın üzerinde tutulan tek bir beyaz kağıt, yansıtıcı gibi davranıp kontrastı belirgin şekilde iyileştirir.",
    "Çok sıkı kırpma. Sayfa kenarında bıraktığın küçük bir boşluk, belgeyi daha az amatör hissettirir.",
    "Arşivlemeden önce son PDF'i sıkıştır. Tarama ağırlıklı notlar büyüktür; sıkıştırılmış sürümler sonradan paylaşması daha kolaydır.",
    "Birleştirmeden önce bir kapak sayfası ekle (yazılı, ders adı + tarihle). Koleksiyon arşivinde kendini açıklar hâle gelir.",
  ],
  mobileNote:
    "Not taramak, telefonun günlük kullanımda gerçekten bir masaüstü tarayıcıdan daha iyi yaptığı işlerden biridir. PDF Editor uygulamasının tarama akışı tamamen telefonda çalışır — çekim, kenar algılama, kontrast, çok sayfalı birleştirme — sunucuya hiç uğramadan temiz bir PDF üretir.",
  faq: [
    {
      q: "Taranan el yazısı notlar aranabilir olur mu?",
      a: "Sadece araç üzerlerinde OCR çalıştırırsa — el yazısının görüntüsünü aranabilir metne dönüştürür. El yazısında OCR, basılı metinde olduğundan daha az güvenilirdir; kalite el yazısına ve taramaya bağlıdır.",
    },
    {
      q: "Not taramaları için en iyi telefon kamerası ayarı nedir?",
      a: "Tarama uygulamasının otomatik kontrastlı gri tonlama ya da siyah-beyaz modunu kullan. Standart kamera uygulamasına güvenme — fotoğrafları daha büyük, daha az kontrastlı ve daha zor okunur.",
    },
    {
      q: "Bir tarama oturumunda kaç sayfa olmalı?",
      a: "Bir oturuşta ne yazdıysan o kadar. Haftalık ya da her dersten sonra taramak, bir dönemin birikmesine izin vermekten daha kolaydır.",
    },
    {
      q: "Renkli mi taramalıyım?",
      a: "Sadece notların renk kullanıyorsa (fosforlu kalem, diyagramlar). Aksi hâlde gri tonlama ya da siyah-beyaz daha keskin ve daha küçüktür.",
    },
    {
      q: "Sayfa kırışık ya da lekeliyse ne olur?",
      a: "Otomatik kontrast çoğu kağıt eskimesini temizleyebilir. Ağır kırışıklık genelde belli olur; yeniden çekmeyi ya da kişisel çalışma materyali olarak kabul etmeyi düşün.",
    },
  ],
  related: [
    { label: "PDF Tarama — kenar algılamalı telefon kamerası taraması", path: "/scan-to-pdf" },
    { label: "PDF Birleştir — çok sayfalı taramaları birleştir", path: "/merge-pdf" },
    { label: "Telefonla belgeler PDF'e nasıl taranır", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Üniversite öğrencileri için PDF iş akışı", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF Tarama — telefon kamerasıyla tarama", path: "/scan-to-pdf" },
};

export default content;
