import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-png",
  h1: "PDF mi PNG mi? Çok Sayfalı Belgeler ve Tek Keskin Görseller",
  description:
    "Çok sayfalı belgeler için PDF, tek, keskin, şeffaf arka planlı görseller için PNG kazanır. Net kurallar ve aralarındaki dönüştürme yöntemi.",
  updated: "2026-05-29",
  intro: [
    "PDF ve PNG ikisi de ne için var oldukları konusunda mükemmeldir ve farklı şeyler içindir. PDF, seçilebilir metin, gömülü yazı tipleri, imzalar ve yapıyla çok sayfalı belgeleri tutar. PNG, kayıpsız sıkıştırma ve şeffaflık desteğiyle tek bitmap görselleri tutar. Her biri diğerinin işi için yanlış araçtır ve karışıklık çoğunlukla insanların gerçekte bir belge olan bir şeyi göndermek için PNG kullanmasından gelir.",
    "PNG, keskin, tam, tek bir görsel gerektiğinde parlar — şeffaf arka planlı bir logo, bir ekran görüntüsü, bir diyagram, bir grafik. Pikseller veridir; altında metin yoktur. PDF, sayfalara, yazı tiplerine, metin seçimine ya da herhangi bir çok adımlı yapıya ihtiyaç duyduğunda parlar.",
    "Bu kılavuz her birini ne zaman kullanacağının net kurallarını, iki yönde aralarındaki dönüşümü ve seçimin gerçekten bir muhakeme meselesi olduğu durumları anlatıyor.",
  ],
  steps: [
    {
      title: "Çok sayfalı herhangi bir şey için PDF kullan",
      body: "İki ya da daha fazla sayfası olan herhangi bir belge, bir dizi PNG değil bir PDF olmalı. PDF sayfaları bir arada tutar, sırayı korur ve alıcının sırayla okuyabileceği tek bir dosya olarak sunar.",
    },
    {
      title: "Şeffaflığa sahip tek, keskin görseller için PNG kullan",
      body: "Şeffaf arka planlı logolar, diyagramlar, ekran görüntüleri — PNG doğru formattır. Kayıpsız sıkıştırma metni ve çizgileri net tutar; alfa kanalı şeffaflığı destekler.",
    },
    {
      title: "Fotoğrafik içerik için PNG kullanma",
      body: "Fotoğraflar PNG'de büyüktür ve kayıpsız sıkıştırmadan fayda görmez. JPG, fotoğrafları benzer görsel kalitede boyutun bir kısmında halleder.",
    },
    {
      title: "Sayfaları görsel olarak çıkarmak için PDF'i PNG'ye dönüştür",
      body: "PDF'ten Görsele her PDF sayfasını yüksek çözünürlüklü bir PNG olarak dışa aktarır. Bir sayfaya sunumlar, web sayfaları ya da tasarım araçları için tek bir görsel olarak ihtiyaç duyduğunda kullanışlıdır.",
    },
    {
      title: "Ekran görüntülerini bir belgeye paketlemek için PNG'yi PDF'e dönüştür",
      body: "PNG'den PDF'e ya da Görselden PDF'e, PNG ekran görüntülerini tek bir PDF'te birleştirir. Birçok ekran görüntüsü aldığında ve bunları tek, sıralı bir dosya olarak paylaşmak istediğinde kullanışlıdır.",
    },
    {
      title: "Metin ağırlıklı tek sayfalar için PDF hâlâ daha iyidir",
      body: "Tek sayfalık metin içeriği bile PNG yerine PDF'ten fayda görür — metin seçilebilir kalır, dosya boyutu daha küçüktür ve alıcı dosyadan kopyalayabilir.",
    },
  ],
  tips: [
    "Bir ekran görüntüsünün PNG'si sorun değil; çok sayfalı bir belgenin PNG'si yanlıştır. Çok sayfalı olan PDF'e aittir.",
    "PNG'inde fotoğraflar varsa JPG'e geç — aynı görsel kalite, çok daha küçük dosya.",
    "PNG → PDF dönüşümü görseli tam çözünürlükte korur; kalite kaybı yok.",
    "PDF → PNG dönüşümü çözünürlüğü ayarlamana izin verir. Daha yüksek daha keskindir ama daha büyüktür; 2× ölçek genelde doğru dengedir.",
    "PDF olarak sahip olduğun bir belgeyi, özellikle görsel formata ihtiyacın olmadıkça “PNG'ye dışa aktarma”. PDF daha kullanışlıdır.",
  ],
  mobileNote:
    "Telefonlar genelde içeriği aslında bir PDF olması gereken PNG ekran görüntüleri olarak yakalar. PDF Editor uygulaması PNG ekran görüntülerini cihaz üzerinde tek bir PDF'te birleştirir; birden çok çekimi dağınık bir küme yerine tek, sıralı bir dosya olarak paylaşmak için kullanışlıdır.",
  faq: [
    {
      q: "PDF yerine ne zaman PNG kullanmalıyım?",
      a: "Tek, keskin bir görsele, özellikle şeffaflıkla ihtiyacın olduğunda. Başka belgelere giren logolar, diyagramlar, ekran görüntüleri, grafikler.",
    },
    {
      q: "Tek bir sayfa için PDF mi PNG mi daha küçük?",
      a: "İçeriğe bağlı. Metin ağırlıklı tek sayfa: PDF kazanır. Görsel ağırlıklı tek sayfa: benzer ya da PNG kayıpsız olduğu için biraz daha büyük.",
    },
    {
      q: "Bir PDF içindeki bir PNG'yi düzenleyebilir miyim?",
      a: "Evet — PDF, PNG'yi tutar ve görseli PDF düzenleme araçlarıyla değiştirebilirsin. Bir belgeye logo ya da ekran görüntüsü eklemek için kullanışlıdır.",
    },
    {
      q: "PNG neden birden fazla sayfayı desteklemiyor?",
      a: "PNG temelde bir görsel formatıdır. Çok sayfalı belge formatları (PDF, TIFF) bu amaç için tasarlanmıştır. PNG değildir.",
    },
    {
      q: "Paylaşacağım çok sayıda PNG'im varsa ne olur?",
      a: "Görselden PDF'e bunları tek, sıralı bir PDF'te birleştirir. Alıcılar bir ek klasörü yerine tek bir dosya alır.",
    },
  ],
  related: [
    { label: "PDF'ten Görsele — sayfaları PNG ya da JPG olarak dışa aktar", path: "/pdf-to-images" },
    { label: "Görselden PDF'e — PNG'leri tek bir PDF'te birleştir", path: "/image-to-pdf" },
    { label: "PNG PDF'e nasıl dönüştürülür", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "PDF PNG'ye nasıl dönüştürülür", path: "/guides/how-to-convert-pdf-to-png" },
  ],
  parentHub: { label: "PDF'ten Görsele — sayfaları PNG ya da JPG olarak dışa aktar", path: "/pdf-to-images" },
};

export default content;
