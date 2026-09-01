import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-android",
  h1: "Android'de PDF Formları Nasıl Doldurulur? (Her Telefonda)",
  description:
    "Android'de etkileşimli ve etkileşimsiz PDF formlarını doldur. Yerleşik görüntüleyicinin neden çoğu zaman yazamadığı, güvenilir uygulama yöntemi ve markalar arası cihaz farklarının formları nasıl etkilediği.",
  updated: "2026-06-01",
  intro: [
    "Android'in tek bir yerleşik PDF form doldurucusu yoktur, ve çoğu karışıklığın kökü budur. Birçok telefonda varsayılan PDF görüntüleyici — genelde Google Drive ya da Dosyalar'ın içinde — bir formu düzgün gösterir ama her zaman alanlarına yazmana izin vermez. Böylece insanlar formun bozuk olduğunu düşünür, oysa gerçekte sadece form alanlarını düzgün işleyen bir uygulamaya ihtiyaçları vardır.",
    "Herhangi bir Android telefonda güvenilir yol, etkileşimli alanları algılayan ve etkileşimsiz formlarda metin yerleştirmene izin veren özel bir PDF uygulamasıdır. Android donanımı ve yazılımı markalar arasında bu kadar değiştiği için, tam olarak hangi yerleşik seçeneklerin bulunduğu telefondan telefona farklıdır — ama düzgün bir PDF uygulaması her yerde aynı davranır, formlar için tam olarak istediğin şey budur.",
    "Bu kılavuz varsayılan görüntüleyicinin neden yetersiz kaldığını, güvenilir uygulama iş akışını ve form doldurmayı hızlandıran Android'e özel detayları — sistem paylaşım menüsü üzerinden paylaşma, formları Gmail ve Drive'dan çıkarma — anlatıyor.",
  ],
  steps: [
    {
      title: "Formu temel görüntüleyiciden çıkar",
      body: "Gmail ya da Drive'dan açılan bir form yazmana izin vermiyorsa, o görüntüleyici alanlarını görmezden geliyordur. Dosyayı indir ve bunun yerine özel bir PDF uygulamasında aç — alanların canlandığı yer burasıdır.",
    },
    {
      title: "PDF Editor uygulamasında aç",
      body: "PDF'i Dosyalar'dan, Drive'dan ya da paylaşım menüsünden içe aktar. Uygulama etkileşimli alanları kontrol eder ve onları dokunulabilir hale getirir, böylece yazabilir, onay kutularını işaretleyebilir ve açılır menüleri kullanabilirsin.",
    },
    {
      title: "Etkileşimsiz formları metin ekleyerek doldur",
      body: "Formda alan yoksa, cevapları doğrudan her satıra yerleştirmek için metin aracını kullan. Metnin tam yerine oturması için önce yakınlaştır — Android klavyeleri ile küçük alanlar biraz özen ister.",
    },
    {
      title: "İşaret, tarih ve imza ekle",
      body: "Etkileşimli kutuları işaretle ya da etkileşimsiz olanlara bir işaret koy, gösterilen biçimde tarihleri gir ve imza aracıyla imza alanına imzanı ekle.",
    },
    {
      title: "Dışa aktar ve geri paylaş",
      body: "Tamamlanmış bir kopya kaydet ve Android paylaşım menüsü üzerinden gönder — Gmail, Drive, WhatsApp, ne olursa olsun. Cevapların temizlenememesi için önce kilitle.",
    },
  ],
  tips: [
    "Android'de bir forma yazamıyorsan sorumlu genelde temel görüntüleyicidir — dosyayı gerçek bir PDF uygulamasında aç.",
    "Android markaları farklı yazılım gönderdiği için, yerleşik bir doldurucunun var olacağına güvenme; özel bir uygulama tutarlı seçimdir.",
    "Metin yerleştirmeden önce etkileşimsiz formlarda yakınlaştır, böylece küçük alanlar doğru boyutlu cevap alır.",
    "Boş formu bilinen bir klasörde tut, böylece eskisini düzenlemek yerine temiz bir kopyayı yeniden doldurabilirsin.",
    "Form davranışı uygulamaya ve cihaza göre değişir, bu yüzden kilitlenmiş bir dışa aktarma, cevapların alıcı için görünmesini garantilemenin en güvenli yoludur.",
  ],
  mobileNote:
    "Android için PDF Editor uygulaması etkileşimli alanları algılar ve etkileşimsiz formlarda metin yerleştirmene izin verir, sonra imzalayıp dışa aktarırsın — telefon markasından bağımsız olarak aynı şekilde çalışır. Hepsi cihazda gerçekleşir, yani forma girdiğin bilgiler yüklenmez.",
  faq: [
    {
      q: "Android'de bir PDF formuna neden yazamıyorum?",
      a: "Varsayılan görüntüleyici — genelde Google Drive'ınki ya da telefonunun Dosyalar önizlemesi — form alanlarını sık sık görmezden gelir. Formu indir ve özel bir PDF uygulamasında aç, alanlar yazılabilir hale gelir. Etkileşimsiz formlarda metin üzerine yerleştirilmelidir.",
    },
    {
      q: "Android'in yerleşik bir PDF form doldurucusu var mı?",
      a: "Evrensel bir tanesi yok. Bulunanlar telefonunun markasına ve yazılımına bağlıdır. Herhangi bir Android cihazda tutarlı sonuçlar için özel bir PDF uygulaması kullan.",
    },
    {
      q: "Android'de taranmış bir formu nasıl doldururum?",
      a: "Taranmış bir form etkileşimsizdir, yani bir PDF düzenleyiciyle sayfaya kendi metnini ve işaretlerini ekle, sonra dışa aktar. Dokunacak alan yoktur.",
    },
    {
      q: "Android'de bir PDF formunu doldurmak gizli mi?",
      a: "PDF Editor uygulamasıyla doldurma cihazda gerçekleşir, yani bilgilerin hiçbir yere gönderilmez. Dosyanı yükleyen tarayıcı araçları ise onu bir sunucuda işler.",
    },
    {
      q: "Doldurulan formu nasıl geri gönderirim?",
      a: "Tamamlanmış bir kopya dışa aktar ve e-posta, Drive ya da bir mesajlaşma uygulamasıyla göndermek için Android paylaşım menüsünü kullan. Cevapları kilitlemek için önce formu kilitle.",
    },
  ],
  related: [
    {
      label: "PDF formu nasıl doldurulur",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "iPhone'da PDF formu nasıl doldurulur",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Android'de PDF nasıl imzalanır",
      path: "/guides/how-to-sign-pdf-on-android",
    },
    {
      label: "Android için en iyi PDF form uygulaması",
      path: "/guides/best-pdf-form-app-for-android",
    },
    { label: "Mobil PDF form iş akışı", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
