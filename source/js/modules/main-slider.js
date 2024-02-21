// const slides = $('.main-slider__slide').length
// const frag = $(document.createDocumentFragment)
// for (let i = 0; i < slides.length; i++) {
//   frag.append()
// }

let mainSlideAnimated = false
const mainSlidesAnimated = Array($('.main-slider__slide').length).fill(false)

// const mainSlider = new Swiper('.main-slider__slides', {
//   centeredSlides: true,
//   autoplay: {
//     delay: +$('.main-slider').attr('data-speed'),
//     disableOnInteraction: false,
//     pauseOnMouseEnter: true,
//   },
//   pagination: {
//     el: '.main-slider .main-slider__progress',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.main-slider .main-slider__control--next',
//     prevEl: '.main-slider .main-slider__control--prev',
//   },
//   on: {
//     init() {
//       if ($(window).outerWidth() >= 768) {
//         if ($('.main-slider__slide').eq(0).hasClass('main-slider__slide--main')) {
//           gsap.to(
//             '.main-slider__main-image',
//             1.2,
//             {
//               width: '110%',
//               height: '110%',
//               ease: Power2.easeInOut,
//             },
//             'label'
//           )
//         } else {
//           gsap
//             .timeline()
//             .from($('.main-slider__slide').eq(this.activeIndex).find('.main-slider__text-block')[0], {
//               x: -100,
//               opacity: 0,
//               ease: Power2.Out,
//               duration: 0.4,
//               delay: 0.3,
//             })
//             .from($('.main-slider__slide').eq(this.activeIndex).find('.main-slider__img-block-wrapper')[0], {
//               x: -50,
//               opacity: 0,
//               ease: Power2.Out,
//               duration: 0.8,
//             })
//         }
//       }
//     },
//     autoplayTimeLeft(s, time, progress) {
//       let animated = false
//       const perc = Math.round((1 - progress) * 10000) / 100
//       const bg = `
//         linear-gradient(to right, #151515, #151515 ${perc}%, #F4F4F8 ${perc}%, #F4F4F8)
//       `
//       $('.main-slider .main-slider__progress span').eq(this.activeIndex).css('background', bg)

//       // console.log(time);
//       if (time < 600 && !mainSlidesAnimated[this.activeIndex]) {
//         // console.log(mainSlidesAnimated);
//         mainSlidesAnimated[this.activeIndex] = true

//         const $activeSlide = $('.main-slider__slide').eq(this.activeIndex)

//         if ($activeSlide.hasClass('main-slider__slide--main') && $(window).outerWidth() >= 768) {
//           const tl = gsap
//             .timeline()
//             .to('.main-slider__slide--main', {
//               y: 150,
//               opacity: 0,
//               ease: Power2.easeInOut,
//               duration: 0.8,
//             })
//             .to('.main-slider__slide--main', {
//               y: 0,
//               opacity: 1,
//               duration: 0,
//               delay: 0.5,
//             })
//         }
//       }
//     },
//     slideChange() {
//       $('.main-slider .main-slider__progress span').css('background', '')
//       $('.main-slider .main-slider__progress span').removeClass('is--passed')
//       $('.main-slider .main-slider__progress span').slice(0, this.activeIndex).addClass('is--passed')

//       for (let i = 0; i < mainSlidesAnimated.length; i++) {
//         mainSlidesAnimated[i] = false
//       }

//       // console.log($('.main-slider__slide').eq(this.activeIndex))
//       const $activeSlide = $('.main-slider__slide').eq(this.activeIndex)

//       if (!$activeSlide.hasClass('main-slider__slide--main') && $(window).outerWidth() >= 768) {
//         gsap
//           .timeline()
//           .from($('.main-slider__slide').eq(this.activeIndex).find('.main-slider__text-block')[0], {
//             x: -100,
//             opacity: 0,
//             ease: Power2.Out,
//             duration: 0.4,
//             delay: 0.3,
//           })
//           .from($('.main-slider__slide').eq(this.activeIndex).find('.main-slider__img-block-wrapper')[0], {
//             x: -50,
//             opacity: 0,
//             ease: Power2.Out,
//             duration: 0.8,
//           })
//       }

//       // console.log(mainSlidesAnimated);
//     },
//   },
// })

addSwiperItem('.main-slider__slides', () => ({
  centeredSlides: true,
  autoplay: {
    delay: +$('.main-slider').attr('data-speed'),
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.main-slider .main-slider__progress',
    clickable: true,
  },
  navigation: {
    nextEl: '.main-slider .main-slider__control--next',
    prevEl: '.main-slider .main-slider__control--prev',
  },
  loop: true,
  on: {
    init() {
      if ($(window).outerWidth() >= 768) {
        if ($('.main-slider__slide').eq(0).hasClass('main-slider__slide--main')) {
          gsap.to(
            '.main-slider__main-image',
            1.2,
            {
              width: '110%',
              height: '110%',
              ease: Power2.easeInOut,
            },
            'label'
          )
        } else {
          gsap
            .timeline()
            .from($('.main-slider__slide').eq(this.activeIndex).find('.main-slider__text-block')[0], {
              x: -100,
              opacity: 0,
              ease: Power2.Out,
              duration: 0.4,
              delay: 0.3,
            })
            .from($('.main-slider__slide').eq(this.activeIndex).find('.main-slider__img-block-wrapper')[0], {
              x: -50,
              opacity: 0,
              ease: Power2.Out,
              duration: 0.8,
            })
        }
      }
    },
    autoplayTimeLeft(s, time, progress) {
      let animated = false
      const perc = Math.round((1 - progress) * 10000) / 100
      const bg = `
        linear-gradient(to right, #151515, #151515 ${perc}%, #F4F4F8 ${perc}%, #F4F4F8)
      `
      $('.main-slider .main-slider__progress .swiper-pagination-bullet-active').css('background', bg)

      // console.log(time);
      if (time < 600 && !mainSlidesAnimated[this.activeIndex]) {
        // console.log(mainSlidesAnimated);
        mainSlidesAnimated[this.activeIndex] = true

        const $activeSlide = $('.main-slider__slide').eq(this.activeIndex)

        if ($activeSlide.hasClass('main-slider__slide--main') && $(window).outerWidth() >= 768) {
          const tl = gsap
            .timeline()
            .to('.main-slider__slide--main', {
              y: 150,
              opacity: 0,
              ease: Power2.easeInOut,
              duration: 0.8,
            })
            .to('.main-slider__slide--main', {
              y: 0,
              opacity: 1,
              duration: 0,
              delay: 0.5,
            })
        }
      }
    },
    slideChange() {
      $('.main-slider .main-slider__progress span').css('background', '')
      $('.main-slider .main-slider__progress span').removeClass('is--passed')
      $('.main-slider .main-slider__progress span').slice(0, this.realIndex).addClass('is--passed')

      for (let i = 0; i < mainSlidesAnimated.length; i++) {
        mainSlidesAnimated[i] = false
      }

      // console.log($('.main-slider__slide').eq(this.activeIndex))
      const $activeSlide = $('.main-slider__slide').eq(this.activeIndex)

      if (!$activeSlide.hasClass('main-slider__slide--main') && $(window).outerWidth() >= 768) {
        gsap
          .timeline()
          .from($('.main-slider__slide').eq(this.activeIndex).find('.main-slider__text-block')[0], {
            x: -100,
            opacity: 0,
            ease: Power2.Out,
            duration: 0.4,
            delay: 0.3,
          })
          .from($('.main-slider__slide').eq(this.activeIndex).find('.main-slider__img-block-wrapper')[0], {
            x: -50,
            opacity: 0,
            ease: Power2.Out,
            duration: 0.8,
          })
      }

      // console.log(mainSlidesAnimated);
    },
  },
}))

// const mainNavSliderMobile = new Swiper('.main-slider--mobile .main-slider__nav', {
//   // freeMode: true,
//   slidesPerView: 'auto',
//   pagination: {
//     el: '.main-slider--mobile .main-slider__nav .main-slider__progressbar',
//     type: 'progressbar',
//   },
// })

addSwiperItem('.main-slider--mobile .main-slider__nav', () => ({
  slidesPerView: 'auto',
  pagination: {
    el: '.main-slider--mobile .main-slider__nav .main-slider__progressbar',
    type: 'progressbar',
  },
}))

// const mainSliderMobile = new Swiper('.main-slider__mobile-slides', {
//   // freeMode: true,
//   slidesPerView: 'auto',
//   pagination: {
//     el: '.main-slider__mobile-slides .main-slider__progressbar',
//     type: 'progressbar',
//   },
// })

addSwiperItem('.main-slider__mobile-slides', () => ({
  slidesPerView: 'auto',
  pagination: {
    el: '.main-slider__mobile-slides .main-slider__progressbar',
    type: 'progressbar',
  },
}))
