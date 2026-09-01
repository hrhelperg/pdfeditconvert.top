import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-fillable-pdf",
  h1: "Düzenlenebilir PDF ile Doldurulabilir PDF Arasındaki Fark Nedir?",
  description:
    "Bir PDF'i düzenlemek içeriğini değiştirir; bir PDF'i doldurmak form alanlarına cevap girmek demektir. İki işin neden farklı olduğu ve hangisine gerçekten ihtiyacın olduğu.",
  updated: "2026-06-01",
  intro: [
    "“Düzenlenebilir” ve “doldurulabilir” kulağa aynı şeymiş gibi gelir, insanlar bu iki kelimeyi birbirinin yerine kullanır — ama aslında iki farklı işi anlatırlar. Bir PDF'i düzenlemek, belgenin kendisini değiştirmek demektir: bir cümleyi yeniden yazmak, bir logoyu değiştirmek, bir paragrafı taşımak. Bir PDF'i doldurmak ise belgeyi yazarının bıraktığı gibi tutup sadece bunun için ayrılmış boşluklara cevap girmek demektir. Bir form doldurulmak için yapılır, düzenlenmek için değil.",
    "Bu ayrım önemlidir çünkü kullanılan araçlar ve izinler farklıdır. Düzenlenebilir bir PDF, altındaki içeriği değiştirmene izin verir. Doldurulabilir bir PDF ise seni bilerek kendi form alanlarıyla sınırlar; böylece sen cevaplarını girerken sorular ve yerleşim sabit kalır. Birçok form kasıtlı olarak düzenlenemez yapılır — yazarı herkesin kopyasının aynı soruları aynı yerde sormasını ister.",
    "İşleri daha da karıştıran üçüncü bir kelime var — “etkileşimsiz” — bu da bir PDF'in metninin gerçek mi yoksa sadece bir görüntü mü olduğuyla ilgilidir. Bu kılavuz odağını düzenlenebilir ile doldurulabilir arasındaki farkta tutuyor: her birinin ne anlama geldiği, hangisine ne zaman ihtiyacın olduğu ve elindeki dosyanın neye izin verdiğini nasıl anlayacağın.",
  ],
  steps: [
    {
      title: "Düzenlemeyi tanımla: belgeyi değiştirmek",
      body: "Düzenlemek, yazarın oluşturduğu içeriği değiştirir — metin, görsel, sayfa sırası. Bir sözleşmedeki yazım hatasını düzeltmek ya da bir broşürdeki fiyatı güncellemek için bir PDF'i düzenlersin. Bu, belgenin ne söylediğini değiştirir.",
    },
    {
      title: "Doldurmayı tanımla: alanlar içinde cevaplamak",
      body: "Doldurmak, belgeyi olduğu gibi bırakır ve sadece belirlenen alanlara ya da boşluklara cevaplarını ekler. Bir başvuru formunu doldurursun; sorularını yeniden yazmazsın.",
    },
    {
      title: "Bir dosyanın doldurulabilir olup olmadığını kontrol et",
      body: "Bir cevabın gireceği yere dokun. İmleç ya da vurgulanan bir kutu, formun etkileşimli alanlar üzerinden doldurulabilir olduğu anlamına gelir. Alan yoksa yine de üzerine metin ekleyebilirsin — bu, yerleşik değil elle bir doldurma olur.",
    },
    {
      title: "Bir dosyanın düzenlenebilir olup olmadığını kontrol et",
      body: "Belgenin kendi metninden bir satır seçmeyi dene. Seçiliyorsa ve bir PDF düzenleyici değiştirmene izin veriyorsa, içerik düzenlenebilirdir. Taranan sayfalar ve kilitli dosyalar buna genelde direnir.",
    },
    {
      title: "Aracı işe göre eşleştir",
      body: "Belgenin ne söylediğini değiştirmen mi gerekiyor? Bir PDF düzenleyici kullan. Birinin sana gönderdiği bir formu mu tamamlaman gerekiyor? Form doldurmayı kullan — cevapların gireceği alanlara dokun ya da metin yerleştir, sonra dışa aktar.",
    },
  ],
  tips: [
    "Bir dosya doldurulabilir ama düzenlenebilir olmayabilir: alanları cevaplayabilirsin, ama soruları değiştiremezsin. Çoğu form için bu tasarım gereğidir.",
    "Bir form, verilen alanda cevaplayamayacağın bir soru soruyorsa, formu düzenlemeye çalışma — izin verilen yere açıklayıcı bir not ekle ya da gönderene sor.",
    "Bitmiş bir formun cevaplarını sonradan düzenlemek, düzenlenebilir bir kopyasını tutuyorsan mümkündür, ama kilitlenmiş ya da taranmış sürümleri değiştirmek çok daha zordur.",
    "Sen yazarsan, baştan karar ver: insanların doldurmasını mı istiyorsun (içeriği kilitle, alan ekle) yoksa üzerinde birlikte mi çalışmasını istiyorsun (düzenlenebilir tut)?",
    "Bazı PDF'ler form doldurmaya izin verirken düzenlemeyi engelleyen güvenlik ayarları kullanır — bu bilerek yapılan bir kombinasyondur, hata değil.",
  ],
  mobileNote:
    "PDF Editor uygulaması telefonda her iki işi de halleder: içeriği değiştirmen gerektiğinde belgenin metnini ve görsellerini düzenle, ya da sadece doldurman gerektiğinde form alanlarına dokun — etkileşimsiz formlarda ise metni sen yerleştir. Etkileşimli alanları otomatik algılar ve her şey cihazında kalır.",
  faq: [
    {
      q: "Doldurulabilir bir PDF, düzenlenebilir bir PDF ile aynı mı?",
      a: "Hayır. Doldurulabilir, belgeyi değiştirmeden form alanlarına cevap girebileceğin anlamına gelir. Düzenlenebilir, belgenin gerçek içeriğini değiştirebileceğin anlamına gelir. Bir form genelde doldurulabilir ama bilerek düzenlenemez yapılmıştır.",
    },
    {
      q: "Bir PDF hem düzenlenebilir hem doldurulabilir olabilir mi?",
      a: "Evet, güvenlik ayarları ikisine de izin veriyorsa. Ama birçok form, soruların ve yerleşimin değiştirilememesi için kilitlenir; alanlar yine de cevap kabul etmeye devam eder.",
    },
    {
      q: "Bir formdaki soruları düzenleyemiyorum — bozuk mu?",
      a: "Hemen hemen kesinlikle hayır. Formlar, her kopyanın aynı şeyleri sorması için yaygın olarak korunur. Senden beklenen alanları doldurman, formu yeniden yazman değil.",
    },
    {
      q: "Birinin bana gönderdiği bir başvuruyu tamamlamak için hangisine ihtiyacım var?",
      a: "Doldurmaya, düzenlemeye değil. Cevaplarını alanlara gir ya da form etkileşimsizse sayfaya metin yerleştir, sonra imzala ve dışa aktar. Formun kendisini değiştirmen gerekmemeli.",
    },
    {
      q: "Bu, düzenlenebilir ile etkileşimsiz farkından nasıl ayrılır?",
      a: "Düzenlenebilir ile etkileşimsiz karşılaştırması, bir PDF'in metninin gerçek mi yoksa bir görüntü mü olduğuyla ilgilidir. Düzenlenebilir ile doldurulabilir karşılaştırması ise belgeyi mi değiştirdiğin yoksa sadece mi cevapladığınla ilgilidir. Birbiriyle ilişkili ama ayrı sorulardır.",
    },
  ],
  related: [
    { label: "PDF formu nedir", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Düzenlenebilir PDF ile görüntü PDF'i farkı",
      path: "/guides/editable-pdf-vs-flat-pdf",
    },
    {
      label: "Bir PDF formu düzenlenebilir mi",
      path: "/guides/can-you-edit-a-pdf-form",
    },
    { label: "PDF Editor — düzenle ve doldur", path: "/pdf-editor" },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
