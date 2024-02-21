const getOptions = item => {
  const options = {}
  if (!item.is('[data-search]')) {
    options.minimumResultsForSearch = Infinity
  } else {
    options.language = {
      noResults: function () {
        return 'Ничего не найдено'
      },
    }
  }

  return options
}

const initSelect = item => {
  const options = getOptions(item)

  const firstOption = item.find('option').eq(0)

  if (firstOption.val() !== '' && item.is('[data-empty]')) {
    item.prepend('<option hidden disabled></option>').val('')
  }

  if (item.is('[data-empty]')) {
    options.dropdownCssClass = 'select2-dropdown-first-empty'
  }

  item.select2(options)
  if (item.is('[data-search]')) {
    item.on('select2:open', function () {
      if (!$('.select2-search-close').length) {
        const $closeBtn = $(
          `<button class="select2-search-close"><svg><use xlink:href="${assetsPath}img/sprite.svg#close"></use></svg></button>`
        )

        $('.select2-dropdown > .select2-search').append($closeBtn)

        $closeBtn.on('click', function () {
          $(this).parent().removeClass('is--filled')
          $(this).prev().val('')
          $(this).prev().trigger('input')
        })
      }

      if (!$('.select2-search-icon').length) {
        const $searchIcon = $(
          `<button class="select2-search-icon"><svg><use xlink:href="${assetsPath}img/sprite.svg#search"></use></svg></button>`
        )
        $('.select2-dropdown > .select2-search').append($searchIcon)
      }
    })
  }
  // addFocusEventListeners(['.select-field .select2-selection'])
}

$(document).on('input', '.select2-search__field', function () {
  if ($(this).val().trim() !== '') {
    $(this).parent().addClass('is--filled')
  } else {
    $(this).parent().removeClass('is--filled')
  }
})

// $('.select-field select').each((idx, item) => {
//   let focused = false

//   initSelect($(item))

//   $(item).on('select2:open', function () {
//     focused = $(this).next().find('.select2-selection').attr('class').includes('focused')

//     setTimeout(() => {
//       const select2OptionsSB = new PerfectSB($('.select2-results__options'))

//       select2OptionsSB.init({
//         wheelPropagation: false,
//       })
//     }, 100)
//   })

//   $(item).on('select2:select', function () {
//     $(this).attr('data-selected', '')

//     if (focused) {
//       return
//     }

//     $(this).next().find('.select2-selection').removeClass('focused')
//   })
// })

$(document).on('click', '.select-field__modal-search-link', function (e) {
  const $modal = $(e.target).parents('.select-field__modal').first()
  const id = $modal.attr('id')
  const $link = $(`a[href="#${id}"]`)
  const $select = $link.parent().find('select')
  $modal.find('.select-field__modal-search-link').removeClass('active')
  $(e.target).addClass('active')
  $modal.find('.select-field__modal-title-close-button').trigger('click')
  $select.val($(e.target).attr('data-id')).trigger('change.select2')
})

// $('select').on('select2:select', function () {
//   const $link = $(this).parent().find('.select-field__mobile-button')
//   const id = $link.attr('href')
//   const $modal = $(id)

//   const $links = $modal.find('.select-field__modal-search-link')

//   $links.removeClass('active')
//   const text = $(this).val()
//   $links
//     .filter(function () {
//       return $(this).text() === text
//     })
//     .addClass('active')
// })

const initAllSelect2 = () => {
  $('.select-field select').each((idx, item) => {
    if (!$(item).data('select2')) {
      let focused = false

      initSelect($(item))

      $(item).on('select2:open', function () {
        focused = $(this).next().find('.select2-selection').attr('class').includes('focused')

        setTimeout(() => {
          const select2OptionsSB = new PerfectSB($('.select2-results__options'))

          select2OptionsSB.init({
            wheelPropagation: false,
          })
        }, 100)
      })

      $(item).on('select2:select', function () {
        $(this).attr('data-selected', '')

        if (focused) {
          return
        }

        $(this).next().find('.select2-selection').removeClass('focused')
      })

      $(item).on('select2:select', function () {
        const $link = $(this).parent().find('.select-field__mobile-button')
        const id = $link.attr('href')
        const $modal = $(id)

        const $links = $modal.find('.select-field__modal-search-link')

        $links.removeClass('active')
        const text = $(this).val()
        $links
          .filter(function () {
            return $(this).attr('data-id') === text
          })
          .addClass('active')
      })
    } else {
      console.error(`${$(item).attr('name')} select2 уже инициализирован`)
    }
  })
}

const initSelect2ByClass = cl => {
  if (!$(cl).data('select2')) {
    const $item = $(cl)

    let focused = false

    initSelect($item)

    $item.on('select2:open', function () {
      focused = $item.next().find('.select2-selection').attr('class').includes('focused')

      setTimeout(() => {
        const select2OptionsSB = new PerfectSB($('.select2-results__options'))

        select2OptionsSB.init({
          wheelPropagation: false,
        })
      }, 100)
    })

    $item.on('select2:select', function () {
      $item.attr('data-selected', '')

      if (focused) {
        return
      }

      $item.next().find('.select2-selection').removeClass('focused')
    })

    $item.on('select2:select', function () {
      const $link = $(this).parent().find('.select-field__mobile-button')
      const id = $link.attr('href')
      const $modal = $(id)

      const $links = $modal.find('.select-field__modal-search-link')

      $links.removeClass('active')
      const text = $(this).val()
      $links
        .filter(function () {
          return $(this).text() === text
        })
        .addClass('active')
    })
  } else {
    console.error(`${$item.attr('name')} select2 уже инициализирован`)
  }
}

initAllSelect2()
