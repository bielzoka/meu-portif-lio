// script.js
document.getElementById("mostrar-email").addEventListener("click", function () {
  const email = document.getElementById("email");
  email.style.display = "block";
});
// Menu responsivo
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("menu-links").classList.toggle("show");
});
