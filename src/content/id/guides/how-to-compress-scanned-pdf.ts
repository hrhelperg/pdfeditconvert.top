import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-scanned-pdf",
  h1: "Cara Mengompres PDF Hasil Pindaian (Hemat Besar)",
  description:
    "PDF hasil pindaian paling mudah diperkecil dan paling sering jadi masalah ukuran. Cara mengompresnya secara drastis, dan yang terjadi pada teks yang dapat dicari.",
  updated: "2026-05-23",
  intro: [
    "PDF hasil pindaian adalah juara berat di dunia dokumen. Setiap halaman adalah gambar resolusi penuh, jadi sebuah kontrak pendek hasil pindaian bisa lebih berat daripada laporan teks seratus halaman. Sisi baiknya, karena hasil pindaian nyaris seluruhnya data gambar, mereka mengompres jauh lebih drastis daripada jenis PDF lainnya, sering kali 70% atau lebih.",
    "Panduan ini fokus khusus pada mengompres hasil pindaian memakai alat gratis Kompres PDF, yang berjalan di browser Anda tanpa apa pun yang diunggah. Hasil pindaian justru kasus di mana kompresi berbasis browser paling bersinar, dan di mana penghematan ukurannya paling layak didapatkan.",
    "Kita juga akan membahas satu hal yang perlu diperhatikan pada dokumen hasil pindaian, yaitu teks yang dapat dicari, supaya Anda tidak sengaja kehilangan lapisan teks yang sudah Anda susah payah buat.",
  ],
  steps: [
    {
      title: "Buka alat Kompres PDF",
      body: "Buka alat Kompres PDF di browser Anda. Alat ini memproses filenya di perangkat Anda, jadi bahkan kontrak hasil pindaian tetap privat.",
    },
    {
      title: "Tambahkan PDF hasil pindaian Anda",
      body: "Seret hasil pindaiannya ke zona unggah atau klik untuk memilihnya. Alat ini membacanya secara lokal, tidak ada yang diunggah.",
    },
    {
      title: "Pilih tingkat — Anda bisa agak agresif di sini",
      body: "Hasil pindaian mentolerir kompresi kuat dengan baik karena mereka gambar, bukan teks vektor yang tajam. \"Direkomendasikan\" sering sudah cukup; \"Kuat\" masih bisa terlihat cukup terbaca untuk dokumen sehari-hari.",
    },
    {
      title: "Kompres dan periksa keterbacaannya",
      body: "Jalankan dan buka hasilnya. Ujian utama untuk hasil pindaian adalah keterbacaan, bisakah Anda membaca teksnya dengan nyaman? Jika ya pada tingkat yang kuat, ambil penghematan yang lebih besar itu.",
    },
    {
      title: "Perhatikan lapisan teks yang dapat dicari",
      body: "Jika hasil pindaian Anda sudah diproses OCR agar dapat dicari, mengompresnya di browser merender ulang halaman sebagai gambar dan menghapus lapisan itu. Simpan aslinya yang dapat dicari jika Anda membutuhkannya.",
    },
    {
      title: "Simpan salinan yang lebih kecil",
      body: "Simpan dengan nama baru. File hasil pindaian rutin jatuh jauh di bawah batas email dan unggahan dalam sekali proses.",
    },
  ],
  tips: [
    "Hasil pindaian mengompres paling baik dari semua jenis PDF, jika sebuah dokumen besar karena hasil pindaian, Anda beruntung soal ukurannya.",
    "Karena hasil pindaian adalah gambar, Anda biasanya bisa mendorong ke tingkat yang lebih kuat daripada yang berani Anda lakukan pada dokumen yang dirancang khusus dan tetap membuatnya terbaca.",
    "Jika hasil pindaian Anda punya lapisan teks yang dapat dicari dari OCR, kompresi di browser menghapusnya. Jalankan ulang pengenalan teks setelahnya, atau simpan aslinya yang dapat dicari secara terpisah.",
    "Memindai dengan resolusi lebih rendah (200–300 DPI) di sumbernya menghasilkan file yang lebih kecil sejak awal, mengurangi seberapa keras Anda harus mengompres nanti.",
    "Hasil pindaian berwarna lebih besar daripada skala abu-abu. Jika warna tidak menambah apa pun ke dokumennya, memindai dalam skala abu-abu memperkecilnya bahkan sebelum kompresi dimulai.",
  ],
  mobileNote:
    "Hasil pindaian biasanya dimulai di HP, dan aplikasi PDF Editor menjaga seluruh alurnya di perangkat: pindai dengan kualitas yang masuk akal, kompres secara offline, dan, berbeda dari alat browser, jalankan pengenalan teks supaya file yang lebih kecil tetap dapat dicari. Tidak ada unggahan di langkah mana pun.",
  faq: [
    {
      q: "Seberapa kecil PDF hasil pindaian bisa jadi?",
      a: "Sering 70% atau lebih. Hasil pindaian nyaris seluruhnya data gambar, yang memang sasaran utama kompresi, jadi mereka mengecil jauh lebih banyak daripada PDF berbasis teks.",
    },
    {
      q: "Apakah hasil pindaiannya tetap terbaca setelah kompresi kuat?",
      a: "Biasanya ya untuk dokumen sehari-hari, hasil pindaian mentolerir kompresi kuat karena mereka gambar, bukan teks vektor yang tajam. Selalu buka hasilnya dan pastikan keterbacaannya.",
    },
    {
      q: "Apakah kompresi menghapus teks yang dapat dicari dari hasil pindaian?",
      a: "Jika hasil pindaiannya sudah diproses OCR agar dapat dicari, kompresi di browser merender ulang halaman sebagai gambar dan menghapus lapisan itu. Simpan aslinya yang dapat dicari, atau jalankan ulang pengenalan teks setelahnya.",
    },
    {
      q: "Apakah dokumen hasil pindaian saya diunggah?",
      a: "Tidak. Alat Kompres PDF berjalan di browser Anda, di perangkat Anda, jadi hasil pindaian sensitif seperti kontrak dan laporan keuangan tetap privat.",
    },
    {
      q: "Bisakah saya mengompres hasil pindaian yang dilindungi kata sandi?",
      a: "Tidak di browser. Hapus dulu kata sandinya, atau gunakan aplikasi mobile PDF Editor, yang mengompres file terlindungi secara offline.",
    },
  ],
  related: [
    { label: "Kompres PDF — perkecil hasil pindaian di browser Anda", path: "/compress-pdf" },
    { label: "Cara mengonversi dokumen hasil pindaian ke PDF", path: "/guides/how-to-convert-scanned-documents-to-pdf" },
    { label: "Mengapa file PDF saya besar sekali?", path: "/guides/why-is-my-pdf-so-large" },
    { label: "Cara memindai dokumen ke PDF dengan HP", path: "/guides/how-to-scan-documents-to-pdf" },
  ],
  parentHub: { label: "Kompres PDF", path: "/compress-pdf" },
};

export default content;
