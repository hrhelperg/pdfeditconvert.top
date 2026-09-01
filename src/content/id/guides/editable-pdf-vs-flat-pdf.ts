import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-flat-pdf",
  h1: "PDF yang Bisa Diedit atau PDF Berupa Gambar, Apa Sebenarnya Bedanya",
  description:
    "Sebagian PDF punya teks yang bisa dipilih dan struktur yang bisa diedit sungguhan, sebagian lagi hanyalah gambar halaman tanpa lapisan teks di baliknya. Cara mengetahui jenis file yang Anda punya, dan kapan masing-masing tepat digunakan.",
  updated: "2026-05-29",
  intro: [
    "Dua file bisa sama-sama berupa PDF tapi berperilaku sama sekali berbeda. Yang satu memungkinkan Anda memilih teks, menyalin kutipan, mencari kata, dan mengedit isinya. Yang lain terlihat identik di layar tapi pada dasarnya adalah gambar dari sebuah dokumen — teksnya menyatu dengan gambar, bukan sesuatu yang terpisah. Yang pertama adalah PDF yang bisa diedit; yang kedua adalah PDF berupa gambar (kadang disebut PDF hasil pindaian atau PDF gambar).",
    "Mengetahui jenis mana yang Anda punya itu penting karena alat untuk menanganinya berbeda. PDF yang bisa diedit merespons editor PDF, alat konversi, dan pencarian. PDF berupa gambar membutuhkan OCR agar bisa dicari, dan mengeditnya berarti harus OCR-lalu-edit atau mengganti seluruh gambarnya. Mencoba memakai alat PDF-yang-bisa-diedit pada PDF berupa gambar biasanya hanya menghasilkan kekecewaan.",
    "Panduan ini menjelaskan perbedaannya, memandu Anda lewat tes yang bisa memberi tahu dalam dua detik, dan menunjukkan kapan masing-masing jenis adalah pilihan yang tepat. Kadang bentuk gambar itu memang disengaja — kadang hanya kebetulan dari cara file itu dibuat.",
  ],
  steps: [
    {
      title: "Tes dua detik: coba pilih teksnya",
      body: "Buka PDF-nya, klik lalu seret di atas sebagian teks. Jika teksnya terpilih (tersorot, bisa disalin), berarti itu PDF yang bisa diedit. Jika kursor Anda hanya menggambar kotak seleksi tapi tidak ada teks yang tersorot, berarti itu PDF berupa gambar — 'teks'-nya sebenarnya data gambar.",
    },
    {
      title: "PDF yang bisa diedit: teksnya bisa dipilih, dicari, disalin",
      body: "Ekspor langsung dari Word, Pages, Docs, atau alat desain menghasilkan PDF yang bisa diedit. Teksnya adalah data terstruktur di dalam file; pencarian dan salin-tempel berfungsi; editor PDF bisa mengubahnya.",
    },
    {
      title: "PDF berupa gambar: gambar dari sebuah halaman, tanpa teks di baliknya",
      body: "Dokumen hasil pindaian adalah PDF berupa gambar yang paling umum. Teksnya hanya ada sebagai piksel; tidak ada data karakter di baliknya. Pencarian tidak menghasilkan apa-apa; salin-tempel juga tidak menghasilkan apa-apa.",
    },
    {
      title: "OCR mengubah PDF berupa gambar menjadi dapat dicari (tapi tidak sepenuhnya bisa diedit)",
      body: "OCR menganalisis gambar halamannya dan menambahkan lapisan teks di bawah pikselnya. Pencarian mulai berfungsi; salin-tempel menghasilkan teks yang mendekati aslinya. Mengedit tetap membutuhkan penggantian elemen gambar secara manual.",
    },
    {
      title: "Saat bentuk gambar memang disengaja: mengunci, akurasi tampilan sempurna sebagai gambar",
      body: "Sebagian alur kerja sengaja meratakan sebuah PDF menjadi gambar — filenya jadi tidak mudah diedit, tanda tangan dan stempel tidak mengganggu teks di baliknya. PDF ke Gambar lalu Gambar ke PDF menghasilkan kembali salinan berupa gambar itu.",
    },
    {
      title: "Saat versi bisa diedit memang yang diinginkan: semua alur kerja lainnya",
      body: "Untuk berbagi, menandatangani, mengedit, mengarsipkan, memakai ulang untuk keperluan lain — PDF yang bisa diedit adalah pilihan yang tepat. Jangan meratakannya menjadi gambar kecuali Anda memang secara khusus membutuhkannya.",
    },
  ],
  tips: [
    "Jika Anda tidak bisa memilih teks di PDF yang Anda buat sendiri, pengaturan ekspornya menghilangkan lapisan teksnya. Ekspor ulang dengan opsi 'pertahankan teks' diaktifkan.",
    "PDF hasil pindaian dari scanner lama biasanya berupa gambar. Jalankan OCR saat memindai atau dengan alat setelahnya agar tetap berguna dalam jangka panjang.",
    "PDF berupa gambar lebih besar dibanding PDF yang bisa diedit dengan konten yang setara — data gambar memakan lebih banyak ruang daripada data karakter.",
    "Jangan meratakan sebuah PDF hanya untuk 'menguncinya' — pembatasan edit yang tepat bekerja lebih baik dan tetap mempertahankan kemampuan pencarian.",
    "Sebagian PDF 'yang bisa diedit' mengekspor setiap karakter sebagai bentuk kecil, bukan sebagai teks sungguhan. Seleksinya terlihat benar, tapi salin-tempel menghasilkan teks yang tidak masuk akal. Ini adalah kasus terburuk untuk pengeditan.",
  ],
  mobileNote:
    "Di HP, PDF berupa gambar dan PDF yang bisa diedit terlihat identik di penampil biasa. Aplikasi PDF Editor menandai perbedaannya dalam mode pengeditan — Anda bisa melihat file mana yang punya teks sungguhan dan mana yang hanya berupa gambar, lalu mengarahkannya ke OCR atau langsung diedit sesuai kebutuhan.",
  faq: [
    {
      q: "Bagaimana cara mengetahui sekilas jenis mana yang saya punya?",
      a: "Coba pilih teksnya. Jika seleksinya berfungsi dan hasil salinnya berupa teks yang bersih, berarti itu bisa diedit. Jika tidak, berarti itu berupa gambar.",
    },
    {
      q: "Apakah PDF hasil pindaian selalu berupa gambar?",
      a: "Langsung dari scanner-nya, ya. Banyak aplikasi pemindai kini menjalankan OCR secara otomatis dan menghasilkan PDF berupa gambar yang tetap dapat dicari — teksnya tetap tampil sebagai gambar, tapi lapisan yang dapat dicari ditambahkan di baliknya.",
    },
    {
      q: "Bisakah saya mengedit PDF berupa gambar?",
      a: "Hanya dengan memanipulasi gambarnya (memutar, memotong, menambahkan teks tumpukan di atasnya). Pengeditan teks sungguhan membutuhkan OCR terlebih dahulu, dan bahkan setelah itu hasilnya tetap bersifat perkiraan.",
    },
    {
      q: "Kenapa saya menginginkan PDF berupa gambar?",
      a: "Untuk mencegah pengeditan teks, mengunci tanda tangan dan stempel agar tidak bisa dipindahkan, atau untuk mengirim tampilan yang sempurna sebagai gambar. Jarang, tapi kasus penggunaannya nyata.",
    },
    {
      q: "Apakah format file berpengaruh pada jenis yang saya dapatkan?",
      a: "Ya — ekspor langsung dari pengolah kata menghasilkan PDF yang bisa diedit; file yang dipindai lalu disimpan menghasilkan PDF berupa gambar. Sumbernya yang menentukan jenisnya.",
    },
  ],
  related: [
    { label: "PDF Editor — edit teks dan gambar di HP", path: "/pdf-editor" },
    { label: "Kenapa saya tidak bisa mengedit sebuah PDF?", path: "/guides/why-cant-i-edit-a-pdf" },
    { label: "PDF ke Word — pulihkan teks yang bisa diedit", path: "/pdf-to-word" },
    { label: "Kapan menggunakan PDF hasil pindaian", path: "/guides/when-to-use-scanned-pdf" },
  ],
  parentHub: { label: "PDF Editor — edit teks, gambar, dan halaman", path: "/pdf-editor" },
};

export default content;
