// initialize the map on the "map" div in "index.html" with a given center and zoom 
var map = L.map('map', {
  center: [35.65, 139.84],
  zoom: 11,
  // control options
  attributionControl: true,
  zoomControl: true,
  // interaction options 
  dragging: true,
});

// stack overflow - helps load map fully 
setTimeout(function () {
  window.dispatchEvent(new Event('resize'));
}, 1000);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([35.65, 139.84], {
  title: "Bowser Jr's Castle",
  opacity: 0.9,
}).addTo(map);

