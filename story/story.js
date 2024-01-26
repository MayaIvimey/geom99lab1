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
    [{ lat: 44.223620329676336, lng: -76.4992960158313 },
      "Location 21","timhortonsresize.png"],
    [{ lat: 44.22535274880164, lng: -76.49863267430514 },
      "The Lazy Scholar","timhortonsresize.png"],
    [{lat: 44.2280878986305, lng: -76.4978285248609},  
     "Starbucks","timhortonsresize.png"],
    [{lat: 44.2281801650096, lng: -76.4942129018176},  
     "Starbucks","timhortonsresize.png"],
    [{lat: 44.2282385680397, lng: -76.4959873678649},  
     "The Library Café","timhortonsresize.png"],
    [{lat: 44.2259466138417, lng: -76.4913101029787},  
     "Tim Hortons","timhortonsresize.png"],
    [{lat: 44.2243446625935, lng: -76.4913958693823},  
     "Wallys","timhortonsresize.png"],
    [{lat: 44.2279835998832, lng: -76.4927966741805},  
     "The Tea Room","timhortonsresize.png"],
    [{lat: 44.2290665290748, lng: -76.4948757211298},  
     "Tim Hortons","timhortonsresize.png"],
    [{lat: 44.2290280899587, lng: -76.494854934011},  
     "Common Ground","timhortonsresize.png"]
  ];

  const infoWindow = new google.maps.InfoWindow();
  locations.forEach(([position, title, icon], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      icon,
      title: `${title}`, 
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
