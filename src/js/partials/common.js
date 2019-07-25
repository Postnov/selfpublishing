// function 'closest'
!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay      = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-close-modal'),
    body         = document.querySelector('body');


modalButtons.forEach(function(item){
  item.addEventListener('click', function(e) {
      e.preventDefault();
      var modalId = this.getAttribute('data-modal'),
          modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
      modalElem.classList.add('active');
      overlay.classList.add('active');
      body.classList.add('no-scroll');
  }); // end click
}); // end foreach


closeButtons.forEach(function(item){
  item.addEventListener('click', function(e) {
     var parentModal = this.closest('.modal');
     parentModal.classList.remove('active');
     overlay.classList.remove('active');
     body.classList.remove('no-scroll');
  });
}); // end foreach


document.body.addEventListener('keyup', function (e) {
  var key = e.keyCode;
  if (key == 27) {
      document.querySelector('.modal.active').classList.remove('active');
      document.querySelector('.overlay').classList.remove('active');
      body.classList.remove('no-scroll');
  };
}, false);

overlay.addEventListener('click', function() {
  document.querySelector('.modal.active').classList.remove('active');
  this.classList.remove('active');
  body.classList.remove('no-scroll');
});

document.querySelectorAll('.js-switch-modal').forEach(function(item) {
  var event = item.getAttribute('data-event');

  item.addEventListener(event, function (e) {
    e.preventDefault();

    var currentModal   = this.closest('.modal').getAttribute('data-modal'),
        currentModalEl = document.querySelector('.modal[data-modal="' + currentModal + '"]'),
        nextModal      = this.getAttribute('data-next-modal'),
        nextModalEl    = document.querySelector('.modal[data-modal="' + nextModal + '"]');

    currentModalEl.classList.remove('active');
    nextModalEl.classList.add('active');
  })
})



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