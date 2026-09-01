import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-a-pdf-form",
  h1: "Bir PDF Formu Başkalarının Doldurması İçin Nasıl Paylaşılır?",
  description:
    "Doldurulması için boş bir form göndermek, bitmiş bir belge göndermekten farklıdır. Alıcıların gerçekten doldurabilmesi için bir formu paylaşma ve sonuçları toplama yöntemi.",
  updated: "2026-06-01",
  intro: [
    "Bir PDF formu paylaşmak önemsiz gibi görünür — ekle, gönder — ama insanların doldurması için boş bir formu dağıtmak ile okumaları için bir belge göndermek arasında fark vardır. Bir formu paylaştığında, alıcıların ellerindeki cihaz her ne ise onunla doldurabilmesini sağlaman gerekir, ve tamamlanmış kopyalarının gerçekten kullanabileceğin bir durumda geri gelmesini istersin.",
    "Genelde iki şey ters gider. Form, alanlarını kaybettiren ya da gizleyen bir şekilde ulaşır, yani alıcılar yazamaz. Ya da cevaplar tutarsız gelir — bazıları kilitlenmiş, bazıları etkileşimli, bazıları bir çıktının fotoğrafı olarak. Gönderim aşamasında biraz özen ikisini de önler ve cevapları toplamayı çok daha az sancılı hale getirir.",
    "Bu kılavuz boş bir formu doldurulabilir kalacak şekilde nasıl paylaşacağını, alıcılara net talimatlar nasıl vereceğini ve içerik hassassa üçüncü taraf bir yükleme hizmetinden geçirmeden tamamlanmış kopyaları geri gelirken nasıl ele alacağını anlatıyor.",
  ],
  steps: [
    {
      title: "Göndermeden önce boş formun doldurulabilir olduğunu doğrula",
      body: "Formunu aç ve kendin kontrol et. Etkileşimliyse alanların etkin olduğundan emin ol; etkileşimsizse cevaplar için net bir alan olduğundan emin ol. Boş bir formu kilitleme — bu, alıcıların ihtiyaç duyduğu alanları kaldırır.",
    },
    {
      title: "Bir dönüştürücü bağlantısı değil, dosyayı gönder",
      body: "PDF'i doğrudan e-postaya ya da mesaja ekle, ya da alıcının zaten kullandığı bir sürücü üzerinden paylaş. Sade bir ek yeterliyken hassas bir formu genel yükleme araçlarından geçirmekten kaçın.",
    },
    {
      title: "Alıcılara nasıl dolduracaklarını söyle",
      body: "Tek satırlık bir not işe yarar: “Yazmak için alanlara dokun, görüntüleyicin alanları göstermiyorsa üzerine metin ekle, sonra tamamlanmış bir kopya dışa aktar.” Telefon kullanıcılarını e-posta önizlemesi yerine düzgün bir PDF uygulamasına yönlendir.",
    },
    {
      title: "Tamamlanmış kopyaları kullanılabilir bir biçimde iste",
      body: "İnsanlardan bir çıktının fotoğrafını değil, kaydedilmiş ya da kilitlenmiş bir PDF geri göndermelerini iste. Kilitlenmiş kopyalar tutarlı görünür, dosyalaması ve okuması daha kolaydır.",
    },
    {
      title: "Cevapları topla ve düzenle",
      body: "Kopyalar geri döndükçe, karışmamaları için yanıtlayan kişi ve tarihe göre yeniden adlandır. Boş şablonu ayrı tut ki her zaman yeniden gönderilecek temiz bir kopyan olsun.",
    },
  ],
  tips: [
    "Dağıttığın boş formu asla kilitleme — kilitleme alanları kaldırır ve alıcılara doldurabilecekleri hiçbir şey bırakmaz.",
    "Alıcılar sürekli çıktı fotoğrafı gönderiyorsa, ekranda doldurma ve dışa aktarma konusundaki talimatların daha net olması gerekiyordur.",
    "Hassas formlar için genel “çevrimiçi doldur” sitelerine göre doğrudan ekleri ya da özel bir sürücüyü tercih et.",
    "Dosyaya “kayit-formu-bos.pdf” gibi açık bir ad ver, böylece alıcılar orijinali kendi tamamlanmış kopyalarından ayırt edebilir.",
    "Form davranışı görüntüleyiciler arasında değişebilir, yani mesajında belirli, güvenilir bir uygulama önermek “yazamıyorum” cevaplarının çoğunu baştan engeller.",
  ],
  mobileNote:
    "Telefondaki alıcılar formunu PDF Editor uygulamasında doldurabilir — etkileşimli alanları etkinleştirir ve etkileşimsiz formlara metin eklemelerine izin verir — sonra tamamlanmış bir kopyayı dışa aktarıp doğrudan sana geri gönderebilirler. Mesajında bunu önermek, aksi halde alanları görmezden gelen bir e-posta önizlemesinde takılıp kalacak kişileri kurtarır.",
  faq: [
    {
      q: "Bir PDF formunu insanların doldurması için nasıl paylaşırım?",
      a: "Doldurulabilir PDF'i doğrudan bir ek olarak gönder ya da alıcının kullandığı bir sürücü üzerinden paylaş, boş formu önce kilitlemeden. Alıcılara gerçek bir PDF uygulamasında açmalarını, alanları doldurmalarını ya da metin eklemelerini, sonra tamamlanmış bir kopya dışa aktarmalarını söyle.",
    },
    {
      q: "Alıcılarım gönderdiğim forma neden yazamıyor?",
      a: "Genelde bunu alanları görmezden gelen bir e-posta önizlemesinde ya da görüntüleyicide açıyorlardır, ya da form etkileşimsizdir. Özel bir PDF uygulaması öner, hiç alan görünmüyorsa üzerine metin ekleyebileceklerini belirt.",
    },
    {
      q: "Bir formu çevrimiçi bir doldurma hizmeti üzerinden mi paylaşmalıyım?",
      a: "Sıradan formlar için pratik olabilir, ama hassas herhangi bir şey için doğrudan bir ek ya da özel bir sürücü, içeriği üçüncü taraf sunuculardan uzak tutar. Kanalı hassasiyete göre seç.",
    },
    {
      q: "Tamamlanmış formlar bana nasıl geri gelmeli?",
      a: "Bir çıktının fotoğrafı yerine kaydedilmiş ya da kilitlenmiş bir PDF iste. Kilitlenmiş kopyalar her yerde aynı görünür ve dosyalaması ile işlemesi çok daha kolaydır.",
    },
    {
      q: "Cevapları nasıl düzenli tutarım?",
      a: "Geri gelen her dosyayı yanıtlayan kişi ve tarihe göre yeniden adlandır, hepsini tek bir klasörde tut, ve boş şablonu ayrı sakla ki her yeni kişi temiz bir kopya alsın.",
    },
  ],
  related: [
    {
      label: "Tamamlanmış bir PDF formu nasıl gönderilir",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "Müşteri kayıt formları nasıl gönderilir",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "PDF ile belge toplama iş akışları",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "PDF'ler müşterilerle nasıl paylaşılır",
      path: "/guides/how-to-share-pdfs-with-clients",
    },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
