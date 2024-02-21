// const slides = $('.main-slider__slide').length
// const frag = $(document.createDocumentFragment)
// for (let i = 0; i < slides.length; i++) {
//   frag.append()
// }

// const newsSlider = new Swiper('.news-articles__slides', {
//   // freeMode: true,
//   slidesPerView: 'auto',
//   pagination: {
//     el: '.news-articles .main-slider__progressbar',
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

addSwiperItem('.news-articles__slides', () => ({
  slidesPerView: 'auto',
  pagination: {
    el: '.news-articles .main-slider__progressbar',
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
