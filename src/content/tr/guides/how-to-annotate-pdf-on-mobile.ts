import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-annotate-pdf-on-mobile",
  h1: "Mobilde PDF Nasıl Not Alınıp İşaretlenir?",
  description:
    "Telefon ya da tabletinden PDF'leri vurgula, yorum ekle ve üzerine çiz. Gerçekten işe yarayan not alma araçları ve işaretlemeleri okunur tutma yöntemi.",
  updated: "2026-05-23",
  intro: [
    "Bir PDF'i işaretlemek, onu sadece okuduğun bir belgeden yanıt verdiğin bir belgeye dönüştürmenin yoludur — önemli maddeyi vurgulamak, bir meslektaşına yorum bırakmak, yanlış olan rakamı daire içine almak. Telefon ya da tablette, parmağınla ya da bir kalemle, bu genelde masa başındakinden daha doğal hisseder çünkü sayfayı kağıt üzerinde işaretler gibi işaretlersin.",
    "Bu rehber, PDF Editor uygulamasıyla mobilde bilinmeye değer işaretleme araçlarını kapsıyor: vurgulamalar, yorumlar, serbest çizim ve şekiller. iPhone ve Android'de çalışır, çevrimdışı işler ve belgeyi cihazında tutar.",
    "Amaç sayfayı mürekkebe boğmak değil — bir sonraki kişinin (çoğu zaman gelecekteki senin) gerçekten okuyup üzerine hareket edebileceği işaretler bırakmaktır.",
  ],
  steps: [
    {
      title: "PDF'i PDF Editor uygulamasında aç",
      body: "Belgeyi Dosyalar, Mail, Drive ya da herhangi bir paylaşım menüsünden ekle. İşaretleme araçları düzenleme araç çubuğunda yer alır.",
    },
    {
      title: "Önemli bölümleri vurgula",
      body: "Vurgulayıcıyı seç, bir renk belirle ve işaretlemek istediğin metnin üzerinden sürükle. Rengi bilinçli kullan — not türü başına bir renk, bir gökkuşağından çok daha okunaklı olur.",
    },
    {
      title: "Bağlam için yorum ekle",
      body: "Bir vurgunun açıklamaya ihtiyacı olduğu yere bir yapışkan yorum bırak. Yorumlar, sayfanın kendisini kalabalıklaştırmadan gerekçeni o noktaya bağlı tutar.",
    },
    {
      title: "Serbest elle çiz ve daire içine al",
      body: "Bir rakamı daire içine almak, bir satırın altını çizmek ya da bir düzeltme taslağı çizmek için kalem aracını kullan. Varsa bir stylus, parmak ucundan daha temiz çizgiler verir.",
    },
    {
      title: "Yardımcı olacaksa şekil ya da ok ekle",
      body: "Soruna işaret eden bir ok ya da bir bölümün etrafına çizilen kutu, kelimelerden daha hızlı iletişim kurar. Öne çıksınlar diye ölçülü kullan.",
    },
    {
      title: "İşaretlenmiş kopyayı kaydet ve paylaş",
      body: "İşaretlerinle birlikte bir kopya dışa aktar ve geri paylaş. İleride işaretsiz bir sürüme ihtiyacın olacaksa temiz orijinali sakla.",
    },
  ],
  tips: [
    "Renklere anlam yükle — mesela sorular için sarı, onaylar için yeşil — böylece işaretlerin süsten çok taranabilir hale gelir.",
    "Bir stylus (Apple Pencil ya da S Pen) serbest elle işaretlemeyi değiştirir. Varsa avuç içi reddi ve basınç duyarlılığı, kağıt üzerinde işaretleme hissi verir.",
    "Yorumlar, notları kenar boşluğuna sıkıştırmaktan daha iyidir. Dokunulduğunda genişler ve sayfayı okunaklı tutar.",
    "Aşırı işaretleme yapma. Mürekkebe gömülmüş bir sayfa, hiç işareti olmayan bir sayfa kadar işe yaramaz — her şeyi değil, önemli olanı vurgula.",
    "İşaretsiz bir orijinal sakla. İşaretlemeler inceleme için harikadır, ama bir sonraki inceleyen kişi kendi işaretleyeceği temiz bir kopya isteyebilir.",
  ],
  mobileNote:
    "İşaretleme, bir telefon ya da tabletin masa başını gerçekten geride bıraktığı iştir: sayfayı doğrudan, kağıt üzerindeymiş gibi işaretlersin. PDF Editor uygulaması vurgulamaları, yorumları, çizimi ve şekilleri stylus desteğiyle sunar, hepsi çevrimdışı ve cihazda — işaretlerin ellerinden hiç çıkmaz.",
  faq: [
    {
      q: "Mobilde bir PDF'i neyle işaretleyebilirim?",
      a: "Vurgulamalar, yapışkan yorumlar, serbest elle kalem izleri ve ok, kutu gibi şekiller. PDF Editor uygulaması bunların hepsini iPhone ve Android'de sunar.",
    },
    {
      q: "Bir stylusa ihtiyacım var mı?",
      a: "Hayır, vurgulama ve temel işaretler için parmak yeterlidir. Ama bir stylus, desteklenen tabletlerde avuç içi reddi ve basınç duyarlılığıyla serbest çizimi çok daha temiz yapar.",
    },
    {
      q: "Dosyayı gönderirsem işaretlerim kalır mı?",
      a: "Evet. Dışa aktarılan işaretler PDF'in bir parçasıdır ve açan herkes için görünür. İşaretsiz bir kopyaya ihtiyacın olacaksa temiz orijinali ayrı sakla.",
    },
    {
      q: "İşaretlerim herhangi bir yere yükleniyor mu?",
      a: "Hayır. PDF Editor uygulaması işaretlemeyi cihazında yapar, yani notların ve belge gizli kalır.",
    },
    {
      q: "İşaretleri sonradan kaldırabilir miyim?",
      a: "Evet, uygulama içinde dışa aktarmadan önce kendi işaretlerini düzenleyebilir ya da silebilirsin. Orijinali saklamak da baştan başlamanı sağlar.",
    },
  ],
  related: [
    { label: "PDF Düzenleyici — mobilde işaretle", path: "/pdf-editor" },
    { label: "Telefonda PDF Formları Nasıl Doldurulur?", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "iPhone'da PDF Nasıl Düzenlenir? (2026 Rehberi)", path: "/guides/how-to-edit-pdf-on-iphone" },
    { label: "Öğrenciler İçin En İyi Ücretsiz PDF Araçları (2026)", path: "/guides/best-pdf-tools-for-students" },
  ],
  parentHub: { label: "PDF Düzenleyici", path: "/pdf-editor" },
};

export default content;
