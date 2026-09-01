import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-contracts-as-pdf",
  h1: "Sözleşmeler PDF Olarak Nasıl Gönderilir? (İmzala, Kilitle, Teslim Et)",
  description:
    "Sözleşmeler daha sıkı bir PDF iş akışı gerektirir: içeriği kilitleme, imza uygulama, taslakları filigranlama ve karşı tarafın uzun yazışma olmadan imzalayabileceği bir son dosya elde etme.",
  updated: "2026-05-29",
  intro: [
    "Sözleşmeler, PDF'in yanlış ele alınmasının en çok zarar verdiği belge türüdür. İmzasız taslaktan farklı bir sürüm olan imzalı bir kopya. İlk imzalayanın kilitli sandığı bir dosyaya uygulanan bir karşı imza. Finalde unutulan bir taslak filigranı. Hiçbiri egzotik değil; hepsi insanları gerçek anlaşmazlıklara sokar.",
    "Çözüm, üç şey etrafında daha sıkı bir iş akışıdır: imzadan önce içeriği kilitlemek, imzaları net bir sırada uygulamak ve sonucu kesin bir final dosya olarak göndermek. Hiçbiri pahalı sözleşme yazılımı gerektirmez; temel PDF araçlarının bilinçli kullanımını ve dürüst bir sıralamayı gerektirir.",
    "Bu rehber, iş akışını olması gerektiği gibi ele alıyor — final taslaktan iki tarafın imzalarına, avukatın memnun olduğu temiz bir karşı imzalı PDF'e kadar. Ayrıca karşı tarafın kendi imzalama platformunu kullanmak istediği durumlarda ne yapılacağını da kapsıyor.",
  ],
  steps: [
    {
      title: "Önce sözleşme içeriğini kesinleştir",
      body: "Tüm müzakere kaynağa geri döner — Word, Pages, Docs. PDF'te düzeltme işaretlemesi yapma. Her iki taraf da metnin kilitlendiğini kabul ettiğinde ancak o zaman PDF'e dışa aktar.",
    },
    {
      title: "Taslakları temizle ve filigranla",
      body: "TASLAK filigranlarını kaldır (PDF'e Filigran Ekle, finale zaten bir tane eklememeni sağlar). Final PDF final gibi görünmelidir.",
    },
    {
      title: "Önce kendi imzanı ekle",
      body: "PDF İmzala, doğru yere yazılı ya da çizilmiş bir imza eklemeni sağlar. Belgeyi başlatan sensen önce imzala; karşı taraf zaten senin imzanı içeren PDF'i karşı imzalar.",
    },
    {
      title: "Göndermeden önce dosyayı kilitle",
      body: "Aracın destekliyorsa, imzaladıktan sonra düzenleme kısıtlamaları uygula. Karşı taraf okuyup imzalayabilir ama içeriği değiştiremez. Bir sözleşmeyi güvenle dondurmanın tek yolu budur.",
    },
    {
      title: "Net talimatlarla gönder",
      body: "Kısa bir kapak notu: “Ekte: imzalı sözleşme. Lütfen 8. sayfada karşı imzalayın ve geri gönderin.” Tek bir cümle, soru turlarını önler.",
    },
    {
      title: "Karşı imzalı dosyayı al ve ikisini de arşivle",
      body: "Karşı imzalı PDF geldiğinde, onu kanonik sürüm olarak kaydet. İmzasız taslağı, tek imzalı kopyanı ve tam imzalı kopyayı aynı klasörde tut. Sürüm zinciri denetim izidir.",
    },
  ],
  tips: [
    "Orijinal imzalama PDF'ini ikinci bir sözleşme için kullanma. Her yeni sözleşme için her zaman taze bir dışa aktarmayla başla — tertemiz meta veri, tertemiz imzalar.",
    "Karşı taraf kendi imzalama platformunu (DocuSign, Adobe Sign, başkaları) kullanmak istiyorsa, onlarınkine uy. Hangi aracın daha temiz olduğuna dair bir mücadeleye değmez.",
    "İmzanın görsel olarak belirgin olduğundan emin ol. İtalik yazılı bir isim bir imzadır ama çizilmiş bir imzadan daha az kasıtlı hisseder.",
    "Sözleşme başlığını, tarihini ve karşı tarafları listeleyen kapak sayfaları, sadece dosya adına güvenmekten çok daha kolay sonraki bulmayı sağlar.",
    "Müzakere sırasında taslakları filigranla (TASLAK, İMZAYA UYGUN DEĞİL). Görünür etiket, kazara karşı imzayı önler.",
  ],
  mobileNote:
    "Karşı imzalar genelde bir telefonda gerçekleşir — trende inceleyen bir ortak, toplantılar arasında imzalayan bir müşteri. PDF Editor uygulaması bunu iyi yapar: sözleşmeyi gözden geçir, ekranda parmakla imzala, bir masaüstüne sekmeden geri gönder. İmzalı dosya, telefondan temiz bir PDF olarak çıkar.",
  faq: [
    {
      q: "Bir PDF'teki yazılı imza yasal olarak bağlayıcı mı?",
      a: "Çoğu yargı bölgesinde, sıradan sözleşmeler için evet. Bazı belirli kullanım durumları (noter onaylı senetler, bazı mali araçlar) daha fazlasını gerektirir — varsaymadan önce sözleşme türünü kontrol et.",
    },
    {
      q: "Sözleşme şifreyle korunmalı mı?",
      a: "Genelde hayır. Şifreler fazla güvenlik faydası olmadan sürtünme ekler. Şifreleri son derece gizli ekler için sakla, sözleşmenin kendisi için değil.",
    },
    {
      q: "İmzaladıktan sonra bir PDF'i nasıl kilitlerim?",
      a: "PDF Editor uygulaması dahil pek çok düzenleme aracı, imzalama sürecinde düzenleme kısıtlamaları uygulamanı sağlar. Final imzadan sonra kilitle, müzakere sırasında değil.",
    },
    {
      q: "Karşı taraf imzaladıktan sonra PDF'i düzenlerse ne olur?",
      a: "Göndermeden önce dosyayı kilitlersen değişiklikler fark edilebilir olur. Kilitleme olmasa bile, imzalı PDF kayıtlı sürümdür; sonraki düzenlemeler imzayı geçersiz kılar.",
    },
    {
      q: "Her zaman önce ben mi imzalamalıyım?",
      a: "Belgeyi başlatan sensen evet — bu, kararlı olduğunu gösterir. Karşı imzalıyorsan, baştan başlamak yerine karşı tarafın gönderdiği dosyayı imzala.",
    },
  ],
  related: [
    { label: "PDF İmzala — elektronik imza ekle", path: "/sign-pdf" },
    { label: "PDF'e Filigran Ekle — taslakları açıkça etiketle", path: "/add-watermark-to-pdf" },
    { label: "PDF'ler Müşterilerle Nasıl Profesyonelce Paylaşılır?", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Küçük İşletmeler İçin PDF İş Akışları (Teklif, Sözleşme, Kayıt)", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "PDF İmzala", path: "/sign-pdf" },
};

export default content;
