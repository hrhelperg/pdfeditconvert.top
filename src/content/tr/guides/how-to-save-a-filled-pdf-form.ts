import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-save-a-filled-pdf-form",
  h1: "Doldurulmuş Bir PDF Formu Nasıl Kaydedilir Ki Cevaplar Kalıcı Olsun?",
  description:
    "Bir formu doldurup cevapların kaybolduğunu mu gördün? Doldurulmuş form verisini güvenilir şekilde kaydetme yöntemi, bazı görüntüleyicilerin neden bunu yapamadığı ve göndermeden önce ne zaman kilitlenmesi gerektiği.",
  updated: "2026-06-01",
  intro: [
    "Uzun bir formu doldurup kapatmaktan, yeniden açmaktan ve her alanın yine boş olduğunu görmekten daha can sıkıcı çok az PDF anı vardır. Yaptığın iş kaybolmadı çünkü bir hata yaptın — cevaplar formun alan katmanında yaşar ve her araç kaydettiğinde bu katmanı gerçekten dosyaya geri yazmaz. Bazıları sadece formu yazdırabilir, hiçbir zaman girdini saklayamaz.",
    "Doldurulmuş bir formu güvenilir şekilde kaydetmek iki şeye bağlıdır: alan değerlerini saklayan bir araç kullanmak (sadece yazdıran değil), ve formu düzenlenebilir bırakmak mı yoksa cevapları kalıcı hale getirmek için kilitlemek mi istediğine karar vermek. Bu ikisini doğru yaparsan cevapların, dosyayı sonradan açan her cihazda her seferinde yerinde kalır.",
    "Bu kılavuz doldurulmuş cevapları tam olarak nasıl kaydedeceğini, bazı görüntüleyicilerin bunları neden sessizce düşürdüğünü ve bir formu geri göndermeden önce ne zaman kilitlemenin doğru hamle olduğunu anlatıyor.",
  ],
  steps: [
    {
      title: "Önce formu tamamen doldur",
      body: "Kaydetmeden önce her cevabı gir, onay kutularını işaretle ve varsa imzayı ekle. Yarı yolda kaydetmek sorun değil, ama son bir gözden geçirme yapıp yarım kalmış değil bitmiş bir dosya kaydetmiş olursun.",
    },
    {
      title: "Sadece Yazdır değil, Kaydet ya da Dışa Aktar kullan",
      body: "Alan değerlerini PDF'in içine yazmak için Kaydet ya da Dışa Aktar seçeneğini kullan. Bazı basit görüntüleyiciler sadece Yazdır sunar; bu, kağıt ya da etkileşimsiz bir kopya üretir ama düzenlenebilir cevapları hiçbir zaman saklamaz — kaybolan verinin klasik nedeni budur.",
    },
    {
      title: "Yeni bir kopya olarak kaydet",
      body: "“basvuru-tamamlandi.pdf” gibi yeni bir dosya adına dışa aktar, boş olanın üzerine yazma. Böylece temiz bir orijinal ile kaydedilmiş, doldurulmuş bir sürümü yan yana tutarsın.",
    },
    {
      title: "Kilitleyip kilitlemeyeceğine karar ver",
      body: "Cevapları değiştirmen gerekiyorsa formu etkileşimli bırak. Onu iyi olarak gönderiyorsan, değerlerin sayfaya işlenip temizlenemez ya da düzenlenemez hale gelmesi için kilitle.",
    },
    {
      title: "Tutup tutmadığını doğrulamak için yeniden aç",
      body: "Göndermeden önce kaydedilen dosyayı kapatıp yeniden aç. Cevapların hâlâ oradaysa alan değerleri doğru yazılmış demektir. Kayıpsa araç sadece yazdırmıştır — form verisini kaydeden bir araca geç.",
    },
  ],
  tips: [
    "Cevaplar kayboluyorsa araç alan katmanını yazmıyordur. Alan değerlerini gerçekten kaydeden, form desteği olan bir düzenleyici kullan.",
    "Kilitleme, cevapların her yerde görüntülenmesini garantilemenin en güvenilir yoludur — kilitlendikten sonra kaybedecek bir alan katmanı kalmaz.",
    "Boş orijinali ayrı tut; doldurulmuş kopyanı kilitlemek yeniden kullanılabilir şablonuna mal olmamalı.",
    "Telefonlarda “paylaş” ya da “dışa aktar” genelde veriyi kaydeder; PDF olarak yazdır kısayolu ise onu kilitleyebilir — düzenlemeyi bitirdiysen sorun değil.",
    "Dosyaları açıkça adlandır — boş, taslak, final — böylece yanlışlıkla boş formu e-postayla göndermezsin.",
  ],
  mobileNote:
    "PDF Editor uygulaması doldurulmuş cevapları dosyanın içine yazar ve göndermeye hazır olduğunda kilitlenmiş bir kopya dışa aktarabilir, böylece alıcı tarafında hiçbir şey temizlenmez. Hepsi cihazda gerçekleşir, yani girdiğin bilgiler gizli kalır.",
  faq: [
    {
      q: "PDF form cevaplarım kaydettikten sonra neden kayboluyor?",
      a: "Çünkü görüntüleyicin alan değerlerini kaydetmek yerine formu yazdırdı. Cevaplar ayrı bir katmanda yaşar; dosyaya geri yazılmazsa yeniden açtığında yine boş görürsün. Form verisini kaydeden bir araç kullan.",
    },
    {
      q: "Bir formu göndermeden önce kilitlemeli miyim?",
      a: "Düzenlemeyi bitirdiysen evet. Kilitleme, cevaplarını sayfaya işleyerek temizlenmelerini önler ve her görüntüleyicide aynı görünmelerini sağlar. Kilitlenmemiş bir kopyayı sadece gözden geçirmeyi düşünüyorsan sakla.",
    },
    {
      q: "Formu etkileşimli tutup cevaplarımı yine de nasıl kaydederim?",
      a: "Kilitlemeden etkileşimli bir PDF olarak kaydet ya da dışa aktar. Form desteği olan bir araç alan değerlerini saklar, böylece daha sonra yeniden açıp değiştirebilirsin.",
    },
    {
      q: "Doldurulmuş bir formu kaydetmek gizli mi?",
      a: "Araca bağlı. PDF Editor uygulaması ve yerel tarayıcı araçları cihazında kaydeder, yani girdiğin kişisel bilgiler hiçbir yere gönderilmez. Yükleme temelli araçlar dosyanı bir sunucuda işler.",
    },
    {
      q: "Üzerine metin yazarak doldurduğum etkileşimsiz bir formu kaydedebilir miyim?",
      a: "Evet. Etkileşimsiz formların alan katmanı olmadığı için, eklediğin metin dışa aktardığında sayfanın bir parçası olur, yani her zaman güvenilir şekilde kaydedilir ve görüntülenir.",
    },
  ],
  related: [
    {
      label: "PDF formu nasıl doldurulur",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    { label: "PDF formları nasıl çalışır", path: "/guides/how-pdf-forms-work" },
    {
      label: "Bir PDF formu neden kaydedilmiyor",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "Tamamlanmış bir PDF formu nasıl gönderilir",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
