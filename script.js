// Fade-in animation saat scroll
const faders = document.querySelectorAll('.fade');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Form submission via WhatsApp
document.getElementById("projectForm").addEventListener("submit", function(e){
  e.preventDefault();
  const jenis=document.getElementById("jenisProyek").value;
  const deskripsi=document.getElementById("deskripsi").value;
  const komponen=document.getElementById("komponen").value;
  const lokasi=document.getElementById("lokasi").value;
  const kontak=document.getElementById("kontak").value;

  const waNumber="442045796856";
  let pesanWA=`Halo Arbotics! Saya ingin membuat proyek.\n\nJenis Proyek: ${jenis}\nDeskripsi: ${deskripsi}\nKomponen: ${komponen}\nLokasi: ${lokasi}\nKontak: ${kontak}`;
  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(pesanWA)}`,"_blank");
});

