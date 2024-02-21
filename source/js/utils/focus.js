let onMouseMove

$(document).on('mousedown', function () {
  $('html').addClass('clicking')
})

$(document).on('mouseup', function () {
  $('html').removeClass('clicking')
})

$(window).on('focus', function () {
  $(document.activeElement).addClass('window-focus')
})

$(document).on('keydown', function (e) {
  if (e.key === 'Tab') {
    $('html').removeClass('clicking')
  }
})

const addFocusEventListeners = items => {
  items.forEach(item => {
    $(document).on('focus', item, function (e) {
      if ($(e.currentTarget).hasClass('window-focus')) {
        $(e.currentTarget).removeClass('window-focus')
        return
      }

      if ($('html').hasClass('clicking')) return

      $(e.currentTarget).addClass('focused')
    })

    $(document).on('blur', item, function (e) {
      $(e.currentTarget).removeClass('focused')
    })

    $(document).on('mousedown', item, function (e) {
      $(e.currentTarget).removeClass('focused')
    })

    // $(document).on('mousedown', item, function (e) {
    //   $(e.currentTarget).addClass('clicking')
    //   $(e.currentTarget).removeClass('focused')

    //   onMouseMove = () => {
    //     console.log('mousemove')
    //     $(e.currentTarget).removeClass('clicking')
    //     $(document).off('mousemove', onMouseMove)
    //   }

    //   $(document).on('mousemove', onMouseMove)
    // })

    // $(document).on('mouseleave', item, function (e) {
    //   $(e.currentTarget).removeClass('clicking')
    // })

    // $(document).on('mouseup', item, function (e) {
    //   $(e.currentTarget).removeClass('clicking')
    //   $(document).off('mousemove', onMouseMove)
    // })
  })
}

// let onKeyup

// // let ku

// $(document).on('keydown', function (e) {
//   console.log('###down', e.key)

//   const ku = function (evt) {
//     console.log('###up', evt.key)

//     $(document).off('keyup', ku)
//   }

//   $(document).on('keyup', ku)
// })

// const addFocusEventListeners = items => {
//   items.forEach(item => {
//     $(document).on('focus', item, function (evt) {
//       // console.log('####focus', $(evt.currentTarget))
//       // $(item).removeClass('focused')
//       onKeyup = function (e) {
//         if (e.key === 'Tab') {
//           // console.log('#####tab', $(evt.currentTarget))
//           $(evt.currentTarget).addClass('focused')
//         }

//         $(document).off('keyup', onKeyup)
//       }
//       $(document).on('keyup', onKeyup)
//     })

//     $(document).on('blur', item, function (evt) {
//       // console.log('####blur', $(evt.target))
//       $(evt.target).removeClass('focused')
//       $(evt.target).off('keyup', onKeyup)
//     })

//     $(document).on('mousedown', item, function (e) {
//       // console.log('###mousedown')
//       $(e.target).removeClass('focused')
//     })
//   })
// }

// $(document).on('click', function () {
//   const data = $._data(document, 'events')
//   const all = Object.values(data).reduce((prev, next) => prev + next.length, 0)
//   console.log(all)
//   console.log(data)
// })
