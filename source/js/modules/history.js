const prepareHistoryDatesSlider = () => {
  $('.history__dates-slide').each((idx, item) => {
    const text = $(item).text()
    $(item).html(`<span>${text}</span><span>${text}</span>`)
  })

  const $fragment = $(document.createDocumentFragment())

  const $prevBtn = $('.history__dates-nav--prev')
    .clone()
    .removeClass('history__dates-nav history__dates-nav--prev')
    .addClass('history__dates-btn history__dates-btn--prev')

  const $nextBtn = $('.history__dates-nav--next')
    .clone()
    .removeClass('history__dates-nav history__dates-nav--next')
    .addClass('history__dates-btn history__dates-btn--next')

  $fragment.append($prevBtn).append($nextBtn).insertAfter('.history__dates-nav--next')

  $('.history__cards-section').eq($('.history__dates-slide.active').index()).show()
}

const checkIfDisabled = $slide => {
  if ($slide.index() === 0) {
    $('.history__dates-inner').addClass('is--left-slide')
  } else {
    $('.history__dates-inner').removeClass('is--left-slide')
  }

  if ($slide.index() === $('.history__dates-slide').length - 1) {
    $('.history__dates-inner').addClass('is--right-slide')
  } else {
    $('.history__dates-inner').removeClass('is--right-slide')
  }
}

prepareHistoryDatesSlider()

// const historyDatesSlider = new Swiper('.history__dates-slider', {
//   slidesPerView: 'auto',
//   spaceBetween: 8,
//   centeredSlides: true,
//   navigation: {
//     prevEl: '.history__dates-nav--prev',
//     nextEl: '.history__dates-nav--next',
//   },
//   on: {
//     slideChange() {
//       if ($(window).outerWidth() < 768) {
//         $('.history__dates-slide').removeClass('active')
//         $('.history__dates-slide').eq(this.activeIndex).addClass('active')
//         $('.history__cards-section').hide()
//         $('.history__cards-section').eq(this.activeIndex).show()
//       }
//     },
//     toEdge() {
//       if ($('.history__dates-nav--prev.swiper-button-disabled').length) {
//         $('.history__dates-inner').addClass('is--swiped-left')
//       } else {
//         $('.history__dates-inner').removeClass('is--swiped-left')
//       }

//       if ($('.history__dates-nav--next.swiper-button-disabled').length) {
//         $('.history__dates-inner').addClass('is--swiped-right')
//       } else {
//         $('.history__dates-inner').removeClass('is--swiped-right')
//       }
//     },
//   },

//   breakpoints: {
//     768: {
//       slidesPerView: 'auto',
//       spaceBetween: 8,
//       centeredSlides: false,
//     },
//   },
// })

addSwiperItem('.history__dates-slider', () => ({
  slidesPerView: 'auto',
  spaceBetween: 8,
  centeredSlides: true,
  navigation: {
    prevEl: '.history__dates-nav--prev',
    nextEl: '.history__dates-nav--next',
  },
  on: {
    slideChange() {
      if ($(window).outerWidth() < 768) {
        $('.history__dates-slide').removeClass('active')
        $('.history__dates-slide').eq(this.activeIndex).addClass('active')
        $('.history__cards-section').hide()
        $('.history__cards-section').eq(this.activeIndex).show()
      }
    },
    toEdge() {
      if ($('.history__dates-nav--prev.swiper-button-disabled').length) {
        $('.history__dates-inner').addClass('is--swiped-left')
      } else {
        $('.history__dates-inner').removeClass('is--swiped-left')
      }

      if ($('.history__dates-nav--next.swiper-button-disabled').length) {
        $('.history__dates-inner').addClass('is--swiped-right')
      } else {
        $('.history__dates-inner').removeClass('is--swiped-right')
      }
    },
  },

  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 8,
      centeredSlides: false,
    },
  },
}))

$(document).on('click', '.history__dates-slide', function () {
  if ($(this).hasClass('active')) return

  $('.history__dates-slide').removeClass('active')
  $(this).addClass('active')
  $('.history__cards-section').hide()
  $('.history__cards-section').eq($(this).index()).show()

  if ($(window).outerWidth() < 768) {
    // historyDatesSlider.slideTo($(this).index())
    globalSwiperStorage['.history__dates-slider'].swipers[0].slideTo($(this).index())
    return
  }

  if (
    $('.history__dates-slider').offset().left +
      $('.history__dates-slider').outerWidth() -
      ($(this).offset().left + $(this).outerWidth()) <
    20
  ) {
    // historyDatesSlider.slideTo(historyDatesSlider.activeIndex + 2)
    globalSwiperStorage['.history__dates-slider'].swipers[0]
      .slideTo(globalSwiperStorage['.history__dates-slider'].swipers[0].activeIndex + 2)
  }

  if ($(this).offset().left - $('.history__dates-slider').offset().left < 20) {
    console.log('slideprev')
    // historyDatesSlider.slideTo(historyDatesSlider.activeIndex - 2)
    globalSwiperStorage['.history__dates-slider'].swipers[0]
    .slideTo(globalSwiperStorage['.history__dates-slider'].swipers[0].activeIndex - 2)
  }

  checkIfDisabled($(this))
})

$(document).on('click', '.history__dates-btn--prev', function () {
  const idx = $('.history__dates-slide.active').index()

  if (idx > 0) {
    $('.history__dates-slide').removeClass('active')
    $('.history__dates-slide')
      .eq(idx - 1)
      .addClass('active')
    $('.history__cards-section').hide()
    $('.history__cards-section')
      .eq(idx - 1)
      .show()

    if (
      $('.history__dates-slide')
        .eq(idx - 1)
        .offset().left -
        $('.history__dates-slider').offset().left <
      20
    ) {
      console.log('slideprev')
      // historyDatesSlider.slideTo(historyDatesSlider.activeIndex - 1)

      globalSwiperStorage['.history__dates-slider'].swipers[0]
        .slideTo(globalSwiperStorage['.history__dates-slider'].swipers[0].activeIndex - 1)
    }
  }

  checkIfDisabled($('.history__dates-slide.active'))
})

$(document).on('click', '.history__dates-btn--next', function () {
  const idx = $('.history__dates-slide.active').index()

  if (idx < $('.history__dates-slide').length - 1) {
    $('.history__dates-slide').removeClass('active')
    $('.history__dates-slide')
      .eq(idx + 1)
      .addClass('active')
    $('.history__cards-section').hide()
    $('.history__cards-section')
      .eq(idx + 1)
      .show()

    if (
      $('.history__dates-slider').offset().left +
        $('.history__dates-slider').outerWidth() -
        ($('.history__dates-slide')
          .eq(idx + 1)
          .offset().left +
          $('.history__dates-slide')
            .eq(idx + 1)
            .outerWidth()) <
      20
    ) {
      console.log('slidenext')
      // historyDatesSlider.slideTo(historyDatesSlider.activeIndex + 1)
      globalSwiperStorage['.history__dates-slider'].swipers[0]
        .slideTo(globalSwiperStorage['.history__dates-slider'].swipers[0].activeIndex + 1)
    }
  }

  checkIfDisabled($('.history__dates-slide.active'))
})
