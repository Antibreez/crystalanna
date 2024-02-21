const searchMainPS = new PerfectSB($('#search-main').parent())
// searchMainList.init()

class MainSearchModal {
  constructor() {
    this.addEventListeners()
  }

  openModal() {
    $('#search-main').addClass('is--opened')
    $('#search-main').parent().addClass('is--opened')
    $('.modal-custom__overlay').eq(0).addClass('is--visible')
    $('.header').addClass('is--hidden')
    $('.modal__search-main-result-list')[0].scrollTop = 0
    setTimeout(() => {
      searchMainPS.init()
    }, 500)
  }

  closeModal() {
    $('#search-main').removeClass('is--opened')
    $('#search-main').parent().removeClass('is--opened')
    $('.modal-custom__overlay').eq(0).removeClass('is--visible')
    $('.header').removeClass('is--hidden')
    $('#search-main').parent().scrollTop(0)
    searchMainPS.destroy()
  }

  onInput(cb) {
    $(document).on(
      'input',
      '#search-main .input-field input',
      debounce(e => {
        cb($(e.target).val())
      }, 500)
    )
  }

  onClear(cb) {
    $(document).on('click', '#search-main .input-field__clear-button', e => {
      cb()
    })
  }

  addEventListeners() {
    $('.header__search-button').on('click', e => {
      e.preventDefault()
      this.openModal()
    })
    $('.modal__search-main-close').on('click', this.closeModal)
    $('.modal-custom').on('click', e => {
      if ($(e.target).closest('#search-main').length) return
      this.closeModal()
    })
  }
}

const mainSearchModal = new MainSearchModal()
