import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-android",
  h1: "Cara Mengedit PDF di Android (Panduan 2026)",
  description:
    "Edit PDF di Android: ubah teks, sisipkan halaman, dan tanda tangani dokumen. Instruksi langkah demi langkah yang jelas menggunakan aplikasi PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Android sebenarnya cukup baik menangani PDF dari sononya, tapi hanya untuk melihat isinya. Begitu Anda perlu memperbaiki salah ketik, mengganti gambar, atau mengurutkan ulang halaman, penampil bawaan langsung mentok, dan solusi yang biasa dilakukan adalah mengunggah file ke sebuah situs. Ada opsi yang lebih cepat: editor native yang berjalan langsung di HP Anda.",
    "Panduan ini menggunakan aplikasi PDF Editor di Android. Alur yang sama berlaku di tablet dan Chromebook yang menjalankan runtime Android. Anda memerlukan Android 9 atau lebih baru. Hampir semua langkahnya identik dengan alur di iPhone, tapi Storage Access Framework Android mengubah cara Anda mengimpor dan menyimpan file.",
    "Setiap langkah menunjukkan di mana harus mengetuk, termasuk perbedaan kecil antara HP dan tablet. Di bagian yang Android berbeda dari iOS, seperti pemilih file, integrasi Drive, tombol kembali, kami akan menandainya.",
  ],
  steps: [
    {
      title: "Pasang PDF Editor dari Google Play",
      body: "Cari \"PDF Editor\" dan pilih yang diterbitkan oleh hrhelperg. Pasang lalu buka. Tidak perlu akun.",
    },
    {
      title: "Buka PDF",
      body: "Ketuk tombol + di layar utama. Dialog Storage Access Framework Android akan muncul, pilih PDF dari File, Google Drive, OneDrive, Dropbox, atau penyedia cloud lain yang tersambung. Anda juga bisa mengetuk PDF di dalam Gmail atau aplikasi lain dan memilih PDF Editor sebagai pembukanya.",
    },
    {
      title: "Edit teks",
      body: "Ketuk sebuah paragraf. Muncul kotak edit berwarna biru. Ketik untuk mengganti atau menyisipkan teks. Aplikasi ini mempertahankan font dan warna yang ada sehingga tata letak tidak berantakan.",
    },
    {
      title: "Ganti gambar",
      body: "Ketuk sebuah gambar untuk menyorotnya. Ketuk ikon tukar dan pilih penggantinya dari galeri atau file Anda. Seret sudutnya untuk mengubah ukuran tanpa mengubah rasio aspek.",
    },
    {
      title: "Sisipkan halaman baru",
      body: "Ketuk ikon halaman untuk melihat miniatur. Gunakan tombol + di antara miniatur untuk menyisipkan halaman kosong atau mengimpor gambar sebagai halaman baru.",
    },
    {
      title: "Isi kolom formulir",
      body: "PDF dengan kolom interaktif otomatis tersorot. Ketuk sebuah kolom, ketik, lalu ketuk \"Selesai\". Keyboard menyesuaikan dengan jenis kolomnya (teks, angka, tanggal).",
    },
    {
      title: "Tanda tangani dokumen",
      body: "Ketuk alat Tanda Tangan, gambar dengan jari atau stylus, lalu letakkan tanda tangannya. Simpan untuk dipakai lagi nanti, Anda tidak perlu menggambarnya ulang.",
    },
    {
      title: "Simpan sebagai file baru",
      body: "Ketuk \"Selesai\", lalu \"Simpan Sebagai\" untuk menyimpan file asli sekaligus salinan hasil edit. Pemilih file Android memungkinkan Anda menyimpan ke File, Drive, atau penyedia cloud mana pun yang sudah tersambung.",
    },
  ],
  tips: [
    "Di tablet besar, aktifkan mode layar terbagi dan tampilkan dua PDF berdampingan untuk membandingkan dengan cepat.",
    "Jika Anda punya S Pen, ganti input ke \"Pen only\" saat mode edit, penolakan sentuhan telapak tangan jadi jauh lebih baik.",
    "Gunakan nama file yang deskriptif sebelum menyimpan, \"Kontrak-Ditandatangani-2026-05-11.pdf\" jauh lebih berguna dibanding \"Document(1).pdf\" saat Anda mencarinya nanti.",
    "Sematkan PDF Editor di menu bagikan Anda dengan menekan dan menahannya setelah sekali dipakai, aplikasi ini akan muncul di urutan teratas lain kali.",
    "Jika proses edit terasa lambat di perangkat lama, tutup aplikasi lain yang berjalan di latar belakang; rendering PDF lebih lancar dengan RAM yang lega.",
  ],
  mobileNote:
    "Storage Access Framework Android adalah cara yang tepat untuk membuka file, karena memberikan akses permanen tanpa menyalin file ke penyimpanan aplikasi itu sendiri. Artinya hasil edit tersimpan langsung ke Drive atau OneDrive, bukan menjadi duplikat baru.",
  faq: [
    {
      q: "Apakah berfungsi di versi Android yang lebih lama?",
      a: "Secara resmi didukung dari Android 9 ke atas. Perangkat yang lebih lama mungkin masih bisa memasang aplikasinya tapi tidak mendapat fitur terbaru (OCR yang ditingkatkan, filter pindaian).",
    },
    {
      q: "Bisakah saya membuka PDF yang dilindungi kata sandi?",
      a: "Bisa. Masukkan kata sandinya saat diminta. Aplikasi ini menjaga dokumen tetap terenkripsi selama proses edit dan bisa mengenkripsi ulang saat disimpan jika Anda mau.",
    },
    {
      q: "Bagaimana dengan integrasi Google Drive?",
      a: "Buka dan simpan langsung dari Drive lewat pemilih file sistem. Hasil edit yang disimpan ke Drive akan menimpa file aslinya (atau bisa disimpan sebagai file baru, sesuai pilihan Anda).",
    },
    {
      q: "Apakah hasil edit akan tersinkron ke komputer saya?",
      a: "Jika Anda menyimpan ke penyedia cloud (Drive, OneDrive, Dropbox), file hasil edit otomatis tersinkron ke perangkat lain Anda. File yang disimpan hanya secara lokal tetap ada di HP.",
    },
    {
      q: "Apakah bisa dipakai secara offline?",
      a: "Ya. Proses edit sepenuhnya berjalan di perangkat. Sinkronisasi cloud hanya aktif saat Anda menyimpan ke lokasi cloud.",
    },
  ],
  related: [
    { label: "PDF Editor — ikhtisar lengkap", path: "/pdf-editor" },
    {
      label: "Cara mengedit PDF di iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "Cara mengompres PDF", path: "/guides/how-to-compress-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
