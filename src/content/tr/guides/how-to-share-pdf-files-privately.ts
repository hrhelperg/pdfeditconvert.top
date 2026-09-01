import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-files-privately",
  h1: "PDF Dosyaları Gizlice Nasıl Paylaşılır? (Yabancılara Yüklemeden)",
  description:
    "Bir PDF'i paylaşmanın gizli yolu genel bir “PDF araçları” sitesi üzerinden geçmez. Belgeleri sadece seninle alıcı arasında tutan kanallar, makul varsayılan ayarlarla.",
  updated: "2026-05-29",
  intro: [
    "Birçok kişinin bir PDF'i biriyle paylaşmak istediğinde ilk yaptığı şey, “gizli” paylaşım vaat eden bir araca onu yüklemektir — ve o araç genelde zincirdeki en büyük gizlilik riskidir. Ücretsiz dosya paylaşım hizmetleri genelde dosyaları bir süre saklar, bazen indeksler ve seninle hiçbir ilişkin olmayan bir sunucuya bağımlıdır.",
    "Gizli paylaşım karmaşık değildir; doğru kanalı seçmekle ilgilidir. Doğrudan aktarım (AirDrop, USB), uçtan uca şifreli mesajlaşma, şifreli e-posta ya da sıradan e-posta üzerinden şifreyle korunan dosyalar. Her biri farklı bir durum için işe yarar. Hiçbiri bir yabancıya yüklemeyi gerektirmez.",
    "Bu kılavuz hassasiyet düzeyine ve kullanım senaryosuna göre gerçekçi seçenekleri, her birinin ödünleşimleriyle anlatıyor. Amaç, kaçınılabilir bir aracı devre dışı bırakan, sen ve alıcı arasında kalan paylaşılan belgelerdir.",
  ],
  steps: [
    {
      title: "Aynı cihaz ya da aynı ortamda aktarım için AirDrop ya da yerel paylaşım kullan",
      body: "iPhone'dan iPhone'a, iPhone'dan Mac'e: AirDrop. Android: Nearby Share. Aynı Mac, aynı bilgisayar: yerel AirDrop ya da paylaşılan klasör. Dosya internete hiç değmez.",
    },
    {
      title: "Güvenilir alıcılar için uçtan uca şifreli mesajlaşma kullan",
      body: "Signal, WhatsApp (bazı çekincelerle), Apple kullanıcıları arasında iMessage. Aktarımın kendisi şifrelidir; dosya sadece alıcının cihazında çözülür. Platformlar meta veriyi görür, içeriği değil.",
    },
    {
      title: "Düşük hassasiyetli dosyalar için sıradan e-posta yeterlidir",
      body: "Standart e-posta şifrelenmemiştir ama çoğu hassas olmayan belge için pratikte güvenlidir. Risk müdahaledir, bu da büyük e-posta sağlayıcılarından geçen sıradan belgeler için nadirdir.",
    },
    {
      title: "Sıradan e-postadan hassas dosyalar için önce şifreyle koru",
      body: "Eklemeden önce bir PDF şifresi uygula. E-posta dosyayı taşır; şifre başka bir kanaldan gider (telefon görüşmesi, ayrı bir mesaj). E-posta ele geçirilse bile dosya korunmuş kalır.",
    },
    {
      title: "Çok hassas materyal için şifreli e-posta ya da güvenli teslimat kullan",
      body: "ProtonMail, Tutanota ya da kurumunun güvenli belge teslimat hizmeti. Bunlar kanalın kendisine gerçek şifreleme ekler, şifreyi ayrı bir kanaldan gönderme adımını ortadan kaldırır.",
    },
    {
      title: "Hassas içerik için ücretsiz dosya paylaşım hizmetlerine yüklemekten kaçın",
      body: "Dosyanı yükleyen ücretsiz araçlar (sıkıştırıcılar, birleştiriciler, bölücüler) dosyayı sunucularında, kısa süreliğine bile olsa tutar. Hassas materyal için, herhangi bir paylaşımdan önce yerel işleyen tarayıcı tabanlı araçlar kullan.",
    },
  ],
  tips: [
    "Şifreyi, şifreyle korunan dosyayla aynı e-postaya koyma. Şifrenin amacı e-posta müdahalesine karşı savunmadır.",
    "Paylaşmadan önce alıcının kimliğini doğrula — kimlik avı dolandırıcılıkları bazen hassas PDF'leri elde etmek için müşteri gibi davranır.",
    "Aynı alıcıyla tekrar eden paylaşımlar için tek bir kanalda anlaş ve ona sadık kal. Sızıntılar genelde kanal değiştirmede olur.",
    "Bağlantı tek kullanımlık değilse genel bağlantılar üzerinden paylaşma. Kalıcı bağlantılar bulunabilir ya da daha ileri paylaşılabilir.",
    "Paylaştıktan sonra dosyayı geçici bir tutma alanından (İndirilenler klasörü, geçici sürücü) sil. Hassas materyalin kopya sayısı ne kadar azsa yüzey de o kadar küçük.",
  ],
  mobileNote:
    "Çoğu gizli paylaşım artık telefonda başlıyor. PDF Editor uygulaması dosyaları (sıkıştır, imzala, şifrele) iOS ve Android'de yerel olarak hazırlar, ardından AirDrop, Signal ya da e-postana devreder — dosya hazırlık boyunca telefonda kalır, sonra doğrudan alıcıya aktarılır.",
  faq: [
    {
      q: "Gizli paylaşımın en basit yolu nedir?",
      a: "Alıcıya yakınsan AirDrop ya da Nearby Share. Değilsen uçtan uca şifreli mesajlaşma. İkisi de dosyayı üçüncü taraf sunucularının elinden uzak tutar.",
    },
    {
      q: "WhatsApp hassas belgeler için yeterince gizli mi?",
      a: "Uçtan uca şifreleme içeriği korur; WhatsApp meta veriyi görür (kim kime ne gönderdi). Çoğu durum için bu sorun değil; çok hassas materyal için Signal daha temiz bir seçim.",
    },
    {
      q: "Bir dosya paylaşım bağlantısı hizmeti kullanmalı mıyım?",
      a: "Sadece açık veri işleme taahhütleri ve kısa saklama süresiyle. Hassas dosyalar için doğrudan kanallar daha güvenlidir.",
    },
    {
      q: "PDF şifre koruması kanal şifrelemesiyle nasıl karşılaştırılır?",
      a: "PDF şifreleri dosyanın kendisini korur; kanal şifrelemesi aktarımı korur. İkisinin de değeri var; farklı saldırılara karşı korurlar.",
    },
    {
      q: "En kötü yaygın uygulama nedir?",
      a: "Hassas bir PDF'i ücretsiz bir “dönüştür” ya da “sıkıştır” aracına yükleyip sonucu e-postayla göndermek. Yükleme adımı, verinin kontrolünden çıktığı yerdir. Yüklemeyen tarayıcı tabanlı araçları kullan.",
    },
  ],
  related: [
    { label: "PDF Güvenliği — şifreyle koru ve şifrele", path: "/pdf-security" },
    { label: "Hassas PDF dosyaları nasıl korunur", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Hassas belgeleri yüklemekten nasıl kaçınılır", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
    { label: "Gizliliği önceleyen belge iş akışları", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "PDF Güvenliği — şifreyle koru ve şifrele", path: "/pdf-security" },
};

export default content;
