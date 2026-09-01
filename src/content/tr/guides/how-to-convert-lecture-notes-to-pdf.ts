import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-lecture-notes-to-pdf",
  h1: "Ders Notları PDF'e Nasıl Dönüştürülür? (Word, Fotoğraf, Sunum)",
  description:
    "Ders notları her formatta gelir — Word belgesi, sunum, ekran görüntüsü, tahtanın fotoğrafı. Her birini yapısını kaybetmeden tek, okunabilir bir PDF'e çevirme yöntemi.",
  updated: "2026-05-29",
  intro: [
    "Bir haftanın sonunda tek bir dersin notları beş farklı formatta olabilir: derste yazdığın bir Word belgesi, hocanın paylaştığı bir PowerPoint, tahtanın bir fotoğrafı, kaydedilmiş bir videodan ekran görüntüleri ve dizüstü bilgisayarının pili bittiğinde tuttuğun birkaç el yazısı sayfa.",
    "Bunların hepsi konu başına ya da hafta başına tek bir PDF'te toplanabilir — ve toplanmalıdır. PDF'ler her formatı makul şekilde ele alır, herhangi bir cihazda okunur ve dağınık dosyalar gibi kaybolmaz. Numara, her kaynağın yapısını kaybetmeden PDF'i üretmek.",
    "Bu kılavuz her format için dönüştürme yolunu, ardından tutarlı tek bir dosya üreten birleştirme stratejisini anlatıyor. Amaç, sınav zamanında gerçekten kullanabileceğin çalışma materyalidir.",
  ],
  steps: [
    {
      title: "Word notlarını Word'den PDF'e ile dönüştür",
      body: "Bir Word belgesindeki yazılı notlar → tarayıcında Word'den PDF'e. Başlıkları, biçimlendirmeyi ve gömülü ekran görüntülerini korur. Belgeyi tam boyutunda dışa aktar; sıkıştırmayı sonraya bırak.",
    },
    {
      title: "Sunumları PDF olarak dışa aktar",
      body: "PowerPoint ve Keynote doğrudan PDF'e aktarılır. Ekran görüntüsü değil, dışa aktar menüsünü kullan. PDF sürümü metni seçilebilir tutar ve her yakınlaştırma düzeyinde keskin kalır.",
    },
    {
      title: "Fotoğraf ve ekran görüntülerini Görselden PDF'e ile dönüştür",
      body: "Tahtanın fotoğrafları, kayıtlardan ekran görüntüleri → Görselden PDF'e bunları tek bir PDF'te birleştirir. İçe aktarmadan önce sırayı belirle; sonradan yeniden sıralamak daha fazla iş çıkarır.",
    },
    {
      title: "El yazısı sayfaları tara",
      body: "Telefonundaki PDF Tarama, gri tonlama ve kenar algılamayla temiz, çok sayfalı taramalar üretir. Rastgele fotoğraflardan daha keskin ve daha küçüktür.",
    },
    {
      title: "Konu başına tek bir PDF'te birleştir",
      body: "PDF Birleştir tüm formatları tek, sıralı bir dosyada toplar. Sıra önemlidir: ders günü kronolojisi ya da mantıksal yapı (giriş slaytları → ders notları → tahta fotoğrafları → özet). Birini seç ve ona sadık kal.",
    },
    {
      title: "Bir kapak sayfası ve içindekiler ekle",
      body: "Yazılı bir kapak (ders, hafta, konu) dosyayı altı ay sonra bile kendini açıklar hâle getirir. Uzun birleşik PDF'ler için (30 sayfadan fazla) tek sayfalık bir içindekiler ekle.",
    },
  ],
  tips: [
    "Sunumları ekran görüntüsüyle almaya karşı diren. Sunumun PDF dışa aktarımını kullan — daha keskindir ve metin aramada seçilebilir kalır.",
    "Tahtayı açılı değil, düz karşıdan fotoğrafla. Otomatik düzeltme orta düzey eğikliği giderebilir ama düz bir fotoğraf her zaman daha temizdir.",
    "Bir kayıtta önemli anlar varsa videonun tamamı yerine o belirli kareleri ekran görüntüsü olarak al. PDF yönetilebilir kalır.",
    "Haftalar arasında birleştirme yapma. Hafta başına bir PDF dosyaları gezinilebilir tutar; dönem başına tek bir PDF okunmaz olur.",
    "Son birleşik PDF'i sadece dönem bittikten sonra sıkıştır. Dönem içinde aktif çalışma için okunabilir kopyayı koru.",
  ],
  mobileNote:
    "Ders notu dönüştürmenin yarısı telefonda gerçekleşir — tahtayı fotoğraflamak, el yazısı bir sayfayı taramak, slaytların ekran görüntüsünü almak. PDF Editor uygulaması dönüştürme ve birleştirme zincirini mobilde halleder, dosya telefondan hiç çıkmadan hafta başına temiz bir PDF üretir.",
  faq: [
    {
      q: "Notları orijinal formatında mı tutmalıyım yoksa dönüştürmeli miyim?",
      a: "İkisini de. Gözden geçirme için düzenlenebilir orijinalleri sakla; çalışma için konu başına bir PDF kopyası üret. PDF, kaynağın yerine geçmez — bir çalışma materyalidir.",
    },
    {
      q: "En iyi birleştirme yöntemi nedir?",
      a: "Tarayıcındaki PDF Birleştir. Sırayı birleştirmeden önce belirle; sonradan yeniden sıralamak teknik olarak mümkün ama daha yavaştır.",
    },
    {
      q: "El yazısı taramalara OCR uygulamalı mıyım?",
      a: "Aracın destekliyorsa evet — aranabilir el yazısı notlar sınav zamanında daha kullanışlıdır. El yazısında OCR kusursuz değildir; aranabilir metni yaklaşık olarak kabul et.",
    },
    {
      q: "Haftalık not PDF'leri ne kadar büyük olmalı?",
      a: "Doğal olarak o hafta ne üretiyorsa. Dönem sonunda arşiv için sıkıştır; dönem içinde okunabilirliği boyuttan önce tut.",
    },
    {
      q: "Bunların hepsini telefonda yapabilir miyim?",
      a: "Evet. PDF Editor uygulaması her formatı işler ve cihaz üzerinde birleştirir. Notların dizüstü bilgisayar vaktini beklemesini istemediğinde işe yarar.",
    },
  ],
  related: [
    { label: "PDF Dönüştürücü — Word, JPG, PNG dönüşümleri", path: "/pdf-converter" },
    { label: "Görselden PDF'e — tahta fotoğrafları ve ekran görüntüleri", path: "/image-to-pdf" },
    { label: "El yazısı notlar PDF'e nasıl taranır", path: "/guides/how-to-scan-notes-to-pdf" },
    { label: "Ders materyalleri PDF olarak nasıl düzenlenir", path: "/guides/how-to-organize-study-materials-as-pdf" },
  ],
  parentHub: { label: "PDF Dönüştürücü — Word, JPG, PNG ve geri", path: "/pdf-converter" },
};

export default content;
