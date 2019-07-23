"use strict";

var topSlider = new Swiper('.js-top-slider', {
  init: true,
  effect: 'fade',
  nested: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});