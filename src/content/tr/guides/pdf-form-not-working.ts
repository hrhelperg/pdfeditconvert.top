import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-working",
  h1: "PDF Formu Çalışmıyor mu? Hızlı Teşhis ve Çözümler",
  description:
    "Sorunlu bir PDF formunun birkaç olağan nedeni vardır. Hangisiyle karşılaştığını belirlemek için hızlı teşhis — alanlar eksik, yazılmıyor, kaydedilmiyor, salt okunur — ve nerede düzeltileceği.",
  updated: "2026-06-01",
  intro: [
    "“PDF formum çalışmıyor” birçok farklı sorunu kapsar, ve çözüm tamamen hangisiyle gerçekte karşılaştığına bağlıdır. Form yazmana izin vermiyor, alanlar ortadan kayboldu, cevapların kaydedilmiyor, salt okunur açılıyor ya da sadece tuhaf davranıyor. Her birinin belirli bir nedeni ve belirli bir çözümü vardır — hüner önce belirtiyi adlandırmaktır.",
    "Bu sayfa bir triyajdır. Tek bir dev her-derde-deva çözüm yerine, birkaç saniyede hangi sorunla karşılaştığını belirlemene yardım eder, sonra seni onu ele alan kılavuza yönlendirir. Çoğu form sorunu dosyada bir arıza bile değildir; form ile açtığın görüntüleyici arasındaki bir uyumsuzluk ya da salt okunur koruma gibi bilerek yapılmış bir ayardır.",
    "Aşağıdaki hızlı kontrolleri sırayla uygula. Etkileşimsiz bir form mu, bir görüntüleyici sorunu mu, bir kaydetme sorunu mu, bir güvenlik ayarı mı yoksa bir uyumluluk sorunu mu ile karşı karşıya olduğunu — ve sırada nereye gideceğini — söylerler.",
  ],
  steps: [
    {
      title: "Alanları hiç görebiliyor musun?",
      body: "Form alanları eksikse ya da sayfa eksik görünüyorsa, bu bir alan eksikliği sorunudur — genelde alan katmanını çizmeyen bir görüntüleyicidir. Çözüm için alanlar-kayıp kılavuzuna bak.",
    },
    {
      title: "Alanlar var ama yazamıyor musun?",
      body: "Bir alana dokunuyorsun ve hiçbir şey olmuyorsa, form etkileşimsiz, yanlış görüntüleyicide açılmış ya da salt okunur olabilir. “Yazamıyorum” kılavuzu bunları nasıl ayırt edeceğini anlatır.",
    },
    {
      title: "Kaydettikten sonra cevaplar kayboluyor mu?",
      body: "Formu doldurup kaydediyorsan, yeniden açıyorsan ve yine boşsa, alan değerleri dosyaya yazılmıyor demektir. “Kaydedilmiyor” kılavuzu form verisini güvenilir şekilde kaydetmeyi anlatır.",
    },
    {
      title: "Form salt okunur ya da kilitli mi açılıyor?",
      body: "Her şey griye çevrilmişse ya da korumalı bir bildirim görüyorsan, form düzenlemeye karşı güvenli hale getirilmiştir. Salt okunur kılavuzu, aşmaman gereken bir güvenliği aşmadan seçeneklerini anlatır.",
    },
    {
      title: "Bir uygulamada çalışıyor ama başkasında değil mi?",
      body: "Form bir programda davranıyor ama diğerinde bozuluyorsa, bu bir uyumluluk sorunudur — belki gelişmiş bir form türüdür. Uyumluluk kılavuzuna bak ya da konsolide edilmiş düzeltme kontrol listesini dene.",
    },
  ],
  tips: [
    "Düzeltmeyi denemeden önce belirtiyi adlandır — doğru çözüm tamamen hangi soruna sahip olduğuna bağlıdır.",
    "Birçok sorun için en hızlı tek test: aynı dosyayı özel bir PDF uygulamasında aç. “Bozuk form” ile “kötü görüntüleyici”yi anında ayırır.",
    "Davranmayı reddeden bir form nadiren gerçekten bozuktur; çoğu neden görüntüleyici uyumsuzlukları ya da bilerek yapılmış ayarlardır.",
    "Sadece işini bitirmen gerekiyorsa, sayfanın üzerine metin yerleştirmek altında yatan sorun ne olursa olsun neredeyse her formda işe yarar.",
    "Form görünümü ve davranışı PDF görüntüleyiciler arasında değişebilir, o yüzden “burada çalışmıyor” nadiren “her yerde bozuk” demektir.",
  ],
  mobileNote:
    "Birçok “form çalışmıyor” bildirimi sadece alanları görmezden gelen bir e-posta önizlemesi ya da temel bir görüntüleyicidir. Dosyayı PDF Editor uygulamasında açmak, var olan yerde etkileşimli alanları etkinleştirir ve olmayan etkileşimsiz ya da kilitli formlarda metin yerleştirmene izin verir — cihazda, hiçbir şey yüklenmeden.",
  faq: [
    {
      q: "PDF formum neden çalışmıyor?",
      a: "Neredeyse her zaman birkaç şeyden biridir: form etkileşimsizdir ve alansızdır, görüntüleyicin alanları çizmez, cevaplar kaydedilmez, form salt okunurdur ya da uygulamanın desteklemediği özellikler kullanır. Belirtiyi belirle, sonra eşleşen düzeltmeyi uygula.",
    },
    {
      q: "İlk olarak denenecek en hızlı şey nedir?",
      a: "Aynı dosyayı bir e-posta önizlemesi ya da tarayıcı yerine özel bir PDF uygulamasında aç. Bu tek adım, aslında görüntüleyici uyumsuzluğu olan “form çalışmıyor” sorunlarının büyük bir kısmını çözer.",
    },
    {
      q: "Formun bozuk mu yoksa sadece uygulamamın mı sorunlu olduğunu nasıl anlarım?",
      a: "Farklı, yetenekli bir PDF uygulamasında dene. Orada çalışıyorsa, orijinal görüntüleyicin sorunluydu. Her yerde başarısız oluyorsa, gelişmiş bir form türü ya da gerçekten hasarlı bir dosya olabilir.",
    },
    {
      q: "Sadece doldurmam gerekiyor — evrensel geçici çözüm nedir?",
      a: "Bir PDF düzenleyiciyle sayfanın üzerine kendi metnini ve işaretlerini yerleştir. Bu, altında yatan neden ne olursa olsun etkileşimsiz, kilitli ve alansız formlarda aynı şekilde işe yarar.",
    },
    {
      q: "Kendi sorunum için nereye bakmalıyım?",
      a: "Belirtiyle eşleştirmek için yukarıdaki kontrolleri kullan — alanlar kayıp, yazamıyorum, kaydetmiyor, salt okunur ya da uyumluluk — ve o konu için bağlantılı kılavuzu ya da konsolide edilmiş düzeltme kontrol listesini takip et.",
    },
  ],
  related: [
    {
      label: "PDF form alanları kayıp mı",
      path: "/guides/pdf-form-fields-missing",
    },
    {
      label: "Bir PDF formuna neden yazamıyorum",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    {
      label: "Bir PDF formu neden kaydedilmiyor",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "PDF form uyumluluk sorunları",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "PDF form hataları nasıl düzeltilir", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
