$(document).on('scroll', function() {
  if ($(document).scrollTop() > $(window).outerHeight() / 2) {
    $('.button-up').addClass('is--visible')
  } else {
    $('.button-up').removeClass('is--visible')
  }
})

$(document).on('click', '.button-up', function() {
  $('html,body').animate(
    {
      scrollTop: 0,
    },
  )
})
