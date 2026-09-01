import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-extract-pages-from-pdf",
  h1: "PDF'ten Sayfalar Nasıl Çıkarılır? (Ücretsiz, Yükleme Yok)",
  description:
    "Belirli sayfaları ya da aralıkları tarayıcında yeni bir dosyaya çıkar. Birinin ihtiyaç duyduğu sadece o sayfaları göndermek için ideal.",
  updated: "2026-05-23",
  intro: [
    "Sayfa çıkarmak, çok özel bir ihtiyacın cevabıdır: birisi belgenin tamamını değil, bir kısmını ister. Banka 3. sayfaya ihtiyaç duyar, form imza sayfasını ister, teklif incelemesi sadece fiyatlandırma bölümünü ilgilendirir. Tüm 40 sayfalık dosyayı iletip \"12. sayfaya bak\" demek tembelliktir ve hassas herhangi bir şey için dikkatsizliktir.",
    "Bu rehber, istediğin sayfaları seçmene ve onları yepyeni bir PDF olarak kaydetmene olanak tanıyan ücretsiz PDF Sayfalarını Çıkar aracını kullanıyor — hepsi tarayıcında, hiçbir şey yüklenmeden. Orijinal dokunulmadan kalır; sadece seçtiğin şeyi içeren temiz bir dosya alırsın.",
    "Aynı zamanda bir gizlilik aracı olarak da işlev görmesi, bu işlemi tam olarak en kullanışlı PDF işlemlerinden biri yapar: sadece gereken sayfaları gönderirsin, başka hiçbir şeyi değil.",
  ],
  steps: [
    {
      title: "PDF Sayfalarını Çıkar aracını aç",
      body: "Tarayıcında PDF Sayfalarını Çıkar aracına git. Tamamen cihazında çalışır — yükleme yok, hesap yok.",
    },
    {
      title: "PDF'ini ekle",
      body: "Dosyayı bırakma alanına sürükle ya da seçmek için tıkla. Araç, hassas seçim yapabilmen için sayfa sayısını yükler.",
    },
    {
      title: "İstediğin sayfaları seç",
      body: "Tekil sayfalar ya da aralıklar gir — örneğin 3, sonra 8-10. Sadece listelediğin sayfalar yeni dosyada olur.",
    },
    {
      title: "Yeni PDF'i oluştur",
      body: "Çıkarmayı çalıştır. Araç, seçtiğin sırayla sadece seçili sayfalarını içeren yepyeni bir PDF oluşturur.",
    },
    {
      title: "İndir ve adlandır",
      body: "Çıkarılan dosyayı ne olduğunu söyleyen bir adla kaydet — \"Imza-sayfasi.pdf\" ya da \"Fiyatlandirma-bolumu.pdf\" gibi.",
    },
    {
      title: "Göndermeden önce doğrula",
      body: "Yeni PDF'i aç ve sadece amaçlanan sayfaları içerdiğini kontrol et. Bu, birine ulaşmadan önce bir sayfa numarası kaymasını yakalayacağın andır.",
    },
  ],
  tips: [
    "Birkaç sayfayı tek bir yeni dosyada toplamak istediğinde çıkar; bir belgeyi birkaç dosyaya ayırmak istediğinde böl. Aracı amaca göre eşleştir.",
    "Çıkarmak sessiz bir gizlilik kazancıdır: sadece ilgili sayfaları göndermek, belgenin geri kalanının kazara ifşa olmaması demektir.",
    "Sayfa numaralarını PDF görüntüleyicinin dizinine değil, belgenin kendisine göre iki kez kontrol et — kapak sayfaları ve ekler sayımı bir kaydırabilir.",
    "Orijinal asla değiştirilmez, bu yüzden aynı dosyadan istediğin kadar farklı sayfa setleri çıkarabilirsin.",
    "Sayfaları kaldırıp geri kalanını tutmak için, tutmak istediğin sayfaları çıkar — birkaç istenmeyen sayfayı düşürmenin en temiz yolu budur.",
  ],
  mobileNote:
    "Telefonundan sadece imzalı sayfayı geri göndermen mi gerekiyor? PDF Editor uygulaması birkaç dokunuşla, çevrimdışı olarak belirli sayfaları çıkarır ve paylaşır — böylece tüm gizli dosyayı iletmeden doğru sayfa gider.",
  faq: [
    {
      q: "Çıkarmak, bölmekten nasıl farklı?",
      a: "Çıkarmak, seçtiğin sayfaları tek bir yeni dosyada toplar. Bölmek, bir PDF'i birden fazla ayrı dosyaya böler. Belirli sayfaları toplamak için çıkar, bir belgeyi ayırmak için böl kullan.",
    },
    {
      q: "Ardışık olmayan sayfaları seçebilir miyim?",
      a: "Evet. Tekil sayfaları ve aralıkları birlikte listele, 1, 4, 9-12 gibi, ve yeni PDF tam olarak bu sırayla bu sayfaları içerir.",
    },
    {
      q: "Çıkarmak orijinali değiştirir mi?",
      a: "Hayır. Kaynak PDF bozulmadan bırakılır; araç yeni bir dosya oluşturur. Aynı orijinalden istediğin kadar çıkarma çalıştırabilirsin.",
    },
    {
      q: "Dosyam yükleniyor mu?",
      a: "Hayır. Çıkarma, cihazındaki tarayıcında çalışır, bu yüzden gizli belgeler gizli kalır.",
    },
    {
      q: "Sayfaları tutmak yerine nasıl kaldırırım?",
      a: "Tutmak istediğin sayfaları çıkar — istenmeyenler basitçe dahil edilmez. Bir PDF'ten birkaç sayfa düşürmenin en basit yolu budur.",
    },
  ],
  related: [
    { label: "PDF Sayfalarını Çıkar — tarayıcında sayfaları al", path: "/extract-pdf-pages" },
    { label: "PDF Böl — bir dosyayı aralığa göre ayır", path: "/split-pdf" },
    { label: "PDF dosyaları ayrı dosyalara nasıl bölünür", path: "/guides/how-to-split-pdf-files" },
    { label: "PDF'ten istenmeyen sayfalar nasıl silinir", path: "/guides/how-to-remove-unwanted-pages-from-pdf" },
  ],
  parentHub: { label: "PDF Sayfalarını Çıkar", path: "/extract-pdf-pages" },
};

export default content;
