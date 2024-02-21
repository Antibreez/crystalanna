;(function () {
  const isCookieAccepted = localStorage.getItem('isCookieAccepted')

  if (!isCookieAccepted) {
    $('.policy-popup').addClass('is--visible')
  }

  $(document).on('click', '.policy-popup__button', function (e) {
    $(e.target).parents('.policy-popup').first().removeClass('is--visible')
    localStorage.setItem('isCookieAccepted', true)
  })
})()
