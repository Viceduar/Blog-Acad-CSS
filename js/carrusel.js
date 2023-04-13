/***********CONFIGURACIÓN DE CARRUSEL*******************/
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  speed: 700,
  simulateTouch: false,

  // Navigation arrows
  navigation: {
    nextEl: ".slide-btn-next",
    prevEl: ".slide-btn-prev",
  },

  slidesPerView: 3,
  slidesPerGroup: 3,
});
