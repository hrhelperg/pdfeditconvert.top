import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-iphone",
  h1: "Cara Mengedit PDF di iPhone (Panduan 2026)",
  description:
    "Perbaiki teks, tambahkan gambar, dan urutkan ulang halaman PDF langsung di iPhone. Panduan langkah demi langkah menggunakan aplikasi PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Dulu, mengedit PDF di iPhone berarti mengunggah file ke situs yang belum tentu bisa dipercaya, masuk ke akun di Mac, atau mengambil tangkapan layar bagian yang dibutuhkan lalu menempelkannya kembali sebagai gambar. Di 2026, semua cara itu tidak lagi diperlukan. Dengan aplikasi native yang tepat, Anda bisa mengedit teks, mengganti gambar, mengurutkan ulang halaman, mengisi formulir, dan menandatangani dokumen, semuanya dari HP, dalam waktu kurang dari satu menit.",
    "Panduan ini menunjukkan langkah persis menggunakan aplikasi PDF Editor. Pola yang sama berlaku di iPad dan sebagian besar editor PDF modern lainnya, jadi langkah-langkah ini tetap berguna meski Anda suatu saat berpindah aplikasi. Anda memerlukan iOS 16 atau lebih baru dan aplikasi PDF Editor yang sudah terpasang dari App Store.",
    "Kita akan membahas cara membuka PDF dari sumber mana pun (File, Mail, iCloud Drive, Google Drive), mengedit isinya, dan mengekspor hasilnya. Setiap langkah menjelaskan apa yang harus dilakukan, bukan alasannya, tapi jika sebuah langkah terasa membingungkan di layar, bagian tips di akhir punya solusi cepatnya.",
  ],
  steps: [
    {
      title: "Pasang dan buka PDF Editor",
      body: "Unduh dari App Store, lalu buka aplikasinya. Tidak perlu akun untuk mulai mengedit.",
    },
    {
      title: "Tambahkan PDF-nya",
      body: "Ketuk tombol + di layar utama. Pilih sumbernya, File, iCloud Drive, galeri kamera Anda, atau \"Telusuri\" untuk mencari folder Google Drive / OneDrive. Anda juga bisa membuka PDF apa pun dari Mail atau Safari lalu memilih \"Buka di PDF Editor\" dari menu bagikan.",
    },
    {
      title: "Edit teks langsung di tempat",
      body: "Ketuk sebuah paragraf atau kata. Muncul seleksi berwarna biru. Edit langsung di kotak teks yang tampil. Aplikasi ini mempertahankan font, ukuran, dan warna asli sehingga tata letak tetap utuh.",
    },
    {
      title: "Ganti atau tambahkan gambar",
      body: "Ketuk gambar yang sudah ada untuk menggantinya dari galeri kamera Anda. Atau ketuk alat gambar dan letakkan gambar baru di mana pun di halaman. Seret sudutnya untuk mengubah ukuran.",
    },
    {
      title: "Urutkan ulang, hapus, atau duplikasi halaman",
      body: "Ketuk ikon halaman untuk membuka tampilan grid miniatur. Tekan dan tahan halaman mana pun untuk memindahkannya. Ketuk sebuah miniatur untuk menduplikasi atau menghapusnya.",
    },
    {
      title: "Tanda tangani dokumen",
      body: "Ketuk alat Tanda Tangan, gambar tanda tangan Anda (atau gunakan yang sudah tersimpan), lalu letakkan di tempat yang sesuai. Tanda tangan adalah objek PDF biasa, jadi Anda bisa memindahkan atau mengubah ukurannya setelah diletakkan.",
    },
    {
      title: "Isi kolom formulir",
      body: "Jika PDF punya kolom formulir, ketuk masing-masing untuk mengisinya. Aplikasi ini otomatis mendeteksi jenis kolomnya, teks, kotak centang, atau menu dropdown, dan menampilkan keyboard yang sesuai.",
    },
    {
      title: "Simpan dan bagikan",
      body: "Ketuk \"Selesai\". Pilih \"Simpan\" untuk menimpa file asli atau \"Simpan Sebagai\" untuk menyimpan keduanya. Menu bagikan kemudian memungkinkan Anda mengirim lewat Mail, Pesan, AirDrop, atau aplikasi terpasang apa pun.",
    },
  ],
  tips: [
    "Cubit layar untuk memperbesar tampilan sebelum mengedit teks kecil, ini meningkatkan akurasi secara signifikan.",
    "Ketuk dua kali sebuah kata untuk memilih kata itu saja; ketuk tiga kali untuk memilih seluruh baris.",
    "Gunakan Apple Pencil di iPad untuk hasil tanda tangan yang jauh lebih halus dibanding menggambar dengan jari.",
    "Aktifkan integrasi File di Pengaturan iOS → PDF Editor agar aplikasi ini muncul di setiap menu bagikan.",
    "Tekan dan tahan panah kembali di layar edit untuk mundur beberapa perubahan terakhir jika fitur urungkan saja tidak cukup.",
  ],
  mobileNote:
    "Integrasi File di iOS penting: aktifkan di Pengaturan supaya PDF Editor muncul di setiap menu bagikan aplikasi lain. Setelah itu, mengedit PDF yang Anda terima lewat Mail atau Slack cukup satu ketukan.",
  faq: [
    {
      q: "Bisakah saya mengedit PDF hasil pindaian di iPhone?",
      a: "Anda bisa memberi anotasi, menandatangani, dan mengurutkan ulang halamannya. Untuk mengedit teks sesungguhnya pada halaman hasil pindaian, jalankan OCR terlebih dahulu, aplikasi ini melakukannya dalam beberapa detik.",
    },
    {
      q: "Apakah aplikasinya gratis?",
      a: "Ya, untuk pengeditan sehari-hari. Beberapa fitur lanjutan terbuka dengan upgrade Pro.",
    },
    {
      q: "Apakah kompatibel dengan Apple Pencil?",
      a: "Ya. Apple Pencil berfungsi untuk tanda tangan, catatan bebas, dan sorotan dengan hasil yang jauh lebih baik dibanding input jari.",
    },
    {
      q: "Bisakah saya mengedit PDF yang dilindungi kata sandi?",
      a: "Masukkan kata sandinya saat diminta ketika membuka file. Setelah terbuka, proses edit berjalan normal. Anda bisa menerapkan kembali kata sandi saat menyimpan.",
    },
    {
      q: "Ke mana file hasil edit tersimpan?",
      a: "Di mana pun Anda menyimpannya: File, iCloud Drive, Google Drive, galeri foto, atau langsung ke draf email.",
    },
  ],
  related: [
    { label: "PDF Editor — ikhtisar lengkap", path: "/pdf-editor" },
    {
      label: "Cara mengedit PDF di Android",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Cara tanda tangan PDF di HP Anda", path: "/sign-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
