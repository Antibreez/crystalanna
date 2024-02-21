const headerMenuMobile = new PerfectSB($('.header__menu-mobile'))

$(document).on('click', '.header__menu-button', function () {
  $(this).parents('.header').toggleClass('opened')

  if ($(this).parents('.header').hasClass('opened')) {
    setTimeout(() => {
      headerMenuMobile.init()
    }, 500)
  } else {
    headerMenuMobile.destroy()
  }
})

$('#city-select')
  .find('.modal__body')
  .append($(`<p class="modal__city-no-result">Города с таким названием не найдено</p>`))

// function onCitySearchInput(e) {
//   const $body = $(e.target).parents('.modal__body').first()
//   const $items = $body.find('.modal__city-item')
//   const $empty = $body.find('.modal__city-no-result')

//   if ($(e.target).val().trim() === '') {
//     $items.removeClass('is--hidden')
//   } else {
//     $items.each((idx, i) => {
//       if ($(i).find('a').text().toLowerCase().includes($(e.target).val().toLowerCase())) {
//         $(i).removeClass('is--hidden')
//       } else {
//         $(i).addClass('is--hidden')
//       }
//     })
//   }

//   if (!$items.filter((idx, i) => !$(i).hasClass('is--hidden')).length) {
//     $empty.addClass('is--visible')
//   } else {
//     $empty.removeClass('is--visible')
//   }

//   citySearchList.update()
// }

// $(document).on('input', '.modal__city-search input', debounce(onCitySearchInput, 200))
// $(document).on('click', '.modal__city-search .input-field__clear-button', onCitySearchInput)
