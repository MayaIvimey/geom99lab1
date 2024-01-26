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
    [{lat: 44.2280878986305, lng: -76.4978285248609},  
     "Starbucks"],
    [{lat: 44.2281801650096, lng: -76.4942129018176},  
     "Starbucks"],
    [{lat: 44.2282385680397, lng: -76.4959873678649},  
     "The Library Café"],
    [{lat: 44.2259466138417, lng: -76.4913101029787},  
     "Tim Hortons"],
    [{lat: 44.2243446625935, lng: -76.4913958693823},  
     "Wallys"],
    [{lat: 44.2279835998832, lng: -76.4927966741805},  
     "The Tea Room"],
    [{lat: 44.2290838266688, lng: -76.4947503278646}, 
     "Booster juice"],
    [{lat: 44.2290566578373, lng: -76.4950444109745},  
     "Khao Pho Now"],
    [{lat: 44.2290939169296, lng: -76.4948173830867},  
     "Pita Pit"],
    [{lat: 44.2290665290748, lng: -76.4948757211298},  
     "Tim Hortons"],
    [{lat: 44.2290963193725, lng: -76.4948556045632},  
     "Zapias Flatbread Pizza"],
    [{lat: 44.2290280899587, lng: -76.494854934011},  
     "Common Ground"],
    [{lat: 44.2268050102339, lng: -76.4970993237055},  
     "Flipit"],
    [{lat: 44.2269764367783, lng: -76.4972396705885},  
     "Pita Pit"],
    [{lat: 44.2269741510944, lng: -76.4971391949791},  
     "Pizza Pizza"]

  ];

  const infoWindow = new google.maps.InfoWindow();
  locations.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${title}`,
      label: `${i + 1}`,
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
