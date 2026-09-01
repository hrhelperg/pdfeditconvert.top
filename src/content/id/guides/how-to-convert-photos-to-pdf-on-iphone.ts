import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-iphone",
  h1: "Cara Mengonversi Foto ke PDF di iPhone (Mengatasi HEIC)",
  description:
    "Ubah foto iPhone menjadi satu PDF, termasuk mengatasi format HEIC yang sering bikin bingung. Cara lewat browser dan cara yang lebih cepat lewat aplikasi.",
  updated: "2026-05-23",
  intro: [
    "Mengubah foto menjadi PDF di iPhone adalah hal yang terus-menerus dibutuhkan orang, sebuah kontrak yang difoto, tumpukan struk untuk klaim pengeluaran, kedua sisi kartu identitas untuk sebuah formulir. Tugasnya sederhana, tapi ada satu jebakan khas iPhone yang jadi penyebab sebagian besar frustrasi: secara default, iPhone Anda menyimpan foto sebagai HEIC, bukan JPG, dan banyak alat tidak bisa membaca HEIC.",
    "Panduan ini membahas dua cara yang bisa diandalkan. Cara pertama memakai alat gratis Gambar ke PDF di Safari, yang berfungsi begitu foto Anda dalam format yang didukung. Cara kedua memakai aplikasi PDF Editor, yang membaca HEIC langsung dari galeri kamera Anda dan sepenuhnya melewati urusan format.",
    "Pilih yang paling cocok untuk situasi Anda, tapi kenali dulu detail soal HEIC-nya, karena itulah yang mengubah tugas 30 detik menjadi membingungkan.",
  ],
  steps: [
    {
      title: "Tentukan format foto Anda",
      body: "Buka Pengaturan → Kamera → Format. \"Efisiensi Tinggi\" menyimpan HEIC; \"Paling Kompatibel\" menyimpan JPG. Beralih ke Paling Kompatibel membuat foto baru berfungsi di mana saja, termasuk alat berbasis browser.",
    },
    {
      title: "Konversi foto HEIC yang sudah ada jika perlu",
      body: "Sudah terlanjur memotret dalam HEIC? Anda bisa mengekspor ulang sebagai JPG (buka di Foto, bagikan, pilih opsi yang menghasilkan JPG) atau langsung lompat ke cara lewat aplikasi di bawah, yang membaca HEIC secara langsung.",
    },
    {
      title: "Buka alat Gambar ke PDF di Safari",
      body: "Buka alat Gambar ke PDF. Alat ini menerima JPG, PNG, dan WebP serta berjalan sepenuhnya di perangkat Anda, tidak ada yang diunggah.",
    },
    {
      title: "Tambahkan foto Anda dan urutkan",
      body: "Ketuk untuk memilih foto dari galeri Anda, lalu gunakan panah untuk mengurutkannya. Urutan halaman penting untuk dokumen multihalaman seperti kontrak dua halaman.",
    },
    {
      title: "Buat dan simpan PDF-nya",
      body: "Ketuk \"Buat PDF\". Setelah terunduh, gunakan ikon bagikan untuk menyimpannya ke aplikasi File atau langsung mengirimkannya.",
    },
    {
      title: "Atau gunakan aplikasi PDF Editor untuk HEIC dan pemindaian",
      body: "Aplikasi ini membaca foto HEIC dari galeri kamera Anda, mengubahnya menjadi PDF, dan juga bisa menangkap halaman baru dengan deteksi tepi, tanpa perlu konversi format apa pun.",
    },
  ],
  tips: [
    "Penyebab terbesar \"foto saya tidak mau dikonversi\" di iPhone adalah HEIC. Beralih ke Paling Kompatibel, atau gunakan aplikasinya, dan masalahnya hilang.",
    "Potong setiap foto di aplikasi Foto sebelum dikonversi, halamannya diatur sesuai ukuran gambar, jadi merapikan latar belakang menghasilkan dokumen yang lebih rapi.",
    "Untuk struk dan kartu identitas, ambil foto di permukaan gelap dan rata dengan cahaya merata. Silau dan bayangan lebih sulit diperbaiki daripada dihindari.",
    "Foto yang diubah menjadi PDF bukan pindaian yang dapat dicari. Jika Anda perlu mencari teksnya, gunakan fitur pemindaian aplikasi, yang bisa mengenali teks.",
    "Jika PDF jadinya terlalu besar untuk dikirim lewat email, jalankan lewat alat Kompres PDF, foto HP menghasilkan halaman yang berat.",
  ],
  mobileNote:
    "Seluruh alur kerja ini ada di HP Anda, dan itulah persis yang dirancang untuk aplikasi PDF Editor: HEIC langsung dari galeri kamera, konversi di perangkat tanpa apa pun yang diunggah, plus pemindaian dan tanda tangan di tempat yang sama. Untuk apa pun yang Anda lakukan lebih dari sekali, ini jalan yang lebih cepat.",
  faq: [
    {
      q: "Kenapa foto iPhone saya tidak mau dimuat ke konverter?",
      a: "Foto itu tersimpan sebagai HEIC, yang tidak dibaca sebagian besar alat berbasis browser. Beralih ke \"Paling Kompatibel\" di Pengaturan → Kamera → Format untuk foto baru, atau gunakan aplikasi PDF Editor, yang membaca HEIC secara langsung.",
    },
    {
      q: "Bisakah saya menggabungkan beberapa foto menjadi satu PDF?",
      a: "Bisa. Tambahkan semuanya, seret ke urutan yang benar, dan setiap foto menjadi satu halaman dalam satu PDF.",
    },
    {
      q: "Apakah foto saya diunggah ke server?",
      a: "Tidak. Alat berbasis browser memproses semuanya di perangkat Anda, begitu pula aplikasinya. Foto Anda tetap privat, penting untuk kartu identitas dan dokumen pribadi.",
    },
    {
      q: "Apakah PDF-nya akan dapat dicari?",
      a: "Tidak dari sekadar foto biasa, tidak ada lapisan teks. Gunakan fitur pemindaian di aplikasi PDF Editor untuk menghasilkan dokumen dengan teks yang dikenali dan dapat dicari.",
    },
    {
      q: "PDF-nya terlalu besar untuk dikirim lewat email, apa yang harus saya lakukan?",
      a: "Foto iPhone beresolusi tinggi menghasilkan halaman yang besar. Jalankan filenya lewat alat Kompres PDF agar masuk batas lampiran.",
    },
  ],
  related: [
    { label: "Gambar ke PDF — konversi foto di browser Anda", path: "/image-to-pdf" },
    { label: "Pindai ke PDF — tangkap kertas dengan kamera Anda", path: "/scan-to-pdf" },
    { label: "Cara mengonversi foto ke PDF di Android", path: "/guides/how-to-convert-photos-to-pdf-on-android" },
    { label: "Cara mengonversi JPG ke PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "Konverter PDF", path: "/pdf-converter" },
};

export default content;
