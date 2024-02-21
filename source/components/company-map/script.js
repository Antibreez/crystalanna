// $('.company-map__underlayer').parallax({
//   mirrorContainer: '.company-map__mirror-container',
//   // naturalWidth: '2350px',
//   speed: 0.1,
// })

// const mapUnderlayerImgStyles = {
//   marginTop: `-${$('.company-map__underlayer img').outerHeight() / 2}px`,
// }

// const mapUnderlayerStyles = {
//   width: `${$('.company-map__underlayer').parent().outerWidth()}px`,
//   //height: `${$('.company-map__underlayer').parent().height()}px`,
//   marginLeft: `-${$('.company-map__underlayer').parent().outerWidth() / 2}px`,
// }

// $('.company-map__underlayer img').css(mapUnderlayerImgStyles)
// $('.company-map__underlayer').css(mapUnderlayerStyles)
function makeCompanyMapBranch(place) {
  const placeNode = $('#map-place').prop('content')
  const $place = $(placeNode).find('.company-map__place').clone()
  $place.css({
    left: `${place.x}%`,
    bottom: `${place.y}%`,
  })

  $place.find('.company-map__popup-city').text(place.name)
  $place.find('.company-map__popup-label:contains("Адрес")').next().text(place.address)
  const $tel = $place.find('.company-map__popup-label:contains("Телефон")').next()
  $tel.children().html(place.telephone)
  $tel
    .children()
    .attr('href', `tel:${place.telephone.split('-').join('').split(' ').join('').split('&nbsp;').join('')}`)
  const $email = $place.find('.company-map__popup-label:contains("Почта")').next()
  $email.children().html(place.email)
  $email.children().attr('href', `mailto:${place.email}`)
  $place.find('.company-map__popup-about-link').attr('href', place.link)
  return $place
}

function setCompanyMapBranches(branches) {
  const $mapPlacesFragment = $(document.createDocumentFragment())

  branches.forEach(item => {
    const $place = makeCompanyMapBranch(item)
    $mapPlacesFragment.append($place)
  })
  $('.company-map__places').html($mapPlacesFragment)
}

function addCompanyMapBranches(branches) {
  const $mapPlacesFragment = $(document.createDocumentFragment())

  branches.forEach(item => {
    const $place = makeCompanyMapBranch(item)
    $mapPlacesFragment.append($place)
  })
  $('.company-map__places').append($mapPlacesFragment)
}

$(window).on('load', function () {
  $(this).trigger('scroll')
})

$(window).on('resize', function () {
  $(this).trigger('scroll')

  // mapUnderlayerImgStyles.marginTop = `-${$('.company-map__underlayer img').outerHeight() / 2}px`

  // mapUnderlayerStyles.width = `${$('.company-map__underlayer').parent().outerWidth()}px`
  // //mapUnderlayerStyles.height = `${$('.company-map__underlayer').parent().height()}px`
  // mapUnderlayerStyles.marginLeft = `-${$('.company-map__underlayer').parent().outerWidth() / 2}px`

  // $('.company-map__underlayer img').css(mapUnderlayerImgStyles)
  // $('.company-map__underlayer').css(mapUnderlayerStyles)
})

// const $mapPlacesFragment = $(document.createDocumentFragment())

try {
  setCompanyMapBranches(companyMapBranches)

  // companyMapBranches.forEach(item => {
  //   const placeNode = $('#map-place').prop('content')
  //   const $place = $(placeNode).find('.company-map__place').clone()
  //   $place.css({
  //     left: `${item.x}%`,
  //     bottom: `${item.y}%`,
  //   })

  //   $place.find('.company-map__popup-city').text(item.name)
  //   $place.find('.company-map__popup-label:contains("Адрес")').next().text(item.address)
  //   const $tel = $place.find('.company-map__popup-label:contains("Телефон")').next()
  //   $tel.children().html(item.telephone)
  //   $tel
  //     .children()
  //     .attr('href', `tel:${item.telephone.split('-').join('').split(' ').join('').split('&nbsp;').join('')}`)
  //   const $email = $place.find('.company-map__popup-label:contains("Почта")').next()
  //   $email.children().html(item.email)
  //   $email.children().attr('href', `mailto:${item.email}`)
  //   $place.find('.company-map__popup-about-link').attr('href', item.link)
  //   $mapPlacesFragment.append($place)
  //   $('.company-map__places').append($mapPlacesFragment)
  // })
} catch {
  //console.log('catch')
}

$(document).on('click', '.company-map__pin-btn', function () {
  if ($(this).parent().hasClass('opened')) {
    $(this).parent().removeClass('opened')
  } else {
    $('.company-map__place').removeClass('opened')
    $(this).parent().addClass('opened')
  }
})

$(document).on('click', function (e) {
  if ($(e.target).closest('.company-map__place').length) return
  $('.company-map__place').removeClass('opened')
})

$(document).on('click', '.company-map__popup-close', function () {
  $(this).parents('.company-map__place').removeClass('opened')
})

$(window).on('scroll', function() {
  const $map = $('.company-map')
  if (!$map.length) return;

  const $text = $('.company-map__underlayer-text')

  if (
    $text.offset().top - $map.offset().top < 0
    || $map.offset().top + $map.outerHeight() - $text.offset().top < 0
  ) {
    $text.addClass('hidden')
  } else {
    $text.removeClass('hidden')
  }


})
