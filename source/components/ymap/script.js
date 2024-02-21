class Ymaps {
  constructor(places) {
    this.places = places;
    this.ymaps = null;
    this.map = null;
    this.amount = 0;
    this.$branchPopup = $('.ymap__popup.is--branch');
    // this.$branchPopupBack = this.$branchPopup.find('.ymap__popup-back-link');
    this.$branchName = this.$branchPopup.find('.ymap__popup-logo span');
    this.$branchCities = this.$branchPopup.find('.ymap__popup-cities');
    this.$branchAddress = this.$branchPopup.find('.ymap__popup-text-item').eq(0).find('.ymap__popup-text');
    this.$branchTel = this.$branchPopup.find('.ymap__popup-text-item').eq(1).find('.ymap__popup-text');
    this.$branchEmail = this.$branchPopup.find('.ymap__popup-text-item').eq(2).find('.ymap__popup-text');

    this.$commonPopup = $('.ymap__popup.is--common');

    $(document).on('click', '.ymap__popup-close', () => {
      this.$branchPopup.hide();
      this.$commonPopup.hide();
      $('[id^="map-pin-"]').removeClass('is--active')
    })

    $(document).on('click', '.ymap__popup-back-link', () => {
      this.$branchPopup.hide();
      this.$commonPopup.show();
      $('[id^="map-pin-"]').removeClass('is--active')
    })
  }

  init = callback => {
    ymaps$1.load().then(maps => {
      this.ymaps = maps
      this.map = new this.ymaps.Map('ymap', {
        center: [55.755811, 37.617617],
        zoom: 15,
        controls: [],
      })

      callback()
    })
  }

  getCoords = address => {
    return new Promise((resolve, reject) => {
      this.ymaps
        .geocode(address, {
          results: 1,
        })
        .then(res => {
          const firstGeoObject = res.geoObjects.get(0)
          const coords = firstGeoObject.geometry.getCoordinates()
          resolve(coords)
        })
        .catch(err => {
          console.log(err)
        })
    })
  }

  addPin = (pin, createCallback, clickCallback) => {
    const id = this.amount++
    const squareLayout = this.ymaps.templateLayoutFactory.createClass(
      `<div id="map-pin-${id}" data-id="${pin.id}" class="ymap__map-marker"><svg><use xlink:href="${assetsPath}img/sprite.svg#pin"></use></svg></div>`
    )

    const squarePlacemark = new this.ymaps.Placemark(
      pin.coordinates,
      {
        hintContent: '',
      },
      {
        iconLayout: squareLayout,
        // Описываем фигуру активной области "Прямоугольник".
        iconShape: {
          type: 'Rectangle',
          // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
          coordinates: [
            [-24, -48],
            [24, 0],
          ],
        },
      }
    )

    squarePlacemark.events.add('mouseenter', e => {
      $(`#map-pin-${id}`).addClass('is--hovered')
    })

    squarePlacemark.events.add('mouseleave', e => {
      $(`#map-pin-${id}`).removeClass('is--hovered')
    })

    squarePlacemark.events.add('click', e => {
      const item = $(`#map-pin-${id}`)
      $('[id^="map-pin-"]').removeClass('is--active')
      item.addClass('is--active')

      this.$branchName.text(pin.name);
      this.$branchCities.text(pin.cities);
      this.$branchAddress.text(pin.address);
      this.$branchTel.text(pin.telephone);
      this.$branchTel.attr(
        'href',
        `tel:${pin.telephone.split('(').join('').split(')').join('').split('-').join('').split(' ').join('')}`
      );
      this.$branchEmail.text(pin.email);
      this.$branchEmail.attr('href', `mailto:${pin.email}`)
      this.$branchPopup.show();

      clickCallback && clickCallback($(`#map-pin-${id}`))
    })

    this.map.geoObjects.add(squarePlacemark)
    // this.centratePins()

    setTimeout(() => {
      createCallback && createCallback($(`#map-pin-${id}`))
    }, 100)

    $(`.ymap__popup-external-link[data-id="${pin.id}"]`).on('click', () => {
      squarePlacemark.events.fire('click')
    })
  }

  centratePins = () => {
    this.map.setBounds(this.map.geoObjects.getBounds(), {checkZoomRange: true}).then(() => {
      if (this.map.getZoom() > 12) this.map.setZoom(12) // Если значение zoom превышает 15, то устанавливаем 15.

      if ($(window).outerWidth() > 767) {
        let pixelCenter = this.map.getGlobalPixelCenter(this.map.geoObjects.getBounds())

        pixelCenter = [pixelCenter[0] - 150, pixelCenter[1]]

        const geoCenter = this.map.options.get('projection').fromGlobalPixels(pixelCenter, this.map.getZoom())
        this.map.setCenter(geoCenter)
      }
    })
  }
}
