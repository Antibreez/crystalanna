// const objectSlider = new Swiper('.object__info-slider', {
//   pagination: {
//     el: '.object__info-slider-block .main-slider__bullets',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.object__info-slider-block .main-slider__control--next',
//     prevEl: '.object__info-slider-block .main-slider__control--prev',
//   },
// })

addSwiperItem('.object__info-slider', () => ({
  pagination: {
    el: '.object__info-slider-block .main-slider__bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.object__info-slider-block .main-slider__control--next',
    prevEl: '.object__info-slider-block .main-slider__control--prev',
  },
}))
