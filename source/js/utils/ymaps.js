const ymaps$1 = {
  load: function load() {
    var src =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : '//api-maps.yandex.ru/2.1/?apikey=134f8d40-5660-4788-b59b-77ae1c72b222&lang=ru_RU'

    var getNsParamValue = function getNsParamValue() {
      var results = src.match(/[\\?&]ns=([^&#]*)/)
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
    }

    if (!this.promise) {
      this.promise = new Promise(function (resolve, reject) {
        var scriptElement = document.createElement('script')
        scriptElement.onload = resolve
        scriptElement.onerror = reject
        scriptElement.type = 'text/javascript'
        scriptElement.src = src
        document.body.appendChild(scriptElement)
      }).then(function () {
        var ns = getNsParamValue()

        if (ns && ns !== 'ymaps') {
          ;(0, eval)('var ymaps = '.concat(ns, ';'))
        }

        return new Promise(function (resolve) {
          return ymaps.ready(resolve)
        })
      })
    }

    return this.promise
  },
}
