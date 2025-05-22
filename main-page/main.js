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

document.addEventListener("DOMContentLoaded", typeChar);
