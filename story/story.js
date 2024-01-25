function initMap() {
  var myLatlng = new google.maps.LatLng(44.226000090936395, -76.49499549568613);
  var mapOptions = {
  zoom: 16,
  center: myLatlng,
  };
  const map = new google.maps.Map(document.getElementById('map'),
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

  
  const locations = [
    [{ lat: 44.224455413902966, lng: -76.51526780630265},
      "Jean Royce"],
    [{ lat: 44.224407319071936, lng: -76.50071114448876},
      "Leonard Hall"],
    [{ lat: 44.22466084361948, lng: -76.49622990388815 },
      "Ban Righ Hall"],
    [{ lat: 44.223620329676336, lng: -76.4992960158313 },
      "Location 21"],
    [{ lat: 44.22535274880164, lng: -76.49863267430514 },
      "The Lazy Scholar"],
  ];
  const infoWindow = new google.maps.InfoWindow();
  locations.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${title}`,
      label: `${i}`,
      optimized: false,
    });
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });

}
window.initMap = initMap;
