import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-out-a-pdf-form",
  h1: "PDF Formu Nasıl Doldurulur? (Etkileşimli ya da Etkileşimsiz)",
  description:
    "Gerçek alanları olsun ya da üzerine yazı yazdığın etkileşimsiz bir tarama olsun, herhangi bir PDF formunu doldur. Bilgisayar ve telefon için eksiksiz anlatım, artı imzalama ve kaydetme.",
  updated: "2026-06-01",
  intro: [
    "Elinde hangi iki türden hangisinin olduğunu bildiğin anda bir PDF formunu doldurmak basittir. Etkileşimli bir formda dokunup yazabileceğin alanlar vardır; etkileşimsiz bir form ise kendi metnini yerleştirdiğin bir sayfa görüntüsüdür. Formların çoğu bunlardan biridir, bazen ikisinin karışımıdır, ve hiçbirinde yazıcıya dokunmadan dijital olarak tamamlanabilir.",
    "Bu, konunun tam anlatımıdır — hem bilgisayarda hem telefonda hem etkileşimli hem etkileşimsiz durumu kapsar. Mekanik her seferinde aynı fikirdir: cevaplarını sayfaya geçir, onay kutularını ve tarihleri hallet, istenirse imzala, sonra temiz bir kopya kaydet ve boş orijinali sakla.",
    "Özellikle telefon adımlarını istiyorsan, mobil kılavuzlar iPhone ve Android'e daha derinlemesine iniyor. Burada amaç, cihazdan bağımsız evrensel yöntem — formların nerede zorlanabileceğine dair dürüst notlarla.",
  ],
  steps: [
    {
      title: "Formu aç ve dokunma testini uygula",
      body: "PDF'i aç ve ilk cevabın gireceği yere tıkla ya da dokun. İmleç ya da vurgulanan bir kutu etkileşimli alanlar demektir; hiçbir şey olmuyorsa form etkileşimsizdir ve metni kendin ekleyeceksin.",
    },
    {
      title: "Etkileşimli alanları yazarak doldur",
      body: "Bir alana dokun ve yaz. Alanlar arasında geçmek için Tab tuşunu ya da kaydırmayı kullan, işaretlemek için onay kutularına tıkla, belirlenmiş seçenekleri görmek için açılır menüleri aç. Hiçbirini kaçırmamak için yukarıdan aşağıya çalış.",
    },
    {
      title: "Etkileşimsiz formları metin kutularıyla doldur",
      body: "Alanı olmayan bir form için, cevabını her satıra bırakmak üzere metin aracını kullan. Metnin satırın üzerinde ya da altında değil tam üzerinde durması için önce yakınlaştır.",
    },
    {
      title: "Onay kutularını, tarihleri ve seçimleri hallet",
      body: "Etkileşimli onay kutularını doğrudan işaretle; etkileşimsiz formlarda bir onay işareti ya da X koy. Gerekli yerlere tarih ekle ve formun gösterdiği biçime uy (gün-ay-yıl ya da ay-gün-yıl).",
    },
    {
      title: "Form gerektiriyorsa imzala",
      body: "İmza aracını kullanarak imza alanına yazılı ya da el yazısı bir imza ekle. İmza alanı etkileşimli olsun ya da sadece basılı bir çizgi olsun, aynı adım işe yarar.",
    },
    {
      title: "Tamamlanmış bir kopya kaydet, orijinali sakla",
      body: "Bitmiş sürümü yeni bir dosya olarak dışa aktar, istersen cevapların kilitlenmesi için kilitle. Boş orijinali sakla ki bir dahaki sefere temiz bir kopyayı doldurabilesin.",
    },
  ],
  tips: [
    "Boş orijinali her zaman dokunmadan sakla — temiz bir kopyayı yeniden doldurmak, geçen seferki cevapları düzenlemekten daha düzenlidir.",
    "Etkileşimsiz formlarda her cevabın karışık yazı tipleri yerine tek tip görünmesi için sabit bir metin boyutu belirle.",
    "Göndermeden önce zorunlu alanları kontrol et; bir eksik kutu yüzünden geri dönen bir form son kontrolden çok daha fazla zaman kaybettirir.",
    "Bir alan yazmayı kabul etmiyorsa, form etkileşimsiz ya da kilitli olabilir — üzerine metin yerleştirmeye geç ya da sorun giderme kılavuzlarına bak.",
    "Cevapların her alıcıda aynı görünmesini istiyorsan göndermeden önce formu kilitle.",
  ],
  mobileNote:
    "PDF Editor uygulaması hem etkileşimli hem etkileşimsiz formları iPhone ve Android'de doldurur: gerçek alanlar varsa algılar, yoksa sana istediğin yere metin ve işaret koyma imkânı verir. Aynı oturumda imzala ve tamamlanmış bir kopyayı dışa aktar — hepsi cihazda, hiçbir şey yüklenmeden.",
  faq: [
    {
      q: "Alanı olmayan bir PDF formunu nasıl doldururum?",
      a: "Cevaplarını doğrudan sayfaya yerleştirmek için bir PDF düzenleyicinin metin aracını kullan, gerekirse onay işaretleri ekle, sonra dışa aktar. Form etkileşimsizdir, yani alanlara yazmak yerine üzerine metin seriyorsun.",
    },
    {
      q: "Bir PDF formunu ücretsiz doldurabilir miyim?",
      a: "Evet. Ücretsiz tarayıcı tabanlı ve mobil araçlar hem etkileşimli hem etkileşimsiz formları doldurur. PDF Editor uygulaması hesap gerektirmeden doldurmayı ve imzalamayı halleder.",
    },
    {
      q: "Formu doldurmak için yazdırmam gerekir mi?",
      a: "Neredeyse hiç. Her iki form türü de ekranda tamamlanıp dijital olarak geri gönderilebilir. Sadece bir alıcı özellikle el yazısıyla imzalanmış bir kağıt kopya istiyorsa yazdır.",
    },
    {
      q: "Form neden yazmama izin vermiyor?",
      a: "Genelde etkileşimsiz (alansız) olduğu içindir, alanları desteklemeyen bir görüntüleyicide açıldığı içindir ya da kilitli olduğu içindir. Üzerine metin yerleştirmeyi dene, form destekli bir araca geç ya da sorun giderme kılavuzlarına bak.",
    },
    {
      q: "Cevaplarımın temizlenmediğinden nasıl emin olurum?",
      a: "Alan değerlerini dosyaya yazan bir araçla kaydet, sonra göndermeden önce cevapların sayfaya kalıcı olarak işlenmesi için formu kilitle.",
    },
  ],
  related: [
    { label: "PDF formu nedir", path: "/guides/what-is-a-pdf-form" },
    {
      label: "iPhone'da PDF formu nasıl doldurulur",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Android'de PDF formu nasıl doldurulur",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "Doldurulmuş bir PDF formu nasıl kaydedilir",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    { label: "PDF form en iyi uygulamaları", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
