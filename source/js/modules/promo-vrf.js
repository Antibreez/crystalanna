// $('.promo-vrf__about-slider-block').each((idx, slider) => {
//   const vrfSlider = new Swiper($(slider).find('.swiper')[0], {
//     navigation: {
//       nextEl: $(slider).find('.main-slider__control--next')[0],
//       prevEl: $(slider).find('.main-slider__control--prev')[0],
//     },
//     pagination: {
//       el: $(slider).find('.main-slider__bullets')[0],
//       clickable: true,
//     },
//   })
// })

addSwiperItem('.promo-vrf__about-slider', (slider) => {
  const $sliderBlock = $(slider).parent();

  return {
    navigation: {
      nextEl: $sliderBlock.find('.main-slider__control--next')[0],
      prevEl: $sliderBlock.find('.main-slider__control--prev')[0],
    },
    pagination: {
      el: $sliderBlock.find('.main-slider__bullets')[0],
      clickable: true,
    },
  }
})

$(document).on('click', '.promo-vrf__about-details-nav-button', function (e) {
  const $button = $(e.target)

  if ($button.hasClass('active')) return

  $('.promo-vrf__about-details-nav-button').removeClass('active')
  $button.addClass('active')

  $('.promo-vrf__about-details-item').hide()
  $('.promo-vrf__about-details-item').eq($button.index()).show()
})

if ($('.promo-vrf__about-card').length) {
  const $fragment = $(document.createDocumentFragment())
  $('.promo-vrf__about-cards-others .promo-vrf__about-card').each((idx, item) => {
    if (idx > 1) {
      $fragment.append($(item).clone())
    }
  })

  $('.promo-vrf__about-cards-inner').append($fragment)
}

$('<div class="divider"></div>').insertAfter($('.promo-vrf__areas-card').eq(2))
$('<div class="divider"></div>').insertAfter($('.promo-vrf__areas-card').eq($('.promo-vrf__areas-card').length - 4))

const promoVrfRequestForm = new Form('#form-vrf-request')
