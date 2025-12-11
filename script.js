// Fade-in effect saat scroll
const faders = document.querySelectorAll('.fade');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Header shadow saat scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if(window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// Form WhatsApp only
document.getElementById("projectForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const jenis = document.getElementById("jenisProyek").value;
  const deskripsi = document.getElementById("deskripsi").value;
  const komponen = document.getElementById("komponen").value;
  const lokasi = document.getElementById("lokasi").value;
  const kontak = document.getElementById("kontak").value;

  const waNumber = "442045796856"; 
  const pesanWA = `Halo Arbotics! Saya ingin membuat proyek.\n\nJenis Proyek: ${jenis}\nDeskripsi: ${deskripsi}\nKomponen: ${komponen}\nLokasi: ${lokasi}\nKontak: ${kontak}`;
  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(pesanWA)}`, "_blank");

  alert("Pesan berhasil dibuat. Silakan kirim melalui WhatsApp.");
});

