// fixed header during scroll

let headerMenu = document.getElementById("navbar-fixed");
let headerMenuHeight = headerMenu.offsetHeight;

window.addEventListener(
  "scroll",
  () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > headerMenuHeight) {
      headerMenu.classList.add("fixed-top");
    } else {
      headerMenu.classList.remove("fixed-top");
    }
  },
  false
);

// swiper slider

let swiper = new Swiper(".simple-swiper", {
  breakpoints: {
    0: {
      slidesPerView: "auto",
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

let swiperSale = new Swiper(".swiper-sale", {
  navigation: {
    nextEl: ".swiper-button-sale-next",
    prevEl: ".swiper-button-sale-prev",
  },
  breakpoints: {
    480: {
      freeMode: true,
      slidesPerView: "auto",
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
