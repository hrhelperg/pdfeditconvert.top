import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "what-is-a-pdf-form",
  h1: "PDF Formu Nedir? Etkileşimli ve Etkileşimsiz Formlar",
  description:
    "Bir PDF formu, cevap toplamak için tasarlanmış bir belgedir — bazen gerçekten yazabildiğin alanlarla, bazen üzerine yazı yazılan etkileşimsiz bir sayfayla. Bunun anlamı ve nasıl anlaşılacağı.",
  updated: "2026-06-01",
  intro: [
    "Bir PDF formu, onu açan kişiden bilgi toplamak için tasarlanmış herhangi bir PDF'tir: bir iş başvurusu, bir vergi belgesi, bir onay formu, bir rezervasyon sayfası. Bir formu sıradan bir PDF'ten ayıran şey niyettir — form senden sadece okumanı değil, cevap eklemeni bekler. Kafa karıştıran nokta şu: iki form ekranda birebir aynı görünebilir, ama doldurmaya çalıştığında tamamen farklı davranabilir.",
    "Ayrım, formun etkileşimli alanlara sahip olup olmadığına bağlıdır. Etkileşimli bir formda, tasarımcının dosyaya yerleştirdiği kutular vardır — birine dokunursun ve yazmaya hazır bir imleç belirir. Etkileşimsiz bir formda bu kutular yoktur; aslında bir formun görüntüsüdür, çoğu zaman kağıt bir orijinalin taraması, satırların ve etiketlerin aktif alanlar değil görüntünün parçası olduğu bir sayfadır. İkisi de form sayılır, ikisi de doldurulabilir, ama farklı bir yaklaşım gerektirirler.",
    "Hangisiyle karşı karşıya olduğunu anlamak iki saniyeni alır ve seni epey bir sinirden kurtarır. Bu kılavuz bir PDF formunun gerçekte ne olduğunu, karşına çıkacak iki türü ve doldurmaya başlamadan önce bunları nasıl ayırt edeceğini anlatıyor.",
  ],
  steps: [
    {
      title: "Bir formun tamamlanmak için yapıldığını fark et",
      body: "Sadece okuduğun bir rapor ya da sözleşmenin aksine, bir formda cevap bekleyen boşluklar vardır — ad satırları, onay kutuları, imza alanları. Onu form yapan, nasıl hazırlandığından bağımsız olarak, bu niyettir.",
    },
    {
      title: "Etkileşimli bir formu tanı",
      body: "PDF'i aç ve cevabın gireceği yere dokun ya da tıkla. Bir metin imleci belirirse, bir alan vurgulanırsa ya da bir onay kutusu işaretlenirse, formda tasarımcının bilerek eklediği etkileşimli alanlar var demektir.",
    },
    {
      title: "Etkileşimsiz bir formu tanı",
      body: "Boş bir yere dokunmak hiçbir şey yapmıyorsa — imleç yok, vurgu yok — form etkileşimsizdir. Satırlar ve etiketler sayfa görüntüsünün içine gömülüdür, yani doğrudan yazabileceğin bir şey yoktur.",
    },
    {
      title: "Nasıl oluşturulduğuna bak",
      body: "Form tasarım yazılımından dışa aktarılan formlar genelde etkileşimlidir. Yazdırılıp elle imzalanan, sonra tekrar taranan formlar ise neredeyse her zaman etkileşimsizdir. Kaynağını bilmek türünü tahmin etmeni sağlar.",
    },
    {
      title: "Doğru doldurma yöntemini seç",
      body: "Etkileşimli formlar: dokun ve yaz. Etkileşimsiz formlar: sayfanın üzerine kendi metin kutularını ve işaretlerini ekle. Yetenekli bir PDF düzenleyici ikisini de aynı dosyada yönetir.",
    },
  ],
  tips: [
    "En hızlı test dokunma testidir: boş bir satıra dokun. İmleç çıkarsa etkileşimlidir; hiçbir şey olmuyorsa etkileşimsizdir.",
    "Bir form kısmen etkileşimli olabilir: bazı alanlar gerçek, bazıları eksiktir. Gerçek olanları doldur, kalan boşluklar için elle metin ekle.",
    "Etkileşimli formları düzgünce doldurmak daha kolaydır, ama etkileşimsiz formlar da tamamen kullanılabilirdir — sadece metni sen konumlandırırsın.",
    "Başkaları için bir form tasarlıyorsan, yapabildiğin yerde etkileşimli yap; bu, alıcı için doldurmayı çok kolaylaştırır.",
    "Bir formun görünümü PDF görüntüleyiciler arasında değişebilir, yani telefonunda bir şekilde görünen bir alan, başka birinin bilgisayarında biraz farklı görünebilir.",
  ],
  mobileNote:
    "Telefonda, PDF Editor uygulaması açtığın anda formun etkileşimli alanları olup olmadığını kontrol eder: varsa dokunup yazarsın; yoksa sayfanın herhangi bir yerine metin ve işaret koyarsın. Her iki durumda da hiçbir şey yazdırmadan imzalayıp tamamlanmış bir kopyayı dışa aktarabilirsin.",
  faq: [
    {
      q: "Her PDF bir form mudur?",
      a: "Hayır. Bir PDF ancak cevap toplamak için tasarlanmışsa form sayılır — alanlar, onay kutuları, imza satırları. Bir rapor ya da makale bir PDF'tir ama form değildir.",
    },
    {
      q: "PDF formumun etkileşimli mi yoksa etkileşimsiz mi olduğunu nasıl anlarım?",
      a: "Cevabın gireceği boş bir yere dokun ya da tıkla. İmleç belirir ve yazabiliyorsan etkileşimlidir. Hiçbir şey olmuyorsa etkileşimsiz bir formdur ve üzerine metin eklersin.",
    },
    {
      q: "Etkileşimsiz bir PDF formunu doldurabilir miyim?",
      a: "Evet. Etkileşimsiz bir formda alan yoktur, ama bir PDF düzenleyici kullanarak sayfanın herhangi bir yerine kendi metnini ve işaretlerini koyabilir, sonra tamamlanmış dosyayı dışa aktarabilirsin.",
    },
    {
      q: "Neden biri etkileşimli yerine etkileşimsiz bir form gönderir?",
      a: "Genelde form kağıt olarak başladığı ve tarandığı için, ya da onu oluşturan araç alan eklemediği için. Bu bir hata değildir — sadece biraz farklı bir doldurma yöntemi gerektirir.",
    },
    {
      q: "Etkileşimli formlar her zaman daha mı iyidir?",
      a: "Tamamlaması daha kolaydır ve daha düzenli görünürler, ama bazı görüntüleyicilerin desteklemediği özellikler de kullanabilirler. İyi hazırlanmış etkileşimsiz bir form her yerde güvenilirdir, doldurması biraz daha emek istese de.",
    },
  ],
  related: [
    {
      label: "Düzenlenebilir PDF ile doldurulabilir PDF farkı",
      path: "/guides/editable-pdf-vs-fillable-pdf",
    },
    { label: "PDF formları nasıl çalışır", path: "/guides/how-pdf-forms-work" },
    {
      label: "PDF formu nasıl doldurulur",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Düzenlenebilir PDF ile görüntü PDF'i farkı",
      path: "/guides/editable-pdf-vs-flat-pdf",
    },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
