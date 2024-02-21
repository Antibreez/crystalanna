// const $branchesCountrySelect = $('#branches-country-select')

// $(document).on('click', '#branches-country-select .modal__city-link', function(e) {
//   $('#branches-country-select .modal__city-link').removeClass('active')
//   $(e.target).addClass('active')
//   $branchesCountrySelect.find('.modal__title-close-button').trigger('click');
//   $('#branches-country').val($(e.target).text()).trigger('change');
// })

// $('#branches-country').on('select2:select', function() {
//   $('#branches-country-select .modal__city-link').removeClass('active');

//   const text = $(this).val();
//   $('#branches-country-select .modal__city-link').filter(function() {
//     return $(this).text() === text
//   }).addClass('active')
// })

$(document).on('click', '.table__branch-info-button', function (e) {
  const $branchInfoModal = $('#branch-info-modal')
  const $branchInfoModalName = $branchInfoModal.find('.modal__branch-name')
  const $branchInfoModalItems = $branchInfoModal.find('.modal__branch-info-items')

  const $row = $(e.target).parents('.table__row').first()
  const $cells = $row.find('.table__row-cell')

  $branchInfoModalName.text($row.find('.table__branch-name').text())

  const $fragment = $(document.createDocumentFragment())

  $cells.each((idx, cell) => {
    if (idx === 0) return

    if (idx === $cells.length - 1) {
      const $branchInfo = $(cell).find('.table__branch-info:not(.is--empty)')

      if ($branchInfo.length) {
        $branchInfo.each((id, info) => {
          $fragment.append(`<div class="modal__branch-info-item">${$(info).html()}</div>`)
        })
      }
    } else {
      $fragment.append(`<div class="modal__branch-info-item">${$(cell).html()}</div>`)
    }
  })

  $branchInfoModalItems.html($fragment)
})
