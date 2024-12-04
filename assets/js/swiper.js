const swiper = new Swiper(".swiper-container", {
  slidesPerView: 2, // Quantidade de slides padrão
  spaceBetween: 100, // Espaço entre slides
  loop: true, // Ativa o loop infinito
  autoplay: {
    delay: 2000, // Tempo entre transições em milissegundos
    disableOnInteraction: false, // Continua o autoplay mesmo após interação
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 50,
      centeredSlides: true,
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    750: {
      slidesPerView: 3,
      spaceBetween: 90,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 100,
    },
  },
});
