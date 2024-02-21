const $charsTableSlider = $('.chars-table__slider')
const $charsTableSlide = $('.chars-table__slide')
const $charsTableDragIcon = $('.chars-table__drag-icon')

// const charsTable = new Swiper('.chars-table__slider', {
//   freeMode: true,
//   slidesPerView: 'auto',
//   grabCursor: true,
//   scrollbar: {
//     el: '.chars-table__progress',
//   },
//   on: {
//     init() {
//       if (this.isLocked) {
//         $(this.el).addClass('is--locked')
//       }
//     },
//   },
// })

addSwiperItem('.chars-table__slider', () => ({
  freeMode: true,
  slidesPerView: 'auto',
  grabCursor: true,
  scrollbar: {
    el: '.chars-table__progress',
  },
  on: {
    init() {
      if (this.isLocked) {
        $(this.el).addClass('is--locked')
      }
    },
  },
}))

const setCharsTableDragIconPosition = () => {
  const gap =
    ($(window).outerWidth() - $charsTableSlider.outerWidth()) / 2 +
    $charsTableSlide.outerWidth() -
    $(window).outerWidth()

  // console.log(gap);

  if (gap > 0) {
    $charsTableDragIcon.css({right: 40})
    return
  }

  $charsTableDragIcon.css({right: gap * -1 + 40})
}

$(document).on('click', '.chars-table__show-more', function () {
  $(this).toggleClass('opened')
  if ($(this).hasClass('opened')) {
    $('.chars-table__hidden-block').show()
  } else {
    $('.chars-table__hidden-block').hide()
  }

  const $slider = $(this).parents('.chars-table__slider').first();
  const swiper = $slider[0].swiper;

  setTimeout(() => {
    swiper.update();

    if (swiper.isLocked) {
      $slider.addClass('is--locked')
    } else {
      $slider.removeClass('is--locked')
    }
  }, 100)
})

$(window).on('resize', debounce(setCharsTableDragIconPosition, 200))

setCharsTableDragIconPosition()
