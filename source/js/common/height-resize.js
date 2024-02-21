let vh = window.innerHeight * 0.01

const onResize = () => {
  let vh = window.innerHeight * 0.01
  $('html').css('--vh', `${vh}px`)
}

$('html').css('--vh', `${vh}px`)

$(window).on('resize', debounce(onResize, 200))
