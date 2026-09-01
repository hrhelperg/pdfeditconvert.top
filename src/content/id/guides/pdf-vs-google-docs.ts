import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-google-docs",
  h1: "PDF atau Google Docs, Kapan Menggunakan Masing-Masing (Edit, Berbagi, Kunci)",
  description:
    "Google Docs untuk kolaborasi, PDF untuk pengiriman akhir. Panduan realistis kapan memakai masing-masing, dan cara mengonversi dengan bersih di antara keduanya pada momen yang tepat.",
  updated: "2026-05-29",
  intro: [
    "Google Docs dan PDF sebenarnya tidak benar-benar bersaing — keduanya untuk fase yang berbeda dalam siklus hidup sebuah dokumen. Docs untuk menulis, berkolaborasi, merevisi, memberi komentar; PDF untuk mengirim, mengunci, menandatangani, mengarsipkan. Mencoba memakai salah satunya di luar kekuatannya itulah sumber hambatannya.",
    "Dokumen pada umumnya melewati keduanya: dibuat draf di Docs karena di situlah kolaborasi terjadi, lalu diekspor ke PDF saat versinya sudah final dan akan keluar dari kelompok kerja. Melakukan sebaliknya — menerima PDF, mengimpornya ke Docs untuk diedit — bisa dilakukan tapi selalu kehilangan sedikit kesetiaan formatnya, jadi ini lebih tepat sebagai jalan darurat daripada kebiasaan rutin.",
    "Panduan ini menjelaskan kapan sebaiknya memakai masing-masing berdasarkan fasenya, ditambah mekanisme konversi untuk kedua arahnya. Pilih format yang tepat pada waktu yang tepat, dan sebagian besar hambatan itu akan hilang.",
  ],
  steps: [
    {
      title: "Gunakan Google Docs selama dokumen masih ditulis",
      body: "Pengeditan multi-penulis, kursor langsung, riwayat versi, komentar. Docs menangani semua ini dengan rapi dan PDF tidak menangani satu pun. Pembuatan draf dan peninjauan sebaiknya dilakukan di Docs.",
    },
    {
      title: "Beralih ke PDF saat dokumen sudah final atau akan dikirim keluar",
      body: "Begitu sebuah dokumen akan dikirim ke klien, regulator, vendor, atau arsip, PDF mengunci tata letak dan isinya. Dokumen Docs tetap menjadi sumber yang bisa diedit; PDF-nya adalah hasil kerja yang dikirim.",
    },
    {
      title: "Ekspor dari Docs ke PDF dengan bersih",
      body: "File → Download → Dokumen PDF. Sematkan font lewat pengaturan ekspor jika tersedia. PDF hasilnya mempertahankan judul, tabel, gambar, dan format.",
    },
    {
      title: "Konversikan PDF menjadi bisa diedit hanya jika terpaksa",
      body: "PDF ke Word di browser Anda menarik teks keluar dari sebuah PDF. Hasilnya bersifat perkiraan — tata letaknya bisa berantakan, tabel bisa rusak. Perlakukan ini sebagai jalan darurat, bukan alur kerja rutin.",
    },
    {
      title: "Jangan menandatangani atau mengarsipkan di Google Docs",
      body: "Docs tidak punya dukungan tanda tangan sungguhan, dan riwayat versinya terikat pada akun Google Anda. Dokumen bertanda tangan dan arsip sebaiknya berbentuk PDF, disimpan secara lokal atau di brankas yang memang disiapkan untuk itu.",
    },
    {
      title: "Sesuaikan format file dengan penerimanya",
      body: "Klien mengharapkan PDF. Editor mengharapkan Word atau Docs. Tim internal mungkin lebih suka Docs untuk kolaborasi. Kirim format yang benar-benar akan dipakai oleh penerimanya.",
    },
  ],
  tips: [
    "Jangan membagikan tautan Google Docs ke klien — mereka mungkin tidak punya akun Google, izin berbaginya bisa mengejutkan, dan dokumennya bisa terus berubah setelah mereka membukanya.",
    "Saat mengonversi Docs ke PDF, periksa penomoran halamannya — apa yang terlihat seperti satu halaman di Docs kadang meluber jadi dua halaman di PDF.",
    "Jangan 'buka di Docs' sebuah PDF yang Anda terima kecuali Anda benar-benar butuh pengeditan besar. Konversinya menghilangkan format; PDF aslinya lebih bersih untuk dibaca dan dibagikan.",
    "Gunakan riwayat versi Docs untuk pembuatan draf secara kolaboratif. PDF-nya adalah potret keadaan saat dikirim.",
    "Perlakukan Docs sebagai sumber kebenaran selama pembuatan draf; perlakukan PDF sebagai sumber kebenaran setelah dikirim.",
  ],
  mobileNote:
    "HP menangani sebagian besar pekerjaan PDF tahap akhir bahkan saat pembuatan drafnya dilakukan di desktop. Aplikasi PDF Editor menangani kompresi, tanda tangan, dan berbagi PDF final di menit-menit terakhir, di iOS dan Android — berguna untuk momen antara 'Docs sudah selesai' dan 'klien sudah menerima filenya'.",
  faq: [
    {
      q: "Bisakah saya menyimpan semuanya di Google Docs saja?",
      a: "Untuk kolaborasi internal, bisa. Untuk pengiriman ke luar, tidak — klien mengharapkan PDF, dan izin berbagi di Docs bisa membocorkan akses dengan cara yang tidak Anda duga.",
    },
    {
      q: "Seberapa baik konversi PDF ke Docs bekerja?",
      a: "Cukup baik untuk memulihkan teks, tapi buruk untuk tata letak. Teksnya biasanya berhasil dipulihkan; tabel, kolom, dan format yang presisi biasanya rusak. Gunakan hanya saat Anda perlu mengedit ulang PDF yang tidak Anda punya sumbernya.",
    },
    {
      q: "Sebaiknya saya menandatangani di Google Docs atau PDF?",
      a: "PDF. Tanda tangan elektronik sungguhan melekat dengan bersih di PDF; Docs tidak punya dukungan tanda tangan bawaan yang setara dengan alat tanda tangan PDF.",
    },
    {
      q: "Bagaimana dengan Google Docs untuk arsip?",
      a: "Bisa, tapi berisiko — akun bisa berubah, Docs bisa terhapus, dan formatnya bergantung pada layanan Google. PDF adalah format arsip yang lebih baik.",
    },
    {
      q: "Bisakah saya bolak-balik Docs → PDF → Docs?",
      a: "Bisa, tapi ada yang hilang setiap kali. Setiap konversi kehilangan kesetiaan format. Simpan dokumen Docs aslinya sebagai sumber yang bisa diedit, dan hanya bolak-balik saat benar-benar terpaksa.",
    },
  ],
  related: [
    { label: "PDF Converter — Word, JPG, PNG dan sebaliknya", path: "/pdf-converter" },
    { label: "PDF ke Word — konversi untuk pengeditan besar", path: "/pdf-to-word" },
    { label: "PDF dibanding DOCX — perbandingan fitur", path: "/guides/pdf-vs-docx" },
    { label: "PDF atau DOCX untuk bisnis", path: "/guides/pdf-vs-docx-for-business" },
  ],
  parentHub: { label: "PDF Converter — Word, JPG, PNG dan sebaliknya", path: "/pdf-converter" },
};

export default content;
