const $mainProductCardImageSlides = $('.product-card__image-slider-block .product-card__image-slide')

const changeProductCardMainImage = index => {
  $mainProductCardImageSlides.removeClass('active')
  $mainProductCardImageSlides.eq(index).addClass('active')
  $('.product-card__main-image').html($mainProductCardImageSlides.eq(index).html())
}

let needToSlideSmallProductSlider = true

// const changeProductCardModalImage = (index) => {
//   $('.product-card__image-slider-modal-small .product-card__image-slide').removeClass('active');
//   $('.product-card__image-slider-modal-small .product-card__image-slide').eq(index).addClass('active');

//   if (index > 0) {
//     modalProductSmallSlider.slideTo(index - 1);
//   } else {
//     modalProductSmallSlider.slideTo(index);
//   }

//   modalProductLargeSlider.slideTo(index);
// }

const $modalProductLargeSliderBlock = $('.product-card__image-slider-block').clone()
$modalProductLargeSliderBlock
  .removeClass('product-card__image-slider-block')
  .addClass('product-card__image-slider-modal-large')
const $modalProductSmallSliderBlock = $('<div class="product-card__image-slider-modal-small"></div>').append(
  $('.product-card__image-slider').clone()
)

const $modalProductSliderBody = $('<div class="product-card__image-slider-modal-body"></div>')
$modalProductSliderBody.append($modalProductLargeSliderBlock)
$modalProductSliderBody.append($modalProductSmallSliderBlock)
$('#product-card__image-view').find('.modal__body').append($modalProductSliderBody)

// const productCardSlider = new Swiper('.product-card__image-slider-block .product-card__image-slider', {
//   slidesPerView: 'auto',
//   spaceBetween: 0,
//   loop: true,
//   // centeredSlides: true,

//   // navigation: {
//   //   nextEl: '.product-card__image-slider-block .product-card__image-slider-nav--next',
//   //   prevEl: '.product-card__image-slider-block .product-card__image-slider-nav--prev',
//   // },

//   pagination: {
//     el: '.product-card__image-slider-block .product-card__image-slider-pagination',
//   },

//   breakpoints: {
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 14,
//       loop: false,
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 12,
//       loop: false,
//     },
//     1280: {
//       slidesPerView: 4,
//       spaceBetween: 16,
//       loop: false,
//     },
//   },

//   on: {
//     init: function () {
//       $(this.el).find('.product-card__image-slide').eq(this.activeIndex).addClass('active')
//     },
//     slideChange: function () {
//       // changeProductCardMainImage(this.activeIndex)

//       if (this.activeIndex > $(this.el).find('.product-card__image-slide.active').index()) {
//         changeProductCardMainImage(this.activeIndex)
//       }

//       if (this.activeIndex + 3 < $(this.el).find('.product-card__image-slide.active').index()) {
//         changeProductCardMainImage(this.activeIndex + 3)
//       }
//     },
//   },
// })

addSwiperItem('.product-card__image-slider-block .product-card__image-slider', () => ({
  slidesPerView: 'auto',
  spaceBetween: 0,
  loop: true,
  // centeredSlides: true,

  // navigation: {
  //   nextEl: '.product-card__image-slider-block .product-card__image-slider-nav--next',
  //   prevEl: '.product-card__image-slider-block .product-card__image-slider-nav--prev',
  // },

  pagination: {
    el: '.product-card__image-slider-block .product-card__image-slider-pagination',
  },

  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 14,
      loop: false,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 12,
      loop: false,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 16,
      loop: false,
    },
  },

  on: {
    init: function () {
      $(this.el).find('.product-card__image-slide').eq(this.activeIndex).addClass('active')
    },
    slideChange: function () {
      // changeProductCardMainImage(this.activeIndex)

      if (this.activeIndex > $(this.el).find('.product-card__image-slide.active').index()) {
        changeProductCardMainImage(this.activeIndex)
      }

      if (this.activeIndex + 3 < $(this.el).find('.product-card__image-slide.active').index()) {
        changeProductCardMainImage(this.activeIndex + 3)
      }
    },
  },
}))

// const modalProductLargeSlider = new Swiper('.product-card__image-slider-modal-large .product-card__image-slider', {
//   loop: true,
//   navigation: {
//     nextEl: '.product-card__image-slider-modal-large .product-card__image-slider-nav--next',
//     prevEl: '.product-card__image-slider-modal-large .product-card__image-slider-nav--prev',
//   },

//   pagination: {
//     el: '.product-card__image-slider-modal-large .product-card__image-slider-pagination',
//   },

//   on: {
//     // slideChange: function (swipe) {
//     //   var activeIndex = swipe.activeIndex
//     //   var slidesLen = swipe.slides.length
//     //   if (swipe.params.loop) {
//     //     switch (swipe.activeIndex) {
//     //       case 0:
//     //         activeIndex = slidesLen - 3
//     //         break
//     //       case slidesLen - 1:
//     //         activeIndex = 0
//     //         break
//     //       default:
//     //         --activeIndex
//     //     }
//     //   }
//     //   console.log(activeIndex)
//     // },
//     slideChange: function (swipe) {
//       console.log('active index', this.realIndex)
//       // console.log('###swipe', swipe.el.querySelectorAll('.swiper-slide')[1].classList.contains('swiper-slide'))
//       // console.log(
//       //   '###slide',
//       //   $('.product-card__image-slider-modal-large')
//       //     .find('.product-card__image-slider-wrapper')
//       //     .find('.product-card__image-slide')
//       // )
//       const $slides = $('.product-card__image-slider-modal-small .product-card__image-slide')
//       const $currentSlide = $slides.eq(this.realIndex)
//       $slides.removeClass('active')
//       $currentSlide.addClass('active')

//       if (needToSlideSmallProductSlider) {
//         modalProductSmallSlider.slideTo(this.realIndex)
//       }

//       needToSlideSmallProductSlider = true
//     },
//   },
// })

addSwiperItem('.product-card__image-slider-modal-large .product-card__image-slider', () => ({
  loop: true,
  navigation: {
    nextEl: '.product-card__image-slider-modal-large .product-card__image-slider-nav--next',
    prevEl: '.product-card__image-slider-modal-large .product-card__image-slider-nav--prev',
  },

  pagination: {
    el: '.product-card__image-slider-modal-large .product-card__image-slider-pagination',
  },

  on: {
    // slideChange: function (swipe) {
    //   var activeIndex = swipe.activeIndex
    //   var slidesLen = swipe.slides.length
    //   if (swipe.params.loop) {
    //     switch (swipe.activeIndex) {
    //       case 0:
    //         activeIndex = slidesLen - 3
    //         break
    //       case slidesLen - 1:
    //         activeIndex = 0
    //         break
    //       default:
    //         --activeIndex
    //     }
    //   }
    //   console.log(activeIndex)
    // },
    slideChange: function (swipe) {
      // console.log('active index', this.realIndex)
      // console.log('###swipe', swipe.el.querySelectorAll('.swiper-slide')[1].classList.contains('swiper-slide'))
      // console.log(
      //   '###slide',
      //   $('.product-card__image-slider-modal-large')
      //     .find('.product-card__image-slider-wrapper')
      //     .find('.product-card__image-slide')
      // )
      const $slides = $('.product-card__image-slider-modal-small .product-card__image-slide')
      const $currentSlide = $slides.eq(this.realIndex)
      $slides.removeClass('active')
      $currentSlide.addClass('active')

      if (needToSlideSmallProductSlider) {
        globalSwiperStorage['.product-card__image-slider-modal-small .product-card__image-slider'].swipers[0].slideTo(this.realIndex)
      }

      needToSlideSmallProductSlider = true
    },
  },
}))

// const modalProductSmallSlider = new Swiper('.product-card__image-slider-modal-small .product-card__image-slider', {
//   slidesPerView: 'auto',
//   spaceBetween: 16,
//   on: {
//     init: function () {
//       $(this.el).find('.product-card__image-slide').eq(this.activeIndex).addClass('active')
//     },
//   },
// })

addSwiperItem('.product-card__image-slider-modal-small .product-card__image-slider', () => ({
  slidesPerView: 'auto',
  spaceBetween: 16,
  on: {
    init: function () {
      $(this.el).find('.product-card__image-slide').eq(this.activeIndex).addClass('active')
    },
  },
}))

$(document).on('click', '.product-card__image-slider-block .product-card__image-slide', function () {
  if ($(window).outerWidth() < 768) {
    $('.product-card__main-image').trigger('click')
    return
  }
  // $('<a href="#product-card__image-view" data-fancybox></a>').fancybox({
  //   touch: false,
  //   autoFocus: false,
  //   backFocus: false,
  //   afterShow: function () {
  //     new PerfectSB($('.fancybox-slide')).init()

  //     if ($(this.src).find('.modal__city-list').length) {
  //       !!citySearchList.el ? citySearchList.update() : citySearchList.init()
  //     }

  //     setTimeout(() => {
  //       $(this.src + '.fancybox-content')
  //         .parent()
  //         .addClass('perfectScrollbar-init')
  //     }, 100)
  //   },
  //   afterClose: function () {
  //     $(this.src + '.fancybox-content')
  //       .parent()
  //       .removeClass('perfectScrollbar-init')
  //   },
  // }).trigger('click')

  // $.fancybox({
  //   touch: false,
  //   autoFocus: false,
  //   backFocus: false,
  //   afterShow: function () {
  //     new PerfectSB($('.fancybox-slide')).init()

  //     if ($(this.src).find('.modal__city-list').length) {
  //       !!citySearchList.el ? citySearchList.update() : citySearchList.init()
  //     }

  //     setTimeout(() => {
  //       $(this.src + '.fancybox-content')
  //         .parent()
  //         .addClass('perfectScrollbar-init')
  //     }, 100)
  //   },
  //   afterClose: function () {
  //     $(this.src + '.fancybox-content')
  //       .parent()
  //       .removeClass('perfectScrollbar-init')
  //   },
  //   href: "#product-card__image-view"
  // })
  if ($(this).hasClass('active')) return

  // console.log('####click', $(this))

  changeProductCardMainImage($(this).index())

  // productCardSlider.slideTo($(this).index())

  if (
    $(this).index() === globalSwiperStorage['.product-card__image-slider-block .product-card__image-slider'].swipers[0].activeIndex + 3 &&
    $(this).index() < $mainProductCardImageSlides.length - 1
  ) {
    globalSwiperStorage['.product-card__image-slider-block .product-card__image-slider'].swipers[0].slideNext()
  }

  if ($(this).index() === globalSwiperStorage['.product-card__image-slider-block .product-card__image-slider'].swipers[0].activeIndex && $(this).index() > 0) {
    globalSwiperStorage['.product-card__image-slider-block .product-card__image-slider'].swipers[0].slidePrev()
  }
})

$(document).on('click', '.product-card__image-slider-block .product-card__image-slider-nav--prev', function () {
  const active = $('.product-card__image-slider-block .product-card__image-slide.active').index()

  if (active === 0) {
    changeProductCardMainImage($mainProductCardImageSlides.length - 1)
    globalSwiperStorage['.product-card__image-slider-block .product-card__image-slider'].swipers[0].slideTo($mainProductCardImageSlides.length - 1)
    return
  }

  changeProductCardMainImage(active - 1)

  if (active - 1 === globalSwiperStorage['.product-card__image-slider-block .product-card__image-slider'].swipers[0].activeIndex && active - 1 > 0) {
    globalSwiperStorage['.product-card__image-slider-block .product-card__image-slider'].swipers[0].slidePrev()
  } else {
  }
})

$(document).on('click', '.product-card__image-slider-block .product-card__image-slider-nav--next', function () {
  const active = $('.product-card__image-slider-block .product-card__image-slide.active').index()

  if (active === $mainProductCardImageSlides.length - 1) {
    changeProductCardMainImage(0)
    globalSwiperStorage['.product-card__image-slider-block .product-card__image-slider'].swipers[0].slideTo(0)
    return
  }

  changeProductCardMainImage(active + 1)

  if (active + 1 === globalSwiperStorage['.product-card__image-slider-block .product-card__image-slider'].swipers[0].activeIndex + 3 && active + 1 < $mainProductCardImageSlides.length - 1) {
    globalSwiperStorage['.product-card__image-slider-block .product-card__image-slider'].swipers[0].slideNext()
  }
})

$(document).on('click', '.product-card__image-slider-modal-small .product-card__image-slide', function () {
  if ($(this).hasClass('active')) return

  $('.product-card__image-slider-modal-small .product-card__image-slide').removeClass('active')
  $(this).addClass('active')

  needToSlideSmallProductSlider = false
  globalSwiperStorage['.product-card__image-slider-modal-large .product-card__image-slider'].swipers[0].slideTo($(this).index())
})

$(document).on('click', '.product-card__main-image', function () {
  globalSwiperStorage['.product-card__image-slider-modal-large .product-card__image-slider'].swipers[0].slideTo($(globalSwiperStorage['.product-card__image-slider-block .product-card__image-slider'].swipers[0].el).find('.product-card__image-slide.active').index())
})

$(document).on('click', '.product-card__functions-show-more', function () {
  $('.product-card__functions-show-more').parents('.product-card__functions').toggleClass('opened')
})
