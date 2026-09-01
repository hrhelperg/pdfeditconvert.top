import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-pdf-file",
  h1: "PDF Dosyası Şifreyle Nasıl Korunur?",
  description:
    "Telefonda ya da bilgisayarda bir PDF'e şifre koruması ve şifreleme ekle. PDF Editor uygulamasıyla pratik rehber.",
  updated: "2026-05-11",
  intro: [
    "Birçok belgenin düz PDF olarak dolaşmaması gerekir: maaş bordroları, imzalı sözleşmeler, kimlik taramaları, gizlilik anlaşması kopyaları, tıbbi kayıtlar, mali tablolar. Bir şifre ve doğru şifreleme, dosyayı sadece hedeflenen alıcının açabileceği bir şeye dönüştürür — e-posta yönlendirilse, ele geçirilse ya da bir kurumsal gelen kutusunda sonsuza dek otursa bile.",
    "Bu rehber, iPhone veya Android'de PDF Editor uygulamasıyla bir PDF'e şifre koruması eklemeyi adım adım gösteriyor. Ayrıca nelerden kaçınman gerektiğini de ele alıyor: zayıf şifreler, eski şifreleme yöntemleri ve şifreyi belgeyle aynı kanalda paylaşmak gibi yaygın bir hata.",
    "Sonunda, kurumsal güvenlik politikalarınca kabul edilen güçlü AES-256 şifrelemesiyle, hassas belgelere bir dakikadan kısa sürede uygulayabileceğin, tekrarlanabilir bir koruma iş akışın olacak.",
  ],
  steps: [
    {
      title: "Korumak istediğin PDF'i aç",
      body: "Belgeyi Dosyalar, iCloud Drive, Google Drive ya da herhangi bir paylaşım uygulaması üzerinden PDF Editor'a ekle. Tüm akış yerel olarak çalışır — dosyan cihazından hiç çıkmaz.",
    },
    {
      title: "Araçlar menüsünde Koru'ya dokun",
      body: "Belge araçlarının altında bulunur. Dosyayı açmak için şifre istemek üzere \"Şifreyle koru\"yu, sadece görüntüleme erişimi için \"İzinleri kısıtla\"yı seç.",
    },
    {
      title: "Güçlü bir şifre seç",
      body: "En az 12 karakter, harf, rakam ve sembol karışımı. Yaygın kelimelerden ve kişisel bilgilerden (doğum günleri, isimler) kaçın. Bir şifre yöneticin varsa oradan bir şifre üret — doğru hamle budur.",
    },
    {
      title: "Şifreyi onayla",
      body: "Yazım hatalarını önlemek için tekrar gir. Dosya şifrelendikten sonra yanlış yazdıysan geri dönüş yoktur.",
    },
    {
      title: "Kısıtlamaları seç (isteğe bağlı)",
      body: "Görüntülemeye izin ver ama yazdırmayı, metin kopyalamayı ya da sayfa çıkarmayı engelle. Alıcının belgeyi okuması gerekiyor ama parçalarını dağıtmasını istemiyorsan işe yarar.",
    },
    {
      title: "Yeni bir dosya olarak kaydet",
      body: "Orijinal, korumasız sürümü güvenli bir yerde sakla — şifreyi unutursan yine de erişimin olur. Korumalı kopyayı açıkça farklı bir adla kaydet.",
    },
    {
      title: "Şifreyi ayrı bir kanaldan paylaş",
      body: "Şifreli PDF'i e-postayla gönder; şifreyi ise mesajla ya da telefonla ilet. İkisini de aynı e-postaya koyma — e-posta hesabı ele geçirilirse ikisi birden sızar. Gerçek hayattaki çoğu olayı önleyen küçük bir alışkanlık.",
    },
  ],
  tips: [
    "AES-256 doğru şifrelemedir — uygulama bunu varsayılan olarak kullanır. Bir araç \"uyumlu\" ya da \"eski\" şifreleme sunuyorsa, bunlar genelde kırılmıştır; onlardan kaçın.",
    "Aynı şifreyi birden fazla belgede tekrar kullanma. Biri sızarsa domino etkisi istemezsin.",
    "Alıcı teknik biri değilse basit talimatlar ver: \"Dosyayı açmak için bu şifreye ihtiyacın olacak: XYZ\" yeterlidir.",
    "Mümkünse şifreleri güvenli şekilde paylaşmak için bir şifre yöneticisi kullan — çoğunun, her iki tarafın da hesap sahibi olmasını gerektirmeyen bir \"paylaş\" özelliği vardır.",
    "Çok hassas dosyalar için (hukuki, tıbbi, mali) şifreyi mesajla göndermek yerine 1Password'ün ya da Bitwarden'ın güvenli paylaşım bağlantılarını düşün.",
  ],
  mobileNote:
    "Bir PDF'i korumak tamamen cihaz üzerinde gerçekleşir. Uçak modundayken bile, tekrar bağlandığın anda göndermeden önce bir sözleşmeyi kilitleyebilirsin. Bu, bir otel lobisinden ya da havaalanından hassas belgelerle uğraşan seyahat edenler için önemlidir — koruma yerel olarak gerçekleşir, gönderim için ise sadece bir bağlantıya ihtiyacın olur.",
  faq: [
    {
      q: "Şifreyi unutursam ne olur?",
      a: "Bir arka kapı yoktur. Güçlü şifreleme, şifre olmadan geri kazanımın mümkün olmadığı anlamına gelir. Şifreleri her zaman hafızanda değil, bir şifre yöneticisinde sakla.",
    },
    {
      q: "Şifre dosyayı açmayı yavaşlatır mı?",
      a: "Fark edilir bir gecikme olmaz. Şifre çözme, açılırken bir kez gerçekleşir ve eski cihazlarda bile milisaniyeler sürer.",
    },
    {
      q: "Şifreyi sonradan kaldırabilir miyim?",
      a: "Evet, şifreye sahipsen. Korumalı PDF'i aç, şifreyi gir, sonra Koru menüsünde \"Korumayı kaldır\"ı kullan.",
    },
    {
      q: "Şifre gerçekten güvenli mi, yoksa göstermelik mi?",
      a: "Gerçek güvenlik. Güçlü bir şifreyle AES-256, kurumsal sistemlerin, şifre yöneticilerinin ve birçok bankacılık uygulamasının kullandığı aynı şifrelemedir. Zayıf halka her zaman şifrenin kendisidir — güçlü bir tane seç.",
    },
    {
      q: "Peki ya karartma?",
      a: "Karartma, şifre korumasından farklıdır. Karartma içeriği kalıcı olarak kaldırır (bir ismi karalamak gibi); şifre koruması ise içeriği tutar ama görüntülemek için kimlik doğrulama gerektirir. Hassas belgeler için ikisini de isteyebilirsin — dosyada olmaması gerekeni karart, geri kalanı şifreyle koru.",
    },
  ],
  related: [
    { label: "PDF güvenliği — genel bakış", path: "/pdf-security" },
    { label: "PDF'leri kilitlemeden önce imzala", path: "/sign-pdf" },
    { label: "İşletmeler için PDF iş akışları", path: "/pdf-for-business" },
  ],
  parentHub: { label: "PDF Güvenliği", path: "/pdf-security" },
};

export default content;
