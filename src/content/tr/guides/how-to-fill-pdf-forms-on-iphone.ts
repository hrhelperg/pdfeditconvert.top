import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-iphone",
  h1: "iPhone'da PDF Formları Nasıl Doldurulur? (Dosyalar, Markup ve Uygulamalar)",
  description:
    "iPhone'da Dosyalar ve Markup'ı ya da özel bir PDF uygulamasını kullanarak etkileşimli ve etkileşimsiz PDF formlarını doldur. iOS'e özel adımlar, paylaşım menüsü yöntemi ve Markup'ın yetersiz kaldığı noktalar.",
  updated: "2026-06-01",
  intro: [
    "iOS'in sunduğu iki yolu bildiğinde iPhone, PDF formları konusunda gerçekten iyidir. Yerleşik yol Dosyalar uygulamasını ve Markup'ı kullanır; bunlar etkileşimsiz formları doldurabilir ve gerekirse bir imza ekleyebilir. Daha yetenekli yol ise etkileşimli alanları algılayan, onlara düzgünce yazan ve temiz, tamamlanmış bir kopya dışa aktaran özel bir PDF uygulamasıdır — form birkaç satırdan uzun olur olmaz daha iyi seçenek bu olur.",
    "İnsanları takılıp bıraktıran şey iOS'e özel detaylardır: Mail'in önizlemesinden açılan bir form genelde alanlarını göstermez, paylaşım menüsü bir formu uygulamalar arasında taşımanın yoludur, ve Markup gerçek alanlar var olsa bile her şeyi etkileşimsiz bir sayfa gibi ele alır. Bu tuhaflıkları bilmek, iPhone'da form doldurmayı 30 saniyelik bir işe dönüştürür.",
    "Bu kılavuz her iki yolu da ele alıyor — Dosyalar ve Markup ile yerel yaklaşım, dürüst sınırlarıyla birlikte, ve etkileşimli formlar için PDF Editor uygulaması — böylece önündeki form için doğru olanı seçebilirsin.",
  ],
  steps: [
    {
      title: "Formu Mail'in önizlemesinden çıkar",
      body: "Bir form e-postayla geldiyse, önce Dosyalar'a kaydetmek için dokun ya da paylaşım menüsü üzerinden gerçek bir PDF uygulamasında aç. Mail'in hızlı önizlemesi form alanlarını sık sık görmezden gelir, orada yazmanın imkânsız görünmesinin nedeni budur.",
    },
    {
      title: "Etkileşimsiz formlar için Dosyalar ve Markup'ı dene",
      body: "PDF'i Dosyalar'da aç ve Markup kalemine dokun. Sayfanın herhangi bir yerine metin kutuları ve bir imza ekleyebilirsin — etkileşimsiz formlar ve hızlı doldurmalar için gayet iyi, ama Markup gerçek etkileşimli alanlara yazmaz.",
    },
    {
      title: "Etkileşimli alanlar için bir PDF uygulaması kullan",
      body: "Gerçek alanları olan formlar için dosyayı PDF Editor uygulamasında aç. Alanları algılar, böylece dokunup yazabilir, onay kutularını işaretleyebilir ve alanlar arasında düzgünce geçebilirsin.",
    },
    {
      title: "Etkileşimsiz formları metin yerleştirerek hallet",
      body: "Bir formda alan yoksa, cevapları tam olarak her satıra koymak için uygulamanın metin aracını kullan. Metnin satırın üzerinde ya da altında yüzmek yerine tam yerine oturması için iki parmakla yakınlaştır.",
    },
    {
      title: "Paylaşım menüsü üzerinden imzala ve dışa aktar",
      body: "İmza alanına imzanı ekle, sonra tamamlanmış bir kopyayı dışa aktar ve paylaşım menüsünden doğrudan gönder — Mail'e, Mesajlar'a ya da sana gönderen kişiye geri.",
    },
  ],
  tips: [
    "iPhone'da bir forma yazamıyorsan neredeyse her zaman Mail'in önizlemesindesindir — önce Dosyalar'a kaydet ya da bir PDF uygulamasında aç.",
    "Markup hızlı bir imza ya da etkileşimsiz bir form için harikadır, ama özel bir uygulamanın yaptığı gibi gerçek etkileşimli alanları doldurmaz.",
    "Etkileşimsiz bir forma metin yerleştirmeden önce yakınlaştır; başparmaklar hassas değildir, yakınlaştırılmış metin satıra tam oturur.",
    "Boş orijinali Dosyalar'da tut, böylece bir dahaki sefere eskisini düzenlemek yerine taze bir kopya doldurabilirsin.",
    "iOS, HEIC ve PDF'i iyi yönetir, ama form davranışı yine de uygulamaya göre değişir — özel bir PDF uygulaması en tutarlı olanıdır.",
  ],
  mobileNote:
    "iPhone için PDF Editor uygulaması var olan etkileşimli alanları algılar ve olmayan etkileşimsiz formlarda metin ile işaret yerleştirmene izin verir, sonra imzalayıp dışa aktarırsın — hepsi cihazda, yani formdaki kişisel bilgiler hiçbir yere yüklenmez. Mail önizlemesinin çıkmaza soktuğu durumu önleyen yol budur.",
  faq: [
    {
      q: "iPhone'umda bir PDF formuna neden yazamıyorum?",
      a: "Büyük olasılıkla onu form alanlarını görmezden gelen Mail önizlemesinde görüntülüyorsundur. Dosyayı Dosyalar'a kaydet ya da özel bir PDF uygulamasında aç, alanlar etkin hale gelir. Etkileşimsiz formlarda ise metnin üzerine yerleştirilmesi gerekir.",
    },
    {
      q: "Yerleşik Markup aracıyla bir PDF formu doldurabilir miyim?",
      a: "Evet, etkileşimsiz formlar ve hızlı doldurmalar için — Markup sayfanın herhangi bir yerine metin ve imza ekler. Ama formu etkileşimsiz bir görüntü gibi ele alır, yani gerçek etkileşimli alanlara yazmaz. Onlar için bir PDF uygulaması kullan.",
    },
    {
      q: "iPhone'da taranmış bir formu nasıl doldururum?",
      a: "Taranmış bir form etkileşimsizdir, yani Markup ya da PDF Editor uygulamasıyla sayfaya kendi metnini ve işaretlerini yerleştir, sonra dışa aktar. Yazacak alan yoktur.",
    },
    {
      q: "iPhone'da bir formu doldurmak gizli mi?",
      a: "PDF Editor uygulamasıyla form cihazda doldurulur, yani girdiğin bilgiler hiçbir yere gönderilmez. Markup da yereldir. Web tabanlı doldurma araçları dosyayı bir sunucuya yükleyebilir.",
    },
    {
      q: "Tamamlanmış formu nasıl geri gönderirim?",
      a: "Tamamlanmış bir kopya dışa aktar ve Mail, Mesajlar ya da herhangi bir uygulamayla göndermek için iOS paylaşım menüsünü kullan. Cevapların kilitlenmesini istiyorsan önce formu kilitle.",
    },
  ],
  related: [
    {
      label: "PDF formu nasıl doldurulur",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Android'de PDF formu nasıl doldurulur",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "iPhone'da PDF nasıl imzalanır",
      path: "/guides/how-to-sign-pdf-on-iphone",
    },
    {
      label: "iPhone için en iyi PDF form uygulaması",
      path: "/guides/best-pdf-form-app-for-iphone",
    },
    { label: "Mobil PDF form iş akışı", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
