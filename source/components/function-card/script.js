$(document).on('click', '.function-card', function() {
  const $modal = $('.modal--function-card');

  $modal
    .find('.modal__title span')
    .text($(this).find('.function-card__text').text());
  $modal
    .find('.modal__function-icon img')
    .attr('src', $(this).find('.function-card__icon').attr('src'));

  $modal
    .find('.modal__desc')
    .text($(this).find('.function-card__full-desc').text());
})
