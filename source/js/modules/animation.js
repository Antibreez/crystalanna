gsap.registerPlugin(ScrollTrigger)

function sideFadeOut(item, options) {
  // const [`${options.timelineName}`] = gsap.timeline();
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: '50% bottom',
    },
  })

  const x = options && options.x ? options.x : 50
  const d = options && options.left ? -1 : options && options.right ? 1 : -1

  let opt = {
    opacity: 0,
    duration: options && options.duration ? options.duration : 0.8,
  }

  if (options && options.bottom) {
    opt.y = x
  } else {
    opt.x = x * d
  }

  if (options && options.delay) opt.delay = options.delay

  tl.from(
    item,
    {
      ...opt,
      ease: options && options.ease ? options.ease : Power2.easeOut,
    },
    options && options.name ? options.name : null
  )
}

// $('.iot-solutions__window').css({
//   height: $('.iot-solutions').outerHeight()
// })

$(window).on('load', function () {
  let isDesktopWidth = $(window).outerWidth() > 1023

  // 1.АНИМАЦИИ НА ГЛАВНОЙ СТРАНИЦЕ
  if ($('.page-main').length) {
    if (isDesktopWidth) {
      // 1.1 АНИМАЦИЯ ГЛАВНОГО БЛОКА
      const tlMain = gsap.timeline()
      tlMain
        .from(
          '.page-main__logo-link',
          0.8,
          {
            x: -100,
            opacity: 0,
            ease: Power2.easeInOut,
          },
          'label'
        )
        .from(
          '.page-main__title',
          0.8,
          {
            x: 100,
            opacity: 0,
            ease: Power2.easeInOut,
          },
          'label'
        )
        // .to(
        //   '.main-slider__main-image',
        //   1.2,
        //   {
        //     width: '110%',
        //     height: '110%',
        //     ease: Power2.easeInOut,
        //   },
        //   'label'
        // )
        .from(
          '.page-main__header-desc',
          0.8,
          {
            x: 100,
            opacity: 0,
            ease: Power2.easeInOut,
          },
          '-=0.6s'
        )

      // 1.2 АНИМАЦИЯ БЛОКА ПРОДУКЦИИ
      sideFadeOut($('.products__item').eq(0)[0])

      sideFadeOut($('.products__item').eq(1)[0], {right: true})

      for (let i = 2; i < $('.products__item').length; i++) {
        sideFadeOut($('.products__item').eq(i)[0], {bottom: true})
      }

      // 1.3 АНИМАЦИЯ БЛОКА С КАРТОЙ В БЛОКЕ О КОМПАНИИ
      sideFadeOut($('.about-company__top-main')[0])
      sideFadeOut($('.about-company__top-history')[0], {delay: 0.6})

      const mainMapTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: '.about-company__map',
          start: '100% bottom',
        },
      })

      const sortedPlaces = $('.company-map__place')
        .toArray()
        .sort((a, b) => {
          return $(b).offset().left - $(a).offset().left
        })

      sortedPlaces.forEach(place => {
        mainMapTimeLine.from(
          place,
          {
            scale: 0,
            duration: 0.6,
            ease: Power2.easeOut,
          },
          '-=0.4s'
        )
      })

      // 1.4 АНИМАЦИЯ БЛОКА СТАТИСТИКИ В БЛОКЕ О КОМПАНИИ
      $('.about-company__benefit-item').each((idx, item) => {
        sideFadeOut(item, {bottom: true})
      })

      // 1.5 АНИМАЦИЯ БЛОКА СЕРТИФИКАТА
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.certificate-check__container',
            start: '50% bottom',
          },
        })
        .from(
          '.certificate-check__text-block',
          {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: Power2.easeInOut,
          },
          'cerificate-check'
        )
        .from(
          '.certificate-check__image img',
          {
            y: -50,
            opacity: 0,
            duration: 0.8,
            ease: Power2.easeInOut,
          },
          'cerificate-check'
        )

      // 1.5 АНИМАЦИЯ БЛОКА БРЕНДЫ
      // gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".brands",
      //     start: "70% bottom",
      //     end: "top top",
      //     // markers: true,
      //     toggleActions: "play none none reverse"
      //   }
      // })
      //   .from(".brands__bg-brand-item--daikin",
      //     {
      //       y: 140,
      //       duration: 1,
      //       ease: Power1.easeInOut,
      //     },
      //     "brands"
      //   )
      //   .from(".brands__bg-brand-item--kentatsu",
      //     {
      //       y: 250,
      //       duration: 1,
      //       ease: Power1.easeInOut,
      //     },
      //     "brands"
      //   )
      //   .from(".brands__bg-brand-item--midea",
      //     {
      //       y: 100,
      //       duration: 1,
      //       ease: Power1.easeInOut,
      //     },
      //     "brands"
      //   )
      //   .from(".brands__bg-brand-item--bosch",
      //     {
      //       y: 100,
      //       duration: 1,
      //       ease: Power1.easeInOut,
      //     },
      //     "brands"
      //   )
      //   .from(".brands__bg-brand-item--axioma",
      //     {
      //       y: 220,
      //       duration: 1,
      //       ease: Power1.easeInOut,
      //     },
      //     "brands"
      //   )

      // gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".brands",
      //     start: "top top",
      //     end: "70% bottom",
      //     toggleActions: "play none reverse none"
      //   }
      // })
      //   .to(".brands__bg-brand-item--daikin",
      //     {
      //       y: -140,
      //       duration: 1,
      //       ease: Power1.easeInOut,
      //     },
      //     "brands-top"
      //   )
      //   .to(".brands__bg-brand-item--kentatsu",
      //     {
      //       y: -250,
      //       duration: 1,
      //       ease: Power1.easeInOut,
      //     },
      //     "brands-top"
      //   )
      //   .to(".brands__bg-brand-item--midea",
      //     {
      //       y: -100,
      //       duration: 1,
      //       ease: Power1.easeInOut,
      //     },
      //     "brands-top"
      //   )
      //   .to(".brands__bg-brand-item--bosch",
      //     {
      //       y: -100,
      //       duration: 1,
      //       ease: Power1.easeInOut,
      //     },
      //     "brands-top"
      //   )
      //   .to(".brands__bg-brand-item--axioma",
      //     {
      //       y: -220,
      //       duration: 1,
      //       ease: Power1.easeInOut,
      //     },
      //     "brands-top"
      //   )

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.brands__bg',
            start: '70% bottom',
          },
        })
        .from('.brands__bg img', {
          scale: 1.3,
          duration: 1,
          ease: Power2.easeOut,
        })

      sideFadeOut('.brands__content')

      gsap.from('.brands__subtitle-line', {
        width: 0,
        duration: 2,
        ease: Power2.easeInOut,
        scrollTrigger: {
          trigger: '.brands__bg',
          start: '70% bottom',
        },
      })

      // 1.6 АНИМАЦИЯ БЛОКА ДАИЧИ БИЗНЕСС
      gsap.from('.business__benefits', {
        y: 100,
        duration: 1,
        ease: Power2.easeOut,
        scrollTrigger: {
          trigger: '.business__image',
          start: '50% bottom',
        },
      })

      $('.business__benefits-item').each((idx, item) => {
        sideFadeOut(item, {bottom: true})
      })

      // 1.7 АНИМАЦИЯ БЛОКА СЕРВИС
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.service__inner',
            start: '50% bottom',
          },
        })
        .from(
          '.service__inner img',
          {
            scale: 1.2,
            duration: 0.8,
            ease: Power2.easeInOut,
          },
          'service'
        )
        .from(
          '.service__content',
          {
            x: -100,
            opacity: 0,
            duration: 0.8,
            ease: Power2.easeInOut,
          },
          'service'
        )

      // 1.8 АНИМАЦИЯ БЛОКА ДАИЧИ IOT РЕШЕНИЯ
      const getIotBottom = () => {
        // console.log('outer height', $('.iot-solutions').outerHeight());
        if ($('.iot-solutions').outerHeight() <= $(window).height()) return 0

        return $(window).height() - $('.iot-solutions').outerHeight()
      }

      let iotSolutionsTimeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.iot-solutions__window',
            start: 'top 94',
            end: 'bottom top',
            // markers: true,
            toggleActions: 'play none none reverse',
          },
        })
        .to('.iot-solutions', {
          top: 0,
          bottom: getIotBottom(),
          duration: 0.8,
          ease: Power1.easeInOut,
        })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.iot-solutions__window',
            start: '400 bottom',
          },
        })
        .from(
          '.iot-solutions__bottom-part-img--1',
          {
            x: -100,
            duration: 0.8,
            ease: Power2.easeInOut,
          },
          'iot-solutions-img'
        )
        .from(
          '.iot-solutions__bottom-part-img--2',
          {
            x: 100,
            duration: 0.8,
            ease: Power2.easeInOut,
          },
          'iot-solutions-img'
        )
        .from(
          '.iot-solutions__bottom-part-img--3',
          {
            y: 200,
            opacity: 0,
            duration: 1,
            ease: Power2.easeInOut,
          },
          'iot-solutions-img'
        )

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.iot-solutions__window',
            start: '400 bottom',
          },
        })
        .from(
          '.iot-solutions__top-content',
          {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: Power2.easeInOut,
          },
          'iot-solutions-top'
        )
        .from(
          '.iot-solutions__bg',
          {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: Power2.easeInOut,
          },
          'iot-solutions-top'
        )
        .from(
          '.iot-solutions__benefits',
          {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: Power2.easeInOut,
          },
          '-=0.6s'
        )
    }
  }

  //  АНИМАЦИИ ПРОМО БЛОКА НА СТРАНИЦАХ ДЛЯ ПАРТНЕРОВ
  if ($('.for-partners__promo-content').length) {
    if (isDesktopWidth) {
      gsap.from('.for-partners__promo-content', {
        scale: 0.8,
        duration: 0.8,
        ease: Power2.easeOut,
      })
    }
  }

  //  АНИМАЦИИ ПРОМО БЛОКА НА СТРАНИЦАХ ПОДДЕРЖКИ
  if ($('.page__promo-content').length) {
    if (isDesktopWidth) {
      gsap.from('.page__promo-content', {
        scale: 0.8,
        duration: 0.8,
        ease: Power2.easeOut,
      })
    }
  }

  //  АНИМАЦИИ ПРОМО БЛОКА НА СТРАНИЦАХ КАТАЛОГА
  if ($('.catalog__promo-content').length) {
    if (isDesktopWidth) {
      gsap.from('.catalog__promo-content', {
        scale: 0.8,
        duration: 0.8,
        ease: Power2.easeOut,
      })
    }
  }

  //  АНИМАЦИИ БЛОКА СОТРУДНИЧАЕМ
  const $brands = $('.brands__inner')

  if ($brands.length) {
    $(window).on('scroll', function () {
      if ($(window).outerWidth() > 1023) {
        if (
          $(window).scrollTop() + $(window).height() - $brands.offset().top > 0 &&
          $brands.offset().top + $brands.outerHeight() / 2 - ($(window).scrollTop() + $(window).height() / 2) > 50
        ) {
          const x = (
            1 -
            ($(window).scrollTop() + $(window).height() - $brands.offset().top) /
              ($(window).height() / 2 + $brands.outerHeight() / 2 - 50)
          ).toFixed(2)
          // console.log('animate bottom', x);
          // const x = (1 - ($(window).scrollTop() + $(window).height() - $brands.offset().top) / ($brands.outerHeight() + 20)).toFixed(2)

          $('.brands__bg-brand-item--daikin').css({
            transform: `translateY(${140 * x}px)`,
          })

          $('.brands__bg-brand-item--kentatsu').css({
            transform: `translateY(${250 * x}px)`,
          })

          $('.brands__bg-brand-item--midea').css({
            transform: `translateY(${100 * x}px)`,
          })

          $('.brands__bg-brand-item--bosch').css({
            transform: `translateY(${100 * x}px)`,
          })

          $('.brands__bg-brand-item--axioma').css({
            transform: `translateY(${220 * x}px)`,
          })
        }

        if (
          $(window).scrollTop() + $(window).height() / 2 - ($brands.offset().top + $brands.outerHeight() / 2) > 50 &&
          $brands.offset().top + $brands.outerHeight() - $(window).scrollTop() > 0
        ) {
          const x = (
            1 -
            ($brands.offset().top + $brands.outerHeight() - $(window).scrollTop()) /
              ($(window).height() / 2 + $brands.outerHeight() / 2 - 50)
          ).toFixed(2)

          // console.log('animate top', x);

          $('.brands__bg-brand-item--daikin').css({
            transform: `translateY(-${140 * x}px)`,
          })

          $('.brands__bg-brand-item--kentatsu').css({
            transform: `translateY(-${250 * x}px)`,
          })

          $('.brands__bg-brand-item--midea').css({
            transform: `translateY(-${100 * x}px)`,
          })

          $('.brands__bg-brand-item--bosch').css({
            transform: `translateY(-${100 * x}px)`,
          })

          $('.brands__bg-brand-item--axioma').css({
            transform: `translateY(-${220 * x}px)`,
          })
        }
      }
    })
  }

  const onPageResize = debounce(() => {
    if (isDesktopWidth && $(window).outerWidth() < 1024) {
      // console.log('is mobile');
      isDesktopWidth = false
      location.reload()
    }

    if (!isDesktopWidth && $(window).outerWidth() > 1023) {
      // console.log('is desktop');
      isDesktopWidth = true
      location.reload()
    }
  }, 200)

  $('.main-slider__nav-link-icon').each((idx, icon) => {
    const name = $(icon).attr('data-animation')

    if (name) {
      const anime = lottie.loadAnimation({
        container: icon, // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: `${assetsPath}animations/${name}.json`, // the path to the animation json
      })

      $(icon)
        .parent()
        .on('mouseover', () => {
          // console.log('############')
          anime.setDirection(1)
          anime.play()
        })

      $(icon)
        .parent()
        .on('mouseleave', () => {
          // console.log('############')
          anime.setDirection(-1)
          anime.play()
        })
    }
  })

  $(window).on('resize', onPageResize)
})
