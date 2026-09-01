import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-agencies",
  h1: "Alur Kerja PDF untuk Agensi (Presentasi, Brief, Persetujuan)",
  description:
    "Rantai PDF sebuah agensi, mulai dari dek presentasi, brief kreatif, persetujuan klien, hingga hasil kerja, tetap cepat dan bisa diprediksi dengan alat berbasis browser yang gratis dan privat.",
  updated: "2026-05-29",
  intro: [
    "Agensi memproses lebih banyak PDF daripada yang mereka sadari. Dek presentasi (pitch deck) dikirim keluar, brief kembali masuk, karya kreatif melewati proses persetujuan, hasil kerja dikirim secara bertahap, retrospektif berakhir di folder bersama. Masing-masing adalah pekerjaan kecil; bersama-sama, itulah urat nadi yang menggerakkan agensi.",
    "Sebagian besar pergerakan PDF di agensi bersifat berulang: mengonversi dek slide menjadi PDF yang siap dikirim, menggabungkan versi presenter dengan lampiran, mengompres untuk portal klien, memberi watermark pada draf selama peninjauan, menandatangani persetujuan, mengarsipkan saat proyek selesai. Dengan ritme yang disengaja dan seperangkat alat kecil yang tepat, semua ini tetap ringan. Tanpa itu, prosesnya memakan banyak jam.",
    "Panduan ini menjelaskan alur kerja yang terbukti berhasil di agensi-agensi kecil. Tidak satu pun langkahnya membutuhkan software PDF berbayar; sebagian besar berjalan di tab browser tanpa mengunggah materi klien yang sensitif.",
  ],
  steps: [
    {
      title: "Dek presentasi: ekspor, kompres, periksa identitas merek",
      body: "Dek slide → ekspor PDF → kompres untuk email calon klien. Pastikan font tersemat, sehingga judul slide tidak berubah otomatis di sisi calon klien. Sampul mencantumkan nama calon klien; judul metadata sudah diisi; nama file NamaProspek_Presentasi_YYYY-MM-DD.pdf.",
    },
    {
      title: "Brief kreatif: gabungkan brief masuk dengan aset",
      body: "Dokumen brief ditambah aset klien (logo, contoh, buku panduan merek) → gunakan Gabungkan PDF menjadi satu file kerja yang bisa dirujuk tim. Simpan file asli; versi gabungan hanya untuk referensi cepat.",
    },
    {
      title: "Persetujuan: PDF bertanda tangan, watermark draf selama peninjauan",
      body: "Draf beredar dengan Tambah Watermark ke PDF yang mencap DRAFT. Saat klien menyetujui, PDF bertanda tangan meresmikan persetujuan itu, dengan Tanda Tangan PDF merekam persetujuan resminya. File final tidak lagi memiliki watermark.",
    },
    {
      title: "Hasil kerja: PDF berkualitas tinggi, terpisah dari file kerja",
      body: "Hasil kerja final diekspor dengan kualitas lebih tinggi dibanding versi internal. Urutkan Ulang Halaman PDF memastikan urutan halamannya benar; Ekstrak Halaman PDF membuang apa pun yang tidak seharusnya dikirim.",
    },
    {
      title: "Kompres untuk portal klien",
      body: "Sebagian besar portal klien enterprise membatasi ukuran hingga 10–25 MB. Kompres PDF membuat hasil kerja berada di bawah batas itu tanpa penurunan kualitas yang terlihat jelas. File yang dikirim adalah salinan terkompresi; arsip sumber menyimpan versi yang belum dikompres.",
    },
    {
      title: "Arsipkan saat proyek selesai",
      body: "Pindahkan folder proyek ke /Arsip/[Tahun]/[Klien]/[NamaProyek]/. Folder aktif tetap ramping; arsip menjadi sumber studi kasus untuk presentasi berikutnya.",
    },
  ],
  tips: [
    "Dek yang ditujukan untuk dilihat di layar sebaiknya diekspor dengan kompresi yang lebih ringan dibanding yang ditujukan untuk dicetak — artefak visual kurang terlihat di layar.",
    "Standarkan sampul dek. Logo, nama calon klien, tanggal, kontak agensi. Tata letak yang berbeda-beda di setiap presentasi terasa tidak konsisten di seluruh agensi.",
    "Beri watermark pada semua draf. Begitu sebuah draf kehilangan watermark-nya di sepanjang alur, akuntabilitasnya jadi kabur.",
    "Persetujuan seharusnya ada di PDF bertanda tangan, bukan di utas obrolan. Anda di masa depan akan membutuhkan catatan yang bisa dipertanggungjawabkan.",
    "Siapkan lebih dulu folder /Template/ berisi sampul dek, template brief, formulir persetujuan. Memakai ulang selalu lebih baik daripada membuat dari nol setiap kali.",
  ],
  mobileNote:
    "Kehidupan di agensi banyak berlangsung lewat HP: saat pemotretan, dalam perjalanan, di kantor klien. Aplikasi PDF Editor menangani draf, tanda tangan, dan ekspor ulang cepat langsung dari HP, sehingga persetujuan bisa selesai dari HP tanpa harus menunggu kembali ke laptop.",
  faq: [
    {
      q: "Seberapa besar seharusnya ukuran PDF dek presentasi?",
      a: "Idealnya di bawah 10 MB; selalu di bawah 25 MB. Dek yang penuh visual terkompres lebih sedikit dibanding dek berisi teks; pantau terus ukurannya seiring dek bertambah panjang.",
    },
    {
      q: "Perlukah kami memakai satu template untuk setiap presentasi?",
      a: "Ya untuk strukturnya, tidak untuk konten kreatifnya. Pembaca seharusnya langsung mengenali 'ini proposal dari agensi'; konten kreatiflah yang membedakan satu presentasi dengan lainnya.",
    },
    {
      q: "Bagaimana kami melacak status persetujuan?",
      a: "Status folder: /draf/, /disetujui/, /terkirim/. PDF persetujuan bertanda tangan adalah dokumen yang mengonfirmasi perpindahan dari satu folder ke folder berikutnya.",
    },
    {
      q: "Apakah kami perlu PDF kerja dan PDF pengiriman yang terpisah?",
      a: "Ya. File kerja tidak dikompres dan berisi anotasi; hasil kerja dikompres, bersih, dan sudah final. Jangan sampai file kerja terkirim karena kesalahan.",
    },
    {
      q: "Apa kesalahan PDF terbesar yang sering dilakukan agensi?",
      a: "Mengirim dek yang belum final. Beri watermark pada draf, beri nama yang jelas, dan hanya file di folder /disetujui/ yang boleh dikirim ke klien.",
    },
  ],
  related: [
    { label: "PDF untuk Bisnis — kontrak dan alur kerja", path: "/pdf-for-business" },
    { label: "Gabungkan PDF — susun brief dan hasil kerja", path: "/merge-pdf" },
    { label: "Alur kerja PDF untuk konsultan", path: "/guides/pdf-workflows-for-consultants" },
    { label: "Alur kerja PDF terbaik untuk tim", path: "/guides/best-pdf-workflow-for-teams" },
  ],
  parentHub: { label: "PDF untuk Bisnis — kontrak dan alur kerja", path: "/pdf-for-business" },
};

export default content;
