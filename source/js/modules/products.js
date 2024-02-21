$('.products__item.w-50').each((idx, item) => {
  $(item).attr('data-big-card-id', idx);
})

$('.products__item.w-25').each((idx, item) => {
  $(item).attr('data-small-card-id', idx);
})

$('.products__link-bg-gradient[data-left-color]').each((idx, item) => {
  $(item).find('div').eq(0).css({
    background: $(item).attr('data-left-color'),
  })
})

$('.products__link-bg-gradient[data-right-color]').each((idx, item) => {
  $(item).find('div').eq(1).css({
    background: $(item).attr('data-right-color'),
  })
})
