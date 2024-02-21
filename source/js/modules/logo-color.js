$(window).on('load', () => {
  // const whiteBrandLogo = $(`.product-card__stats-logo[src*="primera"]`)
  // const copyLogo = whiteBrandLogo.clone()
  // // copyLogo.css({
  // //   filter: 'invert(1)',
  // // })

  // // console.log(whiteBrandLogo.width())

  // const $div = $('<div class="product-card__stats-logo-wrapper"></div>')
  // // $div.css({
  // //   position: 'relative'
  // // })
  // $div.append(whiteBrandLogo)

  // const $divInner = $('<div></div>')
  // // $divInner.css({
  // //   width: `${whiteBrandLogo.width() - 28}px`,
  // //   height: `${whiteBrandLogo.height()}px`,
  // //   overflow: 'hidden'
  // // })
  // $divInner.append(copyLogo)
  // $divInner.css({
  //   width: '81%',
  // })
  // $div.append($divInner)

  // $('.product-card__stats').prepend($div)

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  function invertBrandLogoColor(brandName, directions, amount = 1) {
    let left = (directions && directions.left) || 0
    let right = (directions && directions.right) || 0
    let top = (directions && directions.top) || 0
    let bottom = (directions && directions.bottom) || 0

    let whiteBrandLogo
    whiteBrandLogo = $(`.product-card__stats-logo[src*="${brandName}"]`)

    if (!whiteBrandLogo.length) whiteBrandLogo = $(`.product-card__stats-logo[src*="${brandName.toLowerCase()}"]`)
    if (!whiteBrandLogo.length)
      whiteBrandLogo = $(`.product-card__stats-logo[src*="${capitalizeFirstLetter(brandName.toLowerCase())}"]`)
    if (!whiteBrandLogo.length) whiteBrandLogo = $(`.product-card__stats-logo[src*="${brandName.toUpperCase()}"]`)

    if (!whiteBrandLogo) return
    const copyLogo = whiteBrandLogo.clone()
    const $div = $('<div class="product-card__stats-logo-wrapper"></div>')
    $div.append(whiteBrandLogo)
    const $divInner = $('<div></div>')
    $divInner.append(copyLogo)

    $divInner.css({
      width: `${100 - left - right}%`,
      height: `${100 - top - bottom}%`,
      left: `${left}%`,
      right: `${right}%`,
      top: `${top}%`,
      bottom: `${bottom}%`,
    })

    const x = 100 / (100 - left - right)
    const y = 100 / (100 - top - bottom)

    copyLogo.css({
      filter: `invert(${amount})`,
      height: `${y * 100}%`,
      top: `${-1 * top * y}%`,
      right: `${-1 * right * x}%`,
    })
    $div.append($divInner)

    $('.product-card__stats').prepend($div)
  }

  invertBrandLogoColor('Primera', {left: 19})
})
