import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-add-watermark-to-pdf",
  h1: "Cara Menambahkan Watermark ke PDF (Gratis)",
  description:
    "Bubuhkan teks seperti DRAFT atau RAHASIA di setiap halaman PDF, di browser. Penjelasan jujur soal apa yang dilindungi watermark dan apa yang tidak.",
  updated: "2026-05-23",
  intro: [
    "Watermark adalah label yang dituliskan di seluruh halaman, DRAFT, RAHASIA, nama perusahaan, atau email penerima. Orang memakainya untuk menandai status (\"ini belum final\"), menandai kepemilikan, atau mencegah penyebaran asal-asalan dengan membubuhkan siapa penerima salinan itu.",
    "Panduan ini memakai alat gratis Tambahkan Watermark ke PDF, yang menaruh watermark teks di setiap halaman langsung di browser Anda, tidak ada yang diunggah. Cepat dan privat, dan berguna persis untuk keperluan penanda di atas.",
    "Sama pentingnya untuk jelas soal apa yang bukan watermark: ini bukan keamanan. Kita akan membahas di mana watermark benar-benar membantu dan di mana Anda justru butuh perlindungan sungguhan, supaya Anda tidak mengandalkannya untuk tugas yang tidak bisa dilakukannya.",
  ],
  steps: [
    {
      title: "Buka alat Tambahkan Watermark ke PDF",
      body: "Buka alat Tambahkan Watermark ke PDF di browser Anda. Alat ini berjalan di perangkat Anda, tanpa unggah, tanpa akun.",
    },
    {
      title: "Tambahkan PDF Anda",
      body: "Seret filenya ke zona unggah atau klik untuk memilihnya. Watermark akan diterapkan ke setiap halaman dokumen.",
    },
    {
      title: "Ketik teks watermark Anda",
      body: "Masukkan label yang Anda inginkan, DRAFT, RAHASIA, nama perusahaan Anda, atau identitas penerima. Buat singkat supaya terbaca bersih di seluruh halaman.",
    },
    {
      title: "Terapkan watermark-nya",
      body: "Jalankan alatnya. Teks Anda dibubuhkan di setiap halaman salinan baru dokumennya.",
    },
    {
      title: "Periksa keterbacaan dari kedua sisi",
      body: "Pastikan watermark-nya cukup terlihat untuk menjalankan fungsinya tapi cukup ringan supaya teks di baliknya tetap terbaca. Watermark yang menutupi konten justru mengalahkan tujuannya sendiri.",
    },
    {
      title: "Unduh salinan berwatermark-nya",
      body: "Simpan hasilnya sebagai file baru supaya Anda tetap punya versi asli yang bersih tanpa tanda untuk arsip Anda sendiri.",
    },
  ],
  tips: [
    "Watermark adalah label visual, bukan perlindungan. Siapa pun bisa mengambil tangkapan layar, mencetak, atau memproses ulang halamannya, perlakukan ini sebagai penanda, bukan kunci.",
    "Gunakan watermark khusus per penerima (nama atau emailnya) pada salinan yang Anda bagikan untuk mencegah diteruskan, orang jadi kurang sembarangan dengan dokumen yang jelas-jelas dibubuhi nama mereka.",
    "Buat teks watermark tetap singkat. Frasa panjang yang melintang di halaman bersaing dengan kontennya dan terlihat berantakan.",
    "Selalu bubuhkan watermark pada salinan, jangan pernah pada file utama Anda. Inti dari semua ini adalah aslinya tetap bersih.",
    "Jika Anda benar-benar perlu mencegah pembukaan, penyalinan, atau pengeditan, itu tugas kata sandi dan enkripsi, lihat panduan melindungi PDF, bukan watermark.",
  ],
  mobileNote:
    "Menandai dokumen sebagai DRAFT atau RAHASIA sebelum mengirimnya dari HP Anda hanya butuh beberapa detik di aplikasi PDF Editor, yang menerapkan watermark secara offline dan membiarkan Anda menandatangani atau melindungi di sesi yang sama, berguna saat sebuah proposal harus keluar sebelum benar-benar final.",
  faq: [
    {
      q: "Apakah watermark melindungi dokumen saya?",
      a: "Tidak. Watermark adalah label yang terlihat, bukan keamanan. Ini menandai status atau kepemilikan tapi tidak mencegah penyalinan, pencetakan, atau pengeditan. Untuk itu, gunakan perlindungan kata sandi dan enkripsi.",
    },
    {
      q: "Apakah watermark-nya akan muncul di setiap halaman?",
      a: "Ya. Alat ini membubuhkan teks Anda di semua halaman dokumen, jadi labelnya konsisten sepanjang isinya.",
    },
    {
      q: "Bisakah watermark-nya dihapus?",
      a: "Orang yang cukup bertekad bisa mengakali watermark yang terlihat mana pun, itulah sebabnya ini pencegah, bukan perlindungan. Simpan aslinya yang tanpa tanda secara terpisah.",
    },
    {
      q: "Apakah PDF saya diunggah?",
      a: "Tidak. Watermark-nya diterapkan di browser Anda, di perangkat Anda, jadi filenya tetap privat.",
    },
    {
      q: "Bisakah saya membubuhkan watermark dengan gambar atau logo?",
      a: "Alat berbasis browser ini menerapkan watermark teks. Untuk overlay gambar atau logo, aplikasi mobile PDF Editor menawarkan lebih banyak pilihan.",
    },
  ],
  related: [
    { label: "Tambahkan Watermark ke PDF — di browser Anda", path: "/add-watermark-to-pdf" },
    { label: "Cara melindungi file PDF dengan kata sandi", path: "/guides/how-to-protect-pdf-file" },
    { label: "Cara menyiapkan PDF sebelum dibagikan", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Keamanan PDF — lindungi dokumen", path: "/pdf-security" },
  ],
  parentHub: { label: "Tambahkan Watermark ke PDF", path: "/add-watermark-to-pdf" },
};

export default content;
