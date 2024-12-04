const hamburguer = document.querySelector(".menu-hamburguer");
const menu = document.querySelector(".menu-header");
const menuLinks = document.querySelectorAll(".menu-header ul li a");

// Alterna o menu ao clicar no botão hambúrguer
hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  menu.classList.toggle("active");
});

// Fecha o menu ao clicar fora dele
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !hamburguer.contains(e.target)) {
    hamburguer.classList.remove("active");
    menu.classList.remove("active");
  }
});

// Fecha o menu ao clicar em qualquer link do menu
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    menu.classList.remove("active");
  });
});
