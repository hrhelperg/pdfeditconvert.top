import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reorder-pdf-pages",
  h1: "PDF Sayfaları Nasıl Yeniden Sıralanır? (Ücretsiz, Tarayıcıda)",
  description:
    "PDF sayfalarını tarayıcında doğru sıraya getir. Ters çıkan taramaları ya da yanlış sırada birleşen dosyaları düzelt.",
  updated: "2026-05-23",
  intro: [
    "Sayfalar, sandığından daha sık yanlış sırada çıkar. Bir belge besleyici bir yığını çeker ve onu arkadan öne tarar. Bir birleştirme iki dosyayı bir araya getirir ama yanlış sırada. Sonda durması gereken bir ek ortaya düşer. Neden ne olursa olsun, çözüm aynıdır: belge olması gerektiği gibi okunana kadar sayfaları yeniden düzenle.",
    "Bu rehber, her sayfayı önizleyen ve basit kontrollerle taşımana izin veren, doğrudan tarayıcında çalışan ücretsiz PDF Sayfalarını Yeniden Sırala aracını kullanıyor — hiçbir şey yüklenmez. Küçük resimleri görürsün, yerlerine karıştırırsın ve düzeltilmiş dosyayı indirirsin.",
    "Küçük ama etkisi büyük bir işlem: doğru sıradaki bir belge bilinçli okunur, yanlış sıradaki ise her şeyi özensiz gösterir.",
  ],
  steps: [
    {
      title: "PDF Sayfalarını Yeniden Sırala aracını aç",
      body: "Tarayıcında PDF Sayfalarını Yeniden Sırala aracına git. Cihazında çalışır — yükleme yok, hesap yok.",
    },
    {
      title: "PDF'ini ekle",
      body: "Dosyayı bırakma alanına sürükle ya da seçmek için tıkla. Araç, mevcut sırayı bir bakışta görebilmen için her sayfanın küçük resmini oluşturur.",
    },
    {
      title: "Yerinde olmayanı tespit et",
      body: "Ters, yanlış yerleştirilmiş ya da tekrarlanmış sayfalar için küçük resimlere göz gezdir. Başlamadan önce hedef sırayı bilmek, hamleleri hızlandırır.",
    },
    {
      title: "Sayfaları doğru sıraya taşı",
      body: "Her sayfayı doğru konumuna kaydırmak için kontrolleri kullan. Konumların tahmin edilebilir kalması için belgenin başından sonuna doğru çalış.",
    },
    {
      title: "Yeni sırayı gözden geçir",
      body: "Küçük resimleri baştan sona bir kez daha oku. Gösterilen sıra, dosyada alacağın sıradır.",
    },
    {
      title: "Düzeltilmiş PDF'i indir",
      body: "Yeniden sıralanmış dosyayı dışa aktar ve net bir adla kaydet. Yeni sıranın doğru olduğunu onaylayana kadar orijinali sakla.",
    },
  ],
  tips: [
    "Bütün bir tarama ters çıktıysa, yeniden sıralama diziyi düzeltir — ama yan bir sayfa bir döndürme sorunudur ve bunun yerine PDF Döndür aracıyla halledilir.",
    "Sıkıştırmadan ya da dönüştürmeden önce yeniden sırala. Önce yapıyı doğru yapmak, sonra bitmiş belgede daha ağır işlemleri çalıştırmak daha kolaydır.",
    "Sayfaları taşırken baştan sona çalış, böylece her hamle zaten ayarladığın konumları karıştırmaz.",
    "Birden fazla kaynağı birleştiren belgeler için, amaçlanan yapı zihninde hâlâ tazeyken birleştirmenin hemen ardından yeniden sırala.",
    "Orijinal dosyayı sakla. Bir yeniden sıralama yanlış giderse, dokunulmamış kaynaktan yeniden başlamak çok daha hızlıdır.",
  ],
  mobileNote:
    "Telefonda yeniden sıralamak, küçük resimleri sürükleme işidir ve PDF Editor uygulaması bunu dokunsal hale getirir: bas, sürükle, bırak, tamam — çevrimdışı ve dosyayı yüklemeden. Sayfaların genelde hızlı bir yeniden düzenlemeye ihtiyaç duyduğu, taramanın hemen ardından kullanışlıdır.",
  faq: [
    {
      q: "Ters sırada çıkan bir taramayı düzeltebilir miyim?",
      a: "Evet. Yeniden sıralama, en son taranan sayfanın başa dönmesi için diziyi ters çevirmene izin verir. Sayfalar aynı zamanda dönmüşse, yönü PDF Döndür aracıyla düzelt.",
    },
    {
      q: "Yeniden sıralamak sayfa içeriğini değiştirir mi?",
      a: "Hayır. Sadece sıra değişir — her sayfanın içeriği ve yönü tam olarak eskisi gibi kalır.",
    },
    {
      q: "PDF'im yükleniyor mu?",
      a: "Hayır. Yeniden sıralama, cihazındaki tarayıcında çalışır, bu yüzden dosya gizli kalır.",
    },
    {
      q: "Yeniden sıralarken sayfaları silebilir miyim?",
      a: "Yeniden sıralama, sırayla ilgilidir. Sayfaları düşürmek için, tutmak istediklerini PDF Sayfalarını Çıkar aracıyla çıkar; bu, istenmeyen sayfaları dışarıda bırakır.",
    },
    {
      q: "Orijinal dosya etkilenecek mi?",
      a: "Hayır. Araç, yeni, yeniden sıralanmış bir PDF üretir ve kaynağına dokunmaz, bu yüzden gerekirse orijinalden tekrar deneyebilirsin.",
    },
  ],
  related: [
    { label: "PDF Sayfalarını Yeniden Sırala — tarayıcında düzenle", path: "/reorder-pdf-pages" },
    { label: "PDF Döndür — yan sayfaları düzelt", path: "/rotate-pdf" },
    { label: "PDF dosyaları nasıl düzenlenir", path: "/guides/how-to-organize-pdf-files" },
    { label: "PDF dosyaları nasıl birleştirilir", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "PDF Sayfalarını Yeniden Sırala", path: "/reorder-pdf-pages" },
};

export default content;
