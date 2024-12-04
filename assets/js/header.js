// Seleciona o cabeçalho e a logo
const header = document.querySelector(".navbar");
const logoDissulba = document.querySelector("#logo-dissulba-preta");

// Classe a ser adicionada ao rolar
const shrinkClass = "shrink";

// Verifica se os elementos existem para evitar erros
if (header && logoDissulba) {
  // Adiciona um evento para detectar a rolagem
  window.addEventListener("scroll", () => {
    const hasScrolled = window.scrollY > 0;

    // Adiciona ou remove a classe com base na rolagem
    header.classList.toggle(shrinkClass, hasScrolled);
    logoDissulba.classList.toggle(shrinkClass, hasScrolled);
  });
} else {
  console.error("Elementos necessários não foram encontrados no DOM.");
}
