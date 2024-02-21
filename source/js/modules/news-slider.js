// const slides = $('.main-slider__slide').length
// const frag = $(document.createDocumentFragment)
// for (let i = 0; i < slides.length; i++) {
//   frag.append()
// }

// const newsItemSlider = new Swiper('.news-slider__slides', {
//   centeredSlides: true,
//   pagination: {
//     el: '.news-slider__pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.news-slider .main-slider__control--next',
//     prevEl: '.news-slider .main-slider__control--prev',
//   },
// })

addSwiperItem('.news-slider__slides', () => ({
  centeredSlides: true,
  pagination: {
    el: '.news-slider__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.news-slider .main-slider__control--next',
    prevEl: '.news-slider .main-slider__control--prev',
  },
}))

const checkNewsTabsSlider = () => {
  if (!$('.news__tabs').length) return;

  if ($(window).outerWidth() > 767 && $('.news__tabs .swiper')[0].swiper) {
    $('.news__tabs .swiper')[0].swiper.destroy();
  }

  if ($(window).outerWidth() <= 767 && !$('.news__tabs .swiper')[0].swiper) {
    globalSwiperStorage['.tabs__slider'].init();
  }
}

if ($('.news__tabs').length) {
  checkNewsTabsSlider()

  $(window).on('resize', checkNewsTabsSlider);
}
