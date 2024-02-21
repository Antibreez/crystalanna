$(document).on('click', '.article-card', function (e) {
  if (!$(this).find('.article-card__link').length) return
  if ($(e.target).closest('.article-card__tag-link').length) return

  window.location.href = $(this).find('.article-card__link').attr('href')
})
