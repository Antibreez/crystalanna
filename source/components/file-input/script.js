// function handleDrop(e) {
//   let dt = e.dataTransfer
//   let files = dt.files

//   const fileInput = $(e.currentTarget).prev('input')[0]

//   if (fileInput.files && fileInput.files[0]) {
//     fileInput.value = ''

//     if (!/safari/i.test(navigator.userAgent)) {
//       fileInput.type = ''
//       fileInput.type = 'file'
//     }

//     // fileResult.classList.remove('show');
//     // fileName.textContent = '';
//     // fileImg.removeAttribute('src');
//   }

//   console.log(e.currentTarget)

//   fileInput.files = files
//   onFileChange(e)

//   //handleFiles(files)
// }

// const onFileChange = e => {
//   const $fileInput = $(e.currentTarget).parents('.file-input').find('input')
//   readUrl($fileInput)
// }

// const onError = ($block, $input) => {
//   $block.addClass('is--error')

//   $input[0].value = ''

//   if (!/safari/i.test(navigator.userAgent)) {
//     $input[0].type = ''
//     $input[0].type = 'file'
//   }
// }

// const readUrl = $input => {
//   if ($input[0].files && $input[0].files[0]) {
//     const $block = $input.parents('.file-input').eq(0)
//     $block.removeClass('is--error')
//     $block.removeClass('is--progress')

//     const $progress = $input.next('.file-input__card').find('.file-input__progress')
//     const $progressCurrent = $progress.find('.file-input__progress-current')
//     const $progressText = $progress.find('.file-input__progress-value')

//     const $errorText = $block.find('.file-input__card-text-error')

//     var reader = new FileReader()

//     reader.onloadstart = function (e) {
//       // progress.classList.add('show');
//       console.log('start')
//       $block.addClass('is--progress')
//     }

//     reader.onprogress = function (e) {
//       console.log(Math.round((e.loaded / e.total) * 100))
//       // bar.style.width = Math.round(e.loaded / e.total * 100) + '%';
//       $progressCurrent.css('width', Math.round((e.loaded / e.total) * 100) + '%')
//       $progressText.text(Math.round((e.loaded / e.total) * 100) + '%')
//     }

//     reader.onload = function (e) {
//       $block.removeClass('is--progress')

//       if ($input.attr('accept')) {
//         const validTypes = $input.attr('accept').split(',')

//         if (!validTypes.includes($input[0].files[0].type)) {
//           $errorText.text('Файл имеет недопустимый формат')
//           onError($block, $input)

//           return
//         }
//       }

//       if ($input.attr('data-max-bytes')) {
//         if ($input[0].files[0].size > +$input.attr('data-max-bytes')) {
//           $errorText.text('Размер файла превышает допустимое значение')
//           onError($block, $input)

//           return
//         }
//       }
//       // fileImg.setAttribute('src', e.target.result);
//       // fileName.textContent = input.files[0].name;
//       // !fileResult.classList.contains('show') && fileResult.classList.add('show');

//       // progress.classList.remove('show');
//       // bar.style.width = 0;
//       console.log('finish')
//     }

//     reader.readAsDataURL($input[0].files[0])
//   }
// }

class FileInput {
  constructor($input, rules) {
    this.$input = $input
    this.$block = this.$input.parents('.file-input').eq(0)
    this.$card = this.$input.next('.file-input__card')
    this.$progress = this.$input.next('.file-input__card').find('.file-input__progress')
    this.$progressCurrent = this.$progress.find('.file-input__progress-current')
    this.$progressText = this.$progress.find('.file-input__progress-value')
    this.$errorText = this.$block.find('.file-input__card-text-error')
    this.$resultImage = this.$block.find('.file-input__result-image img')
    this.$resultName = this.$block.find('.file-input__result-name')
    this.$clearBtn = this.$block.find('.file-input__clear-btn')

    this.isValid = false
    this.actionCallback = null

    this.rules = rules ? rules : null

    this.counter = 0
    ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      this.$card.on(eventName, e => {
        e.preventDefault()
        e.stopPropagation()
      })
    })
    this.$card.on('dragenter', e => {
      this.counter++
      this.$card.addClass('highlight')
    })
    this.$card.on('dragleave', e => {
      this.counter--
      if (this.counter === 0) {
        this.$card.removeClass('highlight')
      }
    })
    this.$card.on('drop', e => {
      this.$card.removeClass('highlight')
    })

    this.$card.length && this.$card[0].addEventListener('drop', this.handleDrop, false)
    this.$input.on('change', this.onFileChange)
    this.$clearBtn.on('click', this.onClear)
  }

  handleDrop = e => {
    let dt = e.dataTransfer
    let files = dt.files

    // const fileInput = $(e.currentTarget).prev('input')[0]

    if (this.$input[0].files && this.$input[0].files[0]) {
      this.$input[0].value = ''

      if (!/safari/i.test(navigator.userAgent)) {
        this.$input[0].type = ''
        this.$input[0].type = 'file'
      }
    }

    this.$input[0].files = files
    this.onFileChange(e)
  }

  onFileChange = e => {
    this.readUrl()
  }

  onError = () => {
    this.isValid = false
    this.$block.addClass('is--error')
    this.actionCallback && this.actionCallback()

    this.$input[0].value = ''

    if (!/safari/i.test(navigator.userAgent)) {
      this.$input[0].type = ''
      this.$input[0].type = 'file'
    }
  }

  readUrl = () => {
    if (this.$input[0].files && this.$input[0].files[0]) {
      this.$block.removeClass('is--error')
      this.$block.removeClass('is--progress')
      this.$block.removeClass('is--result')

      this.$resultImage.removeAttr('src')
      this.$resultName.text('')
      this.$progressText.text('')
      this.$progressCurrent.removeAttr('style')
      this.$errorText.text('')

      var reader = new FileReader()

      reader.onloadstart = e => {
        this.$block.addClass('is--progress')
      }

      reader.onprogress = e => {
        this.$progressCurrent.css('width', Math.round((e.loaded / e.total) * 100) + '%')
        this.$progressText.text(Math.round((e.loaded / e.total) * 100) + '%')
      }

      reader.onload = e => {
        this.$block.removeClass('is--progress')

        if (this.$input.attr('accept')) {
          const validTypes = this.$input.attr('accept').split(',')

          if (!validTypes.includes(this.$input[0].files[0].type)) {
            this.$errorText.text('Файл имеет недопустимый формат')
            this.onError()

            return
          }
        }

        if (this.$input.attr('data-max-bytes')) {
          if (this.$input[0].files[0].size > +this.$input.attr('data-max-bytes')) {
            this.$errorText.text('Размер файла превышает допустимое значение')
            this.onError()

            return
          }
        }

        if (this.rules && this.rules.length) {
          for (let i = 0; i < this.rules.length; i++) {
            if (!this.rules[i].isCorrect(this.$input[0])) {
              this.$errorText.text(this.rules[i].text)
              this.onError()

              return
            }
          }
        }
        this.$block.addClass('is--result')
        this.isValid = true
        this.actionCallback && this.actionCallback()

        if (this.$input[0].files[0].type.includes('image')) {
          this.$resultImage.attr('src', e.target.result)
        }

        this.$resultName.text(this.$input[0].files[0].name)
      }

      reader.readAsDataURL(this.$input[0].files[0])
    }
  }

  onClear = () => {
    this.actionCallback && this.actionCallback()
    this.isValid = false
    this.$block.removeClass('is--error')
    this.$block.removeClass('is--progress')
    this.$block.removeClass('is--result')

    this.$resultImage.removeAttr('src')
    this.$resultName.text('')
    this.$progressText.text('')
    this.$progressCurrent.removeAttr('style')
    this.$errorText.text('')

    this.$input[0].value = ''

    if (!/safari/i.test(navigator.userAgent)) {
      this.$input[0].type = ''
      this.$input[0].type = 'file'
    }
  }

  addRules = rules => {
    this.rules = this.rules && this.rules.length ? [...this.rules, ...rules] : rules
  }

  clearRules = () => {
    this.rules = null
  }

  addActionCallback = cb => {
    this.actionCallback = cb
  }
}
