const text = "Ryhana Williams";
const header = document.getElementById("typed-header");
let i = 0;

function typeChar() {
  if (i < text.length) {
    header.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeChar, 100); // Typing speed
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeChar();

  const fadeElements = document.querySelectorAll('.fade-in-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => observer.observe(el));
});
