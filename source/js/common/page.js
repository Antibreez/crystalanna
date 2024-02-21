// $(window).on('load', function () {
//   const $links = $('a:not([href^="#"])')

//   $links.on('click', function (e) {
//     // e.preventDefault()
//     $('.page-preloader').removeClass('is--hidden');
//     // setTimeout(() => {
//     //   window.location.href = $(this).attr('href');
//     //   $('.page-preloader').addClass('is--hidden');
//     // }, 500);
//   })
// })
if (!$('.page__promo').find('.page__promo-image').length) {
  $('.page__promo').addClass('is--no-image')
}

if ($('.page__title-block-content').find('.is--small').length) {
  $('.page__title-block-content').addClass('is--small-title')
}
