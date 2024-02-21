// const certificatesSlider = new Swiper('.about-main__certificates-slides', {
//   // freeMode: true,
//   slidesPerView: 'auto',
//   pagination: {
//     el: '.about-main__certificates-block .main-slider__progressbar',
//     type: 'progressbar',
//   },
//   on: {
//     lock() {
//       $(this.el).removeClass('with-scroll-indicator')
//     },
//     unlock() {
//       $(this.el).addClass('with-scroll-indicator')
//     },
//   },
// })

addSwiperItem('.about-main__certificates-slides', () => ({
  slidesPerView: 'auto',
  pagination: {
    el: '.about-main__certificates-block .main-slider__progressbar',
    type: 'progressbar',
  },
  on: {
    lock() {
      $(this.el).removeClass('with-scroll-indicator')
    },
    unlock() {
      $(this.el).addClass('with-scroll-indicator')
    },
  },
}))
