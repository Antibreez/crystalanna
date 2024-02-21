// const slides = $('.main-slider__slide').length
// const frag = $(document.createDocumentFragment)
// for (let i = 0; i < slides.length; i++) {
//   frag.append()
// }

// const objectsSlider = new Swiper('.objects-slider__slides', {
//   centeredSlides: true,
//   autoplay: {
//     delay: +$('.objects-slider').attr('data-speed'),
//     disableOnInteraction: false,
//     pauseOnMouseEnter: true,
//   },
//   pagination: {
//     el: '.objects-slider .main-slider__progress',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.objects-slider .main-slider__control--next',
//     prevEl: '.objects-slider .main-slider__control--prev',
//   },
//   on: {
//     autoplayTimeLeft(s, time, progress) {
//       const perc = Math.round((1 - progress) * 10000) / 100
//       const bg = `
//         linear-gradient(to right, #151515, #151515 ${perc}%, #F4F4F8 ${perc}%, #F4F4F8)
//       `
//       $('.objects-slider .main-slider__progress span').eq(this.activeIndex).css('background', bg)
//     },
//     slideChange() {
//       $('.objects-slider .main-slider__progress span').css('background', '')
//       $('.objects-slider .main-slider__progress span').removeClass('is--passed')
//       $('.objects-slider .main-slider__progress span').slice(0, this.activeIndex).addClass('is--passed')
//     },
//   },
// })

addSwiperItem('.objects-slider__slides', () => ({
  centeredSlides: true,
  autoplay: {
    delay: +$('.objects-slider').attr('data-speed'),
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.objects-slider .main-slider__progress',
    clickable: true,
  },
  navigation: {
    nextEl: '.objects-slider .main-slider__control--next',
    prevEl: '.objects-slider .main-slider__control--prev',
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      const perc = Math.round((1 - progress) * 10000) / 100
      const bg = `
        linear-gradient(to right, #151515, #151515 ${perc}%, #F4F4F8 ${perc}%, #F4F4F8)
      `
      $('.objects-slider .main-slider__progress span').eq(this.activeIndex).css('background', bg)
    },
    slideChange() {
      $('.objects-slider .main-slider__progress span').css('background', '')
      $('.objects-slider .main-slider__progress span').removeClass('is--passed')
      $('.objects-slider .main-slider__progress span').slice(0, this.activeIndex).addClass('is--passed')
    },
  },
}))
