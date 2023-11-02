function setupMenuToggle() {
  let menu = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
  };
}

function setupTextTyping() {
  const h1Element = document.querySelector(".profile-text h1");
  const originalText = h1Element.textContent;

  h1Element.textContent = "";

  function typeText() {
    h1Element.textContent += originalText.charAt(h1Element.textContent.length);
    setTimeout(typeText, 200);
  }
  setTimeout(typeText, 1000);
}

// Panggil fungsi-fungsi di sini
document.addEventListener("DOMContentLoaded", function () {
  setupMenuToggle();
  setupTextTyping();
});
