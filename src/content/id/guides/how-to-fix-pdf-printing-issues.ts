import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-printing-issues",
  h1: "Cara Mengatasi Masalah Mencetak PDF (Halaman Terpotong, Ukuran Salah, Teks Hilang)",
  description:
    "Saat PDF tercetak terpotong, skalanya salah, atau teksnya hilang, solusinya tergantung gejalanya. Matriks singkat yang mencocokkan tiap masalah cetak dengan pengaturan atau perbaikan yang tepat sebelum mencetak.",
  updated: "2026-05-29",
  intro: [
    "PDF dibuat agar sebuah dokumen terlihat sama di mana saja — termasuk di atas kertas. Jadi saat sebuah PDF tercetak dengan buruk, hampir selalu itu masalah pekerjaan cetaknya, bukan file-nya. Halamannya lebih besar dari kertasnya, printernya menurunkan skala, sebuah font tidak tersemat, tanda keamanan memblokir pencetakan, atau dokumennya diukur untuk wilayah yang bukan tempat Anda berada.",
    "Masing-masing menghasilkan gejala yang berbeda: tepi terpotong, teks yang sangat kecil, halaman kosong, kotak dialog error, atau font pengganti yang aneh. Menganggap semuanya sebagai 'printernya rusak' membuang banyak kertas. Memperlakukannya sebagai masalah spesifik dengan solusi spesifik menghemat waktu.",
    "Panduan ini adalah matriks singkat: apa yang Anda lihat versus penyebab yang paling mungkin dan solusi yang tepat. Sebagian besar solusinya adalah pengaturan di kotak dialog cetak atau langkah cepat sebelum mencetak.",
  ],
  steps: [
    {
      title: "Kalau tepinya terpotong, atur 'Sesuaikan ke area yang bisa dicetak'",
      body: "Banyak PDF diukur sesuai bleed penuh kertasnya; printer tidak bisa mencetak sampai ke tepi. Di kotak dialog cetak, pilih 'Sesuaikan' atau 'Perkecil ke area yang bisa dicetak', bukan 'Ukuran asli'. Halamannya akan sedikit menurun skalanya dan berhenti kehilangan tepinya.",
    },
    {
      title: "Kalau teksnya sangat kecil, periksa ketidakcocokan ukuran kertas",
      body: "Dokumen yang dibuat untuk cetak A3 tapi dicetak ke Letter akan menyusut agar pas. Ekspor ulang sumbernya dengan ukuran kertas target, atau bagi spread-nya menjadi dua halaman dengan Ekstrak Halaman PDF sebelum mencetak ulang.",
    },
    {
      title: "Untuk halaman yang tercetak kosong atau kehilangan teks, sematkan font-nya",
      body: "Dokumen yang memakai font yang tidak dimiliki printer Anda bisa membuat karakternya tidak muncul. Ekspor ulang dengan opsi 'sematkan semua font' diaktifkan di aplikasi sumbernya, atau gunakan cetak-ke-PDF dulu untuk meratakan semuanya menjadi piksel.",
    },
    {
      title: "Untuk error 'dokumen diamankan', periksa izin edit",
      body: "Sebagian PDF diekspor dengan tanda yang memblokir pencetakan. Hanya pembuatnya yang bisa menghapusnya. Kalau itu file Anda, ekspor ulang tanpa pembatasan cetaknya. Kalau bukan, minta salinan yang diizinkan untuk dicetak.",
    },
    {
      title: "Putar halaman sebelum mencetak kalau orientasinya salah",
      body: "Kalau halamannya menyamping atau terbalik, perbaiki dulu sebelum dikirim ke printer dengan Putar PDF. Rotasi dari sisi printer sering memunculkan masalah skala sendiri — memperbaikinya di file lebih bersih.",
    },
    {
      title: "Cetak satu halaman uji dari hasil ekstraksi tunggal",
      body: "Jangan buang dokumen 50 halaman hanya untuk menemukan masalah cetak. Ekstrak Halaman PDF bisa menyimpan satu halaman sebagai PDF tersendiri; cetak itu, pastikan pengaturannya, lalu jalankan pekerjaan cetak penuh.",
    },
  ],
  tips: [
    "Selalu periksa ukuran kertas yang dipilih di kotak dialog cetak cocok dengan ukuran halaman PDF-nya — ketidakcocokan Letter vs A4 menyebabkan sebagian besar gejala 'terlalu kecil'.",
    "Cetak-ke-PDF dulu kalau file-nya bermasalah. Salinan yang sudah diratakan sering tercetak bersih saat aslinya tidak.",
    "Pengaturan buklet dan jahit-pelana lebih sering menyebabkan masalah cetak daripada menyelesaikannya — cetak halaman lurus dulu, lalu susun ulang secara fisik kalau perlu.",
    "Profil warna dari perangkat lunak desain bisa menghasilkan cetakan yang gelap atau kusam di printer rumahan. Mengekspor ulang dalam sRGB biasanya memperbaikinya.",
    "Kalau driver printernya lama, ekspor ulang lewat cetak-ke-PDF bisa menyembunyikan fitur yang tidak bisa ditangani driver itu.",
  ],
  mobileNote:
    "Mencetak dari HP biasanya lewat AirPrint, Google Print, atau aplikasi dari produsen printer, dan masing-masing menangani PDF sedikit berbeda. Aplikasi PDF Editor memungkinkan Anda mengatur ukuran, memutar, dan memangkas halaman sebelum mengirim — memperbaiki PDF-nya, bukan berjuang melawan kotak dialog cetak, cenderung lebih berhasil di mobile.",
  faq: [
    {
      q: "Mengapa PDF saya tercetak lebih kecil daripada di layar?",
      a: "Hampir selalu karena ukuran dokumennya tidak cocok dengan ukuran kertasnya. Printernya menurunkan skala agar pas. Ekspor ulang dengan ukuran kertas target atau gunakan 'Ukuran asli' dengan kertas yang cocok.",
    },
    {
      q: "Mengapa sebagian karakter hilang saat dicetak?",
      a: "Font-nya tidak tersemat dan printer Anda tidak memilikinya. Ekspor ulang dengan font tersemat, atau cetak-ke-PDF dulu untuk meratakan semuanya.",
    },
    {
      q: "Mengapa kotak dialog cetak bilang PDF saya diamankan?",
      a: "File-nya punya tanda izin yang memblokir pencetakan. Hanya pembuatnya yang bisa menghapusnya. Tidak ada cara aman dari sisi penerima untuk melewatinya.",
    },
    {
      q: "Haruskah saya memutar halaman di printer atau di file-nya?",
      a: "Di file-nya. Rotasi dari printer bisa memunculkan masalah skala, sementara Putar PDF menanamkan orientasinya langsung ke dalam dokumen itu sendiri.",
    },
    {
      q: "Bagaimana cara menghindari pemborosan kertas saat mendiagnosis masalah cetak?",
      a: "Ekstrak satu halaman dulu, cetak itu, pastikan pengaturannya, lalu jalankan pekerjaan cetak penuh. Ekstrak Halaman PDF melakukan ini di browser Anda.",
    },
  ],
  related: [
    { label: "Putar PDF — perbaiki orientasi sebelum mencetak", path: "/rotate-pdf" },
    { label: "Ekstrak Halaman PDF — uji cetak satu halaman dulu", path: "/extract-pdf-pages" },
    { label: "Cara mengatasi masalah format PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "Cara mengatasi masalah font PDF", path: "/guides/how-to-fix-pdf-font-issues" },
  ],
  parentHub: { label: "Alat PDF — gratis, berbasis browser", path: "/pdf-tools" },
};

export default content;
