import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-png-to-pdf",
  h1: "PNG PDF'e Nasıl Dönüştürülür? Net Ekran Görüntüleri ve Grafikler",
  description:
    "PNG ekran görüntülerini, diyagramları ve grafikleri tarayıcında tek bir PDF'te topla. PNG'nin metni neden keskin tuttuğu ve şeffaflığa ne olduğu.",
  updated: "2026-05-23",
  intro: [
    "PNG, bir ekran görüntüsü aldığında, bir grafik dışa aktardığında ya da keskin kenarlı bir görsel kaydettiğinde elde ettiğin formattır. JPG'nin aksine kayıpsızdır, bu yüzden metin ve ince çizgiler sıkıştırmayla bulanıklaşmak yerine keskin kalır. Bu da PNG'yi, okunabilir kalan bir PDF'te ekran görüntülerini ya da diyagramları toplamak istediğinde doğru başlangıç noktası yapar.",
    "Bu rehber, PNG dosyalarını tek bir belgede birleştirmek için ücretsiz Görselden PDF'e aracını, doğrudan tarayıcında ve hiçbir şey yüklemeden kullanıyor. Tipik işler: bir inceleme için sıralı arayüz ekran görüntüleri, bir rapor için dışa aktarılmış grafikler ya da birinin başıboş bir görsel yerine yazdırılabilir, paylaşılabilir bir dosya olarak ihtiyaç duyduğu bir grafik.",
    "Bilmeye değer, PNG'ye özgü bir tuhaflık var — şeffaflık — ve bir PNG bir PDF sayfasına dönüştüğünde ona ne olduğunu ele alacağız.",
  ],
  steps: [
    {
      title: "Görselden PDF'e aracını aç",
      body: "Tarayıcında Görselden PDF'e aracına git. PNG, JPG ve WebP'yi işler ve tamamen cihazında çalışır — yükleme ya da hesap yok.",
    },
    {
      title: "PNG dosyalarını ekle",
      body: "Ekran görüntülerini ya da grafikleri bırakma alanına sürükle ya da seçmek için tıkla. Her PNG, sonuçtaki PDF'in bir sayfası olur.",
    },
    {
      title: "Sayfaları sırala",
      body: "Ekran görüntülerini hikayeyi anlatan sıraya dizmek için yukarı ve aşağı okları kullan — birinci adım ikinci adımdan önce.",
    },
    {
      title: "PDF'i oluştur",
      body: "PDF Oluştur'a tıkla. Araç her görseli, görselin boyutlarına göre kendi sayfasına yerleştirir ve birleşik dosyayı yerel olarak oluşturur.",
    },
    {
      title: "Belgeyi indir",
      body: "PDF otomatik olarak iner. İçeriğiyle eşleşmesi için yeniden adlandır ki bulması kolay olsun ve açan kişi için de belli olsun.",
    },
    {
      title: "Sayfaların keskin göründüğünü kontrol et",
      body: "PDF'i aç ve herhangi bir metne yakınlaş. PNG yazıyı keskin tuttuğu için gösterge panellerinin, kodun ya da metinlerin ekran görüntüleri okunabilir kalmalı.",
    },
  ],
  tips: [
    "Görsel metin, arayüz ya da keskin çizgiler içerdiğinde PNG, JPG'den daha iyi bir seçimdir — JPG sıkıştırması tam olarak bu kenarları yumuşatır.",
    "Bir PNG'nin şeffaf alanları bir PDF sayfasında şeffaf kalmaz; beyaza karşı görüntülenir. Şeffaf bir arka planda bir logo tasarladıysan, beyazın üzerinde durur, bu genelde sorun değildir.",
    "Tam sayfa ekran görüntüleri uzun ve dar olabilir. Sorunsuz dönüşürler, ama sayfanın çoğunlukla boş olmaması için önemli olan kısma kırpmayı düşün.",
    "Aynı görsel için PNG dosyaları JPG'den daha büyüktür. Uzun bir yüksek çözünürlüklü ekran görüntüsü dizisi hacimli bir PDF oluşturabilir — sonucu e-postayla göndereceksen sıkıştır.",
    "Her görsele göre boyutlandırılmış sayfalar yerine tekdüze bir sayfa boyutu (her şey A4'e sığdırılmış) için PDF Editor uygulaması sana bu kontrolü verir.",
  ],
  mobileNote:
    "Ekran görüntüleri telefonlarda birikir. PDF Editor uygulaması birkaç dokunuşla bunların bir grubunu tek bir PDF'e dönüştürür ve paylaşmadan önce önemli kısmı not almana ya da vurgulamana olanak tanır — hata raporları ve yolda hızlı incelemeler için kullanışlı.",
  faq: [
    {
      q: "Bir PDF için neden PNG'yi JPG'ye tercih etmeli?",
      a: "PNG kayıpsızdır, bu yüzden metin, ekran görüntüleri ve diyagramlar keskin kalır. JPG kayıplıdır ve ince kenarları yumuşatır. Görsellerin yazı ya da arayüz içeriyorsa, PNG daha temiz bir PDF üretir.",
    },
    {
      q: "Şeffaf arka planlara ne olur?",
      a: "Bir PDF sayfası şeffaf değildir, bu yüzden şeffaf bölgeler beyaza karşı görüntülenir. Şeffaf arka planlı bir logo ya da simge, sadece beyaz bir sayfanın üzerinde duracaktır.",
    },
    {
      q: "Dosyalarım yükleniyor mu?",
      a: "Hayır. Her şey cihazındaki tarayıcında çalışır. Ekran görüntülerin ve grafiklerin ondan hiç çıkmaz.",
    },
    {
      q: "Aynı PDF'te PNG ve JPG'yi karıştırabilir miyim?",
      a: "Evet. Araç PNG, JPG ve WebP'yi birlikte kabul eder, bu yüzden bir ekran görüntüsünü, bir fotoğrafı ve dışa aktarılmış bir grafiği tek bir belgede birleştirebilirsin.",
    },
    {
      q: "PDF büyük çıktı — ne yapabilirim?",
      a: "PNG sayfaları ağırdır. Küçük bir kalite ödünüyle dosyayı e-posta ve yükleme sınırlarının altına indirmek için PDF Sıkıştır aracından geçir.",
    },
  ],
  related: [
    { label: "Görselden PDF'e — tarayıcında PNG'leri birleştir", path: "/image-to-pdf" },
    { label: "PDF'ten görsele — ters işlem", path: "/pdf-to-images" },
    { label: "JPG PDF'e nasıl dönüştürülür", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "WebP PDF'e nasıl dönüştürülür", path: "/guides/how-to-convert-webp-to-pdf" },
  ],
  parentHub: { label: "PDF Dönüştürücü", path: "/pdf-converter" },
};

export default content;
