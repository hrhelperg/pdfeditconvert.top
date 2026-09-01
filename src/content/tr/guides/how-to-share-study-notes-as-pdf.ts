import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-study-notes-as-pdf",
  h1: "Ders Notları PDF Olarak Nasıl Paylaşılır? (Grup, Grup Sohbeti, Bulut)",
  description:
    "Bir çalışma grubuyla biçimlendirmeyi ya da sürüm kontrolünü kaybetmeden notlarını paylaş. Ortak çalışmayı ekran görüntüsü kaosuna dönüşmekten koruyan PDF alışkanlıkları.",
  updated: "2026-05-29",
  intro: [
    "Bir çalışma grubuyla not paylaşmak kolay olmalı ama pratikte genelde otuz ekran görüntüsü ve aynı dersin üç farklı sürümünü içeren bir sohbet zincirine dönüşür. Sınavdan bir gece önce kimse herkesin sürekli atıfta bulunduğu çözülmüş örneğin olduğu sürümü bulamaz ve biri kimsenin okuyamadığı el yazısı kenar notlarının fotoğrafını atmıştır.",
    "PDF'ler bunun çoğunu çözer. Biçimlendirmeyi kilitler, her cihazda çalışır, her platformdaki paylaşım menüsüne sığar ve tek bir bulut hesabına bağlı değildir. Birkaç paylaşım alışkanlığı — dosyayı tutarlı adlandırmak, bilinçli sürümlemek, doğru kanalı seçmek — ortak çalışmayı kimsenin proje gibi yönetmesine gerek kalmadan tutarlı tutar.",
    "Bu kılavuz o alışkanlıkları anlatıyor. Hiçbiri araç değil; hepsi senin ve grubunun bir kere üzerinde anlaştığı kurallar. Ondan sonra kendiliğinden işler.",
  ],
  steps: [
    {
      title: "Önce paylaşım kanalında anlaş",
      body: "Tek bir yer seç — grup sohbeti, ortak bulut klasörü, özel bir Discord — ve ona sadık kal. İki kanala dağılmış notlar bulunmaz. Kanaldan çok önemli olan tutarlılıktır.",
    },
    {
      title: "Her zaman PDF olarak paylaş, belgenin fotoğrafı olarak asla",
      body: "Bir PDF'in ekran görüntüsü, PDF'in kendisinden kötüdür. Dosyayı doğrudan gönder. Telefonlar bunu kolaylaştırır — paylaşım menüsü → dosya, ekran görüntüsü değil.",
    },
    {
      title: "Dosyayı kendin için değil grup için adlandır",
      body: "DersKodu_Hafta3_Ders_Notlari_AdınSoyadın.pdf. Grup kimin ne paylaştığını ve hangi haftayı gördü. On beş “Notes.pdf” eki içeren bir zincirde sade “Notes.pdf” işe yaramaz.",
    },
    {
      title: "Taslak notları filigranla",
      body: "Notların ilk taslaksa ve yeniden düzenlenecekse PDF'e Filigran Ekle her sayfaya TASLAK ya da HAZIRLANIYOR damgası basar. Grup bir revizyon bekleyeceğini bilir.",
    },
    {
      title: "Paylaşmadan önce sıkıştır",
      body: "PDF Sıkıştır, ek sınırı olan sohbet platformları için dosya boyutunu düşürür. Mobil veride yükleme süresinden tasarruf sağlar ve “dosya çok büyük” reddini önler.",
    },
    {
      title: "Sürümleri sohbette değil dosya adında takip et",
      body: "Hafta3_Ders_Notlari_v2.pdf net bir ifadedir. Sohbet zincirinde “notları düzenledim, ekte” değildir. Dosya adı sürüm kaydıdır.",
    },
  ],
  tips: [
    "Bir gruba Word belgesi paylaşma. Her cihazda farklı görünür, aynı anda tek bir düzenleyiciye kilitlenir ve hemen sürümlere bölünür. PDF her şeyi kilitler.",
    "Mümkün olduğunda el yazısı notların OCR uygulanmış PDF'lerini kullan — aranabilir metin grubun belirli konuları hızlıca bulmasına yardımcı olur.",
    "Dizüstü bilgisayar ekranının fotoğraflarını paylaşma. Yansımalar, moiré ve düşük çözünürlük notları daha kolay değil daha zor okunur yapar.",
    "Grubun düzenli paylaşımı varsa not PDF'leri için ortak bir şablon önceden hazırla. Tutarlı kapak sayfaları kimin neyi paylaştığını tanımaya yardımcı olur.",
    "Grup notları için e-postadan kaçın. Sohbet zincirleri kimin neyi gördüğünü takip eder; e-posta aynı konuşmayı birçok gelen kutusuna dağıtır.",
  ],
  mobileNote:
    "Grup paylaşımının çoğu telefonda olur — hızlı fotoğraf çekimi, sohbete anında paylaşım, hızlı onay. PDF Editor uygulaması tarama-birleştirme-sıkıştırma-yeniden adlandırma zincirini mobilde halleder; böylece grup sohbetine gelen dosya ham kamera rulosu dökümü yerine temiz olur.",
  faq: [
    {
      q: "Çalışma notlarını paylaşmanın en kötü yolu nedir?",
      a: "Belgenin ekran görüntüleri ya da sadece sohbette kalan notlar. İkisi de aranamaz ve konuşma ilerledikçe kaybolur.",
    },
    {
      q: "Herkes mi kendi notunu paylaşmalı yoksa tek kişi mi?",
      a: "Herkes bilinçli şekilde paylaşsın: kişi başı üzerinde anlaşılan haftalar ya da “ben bu hafta yaparım, sen sonrakini yap”. Dönüşümlü paylaşım kişi başına emeği azaltır ve çok bakış açılı notlar üretir.",
    },
    {
      q: "Kanonik notlar nerede durmalı?",
      a: "Uzun vadeli saklama için ortak bir bulut klasörü en iyisidir. Grup sohbeti hızlı dağıtım için iyidir; klasör arşivdir.",
    },
    {
      q: "Notları nasıl sürümlüyoruz?",
      a: "Sadece dosya adında. v1, v2, v3. Grup FINAL üzerinde anlaştığında yeniden adlandır ve /final/ klasörüne taşı. Sürümleri sohbette takip etme.",
    },
    {
      q: "Notlar el yazısıysa ne olur?",
      a: "Önce PDF Tarama. El yazısı notların siyah-beyaz taramaları fotoğraflardan daha keskin ve daha küçüktür. Aracın destekliyorsa OCR ekle.",
    },
  ],
  related: [
    { label: "Öğrenciler için PDF — notlar ve çalışma kılavuzları", path: "/pdf-for-students" },
    { label: "PDF Sıkıştır — sohbet eki sınırları için küçült", path: "/compress-pdf" },
    { label: "Ders materyalleri PDF olarak nasıl düzenlenir", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Telefondan PDF nasıl paylaşılır", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Öğrenciler için PDF — notlar, vurgulamalar, çalışma kılavuzları", path: "/pdf-for-students" },
};

export default content;
