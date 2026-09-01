import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "mobile-pdf-form-workflow",
  h1: "Alur Kerja Formulir PDF di HP (dari Diterima sampai Terkirim)",
  description:
    "Rutinitas berbasis HP yang bisa diulang untuk formulir: terima, buka di aplikasi yang tepat, isi, tanda tangani, kunci, kirim. Alur kerja dari awal sampai akhir yang tidak butuh komputer.",
  updated: "2026-06-01",
  intro: [
    "Formulir adalah salah satu tugas PDF yang paling benar-benar ramah HP. Formulir tiba lewat email, Anda menyelesaikannya di tangan, lalu dikirim kembali dengan cara yang sama, tidak butuh komputer sama sekali di setiap langkahnya. Triknya bukan pada satu alat tertentu, melainkan punya rutinitas yang bisa diulang sehingga setiap formulir, interaktif maupun non-interaktif, mengikuti jalur yang sama dari kotak masuk sampai terkirim.",
    "Panduan ini memaparkan alur kerja itu dari awal sampai akhir. Sengaja dibuat sama, lima langkah setiap kalinya: bawa formulirnya ke aplikasi yang mumpuni, isi, tanda tangani, kunci, kirim. Begitu sudah jadi kebiasaan, formulir yang dulunya berarti “tunggu sampai saya di meja kerja” berubah menjadi pekerjaan dua menit di sela-sela hal lain.",
    "Ini berlaku untuk kedua jenis formulir. Yang interaktif Anda ketuk lalu ketik; hasil pindaian non-interaktif Anda tulisi langsung di atasnya. Alur kerjanya tidak berubah, hanya langkah pengisiannya yang menyesuaikan.",
  ],
  steps: [
    {
      title: "Terima dan simpan formulirnya",
      body: "Saat formulir tiba lewat email atau pesan, simpan di tempat yang Anda kendalikan, Files atau penyimpanan HP Anda, daripada bekerja di dalam pratinjau yang mungkin mengabaikan kolom formulir.",
    },
    {
      title: "Buka di aplikasi yang mendukung formulir",
      body: "Buka file yang sudah disimpan di aplikasi PDF Editor. Aplikasi ini mendeteksi kolom interaktif jika ada, dan membiarkan Anda menambahkan teks ke formulir non-interaktif jika tidak ada. Langkah tunggal ini menghindarkan sebagian besar jalan buntu “saya tidak bisa mengetik”.",
    },
    {
      title: "Isi sesuai jenis formulirnya",
      body: "Ketuk lalu ketik ke kolom interaktif, atau tempatkan teks dan tanda centang pada formulir non-interaktif. Perbesar tampilan untuk presisi, kerjakan dari atas ke bawah, dan jangan lewati kolom wajib.",
    },
    {
      title: "Tanda tangani di sesi yang sama",
      body: "Tambahkan tanda tangan tersimpan Anda di area tanda tangan tanpa berpindah aplikasi. Melakukannya sekaligus berarti Anda tidak perlu mengekspor, membuka lagi, dan menempatkan ulang semuanya.",
    },
    {
      title: "Kunci dan kirim",
      body: "Kunci formulir yang sudah selesai agar jawabannya terkunci, lalu kirim lewat menu bagikan, email, portal, atau pesan. Simpan file kosong aslinya untuk lain kali.",
    },
  ],
  tips: [
    "Intinya adalah bisa diulang: lima langkah yang sama untuk setiap formulir, sehingga berhenti menjadi keputusan dan berubah menjadi kebiasaan.",
    "Simpan formulir dari pratinjau email sebelum mengisi, langkah tunggal ini mencegah frustrasi formulir mobile yang paling umum.",
    "Isi dan tanda tangani dalam satu sesi untuk menghindari harus menambahkan ulang dan menempatkan ulang jawaban.",
    "Kunci sebelum mengirim agar penerima melihat jawaban Anda persis seperti yang Anda masukkan.",
    "Simpan folder “formulir” berisi master kosong agar pengisian ulang selalu memakai salinan yang baru dan bersih.",
  ],
  mobileNote:
    "Aplikasi PDF Editor dirancang tepat untuk siklus ini: deteksi kolom, isi, tanda tangani, kunci, ekspor, semuanya di perangkat, tanpa apa pun yang diunggah. Karena setiap langkah berada dalam satu aplikasi, seluruh alur kerja dari terima sampai kirim berjalan tanpa perlu menyentuh laptop sama sekali.",
  faq: [
    {
      q: "Bisakah saya benar-benar menyelesaikan formulir PDF sepenuhnya di HP?",
      a: "Bisa. Formulir tiba lewat email dan dikirim kembali dengan cara yang sama, dan aplikasi PDF yang mumpuni menangani pengisian, tanda tangan, penguncian, dan ekspor, jadi seluruh alur kerjanya tidak butuh komputer.",
    },
    {
      q: "Apakah alur kerjanya berbeda untuk formulir non-interaktif dibanding interaktif?",
      a: "Hanya langkah pengisiannya. Formulir interaktif Anda ketuk lalu ketik; formulir non-interaktif Anda tempatkan teks di atasnya. Menerima, menandatangani, mengunci, dan mengirim sama persis untuk keduanya.",
    },
    {
      q: "Kenapa membuka formulir di aplikasi terpisah, bukan di email?",
      a: "Pratinjau email dan aplikasi pembaca dasar sering mengabaikan kolom formulir, jadi mengetik terasa mustahil. Membuka file yang sudah disimpan di aplikasi PDF khusus mengaktifkan kolomnya dan menghindarkan jalan buntu itu.",
    },
    {
      q: "Kenapa perlu mengunci sebelum mengirim?",
      a: "Mengunci menggabungkan jawaban Anda ke halaman sehingga tidak bisa terhapus atau diubah oleh aplikasi pembaca penerima, dan tampil secara konsisten di mana saja.",
    },
    {
      q: "Apakah alur kerja formulir mobile ini bersifat privat?",
      a: "Dengan aplikasi PDF Editor, setiap langkah berjalan di perangkat, jadi detail pribadi yang Anda masukkan tidak diunggah. Gunakan saluran resmi penerima saat mengirim formulir yang sensitif.",
    },
  ],
  related: [
    { label: "Cara mengisi formulir PDF di iPhone", path: "/guides/how-to-fill-pdf-forms-on-iphone" },
    { label: "Cara mengisi formulir PDF di Android", path: "/guides/how-to-fill-pdf-forms-on-android" },
    { label: "Cara mengirim formulir PDF yang sudah selesai diisi", path: "/guides/how-to-send-a-completed-pdf-form" },
    { label: "Cara tanda tangan PDF di HP Anda", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "PDF Editor — isi dan tanda tangani", path: "/pdf-editor" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
