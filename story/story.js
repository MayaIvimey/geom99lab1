function initMap() {

  
  var myLatlng = new google.maps.LatLng(44.226000090936395, -76.49499549568613);
  var mapOptions = {
  zoom: 16,
  center: myLatlng,
  };
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
/* styler takes off POIs, makes the map less busy and shows the Queens restaurants better. Code comes from https://developers.google.com/maps/documentation/javascript/style-reference
and https://stackoverflow.com/questions/3110020/google-maps-api-v3-no-labels*/
  var customStyled = [{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
    }];
  map.set('styles',customStyled);
new google.maps.Marker({
    position: {lat: 44.22901925950561, lng:-76.49484263870534},
    map,
    title: "Common Ground",
  });
 
}
  

