// Toggle navbar hamburger untuk tampilan handphone (dipakai di semua halaman)
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
    nav.classList.toggle('nav-open');
  });

  // Tutup menu otomatis setelah salah satu link dipilih
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.classList.remove('active');
      nav.classList.remove('nav-open');
    });
  });
});
