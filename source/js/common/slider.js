if ($('.slider-scroll-indicator').length) {

  $('.slider-scroll-indicator').each((idx, item) => {
    lottie.loadAnimation({
      container: item, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `${assetsPath}animations/slider-scroll.json`, // the path to the animation json
    })
  })
}

$('.swiper').each((idx, swiper) => {
  const $slides = $(swiper).find('.swiper-slide')

  if ($slides.length === 1) {
    $(swiper).addClass('is--single')
  }
})

// const updateAllSwipers = () => {
//   $('.swiper').each((idx, item) => {
//     const slider = $(item)[0].swiper
//     // slider.update();
//   })
// }

const globalSwiperStorage = {};

const addSwiperItem = (cl, getOptions) => {
  if (!$(cl).length) return;

  globalSwiperStorage[cl] = {
    swipers: null,
    init: function(args) {

      const {newOptions, callback} = {...args};

      this.swipers = []
      $(cl).each((idx, item) => {
        const options = newOptions ? { ...getOptions(item), ...newOptions} : getOptions(item);

        if (options.autoplay === false) {
          delete options.autoplay
        }

        this.swipers.push(new Swiper(item, options))
      })

      callback && callback()
    }
  }

  globalSwiperStorage[cl].init();
}
