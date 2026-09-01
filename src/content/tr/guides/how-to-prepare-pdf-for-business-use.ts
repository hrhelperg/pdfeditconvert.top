import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-for-business-use",
  h1: "İş Kullanımı İçin PDF Nasıl Hazırlanır? (Temizlik Kontrol Listesi)",
  description:
    "Bir PDF ofisten çıkmadan önce: taslakları kırp, sayfalamayı doğrula, yönü düzelt, yazı tiplerini göm ve dosyayı küçült. İşletmeni temsil eden belgeler için gönderim öncesi kontrol listesi.",
  updated: "2026-05-29",
  intro: [
    "İşletmenden çıkan bir PDF küçük bir elçidir. Adını, markalamanı, tipografik seçimlerini ve — çok sık — geçen hafta onu başlatan kişiden kalma “Adsız Belge (4).pdf” gibi bir orijinal dosya adını taşır. Amatör bir PDF ile profesyonel bir PDF arasındaki fark nadiren dramatiktir, ama neredeyse her zaman ilk bakışta görünür.",
    "Bir PDF'i iş kullanımı için hazırlamak tek bir dönüşüm değildir; kısa bir kontrol listesidir. Taslakları kırp, doğru sayfa numaraları belirle, yönü düzelt, yazı tiplerinin gömüldüğünü doğrula, temiz etiketle, akıllıca sıkıştır, kullanışlı bir dosya adı belirle. Her adım saniyeler alır, bütünü bir dakika sürer ve belge kasıtlı yaptığın gibi görünerek ulaşır.",
    "Bu rehber, kontrol listesini en çok sorunu önce yakalayan sırayla anlatıyor — gerçek bir teslim edilebilir için gerçek bir Salı öğleden sonrası yapacağın şekilde.",
  ],
  steps: [
    {
      title: "Kullanılmayan ya da taslak sayfaları at",
      body: "PDF Sayfalarını Çıkar, sadece gerçekten göndermek istediğin sayfaları tutar. Yer tutucu olan kapak sayfaları, boş teşekkür sayfaları, eski ekler — hepsi finalde olmamalı.",
    },
    {
      title: "Sayfa sırasını ve sayfalamayı doğrula",
      body: "Bir birleştirme ya da revizyon sonrası herhangi bir şey sırasız kaldıysa PDF Sayfalarını Yeniden Sırala kullan. Görünen sayfa numaralarının sırayla eşleştiğini kontrol et — okuyucular uyumsuz numaralandırmayı hızla fark eder.",
    },
    {
      title: "Yönü düzelt",
      body: "Geniş sayfalar (elektronik tablolar, grafikler) yatay olmalı; geri kalan her şey dik. PDF Döndür, yan gelen taramaları ya da içe aktarmaları düzeltir. Karışık yönlü bir belge, olmasa bile bozuk hisseder.",
    },
    {
      title: "Yazı tiplerinin gömülü olduğundan emin ol",
      body: "Gömülü olmayan yazı tipleri okuyucu tarafında değiştirilir, bazen kötü şekilde. Kaynaktan “tüm yazı tiplerini göm” etkinken yeniden dışa aktar ya da render'ı düzleştirmek için yazdır-PDF'e kullan.",
    },
    {
      title: "Meta veride dosya başlığını ayarla",
      body: "Tarayıcı sekmelerinde ve okuyucu başlık çubuklarında gösterilen metin genelde dosya adından farklıdır. İkisini de bilinçli ayarla — bir “Teklif” sekmesi “Adsız.docx” dediğinde müşteriler fark eder.",
    },
    {
      title: "Teslim için sıkıştır ve adlandır",
      body: "PDF Sıkıştır, dosyayı tipik posta ve portal limitlerinin altına indirir. Alıcının bir yıl sonra indirilenler klasöründen dosyayı tanıyabilmesi için MusteriAdi_BelgeTuru_YYYY-AA-GG.pdf olarak yeniden adlandır.",
    },
  ],
  tips: [
    "Göndermeden önce belgeyi %100 yakınlaştırmada bir kez gez. Göz, kaydırmanın kaçırdığı sürprizleri yakalar.",
    "Taslaklara bir filigran ekle, ama finallere asla — filigranın yokluğu bunun final olduğunun işaretidir.",
    "Eski meta veriyi temizle. PDF Editor ve yeniden dışa aktarmalar, taslaklardan sızabilecek yazar, şirket ve düzenleme geçmişini değiştirmene izin verir.",
    "Belgede doldurulmak üzere form alanları varsa, göndereceğin cihazda test et. Pek çok alan Acrobat'ta çalışır ama tarayıcılarda çalışmaz.",
    "Belgeyi son bir kez yazdırma önizlemesinde gör. Yanlış yazdırıyorsa, alıcı aynı soruna çarpacaktır.",
  ],
  mobileNote:
    "Son dakika cilası — yan yatmış bir taramayı düzeltmek, kaçak bir taslak sayfasını atmak, bir e-posta limiti için yeniden sıkıştırmak — insanların itiraf ettiğinden daha sık telefonda gerçekleşir. PDF Editor uygulaması bunların hepsini çevrimdışı halleder, böylece teslim edilebilir bir kafe Wi-Fi'ından bile temiz çıkar.",
  faq: [
    {
      q: "En çok atlanan tek adım nedir?",
      a: "Meta veriyi ayarlamak. Sekmelerde ve okuyucu başlıklarında gösterilen dosya adı ve belge başlığı genelde taslaktan kalmadır. Göndermeden önce ikisini de düzelt.",
    },
    {
      q: "Sıkıştırma ne kadar önemli?",
      a: "Alıcı katı bir portaldaysa ya da yavaş bir bağlantıdaysa çok önemli. Rastgele bir dahili paylaşım için daha az. Varsayılan olarak sıkıştır — neredeyse hiç zarar vermez.",
    },
    {
      q: "Her PDF'te yazı tiplerini gömmeli miyim?",
      a: "Müşteriye giden her şeyde evet. Herkesin aynı yazı tiplerinin kurulu olduğu dahili taslaklarda daha az kritik. Gömme maliyeti küçüktür.",
    },
    {
      q: "Her zaman sayfa numarası eklemeli miyim?",
      a: "Çok sayfalı teslim edilebilirlerde evet. Tek sayfalık belgelerde hayır. Sayfa numaraları okuyucunun gezinmesine ve eksiksizliği doğrulamasına yardımcı olur.",
    },
    {
      q: "Bunların hepsini tek geçişte yapan bir araç var mı?",
      a: "Hayır, ve bu kasıtlı — her adım otomatik bir dönüşüm değil, bilinçli bir seçimdir. Bu sitedeki tarayıcı tabanlı araçlar, her adımı bir kara kutuya paketlemeden saniyeler içinde yapmanı sağlar.",
    },
  ],
  related: [
    { label: "İşletmeler için PDF — sözleşmeler ve iş akışları", path: "/pdf-for-business" },
    { label: "PDF Sayfalarını Çıkar — final teslim edilebilirleri kırp", path: "/extract-pdf-pages" },
    { label: "PDF'ler Müşterilerle Nasıl Profesyonelce Paylaşılır?", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Paylaşmadan Önce PDF Nasıl Hazırlanır? (Kontrol Listesi)", path: "/guides/how-to-prepare-pdf-before-sharing" },
  ],
  parentHub: { label: "İşletmeler için PDF", path: "/pdf-for-business" },
};

export default content;
