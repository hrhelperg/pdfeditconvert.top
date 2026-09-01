import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-a-fillable-pdf",
  h1: "Doldurulabilir Bir PDF Nasıl Oluşturulur? Dürüst Seçenekler ve Sınırlar",
  description:
    "İnsanların doldurabileceği bir PDF yapmak gerçekte ne gerektirir — etkileşimli alanlar mı, yoksa basit, etkileşimsiz bir şablon mu — ve elindeki araçlara hangi yaklaşımın uyduğu.",
  updated: "2026-06-01",
  intro: [
    "İnsanların doldurabileceği bir PDF yapmanın iki dürüst yolu var, ve bunlar emek ve sonuç açısından çok farklı. Cilalı yol gerçek bir etkileşimli formdur: alıcıların dokunup yazacağı gerçek alanları — metin kutuları, onay kutuları, açılır menüler — olan bir PDF. Daha basit yol ise etkileşimsiz bir şablondur: net satırları ve etiketleri olan, insanların üzerine metin ekleyerek tamamladığı temiz, iyi aralıklı bir PDF.",
    "Baştan söylemekte fayda var: gerçek etkileşimli form alanları kurmak genelde özel form tasarım yazılımı gerektirir, ve sonuç yine de PDF görüntüleyiciler arasında farklı davranabilir. Etkileşimsiz bir şablon ise neredeyse her belge aracından yapılabilir ve her yerde güvenilir çalışır — bunun bedeli, alıcıların cevaplarını yerleştirmek için biraz daha fazla emek harcamasıdır.",
    "Bu kılavuz her iki yaklaşımı, her birinin ne zaman mantıklı olduğunu ve bitmiş formun tamamlaması kolay olması için ikisinin de nasıl tasarlanacağını anlatıyor. Bir tarayıcı aracının yapamayacağı karmaşık etkileşimli alanları büyüsüyle çağırabileceğini iddia etmiyor — bunun yerine elinde gerçekten olana uyan yöntemi gösteriyor.",
  ],
  steps: [
    {
      title: "Temiz, iyi aralıklı bir yerleşimden başla",
      body: "Formu önce bir belge aracında tasarla: net etiketler, cevaplar için bol boş alan, belirgin onay kutuları ve bir imza çizgisi. İyi aralık hem etkileşimli hem etkileşimsiz sürümler için önemlidir.",
    },
    {
      title: "Karar ver: etkileşimli alanlar mı, etkileşimsiz şablon mu",
      body: "Alıcılar formu sık dolduracaksa ve düzenli, dokun-yaz deneyimi istiyorsan, etkileşimli alanları hedefle. Herhangi bir görüntüleyicide çalışan hızlı bir şeye ihtiyacın varsa, etkileşimsiz şablon pratik seçimdir.",
    },
    {
      title: "Etkileşimsiz bir şablon için PDF olarak dışa aktar",
      body: "Düzenlenmiş belgeni doğrudan PDF'e aktar. Satırlar ve etiketler sayfa olur; alıcılar herhangi bir PDF düzenleyici ile üzerine metin ekler. Bu yöntem zaten kullandığın hemen her araçla çalışır.",
    },
    {
      title: "Etkileşimli alanlar için form tasarım yazılımı kullan",
      body: "Gerçek metin alanları, onay kutuları ve açılır menüler oluşturmak bunun için yapılmış bir yazılım gerektirir. Her alanı yerleşimin üzerine ekle, açıkça adlandır ve türünü belirle. Sonucu birden fazla görüntüleyicide test etmeyi bekle.",
    },
    {
      title: "Göndermeden önce formu test et",
      body: "Formu alıcıların açacağı gibi aç — telefonda ve bilgisayarda. Baştan sona kendin doldur. Dağıtmadan önce çok küçük, yanlış etiketlenmiş ya da satırından kaymış herhangi bir alanı düzelt.",
    },
  ],
  tips: [
    "Her yerde güvenilir şekilde dolan temiz bir etkileşimsiz şablon, bazı görüntüleyicilerde bozulan süslü bir etkileşimli formdan genelde daha iyidir.",
    "Düşündüğünden daha fazla cevap alanı bırak — dar alanlar, insanların formlar hakkındaki en büyük şikayetidir.",
    "Etkileşimli alanları anlamlı biçimde adlandır; bu hem tamamlamaya hem cevapların sonradan işlenmesine yardımcı olur.",
    "Alıcılarının yazılımının desteklediğini bilmiyorsan gelişmiş dinamik form özelliklerinden kaçın — bazı PDF görüntüleyiciler bunları desteklemez.",
    "Hangi yolu seçersen seç, formu önce sen doldur; hiçbir tasarım incelemesinin ortaya çıkaramayacağı can sıkıcı noktaları yakalarsın.",
  ],
  mobileNote:
    "Alıcılar, etkileşimli ya da etkileşimsiz olsun, formunu telefonda PDF Editor uygulamasıyla tamamlayabilir — gerçek alanlara dokunur, etkileşimsiz şablonlara metin yerleştirir. Etkileşimsiz bir şablon oluşturuyorsan, cevap alanlarının başparmaklar için yeterince büyük olduğunu doğrulamak üzere uygulamada telefonda test et.",
  faq: [
    {
      q: "Doldurulabilir bir PDF'i ücretsiz oluşturabilir miyim?",
      a: "Neredeyse her belge aracından PDF olarak dışa aktararak ücretsiz etkileşimsiz doldurulabilir bir şablon yapabilirsin — alıcılar üzerine metin ekler. Gerçek etkileşimli alanlar kurmak genelde özel form tasarım yazılımı gerektirir.",
    },
    {
      q: "Etkileşimli ve etkileşimsiz doldurulabilir PDF'ler arasındaki fark nedir?",
      a: "Etkileşimli bir PDF'in insanların dokunup yazdığı gerçek alanları vardır. Etkileşimsiz bir şablon ise insanların kendi metnini yerleştirdiği temiz bir sayfadır. Etkileşimli daha düzenlidir; etkileşimsiz yapması daha kolaydır ve her görüntüleyicide çalışır.",
    },
    {
      q: "Etkileşimli PDF formları her yerde çalışır mı?",
      a: "Her zaman değil. Standart alanlar geniş destek görür, ama form görünümü ve gelişmiş özellikler PDF görüntüleyiciler arasında değişebilir, ve dinamik formlar bazı uygulamalarda hiç açılmayabilir. Güvenmeden önce test et.",
    },
    {
      q: "Hangi yaklaşımı seçmeliyim?",
      a: "Form yoğun şekilde yeniden kullanılacaksa ve cilalı bir deneyim istiyorsan, etkileşimli alanlara yatırım yap. Hızlı ve güvenilir bir şeye ihtiyacın varsa, iyi tasarlanmış etkileşimsiz bir şablon daha güvenli bahistir.",
    },
    {
      q: "Etkileşimsiz bir şablonu nasıl kolay doldurulur yaparım?",
      a: "Net etiketler, bol boş alan, her cevap için görünür çizgiler ya da kutular ve belirgin bir imza alanı kullan. Sonra her şeyin yerinin olduğunu doğrulamak için bir kez kendin doldur.",
    },
  ],
  related: [
    { label: "PDF formu nedir", path: "/guides/what-is-a-pdf-form" },
    { label: "PDF formları nasıl çalışır", path: "/guides/how-pdf-forms-work" },
    { label: "PDF form en iyi uygulamaları", path: "/guides/pdf-form-best-practices" },
    {
      label: "Bir PDF formu nasıl paylaşılır",
      path: "/guides/how-to-share-a-pdf-form",
    },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
