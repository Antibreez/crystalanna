class CityModal {
  constructor() {
    this.el = $('#city-select')
  }

  onInput(cb) {
    $(document).on(
      'input',
      '#city-select .input-field input',
      debounce(e => {
        cb(this.el.find('.input-field input').val())
      }, 500)
    )
  }

  onSelect(cb) {
    $(document).on('click', '#city-select .modal__city-link', e => {
      if ($(e.target).hasClass('active')) return
      cb($(e.target).text())
    })
  }

  onClear(cb) {
    $(document).on('click', '#city-select .input-field__clear-button', e => {
      cb()
    })
  }
}

const cityModal = new CityModal()
