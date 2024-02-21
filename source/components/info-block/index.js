$('.info-block__counter').each((idx, item) => {
  if ($(item).text().length > 5) $(item).addClass('is--small')
})
