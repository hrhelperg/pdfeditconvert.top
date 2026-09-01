import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-scanned-pdf",
  h1: "Taranmış Bir PDF Nasıl Sıkıştırılır? (Büyük Tasarruf)",
  description:
    "Taranmış PDF'ler küçültmesi en kolay ve en çok yer kaplayan dosyalardır. Onları belirgin şekilde sıkıştırma yöntemi ve aranabilir metne ne olduğu.",
  updated: "2026-05-23",
  intro: [
    "Taranmış PDF'ler belge dünyasının ağırsıklet oyuncularıdır. Her sayfa tam çözünürlüklü bir görseldir, bu yüzden kısa, taranmış bir sözleşme, yüz sayfalık bir metin raporundan daha ağır basabilir. Madalyonun diğer yüzü ise iyi haber: taramalar neredeyse tamamen görsel veri olduğundan, herhangi bir PDF türünden daha çarpıcı şekilde sıkışırlar — genelde %70 ya da daha fazla.",
    "Bu rehber, tarayıcında çalışan ve hiçbir şey yüklemeyen ücretsiz PDF Sıkıştır aracıyla özellikle taramaları sıkıştırmaya odaklanıyor. Taramalar, tam olarak tarayıcı sıkıştırmasının parladığı ve boyut tasarrufunun en çok değdiği durumdur.",
    "Ayrıca taranmış belgelerde dikkat edilmesi gereken tek şeyi — aranabilir metni — de ele alacağız, böylece oluşturmak için uğraştığın bir metin katmanını kazara kaybetmezsin.",
  ],
  steps: [
    {
      title: "PDF Sıkıştır aracını aç",
      body: "Tarayıcında PDF Sıkıştır aracına git. Dosyayı cihazında işler, bu yüzden taranmış bir sözleşme bile gizli kalır.",
    },
    {
      title: "Taranmış PDF'ini ekle",
      body: "Taramayı bırakma alanına sürükle ya da seçmek için tıkla. Araç, onu yerel olarak okur — hiçbir şey yüklenmez.",
    },
    {
      title: "Bir düzey seç — burada güçlü gidebilirsin",
      body: "Taramalar güçlü sıkıştırmaya iyi tolerans gösterir, çünkü keskin vektör metin değil, görseldirler. Önerilen genelde yeterlidir; Güçlü, günlük belgeler için hâlâ mükemmel okunabilir görünebilir.",
    },
    {
      title: "Sıkıştır ve okunabilirliği kontrol et",
      body: "Çalıştır ve sonucu aç. Bir tarama için asıl test okunabilirliktir — metni rahatça okuyabiliyor musun? Güçlü bir düzeyde evetse, daha büyük tasarrufu al.",
    },
    {
      title: "Aranabilir metin katmanına dikkat et",
      body: "Taraman aranabilir olması için OCR işleminden geçtiyse, onu tarayıcıda sıkıştırmak sayfaları görsel olarak yeniden işler ve o katmanı kaldırır. İhtiyacın varsa aranabilir orijinali sakla.",
    },
    {
      title: "Daha küçük kopyayı kaydet",
      body: "Yeni bir adla kaydet. Taranmış dosyalar rutin olarak tek geçişte e-posta ve yükleme sınırlarının çok altına düşer.",
    },
  ],
  tips: [
    "Taramalar herhangi bir PDF'ten en iyi sıkışır — bir belge taranmış olduğu için devasaysa, boyut cephesinde şanslısın.",
    "Taramalar görsel olduğu için, genelde tasarlanmış bir belgeyle göze alamayacağın kadar güçlü bir düzeye itebilir ve hâlâ okunabilir tutabilirsin.",
    "Taramanın OCR'dan gelen aranabilir bir metin katmanı varsa, tarayıcı sıkıştırması onu kaldırır. Sonrasında metin tanımayı yeniden çalıştır ya da aranabilir orijinali ayrı sakla.",
    "Kaynakta daha düşük bir çözünürlükte (200-300 DPI) taramak, en baştan daha küçük dosyalar üretir ve sonradan ne kadar sert sıkıştırman gerektiğini azaltır.",
    "Renkli taramalar gri tonlamadan daha büyüktür. Renk belgeye hiçbir şey katmıyorsa, gri tonlamada taramak sıkıştırma daha başlamadan onu küçültür.",
  ],
  mobileNote:
    "Taramalar genelde bir telefonda başlar ve PDF Editor uygulaması tüm döngüyü cihaz üzerinde tutar: makul bir kalitede tara, çevrimdışı sıkıştır ve — tarayıcı araçlarının aksine — daha küçük dosyanın hâlâ aranabilir olması için metin tanıma çalıştır. Hiçbir adımda yükleme yok.",
  faq: [
    {
      q: "Taranmış bir PDF ne kadar küçülebilir?",
      a: "Genelde %70 ya da daha fazla. Taramalar neredeyse tamamen görsel veridir ve sıkıştırmanın tam olarak hedeflediği şey budur, bu yüzden metin tabanlı PDF'lerden çok daha fazla küçülürler.",
    },
    {
      q: "Tarama, güçlü sıkıştırmadan sonra hâlâ okunabilir olacak mı?",
      a: "Günlük belgeler için genelde evet — taramalar keskin vektör metin değil, görsel oldukları için güçlü sıkıştırmaya tolerans gösterir. Her zaman sonucu aç ve okunabilirliği doğrula.",
    },
    {
      q: "Sıkıştırmak, bir taramadan aranabilir metni kaldırır mı?",
      a: "Tarama aranabilir olması için OCR işleminden geçtiyse, tarayıcı sıkıştırması sayfaları görsel olarak yeniden işler ve o katmanı kaldırır. Aranabilir orijinali sakla ya da sonrasında metin tanımayı yeniden çalıştır.",
    },
    {
      q: "Taranmış belgem yükleniyor mu?",
      a: "Hayır. PDF Sıkıştır aracı, cihazındaki tarayıcında çalışır, bu yüzden sözleşmeler ve ekstreler gibi hassas taramalar gizli kalır.",
    },
    {
      q: "Şifre korumalı bir taramayı sıkıştırabilir miyim?",
      a: "Tarayıcıda hayır. Önce şifreyi kaldır ya da korumalı dosyaları çevrimdışı sıkıştıran PDF Editor mobil uygulamasını kullan.",
    },
  ],
  related: [
    { label: "PDF Sıkıştır — tarayıcında taramaları küçült", path: "/compress-pdf" },
    { label: "Taranmış belgeler PDF'e nasıl dönüştürülür", path: "/guides/how-to-convert-scanned-documents-to-pdf" },
    { label: "PDF'im neden bu kadar büyük", path: "/guides/why-is-my-pdf-so-large" },
    { label: "Telefonla belgeler PDF'e nasıl taranır", path: "/guides/how-to-scan-documents-to-pdf" },
  ],
  parentHub: { label: "PDF Sıkıştır", path: "/compress-pdf" },
};

export default content;
