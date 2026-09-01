import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-editor",
  hero: {
    eyebrow: "Editor PDF",
    h1: "Edit PDF di mana saja, di HP apa pun.",
    highlight: "PDF",
    lead: "Ubah teks, ganti gambar, urutkan ulang halaman, dan tanda tangani dokumen — langsung di iPhone atau Android. PDF Editor mengubah HP menjadi editor dokumen sungguhan, bukan sekadar penampil.",
    primaryCta: { label: "Buka aplikasi", href: SITE.app.appStore },
  },
  problem: {
    heading: "Mengapa mengedit PDF selalu merepotkan",
    paragraphs: [
      "PDF dirancang agar tampilannya identik di mana saja — dan justru itulah yang membuatnya sulit diedit. Sebagian besar aplikasi di HP hanya memungkinkan Anda melihat atau memberi anotasi pada PDF. Begitu Anda perlu memperbaiki salah ketik, mengganti nama, atau memindahkan halaman, Anda diarahkan kembali ke komputer atau diminta mengunggah file ke situs web yang tidak jelas asalnya.",
      "Situs-situs “unggah dan berharap yang terbaik” seperti itu adalah masalah privasi. Mereka menyimpan file Anda selama berjam-jam, sering kali lambat, dan Anda tidak tahu pasti apa yang mereka lakukan dengan kontrak, faktur, atau dokumen identitas yang sensitif. Hasilnya: kebanyakan orang men-screenshot bagian yang ingin diperbaiki, mengeditnya sebagai gambar, lalu mengirimkan lewat email versi yang tampilannya justru lebih buruk daripada aslinya.",
      "Editor yang dibuat khusus untuk HP menyelesaikan semua ini tanpa kompromi. Pengeditan berlangsung di perangkat. Tata letak asli tetap terjaga. Anda bisa mengirim hasilnya lewat email semenit setelah mulai mengedit — tanpa mengunggah apa pun ke server milik orang asing.",
    ],
  },
  features: {
    heading: "Yang benar-benar bisa Anda lakukan",
    items: [
      {
        icon: "Type",
        title: "Edit teks langsung di tempatnya",
        body: "Perbaiki salah ketik, ganti nama, ubah tanggal — tanpa merusak tata letak. Berfungsi pada PDF berbasis teks.",
      },
      {
        icon: "ImagePlus",
        title: "Sisipkan dan ganti gambar",
        body: "Tambahkan logo atau foto baru. Ubah ukuran dan posisinya tanpa keluar dari halaman.",
      },
      {
        icon: "Move",
        title: "Urutkan ulang halaman",
        body: "Seret thumbnail untuk mengurutkan ulang. Hapus halaman, duplikasi, atau sisipkan halaman kosong baru.",
      },
      {
        icon: "Pencil",
        title: "Tanda tangan dan inisial",
        body: "Tambahkan tanda tangan tulisan tangan asli atau tanda tangan yang diketik. Tempatkan di mana saja hanya dengan satu ketukan.",
      },
      {
        icon: "Highlighter",
        title: "Anotasi dan sorotan",
        body: "Sorot, garis bawahi, coret. Tambahkan catatan bebas atau komentar tempel.",
      },
      {
        icon: "FileText",
        title: "Isi formulir",
        body: "Ketuk kolom untuk mengisinya. Simpan formulir yang sudah diisi sebagai PDF baru.",
      },
    ],
  },
  steps: {
    heading: "Cara mengedit PDF dari HP",
    items: [
      {
        title: "Buka aplikasi PDF Editor",
        body: "Jalankan aplikasi dari layar utama. Tidak perlu akun untuk memulai.",
      },
      {
        title: "Pilih PDF yang ingin diedit",
        body: "Impor dari Files, iCloud Drive, Google Drive, atau email Anda. Atau cukup ketuk PDF di mana saja dan pilih PDF Editor sebagai aplikasi pembuka.",
      },
      {
        title: "Ketuk bagian yang ingin diubah",
        body: "Ketuk paragraf untuk mengedit teks, gambar untuk menggantinya, atau thumbnail halaman untuk mengurutkan ulang.",
      },
      {
        title: "Terapkan perubahan Anda",
        body: "Perubahan langsung terjadi di halaman. Cubit layar untuk memperbesar demi presisi yang lebih baik. Urungkan dan ulangi berfungsi seperti biasa.",
      },
      {
        title: "Simpan hasilnya",
        body: "Simpan menimpa file asli, simpan sebagai salinan baru, atau bagikan langsung lewat Mail, AirDrop, atau aplikasi perpesanan apa pun.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Mengedit sambil bepergian",
    body: "Sebagian besar pengeditan PDF terjadi di momen yang paling tidak tepat — lima menit sebelum rapat, di kereta, di sela-sela jam kuliah. Editor yang mengutamakan HP memungkinkan Anda memperbaiki nama yang salah eja di kontrak sambil berjalan ke kantor, atau membubuhkan tanda tangan pada penawaran saat istirahat minum kopi. Tanpa laptop, tanpa komputer meja, tanpa harus menunggu sampai di rumah.",
  },
  faq: [
    {
      q: "Apakah aplikasi PDF Editor gratis?",
      a: "Ya. Fitur pengeditan inti — teks, gambar, pengurutan ulang halaman, tanda tangan, dan ekspor — gratis. Beberapa fitur lanjutan terbuka dengan upgrade ke Pro.",
    },
    {
      q: "Apakah bisa digunakan secara offline?",
      a: "Ya. Pengeditan sepenuhnya berlangsung di perangkat. Anda hanya perlu koneksi internet jika mengambil file dari cloud drive atau membagikannya lewat layanan online.",
    },
    {
      q: "Bisakah saya mengedit PDF hasil pindaian?",
      a: "PDF hasil pindaian pada dasarnya adalah gambar. Anda tetap bisa memberi anotasi, menandatangani, dan mengurutkan ulang halamannya. Untuk mengedit teks yang sebenarnya, diperlukan OCR terlebih dahulu, dan aplikasi bisa menjalankannya pada sebagian besar dokumen.",
    },
    {
      q: "Apakah ada batasan ukuran file?",
      a: "Tidak ada batasan buatan. PDF yang sangat besar (ratusan MB dengan grafis kompleks) mungkin terasa lebih lambat di HP lama, tetapi aplikasi ini dirancang untuk menangani dokumen dunia nyata.",
    },
    {
      q: "Apakah perubahan saya akan merusak tata letak asli?",
      a: "Tidak. Perubahan dilakukan langsung di tempatnya. Font, margin, dan format yang sudah ada tetap utuh pada PDF berbasis teks.",
    },
    {
      q: "Bisakah saya mengekspor ke Word?",
      a: "Ya. Anda bisa mengonversi PDF yang sudah diedit ke Word atau format lain dari aplikasi yang sama.",
    },
  ],
  related: [
    {
      label: "Cara mengedit PDF di iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    {
      label: "Cara mengedit PDF di Android",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Tanda tangani PDF dari HP", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Edit PDF di HP Anda hanya dalam hitungan detik.",
    sub: "Gratis untuk iOS dan Android. Tidak perlu akun untuk memulai.",
  },
};

export default content;
