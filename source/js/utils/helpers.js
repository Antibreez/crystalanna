debounce = (f, ms) => {
  let timeout

  return function () {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      f.apply(this, arguments)
      clearTimeout(timeout)
    }, ms)
  }
}
