import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-remove-unwanted-pages-from-pdf",
  h1: "Cara Menghapus Halaman yang Tidak Diinginkan dari PDF",
  description:
    "Buang halaman kosong, halaman sampul, atau bagian yang tidak relevan dari PDF di browser dengan hanya menyimpan halaman yang Anda mau. File bersih, proses tetap privat.",
  updated: "2026-05-23",
  intro: [
    "Banyak PDF datang dengan halaman yang tidak Anda inginkan: halaman sampul faks, halaman kosong yang disisipkan pemindai, lampiran syarat dan ketentuan yang tidak diminta siapa pun, atau halaman duplikat dari penggabungan yang asal-asalan. Mengirim dokumen dengan sampah semacam itu masih menempel terlihat ceroboh dan, kadang, membocorkan informasi yang sebenarnya tidak ingin Anda bagikan.",
    "Cara paling bersih menghapus halaman di browser adalah menyimpan halaman yang Anda inginkan. Panduan ini memakai alat gratis Ekstrak Halaman PDF: alih-alih menghapus halaman yang tidak diinginkan satu per satu, Anda mendaftarkan halaman yang ingin disimpan, dan semua yang lain begitu saja tidak disertakan di file barunya. Alat ini berjalan sepenuhnya di perangkat Anda, tidak ada yang diunggah.",
    "Hasilnya adalah PDF yang rapi hanya berisi halaman yang seharusnya ada, dan aslinya tetap utuh kalau-kalau Anda salah nomor halaman.",
  ],
  steps: [
    {
      title: "Kenali halaman yang ingin dihapus",
      body: "Buka PDF-nya dan catat halaman mana yang tidak diinginkan, halaman 2 yang kosong, halaman sampulnya, duplikat di akhir. Lalu tentukan halaman mana yang ingin Anda simpan.",
    },
    {
      title: "Buka alat Ekstrak Halaman PDF",
      body: "Buka alat Ekstrak Halaman PDF di browser Anda. Alat ini berjalan di perangkat Anda tanpa unggah atau akun.",
    },
    {
      title: "Tambahkan PDF Anda",
      body: "Seret filenya ke zona unggah atau klik untuk memilihnya. Alat ini memuat jumlah halamannya agar Anda bisa presisi.",
    },
    {
      title: "Daftarkan halaman yang ingin Anda simpan",
      body: "Masukkan halaman dan rentang yang ingin disimpan, misalnya 1, 3–7, 9. Halaman yang tidak diinginkan tidak didaftarkan, jadi tidak muncul di hasilnya.",
    },
    {
      title: "Buat PDF yang sudah dirapikan",
      body: "Jalankan ekstraksinya. Alat ini membangun file baru yang hanya berisi halaman yang Anda simpan, sesuai urutan.",
    },
    {
      title: "Periksa dan simpan",
      body: "Buka PDF barunya, pastikan halaman yang tidak diinginkan sudah hilang dan tidak ada yang penting ikut terbuang, lalu simpan dengan nama yang jelas.",
    },
  ],
  tips: [
    "Menghapus halaman dengan menyimpan sisanya adalah metode browser yang bisa diandalkan, Anda mendeskripsikan apa yang Anda inginkan, bukan apa yang harus dihapus, sehingga menghindari salah hitung satu angka.",
    "Waspadai halaman kosong dari pemindai. Pengumpan dokumen sering menyisipkan halaman kosong di antara dokumen asli dua sisi; itu halaman yang paling gampang lupa dibuang.",
    "Menghapus halaman juga langkah privasi. Catatan internal, harga yang tidak Anda maksudkan untuk dibagikan, atau detail penerima sebelumnya bisa tersembunyi di halaman yang tidak perlu Anda kirim.",
    "Verifikasi nomor halaman berdasarkan dokumennya sendiri. Halaman sampul bisa menggeser hitungannya sehingga \"halaman 5\" di kepala Anda ternyata halaman 6 di filenya.",
    "Simpan aslinya. Jika tidak sengaja Anda membuang halaman yang sebenarnya dibutuhkan, sumber yang belum tersentuh ada di sana untuk diulang.",
  ],
  mobileNote:
    "Merapikan halaman nyasar sebelum meneruskan dokumen dari HP Anda hanya butuh beberapa ketukan di aplikasi PDF Editor, yang menghapus halaman secara langsung dan bekerja offline, jadi halaman sampul atau halaman kosong tidak pernah ikut masuk ke salinan yang Anda kirim.",
  faq: [
    {
      q: "Bagaimana cara menghapus halaman memakai alat browser?",
      a: "Simpan halaman yang Anda inginkan dengan alat Ekstrak Halaman PDF. Dengan hanya mendaftarkan halaman yang disimpan, yang tidak diinginkan begitu saja tidak disertakan di file barunya, cara yang bersih untuk menghapus halaman tanpa langkah hapus.",
    },
    {
      q: "Apakah file asli saya akan berubah?",
      a: "Tidak. Alat ini membuat PDF baru dan membiarkan sumbernya tidak tersentuh, jadi kesalahan mudah dibatalkan dengan memulai lagi.",
    },
    {
      q: "Apakah filenya diunggah ke suatu tempat?",
      a: "Tidak. Semuanya berjalan di browser Anda, di perangkat Anda, yang penting saat halaman yang Anda hapus berisi informasi sensitif.",
    },
    {
      q: "Bisakah saya menghapus halaman yang tidak berurutan?",
      a: "Bisa. Simpan campuran halaman tersendiri dan rentang, seperti 1, 4, 8–10, dan setiap halaman yang tidak Anda daftarkan akan terbuang.",
    },
    {
      q: "Bagaimana kalau saya lebih suka menghapus halaman secara langsung?",
      a: "Aplikasi mobile PDF Editor membiarkan Anda mengetuk dan menghapus halaman tertentu, yang bagi sebagian orang terasa lebih intuitif dibanding pendekatan simpan-apa-yang-diinginkan.",
    },
  ],
  related: [
    { label: "Ekstrak Halaman PDF — simpan hanya yang Anda mau", path: "/extract-pdf-pages" },
    { label: "Bagi PDF — pecah file berdasarkan rentang", path: "/split-pdf" },
    { label: "Cara mengekstrak halaman dari PDF", path: "/guides/how-to-extract-pages-from-pdf" },
    { label: "Cara merapikan file PDF", path: "/guides/how-to-organize-pdf-files" },
  ],
  parentHub: { label: "Ekstrak Halaman PDF", path: "/extract-pdf-pages" },
};

export default content;
