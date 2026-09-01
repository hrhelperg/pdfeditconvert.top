import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-submit-homework-as-pdf",
  h1: "Cara Mengumpulkan Tugas sebagai PDF (Tanpa Drama Portal)",
  description:
    "Portal sekolah menolak tugas karena alasan yang bisa ditebak: ukuran file, jumlah halaman, format. Jalan paling sederhana dari tugas selesai sampai unggahan PDF yang diterima.",
  updated: "2026-05-29",
  intro: [
    "Dua menit sebelum tenggat adalah waktu yang paling buruk untuk baru menyadari bahwa portal sekolah menolak tugas Anda. Pesan errornya biasanya umum — 'file tidak valid', 'unggahan gagal', 'ukuran terlalu besar' — dan penyebab sebenarnya biasanya salah satu dari empat hal yang bisa ditebak: ukuran file melebihi batas, formatnya tidak sesuai yang diharapkan portal, jumlah halamannya melebihi batas, atau hasil jepretan dari HP Anda sebenarnya belum benar-benar berupa PDF.",
    "Solusinya singkat dalam setiap kasus, dan bisa dilakukan dari HP atau laptop di tab browser tanpa mengunggah apa pun ke pihak ketiga. Triknya adalah mengetahui persis apa yang diharapkan portal, lalu menghasilkan file yang tepat seperti itu sejak percobaan pertama.",
    "Panduan ini menelusuri jalur dari tugas yang sudah selesai sampai menjadi PDF yang diterima — termasuk cara yang tepat menangani hasil pindaian tulisan tangan, kumpulan soal, dan kiriman format campuran seperti 'satu dokumen Word ditambah tiga halaman tulisan tangan'.",
  ],
  steps: [
    {
      title: "Pastikan syarat sebenarnya dari portal",
      body: "Sebagian besar portal kelas mencantumkan batasnya, meski sering luput dari perhatian — biasanya 5–25 MB, kadang jumlah halaman maksimum, sesekali khusus format PDF/A. Periksa sebelum mengunggah, bukan setelah ditolak.",
    },
    {
      title: "Konversikan semua bagian ke PDF terlebih dahulu",
      body: "Dokumen Word → Word ke PDF. Halaman tulisan tangan → Pindai ke PDF di HP Anda. Tangkapan layar atau foto papan tulis → Gambar ke PDF. Semuanya menjadi PDF sebelum langkah lainnya dilakukan.",
    },
    {
      title: "Gabungkan menjadi satu file sesuai urutan pengumpulan",
      body: "Gabungkan PDF menyatukan pekerjaan yang diketik, pekerjaan hasil pindaian, dan anotasi apa pun menjadi satu file yang tersusun rapi. Penguji lebih menyukai satu file dibanding tiga file terpisah.",
    },
    {
      title: "Periksa orientasi dan urutan",
      body: "Gunakan Urutkan Ulang Halaman PDF jika penggabungan membuat urutannya kacau. Gunakan Putar PDF jika ada hasil pindaian yang miring. Penguji tidak seharusnya perlu memutar layar secara manual untuk membaca pekerjaan Anda.",
    },
    {
      title: "Kompres agar sesuai batas portal",
      body: "Kompres PDF di browser Anda mengecilkan ukuran file. Hasil pindaian yang berat menyusut drastis; konten yang diketik nyaris tidak berubah. Usahakan berada di bawah batas portal dengan sedikit ruang cadangan.",
    },
    {
      title: "Beri nama file sesuai yang diharapkan kelas",
      body: "Banyak kelas menetapkan konvensi penamaan tertentu: NamaBelakang_NamaDepan_Tugas3.pdf. Ikuti persis seperti itu. Nama yang salah bisa mengurangi nilai atau membuat pengurutan menjadi kacau.",
    },
  ],
  tips: [
    "Jangan mengumpulkan dokumen Word ke portal yang menerima PDF. Tampilan Word bisa berbeda di komputer penguji; PDF mengunci tampilannya.",
    "Hasil pindaian tulisan tangan sebaiknya hitam-putih atau skala abu-abu, bukan berwarna. Lebih kecil, lebih tajam, dan lebih mudah dibaca.",
    "Kompres secara agresif pada hasil pindaian yang berat, bukan pada pekerjaan yang diketik. Halaman yang diketik tidak banyak mengecil saat dikompres; hasil pindaian mengecil jauh lebih banyak.",
    "Coba unggah versi draf lebih dulu untuk memastikan portal menerima file Anda sebelum tenggat tiba.",
    "Simpan juga file yang dikumpulkan itu di perangkat Anda. Salinan di portal tidak selalu bisa diambil kembali nanti, dan Anda mungkin perlu merujuk kembali ke apa yang sudah Anda kumpulkan.",
  ],
  mobileNote:
    "Mengumpulkan tugas hanya lewat HP kini sudah biasa. Aplikasi PDF Editor menangani seluruh rangkaian ini di HP — memindai halaman tulisan tangan, menggabungkan dengan pekerjaan yang diketik, mengompres, memberi nama, siap diunggah — tanpa perlu berpindah ke laptop.",
  faq: [
    {
      q: "Berapa ukuran yang biasanya diizinkan portal sekolah?",
      a: "Umumnya 5–25 MB. Sebagian portal sekolah dasar dan menengah membatasi hingga 2 MB. Portal kampus biasanya lebih longgar. Periksa ketentuan spesifik dari kelas Anda.",
    },
    {
      q: "Bisakah saya mengumpulkan file Word, bukan PDF?",
      a: "Hanya jika portal secara eksplisit menerimanya. Sebagian besar meminta PDF secara khusus untuk mengunci format; mengumpulkan Word bisa mengurangi nilai atau otomatis ditolak.",
    },
    {
      q: "Apakah saya perlu menggabungkan semuanya menjadi satu file?",
      a: "Ya, kecuali portal mendukung banyak unggahan sekaligus. Penguji lebih menyukai satu file; banyak portal pun sebenarnya hanya menerima satu file saja.",
    },
    {
      q: "Apa alasan penolakan yang paling umum?",
      a: "Ukuran file. Hasil pindaian dengan cepat membuat file melewati batas portal. Kompres sebelum mengumpulkan dan sebagian besar penolakan itu akan hilang.",
    },
    {
      q: "Bisakah saya mengunggah dari HP?",
      a: "Bisa. Sebagian besar portal sekolah modern berfungsi di browser HP dan menerima PDF dari menu bagikan. Alat-alat di HP mencakup seluruh rangkaian prosesnya.",
    },
  ],
  related: [
    { label: "PDF untuk Pelajar — catatan dan panduan belajar", path: "/pdf-for-students" },
    { label: "Pindai ke PDF — ambil halaman tulisan tangan", path: "/scan-to-pdf" },
    { label: "Cara mengompres PDF untuk portal sekolah", path: "/guides/how-to-compress-pdf-for-school-portals" },
    { label: "Cara memindai catatan tulisan tangan ke PDF", path: "/guides/how-to-scan-notes-to-pdf" },
  ],
  parentHub: { label: "PDF untuk Pelajar — catatan, sorotan, panduan belajar", path: "/pdf-for-students" },
};

export default content;
