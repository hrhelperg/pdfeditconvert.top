import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-jpg",
  h1: "PDF JPG'ye Nasıl Dönüştürülür? Sayfaları Görsel Olarak Dışa Aktar",
  description:
    "PDF sayfalarını tarayıcında JPG görsellerine aktar. PNG yerine JPG'nin ne zaman doğru seçim olduğu, ölçeğin kaliteyi nasıl etkilediği ve görsel önizlemelerin PDF'ten ne zaman daha iyi olduğu.",
  updated: "2026-05-23",
  intro: [
    "Bazen bir PDF, yanlış kapsayıcıdır. Tek bir sayfayı satır içinde önizlenecek bir Slack mesajına bırakmak, bir grafiği bir slayta yapıştırmak ya da bir sayfayı sadece görsel kabul eden bir yere paylaşmak istersin. Bunların hepsi için sayfalara PDF olarak değil, JPG olarak ihtiyacın var.",
    "Bu rehber, bir PDF'in her sayfasını indirilebilir bir görsel olarak, tamamen tarayıcında ve hiçbir şey yüklemeden işleyen ücretsiz PDF'ten Görsele aracını kullanıyor. JPG, sunduğu iki formattan biridir ve dosya boyutu jilet gibi keskin metinden daha önemli olduğunda doğru seçimdir.",
    "Ölçeği (keskinliği kontrol eden) nasıl seçeceğini, JPG'in PNG'yi ne zaman geçtiğini ve hatırlamaya değer sınırlamayı ele alacağız: bir sayfanın JPG'i, bir belge değil, düz bir resimdir.",
  ],
  steps: [
    {
      title: "PDF'ten Görsele aracını aç",
      body: "Tarayıcında PDF'ten Görsele aracına git. Sayfaları cihazında yerel olarak işler — yükleme ya da hesap gerekmez.",
    },
    {
      title: "PDF'ini ekle",
      body: "Tek bir PDF'i bırakma alanına sürükle ya da seçmek için tıkla. Araç, görsel olarak dışa aktarabilmek için her sayfayı okur.",
    },
    {
      title: "Format olarak JPG'yi seç",
      body: "JPG'yi seç. PNG'den daha küçük dosyalar üretir ve fotoğraflar, tam sayfa ekran görüntüleri ve dosya boyutunun kusursuz keskin metinden daha önemli olduğu her yer için doğru seçimdir.",
    },
    {
      title: "Ölçeği ayarla",
      body: "Ölçek, her sayfanın kaç pikselde işleneceğini kontrol eder. 2×, çoğu ekranda keskindir; daha küçük dosyalar için 1,5×'e düş ya da çok net bir sonuca ihtiyacın olduğunda ve boyut umursamıyorsan 3×'e çık.",
    },
    {
      title: "Sayfaları dışa aktar",
      body: "Dönüşümü çalıştır. Her sayfa kendi JPG dosyası olarak iner, bir mesaja, sunuma ya da yükleme formuna bırakmaya hazır.",
    },
    {
      title: "İhtiyacın olan sayfayı seç",
      body: "Sadece bir sayfa istiyorsan, o JPG'i al ve geri kalanını sil. Uzun bir PDF için önce bölmek, elemek zorunda kalacağın görsel sayısını azaltır.",
    },
  ],
  tips: [
    "Sayfa fotoğraf ağırlıklıysa ya da boyut için optimize ediyorsan JPG'yi seç; sayfa çoğunlukla metin ya da keskin kalması gereken çizgi sanatıysa PNG'yi seç.",
    "Daha yüksek ölçek, daha keskin görseller ve daha büyük dosyalar demektir. Görsel sadece küçük görüntülenecekse 3×'ün bir faydası yok.",
    "Bir sayfanın JPG'inin metin katmanı yoktur — kelimeler aranamaz, seçilemez ya da kopyalanamaz. Metne tekrar ihtiyacın olacaksa orijinal PDF'i sakla.",
    "Yüksek ölçekteki çok büyük PDF'ler tarayıcı belleğini tüketebilir. Araç zorlanıyorsa 1,5× ölçeğe düş ya da önce PDF'i böl.",
    "Şifre korumalı PDF'ler tarayıcıda işlenemez. Önce şifreyi kaldır ya da PDF Editor uygulamasını kullan.",
  ],
  mobileNote:
    "Telefonda bir sayfayı görsel olarak dışa aktarmak genelde paylaşımla ilgilidir: görsel önizlemeleri, bir PDF ekinin sadece bir simge olarak durduğu sohbetlerde satır içinde görünür. PDF Editor uygulaması, donanım hızlandırmayla sayfaları anında işler ve dışa aktarır, sonra doğrudan paylaşım menüsüne teslim eder.",
  faq: [
    {
      q: "JPG mi PNG mi — hangisini dışa aktarmalıyım?",
      a: "Daha küçük dosyalar ve fotoğraf ağırlıklı sayfalar için JPG; sayfa çoğunlukla metin ya da keskin kalması gereken diyagramlarsa PNG. JPG'in sıkıştırması ince kenarları yumuşatır, bunu yazılarda fark edersin.",
    },
    {
      q: "Sayfa başına bir görsel mi alacağım?",
      a: "Evet. Her PDF sayfası ayrı bir JPG olarak işlenir ve iner. Sadece bir sayfaya ihtiyacın varsa, o dosyayı sakla ve diğerlerini at.",
    },
    {
      q: "PDF'im yükleniyor mu?",
      a: "Hayır. İşleme tamamen tarayıcında gerçekleşir, bu yüzden dosya cihazından hiç çıkmaz.",
    },
    {
      q: "Sonradan JPG'deki metni arayabilir miyim?",
      a: "Hayır. Dönüştürülmüş bir sayfa, metin katmanı olmayan düz bir görseldir. Aranabilir metni korumak için orijinal PDF'i sakla.",
    },
    {
      q: "Ölçek ayarı ne işe yarar?",
      a: "PDF noktası başına kaç görsel pikselinin işleneceğini belirler. 2×, çoğu ekranda keskin görünür; 3× çok nettir ama büyük dosyalar üretir.",
    },
  ],
  related: [
    { label: "PDF'ten Görsele — tarayıcında sayfaları dışa aktar", path: "/pdf-to-images" },
    { label: "Görselden PDF'e — ters işlem", path: "/image-to-pdf" },
    { label: "PDF PNG'ye nasıl dönüştürülür", path: "/guides/how-to-convert-pdf-to-png" },
    { label: "PDF dosyaları ayrı dosyalara nasıl bölünür", path: "/guides/how-to-split-pdf-files" },
  ],
  parentHub: { label: "PDF Dönüştürücü", path: "/pdf-converter" },
};

export default content;
