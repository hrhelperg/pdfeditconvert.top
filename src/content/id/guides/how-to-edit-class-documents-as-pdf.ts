import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-class-documents-as-pdf",
  h1: "Cara Mengedit Dokumen Kelas sebagai PDF (Anotasi, Sorot, Tanda Tangan)",
  description:
    "Materi kelas, soal latihan, dan formulir persetujuan sering datang sebagai PDF. Cara memberi anotasi, mengisinya, dan mengembalikannya tanpa mencetak, semuanya dari HP atau laptop.",
  updated: "2026-05-29",
  intro: [
    "Dokumen kelas kini datang dalam bentuk PDF lebih sering daripada format lainnya. Handout untuk diberi anotasi, soal latihan untuk diisi, formulir persetujuan untuk ditandatangani dan dikembalikan, silabus untuk ditinjau. Godaannya adalah mencetak semuanya, mengisinya dengan tangan, lalu memindainya kembali. Cara itu memang bisa, tapi lambat dan hasilnya terlihat lebih buruk dibanding langsung mengedit PDF-nya.",
    "Pengeditan PDF modern menangani keempat kasus ini dengan baik: menyorot dan memberi anotasi untuk membaca, mengisi formulir untuk soal latihan dan borang, tanda tangan untuk surat izin, dan pengeditan struktural saat Anda perlu menambahkan halaman. Sebagian besar bisa dikerjakan di tab browser atau aplikasi HP tanpa perlu membayar software.",
    "Panduan ini menjelaskan setiap kasus — alat apa yang tepat, apa yang bisa dan tidak bisa dilakukannya, dan cara mengirim kembali salinan yang sudah diisi dengan rapi. Panduan ini mengasumsikan Anda tidak ingin mencetak apa pun jika tidak terpaksa.",
  ],
  steps: [
    {
      title: "Untuk membaca dan memberi anotasi: sorot dan beri komentar",
      body: "Sebagian besar pembaca PDF (termasuk aplikasi PDF Editor) mendukung fitur menyorot, menggarisbawahi, dan komentar catatan tempel. Gunakan ini untuk membaca secara aktif; anotasinya tetap melekat pada file dan tetap ada meski dibagikan.",
    },
    {
      title: "Untuk kolom formulir sungguhan: ketuk untuk mengisi",
      body: "PDF yang dirancang sebagai formulir punya kolom interaktif sungguhan. Ketuk masing-masing kolom, ketik, lalu pindah ke kolom berikutnya. Hasilnya terlihat identik dengan pekerjaan yang dicetak dan diketik.",
    },
    {
      title: "Untuk PDF non-interaktif (tanpa kolom formulir): tambahkan kotak teks",
      body: "Handout hasil pindaian yang tidak punya kolom sungguhan mengharuskan Anda menumpuk kotak teks di atas bagian kosongnya. Aplikasi PDF Editor mendukung ini; hasilnya terlihat lebih rapi dibanding jawaban tulisan tangan di kertas cetakan.",
    },
    {
      title: "Untuk tanda tangan: Tanda Tangan PDF",
      body: "Tanda Tangan PDF memungkinkan Anda menggambar atau mengetik tanda tangan langsung di formulir. Untuk formulir persetujuan dan surat izin, tanda tangan yang digambar adalah pilihan yang tepat.",
    },
    {
      title: "Untuk menambahkan halaman: gabungkan",
      body: "Jika jawaban Anda lebih panjang daripada ruang kosong yang tersedia di handout, Gabungkan PDF memungkinkan Anda menambahkan halaman tambahan. Jaga urutannya tetap benar; halaman aslinya tetap utuh.",
    },
    {
      title: "Simpan sebagai file baru, jangan menimpa file asli",
      body: "Simpan versi yang sudah diisi dengan nama baru (Handout3_Selesai_NamaBelakang.pdf). File aslinya yang masih kosong tetap bersih jika suatu saat Anda perlu mengerjakannya ulang atau membagikannya dengan teman belajar.",
    },
  ],
  tips: [
    "Coba PDF-nya dulu untuk melihat apakah punya kolom formulir sungguhan. Jika mengetuk garis kosong memunculkan kursor ketik, berarti itu formulir sungguhan. Jika tidak terjadi apa-apa, Anda perlu menumpuk kotak teks.",
    "Gunakan ukuran teks yang konsisten untuk jawaban yang diisi — sesuaikan dengan ukuran teks isi dokumen jika Anda bisa mengenalinya.",
    "Jangan mencetak hanya untuk mengisi kecuali benar-benar terpaksa. Versi hasil pindaian selalu kurang terbaca dibanding pengisian digital.",
    "Simpan sebelum menandatangani. Tanda tangan biasanya mengunci sebagian isi file; versi sebelum ditandatangani adalah salinan yang masih bisa diedit.",
    "Konfirmasi formulir yang sudah diisi dengan mengekspornya ke PDF setelahnya — sebagian alat menyimpan status yang masih bisa diisi secara terpisah, dan PDF hasil ekspor itulah yang mengunci jawaban Anda.",
  ],
  mobileNote:
    "Banyak dokumen kelas tiba lewat HP dan perlu dikembalikan dengan cara yang sama. Aplikasi PDF Editor menangani anotasi, pengisian formulir, tanda tangan, dan penggabungan di iOS dan Android, sehingga handout tidak perlu menunggu waktu di laptop untuk selesai diisi.",
  faq: [
    {
      q: "Bisakah saya mengedit PDF di browser?",
      a: "Untuk kasus tertentu bisa — pengisian formulir dan anotasi berfungsi di banyak browser. Untuk pengeditan teks dan perubahan struktural, editor sungguhan (berbasis browser atau aplikasi) bisa melakukan lebih banyak.",
    },
    {
      q: "Kenapa handout saya tidak punya kolom formulir sungguhan?",
      a: "Bisa jadi dosen mengekspornya tanpa mengaktifkan kolom itu, atau filenya memang hasil pindaian. Gunakan tumpukan kotak teks di atas garis kosongnya.",
    },
    {
      q: "Apakah PDF bertanda tangan diterima untuk formulir kelas?",
      a: "Semakin banyak diterima. Sebagian formulir yang bersifat hukum (khususnya izin bertanda tangan di sejumlah yurisdiksi) mungkin masih memerlukan tanda tangan basah — periksa petunjuk pada formulirnya.",
    },
    {
      q: "Perlukah saya selalu menyimpan sebagai file baru?",
      a: "Ya untuk tugas kelas. Menyimpan file asli yang kosong memungkinkan Anda mencoba ulang atau membagikannya tanpa harus mengunduh ulang.",
    },
    {
      q: "Bagaimana cara menambahkan halaman ke PDF yang sedang saya isi?",
      a: "Tulis konten tambahan Anda sebagai PDF terpisah, lalu gunakan Gabungkan PDF untuk menyatukannya. Tempatkan halaman tambahan itu di posisi yang logis.",
    },
  ],
  related: [
    { label: "PDF Editor — edit teks dan gambar di HP", path: "/pdf-editor" },
    { label: "Tanda Tangan PDF — tambahkan tanda tangan elektronik", path: "/sign-pdf" },
    { label: "Cara mengisi formulir PDF di HP Anda", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "Cara memberi anotasi PDF di HP", path: "/guides/how-to-annotate-pdf-on-mobile" },
  ],
  parentHub: { label: "PDF Editor — edit teks, gambar, dan halaman", path: "/pdf-editor" },
};

export default content;
