import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-iphone",
  h1: "iPhone'da PDF Nasıl Düzenlenir? (2026 Rehberi)",
  description:
    "iPhone'da PDF'teki metni düzelt, görsel ekle ve sayfaları yeniden sırala. PDF Editor uygulamasıyla adım adım anlatım.",
  updated: "2026-05-11",
  intro: [
    "iPhone'da PDF düzenlemek eskiden dosyayı pek güvenmediğin bir siteye yüklemek, bir Mac'e giriş yapmak ya da ihtiyacın olan kısmın ekran görüntüsünü alıp görsel olarak yeniden yapıştırmak anlamına gelirdi. 2026'da bunların hiçbirine gerek yok. Doğru yerel uygulamayla metni düzenleyebilir, görselleri değiştirebilir, sayfaları yeniden sıralayabilir, formları doldurabilir ve belgeleri imzalayabilirsin — hepsi telefonunda, bir dakikadan kısa sürede.",
    "Bu rehber, PDF Editor uygulamasıyla atman gereken adımları tek tek gösteriyor. Aynı mantık iPad'de ve çoğu modern PDF düzenleyicide de işliyor, yani ileride başka bir araca geçersen bu adımlar yine işine yarar. iOS 16 veya üzeri bir sürüm ve App Store'dan indirilmiş PDF Editor uygulaması gerekiyor.",
    "PDF'i herhangi bir kaynaktan açmayı (Dosyalar, Mail, iCloud Drive, Google Drive), içeriği düzenlemeyi ve sonucu dışa aktarmayı ele alacağız. Her adım ne yapacağını anlatır, nedenini değil — ama bir adım ekranda kafa karıştırıcı görünürse, sonundaki ipuçları bölümünde hızlı çözümler var.",
  ],
  steps: [
    {
      title: "PDF Editor'ı yükle ve aç",
      body: "App Store'dan indir, sonra uygulamayı aç. Düzenlemeye başlamak için hesap gerekmiyor.",
    },
    {
      title: "PDF'i ekle",
      body: "Ana ekrandaki + düğmesine dokun. Kaynağı seç — Dosyalar, iCloud Drive, fotoğraf kitaplığın ya da Google Drive / OneDrive klasörlerini bulmak için \"Gözat\". Mail veya Safari'den herhangi bir PDF'i açıp paylaşım menüsünden \"PDF Editor'da Aç\"ı da seçebilirsin.",
    },
    {
      title: "Metni yerinde düzenle",
      body: "Bir paragrafa veya kelimeye dokun. Mavi bir seçim belirir. Açılan metin kutusunda doğrudan düzenleme yap. Uygulama orijinal yazı tipini, boyutu ve rengi koruduğu için yerleşim bozulmaz.",
    },
    {
      title: "Görseli değiştir veya ekle",
      body: "Mevcut bir görsele dokunarak fotoğraf kitaplığından değiştir. Ya da görsel aracına dokunup sayfanın herhangi bir yerine yeni bir görsel yerleştir. Boyutlandırmak için köşelerden sürükle.",
    },
    {
      title: "Sayfaları yeniden sırala, sil veya çoğalt",
      body: "Küçük resim ızgarasını açmak için sayfalar simgesine dokun. Bir sayfayı taşımak için üzerine uzun bas. Çoğaltmak veya silmek için küçük resme dokun.",
    },
    {
      title: "Belgeyi imzala",
      body: "İmzala aracına dokun, imzanı çiz (ya da kayıtlı bir imza kullan), sonra doğru yere yerleştir. İmza sıradan bir PDF nesnesidir, yani yerleştirdikten sonra da taşıyabilir veya boyutlandırabilirsin.",
    },
    {
      title: "Form alanlarını doldur",
      body: "PDF'te form alanları varsa her birine dokunup doldur. Uygulama alan türünü — metin, onay kutusu, açılır liste — otomatik algılar ve sana doğru klavyeyi sunar.",
    },
    {
      title: "Kaydet ve paylaş",
      body: "Bitti'ye dokun. Orijinalin üzerine yazmak için \"Kaydet\"i, ikisini de saklamak için \"Farklı Kaydet\"i seç. Ardından paylaşım menüsünden Mail, Mesajlar, AirDrop ya da yüklü herhangi bir uygulama üzerinden gönderebilirsin.",
    },
  ],
  tips: [
    "Küçük metni düzenlemeden önce iki parmağınla yakınlaştır — doğruluğu ciddi ölçüde artırır.",
    "Sadece bir kelimeyi seçmek için ona çift dokun; tüm satırı seçmek için üç kez dokun.",
    "iPad'de parmakla çizmek yerine Apple Pencil kullanırsan imzaların gözle görülür şekilde daha pürüzsüz çıkar.",
    "iOS Ayarlar → PDF Editor bölümünden Dosyalar entegrasyonunu aç, böylece uygulama her paylaşım menüsünde görünür.",
    "Geri al yeterli gelmezse, düzenleme ekranındaki geri okuna uzun basarak son birkaç değişikliği adım adım geri alabilirsin.",
  ],
  mobileNote:
    "iOS'ta Dosyalar entegrasyonu önemli: Ayarlar'dan etkinleştir ki PDF Editor diğer tüm uygulamaların paylaşım menüsünde görünsün. Bundan sonra Mail'de veya Slack'te aldığın bir PDF'i düzenlemek tek dokunuşluk bir iş.",
  faq: [
    {
      q: "iPhone'da taranmış bir PDF'i düzenleyebilir miyim?",
      a: "Not ekleyebilir, imzalayabilir ve sayfaları yeniden sıralayabilirsin. Taranmış bir sayfadaki gerçek metni düzenlemek için önce OCR çalıştırman gerekir — uygulama bunu birkaç saniyede yapar.",
    },
    {
      q: "Uygulama ücretsiz mi?",
      a: "Günlük düzenlemeler için evet. Bazı gelişmiş özellikler Pro yükseltmesiyle açılıyor.",
    },
    {
      q: "Apple Pencil ile çalışıyor mu?",
      a: "Evet. Apple Pencil, imza, serbest el notu ve vurgulama için parmakla dokunmaya göre gözle görülür şekilde daha iyi bir his sunuyor.",
    },
    {
      q: "Şifre korumalı bir PDF'i düzenleyebilir miyim?",
      a: "Açarken istendiğinde şifreyi gir. Kilit açıldıktan sonra düzenleme normal şekilde çalışır. Kaydederken şifreyi tekrar uygulayabilirsin.",
    },
    {
      q: "Düzenlenen dosya nereye kaydedilir?",
      a: "Nereye kaydedersen orada: Dosyalar, iCloud Drive, Google Drive, fotoğraf kitaplığın ya da doğrudan bir e-posta taslağı içinde.",
    },
  ],
  related: [
    { label: "PDF Editor — genel bakış", path: "/pdf-editor" },
    {
      label: "Android'de PDF nasıl düzenlenir",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Telefonda PDF nasıl imzalanır", path: "/sign-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
