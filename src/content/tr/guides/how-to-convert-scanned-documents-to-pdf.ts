import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-scanned-documents-to-pdf",
  h1: "Taranmış Belgeler PDF'e Nasıl Dönüştürülür?",
  description:
    "Elinde zaten tarama görselleri ya da kağıt fotoğrafları mı var? Bunları tarayıcında tek bir PDF'te birleştir — ayrıca OCR'ın ne yaptığı ve taramaların aranabilir olması için neden gerekli olduğu.",
  updated: "2026-05-23",
  intro: [
    "Bir belgeyi taramak ile zaten taranmış bir belgeyi dönüştürmek arasında önemli bir fark var. Elinde taze bir kağıt yığını varsa, bir tarama iş akışına ihtiyacın vardır. Ama çoğu zaman görsellere zaten sahipsindir — bir masaüstü tarayıcı bir JPEG klasörü boşaltmıştır, bir meslektaşın imzalı bir formun fotoğraflarını e-postayla göndermiştir ya da telefonunun galerisi evrak fotoğraflarıyla doludur. Şimdiki iş, bunları tek, derli toplu bir PDF'te toplamaktır.",
    "Bu rehber tam olarak bunu ele alıyor: zaten sahip olduğun tarama görsellerini, tarayıcında çalışan ve hiçbir şey yüklemeyen ücretsiz Görselden PDF'e aracıyla tek bir PDF'te birleştirmek. Ayrıca insanların yanlış anladığı kısmı da açıklıyor — dönüştürülmüş bir taramanın aranabilir metin değil, metnin bir resmi olduğunu ve kelimeleri geri almak istersen ne yapman gerektiğini.",
    "Kağıdı henüz yakalaman gerekiyorsa, özel tarama rehberine bak; bu rehber görsellerin zaten var olduğunu varsayıyor.",
  ],
  steps: [
    {
      title: "Tarama görsellerini topla",
      body: "Tarayıcından, e-postandan ya da fotoğraf kitaplığından JPG ya da PNG dosyalarını tek bir yerde topla, böylece hepsini tek seferde ekleyebilirsin.",
    },
    {
      title: "Görselden PDF'e aracını aç",
      body: "Tarayıcında Görselden PDF'e aracına git. JPG, PNG ve WebP kabul eder ve her şeyi cihazında işler — yükleme yok, hesap yok.",
    },
    {
      title: "Görselleri belge sırasına göre ekle",
      body: "Taramaları bırakma alanına sürükle. Sayfaları doğru sıraya koymak için okları kullan — formun birinci sayfası ikinci sayfadan önce.",
    },
    {
      title: "PDF'i oluştur",
      body: "PDF Oluştur'a tıkla. Her tarama bir sayfa olur ve araç bunları yerel olarak tek bir belgede birleştirir.",
    },
    {
      title: "Büyükse sıkıştır",
      body: "Taramalar görsel ağırlıklıdır ve PDF büyük olabilir. E-posta ya da yükleme sınırlarına sığması için PDF Sıkıştır'dan geçir — taranmış içerik, gözle görülür bir kayıp olmadan çok küçülür.",
    },
    {
      title: "Gerekirse aranabilir metin ekle",
      body: "Dönüştürülmüş bir tarama bir görseldir, bu yüzden metin aranamaz. Aranabilir yapmak için, taramanın üzerine görünmez bir metin katmanı ekleyen PDF Editor uygulamasıyla metin tanıma (OCR) çalıştır.",
    },
  ],
  tips: [
    "Birleştirmeden önce her taramayı düzelt ve kırp — eğri bir sayfa PDF'e girdikten sonra da eğri kalır.",
    "Sayfalar arasında tutarlı çözünürlük daha derli toplu bir belge verir. Çok uyumsuz görsel boyutları, ölçekte sıçrayan sayfalar üretir.",
    "Tarayıcı araçları taramaları birleştirebilir ama içlerindeki metni okuyamaz. Kelimeleri araman ya da kopyalaman gerekiyorsa bu bir OCR işidir ve PDF Editor uygulaması bunu halleder.",
    "Damga, vurgulama ya da imza içeren her şey için renkli taramaları koru; sadece rengin hiçbir şey katmadığı durumlarda gri tonlamaya geç, çünkü bu dosyayı küçültür.",
    "Dosyayı içeriğine ve tarihine göre adlandır. \"Kira-imzali-2026-05.pdf\", sonradan bir tarayıcı numarası dizisinden çok daha kolay bulunur.",
  ],
  mobileNote:
    "\"Taramalar\" aslında telefonundaki fotoğraflarsa, PDF Editor uygulaması kestirme yoldur: fotoğraf kitaplığındaki görselleri bir PDF'e dönüştürür, kenar algılamayla yeni sayfalar yakalayabilir ve sonucun aranabilir olması için metin tanıma çalıştırabilir — hepsi hiçbir şey yüklemeden.",
  faq: [
    {
      q: "Bunun taramadan farkı nedir?",
      a: "Tarama, kağıdı ilk etapta görsellere yakalar. Bu rehber, tarama görsellerine zaten sahip olduğunu ve sadece onları tek bir PDF'te birleştirmen gerektiğini varsayar. Kağıdı henüz yakalaman gerekiyorsa, bir tarama iş akışı kullan.",
    },
    {
      q: "Taranmış PDF'imdeki metin aranabilir olacak mı?",
      a: "Sadece dönüştürmekle değil — bir tarama bir görseldir, bu yüzden metin katmanı yoktur. Taramanın üzerine aranabilir bir katman eklemek için PDF Editor uygulamasıyla OCR (metin tanıma) çalıştır.",
    },
    {
      q: "Taramalarım yükleniyor mu?",
      a: "Hayır. Görselden PDF'e aracı, dosyaları cihazındaki tarayıcında işler, bu yüzden hassas belgeler gizli kalır.",
    },
    {
      q: "Taranmış PDF'im neden bu kadar büyük?",
      a: "Taramalar aslında fotoğraflardır ve birkaç yüksek çözünürlüklü sayfa hızla toplanır. PDF'i sıkıştır — görsel ağırlıklı taramalar genelde gözle görülür bir kalite kaybı olmadan büyük ölçüde küçülür.",
    },
    {
      q: "Yan taranmış bir sayfayı düzeltebilir miyim?",
      a: "Evet. Birleştirdikten sonra etkilenen sayfaları düzeltmek için PDF Döndür aracını kullan ya da dönüştürmeden önce kaynak görselin yönünü düzelt.",
    },
  ],
  related: [
    { label: "Görselden PDF'e — tarayıcında taramaları birleştir", path: "/image-to-pdf" },
    { label: "PDF Tarama — kamerayla kağıt yakala", path: "/scan-to-pdf" },
    { label: "Telefonla belgeler PDF'e nasıl taranır", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Taranmış bir PDF nasıl sıkıştırılır", path: "/guides/how-to-compress-scanned-pdf" },
  ],
  parentHub: { label: "PDF Tarama", path: "/scan-to-pdf" },
};

export default content;
