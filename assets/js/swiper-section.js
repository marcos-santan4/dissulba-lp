const carouselContainer = document.querySelector(".carousel-container");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");

let currentIndex = 0;
const totalSlides = document.querySelectorAll(
  ".carousel-container section"
).length;

// Botão "Anterior"
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Move para o último slide ao voltar do primeiro
  updateCarousel();
});

// Botão "Próximo"
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides; // Move para o primeiro slide ao avançar do último
  updateCarousel();
});

// Atualiza a posição do carrossel
function updateCarousel() {
  const offset = -currentIndex * 100; // Calcula a posição com base no índice atual
  carouselContainer.style.transform = `translateX(${offset}%)`;
}
