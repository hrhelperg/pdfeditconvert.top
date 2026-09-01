import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-submission-errors",
  h1: "PDF Form Gönderim Hataları (Gönder Butonu Çalışmadığında)",
  description:
    "Bir formun Gönder butonu başarısız mı oluyor ya da hiçbir şey mi yapmıyor? Yerleşik gönder butonlarının neden formu hazırlayan kurumun sunucusuna bağlı olduğu, hataların ne anlama geldiği ve formu elle gönderme yöntemi.",
  updated: "2026-06-01",
  intro: [
    "Bazı PDF formlarının yerleşik bir Gönder butonu vardır — ona bas ve form kendini bir yere göndermesi beklenir. İşe yaradığında pratiktir; yaramadığında ise kafa karıştırıcıdır, çünkü buton sadece başarısız olur, gizemli bir hata verir ya da hiçbir şey yapmıyormuş gibi görünür. Sebep, bir gönder butonunun formu kendi başına göndermemesidir: verileri formun hazırlayıcısının kurduğu bir hedefe teslim etmeye çalışır, ve bu bağlantı genelde bozulan kısımdır.",
    "Bu gönder butonları genelde formun verilerini onu oluşturan kişinin kontrol ettiği bir web adresine ya da e-postaya gönderir. O sunucu çalışmıyorsa, adres değiştiyse ya da görüntüleyicin güvenlik için işlemi engelliyorsa, gönderim başarısız olur — ve bunların hiçbiri senin taraftan düzeltebileceğin bir şey değildir. İyi haber, neredeyse her zaman güvenilir bir manuel yedek yol olmasıdır.",
    "Bu kılavuz gönder butonlarının gerçekte ne yaptığını, yaygın başarısızlıkların ne anlama geldiğini ve buton işbirliği yapmadığında tamamlanmış formunu hedefine ulaştırma yöntemini anlatıyor. Bu, farklı bir sorun olan bir web portalındaki yükleme hatalarından ayrıdır.",
  ],
  steps: [
    {
      title: "Gönder'in ne yaptığını anla",
      body: "Bir formun Gönder butonu, alan verisini hazırlayıcının yapılandırdığı bir hedefe — bir web adresine ya da e-postaya — gönderir. Kendi kendine yeterli değildir; o hedefin hâlâ çalışıyor olmasına ve görüntüleyicinin işleme izin vermesine bağlıdır.",
    },
    {
      title: "Bir ipucu için hatayı oku",
      body: "Bir sunucu, ağ ya da engellenen işlem hakkındaki bir mesaj hedefe ya da bir güvenlik kısıtlamasına işaret eder, dosyana değil. “Hiçbir şey olmadı” genelde görüntüleyicinin gönderimi güvenlik için sessizce engellediği anlamına gelir.",
    },
    {
      title: "Tam donanımlı bir PDF uygulaması dene",
      body: "Temel ve tarayıcı görüntüleyiciler sık sık gönder işlemlerini engeller ya da görmezden gelir. Tamamlanmış formu özel bir PDF uygulamasında açmak bazen butonun amaçlandığı gibi çalışmasını sağlar.",
    },
    {
      title: "Manuel göndermeye geri dön",
      body: "Buton hâlâ başarısız oluyorsa, tamamlanmış formu kaydet ve kilitle, sonra elle gönder — formdaki adrese e-postala ya da hazırlayıcının portalına yükle. Bu, bozuk gönderimi tamamen atlar.",
    },
    {
      title: "Doğrula ve bir kopya sakla",
      body: "Elle gönderdiğinde, kilitlenmiş kopyanı sakla ve bir onay bekle. Form belirli bir gelen kutusuna ya da portala ulaşacaksa, hazırlayıcının talimatları nereye gideceğini söyler.",
    },
  ],
  tips: [
    "Başarısız olan bir Gönder butonu genelde senin dosyan değil hazırlayıcının hedefidir — manuel gönderim güvenilir yedektir.",
    "Elle göndermeden önce cevaplarını kaydet ve kilitle, böylece alıcı kilitlenmiş, eksiksiz bir kopya alır.",
    "Gönder'de “hiçbir şey olmadı” genelde görüntüleyicinin işlemi güvenlik için engellediği anlamına gelir; tam donanımlı bir uygulama izin verebilir.",
    "Gönderim hataları portal yükleme hatalarından farklıdır — bir web sitesine bir dosya yüklüyorsan, bu ayrı bir çözüm gerektirir.",
    "Formda bir iletişim e-postası ya da talimat ara; hazırlayıcılar genelde tam olarak bu durum için manuel bir yol sağlar.",
  ],
  mobileNote:
    "Bir formun Gönder butonu telefonda başarısız olursa, PDF Editor uygulaması tamamlanmış formu kilitlemene ve paylaşım menüsünden elle göndermene izin verir — e-posta ya da portal yüklemesi — böylece bozuk bir gönder işlemi cevaplarını asla kilitli tutmaz. Hepsi cihazda çalışır.",
  faq: [
    {
      q: "PDF formumdaki Gönder butonu neden çalışmıyor?",
      a: "Buton, verini hazırlayıcının kurduğu bir hedefe — bir sunucuya ya da e-postaya — gönderir. Bu kapalıysa, değiştiyse ya da görüntüleyicin işlemi güvenlik için engelliyorsa, başarısız olur. Bu senin kontrolünün dışındadır; bunun yerine formu elle gönder.",
    },
    {
      q: "Gönder hiçbir şey yapmadığında ne anlama gelir?",
      a: "Görüntüleyicin muhtemelen güvenlik için gönderim işlemini sessizce engelledi. Tam donanımlı bir PDF uygulaması dene ya da butonu atlayıp tamamlanmış formu elle gönder.",
    },
    {
      q: "Buton bozuksa formu nasıl gönderirim?",
      a: "Tamamlanmış formu kaydet ve kilitle, sonra manuel yolla gönder: formdaki adrese e-postala ya da hazırlayıcının portalına yükle. Bu, gönderim işlemini tamamen atlar.",
    },
    {
      q: "Bir gönderim hatası, bir yükleme hatasıyla aynı mı?",
      a: "Hayır. Bir gönderim hatası, formun yerleşik Gönder butonunun başarısız olmasıdır. Bir yükleme hatası ise bir web sitesinin yüklediğin bir dosyayı reddetmesidir. Nedenleri ve çözümleri farklıdır.",
    },
    {
      q: "Hata aldım ama formun verisi yine de gitmiş olabilir mi?",
      a: "Muhtemelen değil — bir hata gördüysen, ulaşmadığını varsay. Elle gönder ve kendi kopyanı sakla, hedefine ulaştığını bilmek için bir onay ara.",
    },
  ],
  related: [
    {
      label: "Tamamlanmış bir PDF formu nasıl gönderilir",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "PDF yükleme hataları nasıl çözülür",
      path: "/guides/how-to-fix-pdf-upload-errors",
    },
    { label: "PDF formu çalışmıyor mu", path: "/guides/pdf-form-not-working" },
    {
      label: "PDF form uyumluluk sorunları",
      path: "/guides/pdf-form-compatibility-problems",
    },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
