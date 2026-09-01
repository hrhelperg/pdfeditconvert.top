import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-font-issues",
  h1: "PDF Yazı Tipi Sorunları Nasıl Çözülür? (Eksik, Değiştirilmiş, Bozuk)",
  description:
    "Bir PDF yanlış yazı tipi, karakter yerine kutucuklar ya da değiştirilmiş metin gösterdiğinde, genelde gömülü bir yazı tipi eksiktir. Gömme işleminin nasıl çalıştığı ve dışa aktarma sırasında nelerin değiştirilmesi gerektiği.",
  updated: "2026-05-29",
  intro: [
    "Bir PDF karakterler yerine kareler, her yerde yanlış yazı tipi ya da orijinalde olmayan garip boşluklar gösterdiğinde, bu bir yazı tipi sorunudur. PDF'ler yazı tiplerine isimle başvurur; görüntüleyicinin ya o yazı tipini sistemde bulması ya da yazı tipinin dosya içine gömülü olması gerekir. İkisi de doğru değilse, bir ikame görürsün — en iyi ihtimalle yakın bir eşleşme, en kötüsünde kutucuklar.",
    "Doğru çözüm neredeyse her zaman gömülü yazı tipleriyle yeniden dışa aktarmaktır. Bir yazı tipi gömüldüğünde, dosya karakter verisini kendisiyle birlikte taşır ve her yerde doğru görünür. Bedeli biraz daha büyük bir dosyadır, ama çoğu yazı tipi için fark belgeyle karşılaştırıldığında önemsizdir.",
    "Bu rehber yazı tipi gömmenin gerçekte nasıl çalıştığını açıklıyor, en yaygın belirtileri ele alıyor ve çözümleri gösteriyor — yeniden dışa aktarmanın mümkün olmadığı ve dosyayı görsellere düzleştirmen gereken durumlar dahil.",
  ],
  steps: [
    {
      title: "Dosyanın değiştirilmiş yazı tiplerini render ettiğini doğrula",
      body: "Dosyayı iki farklı görüntüleyicide aç. İkisi de aynı yanlış yazı tipini gösteriyorsa, yazı tipleri gömülü değildir. Bir görüntüleyici doğruysa diğeri değilse, yanlış görüntüleyici yazı tipini kaçırıp ikame yapıyordur.",
    },
    {
      title: "Tüm yazı tipleri gömülü olarak yeniden dışa aktar",
      body: "Word, Pages, Docs ve çoğu tasarım aracında, PDF dışa aktarma ayarları “tüm yazı tiplerini göm” içerir. Bunu açmak, yazı tipi verisini dosyaya ekler ve her yerde tutarlı render edilmesini sağlar.",
    },
    {
      title: "Yedek olarak yazdır-PDF'e kullan",
      body: "Kaynak uygulamada yazı tipi gömmeyi açamıyorsan, belgeyi doğru gösteren herhangi bir görüntüleyicide aç ve yazdır-PDF'e uygula. Yeni kopya, render edilmiş karakterleri raster olarak pişirir — daha büyük ve aranamaz, ama güvenilirdir.",
    },
    {
      title: "Gömülemeyen lisanslı yazı tiplerini kontrol et",
      body: "Bazı ticari yazı tiplerinin gömme kısıtlamaları vardır. Kaynak uygulama seni uyaracaktır. Gerçekçi çözüm, gömmeye izin veren benzer bir yazı tipine geçmek ya da etkilenen metni görsellere dönüştürmektir.",
    },
    {
      title: "Word'e dönüştür, metni düzelt, yeniden dışa aktar",
      body: "İkame zaten metni bozduysa ve elinde sadece PDF varsa, PDF'ten Word'e kurtarılabilecek olanı çeker. Temizle, sahip olduğun yazı tiplerini ayarla, taze bir PDF'e yeniden dışa aktar.",
    },
    {
      title: "Başka hiçbir şey işe yaramadığında görsellere düzleştir",
      body: "PDF'ten Görsele, her sayfayı yüksek çözünürlükte PNG olarak dışa aktarır. Görselden PDF'e ile yeniden birleştirirsen, sonucun canlı metni olmaz — sadece görseller — ama yazı tipi render'ı her görüntüleyici için kilitlenir.",
    },
  ],
  tips: [
    "Önemli belgelerde gömülemeyen yazı tipleri kullanma — dosya her zaman ikameye karşı savunmasız olur.",
    "Web yazı tipleri ve indirilen görüntü yazı tipleri en yaygın gömme suçlularıdır. Sistem yazı tipleri (Arial, Times, Helvetica, Calibri) temiz şekilde gömülür.",
    "Yazı tiplerini “alt küme” olarak gömmek (sadece kullanılan karakterler) dosyayı küçük tutar. Çoğu dışa aktarma aracı varsayılan olarak bunu yapar ve doğru seçim budur.",
    "Sadece bir karakter yanlışsa (bir kesir ya da özel bir sembol gibi), yazı tipinde o karakter eksiktir. Kaynak karakteri bir Unicode eşdeğeriyle değiştir.",
    "Görsellere düzleştirdikten sonra kopyala-yapıştır ve OCR'ı kaybetmeyi bekle. Bu yolu sadece render doğruluğu aranabilirlikten daha önemliyken kullan.",
  ],
  mobileNote:
    "Telefon görüntüleyicilerinde genelde masaüstünden daha az yazı tipi kuruludur, bu yüzden gömülü yazı tipi olmayan dosyalar mobilde en kötü görünür. PDF Editor uygulaması değiştirilmiş yazı tipi uyarıları gösterir ve belgeleri yazı tipleri gömülü olarak yeniden dışa aktarmanı sağlar, bu da onları iOS, Android ve masaüstü görüntüleyicileri arasında görsel olarak tutarlı tutar.",
  faq: [
    {
      q: "“Yazı tiplerini göm” gerçekte ne yapar?",
      a: "Yazı tipinin karakter verisini doğrudan PDF'in içine paketler, böylece herhangi bir görüntüleyici, yazı tipini yerel olarak kurmaya gerek kalmadan metni doğru render edebilir.",
    },
    {
      q: "Harfler yerine neden kutucuklar görüyorum?",
      a: "Yazı tipi sistemde kurulu değil ve gömülmemiş. Görüntüleyici ikame yapamaz çünkü hangi karakterleri çizeceğini bilmiyor, bu yüzden eksik-karakter kutusunu gösterir.",
    },
    {
      q: "Dışa aktardıktan sonra bir PDF'e yazı tipi ekleyebilir miyim?",
      a: "Temiz bir şekilde değil. Kaynaktan yeniden dışa aktarmak doğru yoldur. Sonradan gömdüğünü iddia eden araçlar var, ama çoğu hatalı dosyalar üretir.",
    },
    {
      q: "Yazı tiplerini gömünce dışa aktarılan PDF'im neden daha büyük?",
      a: "Çünkü yazı tipi verisi artık dosyanın içinde. Çok sayıda yazı tipi ailesi gömmediğin sürece artış genelde küçüktür. Alt kümeleme (sadece kullanılan karakterleri dahil etme) boyutu düşük tutar.",
    },
    {
      q: "Sıkıştırma gömülü yazı tiplerini kaldırır mı?",
      a: "Hayır. PDF sıkıştırma görselleri hedef alır, metni ya da yazı tiplerini değil. Yazı tipi gömülü bir PDF'i sıkıştırmak onu bozmaz.",
    },
  ],
  related: [
    { label: "PDF'ten Word'e — değiştirilmiş yazı tiplerinden metni kurtar", path: "/pdf-to-word" },
    { label: "PDF'ten Görsele — son çare olarak düzleştir", path: "/pdf-to-images" },
    { label: "PDF Biçimlendirme Sorunları Nasıl Çözülür? (Satır Kayması, Kenar Boşluğu, Boşluklar)", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "PDF Yazdırma Sorunları Nasıl Çözülür? (Kesilen Sayfa, Yanlış Boyut, Eksik Metin)", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "PDF Dönüştürücü", path: "/pdf-converter" },
};

export default content;
