;['.input-field input', '.input-field textarea'].forEach(field => {
  $(window).on('load', function () {
    $(field).each((idx, item) => {
      if ($(item).val().trim() !== '') {
        $(item).parents('.input-field').addClass('active')
      }
    })
  })

  $(document).on('focus', field, function (e) {
    $(e.currentTarget).parents('.input-field').addClass('active')
  })

  $(document).on('blur', field, function (e) {
    if ($(e.currentTarget).val().trim() !== '') return
    $(e.currentTarget).val('')
    $(e.currentTarget).parents('.input-field').removeClass('active')
  })
})

$(document).on('input', '.input-field.is--search input', function (e) {
  if ($(e.currentTarget).val().trim() !== '') {
    $(e.currentTarget).nextAll('.input-field__clear-button').show()
  } else {
    $(e.currentTarget).nextAll('.input-field__clear-button').hide()
  }
})

$(document).on('click', '.input-field__clear-button', function (e) {
  const $target = $(e.currentTarget)
  $target.prevAll('input').val('')
  $target.hide()
})

const getPhoneInputedValue = ($item) => {
  const value = Inputmask.format($item.inputmask('unmaskedvalue'), {mask: '+7(999) 999-99-99'})
  let idx = value.indexOf('_')
  idx = idx === -1 ? value.length : idx;
  return value.slice(0, idx)
}

const getPhoneInputRightPart = ($item) => {
  const value = Inputmask.format($item.inputmask('unmaskedvalue'), {mask: '+7(999) 999-99-99', placeholder: '0'})
  return value.split(getPhoneInputedValue($item))[1];
}

const addPhoneInputValues = ($item) => {
  const $inner = $item.prev().find('span');
  const $val = getPhoneInputedValue($item)
  $inner.eq(0).text($val)
  $inner.eq(1).text(getPhoneInputRightPart($item))
}

const removePhoneInputValues = ($item) => {
  const $inner = $item.prev().find('span');
  $inner.eq(0).text('')
  $inner.eq(1).text(Inputmask.format('', {mask: '+7(999) 999-99-99', placeholder: '0'}));
}

const initPhoneInput = () => {
  $('.input-field.is--phone').prepend('<div class="input-overlay"><span></span><span></span></div>')

  $('.input-field.is--phone input').inputmask('+7(999) 999-99-99', {
    clearMaskOnLostFocus: false,
    placeholder: '0',
  })

  removePhoneInputValues($('.input-field.is--phone input'))
}

$(document).on('focus', '.input-field.is--phone input', function(e) {

  $(e.target).parent().addClass('is--focused');
  if ($(e.target).inputmask('unmaskedvalue')) return;

  $(e.target).parent().addClass('is--filled');
  addPhoneInputValues($(e.target))
})

$(document).on('blur', '.input-field.is--phone input', function(e) {

  $(e.target).parent().removeClass('is--focused');
  if ($(e.target).inputmask('unmaskedvalue')) return;

  $(e.target).parent().removeClass('is--filled');
  removePhoneInputValues($(e.target))
})

$(document).on('input', '.input-field.is--phone input', function(e) {
  // console.log('###input', $(e.target).inputmask('unmaskedvalue'))
  addPhoneInputValues($(e.target))
  // const value = Inputmask.format($(e.target).inputmask('unmaskedvalue'), {mask: '+7(999) 999-99-99'})
  // let idx = value.indexOf('_')
  // idx = idx === -1 ? value.length : idx;
  // const newValue = value.slice(0, idx)
  // console.log('###value', newValue);
})

initPhoneInput();

// $(window).on('load', function () {
//   $('.input-field input').each((idx, item) => {
//     if ($(item).val().trim() !== '') {
//       $(item).parents('.input-field').addClass('active')
//     }
//   })
// })

// $(document).on('focus', '.input-field input', function (e) {
//   $(e.currentTarget).parents('.input-field').addClass('active')
// })

// $(document).on('blur', '.input-field input', function (e) {
//   if ($(e.currentTarget).val().trim() !== '') return
//   $(e.currentTarget).val('')
//   $(e.currentTarget).parents('.input-field').removeClass('active')
// })

// $(document).on('input', '.input-field.is--search input', function (e) {
//   if ($(e.currentTarget).val().trim() !== '') {
//     $(e.currentTarget).nextAll('.input-field__clear-button').show()
//   } else {
//     $(e.currentTarget).nextAll('.input-field__clear-button').hide()
//   }
// })

// $(document).on('click', '.input-field__clear-button', function (e) {
//   const $target = $(e.currentTarget)
//   $target.prevAll('input').val('')
//   $target.hide()
// })

// $('.input-field.is--phone input').inputmask('+7(999) 999-99-99', {
//   clearMaskOnLostFocus: false,
// })

// $(document).on('input', '.input-field', function(e) {
//   const $target = $(e.currentTarget);

// })
