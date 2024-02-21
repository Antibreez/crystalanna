if ($('.nav-panel').length) {

  // globalSwiperStorage['.nav-panel__slider'] = {
  //   swiper: null,
  //   init: function() {
  //     this.swiper = new Swiper('.nav-panel__slider', {
  //       slidesPerView: 'auto',
  //     })
  //   }
  // }

  // globalSwiperStorage['.nav-panel__slider'].init()

  addSwiperItem('.nav-panel__slider', () => ({
    slidesPerView: 'auto',
  }))

  // new Swiper('.nav-panel__slider', {
  //   slidesPerView: 'auto',
  // })

  // globalSwiperStorage['.nav-panel__slider-mobile'] = {
  //   swiper: null,
  //   init: function() {
  //     this.swiper = new Swiper('.nav-panel__slider-mobile', {
  //       slidesPerView: 'auto',
  //     })
  //   }
  // }

  // globalSwiperStorage['.nav-panel__slider-mobile'].init()

  addSwiperItem('.nav-panel__slider-mobile', () => ({
    slidesPerView: 'auto',
  }))

  // const navPanelMobileSlider = new Swiper('.nav-panel__slider-mobile', {
  //   slidesPerView: 'auto',
  // })

  const navDataItems = []

  const getNavItemArea = $item => {
    const elH = $item.outerHeight()
    const H = $(window).height()
    const r = $item[0].getBoundingClientRect()
    const t = r.top
    const b = r.bottom
    return Math.max(0, t > 0 ? Math.min(elH, H - t) : Math.min(b, H))
  }

  const getNameOfMaxNavItem = () => {
    const sorted = navDataItems.sort((a, b) => b.space - a.space)[0]
    return sorted ? sorted.name : ''
  }

  const setNavItemActive = () => {
    $('[data-nav-link]').find('.nav-panel__link-icon').removeClass('active')
    $('[data-nav-link]').find('.nav-panel__link-text').removeClass('active')

    const currentMax = getNameOfMaxNavItem()

    if (currentMax === 0) return

    const link = $(`[data-nav-link="${currentMax}"]`)
    link.find('.nav-panel__link-icon').addClass('active')
    link.find('.nav-panel__link-text').addClass('active')
    globalSwiperStorage['.nav-panel__slider-mobile'].swipers[0].slideTo(link.index())
  }

  const navPanelTooltip = $('<div class="nav-panel__link-tooltip"></div>')
  $('body').append(navPanelTooltip)

  $('.nav-panel:not(.nav-panel--text) .nav-panel__mobile .nav-panel__link').hover(
    function (e) {
      const text = $(this).find('.nav-panel__link-text').text()
      const left = $(this).offset().left
      const top = $(this).offset().top - $(window).scrollTop()

      navPanelTooltip.text(text)
      navPanelTooltip.css({
        top: `${top - 16}px`,
        left: `${left + 28}px`,
      })
      navPanelTooltip.addClass('is--visible')
    },
    function (e) {
      navPanelTooltip.removeClass('is--visible')
    }
  )

  $('[data-nav-link]').each((idx, item) => {
    const name = $(item).attr('data-nav-link')

    const target = $(`[data-nav-target="${name}"]`)

    if (target.length) {
      navDataItems.push({
        name: name,
        space: getNavItemArea(target),
      })
    }
  })

  setNavItemActive()

  const onNavPanelPageScroll = debounce(function () {
    navDataItems.forEach(item => {
      item.space = getNavItemArea($(`[data-nav-target="${item.name}"]`))
    })

    setNavItemActive()
  }, 0)

  $(window).on('scroll', function (e) {
    const vw = $(window).outerWidth()
    const delta = vw > 1279 ? 94 : vw > 767 ? 80 : 64 * (vw / 360)
    const top = $('.nav-panel').offset().top + $('.nav-panel').outerHeight() - $(window).scrollTop() - delta

    if (top < 0) {
      $('.nav-panel__mobile').addClass('is--visible')
    } else {
      $('.nav-panel__mobile').removeClass('is--visible')
    }

    onNavPanelPageScroll()
  })
}
