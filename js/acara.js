// Database Acara 1 sampai 8 — sekarang masing-masing memiliki 3 kartu
const databaseAcara = {
  1: {
    tag: "ACARA I",
    title: "Sampling & Mineralogy",
    desc: "Praktikum pengambilan sampel representatif untuk meminimalkan bias, serta analisis hitung butir menggunakan mikroskop untuk menentukan derajat liberasi mineral.",
    cards: {
      modul_tp: { title: "Modul & Tugas Pendahuluan", sub: "Panduan dan soal pra-praktikum", link: "https://drive.google.com/file/d/1RpsiL5wIZtJ4la56FCZAtAYEygEEE38_/view" },
      tugas: { title: "Tugas Praktikum", sub: "Tugas setelah praktikum", link: "" },
      lampiran: { title: "Lampiran A", sub: "Laporan sementara praktikum", link: "https://docs.google.com/document/d/1Jdv4AgfxQSTTFTQWARa-ny0bl3dAWIda/edit?usp=sharing&ouid=105953452739258329814&rtpof=true&sd=true" }
    }
  },
  2: {
    tag: "ACARA II",
    title: "Crushing & Grinding",
    desc: "Mempelajari reduksi ukuran bijih lewat peremukan dan penggerusan untuk meliberasikan mineral berharga, serta mengevaluasi kebutuhan energi melalui Bond Work Index.",
    cards: {
      modul_tp: { title: "Modul & Tugas Pendahuluan", sub: "Panduan dan soal pra-praktikum", link: "" },
      tugas: { title: "Tugas Praktikum", sub: "Tugas setelah praktikum", link: "" },
      lampiran: { title: "Lampiran A", sub: "Laporan sementara praktikum", link: "" }
    }
  },
  3: {
    tag: "ACARA III",
    title: "Particle Size Distribution (PSD)",
    desc: "Berfokus pada pemisahan ukuran partikel melalui metode sizing (penyaringan) dan classification (pengendapan fluida), guna menentukan parameter karakteristik F80 dan P80.",
    cards: {
      modul_tp: { title: "Modul & Tugas Pendahuluan", sub: "Panduan dan soal pra-praktikum", link: "" },
      tugas: { title: "Tugas Praktikum", sub: "Tugas setelah praktikum", link: "" },
      lampiran: { title: "Lampiran A", sub: "Laporan sementara praktikum", link: "" }
    }
  },
  4: {
    tag: "ACARA IV",
    title: "Magnetic Separation",
    desc: "Pemisahan mineral berharga berdasarkan perbedaan sifat kemagnetannya, membagi sampel menjadi ferromagnetic, paramagnetic, dan diamagnetic menggunakan alat pemisah magnetik.",
    cards: {
      modul_tp: { title: "Modul & Tugas Pendahuluan", sub: "Panduan dan soal pra-praktikum", link: "" },
      tugas: { title: "Tugas Praktikum", sub: "Tugas setelah praktikum", link: "" },
      lampiran: { title: "Lampiran A", sub: "Laporan sementara praktikum", link: "" }
    }
  },
  5: {
    tag: "ACARA V",
    title: "Gravity Concentration",
    desc: "Metode konsentrasi mineral berdasarkan berat jenis memanfaatkan gaya gravitasi dan aliran fluida, yang kemudahannya ditentukan oleh nilai Criteria of Concentration.",
    cards: {
      modul_tp: { title: "Modul & Tugas Pendahuluan", sub: "Panduan dan soal pra-praktikum", link: "" },
      tugas: { title: "Tugas Praktikum", sub: "Tugas setelah praktikum", link: "" },
      lampiran: { title: "Lampiran A", sub: "Laporan sementara praktikum", link: "" }
    }
  },
  6: {
    tag: "ACARA VI",
    title: "Flotation",
    desc: "Memisahkan mineral berdasarkan sifat kimia-fisika permukaan (hidrofilik dan hidrofobik) menggunakan gelembung udara dan bantuan reagen kolektor, modifikator, serta frother.",
    cards: {
      modul_tp: { title: "Modul & Tugas Pendahuluan", sub: "Panduan dan soal pra-praktikum", link: "" },
      tugas: { title: "Tugas Praktikum", sub: "Tugas setelah praktikum", link: "" },
      lampiran: { title: "Lampiran A", sub: "Laporan sementara praktikum", link: "" }
    }
  },
  7: {
    tag: "ACARA VII",
    title: "Dewatering",
    desc: "Mempelajari pengurangan kadar air (dewatering) melalui tahap thickening, filtering, dan drying, serta melakukan uji laju pengendapan partikel (settling test).",
    cards: {
      modul_tp: { title: "Modul & Tugas Pendahuluan", sub: "Panduan dan soal pra-praktikum", link: "" },
      tugas: { title: "Tugas Praktikum", sub: "Tugas setelah praktikum", link: "" },
      lampiran: { title: "Lampiran A", sub: "Laporan sementara praktikum", link: "" }
    }
  },
  8: {
    tag: "ACARA VIII",
    title: "Case Study",
    desc: "Kegiatan studi kasus untuk memecahkan masalah nyata industri, mencakup analisis karakteristik bijih, perancangan diagram alir (flowsheet), dan evaluasi hasil pengolahan.",
    cards: {
      modul_tp: { title: "Modul & Tugas Pendahuluan", sub: "Panduan dan soal pra-praktikum", link: "" },
      tugas: { title: "Tugas Praktikum", sub: "Tugas setelah praktikum", link: "" },
      lampiran: { title: "Lampiran A", sub: "Laporan sementara praktikum", link: "" }
    }
  }
};

function switchAcara(nomorAcara) {
  // 1. Update status tombol aktif (desktop)
  const buttons = document.querySelectorAll('.btn-acara');
  buttons.forEach((btn, index) => {
    btn.classList.toggle('active', index + 1 === nomorAcara);
  });

  // 1b. Sinkronkan dropdown (handphone)
  const acaraSelect = document.getElementById('acaraSelect');
  if (acaraSelect && acaraSelect.value !== String(nomorAcara)) {
    acaraSelect.value = String(nomorAcara);
  }

  const selected = databaseAcara[nomorAcara];

  // 2. Animasi header
  const headerBox = document.getElementById('acara-header');
  headerBox.style.animation = 'none';
  headerBox.offsetHeight;
  headerBox.style.animation = 'fadeIn 0.4s ease';

  document.getElementById('display-tag').innerText = selected.tag;
  document.getElementById('display-title').innerText = selected.title;
  document.getElementById('display-desc').innerText = selected.desc;

  // 3. Animasi container kartu
  const cardsContainer = document.getElementById('cards-container');
  cardsContainer.classList.remove('animated-change');
  cardsContainer.offsetHeight;
  cardsContainer.classList.add('animated-change');

  // ---------- UPDATE KARTU 1: Modul & Tugas Pendahuluan ----------
  const card1 = document.getElementById('card-modul-tp');
  const title1 = document.getElementById('title-modul-tp');
  const sub1 = document.getElementById('sub-modul-tp');
  const btn1 = document.getElementById('btn-modul-tp');
  const data1 = selected.cards.modul_tp;

  title1.innerText = data1.title;
  sub1.innerText = data1.sub;

  if (data1.link && data1.link !== '#' && data1.link.trim() !== '') {
    card1.href = data1.link;
    card1.style.pointerEvents = 'auto';
    card1.style.opacity = '1';
    btn1.innerHTML = 'Lihat <span>→</span>';
    card1.classList.remove('disabled');
  } else {
    card1.href = 'javascript:void(0)';
    card1.style.pointerEvents = 'none';
    card1.style.opacity = '0.7';
    btn1.innerHTML = 'Dokumen belum tersedia';
    card1.classList.add('disabled');
  }

  // ---------- UPDATE KARTU 2: Tugas Praktikum ----------
  const card2 = document.getElementById('card-tugas');
  const title2 = document.getElementById('title-tugas');
  const sub2 = document.getElementById('sub-tugas');
  const btn2 = document.getElementById('btn-tugas');
  const data2 = selected.cards.tugas;

  title2.innerText = data2.title;
  sub2.innerText = data2.sub;

  if (data2.link && data2.link !== '#' && data2.link.trim() !== '') {
    card2.href = data2.link;
    card2.style.pointerEvents = 'auto';
    card2.style.opacity = '1';
    btn2.innerHTML = 'Lihat <span>→</span>';
    card2.classList.remove('disabled');
  } else {
    card2.href = 'javascript:void(0)';
    card2.style.pointerEvents = 'none';
    card2.style.opacity = '0.7';
    btn2.innerHTML = 'Dokumen belum tersedia';
    card2.classList.add('disabled');
  }

  // ---------- UPDATE KARTU 3: Lampiran A ----------
  const card3 = document.getElementById('card-lampiran');
  const title3 = document.getElementById('title-lampiran');
  const sub3 = document.getElementById('sub-lampiran');
  const btn3 = document.getElementById('btn-lampiran');
  const data3 = selected.cards.lampiran;

  title3.innerText = data3.title;
  sub3.innerText = data3.sub;

  if (data3.link && data3.link !== '#' && data3.link.trim() !== '') {
    card3.href = data3.link;
    card3.style.pointerEvents = 'auto';
    card3.style.opacity = '1';
    btn3.innerHTML = 'Lihat <span>→</span>';
    card3.classList.remove('disabled');
  } else {
    card3.href = 'javascript:void(0)';
    card3.style.pointerEvents = 'none';
    card3.style.opacity = '0.7';
    btn3.innerHTML = 'Dokumen belum tersedia';
    card3.classList.add('disabled');
  }
}

// ===== INISIALISASI AWAL: tampilkan Acara 1 saat halaman dimuat =====
switchAcara(1);