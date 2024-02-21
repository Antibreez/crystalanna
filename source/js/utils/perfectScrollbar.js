class PerfectSB {
  constructor(item) {
    this.item = item
    this.el = null
  }

  init(options) {
    this.el = new PerfectScrollbar(this.item[0], options)
  }

  update() {
    this.el.update()
  }

  destroy() {
    this.el.destroy()
  }
}
