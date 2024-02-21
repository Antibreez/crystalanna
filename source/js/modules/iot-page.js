const iotPromoWords = []
const $iotPromoBlock = $('.iot-page__promo')
const $iotPromoHeader = $('.iot-page__promo-header')
const $iotPromoText = $('.iot-page__promo-inner-text')
const $iotPromoWord = $iotPromoText.find('.main')
const $iotPromoTextWords = $iotPromoText.find('.words span').each((idx, w) => {
  iotPromoWords.push($(w).text())
})

let iotPromoLettersInterval = null
let currentIotPromoWordIndex = 0
let nextIotPromoWordIndex = iotPromoWords.length > 1 ? 1 : 0
let currentIotLetterIndex = 0
let nextIotLetterIndex = 0

function typeIotPromoText() {
  if (currentIotLetterIndex < iotPromoWords[currentIotPromoWordIndex].length) {
    $iotPromoWord.text(
      iotPromoWords[currentIotPromoWordIndex].slice(
        0,
        iotPromoWords[currentIotPromoWordIndex].length - currentIotLetterIndex - 1
      )
    )
    currentIotLetterIndex++
    setTimeout(typeIotPromoText, 50)
    return
  }

  if (nextIotLetterIndex < iotPromoWords[nextIotPromoWordIndex].length) {
    $iotPromoWord.text($iotPromoWord.text() + iotPromoWords[nextIotPromoWordIndex][nextIotLetterIndex])
    nextIotLetterIndex++
    setTimeout(typeIotPromoText, 50)
    return
  }

  if (
    currentIotLetterIndex === iotPromoWords[currentIotPromoWordIndex].length &&
    nextIotLetterIndex === iotPromoWords[nextIotPromoWordIndex].length
  ) {
    currentIotLetterIndex = 0
    nextIotLetterIndex = 0

    currentIotPromoWordIndex = currentIotPromoWordIndex < iotPromoWords.length - 1 ? currentIotPromoWordIndex + 1 : 0

    nextIotPromoWordIndex =
      iotPromoWords.length < 2
        ? 0
        : currentIotPromoWordIndex < iotPromoWords.length - 1
        ? currentIotPromoWordIndex + 1
        : 0

    setTimeout(typeIotPromoText, 1500)
  }
}

// let iotPromoWordsInterval = setInterval(() => {
//   currentIotPromoWordIndex = currentIotPromoWordIndex === iotPromoWords.length - 1
//     ? 0
//     : currentIotPromoWordIndex + 1
//   console.log('###1', currentIotPromoWordIndex);

//   iotPromoLettersInterval = setInterval(() => {
//     console.log('###2');
//   }, 200)

// }, 500)

$('.iot-page__main').length && typeIotPromoText()

// document.getElementById('splineViewer').addEventListener('load-complete', e => {
//   e.target.shadowRoot.querySelector('#logo').style.display = 'none'
//   $iotPromoBlock.addClass('is--loaded')
// })

$('.iot-page__smart-home-animation').each((idx, item) => {
  lottie.loadAnimation({
    container: item, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `${assetsPath}animations/iot.json`, // the path to the animation json
  })
})
