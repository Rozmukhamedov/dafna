let swiper = new Swiper(".simple-swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
});

let swiperSale = new Swiper(".swiper-sale", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
