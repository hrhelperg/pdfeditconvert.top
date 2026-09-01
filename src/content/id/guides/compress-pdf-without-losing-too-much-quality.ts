import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "compress-pdf-without-losing-too-much-quality",
  h1: "Mengompres PDF Tanpa Terlalu Banyak Mengurangi Kualitas",
  description:
    "Temukan titik seimbang antara ukuran file dan kualitas. Cara tingkat kompresi menukar detail dengan ukuran, dan cara memilih tingkat paling ringan yang masih bagus hasilnya.",
  updated: "2026-05-23",
  intro: [
    "Ada ketegangan yang jujur di jantung kompresi PDF: file yang lebih kecil berarti detail yang lebih sedikit. Alat mana pun yang menjanjikan penghematan besar tanpa kehilangan kualitas sama sekali sedang menjual sesuatu yang tidak nyata. Tujuan yang realistis bukan \"tanpa kehilangan\", tapi \"tanpa kehilangan yang akan Anda sadari untuk keperluan ini\". Dokumen yang akan dibaca di layar bisa kehilangan detail yang tidak bisa ditoleransi pekerjaan cetak.",
    "Panduan ini soal menemukan titik seimbang itu memakai alat gratis Kompres PDF, yang berjalan di browser Anda tanpa apa pun yang diunggah dan menampilkan penghematan ukuran untuk setiap tingkatnya. Alih-alih langsung memilih kompresi maksimal secara refleks, Anda akan belajar memilih tingkat paling ringan yang hasilnya masih terlihat pas.",
    "Mendapatkan keseimbangan yang benar berarti file yang terkirim dan terunggah tanpa keluhan, dan tetap terlihat seperti yang Anda inginkan saat seseorang benar-benar membukanya.",
  ],
  steps: [
    {
      title: "Tentukan \"cukup baik\" untuk dokumen ini",
      body: "Putuskan bagaimana filenya akan dipakai. Membaca di layar bisa mentolerir kompresi lebih banyak daripada mencetak; sebuah portofolio butuh lebih banyak detail daripada struk pengeluaran. Kegunaannya menentukan batas kualitas minimal Anda.",
    },
    {
      title: "Buka alat Kompres PDF",
      body: "Buka alat Kompres PDF. Alat ini memproses filenya di perangkat Anda dan melaporkan penghematan ukurannya, jadi Anda bisa menilai trade-off-nya secara langsung.",
    },
    {
      title: "Mulai dengan tingkat paling ringan",
      body: "Coba \"Rendah\" atau \"Direkomendasikan\" dulu, bukan \"Kuat\". Naluri untuk memaksimalkan kompresi biasanya berlebihan, Anda sering mencapai target ukuran dengan detail yang masih tersisa.",
    },
    {
      title: "Bandingkan kualitas dan ukurannya",
      body: "Buka hasilnya dan lihat halamannya, terutama gambar dan teks kecil. Catat ukuran yang dihemat. Jika kualitasnya baik dan Anda sudah di bawah batas, selesai.",
    },
    {
      title: "Naikkan tingkatnya hanya jika perlu",
      body: "Masih terlalu besar? Naik satu tingkat lebih kuat dan periksa ulang. Menaikkan secara bertahap menemukan pengaturan paling ringan yang memenuhi target ukuran Anda tanpa menekan kualitas berlebihan.",
    },
    {
      title: "Simpan aslinya",
      body: "Simpan salinan hasil kompresi dengan nama baru. Kompresi adalah proses satu arah, detail yang dihapusnya hilang untuk selamanya, jadi aslinya yang belum tersentuh adalah jaring pengaman Anda.",
    },
  ],
  tips: [
    "Mulai dengan tingkat paling ringan dan naikkan hanya jika harus. Kebanyakan orang mengompres berlebihan dan menurunkan kualitas file lebih dari yang dibutuhkan target ukurannya.",
    "Sesuaikan kualitas dengan tujuannya: dokumen yang hanya untuk layar bisa bertahan dengan kompresi berat yang akan merusak sesuatu yang ditujukan untuk cetak.",
    "Kompresi merasterisasi halaman, jadi hasilnya kehilangan teks yang bisa dipilih. Jika Anda lebih butuh teks yang dapat dicari daripada file yang lebih kecil, itu alasan untuk menyimpan aslinya atau mengompres lebih ringan.",
    "PDF yang penuh teks nyaris tidak mengecil pada tingkat berapa pun, karena sedikit data gambar di dalamnya, jangan menaikkan tingkatnya mengharapkan penghematan yang tidak ada.",
    "Kompres sekali saja. Mengompres file yang sudah dikompres menumpuk kehilangan kualitas tanpa penghematan ukuran yang berarti.",
  ],
  mobileNote:
    "Menilai trade-off ukuran versus kualitas mudah dilakukan di HP dengan aplikasi PDF Editor: kompres offline, pratinjau halamannya, dan atur tingkatnya naik atau turun sebelum dibagikan, tanpa unggah, dan file terlindungi juga didukung.",
  faq: [
    {
      q: "Bisakah saya mengompres PDF tanpa kehilangan kualitas sama sekali?",
      a: "Tidak benar-benar bisa, kompresi yang berguna bersifat lossy. Tujuan yang realistis adalah tidak ada kehilangan yang akan Anda sadari untuk keperluan dokumennya. Tingkat yang lebih ringan mempertahankan lebih banyak detail; pilih yang paling ringan yang hasilnya masih terlihat pas.",
    },
    {
      q: "Tingkat mana yang mempertahankan kualitas paling banyak?",
      a: "\"Rendah\" mempertahankan detail paling banyak, lalu \"Direkomendasikan\", dengan \"Kuat\" yang paling kecil dan paling kasar. Mulai ringan dan naikkan hanya jika masih melebihi target ukuran Anda.",
    },
    {
      q: "Kenapa gambar saya terlihat lembut setelah dikompres?",
      a: "Kompresi gambar membuang detail halus untuk menghemat ruang, dan tingkat yang lebih kuat membuang lebih banyak lagi. Mundur ke tingkat yang lebih ringan jika kelembutannya terlihat mengganggu untuk keperluan Anda.",
    },
    {
      q: "Apakah kompresi menghapus teks yang dapat dicari?",
      a: "Ya, halaman dirender ulang sebagai gambar, yang menghapus lapisan teks yang bisa dipilih. Jika teks yang dapat dicari lebih penting daripada ukuran, simpan aslinya atau kompres lebih ringan.",
    },
    {
      q: "Haruskah saya mengompres sebuah file lebih dari sekali?",
      a: "Tidak. Proses kedua menambah kehilangan kualitas untuk penghematan tambahan yang kecil. Kompres sekali pada tingkat yang tepat dan simpan aslinya.",
    },
  ],
  related: [
    { label: "Kompres PDF — kendalikan tingkatnya", path: "/compress-pdf" },
    { label: "Pengaturan kompresi PDF terbaik", path: "/guides/best-pdf-compression-settings" },
    { label: "Cara mengompres PDF tanpa mengurangi kualitas", path: "/guides/how-to-compress-pdf" },
    { label: "Mengapa file PDF saya besar sekali?", path: "/guides/why-is-my-pdf-so-large" },
  ],
  parentHub: { label: "Kompres PDF", path: "/compress-pdf" },
};

export default content;
