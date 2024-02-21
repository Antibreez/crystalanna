// const breadcrumbsSlider = new Swiper('.breadcrumbs__nav', {
//   slidesPerView: 'auto',
// })

// globalSwiperStorage['.breadcrumbs__nav'] = {
//   swiper: null,
//   init: function() {
//     this.swiper = new Swiper('.breadcrumbs__nav', {
//       slidesPerView: 'auto',
//     })
//   }
// }

// globalSwiperStorage['.breadcrumbs__nav'].init();

addSwiperItem('.breadcrumbs__nav', () => ({
  slidesPerView: 'auto',
}));
