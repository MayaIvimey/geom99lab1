function initMap() {
  var myLatlng = new google.maps.LatLng(44.226000090936395, -76.49499549568613);
var mapOptions = {
  zoom: 15,
  center: myLatlng,
  mapTypeId: 'terrain'
};
var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
}

window.initMap = initMap;

