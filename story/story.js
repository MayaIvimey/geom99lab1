function initMap() {
  var myLatlng = new google.maps.LatLng(44.226000090936395, -76.49499549568613);
  var mapOptions = {
  zoom: 17,
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
      "Location 21","coffee.png"],
    [{ lat: 44.22535274880164, lng: -76.49863267430514 },
      "The Lazy Scholar","coffee.png"],
    [{lat: 44.2280878986305, lng: -76.4978285248609},  
     "Starbucks","starbucks.png"],
    [{lat: 44.2281801650096, lng: -76.4942129018176},  
     "Starbucks","starbucks.png"],
    [{lat: 44.2282385680397, lng: -76.4959873678649},  
     "The Library Café","coffee.png"],
    [{lat: 44.2259466138417, lng: -76.4913101029787},  
     "Tim Hortons","timhortonsresize.png"],
    [{lat: 44.2243446625935, lng: -76.4913958693823},  
     "Wallys","coffee.png"],
    [{lat: 44.2279835998832, lng: -76.4927966741805},  
     "The Tea Room","coffee.png"],
    [{lat: 44.2290665290748, lng: -76.4948757211298},  
     "Tim Hortons","timhortonsresize.png"],
    [{lat: 44.229001642132914, lng: -76.49481446298316},  
     "Common Ground","coffee.png"]
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
  const icons = {
    tims: {
      name: "Tim Hortons",
      icon: "timhortonsresize.png",
    },
    starbucks: {
      name: "Starbucks",
      icon: "starbucks.png",
    },
    other: {
      name: "Other",
      icon: "coffee.png",
    },
  };
  const legend = document.getElementById("legend");

  for (const key in icons) {
    const type = icons[key];
    const name = type.name;
    const icon = type.icon;
    const div = document.createElement("div");

    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
    }

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);


}


window.initMap = initMap;
