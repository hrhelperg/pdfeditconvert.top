import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-files-privately",
  h1: "Cara Membagikan File PDF secara Privat (Tanpa Mengunggah ke Orang Asing)",
  description:
    "Cara privat membagikan PDF tidak melewati situs “alat PDF” publik. Jalur yang menjaga dokumen hanya antara Anda dan penerima, dengan pengaturan default yang masuk akal.",
  updated: "2026-05-29",
  intro: [
    "Hal pertama yang dilakukan banyak orang saat ingin membagikan PDF ke seseorang adalah mengunggahnya ke alat yang menjanjikan berbagi 'privat' — dan alat itu, seringnya, justru menjadi risiko privasi terbesar dalam rantainya. Layanan berbagi file gratis biasanya menahan file selama periode tertentu, kadang mengindeksnya, dan bergantung pada server yang sama sekali tidak ada hubungannya dengan Anda.",
    "Berbagi secara privat tidaklah rumit; ini soal memilih saluran yang tepat. Transfer langsung (AirDrop, USB), pesan terenkripsi ujung ke ujung, email terenkripsi, atau file yang dilindungi kata sandi lewat email biasa. Masing-masing cocok untuk situasi yang berbeda. Tidak satu pun membutuhkan pengunggahan ke orang asing.",
    "Panduan ini menjelaskan opsi-opsi realistis berdasarkan tingkat sensitivitas dan kasus penggunaan, lengkap dengan trade-off masing-masing. Tujuannya adalah dokumen yang dibagikan tetap hanya antara Anda dan penerima, tanpa pihak ketiga sebagai perantara yang sebenarnya bisa dihindari.",
  ],
  steps: [
    {
      title: "Untuk transfer dalam satu perangkat atau satu ruangan, gunakan AirDrop atau berbagi lokal",
      body: "iPhone ke iPhone, iPhone ke Mac: AirDrop. Android: Nearby Share. Mac yang sama, PC yang sama: AirDrop lokal atau folder bersama. File tidak pernah menyentuh internet.",
    },
    {
      title: "Untuk penerima yang tepercaya, gunakan pesan terenkripsi ujung ke ujung",
      body: "Signal, WhatsApp (dengan catatan tertentu), iMessage antar pengguna Apple. Jalur pengirimannya sendiri terenkripsi; file hanya didekripsi di perangkat penerima. Platform-platform itu hanya melihat metadata, bukan isinya.",
    },
    {
      title: "Untuk file dengan sensitivitas rendah, email biasa sudah cukup",
      body: "Email standar tidak terenkripsi, tapi secara praktis cukup aman untuk sebagian besar dokumen yang tidak sensitif. Risikonya adalah penyadapan, yang jarang terjadi untuk dokumen biasa yang melewati penyedia email besar.",
    },
    {
      title: "Untuk file sensitif lewat email biasa, lindungi dengan kata sandi terlebih dahulu",
      body: "Pasang kata sandi PDF sebelum melampirkannya. Emailnya berisi filenya; kata sandinya dikirim lewat saluran berbeda (telepon, pesan terpisah). Bahkan jika emailnya disadap, filenya tetap terlindungi.",
    },
    {
      title: "Untuk materi yang sangat sensitif, gunakan email terenkripsi atau pengiriman aman",
      body: "ProtonMail, Tutanota, atau layanan pengiriman dokumen aman milik organisasi Anda. Semua ini menambahkan enkripsi sungguhan pada salurannya sendiri, sehingga langkah mengirim kata sandi lewat jalur terpisah tidak lagi diperlukan.",
    },
    {
      title: "Hindari mengunggah ke layanan berbagi file gratis untuk konten sensitif",
      body: "Alat gratis yang mengunggah file Anda (kompresor, penggabung, pembagi) menahan file itu di server mereka, meski hanya sebentar. Untuk materi sensitif, gunakan alat berbasis browser yang memproses secara lokal sebelum dibagikan.",
    },
  ],
  tips: [
    "Jangan menaruh kata sandi di email yang sama dengan file yang dilindunginya. Tujuan kata sandi itu adalah melindungi dari penyadapan email.",
    "Pastikan identitas penerima sebelum membagikan — penipuan phishing kadang menyamar sebagai klien untuk mendapatkan PDF sensitif.",
    "Untuk berbagi berulang dengan penerima yang sama, sepakati satu saluran dan konsisten memakainya. Kebocoran biasanya terjadi saat berpindah-pindah saluran.",
    "Jangan membagikan lewat tautan publik kecuali tautan itu hanya bisa dipakai sekali. Tautan yang tetap aktif bisa ditemukan atau dibagikan lebih lanjut oleh orang lain.",
    "Setelah membagikan, hapus file dari area penyimpanan sementara mana pun (folder Unduhan, drive kerja). Semakin sedikit salinan materi sensitif, semakin kecil celah risikonya.",
  ],
  mobileNote:
    "Sebagian besar berbagi privat kini dimulai dari HP. Aplikasi PDF Editor menyiapkan file (kompres, tanda tangan, kata sandi) secara lokal di iOS dan Android, lalu menyerahkannya ke AirDrop, Signal, atau email Anda — file tetap ada di HP selama proses persiapan, lalu berpindah langsung ke penerima.",
  faq: [
    {
      q: "Apa cara paling sederhana untuk berbagi secara privat?",
      a: "AirDrop atau Nearby Share saat Anda dekat dengan penerima. Pesan terenkripsi ujung ke ujung saat tidak dekat. Keduanya menjaga file tetap jauh dari server pihak ketiga.",
    },
    {
      q: "Apakah WhatsApp cukup privat untuk dokumen sensitif?",
      a: "Enkripsi ujung ke ujung melindungi isinya; WhatsApp tetap bisa melihat metadata (siapa mengirim apa ke siapa). Untuk sebagian besar kasus itu tidak masalah; untuk materi yang sangat sensitif, Signal adalah pilihan yang lebih bersih.",
    },
    {
      q: "Perlukah saya memakai layanan tautan berbagi file?",
      a: "Hanya jika ada komitmen penanganan data yang eksplisit dan masa retensi yang singkat. Untuk file sensitif, saluran langsung lebih aman.",
    },
    {
      q: "Bagaimana perbandingan perlindungan kata sandi PDF dengan enkripsi saluran?",
      a: "Kata sandi PDF melindungi file itu sendiri; enkripsi saluran melindungi jalur pengirimannya. Keduanya berguna; masing-masing melindungi dari jenis serangan yang berbeda.",
    },
    {
      q: "Apa kebiasaan buruk yang paling umum?",
      a: "Mengunggah PDF sensitif ke alat 'konversi' atau 'kompres' gratis, lalu mengirim hasilnya lewat email. Langkah mengunggah itulah tempat data Anda lepas dari kendali Anda. Gunakan alat berbasis browser yang tidak mengunggah.",
    },
  ],
  related: [
    { label: "PDF Security — lindungi dengan kata sandi dan enkripsi", path: "/pdf-security" },
    { label: "Cara melindungi file PDF yang sensitif", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Cara menghindari mengunggah dokumen sensitif", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
    { label: "Alur kerja dokumen yang mengutamakan privasi", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "PDF Security — lindungi dengan kata sandi dan enkripsi", path: "/pdf-security" },
};

export default content;
