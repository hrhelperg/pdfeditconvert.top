import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-android",
  h1: "Cara Mengonversi Foto ke PDF di Android",
  description:
    "Ubah foto Android menjadi satu PDF memakai alat di browser atau fitur Cetak ke PDF bawaan. Ditambah alur kerja yang lebih cepat lewat aplikasi dengan fitur pindai.",
  updated: "2026-05-23",
  intro: [
    "Android memberi Anda lebih dari satu cara mengubah foto menjadi PDF, ini berkah sekaligus sumber kebingungan, karena langkahnya berbeda antara Samsung, Pixel, Xiaomi, dan yang lain. Kabar baiknya, ada satu cara yang bekerja sama persis di semua HP Android: alat berbasis browser yang berjalan di perangkat Anda dan tidak peduli merek apa pun pembuatnya.",
    "Panduan ini membahas cara universal berbasis browser itu memakai alat gratis Gambar ke PDF, trik bawaan \"Cetak ke PDF\" yang tersembunyi di menu bagikan, dan aplikasi PDF Editor untuk saat Anda ingin foto, pemindaian, dan tanda tangan di satu tempat.",
    "Foto Android biasanya tersimpan sebagai JPG, jadi umumnya Anda terhindar dari masalah format yang dialami pengguna iPhone, tapi kita akan menandai satu pengecualian yang layak diketahui.",
  ],
  steps: [
    {
      title: "Buka alat Gambar ke PDF di browser Anda",
      body: "Buka alat Gambar ke PDF di Chrome atau browser pilihan Anda. Alat ini bekerja di HP Android mana pun tanpa peduli mereknya, dan memproses gambar di perangkat Anda, tidak ada yang diunggah.",
    },
    {
      title: "Tambahkan foto Anda",
      body: "Ketuk untuk memilih foto dari galeri atau file Anda. JPG dan PNG sama-sama berfungsi; setiap gambar menjadi satu halaman.",
    },
    {
      title: "Urutkan halamannya",
      body: "Gunakan panah untuk menyusun foto-fotonya. Untuk dokumen multihalaman, periksa ulang urutannya sebelum membuat filenya.",
    },
    {
      title: "Buat dan simpan PDF-nya",
      body: "Ketuk \"Buat PDF\". Filenya terunduh ke HP Anda; simpan ke File atau cloud drive pilihan Anda, atau langsung bagikan.",
    },
    {
      title: "Alternatif: gunakan Cetak ke PDF",
      body: "Buka foto di Google Foto atau galeri Anda, ketuk Bagikan → Cetak, lalu pilih \"Simpan sebagai PDF\" sebagai printernya. Cara ini menggabungkan gambar terpilih menjadi PDF tanpa alat apa pun, meski Anda dapat kontrol yang lebih sedikit atas urutannya.",
    },
    {
      title: "Atau gunakan aplikasi PDF Editor",
      body: "Aplikasi ini menggabungkan foto galeri menjadi PDF, memindai halaman baru dengan deteksi tepi otomatis, dan membiarkan Anda menandatangani, semuanya offline, semuanya di perangkat.",
    },
  ],
  tips: [
    "Cara berbasis browser berperilaku identik di Samsung, Pixel, Xiaomi, dan yang lain, jadi ini yang perlu diingat jika Anda berpindah HP atau membantu orang lain dengan merek berbeda.",
    "Trik Cetak ke PDF bagus untuk keadaan darurat tapi memberi sedikit kontrol atas urutan halaman, gunakan alat Gambar ke PDF saat urutan itu penting.",
    "Potong foto di galeri Anda terlebih dahulu. Halaman diatur ukurannya sesuai gambar, jadi merapikan menghasilkan dokumen yang lebih bersih.",
    "Sebagian besar kamera Android menyimpan JPG, tapi beberapa menyimpan HEIF/HEIC dalam mode efisiensi tinggi. Jika sebuah foto tidak mau dimuat, periksa pengaturan kamera Anda atau gunakan aplikasi PDF Editor.",
    "Galeri besar berisi foto beresolusi tinggi menghasilkan PDF yang besar. Kompres hasilnya sebelum dikirim lewat email.",
  ],
  mobileNote:
    "Pekerjaan dokumen Android terjadi di HP, dan aplikasi PDF Editor menjaganya tetap di sana: gabungkan foto galeri, pindai kertas dengan deteksi tepi, tanda tangani, dan bagikan, offline dan tanpa mengunggah apa pun. Untuk tugas yang berulang, ini lebih cepat daripada lewat browser setiap kali.",
  faq: [
    {
      q: "Apakah metode browser berfungsi di setiap HP Android?",
      a: "Ya. Karena alatnya berjalan di browser, perilakunya sama di Samsung, Pixel, Xiaomi, dan perangkat Android lainnya, berbeda dari fitur bawaan yang bervariasi menurut merek.",
    },
    {
      q: "Apa bedanya Cetak ke PDF dengan alat ini?",
      a: "Cetak ke PDF bawaan di menu bagikan Android dan tidak butuh alat apa pun, tapi memberi sedikit kontrol atas urutan halaman. Alat Gambar ke PDF memungkinkan Anda mengurutkan halaman dengan presisi, yang penting untuk dokumen multihalaman.",
    },
    {
      q: "Apakah foto saya diunggah ke suatu tempat?",
      a: "Tidak. Alat Gambar ke PDF dan aplikasi PDF Editor sama-sama memproses foto di perangkat Anda. Gambar Anda tetap privat.",
    },
    {
      q: "Foto saya tidak mau dimuat ke alatnya, kenapa?",
      a: "Beberapa HP Android menyimpan HEIF/HEIC dalam mode efisiensi tinggi, yang mungkin tidak dibaca alat berbasis browser. Ubah kamera Anda ke JPG standar, atau gunakan aplikasi PDF Editor.",
    },
    {
      q: "Bisakah saya membuat PDF-nya dapat dicari?",
      a: "Foto biasa tidak punya lapisan teks. Untuk mendapatkan teks yang dapat dicari, pindai dokumennya dengan pengenalan teks aplikasi PDF Editor alih-alih sekadar memotretnya.",
    },
  ],
  related: [
    { label: "Gambar ke PDF — konversi foto di browser Anda", path: "/image-to-pdf" },
    { label: "Pindai ke PDF — tangkap kertas dengan kamera Anda", path: "/scan-to-pdf" },
    { label: "Cara mengonversi foto ke PDF di iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
    { label: "Cara mengonversi JPG ke PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "Konverter PDF", path: "/pdf-converter" },
};

export default content;
