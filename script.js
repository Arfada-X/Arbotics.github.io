// Fade-in sections on scroll
document.addEventListener("DOMContentLoaded", function() {
  const faders = document.querySelectorAll(".fade");
  const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});

// Header shadow on scroll
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
  } else {
    header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
  }
});
