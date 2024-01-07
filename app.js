//////// Leaflet initialization (map stand for id)
var map = L.map("map").setView([38.56290048688619, 68.74812838794165], 17) // 38.56290048688619 - Latitude. 68.74812838794165- Longitude. 13 - Zoom level
//////// Leaflet LAYER
var layer = L.tileLayer(
  "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
).addTo(map)
var layerContainer = layer.getContainer();
layerContainer.classList.add('layerContainer')

/////// Leaflet icon
var greenIcon = L.icon({
  iconUrl: "assets/icons/icon-location.svg",
  iconSize: [56, 78], // width and height of icon
})

////// Leaflet Marker
let marker = L.marker([38.56290048688619, 68.74812838794165], {
  icon: greenIcon,
}).addTo(map) // 38.56290048688619 - Latitude. 68.74812838794165- Longitude
