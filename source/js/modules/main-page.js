if ($('.page-main').length && $('.main-slider__slides').length) {
  const mainSliderHeight = $('.main-slider').outerHeight()

  $(document).on('scroll', function () {
    const offset = $('.main-slider').offset().top + (mainSliderHeight / 2 - 100) - $(document).scrollTop()

    if (offset < 0) {
      $('.header').addClass('is--visible')
    } else {
      $('.header').removeClass('is--visible')
    }
  })
}
