new Swiper('.hero_slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  autoplay: {
    delay: 2000,
  },
});
