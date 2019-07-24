var topSlider = new Swiper ('.js-top-slider', {
  init: true,
  effect: 'fade',
  nested: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

var publishSlider = new Swiper ('.js-publish-slider', {
  init: true,
  nested: true,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    979: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  }
});