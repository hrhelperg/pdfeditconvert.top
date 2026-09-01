import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-iphone",
  h1: "iPhone'da Fotoğraflar PDF'e Nasıl Dönüştürülür? (HEIC Sorunu Çözümü)",
  description:
    "iPhone fotoğraflarını tek bir PDF'e çevir — insanları takılıp kalan HEIC formatı sorunu dahil. Tarayıcı üzerinden yol ve uygulama içindeki daha hızlı yöntem.",
  updated: "2026-05-23",
  intro: [
    "iPhone'da fotoğrafları bir PDF'e çevirmek, insanların sürekli başvurduğu bir şeydir — fotoğrafı çekilmiş bir sözleşme, bir masraf talebi için fiş yığını, bir form için kimliğin iki yüzü. İş basittir, ama çoğu sinirlenmeye neden olan iPhone'a özgü bir tuzak var: iPhone'un varsayılan olarak fotoğrafları JPG değil, HEIC olarak kaydeder ve birçok araç HEIC okumaz.",
    "Bu rehber iki güvenilir yolu ele alıyor. Birincisi, fotoğrafların desteklenen bir formatta olduğunda çalışan, Safari'deki ücretsiz Görselden PDF'e aracını kullanıyor. İkincisi ise HEIC'i doğrudan fotoğraf kitaplığından okuyan ve format dansını tamamen atlayan PDF Editor uygulamasını kullanıyor.",
    "O ana uyanı seç — ama önce HEIC ayrıntısını bil, çünkü 30 saniyelik bir işi kafa karıştırıcı bir işe çeviren şey budur.",
  ],
  steps: [
    {
      title: "Fotoğraf formatına karar ver",
      body: "Ayarlar → Kamera → Formatlar'ı aç. \"Yüksek Verimlilik\" HEIC kaydeder; \"En Uyumlu\" JPG kaydeder. En Uyumlu'ya geçmek, yeni fotoğrafların tarayıcı araçları dahil her yerde çalışmasını sağlar.",
    },
    {
      title: "Gerekirse mevcut HEIC fotoğrafları dönüştür",
      body: "Zaten HEIC olarak mı çektin? Ya onları JPG olarak yeniden dışa aktar (Fotoğraflar'da aç, paylaş, JPG üreten bir seçenek seç) ya da HEIC'i doğrudan okuyan aşağıdaki uygulama yoluna geç.",
    },
    {
      title: "Safari'de Görselden PDF'e aracını aç",
      body: "Görselden PDF'e aracına git. JPG, PNG ve WebP kabul eder ve tamamen cihazında çalışır — hiçbir şey yüklenmez.",
    },
    {
      title: "Fotoğraflarını ekle ve sırala",
      body: "Fotoğraf kitaplığından seçmek için dokun, sonra sıralamak için okları kullan. Sayfa sırası, iki sayfalık bir sözleşme gibi çok sayfalı belgeler için önemlidir.",
    },
    {
      title: "PDF'i oluştur ve kaydet",
      body: "PDF Oluştur'a dokun. İndiğinde, Dosyalar uygulamasına kaydetmek ya da doğrudan göndermek için paylaşım simgesini kullan.",
    },
    {
      title: "Ya da HEIC ve tarama için PDF Editor uygulamasını kullan",
      body: "Uygulama, fotoğraf kitaplığından HEIC fotoğrafları okur, onları bir PDF'e dönüştürür ve kenar algılamayla taze sayfalar da yakalayabilir — format dönüşümü gerekmez.",
    },
  ],
  tips: [
    "iPhone'da \"fotoğraflarım dönüşmüyor\" şikayetinin en büyük tek nedeni HEIC'tir. En Uyumlu'ya geç ya da uygulamayı kullan, sorun ortadan kalkar.",
    "Dönüştürmeden önce her fotoğrafı Fotoğraflar uygulamasında kırp — sayfa görsele göre boyutlandırılır, bu yüzden arka planı kırpmak daha derli toplu bir belge verir.",
    "Fişler ve kimlikler için koyu, düz bir yüzeyde ve eşit ışıkta çek. Yansımayı ve gölgeyi önlemek, sonradan düzeltmekten daha kolaydır.",
    "PDF'e çevrilmiş bir fotoğraf, aranabilir bir tarama değildir. Metni araman gerekiyorsa, metni tanıyabilen uygulamanın tarama özelliğini kullan.",
    "Bitmiş PDF e-postayla göndermek için çok büyükse, PDF Sıkıştır aracından geçir — telefon fotoğrafları ağır sayfalar oluşturur.",
  ],
  mobileNote:
    "Bu iş akışının tamamı telefonunda yaşar — PDF Editor uygulaması tam olarak bunun için tasarlanmıştır: doğrudan fotoğraf kitaplığından HEIC, hiçbir şey yüklenmeden cihaz üzerinde dönüşüm, aynı yerde tarama ve imzalama. Birden fazla kez yapacağın her şey için daha hızlı yoldur.",
  faq: [
    {
      q: "iPhone fotoğraflarım dönüştürücüye neden eklenmiyor?",
      a: "Çoğu tarayıcı aracının okumadığı HEIC olarak kaydedilmişlerdir. Yeni fotoğraflar için Ayarlar → Kamera → Formatlar'dan \"En Uyumlu\"ya geç ya da HEIC'i doğrudan okuyan PDF Editor uygulamasını kullan.",
    },
    {
      q: "Birkaç fotoğrafı tek bir PDF'te birleştirebilir miyim?",
      a: "Evet. Hepsini ekle, sıraya sürükle, her fotoğraf tek bir PDF'in bir sayfası olur.",
    },
    {
      q: "Fotoğraflarım bir sunucuya mı yükleniyor?",
      a: "Hayır. Tarayıcı aracı her şeyi cihazında işler, uygulama da öyle. Fotoğrafların gizli kalır — kimlikler ve kişisel belgeler için önemlidir.",
    },
    {
      q: "PDF aranabilir olacak mı?",
      a: "Düz bir fotoğraftan değil — metin katmanı yoktur. Tanınmış, aranabilir metinle bir belge üretmek için PDF Editor uygulamasındaki tarama özelliğini kullan.",
    },
    {
      q: "PDF e-postayla göndermek için çok büyük — ne yapmalıyım?",
      a: "Yüksek çözünürlüklü iPhone fotoğrafları büyük sayfalar oluşturur. Dosyayı ek dosya sınırının altına indirmek için PDF Sıkıştır aracından geçir.",
    },
  ],
  related: [
    { label: "Görselden PDF'e — tarayıcında fotoğrafları dönüştür", path: "/image-to-pdf" },
    { label: "PDF Tarama — kamerayla kağıt yakala", path: "/scan-to-pdf" },
    { label: "Android'de fotoğraflar PDF'e nasıl dönüştürülür", path: "/guides/how-to-convert-photos-to-pdf-on-android" },
    { label: "JPG PDF'e nasıl dönüştürülür", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "PDF Dönüştürücü", path: "/pdf-converter" },
};

export default content;
