import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-security",
  hero: {
    eyebrow: "Keamanan PDF",
    h1: "Lindungi PDF sensitif dengan cara yang benar.",
    highlight: "cara yang benar",
    lead: "Kata sandi, enkripsi AES-256, redaksi, dan pembatasan penggunaan — untuk kontrak, slip gaji, dan hasil pindaian dokumen identitas. Jenis perlindungan yang memang layak didapatkan dokumen sensitif.",
    primaryCta: { label: "Buka aplikasi", href: SITE.app.appStore },
  },
  problem: {
    heading: "Kenapa kebanyakan PDF “terproteksi” sebenarnya tidak",
    paragraphs: [
      "Sangat umum terjadi orang membagikan hasil pindaian paspor, kontrak yang sudah ditandatangani, dan slip gaji sebagai PDF biasa — lewat email, aplikasi perpesanan, atau sebagai lampiran formulir. Jika akun email atau riwayat pesan itu diretas, setiap dokumen tersebut ikut terekspos.",
      "Sebagian pengguna menambahkan “proteksi” yang sebenarnya hanya kata sandi pembuka yang dibuat oleh alat online gratis. Itu lebih baik daripada tidak sama sekali, tetapi kata sandinya sering lemah, enkripsinya kadang masih memakai cipher 40-bit yang usang, dan alat itu menyimpan file Anda cukup lama sehingga jadi risiko tersendiri.",
      "Keamanan PDF yang sesungguhnya berarti enkripsi kuat (AES-256), kata sandi yang kuat, dan — bila perlu — memisahkan izin edit/cetak dari akses buka file. Prosesnya juga sebaiknya berlangsung di perangkat, karena begitu Anda mengunggah dokumen sensitif ke alat web, Anda sudah kalah dalam perkara privasi.",
    ],
  },
  features: {
    heading: "Alat keamanan yang sesuai dengan ancamannya",
    items: [
      {
        icon: "Lock",
        title: "Proteksi kata sandi",
        body: "Tetapkan kata sandi untuk membuka dokumen. PDF tidak bisa dilihat tanpa kata sandi tersebut.",
      },
      {
        icon: "ShieldCheck",
        title: "Enkripsi AES-256",
        body: "Enkripsi modern yang kuat, standar yang dipakai sistem-sistem enterprise.",
      },
      {
        icon: "Printer",
        title: "Batasi salin dan cetak",
        body: "Izinkan melihat tetapi blokir penyalinan teks, pencetakan, atau ekstraksi halaman.",
      },
      {
        icon: "EyeOff",
        title: "Redaksi",
        body: "Hitamkan nama, nomor rekening, atau tanda tangan secara permanen sebelum dibagikan.",
      },
      {
        icon: "Stamp",
        title: "Watermark",
        body: "Tambahkan watermark “rahasia” atau khusus penerima tertentu untuk mencegah dokumen diteruskan.",
      },
      {
        icon: "Link",
        title: "Tips berbagi kata sandi",
        body: "Panduan bawaan tentang cara membagikan kata sandi lewat kanal yang terpisah dari dokumen itu sendiri.",
      },
    ],
  },
  steps: {
    heading: "Cara melindungi PDF",
    items: [
      {
        title: "Buka PDF",
        body: "Impor dokumen ke PDF Editor dari Files atau cloud drive mana pun.",
      },
      {
        title: "Ketuk Protect",
        body: "Temukan di menu alat dokumen. Pilih tingkat perlindungan yang Anda butuhkan.",
      },
      {
        title: "Tetapkan kata sandi",
        body: "Gunakan kata sandi yang kuat — minimal 12 karakter, campuran huruf, angka, dan simbol.",
      },
      {
        title: "(Opsional) Pilih pembatasan",
        body: "Izinkan atau blokir pencetakan, penyalinan, dan pengeditan. Berguna untuk dokumen yang dibagikan tetapi hanya boleh dibaca.",
      },
      {
        title: "Simpan salinan yang sudah dilindungi",
        body: "Simpan sebagai file baru agar dokumen asli tetap bisa diakses jika Anda lupa kata sandinya.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Melindungi dokumen sensitif sambil bepergian",
    body: "Sebagian besar kesalahan keamanan terjadi saat Anda terburu-buru. Perlindungan lewat HP berarti Anda bisa mengunci kontrak sebelum mengirimnya dari bandara, atau melindungi PDF slip gaji sebelum membagikannya ke kontraktor lepas — tanpa perlu mencari komputer.",
  },
  faq: [
    {
      q: "Enkripsi apa yang dipakai aplikasi ini?",
      a: "AES-256, standar modern. Hindari enkripsi 40-bit lama dan RC4 128-bit — keduanya mudah dijebol.",
    },
    {
      q: "Bagaimana jika saya lupa kata sandinya?",
      a: "Tidak ada jalan pintas. Enkripsi yang kuat berarti dokumen tidak bisa dipulihkan tanpa kata sandinya. Simpan kata sandi di pengelola kata sandi (password manager).",
    },
    {
      q: "Bagaimana cara membagikan kata sandi dengan aman?",
      a: "Gunakan kanal yang berbeda dari dokumen itu sendiri — kirim kata sandinya lewat SMS jika PDF-nya dikirim lewat email, atau gunakan fitur berbagi aman dari pengelola kata sandi Anda.",
    },
    {
      q: "Apakah redaksinya bersifat permanen?",
      a: "Ya. Redaksi yang benar menghapus teks yang mendasarinya, bukan sekadar menutupinya secara visual. Bahkan menyalin-tempel dari PDF yang sudah diredaksi tidak akan menampilkan isi aslinya.",
    },
    {
      q: "Bisakah saya menambahkan watermark dan kata sandi sekaligus?",
      a: "Bisa. Keduanya independen dan dapat diterapkan bersamaan.",
    },
  ],
  related: [
    {
      label: "Langkah demi langkah: cara melindungi PDF dengan kata sandi",
      path: "/guides/how-to-protect-pdf-file",
    },
    { label: "Tanda tangani PDF sebelum menguncinya", path: "/sign-pdf" },
    {
      label: "Alur kerja PDF untuk tim bisnis",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Kunci PDF sensitif dalam hitungan detik.",
    sub: "Gratis untuk iOS dan Android. Perlindungan berlangsung di perangkat.",
  },
};

export default content;
