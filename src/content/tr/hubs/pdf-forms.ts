import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-forms",
  hero: {
    eyebrow: "PDF Formları",
    h1: "PDF formlarını her yerde doldur, imzala ve yönet.",
    highlight: "PDF formlarını",
    lead: "Vergi formları, başvurular, kabul formları, onay formları — çoğu PDF olarak gelir. PDF formlarının gerçekte nasıl çalıştığını, etkileşimli ve etkileşimsiz olanları nasıl dolduracağını ve yaygın sorunları nasıl çözeceğini öğren — tek bir sayfa bile yazdırmadan.",
    primaryCta: { label: "Uygulamayı aç", href: SITE.app.appStore },
  },
  problem: {
    heading: "PDF formları insanları neden zorluyor",
    paragraphs: [
      "Bir PDF formu tek bir şey gibi görünür ama çoğu zaman aslında ikidir. Bazıları etkileşimlidir — tasarımcı dokunup yazabileceğin gerçek alanlar eklemiştir. Bazıları etkileşimsizdir: hiç alanı olmayan, taranmış ya da yazdırılıp kaydedilmiş bir form; burada kendi metnini üstüne koyman gerekir. İkisi tamamen farklı davranır ve formlar konusundaki hayal kırıklığının çoğu, elindekinin hangi tür olduğunu bilmemekten kaynaklanır.",
      "Bunun üstüne, formlar sıradan PDF'lerin yapmadığı şekillerde ters gider. Alanlar yanlış görüntüleyicide kaybolur, yazılan yanıtlar kaydedilmeyi reddeder, bir form salt okunur açılır ya da doldurduğun değerler yazdırdığında görünmez. Bunların hiçbiri formun bozuk olduğu anlamına gelmez — altta ne olduğunu bildiğinde öngörülebilir çözümleri olan öngörülebilir sorunlardır.",
      "Bu merkez sayfa her şeyi tek bir yerde toplar: formların nasıl çalıştığının temelleri, bunları bilgisayarda ya da telefonda doldurmanın adım adımı, müşterilerden bilgi toplamak için iş süreçleri ve bir form işbirliği yapmadığında sorun giderme seti. Form görünümü ve davranışı PDF görüntüleyicileri arasında değişebilir, bu yüzden kılavuzlar her yerde neyin çalıştığı ve neyin dosyayı açtığın araca bağlı olduğu konusunda dürüst kalır.",
    ],
  },
  features: {
    heading: "PDF formlarıyla yapabileceklerin",
    items: [
      {
        icon: "FileText",
        title: "Etkileşimli alanları doldur",
        body: "Gerçek bir form alanına dokun ve yaz. Alanlar arasında geç, onay kutularını işaretle ve tasarımcının eklediği yerlerde açılır menülerden seç.",
      },
      {
        icon: "TextCursorInput",
        title: "Etkileşimsiz formları tamamla",
        body: "Alan yok mu? Kendi metnini ve onay işaretlerini sayfanın herhangi bir yerine, taranmış ya da yazdırılmış bir formda her yanıtın ait olduğu tam yere yerleştir.",
      },
      {
        icon: "PenLine",
        title: "Gerektiği yerde imzala",
        body: "Alan etkileşimli olsun ya da etkileşimsiz bir formda sadece bir çizgi olsun, imza alanına yazılı ya da el yazısı bir imza ekle.",
      },
      {
        icon: "Save",
        title: "Tamamlanan bir kopya kaydet",
        body: "Doğrudan geri gönderebileceğin bitmiş bir sürüm dışa aktar ve bir dahaki sefere ihtiyacın olursa diye boş orijinali sakla.",
      },
      {
        icon: "Lock",
        title: "Göndermeden önce kilitle",
        body: "Yanıtlarını sayfaya kilitle, böylece alıcının görüntüleyicisi tarafından değiştirilemez ya da yanlışlıkla temizlenemezler.",
      },
      {
        icon: "Smartphone",
        title: "Hepsini telefonda yap",
        body: "Formlar e-postayla gelir ve aynı şekilde geri gider — telefonda doldurmak ve imzalamak, gerçekten mobil olan en samimi PDF işlerinden biridir.",
      },
    ],
  },
  steps: {
    heading: "Bir PDF formu baştan sona doldurmak",
    items: [
      {
        title: "Formu aç ve türünü kontrol et",
        body: "PDF'i aç ve bir yanıtın gitmesi gereken yere dokun. Bir imleç belirirse, etkileşimli alanları vardır. Hiçbir şey olmuyorsa, etkileşimsiz bir formdur ve üstüne metin ekleyeceksin.",
      },
      {
        title: "Alanları doldur",
        body: "Etkileşimli formlarda dokunup yaz, alanlar arasında geç. Etkileşimsiz formlarda, yanıtları her satıra tam olarak yerleştirmek için metin aracını kullan.",
      },
      {
        title: "Onay kutularını, tarihleri ve imzaları hallet",
        body: "Kutuları işaretle ya da bir onay işareti yerleştir, gerekli yere tarihi ekle ve herhangi bir imza alanı için imza aracını kullan.",
      },
      {
        title: "Her zorunlu alanı gözden geçir",
        body: "Boşluklar için formu tekrar tara. Eksik bir tarih yüzünden geri çevrilen bir form, kontrolün alacağı zamandan daha fazlasına mal olur.",
      },
      {
        title: "Kaydet, kilitle ve gönder",
        body: "Tamamlanmış bir kopya dışa aktar, yanıtların kilitli kalması için kilitle ve e-posta ya da yükleme yoluyla geri gönder. Boş orijinali sakla.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Telefonda formlar",
    body: "Masandan uzaktayken gelen kutusuna bir form düşer. Telefonla onu açabilir, alanları doldurabilir ya da etkileşimsiz bir taramaya metin ekleyebilir, imzalayabilir ve oturacak bir sandalye bulmadan geri gönderebilirsin — yazıcı yok, tarayıcı yok, eve varana kadar beklemek yok. PDF Editor uygulaması, var olduğunda etkileşimli alanları algılar, olmadığında metin ve onay işaretlerini her yere yerleştirmeni sağlar ve formdaki kişisel bilgileri cihazında tutar.",
  },
  faq: [
    {
      q: "Etkileşimli ve etkileşimsiz bir PDF formu arasındaki fark nedir?",
      a: "Etkileşimli bir formun tasarımcının eklediği alanları vardır — birine dokunursun ve bir imleç belirir, böylece yazabilirsin. Etkileşimsiz bir form aslında alanı olmayan bir formun görüntüsüdür, bu yüzden kendi metnini üstüne eklersin. İkisini de doldurabilirsin; sadece biraz farklı bir işlem gerektirirler.",
    },
    {
      q: "Bir PDF formunu doldurmak için yazdırmam gerekir mi?",
      a: "Neredeyse hiç. Hem etkileşimli hem etkileşimsiz formlar dijital olarak tamamlanabilir — alanlara yaz ya da sayfaya metin yerleştir, sonra imzala ve dışa aktar. Yazdırmak yalnızca alıcı özellikle kağıt üzerinde ıslak imza istediğinde değerlidir.",
    },
    {
      q: "Bazı PDF formlarında neden yazamıyorum?",
      a: "Genellikle üç şeyden biri: form etkileşimsizdir (yazacak alan yok), görüntüleyicin form alanlarını desteklemiyor ya da form salt okunur ya da korumalı. Bu merkez sayfadaki sorun giderme kılavuzları her nedeni tek tek ele alır.",
    },
    {
      q: "Doldurduğum bir form, alan kişiye aynı mı görünür?",
      a: "Çoğunlukla evet, ama her zaman değil — form görünümü PDF görüntüleyicileri arasında değişebilir. Tamamlanan formunu göndermeden önce kilitlemek, yanıtları sayfaya sabitler, böylece nerede açılırsa açılsın tutarlı görünürler.",
    },
    {
      q: "Çevrimiçi bir form doldurmak gizli mi?",
      a: "Araca bağlı. PDF Editor uygulaması formları cihazında doldurur, bu yüzden girdiğin kişisel bilgiler hiçbir yere yüklenmez. Yerel çalışan tarayıcı tabanlı araçlar da dosyayı cihazında tutar.",
    },
  ],
  related: [
    { label: "PDF formu nedir?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Bir PDF formu nasıl doldurulur",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Doldurulabilir bir PDF nasıl oluşturulur",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "PDF formu çalışmıyor mu? Buradan başla",
      path: "/guides/pdf-form-not-working",
    },
    { label: "PDF Editor — mobilde doldur ve imzala", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "PDF formlarını telefonunda doldur ve imzala.",
    sub: "iOS ve Android'de ücretsiz. Yüklenecek bir şey yok.",
  },
};

export default content;
