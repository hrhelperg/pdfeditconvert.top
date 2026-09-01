import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-wont-save",
  h1: "Bir PDF Formu Neden Kaydedilmiyor? (Ve Nasıl Düzeltilir)",
  description:
    "Bir formu doldurdun ve yeniden açınca cevaplar mı kayboluyor? Bazı görüntüleyicilerin form verisini kaydetmek yerine neden sadece yazdırdığı ve cevaplarını kalıcı hale getirmenin güvenilir yolları.",
  updated: "2026-06-01",
  intro: [
    "Bir formu doldurmak için on dakika harcıyorsun, kaydediyorsun, sonra yeniden açıyorsun ve her alan yine boş. Çok can sıkıcı, ve bu senin hatan değil — cevaplar sayfadan ayrı bir katmanda yaşıyor, ve her araç kaydettiğinde bu katmanı gerçekten dosyaya geri yazmıyor. Bazıları formu sadece yazdırabilir, girdini asla saklayamaz.",
    "İki güvenilir çözüm var: form verisini gerçekten kaydeden bir araç kullanmak, ya da cevaplarının kalıcı sayfa içeriği haline gelmesi için formu kilitlemek, böylece hiçbir şey onları düşüremez. Hangisini seçeceğin, cevapları sonradan düzenlemen gerekip gerekmediğine bağlıdır. Her iki durumda da, kaybolan cevap sorunu tamamen çözülebilir.",
    "Bu kılavuz kaydetmenin neden başarısız olduğunu, aracının sorun olup olmadığını nasıl doğrulayacağını ve doldurulmuş cevapların yerinde kalmasını sağlayan iki güvenilir yolu anlatıyor.",
  ],
  steps: [
    {
      title: "Cevapların gerçekten kaydedilmediğini doğrula",
      body: "Bir alanı doldur, kaydet, dosyayı tamamen kapat ve yeniden aç. Cevap kayıpsa, alan değerleri yazılmıyordur — bu bir kaydetme sorunudur, senin yanlış yaptığın bir şey değil.",
    },
    {
      title: "Sadece Yazdır değil, Kaydet ya da Dışa Aktar kullan",
      body: "Alan değerlerini PDF'in içine yazmak için Kaydet ya da Dışa Aktar seç. Sadece Yazdır sunan bir yol (temel görüntüleyicilerde yaygın) çıktı üretir ama düzenlenebilir cevapları asla saklamaz — kaybolan verinin klasik nedeni budur.",
    },
    {
      title: "Form desteği olan bir araca geç",
      body: "Mevcut uygulaman sadece yazdırıyorsa, formu form verisini kaydeden özel bir PDF uygulamasına ya da tarayıcı aracına taşı. Cevapların kalıcı olduğunu doğrulamak için kaydedilen dosyayı yeniden aç.",
    },
    {
      title: "Cevapları kalıcı hale getirmek için kilitle",
      body: "Düzenlemeyi bitirdiysen, formu kilitle. Kilitleme, değerleri sayfaya birleştirir, böylece düşecek ayrı bir katman kalmaz ve cevaplar her yerde sağ kalır.",
    },
    {
      title: "Yeni bir kopya olarak kaydet",
      body: "Yeni bir dosya adına dışa aktar, böylece hem temiz bir boş hem kaydedilmiş, doldurulmuş bir sürüm elde edersin — ve orijinali yanlışlıkla boş bir formla asla üzerine yazmazsın.",
    },
  ],
  tips: [
    "Cevaplar kayboluyorsa, aracın alan katmanını sadece yazdırıyordur, kaydetmiyordur — form verisi yazan bir araca geç.",
    "Kilitleme en kesin çözümdür: bir kez kilitlendiğinde, kaybedecek bir alan katmanı kalmaz.",
    "Boş orijinali ayrı tut, böylece doldurulmuş kopyanı kilitlemek seni yeniden kullanılabilir şablonuna mal etmez.",
    "Bir kaydedilen formu her zaman yeniden aç, güvenmeden önce; kapat-yeniden-aç testi sorunu hemen yakalar.",
    "Telefonlarda, “PDF olarak yazdır” kısayolu genelde kilitler — bitirdiysen sorun değil, ama formu etkileşimli tutmaz.",
  ],
  mobileNote:
    "PDF Editor uygulaması doldurulmuş cevapları dosyaya yazar ve bittiğinde kilitlenmiş bir kopya dışa aktarabilir, böylece yeniden açtığında ya da alıcının tarafında hiçbir şey kaybolmaz. Cihazda kaydeder, yani girdiğin bilgiler gizli kalır.",
  faq: [
    {
      q: "PDF formum neden sürekli boş kaydediliyor?",
      a: "Çünkü görüntüleyicin formu alan değerlerini kaydetmek yerine yazdırıyor. Cevaplar ayrı bir alan katmanında yaşar; dosyaya yazılmazsa, yeniden açtığında yine boşları görürsün. Form verisi kaydeden bir araç kullan ya da formu kilitle.",
    },
    {
      q: "Form cevaplarımın yerinde kalmasını nasıl sağlarım?",
      a: "Alan değerlerinin dosyaya yazılması için form desteği olan bir araçla kaydet ya da dışa aktar, sonra doğrulamak için yeniden aç. Kalıcı bir sonuç için, cevapların sayfaya birleşmesi için formu kilitle.",
    },
    {
      q: "Kilitleme kaydetme için ne yapar?",
      a: "Doldurulmuş değerlerini sayfanın kendisine birleştirir, düşecek ayrı bir alan katmanı bırakmaz. Kilitlendikten sonra cevaplar herhangi bir görüntüleyicide güvenilir şekilde kaydedilir ve görüntülenir.",
    },
    {
      q: "Orijinalin üzerine mi yazmalıyım yoksa bir kopya mı kaydetmeliyim?",
      a: "Yeni bir adla bir kopya kaydet. Bu, temiz bir boş şablonu ve doldurulmuş sürümünü ayrı tutar, böylece yeniden kullanılabilir şablonu asla kaybetmezsin ya da yanlışlıkla boş bir form göndermezsin.",
    },
    {
      q: "Bu, bir formun salt okunur olmasıyla aynı şey mi?",
      a: "Hayır. Kaydetmeyen bir sorun, aracının alan verisini saklamadığı anlamına gelir. Salt okunur bir form ise düzenlemeyi aktif olarak engeller. Yazabiliyor ama cevapları tutamıyorsan, bu bir kaydetme sorunudur, bir güvenlik sorunu değil.",
    },
  ],
  related: [
    {
      label: "Doldurulmuş bir PDF formu nasıl kaydedilir",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    { label: "PDF formu çalışmıyor mu", path: "/guides/pdf-form-not-working" },
    {
      label: "Bir PDF formu neden salt okunur",
      path: "/guides/why-pdf-form-is-read-only",
    },
    { label: "PDF formları nasıl çalışır", path: "/guides/how-pdf-forms-work" },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
