import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-client-intake-forms",
  h1: "Müşteri Kayıt Formları Nasıl Gönderilir? (Temiz ve Gizli)",
  description:
    "Yeni bir müşterinin bilgilerini tek seferde temiz şekilde al. Bir PDF kayıt formunu doldurması kolay olacak, eksiksiz dönecek ve müşterinin bilgilerini gizli tutacak şekilde gönderme yöntemi.",
  updated: "2026-06-01",
  intro: [
    "Bir kayıt formu, birçok müşterinin nasıl çalıştığınla ilk gerçek etkileşimidir, o yüzden doğru yapmaya değer. İyi yapıldığında, tek bir PDF kayıt formu başlamak için ihtiyacın olan her şeyi — iletişim bilgileri, proje detayları, tercihler — “bana ayrıca şunu da gönderebilir misin” gidiş gelişi olmadan tek seferde toplar. Kötü yapıldığında ise yarım dolu şekilde ortada dolaşır ve baştan özensiz bir izlenim bırakır.",
    "Mekanik basittir ama detaylar önemlidir: form telefonda doldurulması kolay olmalı (müşterilerin çoğu onu orada açacaktır), eksiksiz ve kullanılabilir bir biçimde geri gelmeli, ve kişisel bilgi taşıdığı için yolda rastgele bir genel siteden geçirilmemelidir.",
    "Bu kılavuz kayıt formunu hazırlamayı, müşterilerin gerçekten tamamlayabileceği şekilde göndermeyi ve cevapları temiz toplamayı anlatıyor — teorik değil, pratik versiyon.",
  ],
  steps: [
    {
      title: "Sadece ihtiyacın olanı soran bir kayıt formu oluştur",
      body: "Her ekstra alan tamamlanma oranını düşürür. Başlamak için gerçekten ihtiyaç duyduğunu sor, mantıklı şekilde grupla ve cevaplar için gerçek boşluk bırak. Her yeni müşteri için yeniden kullandığın boş bir şablon tut.",
    },
    {
      title: "Boş formu gönder, kilitlenmiş olanı değil",
      body: "Doldurulabilir PDF'i doğrudan ekle ya da müşterinin kullandığı bir sürücü üzerinden paylaş. Boşu kilitleme — bu, alanları kaldırır. Nasıl doldurup geri göndereceğine dair tek satırlık bir not ekle.",
    },
    {
      title: "Telefonda doldurmayı zahmetsiz yap",
      body: "Müşterilere bunu bir PDF uygulamasında tamamlayabileceklerini söyle — alanlara dokun ya da etkileşimsiz bir forma metin ekle — gerekirse imzala ve dışa aktar. Çoğu bunu telefonda yapacak, o yüzden bu yolu pürüzsüz tut.",
    },
    {
      title: "Kilitlenmiş bir kopya geri iste",
      body: "Bir fotoğraf yerine kaydedilmiş ya da kilitlenmiş bir PDF talep et. Kilitlenmiş formlar tutarlı okunur, temizlenemez ve doğrudan müşterinin dosyasına girer.",
    },
    {
      title: "Dosyala ve teslim alındığını doğrula",
      body: "Geri gelen formu müşteri ve tarihe göre yeniden adlandır, o müşterinin kayıtlarıyla sakla ve hızlı bir onay gönder. Zorunlu alanları boş dönen bir form olursa bir kez takip et.",
    },
  ],
  tips: [
    "Daha kısa kayıt formları tamamlanır; başta gerçekten gerekli olmayan her alanı kırp.",
    "Kayıt formları kişisel veri taşıdığı için, genel “çevrimiçi doldur” hizmetleri yerine doğrudan ekleri ya da özel bir sürücüyü tercih et.",
    "Tekrar kullanılabilir boş bir şablon, her yeni müşterinin geride kalan detay olmadan temiz, birebir aynı bir form almasını sağlar.",
    "Notunda belirli bir PDF uygulaması öner, böylece telefondaki müşteriler yazamayan bir e-posta önizlemesinde takılıp kalmasın.",
    "Bir müşterinin kayıt formunun daha sonra kolayca bulunması için tutarlı bir dosya adlandırma düzeni kullan.",
  ],
  mobileNote:
    "Müşteriler kayıt formunu telefonda PDF Editor uygulamasıyla tamamlayabilir — alanları doldurarak ya da etkileşimsiz bir forma metin ekleyerek, imzalayarak ve tamamlanmış bir kopyayı doğrudan geri göndermek üzere dışa aktararak. Cihazda çalışır, yani girdikleri kişisel bilgiler sana ulaşma yolunda hiçbir yere yüklenmez.",
  faq: [
    {
      q: "Bir müşteri kayıt formunu PDF olarak nasıl gönderirim?",
      a: "Doldurulabilir PDF'i doğrudan e-postaya ekle ya da müşterinin kullandığı bir sürücü üzerinden paylaş, boşu kilitlemeden. Bir PDF uygulamasında doldurma ve tamamlanmış bir kopya geri gönderme hakkında kısa bir not ekle.",
    },
    {
      q: "Kayıt formum neden boş ya da yarım dolu geri geliyor?",
      a: "Müşteriler onu genelde alanları görmezden gelen bir e-posta önizlemesinde açıyordur ya da form fazla şey soruyordur. Bir PDF uygulaması öner, gereksiz alanları kırp ve kilitlenmiş bir kopya geri iste.",
    },
    {
      q: "Kayıt formlarını toplarken müşteri bilgilerini nasıl gizli tutarım?",
      a: "Formu genel bir doldurma sitesi yerine doğrudan bir ek olarak ya da özel bir sürücü üzerinden gönder ve al. PDF Editor uygulaması cihazda doldurur, yani müşterinin bilgileri yüklenmez.",
    },
    {
      q: "Kayıt formları etkileşimli mi yoksa etkileşimsiz mi olmalı?",
      a: "Kurabiliyorsan etkileşimli daha düzenlidir, ama temiz bir etkileşimsiz şablon her yerde işe yarar. Alanlar açıkça etiketlenip yeterli boşluğa sahip olduğu sürece ikisi de uygundur.",
    },
    {
      q: "Geri gelen kayıt formlarını nasıl düzenli tutarım?",
      a: "Her birini müşteri ve tarihe göre yeniden adlandır, o müşterinin kayıtlarıyla sakla ve boş şablonu ayrı tut, böylece her yeni müşteri taze bir kopya alır.",
    },
  ],
  related: [
    {
      label: "Küçük işletmeler için PDF formları",
      path: "/guides/pdf-forms-for-small-business",
    },
    {
      label: "PDF ile belge toplama iş akışları",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "Bir PDF formu nasıl paylaşılır",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "PDF'ler müşterilerle nasıl paylaşılır",
      path: "/guides/how-to-share-pdfs-with-clients",
    },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
