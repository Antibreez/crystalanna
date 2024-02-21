;(function () {
  // window.catalogTagsSlider = new Swiper('.catalog__tags-slider', {
  //   slidesPerView: 'auto',
  // })

  addSwiperItem('.catalog__tags-slider', () => ({
    slidesPerView: 'auto'
  }))

  $(document).on('click', '.filter-section__title', function () {
    $(this).parent().toggleClass('filter-section_open')
  })

  $(document).on('click', '.catalog__filters-button', function () {
    $('.catalog-section__aside').addClass('catalog-section__aside_open')
  })

  $(document).on('click', '.filter-mobile-header__close', function (e) {
    e.preventDefault()

    $('.catalog-section__aside').removeClass('catalog-section__aside_open')
  })

  const $checkboxes = $('.catalog-section__aside input[type="checkbox"]')
  const $filterClearButton = $('.catalog-section__aside .filter-footer__reset')

  let checked = $checkboxes.toArray().some(function (item) {
    return item.checked
  })

  !checked && $filterClearButton.attr('disabled', true)

  // $checkboxes.on('change', function () {
  //   checked = $checkboxes.toArray().some(function (item) {
  //     return item.checked
  //   })

  //   checked ? $filterClearButton.attr('disabled', false) : $filterClearButton.attr('disabled', true)
  // })

  // $(document).on('change', '.catalog-section__aside input[type="checkbox"]', function() {
  //   console.log($('.catalog-section__aside input[type="checkbox"]').length)
  //   console.log($filterClearButton)
  //   console.log($(this)[0].checked)

  // })

  window.checkCatalogFilters = () => {
    checked = $('.catalog-section__aside input[type="checkbox"]').toArray().some(function (item) {
      return item.checked
    })

    checked ? $filterClearButton.attr('disabled', false) : $filterClearButton.attr('disabled', true)
  }
})()
