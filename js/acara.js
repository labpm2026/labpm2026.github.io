// Database Acara 1 sampai 8 dengan konten asli
const databaseAcara = {
  1: {
    tag: "ACARA I",
    title: "Sampling & Mineralogy",
    desc: "Praktikum pengambilan sampel representatif untuk meminimalkan bias, serta analisis hitung butir menggunakan mikroskop untuk menentukan derajat liberasi mineral.",
    cards: {
      modul: { title: "Modul Praktikum", sub: "Panduan lengkap praktikum", link: "#" },
      tp: { title: "Tugas Pendahuluan", sub: "Soal pra-praktikum", link: "#" },
      tugas: { title: "Tugas Praktikum", sub: "Tugas Setelah praktikum", link: "#" }
    }
  },
  2: {
    tag: "ACARA II",
    title: "Comminution",
    desc: "Mempelajari reduksi ukuran bijih lewat peremukan dan penggerusan untuk meliberasikan mineral berharga, serta mengevaluasi kebutuhan energi melalui Bond Work Index.",
    cards: {
      modul: { title: "Modul Praktikum", sub: "Panduan lengkap praktikum", link: "#" },
      tp: { title: "Tugas Pendahuluan", sub: "Soal pra-praktikum", link: "#" },
      tugas: { title: "Tugas Praktikum", sub: "Tugas Setelah praktikum", link: "#" }
    }
  },
  3: {
    tag: "ACARA III",
    title: "Particle Size Distribution (PSD)",
    desc: "Berfokus pada pemisahan ukuran partikel melalui metode sizing (penyaringan) dan classification (pengendapan fluida), guna menentukan parameter karakteristik F80 dan P80.",
    cards: {
      modul: { title: "Modul Praktikum", sub: "Panduan lengkap praktikum", link: "#" },
      tp: { title: "Tugas Pendahuluan", sub: "Soal pra-praktikum", link: "#" },
      tugas: { title: "Tugas Praktikum", sub: "Tugas Setelah praktikum", link: "#" }
    }
  },
  4: {
    tag: "ACARA IV",
    title: "Magnetic Separation",
    desc: "Pemisahan mineral berharga berdasarkan perbedaan sifat kemagnetannya, membagi sampel menjadi ferromagnetic, paramagnetic, dan diamagnetic menggunakan alat pemisah magnetik.",
    cards: {
      modul: { title: "Modul Praktikum", sub: "Panduan lengkap praktikum", link: "#" },
      tp: { title: "Tugas Pendahuluan", sub: "Soal pra-praktikum", link: "#" },
      tugas: { title: "Tugas Praktikum", sub: "Tugas Setelah praktikum", link: "#" }
    }
  },
  5: {
    tag: "ACARA V",
    title: "Gravity Concentration",
    desc: "Metode konsentrasi mineral berdasarkan berat jenis memanfaatkan gaya gravitasi dan aliran fluida, yang kemudahannya ditentukan oleh nilai Criteria of Concentration.",
    cards: {
      modul: { title: "Modul Praktikum", sub: "Panduan lengkap praktikum", link: "#" },
      tp: { title: "Tugas Pendahuluan", sub: "Soal pra-praktikum", link: "#" },
      tugas: { title: "Tugas Praktikum", sub: "Tugas Setelah praktikum", link: "#" }
    }
  },
  6: {
    tag: "ACARA VI",
    title: "Flotation",
    desc: "Memisahkan mineral berdasarkan sifat kimia-fisika permukaan (hidrofilik dan hidrofobik) menggunakan gelembung udara dan bantuan reagen kolektor, modifikator, serta frother.",
    cards: {
      modul: { title: "Modul Praktikum", sub: "Panduan lengkap praktikum", link: "#" },
      tp: { title: "Tugas Pendahuluan", sub: "Soal pra-praktikum", link: "#" },
      tugas: { title: "Tugas Praktikum", sub: "Tugas Setelah praktikum", link: "#" }
    }
  },
  7: {
    tag: "ACARA VII",
    title: "Dewatering",
    desc: "Mempelajari pengurangan kadar air (dewatering) melalui tahap thickening, filtering, dan drying, serta melakukan uji laju pengendapan partikel (settling test).",
    cards: {
      modul: { title: "Modul Praktikum", sub: "Panduan lengkap praktikum", link: "#" },
      tp: { title: "Tugas Pendahuluan", sub: "Soal pra-praktikum", link: "#" },
      tugas: { title: "Tugas Praktikum", sub: "Tugas Setelah praktikum", link: "#" }
    }
  },
  8: {
    tag: "ACARA VIII",
    title: "Case Study",
    desc: "Kegiatan studi kasus untuk memecahkan masalah nyata industri, mencakup analisis karakteristik bijih, perancangan diagram alir (flowsheet), dan evaluasi hasil pengolahan.",
    cards: {
      modul: { title: "Modul Praktikum", sub: "Panduan lengkap praktikum", link: "#" },
      tp: { title: "Tugas Pendahuluan", sub: "Soal pra-praktikum", link: "#" },
      tugas: { title: "Tugas Praktikum", sub: "Tugas Setelah praktikum", link: "#" }
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
  headerBox.offsetHeight; // trigger reflow
  headerBox.style.animation = 'fadeIn 0.4s ease';

  document.getElementById('display-tag').innerText = selected.tag;
  document.getElementById('display-title').innerText = selected.title;
  document.getElementById('display-desc').innerText = selected.desc;

  // 3. Animasi container kartu
  const cardsContainer = document.getElementById('cards-container');
  cardsContainer.classList.remove('animated-change');
  cardsContainer.offsetHeight;
  cardsContainer.classList.add('animated-change');

  // 4. Update 3 Kartu: Modul, Tugas Pendahuluan, Tugas Praktikum
  // Modul
  document.getElementById('title-modul').innerText = selected.cards.modul.title;
  document.getElementById('sub-modul').innerText = selected.cards.modul.sub;
  document.getElementById('card-modul').href = selected.cards.modul.link;

  // Tugas Pendahuluan
  document.getElementById('title-tp').innerText = selected.cards.tp.title;
  document.getElementById('sub-tp').innerText = selected.cards.tp.sub;
  document.getElementById('card-tp').href = selected.cards.tp.link;

  // Tugas Praktikum
  document.getElementById('title-tugas').innerText = selected.cards.tugas.title;
  document.getElementById('sub-tugas').innerText = selected.cards.tugas.sub;
  document.getElementById('card-tugas').href = selected.cards.tugas.link;
}