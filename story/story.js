function initMap() {
  var myLatlng = new google.maps.LatLng(44.226000090936395, -76.49499549568613);
var mapOptions = {
  zoom: 15,
  center: myLatlng,
};
var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
var customStyled = [{
    featureType: "all",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }];
map.set('styles',customStyled);

}

window.initMap = initMap;

