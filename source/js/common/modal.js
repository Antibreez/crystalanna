// const fancyboxContainer = new PerfectSB($('.fancybox-slide'))
// const searchMainList = new PerfectSB('.modal__search-main-result-list')
const citySearchList = new PerfectSB($('.modal__city-list'))

const fancyboxDefaultOptions = {
  touch: false,
  autoFocus: false,
  backFocus: false,
  afterShow: function () {
    new PerfectSB($('.fancybox-slide')).init()

    if ($(this.src).find('.modal__city-list').length) {
      !!citySearchList.el ? citySearchList.update() : citySearchList.init()
    }

    setTimeout(() => {
      $(this.src + '.fancybox-content')
        .parent()
        .addClass('perfectScrollbar-init')
    }, 100)
  },
  afterClose: function () {
    $(this.src + '.fancybox-content')
      .parent()
      .removeClass('perfectScrollbar-init')

    if (this.src === '#city-select') {
      $('.modal__city-search .input-field__clear-button').trigger('click')
    }
  },
}

$('[data-fancybox]').each((idx, item) => {
  if ($(item).attr('href') === '#product-card__image-view') {
    $(item).fancybox({
      ...fancyboxDefaultOptions,
      baseClass: 'is--fullscreen',
    })
  } else {
    $(item).fancybox(fancyboxDefaultOptions)
  }
})

// $('[data-fancybox]').fancybox(fancyboxDefaultOptions)

const openModalById = id => {
  $.fancybox.open({
    ...fancyboxDefaultOptions,
    src: id,
  })
}

const openRequestSuccessModal = data => {
  const src = $(`
    <div class="modal modal--status ${data && data.className ? data.className : ''}">
      <div class="h5 modal__title ${data && data.header ? '' : 'is--hidden'}">
        <button class="modal__title-close-button mobile-only" type="button" data-fancybox-close>
          <svg>
            <use xlink:href="${assetsPath}img/sprite.svg#arrow-right"></use>
          </svg>
        </button>

        ${data && data.header ? '<span>' + data.header + '</span>' : ''}

      </div>
      <div class="modal__body modal__body--centered">
        <div class="modal__status-icon modal__status-icon--success">
          <svg>
            <use xlink:href="${assetsPath}img/sprite.svg#check"></use>
          </svg>
        </div>
        <b class="modal__subtitle">
          ${data && data.title ? data.title : 'Обращение отправлено!'}
        </b>
        <p class="modal__desc">
          ${data && data.desc ? data.desc : 'В&nbsp;ближайшее время с&nbsp;вами свяжется наш&nbsp;менеджер'}
        </p>
        <div class="modal__bottom">
          <button class="modal__close button button--fullwidth" data-fancybox-close="">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  `)

  $.fancybox.open({
    ...fancyboxDefaultOptions,
    type: 'html',
    src: $('<div>').append(src).html(),
  })
}

const openRequestFailurModal = data => {
  const src = $(`
    <div class="modal modal--status ${data && data.className ? data.className : ''}">
      <div class="h5 modal__title ${data && data.header ? '' : 'is--hidden'}">
        <button class="modal__title-close-button mobile-only" type="button" data-fancybox-close>
          <svg>
            <use xlink:href="${assetsPath}img/sprite.svg#arrow-right"></use>
          </svg>
        </button>

        ${data && data.header ? '<span>' + data.header + '</span>' : ''}

      </div>
      <div class="modal__body modal__body--centered">
        <div class="modal__status-icon modal__status-icon--fail">
          <svg>
            <use xlink:href="${assetsPath}img/sprite.svg#close"></use>
          </svg>
        </div>
        <b class="modal__subtitle">
          ${data && data.title ? data.title : 'Произошла ошибка!'}
        </b>
        <p class="modal__desc">
          ${data && data.desc ? data.desc : ''}
        </p>
        <div class="modal__bottom">
          <button class="modal__close button button--fullwidth" data-fancybox-close="">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  `)

  $.fancybox.open({
    ...fancyboxDefaultOptions,
    type: 'html',
    src: $('<div>').append(src).html(),
  })
}

const openCustomModal = data => {
  const {className, header, title, desc} = {...data}
  if (!header && !title && !desc) {
    console.error('openCustomModal, требуется хотя бы один параметр: header, title, desc')
    return
  }

  const src = $(`
    <div class="modal modal--status ${className ? className : ''}">
      <div class="h5 modal__title ${header ? '' : 'is--hidden'}">
        <button class="modal__title-close-button mobile-only" type="button" data-fancybox-close>
          <svg>
            <use xlink:href="${assetsPath}img/sprite.svg#arrow-right"></use>
          </svg>
        </button>

        ${header ? '<span>' + header + '</span>' : ''}

      </div>
      <div class="modal__body modal__body--centered">
        <b class="modal__subtitle">
          ${title ? title : ''}
        </b>
        <p class="modal__desc">
          ${desc ? desc : ''}
        </p>
        <div class="modal__bottom">
          <button class="modal__close button button--fullwidth" data-fancybox-close="">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  `)

  $.fancybox.open({
    ...fancyboxDefaultOptions,
    type: 'html',
    src: $('<div>').append(src).html(),
  })
}

const openTemplateModal = (id, data) => {
  const $modal = $(id).clone()

  if (data) {
    Object.keys(data).forEach(key => {
      $modal.html($modal.html().replace(`#${key}#`, data[key]))
      // const $item = $modal.find(`:contains('#${key}#')`).last()

      // $item.html($item.html().replace(`#${key}#`, data[key]))
    })
  }

  $.fancybox.open({
    ...fancyboxDefaultOptions,
    type: 'html',
    src: $('<div>').append($modal).html(),
  })
}

const closeActiveModal = () => {
  $.fancybox.close()
}

const closeAllModals = () => {
  $.fancybox.close(true)
}
