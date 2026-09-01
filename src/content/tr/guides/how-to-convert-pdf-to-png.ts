import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-png",
  h1: "PDF PNG'ye Nasıl Dönüştürülür? Keskin, Kayıpsız Sayfa Görselleri",
  description:
    "PDF sayfalarını tarayıcında yüksek kaliteli PNG görsellerine aktar. PNG'nin metni ve diyagramları neden net tuttuğu, ayrıca ölçek ve şeffaflık notları.",
  updated: "2026-05-23",
  intro: [
    "Bir PDF'in sayfasına görsel olarak ihtiyacın olduğunda ve sayfa metin, tablo ya da diyagram doluysa, başvurulacak format PNG'dir. Kayıpsızdır, bu yüzden yazı bulanık kenarlar yerine keskin kalır — dönüştürülmüş bir faturaya ya da şemaya yakınlaştığın anda fark belirginleşir.",
    "Bu rehber, her PDF sayfasını tarayıcında indirilebilir bir görsel olarak işleyen ücretsiz PDF'ten Görsele aracını kullanıyor — hiçbir şey yüklenmez. PNG, iki çıktı formatından biridir ve netlik dosya boyutundan daha önemli olduğunda seçilecek olanıdır.",
    "Aşağıda: dosyayı şişirmeden en keskin sonucu nasıl alacağın, PNG'yi JPG'ye tercih etmenin ne zaman değeceği ve sayfa görselleri hakkında genel olarak akılda tutulması gerekenler.",
  ],
  steps: [
    {
      title: "PDF'ten Görsele aracını aç",
      body: "PDF'ten Görsele aracına git. Sayfaları tarayıcında yerel olarak işler — yükleme yok, hesap yok.",
    },
    {
      title: "PDF'ini ekle",
      body: "PDF'i bırakma alanına sürükle ya da seçmek için tıkla. Araç her sayfayı dışa aktarım için hazırlar.",
    },
    {
      title: "Format olarak PNG'yi seç",
      body: "PNG'yi seç. Kayıpsızdır ve metni, tabloları ve çizgi sanatını keskin tutar — belgeler, diyagramlar ve yakınlaşacağın her şey için doğru seçim.",
    },
    {
      title: "Keskinlik için ölçeği ayarla",
      body: "Bir ölçek seç: 2×, çoğu ekranda keskindir, 3× baskı ya da büyük ekran için ekstra nettir ama büyük dosyalar üretir. Ölçeği, görselin gerçekte nasıl görüntüleneceğine göre eşleştir.",
    },
    {
      title: "Sayfaları dışa aktar",
      body: "Dönüşümü çalıştır. Her sayfa kendi PNG'i olarak iner, bir belgeye, sunuma ya da web sayfasına gömmeye hazır.",
    },
    {
      title: "İhtiyacın olan sayfayı kullan",
      body: "İstediğin PNG'i sakla, geri kalanını at. Uzun bir PDF için önce bölmek, yönetmen gereken dosya sayısını azaltır.",
    },
  ],
  tips: [
    "Sayfada metin, tablo ya da keskin çizgiler olduğunda PNG'yi JPG'ye tercih et — JPG'in sıkıştırması bu kenarları gözle görülür şekilde yumuşatır.",
    "PNG dosyaları JPG'lerden daha büyüktür. Çok sayıda sayfa dışa aktarıyorsan ve boyut keskinlikten daha önemliyse, JPG pratik bir seçimdir.",
    "Bir PDF sayfasının şeffaflığı yoktur, bu yüzden PNG şeffaflığı desteklese bile dışa aktarılan PNG düz beyaz bir arka planın üzerinde durur.",
    "Daha yüksek ölçek, düşük kaliteli bir kaynağı iyileştirmez. PDF'in kendisi bulanık bir tarama içeriyorsa, 3× bir PNG bulanıklığı sadece daha yüksek çözünürlükte işler.",
    "Sayfa görselleri aranabilir değildir — metin katmanı yoktur. Kelimeleri sonra bulman ya da kopyalaman gerekecekse orijinal PDF'i sakla.",
  ],
  mobileNote:
    "Telefonunda bir PDF'ten keskin bir sayfa görseli çekmek, slaytlar, tasarım referansları ve hata raporları için kullanışlıdır. PDF Editor uygulaması sayfaları donanım hızlandırmayla işler ve paylaşmadan önce görsele not düşmene olanak tanır — dosyayı sonra halletmek için kendine e-posta göndermekten daha hızlıdır.",
  faq: [
    {
      q: "Neden JPG yerine PNG seçilmeli?",
      a: "PNG kayıpsızdır, bu yüzden metin, tablolar ve diyagramlar keskin kalır. JPG daha küçüktür ama ince kenarları yumuşatır. Yakınlaşacağın belge sayfaları için PNG daha iyi bir seçimdir.",
    },
    {
      q: "Sayfa başına bir PNG mi alıyorum?",
      a: "Evet. Her sayfa ayrı bir PNG dosyası olarak işlenir ve iner. İhtiyacın olanları sakla, geri kalanını at.",
    },
    {
      q: "PDF'im herhangi bir yere yükleniyor mu?",
      a: "Hayır. İşleme tamamen tarayıcında gerçekleşir, bu yüzden dosya cihazında kalır.",
    },
    {
      q: "PNG'im neden bu kadar büyük?",
      a: "PNG kayıpsızdır ve yüksek ölçek piksel sayısını çarpar. Dosya boyutu bir sorunsa ölçeği düşür ya da JPG'ye geç.",
    },
    {
      q: "Şifre korumalı bir PDF'i dışa aktarabilir miyim?",
      a: "Tarayıcıda hayır — şifrelenmiş dosyalar işlenemez. Önce şifreyi kaldır ya da PDF Editor mobil uygulamasını kullan.",
    },
  ],
  related: [
    { label: "PDF'ten Görsele — tarayıcında sayfaları dışa aktar", path: "/pdf-to-images" },
    { label: "Görselden PDF'e — ters işlem", path: "/image-to-pdf" },
    { label: "PDF JPG'ye nasıl dönüştürülür", path: "/guides/how-to-convert-pdf-to-jpg" },
    { label: "PDF'ten sayfalar nasıl çıkarılır", path: "/guides/how-to-extract-pages-from-pdf" },
  ],
  parentHub: { label: "PDF Dönüştürücü", path: "/pdf-converter" },
};

export default content;
