$(window).on('load', function () {
  const $anchorLinks = $('a[href^="#"]')

  const scrollToAnchor = $block => {
    const vw = $(window).outerWidth()
    const delta = vw > 1279 ? 94 : vw > 767 ? 80 : 64 * (vw / 360)
    $('html,body').animate(
      {
        scrollTop: $block.offset().top - delta,
      },
      'slow'
    )
  }

  $anchorLinks.on('click', function (e) {
    e.preventDefault()

    const name = $(this).attr('href').substring(1)

    // console.log(name)

    const $block = $(`[data-id='${name}']`)

    if ($block.length) {
      scrollToAnchor($block)
    }
  })
})
