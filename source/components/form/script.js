// $('#form-example').on('submit', function (e) {
//   e.preventDefault()
// })
const emailValidation = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/

function addFormInputError($item, text) {
  if (!$item.siblings('.input-field__error').length) {
    $item.siblings('label').after(`<span class="input-field__error">${text}</span>`)
  }
}

class Form {
  constructor(name) {
    this.form = $(name)
    this.requiredItems = this.form.find('input[data-required]:not([type="file"])')
    this.requiredFiles = this.form.find('input[type="file"][data-required]')
    this.requiredSelects = this.form.find('.select-field select[data-required]')
    this.submit = this.form.find('[type="submit"]')
    this.items = []
    this.isFormValid = false;

    this.requiredItems.each((idx, item) => {
      const data = {}
      data.name = $(item).attr('name')
      data.item = $(item)
      data.valid = false
      data.showError = false
      data.regExp = $(item).attr('pattern') ?? null

      this.items.push(data)

      if ($(item).attr('type') === 'text' || $(item).attr('type') === 'email') {
        $(item).on('input', this.onInput)
      }

      if ($(item).attr('type') === 'email') {
        item.setCustomValidity('')
      }

      if ($(item).attr('type') === 'email') {
        addFormInputError($(item), 'Введите корректный Email')
      } else if ($(item).parent().hasClass('is--phone')) {
        addFormInputError($(item), 'Введите корректный номер телефона')
      } else {
        addFormInputError($(item), 'Поле обязательно для заполнения')
      }
    })

    this.requiredSelects.each((idx, item) => {
      const data = {}
      data.name = $(item).attr('name')
      data.item = $(item)
      data.valid = $(item)[0].hasAttribute('data-empty') ? false : true
      data.showError = false

      this.items.push(data)

      $(item).on('select2:select', () => {
        $(item).parent().removeClass('is--invalid')
        this.items.find(itm => itm.name === $(item).attr('name')).valid = true
        this.checkErrors()
      })
    })

    this.requiredFiles.each((idx, item) => {
      const data = {}
      data.name = $(item).attr('name')
      data.item = $(item)
      data.valid = false
      data.showError = false
      data.fileInput = new FileInput($(item))

      data.fileInput.addActionCallback(() => {
        $(item).parents('.file-input').first().removeClass('is--invalid')
        this.checkErrors()
      })

      this.items.push(data)

      if (!$(item).parent().siblings('.input-field__error').length) {
        $(item).parent().after(`<span class="input-field__error">${'Поле обязательно для заполнения'}</span>`)
      }

      // const fileInput = new FileInput($(item))

      // const $card = $(item).next('.file-input__card')
      // $card[0].addEventListener('drop')
    })

    this.submit.on('click', e => {
      if (!this.isFormValid) {
        e.preventDefault()

        let valid = true

        this.items.forEach(item => {
          if (item.fileInput) {
            if (!item.fileInput.isValid) {
              valid = false
              item.item.parents('.file-input').first().addClass('is--invalid')
            }
          } else if (!item.valid) {
            item.item.parent().addClass('is--invalid')
            valid = false
          }
        })

        if (valid) {
          this.isFormValid = true
          this.submit.trigger('click')
        } else {
          this.submit.attr('disabled', true)
        }
      } else {
        this.isFormValid = false
      }
    })

    // this.form.on('submit', e => {
    //   e.preventDefault()

    //   this.requiredItems.each((idx, item) => {
    //     console.log(item)

    //     console.log(new RegExp($(item).attr('pattern')))
    //     console.log(new RegExp($(item).attr('pattern')).test($(item).val()))
    //   })
    // })
  }

  checkErrors() {
    if (this.form.find('.is--invalid').length) {
      this.submit.attr('disabled', true)
    } else {
      this.submit.attr('disabled', false)
    }
  }

  onInput = e => {
    const $item = $(e.target)

    $item.parent().removeClass('is--invalid')

    if ($item.attr('type') === 'email') {
      const current = this.items.find(itm => itm.name === $item.attr('name'))
      if (new RegExp(emailValidation).test($item.val()) && $item.val().trim()) {
        current.valid = true
      } else {
        current.valid = false
      }

      this.checkErrors()
      return
    }

    if ($item.parent().hasClass('is--phone')) {
      const current = this.items.find(itm => itm.name === $item.attr('name'))
      if ($item.inputmask('isComplete')) {
        current.valid = true
      } else {
        current.valid = false
      }

      this.checkErrors()
      return
    }

    if ($item.attr('type') === 'text' && $item.attr('pattern')) {
      const current = this.items.find(itm => itm.name === $item.attr('name'))
      if ($item.val().trim() && new RegExp($item.attr('pattern')).test($item.val())) {
        current.valid = true
      } else {
        current.valid = false
      }

      this.checkErrors()
      return
    }

    if ($item.attr('type') === 'text' && !$item.attr('pattern')) {
      const current = this.items.find(itm => itm.name === $item.attr('name'))
      if ($item.val().trim()) {
        current.valid = true
      } else {
        current.valid = false
      }

      this.checkErrors()
      return
    }
  }
}
