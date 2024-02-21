// $('.brand-card__slider').each((idx, item) => {
//   // console.log('####', item.className);
//   // new Swiper(item, {
//   //   slidesPerView: 'auto',
//   //   pagination: {
//   //     el: $(item).find('.brand-card__slider-pagination')[0],
//   //     type: 'progressbar',
//   //   },
//   // })



//   globalSwiperStorage['.brand-card__slider'] = {
//     swiper: null,
//     init: function() {
//       this.swiper = new Swiper('.breadcrumbs__nav', {
//         slidesPerView: 'auto',
//       })
//     }
//   }

//   globalSwiperStorage['.breadcrumbs__nav'].init();
// })

// globalSwiperStorage['.brand-card__slider'] = {
//   swipers: null,
//   init: function() {
//     this.swipers = [];
//     $('.brand-card__slider').each((idx, item) => {
//       this.swipers.push(new Swiper(item, {
//         slidesPerView: 'auto',
//       }))
//     })

//   }
// }



// globalSwiperStorage['.brand-card__slider'].init();

addSwiperItem('.brand-card__slider', () => ({
  slidesPerView: 'auto'
}));
