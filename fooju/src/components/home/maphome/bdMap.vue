<template>
    <div id="bdMap"></div>
</template>

<script>
  export default {
    name: 'bdmap',
    props: {
      mapList: [],
      longitude: null,
      latitude: null,
      mapSize: null
    },
    mounted () {
      this.ready()
    },
    methods: {
      ready () {
        var self = this
        console.log(this.mapList.length)
        var bdmap = new BMap.Map('bdMap')
        bdmap.centerAndZoom(new BMap.Point(this.longitude, this.latitude), this.mapSize)
        bdmap.addControl(new BMap.MapTypeControl())
        bdmap.setCurrentCity('呼和浩特')
        bdmap.enableScrollWheelZoom()
        function ComplexCustomOverlay (point, text) {
          this._point = point
          this._text = text
        }
        ComplexCustomOverlay.prototype = new BMap.Overlay()
        ComplexCustomOverlay.prototype.initialize = function (map) {
          this._map = map
          var div = this._div = document.createElement('div')
          div.classList.add('hint')
          div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat)
          div.style.MozUserSelect = 'none'
          div.appendChild(document.createTextNode(this._text))
          var arrow = this._arrow = document.createElement('div')
          div.appendChild(arrow)
          bdmap.getPanes().labelPane.appendChild(div)
          return div
        }
        ComplexCustomOverlay.prototype.draw = function () {
          var map = this._map
          var pixel = map.pointToOverlayPixel(this._point)
          this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + 'px'
          this._div.style.top = pixel.y - 30 + 'px'
        }
        for (var i = 0; i < self.mapList.length; i++) {
          var area = self.mapList[i]
          console.log(area)
          var myCompOverlay = new ComplexCustomOverlay(new BMap.Point(area.log, area.lat), area.area)
          bdmap.addOverlay(myCompOverlay)
        }
      }
    }
  }
</script>

<style>
  #bdMap{
    width: 100%;
    height: 100%;
    background-color: #25ff6b;
  }
</style>
