import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "mobile-pdf-form-workflow",
  h1: "Mobil PDF Form İş Akışı (Alımdan Gönderime)",
  description:
    "Formlar için tekrarlanabilir, telefon odaklı bir rutin: al, doğru uygulamada aç, doldur, imzala, kilitle, gönder. Bilgisayar gerektirmeyen uçtan uca iş akışı.",
  updated: "2026-06-01",
  intro: [
    "Formlar, gerçekten telefon dostu olan en somut PDF işlerinden biridir. E-postayla gelirler, elinde tamamlarsın ve aynı şekilde geri giderler — hiçbir adımda bilgisayar gerekmez. İşin sırrı tek bir araç değildir; her formun, etkileşimli ya da etkileşimsiz, gelen kutusundan gönderilene aynı yolu izlemesini sağlayan tekrarlanabilir bir rutine sahip olmaktır.",
    "Bu kılavuz o iş akışını baştan sona anlatıyor. Bilerek her seferinde aynı beş adımdır: formu yetenekli bir uygulamaya al, doldur, imzala, kilitle, gönder. Bu kas hafızası haline geldiğinde, eskiden “masaya oturana kadar bekle” anlamına gelen bir form, diğer işler arasında iki dakikalık bir işe dönüşür.",
    "Her iki form türü için de işe yarar. Etkileşimli olanlara dokunup yazarsın; etkileşimsiz taramalara üzerine yazarsın. İş akışı değişmez — sadece doldurma adımı uyarlanır.",
  ],
  steps: [
    {
      title: "Formu al ve kaydet",
      body: "Bir form e-posta ya da mesajla geldiğinde, alanlarını görmezden gelebilecek bir önizleme içinde çalışmak yerine, kontrol ettiğin bir yere — Dosyalar ya da telefonunun deposuna — kaydet.",
    },
    {
      title: "Form desteği olan bir uygulamada aç",
      body: "Kaydedilen dosyayı PDF Editor uygulamasında aç. Varsa etkileşimli alanları algılar, yoksa etkileşimsiz formlara metin eklemene izin verir. Bu tek adım, çoğu “yazamıyorum” çıkmazını önler.",
    },
    {
      title: "Formun türüne göre doldur",
      body: "Etkileşimli alanlara dokunup yaz, ya da etkileşimsiz bir forma metin ve işaret yerleştir. Hassasiyet için yakınlaştır, yukarıdan aşağıya çalış ve zorunlu alanları atlama.",
    },
    {
      title: "Aynı oturumda imzala",
      body: "Uygulama değiştirmeden kayıtlı imzanı imza alanına ekle. Bunu tek seferde yapmak, dışa aktarıp yeniden açıp her şeyi yeniden yerleştirmemeni sağlar.",
    },
    {
      title: "Kilitle ve gönder",
      body: "Cevapların kilitlenmesi için tamamlanmış formu kilitle, sonra paylaşım menüsünden gönder — e-posta, portal ya da mesaj. Bir dahaki sefer için boş orijinali sakla.",
    },
  ],
  tips: [
    "Bütün mesele tekrarlanabilirliktir: her form için aynı beş adım, böylece bir karar olmaktan çıkıp alışkanlığa dönüşür.",
    "Doldurmadan önce formları e-posta önizlemelerinden kaydet — bu tek hamle en yaygın mobil form hayal kırıklığını önler.",
    "Cevapları yeniden içe aktarmamak ve yeniden yerleştirmemek için doldur ve imzala işlemini tek oturumda yap.",
    "Alıcının cevaplarını tam girdiğin gibi görmesi için göndermeden önce kilitle.",
    "Boş şablonlarla bir “formlar” klasörü tut, böylece yeniden doldurma her zaman taze, temiz bir kopya olsun.",
  ],
  mobileNote:
    "PDF Editor uygulaması tam olarak bu döngü için tasarlandı: alanları algıla, doldur, imzala, kilitle, dışa aktar — hepsi cihazda, hiçbir şey yüklenmeden. Her adım tek bir uygulamada yaşadığı için, tüm alım-gönder iş akışı hiç dizüstü bilgisayara uzanmadan gerçekleşir.",
  faq: [
    {
      q: "PDF formlarını gerçekten tamamen telefonumda tamamlayabilir miyim?",
      a: "Evet. Formlar e-postayla gelir ve aynı şekilde geri gider, ve yetenekli bir PDF uygulaması doldurmayı, imzalamayı, kilitlemeyi ve dışa aktarmayı halleder — yani tüm iş akışı bilgisayar gerektirmez.",
    },
    {
      q: "İş akışı etkileşimsiz ile etkileşimli formlar için değişir mi?",
      a: "Sadece doldurma adımı. Etkileşimli formlara dokunup yazarsın; etkileşimsiz formlara üzerine metin yerleştirirsin. Alma, imzalama, kilitleme ve gönderme her ikisi için de aynıdır.",
    },
    {
      q: "Formları e-posta yerine neden ayrı bir uygulamada açayım?",
      a: "E-posta önizlemeleri ve temel görüntüleyiciler genelde form alanlarını görmezden gelir, bu yüzden yazmak imkânsız görünür. Kaydedilen dosyayı özel bir PDF uygulamasında açmak alanları etkinleştirir ve o çıkmazı önler.",
    },
    {
      q: "Göndermeden önce neden kilitleyeyim?",
      a: "Kilitleme, cevaplarını sayfaya birleştirir, böylece alıcının görüntüleyicisi tarafından temizlenemez ya da değiştirilemez ve her yerde tutarlı görünür.",
    },
    {
      q: "Mobil form iş akışı gizli mi?",
      a: "PDF Editor uygulamasıyla her adım cihazda gerçekleşir, yani girdiğin kişisel bilgiler yüklenmez. Hassas formlar gönderirken alıcının resmi kanalını kullan.",
    },
  ],
  related: [
    {
      label: "iPhone'da PDF formu nasıl doldurulur",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Android'de PDF formu nasıl doldurulur",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "Tamamlanmış bir PDF formu nasıl gönderilir",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "Telefonda PDF nasıl imzalanır",
      path: "/guides/how-to-sign-pdf-on-phone",
    },
    { label: "PDF Editor — doldur ve imzala", path: "/pdf-editor" },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
