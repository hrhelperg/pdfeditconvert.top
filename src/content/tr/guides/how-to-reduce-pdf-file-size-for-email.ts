import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-file-size-for-email",
  h1: "E-posta İçin PDF Dosya Boyutu Nasıl Küçültülür?",
  description:
    "PDF'i Gmail ve Outlook ek dosya sınırlarının altına indir. Gerçek limitler, taramaların bunları neden aştığı ve dosyayı gönderilebilir hale getirme yöntemi.",
  updated: "2026-05-23",
  intro: [
    "E-posta ek dosya sınırları yıllardır pek değişmedi, ama eklediğimiz belgeler giderek ağırlaşıyor. Gmail seni 25 MB'ta durduruyor. Outlook sınırı yaklaşık 20 MB'ta çiziyor. Alıcının sunucusu daha da düşük bir sınır koyabilir. Sen de taranmış bir sözleşme ya da fotoğraf dolu bir rapor eklersin, gönder'e basarsın ve geri döner — ya da daha kötüsü, sessizce başarısız olur.",
    "Bu rehber, bir PDF'i gerçekten gönderilebilecek kadar küçültmekle ilgili. Tarayıcında çalışan ve hiçbir şey yüklemeyen ücretsiz PDF Sıkıştır aracını kullanıyor ve pratik kararları ele alıyor: hangi sıkıştırma düzeyi, ne zaman sıkıştırmalı ne zaman bölmeli ve sıkıştırma bile yetmediğinde ne yapmalı.",
    "İyi haber şu ki, geri dönme olasılığı en yüksek dosyalar — taramalar ve görsel ağırlıklı PDF'ler — tam olarak en çok sıkışan dosyalardır.",
  ],
  steps: [
    {
      title: "Sınırı ne kadar aştığını kontrol et",
      body: "Dosya boyutunu ve hedefini not et. Gmail 25 MB'ta, Outlook yaklaşık 20 MB'ta sınırlanır ve bazı kurumsal sunucular daha düşük. Farkı bilmek, ne kadar agresif olman gerektiğini söyler.",
    },
    {
      title: "PDF Sıkıştır aracını aç",
      body: "Tarayıcında PDF Sıkıştır aracına git. Dosyayı cihazında işler — hiçbir şey yüklenmez; bu, e-postayla göndereceğin belgeler için önem taşır.",
    },
    {
      title: "PDF'i ekle ve bir düzey seç",
      body: "Önerilen ile başla. Boyut ve kaliteyi dengeler ve çoğu dosya için yeterlidir. Sadece hâlâ sınırın üzerindeysen Güçlü'ye düş.",
    },
    {
      title: "Sıkıştır ve yeni boyutu oku",
      body: "Çalıştır ve öncesi-sonrası rakamlarını kontrol et. Taranmış belgeler genelde tek geçişte 25 MB'ın çok altına düşer.",
    },
    {
      title: "Hâlâ büyükse böl",
      body: "Tek bir belge yeterince küçülemiyorsa, onu iki ya da üç daha küçük dosya olarak göndermek için PDF Böl aracını kullan — genelde kaliteyi daha da ezmekten daha pratiktir.",
    },
    {
      title: "Ekle ve gönder",
      body: "Sıkıştırılmış (ya da bölünmüş) dosyayı ekle. Seçtiğin düzeyde hâlâ temiz okunduğunu doğrulamak için önce bir kez aç.",
    },
  ],
  tips: [
    "Önerilen düzey, artakalan kaliteyle çoğu e-posta sınırını aşar. Güçlü'yü ilk geçişten sonra hâlâ sınırın üzerinde olan dosyalara ayır.",
    "Taramalar ve fotoğraf ağırlıklı PDF'ler en çok küçülür; sadece metin içeren bir belge zaten küçüktür, bu yüzden devasaysa nedeni gömülü görseller ya da yazı tiplerinde ara.",
    "Sadece sıkıştırma yeterli gelmezse, belgeyi bölmek onu okunmaz hale getirmekten daha iyidir — iki okunabilir yarı, bir kaba bütünden daha iyidir.",
    "Sıkıştırma sayfaları görselleştirir, bu yüzden gönderilen kopyanın seçilebilir metni olmaz. Alıcının metni kopyalaması gerekiyorsa, orijinali başka bir yoldan, sıkıştırılmış bir önizlemeyi de e-postayla gönder.",
    "Sıkıştırılmış bir dosya bile çok büyükse, paylaşılan bir bulut bağlantısı dürüst cevaptır — büyük PDF dosyaları göndermeye dair rehbere bak.",
  ],
  mobileNote:
    "Çoğu geri dönen ek, bir belgeyi telefonundan diğer işler arasında hızlıca gönderdiğinde olur. PDF Editor uygulaması çevrimdışı sıkıştırır ve doğrudan e-posta uygulamana paylaşır, böylece çok büyük bir tarama, gelen kutundan hiç çıkmadan gönderilebilir bir dosyaya dönüşür.",
  faq: [
    {
      q: "Gerçek e-posta ek dosya sınırı nedir?",
      a: "Gmail 25 MB'ta, Outlook yaklaşık 20 MB'ta sınırlanır ve bazı şirket e-posta sunucuları daha da düşük. Sadece kendi sınırının değil, alıcının sınırının rahatça altında hedefle.",
    },
    {
      q: "PDF'im neden ilk etapta e-postayla göndermek için çok büyük?",
      a: "Neredeyse her zaman taranmış sayfalar ya da gömülü fotoğraflar. Her taranmış sayfa aslında yüksek çözünürlüklü bir görseldir ve birkaçı hızla 25 MB'ı aşar.",
    },
    {
      q: "E-posta için hangi sıkıştırma düzeyini kullanmalıyım?",
      a: "Önerilen ile başla — çoğu sınırı aşarken belgeyi okunabilir tutar. Sadece ilk geçişten sonra hâlâ sınırın üzerindeysen Güçlü'ye geç.",
    },
    {
      q: "Sıkıştırdığımda dosyam yükleniyor mu?",
      a: "Hayır. PDF Sıkıştır aracı, cihazındaki tarayıcında çalışır, bu yüzden belgeyi göndermeye hazırlarken bile gizli kalır.",
    },
    {
      q: "Sıkıştırma hâlâ yetmezse ne olur?",
      a: "PDF'i daha küçük dosyalara böl ya da bir ek yerine bir bulut bağlantısı paylaş. İkisi de bir belgeyi okunmaz hale gelene kadar sıkıştırmaktan daha iyidir.",
    },
  ],
  related: [
    { label: "PDF Sıkıştır — e-posta için küçült", path: "/compress-pdf" },
    { label: "Büyük PDF dosyaları nasıl gönderilir", path: "/guides/how-to-send-large-pdf-files" },
    { label: "PDF yüklemeden online nasıl sıkıştırılır", path: "/guides/how-to-compress-pdf-online" },
    { label: "PDF dosyaları ayrı dosyalara nasıl bölünür", path: "/guides/how-to-split-pdf-files" },
  ],
  parentHub: { label: "PDF Sıkıştır", path: "/compress-pdf" },
};

export default content;
