import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-pdf-file",
  h1: "Cara Melindungi File PDF dengan Kata Sandi",
  description:
    "Tambahkan perlindungan kata sandi dan enkripsi ke PDF di HP atau komputer. Panduan praktis menggunakan aplikasi PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Banyak dokumen yang seharusnya tidak beredar sebagai PDF biasa: slip gaji, kontrak yang sudah ditandatangani, hasil pindaian kartu identitas, salinan NDA, rekam medis, laporan keuangan. Kata sandi dan enkripsi yang tepat mengubah file menjadi sesuatu yang hanya bisa dibuka oleh penerima yang dituju, bahkan jika emailnya diteruskan, dicegat, atau tersimpan selamanya di kotak masuk perusahaan.",
    "Panduan ini membahas cara menambahkan perlindungan kata sandi ke PDF memakai aplikasi PDF Editor di iPhone atau Android. Kita juga membahas apa yang harus dihindari: kata sandi lemah, cipher enkripsi lama, dan kesalahan umum membagikan kata sandi lewat saluran yang sama dengan dokumennya.",
    "Di akhir panduan, Anda akan punya alur perlindungan yang bisa diulang untuk diterapkan pada dokumen sensitif dalam waktu kurang dari satu menit, dengan enkripsi AES-256 yang kuat dan diterima oleh kebijakan keamanan perusahaan.",
  ],
  steps: [
    {
      title: "Buka PDF yang ingin Anda lindungi",
      body: "Tambahkan dokumen ke PDF Editor dari File, iCloud Drive, Google Drive, atau aplikasi berbagi apa pun. Seluruh alur ini berjalan secara lokal, file Anda tidak pernah meninggalkan perangkat.",
    },
    {
      title: "Ketuk \"Lindungi\" di menu alat",
      body: "Temukan di bagian alat dokumen. Pilih \"Lindungi dengan kata sandi\" untuk mewajibkan kata sandi saat file dibuka, atau \"Batasi izin\" untuk akses hanya-lihat.",
    },
    {
      title: "Pilih kata sandi yang kuat",
      body: "Minimal 12 karakter, campuran huruf, angka, dan simbol. Hindari kata umum dan detail pribadi (tanggal lahir, nama). Buat lewat pengelola kata sandi Anda jika punya, itu langkah yang tepat.",
    },
    {
      title: "Konfirmasi kata sandinya",
      body: "Masukkan ulang untuk menghindari salah ketik. Setelah file terenkripsi, tidak ada cara memulihkannya jika Anda salah mengetik.",
    },
    {
      title: "Pilih pembatasan (opsional)",
      body: "Izinkan melihat tapi blokir pencetakan, penyalinan teks, atau ekstraksi halaman. Berguna saat penerima perlu membaca dokumen tapi Anda tidak ingin mereka menyebarkan sebagian isinya.",
    },
    {
      title: "Simpan sebagai file baru",
      body: "Simpan versi asli yang belum dilindungi di tempat yang aman, jika suatu saat Anda lupa kata sandinya, Anda masih punya aksesnya. Simpan salinan yang dilindungi dengan nama yang jelas berbeda.",
    },
    {
      title: "Bagikan kata sandinya lewat saluran terpisah",
      body: "Kirim PDF terenkripsi lewat email; sampaikan kata sandinya lewat pesan teks atau telepon. Jangan pernah menaruh keduanya di email yang sama, jika akun email tersebut diretas, keduanya bocor sekaligus. Kebiasaan kecil yang mencegah sebagian besar insiden di dunia nyata.",
    },
  ],
  tips: [
    "AES-256 adalah enkripsi yang tepat, aplikasi ini memakainya secara default. Jika sebuah alat menawarkan enkripsi \"kompatibel\" atau \"legacy\", biasanya itu sudah bisa dibobol; hindari.",
    "Jangan pakai kata sandi yang sama di banyak dokumen. Jika satu bocor, Anda tidak ingin efek dominonya.",
    "Jika penerimanya bukan orang yang paham teknologi, beri instruksi sederhana: \"Anda butuh kata sandi ini untuk membuka file: XYZ\" sudah cukup.",
    "Gunakan pengelola kata sandi untuk membagikan kata sandi dengan aman jika memungkinkan, sebagian besar punya fitur \"bagikan\" yang tidak mengharuskan kedua pihak punya akun.",
    "Untuk file yang sangat sensitif (hukum, medis, keuangan), pertimbangkan tautan berbagi aman dari 1Password atau Bitwarden dibanding mengirim kata sandi lewat pesan teks.",
  ],
  mobileNote:
    "Melindungi PDF berjalan sepenuhnya di perangkat. Bahkan dalam mode pesawat, Anda bisa mengunci sebuah kontrak sebelum mengirimnya, tepat saat Anda kembali terhubung. Ini penting bagi orang yang bepergian dan menangani dokumen sensitif dari lobi hotel atau bandara, perlindungannya terjadi secara lokal, dan Anda hanya butuh koneksi saat benar-benar mengirim.",
  faq: [
    {
      q: "Bagaimana jika saya lupa kata sandinya?",
      a: "Tidak ada jalan pintas. Enkripsi yang kuat berarti tidak ada pemulihan yang mungkin tanpa kata sandinya. Selalu simpan kata sandi di pengelola kata sandi, bukan hanya di ingatan.",
    },
    {
      q: "Apakah kata sandi akan memperlambat pembukaan file?",
      a: "Tidak ada jeda yang terasa. Dekripsi terjadi sekali saat dibuka dan hanya butuh milidetik bahkan di perangkat lama.",
    },
    {
      q: "Bisakah saya menghapus kata sandinya nanti?",
      a: "Bisa, jika Anda tahu kata sandinya. Buka PDF yang dilindungi, masukkan kata sandinya, lalu gunakan \"Hapus perlindungan\" di menu \"Lindungi\".",
    },
    {
      q: "Apakah kata sandinya benar-benar aman, atau ini cuma pertunjukan?",
      a: "Keamanan sungguhan. AES-256 dengan kata sandi yang kuat adalah enkripsi yang sama dipakai sistem perusahaan, pengelola kata sandi, dan banyak aplikasi perbankan. Mata rantai terlemah selalu kata sandinya sendiri, pilih yang kuat.",
    },
    {
      q: "Bagaimana dengan penyensoran (redaction)?",
      a: "Penyensoran berbeda dari perlindungan kata sandi. Penyensoran menghapus konten secara permanen (seperti menghitamkan sebuah nama); perlindungan kata sandi menjaga kontennya tetap ada tapi membutuhkan autentikasi untuk melihatnya. Untuk dokumen sensitif, Anda mungkin membutuhkan keduanya, sensor apa yang seharusnya tidak ada di file, lalu lindungi dengan kata sandi sisanya.",
    },
  ],
  related: [
    { label: "Keamanan PDF — ikhtisar lengkap", path: "/pdf-security" },
    { label: "Tanda tangani PDF sebelum menguncinya", path: "/sign-pdf" },
    { label: "Alur kerja PDF untuk Bisnis", path: "/pdf-for-business" },

  ],
  parentHub: { label: "Keamanan PDF", path: "/pdf-security" },
};

export default content;
