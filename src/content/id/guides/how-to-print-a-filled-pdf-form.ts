import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-print-a-filled-pdf-form",
  h1: "Cara Mencetak Formulir PDF yang Sudah Diisi dengan Jawaban Tampil",
  description:
    "Mencetak formulir Anda dan kolomnya justru muncul kosong? Alasan nilai yang sudah diisi kadang tidak ikut tercetak, dan cara mendapatkan salinan kertas yang bersih dengan setiap jawaban terlihat.",
  updated: "2026-06-01",
  intro: [
    "Anda mengisi formulir di layar, mengirimnya ke printer, dan kertas yang keluar malah tidak memuat jawaban Anda sama sekali, hanya formulir kosongnya. Ini salah satu masalah formulir yang paling umum sekaligus paling membingungkan, dan penyebabnya spesifik: jawabannya hidup di lapisan kolom formulir, dan sebagian jalur cetak melewati lapisan itu, hanya mencetak halaman di baliknya.",
    "Solusinya biasanya salah satu dari dua hal, mengaktifkan pengaturan yang mencetak nilai kolom formulir, atau mengunci formulirnya lebih dulu agar jawabannya menjadi bagian dari halaman dan tidak bisa terlewat. Bagaimanapun caranya, mendapatkan hasil cetak yang bersih dengan setiap jawaban terlihat itu mudah begitu Anda tahu penyebabnya.",
    "Panduan ini membahas masalah kolom kosong ini, pengaturan cetak yang mengendalikannya, dan pemeriksaan cetak yang lebih luas (margin, skala) yang menjaga formulir yang sudah diisi tetap terlihat benar di atas kertas.",
  ],
  steps: [
    {
      title: "Reproduksi masalahnya lewat pratinjau cetak",
      body: "Buka dialog cetak dan lihat pratinjaunya sebelum mengirim apa pun ke printer. Jika jawaban Anda juga hilang di sana, berarti ini masalah pencetakan kolom, bukan masalah printernya.",
    },
    {
      title: "Aktifkan pencetakan nilai kolom formulir",
      body: "Cari opsi cetak seperti “cetak kolom formulir” atau pengaturan komentar-dan-formulir yang diset ke “dokumen dan markup”. Mengaktifkannya memberi tahu jalur cetak untuk menyertakan lapisan kolom berisi jawaban Anda.",
    },
    {
      title: "Jika opsi itu tidak tersedia, kunci formulirnya lebih dulu",
      body: "Mengunci menggabungkan jawaban yang sudah Anda isi ke dalam halaman itu sendiri. Setelah dikunci, tidak ada lagi lapisan kolom terpisah yang bisa terlewat, jadi jalur cetak apa pun akan menyertakan jawabannya. Ini adalah solusi paling andal.",
    },
    {
      title: "Periksa skala dan margin",
      body: "Set skala ke “fit” atau 100% daripada zoom kustom agar formulirnya tidak terpotong atau menyusut. Pastikan ukuran kertas sesuai dengan formulirnya agar tidak ada yang keluar dari tepi.",
    },
    {
      title: "Cetak satu halaman uji coba",
      body: "Cetak satu halaman dulu untuk memastikan jawaban, tata letak, dan margin semuanya terlihat benar sebelum menjalankan seluruh dokumen, terutama untuk formulir multihalaman.",
    },
  ],
  tips: [
    "Solusi universal tercepat adalah mengunci formulirnya, lalu mencetak, formulir yang terkunci mencetak jawabannya di mana saja, tanpa perlu pengaturan khusus.",
    "Jika pratinjau menampilkan jawaban Anda tapi kertasnya tidak, masalahnya ada di pengaturan cetak, bukan pada filenya, periksa lagi opsi kolom formulir.",
    "Formulir non-interaktif hasil pindaian tidak pernah punya masalah ini: “kolom”-nya sudah menjadi bagian dari halaman, jadi selalu tercetak.",
    "Untuk formulir dengan latar gelap atau berbayang, pastikan teks kolomnya tercetak dalam warna yang tetap terbaca di atas latarnya.",
    "Pengaturan cetak berbeda antar aplikasi dan printer, jadi nama opsi persisnya bervariasi, cari apa pun yang menyebut kolom formulir atau markup.",
  ],
  mobileNote:
    "Mencetak dari HP punya jebakan yang sama, sebagian pintasan cetak menghilangkan nilai kolom. Di aplikasi PDF Editor Anda bisa mengunci formulir yang sudah diisi sebelum mencetak atau membagikannya ke printer, sehingga jawabannya sudah menyatu ke halaman dan selalu keluar setiap saat.",
  faq: [
    {
      q: "Kenapa jawaban formulir saya kosong saat saya cetak?",
      a: "Karena jawabannya tersimpan di lapisan kolom formulir dan jalur cetak Anda melewatinya. Aktifkan opsi untuk mencetak nilai kolom formulir, atau kunci formulirnya agar jawabannya menjadi bagian dari halaman.",
    },
    {
      q: "Apa yang dilakukan penguncian untuk pencetakan?",
      a: "Mengunci menggabungkan nilai yang sudah Anda isi ke dalam halaman itu sendiri. Setelah itu, tidak ada lagi lapisan kolom terpisah yang bisa terlewat, jadi jawabannya tercetak dengan andal dari aplikasi atau printer mana pun.",
    },
    {
      q: "Jawabannya tampil di layar tapi tidak di kertas, kenapa?",
      a: "Aplikasi pembaca Anda menampilkan lapisan kolomnya, tapi pengaturan cetaknya mengecualikannya. Cari opsi cetak tentang kolom formulir atau “dokumen dan markup” lalu aktifkan, atau kunci formulirnya sebelum mencetak.",
    },
    {
      q: "Kenapa formulir tercetak saya terpotong di tepinya?",
      a: "Itu ketidaksesuaian skala atau ukuran kertas, masalah terpisah dari kolom yang kosong. Set skala ke fit atau 100% dan samakan ukuran kertas dengan formulirnya.",
    },
    {
      q: "Apakah formulir non-interaktif hasil pindaian punya masalah ini?",
      a: "Tidak. Jawaban formulir non-interaktif adalah bagian dari gambar halamannya, jadi selalu tercetak. Masalah kolom kosong hanya memengaruhi formulir interaktif yang punya lapisan kolom terpisah.",
    },
  ],
  related: [
    { label: "Cara menyimpan formulir PDF yang sudah diisi", path: "/guides/how-to-save-a-filled-pdf-form" },
    { label: "Formulir PDF tidak tercetak dengan benar", path: "/guides/pdf-form-not-printing-correctly" },
    { label: "Cara mengatasi masalah mencetak PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
    { label: "Cara mengirim formulir PDF yang sudah selesai diisi", path: "/guides/how-to-send-a-completed-pdf-form" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
