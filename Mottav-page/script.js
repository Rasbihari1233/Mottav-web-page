const swiper = new Swiper(".swiper", {
  loop: false,
  slidesPerView: 5,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 4,
    },

    1399: {
      slidesPerView: 5,
    },
  },

  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
