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
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      location,
      map,
      title: {title},
      content: pin.element,
    });
  });
 
}
  const locations = [
    {
      position: { lat: 44.224455413902966, lng: -76.51526780630265},
      title: "Jean Royce",
    },
    {
      position: { lat: 44.224407319071936, lng: -76.50071114448876},
      title: "Leonard Hall",
    },
    {
      position: { lat: 44.22466084361948, lng: -76.49622990388815 },
      title: "Ban Righ Hall",
    },
    {
      position: { lat: 44.223620329676336, lng: -76.4992960158313 },
      title: "Location 21",
    },
    {
      position: { lat: 44.22535274880164, lng: -76.49863267430514 },
      title: "The Lazy Scholar",
    },
  ];


