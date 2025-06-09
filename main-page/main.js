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

const roles = ["product designer", "front-end developer", "motion designer", "who knows"];
const roleSpan = document.getElementById("role");
let roleIndex = 0;

function updateRole() {
  // Temporarily disable animation to reset position
  roleSpan.style.transition = 'none';
  roleSpan.style.transform = 'translateY(0)';
  roleSpan.style.opacity = '1';
  roleSpan.textContent = roles[roleIndex];

  // Force reflow to restart animation
  void roleSpan.offsetWidth;

  // Apply downward animation
  roleSpan.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
  roleSpan.style.transform = 'translateY(100%)';
  roleSpan.style.opacity = '0';

  // Wait, then update text and bring it back from the top
  setTimeout(() => {
    roleSpan.style.transition = 'none';
    roleSpan.style.transform = 'translateY(-100%)';
    roleSpan.textContent = roles[(roleIndex + 1) % roles.length];
    void roleSpan.offsetWidth;

    roleSpan.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
    roleSpan.style.transform = 'translateY(0)';
    roleSpan.style.opacity = '1';
  }, 600);

  roleIndex = (roleIndex + 1) % roles.length;
}

setInterval(updateRole, 3000);
document.addEventListener("DOMContentLoaded", updateRole);
