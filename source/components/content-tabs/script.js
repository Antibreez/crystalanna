// new Swiper('.tabs__slider', {
//   slidesPerView: 'auto',
// })

// globalSwiperStorage['.tabs__slider'] = {
//   swiper: null,
//   init: function() {
//     this.swiper = new Swiper('.tabs__slider', {
//       slidesPerView: 'auto',
//     })
//   }
// }

// globalSwiperStorage['.tabs__slider'].init();

addSwiperItem('.content-tabs__slider', () => ({
  slidesPerView: 'auto',
}))
