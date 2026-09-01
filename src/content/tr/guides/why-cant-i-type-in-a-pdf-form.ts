import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-type-in-a-pdf-form",
  h1: "Bir PDF Formuna Neden Yazamıyorum? Nedenleri ve Çözümleri",
  description:
    "Bir alana tıklıyorsun ve hiçbir şey olmuyor. Üç olağan neden — etkileşimsiz bir form, yanlış görüntüleyici ya da kilitli bir dosya — ve her biri için tam olarak ne yapman gerektiği.",
  updated: "2026-06-01",
  intro: [
    "Bir form açıyorsun, adının gireceği yere tıklıyorsun, ve… hiçbir şey. İmleç yok, kutu yok, yazacak bir yol yok. Form bozukmuş gibi hissettiriyor, ama neredeyse hiçbir zaman öyle değildir. Yazamama sorunu, her biri adını koyduğunda net bir çözümü olan üç belirli nedenden birine iner.",
    "İlki ve en yaygını, formun etkileşimsiz olmasıdır — yazacak etkileşimli alan yoktur, sadece bir formun görüntüsü vardır. İkincisi, form alanlarını düzgün işleyemeyen bir görüntüleyicide açmandır. Üçüncüsü ise formun kilitli ya da salt okunur olması, girdiyi bilerek engellemesidir. Bunları ayırt etmek birkaç hızlı kontrol gerektirir.",
    "Bu kılavuz üç nedeni sırayla ele alıyor, hangisiyle karşılaştığını nasıl doğrulayacağını gösteriyor ve cevaplarını sayfaya geçirebilmen için her biri için pratik bir çözüm sunuyor.",
  ],
  steps: [
    {
      title: "Formun hiç alanı olup olmadığını doğrula",
      body: "Birkaç farklı boşluğa dokun. Hiçbiri sayfanın herhangi bir yerinde imleç ya da vurgu üretmiyorsa, form neredeyse kesinlikle etkileşimsizdir — tasarım gereği ya da tarandığı için yazacak alan yoktur.",
    },
    {
      title: "Etkileşimsizse üzerine metin ekle",
      body: "Etkileşimsiz formlara yazamazsın, ama bir PDF düzenleyicinin metin aracıyla sayfanın üzerine kendi metnini ve işaretlerini koyabilirsin. Taranmış ya da alansız bir formu tamamlamanın amaçlanan yolu budur.",
    },
    {
      title: "Görüntüleyiciyi eleyerek dışla",
      body: "Bazı tarayıcılar ve hafif önizleyiciler bir formu gösterir ama alanlarını görmezden gelir. Aynı dosyayı özel bir PDF uygulamasında aç. Alanlar aniden çalışırsa, sorun orijinal görüntüleyiciydi.",
    },
    {
      title: "Kilitli ya da salt okunur bir formu kontrol et",
      body: "Alanlar mevcut ama her yerde girdiyi reddediyorsa, form güvenli hale getirilmiş ya da salt okunur işaretlenmiş olabilir. Bir kilit simgesi ya da “korumalı” bildirimi ara. Salt okunur bir form yazmayı bilerek engeller.",
    },
    {
      title: "Kilitli bir formu aşmanın yolunu bul",
      body: "Salt okunur bir form için genelde sanki etkileşimsizmiş gibi üzerine metin yerleştirebilirsin ya da gönderenden kilidi açılmış bir sürüm isteyebilirsin. Senin olmayan bir belgenin güvenliğini aşmaya çalışma.",
    },
  ],
  tips: [
    "En hızlı teşhis: aynı dosyayı düzgün bir PDF uygulamasında dene. “Etkileşimsiz form” ile “kötü görüntüleyici”yi anında ayırır.",
    "Üzerine metin eklemek neredeyse her formda işe yarar, etkileşimsiz ya da kilitli olsun, ve genelde tamamlanmış bir sayfaya giden en hızlı yoldur.",
    "Bilgisayarda düzgün yazan ama telefonun e-posta önizlemesinde yazmayan bir form görüntüleyici sorunudur — bunun yerine gerçek bir PDF uygulamasında aç.",
    "Sadece bazı alanlar yazmayı reddediyorsa, o belirli alanlar hesaplamalı ya da kilitli olabilir; kalanı açık kalır.",
    "Form görünümü ve davranışı PDF görüntüleyiciler arasında değişebilir, bu yüzden “burada çalışmıyor” nadiren “her yerde bozuk” anlamına gelir.",
  ],
  mobileNote:
    "Telefonda PDF Editor uygulaması, var olan etkileşimli alanlara yazar ve olmayan etkileşimsiz ya da kilitli formlarda doğrudan sayfaya metin yerleştirmene izin verir — böylece e-posta önizlemenin yazmayı kabul etmediği bir form doldurulabilir hale gelir. Hiçbir şey yüklenmeden, cihazda çalışır.",
  faq: [
    {
      q: "PDF formuma neden yazamıyorum?",
      a: "Genelde üç nedenden biri: form alansız ve etkileşimsizdir, görüntüleyicin form alanlarını desteklemiyordur ya da form kilitli/salt okunurdur. Hangisi olduğunu belirle, sonra ya üzerine metin ekle, görüntüleyici değiştir ya da kilidi açılmış bir kopya iste.",
    },
    {
      q: "Etkileşimsiz bir PDF formuna nasıl yazarım?",
      a: "Alanlara yazamazsın çünkü hiç yoktur. Bunun yerine, her cevabın ait olduğu yere doğrudan sayfaya metin ve işaret koymak için bir PDF düzenleyici kullan, sonra dosyayı dışa aktar.",
    },
    {
      q: "Form bilgisayarımda çalışıyor ama telefonumda neden çalışmıyor?",
      a: "Telefonun muhtemelen formu, alanları görmezden gelen bir uygulamada önizliyordur. Dosyayı özel bir PDF uygulamasında aç, alanlar etkin hale gelmeli.",
    },
    {
      q: "Salt okunur bir PDF formu ne demektir?",
      a: "Bu, yazarının alanların düzenlenememesi ya da yazılamaması için güvenli hale getirdiği bir formdur. Genelde yine de üzerine metin serebilirsin ya da gönderenden girdiye izin veren bir sürüm isteyebilirsin.",
    },
    {
      q: "Bir form kısmen yazılabilir olabilir mi?",
      a: "Evet. Bazı alanlar kilitli ya da otomatik hesaplanan olabilirken diğerleri girdi kabul edebilir. Açık olanları doldur, ulaşamadıkların için elle metin ekle.",
    },
  ],
  related: [
    {
      label: "PDF formu nasıl doldurulur",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Bir PDF formu neden salt okunur",
      path: "/guides/why-pdf-form-is-read-only",
    },
    {
      label: "PDF form alanları kayıp mı",
      path: "/guides/pdf-form-fields-missing",
    },
    { label: "PDF formu çalışmıyor mu", path: "/guides/pdf-form-not-working" },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
